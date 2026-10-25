export type ArchiveProject = {
  year: string;
  title: string;
  summary: string;
  honor?: string; // award, acceptance, or reach, shown as a tag
  stack?: string[];
  links: { label: string; href: string }[];
};

export const projects: ArchiveProject[] = [
  {
    year: "2026",
    title: "invariantguard",
    summary:
      "a local-first verifier for coding-agent patches in python. analyzes modeled runtime-failure paths, validates counterexamples, checks repository-specific contracts, and emits machine-readable evidence for repair loops.",
    honor: "alpha · research preview",
    stack: ["python", "typed ir", "z3", "docker", "mcp"],
    links: [{ label: "code", href: "https://github.com/kevzho/invariant-guard" }]
  },
  {
    year: "2026",
    title: "ariel",
    summary:
      "a rescue humanoid that learns to change the length of its own limbs mid-stride. a ppo layer on top of a frozen mocapact motion prior, trained on procedurally generated lunar obstacle courses.",
    honor: "hackphs 2026",
    stack: ["python", "ppo", "mujoco", "dm_control", "mocapact"],
    links: [
      { label: "code", href: "https://github.com/kevzho/ariel" },
      { label: "devpost", href: "https://devpost.com/software/ariel-i9o8cm" }
    ]
  },
  {
    year: "2026",
    title: "calibmi: auditing eeg foundation models",
    summary:
      "do pretrained eeg foundation models help on motor-imagery bci? compared labram and cbramod against three supervised baselines, with every tuning decision made on training-session data alone.",
    honor: "ieee bigdata hs · first author",
    stack: ["python", "eeg", "labram", "cbramod"],
    links: [{ label: "code", href: "https://github.com/kevzho/auditing-foundation-eeg" }]
  },
  {
    year: "2026",
    title: "distance & devotion",
    summary:
      "how far do ncaa women's basketball fans travel, and does it track attendance? maps attendance-weighted travel across teams, conferences, and hbcu status.",
    honor: "2nd place · iu indy dataviz games",
    stack: ["python", "geopandas", "matplotlib", "seaborn"],
    links: [{ label: "code", href: "https://github.com/kevzho/iu-indy-2026" }]
  },
  {
    year: "2026",
    title: "desperation, not tactics?",
    summary:
      "does intentional fouling in nba clutch situations actually help? 12,491 clutch fouls across five seasons, split by foul type, margin, and time left, with effect sizes in cohen's h.",
    honor: "asa data poster submission",
    stack: ["python", "pandas", "statistics"],
    links: [{ label: "code", href: "https://github.com/kevzho/asa-data-poster" }]
  },
  {
    year: "2025",
    title: "northstar",
    summary:
      "a free opportunity-mapping tool for students without a college counselor, built for minorities in stem. a 20-question assessment suggests three pathways and ranks verified stem programs, scholarships, and competitions with transparent scoring.",
    honor: "400+ students connected",
    links: [{ label: "northstar.study", href: "https://northstar.study/" }]
  },
  {
    year: "2025",
    title: "multiforecast",
    summary:
      "an open-source premier league monte carlo engine. elo, poisson, skellam, and dixon–coles models with walk-forward validation and probability calibration.",
    honor: "1,500+ users",
    stack: ["python", "streamlit", "monte carlo"],
    links: [
      { label: "live app", href: "https://multiforecast.streamlit.app/" },
      { label: "code", href: "https://github.com/kevzho/MultiForecast" }
    ]
  }
];
