"use client";

import { useEffect, useId, useState } from "react";
import type { CampaignConfig } from "@/campaigns/schema";
import { localizePath, uiCopy } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { SignupCta } from "@/components/cta/SignupCta";
import Link from "next/link";

const LANGUAGE_OPTIONS = [
  ["pt-BR", "PT"],
  ["en", "EN"],
  ["es", "ES"],
] as const;

function LanguageSwitcher({
  locale,
  path,
  className = "",
}: {
  locale: CampaignConfig["locale"];
  path: string;
  className?: string;
}) {
  const copy = uiCopy[locale];
  return (
    <nav aria-label={copy.language} className={`flex items-center gap-1 ${className}`}>
      {LANGUAGE_OPTIONS.map(([lang, label]) => (
        <Link
          key={lang}
          href={localizePath(lang, path === "/" ? "/" : path)}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${
            locale === lang
              ? "bg-[var(--brand-soft)] text-[var(--brand)]"
              : "text-[var(--muted)] hover:text-[var(--ink)]"
          }`}
          hrefLang={lang}
          aria-current={locale === lang ? "page" : undefined}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

export function SiteHeader({
  campaign,
  path,
}: {
  campaign: CampaignConfig;
  path: string;
}) {
  const copy = uiCopy[campaign.locale];
  const labels = campaign.labels;
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = [
    { href: "#produto", label: labels.navProduct },
    { href: "#beneficios", label: labels.navBenefits },
    { href: "#como-funciona", label: labels.navHow },
    { href: "#faq", label: labels.navFaq },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-white/90 backdrop-blur-md">
      <div className="container-page flex h-14 items-center justify-between gap-3 sm:h-16">
        <div className="flex items-center gap-6">
          <Link
            href={localizePath(campaign.locale, "/")}
            className="text-lg font-extrabold tracking-tight text-[var(--ink)]"
          >
            Kyvora
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--bg-soft)] hover:text-[var(--ink)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher
            locale={campaign.locale}
            path={path}
            className="hidden sm:flex"
          />
          <a
            href={siteConfig.appUrl}
            className="hidden text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--ink)] md:inline"
            rel="noopener noreferrer"
          >
            {labels.login}
          </a>
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
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--ink)] lg:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? copy.closeMenu : copy.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? copy.closeMenu : copy.openMenu}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              {menuOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id={menuId}
          className="border-t border-[var(--border)] bg-white lg:hidden"
        >
          <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--bg-soft)]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.appUrl}
              className="rounded-xl px-3 py-3 text-sm font-semibold text-[var(--muted)] hover:bg-[var(--bg-soft)] hover:text-[var(--ink)]"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              {labels.login}
            </a>
            <div className="mt-2 border-t border-[var(--border)] pt-3">
              <LanguageSwitcher locale={campaign.locale} path={path} />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter({
  locale,
  path,
  labels,
}: {
  locale: CampaignConfig["locale"];
  path: string;
  labels: CampaignConfig["labels"];
}) {
  const copy = uiCopy[locale];
  return (
    <footer className="border-t border-[var(--border)] bg-white py-10">
      <div className="container-page flex flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-extrabold text-[var(--ink)]">Kyvora</p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              © {siteConfig.year} {siteConfig.company}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a
              href={siteConfig.appUrl}
              className="font-medium text-[var(--muted)] hover:text-[var(--ink)]"
              rel="noopener noreferrer"
            >
              {labels.accessApp}
            </a>
            <a
              href={`${siteConfig.institutionalUrl}${siteConfig.privacyPath}`}
              className="font-medium text-[var(--muted)] hover:text-[var(--ink)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.privacy}
            </a>
            <a
              href={`${siteConfig.institutionalUrl}${siteConfig.termsPath}`}
              className="font-medium text-[var(--muted)] hover:text-[var(--ink)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.terms}
            </a>
            <a
              href={siteConfig.institutionalUrl}
              className="font-medium text-[var(--muted)] hover:text-[var(--ink)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.contact}
            </a>
          </div>
        </div>
        <LanguageSwitcher locale={locale} path={path} />
      </div>
    </footer>
  );
}

export function StickyCta({ campaign }: { campaign: CampaignConfig }) {
  const [visible, setVisible] = useState(false);
  const copy = uiCopy[campaign.locale];

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
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

/** Sets <html lang> after hydration for localized routes. */
export function DocumentLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
