"use client";

import { useRef, useState } from "react";

// One octave, C4 to C5. `key` is the computer-keyboard shortcut.
const notes = [
  { name: "C", key: "a", freq: 261.63 },
  { name: "C#", key: "w", freq: 277.18, black: true },
  { name: "D", key: "s", freq: 293.66 },
  { name: "D#", key: "e", freq: 311.13, black: true },
  { name: "E", key: "d", freq: 329.63 },
  { name: "F", key: "f", freq: 349.23 },
  { name: "F#", key: "t", freq: 369.99, black: true },
  { name: "G", key: "g", freq: 392.0 },
  { name: "G#", key: "y", freq: 415.3, black: true },
  { name: "A", key: "h", freq: 440.0 },
  { name: "A#", key: "u", freq: 466.16, black: true },
  { name: "B", key: "j", freq: 493.88 },
  { name: "C", key: "k", freq: 523.25 }
];

const whites = notes.filter((note) => !note.black);

export function PianoKeys() {
  const audio = useRef<AudioContext | null>(null);
  const [active, setActive] = useState<string | null>(null);

  const play = (key: string) => {
    const note = notes.find((n) => n.key === key);
    if (!note) return;
    audio.current ??= new AudioContext();
    const ctx = audio.current;
    const now = ctx.currentTime;

    // Two detuned partials with a fast attack and long decay read as a soft piano.
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.22, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
    gain.connect(ctx.destination);
    for (const [type, mult] of [["triangle", 1], ["sine", 2.001]] as const) {
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.frequency.value = note.freq * mult;
      osc.connect(gain);
      osc.start(now);
      osc.stop(now + 1.7);
    }

    setActive(key);
    window.setTimeout(() => setActive((current) => (current === key ? null : current)), 160);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.repeat || event.metaKey || event.ctrlKey) return;
    if (notes.some((n) => n.key === event.key.toLowerCase())) {
      event.preventDefault();
      play(event.key.toLowerCase());
    }
  };

  return (
    <div className="piano" tabIndex={0} onKeyDown={onKeyDown} aria-label="Playable piano. Focus it and press a through k to play.">
      <div className="piano-keys">
        {whites.map((note) => (
          <button
            type="button"
            className={`piano-white${active === note.key ? " is-down" : ""}`}
            key={note.key}
            onPointerDown={() => play(note.key)}
            aria-label={`${note.name} (${note.key})`}
            tabIndex={-1}
          >
            <span>{note.key}</span>
          </button>
        ))}
        {notes.map((note, index) => {
          if (!note.black) return null;
          const whitesBefore = notes.slice(0, index).filter((n) => !n.black).length;
          return (
            <button
              type="button"
              className={`piano-black${active === note.key ? " is-down" : ""}`}
              key={note.key}
              style={{ left: `calc(${(whitesBefore / whites.length) * 100}% - 3.5%)` }}
              onPointerDown={() => play(note.key)}
              aria-label={`${note.name} (${note.key})`}
              tabIndex={-1}
            />
          );
        })}
      </div>
      <p className="widget-hint">click the keys, or focus and press a → k</p>
    </div>
  );
}
