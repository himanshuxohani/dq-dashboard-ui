import { getProcessFlow } from "@/lib/data";

export default function ProcessFlowDiagram() {
  const flow = getProcessFlow();
  const vessels = flow.vessels;

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between px-4 text-[8px] text-ink-dim mb-1">
        <span className="border-b border-dashed border-amber-500/40 pb-0.5">{flow.top.liquefaction}</span>
        <span className="border-b border-dashed border-amber-500/40 pb-0.5">{flow.top.fuel}</span>
      </div>
      <svg viewBox="0 0 600 160" className="w-full flex-1">
        {/* header pipe */}
        <line x1="30" y1="20" x2="570" y2="20" stroke="#3a4048" strokeWidth="1.5" />
        {vessels.map((v, i) => {
          const x = 60 + i * 115;
          return (
            <g key={v.key}>
              <line x1={x} y1="20" x2={x} y2="46" stroke="#3a4048" strokeWidth="1.5" />
              {/* vessel body */}
              <rect x={x - 14} y="46" width="28" height="70" rx="14" fill="#1a1e24" stroke="#f97316" strokeOpacity="0.55" strokeWidth="1.3" />
              <rect x={x - 10} y={116 - 26} width="20" height="22" rx="3" fill="#f97316" fillOpacity="0.18" />
              {/* base pipe */}
              <line x1={x} y1="116" x2={x} y2="132" stroke="#3a4048" strokeWidth="1.5" />
              <circle cx={x} cy="136" r="4" fill="none" stroke="#3a4048" strokeWidth="1.3" />
              {i < vessels.length - 1 && (
                <line x1={x + 14} y1="80" x2={x + 101} y2="80" stroke="#3a4048" strokeWidth="1.2" markerEnd="url(#arrow)" />
              )}
              <text x={x} y="150" textAnchor="middle" className="fill-ink-muted" style={{ fontSize: 8 }}>
                {v.label}
              </text>
              {v.value && (
                <text x={x} y="44" textAnchor="middle" className="fill-amber-400" style={{ fontSize: 7 }}>
                  {v.value} {v.uom}
                </text>
              )}
            </g>
          );
        })}
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#3a4048" />
          </marker>
        </defs>
      </svg>
      <div className="flex justify-around px-2 -mt-1">
        {flow.outputs.map((o) => (
          <div key={o.key} className="text-center">
            <div className="text-[8px] text-ink-muted">{o.label}</div>
            {o.value && <div className="text-[7px] text-ink-dim tabular">{o.value} {o.uom}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
