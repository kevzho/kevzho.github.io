import type { Metadata } from "next";
import { FactQuiz } from "@/components/hobbies/FactQuiz";
import { HobbyBoard } from "@/components/hobbies/HobbyBoard";
import { reading } from "@/content/hobbies";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "hobbies"
};

export default function HobbiesPage() {
  return (
    <div className="shell page">
      <header className="page-head">
        <p className="eyebrow">03 · hobbies</p>
        <h1>
          off the <em>clock</em>
        </h1>
        <p className="page-lede">outside of research and school, this is where my energy goes. it&apos;s a bulletin board: drag the cards around, and poke at them, some do things.</p>
      </header>

      <HobbyBoard />

      <section className="reading" aria-labelledby="reading-heading">
        <div className="reading-copy">
          <h2 className="eyebrow" id="reading-heading">
            what i&apos;m reading
          </h2>
          <p>
            two at once right now. recommendations welcome, mystery or otherwise:{" "}
            <a href={`mailto:${siteConfig.email}?subject=book%20rec`}>send me one</a>.
          </p>
        </div>
        <div className="shelf">
          {reading.map((book) => (
            <article className={`book is-${book.tone}`} key={book.title} tabIndex={0}>
              <span className="book-status">now reading</span>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="facts" aria-labelledby="facts-heading">
        <h2 className="eyebrow" id="facts-heading">
          fun facts
        </h2>
        <FactQuiz />
      </section>
    </div>
  );
}
