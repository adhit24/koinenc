import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Section, Eyebrow } from "@/components/Section";
import { licenses } from "@/data/business";

export const metadata: Metadata = {
  title: "License & Certification | Koin E&C",
  description: "ISO 9001, ISO 14001, ISO 45001, ASME, and SBU GAPENSI certificates held by PT. Koin Pratama & PT. Koin Konstruksi.",
};

export default function LicensePage() {
  return (
    <main>
      <PageHeader
        eyebrow="Business"
        title="Business License"
        subtitle="We create the future through challenge and innovation."
        image="/images/projects/majors/asc6.jpg"
        crumbs={[{ label: "Business", href: "/business/fields" }, { label: "License" }]}
      />
      <Section>
        <Eyebrow>Certifications</Eyebrow>
        <h2 className="max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-koin-ink md:text-4xl">
          Held jointly by PT. Koin Konstruksi &amp; PT. Koin Pratama.
        </h2>

        <div className="mt-14 space-y-14">
          {licenses.map((license) => (
            <div key={license.title} className="border-t border-koin-line pt-8">
              <h3 className="font-display text-xl font-bold text-koin-ink">{license.title}</h3>
              <p className="mt-1 text-sm text-koin-muted">{license.subtitle}</p>
              <div className="mt-6 flex flex-wrap gap-6">
                {license.images.map((img) => (
                  <div key={img} className="h-72 w-56 overflow-hidden rounded-sm border border-koin-line bg-white">
                    <Image
                      src={img}
                      alt={`${license.title} certificate`}
                      width={480}
                      height={640}
                      className="h-full w-full object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
