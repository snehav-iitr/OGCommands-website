import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryLabels, commands, getCommand } from "@/lib/commands";
import type { Metadata } from "next";

export function generateStaticParams() {
  return commands.map((command) => ({ id: command.id }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  return params.then(({ id }) => {
    const command = getCommand(id);
    if (!command) return {};
    return {
      title: `${command.name} (${command.alias})`,
      description: command.summary,
    };
  });
}

export default async function CommandDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const command = getCommand(id);
  if (!command) notFound();

  return (
    <div className="container-page py-16">
      <Link href="/commands" className="text-sm text-mist-400 hover:text-white">
        ← Command library
      </Link>

      <div className="mt-6 max-w-3xl">
        <p className="eyebrow">{categoryLabels[command.category]}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
          {command.name}
        </h1>
        <code className="mt-4 inline-block rounded-md bg-white/5 px-2.5 py-1 font-mono text-sm text-accent-soft">
          {command.alias}
        </code>
        <p className="mt-5 text-lg leading-8 text-mist-300">{command.summary}</p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <section className="surface p-6">
          <h2 className="font-display text-xl font-semibold text-white">How to run</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-mist-300">
            {command.example.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="surface p-6">
          <h2 className="font-display text-xl font-semibold text-white">Output</h2>
          <p className="mt-4 text-sm leading-6 text-mist-300">{command.output}</p>
          <p className="mt-3 text-xs text-mist-400">Status: available on macOS today</p>
        </section>

        <section className="surface p-6">
          <h2 className="font-display text-xl font-semibold text-white">Settings</h2>
          <ul className="mt-4 space-y-3">
            {command.settings.map((setting) => (
              <li key={setting.name} className="text-sm">
                <p className="font-medium text-white">{setting.name}</p>
                <p className="text-mist-300">{setting.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="surface p-6">
          <h2 className="font-display text-xl font-semibold text-white">Supported formats</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {command.formats.map((format) => (
              <span
                key={format}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist-200"
              >
                {format}
              </span>
            ))}
          </div>
        </section>
      </div>

      <section className="surface mt-6 p-6">
        <h2 className="font-display text-xl font-semibold text-white">Limitations</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-mist-300">
          {command.limitations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link
          href={`/docs/${command.id}`}
          className="mt-6 inline-flex text-sm text-accent-soft hover:underline"
        >
          Full documentation guide →
        </Link>
      </section>
    </div>
  );
}
