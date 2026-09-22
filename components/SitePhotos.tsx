import { Camera } from "lucide-react";

export default function SitePhotos({ photos }: { photos: { label: string; tone: string }[] }) {
  return (
    <div className="flex flex-col gap-1.5 h-full">
      {photos.map((p) => (
        <div
          key={p.label}
          className={`relative flex-1 rounded-[3px] overflow-hidden border border-panel-border bg-gradient-to-br ${p.tone} flex items-end`}
        >
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: "repeating-linear-gradient(45deg, rgba(249,115,22,0.08) 0 2px, transparent 2px 10px)"
          }} />
          <Camera size={11} className="absolute top-1.5 right-1.5 text-ink-dim" />
          <span className="relative z-10 text-[8px] text-ink-muted bg-wall-900/60 px-1.5 py-0.5 m-1 rounded">{p.label}</span>
        </div>
      ))}
    </div>
  );
}
