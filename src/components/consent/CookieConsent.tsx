"use client";

import { useEffect, useState } from "react";
import { analytics, type ConsentState } from "@/lib/analytics";
import { siteConfig } from "@/config/site";
import { uiCopy } from "@/lib/i18n";
import type { Locale } from "@/campaigns/schema";
import { Button } from "@/components/ui/Button";

export function CookieConsent({ locale }: { locale: Locale }) {
  const copy = uiCopy[locale];
  const [state, setState] = useState<ConsentState>("pending");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setState(analytics.getConsent());
    setReady(true);
  }, []);

  if (!ready || state !== "pending") return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-body"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--border)] bg-white/95 p-4 shadow-[0_-12px_40px_rgba(15,23,42,0.12)] backdrop-blur-md sm:p-5"
    >
      <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p id="cookie-title" className="text-sm font-semibold text-[var(--ink)]">
            {copy.cookieTitle}
          </p>
          <p id="cookie-body" className="mt-1 text-sm text-[var(--muted)]">
            {copy.cookieBody}{" "}
            <a
              className="font-medium text-[var(--brand)] underline-offset-2 hover:underline"
              href={`${siteConfig.institutionalUrl}${siteConfig.privacyPath}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.privacy}
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              analytics.consent("rejected");
              setState("rejected");
            }}
          >
            {copy.cookieReject}
          </Button>
          <Button
            type="button"
            onClick={() => {
              analytics.consent("accepted");
              setState("accepted");
            }}
          >
            {copy.cookieAccept}
          </Button>
        </div>
      </div>
    </div>
  );
}
