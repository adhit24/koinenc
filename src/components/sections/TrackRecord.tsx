"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Section, Eyebrow } from "@/components/Section";
import { ArrowLinkCircle } from "@/components/ArrowLinkCircle";
import { mainProjects } from "@/data/projects";

const featured = mainProjects.slice(0, 3);

export function TrackRecord() {
  return (
    <Section id="projects" className="bg-koin-bg-alt">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow>Track Record</Eyebrow>
          <h2 className="max-w-xl text-balance font-display text-3xl font-bold tracking-tight text-koin-ink md:text-4xl">
            Featured Projects
          </h2>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-koin-orange-deep hover:underline"
        >
          View all projects
        </Link>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {featured.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-koin-orange-deep">
              {project.category}
              {project.client ? ` — ${project.client}` : ""}
            </p>
            <Link href="/projects" className="group mt-2 flex items-start justify-between gap-4">
              <h3 className="font-display text-lg font-bold leading-snug text-koin-ink">
                {project.name}
              </h3>
              <ArrowLinkCircle className="mt-1 shrink-0 text-koin-ink" />
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
