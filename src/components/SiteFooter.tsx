import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/commands", label: "Commands" },
      { href: "/download", label: "Download" },
      { href: "/changelog", label: "Changelog" },
    ],
  },
  {
    title: "Docs",
    links: [
      { href: "/docs", label: "Documentation" },
      { href: "/docs/installation", label: "Installation" },
      { href: "/docs/getting-started", label: "Getting started" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/support", label: "Support" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/[0.06] bg-ink-900/50">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/brand/OGLogo-White.png"
            alt={site.name}
            width={120}
            height={32}
            className="h-7 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm leading-6 text-mist-400">
            Native macOS commands for everyday file work. Local processing. Copies only.
            Windows is planned — not available yet.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-400">
              {col.title}
            </p>
            <ul className="mt-4 space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-mist-300 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-page flex flex-col gap-2 border-t border-white/[0.06] py-6 text-xs text-mist-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} OG⌘ Commands</p>
        <p>macOS {site.macos.version} · Ad-hoc signing until notarized builds ship</p>
      </div>
    </footer>
  );
}
