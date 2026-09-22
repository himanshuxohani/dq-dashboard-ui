"use client";
import { SiteLocation } from "@/lib/data";
import { statusColor } from "./status";
import { useState } from "react";

export default function UkMap({ sites }: { sites: SiteLocation[] }) {
  const [hover, setHover] = useState<string | null>(null);
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Simplified stylised landmass silhouette (not survey-accurate) */}
        <path
          d="M52 4 L58 10 L56 16 L62 20 L60 28 L66 30 L64 38 L70 42 L68 50 L72 56 L66 62 L68 70 L60 76 L62 84 L54 90 L48 96 L44 88 L46 80 L40 74 L42 66 L36 60 L40 52 L34 46 L38 38 L34 32 L40 26 L38 18 L46 14 L44 8 Z"
          fill="#161a20"
          stroke="#2c323b"
          strokeWidth="0.6"
        />
        <path
          d="M22 68 L28 64 L30 72 L26 80 L20 78 Z"
          fill="#161a20"
          stroke="#2c323b"
          strokeWidth="0.6"
        />
        {sites.map((s) => (
          <g
            key={s.name}
            transform={`translate(${s.x}, ${s.y})`}
            onMouseEnter={() => setHover(s.name)}
            onMouseLeave={() => setHover(null)}
            className="cursor-pointer"
          >
            <circle r={hover === s.name ? 3.4 : 2.6} fill={statusColor[s.status]} opacity={0.25} />
            <circle r={1.5} fill={statusColor[s.status]} className={s.status === "bad" ? "pulse-dot" : ""} />
          </g>
        ))}
      </svg>
      {hover && (
        <div className="absolute bottom-1 left-1 bg-wall-900/90 border border-panel-border rounded px-1.5 py-0.5 text-[8px] text-ink-muted">
          {hover}
        </div>
      )}
    </div>
  );
}
