const ATTRIBUTION_KEY = "kyvora_lp_attribution";

const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
  "ttclid",
  "li_fat_id",
  "v",
] as const;

export type AttributionSnapshot = {
  landingPath: string;
  campaignSlug: string;
  locale: string;
  experimentVariant?: string;
  capturedAt: string;
  params: Record<string, string>;
};

function readSearchParams(): URLSearchParams {
  if (typeof window === "undefined") return new URLSearchParams();
  return new URLSearchParams(window.location.search);
}

export function captureAttribution(input: {
  landingPath: string;
  campaignSlug: string;
  locale: string;
  experimentVariant?: string;
}): AttributionSnapshot {
  const search = readSearchParams();
  const params: Record<string, string> = {};

  for (const key of TRACKED_PARAMS) {
    const value = search.get(key);
    if (value) params[key] = value;
  }

  const snapshot: AttributionSnapshot = {
    landingPath: input.landingPath,
    campaignSlug: input.campaignSlug,
    locale: input.locale,
    capturedAt: new Date().toISOString(),
    params,
    ...(input.experimentVariant
      ? { experimentVariant: input.experimentVariant }
      : {}),
  };

  try {
    window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(snapshot));
  } catch {
    // Ignore storage failures (private mode, etc.)
  }

  return snapshot;
}

export function readAttribution(): AttributionSnapshot | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(ATTRIBUTION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AttributionSnapshot;
  } catch {
    return null;
  }
}

export function buildAppDestination(input: {
  baseUrl: string;
  campaignSlug: string;
  locale: string;
  ctaSource: string;
  experimentVariant?: string;
}): string {
  const url = new URL(input.baseUrl);
  const live = readSearchParams();
  const stored = readAttribution();

  const merge = (key: string, value: string | null | undefined) => {
    if (!value) return;
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  };

  for (const key of TRACKED_PARAMS) {
    merge(key, live.get(key) ?? stored?.params[key]);
  }

  url.searchParams.set("ref", "lp");
  url.searchParams.set("lp_campaign", input.campaignSlug);
  url.searchParams.set("lp_locale", input.locale);
  url.searchParams.set("cta", input.ctaSource);
  if (input.experimentVariant) {
    url.searchParams.set("lp_variant", input.experimentVariant);
  }
  if (stored?.landingPath) {
    url.searchParams.set("lp_path", stored.landingPath);
  }

  return url.toString();
}
