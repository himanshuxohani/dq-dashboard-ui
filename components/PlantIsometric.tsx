export default function PlantIsometric() {
  return (
    <div className="relative w-full h-full bg-[#0e1116] rounded-[2px] overflow-hidden">
      <svg viewBox="0 0 400 240" className="w-full h-full">
        <defs>
          <linearGradient id="pad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1c2128" />
            <stop offset="100%" stopColor="#0e1116" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill="url(#pad)" />
        {/* ground grid */}
        <g stroke="#232833" strokeWidth="0.6">
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`h${i}`} x1={20 + i * 20} y1="160" x2={20 + i * 20 - 60} y2="230" />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`v${i}`} x1="0" y1={170 + i * 10} x2="360" y2={170 - i * 4} />
          ))}
        </g>
        {/* pipe rack */}
        <g stroke="#3ecf7e" strokeOpacity="0.75" strokeWidth="2" fill="none">
          <path d="M60 150 L340 150" />
          <path d="M60 158 L340 158" />
          <path d="M60 166 L340 166" />
        </g>
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1={70 + i * 38} y1="140" x2={70 + i * 38} y2="178" stroke="#2c323b" strokeWidth="2" />
        ))}
        {/* vessels */}
        {[90, 140, 190, 240, 290].map((x, i) => (
          <g key={x}>
            <rect x={x - 8} y={90 - i * 4} width="16" height={60 + i * 4} rx="8" fill="#c9a227" opacity="0.85" />
            <ellipse cx={x} cy={90 - i * 4} rx="8" ry="3" fill="#e8c25a" />
          </g>
        ))}
        {/* tanks */}
        <ellipse cx="330" cy="175" rx="26" ry="9" fill="#1f242c" stroke="#3a4048" />
        <rect x="304" y="140" width="52" height="35" fill="#20262e" stroke="#3a4048" />
        <ellipse cx="330" cy="140" rx="26" ry="9" fill="#262c35" stroke="#3a4048" />
        {/* crane / flare stack */}
        <line x1="40" y1="60" x2="40" y2="176" stroke="#454c56" strokeWidth="2" />
        <line x1="40" y1="60" x2="80" y2="80" stroke="#454c56" strokeWidth="1.4" />
        <circle cx="40" cy="58" r="2" fill="#f97316" className="pulse-dot" />
        {/* small figures / vehicles */}
        <rect x="150" y="190" width="18" height="8" rx="1.5" fill="#f97316" opacity="0.7" />
        <circle cx="154" cy="199" r="2" fill="#111" />
        <circle cx="164" cy="199" r="2" fill="#111" />
      </svg>
      <div className="absolute top-1.5 left-2 text-[8px] text-ink-dim bg-wall-900/60 px-1.5 py-0.5 rounded">
        Digital Twin — LNG Pad 2 (illustrative)
      </div>
    </div>
  );
}
