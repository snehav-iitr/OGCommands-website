import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with OG⌘ Commands.",
};

export default function SupportPage() {
  return (
    <div className="container-page py-16">
      <p className="eyebrow">Support</p>
      <h1 className="mt-3 font-display text-4xl text-white">Contact & help</h1>
      <p className="mt-4 max-w-2xl text-mist-300">
        Start with the docs. If something still looks wrong, email us with your macOS version, app
        version ({site.macos.version}), and the command alias you ran.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/docs/troubleshooting" className="surface block p-6 transition hover:border-white/16">
          <h2 className="font-display text-xl text-white">Troubleshooting</h2>
          <p className="mt-2 text-sm text-mist-300">Fix launcher, permissions, and Gatekeeper issues.</p>
        </Link>
        <Link href="/docs/faq" className="surface block p-6 transition hover:border-white/16">
          <h2 className="font-display text-xl text-white">FAQ</h2>
          <p className="mt-2 text-sm text-mist-300">Short answers about privacy, Windows, and hotkeys.</p>
        </Link>
        <a
          href={`mailto:${site.supportEmail}`}
          className="surface block p-6 transition hover:border-white/16"
        >
          <h2 className="font-display text-xl text-white">Email</h2>
          <p className="mt-2 text-sm text-accent-soft">{site.supportEmail}</p>
        </a>
      </div>
    </div>
  );
}
