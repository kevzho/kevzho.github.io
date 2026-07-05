import { clsx } from "clsx";
import type { ReactNode } from "react";

export function PixelBadge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "green" | "teal" | "amber" | "rose" }) {
  return <span className={clsx("pixel-badge", `pixel-badge--${tone}`)}>{children}</span>;
}
