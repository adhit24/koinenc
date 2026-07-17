"use client";

import { useState } from "react";
import Image from "next/image";
import type { MajorProject, ProjectCategory } from "@/data/projects";

const categories: (ProjectCategory | "All")[] = ["All", "Power Plant", "Refinery & Chemical", "Industry"];

export function ProjectFilterGrid({ projects }: { projects: MajorProject[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-koin-line pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              active === cat
                ? "border-koin-ink bg-koin-ink text-koin-bg"
                : "border-koin-line text-koin-muted hover:border-koin-ink hover:text-koin-ink"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <div key={`${project.name}-${project.client ?? ""}`} className="group relative overflow-hidden rounded-sm">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-koin-ink/90 via-koin-ink/5 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-koin-orange-glow">
                {project.category}
              </p>
              <h3 className="mt-1.5 font-display text-base font-bold leading-snug text-white">
                {project.name}
              </h3>
              {project.client && <p className="mt-1 text-xs text-white/70">{project.client}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
