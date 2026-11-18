import Link from "next/link";
import { getMacRelease, signingLabel } from "@/lib/releases";

export function DownloadCTA({ compact = false }: { compact?: boolean }) {
  const release = getMacRelease();
  const ready = Boolean(release.downloadUrl);

  if (compact) {
    return ready ? (
      <a href={release.downloadUrl!} className="btn-primary">
        Download for macOS
      </a>
    ) : (
      <Link href="/download" className="btn-secondary">
        Download status
      </Link>
    );
  }

  return (
    <div className="surface p-6 sm:p-8">
      <p className="eyebrow">macOS</p>
      <h3 className="mt-3 font-display text-2xl font-semibold text-white">
        Download OG⌘ Commands
      </h3>
      <p className="mt-2 text-sm text-mist-300">
        Version {release.version} · Requires {release.minSystem}
      </p>
      <p className="mt-2 text-xs text-mist-400">{signingLabel(release.signingStatus)}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {ready ? (
          <a href={release.downloadUrl!} className="btn-primary">
            Download {release.filename ?? `OG Commands ${release.version}`}
          </a>
        ) : (
          <span className="btn-disabled" aria-disabled="true" title="Public artifact not published yet">
            Download unavailable
          </span>
        )}
        <Link href="/docs/installation" className="btn-secondary">
          Installation guide
        </Link>
      </div>

      {!ready ? (
        <p className="mt-4 text-sm text-mist-400">
          A public macOS build is not hosted yet. Use the local packaging script from the repository,
          or check back when a GitHub Release is published. Windows is not available.
        </p>
      ) : null}
    </div>
  );
}
