import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "kintsugi",
    title: "Kintsugi",
    subtitle: "CSV readiness app that reviews quality, leakage risk, missingness, outliers, and class balance before model work begins.",
    period: "Jun 2026",
    status: "Shipped",
    image: "/assets/images/kintsugi.png",
    tags: ["Next.js", "FastAPI", "ML QA"],
    links: [
      { label: "Live App", href: "https://thekintsugi.vercel.app/" },
      { label: "GitHub", href: "https://github.com/kevzho/kintsugi" }
    ],
    featured: true,
    category: "product",
    highlights: [
      "Surfaces dataset quality risks before model development starts.",
      "Frames data validation as a product workflow rather than a notebook-only checklist.",
      "Combines frontend explanation, backend analysis, and machine-learning evaluation heuristics."
    ]
  },
  {
    slug: "iu-indy-dataviz",
    title: "IU-Indy DataViz Competition",
    subtitle: "Second-place geospatial analysis of NCAA basketball fan travel patterns using Python.",
    period: "Mar 2026",
    status: "Award",
    image: "/assets/images/iu-indy.png",
    tags: ["Python", "Geo", "DataViz"],
    links: [{ label: "GitHub", href: "https://github.com/kevzho/iu-indy-2026" }],
    featured: true,
    category: "product",
    highlights: [
      "Built an analysis pipeline for travel-distance and fan-distribution questions.",
      "Translated a messy real-world dataset into a clear competition narrative.",
      "Placed second in the IU-Indy 2026 DataViz competition."
    ]
  },
  {
    slug: "junior-academy-bci",
    title: "Junior Academy BCI Research",
    subtitle: "Human-centered AI work developing an ensemble ML framework for stabilizing BCI signals.",
    period: "Feb 2026-Apr 2026",
    status: "Research",
    image: "/assets/images/mind.png",
    tags: ["AI", "BCI", "Research"],
    links: [{ label: "GitHub", href: "https://github.com/junior-academy" }],
    featured: true,
    category: "research",
    highlights: [
      "Studied signal variability and robustness for assistive brain-computer interface systems.",
      "Explored ensemble approaches for smoother prosthetic control signals.",
      "Worked under Dartmouth PhD mentorship with a human-centered AI framing."
    ]
  },
  {
    slug: "whl-2026",
    title: "WHL-2026",
    subtitle: "Collaborative research build tracking technical exploration and implementation progress.",
    period: "Feb-Mar 2026",
    status: "Team",
    image: "/assets/images/whl.jpg",
    tags: ["Research", "ML", "Collaboration"],
    links: [{ label: "GitHub", href: "https://github.com/Notorious-D-A-T-A/WHL-2026" }],
    featured: true,
    category: "research",
    highlights: [
      "Coordinated implementation work across a team research context.",
      "Documented technical choices and model exploration.",
      "Practiced translating broad research goals into scoped engineering tasks."
    ]
  },
  {
    slug: "multiforecast",
    title: "MultiForecast",
    subtitle: "Interactive sports forecasting dashboard for Premier League outcomes and World Cup predictions.",
    period: "Dec 2025-Feb 2026",
    status: "Shipped",
    image: "/assets/images/plforecast-cover.jpg",
    tags: ["Streamlit", "Forecasting", "World Cup"],
    links: [
      { label: "Live App", href: "https://plforecast.streamlit.app/" },
      { label: "Code", href: "https://github.com/kevzho/plforecast/blob/main/app.py" }
    ],
    featured: true,
    category: "product",
    highlights: [
      "Built an interactive forecasting interface around sports outcomes.",
      "Connected model outputs to user-facing exploration and explanation.",
      "Practiced calibration-oriented product thinking for prediction tools."
    ]
  },
  {
    slug: "veritas-ai",
    title: "Veritas AI",
    subtitle: "Applied ML experimentation exploring practical workflows and prototypes.",
    period: "Jul-Aug 2025",
    status: "Build",
    image: "/assets/images/veritas-cover.jpg",
    tags: ["Python", "ML", "Applied"],
    links: [{ label: "GitHub", href: "https://github.com/kevzho/VeritasAI" }],
    featured: true,
    category: "learning",
    highlights: [
      "Explored applied machine-learning workflows with Python.",
      "Built practical experiments around modeling, evaluation, and iteration.",
      "Used the project as a foundation for deeper ML study."
    ]
  },
  {
    slug: "ai-ml-learning-files",
    title: "AI/ML Learning Files",
    subtitle: "Chronological notebooks documenting a self-study journey in machine learning.",
    period: "Feb-Jul 2025",
    status: "Archive",
    image: "/assets/images/real-estate.jpg",
    tags: ["Keras", "CV", "Regression"],
    links: [{ label: "GitHub", href: "https://github.com/kevzho/ai-ml-learning-files" }],
    category: "learning",
    highlights: [
      "Collected notebooks across regression, classification, and computer vision.",
      "Documented learning progression instead of only showing polished endpoints.",
      "Preserved early modeling practice as a useful technical archive."
    ]
  }
];

export const miniExperiments = [
  "Credit Card Fraud Detection",
  "Twitter Sentiment Analysis",
  "Book Recommender",
  "Text Emotion Classifier"
].map((title) => ({
  title,
  href: "https://github.com/kevzho/MiniProjs"
}));

export const learningRepos: Project[] = [
  {
    slug: "project-euler-sols",
    title: "project-euler-sols",
    subtitle: "Project Euler and HackerRank-style problem solving notes and implementations.",
    period: "Apr 2026-Present",
    status: "Learning",
    image: "/assets/images/hackerrank.png",
    tags: ["Algorithms", "Math", "Practice"],
    links: [{ label: "GitHub", href: "https://github.com/kevzho/project-euler-sols" }],
    category: "learning",
    highlights: ["Algorithmic practice", "Math problem solving", "Readable implementation notes"]
  },
  {
    slug: "usaco",
    title: "USACO",
    subtitle: "Practice and solutions for algorithmic programming problems from training and contests.",
    period: "Aug 2025-Present",
    status: "Learning",
    image: "/assets/images/usaco.png",
    tags: ["Algorithms", "Data Structures", "C++", "Python"],
    links: [{ label: "GitHub", href: "https://github.com/kevzho/USACO" }],
    category: "learning",
    highlights: ["Contest programming", "Data structures", "USACO Silver practice"]
  },
  {
    slug: "r-for-data-science",
    title: "r-for-data-science",
    subtitle: "Notes and exercises following R for Data Science, focused on wrangling and visualization.",
    period: "Nov 2025-Present",
    status: "Learning",
    image: "/assets/images/r.png",
    tags: ["R", "Tidyverse", "Viz"],
    links: [{ label: "GitHub", href: "https://github.com/kevzho/r-for-data-science" }],
    category: "learning",
    highlights: ["Data wrangling", "Visualization", "Tidyverse practice"]
  }
];
