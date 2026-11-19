import type { Metadata } from "next";
import Link from "next/link";
import { DownloadCTA } from "@/components/DownloadCTA";
import { getMacRelease, signingLabel } from "@/lib/releases";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download",
  description: "Download OG⌘ Commands for macOS. Signing status and release details disclosed accurately.",
};

export default function DownloadPage() {
  const release = getMacRelease();
  const ready = Boolean(release.downloadUrl);

  return (
    <div className="container-page py-16">
      <div className="max-w-2xl">
        <p className="eyebrow">Download</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-white sm:text-5xl">
          OG⌘ for macOS
        </h1>
        <p className="mt-4 text-mist-300">
          {ready
            ? "Get the free beta build below. Signing details are disclosed honestly."
            : "A public download appears here when a hosted build is configured."}
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <DownloadCTA />

        <div className="surface p-6 sm:p-8">
          <h2 className="font-display text-2xl text-white">Release details</h2>
          <dl className="mt-5 space-y-4 text-sm">
            <div className="flex justify-between gap-4 border-b border-white/5 pb-3">
              <dt className="text-mist-400">Version</dt>
              <dd className="text-white">
                {release.version} (build {release.build})
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-white/5 pb-3">
              <dt className="text-mist-400">Released</dt>
              <dd className="text-white">{release.releasedAt ?? "Not published yet"}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-white/5 pb-3">
              <dt className="text-mist-400">Compatibility</dt>
              <dd className="text-right text-white">{release.minSystem}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-white/5 pb-3">
              <dt className="text-mist-400">Architecture</dt>
              <dd className="text-right text-white">{release.architectures.join(", ")}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-white/5 pb-3">
              <dt className="text-mist-400">Signing</dt>
              <dd className="text-right text-white">{signingLabel(release.signingStatus)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-mist-400">SHA-256</dt>
              <dd className="break-all text-right font-mono text-xs text-mist-200">
                {release.checksumSha256 ?? "Available when a release artifact is published"}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <section className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
        <h2 className="font-display text-lg text-amber-100">Signing disclosure</h2>
        <p className="mt-2 text-sm leading-6 text-amber-100/80">
          Current status: <strong>{signingLabel(release.signingStatus)}</strong>. Gatekeeper may warn
          on first open. Right-click the app → <strong>Open</strong>. We will not claim Developer ID
          signing or notarization until those are verified for the published artifact.
        </p>
      </section>

      <section className="surface mt-8 p-6 sm:p-8">
        <h2 className="font-display text-2xl text-white">Install in a few steps</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-mist-300">
          <li>Download the .zip from this page.</li>
          <li>Unzip, then open the app (or move it to Applications).</li>
          <li>
            If Gatekeeper warns, right-click the app → <strong className="text-white">Open</strong>.
          </li>
          <li>
            Grant Finder Automation when asked so OG⌘ can read your selection. Accessibility is
            optional for typed <code className="text-accent-soft">..</code> capture in Finder.
          </li>
          <li>
            Press <strong className="text-white">{site.macos.hotkey}</strong> to open the launcher.
          </li>
        </ol>
        <Link href="/docs/installation" className="mt-6 inline-flex text-sm text-accent-soft hover:underline">
          Full installation docs →
        </Link>
      </section>

      <p className="mt-8 text-sm text-mist-400">
        Looking for pricing? See the{" "}
        <Link href="/pricing" className="text-mist-200 hover:underline">
          founding license
        </Link>
        . Purchase checkout is not live yet.
      </p>
    </div>
  );
}
