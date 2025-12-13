"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-line">
      <Container className="py-8">
        <div className="flex items-center justify-between">
          <div className="font-sans font-semibold tracking-wide">LOGO</div>

          <nav className="flex items-center gap-10 text-[18px]">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative pb-2 text-ink"
                >
                  {item.label}
                  {active && (
                    <span className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-ink" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
}
