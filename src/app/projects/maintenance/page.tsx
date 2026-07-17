import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Eyebrow } from "@/components/Section";
import { ProjectFilterGrid } from "@/components/ProjectFilterGrid";
import { maintenanceProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Maintenance Projects | Koin E&C",
  description: "Turnaround and maintenance projects delivered by Koin E&C for Pertamina and power plant clients.",
};

export default function MaintenanceProjectsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Projects"
        title="Maintenance Projects"
        subtitle="We create the future through challenge and innovation."
        image="/images/maintenance-field/dumai-ta.jpg"
        crumbs={[{ label: "Projects", href: "/projects" }, { label: "Maintenance Projects" }]}
      />
      <Section>
        <Eyebrow>Turnaround &amp; Maintenance</Eyebrow>
        <h2 className="max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-koin-ink md:text-4xl">
          Trusted for scheduled shutdowns and turnaround work.
        </h2>
        <div className="mt-14">
          <ProjectFilterGrid projects={maintenanceProjects} />
        </div>
      </Section>
    </main>
  );
}
