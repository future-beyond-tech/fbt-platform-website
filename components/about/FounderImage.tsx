"use client";

import Image from "next/image";
import { useState } from "react";

const FOUNDER_IMAGE = "/about/Founder.png";

const fallbackHero = (
  <div
    className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
    aria-hidden
  >
    <span className="text-4xl font-bold sm:text-5xl">FB</span>
  </div>
);

const fallbackAvatar = (
  <div
    className="flex h-full w-full items-center justify-center rounded-full bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-400"
    aria-hidden
  >
    <span className="text-sm font-semibold">FB</span>
  </div>
);

export function FounderImageHero() {
  const [error, setError] = useState(false);

  if (error) {
    return fallbackHero;
  }

  return (
    <Image
      src={FOUNDER_IMAGE}
      alt="Feroze Basha, Founder and Lead Engineer at FBT"
      fill
      className="object-cover"
      sizes="(max-width: 1024px) 100vw, 50vw"
      priority
      onError={() => setError(true)}
    />
  );
}

export function FounderImageAvatar() {
  const [error, setError] = useState(false);

  if (error) {
    return fallbackAvatar;
  }

  return (
    <Image
      src={FOUNDER_IMAGE}
      alt=""
      width={48}
      height={48}
      className="object-cover"
      onError={() => setError(true)}
    />
  );
}
