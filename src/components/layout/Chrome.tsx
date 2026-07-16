"use client";

import { useEffect, useState } from "react";
import type { CampaignConfig } from "@/campaigns/schema";
import { localizePath, uiCopy } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { SignupCta } from "@/components/cta/SignupCta";
import Link from "next/link";

export function SiteHeader({
  campaign,
  path,
}: {
  campaign: CampaignConfig;
  path: string;
}) {
  const copy = uiCopy[campaign.locale];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-white/85 backdrop-blur-md">
      <div className="container-page flex h-14 items-center justify-between gap-3 sm:h-16">
        <Link
          href={localizePath(campaign.locale, "/")}
          className="text-lg font-extrabold tracking-tight text-[var(--ink)]"
        >
          Kyvora
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <nav aria-label={copy.language} className="hidden items-center gap-1 sm:flex">
            {(
              [
                ["pt-BR", "PT"],
                ["en", "EN"],
                ["es", "ES"],
              ] as const
            ).map(([locale, label]) => (
              <Link
                key={locale}
                href={localizePath(locale, path === "/" ? "/" : path)}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  campaign.locale === locale
                    ? "bg-[var(--brand-soft)] text-[var(--brand)]"
                    : "text-[var(--muted)] hover:text-[var(--ink)]"
                }`}
                hrefLang={locale}
              >
                {label}
              </Link>
            ))}
          </nav>
          <SignupCta
            label={campaign.primaryCta.label}
            destinationUrl={campaign.destinationUrl}
            campaignSlug={campaign.slug}
            locale={campaign.locale}
            source="header"
            experimentVariant={campaign.experiment?.variant}
            size="md"
            className="!min-h-10 !px-4 !text-sm"
          />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: CampaignConfig["locale"] }) {
  const copy = uiCopy[locale];
  return (
    <footer className="border-t border-[var(--border)] bg-white py-8">
      <div className="container-page flex flex-col gap-3 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {siteConfig.year} {siteConfig.company} · Kyvora
        </p>
        <div className="flex gap-4">
          <a
            href={`${siteConfig.institutionalUrl}${siteConfig.privacyPath}`}
            className="hover:text-[var(--ink)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.privacy}
          </a>
          <a
            href={`${siteConfig.institutionalUrl}${siteConfig.termsPath}`}
            className="hover:text-[var(--ink)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.terms}
          </a>
        </div>
      </div>
    </footer>
  );
}

export function StickyCta({ campaign }: { campaign: CampaignConfig }) {
  const [visible, setVisible] = useState(false);
  const copy = uiCopy[campaign.locale];

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-white/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(15,23,42,0.1)] backdrop-blur md:hidden">
      <div className="container-page flex items-center gap-3">
        <p className="min-w-0 flex-1 truncate text-sm font-medium text-[var(--ink)]">
          {copy.stickyCtaHint}
        </p>
        <SignupCta
          label={campaign.primaryCta.label}
          destinationUrl={campaign.destinationUrl}
          campaignSlug={campaign.slug}
          locale={campaign.locale}
          source="sticky"
          experimentVariant={campaign.experiment?.variant}
          size="md"
          className="shrink-0"
        />
      </div>
    </div>
  );
}

export function SkipLink({ locale }: { locale: CampaignConfig["locale"] }) {
  return (
    <a
      href="#conteudo-principal"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[var(--brand)] focus:px-4 focus:py-2 focus:text-white"
    >
      {uiCopy[locale].skipToContent}
    </a>
  );
}
