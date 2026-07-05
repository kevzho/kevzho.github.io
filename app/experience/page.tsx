import type { Metadata } from "next";
import { getLegacyPageHtml } from "@/lib/legacyPages";

export const metadata: Metadata = {
  title: "experience"
};

export default function ExperiencePage() {
  return <div dangerouslySetInnerHTML={{ __html: getLegacyPageHtml("experience.md") }} />;
}
