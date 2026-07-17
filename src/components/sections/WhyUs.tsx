"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { stats } from "@/data/content";

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div ref={ref} className="grid gap-12 border-b border-koin-line px-6 py-20 md:grid-cols-2 md:px-12 md:py-28">
      <div className="relative h-72 overflow-hidden md:h-auto">
        <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[8%] h-[116%]">
          <Image
            src="/images/projects/majors/sarulla.jpg"
            alt="Sarulla Geothermal Power Plant project"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl font-extrabold tracking-tight text-koin-orange-deep md:text-6xl"
        >
          <AnimatedCounter to={stats[1].value} suffix={stats[1].suffix} />
        </motion.p>
        <p className="mt-2 text-lg font-semibold text-koin-ink">Projects Delivered</p>
        <p className="mt-4 max-w-md text-koin-muted">
          Two decades of EPC and O&amp;M delivery for Korean and international
          EPC majors operating in Indonesia&apos;s power, refinery, and
          industrial sectors.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-8 border-t border-koin-line pt-8">
          {[stats[0], stats[2], stats[3]].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl font-bold text-koin-ink md:text-3xl">
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-xs text-koin-muted md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <Link
          href="/projects/record"
          className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-koin-orange-deep px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-koin-orange"
        >
          Explore Our Project Record <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
