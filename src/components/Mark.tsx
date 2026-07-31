export function Mark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 90" className={className} aria-hidden="true" fill="none">
      <g stroke="var(--gold)" strokeWidth="2.4" strokeLinejoin="round">
        <path d="M22 8 L78 8 L96 32 L50 84 L4 32 Z" />
        <path d="M4 32 L96 32" />
        <path d="M22 8 L36 32 L50 84 L64 32 L78 8" />
        <path d="M36 32 L50 8 L64 32" />
      </g>
    </svg>
  );
}