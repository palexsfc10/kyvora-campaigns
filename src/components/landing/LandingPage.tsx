"use client";

import type { CampaignConfig } from "@/campaigns/schema";
import { Container, Section } from "@/components/ui/Section";
import { AppShot, PhoneVideo, ScreenshotCard } from "@/components/ui/Media";
import { ScrollCta, SignupCta } from "@/components/cta/SignupCta";
import { HeroCopy } from "@/components/landing/HeroCopy";
import { analytics } from "@/lib/analytics";
import { useEffect, useRef, useState } from "react";

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

const BENEFIT_ICONS = [
  // Sports
  <path
    key="sports"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 3v3m0 12v3M3 12h3m12 0h3M6.3 6.3l2.1 2.1m7.2 7.2 2.1 2.1m0-11.4-2.1 2.1M8.4 15.6l-2.1 2.1"
  />,
  // Call-up / link
  <path
    key="link"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M13.5 6.5a3.5 3.5 0 0 1 5 5l-2 2a3.5 3.5 0 0 1-5-5m-1 5a3.5 3.5 0 0 1-5-5l2-2a3.5 3.5 0 0 1 5 5"
  />,
  // Stats
  <path
    key="stats"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M4 19V9m5 10V5m5 14v-7m5 7V8"
  />,
  // Finance
  <path
    key="finance"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 3v18m-6-4.5c0 1.5 2.7 2.5 6 2.5s6-1 6-2.5S15.3 14 12 14s-6-1-6-2.5S8.7 9 12 9s6 1 6 2.5"
  />,
];

export function LandingPage({
  campaign,
  heroVariantId,
}: {
  campaign: CampaignConfig;
  heroVariantId?: string;
}) {
  const publicShot =
    campaign.screenshots.find((s) => s.key === "public-convocation") ??
    campaign.screenshots[0];
  const desktopShot =
    campaign.screenshots.find((s) => s.key === "match-center") ??
    campaign.screenshots[1] ??
    campaign.screenshots[0];

  return (
    <>
      <Section className="relative overflow-hidden pb-8 pt-8 sm:pb-12 sm:pt-12 lg:pb-16 lg:pt-14">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="reveal text-center lg:text-left">
              <p className="eyebrow mb-3 justify-center lg:justify-start">Kyvora</p>
              <HeroCopy campaign={campaign} heroVariantId={heroVariantId} />
              <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <SignupCta
                  label={campaign.primaryCta.label}
                  destinationUrl={campaign.destinationUrl}
                  campaignSlug={campaign.slug}
                  locale={campaign.locale}
                  source="hero"
                  experimentVariant={heroVariantId ?? campaign.experiment?.variant}
                  className="w-full sm:w-auto"
                />
                <ScrollCta
                  label={campaign.secondaryCta.label}
                  target={campaign.secondaryCta.scrollTarget ?? "#demonstracao"}
                  source="hero-secondary"
                  className="w-full sm:w-auto"
                />
              </div>
              <ul className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
                {campaign.trustPills.map((pill) => (
                  <li
                    key={pill}
                    className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[var(--muted)] ring-1 ring-[var(--border)]"
                  >
                    {pill}
                  </li>
                ))}
              </ul>
            </div>

            <Reveal className="relative">
              <div
                className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.14),transparent_68%)]"
                aria-hidden
              />
              <div className="relative space-y-3">
                {desktopShot ? (
                  <AppShot
                    src={desktopShot.media.src}
                    alt={desktopShot.media.alt}
                    priority
                    aspectClassName="aspect-[16/10]"
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                ) : null}
                {publicShot ? (
                  <div className="mx-auto w-full max-w-sm sm:ml-auto sm:mr-0 sm:max-w-[70%]">
                    <AppShot
                      src={publicShot.media.src}
                      alt={publicShot.media.alt}
                      priority
                      aspectClassName="aspect-[3/2]"
                      sizes="(max-width: 768px) 90vw, 320px"
                      className="ring-2 ring-white/10"
                    />
                  </div>
                ) : null}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section
        id="identificacao"
        ariaLabelledby="identificacao-title"
        className="bg-[var(--bg-soft)]/50"
      >
        <Container>
          <Reveal>
            <p className="eyebrow mb-3">{campaign.identification.eyebrow}</p>
            <h2
              id="identificacao-title"
              className="max-w-2xl text-balance text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              {campaign.identification.title}
            </h2>
            <p className="mt-3 max-w-xl text-pretty text-[var(--muted)]">
              {campaign.identification.description}
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {campaign.identification.scenes.map((scene) => (
              <li key={scene.title}>
                <Reveal>
                  <article className="h-full border-l-2 border-[var(--brand)]/35 bg-white/70 py-4 pl-4 pr-3 sm:pl-5">
                    <h3 className="text-base font-bold">{scene.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">
                      {scene.description}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {campaign.product.video ? (
        <DemoVideoSection campaign={campaign} />
      ) : null}

      <Section id="produto" ariaLabelledby="produto-title">
        <Container>
          <Reveal>
            <p className="eyebrow mb-3">{campaign.product.eyebrow}</p>
            <h2
              id="produto-title"
              className="max-w-2xl text-balance text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              {campaign.product.title}
            </h2>
            <p className="mt-3 max-w-xl text-pretty text-[var(--muted)]">
              {campaign.product.description}
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {campaign.screenshots
              .filter(
                (s) =>
                  s.key !== "public-convocation" && s.key !== "match-center",
              )
              .map((shot, index) => (
                <Reveal key={shot.key}>
                  <ScreenshotCard
                    src={shot.media.src}
                    alt={shot.media.alt}
                    caption={shot.caption}
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </Reveal>
              ))}
          </div>
        </Container>
      </Section>

      <Section
        id="beneficios"
        ariaLabelledby="beneficios-title"
        className="bg-white"
      >
        <Container>
          <Reveal>
            <p className="eyebrow mb-3">{campaign.benefits.eyebrow}</p>
            <h2
              id="beneficios-title"
              className="max-w-2xl text-balance text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              {campaign.benefits.title}
            </h2>
            <p className="mt-3 max-w-xl text-pretty text-[var(--muted)]">
              {campaign.benefits.description}
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {campaign.benefits.items.map((item, index) => (
              <Reveal key={item.title}>
                <article className="h-full rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 p-5 sm:p-6">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-[var(--brand)]"
                    aria-hidden
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      {BENEFIT_ICONS[index] ?? BENEFIT_ICONS[0]}
                    </svg>
                  </span>
                  <h3 className="mt-4 text-base font-bold leading-snug">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section
        id="convocacao"
        ariaLabelledby="convocacao-title"
        className="bg-[var(--bg-soft)]/40"
      >
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
            <div>
              <Reveal>
                <p className="eyebrow mb-3">{campaign.convocation.eyebrow}</p>
                <h2
                  id="convocacao-title"
                  className="max-w-xl text-balance text-2xl font-extrabold tracking-tight sm:text-3xl"
                >
                  {campaign.convocation.title}
                </h2>
                <p className="mt-3 max-w-lg text-pretty text-[var(--muted)]">
                  {campaign.convocation.description}
                </p>
              </Reveal>
              <ol className="mt-8 space-y-4">
                {campaign.convocation.steps.map((step, index) => (
                  <li key={step.title}>
                    <Reveal>
                      <div className="flex gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-xs font-bold text-white">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="text-base font-bold">{step.title}</h3>
                          <p className="mt-1 text-sm text-[var(--muted)]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
            {publicShot ? (
              <Reveal className="lg:pl-2">
                <AppShot
                  src={publicShot.media.src}
                  alt={publicShot.media.alt}
                  aspectClassName="aspect-[3/2]"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                <p className="mt-3 text-center text-sm text-[var(--muted)] lg:text-left">
                  {publicShot.caption}
                </p>
              </Reveal>
            ) : null}
          </div>
        </Container>
      </Section>

      <Section id="como-funciona" ariaLabelledby="como-funciona-title">
        <Container>
          <Reveal>
            <p className="eyebrow mb-3">{campaign.howItWorks.eyebrow}</p>
            <h2
              id="como-funciona-title"
              className="max-w-2xl text-balance text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              {campaign.howItWorks.title}
            </h2>
            <p className="mt-3 max-w-xl text-pretty text-[var(--muted)]">
              {campaign.howItWorks.description}
            </p>
          </Reveal>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {campaign.howItWorks.steps.map((step, index) => (
              <li key={step.title}>
                <Reveal>
                  <div className="relative h-full border-t-2 border-[var(--brand)] pt-5">
                    <span className="text-xs font-bold tracking-wide text-[var(--brand)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-base font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <OfferSection campaign={campaign} />
      <FaqSection campaign={campaign} />

      <Section id="cta-final" className="pb-24 pt-4 md:pb-16">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-[var(--border)] bg-white px-6 py-10 text-center shadow-[var(--shadow)] sm:px-10 sm:py-12">
              <h2 className="mx-auto max-w-2xl text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
                {campaign.finalCta.title}
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[var(--muted)]">
                {campaign.finalCta.description}
              </p>
              <div className="mt-7 flex justify-center">
                <SignupCta
                  label={campaign.finalCta.ctaLabel}
                  destinationUrl={campaign.destinationUrl}
                  campaignSlug={campaign.slug}
                  locale={campaign.locale}
                  source="final"
                  experimentVariant={campaign.experiment?.variant}
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

function DemoVideoSection({ campaign }: { campaign: CampaignConfig }) {
  const video = campaign.product.video!;
  const [marks] = useState(() => new Set<number>());

  useEffect(() => {
    analytics.track("video_view", { campaign: campaign.slug });
  }, [campaign.slug]);

  return (
    <Section
      id="demonstracao"
      ariaLabelledby="demonstracao-title"
      className="bg-white"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-3">{video.eyebrow}</p>
            <h2
              id="demonstracao-title"
              className="max-w-xl text-balance text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              {video.title}
            </h2>
            <p className="mt-3 max-w-md text-pretty text-[var(--muted)]">
              {video.description}
            </p>
          </Reveal>
          <Reveal>
            <PhoneVideo
              src={video.src}
              poster={video.poster}
              title={video.title}
              onPlay={() => analytics.track("video_start", { campaign: campaign.slug })}
              onTimeUpdate={(e) => {
                const el = e.currentTarget;
                if (!el.duration) return;
                const pct = (el.currentTime / el.duration) * 100;
                for (const mark of [25, 50, 75] as const) {
                  if (pct >= mark && !marks.has(mark)) {
                    marks.add(mark);
                    analytics.track(`video_${mark}` as "video_25", {
                      campaign: campaign.slug,
                    });
                  }
                }
              }}
              onEnded={() =>
                analytics.track("video_complete", { campaign: campaign.slug })
              }
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function OfferSection({ campaign }: { campaign: CampaignConfig }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const labels = campaign.labels;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          analytics.track("offer_view", { campaign: campaign.slug });
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [campaign.slug]);

  const priceBits = [
    campaign.offer.priceBrl ? `BRL ${campaign.offer.priceBrl}` : null,
    campaign.offer.priceUsd ? `USD ${campaign.offer.priceUsd}` : null,
  ].filter(Boolean);

  return (
    <Section id="oferta" ariaLabelledby="oferta-title" className="bg-white">
      <Container>
        <div ref={ref}>
          <Reveal>
            <p className="eyebrow mb-3">{campaign.offer.eyebrow}</p>
            <h2
              id="oferta-title"
              className="max-w-2xl text-balance text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              {campaign.offer.title}
            </h2>
            <p className="mt-3 max-w-xl text-pretty text-[var(--muted)]">
              {campaign.offer.description}
            </p>
          </Reveal>
          <Reveal className="mt-8">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 sm:p-8">
              <ul className="grid gap-3 sm:grid-cols-2">
                {campaign.offer.highlights.map((item) => (
                  <li key={item} className="flex gap-2 text-sm font-medium">
                    <span className="text-[var(--success)]" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              {(campaign.offer.trialDays ||
                campaign.offer.requiresCard !== null ||
                priceBits.length > 0) && (
                <dl className="mt-6 grid gap-3 sm:grid-cols-3">
                  {campaign.offer.trialDays ? (
                    <div className="rounded-xl bg-white p-4 ring-1 ring-[var(--border)]">
                      <dt className="text-xs uppercase tracking-wide text-[var(--muted)]">
                        {labels.trial}
                      </dt>
                      <dd className="mt-1 text-lg font-bold">
                        {campaign.offer.trialDays} {labels.days}
                      </dd>
                    </div>
                  ) : null}
                  {campaign.offer.requiresCard !== null ? (
                    <div className="rounded-xl bg-white p-4 ring-1 ring-[var(--border)]">
                      <dt className="text-xs uppercase tracking-wide text-[var(--muted)]">
                        {labels.card}
                      </dt>
                      <dd className="mt-1 text-lg font-bold">
                        {campaign.offer.requiresCard
                          ? labels.cardRequired
                          : labels.cardNotRequired}
                      </dd>
                    </div>
                  ) : null}
                  {priceBits.length > 0 ? (
                    <div className="rounded-xl bg-white p-4 ring-1 ring-[var(--border)]">
                      <dt className="text-xs uppercase tracking-wide text-[var(--muted)]">
                        {labels.price}
                      </dt>
                      <dd className="mt-1 text-lg font-bold">{priceBits.join(" · ")}</dd>
                    </div>
                  ) : null}
                </dl>
              )}
              <div className="mt-6">
                <SignupCta
                  label={campaign.offer.ctaLabel}
                  destinationUrl={campaign.destinationUrl}
                  campaignSlug={campaign.slug}
                  locale={campaign.locale}
                  source="offer"
                  experimentVariant={campaign.experiment?.variant}
                />
              </div>
              <p className="mt-4 text-xs text-[var(--muted)]">{campaign.offer.disclaimer}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function FaqSection({ campaign }: { campaign: CampaignConfig }) {
  return (
    <Section id="faq" ariaLabelledby="faq-title" className="bg-[var(--bg-soft)]/35">
      <Container>
        <Reveal>
          <p className="eyebrow mb-3">{campaign.faq.eyebrow}</p>
          <h2
            id="faq-title"
            className="max-w-2xl text-balance text-2xl font-extrabold tracking-tight sm:text-3xl"
          >
            {campaign.faq.title}
          </h2>
        </Reveal>
        <div className="mt-8 space-y-2">
          {campaign.faq.items.map((item) => (
            <details
              key={item.id}
              className="group rounded-2xl border border-[var(--border)] bg-white px-5 py-4"
              onToggle={(e) => {
                if ((e.target as HTMLDetailsElement).open) {
                  analytics.track("faq_open", {
                    faq_id: item.id,
                    campaign: campaign.slug,
                  });
                }
              }}
            >
              <summary className="cursor-pointer list-none text-sm font-bold marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]">
                <span className="flex items-center justify-between gap-3">
                  {item.question}
                  <span
                    className="text-lg leading-none text-[var(--brand)] transition group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
