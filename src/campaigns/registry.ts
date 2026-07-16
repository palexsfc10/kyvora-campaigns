import { homeEn } from "./home.en";
import { homeEs } from "./home.es";
import { homePtBR } from "./home.pt-BR";
import {
  type CampaignConfig,
  type Locale,
  defaultLocale,
  parseCampaignConfig,
} from "./schema";

const campaigns: CampaignConfig[] = [
  parseCampaignConfig(homePtBR),
  parseCampaignConfig(homeEn),
  parseCampaignConfig(homeEs),
];

export const FUTURE_CAMPAIGN_SLUGS = [
  "futsal",
  "futebol-amador",
  "society",
  "gestao-de-times",
  "organizacao-de-jogos",
  "presidentes",
  "capitaes",
  "amateur-football",
] as const;

export function getCampaign(locale: Locale, slug = "home"): CampaignConfig | null {
  return campaigns.find((c) => c.locale === locale && c.slug === slug) ?? null;
}

export function getAllCampaigns(): CampaignConfig[] {
  return campaigns;
}

export function getIndexableCampaigns(): CampaignConfig[] {
  return campaigns.filter((c) => c.indexable);
}

export function isLocale(value: string): value is Locale {
  return value === "pt-BR" || value === "en" || value === "es";
}

export function resolveLocaleParam(param: string | undefined): Locale {
  if (!param || param === "pt" || param === "pt-br" || param === "pt-BR") {
    return defaultLocale;
  }
  if (param === "en") return "en";
  if (param === "es") return "es";
  return defaultLocale;
}
