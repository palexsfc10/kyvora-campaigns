"use client";

import { useEffect, useMemo, useState } from "react";
import { analytics } from "@/lib/analytics";
import { buildAppDestination } from "@/lib/attribution";
import { Button, ButtonLink } from "@/components/ui/Button";

type Props = {
  label: string;
  destinationUrl: string;
  campaignSlug: string;
  locale: string;
  source: string;
  experimentVariant?: string;
  className?: string;
  size?: "md" | "lg";
  variant?: "primary" | "secondary";
};

export function SignupCta({
  label,
  destinationUrl,
  campaignSlug,
  locale,
  source,
  experimentVariant,
  className,
  size = "lg",
  variant = "primary",
}: Props) {
  const fallback = useMemo(() => {
    const url = new URL(destinationUrl);
    url.searchParams.set("ref", "lp");
    url.searchParams.set("lp_campaign", campaignSlug);
    url.searchParams.set("lp_locale", locale);
    url.searchParams.set("cta", source);
    if (experimentVariant) url.searchParams.set("lp_variant", experimentVariant);
    return url.toString();
  }, [destinationUrl, campaignSlug, locale, source, experimentVariant]);

  const [href, setHref] = useState(fallback);

  useEffect(() => {
    setHref(
      buildAppDestination({
        baseUrl: destinationUrl,
        campaignSlug,
        locale,
        ctaSource: source,
        experimentVariant,
      }),
    );
  }, [destinationUrl, campaignSlug, locale, source, experimentVariant]);

  const onClick = () => {
    if (source === "hero" || source.startsWith("hero")) {
      analytics.track("hero_cta_click", { source });
    }
    analytics.track("signup_click", { source, campaign: campaignSlug });
    analytics.track("outbound_to_app", { source, campaign: campaignSlug });
  };

  return (
    <ButtonLink
      href={href}
      variant={variant}
      size={size}
      className={className}
      onClick={onClick}
      rel="noopener noreferrer"
    >
      {label}
    </ButtonLink>
  );
}

export function ScrollCta({
  label,
  target,
  source,
  className,
}: {
  label: string;
  target: string;
  source: string;
  className?: string;
}) {
  return (
    <Button
      type="button"
      variant="secondary"
      size="lg"
      className={className}
      onClick={() => {
        analytics.track("secondary_cta_click", { source });
        const el = document.querySelector(target);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      {label}
    </Button>
  );
}
