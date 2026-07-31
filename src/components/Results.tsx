const metrics = [
  { value: "R$ 14M", label: "Em economia fiscal apurada" },
  { value: "+500", label: "Processos revisados" },
  { value: "98%", label: "Retenção de clientes" },
];

const cases = [
  {
    sector: "Indústria · Ceará",
    result: "Revisão de regime tributário com redução de 22% na carga anual.",
  },
  {
    sector: "Varejo · Multi-loja",
    result: "Padronização de rotinas fiscais e fechamento contábil em 5 dias úteis.",
  },
  {
    sector: "Serviços · Nacional",
    result: "Capacitação da equipe interna e eliminação de autuações recorrentes.",
  },
];

export function Results() {
  return (
    <section id="resultados" className="bg-ivory py-24 text-marsala-deep md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-[10px] tracking-[0.3em] uppercase text-marsala/60">
          Cases &amp; Resultados
        </span>
        <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight font-light md:text-5xl">
          Números que resistem à auditoria
        </h2>

        <div className="mt-16 grid gap-12 border-y border-marsala/15 py-12 md:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="font-display text-5xl font-light text-marsala md:text-6xl">
                {m.value}
              </div>
              <div className="mt-3 text-[10px] tracking-[0.22em] uppercase text-marsala-deep/50">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {cases.map((c) => (
            <div key={c.sector} className="border-l border-gold pl-6">
              <div className="text-[10px] tracking-[0.22em] uppercase text-marsala/70">
                {c.sector}
              </div>
              <p className="mt-4 text-sm leading-relaxed font-light text-marsala-deep/75">
                {c.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}