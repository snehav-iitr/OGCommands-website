import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Release notes for OG⌘ Commands.",
};

const entries = [
  {
    version: "0.1.0",
    date: "2026-11-18",
    items: [
      "Initial public documentation website.",
      "Commands: compress, resize, convert, crop, rotate, pdf, duplicate, gather, removebg.",
      "Launcher hotkey ⌥Space with immediate run from typed aliases.",
      "Offline ONNX background removal with permissioned model download + SHA-256 verify.",
      "Packaging via scripts/package-app.sh (ad-hoc signed).",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="container-page py-16">
      <p className="eyebrow">Changelog</p>
      <h1 className="mt-3 font-display text-4xl text-white">Release notes</h1>
      <p className="mt-4 max-w-2xl text-mist-300">
        Product version {site.macos.version}. Notes for builds that actually shipped.
      </p>

      <div className="mt-12 space-y-8">
        {entries.map((entry) => (
          <article key={entry.version} className="surface p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="font-display text-2xl font-semibold text-white">v{entry.version}</h2>
              <time className="text-sm text-mist-400">{entry.date}</time>
            </div>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-mist-300">
              {entry.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
