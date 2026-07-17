import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Section, Eyebrow } from "@/components/Section";
import { organization } from "@/data/company";

export const metadata: Metadata = {
  title: "Organization | Koin E&C",
  description: "Organization structure of PT. Koin Pratama & PT. Koin Konstruksi.",
};

export default function OrganizationPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Company"
        title="Organization"
        subtitle="Welcome to our official website."
        image="/images/projects/majors/tambaklorok.jpg"
        crumbs={[{ label: "Company" }, { label: "Organization" }]}
      />
      <Section>
        <Eyebrow>Organization Structure</Eyebrow>
        <h2 className="max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-koin-ink md:text-4xl">
          How Koin E&amp;C is organized.
        </h2>
        <div className="mt-12 overflow-hidden rounded-sm border border-koin-line bg-white">
          <Image
            src={organization.chartImage}
            alt="Koin E&C organization chart"
            width={1400}
            height={900}
            className="h-auto w-full object-contain"
          />
        </div>
      </Section>
    </main>
  );
}
