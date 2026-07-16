import type { Metadata } from "next";
import type { CampaignConfig, Locale } from "@/campaigns/schema";
import { localizePath } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import {
  AnalyticsBootstrap,
} from "@/components/analytics/AnalyticsBootstrap";
import { CookieConsent } from "@/components/consent/CookieConsent";
import {
  SiteFooter,
  SiteHeader,
  SkipLink,
  StickyCta,
} from "@/components/layout/Chrome";
import { LandingPage } from "@/components/landing/LandingPage";

export function buildCampaignMetadata(
  campaign: CampaignConfig,
  path: string,
): Metadata {
  const canonical = `${siteConfig.siteUrl}${localizePath(campaign.locale, path)}`;
  const languages: Record<string, string> = {
    "pt-BR": `${siteConfig.siteUrl}${localizePath("pt-BR", path)}`,
    en: `${siteConfig.siteUrl}${localizePath("en", path)}`,
    es: `${siteConfig.siteUrl}${localizePath("es", path)}`,
    "x-default": `${siteConfig.siteUrl}${localizePath("pt-BR", path)}`,
  };

  return {
    title: campaign.seo.title,
    description: campaign.seo.description,
    robots: campaign.seo.robots,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      locale: campaign.locale.replace("-", "_"),
      url: canonical,
      siteName: "Kyvora",
      title: campaign.seo.title,
      description: campaign.seo.description,
      images: [{ url: campaign.seo.ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: campaign.seo.title,
      description: campaign.seo.description,
      images: [campaign.seo.ogImage],
    },
  };
}

export function CampaignShell({
  campaign,
  path,
  heroVariantId,
}: {
  campaign: CampaignConfig;
  path: string;
  heroVariantId?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Kyvora",
        url: siteConfig.institutionalUrl,
        parentOrganization: {
          "@type": "Organization",
          name: siteConfig.company,
        },
      },
      {
        "@type": "WebPage",
        name: campaign.seo.title,
        description: campaign.seo.description,
        url: `${siteConfig.siteUrl}${localizePath(campaign.locale as Locale, path)}`,
        inLanguage: campaign.locale,
      },
      {
        "@type": "SoftwareApplication",
        name: "Kyvora",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: campaign.offer.priceBrl ?? "0",
          priceCurrency: "BRL",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: campaign.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SkipLink locale={campaign.locale} />
      <SiteHeader campaign={campaign} path={path} />
      <main id="conteudo-principal">
        <LandingPage campaign={campaign} heroVariantId={heroVariantId} />
      </main>
      <SiteFooter locale={campaign.locale} />
      <StickyCta campaign={campaign} />
      <CookieConsent locale={campaign.locale} />
      <AnalyticsBootstrap
        path={localizePath(campaign.locale, path)}
        campaignSlug={campaign.slug}
        locale={campaign.locale}
        contentGroup={campaign.tracking.contentGroup}
        experimentId={campaign.experiment?.id}
        experimentVariant={heroVariantId ?? campaign.experiment?.variant}
      />
    </>
  );
}
