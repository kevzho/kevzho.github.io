"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/learning", label: "learning" },
  { href: "/experience", label: "experience" },
  { href: "/about", label: "about" }
];

export function LegacyNavbar() {
  const pathname = usePathname();

  return (
    <header className="site-nav" data-site-nav>
      <nav className="site-links" aria-label="Primary navigation">
        {links.map((link) => {
          const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

          return (
            <Link href={link.href} key={link.href} aria-current={isActive ? "page" : undefined}>
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
