export const ANALYTICS_EVENTS = [
  "landing_view",
  "hero_cta_click",
  "secondary_cta_click",
  "video_view",
  "video_start",
  "video_25",
  "video_50",
  "video_75",
  "video_complete",
  "scroll_25",
  "scroll_50",
  "scroll_75",
  "scroll_100",
  "pain_section_view",
  "benefit_view",
  "faq_open",
  "offer_view",
  "signup_click",
  "outbound_to_app",
  "cookie_consent_accept",
  "cookie_consent_reject",
  "experiment_exposure",
] as const;

export type AnalyticsEventName = (typeof ANALYTICS_EVENTS)[number];

export type AnalyticsPayload = Record<string, string | number | boolean | undefined | null>;

export type ConsentState = "pending" | "accepted" | "rejected";

const CONSENT_KEY = "kyvora_lp_consent";

type Provider = {
  name: string;
  track: (event: AnalyticsEventName, payload?: AnalyticsPayload) => void;
  page?: (path: string, payload?: AnalyticsPayload) => void;
};

const providers: Provider[] = [];
let consent: ConsentState = "pending";
let initialized = false;

function readConsent(): ConsentState {
  if (typeof window === "undefined") return "pending";
  const value = window.localStorage.getItem(CONSENT_KEY);
  if (value === "accepted" || value === "rejected") return value;
  return "pending";
}

function pushDataLayer(event: string, payload?: AnalyticsPayload) {
  if (typeof window === "undefined") return;
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...payload });
}

function createNoopProvider(): Provider {
  return {
    name: "noop",
    track: () => undefined,
    page: () => undefined,
  };
}

function createGtmProvider(): Provider | null {
  const id = process.env.NEXT_PUBLIC_GTM_ID?.trim();
  if (!id) return null;
  return {
    name: "gtm",
    track: (event, payload) => pushDataLayer(event, payload),
    page: (path, payload) => pushDataLayer("page_view", { path, ...payload }),
  };
}

function createGa4Provider(): Provider | null {
  const id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim();
  if (!id) return null;
  return {
    name: "ga4",
    track: (event, payload) => {
      const w = window as Window & { gtag?: (...args: unknown[]) => void };
      w.gtag?.("event", event, payload);
    },
    page: (path) => {
      const w = window as Window & { gtag?: (...args: unknown[]) => void };
      w.gtag?.("event", "page_view", { page_path: path });
    },
  };
}

function createMetaProvider(): Provider | null {
  const id = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();
  if (!id) return null;
  return {
    name: "meta",
    track: (event, payload) => {
      const w = window as Window & { fbq?: (...args: unknown[]) => void };
      w.fbq?.("trackCustom", event, payload);
    },
  };
}

function ensureProviders() {
  if (initialized) return;
  initialized = true;
  consent = readConsent();
  const list = [
    createGtmProvider(),
    createGa4Provider(),
    createMetaProvider(),
  ].filter(Boolean) as Provider[];
  providers.push(...(list.length ? list : [createNoopProvider()]));
}

export function getConsent(): ConsentState {
  if (typeof window === "undefined") return "pending";
  return readConsent();
}

export function setConsent(next: Exclude<ConsentState, "pending">) {
  ensureProviders();
  consent = next;
  window.localStorage.setItem(CONSENT_KEY, next);
  track(next === "accepted" ? "cookie_consent_accept" : "cookie_consent_reject");
}

export function track(event: AnalyticsEventName, payload?: AnalyticsPayload) {
  ensureProviders();
  if (consent === "rejected" && !event.startsWith("cookie_consent")) {
    return;
  }
  for (const provider of providers) {
    provider.track(event, payload);
  }
}

export function page(path: string, payload?: AnalyticsPayload) {
  ensureProviders();
  if (consent === "rejected") return;
  for (const provider of providers) {
    provider.page?.(path, payload);
  }
  track("landing_view", { path, ...payload });
}

export function identify(_userId?: string, _traits?: AnalyticsPayload) {
  void _userId;
  void _traits;
  // Reserved for future SaaS handoff — no PII collected on LP.
}

export function experiment(experimentId: string, variant: string) {
  track("experiment_exposure", { experiment_id: experimentId, variant });
}

export const analytics = {
  track,
  page,
  identify,
  consent: setConsent,
  getConsent,
  experiment,
};
