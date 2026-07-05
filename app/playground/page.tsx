import type { Metadata } from "next";
import { PixelTabs } from "@/components/pixel/PixelTabs";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Playground",
  description: "Small interactive pixel system playground."
};

export default function PlaygroundPage() {
  return (
    <>
      <PageHero eyebrow="playground" title={<>Pixel system test bench</>} badges={["client component", "microinteraction"]}>
        <p>A compact place to test client-side interface details without turning the portfolio itself into a toy.</p>
      </PageHero>
      <PixelTabs
        tabs={[
          { label: "principle", content: <p>Use pixel styling as interaction language: borders, rhythm, focus, and hierarchy.</p> },
          { label: "avoid", content: <p>Avoid arcade clutter, novelty sprites, rainbow glow, or anything that competes with the work.</p> },
          { label: "next", content: <p>Add small project filters or a writing index once there is enough content to justify it.</p> }
        ]}
      />
    </>
  );
}
