## Conceito

Uma landing page única, em português, com estética de alta joalheria corporativa: fundo marsala profundo, dourado champanhe, tipografia serifada display e muito respiro. Nada de template genérico — luxo contido, linhas finas, brilho sutil.

Base visual: a direção "Premium executive noir" refinada (a mais elegante das três), com o painel facetado de diamante da direção "Prism" reaproveitado no hero.

## Identidade

- Paleta: marsala `#5C0E24`, marsala profundo `#1A040A`, dourado champanhe `#C5A059`, off-white `#F8F5F2`
- Tipografia: serifada display (Cormorant Garamond) para títulos + sans leve (Montserrat) para texto
- Detalhes: filetes dourados de 1px, cantos vivos, sombras suaves, sem gradientes berrantes
- Logo enviada usada no topo e no rodapé

## Seções

1. **Hero** — nome, posicionamento e CTA; diamante facetado animado em CSS/SVG (rotação lenta, brilho percorrendo as arestas)
2. **Sobre a Mycherlanne** — retrato profissional (foto enviada) com moldura dourada + bio e dois números-chave
3. **Diferenciais** — quatro pontos em linhas finas, ritmo editorial
4. **Serviços** — três cards: Consultoria Fiscal, Treinamento de Processos, Contabilidade
5. **Cases/Resultados** — métricas em destaque com tipografia serifada grande
6. **Contato** — formulário (nome, e-mail, WhatsApp, mensagem) que abre o WhatsApp com a mensagem preenchida, com validação
7. **Rodapé** — logo, redes sociais (Instagram, LinkedIn, WhatsApp), direitos

## Movimento

Revelações em fade-up ao rolar, brilho lento no diamante, hover com filete dourado. Contido, nunca festivo. Totalmente responsivo (mobile-first no espaçamento e na tipografia).

## Detalhes técnicos

- Rota `/` (`src/routes/index.tsx`) com componentes por seção em `src/components/`
- Tokens marsala/dourado em `src/styles.css` (`@theme inline` + `:root`), sem cores hardcoded
- Fontes via `<link>` no `__root.tsx`
- Logo e foto publicadas como assets via `lovable-assets` a partir dos uploads
- SEO: title, description, og/twitter e JSON-LD `ProfessionalService` na rota `/`
- Formulário sem backend nesta etapa (envia via WhatsApp); posso ligar ao Lovable Cloud depois para gravar os leads

## Pendência

Vou usar dados de contato provisórios (telefone, e-mail, @ das redes). Me envie os reais que eu troco em segundos.
