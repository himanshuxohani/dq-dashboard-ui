import { Maximize2 } from "lucide-react";
import { ReactNode } from "react";

export default function PanelWall({
  title,
  tag,
  children,
  className = "",
  noPad = false,
  dense = false,
}: {
  title: string;
  tag?: string;
  children: ReactNode;
  className?: string;
  noPad?: boolean;
  dense?: boolean;
}) {
  return (
    <section
      className={`flex flex-col min-h-0 bg-panel border border-panel-border rounded-[3px] shadow-panel overflow-hidden ${className}`}
    >
      <header className="flex items-center justify-between gap-2 bg-panel-head/60 border-b border-panel-border px-2.5 py-1.5 shrink-0">
        <h3
          className={`text-ink-muted font-medium tracking-wide truncate ${
            dense ? "text-[10px]" : "text-[11px]"
          }`}
        >
          {title}
        </h3>
        <div className="flex items-center gap-1.5 shrink-0">
          {tag && (
            <span className="text-[9px] text-amber-400/80 bg-amber-500/10 border border-amber-500/20 rounded px-1.5 py-0.5 leading-none">
              {tag}
            </span>
          )}
          <Maximize2 size={10} className="text-ink-dim" />
        </div>
      </header>
      <div className={`flex-1 min-h-0 ${noPad ? "" : "p-2"}`}>{children}</div>
    </section>
  );
}
