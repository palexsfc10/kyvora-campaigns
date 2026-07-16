/**
 * @vitest-environment jsdom
 */
import { beforeEach, describe, expect, it } from "vitest";
import {
  buildAppDestination,
  captureAttribution,
  readAttribution,
} from "@/lib/attribution";

describe("attribution", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    window.history.replaceState(
      {},
      "",
      "/?utm_source=meta&utm_campaign=futsal&fbclid=abc123&v=B",
    );
  });

  it("captures utm and click ids", () => {
    const snap = captureAttribution({
      landingPath: "/",
      campaignSlug: "home",
      locale: "pt-BR",
      experimentVariant: "B",
    });
    expect(snap.params.utm_source).toBe("meta");
    expect(snap.params.fbclid).toBe("abc123");
    expect(readAttribution()?.campaignSlug).toBe("home");
  });

  it("builds app destination preserving params", () => {
    captureAttribution({
      landingPath: "/",
      campaignSlug: "home",
      locale: "pt-BR",
      experimentVariant: "B",
    });
    const href = buildAppDestination({
      baseUrl: "https://app.kyvoraapp.com.br",
      campaignSlug: "home",
      locale: "pt-BR",
      ctaSource: "hero",
      experimentVariant: "B",
    });
    const url = new URL(href);
    expect(url.origin).toBe("https://app.kyvoraapp.com.br");
    expect(url.searchParams.get("utm_source")).toBe("meta");
    expect(url.searchParams.get("fbclid")).toBe("abc123");
    expect(url.searchParams.get("ref")).toBe("lp");
    expect(url.searchParams.get("cta")).toBe("hero");
    expect(url.searchParams.get("lp_variant")).toBe("B");
  });
});
