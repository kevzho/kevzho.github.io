import { clsx } from "clsx";

export function PixelCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return <article className={clsx("pixel-card", className)}>{children}</article>;
}
