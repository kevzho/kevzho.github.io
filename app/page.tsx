import { getLegacyPageHtml } from "@/lib/legacyPages";

export default function HomePage() {
  return <div dangerouslySetInnerHTML={{ __html: getLegacyPageHtml("index.md") }} />;
}
