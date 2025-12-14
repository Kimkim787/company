"use client";

import { useState, type FormEvent } from "react";
import Container from "@/components/Container";

type FormState = {
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
};

function Input({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  required = false
}: {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  name: string;
  required?: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <div className="mb-2 font-sans text-[18px]">
        {label}
        {required ? " *" : ""}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-md border border-line bg-white px-4 py-3 text-[16px] outline-none focus:border-ink"
      />
    </label>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const updateField = (key: keyof FormState) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const body = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || body.ok !== true) {
        throw new Error(body.error || "Unable to send your message.");
      }

      setForm({ first_name: "", last_name: "", email: "", subject: "", message: "" });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  const isSubmitting = status === "loading";

  return (
    <Container className="py-14">
      <div className="text-muted uppercase tracking-widest text-sm">
        GET IN TOUCH
      </div>

      <h1 className="mt-6 font-serif text-[64px] leading-[1.05] sm:text-[76px]">
        Contact Us
      </h1>

      <p className="mt-6 text-muted text-[20px]">
        Have questions or want to discuss your project?
      </p>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Left column */}
        <div>
          <h2 className="font-serif text-[64px] leading-[1.05]">Let&apos;s Talk</h2>

          <p className="mt-6 max-w-sm text-muted text-[20px] leading-relaxed">
            Whether you have a specific project in mind or just want to explore
            possibilities, our team is here to help.
          </p>

          <div className="mt-12 space-y-8">
            <div>
              <div className="text-muted font-sans font-semibold tracking-widest">
                EMAIL
              </div>
              <div className="mt-2 text-[20px] text-muted">
                hello@devcommission.com
              </div>
            </div>

            <div>
              <div className="text-muted font-sans font-semibold tracking-widest">
                PHONE
              </div>
              <div className="mt-2 text-[20px] text-muted">+1 (555) 123-4567</div>
            </div>

            <div>
              <div className="text-muted font-sans font-semibold tracking-widest">
                OFFICE
              </div>
              <div className="mt-2 text-[20px] text-muted">
                123 Tech Street, Silicon Valley,
                <br />
                CA 94025
              </div>
            </div>
          </div>
        </div>

        {/* Right column form */}
        <form
          className="bg-panel p-8 md:p-10"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Input
              label="First Name"
              name="first_name"
              value={form.first_name}
              onChange={updateField("first_name")}
              required
            />
            <Input
              label="Last Name"
              name="last_name"
              value={form.last_name}
              onChange={updateField("last_name")}
              required
            />
          </div>

          <div className="mt-8">
            <Input
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={updateField("email")}
              required
            />
          </div>

          <div className="mt-8">
            <Input
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={updateField("subject")}
              placeholder="How can we help?"
            />
          </div>

          <div className="mt-8">
            <label className="block">
              <div className="mb-2 font-sans text-[18px]">Message *</div>
              <textarea
                name="message"
                required
                value={form.message}
                onChange={(event) => updateField("message")(event.target.value)}
                className="h-[220px] w-full resize-none rounded-md border border-line bg-white px-4 py-3 text-[16px] outline-none focus:border-ink"
                placeholder="Tell us about your project, timeline, and goals."
              />
            </label>
          </div>

          {status === "success" && (
            <div className="mt-6 rounded-md bg-green-50 px-4 py-3 text-green-700">
              Message sent! We&apos;ll get back to you shortly.
            </div>
          )}

          {status === "error" && (
            <div className="mt-6 rounded-md bg-red-50 px-4 py-3 text-red-700">
              {error || "Unable to send your message. Please try again."}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-10 w-full bg-[#1F1F1F] py-4 text-center text-[22px] font-semibold text-white disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </Container>
  );
}
