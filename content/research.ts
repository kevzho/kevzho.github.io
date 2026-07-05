import type { Achievement, ExperienceItem, ResearchItem } from "@/lib/types";

export const researchItems: ResearchItem[] = [
  {
    title: "Restricted spatial memory research system",
    affiliation: "UIUC iSchool with Prof. Yun Huang",
    period: "Apr 2026-Present",
    summary: "First and lead student collaborator on a police-training spatial memory system that translates field workflows into a research prototype.",
    tags: ["HCI", "Spatial Memory", "Research Systems"],
    details: [
      "Collaborate with the iSchool research team on project direction, implementation priorities, and experiment-facing features.",
      "Help define user flow, spatial tasks, and data capture so the system can support controlled research iteration.",
      "Balance privacy, access restrictions, and realistic training needs while documenting technical choices."
    ]
  },
  {
    title: "Human-centered BCI signal stabilization",
    affiliation: "Junior Academy",
    period: "Feb 2026-Apr 2026",
    summary: "Developed an ensemble ML framework to stabilize BCI signals for smoother prosthetic control under Dartmouth PhD mentorship.",
    tags: ["BCI", "Ensemble ML", "Assistive AI"],
    details: [
      "Compared ensemble learning approaches for noisy BCI signal prediction.",
      "Studied model confidence, signal variability, and practical failure modes.",
      "Framed the project as both a machine-learning problem and an accessibility problem."
    ]
  },
  {
    title: "Kotlin compiler research",
    affiliation: "University of Michigan-Flint, Google-sponsored team",
    period: "Nov 2025-Present",
    summary: "Collaborating with Prof. Hua Ming, a Google SWE, and a graduate team on compiler research for scalable software.",
    tags: ["Compiler Systems", "Kotlin", "Static Analysis"],
    details: [
      "Read compiler and language tooling material to understand Kotlin representation and transformation.",
      "Support implementation work by testing ideas and reviewing technical behavior.",
      "Connect low-level tooling questions to research goals that need to scale beyond classroom prototypes."
    ]
  }
];

export const experienceItems: ExperienceItem[] = [
  {
    title: "Executive, Technical Director",
    organization: "Minorities in STEM",
    period: "Dec 2025-Present",
    summary: "Lead 200+ volunteers, support research mentorship programming, and build technical infrastructure for a growing nonprofit.",
    details: ["100k+ individuals impacted", "$3k+ raised", "Hackathons, events, and curriculum development"]
  },
  {
    title: "Vice President and President",
    organization: "Student Council",
    period: "Sep 2025-Present",
    summary: "Organize school-wide events, fundraising, food drives, pep rallies, and spirit weeks.",
    details: ["Raised $8k for homecoming", "Collected 300+ food-drive items", "Led event logistics and outreach"]
  },
  {
    title: "President",
    organization: "Mu Alpha Theta",
    period: "May 2025-Present",
    summary: "Lead 50+ members through math exploration, guest speakers, and topic-driven lessons.",
    details: ["Math enrichment", "Guest speaker programming", "Club leadership"]
  },
  {
    title: "Co-leader",
    organization: "Scholars United Initiative",
    period: "Sep 2024-Present",
    summary: "Support underserved students through volunteer work and fundraising.",
    details: ["Raised $1k", "300+ member volunteer hours this year", "90+ personal volunteer hours"]
  }
];

export const achievements: Achievement[] = [
  { label: "SAT", value: "1550", detail: "790 Math, 760 Reading" },
  { label: "GPA", value: "4.65 W", detail: "3.96/4.0 unweighted" },
  { label: "Programming", value: "USACO Silver", detail: "LeetCode top 10% contest rating" },
  { label: "Service", value: "Gold", detail: "Presidential Service Award 2025" }
];
