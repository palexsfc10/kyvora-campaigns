# Kyvora Campaigns — Direção técnica e visual final

**Versão:** 2.0  
**Data:** 15 de julho de 2026

## Stack escolhida

| Escolha | Motivo |
|---------|--------|
| **Next.js 15 (App Router)** | SSG nativo, Metadata API, `next/image`, i18n por rota, deploy Vercel de primeira classe, RSC para shell leve |
| **TypeScript strict** | Configs de campanha tipados e validados |
| **Tailwind CSS 4** | Tokens de campanha, mobile-first, baixa fricção |
| **CSS Motion** | Animações leves com `prefers-reduced-motion`, sem custo de JS do Framer |
| **Zod** | Validação de `CampaignConfig` em build/teste |
| **Vitest + Playwright** | Unitários + E2E de CTAs, UTMs, consent, rotas |
| **Vercel Analytics / Speed Insights** | Observabilidade de performance em produção (sem IDs de ads) |

**Por que não Vite SPA:** Metadata/SEO, OG por rota, hreflang, sitemap e edge delivery são mais limpos no Next. Tráfego pago exige first paint e share cards confiáveis.

## Direção visual

Campanha **clara e energética**, distinta do dark institucional:

| Token | Valor |
|-------|-------|
| Background | `#F5F7FB` |
| Surface | `#FFFFFF` |
| Surface muted | `#EEF2FF` |
| Ink | `#0F172A` |
| Muted | `#64748B` |
| Brand | `#4F46E5` (indigo) |
| Brand hover | `#4338CA` |
| Accent support | `#0EA5E9` (sky) / `#10B981` (sucesso sutil) |
| Tipografia | Plus Jakarta Sans (display + UI) |

Evita: template SaaS roxo genérico, neon, glassmorphism excessivo, dark full-page, cards demais.

## Narrativa CRO

`Dor → Identificação → Transformação → Prova → Funcionamento → Oferta → Ação`

Headline v1 (variante A): **"Organize seu time sem depender de planilhas e do WhatsApp."**

Variantes A/B preparadas em `CampaignConfig.experiments.heroVariants`.

## Decisões vs proposta 1.0

| Tema | Proposta 1.0 | Decisão final |
|------|-------------|---------------|
| Tema visual | Dark institucional | **Light campaign** |
| Stack | Vite + React Router | **Next.js 15** |
| Tipografia | Inter | **Plus Jakarta Sans** |
| Pasta | `kyvora-campaigs` | Projeto em `kyvora-campaigns` (rename da pasta antiga bloqueado pelo IDE) |
