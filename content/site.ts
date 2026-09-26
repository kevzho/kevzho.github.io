import type { Link } from "@/lib/types";

export const siteConfig = {
  name: "kevin zhou",
  handle: "kevzho",
  title: "kevin zhou",
  description: "High school data scientist exploring ML, AI, statistics",
  url: "https://kevinzhou.dev",
  location: "Pennington, NJ",
  email: "kevinz09302009@gmail.com",
  resumePath: "/assets/resume/resume.pdf"
};

export type SocialLink = Link & { icon: string };

// `icon` is a monochrome glyph under /assets/icons (drawn as a mask), or "mail" for the line icon.
export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/kevzho", icon: "/assets/icons/github.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/k-zh0u/", icon: "/assets/icons/linkedin.svg" },
  { label: "LeetCode", href: "https://leetcode.com/u/kevin_zhou33/", icon: "/assets/icons/leetcode.svg" },
  { label: "Codeforces", href: "https://codeforces.com/profile/kevin_zhou33", icon: "/assets/icons/codeforces.svg" },
  { label: "Instagram", href: "https://www.instagram.com/kev.zhou09/", icon: "/assets/icons/instagram.svg" },
  { label: "Lifting Instagram", href: "https://www.instagram.com/kz._lifts/", icon: "/assets/icons/instagram.svg" },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: "mail" }
];

export const navItems = [
  { label: "now", href: "/now" },
  { label: "timeline", href: "/timeline" },
  { label: "hobbies", href: "/hobbies" }
];
