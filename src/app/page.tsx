import Image from "next/image";
import Link from "next/link";
import { LauncherDemo } from "@/components/LauncherDemo";
import { PricingCard } from "@/components/PricingCard";
import { getMacRelease } from "@/lib/releases";
import { site } from "@/lib/site";

const steps = [
  {
    title: "Select files",
    body: "Highlight images or files in Finder.",
    visual: "/screenshots/settings-compress.jpg",
    alt: "OG⌘ compress settings",
  },
  {
    title: "Open OG⌘",
    body: `Press ${site.macos.hotkey} to open the launcher.`,
    visual: null,
    alt: "",
  },
  {
    title: "Run a command",
    body: "Type an alias like ..resize and press Return.",
    visual: "/screenshots/settings-library.jpg",
    alt: "OG⌘ command library",
  },
];

const categories = [
  {
    title: "Image Tools",
    body: "Compress, resize, crop, rotate, convert, and find duplicates.",
    examples: ["..compress", "..resize", "..crop"],
  },
  {
    title: "File Management",
    body: "Gather selected files into one folder without moving originals.",
    examples: ["..gather"],
  },
  {
    title: "PDFs",
    body: "Combine selected images into a single PDF.",
    examples: ["..pdf"],
  },
  {
    title: "Background Removal",
    body: "Remove backgrounds locally with an on-device model.",
    examples: ["..removebg"],
  },
];

export default function HomePage() {
  const release = getMacRelease();
  const downloadHref = release.downloadUrl ?? "/download";

  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-hero-wash pb-16 pt-14 sm:pb-24 sm:pt-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <p className="font-display text-4xl tracking-tight text-white sm:text-5xl">
              {site.brand}
            </p>
            <h1 className="mt-5 font-display text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {site.tagline}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-mist-300 sm:text-lg">
              Compress images, remove backgrounds, organize files, and more—without switching
              between apps.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={downloadHref} className="btn-primary">
                Download for Mac
              </a>
              <a href="#how-it-works" className="btn-secondary">
                See how it works
              </a>
            </div>
            <p className="mt-4 text-xs text-mist-400">
              Requires {site.macos.minSystem}. macOS only for now.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-5xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <LauncherDemo />
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-panel">
                <Image
                  src="/screenshots/settings-library.jpg"
                  alt="OG⌘ Commands Settings — command library"
                  width={1200}
                  height={700}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. How it works */}
      <section id="how-it-works" className="container-page scroll-mt-24 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="section-heading mt-3">Select files → Open OG⌘ → Run command</h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="animate-fade-up" style={{ animationDelay: `${index * 80}ms` }}>
              <p className="font-mono text-xs text-accent-soft">0{index + 1}</p>
              <h3 className="mt-3 font-display text-2xl text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-mist-300">{step.body}</p>
              <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-ink-850">
                {step.visual ? (
                  <Image
                    src={step.visual}
                    alt={step.alt}
                    width={800}
                    height={500}
                    className="h-auto w-full"
                  />
                ) : (
                  <div className="flex min-h-[160px] items-center justify-center px-6 py-10">
                    <div className="w-full max-w-xs rounded-xl border border-white/10 bg-ink-900 px-4 py-3">
                      <p className="font-mono text-sm text-white">
                        {site.macos.hotkey}
                        <span className="ml-2 text-mist-400">opens launcher</span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. What you can do */}
      <section className="border-y border-white/[0.06] bg-section-fade py-20 sm:py-24">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow">What you can do</p>
              <h2 className="section-heading mt-3">Useful work, one alias away</h2>
            </div>
            <Link href="/commands" className="text-sm text-accent-soft hover:underline">
              Full command library →
            </Link>
          </div>

          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {categories.map((category) => (
              <div key={category.title} className="border-t border-white/10 pt-6">
                <h3 className="font-display text-2xl text-white">{category.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mist-300">{category.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.examples.map((alias) => (
                    <code
                      key={alias}
                      className="rounded-md bg-white/[0.05] px-2 py-1 font-mono text-xs text-accent-soft"
                    >
                      {alias}
                    </code>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pricing */}
      <section className="container-page py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="section-heading mt-3">Simple founding price</h2>
          <p className="mt-4 text-mist-300">
            One-time purchase when checkout launches. Until then, the free beta download stays
            available.
          </p>
        </div>
        <div className="mt-12">
          <PricingCard />
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="container-page pb-24">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-850 px-6 py-12 text-center sm:px-12">
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Download OG⌘ for macOS
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-mist-300">
            Version {release.version}. Requires {site.macos.minSystem}. Ad-hoc signed beta—see
            Download for signing details.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={downloadHref} className="btn-primary">
              Download for Mac
            </a>
            <Link href="/docs/getting-started" className="btn-secondary">
              Getting started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
