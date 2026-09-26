export type Hobby = {
  title: string;
  body: string;
  stat?: string;
  image?: string;
  icon?: string;
  links?: { label: string; href: string }[];
  widget?: "lifts" | "piano" | "typing";
};

export const hobbies: Hobby[] = [
  {
    title: "lifting",
    stat: "245 · 365 · 405",
    body: "current numbers for bench, squat, and deadlift.",
    image: "/assets/collage/lift.jpg",
    widget: "lifts",
    links: [{ label: "@kz._lifts", href: "https://www.instagram.com/kz._lifts/" }]
  },
  {
    title: "piano",
    stat: "12+ years",
    body: "abrsm grade 8 in 2022, and three invitations to play at carnegie hall.",
    icon: "/assets/images/pixel-icons/piano.svg",
    widget: "piano"
  },
  {
    title: "food",
    stat: "sushi first",
    body: "sushi enthusiast who loves both fine dining and great street food finds.",
    image: "/assets/collage/sushi.jpg"
  },
  {
    title: "mystery fiction",
    stat: "open to recs",
    body: "i like analyzing clues and solving the story before the ending. always open to recs.",
    icon: "/assets/images/pixel-icons/book.svg"
  },
  {
    title: "soccer",
    stat: "varsity + pickup",
    body: "fast-paced games that keep me sharp, competitive, and active.",
    icon: "/assets/images/pixel-icons/soccer.svg"
  },
  {
    title: "typing",
    stat: "140+ wpm",
    body: "averaging 140+ wpm across typing platforms.",
    links: [
      { label: "typeracer", href: "https://data.typeracer.com/pit/profile?user=kz_lifts" },
      { label: "monkeytype", href: "https://monkeytype.com/profile/kevin_zhou33" },
      { label: "nitrotype", href: "https://www.nitrotype.com/racer/b7de03f665418cb0c16721c9bb38fdb5" }
    ],
    widget: "typing"
  }
];

export const lifts = [
  { name: "bench", pounds: 245 },
  { name: "squat", pounds: 365 },
  { name: "deadlift", pounds: 405 }
];

export const onRepeat = [
  { title: "pyro", artist: "kings of leon", spotify: "0R6gVg7psM35FMGiL62fVA" },
  { title: "saffron", artist: "mf doom", spotify: "2JrOYP9EYr9ENtR4gaL0j0" },
  { title: "beat laments the world", artist: "nujabes", spotify: "1QPYbH0nQemi72OyFjGpaT" }
];

export const reading = [
  { title: "beloved", author: "toni morrison", tone: "plum" },
  { title: "crime and punishment", author: "fyodor dostoevsky", tone: "oxblood" }
];

// Each fact is a fill-in-the-blank guess; `answer` must be one of `options`.
export type FunFact = { before: string; after: string; answer: string; options: string[] };

export const funFacts: FunFact[] = [
  { before: "finished a 1000-piece puzzle in", after: "straight hours.", answer: "6", options: ["3", "6", "11"] },
  { before: "i have", after: "chickens, and i helped build their coop.", answer: "8", options: ["3", "8", "15"] },
  { before: "ate a costco chicken bake in", after: "minutes flat.", answer: "2", options: ["2", "5", "9"] },
  { before: "did", after: "consecutive jump-rope reps.", answer: "1,258", options: ["312", "1,258", "3,000"] }
];
