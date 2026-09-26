export const nowUpdated = "september 2026";

export type NowItem = {
  id: string;
  title: string;
  body: string;
  icon?: string; // favicon under /assets/favicons
  dates?: string; // former items only
  links?: { label: string; href: string }[];
};

export const nowItems: NowItem[] = [
  {
    id: "salt",
    title: "project lead @ salt lab, uiuc ischool",
    icon: "/assets/favicons/uiuc.png",
    body: "took over the project after a phd researcher handoff. analyzed 369k citation passages, found a 40-point swing in how they get labeled, and now testing how that shifts ai model rankings. currently authoring the preprint for submission to qss or jasist."
  },
  {
    id: "mit",
    title: "jepa group @ mit critical data",
    icon: "/assets/favicons/mit.png",
    body: "fused two cardiac foundation models (echo + ecg) on mimic-iv and debugged a 512+-frame mamba × jepa model. co-authored “loud or silent?”, a framework for finding how multimodal clinical ai fails when one modality goes missing. also in the social media + ai group, where i drafted preprints on social-media redesign and ai flourishing.",
    links: [{ label: "preprint", href: "https://arxiv.org/abs/2608.01462" }]
  },
  {
    id: "velvt",
    title: "velvt, co-founder & ceo",
    icon: "/assets/favicons/velvt.png",
    body: "a vector-embedding productivity platform. 50+ on the waitlist, accepted to microsoft for startups (~$200k azure credits + a 1:1 mentor) and nvidia inception.",
    links: [{ label: "getvelvt.com", href: "https://getvelvt.com/" }]
  },
  {
    id: "northstar",
    title: "northstar, a minorities in stem tool",
    icon: "/assets/favicons/northstar.png",
    body: "every student deserves a north star. a free opportunity-mapping tool for students without a college counselor: a 20-question assessment maps traits and interests, suggests three pathways (a steady fit, a stretch, and an unconventional pick), and ranks verified stem programs, scholarships, and competitions with transparent scoring.",
    links: [{ label: "northstar.study", href: "https://northstar.study/" }]
  },
  {
    id: "mis",
    title: "executive & technical director, minorities in stem",
    icon: "/assets/favicons/mis.png",
    body: "40+ chapters and 300+ volunteers, partnered with microsoft csr and first robotics. co-leading national programs that have reached 300k+ students, placed 400+ in project-based learning, run 5+ workshops and hackathons, and raised $3k+.",
    links: [{ label: "minoritiesinstem.org", href: "https://minoritiesinstem.org/" }]
  },
  {
    id: "archive",
    title: "an independent-learning archive",
    icon: "/assets/icons/github.svg",
    body: "physics, usaco, amc, usapho, ai/ml, statistics, and linear algebra, documenting what i'm teaching myself so the work doesn't disappear.",
    links: [{ label: "technical-self-study", href: "https://github.com/kevzho/technical-self-study" }]
  }
];

export const formerItems: NowItem[] = [
  {
    id: "umflint",
    title: "google-sponsored research assistant @ u michigan-flint",
    icon: "/assets/favicons/umflint.png",
    dates: "nov 2025 — sep 2026",
    body: "built two kotlin static analyses for divide-by-zero and index errors, annotated 1k+ benchmark cases, and ran experiments on 100+ scraped repositories. submitted our paper to ieee saner 2027 on sep 26, 2026."
  },
  {
    id: "nyas",
    title: "lead researcher @ nyas junior academy",
    icon: "/assets/favicons/nyas.png",
    dates: "spring & fall '26",
    body: "led a 6-person eeg/bci team on an ml pipeline that classifies motor imagery for prosthetic and fes control, mentored by a dartmouth phd. ieee bigdata hs submission + preprint."
  },
  {
    id: "plforecast",
    title: "plforecast",
    icon: "/assets/icons/github.svg",
    body: "an open-source premier league monte carlo engine. 1.5k+ people and 25k+ views, and a graduate researcher abroad adapted the model for their own work.",
    links: [
      { label: "live app", href: "https://plforecast.streamlit.app/" },
      { label: "code", href: "https://github.com/kevzho/plforecast" }
    ]
  }
];
