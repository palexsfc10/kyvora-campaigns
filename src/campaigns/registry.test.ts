import { describe, expect, it } from "vitest";
import { getAllCampaigns, getCampaign } from "@/campaigns/registry";
import { parseCampaignConfig, resolveHero } from "@/campaigns/schema";
import { homePtBR } from "@/campaigns/home.pt-BR";

describe("campaign registry", () => {
  it("loads home campaigns for pt-BR, en and es", () => {
    expect(getCampaign("pt-BR", "home")?.slug).toBe("home");
    expect(getCampaign("en", "home")?.locale).toBe("en");
    expect(getCampaign("es", "home")?.locale).toBe("es");
    expect(getAllCampaigns()).toHaveLength(3);
  });

  it("validates campaign config with zod", () => {
    const parsed = parseCampaignConfig(homePtBR);
    expect(parsed.heroVariants.length).toBeGreaterThanOrEqual(3);
    expect(parsed.faq.items.length).toBeGreaterThanOrEqual(4);
    expect(parsed.howItWorks.steps).toHaveLength(3);
    expect(parsed.benefits.items.length).toBeLessThanOrEqual(4);
    expect(parsed.convocation.steps.length).toBeGreaterThanOrEqual(3);
  });

  it("resolves hero variants for A/B", () => {
    const campaign = getCampaign("pt-BR", "home");
    expect(campaign).toBeTruthy();
    const a = resolveHero(campaign!, "A");
    const b = resolveHero(campaign!, "B");
    const c = resolveHero(campaign!, "C");
    expect(a?.id).toBe("A");
    expect(b?.headline).not.toEqual(a?.headline);
    expect(c?.id).toBe("C");
  });

  it("does not invent social proof metrics", () => {
    for (const campaign of getAllCampaigns()) {
      expect(campaign.offer.trialDays).toBe(7);
      expect(campaign.destinationUrl).toContain("kyvoraapp.com.br");
    }
  });

  it("keeps locale-specific CTAs without mixed languages", () => {
    const pt = getCampaign("pt-BR", "home")!;
    const en = getCampaign("en", "home")!;
    const es = getCampaign("es", "home")!;
    expect(pt.primaryCta.label).toMatch(/conta/i);
    expect(en.primaryCta.label).toMatch(/account/i);
    expect(es.primaryCta.label).toMatch(/cuenta/i);
    const ptHeadline = pt.heroVariants[0]?.headline;
    const enHeadline = en.heroVariants[0]?.headline;
    const esHeadline = es.heroVariants[0]?.headline;
    expect(ptHeadline).toBeTruthy();
    expect(enHeadline).not.toEqual(ptHeadline);
    expect(esHeadline).not.toEqual(ptHeadline);
  });
});
