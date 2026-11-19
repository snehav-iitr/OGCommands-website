import Link from "next/link";
import type { CommandDoc } from "@/lib/commands";
import { categoryLabels } from "@/lib/commands";

export function CommandCard({ command }: { command: CommandDoc }) {
  return (
    <Link
      href={`/commands/${command.id}`}
      className="surface group block p-5 transition hover:border-white/16 hover:bg-ink-800/80"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-mist-400">
            {categoryLabels[command.category]}
          </p>
          <h3 className="mt-2 font-display text-xl text-white group-hover:text-accent-soft">
            {command.name}
          </h3>
        </div>
        <code className="rounded-md bg-white/5 px-2 py-1 font-mono text-xs text-accent-soft">
          {command.alias}
        </code>
      </div>
      <p className="mt-3 text-sm leading-6 text-mist-300">{command.summary}</p>
    </Link>
  );
}
