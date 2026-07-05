"use client";

import { useState } from "react";
import { clsx } from "clsx";

export function PixelTabs({ tabs }: { tabs: { label: string; content: React.ReactNode }[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="pixel-tabs">
      <div className="pixel-tabs__list" role="tablist" aria-label="Tabbed content">
        {tabs.map((tab, index) => (
          <button
            className={clsx("pixel-tabs__tab", active === index && "is-active")}
            id={`tab-${index}`}
            key={tab.label}
            onClick={() => setActive(index)}
            role="tab"
            type="button"
            aria-selected={active === index}
            aria-controls={`tabpanel-${index}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="pixel-tabs__panel" id={`tabpanel-${active}`} role="tabpanel" aria-labelledby={`tab-${active}`}>
        {tabs[active]?.content}
      </div>
    </div>
  );
}
