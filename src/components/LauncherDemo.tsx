"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const COMMAND = "..compress";
const SUGGESTIONS = [
  { alias: "..compress", name: "Compress Images" },
  { alias: "..resize", name: "Resize Images" },
  { alias: "..removebg", name: "Remove Background" },
  { alias: "..pdf", name: "Images to PDF" },
];

export function LauncherDemo() {
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "ready" | "pause">("typing");

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const run = async () => {
      while (!cancelled) {
        setPhase("typing");
        setTyped("");
        for (let i = 1; i <= COMMAND.length; i++) {
          if (cancelled) return;
          setTyped(COMMAND.slice(0, i));
          await new Promise((r) => {
            timer = setTimeout(r, 90 + Math.random() * 40);
          });
        }
        if (cancelled) return;
        setPhase("ready");
        await new Promise((r) => {
          timer = setTimeout(r, 1600);
        });
        setPhase("pause");
        await new Promise((r) => {
          timer = setTimeout(r, 900);
        });
      }
    };

    void run();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  const query = typed.toLowerCase();
  const matches = SUGGESTIONS.filter(
    (item) => !query || item.alias.includes(query) || item.name.toLowerCase().includes(query)
  );

  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-850 shadow-panel">
        <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-sm text-accent-soft">
            ⌘
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[15px] text-white">
              {typed}
              <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-[2px] bg-accent-soft align-middle animate-caret-blink" />
            </p>
            <p className="mt-0.5 text-[11px] text-mist-400">
              {site.macos.hotkey} · 3 images selected in Finder
            </p>
          </div>
        </div>
        <ul className="py-2">
          {matches.map((item, index) => {
            const active = index === 0 && phase !== "pause";
            return (
              <li
                key={item.alias}
                className={
                  active
                    ? "mx-2 flex items-center justify-between rounded-xl bg-accent/15 px-3 py-2.5"
                    : "mx-2 flex items-center justify-between rounded-xl px-3 py-2.5"
                }
              >
                <div>
                  <p className="text-sm text-white">{item.name}</p>
                  <p className="font-mono text-xs text-mist-400">{item.alias}</p>
                </div>
                {active ? (
                  <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-mist-200">
                    Return
                  </span>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
      <p className="mt-4 text-center text-xs text-mist-400">
        Launcher preview · same aliases as the macOS app
      </p>
    </div>
  );
}
