import { useEffect, useState } from "react";

function DiamondHalf({ side }: { side: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 100 90"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
      style={{
        clipPath: side === "left" ? "inset(0 50% 0 0)" : "inset(0 0 0 50%)",
      }}
    >
      <g
        stroke="var(--gold)"
        strokeWidth="1.1"
        strokeLinejoin="round"
        style={{ animation: "intro-shine 2.4s ease-in-out infinite" }}
      >
        <path d="M22 8 L78 8 L96 32 L50 84 L4 32 Z" />
        <path d="M4 32 L96 32" />
        <path d="M22 8 L36 32 L50 84 L64 32 L78 8" />
        <path d="M36 32 L50 8 L64 32" />
      </g>
    </svg>
  );
}

export function Intro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 2600);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden" aria-hidden="true">
      {(["left", "right"] as const).map((side) => (
        <div
          key={side}
          className="absolute inset-y-0 w-1/2 bg-marsala-deep"
          style={{
            [side === "left" ? "left" : "right"]: 0,
            animation: `intro-part-${side} 1.1s cubic-bezier(0.76, 0, 0.24, 1) 1.4s forwards`,
          }}
        >
          <div
            className="absolute top-1/2 h-40 w-40 -translate-y-1/2 md:h-56 md:w-56"
            style={{
              [side === "left" ? "right" : "left"]: 0,
              [side === "left" ? "marginRight" : "marginLeft"]: "-50%",
              animation: "intro-diamond 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              opacity: 0,
            }}
          >
            <DiamondHalf side={side} />
          </div>
        </div>
      ))}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--gold) 80%, transparent), transparent)",
          animation: "intro-line 2.5s ease-in-out forwards",
        }}
      />
    </div>
  );
}