"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { companyOverview } from "@/data/company";

export function ValueStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className="grid gap-0 border-b border-koin-line md:grid-cols-2">
      <div className="relative h-72 overflow-hidden md:h-auto">
        <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[10%] h-[120%]">
          <Image
            src="/images/projects/majors/cirebon2.jpg"
            alt="Koin E&C construction site"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
      <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-balance font-display text-3xl font-bold leading-[1.15] tracking-tight text-koin-orange-deep md:text-4xl"
        >
          Your trusted EPC partner for plant construction in Indonesia
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-lg text-base leading-relaxed text-koin-muted"
        >
          Established as {companyOverview.legalName}, we combine engineering
          discipline and hands-on field experience to deliver power plant,
          refinery, and chemical plant projects — engineering, procurement,
          construction, and O&amp;M — for Korean and international EPC majors
          operating in Indonesia.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/company/overview"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-koin-ink px-7 py-3.5 text-sm font-semibold text-koin-bg transition-colors hover:bg-koin-orange-deep"
          >
            Discover Koin E&amp;C <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
