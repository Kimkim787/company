import Container from "@/components/Container";
import Link from 'next/link'

export default function HomePage() {
  return (
    <Container className="py-16">
      <h1 className="font-serif text-[56px] leading-[1.05] sm:text-[76px] md:text-[92px]">
        Building Modern
        <br />
        Digital Solutions
      </h1>

      <p className="mt-10 max-w-xl text-muted text-[20px] leading-relaxed">
        We provide on-demand development services across web, mobile, and
        software systems. Clients can commission us to build apps, implement
        features, develop APIs, create dashboards, integrate services, fix bugs,
        and more—customized to their exact specifications.
      </p>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-[16px] font-medium bg-foreground text-background"
        >
          Book a quick call here
        </Link>

        {/* <Link
            href="/work"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-[16px] font-medium border border-foreground/20"
          >
            See recent work
          </Link> */}

        <span className="text-sm text-muted">
          Typical reply within 24 hours
        </span>
      </div>

      {/* Proof / focus */}
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 text-[15px] text-muted">
        <li>✅ AI & IOT integrated products</li>
        <li>✅ React / Next.js / Node / Postgres</li>
        <li>✅ Fixes, features, or full products</li>
        <li>✅ Scoped deliverables & clear estimates</li>
      </ul>

    </Container>
  );
}
