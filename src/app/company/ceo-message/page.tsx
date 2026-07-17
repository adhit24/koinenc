import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Eyebrow } from "@/components/Section";
import { ceoMessage } from "@/data/company";

export const metadata: Metadata = {
  title: "CEO Message | Koin E&C",
  description: `A message from ${ceoMessage.name}, ${ceoMessage.title} of Koin E&C.`,
};

export default function CeoMessagePage() {
  return (
    <main>
      <PageHeader
        eyebrow="Company"
        title="CEO Message"
        subtitle="Welcome to our official website."
        image="/images/projects/majors/cirebon1.jpg"
        crumbs={[{ label: "Company" }, { label: "CEO Message" }]}
      />
      <Section>
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-8">
            <Eyebrow>A Message From Leadership</Eyebrow>
            <div className="mt-4 space-y-6 text-lg leading-relaxed text-koin-ink">
              {ceoMessage.body.map((paragraph, i) => (
                <p key={i} className={i === 0 ? "font-display text-2xl font-semibold leading-snug md:text-3xl" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-10 border-t border-koin-line pt-6">
              <p className="font-display text-lg font-bold text-koin-ink">{ceoMessage.name}</p>
              <p className="text-sm text-koin-muted">{ceoMessage.title}</p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
