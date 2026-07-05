import { PixelBadge } from "./PixelBadge";

export function PixelSectionHeader({ eyebrow, title, count }: { eyebrow: string; title: string; count?: string | number }) {
  return (
    <div className="section-header">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {count !== undefined ? <PixelBadge tone="neutral">{count}</PixelBadge> : null}
    </div>
  );
}
