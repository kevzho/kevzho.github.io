import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

export function getLegacyPageHtml(fileName: string) {
  const raw = fs.readFileSync(path.join(root, fileName), "utf8");
  const withoutFrontmatter = raw.replace(/^---[\s\S]*?---\s*/, "");

  return withoutFrontmatter
    .replace(/\{\{\s*'([^']+)'\s*\|\s*relative_url\s*\}\}/g, "$1")
    .replace(/\{\{\s*"([^"]+)"\s*\|\s*relative_url\s*\}\}/g, "$1");
}
