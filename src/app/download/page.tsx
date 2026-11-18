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
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
          macOS application
        </h1>
        <p className="mt-4 text-mist-300">
          {ready
            ? "Hosted macOS build is available below. Ad-hoc signed only — not Developer ID / not notarized. Windows is not released."
            : "Public downloads appear here only when a real hosted artifact is configured. Windows is not released."}
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <DownloadCTA />

        <div className="surface p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-white">Release details</h2>
          <dl className="mt-5 space-y-4 text-sm">
            <div className="flex justify-between gap-4 border-b border-white/5 pb-3">
              <dt className="text-mist-400">Version</dt>
              <dd className="text-white">{release.version} (build {release.build})</dd>
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

      <section className="surface mt-8 p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-white">Install from this release</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-mist-300">
          <li>Download the published .zip from this page.</li>
          <li>Unzip, then open the app (or move it to Applications).</li>
          <li>
            If Gatekeeper warns, right-click the app → <strong className="text-white">Open</strong>{" "}
            (ad-hoc signed builds are not notarized).
          </li>
          <li>
            Grant Finder Automation when asked (needed to read Finder selection). Optional:
            Accessibility for typed <code className="text-accent-soft">..</code> capture in Finder.
          </li>
          <li>
            Press <strong className="text-white">{site.macos.hotkey}</strong> to open the launcher.
          </li>
        </ol>
      </section>

      <section className="surface mt-6 p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-white">Build from source (optional)</h2>
        <p className="mt-3 text-sm text-mist-300">
          Prefer the hosted zip above for a normal install. Maintainers can still package locally from
          the private app repository:
        </p>
        <pre className="mt-4 overflow-x-auto rounded-xl bg-ink-950 p-4 font-mono text-[13px] text-mist-100">{`chmod +x scripts/package-app.sh
./scripts/package-app.sh debug
open "dist/OG Commands.app"`}</pre>
        <p className="mt-4 text-sm text-mist-400">
          The packaging script ad-hoc signs the bundle. It is{" "}
          <strong className="text-mist-200">not</strong> Developer ID signed or notarized unless those
          steps succeed and this page is updated.
        </p>
        {!ready ? (
          <p className="mt-3 text-sm text-mist-400">
            Maintainers: set <code className="text-accent-soft">content/releases/macos-latest.json</code>{" "}
            or <code className="text-accent-soft">NEXT_PUBLIC_MAC_DOWNLOAD_*</code> after uploading to
            GitHub Releases. See <code className="text-accent-soft">scripts/publish-macos-release.md</code>.
          </p>
        ) : null}
        <Link href="/docs/installation" className="mt-6 inline-flex text-sm text-accent-soft hover:underline">
          Full installation docs →
        </Link>
      </section>

      <section className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
        <h2 className="font-display text-lg font-semibold text-amber-100">Signing disclosure</h2>
        <p className="mt-2 text-sm leading-6 text-amber-100/80">
          Current status: <strong>{signingLabel(release.signingStatus)}</strong>. Gatekeeper may warn on
          first open for ad-hoc builds. We will not claim notarization or Developer ID signing on this
          site until those are verified for the published artifact.
        </p>
      </section>
    </div>
  );
}
