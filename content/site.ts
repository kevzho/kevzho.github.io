import type { Link } from "@/lib/types";

export const siteConfig = {
  name: "kevin zhou",
  handle: "kevzho",
  title: "kevin zhou",
  description: "High school data scientist exploring ML, AI, statistics",
  url: "https://kevzho.github.io",
  location: "Pennington, NJ",
  email: "kevinz09302009@gmail.com",
  resumePath: "/assets/resume/resume.pdf"
};

export const socialLinks: Link[] = [
  { label: "GitHub", href: "https://github.com/kevzho" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/k-zh0u/" },
  { label: "LeetCode", href: "https://leetcode.com/u/kevin_zhou33/" },
  { label: "Email", href: `mailto:${siteConfig.email}` }
];

export const navItems = [
  { label: "home", href: "/" },
  { label: "projects", href: "/projects" },
  { label: "research", href: "/research" },
  { label: "blog", href: "/blog" },
  { label: "cv", href: "/cv" },
  { label: "contact", href: "/contact" }
];
