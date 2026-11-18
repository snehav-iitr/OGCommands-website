"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import type { DocNavSection } from "@/lib/docs";

export function DocsSidebar({ sections }: { sections: DocNavSection[] }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Documentation" className="space-y-8">
      {sections.map((section) => (
        <div key={section.title}>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-400">
            {section.title}
          </p>
          <ul className="mt-3 space-y-1">
            {section.items.map((item) => {
              const href = `/docs/${item.slug}`;
              const active = pathname === href;
              return (
                <li key={item.slug}>
                  <Link
                    href={href}
                    className={clsx(
                      "block rounded-lg px-3 py-2 text-sm transition",
                      active
                        ? "bg-accent/15 text-white"
                        : "text-mist-300 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
