import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Mark } from "./Mark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-marsala-deep/90 backdrop-blur-md border-b border-gold/15"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#topo" className="flex items-center gap-3" aria-label={site.name}>
          <Mark className="h-7 w-7" />
          <span className="font-display text-base tracking-[0.18em] uppercase text-ivory">
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.22em] text-ivory/60 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          className="md:hidden text-gold"
        >
          <span className="block h-px w-6 bg-gold" />
          <span className="mt-1.5 block h-px w-6 bg-gold" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-gold/15 bg-marsala-deep/95 px-6 py-6 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[11px] uppercase tracking-[0.22em] text-ivory/70"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}