"use client";

import Image from "next/image";
import type { CampaignConfig } from "@/campaigns/schema";
import { Container, Section } from "@/components/ui/Section";
import { PhoneMockup, ScreenshotCard } from "@/components/ui/Media";
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
      <Section className="relative overflow-hidden pb-10 pt-10 sm:pt-14 lg:pb-16 lg:pt-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="reveal text-center lg:text-left">
              <p className="eyebrow mb-4 justify-center lg:justify-start">Kyvora</p>
              <HeroCopy campaign={campaign} heroVariantId={heroVariantId} />
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
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
              <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                {campaign.trustPills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[var(--muted)] shadow-sm ring-1 ring-[var(--border)]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <Reveal className="relative">
              <div
                className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.18),transparent_65%)]"
                aria-hidden
              />
              <div className="relative grid items-end gap-4 sm:grid-cols-[0.85fr_1.15fr]">
                {publicShot ? (
                  <PhoneMockup
                    src={publicShot.media.src}
                    alt={publicShot.media.alt}
                    priority
                  />
                ) : null}
                {desktopShot ? (
                  <div className="relative aspect-[3/2] overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-white shadow-[var(--shadow)]">
                    <Image
                      src={desktopShot.media.src}
                      alt={desktopShot.media.alt}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 480px"
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
        className="bg-[var(--bg-soft)]/60"
      >
        <Container>
          <Reveal>
            <p className="eyebrow mb-3">{campaign.identification.eyebrow}</p>
            <h2
              id="identificacao-title"
              className="max-w-3xl text-balance text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              {campaign.identification.title}
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--muted)]">
              {campaign.identification.description}
            </p>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {campaign.identification.scenes.map((scene) => (
              <Reveal key={scene.title}>
                <article className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-5 shadow-sm">
                  <h3 className="text-base font-bold">{scene.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {scene.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="antes-depois" ariaLabelledby="antes-depois-title">
        <Container>
          <Reveal>
            <p className="eyebrow mb-3">{campaign.beforeAfter.eyebrow}</p>
            <h2
              id="antes-depois-title"
              className="max-w-3xl text-balance text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              {campaign.beforeAfter.title}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[var(--radius)] border border-[var(--border)] bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
                  {campaign.beforeAfter.beforeLabel}
                </p>
                <ul className="mt-4 space-y-3">
                  {campaign.beforeAfter.before.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-[var(--ink)]">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rose-400" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="h-full rounded-[var(--radius)] border border-indigo-200 bg-[linear-gradient(180deg,#ffffff,var(--brand-soft))] p-6 shadow-[var(--shadow)]">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">
                  {campaign.beforeAfter.afterLabel}
                </p>
                <ul className="mt-4 space-y-3">
                  {campaign.beforeAfter.after.map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-medium text-[var(--ink)]">
                      <span
                        className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--success)]"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <DemoSection campaign={campaign} />

      <Section id="beneficios" ariaLabelledby="beneficios-title" className="bg-white">
        <Container>
          <Reveal>
            <p className="eyebrow mb-3">{campaign.benefits.eyebrow}</p>
            <h2
              id="beneficios-title"
              className="max-w-3xl text-balance text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              {campaign.benefits.title}
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--muted)]">{campaign.benefits.description}</p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {campaign.benefits.items.map((item) => (
              <Reveal key={item.title}>
                <article className="h-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg)] p-5">
                  <h3 className="text-base font-bold leading-snug">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="como-funciona" ariaLabelledby="como-funciona-title">
        <Container>
          <Reveal>
            <p className="eyebrow mb-3">{campaign.howItWorks.eyebrow}</p>
            <h2
              id="como-funciona-title"
              className="max-w-3xl text-balance text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              {campaign.howItWorks.title}
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--muted)]">
              {campaign.howItWorks.description}
            </p>
          </Reveal>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {campaign.howItWorks.steps.map((step, index) => (
              <li key={step.title}>
                <Reveal>
                  <div className="h-full rounded-[var(--radius)] border border-[var(--border)] bg-white p-5">
                    <span className="text-xs font-bold text-[var(--brand)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-base font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm text-[var(--muted)]">{step.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="telas" ariaLabelledby="telas-title" className="bg-[var(--bg-soft)]/50">
        <Container>
          <Reveal>
            <p className="eyebrow mb-3">Produto</p>
            <h2
              id="telas-title"
              className="max-w-3xl text-balance text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              {campaign.locale === "en"
                ? "Real screens. No fiction."
                : campaign.locale === "es"
                  ? "Pantallas reales. Sin ficción."
                  : "Telas reais. Sem fantasia."}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {campaign.screenshots
              .filter((s) => s.key !== "public-convocation")
              .map((shot, index) => (
                <Reveal key={shot.key}>
                  <ScreenshotCard
                    src={shot.media.src}
                    alt={shot.media.alt}
                    caption={shot.caption}
                    priority={index === 0}
                  />
                </Reveal>
              ))}
          </div>
        </Container>
      </Section>

      <Section id="prova" ariaLabelledby="prova-title">
        <Container>
          <Reveal>
            <p className="eyebrow mb-3">{campaign.proof.eyebrow}</p>
            <h2
              id="prova-title"
              className="max-w-3xl text-balance text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              {campaign.proof.title}
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--muted)]">{campaign.proof.description}</p>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {campaign.proof.items.map((item) => (
              <Reveal key={item.title}>
                <article className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-5">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
          {campaign.proof.testimonials.length === 0 &&
          campaign.proof.metrics.length === 0 &&
          campaign.proof.logos.length === 0 ? (
            <p className="mt-6 text-sm text-[var(--muted)]">
              {campaign.locale === "en"
                ? "Slot ready for real testimonials, logos, and metrics — nothing invented."
                : campaign.locale === "es"
                  ? "Espacio listo para testimonios, logos y métricas reales — sin inventar nada."
                  : "Espaço preparado para depoimentos, logos e métricas reais — ainda sem conteúdo inventado."}
            </p>
          ) : null}
        </Container>
      </Section>

      <OfferSection campaign={campaign} />
      <FaqSection campaign={campaign} />

      <Section id="cta-final" className="pb-24 md:pb-16">
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,#312e81,#4f46e5_45%,#6366f1)] px-6 py-10 text-white shadow-[var(--shadow)] sm:px-10 sm:py-14">
              <h2 className="max-w-3xl text-balance text-2xl font-extrabold tracking-tight sm:text-4xl">
                {campaign.finalCta.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base text-indigo-100 sm:text-lg">
                {campaign.finalCta.description}
              </p>
              <div className="mt-8">
                <SignupCta
                  label={campaign.finalCta.ctaLabel}
                  destinationUrl={campaign.destinationUrl}
                  campaignSlug={campaign.slug}
                  locale={campaign.locale}
                  source="final"
                  experimentVariant={campaign.experiment?.variant}
                  className="!bg-white !text-[var(--brand)] hover:!bg-indigo-50"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

function DemoSection({ campaign }: { campaign: CampaignConfig }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [marks] = useState(() => new Set<number>());

  useEffect(() => {
    analytics.track("video_view", { campaign: campaign.slug });
  }, [campaign.slug]);

  return (
    <Section id="demonstracao" ariaLabelledby="demonstracao-title" className="bg-white">
      <Container>
        <Reveal>
          <p className="eyebrow mb-3">{campaign.demo.eyebrow}</p>
          <h2
            id="demonstracao-title"
            className="max-w-3xl text-balance text-2xl font-extrabold tracking-tight sm:text-3xl"
          >
            {campaign.demo.title}
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">{campaign.demo.description}</p>
        </Reveal>

        <Reveal className="mt-8">
          <div className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[#0f172a] shadow-[var(--shadow)]">
            {campaign.demo.video.src ? (
              <video
                ref={videoRef}
                className="aspect-video w-full"
                controls
                playsInline
                preload="none"
                poster={campaign.demo.video.poster}
                title={campaign.demo.video.title}
                onPlay={() => analytics.track("video_start", { campaign: campaign.slug })}
                onTimeUpdate={(e) => {
                  const video = e.currentTarget;
                  if (!video.duration) return;
                  const pct = (video.currentTime / video.duration) * 100;
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
              >
                <source src={campaign.demo.video.src} />
                {campaign.demo.video.captions ? (
                  <track kind="captions" src={campaign.demo.video.captions} />
                ) : null}
              </video>
            ) : (
              <div className="relative aspect-video">
                <Image
                  src={campaign.demo.video.poster}
                  alt={campaign.demo.video.title}
                  fill
                  className="object-cover opacity-80"
                  sizes="100vw"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950/55 px-6 text-center">
                  <p className="text-lg font-bold text-white">{campaign.demo.video.title}</p>
                  <p className="max-w-md text-sm text-indigo-100">
                    {campaign.demo.video.placeholderLabel}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Reveal>

        <div className="mt-6 flex flex-wrap gap-2">
          {campaign.demo.flows.map((flow) => (
            <span
              key={flow}
              className="rounded-full bg-[var(--bg-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--brand)]"
            >
              {flow}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function OfferSection({ campaign }: { campaign: CampaignConfig }) {
  const ref = useRef<HTMLDivElement | null>(null);

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
              className="max-w-3xl text-balance text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              {campaign.offer.title}
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--muted)]">{campaign.offer.description}</p>
          </Reveal>
          <Reveal className="mt-8">
            <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg)] p-6 sm:p-8">
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
                    <div className="rounded-2xl bg-white p-4 ring-1 ring-[var(--border)]">
                      <dt className="text-xs uppercase tracking-wide text-[var(--muted)]">
                        Trial
                      </dt>
                      <dd className="mt-1 text-lg font-bold">
                        {campaign.offer.trialDays}{" "}
                        {campaign.locale === "en"
                          ? "days"
                          : campaign.locale === "es"
                            ? "días"
                            : "dias"}
                      </dd>
                    </div>
                  ) : null}
                  {campaign.offer.requiresCard !== null ? (
                    <div className="rounded-2xl bg-white p-4 ring-1 ring-[var(--border)]">
                      <dt className="text-xs uppercase tracking-wide text-[var(--muted)]">
                        {campaign.locale === "en"
                          ? "Card"
                          : campaign.locale === "es"
                            ? "Tarjeta"
                            : "Cartão"}
                      </dt>
                      <dd className="mt-1 text-lg font-bold">
                        {campaign.offer.requiresCard
                          ? campaign.locale === "en"
                            ? "Required"
                            : campaign.locale === "es"
                              ? "Necesaria"
                              : "Necessário"
                          : campaign.locale === "en"
                            ? "Not required"
                            : campaign.locale === "es"
                              ? "No necesaria"
                              : "Não necessário"}
                      </dd>
                    </div>
                  ) : null}
                  {priceBits.length > 0 ? (
                    <div className="rounded-2xl bg-white p-4 ring-1 ring-[var(--border)]">
                      <dt className="text-xs uppercase tracking-wide text-[var(--muted)]">
                        {campaign.locale === "en"
                          ? "Price"
                          : campaign.locale === "es"
                            ? "Precio"
                            : "Preço"}
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
    <Section id="faq" ariaLabelledby="faq-title" className="bg-[var(--bg-soft)]/40">
      <Container>
        <Reveal>
          <p className="eyebrow mb-3">FAQ</p>
          <h2
            id="faq-title"
            className="max-w-3xl text-balance text-2xl font-extrabold tracking-tight sm:text-3xl"
          >
            {campaign.locale === "en"
              ? "Questions people ask before creating an account"
              : campaign.locale === "es"
                ? "Preguntas antes de crear la cuenta"
                : "Perguntas que aparecem antes de criar a conta"}
          </h2>
        </Reveal>
        <div className="mt-8 space-y-3">
          {campaign.faq.map((item) => (
            <details
              key={item.id}
              className="group rounded-[var(--radius)] border border-[var(--border)] bg-white px-5 py-4"
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
                  <span className="text-[var(--brand)] transition group-open:rotate-45" aria-hidden>
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
