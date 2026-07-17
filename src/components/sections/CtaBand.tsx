"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden px-6 py-24 text-center md:px-12">
      <Image
        src="/images/business-construction.jpg"
        alt="Koin E&C project team on site"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-koin-ink/70" />

      <motion.div
        aria-hidden
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-koin-orange/30 blur-3xl md:h-72 md:w-72"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 20, 0], x: [0, -14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-koin-green/40 blur-3xl md:h-80 md:w-80"
      />

      <div className="relative z-10 mx-auto max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-koin-orange-glow"
        >
          25+ Years · 150+ Projects Delivered
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-balance font-display text-3xl font-bold text-white md:text-4xl"
        >
          Start a project inquiry with Koin E&amp;C
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-koin-orange px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-koin-orange-glow"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
