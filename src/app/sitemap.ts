import type { MetadataRoute } from "next";
import { getIndexableCampaigns } from "@/campaigns/registry";
import { localizePath } from "@/lib/i18n";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return getIndexableCampaigns().map((campaign) => {
    const path = campaign.slug === "home" ? "/" : `/${campaign.slug}`;
    return {
      url: `${siteConfig.siteUrl}${localizePath(campaign.locale, path)}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: campaign.slug === "home" ? 1 : 0.8,
    };
  });
}
