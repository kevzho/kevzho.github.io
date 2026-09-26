"use client";

import { useState } from "react";
import { funFacts } from "@/content/hobbies";

export function FactQuiz() {
  const [guesses, setGuesses] = useState<(string | null)[]>(() => funFacts.map(() => null));
  const answered = guesses.filter((guess) => guess !== null).length;
  const correct = guesses.filter((guess, index) => guess === funFacts[index].answer).length;

  const guess = (factIndex: number, option: string) => {
    setGuesses((current) => current.map((value, index) => (index === factIndex && value === null ? option : value)));
  };

  return (
    <div className="quiz">
      <ol className="quiz-list">
        {funFacts.map((fact, index) => {
          const picked = guesses[index];
          return (
            <li className={`quiz-item${picked !== null ? " is-revealed" : ""}`} key={fact.before}>
              <p className="quiz-fact">
                {fact.before} <span className="quiz-blank">{picked === null ? "___" : fact.answer}</span> {fact.after}
              </p>
              <div className="quiz-options" role="group" aria-label="Guess the number">
                {fact.options.map((option) => {
                  const state =
                    picked === null ? "" : option === fact.answer ? " is-answer" : option === picked ? " is-wrong" : " is-dim";
                  return (
                    <button type="button" key={option} className={`quiz-option${state}`} onClick={() => guess(index, option)} disabled={picked !== null}>
                      {option}
                    </button>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ol>
      <div className="quiz-score" role="status">
        {answered < funFacts.length ? (
          <span>guess the numbers · {answered}/{funFacts.length} answered</span>
        ) : (
          <>
            <span>
              you got <strong>{correct}/{funFacts.length}</strong>
              {correct === funFacts.length ? ". you might know me too well." : "."}
            </span>
            <button type="button" onClick={() => setGuesses(funFacts.map(() => null))}>
              play again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
