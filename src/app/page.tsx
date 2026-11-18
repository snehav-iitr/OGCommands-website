import Image from "next/image";
import Link from "next/link";
import { CommandCard } from "@/components/CommandCard";
import { DownloadCTA } from "@/components/DownloadCTA";
import { commands } from "@/lib/commands";
import { site } from "@/lib/site";

const steps = [
  {
    title: "Select",
    body: "Pick images or files in Finder — or use the file picker if nothing is selected.",
  },
  {
    title: "Command",
    body: "Press ⌥Space, type a command like ..resize or ..removebg, then Return.",
  },
  {
    title: "Done",
    body: "Copies land in your output folder. Originals are never overwritten.",
  },
];

const benefits = [
  {
    title: "Native macOS",
    body: "Swift menu-bar app — not Electron. Fast launcher with ⌥Space.",
  },
  {
    title: "Copies only",
    body: "Image commands write new files. Safety rules stay consistent across commands.",
  },
  {
    title: "On-device privacy",
    body: "Processing stays local. ..removebg downloads a model only after you approve.",
  },
  {
    title: "Real settings",
    body: "Tune quality, formats, crop ratios, and more in Commands & Settings.",
  },
];

export default function HomePage() {
  const featured = commands.filter((c) => c.featured);

  return (
    <>
      <section className="relative overflow-hidden bg-hero-radial pb-20 pt-16 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:48px_48px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-fade-up">
            <p className="eyebrow">OG⌘ · Native macOS</p>
            <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              {site.tagline}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-mist-300 sm:text-lg">
              Select files in Finder. Open the launcher with <strong className="text-white">⌥Space</strong>.
              Type <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-accent-soft">..compress</code>,{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-accent-soft">..pdf</code>, or{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-accent-soft">..removebg</code>.
              Get results without leaving your flow.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/download" className="btn-primary">
                Download for macOS
              </Link>
              <Link href="/commands" className="btn-secondary">
                Browse commands
              </Link>
            </div>
            <p className="mt-4 text-xs text-mist-400">
              Requires {site.macos.minSystem}. Windows not released. No fake stats — just the product that ships.
            </p>
          </div>

          <div className="animate-fade-up relative" style={{ animationDelay: "120ms" }}>
            <div className="absolute -inset-6 rounded-[2rem] bg-accent/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-panel">
              <Image
                src="/screenshots/settings-library.jpg"
                alt="OG Commands Settings showing the command library"
                width={1400}
                height={900}
                className="h-auto w-full"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-2 hidden max-w-xs animate-float rounded-xl border border-white/10 bg-ink-850/95 p-4 shadow-panel sm:block">
              <p className="font-mono text-xs text-accent-soft">⌥Space → ..resize → Return</p>
              <p className="mt-1 text-sm text-mist-300">Launcher runs immediately using your saved settings.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Why OG⌘</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">
            Everyday file work, without the digression
          </h2>
          <p className="mt-4 text-mist-300">
            Built as a native Swift menu-bar app. Commands write copies to{" "}
            <code className="font-mono text-sm text-accent-soft">{site.macos.defaultOutput}</code>{" "}
            by default. Configure once in Settings, then run from the typing panel.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <div key={item.title} className="surface p-5">
              <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-mist-300">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/screenshots/settings-compress.jpg"
              alt="Compress settings in OG Commands"
              width={1400}
              height={900}
              className="h-auto w-full"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/screenshots/app-window.png"
              alt="OG Commands application window"
              width={1400}
              height={900}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Featured commands</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white">
              What you can run today
            </h2>
          </div>
          <Link href="/commands" className="text-sm text-accent-soft hover:underline">
            Full command library →
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((command) => (
            <CommandCard key={command.id} command={command} />
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <div className="surface overflow-hidden">
          <div className="border-b border-white/[0.06] px-6 py-8 sm:px-10">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white">
              Select → Command → Done
            </h2>
          </div>
          <div className="grid md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="border-white/[0.06] p-6 sm:p-8 md:border-r md:last:border-r-0"
              >
                <p className="font-mono text-sm text-accent-soft">0{index + 1}</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mist-300">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="surface p-6 sm:p-8">
            <p className="eyebrow">Privacy-first</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white">
              Your files stay on your Mac
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-mist-300">
              <li>Command execution is offline by default.</li>
              <li>
                <code className="font-mono text-accent-soft">..removebg</code> may download an ONNX
                model once — only after explicit permission — then runs fully on-device.
              </li>
              <li>No paid background-removal APIs. No invented analytics claims.</li>
              <li>Destructive duplicate cleanup asks before moving extras to Trash.</li>
            </ul>
            <Link href="/privacy" className="mt-6 inline-flex text-sm text-accent-soft hover:underline">
              Read the privacy policy →
            </Link>
          </div>
          <DownloadCTA />
        </div>
      </section>
    </>
  );
}
