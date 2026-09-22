"use client";
import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts";
import { TrendingDown, TrendingUp } from "lucide-react";

export default function StatTrend({
  data,
  dataKey,
  value,
  suffix = "%",
  positive = false,
}: {
  data: any[];
  dataKey: string;
  value: number;
  suffix?: string;
  positive?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 h-full">
      <div className="flex-1 h-full min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 4, right: 2, bottom: 4, left: 2 }}>
            <YAxis hide domain={["dataMin - 0.3", "dataMax + 0.3"]} />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke="#f97316"
              strokeWidth={1.5}
              dot={{ r: 1.5, fill: "#f97316", strokeWidth: 0 }}
              activeDot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col items-end shrink-0 pr-1">
        <span className="text-lg font-semibold text-ink tabular">{value}{suffix}</span>
        {positive ? (
          <TrendingUp size={12} className="text-status-good" />
        ) : (
          <TrendingDown size={12} className="text-amber-400" />
        )}
      </div>
    </div>
  );
}
