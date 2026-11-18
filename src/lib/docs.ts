import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsDirectory = path.join(process.cwd(), "content/docs");

export interface DocMeta {
  slug: string;
  title: string;
  description?: string;
  order: number;
  section: string;
}

export interface DocNavSection {
  title: string;
  items: DocMeta[];
}

export function getDocSlugs(): string[] {
  if (!fs.existsSync(docsDirectory)) return [];
  return fs
    .readdirSync(docsDirectory)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getDocBySlug(slug: string) {
  const fullPath = path.join(docsDirectory, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    meta: {
      slug,
      title: String(data.title ?? slug),
      description: data.description ? String(data.description) : undefined,
      order: Number(data.order ?? 99),
      section: String(data.section ?? "Guides"),
    } satisfies DocMeta,
    content,
  };
}

export function getAllDocs(): DocMeta[] {
  return getDocSlugs()
    .map((slug) => getDocBySlug(slug).meta)
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export function getDocsNav(): DocNavSection[] {
  const docs = getAllDocs();
  const map = new Map<string, DocMeta[]>();
  for (const doc of docs) {
    const list = map.get(doc.section) ?? [];
    list.push(doc);
    map.set(doc.section, list);
  }
  const sectionOrder = ["Start here", "Using OG⌘", "Commands", "Help"];
  return [...map.entries()]
    .sort(([a], [b]) => {
      const ia = sectionOrder.indexOf(a);
      const ib = sectionOrder.indexOf(b);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    })
    .map(([title, items]) => ({ title, items }));
}
