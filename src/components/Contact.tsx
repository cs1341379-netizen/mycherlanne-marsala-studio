import { useState } from "react";
import { z } from "zod";
import { site } from "@/lib/site";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(8, "Informe um WhatsApp válido").max(30),
  mensagem: z.string().trim().min(10, "Conte um pouco mais").max(1000),
});

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    const v = parsed.data;
    const texto = `Olá, Mycherlanne. Sou ${v.nome} (${v.email} · ${v.telefone}).\n\n${v.mensagem}`;
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const field =
    "w-full border-b border-gold/25 bg-transparent py-3 text-sm font-light text-ivory outline-none transition-colors placeholder:text-ivory/30 focus:border-gold";

  return (
    <section id="contato" className="bg-marsala-deep py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2">
        <div>
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold/70">Contato</span>
          <h2 className="mt-6 font-display text-4xl leading-tight font-light text-ivory md:text-5xl">
            Comece pelo <span className="italic text-gold">diagnóstico</span>
          </h2>
          <div className="hairline my-8 max-w-20" />
          <p className="max-w-md text-sm leading-relaxed font-light text-ivory/60">
            Conte o momento da sua empresa. O retorno é feito pessoalmente, com uma primeira
            leitura do cenário fiscal e dos processos.
          </p>

          <dl className="mt-12 space-y-5 text-sm font-light text-ivory/70">
            <div className="flex gap-4">
              <dt className="w-24 text-[10px] tracking-[0.22em] uppercase text-gold/60">
                WhatsApp
              </dt>
              <dd>{site.phoneDisplay}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-24 text-[10px] tracking-[0.22em] uppercase text-gold/60">
                E-mail
              </dt>
              <dd>{site.email}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-24 text-[10px] tracking-[0.22em] uppercase text-gold/60">
                Local
              </dt>
              <dd>{site.city}</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={onSubmit} noValidate className="space-y-8">
          {[
            { name: "nome", label: "Nome completo", type: "text" },
            { name: "email", label: "E-mail corporativo", type: "email" },
            { name: "telefone", label: "WhatsApp", type: "tel" },
          ].map((f) => (
            <div key={f.name}>
              <label
                htmlFor={f.name}
                className="mb-1 block text-[10px] tracking-[0.22em] uppercase text-ivory/40"
              >
                {f.label}
              </label>
              <input id={f.name} name={f.name} type={f.type} className={field} />
              {errors[f.name] && (
                <p className="mt-2 text-[11px] text-gold-soft">{errors[f.name]}</p>
              )}
            </div>
          ))}

          <div>
            <label
              htmlFor="mensagem"
              className="mb-1 block text-[10px] tracking-[0.22em] uppercase text-ivory/40"
            >
              Mensagem
            </label>
            <textarea id="mensagem" name="mensagem" rows={4} className={`${field} resize-none`} />
            {errors.mensagem && (
              <p className="mt-2 text-[11px] text-gold-soft">{errors.mensagem}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full border border-gold/60 py-4 text-[10px] font-semibold tracking-[0.28em] uppercase text-gold transition-all duration-500 hover:bg-gold hover:text-marsala-deep"
          >
            Enviar solicitação
          </button>
        </form>
      </div>
    </section>
  );
}