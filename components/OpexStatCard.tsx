export default function OpexStatCard({
  title,
  lastMonth,
  currentMonth,
  target,
  unit,
}: {
  title: string;
  lastMonth: number;
  currentMonth: number;
  target: number;
  unit: string;
}) {
  const delta = currentMonth - target;
  return (
    <div className="flex-1 bg-wall-800/60 border border-panel-border rounded-[3px] px-2.5 py-2">
      <div className="text-[9px] text-ink-muted mb-1.5 truncate">{title}</div>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-[8px] text-ink-dim">Last Month</div>
          <div className="text-[10px] text-ink-muted tabular">{lastMonth} {unit}</div>
        </div>
        <div className="text-right">
          <div className="text-[8px] text-ink-dim">Current Month</div>
          <div className="text-lg font-semibold text-amber-400 tabular leading-none">{currentMonth}</div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-1.5 pt-1.5 border-t border-panel-border/70">
        <span className="text-[8px] text-ink-dim">Target {target} {unit}</span>
        <span className={`text-[8px] tabular ${delta <= 0 ? "text-status-good" : "text-status-bad"}`}>
          {delta <= 0 ? "▼" : "▲"} {Math.abs(delta).toFixed(2)}
        </span>
      </div>
    </div>
  );
}
