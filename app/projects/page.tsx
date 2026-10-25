import type { Metadata } from "next";
import { projects, type ArchiveProject } from "@/content/projects";

export const metadata: Metadata = {
  title: "projects"
};

function ProjectRow({ project }: { project: ArchiveProject }) {
  return (
    <li className="pa-row">
      <span className="pa-year">{project.year}</span>
      <div className="pa-main">
        <h3>{project.title}</h3>
        <p className="pa-summary">{project.summary}</p>
        {project.stack && <p className="pa-stack">{project.stack.join(" · ")}</p>}
      </div>
      <span className="pa-honor">{project.honor}</span>
      <p className="pa-links">
        {project.links.map((link) => (
          <a href={link.href} key={link.href} target="_blank" rel="noopener">
            {link.label} ↗
          </a>
        ))}
      </p>
    </li>
  );
}

export default function ProjectsPage() {
  return (
    <div className="shell page">
      <header className="page-head">
        <p className="eyebrow">04 · projects</p>
        <h1>
          things i&apos;ve <em>built</em>
        </h1>
        <p className="page-lede">an archive of projects, papers, and competition entries, newest first.</p>
      </header>

      <ol className="pa-rows">
        {projects.map((project) => (
          <ProjectRow project={project} key={project.title} />
        ))}
      </ol>
    </div>
  );
}
