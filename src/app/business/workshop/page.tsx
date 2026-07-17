import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Section, Eyebrow } from "@/components/Section";
import { workshop } from "@/data/business";

export const metadata: Metadata = {
  title: "Workshop | Koin E&C",
  description: "37,862 m² fabrication workshop in Purwakarta, West Java.",
};

export default function WorkshopPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Business"
        title="Workshop"
        subtitle="We create the future through challenge and innovation."
        image={workshop.images[0]}
        crumbs={[{ label: "Business", href: "/business/fields" }, { label: "Workshop" }]}
      />
      <Section>
        <div className="grid gap-8 border-b border-koin-line pb-14 sm:grid-cols-3">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-koin-muted">Location</p>
            <p className="mt-2 text-koin-ink">{workshop.location}</p>
          </div>
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-koin-muted">Capacity</p>
            <p className="mt-2 font-display text-2xl font-bold text-koin-ink">{workshop.area}</p>
            <p className="text-sm text-koin-muted">{workshop.employees}</p>
          </div>
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-koin-muted">Business</p>
            <p className="mt-2 text-koin-ink">{workshop.business}</p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
          {workshop.images.map((img) => (
            <div key={img} className="relative h-40 overflow-hidden rounded-sm md:h-48">
              <Image src={img} alt="Koin E&C workshop" fill sizes="25vw" className="object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-10">
          <Eyebrow>Fabrication Projects</Eyebrow>
          {workshop.projects.map((group) => (
            <div key={group.group} className="border-t border-koin-line pt-6">
              <h3 className="font-display text-lg font-bold text-koin-ink">{group.group}</h3>
              <ul className="mt-4 divide-y divide-koin-line">
                {group.items.map((item) => (
                  <li key={item.name} className="flex flex-col justify-between gap-1 py-3 sm:flex-row sm:items-center">
                    <span className="text-sm text-koin-ink">{item.name}</span>
                    <span className="font-mono text-xs text-koin-muted">{item.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
