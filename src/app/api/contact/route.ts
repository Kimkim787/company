import { NextResponse } from "next/server";
import { getServerFirestore } from "@/lib/firebaseAdmin";
import type { Firestore } from "firebase-admin/firestore";

export const runtime = "nodejs";

type Payload = {
  first_name: string;
  last_name: string;
  email: string;
};

function validatePayload(payload: Partial<Payload>) {
  const first_name = payload.first_name?.trim();
  const last_name = payload.last_name?.trim();
  const email = payload.email?.trim();

  if (!first_name || !last_name || !email) {
    return { ok: false as const, reason: "Missing required fields." };
  }

  const looksLikeEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  if (!looksLikeEmail) {
    return { ok: false as const, reason: "Invalid email address." };
  }

  return { ok: true as const, data: { first_name, last_name, email } };
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Payload | null;

  const validation = validatePayload(body ?? {});
  if (!validation.ok) {
    return NextResponse.json({ error: validation.reason }, { status: 400 });
  }

  const { first_name, last_name, email } = validation.data;

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

  if (!from || !templateId) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  // ✅ Correct Firestore doc for SendGrid Dynamic Templates
  const doc = {
    to: email,
    from,

    sendGrid: {
      templateId,
      dynamicTemplateData: {
        first_name,
        last_name,
        email,
      },
    },

    metadata: {
      createdAt: new Date().toISOString(),
      source: "website-contact",
    },
  };

  await firestore.collection("mail").add(doc);
  return NextResponse.json({ ok: true });
}
