"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { seriesColors } from "./status";

export default function DonutStat({
  data,
  centerLabel,
  centerValue,
  showLegend = true,
}: {
  data: { name: string; value: number }[];
  centerLabel?: string;
  centerValue?: string | number;
  showLegend?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 h-full">
      <div className="relative h-full aspect-square shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius="62%"
              outerRadius="94%"
              paddingAngle={2}
              stroke="none"
              isAnimationActive={false}
            >
              {data.map((_, i) => (
                <Cell key={i} fill={seriesColors[i % seriesColors.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {centerValue !== undefined && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-sm font-semibold text-ink tabular">{centerValue}</span>
            {centerLabel && <span className="text-[7px] text-ink-dim leading-tight text-center px-1">{centerLabel}</span>}
          </div>
        )}
      </div>
      {showLegend && (
        <ul className="flex-1 min-w-0 space-y-1">
          {data.map((d, i) => (
            <li key={d.name} className="flex items-center gap-1.5 text-[9px] leading-tight">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: seriesColors[i % seriesColors.length] }} />
              <span className="text-ink-muted truncate flex-1">{d.name}</span>
              <span className="text-ink tabular shrink-0">{d.value}%</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
