export type Link = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  status: "Shipped" | "Research" | "Award" | "Team" | "Build" | "Archive" | "Learning";
  image?: string;
  tags: string[];
  links: Link[];
  featured?: boolean;
  category: "product" | "research" | "learning" | "experiment";
  highlights: string[];
};

export type ResearchItem = {
  title: string;
  affiliation: string;
  period: string;
  summary: string;
  tags: string[];
  details: string[];
};

export type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  summary: string;
  details: string[];
};

export type Achievement = {
  label: string;
  value: string;
  detail: string;
};
