import { Diamond } from "./Diamond";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-marsala-deep pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 55% at 68% 40%, color-mix(in oklab, var(--marsala) 75%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal">
          <span className="font-display text-lg italic text-gold">Gestão Empresarial</span>
          <div className="hairline mt-6 max-w-24" />
          <h1 className="mt-8 font-display text-5xl leading-[1.05] font-light text-ivory md:text-7xl">
            Estratégia que
            <br />
            <span className="italic text-gold">lapida resultados</span>
          </h1>
          <p className="mt-8 max-w-lg text-sm leading-relaxed font-light text-ivory/65 md:text-base">
            Consultoria fiscal, processos e contabilidade estratégica para empresas que
            tratam precisão como padrão — não como diferencial.
          </p>
          <div className="mt-11 flex flex-wrap items-center gap-8">
            <a
              href="#contato"
              className="border border-gold/60 px-10 py-4 text-[10px] font-semibold tracking-[0.28em] uppercase text-gold transition-all duration-500 hover:bg-gold hover:text-marsala-deep"
            >
              Agendar consultoria
            </a>
            <a
              href="#servicos"
              className="text-[10px] tracking-[0.28em] uppercase text-ivory/50 transition-colors hover:text-gold"
            >
              Ver soluções
            </a>
          </div>
        </div>

        <div className="reveal mx-auto w-full max-w-sm" style={{ animationDelay: "180ms" }}>
          <Diamond className="aspect-square w-full" />
        </div>
      </div>
    </section>
  );
}