"use client";

import { useEffect, useState } from "react";
import type { CampaignConfig } from "@/campaigns/schema";
import { resolveHero } from "@/campaigns/schema";

/** Client-only headline swap for A/B (`?v=A|B|C`). SSR keeps default variant. */
export function HeroCopy({
  campaign,
  heroVariantId,
}: {
  campaign: CampaignConfig;
  heroVariantId?: string;
}) {
  const [variantId, setVariantId] = useState(heroVariantId);

  useEffect(() => {
    const fromQuery = new URLSearchParams(window.location.search).get("v");
    if (fromQuery) setVariantId(fromQuery);
  }, []);

  const hero = resolveHero(campaign, variantId);

  return (
    <>
      <h1 className="text-balance text-[1.85rem] font-extrabold leading-[1.12] tracking-tight text-[var(--ink)] sm:text-4xl lg:text-[3.15rem] lg:leading-[1.05]">
        {hero?.headline}
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-[var(--muted)] sm:text-lg lg:mx-0">
        {hero?.subheadline}
      </p>
    </>
  );
}
