"use client";

import Image from "next/image";
import type { SyntheticEvent } from "react";

/** Product screenshot on dark surface (matches Kyvora app chrome). */
export function AppShot({
  src,
  alt,
  priority = false,
  className = "",
  aspectClassName = "aspect-[16/10]",
  sizes = "(max-width: 768px) 100vw, 540px",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  aspectClassName?: string;
  sizes?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-[rgba(148,163,184,0.18)] bg-[#0a0e14] shadow-[var(--shadow)] ${className}`}
    >
      <div className={`relative ${aspectClassName}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-contain object-top"
          sizes={sizes}
        />
      </div>
    </div>
  );
}

export function PhoneMockup({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-[min(100%,280px)] rounded-[1.85rem] border border-[rgba(148,163,184,0.2)] bg-[#0a0e14] p-1.5 shadow-[var(--shadow)] ${className}`}
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-[1.45rem] bg-[#0a0e14]">
        <div className="absolute inset-x-0 top-0 z-10 flex justify-center bg-[#0a0e14] pb-1.5 pt-2.5">
          <span className="h-1.5 w-14 rounded-full bg-white/15" aria-hidden />
        </div>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-contain object-top pt-5"
          sizes="(max-width: 768px) 70vw, 280px"
        />
      </div>
    </div>
  );
}

export function PhoneVideo({
  src,
  poster,
  title,
  className = "",
  onPlay,
  onTimeUpdate,
  onEnded,
}: {
  src: string;
  poster?: string;
  title: string;
  className?: string;
  onPlay?: () => void;
  onTimeUpdate?: (event: SyntheticEvent<HTMLVideoElement>) => void;
  onEnded?: () => void;
}) {
  return (
    <div
      className={`relative mx-auto w-[min(100%,280px)] rounded-[1.85rem] border border-[rgba(148,163,184,0.2)] bg-[#0a0e14] p-1.5 shadow-[var(--shadow)] ${className}`}
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-[1.45rem] bg-[#0a0e14]">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center bg-[#0a0e14]/70 pb-1.5 pt-2.5">
          <span className="h-1.5 w-14 rounded-full bg-white/15" aria-hidden />
        </div>
        <video
          className="h-full w-full object-cover object-top"
          controls
          playsInline
          preload="metadata"
          poster={poster}
          title={title}
          onPlay={onPlay}
          onTimeUpdate={onTimeUpdate}
          onEnded={onEnded}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export function ScreenshotCard({
  src,
  alt,
  caption,
  priority = false,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
      <div className="relative aspect-[16/10] bg-[#0a0e14]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? undefined : loading}
          className="object-contain object-top"
          sizes="(max-width: 768px) 100vw, 540px"
        />
      </div>
      <figcaption className="border-t border-[var(--border)] px-4 py-3 text-sm text-[var(--muted)]">
        {caption}
      </figcaption>
    </figure>
  );
}
