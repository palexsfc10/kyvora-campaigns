"use client";

import { useEffect } from "react";
import { analytics } from "@/lib/analytics";
import { captureAttribution } from "@/lib/attribution";

const SCROLL_MARKS = [25, 50, 75, 100] as const;

export function AnalyticsBootstrap({
  path,
  campaignSlug,
  locale,
  contentGroup,
  experimentId,
  experimentVariant,
}: {
  path: string;
  campaignSlug: string;
  locale: string;
  contentGroup: string;
  experimentId?: string;
  experimentVariant?: string;
}) {
  useEffect(() => {
    captureAttribution({
      landingPath: path,
      campaignSlug,
      locale,
      experimentVariant,
    });

    analytics.page(path, {
      campaign: campaignSlug,
      locale,
      content_group: contentGroup,
      variant: experimentVariant,
    });

    if (experimentId && experimentVariant) {
      analytics.experiment(experimentId, experimentVariant);
    }

    const fired = new Set<number>();
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const pct = Math.round((window.scrollY / max) * 100);
      for (const mark of SCROLL_MARKS) {
        if (pct >= mark && !fired.has(mark)) {
          fired.add(mark);
          analytics.track(`scroll_${mark}` as "scroll_25", {
            campaign: campaignSlug,
          });
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [
    path,
    campaignSlug,
    locale,
    contentGroup,
    experimentId,
    experimentVariant,
  ]);

  return null;
}
