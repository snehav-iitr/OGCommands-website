import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund policy for OG⌘ Commands founding licenses.",
};

export default function RefundPage() {
  return (
    <div className="container-page prose-docs py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="!mt-3 font-display text-4xl text-white">Refund Policy</h1>
      <p className="text-mist-400">Last updated: November 19, 2026</p>

      <h2>Status</h2>
      <p>
        Paid checkout for OG⌘ Commands is <strong>not available yet</strong>. This page describes the
        refund rules that will apply when founding-license purchases go live.
      </p>

      <h2>When purchases launch</h2>
      <ul>
        <li>
          The founding license is a <strong>one-time</strong> purchase for the macOS app (
          {site.pricing.currencySymbol}
          {site.pricing.amount}).
        </li>
        <li>It is not a subscription.</li>
        <li>
          If you purchase and the download or license delivery fails due to our error, contact{" "}
          <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> for a replacement or
          refund.
        </li>
        <li>
          Refund requests made within <strong>14 days</strong> of purchase, where the license has not
          been redeemed or the app has not been used beyond a brief evaluation, will be considered in
          good faith.
        </li>
        <li>
          We may decline refunds for chargebacks of convenience after extended use, or where abuse is
          evident.
        </li>
      </ul>

      <h2>Beta downloads</h2>
      <p>
        The current free beta download is provided without charge. There is nothing to refund for
        beta downloads. See{" "}
        <Link href="/download">Download</Link> for the live build and signing disclosure.
      </p>

      <h2>How to request a refund</h2>
      <p>
        Email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> with your order email,
        purchase date, and a short reason. We aim to reply within a few business days once checkout
        is live.
      </p>

      <h2>Related</h2>
      <ul>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/terms">Terms</Link>
        </li>
        <li>
          <Link href="/support">Support</Link>
        </li>
      </ul>
    </div>
  );
}
