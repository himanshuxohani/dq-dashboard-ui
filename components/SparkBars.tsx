export default function SparkBars({ values }: { values: number[] }) {
  const max = Math.max(...values, 1);
  return (
    <div className="flex items-end gap-[2px] h-4 w-16">
      {values.map((v, i) => (
        <span
          key={i}
          className="flex-1 rounded-[1px]"
          style={{
            height: `${Math.max((v / max) * 100, 12)}%`,
            background: v / max > 0.66 ? "#ef4b4b" : v / max > 0.33 ? "#f2c94c" : "#f97316",
          }}
        />
      ))}
    </div>
  );
}
