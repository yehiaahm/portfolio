"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/sections/ProjectCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function SelectedWork() {
  const { t } = useLanguage();

  return (
    <section id="work" className="bg-cream-200/60 py-28 sm:py-36">
      <div className="container-px mx-auto max-w-content">
        <SectionHeading
          index={t.work.index}
          label={t.work.label}
          heading={t.work.heading}
          description={t.work.description}
        />

        <div className="mt-4 divide-y divide-ink/10">
          {t.work.projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
