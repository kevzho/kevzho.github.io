import type { Metadata } from "next";
import { getLegacyPageHtml } from "@/lib/legacyPages";

export const metadata: Metadata = {
  title: "about"
};

export default function AboutPage() {
  return <div dangerouslySetInnerHTML={{ __html: getLegacyPageHtml("about.md") }} />;
}
