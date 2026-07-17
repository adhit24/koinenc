"use client";

import Image from "next/image";
import { Section, Eyebrow } from "@/components/Section";
import { partners } from "@/data/content";

export function Partners() {
  const loop = [...partners, ...partners];
  return (
    <Section id="partners" className="overflow-hidden border-t border-koin-line bg-koin-bg-alt">
      <Eyebrow>Trusted By</Eyebrow>
      <h2 className="max-w-xl text-balance font-display text-3xl font-bold tracking-tight text-koin-ink md:text-4xl">
        Working alongside global EPC and energy leaders.
      </h2>

      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-10">
          {loop.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex h-16 w-32 shrink-0 items-center justify-center rounded-sm border border-koin-line bg-koin-bg p-3 grayscale transition-all duration-300 hover:grayscale-0"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={110}
                height={50}
                unoptimized
                className="max-h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
