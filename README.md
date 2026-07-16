# Kyvora Campaigns

Plataforma independente de landing pages de aquisição do Kyvora.

- **Domínio:** `https://lp.kyvoraapp.com.br`
- **CTA destino:** `https://app.kyvoraapp.com.br`
- **Stack:** Next.js 15 · TypeScript · Tailwind CSS 4 · Framer Motion · Zod

## Desenvolvimento

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Qualidade

```bash
npm run qa          # typecheck + lint + unit + build
npm run test        # vitest
npm run test:e2e    # playwright (requer build prévio: npm run build)
```

## Campanhas

Configs tipadas em `src/campaigns/`. A home existe em `pt-BR`, `en` e `es`.

Variante de hero A/B via query: `/?v=A|B|C`

## Deploy (Vercel)

1. Importar o repo `kyvora-campaigns`
2. Framework preset: Next.js
3. Configurar variáveis de `.env.example`
4. Apontar DNS `lp.kyvoraapp.com.br` para o projeto

Não altera `kyvora-site` nem o SaaS.

## Documentação

- `docs/DIRECTION.md` — direção técnica/visual final
- `docs/PROPOSTA-TECNICA-KYVORA-CAMPAIGNS.md` — proposta inicial
- `docs/DELIVERY-REPORT.md` — relatório de entrega
