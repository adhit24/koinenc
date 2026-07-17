import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, Eyebrow } from "@/components/Section";
import { ProjectRecordTable } from "@/components/ProjectRecordTable";
import { projectRecord } from "@/data/projectRecord";

export const metadata: Metadata = {
  title: "Project Record | Koin E&C",
  description: `Complete list of ${projectRecord.length}+ projects delivered by Koin E&C since 2001.`,
};

export default function ProjectRecordPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Projects"
        title="Project Record"
        subtitle="We create the future through challenge and innovation."
        image="/images/projects/majors/toray.jpg"
        crumbs={[{ label: "Projects", href: "/projects" }, { label: "Project Record" }]}
      />
      <Section>
        <Eyebrow>Full Project List</Eyebrow>
        <h2 className="max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-koin-ink md:text-4xl">
          {projectRecord.length}+ contracted works since 2001.
        </h2>
        <div className="mt-14">
          <ProjectRecordTable rows={projectRecord} />
        </div>
      </Section>
    </main>
  );
}
