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

const videoSchema = z.object({
  src: z.string().optional(),
  poster: z.string(),
  captions: z.string().optional(),
  title: z.string(),
  description: z.string(),
  placeholderLabel: z.string(),
});

const offerSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  description: z.string(),
  trialDays: z.number().nullable(),
  requiresCard: z.boolean().nullable(),
  priceBrl: z.string().nullable(),
  priceUsd: z.string().nullable(),
  highlights: z.array(z.string()),
  ctaLabel: z.string(),
  disclaimer: z.string(),
});

const proofSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  description: z.string(),
  items: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
    }),
  ),
  testimonials: z
    .array(
      z.object({
        quote: z.string(),
        author: z.string(),
        role: z.string(),
      }),
    )
    .default([]),
  logos: z.array(z.string()).default([]),
  metrics: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
      }),
    )
    .default([]),
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
  trustPills: z.array(z.string()),
  identification: z.object({
    eyebrow: z.string(),
    title: z.string(),
    description: z.string(),
    scenes: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
  beforeAfter: z.object({
    eyebrow: z.string(),
    title: z.string(),
    beforeLabel: z.string(),
    afterLabel: z.string(),
    before: z.array(z.string()),
    after: z.array(z.string()),
  }),
  demo: z.object({
    eyebrow: z.string(),
    title: z.string(),
    description: z.string(),
    video: videoSchema,
    flows: z.array(z.string()),
  }),
  benefits: z.object({
    eyebrow: z.string(),
    title: z.string(),
    description: z.string(),
    items: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
  howItWorks: z.object({
    eyebrow: z.string(),
    title: z.string(),
    description: z.string(),
    steps: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
  screenshots: z.array(
    z.object({
      key: z.string(),
      media: mediaSchema,
      caption: z.string(),
    }),
  ),
  proof: proofSchema,
  offer: offerSchema,
  faq: z.array(
    z.object({
      id: z.string(),
      question: z.string(),
      answer: z.string(),
    }),
  ),
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
