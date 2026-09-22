import { Status } from "@/lib/data";
import { statusBg } from "./status";

export default function StatusDot({ status, pulse = false }: { status: Status; pulse?: boolean }) {
  return (
    <span
      className={`inline-block w-2 h-2 rounded-full ${statusBg[status]} ${
        pulse && status === "bad" ? "pulse-dot" : ""
      }`}
    />
  );
}
