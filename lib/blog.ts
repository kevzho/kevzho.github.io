import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content/blog");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  external?: string;
  content: string;
};

type MarkdownBlock =
  | { type: "h1"; text: string; key: number }
  | { type: "h2"; text: string; key: number }
  | { type: "p"; text: string; key: number }
  | { type: "ul"; items: string[]; key: number };

export function getBlogPosts(): BlogPost[] {
  const files = fs.readdirSync(blogDirectory).filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(blogDirectory, file), "utf8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: String(data.title),
        description: String(data.description),
        date: String(data.date),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        external: data.external ? String(data.external) : undefined,
        content
      };
    })
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export function getBlogPost(slug: string) {
  return getBlogPosts().find((post) => post.slug === slug);
}

export function renderMarkdown(content: string): MarkdownBlock[] {
  const blocks = content.trim().split(/\n{2,}/);

  return blocks.map((block, index) => {
    if (block.startsWith("## ")) {
      return { type: "h2", text: block.replace(/^## /, ""), key: index };
    }

    if (block.startsWith("# ")) {
      return { type: "h1", text: block.replace(/^# /, ""), key: index };
    }

    if (block.startsWith("- ")) {
      return {
        type: "ul",
        items: block.split("\n").map((item) => item.replace(/^- /, "")),
        key: index
      };
    }

    return { type: "p", text: block, key: index };
  });
}
