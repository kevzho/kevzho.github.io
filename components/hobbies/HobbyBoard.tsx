"use client";

/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import { LiftBars } from "@/components/hobbies/LiftBars";
import { OnRepeat } from "@/components/hobbies/OnRepeat";
import { PianoKeys } from "@/components/hobbies/PianoKeys";
import { TypingTest } from "@/components/hobbies/TypingTest";
import { hobbies, type Hobby } from "@/content/hobbies";

type Offset = { x: number; y: number };

const tilts = [-1.6, 1.2, -0.8, 1.8, -1.2, 0.9, -1.4];

const widgets: Record<NonNullable<Hobby["widget"]>, React.ReactNode> = {
  lifts: <LiftBars />,
  piano: <PianoKeys />,
  typing: <TypingTest />
};

// Anything you can click or type into keeps working; dragging starts from the rest of the card.
const INTERACTIVE = "a, button, input, textarea, iframe, .piano";

export function HobbyBoard() {
  const [offsets, setOffsets] = useState<Record<string, Offset>>({});
  const [order, setOrder] = useState<string[]>([]);
  const drag = useRef<{ id: string; startX: number; startY: number; origin: Offset } | null>(null);

  const cards = [
    ...hobbies.map((hobby) => ({ id: hobby.title, hobby })),
    { id: "on repeat", hobby: null }
  ];

  const onPointerDown = (id: string) => (event: React.PointerEvent<HTMLElement>) => {
    setOrder((current) => [...current.filter((item) => item !== id), id]);
    if (event.pointerType === "touch" || (event.target as HTMLElement).closest(INTERACTIVE)) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { id, startX: event.clientX, startY: event.clientY, origin: offsets[id] ?? { x: 0, y: 0 } };
    event.currentTarget.dataset.dragging = "true";
  };

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const active = drag.current;
    if (!active) return;
    setOffsets((current) => ({
      ...current,
      [active.id]: { x: active.origin.x + event.clientX - active.startX, y: active.origin.y + event.clientY - active.startY }
    }));
  };

  const onPointerUp = (event: React.PointerEvent<HTMLElement>) => {
    drag.current = null;
    delete event.currentTarget.dataset.dragging;
  };

  return (
    <div className="board">
      <div className="board-meta">
        <span className="bracket">drag the cards around</span>
        {Object.keys(offsets).length > 0 && (
          <button type="button" className="bracket" onClick={() => setOffsets({})}>
            tidy up
          </button>
        )}
      </div>
      <div className="hobby-board">
        {cards.map(({ id, hobby }, index) => {
          const offset = offsets[id] ?? { x: 0, y: 0 };
          const z = order.indexOf(id);
          const style = {
            "--tilt": `${tilts[index % tilts.length]}deg`,
            "--delay": `${index * 60}ms`,
            "--dx": `${offset.x}px`,
            "--dy": `${offset.y}px`,
            zIndex: z === -1 ? undefined : 10 + z
          } as React.CSSProperties;

          return (
            <article
              className={`hobby-card${hobby?.image ? " has-photo" : ""}${hobby ? "" : " is-playlist"}`}
              key={id}
              style={style}
              onPointerDown={onPointerDown(id)}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            >
              <span className="pin" aria-hidden="true" />
              {hobby ? (
                <>
                  {hobby.image && (
                    <div className="hobby-photo">
                      <img src={hobby.image} alt="" loading="lazy" draggable={false} />
                    </div>
                  )}
                  <div className="hobby-top">
                    <span className="hobby-stat">{hobby.stat}</span>
                    {hobby.icon && <img className="hobby-icon" src={hobby.icon} alt="" draggable={false} />}
                  </div>
                  <h2>{hobby.title}</h2>
                  <p>{hobby.body}</p>
                  {hobby.widget && widgets[hobby.widget]}
                  {hobby.links && (
                    <div className="hobby-links">
                      {hobby.links.map((link) => (
                        <a href={link.href} key={link.label} target="_blank" rel="noopener">
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <OnRepeat />
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
