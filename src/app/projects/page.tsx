import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Eyebrow } from "@/components/Section";
import { ProjectFilterGrid } from "@/components/ProjectFilterGrid";
import { mainProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Main Projects | Koin E&C",
  description: "Major power plant, refinery & chemical, and industry projects delivered by Koin E&C.",
};

export default function MainProjectsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Projects"
        title="Main Projects"
        subtitle="We create the future through challenge and innovation."
        image="/images/projects/majors/jawa9-10.jpg"
        crumbs={[{ label: "Projects" }, { label: "Main Projects" }]}
      />
      <Section>
        <Eyebrow>Portfolio</Eyebrow>
        <h2 className="max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-koin-ink md:text-4xl">
          {mainProjects.length}+ major projects across Indonesia&apos;s power, refinery, and industrial sectors.
        </h2>
        <div className="mt-14">
          <ProjectFilterGrid projects={mainProjects} />
        </div>
      </Section>
    </main>
  );
}
