import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for OG⌘ Commands and this website.",
};

export default function TermsPage() {
  return (
    <div className="container-page prose-docs py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="!mt-3 font-display text-4xl font-semibold text-white">Terms of Use</h1>
      <p className="text-mist-400">Last updated: November 19, 2026</p>

      <h2>Software</h2>
      <p>
        OG⌘ Commands is provided as-is for personal and professional productivity use. Pre-release and
        ad-hoc signed builds may be unstable. Review the Download page for signing status before
        deploying widely.
      </p>

      <h2>Purchases</h2>
      <p>
        When founding-license checkout is available, purchases are one-time for the macOS app described
        on the Pricing page. See the <a href="/refund">Refund Policy</a> for refund rules. We do not
        sell subscriptions on this site today.
      </p>

      <h2>Your responsibilities</h2>
      <ul>
        <li>Keep backups of important files.</li>
        <li>Understand that duplicate trash actions permanently stage files in Trash.</li>
        <li>Comply with third-party model licenses (for example Apache-2.0 U²-Net weights).</li>
      </ul>

      <h2>Website</h2>
      <p>
        Documentation aims to match the shipping macOS app. If docs and app diverge, the running app
        behavior wins — please report gaps via {site.supportEmail}.
      </p>

      <h2>No warranty</h2>
      <p>
        To the fullest extent permitted by law, the software and website are provided without warranties
        of merchantability or fitness for a particular purpose.
      </p>
    </div>
  );
}
