const services = [
  {
    n: "I",
    title: "Consultoria Fiscal",
    text: "Planejamento tributário preventivo e corretivo, revisão de regimes e recuperação de créditos com respaldo técnico.",
  },
  {
    n: "II",
    title: "Treinamento de Processos",
    text: "Capacitação in company de equipes financeiras e administrativas, com rotinas documentadas e indicadores de controle.",
  },
  {
    n: "III",
    title: "Contabilidade",
    text: "Escrituração consultiva e relatórios gerenciais que traduzem os números em decisões de diretoria.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-marsala py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold/80">Serviços</span>
          <h2 className="mt-6 font-display text-4xl leading-tight font-light text-ivory md:text-5xl">
            Soluções sob medida
          </h2>
          <div className="hairline mx-auto mt-8 w-24" />
        </div>

        <div className="mt-16 grid gap-px bg-gold/15 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group bg-marsala p-10 transition-colors duration-500 hover:bg-marsala-deep"
            >
              <span className="font-display text-xs tracking-[0.3em] text-gold">{s.n}</span>
              <h3 className="mt-8 font-display text-2xl font-light text-ivory">{s.title}</h3>
              <div className="mt-6 h-px w-10 bg-gold/50 transition-all duration-500 group-hover:w-20" />
              <p className="mt-6 text-sm leading-relaxed font-light text-ivory/60">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}