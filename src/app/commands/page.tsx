"use client";

import { useMemo, useState } from "react";
import { CommandCard } from "@/components/CommandCard";
import {
  categoryLabels,
  commands,
  type CommandCategory,
} from "@/lib/commands";

const filters: Array<"all" | CommandCategory> = [
  "all",
  "images",
  "files",
  "documents",
  "ai",
];

export default function CommandsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof filters)[number]>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return commands.filter((command) => {
      if (category !== "all" && command.category !== category) return false;
      if (!q) return true;
      return (
        command.name.toLowerCase().includes(q) ||
        command.alias.toLowerCase().includes(q) ||
        command.summary.toLowerCase().includes(q) ||
        command.id.includes(q)
      );
    });
  }, [query, category]);

  return (
    <div className="container-page py-16">
      <div className="max-w-2xl">
        <p className="eyebrow">Command library</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
          Every command that ships today
        </h1>
        <p className="mt-4 text-mist-300">
          Documented from the live macOS registry and shared contracts — not a wishlist.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative block w-full max-w-md">
          <span className="sr-only">Search commands</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search ..crop, PDF, gather…"
            className="w-full rounded-full border border-white/10 bg-ink-850 px-4 py-2.5 text-sm text-white outline-none ring-accent/40 placeholder:text-mist-400 focus:ring-2"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {filters.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setCategory(key)}
              className={
                category === key
                  ? "rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-white"
                  : "rounded-full border border-white/10 px-3 py-1.5 text-xs text-mist-300 hover:border-white/25"
              }
            >
              {key === "all" ? "All" : categoryLabels[key]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((command) => (
          <CommandCard key={command.id} command={command} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-mist-400">No commands match that search.</p>
      ) : null}
    </div>
  );
}
