import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Differentials } from "@/components/Differentials";
import { Services } from "@/components/Services";
import { Results } from "@/components/Results";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const title = "Mycherlanne Oliveira | Consultoria Fiscal e Gestão Empresarial";
const description =
  "Consultoria fiscal, treinamento de processos e contabilidade estratégica para empresas que buscam precisão, conformidade e margem.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Mycherlanne Oliveira — Gestão Empresarial",
          description,
          areaServed: "BR",
          serviceType: [
            "Consultoria Fiscal",
            "Treinamento de Processos",
            "Contabilidade",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-marsala-deep scroll-smooth">
      <Header />
      <main>
        <Hero />
        <About />
        <Differentials />
        <Services />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
