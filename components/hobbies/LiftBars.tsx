"use client";

import { useEffect, useRef, useState } from "react";
import { lifts } from "@/content/hobbies";

const max = Math.max(...lifts.map((lift) => lift.pounds));
const total = lifts.reduce((sum, lift) => sum + lift.pounds, 0);

// Bars fill and numbers count up the first time the card scrolls into view.
export function LiftBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 1100);
          setProgress(1 - Math.pow(1 - t, 3));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="lift-bars" ref={ref}>
      {lifts.map((lift) => (
        <div className="lift-row" key={lift.name}>
          <span>{lift.name}</span>
          <div className="lift-track">
            <div className="lift-fill" style={{ width: `${(lift.pounds / max) * 100 * progress}%` }} />
          </div>
          <span className="lift-num">{Math.round(lift.pounds * progress)}</span>
        </div>
      ))}
      <p className="lift-total">
        total <strong>{Math.round(total * progress).toLocaleString()}</strong> lb
      </p>
    </div>
  );
}
