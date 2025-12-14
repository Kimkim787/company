import { NextResponse } from "next/server";
import { getServerFirestore } from "@/lib/firebaseAdmin";
import type { Firestore } from "firebase-admin/firestore";

export const runtime = "nodejs";

type Payload = {
  first_name: string;
  last_name: string;
  email: string;
  subject?: string;
  message: string;
};

function validatePayload(payload: Partial<Payload>) {
  const first_name = payload.first_name?.trim();
  const last_name = payload.last_name?.trim();
  const email = payload.email?.trim();
  const subject = payload.subject?.trim();
  const message = payload.message?.trim();

  if (!first_name || !last_name || !email || !message) {
    return { ok: false as const, reason: "Missing required fields." };
  }

  const looksLikeEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  if (!looksLikeEmail) {
    return { ok: false as const, reason: "Invalid email address." };
  }

  return {
    ok: true as const,
    data: { first_name, last_name, email, subject, message }
  };
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Payload | null;

  const validation = validatePayload(body ?? {});
  if (!validation.ok) {
    return NextResponse.json({ error: validation.reason }, { status: 400 });
  }

  const { first_name, last_name, email, subject, message } = validation.data;
  const subjectFallback = subject || `New contact from ${first_name} ${last_name}`.trim();
  const createdAt = new Date().toISOString();

  let firestore: Firestore;
  try {
    firestore = getServerFirestore();
  } catch (error) {
    console.error("Failed to load Firebase Admin", error);
    return NextResponse.json(
      { error: "Server email service is not configured." },
      { status: 500 }
    );
  }

  const from = process.env.CONTACT_EMAIL_FROM;
  const templateId = process.env.SENDGRID_TEMPLATE_ID;
  const teamTemplateId = process.env.SENDGRID_TEAM_TEMPLATE_ID;
  const teamRecipients = (process.env.TEAM_RECIPIENTS || process.env.CONTACT_EMAIL_TO || "")
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);

  if (!from || !templateId) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  // ✅ Correct Firestore doc for SendGrid Dynamic Templates
  const clientDoc = {
    to: email,
    from,

    sendGrid: {
      templateId,
      dynamicTemplateData: {
        first_name,
        last_name,
        email,
        subject: subjectFallback,
        message,
      },
    },

    metadata: {
      createdAt,
      source: "website-contact",
      subject: subject || null,
      message,
    },
  };

  const writes: Promise<unknown>[] = [firestore.collection("mail").add(clientDoc)];

  if (teamTemplateId && teamRecipients.length) {
    const teamDoc = {
      to: teamRecipients.length === 1 ? teamRecipients[0] : teamRecipients,
      from,
      replyTo: email,
      sendGrid: {
        templateId: teamTemplateId,
        dynamicTemplateData: {
          first_name,
          last_name,
          email,
          subject: subjectFallback,
          message,
        },
      },
      metadata: {
        createdAt,
        source: "website-contact-team",
        subject: subject || null,
        message,
      },
    };

    writes.push(firestore.collection("mail").add(teamDoc));
  }

  await Promise.all(writes);
  return NextResponse.json({ ok: true });
}
