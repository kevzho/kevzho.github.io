import type { Metadata } from "next";
import { PixelCard } from "@/components/pixel/PixelCard";
import { PixelSectionHeader } from "@/components/pixel/PixelSectionHeader";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Uses",
  description: "Tools and setup Kevin Zhou uses."
};

const uses = [
  { title: "Languages", body: "Python, R, Java, C++, TypeScript, and the occasional compiler rabbit hole." },
  { title: "ML stack", body: "TensorFlow/Keras, scikit-learn, pandas, NumPy, Jupyter, Streamlit, matplotlib, seaborn." },
  { title: "Build stack", body: "Next.js, FastAPI, Git, VS Code, GitHub Pages, Vercel, and small tools that stay understandable." }
];

export default function UsesPage() {
  return (
    <>
      <PageHero eyebrow="uses" title={<>Tools I reach for</>} badges={["editable", "seed content"]}>
        <p>A lightweight setup page seeded from the old resume skills section.</p>
      </PageHero>
      <section className="content-section">
        <PixelSectionHeader eyebrow="stack" title="Current kit" count={uses.length} />
        <div className="card-grid">
          {uses.map((item) => (
            <PixelCard key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </PixelCard>
          ))}
        </div>
      </section>
    </>
  );
}
