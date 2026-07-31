import retrato from "@/assets/retrato-hd.jpg.asset.json";

export function About() {
  return (
    <section id="sobre" className="bg-ivory py-24 text-marsala-deep md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        <div className="relative">
          <div className="absolute -top-5 -left-5 h-24 w-24 border-t border-l border-gold" />
          <div className="absolute -right-5 -bottom-5 h-24 w-24 border-r border-b border-gold" />
          <img
            src={retrato.url}
            alt="Mycherlanne Oliveira, consultora de gestão empresarial"
            loading="lazy"
            className="relative aspect-[4/5] w-full object-cover"
          />
        </div>

        <div>
          <span className="text-[10px] tracking-[0.3em] uppercase text-marsala/60">
            Sobre
          </span>
          <h2 className="mt-6 font-display text-4xl leading-tight font-light md:text-5xl">
            Mycherlanne <span className="italic text-marsala">Oliveira</span>
          </h2>
          <div className="hairline my-8 max-w-20" />
          <p className="text-sm leading-loose font-light text-marsala-deep/75 md:text-base">
            Especialista em gestão empresarial, une o rigor técnico da contabilidade a uma
            leitura estratégica do negócio. Cada diagnóstico nasce dos números e termina em
            decisão — clara, defensável e orientada a margem.
          </p>
          <p className="mt-5 text-sm leading-loose font-light text-marsala-deep/75 md:text-base">
            Atua junto a lideranças na estruturação fiscal, na maturidade dos processos
            internos e na construção de uma cultura de conformidade que sustenta o
            crescimento a longo prazo.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-marsala/15 pt-10">
            <div>
              <div className="font-display text-4xl font-light text-marsala">+150</div>
              <div className="mt-2 text-[10px] tracking-[0.22em] uppercase text-marsala-deep/50">
                Empresas atendidas
              </div>
            </div>
            <div>
              <div className="font-display text-4xl font-light text-marsala">15 anos</div>
              <div className="mt-2 text-[10px] tracking-[0.22em] uppercase text-marsala-deep/50">
                De experiência
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}