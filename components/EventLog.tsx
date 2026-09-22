import { EventLogRow } from "@/lib/data";
import StatusDot from "./StatusDot";

const actions = ["Generate Report", "Clear Normal", "Demonstrate Problem", "Delete Record"];

export default function EventLog({ rows }: { rows: EventLogRow[] }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto">
        <table className="w-full text-[8px] border-collapse">
          <thead className="sticky top-0 bg-panel-head">
            <tr className="text-ink-dim text-left">
              <th className="font-normal py-1 px-1">State</th>
              <th className="font-normal py-1 px-1">Node</th>
              <th className="font-normal py-1 px-1">Group</th>
              <th className="font-normal py-1 px-1">Name</th>
              <th className="font-normal py-1 px-1">Comment</th>
              <th className="font-normal py-1 px-1">Type</th>
              <th className="font-normal py-1 px-1 text-right">Time</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-panel-border/60">
                <td className="py-1 px-1"><StatusDot status={r.state} /></td>
                <td className="py-1 px-1 text-ink-muted">{r.node}</td>
                <td className="py-1 px-1 text-ink-muted">{r.group}</td>
                <td className="py-1 px-1 text-amber-400 whitespace-nowrap">{r.name}</td>
                <td className="py-1 px-1 text-ink-muted">{r.comment}</td>
                <td className="py-1 px-1 text-ink-dim">{r.type}</td>
                <td className="py-1 px-1 text-right text-ink-dim tabular">{r.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between gap-1 border-t border-panel-border pt-1 mt-1 shrink-0">
        <div className="flex gap-1">
          {actions.map((a) => (
            <button key={a} className="text-[7px] text-ink-muted border border-panel-border rounded px-1.5 py-0.5 hover:border-amber-500/50 hover:text-amber-400">
              {a}
            </button>
          ))}
        </div>
        <span className="text-[7px] text-ink-dim whitespace-nowrap">
          Displaying 0 to {rows.length} of {rows.length} · Query: Default · Filter: 100% Complete · Dublin, Edinburgh, Lisbon, London
        </span>
      </div>
    </div>
  );
}
