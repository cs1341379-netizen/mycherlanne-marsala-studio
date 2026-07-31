export function Diamond({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-[12%] rounded-full bg-gold/10 blur-3xl" />
      <svg
        viewBox="0 0 200 200"
        className="relative w-full h-full"
        style={{ animation: "slow-spin 60s linear infinite" }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--gold-soft)" stopOpacity="0.9" />
            <stop offset="55%" stopColor="var(--gold)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#edge)" strokeWidth="0.9" strokeLinejoin="round">
          <path d="M60 62 L100 20 L140 62 L100 176 Z" />
          <path d="M20 62 L60 20 L140 20 L180 62 L100 176 Z" />
          <path d="M20 62 L180 62" />
          <path d="M60 20 L60 62 L100 176" />
          <path d="M140 20 L140 62 L100 176" />
          <path d="M60 62 L100 20 L140 62" />
          <path d="M20 62 L100 20 L180 62" opacity="0.4" />
        </g>
        <g
          fill="none"
          stroke="var(--gold-soft)"
          strokeWidth="0.6"
          style={{ animation: "facet-glow 7s ease-in-out infinite" }}
        >
          <path d="M60 62 L100 176 L140 62 Z" />
        </g>
      </svg>
      <div
        className="pointer-events-none absolute inset-0 rounded-full border border-gold/15"
        style={{ animation: "slow-spin 90s linear infinite reverse" }}
      />
    </div>
  );
}