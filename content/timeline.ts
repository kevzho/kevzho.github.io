export type TimelineKind = "life" | "research" | "building" | "leadership" | "teaching" | "school";

export type TimelineEntry = {
  year: string;
  dates: string;
  title: string;
  org?: string;
  kind: TimelineKind;
  summary?: string;
  details?: string[];
  links?: { label: string; href: string }[];
  current?: boolean;
};

export const timeline: TimelineEntry[] = [
  {
    year: "2026",
    dates: "sep 2026",
    title: "dying of college applications",
    kind: "life",
    current: true
  },
  {
    year: "2026",
    dates: "sep 2026",
    title: "started my independent-learning archive",
    kind: "life",
    summary:
      "physics, usaco, amc, usapho, ai/ml, statistics, linear algebra. documenting the things i'm teaching myself instead of letting that work disappear.",
    links: [{ label: "technical-self-study", href: "https://github.com/kevzho/technical-self-study" }]
  },
  {
    year: "2026",
    dates: "summer 2026",
    title: "started deliberately studying beyond school",
    kind: "life",
    summary:
      "linear algebra, differential equations, ml, and statistics, then physics c and competition study. the shift from “classes determine what i learn” to “i determine what i learn.”"
  },
  {
    year: "2026",
    dates: "jun 2026 — now",
    title: "jepa group + social media & ai group",
    org: "mit critical data",
    kind: "research",
    current: true,
    summary: "fused two cardiac foundation models (echo + ecg) on mimic-iv and debugged a 512+-frame mamba × jepa model.",
    details: [
      "co-authored “loud or silent? a reusable framework for per-modality failure analysis in multimodal clinical ai.”",
      "drafted preprints on social-media redesign and ai flourishing."
    ],
    links: [{ label: "preprint", href: "https://arxiv.org/abs/2608.01462" }]
  },
  {
    year: "2026",
    dates: "apr/may 2026 — now",
    title: "co-founder & ceo",
    org: "velvt",
    kind: "building",
    current: true,
    summary: "vector-embedding productivity platform. 50+ waitlist; accepted to microsoft for startups (~$200k azure credits + 1:1 mentor) and nvidia inception.",
    links: [{ label: "getvelvt.com", href: "https://getvelvt.com/" }]
  },
  {
    year: "2026",
    dates: "apr 2026 — now",
    title: "project lead & researcher",
    org: "salt lab, uiuc ischool",
    kind: "research",
    current: true,
    summary: "nlp/hci + multimodal ai. took over the project after a phd researcher handoff; preprint in progress for qss or jasist.",
    details: [
      "analyzed 369k citation passages and found a 40-point swing in how they get labeled.",
      "testing how that labeling swing changes ai model rankings."
    ]
  },
  {
    year: "2026",
    dates: "feb — fall 2026",
    title: "lead researcher, 6-person eeg/bci team",
    org: "nyas junior academy",
    kind: "research",
    summary: "spring '26 and fall '26 cohorts. ml pipeline classifying eeg motor imagery for prosthetic and fes control, mentored by a dartmouth phd.",
    details: ["submitted to ieee bigdata hs, with a preprint."]
  },
  {
    year: "2026",
    dates: "2026",
    title: "plforecast crossed 1,000 users",
    kind: "life",
    summary: "my open-source premier league monte carlo engine. it's past 1.5k people and 25k+ views now.",
    links: [{ label: "live app", href: "https://plforecast.streamlit.app/" }]
  },
  {
    year: "2025",
    dates: "dec 2025 — now",
    title: "executive & technical director",
    org: "minorities in stem",
    kind: "leadership",
    current: true,
    summary: "40+ chapters, 300+ volunteers, microsoft csr + first robotics partner. 300k+ students reached, 400+ placed in project-based learning, $3k+ raised.",
    details: [
      "ran 5+ stem workshops and hackathons.",
      "northstar: a free opportunity-mapping tool that matches students without a college counselor to verified stem programs, scholarships, and competitions."
    ],
    links: [
      { label: "minoritiesinstem.org", href: "https://minoritiesinstem.org/" },
      { label: "northstar.study", href: "https://northstar.study/" }
    ]
  },
  {
    year: "2025",
    dates: "nov 2025 — sep 2026",
    title: "google-sponsored research assistant",
    org: "u michigan-flint",
    kind: "research",
    summary: "kotlin static analysis research with a google swe, prof. hua ming, and a graduate team. submitted to ieee saner 2027 on sep 26, 2026.",
    details: [
      "built two kotlin static analyses for divide-by-zero and index errors.",
      "annotated 1k+ benchmarking cases, and scraped and ran experiments on 100+ repositories."
    ]
  },
  {
    year: "2025",
    dates: "fall 2025",
    title: "another varsity soccer season",
    kind: "life"
  },
  {
    year: "2025",
    dates: "jul 2025",
    title: "visited family in changning, hunan after 6 years",
    kind: "life"
  },
  {
    year: "2025",
    dates: "may 2025 — now",
    title: "president",
    org: "mu alpha theta",
    kind: "leadership",
    current: true,
    summary: "leading 50+ members through guest speakers and lessons on the parts of math that don't show up in class."
  },
  {
    year: "2024",
    dates: "summer 2024",
    title: "paid camp counselor & stem instructor",
    org: "wula summer camp",
    kind: "teaching",
    summary: "taught math and scratch to 30+ students; the only student staff member selected to lead the technical curriculum."
  },
  {
    year: "2024",
    dates: "apr 2024",
    title: "got chickens",
    kind: "life",
    summary: "eight of them. i helped build the coop."
  },
  {
    year: "2023",
    dates: "sep 2023 — jun 2024",
    title: "volunteer teaching assistant",
    org: "local chinese school",
    kind: "teaching",
    summary: "helped chinese grandparents learn english: vocabulary, pronunciation, and a lot of patient conversation practice."
  },
  {
    year: "2023",
    dates: "2023 — 2027",
    title: "started high school",
    org: "hopewell valley central",
    kind: "school",
    current: true,
    summary: "mu alpha theta president, student council president, and sui president there."
  },
  {
    year: "2020",
    dates: "2020 — 2021",
    title: "touched scratch",
    kind: "life",
    summary: "found it cool; 350k+ views, 1.7k+ followers, 10 months of memories.",
    links: [{ label: "scratch.mit.edu/users/Ziyu3", href: "https://scratch.mit.edu/users/Ziyu3/" }]
  },
  {
    year: "2009",
    dates: "sep 30, 2009 · 12:29 am",
    title: "born.",
    kind: "life"
  }
];
