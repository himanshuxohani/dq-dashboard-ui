"use client";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { seriesColors } from "./status";

export default function SimpleLine({
  data,
  xKey,
  lines,
}: {
  data: any[];
  xKey: string;
  lines: { key: string; name?: string }[];
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: -18 }}>
        <XAxis dataKey={xKey} tick={{ fontSize: 7, fill: "#5c626d" }} axisLine={{ stroke: "#262b32" }} tickLine={false} />
        <YAxis tick={{ fontSize: 8, fill: "#5c626d" }} axisLine={false} tickLine={false} width={24} />
        <Tooltip contentStyle={{ background: "#1a1e24", border: "1px solid #262b32", fontSize: 10, borderRadius: 4 }} />
        {lines.map((l, i) => (
          <Line
            key={l.key}
            type="monotone"
            dataKey={l.key}
            name={l.name}
            stroke={seriesColors[i % seriesColors.length]}
            strokeWidth={1.5}
            dot={false}
            isAnimationActive={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
