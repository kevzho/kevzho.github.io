import { clsx } from "clsx";
import type { ReactNode } from "react";

export function PixelWindow({ title, kicker, children, className }: { title: string; kicker?: string; children: ReactNode; className?: string }) {
  return (
    <section className={clsx("pixel-window", className)}>
      <div className="pixel-window__bar">
        <div className="pixel-window__lights" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p>{kicker ?? "window"}</p>
      </div>
      <div className="pixel-window__content">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
