import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/MDXContent";
import { getAllDocs, getDocBySlug, getDocSlugs } from "@/lib/docs";
import Link from "next/link";

export function generateStaticParams() {
  return getDocSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const doc = getDocBySlug(slug);
    return {
      title: doc.meta.title,
      description: doc.meta.description,
    };
  } catch {
    return {};
  }
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let doc;
  try {
    doc = getDocBySlug(slug);
  } catch {
    notFound();
  }

  const all = getAllDocs();
  const index = all.findIndex((d) => d.slug === slug);
  const prev = index > 0 ? all[index - 1] : null;
  const next = index >= 0 && index < all.length - 1 ? all[index + 1] : null;

  return (
    <article>
      <p className="eyebrow">{doc.meta.section}</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
        {doc.meta.title}
      </h1>
      {doc.meta.description ? (
        <p className="mt-4 text-lg text-mist-300">{doc.meta.description}</p>
      ) : null}
      <div className="mt-10">
        <MDXContent source={doc.content} />
      </div>
      <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
        {prev ? (
          <Link href={`/docs/${prev.slug}`} className="text-sm text-mist-300 hover:text-white">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/docs/${next.slug}`} className="text-sm text-mist-300 hover:text-white">
            {next.title} →
          </Link>
        ) : null}
      </div>
    </article>
  );
}
