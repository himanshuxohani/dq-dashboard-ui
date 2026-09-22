import Panel from "./PanelWall";
import ProcessFlowDiagram from "./ProcessFlowDiagram";
import PlantIsometric from "./PlantIsometric";
import RadialGauge from "./RadialGauge";
import EventLog from "./EventLog";
import StatTrend from "./StatTrend";
import DonutStat from "./DonutStat";
import MetricBar from "./MetricBar";
import ControlOfWorkGrid from "./ControlOfWorkGrid";
import { TopAssetTable, BadActorsTable, FailureReasonsTable } from "./Tables";
import {
  getGauges,
  getEventLog,
  getMonthlyWorkOrders,
  getWorkOrdersByPriority,
  getTopAssetsByCost,
  getDelayedCompletionWO,
  getWorkOrderStatusYTD,
  getBadActors,
  getDelayedStartWO,
  getReliabilityMetrics,
  getTopFailureReasons,
  getControlOfWork,
} from "@/lib/data";

export default function Screen2WallContent() {
  const gauges = getGauges();
  const events = getEventLog();
  const mwo = getMonthlyWorkOrders();
  const wobp = getWorkOrdersByPriority();
  const top8 = getTopAssetsByCost();
  const dcwo = getDelayedCompletionWO();
  const wos = getWorkOrderStatusYTD();
  const bad = getBadActors();
  const dswo = getDelayedStartWO();
  const rel = getReliabilityMetrics();
  const fail = getTopFailureReasons();
  const cow = getControlOfWork();

  const lastVal = (arr: { value: number }[]) => arr[arr.length - 1].value;

  return (
    <div className="grid grid-cols-[1.3fr_1fr] gap-1.5 h-full min-h-0">
      {/* LEFT ZONE: process, digital twin, gauges, event log */}
      <div className="grid gap-1.5 min-h-0" style={{ gridTemplateRows: "0.62fr 1.5fr 0.7fr" }}>
        <Panel title="Process Flow — Fractionation Train" tag="Live">
          <ProcessFlowDiagram />
        </Panel>

        <div className="grid grid-cols-[1.6fr_1fr] gap-1.5 min-h-0">
          <Panel title="Digital Twin — Plant View" noPad>
            <PlantIsometric />
          </Panel>
          <Panel title="Product Streams">
            <div className="flex flex-col justify-around h-full">
              {gauges.map((g) => (
                <RadialGauge key={g.label} gauge={g} />
              ))}
            </div>
          </Panel>
        </div>

        <Panel title="Event Log" noPad>
          <div className="h-full p-1.5">
            <EventLog rows={events} />
          </div>
        </Panel>
      </div>

      {/* RIGHT ZONE: work orders + reliability KPIs + control of work */}
      <div className="grid gap-1.5 min-h-0" style={{ gridTemplateRows: "1fr 1fr 1fr 1.15fr" }}>
        <div className="grid grid-cols-3 gap-1.5 min-h-0">
          <Panel title="Monthly Work Orders" tag="Feb">
            <StatTrend data={mwo} dataKey="value" value={lastVal(mwo)} />
          </Panel>
          <Panel title="Work Orders by Priority" tag="Feb">
            <DonutStat data={wobp} showLegend={false} centerValue={`${wobp[0].value}%`} centerLabel="On schedule" />
          </Panel>
          <Panel title="Top 8 Assets — Highest Cost" tag="Feb" noPad>
            <div className="overflow-auto h-full p-1"><TopAssetTable rows={top8} /></div>
          </Panel>
        </div>

        <div className="grid grid-cols-3 gap-1.5 min-h-0">
          <Panel title="Delayed Completion WO (%)" tag="YTD">
            <StatTrend data={dcwo} dataKey="value" value={lastVal(dcwo)} />
          </Panel>
          <Panel title="Work Orders Status (YTD)" tag="Feb">
            <DonutStat data={wos} showLegend={false} centerValue={`${wos[0].value}%`} centerLabel="Closed" />
          </Panel>
          <Panel title="Bad Actors — Frequent Failures" tag="YTD" noPad>
            <div className="overflow-auto h-full p-1"><BadActorsTable rows={bad} /></div>
          </Panel>
        </div>

        <div className="grid grid-cols-3 gap-1.5 min-h-0">
          <Panel title="Delayed Start WO (%)" tag="YTD">
            <StatTrend data={dswo} dataKey="value" value={lastVal(dswo)} />
          </Panel>
          <Panel title="MTBF / MTTR">
            <div className="flex flex-col justify-center gap-3 h-full px-1">
              <MetricBar label="Mean Time Between Failures" value={rel.mtbf.hours} unit="Hrs." pct={72} />
              <MetricBar label="Mean Time to Repair" value={rel.mttr.minutes} unit="Min." pct={34} />
            </div>
          </Panel>
          <Panel title="Top 5 Failure Reasons" noPad>
            <div className="overflow-auto h-full p-1"><FailureReasonsTable rows={fail} /></div>
          </Panel>
        </div>

        <Panel title="Control of Work">
          <ControlOfWorkGrid items={cow} />
        </Panel>
      </div>
    </div>
  );
}
