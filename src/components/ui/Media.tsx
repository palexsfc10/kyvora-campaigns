"use client";

import Image from "next/image";

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
      className={`relative mx-auto w-[min(100%,260px)] rounded-[1.85rem] border border-[var(--border)] bg-[#0f172a] p-1.5 shadow-[var(--shadow)] ${className}`}
    >
      <div className="relative aspect-[9/19] overflow-hidden rounded-[1.45rem] bg-slate-100">
        <div className="absolute inset-x-0 top-0 z-10 flex justify-center bg-[#0f172a] pb-1.5 pt-2.5">
          <span className="h-1.5 w-14 rounded-full bg-white/20" aria-hidden />
        </div>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover object-top"
          sizes="(max-width: 768px) 70vw, 260px"
        />
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
      <div className="relative aspect-[3/2] bg-slate-100">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? undefined : loading}
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 540px"
        />
      </div>
      <figcaption className="border-t border-[var(--border)] px-4 py-3 text-sm text-[var(--muted)]">
        {caption}
      </figcaption>
    </figure>
  );
}
