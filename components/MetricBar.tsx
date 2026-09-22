export default function MetricBar({
  label,
  value,
  unit,
  lastYearLabel = "Last Year",
  pct,
}: {
  label: string;
  value: string | number;
  unit: string;
  lastYearLabel?: string;
  pct: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-[9px] text-ink-muted mb-1">
        <span>{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-wall-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full" style={{ width: `${pct}%` }} />
        </div>
        <span className="text-[11px] text-ink font-medium tabular shrink-0">{value} {unit}</span>
      </div>
      <div className="text-[8px] text-ink-dim mt-0.5">{lastYearLabel}</div>
    </div>
  );
}
