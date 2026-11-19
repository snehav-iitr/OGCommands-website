import Link from "next/link";
import { site } from "@/lib/site";
import { getMacRelease } from "@/lib/releases";

export function PricingCard({ showDownload = true }: { showDownload?: boolean }) {
  const { pricing } = site;
  const release = getMacRelease();
  const downloadReady = Boolean(release.downloadUrl);

  return (
    <div className="surface mx-auto w-full max-w-md p-7 sm:p-9">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">{pricing.label}</p>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
            {pricing.currencySymbol}
            {pricing.amount}
            <span className="ml-2 text-lg text-mist-400">one-time</span>
          </h2>
        </div>
        {!pricing.purchaseAvailable ? (
          <span className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-mist-300">
            Coming soon
          </span>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-6 text-mist-300">
        A single purchase for the current macOS OG⌘ Commands app. No subscription.
      </p>

      <ul className="mt-6 space-y-2.5 text-sm text-mist-200">
        {pricing.includes.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-soft" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-4 space-y-1.5 text-xs text-mist-400">
        {pricing.excludes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-3">
        {pricing.purchaseAvailable ? (
          <Link href="/download" className="btn-primary w-full">
            Purchase for Mac
          </Link>
        ) : (
          <span className="btn-disabled w-full" aria-disabled="true">
            Purchase unavailable
          </span>
        )}

        {showDownload ? (
          downloadReady ? (
            <a href={release.downloadUrl!} className="btn-secondary w-full">
              Download free beta for Mac
            </a>
          ) : (
            <Link href="/download" className="btn-secondary w-full">
              Check download status
            </Link>
          )
        ) : null}
      </div>

      <p className="mt-4 text-center text-xs text-mist-400">
        Paid checkout is not live yet.{" "}
        <Link href="/refund" className="text-mist-200 underline-offset-2 hover:underline">
          Refund policy
        </Link>
      </p>
    </div>
  );
}
