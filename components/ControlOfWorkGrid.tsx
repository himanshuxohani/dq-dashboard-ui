import {
  ClipboardList,
  FileCheck2,
  ShieldAlert,
  Lock,
  Boxes,
  ShieldCheck,
  GraduationCap,
  Map,
  Users,
} from "lucide-react";
import { CowButton } from "@/lib/data";

const icons = [ClipboardList, FileCheck2, ShieldAlert, Lock, Boxes, ShieldCheck, GraduationCap, Map, Users];

export default function ControlOfWorkGrid({ items }: { items: CowButton[] }) {
  return (
    <div className="grid grid-cols-3 gap-1.5 h-full">
      {items.map((it, i) => {
        const Icon = icons[i % icons.length];
        return (
          <button
            key={it.label}
            className="group flex flex-col items-center justify-center gap-1 bg-wall-800/70 border border-panel-border rounded-[3px] py-1.5 hover:border-amber-500/60 hover:bg-amber-500/[0.06] transition-colors"
          >
            <Icon size={14} className="text-amber-400/90 group-hover:text-amber-400" />
            <span className="text-[8px] text-ink-muted text-center leading-tight px-1">{it.label}</span>
          </button>
        );
      })}
    </div>
  );
}
