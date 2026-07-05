import type { ReactNode } from "react";
import { PixelBadge } from "@/components/pixel/PixelBadge";

export function PageHero({ eyebrow, title, children, badges }: { eyebrow: string; title: ReactNode; children: ReactNode; badges?: string[] }) {
  return (
    <section className="page-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <div className="lead">{children}</div>
      {badges?.length ? (
        <div className="hero-badges">
          {badges.map((badge) => (
            <PixelBadge key={badge}>{badge}</PixelBadge>
          ))}
        </div>
      ) : null}
    </section>
  );
}
