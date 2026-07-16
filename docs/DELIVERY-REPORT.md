# Relatório de entrega — kyvora-campaigns

**Data:** 15 de julho de 2026  
**Projeto:** `c:\projetos\kyvora-campaigns`  
**Preview local:** `http://127.0.0.1:3005`

---

## 1. Resumo executivo

Foi criada a plataforma independente **kyvora-campaigns**: operação de landing pages de aquisição para tráfego pago, separada do site institucional e do SaaS.

A primeira campanha (home) está completa em **pt-BR**, **en** e **es**, com narrativa CRO (dor → identificação → transformação → prova → funcionamento → oferta → ação), CTAs para `app.kyvoraapp.com.br`, atribuição de UTMs, analytics layer, consentimento LGPD, SEO e QA automatizado.

## 2. Estratégia de conversão

- Um único objetivo: **criar conta no app**
- Message match preparado via `CampaignConfig` + variantes de hero `?v=A|B|C`
- CTA principal: **Criar meu time grátis**
- CTA secundário: **Ver o Kyvora em ação** (scroll interno — nunca o site institucional)
- Header mínimo + sticky CTA mobile
- Sem preços inventados; sem prova social inventada
- Prova = produto real (screenshots Resenha FC)

## 3. Stack escolhida

| Tecnologia | Motivo |
|------------|--------|
| Next.js 15 App Router | SSG, Metadata API, `next/image`, Vercel-native, i18n por rota |
| TypeScript strict | Configs tipados |
| Tailwind CSS 4 | Tokens de campanha light |
| Zod | Validação de `CampaignConfig` |
| CSS motion | Animações leves sem custo de Framer Motion |
| Vitest + Playwright | Unit + E2E |
| Vercel Analytics / Speed Insights | Observabilidade |

**Decisão vs proposta Vite:** Next.js vence em SEO, OG, hreflang, edge e manutenção multi-campanha.

## 4. Arquitetura

- `src/campaigns/*` — configs tipadas por locale
- `src/components/landing` — composição da LP
- `src/lib/analytics` — `track/page/identify/consent/experiment`
- `src/lib/attribution` — UTMs + click IDs → app
- Rotas: `/`, `/en`, `/es`, `/[campaign]` (futuras)
- Deploy: Vercel + `lp.kyvoraapp.com.br`

## 5. Direção visual

Light campaign (não dark institucional): off-white `#F5F7FB`, indigo `#4F46E5`, Plus Jakarta Sans, mockups reais, respiro, mobile-first.

## 6. Estrutura de campanhas

`CampaignConfig` com: slug, locale, audience, headlines/variantes, CTAs, pains, benefits, demo, proof slot, offer configurável, FAQ, SEO, tracking, experiment, destinationUrl.

Slugs futuros reservados: futsal, futebol-amador, society, gestao-de-times, organizacao-de-jogos, presidentes, capitaes, amateur-football.

## 7. Copy (hero v1)

**Variante A (default):** Organize seu time sem depender de planilhas e do WhatsApp.  
**Variante B:** Organizar seu time não deveria ser mais difícil do que jogar.  
**Variante C:** Saiba quem vai jogar sem precisar cobrar todo mundo.

Teste: `/?v=A`, `/?v=B`, `/?v=C`

## 8. Hipóteses A/B preparadas

1. Headline A vs B vs C  
2. CTA “Criar meu time grátis” vs futuras labels no config  
3. Vídeo no hero vs imagem (quando vídeo existir)  
4. Ordem prova ↔ benefícios (swap via config futuro)  
5. Ângulo presidente vs capitão (rotas futuras)

## 9. Eventos de analytics

`landing_view`, `hero_cta_click`, `secondary_cta_click`, `video_*`, `scroll_25/50/75/100`, `faq_open`, `offer_view`, `signup_click`, `outbound_to_app`, `cookie_consent_*`, `experiment_exposure`

IDs vazios via `.env.example`.

## 10. Atribuição

Preserva `utm_*`, `fbclid`, `gclid`, `ttclid`, path, campaign, locale, variant no redirect ao app (`ref=lp`).

## 11–15. Checklists

| Área | Status |
|------|--------|
| SEO (title, desc, canonical, hreflang, OG, Twitter, robots, sitemap, JSON-LD, favicon, manifest) | ✅ |
| Acessibilidade (semântica, focus, teclado, contraste, reduced-motion) | ✅ (LH a11y 100) |
| Mobile (320–414 first, sticky CTA, thumb) | ✅ |
| Performance (SSG, next/image, JS reduzido) | 🟡 perto da meta |
| Privacidade (consent, scripts condicionais, link institucional) | ✅ |

## 16. Evidências de testes

- **Vitest:** 6/6 passed  
- **Playwright:** 6/6 passed (chromium + mobile-chrome) — UTMs, EN, FAQ  
- **Build:** sucesso (First Load JS ~137 kB)

## 17. Build

```
○ / /en /es  (static)
● /[campaign] (SSG ready)
○ robots.txt / sitemap.xml / manifest
```

## 18. Lighthouse (local, última medição)

| Ambiente | Perf | A11y | BP | SEO | LCP | CLS |
|----------|------|------|----|-----|-----|-----|
| Desktop | 93 | 100 | 96 | 100 | 0.7s | ~0.15 |
| Mobile | 88 | 100 | 96 | 100 | 2.5s | ~0.14 |

**Gap vs meta ≥95:** CLS ainda acima de 0.05 (provável carga de screenshots PNG grandes no hero). Próximo passo: converter screenshots para WebP/AVIF otimizados e validar no Lighthouse CI da Vercel (rede real).

## 19. Preview

- Local: `http://127.0.0.1:3005`
- Produção: conectar repo na Vercel + DNS `lp.kyvoraapp.com.br`

## 20. Pendências de conteúdo real

- Vídeo demo 30–60s (+ legendas)
- OG dedicado por campanha (hoje usa default)
- Depoimentos/logos/métricas reais
- Preços BRL/USD via env quando aprovados
- IDs GTM/GA4/Meta/TikTok/LinkedIn
- Assets por vertical (futsal, etc.)

## 21. Riscos

- CLS em PNGs grandes do produto
- Pasta antiga `kyvora-campaigs` ainda existe (IDE bloqueou rename) — projeto canônico é `kyvora-campaigns`
- Termos em `/termos` no institucional — confirmar se a rota existe

## 22. Próximos passos

1. Deploy Vercel + DNS `lp.`
2. Converter screenshots para WebP e re-medir CLS
3. Entregar vídeo e plugá-lo em `CampaignConfig.demo.video.src`
4. Criar configs `/futsal` e `/gestao-de-times`
5. Ligar pixels após consentimento
6. Rodar 1º teste A/B de headline com tráfego real

## 23. Parecer de prontidão

**Pronta para deploy preview e QA comercial.**  
**Condicionalmente pronta para tráfego pago leve** após: DNS + env de trial + otimização final de imagens (CLS).  
**Não pronta para escala pesada de mídia** até vídeo real, pixels e baseline de conversão medidos.
