import type { Metadata } from "next";
import { getLegacyPageHtml } from "@/lib/legacyPages";

export const metadata: Metadata = {
  title: "stemmed in"
};

export default function StemmedInPage() {
  return <div dangerouslySetInnerHTML={{ __html: getLegacyPageHtml("journal.md") }} />;
}
