import type { Metadata } from "next";
import Image from "next/image";
import { Phone, MapPin, Mail } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section, Eyebrow } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { location } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact | Koin E&C",
  description: location.address,
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Customer"
        title="Project Inquiry"
        subtitle="Get in touch with Koin E&C."
        image="/images/projects/majors/sarulla.jpg"
        crumbs={[{ label: "Contact" }]}
      />
      <Section>
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <Eyebrow>Get In Touch</Eyebrow>
            <h2 className="font-display text-3xl font-bold tracking-tight text-koin-ink md:text-4xl">
              Let&apos;s discuss your next project.
            </h2>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <Phone className="h-5 w-5 shrink-0 text-koin-orange-deep" />
                <div>
                  <p className="text-sm text-koin-muted">Give us a call</p>
                  <a href="tel:0215332315" className="font-medium text-koin-ink hover:text-koin-orange-deep">
                    {location.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="h-5 w-5 shrink-0 text-koin-orange-deep" />
                <div>
                  <p className="text-sm text-koin-muted">Email</p>
                  <a href={`mailto:${location.email}`} className="font-medium text-koin-ink hover:text-koin-orange-deep">
                    {location.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="h-5 w-5 shrink-0 text-koin-orange-deep" />
                <div>
                  <p className="text-sm text-koin-muted">Find us</p>
                  <p className="font-medium text-koin-ink">{location.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-sm border border-koin-line bg-white">
              <Image
                src={location.mapImage}
                alt="Map to Koin E&C head office"
                width={800}
                height={600}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </Section>
    </main>
  );
}
