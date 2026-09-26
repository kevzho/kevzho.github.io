import Link from "next/link";
import { Collage } from "@/components/site/Collage";
import { SocialIcons } from "@/components/site/SocialIcons";
import { hobbies } from "@/content/hobbies";
import { nowUpdated } from "@/content/now";
import { siteConfig } from "@/content/site";
import { timeline } from "@/content/timeline";

const sections = [
  {
    href: "/now",
    index: "01",
    title: "what i'm currently doing",
    preview: "research at uiuc + mit · velvt · northstar",
    meta: `updated ${nowUpdated}`
  },
  {
    href: "/timeline",
    index: "02",
    title: "timeline",
    preview: "life events, research, and everything in between.",
    meta: `${timeline.length} entries · 2023 → now`
  },
  {
    href: "/hobbies",
    index: "03",
    title: "hobbies",
    preview: hobbies.map((hobby) => hobby.title).join(" · "),
    meta: "off the clock"
  }
];

export default function HomePage() {
  return (
    <>
      <section className="shell hero">
        <div className="hero-copy">
          <p className="eyebrow hero-meta rise" style={{ "--delay": "0ms" } as React.CSSProperties}>
            <span className="bracket">{siteConfig.location.toLowerCase()}</span>
            <span className="bracket">class of 2027</span>
          </p>
          <h1 className="hero-title rise" style={{ "--delay": "80ms" } as React.CSSProperties}>
            hi, i&apos;m kevin. i&apos;m <em>learning</em>, building, and exploring.
          </h1>
          <div className="hero-bio rise" style={{ "--delay": "160ms" } as React.CSSProperties}>
            <p>
              i&apos;m a senior at hopewell valley central doing research in world models in clinical environments as well as
              quantitative scientometrics. i&apos;m also building a behavioral intelligence startup and running tech and
              co-leading minorities in stem.
            </p>
            <p>i&apos;m also a bodybuilder and a pianist of 12+ years. gonna be making content soon!</p>
            <dl className="hero-interests">
              <dt>interested in</dt>
              <dd>social computing, statistical ml, ai governance, clinical ai</dd>
              <dt>going deeper on</dt>
              <dd>reliable deep learning, compiler systems</dd>
            </dl>
          </div>
          <div className="rise" style={{ "--delay": "240ms" } as React.CSSProperties}>
            <SocialIcons withResume />
          </div>
        </div>
        <Collage />
      </section>

      <section className="shell index" aria-label="Sections">
        {sections.map((section) => (
          <Link href={section.href} className="index-row" key={section.href}>
            <span className="index-num">{section.index}</span>
            <span className="index-title">{section.title}</span>
            <span className="index-preview">{section.preview}</span>
            <span className="index-meta">{section.meta}</span>
            <span className="index-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}
