import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section, Eyebrow } from "@/components/Section";
import { businessFields } from "@/data/business";

export const metadata: Metadata = {
  title: "Business Fields | Koin E&C",
  description: "Construction, Maintenance, and Other Fields offered by Koin E&C.",
};

export default function BusinessFieldsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Business"
        title="Business Fields"
        subtitle="We create the future through challenge and innovation."
        image="/images/business-construction.jpg"
        crumbs={[{ label: "Business" }, { label: "Fields" }]}
      />
      <Section>
        <Eyebrow>Koin E&amp;C offers</Eyebrow>
        <h2 className="max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-koin-ink md:text-4xl">
          Excellent field project execution in Engineering, Procurement and Construction for projects of any size and type.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-koin-line bg-koin-line md:grid-cols-3">
          {businessFields.map((field) => (
            <Link
              key={field.id}
              href={field.href}
              className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden bg-koin-bg p-8"
            >
              <Image
                src={field.image}
                alt={field.title}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="absolute inset-0 object-cover opacity-15 grayscale transition-opacity duration-500 group-hover:opacity-30"
              />
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold text-koin-ink">{field.title}</h3>
                <p className="mt-3 text-sm text-koin-muted">{field.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-koin-orange-deep">
                  Read More <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
