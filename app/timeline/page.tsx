import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { timeline, type TimelineEntry } from "@/content/timeline";

export const metadata: Metadata = {
  title: "timeline"
};

function groupByYear(entries: TimelineEntry[]) {
  const groups = new Map<string, TimelineEntry[]>();
  for (const entry of entries) {
    groups.set(entry.year, [...(groups.get(entry.year) ?? []), entry]);
  }
  return [...groups.entries()];
}

function EntryLinks({ entry }: { entry: TimelineEntry }) {
  if (!entry.links) return null;
  return (
    <p className="tl-links">
      {entry.links.map((link) => (
        <a href={link.href} key={link.href} target="_blank" rel="noopener">
          {link.label} ↗
        </a>
      ))}
    </p>
  );
}

function EntryBody({ entry }: { entry: TimelineEntry }) {
  return (
    <>
      <p className="tl-dates">
        {entry.dates}
        <span className={`tl-kind is-${entry.kind}`}>{entry.kind}</span>
      </p>
      <h3>
        {entry.title}
        {entry.org && <span className="tl-org"> · {entry.org}</span>}
      </h3>
      {entry.summary && <p className="tl-summary">{entry.summary}</p>}
    </>
  );
}

export default function TimelinePage() {
  return (
    <div className="shell page">
      <header className="page-head">
        <p className="eyebrow">02 · timeline</p>
        <h1>
          how i got <em>here</em>
        </h1>
        <p className="page-lede">
          life, research, and everything in between, newest first. filled dots are still going.{" "}
          <a href={siteConfig.resumePath} download>
            download resume ↓
          </a>
        </p>
      </header>

      <div className="timeline">
        {groupByYear(timeline).map(([year, entries]) => (
          <section className="tl-year" key={year} aria-label={year}>
            <h2 className="tl-year-label">{year}</h2>
            <ol className="tl-entries">
              {entries.map((entry) => (
                <li className={`tl-entry is-${entry.kind}${entry.current ? " is-current" : ""}`} key={`${entry.org}-${entry.title}`}>
                  {entry.details ? (
                    <details>
                      <summary>
                        <EntryBody entry={entry} />
                        <span className="tl-more">more</span>
                      </summary>
                      <ul className="tl-details">
                        {entry.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <EntryBody entry={entry} />
                  )}
                  <EntryLinks entry={entry} />
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
