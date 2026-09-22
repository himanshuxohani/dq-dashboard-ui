"use client";
import { Flame, Wifi } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TopBar({ activeTab }: { activeTab?: "screen-1" | "screen-2" | "full-wall" }) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleString("en-GB", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const tabs = [
    { key: "full-wall", label: "Full Wall", href: "/full-wall" },
    { key: "screen-1", label: "Screen 1", href: "/screen-1" },
    { key: "screen-2", label: "Screen 2", href: "/screen-2" },
  ] as const;

  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-panel-border bg-wall-900/90 backdrop-blur shrink-0">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-7 h-7 rounded bg-gradient-to-br from-amber-500 to-amber-700 shadow-glow">
          <Flame size={14} className="text-wall-900" />
        </div>
        <div className="leading-tight">
          <div className="text-[13px] font-semibold text-ink tracking-wide">Digital Quotient</div>
          <div className="text-[9px] text-ink-dim">Operations Performance Wall</div>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-1 bg-wall-800/60 border border-panel-border rounded-full p-0.5">
        {tabs.map((t) => (
          <Link
            key={t.key}
            href={t.href}
            className={`text-[10px] px-3 py-1 rounded-full transition-colors ${
              activeTab === t.key
                ? "bg-amber-500 text-wall-900 font-medium"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            {t.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-[10px] text-status-good">
          <Wifi size={12} />
          <span>Live · Dummy Data</span>
        </div>
        <div className="text-[10px] text-ink-muted tabular hidden sm:block">{time}</div>
      </div>
    </header>
  );
}
