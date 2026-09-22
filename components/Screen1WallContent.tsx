import Panel from "./PanelWall";
import AlarmsTable from "./AlarmsTable";
import ReliabilityTrend from "./ReliabilityTrend";
import OpexStatCard from "./OpexStatCard";
import GroupedBars from "./GroupedBars";
import DonutStat from "./DonutStat";
import { AssetPerformanceTable, EnergyConsumptionTable } from "./Tables";
import SimpleLine from "./SimpleLine";
import HourlyBars from "./HourlyBars";
import UkMap from "./UkMap";
import SitePhotos from "./SitePhotos";
import {
  getAlarmRows,
  getPumpReliabilityCharts,
  getOpexCost,
  getProjectCompletion,
  getDeviatedProjects,
  getProjectsStatusSchedule,
  getOpexUtilisation,
  getAssetPerformance,
  getPumpCapacity,
  getSteamCost,
  getEnergyConsumption,
  getTotalSteamConsumption,
  getPumpEfficiencies,
  getTotalPowerConsumption,
  getSiteLocations,
  getSitePhotos,
} from "@/lib/data";

export default function Screen1WallContent() {
  const alarms = getAlarmRows();
  const pump = getPumpReliabilityCharts();
  const opex = getOpexCost();
  const projComp = getProjectCompletion();
  const deviated = getDeviatedProjects();
  const projStatus = getProjectsStatusSchedule();
  const opexUtil = getOpexUtilisation();
  const assetPerf = getAssetPerformance();
  const pumpCap = getPumpCapacity();
  const steamCost = getSteamCost();
  const energy = getEnergyConsumption();
  const totalSteam = getTotalSteamConsumption();
  const pumpEff = getPumpEfficiencies();
  const totalPower = getTotalPowerConsumption();
  const sites = getSiteLocations();
  const photos = getSitePhotos();

  return (
    <div
      className="grid gap-1.5 h-full min-h-0"
      style={{
        gridTemplateColumns: "1.55fr 1fr 1fr 1fr",
        gridTemplateRows: "0.72fr 0.85fr 1fr 0.85fr 1fr",
        gridTemplateAreas: `
          "alarms opex projcomp top5dev"
          "alarms projstatus projstatus opexutil"
          "pumprel assetperf pumpcap steamcost"
          "pumprel energycons energycons totalsteam"
          "map pumpeff pumpeff totalpower"
        `,
      }}
    >
      <div style={{ gridArea: "alarms" }} className="min-h-0">
        <Panel title="Alarms" tag="Live" className="h-full" noPad>
          <AlarmsTable rows={alarms} />
        </Panel>
      </div>

      <div style={{ gridArea: "opex" }} className="flex flex-col gap-1.5 min-h-0">
        <Panel title="OPEX Cost" className="flex-1">
          <div className="flex flex-col gap-1.5 h-full">
            <OpexStatCard title="Fixed Operating Expenditure" {...opex.fixed} />
            <OpexStatCard title="Variable Operating Expenditure" {...opex.variable} />
          </div>
        </Panel>
      </div>

      <div style={{ gridArea: "projcomp" }} className="min-h-0">
        <Panel title="Project % Completion (YTD)" tag="Feb" className="h-full">
          <GroupedBars data={projComp} xKey="phase" bars={[{ key: "plan", name: "Plan (%)" }, { key: "actual", name: "Actual (%)" }]} />
        </Panel>
      </div>

      <div style={{ gridArea: "top5dev" }} className="min-h-0">
        <Panel title="Top 5 Deviated Projects — Schedule Variance (YTD)" tag="Feb" className="h-full">
          <GroupedBars data={deviated} xKey="id" bars={[{ key: "variance", name: "Variance" }, { key: "target", name: "Target" }]} legend={false} />
        </Panel>
      </div>

      <div style={{ gridArea: "projstatus" }} className="min-h-0">
        <Panel title="Projects Status Schedule (YTD)" className="h-full">
          <DonutStat data={projStatus.slices} centerValue={projStatus.totalProjects} centerLabel="Total Projects" />
        </Panel>
      </div>

      <div style={{ gridArea: "opexutil" }} className="min-h-0">
        <Panel title="OPEX Utilization (YTD)" tag="Feb" className="h-full">
          <GroupedBars
            data={opexUtil}
            xKey="unit"
            bars={[
              { key: "overall", name: "Overall" },
              { key: "maintenance", name: "Maintenance" },
              { key: "techServices", name: "Tech Services" },
              { key: "labs", name: "Labs" },
              { key: "operations", name: "Operations" },
            ]}
            legend={false}
          />
        </Panel>
      </div>

      <div style={{ gridArea: "pumprel" }} className="min-h-0">
        <Panel title="Pump J-9002A Reliability" tag="ML Model" className="h-full">
          <div className="grid grid-cols-2 grid-rows-2 gap-1.5 h-full">
            <div className="min-h-0">
              <div className="text-[8px] text-ink-dim mb-0.5">Overall Model Residual · Alarms {pump.overallResidual.alarms} · Warnings {pump.overallResidual.warnings}</div>
              <div className="h-[calc(100%-14px)]"><ReliabilityTrend data={pump.overallResidual.data} /></div>
            </div>
            <div className="min-h-0">
              <div className="text-[8px] text-ink-dim mb-0.5">Motor Top Guide Brg Temp</div>
              <div className="h-[calc(100%-14px)]"><ReliabilityTrend data={pump.motorTopGuideTemp.data} /></div>
            </div>
            <div className="min-h-0">
              <div className="text-[8px] text-ink-dim mb-0.5">Level</div>
              <div className="h-[calc(100%-14px)]"><ReliabilityTrend data={pump.level.data} /></div>
            </div>
            <div className="min-h-0">
              <div className="text-[8px] text-ink-dim mb-0.5">Motor De Vib (Y-Direction)</div>
              <div className="h-[calc(100%-14px)]"><ReliabilityTrend data={pump.motorVibration.data} /></div>
            </div>
          </div>
        </Panel>
      </div>

      <div style={{ gridArea: "assetperf" }} className="min-h-0">
        <Panel title="Asset Performance (Unitwise)" className="h-full" noPad>
          <div className="overflow-auto h-full p-1"><AssetPerformanceTable rows={assetPerf} /></div>
        </Panel>
      </div>

      <div style={{ gridArea: "pumpcap" }} className="min-h-0">
        <Panel title="Pump Capacity" className="h-full">
          <SimpleLine data={pumpCap.trend} xKey="t" lines={[{ key: "value", name: "m³/hr" }]} />
        </Panel>
      </div>

      <div style={{ gridArea: "steamcost" }} className="min-h-0">
        <Panel title="Steam Cost ($/hr)" className="h-full">
          <SimpleLine data={steamCost.trend} xKey="t" lines={[{ key: "value", name: "$/hr" }]} />
        </Panel>
      </div>

      <div style={{ gridArea: "energycons" }} className="min-h-0">
        <Panel title="Energy Consumption (Equipment)" className="h-full" noPad>
          <div className="overflow-auto h-full p-1"><EnergyConsumptionTable rows={energy} /></div>
        </Panel>
      </div>

      <div style={{ gridArea: "totalsteam" }} className="min-h-0">
        <Panel title="Total Steam Consumption" className="h-full">
          <HourlyBars data={totalSteam} />
        </Panel>
      </div>

      <div style={{ gridArea: "map" }} className="min-h-0">
        <Panel title="Asset Locations" className="h-full" noPad>
          <div className="grid grid-cols-2 gap-1.5 h-full p-1.5">
            <UkMap sites={sites} />
            <SitePhotos photos={photos} />
          </div>
        </Panel>
      </div>

      <div style={{ gridArea: "pumpeff" }} className="min-h-0">
        <Panel title="Pump Efficiencies (%)" className="h-full">
          <SimpleLine data={pumpEff} xKey="t" lines={[{ key: "a", name: "J-9002A" }, { key: "b", name: "J-9002B" }]} />
        </Panel>
      </div>

      <div style={{ gridArea: "totalpower" }} className="min-h-0">
        <Panel title="Total Power Consumption" className="h-full">
          <HourlyBars data={totalPower} />
        </Panel>
      </div>
    </div>
  );
}
