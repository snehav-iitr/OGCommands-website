export const site = {
  name: "OG⌘ Commands",
  shortName: "OG Commands",
  brand: "OG⌘",
  tagline: "Less clicking. More doing.",
  description:
    "Compress images, remove backgrounds, organize files, and more—without switching between apps. A native macOS command launcher for everyday file work.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  supportEmail: "support@ogcommands.app",
  githubReleasesEnv: "NEXT_PUBLIC_GITHUB_RELEASES_BASE",
  macos: {
    version: "0.1.0",
    build: "1",
    minSystem: "macOS 14 Sonoma",
    architectures: ["Apple silicon", "Intel (universal binary when packaged)"],
    bundleId: "com.og.commands.app",
    hotkey: "⌥Space",
    defaultOutput: "~/Downloads/OG Commands",
    signingStatus: "ad-hoc" as const,
  },
  pricing: {
    amount: 19,
    currency: "USD",
    currencySymbol: "$",
    label: "Founding license",
    model: "one-time" as const,
    /** Paid checkout is not integrated yet — keep download accessible. */
    purchaseAvailable: false,
    includes: [
      "All current OG⌘ commands on macOS",
      "Local file processing on your Mac",
      "The purchased macOS app version",
    ],
    excludes: [
      "Not a subscription",
      "Does not promise lifetime updates",
      "Does not include Windows",
    ],
  },
} as const;
