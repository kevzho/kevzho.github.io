"use client";

/* eslint-disable @next/next/no-img-element */
import { Newspaper } from "lucide-react";
import { useState } from "react";
import type { NowItem } from "@/content/now";

function Row({ item, active, onHover }: { item: NowItem; active: string | null; onHover: (id: string | null) => void }) {
  const state = active === null ? "" : active === item.id ? " is-active" : " is-dim";
  return (
    <li className={`now-row${state}`} id={`now-${item.id}`} onPointerEnter={() => onHover(item.id)} onPointerLeave={() => onHover(null)}>
      <span className="now-icon" aria-hidden="true">
        {!item.icon ? (
          <Newspaper />
        ) : item.icon.endsWith(".svg") ? (
          <span className="glyph" style={{ "--glyph": `url(${item.icon})` } as React.CSSProperties} />
        ) : (
          <img src={item.icon} alt="" />
        )}
      </span>
      <div className="now-main">
        {item.dates && <p className="now-dates">{item.dates}</p>}
        <h3>{item.title}</h3>
        <p>{item.body}</p>
        {item.links && (
          <div className="now-meta">
            {item.links?.map((link) => (
              <a href={link.href} key={link.href} target="_blank" rel="noopener">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

export function NowBoard({ items }: { items: NowItem[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <ol className="now-rows">
      {items.map((item) => (
        <Row item={item} active={active} onHover={setActive} key={item.id} />
      ))}
    </ol>
  );
}
