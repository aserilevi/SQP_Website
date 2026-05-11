import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export interface MarkdownDoc {
  frontmatter: Record<string, unknown>;
  html: string;
  raw: string;
}

export function loadMarkdown(slug: string): MarkdownDoc | null {
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);

  // Strip HTML comments and frontmatter-adjacent meta blocks before rendering.
  const cleaned = content
    .replace(/<!--[\s\S]*?-->/g, "")
    .trim();

  const html = marked.parse(cleaned, { async: false }) as string;

  return {
    frontmatter: data,
    html,
    raw: cleaned,
  };
}
