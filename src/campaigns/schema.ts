import { z } from "zod";

export const locales = ["pt-BR", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt-BR";

export const localePrefixes: Record<Locale, string> = {
  "pt-BR": "",
  en: "en",
  es: "es",
};

const ctaSchema = z.object({
  label: z.string().min(1),
  intent: z.enum(["signup", "scroll"]),
  scrollTarget: z.string().optional(),
});

const mediaSchema = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
});

const offerSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  description: z.string(),
  trialDays: z.number().nullable(),
  requiresCard: z.boolean().nullable(),
  priceBrl: z.string().nullable(),
  priceUsd: z.string().nullable(),
  highlights: z.array(z.string()).max(5),
  ctaLabel: z.string(),
  disclaimer: z.string(),
});

const seoSchema = z.object({
  title: z.string(),
  description: z.string(),
  ogImage: z.string(),
  robots: z.enum(["index,follow", "noindex,nofollow"]).default("index,follow"),
});

const heroVariantSchema = z.object({
  id: z.string(),
  headline: z.string(),
  subheadline: z.string(),
  rationale: z.string(),
});

const titledBlockSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export const campaignConfigSchema = z.object({
  slug: z.string().min(1),
  locale: z.enum(locales),
  audience: z.string(),
  campaignName: z.string(),
  theme: z.enum(["light"]).default("light"),
  heroVariant: z.string().default("A"),
  heroVariants: z.array(heroVariantSchema).min(1),
  primaryCta: ctaSchema,
  secondaryCta: ctaSchema,
  trustPills: z.array(z.string()).max(4),
  identification: z.object({
    eyebrow: z.string(),
    title: z.string(),
    description: z.string(),
    scenes: z.array(titledBlockSchema).min(3).max(5),
  }),
  product: z.object({
    eyebrow: z.string(),
    title: z.string(),
    description: z.string(),
  }),
  benefits: z.object({
    eyebrow: z.string(),
    title: z.string(),
    description: z.string(),
    items: z.array(titledBlockSchema).min(3).max(4),
  }),
  convocation: z.object({
    eyebrow: z.string(),
    title: z.string(),
    description: z.string(),
    steps: z.array(titledBlockSchema).min(3).max(4),
  }),
  howItWorks: z.object({
    eyebrow: z.string(),
    title: z.string(),
    description: z.string(),
    steps: z.array(titledBlockSchema).min(3).max(3),
  }),
  screenshots: z.array(
    z.object({
      key: z.string(),
      media: mediaSchema,
      caption: z.string(),
    }),
  ),
  offer: offerSchema,
  faq: z
    .object({
      eyebrow: z.string(),
      title: z.string(),
      items: z
        .array(
          z.object({
            id: z.string(),
            question: z.string(),
            answer: z.string(),
          }),
        )
        .min(4)
        .max(8),
    }),
  labels: z.object({
    trial: z.string(),
    card: z.string(),
    price: z.string(),
    cardRequired: z.string(),
    cardNotRequired: z.string(),
    days: z.string(),
    login: z.string(),
    navProduct: z.string(),
    navBenefits: z.string(),
    navHow: z.string(),
    navFaq: z.string(),
    accessApp: z.string(),
  }),
  finalCta: z.object({
    title: z.string(),
    description: z.string(),
    ctaLabel: z.string(),
  }),
  seo: seoSchema,
  tracking: z.object({
    contentGroup: z.string(),
  }),
  experiment: z
    .object({
      id: z.string().optional(),
      variant: z.string().optional(),
    })
    .optional(),
  destinationUrl: z.string().url(),
  indexable: z.boolean().default(true),
});

export type CampaignConfig = z.infer<typeof campaignConfigSchema>;
export type HeroVariant = z.infer<typeof heroVariantSchema>;

export function parseCampaignConfig(input: unknown): CampaignConfig {
  return campaignConfigSchema.parse(input);
}

export function resolveHero(config: CampaignConfig, variantId?: string) {
  const id = variantId ?? config.heroVariant;
  return (
    config.heroVariants.find((variant) => variant.id === id) ??
    config.heroVariants[0]
  );
}
