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
    expect(parsed.faq.length).toBeGreaterThan(5);
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
      expect(campaign.proof.testimonials).toEqual([]);
      expect(campaign.proof.metrics).toEqual([]);
      expect(campaign.proof.logos).toEqual([]);
    }
  });
});
