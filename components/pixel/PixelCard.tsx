import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import { ArrowRight } from "lucide-react";
import { PixelBadge } from "./PixelBadge";
import type { Project } from "@/lib/types";

const toneByStatus: Record<Project["status"], "green" | "teal" | "amber" | "neutral"> = {
  Shipped: "green",
  Research: "teal",
  Award: "amber",
  Team: "teal",
  Build: "neutral",
  Archive: "green",
  Learning: "teal"
};

export function PixelCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return <article className={clsx("pixel-card", className)}>{children}</article>;
}

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className="pixel-card project-card">
      {project.image ? (
        <Link className="project-card__media" href={`/projects/${project.slug}`} aria-label={`Open ${project.title}`}>
          <Image src={project.image} alt="" width={900} height={520} priority={priority} />
        </Link>
      ) : null}
      <div className="project-card__body">
        <div className="project-card__meta">
          <PixelBadge tone={toneByStatus[project.status]}>{project.status}</PixelBadge>
          <span>{project.period}</span>
        </div>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.subtitle}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span className="pixel-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <Link className="inline-link" href={`/projects/${project.slug}`}>
          case notes <ArrowRight aria-hidden="true" size={15} />
        </Link>
      </div>
    </article>
  );
}
