export const siteConfig = {
  name: "Kyvora",
  company: "NTWS Labs",
  domain: "lp.kyvoraapp.com.br",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lp.kyvoraapp.com.br",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.kyvoraapp.com.br",
  institutionalUrl:
    process.env.NEXT_PUBLIC_INSTITUTIONAL_URL ?? "https://www.kyvoraapp.com.br",
  privacyPath: "/privacidade",
  termsPath: "/termos",
  year: new Date().getFullYear(),
} as const;

/** Default trial length when env is unset — matches the live Kyvora offer. */
const DEFAULT_TRIAL_DAYS = 7;

export function getOfferEnv() {
  const trialRaw = process.env.NEXT_PUBLIC_OFFER_TRIAL_DAYS;
  const trialDays =
    trialRaw && trialRaw.trim() !== "" ? Number(trialRaw) : DEFAULT_TRIAL_DAYS;
  const requiresCardRaw = process.env.NEXT_PUBLIC_OFFER_REQUIRES_CARD;
  const requiresCard =
    requiresCardRaw === undefined || requiresCardRaw === ""
      ? false
      : requiresCardRaw === "true";

  return {
    trialDays: Number.isFinite(trialDays) ? trialDays : DEFAULT_TRIAL_DAYS,
    requiresCard,
    priceBrl: process.env.NEXT_PUBLIC_OFFER_PRICE_BRL?.trim() || null,
    priceUsd: process.env.NEXT_PUBLIC_OFFER_PRICE_USD?.trim() || null,
  };
}
