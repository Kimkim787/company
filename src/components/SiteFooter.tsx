import Link from "next/link";
import Container from "./Container";

const services = [
  "Mobile Development",
  "Web Applications",
  "API Development",
  "Cloud & DevOps"
];

const company = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Hire Us", href: "/contact" }
];

export default function SiteFooter() {
  return (
    <footer className="bg-footer text-white">
      <Container className="pt-10 pb-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="font-serif text-2xl mb-3">DevCommission</div>
            <p className="text-white/70 leading-relaxed max-w-sm">
              Professional development services for modern businesses. From
              concept to deployment, we build software solutions that drive
              growth and innovation.
            </p>
          </div>

          <div>
            <div className="font-serif text-xl mb-4 tracking-wide">SERVICES</div>
            <ul className="space-y-2 text-white/80">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-serif text-xl mb-4 tracking-wide">COMPANY</div>
            <ul className="space-y-2 text-white/80">
              {company.map((c) => (
                <li key={c.href + c.label}>
                  <Link href={c.href} className="hover:text-white">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-white/50">
          © 2025 DevCommission. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
