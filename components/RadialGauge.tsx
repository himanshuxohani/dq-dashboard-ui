"use client";
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts";
import { GaugeData } from "@/lib/data";

export default function RadialGauge({ gauge }: { gauge: GaugeData }) {
  const pct = Math.min((gauge.value / gauge.max) * 100, 100);
  const data = [{ value: pct, fill: "#f97316" }];
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[72px] h-[72px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="72%"
            outerRadius="100%"
            data={data}
            startAngle={90}
            endAngle={-270}
            barSize={6}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar dataKey="value" cornerRadius={4} background={{ fill: "#20242b" }} isAnimationActive={false} />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[13px] font-semibold text-ink tabular leading-none">{gauge.value}</span>
          <span className="text-[7px] text-ink-dim mt-0.5">{gauge.unit}</span>
        </div>
      </div>
      <span className="text-[10px] text-amber-400 font-medium mt-1">{gauge.label}</span>
      <div className="grid grid-cols-3 gap-x-2 mt-1 text-center">
        <div>
          <div className="text-[7px] text-ink-dim">Planned</div>
          <div className="text-[9px] text-ink tabular">{gauge.planned}</div>
        </div>
        <div>
          <div className="text-[7px] text-ink-dim">Actual</div>
          <div className="text-[9px] text-ink tabular">{gauge.actual}</div>
        </div>
        <div>
          <div className="text-[7px] text-ink-dim">Reconciled</div>
          <div className="text-[9px] text-ink tabular">{gauge.reconciled}</div>
        </div>
      </div>
    </div>
  );
}
