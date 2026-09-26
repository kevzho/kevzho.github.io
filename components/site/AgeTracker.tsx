"use client";

import { useEffect, useState } from "react";
import { LIFESPAN_YEARS, ageInYears, lifeBar } from "@/lib/age";

// Ticks on the client only; the server renders a placeholder so hydration matches.
export function useAge() {
  const [years, setYears] = useState<number | null>(null);

  useEffect(() => {
    let frame = 0;
    let last = 0;
    const tick = (now: number) => {
      if (now - last > 50) {
        last = now;
        setYears(ageInYears(Date.now()));
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return years;
}

// Floating age bar, pinned to the bottom center of every page.
export function AgeDock() {
  const years = useAge();
  const percent = years === null ? null : (years / LIFESPAN_YEARS) * 100;

  return (
    <aside className="age-dock" aria-label="Age">
      <span className="bracket">age {years === null ? "--.-------" : years.toFixed(7)}</span>
      <span className="age-dock-bar" aria-hidden="true">
        {lifeBar(years ?? 0, 16)}
      </span>
      <span className="bracket">
        {percent === null ? "--.--" : percent.toFixed(2)}% of ~{LIFESPAN_YEARS}
      </span>
    </aside>
  );
}
