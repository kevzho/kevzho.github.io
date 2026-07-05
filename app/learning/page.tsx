import type { Metadata } from "next";
import { getLegacyPageHtml } from "@/lib/legacyPages";

export const metadata: Metadata = {
  title: "learning"
};

export default function LearningPage() {
  return <div dangerouslySetInnerHTML={{ __html: getLegacyPageHtml("learning.md") }} />;
}
