import type { Metadata } from "next";
import { NowBoard } from "@/components/now/NowBoard";
import { formerItems, nowItems, nowUpdated } from "@/content/now";

export const metadata: Metadata = {
  title: "now"
};

export default function NowPage() {
  return (
    <div className="shell page">
      <header className="page-head">
        <p className="eyebrow">01 · now</p>
        <h1>
          what i&apos;m <em>currently</em> doing
        </h1>
        <p className="page-lede">a snapshot of where my time goes right now. last updated {nowUpdated}.</p>
      </header>

      <NowBoard items={nowItems} />

      <section className="now-former" aria-labelledby="former-heading">
        <h2 className="eyebrow" id="former-heading">
          former
        </h2>
        <NowBoard items={formerItems} />
      </section>
    </div>
  );
}
