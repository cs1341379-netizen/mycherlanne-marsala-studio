import { site } from "@/lib/site";
import { Mark } from "./Mark";

export function Footer() {
  const links = [
    { label: "Instagram", href: site.instagram },
    { label: "LinkedIn", href: site.linkedin },
    { label: "WhatsApp", href: `https://wa.me/${site.whatsapp}` },
  ];

  return (
    <footer className="border-t border-gold/15 bg-marsala-deep py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <Mark className="h-8 w-8" />
          <div>
            <div className="font-display text-sm tracking-[0.18em] uppercase text-ivory">
              {site.name}
            </div>
            <div className="text-[10px] tracking-[0.22em] uppercase text-gold/60">
              {site.tagline}
            </div>
          </div>
        </div>

        <nav className="flex gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.22em] uppercase text-ivory/50 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p className="text-[10px] tracking-[0.18em] uppercase text-ivory/25">
          © {new Date().getFullYear()} · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}