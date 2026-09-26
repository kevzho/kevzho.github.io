"use client";

/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useRef, useState } from "react";

type Piece = {
  id: string;
  kind: "photo" | "note" | "stamp" | "sticker";
  x: number; // left, % of board width
  y: number; // top, % of board height
  w: number; // width, % of board width
  rotate: number;
  depth: number; // parallax strength
  src?: string;
  ratio?: number; // image width / height
  caption?: string;
  text?: string;
  tape?: boolean;
};

const pieces: Piece[] = [
  { id: "shanghai", kind: "photo", src: "/assets/collage/shanghai.jpg", ratio: 0.93, caption: "shanghai", x: 1, y: 2, w: 32, rotate: -6, depth: 0.6, tape: true },
  { id: "event", kind: "photo", src: "/assets/collage/event.jpg", ratio: 0.75, caption: "badged in", x: 36, y: 0, w: 25, rotate: 4, depth: 0.9 },
  { id: "festival", kind: "photo", src: "/assets/collage/festival.jpg", ratio: 0.75, caption: "festival fit", x: 69, y: 3, w: 26, rotate: 6, depth: 1.1, tape: true },
  { id: "work", kind: "photo", src: "/assets/collage/work.jpg", ratio: 1.08, caption: "locked in", x: 66, y: 31, w: 31, rotate: 7, depth: 0.5 },
  { id: "kpot", kind: "photo", src: "/assets/collage/kpot.jpg", ratio: 1.33, caption: "kpot night", x: 0, y: 46, w: 44, rotate: 3, depth: 0.8, tape: true },
  { id: "china", kind: "photo", src: "/assets/collage/china.jpg", ratio: 0.75, caption: "china", x: 31, y: 27, w: 29, rotate: -2, depth: 1.4, tape: true },
  { id: "friends", kind: "photo", src: "/assets/collage/friends.jpg", ratio: 1.78, caption: "the crew", x: 46, y: 56, w: 38, rotate: -4, depth: 0.7 },
  { id: "lift", kind: "photo", src: "/assets/collage/lift.jpg", ratio: 0.75, caption: "gym", x: 74, y: 62, w: 23, rotate: 8, depth: 1.2 },
  { id: "lifting", kind: "photo", src: "/assets/collage/lifting.jpg", ratio: 1.77, caption: "after hours", x: 3, y: 75, w: 36, rotate: -5, depth: 0.9 },
  { id: "physique", kind: "photo", src: "/assets/collage/physique.jpg", ratio: 1.78, caption: "progress pic", x: 40, y: 79, w: 35, rotate: 4, depth: 1.1, tape: true },
  { id: "note", kind: "note", text: "currently: project lead @ uiuc salt lab", x: 3, y: 33, w: 25, rotate: -4, depth: 1.6 },
  { id: "stamp", kind: "stamp", text: "pennington\nnew jersey", x: 57, y: 20, w: 16, rotate: 12, depth: 1.8 },
  { id: "sushi", kind: "sticker", src: "/assets/images/pixel-icons/sushi.svg", x: 38, y: 71, w: 8, rotate: -12, depth: 2 },
  { id: "piano", kind: "sticker", src: "/assets/images/pixel-icons/piano.svg", x: 88, y: 53, w: 8, rotate: 10, depth: 2.1 }
];

type Offset = { x: number; y: number };

const MIN_SCALE = 0.6;
const MAX_SCALE = 2.2;
const STEP = 0.2;
const clampScale = (value: number) => Math.round(Math.min(MAX_SCALE, Math.max(MIN_SCALE, value)) * 10) / 10;

export function Collage() {
  const boardRef = useRef<HTMLDivElement>(null);
  const zCounter = useRef(pieces.length);
  const [offsets, setOffsets] = useState<Record<string, Offset>>({});
  const [zIndex, setZIndex] = useState<Record<string, number>>({});
  const [scales, setScales] = useState<Record<string, number>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const drag = useRef<{ id: string; startX: number; startY: number; origin: Offset } | null>(null);

  // Pointer parallax: write -1..1 coordinates to CSS variables so pieces shift by depth.
  useEffect(() => {
    const board = boardRef.current;
    if (!board || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = board.getBoundingClientRect();
        const mx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const my = ((event.clientY - rect.top) / rect.height) * 2 - 1;
        board.style.setProperty("--mx", Math.max(-1.5, Math.min(1.5, mx)).toFixed(3));
        board.style.setProperty("--my", Math.max(-1.5, Math.min(1.5, my)).toFixed(3));
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  const bringToFront = useCallback((id: string) => {
    zCounter.current += 1;
    setZIndex((current) => ({ ...current, [id]: zCounter.current }));
  }, []);

  const resize = useCallback((id: string, delta: number) => {
    setScales((current) => ({ ...current, [id]: clampScale((current[id] ?? 1) + delta) }));
  }, []);

  // With a piece selected, "+" / "-" resize it and Escape deselects.
  useEffect(() => {
    if (!selected) return;
    const onKey = (event: KeyboardEvent) => {
      if ((event.target as HTMLElement).closest("input, textarea")) return;
      if (event.key === "+" || event.key === "=") resize(selected, STEP);
      else if (event.key === "-" || event.key === "_") resize(selected, -STEP);
      else if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, resize]);

  const onPointerDown = (id: string) => (event: React.PointerEvent<HTMLElement>) => {
    bringToFront(id);
    setSelected(id);
    // Leave touch for scrolling; dragging is a mouse/pen affordance.
    if (event.pointerType === "touch") return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { id, startX: event.clientX, startY: event.clientY, origin: offsets[id] ?? { x: 0, y: 0 } };
    event.currentTarget.dataset.dragging = "true";
  };

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const active = drag.current;
    if (!active) return;
    const next = {
      x: active.origin.x + event.clientX - active.startX,
      y: active.origin.y + event.clientY - active.startY
    };
    setOffsets((current) => ({ ...current, [active.id]: next }));
  };

  const onPointerUp = (event: React.PointerEvent<HTMLElement>) => {
    drag.current = null;
    delete event.currentTarget.dataset.dragging;
  };

  const isMessy = Object.keys(offsets).length > 0 || Object.keys(scales).length > 0;
  const selectedPiece = pieces.find((piece) => piece.id === selected);

  const tidy = () => {
    setOffsets({});
    setScales({});
    setSelected(null);
  };

  return (
    <div className="collage">
      <div className="collage-board" ref={boardRef} aria-label="a collage of photos of kevin" role="img">
        {pieces.map((piece, index) => {
          const offset = offsets[piece.id] ?? { x: 0, y: 0 };
          const style = {
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.w}%`,
            zIndex: zIndex[piece.id] ?? index + 1,
            "--rotate": `${piece.rotate}deg`,
            "--depth": piece.depth,
            "--dx": `${offset.x}px`,
            "--dy": `${offset.y}px`,
            "--scale": scales[piece.id] ?? 1,
            "--delay": `${index * 70}ms`
          } as React.CSSProperties;

          return (
            <figure
              className={`piece piece-${piece.kind}${piece.tape ? " has-tape" : ""}${selected === piece.id ? " is-selected" : ""}`}
              key={piece.id}
              style={style}
              onPointerDown={onPointerDown(piece.id)}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              onDoubleClick={() => setScales((current) => ({ ...current, [piece.id]: (current[piece.id] ?? 1) > 1.2 ? 1 : 1.8 }))}
            >
              <div className="piece-inner">
                {piece.kind === "photo" && (
                  <>
                    <div className="piece-img" style={{ aspectRatio: piece.ratio }}>
                      <img src={piece.src} alt="" draggable={false} loading={index > 5 ? "lazy" : "eager"} />
                    </div>
                    <figcaption>{piece.caption}</figcaption>
                  </>
                )}
                {piece.kind === "note" && <p>{piece.text}</p>}
                {piece.kind === "stamp" && <span>{piece.text}</span>}
                {piece.kind === "sticker" && <img src={piece.src} alt="" draggable={false} />}
              </div>
            </figure>
          );
        })}
      </div>
      <div className="collage-meta">
        {selectedPiece ? (
          <div className="collage-size" role="group" aria-label={`Resize ${selectedPiece.caption ?? selectedPiece.id}`}>
            <span className="collage-selected">{selectedPiece.caption ?? selectedPiece.id}</span>
            <button type="button" onClick={() => resize(selectedPiece.id, -STEP)} disabled={(scales[selectedPiece.id] ?? 1) <= MIN_SCALE} aria-label="Smaller">
              −
            </button>
            <span className="collage-scale">{Math.round((scales[selectedPiece.id] ?? 1) * 100)}%</span>
            <button type="button" onClick={() => resize(selectedPiece.id, STEP)} disabled={(scales[selectedPiece.id] ?? 1) >= MAX_SCALE} aria-label="Bigger">
              +
            </button>
          </div>
        ) : (
          <span className="collage-hint">drag, click to select, double-click to zoom</span>
        )}
        {isMessy && (
          <button type="button" onClick={tidy}>
            tidy up
          </button>
        )}
      </div>
    </div>
  );
}
