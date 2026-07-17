import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Printer, Mail } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section, Eyebrow } from "@/components/Section";
import { location } from "@/data/company";

export const metadata: Metadata = {
  title: "Location | Koin E&C",
  description: location.address,
};

export default function LocationPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Company"
        title="Location"
        subtitle="Welcome to our official website."
        image="/images/projects/majors/rdmp.jpg"
        crumbs={[{ label: "Company" }, { label: "Location" }]}
      />
      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>{location.headOfficeLabel}</Eyebrow>
            <h2 className="font-display text-2xl font-bold tracking-tight text-koin-ink md:text-3xl">
              Jakarta Barat, Indonesia
            </h2>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-5 w-5 shrink-0 text-koin-orange-deep" />
                <p className="text-koin-ink">{location.address}</p>
              </div>
              <div className="flex gap-4">
                <Phone className="h-5 w-5 shrink-0 text-koin-orange-deep" />
                <p className="text-koin-ink">{location.phone}</p>
              </div>
              <div className="flex gap-4">
                <Printer className="h-5 w-5 shrink-0 text-koin-orange-deep" />
                <p className="text-koin-ink">Fax. {location.fax}</p>
              </div>
              <div className="flex gap-4">
                <Mail className="h-5 w-5 shrink-0 text-koin-orange-deep" />
                <p className="text-koin-ink">{location.email}</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-sm border border-koin-line bg-white">
              <Image
                src={location.mapImage}
                alt="Map to Koin E&C head office"
                width={1200}
                height={800}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
