import ProjectsPage, { metadata } from "../page";
import { learningRepos, projects } from "@/content/projects";

export { metadata };

export function generateStaticParams() {
  return [...projects, ...learningRepos].map((project) => ({ slug: project.slug }));
}

export default function ProjectSlugPage() {
  return <ProjectsPage />;
}
