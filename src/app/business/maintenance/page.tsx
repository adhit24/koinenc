import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Section, Eyebrow } from "@/components/Section";
import { maintenanceCategories } from "@/data/business";

export const metadata: Metadata = {
  title: "Maintenance Field | Koin E&C",
  description: "Turnaround maintenance for power plant and Pertamina refinery projects.",
};

export default function MaintenanceFieldPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Business"
        title="Maintenance Field"
        subtitle="We create the future through challenge and innovation."
        image="/images/maintenance-field/cirebon-ta.jpg"
        crumbs={[{ label: "Business", href: "/business/fields" }, { label: "Maintenance Field" }]}
      />
      <Section>
        <Eyebrow>Scope of Work</Eyebrow>
        <h2 className="max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-koin-ink md:text-4xl">
          High-skill maintenance, built on safety and quality.
        </h2>

        <div className="mt-14 space-y-16">
          {maintenanceCategories.map((cat) => (
            <div key={cat.no} className="grid gap-8 border-t border-koin-line pt-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <span className="font-mono text-sm font-semibold text-koin-orange-deep">{cat.no}</span>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-koin-ink">
                  {cat.title}
                </h3>
                <ul className="mt-4 space-y-1 text-sm text-koin-muted">
                  {cat.projects.map((p) => (
                    <li key={p}>— {p}</li>
                  ))}
                </ul>
              </div>
              <div className="relative h-64 overflow-hidden rounded-sm md:col-span-8 md:h-80">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(min-width: 768px) 66vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 border-t border-koin-line pt-10 sm:grid-cols-3">
          {[
            "Routine & Preventive Maintenance",
            "Major Overhaul Service",
            "Technical Advisory Service",
            "Commissioning Service",
            "Emergency Restoration Service",
            "Coal Handling & Pulverizer Maintenance",
          ].map((item) => (
            <div key={item} className="border-l-2 border-koin-orange-deep pl-4 text-sm text-koin-ink">
              {item}
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
