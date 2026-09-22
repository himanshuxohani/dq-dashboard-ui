"use client";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { seriesColors } from "./status";

export default function GroupedBars({
  data,
  xKey,
  bars,
  legend = true,
}: {
  data: any[];
  xKey: string;
  bars: { key: string; name: string }[];
  legend?: boolean;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: -18 }}>
        <XAxis dataKey={xKey} tick={{ fontSize: 8, fill: "#5c626d" }} axisLine={{ stroke: "#262b32" }} tickLine={false} />
        <YAxis tick={{ fontSize: 8, fill: "#5c626d" }} axisLine={false} tickLine={false} width={26} />
        <Tooltip
          contentStyle={{ background: "#1a1e24", border: "1px solid #262b32", fontSize: 10, borderRadius: 4 }}
          cursor={{ fill: "rgba(249,115,22,0.06)" }}
        />
        {legend && (
          <Legend wrapperStyle={{ fontSize: 9, color: "#8d94a0" }} iconType="square" iconSize={7} />
        )}
        {bars.map((b, i) => (
          <Bar key={b.key} dataKey={b.key} name={b.name} fill={seriesColors[i % seriesColors.length]} radius={[1, 1, 0, 0]} isAnimationActive={false} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
