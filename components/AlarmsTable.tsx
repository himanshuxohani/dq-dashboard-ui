import { AlarmRow } from "@/lib/data";
import StatusDot from "./StatusDot";
import SparkBars from "./SparkBars";

export default function AlarmsTable({ rows }: { rows: AlarmRow[] }) {
  return (
    <div className="overflow-auto h-full">
      <table className="w-full text-[9px] border-collapse">
        <thead className="sticky top-0 bg-panel-head z-10">
          <tr className="text-ink-dim text-left">
            <th className="font-normal py-1 px-1">Name</th>
            <th className="font-normal py-1 px-1 text-center">Alarm</th>
            <th className="font-normal py-1 px-1 text-center">Runtime</th>
            <th className="font-normal py-1 px-1 text-center">Case</th>
            <th className="font-normal py-1 px-1 text-center">Open</th>
            <th className="font-normal py-1 px-1 text-center">Closed</th>
            <th className="font-normal py-1 px-1">7 Day History</th>
            <th className="font-normal py-1 px-1 text-right">Alarms</th>
            <th className="font-normal py-1 px-1 text-right">Warn</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-t border-panel-border/60 hover:bg-wall-800/50">
              <td className="py-1 px-1 text-ink-muted whitespace-nowrap">{r.name}</td>
              <td className="py-1 px-1 text-center"><StatusDot status={r.alarmState} pulse /></td>
              <td className="py-1 px-1 text-center"><StatusDot status={r.runtimeStatus} /></td>
              <td className="py-1 px-1 text-center"><StatusDot status={r.caseStatus} /></td>
              <td className="py-1 px-1 text-center text-ink-muted tabular">{r.openCases}</td>
              <td className="py-1 px-1 text-center text-ink-muted tabular">{r.closedCases}</td>
              <td className="py-1 px-1"><SparkBars values={r.history} /></td>
              <td className="py-1 px-1 text-right text-ink tabular">{r.alarms}</td>
              <td className="py-1 px-1 text-right text-amber-400 tabular">{r.warnings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
