// ---------------------------------------------------------------------------
// Digital Quotient — dummy data layer
// ---------------------------------------------------------------------------
// Every panel on the wall reads from one of the functions/constants below.
// When the live backend is ready, keep the same shapes and swap the body of
// each getX() for a fetch()/API call — the components don't need to change.
// ---------------------------------------------------------------------------

export type Status = "good" | "warn" | "bad" | "info";

export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// ---- Alarms summary table --------------------------------------------------
export interface AlarmRow {
  name: string;
  alarmState: Status;
  runtimeStatus: Status;
  caseStatus: Status;
  openCases: number;
  closedCases: number;
  history: number[]; // 7 day event history sparkline
  alarms: number;
  warnings: number;
  latestAlarm: string;
}

export const getAlarmRows = (): AlarmRow[] => [
  { name: "Refinery", alarmState: "bad", runtimeStatus: "good", caseStatus: "info", openCases: 2, closedCases: 5, history: [4, 8, 3, 9, 6, 2, 7], alarms: 721, warnings: 359, latestAlarm: "26/03/2026 01:31.392" },
  { name: "LNG Plant", alarmState: "bad", runtimeStatus: "good", caseStatus: "info", openCases: 1, closedCases: 4, history: [2, 5, 8, 3, 6, 9, 4], alarms: 117, warnings: 52, latestAlarm: "26/03/2026 01:31.392" },
  { name: "De-Ethanizer", alarmState: "bad", runtimeStatus: "good", caseStatus: "info", openCases: 2, closedCases: 3, history: [6, 3, 7, 2, 8, 5, 3], alarms: 90, warnings: 47, latestAlarm: "26/03/2026 01:31.392" },
  { name: "Pump J-9002A", alarmState: "bad", runtimeStatus: "good", caseStatus: "good", openCases: 0, closedCases: 6, history: [3, 6, 2, 8, 4, 7, 5], alarms: 125, warnings: 63, latestAlarm: "26/03/2026 01:31.392" },
  { name: "Pump J-9002A Reliability", alarmState: "bad", runtimeStatus: "good", caseStatus: "good", openCases: 0, closedCases: 2, history: [5, 4, 9, 3, 6, 2, 8], alarms: 52, warnings: 21, latestAlarm: "26/03/2026 01:31.392" },
  { name: "Condensor C-9001", alarmState: "bad", runtimeStatus: "good", caseStatus: "info", openCases: 1, closedCases: 5, history: [7, 2, 5, 8, 3, 6, 4], alarms: 117, warnings: 58, latestAlarm: "26/03/2026 01:31.392" },
  { name: "C-9001 Mech", alarmState: "bad", runtimeStatus: "good", caseStatus: "info", openCases: 1, closedCases: 3, history: [4, 7, 3, 5, 9, 2, 6], alarms: 90, warnings: 44, latestAlarm: "26/03/2026 01:31.392" },
  { name: "De-Butanizer", alarmState: "bad", runtimeStatus: "good", caseStatus: "good", openCases: 0, closedCases: 4, history: [6, 4, 8, 2, 5, 7, 3], alarms: 90, warnings: 41, latestAlarm: "26/03/2026 01:31.392" },
  { name: "Polyurethane Plant", alarmState: "bad", runtimeStatus: "good", caseStatus: "info", openCases: 2, closedCases: 2, history: [3, 8, 4, 6, 2, 9, 5], alarms: 152, warnings: 70, latestAlarm: "26/03/2026 01:31.392" },
  { name: "CPP", alarmState: "bad", runtimeStatus: "good", caseStatus: "good", openCases: 0, closedCases: 1, history: [5, 3, 7, 4, 8, 2, 6], alarms: 47, warnings: 19, latestAlarm: "26/03/2026 01:31.392" },
];

// ---- Pump J-9002A reliability trend charts ---------------------------------
export interface TrendPoint {
  t: string;
  actual: number;
  predicted: number;
}

function genTrend(base: number, spread: number, anomalyAt: number[]): TrendPoint[] {
  const points: TrendPoint[] = [];
  for (let i = 0; i < 24; i++) {
    const hh = String(4 + Math.floor(i / 3)).padStart(2, "0");
    const mm = String((i % 3) * 20).padStart(2, "0");
    const noise = Math.sin(i / 2.3) * spread + (Math.random() - 0.5) * spread * 0.5;
    const anomaly = anomalyAt.includes(i) ? spread * 2.2 : 0;
    points.push({
      t: `${hh}:${mm}`,
      actual: +(base + noise + anomaly).toFixed(2),
      predicted: +(base + noise * 0.6).toFixed(2),
    });
  }
  return points;
}

export const getPumpReliabilityCharts = () => ({
  overallResidual: { data: genTrend(0.5, 0.8, [9, 10, 11]), alarms: 9, warnings: 21 },
  motorTopGuideTemp: { data: genTrend(62, 4, [14, 15]), alarms: 4, warnings: 6 },
  level: { data: genTrend(48, 6, []), alarms: 3, warnings: 8 },
  motorVibration: { data: genTrend(1.8, 0.5, [17, 18]), alarms: 6, warnings: 12 },
});

// ---- OPEX cost cards --------------------------------------------------------
export const getOpexCost = () => ({
  fixed: { lastMonth: 1.7, currentMonth: 1.59, target: 1.59, unit: "$MMSCFD" },
  variable: { lastMonth: 1.9, currentMonth: 1.89, target: 1.9, unit: "$MMSCFD" },
});

// ---- Project % completion YTD ----------------------------------------------
export const getProjectCompletion = () => [
  { phase: "Design", plan: 38, actual: 34 },
  { phase: "Procurement", plan: 30, actual: 27 },
  { phase: "Construction", plan: 22, actual: 18 },
  { phase: "Commissioned", plan: 12, actual: 9 },
  { phase: "Closed", plan: 8, actual: 6 },
];

// ---- Projects status schedule (donut) --------------------------------------
export const getProjectsStatusSchedule = () => ({
  totalProjects: 42,
  slices: [
    { name: "Current projects on target", value: 43.6, count: 15 },
    { name: "Current projects deviated", value: 26.2, count: 9 },
    { name: "Closed projects deviated", value: 21.4, count: 12 },
    { name: "Closed project deviated with extension of scope", value: 8.8, count: 6 },
  ],
});

// ---- Top 5 deviated projects -----------------------------------------------
export const getDeviatedProjects = () => [
  { id: "PRO-001", variance: 14, target: 8 },
  { id: "PRO-009", variance: 11, target: 8 },
  { id: "PRO-097", variance: 9, target: 8 },
  { id: "PRO-012", variance: 7, target: 8 },
  { id: "PRO-022", variance: 5, target: 8 },
];

// ---- Asset performance (unitwise) ------------------------------------------
export interface AssetPerf {
  asset: string;
  kpi: string;
  uom: string;
  design: number;
  actual: number;
  target: number;
  status: Status;
}
export const getAssetPerformance = (): AssetPerf[] => [
  { asset: "Feed Pump (J-2037)", kpi: "Capacity", uom: "m3/hr", design: 53, actual: 47, target: 53, status: "good" },
  { asset: "Reflux Pump (J-9002A)", kpi: "Capacity", uom: "m3/hr", design: 62, actual: 38, target: 55, status: "good" },
  { asset: "Reboiler (B-9002)", kpi: "Heat Duty", uom: "GJ/hr", design: 5710, actual: 5718, target: 5700, status: "good" },
  { asset: "Condenser (C-9001)", kpi: "Effectiveness", uom: "%", design: 1.15, actual: 1.1, target: 1.15, status: "bad" },
];

// ---- OPEX utilisation (unitwise) -------------------------------------------
export const getOpexUtilisation = () => [
  { unit: "De-Ethanizer", overall: 68, maintenance: 52, techServices: 40, labs: 28, operations: 60 },
  { unit: "De-Propanizer", overall: 74, maintenance: 46, techServices: 55, labs: 33, operations: 58 },
  { unit: "De-Butanizer", overall: 61, maintenance: 58, techServices: 37, labs: 25, operations: 52 },
];

// ---- Pump capacity trend ----------------------------------------------------
export const getPumpCapacity = () => {
  const rows = [
    { label: "J-9002A", plan: 62, actual: 58, target: 55, uom: "m3/hr" },
    { label: "J-9002B", plan: 62, actual: 44, target: 55, uom: "m3/hr" },
    { label: "J-2307", plan: 57, actual: 50, target: 52, uom: "m3/hr" },
  ];
  const trend = Array.from({ length: 20 }).map((_, i) => ({
    t: `${9 + Math.floor(i / 2)}:${i % 2 === 0 ? "00" : "30"}`,
    value: +(50 + Math.sin(i / 2.5) * 8 + (Math.random() - 0.5) * 3).toFixed(1),
  }));
  return { rows, trend };
};

// ---- Steam cost --------------------------------------------------------------
export const getSteamCost = () => {
  const table = [
    { label: "5:00", val1: 12.7, val2: 9.7 },
    { label: "6:00", val1: 15.9, val2: 10.4 },
    { label: "7:00", val1: 14.6, val2: 10.8 },
    { label: "8:00", val1: 13.9, val2: 11.0 },
    { label: "9:00", val1: 12.7, val2: 10.5 },
  ];
  const trend = Array.from({ length: 20 }).map((_, i) => ({
    t: `${i}`,
    value: +(10 + Math.sin(i / 2) * 4 + (Math.random() - 0.5) * 2).toFixed(1),
  }));
  return { table, trend };
};

// ---- Energy consumption table ------------------------------------------------
export interface EnergyRow {
  sno: number;
  equipment: string;
  kpi: string;
  status: Status;
  uom: string;
  design: number;
  actual: number;
}
export const getEnergyConsumption = (): EnergyRow[] => [
  { sno: 1, equipment: "DeEthanizer Reboiler", kpi: "Steam Consumption", status: "good", uom: "TPH", design: 913, actual: 921 },
  { sno: 2, equipment: "J-2307", kpi: "Power Consumption", status: "good", uom: "MW", design: 948, actual: 926 },
  { sno: 3, equipment: "J-9002A", kpi: "Power Consumption", status: "good", uom: "MW", design: 930.5, actual: 910.15 },
  { sno: 4, equipment: "J-9002B", kpi: "Power Consumption", status: "bad", uom: "MW", design: 920, actual: 0 },
];

// ---- Total steam / power consumption bar charts -------------------------------
function genHourlyBars(n: number, base: number, spread: number) {
  return Array.from({ length: n }).map((_, i) => ({
    t: `${(i + 5) % 24}:00`,
    a: +(base + Math.random() * spread).toFixed(1),
    b: +(base * 0.8 + Math.random() * spread).toFixed(1),
    c: +(base * 0.6 + Math.random() * spread).toFixed(1),
  }));
}
export const getTotalSteamConsumption = () => genHourlyBars(10, 8, 6);
export const getTotalPowerConsumption = () => genHourlyBars(10, 7, 5);

// ---- Pump efficiencies trend ---------------------------------------------------
export const getPumpEfficiencies = () =>
  Array.from({ length: 20 }).map((_, i) => ({
    t: `${i}`,
    a: +(78 + Math.sin(i / 3) * 8).toFixed(1),
    b: +(70 + Math.cos(i / 4) * 6).toFixed(1),
  }));

// ---- Site locations (map) -------------------------------------------------------
export interface SiteLocation {
  name: string;
  x: number; // percentage position on the map svg
  y: number;
  status: Status;
}
export const getSiteLocations = (): SiteLocation[] => [
  { name: "Aberdeen Terminal", x: 61, y: 18, status: "good" },
  { name: "Grangemouth LNG", x: 55, y: 42, status: "good" },
  { name: "Teesside Complex", x: 66, y: 55, status: "warn" },
  { name: "Immingham Plant", x: 68, y: 63, status: "good" },
  { name: "Milford Haven", x: 30, y: 78, status: "good" },
  { name: "Southampton CPP", x: 55, y: 88, status: "bad" },
];

export const getSitePhotos = () => [
  { label: "LNG Plant — East Yard", tone: "from-amber-700/40 to-wall-900" },
  { label: "Column 3-E, Pad 2", tone: "from-amber-600/30 to-wall-900" },
  { label: "Reflux Pumps, Pad 2", tone: "from-amber-500/30 to-wall-900" },
];

// ---- Process flow diagram values -----------------------------------------------
export const getProcessFlow = () => ({
  feed: { label: "Feed", value: "1644.00", uom: "MMBTU" },
  vessels: [
    { key: "precooler", label: "Precooler" },
    { key: "scrub", label: "Scrub Column", value: "1644.00", uom: "MMBTU" },
    { key: "deeth", label: "De-Ethanizer", value: "953.00", uom: "MSCFD", sub: "19.37", subUom: "Ton/h" },
    { key: "deprop", label: "De-Propanizer", value: "148.00", uom: "MSCFD" },
    { key: "debut", label: "De-Butanizer", value: "89.00", uom: "MSCFD" },
  ],
  outputs: [
    { key: "c2", label: "C2" },
    { key: "c3", label: "C3" },
    { key: "c4", label: "C4" },
    { key: "condensate", label: "Condensate", value: "20.00", uom: "Ton/h" },
  ],
  top: { liquefaction: "Liquefaction", fuel: "Fuel or reinjection" },
});

// ---- Gauges -----------------------------------------------------------------
export interface GaugeData {
  label: string;
  unit: string;
  value: number;
  max: number;
  yesterday: number;
  planned: number;
  actual: number;
  reconciled: number;
}
export const getGauges = (): GaugeData[] => [
  { label: "LNG", unit: "Ton/h", value: 19.37, max: 25, yesterday: 18.2, planned: 437, actual: 480, reconciled: 459 },
  { label: "Propane", unit: "Ton/h", value: 3.01, max: 6, yesterday: 2.6, planned: 72, actual: 79, reconciled: 76 },
  { label: "Butane", unit: "Ton/h", value: 1.2, max: 3, yesterday: 1.05, planned: 25, actual: 28, reconciled: 26 },
];

// ---- Work orders panels -------------------------------------------------------
export const getMonthlyWorkOrders = () =>
  months.map((m, i) => ({ m, value: +(1.6 + Math.sin(i / 1.8) * 0.8 + Math.random() * 0.3).toFixed(2) }));

export const getWorkOrdersByPriority = () => [
  { name: "Within Scheduled Project", value: 76.2 },
  { name: "Within 3 Hours of Repair", value: 14.2 },
  { name: "Emergency Breakdown", value: 9.6 },
];

export interface TopAsset {
  code: string;
  desc: string;
  cost: number;
}
export const getTopAssetsByCost = (): TopAsset[] => [
  { code: "E-001", desc: "DeEthanizer", cost: 545492 },
  { code: "F-9001", desc: "DeEthanizer Reflux Drum", cost: 216500 },
  { code: "PT-201", desc: "Pressure Transmitter", cost: 128100 },
  { code: "PT-301", desc: "Pressure Transmitter", cost: 112806 },
  { code: "J-9002A", desc: "Pump", cost: 103200 },
];

export const getDelayedCompletionWO = () =>
  months.map((m, i) => ({ m, value: +(1.8 + Math.cos(i / 2) * 0.9 + Math.random() * 0.3).toFixed(2) }));

export const getWorkOrderStatusYTD = () => [
  { name: "Closed", value: 41.4 },
  { name: "Ready to Schedule", value: 29.7 },
  { name: "Complete", value: 18.2 },
  { name: "Scheduled", value: 10.7 },
];

export interface BadActor {
  asset: string;
  area: string;
  wo: number;
}
export const getBadActors = (): BadActor[] => [
  { asset: "M02", area: "DeEthanizer", wo: 241 },
  { asset: "PT-201", area: "DeEthanizer", wo: 240 },
  { asset: "PT-301", area: "DeEthanizer", wo: 239 },
  { asset: "C-9001", area: "DeEthanizer", wo: 238 },
  { asset: "J-9002A", area: "DeEthanizer", wo: 236 },
];

export const getDelayedStartWO = () =>
  months.map((m, i) => ({ m, value: +(2.6 + Math.sin(i / 1.5) * 1.4 + Math.random() * 0.4).toFixed(2) }));

export const getReliabilityMetrics = () => ({
  mtbf: { hours: 600, lastYear: 540 },
  mttr: { minutes: 20, lastYear: 26 },
});

export interface FailureReason {
  asset: string;
  reason: string;
}
export const getTopFailureReasons = (): FailureReason[] => [
  { asset: "FCV-203", reason: "Lack of Lubrication/Fluids" },
  { asset: "J-9002A", reason: "Accidental Damage/Fire" },
  { asset: "M0026", reason: "Accidental Damage/Fire" },
  { asset: "TT-2001", reason: "Accidental Damage/Fire" },
  { asset: "C-9001", reason: "Accidental Damage/Fire" },
];

// ---- Control of work button grid ----------------------------------------------
export interface CowButton {
  label: string;
  planned: number;
  actual: number;
  reconciled: number;
}
export const getControlOfWork = (): CowButton[] => [
  { label: "Work orders", planned: 887, actual: 840, reconciled: 812 },
  { label: "Work permits", planned: 214, actual: 206, reconciled: 198 },
  { label: "Risk assessments", planned: 96, actual: 91, reconciled: 88 },
  { label: "Isolations", planned: 58, actual: 54, reconciled: 52 },
  { label: "Collections", planned: 33, actual: 31, reconciled: 29 },
  { label: "Safe job analyses", planned: 71, actual: 68, reconciled: 65 },
  { label: "Lessons learned", planned: 20, actual: 19, reconciled: 18 },
  { label: "View plot plans", planned: 25, actual: 24, reconciled: 24 },
  { label: "Shift handovers", planned: 28, actual: 27, reconciled: 26 },
];

// ---- Bottom event / alarm log --------------------------------------------------
export interface EventLogRow {
  state: Status;
  node: string;
  group: string;
  name: string;
  comment: string;
  type: string;
  time: string;
}
export const getEventLog = (): EventLogRow[] => [
  { state: "bad", node: "PAD2", group: "Reflux", name: "J-9002A.VIB", comment: "High vibration trip approach", type: "Alarm", time: "26/03 01:31" },
  { state: "warn", node: "PAD2", group: "DeEth", name: "PT-201.PV", comment: "Pressure trending high", type: "Warning", time: "26/03 01:14" },
  { state: "good", node: "PAD2", group: "DeProp", name: "TT-2001.PV", comment: "Returned to normal", type: "Return", time: "26/03 00:58" },
  { state: "bad", node: "CPP", group: "Steam", name: "FCV-203.OUT", comment: "Lubrication fault flagged", type: "Alarm", time: "26/03 00:41" },
];
