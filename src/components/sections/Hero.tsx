"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { heroTagline } from "@/data/content";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100dvh] min-h-[600px] overflow-hidden bg-koin-ink">
      <motion.video
        ref={videoRef}
        style={{ scale: videoScale }}
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/hero.mp4"
        autoPlay
        loop
        muted={muted}
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-koin-ink/95 via-koin-ink/25 to-koin-ink/40" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 pt-24 md:px-12"
      >
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-9 lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-koin-orange-glow"
            >
              Engineering · Procurement · Construction — Est. 2001
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-5 max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl"
            >
              {heroTagline}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8"
            >
              <a
                href="/business/fields"
                className="inline-flex items-center gap-2 rounded-full bg-koin-orange px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-koin-orange-glow"
              >
                Explore Our Business <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <button
        type="button"
        onClick={() => setMuted((v) => !v)}
        aria-label={muted ? "Unmute background video" : "Mute background video"}
        className="absolute bottom-6 right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:bottom-8 md:right-10"
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
    </section>
  );
}
