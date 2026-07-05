import type { Metadata } from "next";
import { getLegacyPageHtml } from "@/lib/legacyPages";

export const metadata: Metadata = {
  title: "projects"
};

export default function ProjectsPage() {
  return <div dangerouslySetInnerHTML={{ __html: getLegacyPageHtml("projects.md") }} />;
}
