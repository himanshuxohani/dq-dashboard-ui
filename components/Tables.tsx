import { AssetPerf, EnergyRow, TopAsset, BadActor, FailureReason } from "@/lib/data";
import StatusDot from "./StatusDot";

export function AssetPerformanceTable({ rows }: { rows: AssetPerf[] }) {
  return (
    <table className="w-full text-[9px] border-collapse">
      <thead>
        <tr className="text-ink-dim text-left">
          <th className="font-normal py-1 px-1">Asset Name</th>
          <th className="font-normal py-1 px-1">KPI</th>
          <th className="font-normal py-1 px-1">UOM</th>
          <th className="font-normal py-1 px-1 text-right">Design</th>
          <th className="font-normal py-1 px-1 text-right">Actual</th>
          <th className="font-normal py-1 px-1 text-center">Limit</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.asset} className="border-t border-panel-border/60">
            <td className="py-1 px-1 text-ink-muted whitespace-nowrap">{r.asset}</td>
            <td className="py-1 px-1 text-ink-muted">{r.kpi}</td>
            <td className="py-1 px-1 text-ink-dim">{r.uom}</td>
            <td className="py-1 px-1 text-right text-ink tabular">{r.design}</td>
            <td className="py-1 px-1 text-right text-ink tabular">{r.actual}</td>
            <td className="py-1 px-1 text-center"><StatusDot status={r.status} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function EnergyConsumptionTable({ rows }: { rows: EnergyRow[] }) {
  return (
    <table className="w-full text-[9px] border-collapse">
      <thead>
        <tr className="text-ink-dim text-left">
          <th className="font-normal py-1 px-1">S.No</th>
          <th className="font-normal py-1 px-1">Equipment</th>
          <th className="font-normal py-1 px-1 text-center">Status</th>
          <th className="font-normal py-1 px-1">UOM</th>
          <th className="font-normal py-1 px-1 text-right">Design</th>
          <th className="font-normal py-1 px-1 text-right">Actual</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.sno} className="border-t border-panel-border/60">
            <td className="py-1 px-1 text-ink-dim tabular">{r.sno}</td>
            <td className="py-1 px-1 text-ink-muted whitespace-nowrap">{r.equipment}</td>
            <td className="py-1 px-1 text-center"><StatusDot status={r.status} /></td>
            <td className="py-1 px-1 text-ink-dim">{r.uom}</td>
            <td className="py-1 px-1 text-right text-ink tabular">{r.design}</td>
            <td className="py-1 px-1 text-right text-ink tabular">{r.actual}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function TopAssetTable({ rows }: { rows: TopAsset[] }) {
  return (
    <table className="w-full text-[9px] border-collapse">
      <thead>
        <tr className="text-ink-dim text-left">
          <th className="font-normal py-1 px-1">Asset Name</th>
          <th className="font-normal py-1 px-1">Description</th>
          <th className="font-normal py-1 px-1 text-right">Cost ($)</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.code} className="border-t border-panel-border/60">
            <td className="py-1 px-1 text-amber-400 whitespace-nowrap">{r.code}</td>
            <td className="py-1 px-1 text-ink-muted">{r.desc}</td>
            <td className="py-1 px-1 text-right text-ink tabular">{r.cost.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function BadActorsTable({ rows }: { rows: BadActor[] }) {
  return (
    <table className="w-full text-[9px] border-collapse">
      <thead>
        <tr className="text-ink-dim text-left">
          <th className="font-normal py-1 px-1">Asset Name</th>
          <th className="font-normal py-1 px-1">Area</th>
          <th className="font-normal py-1 px-1 text-right">#WO</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.asset} className="border-t border-panel-border/60">
            <td className="py-1 px-1 text-amber-400 whitespace-nowrap">{r.asset}</td>
            <td className="py-1 px-1 text-ink-muted">{r.area}</td>
            <td className="py-1 px-1 text-right text-ink tabular">{r.wo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function FailureReasonsTable({ rows }: { rows: FailureReason[] }) {
  return (
    <table className="w-full text-[9px] border-collapse">
      <thead>
        <tr className="text-ink-dim text-left">
          <th className="font-normal py-1 px-1">Asset Name</th>
          <th className="font-normal py-1 px-1">Reason</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-t border-panel-border/60">
            <td className="py-1 px-1 text-amber-400 whitespace-nowrap">{r.asset}</td>
            <td className="py-1 px-1 text-ink-muted">{r.reason}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
