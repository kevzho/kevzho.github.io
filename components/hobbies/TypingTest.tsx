"use client";

import { useRef, useState } from "react";

const target = "i like analyzing clues and trying to solve the story before the ending.";
const kevinWpm = 140;

export function TypingTest() {
  const [typed, setTyped] = useState("");
  const [wpm, setWpm] = useState<number | null>(null);
  const startedAt = useRef<number | null>(null);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (wpm !== null) return;
    const value = event.target.value.slice(0, target.length);
    startedAt.current ??= performance.now();
    setTyped(value);
    if (value === target) {
      const minutes = (performance.now() - startedAt.current) / 60000;
      setWpm(Math.round(target.length / 5 / minutes));
    }
  };

  const reset = () => {
    setTyped("");
    setWpm(null);
    startedAt.current = null;
  };

  return (
    <div className="typing">
      <p className="typing-target" aria-hidden="true">
        {target.split("").map((char, index) => {
          const state = index >= typed.length ? "" : typed[index] === char ? "is-ok" : "is-bad";
          return (
            <span className={`${state}${index === typed.length ? " is-caret" : ""}`} key={index}>
              {char}
            </span>
          );
        })}
      </p>
      {wpm === null ? (
        <input
          className="typing-input"
          value={typed}
          onChange={onChange}
          onPaste={(event) => event.preventDefault()}
          placeholder="type the sentence above"
          aria-label={`Typing test. Type: ${target}`}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
        />
      ) : (
        <div className="typing-result" role="status">
          <span>
            you: <strong>{wpm}</strong> wpm · me: <strong>{kevinWpm}+</strong>
            {wpm > kevinWpm ? " · okay, you win" : ""}
          </span>
          <button type="button" onClick={reset}>
            again
          </button>
        </div>
      )}
    </div>
  );
}
