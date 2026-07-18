"use client";

import { useMemo, useState } from "react";
import type { ProjectRecordCategory, ProjectRecordRow } from "@/data/projectRecord";

const categories: (ProjectRecordCategory | "All")[] = ["All", "Power Plant", "Refinery & Chemical", "Industry"];

export function ProjectRecordTable({ rows }: { rows: ProjectRecordRow[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return rows.filter((row) => {
      const matchesCategory = active === "All" || row.category === active;
      const matchesQuery =
        query.trim() === "" ||
        [row.title, row.work, row.client].some((field) =>
          field.toLowerCase().includes(query.trim().toLowerCase())
        );
      return matchesCategory && matchesQuery;
    });
  }, [rows, active, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-koin-line pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const count = cat === "All" ? rows.length : rows.filter((r) => r.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
                  active === cat
                    ? "border-koin-ink bg-koin-ink text-koin-bg"
                    : "border-koin-line text-koin-muted hover:border-koin-ink hover:text-koin-ink"
                }`}
              >
                {cat} <span className="opacity-60">({count})</span>
              </button>
            );
          })}
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search project, client, or scope of work…"
          className="w-full max-w-xs rounded-full border border-koin-line bg-koin-bg px-4 py-2.5 text-sm outline-none focus:border-koin-orange-deep sm:w-64"
        />
      </div>

      <p className="mt-4 font-mono text-xs uppercase tracking-wide text-koin-muted">
        Showing {filtered.length} of {rows.length} records
      </p>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-koin-line text-xs font-semibold uppercase tracking-wider text-koin-muted">
              <th className="py-3 pr-4 font-mono">No.</th>
              <th className="py-3 pr-4">Project Title</th>
              <th className="py-3 pr-4">Work</th>
              <th className="py-3 pr-4">Client</th>
              <th className="py-3 pr-4">Period</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr key={`${row.title}-${row.work}-${i}`} className="border-b border-koin-line/70 align-top hover:bg-koin-bg-alt">
                <td className="py-3 pr-4 font-mono text-xs text-koin-muted">{String(i + 1).padStart(2, "0")}</td>
                <td className="py-3 pr-4 font-semibold text-koin-ink">{row.title}</td>
                <td className="py-3 pr-4 text-koin-muted">{row.work}</td>
                <td className="py-3 pr-4 text-koin-muted">{row.client}</td>
                <td className="py-3 pr-4 whitespace-nowrap font-mono text-xs text-koin-muted">{row.period}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="py-10 text-center text-sm text-koin-muted">No projects match your search.</p>
        )}
      </div>
    </div>
  );
}
