import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Section, Eyebrow } from "@/components/Section";
import { constructionCategories } from "@/data/business";

export const metadata: Metadata = {
  title: "Construction Field | Koin E&C",
  description: "Civil, steel structure, piping, insulation, tank, E&I, and scaffolding construction capability.",
};

export default function ConstructionFieldPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Business"
        title="Construction Field"
        subtitle="We create the future through challenge and innovation."
        image="/images/construction-field/civil-cirebon2.jpg"
        crumbs={[{ label: "Business", href: "/business/fields" }, { label: "Construction Field" }]}
      />
      <Section>
        <Eyebrow>Scope of Work</Eyebrow>
        <h2 className="max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-koin-ink md:text-4xl">
          Seven disciplines, one general contractor.
        </h2>
        <div className="mt-14 space-y-16">
          {constructionCategories.map((cat) => (
            <div key={cat.no} className="grid gap-8 border-t border-koin-line pt-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <span className="font-mono text-sm font-semibold text-koin-orange-deep">{cat.no}</span>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-koin-ink">
                  {cat.title}
                </h2>
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
      </Section>
    </main>
  );
}
