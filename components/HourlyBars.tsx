"use client";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { seriesColors } from "./status";

export default function HourlyBars({ data }: { data: { t: string; a: number; b: number; c: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: -18 }}>
        <XAxis dataKey="t" tick={{ fontSize: 7, fill: "#5c626d" }} axisLine={{ stroke: "#262b32" }} tickLine={false} />
        <YAxis tick={{ fontSize: 8, fill: "#5c626d" }} axisLine={false} tickLine={false} width={22} />
        <Tooltip contentStyle={{ background: "#1a1e24", border: "1px solid #262b32", fontSize: 10, borderRadius: 4 }} cursor={{ fill: "rgba(249,115,22,0.06)" }} />
        <Bar dataKey="a" stackId="s" fill={seriesColors[0]} isAnimationActive={false} />
        <Bar dataKey="b" stackId="s" fill={seriesColors[1]} isAnimationActive={false} />
        <Bar dataKey="c" stackId="s" fill={seriesColors[4]} radius={[1, 1, 0, 0]} isAnimationActive={false} />
      </BarChart>
    </ResponsiveContainer>
  );
}
