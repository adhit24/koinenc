import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Section, Eyebrow } from "@/components/Section";
import { otherCategories } from "@/data/business";

export const metadata: Metadata = {
  title: "Other Fields | Koin E&C",
  description: "Shop fabrication, insulation material product, and PLC engineering.",
};

export default function OtherFieldsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Business"
        title="Other Fields"
        subtitle="We create the future through challenge and innovation."
        image="/images/business-other.jpg"
        crumbs={[{ label: "Business", href: "/business/fields" }, { label: "Other Fields" }]}
      />
      <Section>
        <Eyebrow>Scope of Work</Eyebrow>
        <h2 className="max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-koin-ink md:text-4xl">
          Fabrication, materials, and engineering supply.
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {otherCategories.map((cat) => (
            <div key={cat.no} className="overflow-hidden rounded-sm border border-koin-line">
              <div className="relative h-48 w-full">
                <Image src={cat.image} alt={cat.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <span className="font-mono text-xs font-semibold text-koin-orange-deep">{cat.no}</span>
                <h3 className="mt-2 font-display text-lg font-bold text-koin-ink">{cat.title}</h3>
                <p className="mt-2 text-sm text-koin-muted">{cat.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
