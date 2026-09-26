"use client";

/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useRef, useState } from "react";
import { useAge } from "@/components/site/AgeTracker";
import { LIFESPAN_YEARS, lifeBar } from "@/lib/age";

const frames = [
  "/assets/collage/shanghai.jpg",
  "/assets/collage/kpot.jpg",
  "/assets/collage/festival.jpg",
  "/assets/collage/event.jpg",
  "/assets/collage/lift.jpg",
  "/assets/collage/china.jpg"
];

const FRAME_MS = 300;
const READY_AT = frames.length * FRAME_MS + 1100; // after the cuts and the name reveal
const name = "kevin zhou";

function useTimecode() {
  const [code, setCode] = useState("00:00:00");
  useEffect(() => {
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      const s = Math.floor(elapsed);
      const f = Math.floor((elapsed % 1) * 24);
      setCode(`00:${String(s).padStart(2, "0")}:${String(f).padStart(2, "0")}`);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);
  return code;
}

export function Intro() {
  const [phase, setPhase] = useState<"play" | "ready" | "leave" | "done">("play");
  const [cut, setCut] = useState(0);
  const enterRef = useRef<HTMLButtonElement>(null);
  const years = useAge();
  const timecode = useTimecode();

  const enter = useCallback(() => {
    setPhase((current) => (current === "play" || current === "ready" ? "leave" : current));
  }, []);

  useEffect(() => {
    if (document.documentElement.dataset.intro !== "play") {
      setPhase("done");
      return;
    }
    try {
      sessionStorage.setItem("intro-seen", "1");
    } catch {}

    const cuts = frames.map((_, index) => window.setTimeout(() => setCut(index), index * FRAME_MS));
    const ready = window.setTimeout(() => setPhase((current) => (current === "play" ? "ready" : current)), READY_AT);
    return () => {
      cuts.forEach(window.clearTimeout);
      window.clearTimeout(ready);
    };
  }, []);

  // Enter (or space) lets you in; it works before the prompt shows too, for people who've seen it.
  useEffect(() => {
    if (phase !== "play" && phase !== "ready") return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " " || event.key === "Escape") {
        event.preventDefault();
        enter();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, enter]);

  useEffect(() => {
    if (phase === "ready") enterRef.current?.focus({ preventScroll: true });
    if (phase !== "leave") return;
    const done = window.setTimeout(() => {
      setPhase("done");
      document.documentElement.dataset.intro = "done";
    }, 1300);
    return () => window.clearTimeout(done);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div className={`intro is-${phase}`} role="dialog" aria-modal="true" aria-label="Intro">
      <div className="intro-bar is-top" />
      <div className="intro-bar is-bottom" />

      <div className="intro-hud is-top">
        <span className="bracket">kz / reel 01</span>
        <span className="bracket">
          <span className="intro-rec" aria-hidden="true" /> {timecode}
        </span>
      </div>

      <div className="intro-frames" aria-hidden="true">
        {frames.map((src, index) => (
          <img src={src} alt="" key={src} className={index === cut ? "is-on" : ""} />
        ))}
      </div>

      <div className="intro-title">
        <p className="intro-name" aria-label={name}>
          {name.split("").map((char, index) => (
            <span key={index} style={{ "--i": index } as React.CSSProperties} aria-hidden="true">
              {char === " " ? " " : char}
            </span>
          ))}
        </p>
        <p className="intro-sub">
          <span className="bracket">learning</span>
          <span className="bracket">building</span>
          <span className="bracket">exploring</span>
        </p>
        <p className="intro-quote">life deepens when we wager comfort for wonder, fully awake.</p>
      </div>

      <div className="intro-hud is-bottom">
        <span className="bracket">age {years === null ? "--.-------" : years.toFixed(7)}</span>
        <span className="bracket intro-life">
          {lifeBar(years ?? 0, 24)} {years === null ? "--.--" : ((years / LIFESPAN_YEARS) * 100).toFixed(2)}%
        </span>
      </div>

      <button type="button" ref={enterRef} className="intro-enter" onClick={enter}>
        <span className="bracket">press enter</span>
      </button>

      <div className="intro-grain" aria-hidden="true" />
    </div>
  );
}
