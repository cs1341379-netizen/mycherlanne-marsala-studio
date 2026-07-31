const items = [
  {
    n: "01",
    title: "Diagnóstico antes da proposta",
    text: "Nenhuma recomendação sem leitura completa da estrutura fiscal e operacional.",
  },
  {
    n: "02",
    title: "Atendimento sênior e direto",
    text: "A condução é da própria consultora — sem camadas, sem ruído entre decisão e execução.",
  },
  {
    n: "03",
    title: "Conformidade como base",
    text: "Economia construída dentro da lei, com lastro documental e defesa técnica.",
  },
  {
    n: "04",
    title: "Legado nos processos",
    text: "A equipe interna sai capacitada para sustentar o padrão depois do projeto.",
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-marsala-deep py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-[10px] tracking-[0.3em] uppercase text-gold/70">
          Por que nos escolher
        </span>
        <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight font-light text-ivory md:text-5xl">
          Quatro princípios que sustentam cada entrega
        </h2>

        <div className="mt-16 divide-y divide-gold/12 border-t border-gold/12">
          {items.map((item) => (
            <div
              key={item.n}
              className="group grid gap-4 py-9 transition-colors md:grid-cols-[80px_1fr_1.2fr] md:items-baseline"
            >
              <span className="font-display text-sm text-gold/70">{item.n}</span>
              <h3 className="font-display text-2xl font-light text-ivory transition-colors group-hover:text-gold">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed font-light text-ivory/55">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}