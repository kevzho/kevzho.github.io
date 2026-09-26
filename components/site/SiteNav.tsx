"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/now", label: "now" },
  { href: "/timeline", label: "timeline" },
  { href: "/hobbies", label: "hobbies" }
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="site-nav">
      <div className="shell site-nav-inner">
        <Link href="/" className="site-mark" aria-current={pathname === "/" ? "page" : undefined}>
          kevin zhou
        </Link>
        <nav aria-label="Primary">
          {links.map((link) => (
            <Link href={link.href} key={link.href} aria-current={pathname.startsWith(link.href) ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
