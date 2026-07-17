"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLinkCircle } from "@/components/ArrowLinkCircle";
import { businessFields } from "@/data/business";

export function BusinessBand() {
  return (
    <div id="business" className="bg-koin-green-deep px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-balance font-display text-3xl font-bold tracking-tight text-white md:text-4xl"
        >
          Full-scope EPC and O&amp;M capability, under one roof.
        </motion.h2>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {businessFields.map((field, i) => (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={field.image}
                  alt={field.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <Link href={field.href} className="group mt-6 flex items-center justify-between gap-4">
                <h3 className="font-display text-xl font-bold text-white">{field.title}</h3>
                <ArrowLinkCircle className="text-white" />
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{field.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
