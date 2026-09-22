import { Status } from "@/lib/data";

export const statusColor: Record<Status, string> = {
  good: "#3ecf7e",
  warn: "#f2c94c",
  bad: "#ef4b4b",
  info: "#3aa0ff",
};

export const statusBg: Record<Status, string> = {
  good: "bg-status-good",
  warn: "bg-status-warn",
  bad: "bg-status-bad",
  info: "bg-status-info",
};

// Orange-forward chart palette (swaps the source dashboard's blue/purple series)
export const seriesColors = ["#f97316", "#ffb454", "#ff5c1a", "#ffd08a", "#c2410c", "#ffe3c2"];
