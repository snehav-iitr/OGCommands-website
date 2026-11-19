import type { Metadata } from "next";
import Link from "next/link";
import { PricingCard } from "@/components/PricingCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: "OG⌘ Commands founding license — $19 one-time for macOS. Purchase coming soon.",
};

export default function PricingPage() {
  return (
    <div className="container-page py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Pricing</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-white sm:text-5xl">
          One price. One Mac app.
        </h1>
        <p className="mt-4 text-mist-300">
          {site.pricing.currencySymbol}
          {site.pricing.amount} founding license — one-time, not a subscription. Paid checkout is
          not integrated yet.
        </p>
      </div>

      <div className="mt-12">
        <PricingCard />
      </div>

      <div className="mx-auto mt-14 max-w-2xl space-y-6 text-sm leading-6 text-mist-300">
        <div className="border-t border-white/10 pt-6">
          <h2 className="font-display text-xl text-white">What you get</h2>
          <p className="mt-2">
            Access to the current OG⌘ Commands macOS app, including the commands that ship today and
            local processing on your machine.
          </p>
        </div>
        <div className="border-t border-white/10 pt-6">
          <h2 className="font-display text-xl text-white">What we are not promising</h2>
          <p className="mt-2">
            Lifetime updates, future AI features, or Windows. Those are not part of this license
            description.
          </p>
        </div>
        <div className="border-t border-white/10 pt-6">
          <h2 className="font-display text-xl text-white">Before you buy</h2>
          <p className="mt-2">
            Read the{" "}
            <Link href="/refund" className="text-accent-soft hover:underline">
              refund policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="text-accent-soft hover:underline">
              terms
            </Link>
            . Until checkout opens, use the free beta from the{" "}
            <Link href="/download" className="text-accent-soft hover:underline">
              Download
            </Link>{" "}
            page.
          </p>
        </div>
      </div>
    </div>
  );
}
