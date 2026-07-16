# Kyvora Campaigns — Proposta Técnica

**Projeto:** `kyvora-campaigns`  
**Domínio:** `lp.kyvoraapp.com.br`  
**Hospedagem:** Vercel  
**Status:** Aguardando aprovação para iniciar desenvolvimento  
**Data:** 15 de julho de 2026  
**Versão:** 1.0

---

## 1. Sumário executivo

`kyvora-campaigns` é um projeto **independente** do site institucional (`kyvora-site`). Seu único trabalho é converter tráfego pago (Meta Ads, Google Ads e futuros canais) em **contas criadas** no SaaS (`https://app.kyvoraapp.com.br`).

Não haverá backend, banco, autenticação ou captura de leads neste projeto. Toda conversão é um redirect qualificado para o app, com UTM e eventos de analytics preservados.

| Projeto | Papel | Domínio |
|---------|-------|---------|
| `kyvora` | SaaS / produto | `app.kyvoraapp.com.br` |
| `kyvora-site` | Site institucional, SEO, blog, demo | `www.kyvoraapp.com.br` |
| `kyvora-campaigns` | Landing pages de campanha | `lp.kyvoraapp.com.br` |

---

## 2. Análise do Kyvora atual (identidade e posicionamento)

### 2.1 Posicionamento

O Kyvora se posiciona como **central de operação do clube** — da diretoria à comissão técnica — e não como “app de pelada”.

| Dimensão | Achado |
|----------|--------|
| Promessa central | Gestão profissional no lugar do improviso (WhatsApp + planilha) |
| Público | Presidentes, capitães, organizadores, gestores, ligas e campeonatos |
| Modalidades | Futebol, futsal, society e rotinas com elenco + partidas |
| Diferencial forte | Convocação por link — atleta confirma **sem criar conta** |
| Prova | Screenshots reais (ambiente Resenha FC), produto em produção |
| Honestidade | Financeiro “em breve” — não vender o que não existe |
| Oferta atual | 7 dias grátis, sem cartão; plano mensal R$ 29,90 (site) |
| Empresa | NTWS Labs |

### 2.2 Linguagem da marca

Tom observado no site institucional (pt-BR):

- Direto, operacional, sem hype vazio
- Frases curtas, dor concreta (“confirmações perdidas”, “planilhas desatualizadas”)
- Verbos de ação: organizar, convocar, registrar, acompanhar
- Microconfiança perto do CTA: “7 dias grátis · Sem cartão · Cancele quando quiser”
- Evita jargão de startup; fala a língua de quem organiza o time

**Para campanhas**, a linguagem deve ser **ainda mais agressiva em clareza e mensagem-match** com o anúncio, mantendo o mesmo tom — sem copiar blocos literais do site institucional como se fossem a LP.

### 2.3 Identidade visual a reutilizar (tokens, não código)

Extraído do design system do `kyvora-site`:

| Token | Valor | Uso |
|-------|-------|-----|
| Surface | `#09090b` | Fundo principal |
| Surface raised | `#0f0f14` | Camadas / seções |
| Surface overlay | `#16161d` | Elevações |
| Accent | `#818cf8` | CTA, eyebrow, destaques |
| Accent hover | `#6366f1` | Hover de CTA |
| Muted | `#71717a` / `#a1a1aa` | Texto secundário |
| Borders | `white` 6% / 11% | Separadores sutis |
| Glow | radial indigo suave | Atmosfera do hero |
| Tipografia base | Inter (brand atual) | UI e corpo |
| Logo / screenshots | Assets oficiais Kyvora | Hero, mockups, PWA |

**Princípio:** reutilizar **cores, logo, screenshots e linguagem**; **não** reutilizar componentes/código do site institucional. O código de `kyvora-campaigns` nasce do zero, otimizado para conversão.

### 2.4 O que o site institucional já faz (e o que a LP não deve repetir)

O `kyvora-site` já possui:

- Landing institucional completa (hero → problema → fluxo → features → pricing → FAQ)
- Página `/campaign/:slug` enxuta (ainda no mesmo domínio/código)
- Blog, páginas SEO, demo, lead capture, cookie consent
- Analytics (GA4, Clarity, Meta Pixel preparado)

**Decisão estratégica:** campanhas pagas **não** devem apontar para o institucional. Motivos:

1. Message match fraco com anúncios segmentados
2. Navegação e links de saída diluem conversão
3. Conteúdo institucional é amplo; ads pedem foco único
4. Separação de domínio (`lp.`) permite testes, deploys e métricas isoladas

---

## 3. Referências de mercado (inspiração, não cópia)

Estudo de padrões 2025–2026 em Stripe, Linear, Notion, Vercel, HubSpot, Slack e melhores práticas Meta/Google Ads:

| Referência | O que absorver |
|------------|----------------|
| **Linear** | Clareza cirúrgica no hero; produto em movimento como prova; um CTA dominante |
| **Stripe** | Hierarquia tipográfica forte; complexidade explicada sem ruído |
| **Notion** | Personas/use-cases via rotas (`/futsal`, `/futebol`) em vez de feature dump |
| **Vercel** | Performance como parte da marca; first paint agressivo |
| **Meta/Google Ads 2026** | Message match ad↔H1; mobile thumb-zone; sticky CTA; uma ação por página |

### Princípios de conversão adotados

1. **Um objetivo:** criar conta no app
2. **Message match:** cada rota/campanha ecoa o anúncio que a alimenta
3. **Produto como prova:** mockups e vídeo reais > ilustrações abstratas
4. **Fricção zero:** sem formulário na LP; CTA abre o SaaS
5. **Saídas mínimas:** header sem menu institucional; footer mínimo legal
6. **CTA sempre acessível:** sticky bar no mobile após scroll inicial
7. **Velocidade:** LCP < 2.5s mobile; meta Lighthouse ≥ 95
8. **Honestidade:** sem depoimentos inventados; sem números inventados; preços só quando definidos

---

## 4. Arquitetura proposta

### 4.1 Stack

| Camada | Escolha | Motivo |
|--------|---------|--------|
| UI | React 19 + TypeScript | Alinhado ao ecossistema Kyvora |
| Build | Vite 6 | Performance de build e DX |
| Estilo | Tailwind CSS 3 | Tokens de marca + utilitários |
| Rotas | React Router 7 | Multi-LP + i18n por path |
| Motion | Framer Motion | Microinterações leves + `prefers-reduced-motion` |
| i18n | i18next + react-i18next | `pt-BR` default, `es`, `en` |
| Deploy | Vercel | CDN edge, previews por PR |
| PWA | `vite-plugin-pwa` | Manifest + SW + ícones |
| SEO | `react-helmet-async` + scripts de build | Meta, OG, sitemap, robots, JSON-LD |

**Sem:** backend, DB, auth, CMS obrigatório na v1.

### 4.2 Estrutura de pastas

```text
kyvora-campaigns/
├── public/
│   ├── favicon/
│   ├── icons/                 # PWA 192/512
│   ├── og/
│   ├── screenshots/           # Assets reais do produto (WebP)
│   ├── robots.txt
│   └── manifest.webmanifest
├── scripts/
│   └── generate-seo.mjs       # sitemap.xml + robots
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   ├── router.tsx
│   │   └── providers.tsx
│   ├── pages/
│   │   ├── HomeLanding.tsx
│   │   ├── FutsalLanding.tsx
│   │   ├── FutebolLanding.tsx
│   │   ├── GestaoTimesLanding.tsx
│   │   ├── OrganizacaoJogosLanding.tsx
│   │   └── NotFound.tsx
│   ├── campaigns/             # Config por rota (copy, video, analytics)
│   │   ├── types.ts
│   │   ├── home.ts
│   │   ├── futsal.ts
│   │   ├── futebol.ts
│   │   ├── gestao-de-times.ts
│   │   └── organizacao-de-jogos.ts
│   ├── sections/              # Seções da LP (composição)
│   │   ├── HeroSection.tsx
│   │   ├── VideoSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── ScreenshotsSection.tsx
│   │   ├── SocialProofSection.tsx   # placeholder ready
│   │   ├── OfferSection.tsx         # estrutura flexível, sem preços v1
│   │   ├── FaqSection.tsx
│   │   └── FinalCtaSection.tsx
│   ├── components/
│   │   ├── layout/            # Header, StickyCta, FooterLegal, SkipLink
│   │   ├── ui/                # Button, Accordion, PhoneMockup, Container
│   │   ├── media/             # LazyVideo, OptimizedImage
│   │   ├── seo/               # PageMeta, JsonLd
│   │   └── analytics/         # AnalyticsProvider, hooks
│   ├── lib/
│   │   ├── analytics/         # providers + events + consent gate
│   │   ├── cta/               # buildAppUrl (UTM + source)
│   │   ├── seo/
│   │   └── motion/
│   ├── i18n/
│   │   ├── index.ts
│   │   └── locales/{pt-BR,en,es}/
│   ├── styles/
│   │   └── index.css          # tokens CSS + Tailwind
│   └── content/               # FAQ, benefits defaults (typed)
├── docs/
├── index.html
├── vite.config.ts
├── vercel.json
└── package.json
```

### 4.3 Rotas

```text
/                         → Landing principal (genérica de conversão)
/futsal                   → Message match futsal
/futebol                  → Message match futebol de campo
/gestao-de-times          → Ângulo gestão / presidente / capitão
/organizacao-de-jogos     → Ângulo partidas / convocação / Match Center
/es/*                     → Espanhol (mesmas rotas)
/en/*                     → Inglês (mesmas rotas)
```

**pt-BR** é o default em `/` (sem prefixo). `es` e `en` usam prefixo de locale.

Cada rota carrega um **Campaign Config** tipado:

```ts
type CampaignConfig = {
  id: string;
  slug: string;
  seo: { title: string; description: string; canonicalPath: string };
  hero: { headline; subheadline; primaryCta; secondaryCta; mockup };
  video?: { src; poster; captions? };
  problem: Pain[];
  benefits: Benefit[];
  howItWorks: Step[];
  screenshots: Screenshot[];
  socialProof: SocialProofSlot; // ready, vazio na v1
  offer: OfferSlot;             // flexible, sem preço na v1
  faq: FaqItem[];
  analytics: { campaignName: string; contentGroup: string };
  ab?: { experimentId?: string; variant?: string };
};
```

Isso habilita, no futuro: headline/vídeo/copy/oferta/analytics e A/B por rota **sem reescrever a página**.

### 4.4 Fluxo de conversão (único)

```text
Anúncio (Meta/Google)
    → lp.kyvoraapp.com.br/{rota}?utm_*&fbclid|gclid
    → Landing (message match)
    → Clique CTA (Criar conta / Começar grátis / Testar grátis / Iniciar agora)
    → https://app.kyvoraapp.com.br/?utm_*&ref=lp&campaign={id}&cta={source}
    → Cadastro no SaaS
```

Função central: `buildAppUrl({ campaign, ctaSource, searchParams })`.

---

## 5. Estrutura da primeira Landing (composição)

Ordem das seções — otimizada para scan mobile e objeções de ads:

| # | Seção | Objetivo CRO | Conteúdo v1 |
|---|-------|--------------|-------------|
| 1 | **Hero** | Confirmar message match + CTA | Headline forte, subheadline, CTA primário, CTA secundário (âncora vídeo), mockup Match Center |
| 2 | **Vídeo** | Prova em 30–60s | Placeholder estruturado até o vídeo final; eventos `video_start` / `video_complete` |
| 3 | **Problema** | Agitar dor real | WhatsApp, planilhas, desorganização, jogadores que somem, escalação confusa, histórico perdido |
| 4 | **Benefícios** | 4–6 benefícios reais | Elenco, convocação sem cadastro, partidas, Match Center, rankings, histórico |
| 5 | **Como funciona** | Reduzir ansiedade | Criar time → cadastrar → criar partida → convocar → organizar |
| 6 | **Screenshots** | Credibilidade visual | Imagens reais em mockup de celular (lazy) |
| 7 | **Prova social** | Slot pronto | Sem números/depoimentos inventados; UI “em breve” ou omitida até haver dados |
| 8 | **Oferta** | Estrutura flexível | Trial 7 dias / sem cartão; **sem preços** até definição |
| 9 | **FAQ** | Quebrar objeções de compra | Ver §5.1 |
| 10 | **CTA final** | Fechar | Bloco impactante → app |

**Chrome da página**

- Header mínimo: logo + CTA (sem menu institucional)
- Sticky CTA mobile (aparece após ~40% do hero)
- Footer legal mínimo: © NTWS Labs · Privacidade (link externo ao institucional ou página estática leve)

### 5.1 FAQ proposto (objeções de campanha)

1. Preciso pagar para testar?
2. Meus jogadores precisam criar conta?
3. Serve para futsal / futebol / society?
4. Funciona no celular?
5. Preciso instalar app?
6. Substitui o grupo do WhatsApp?
7. Em quanto tempo configuro meu time?
8. Posso cancelar quando quiser?
9. Meus dados ficam salvos?
10. Tem suporte se eu travar?

Respostas honestas, alinhadas ao produto real (incluindo “financeiro em breve” se a pergunta surgir).

### 5.2 Direção de copy do Hero (rascunho estratégico — a refinar na implementação)

**Landing principal (exemplo de direção):**

- Headline: foco em **organização profissional** + fim do improviso
- Subheadline: elenco, convocação, partidas e rankings em um fluxo
- CTA primário: `Começar grátis`
- CTA secundário: `Ver em 60 segundos` (scroll ao vídeo)

Cada rota vertical terá headline própria (message match).

---

## 6. Estratégia de conversão e campanhas

### 6.1 Papel de cada rota

| Rota | Ângulo do anúncio | Keyword / interesse típico |
|------|-------------------|----------------------------|
| `/` | Genérico “gestão de times” | Broad + remarketing |
| `/futsal` | Quadra, convocação futsal | Futsal amador / times |
| `/futebol` | Campo, temporada, elenco | Futebol amador |
| `/gestao-de-times` | Presidente / capitão / gestor | Dor de gestão |
| `/organizacao-de-jogos` | Partida, presença, Match Center | “organizar jogo / convocação” |

### 6.2 Message match (obrigatório)

Para cada criativo/ads set:

1. Headline da LP ecoa a promessa do anúncio
2. Visual do hero coerente com o criativo (mesmo ângulo de produto)
3. UTM `utm_content` / `utm_term` identificam variante
4. Evento `landing_view` carrega `campaign` + UTMs

### 6.3 A/B testing (fase 2)

Arquitetura preparada:

- `CampaignConfig.ab.experimentId` + `variant`
- Feature flag via query `?v=a|b` ou edge config Vercel (futuro)
- Métrica primária: `signup_click` → eventual conversão no app (GA4 + Meta)

v1: ship de configs estáveis; experimentos só após baseline de tráfego.

### 6.4 CTAs — hierarquia

| Prioridade | Label | Destino |
|------------|-------|---------|
| Primário | Começar grátis / Criar conta / Testar grátis / Iniciar agora | App signup |
| Secundário | Ver vídeo / Como funciona | Âncora interna (nunca outro site) |

Nunca colocar “Ver preços” como CTA primário enquanto preços não estiverem definidos na LP.

---

## 7. SEO técnico

Embora o tráfego principal seja pago, a LP deve nascer SEO-ready (brand searches, remarketing pages, expansão internacional).

| Item | Implementação |
|------|----------------|
| Meta title/description | Por rota + locale |
| Canonical | `https://lp.kyvoraapp.com.br{path}` |
| Open Graph | title, description, image 1200×630 por rota |
| Twitter Cards | `summary_large_image` |
| hreflang | `pt-BR`, `es`, `en`, `x-default` |
| robots.txt | Allow `/`; sitemap URL |
| sitemap.xml | Todas as rotas indexáveis |
| Schema.org | `Organization`, `WebSite`, `WebPage`, `FAQPage`, `SoftwareApplication` |
| Favicons | SVG + PNG + apple-touch |
| Manifest | PWA name “Kyvora” |

**Nota:** páginas de teste A/B com `noindex` quando forem variantes experimentais.

---

## 8. Analytics

### 8.1 Arquitetura (IDs ainda vazios)

```text
AnalyticsProvider
  ├─ Consent gate (preparado; LGPD-friendly)
  ├─ Google Tag Manager (container ID via env)
  ├─ GA4 (measurement ID via env)
  ├─ Meta Pixel (pixel ID via env)
  ├─ LinkedIn Insights (partner ID via env)
  └─ TikTok Pixel (pixel ID via env)
```

Env vars (exemplo):

```bash
VITE_GTM_ID=
VITE_GA4_MEASUREMENT_ID=
VITE_META_PIXEL_ID=
VITE_LINKEDIN_PARTNER_ID=
VITE_TIKTOK_PIXEL_ID=
VITE_APP_URL=https://app.kyvoraapp.com.br
VITE_SITE_URL=https://lp.kyvoraapp.com.br
```

Providers carregam **somente** se o ID existir e (quando aplicável) após consentimento.

### 8.2 Eventos obrigatórios (v1)

| Evento | Trigger |
|--------|---------|
| `landing_view` | Mount da LP (com rota, locale, UTMs) |
| `video_start` | Play do vídeo |
| `video_complete` | ≥90% assistido ou `ended` |
| `scroll_25` | 25% da página |
| `scroll_50` | 50% |
| `scroll_75` | 75% |
| `scroll_100` | 100% |
| `cta_click` | Qualquer CTA (com `source`) |
| `signup_click` | CTA que vai para cadastro no app |
| `faq_open` | Abertura de item do FAQ (`id`) |

Payload padrão: `{ campaign, route, locale, cta?, faq_id?, utm_* , gclid?, fbclid? }`.

### 8.3 Relação com o app

A LP dispara `signup_click`. A conversão final (`CompleteRegistration` / `sign_up`) deve ser confirmada **no app**. Documentar handoff de UTMs para o time do SaaS.

---

## 9. PWA

| Recurso | Detalhe |
|---------|---------|
| Manifest | `name`, `short_name`, `start_url`, `display: standalone`, theme `#09090b` |
| Ícones | 192, 512, maskable |
| Service Worker | Precache shell + assets críticos; network-first para HTML |
| Offline | Página fallback simples (“reconecte para continuar”) — sem fingir app offline completo |
| Install prompt | Não forçar; PWA ready sem poluir conversão de ads |

---

## 10. Performance

Meta: **Lighthouse ≥ 95** (Performance, Accessibility, Best Practices, SEO) em mobile.

| Técnica | Aplicação |
|---------|-----------|
| Code splitting | Por rota (`React.lazy`) |
| Imagens | WebP/AVIF, `width/height`, `loading="lazy"`, hero `fetchpriority="high"` |
| Fontes | Subset Inter (ou variável) com `font-display: swap`; preload crítico |
| Motion | Framer Motion só onde agrega; respeitar `prefers-reduced-motion` |
| Third-party | Analytics após idle / consent; nunca no critical path |
| Bundle | Evitar deps pesadas; tree-shake |
| Vercel | Headers de cache, compressão, prefetch DNS do app |

Breakpoints de QA: **320, 360, 390, 414, 768, 1024, 1280, 1600, 1920**.

---

## 11. Acessibilidade (WCAG 2.2 AA como alvo)

- Contraste AA em texto e CTAs
- Skip link para conteúdo
- Focus visível em todos os interativos
- Navegação por teclado completa (FAQ accordion, CTAs, vídeo)
- ARIA correto em accordion, sticky CTA, player
- Labels em controles; alt descritivo em screenshots
- Não depender só de cor para status
- Respeitar reduced motion

---

## 12. Internacionalização

| Locale | Path | Prioridade v1 |
|--------|------|---------------|
| pt-BR | `/`, `/futsal`, … | Completo |
| es | `/es`, `/es/futsal`, … | Completo (copy traduzida) |
| en | `/en`, `/en/futsal`, … | Completo (copy traduzida) |

- Detecção: path prefix (não auto-redirect agressivo que quebre ads)
- Language switcher discreto no header (opcional; pode ser omitido em variantes de ads “puras”)
- Datas/números: `Intl`

---

## 13. Design system da LP (independente)

### 13.1 Tokens CSS

Espelhar a marca Kyvora via CSS variables:

```css
:root {
  --surface: #09090b;
  --surface-raised: #0f0f14;
  --accent: #818cf8;
  --accent-hover: #6366f1;
  --text: #fafafa;
  --text-muted: #a1a1aa;
  /* … */
}
```

### 13.2 Motion (2–3 intenções, não ruído)

1. Hero: fade-up suave do copy + mockup
2. Sticky CTA: slide-in ao cruzar threshold
3. Seções: reveal leve no scroll (Intersection Observer / Framer)

Sem parallax pesado, sem glow excessivo, sem particles.

### 13.3 Componentes UI nucleares

`Button`, `Container`, `Section`, `PhoneMockup`, `DeviceFrame`, `Accordion`, `StickyCtaBar`, `OptimizedImage`, `LazyVideo`, `Eyebrow`, `TrustPills`.

---

## 14. Plano de escalabilidade

### Fase 1 — Fundação (após aprovação)

- Scaffold Vite + Tailwind + Router + i18n + PWA
- Design tokens + layout chrome
- Landing principal completa (10 seções)
- Analytics architecture (IDs vazios)
- SEO base + deploy Vercel + domínio `lp.`

### Fase 2 — Verticais

- `/futsal`, `/futebol`, `/gestao-de-times`, `/organizacao-de-jogos`
- Copy/vídeo/mockup por config
- OG images por rota

### Fase 3 — Ads maturity

- Preencher IDs de analytics
- Message-match kits por criativo
- Prova social real (quando existir)
- Oferta com preços (quando definidos)
- A/B testing formal

### Fase 4 — Escala internacional

- Creatives e LPs nativas por país
- Experimentos de headline por mercado
- Integração mais profunda com eventos do app

### Princípios de escala

- Nova campanha = novo `CampaignConfig` (não fork de página)
- Assets versionados em `/public`
- Preview deployments por PR na Vercel
- Nunca misturar conteúdo institucional neste repo

---

## 15. Infra e DevOps

| Item | Proposta |
|------|----------|
| Repo | `kyvora-campaigns` (independente) |
| CI | Vercel + typecheck + lint |
| Preview | URL por PR para QA de ads |
| Domínio | `lp.kyvoraapp.com.br` → projeto Vercel |
| Env | Preview / Production separados |
| Redirects | `vercel.json` para trailing slash, 404, locale |

---

## 16. Riscos e decisões abertas

| Tema | Recomendação | Precisa da sua decisão? |
|------|--------------|-------------------------|
| Tipografia | Manter Inter por consistência de marca nos ads | Confirmar |
| Preços na LP | Omitir na v1; só trial/benefício | Confirmado no brief |
| Prova social | Slot pronto, sem inventar | Confirmado no brief |
| Vídeo | Componente pronto + poster; asset depois | Fornecer vídeo 30–60s |
| Cookie banner | Preparar consent gate; UI mínima se houver pixels | Confirmar política LP |
| Link privacidade | Apontar para `www.kyvoraapp.com.br/privacidade` | Confirmar |
| CTA secundário | Âncora vídeo (não demo institucional) | Confirmar |
| Nome do repo | Pasta atual `kyvora-campaigs` → renomear para `kyvora-campaigns`? | Confirmar |

---

## 17. Critérios de aceite da v1

1. Landing principal mobile-first, 10 seções, identidade Kyvora
2. Todos os CTAs primários → `app.kyvoraapp.com.br` com UTM
3. Arquitetura multi-rota + i18n pronta (mesmo que verticais venham na fase 2)
4. SEO: meta, OG, Twitter, canonical, robots, sitemap, schema, favicons
5. Analytics: providers + 10 eventos — sem IDs obrigatórios
6. PWA: manifest + service worker + ícones
7. A11y: teclado, contraste, ARIA, reduced motion
8. Performance: caminho claro para Lighthouse ≥ 95
9. Zero backend / zero auth / zero DB
10. Código independente do `kyvora-site`

---

## 18. O que NÃO será feito nesta proposta

- Implementação de código (aguarda sua aprovação)
- Cópia de componentes do site institucional
- Inventar depoimentos, logos de clientes ou métricas
- Definir preços na UI
- Configurar IDs reais de ads/analytics
- Backend, CRM ou lead forms na LP

---

## 19. Pedido de aprovação

Com a aprovação deste documento, o próximo passo é:

1. Scaffold do projeto `kyvora-campaigns`
2. Tokens + layout + Hero da landing principal
3. Implementação das 10 seções
4. SEO + Analytics + PWA
5. Deploy Vercel + checklist de QA multi-breakpoint

**Aguardando seu OK (e respostas às decisões abertas da §16) para iniciar o desenvolvimento.**
