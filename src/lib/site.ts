export const site = {
  name: "OG⌘ Commands",
  shortName: "OG Commands",
  tagline: "Your everyday actions. One command away.",
  description:
    "OG⌘ Commands is a native macOS productivity app. Select files in Finder, press ⌥Space, type a command like ..resize, and get copies — originals stay untouched.",
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
} as const;
