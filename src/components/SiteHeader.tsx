"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/commands", label: "Commands" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
  { href: "/download", label: "Download" },
];

function linkIsActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/brand/OGLogo-White.png"
            alt={site.name}
            width={120}
            height={32}
            className="h-7 w-auto"
            priority
          />
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {links.map((link) => {
            const active = linkIsActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "rounded-lg px-2.5 py-1.5 text-sm transition lg:px-3",
                  active
                    ? "bg-white/10 text-white"
                    : "text-mist-300 hover:bg-white/5 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/download" className="btn-primary">
            Download for Mac
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={clsx("block h-0.5 w-4 bg-white transition", open && "translate-y-2 rotate-45")} />
            <span className={clsx("block h-0.5 w-4 bg-white transition", open && "opacity-0")} />
            <span className={clsx("block h-0.5 w-4 bg-white transition", open && "-translate-y-2 -rotate-45")} />
          </div>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-white/10 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm text-mist-100 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/download" className="btn-primary mt-3" onClick={() => setOpen(false)}>
              Download for Mac
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
