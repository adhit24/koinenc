"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLinkCircle } from "@/components/ArrowLinkCircle";

const highlights = [
  {
    tag: "Certification",
    title: "ISO 9001, ISO 14001 & ISO 45001 certified across both entities",
    href: "/business/license",
  },
  {
    tag: "Ongoing Project",
    title: "Jawa 9 & 10 CFSPP — boiler and ESP/FGD erection underway with Doosan Heavy Industries",
    href: "/projects",
  },
  {
    tag: "Track Record",
    title: "152+ contracted works delivered for power, refinery, and industrial clients since 2001",
    href: "/projects/record",
  },
];

export function HighlightsStrip() {
  return (
    <div className="border-b border-koin-line bg-koin-bg">
      <div className="mx-auto grid max-w-7xl divide-y divide-koin-line px-6 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-12">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="py-8 md:px-8 md:py-10"
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-koin-orange-deep">
              {item.tag}
            </p>
            <Link
              href={item.href}
              className="group mt-3 flex items-start justify-between gap-4"
            >
              <span className="text-sm leading-snug text-koin-ink md:text-base">{item.title}</span>
              <ArrowLinkCircle className="text-koin-ink" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
