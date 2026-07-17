import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Eyebrow } from "@/components/Section";
import { companyOverview } from "@/data/company";

export const metadata: Metadata = {
  title: "Company Overview | Koin E&C",
  description: companyOverview.services,
};

const facts = [
  { label: "Name of Company", value: `${companyOverview.brandName} [ ${companyOverview.legalName} ]` },
  { label: "Type of Company", value: companyOverview.type },
  { label: "Date of Establishment", value: companyOverview.established },
  { label: "Head Office", value: companyOverview.headOffice },
  { label: "Telephone", value: companyOverview.phone },
  { label: "E-mail", value: companyOverview.email },
  { label: "Workshop", value: companyOverview.workshop },
  { label: "Services Offered", value: companyOverview.services },
];

export default function OverviewPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Company"
        title="Overview"
        subtitle="Welcome to our official website."
        image="/images/projects/majors/cirebon2.jpg"
        crumbs={[{ label: "Company" }, { label: "Overview" }]}
      />
      <Section>
        <Eyebrow>Company Profile</Eyebrow>
        <h2 className="max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-koin-ink md:text-4xl">
          Greetings. Welcome to our official website.
        </h2>

        <dl className="mt-12 divide-y divide-koin-line border-y border-koin-line">
          {facts.map((fact) => (
            <div key={fact.label} className="grid gap-1 py-5 md:grid-cols-[240px_1fr] md:gap-8">
              <dt className="font-mono text-xs font-semibold uppercase tracking-wider text-koin-muted">
                {fact.label}
              </dt>
              <dd className="text-koin-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </main>
  );
}
