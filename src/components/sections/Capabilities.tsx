"use client";

import { motion } from "framer-motion";
import { Section, Eyebrow } from "@/components/Section";
import { capabilities } from "@/data/content";

export function Capabilities() {
  return (
    <Section id="capabilities" className="bg-koin-bg-alt">
      <Eyebrow>Capabilities</Eyebrow>
      <h2 className="max-w-xl text-balance font-display text-3xl font-bold tracking-tight text-koin-ink md:text-4xl">
        Technical scope built for plant-grade delivery.
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-koin-line bg-koin-line sm:grid-cols-2 md:grid-cols-4">
        {capabilities.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className={`group flex flex-col justify-between bg-koin-bg p-7 transition-colors hover:bg-koin-ink ${
              i === 0 ? "sm:col-span-2 md:row-span-2" : ""
            }`}
          >
            <span className="font-mono text-3xl font-semibold text-koin-line group-hover:text-white/20 md:text-4xl">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="mt-8">
              <p className="font-display text-base font-bold text-koin-ink group-hover:text-white md:text-lg">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-koin-muted group-hover:text-white/70">
                {item.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
