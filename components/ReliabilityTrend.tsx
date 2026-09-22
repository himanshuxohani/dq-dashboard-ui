"use client";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

export default function ReliabilityTrend({ data }: { data: { t: string; actual: number; predicted: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: -18 }}>
        <XAxis
          dataKey="t"
          tick={{ fontSize: 8, fill: "#5c626d" }}
          interval={5}
          axisLine={{ stroke: "#262b32" }}
          tickLine={false}
        />
        <YAxis tick={{ fontSize: 8, fill: "#5c626d" }} axisLine={false} tickLine={false} width={26} />
        <Tooltip
          contentStyle={{ background: "#1a1e24", border: "1px solid #262b32", fontSize: 10, borderRadius: 4 }}
          labelStyle={{ color: "#8d94a0" }}
        />
        <Line type="monotone" dataKey="predicted" stroke="#ffb454" strokeDasharray="3 3" strokeWidth={1} dot={false} isAnimationActive={false} />
        <Line type="monotone" dataKey="actual" stroke="#f97316" strokeWidth={1.5} dot={false} isAnimationActive={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
