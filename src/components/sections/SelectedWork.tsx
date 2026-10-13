"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/sections/ProjectCard";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const FEATURED_COUNT = 3;

export default function SelectedWork() {
  const { t } = useLanguage();
  const featured = t.work.projects.slice(0, FEATURED_COUNT);
  const secondary = t.work.projects.slice(FEATURED_COUNT);

  return (
    <section id="work" className="bg-cream-200/60 py-24 sm:py-32">
      <div className="container-px mx-auto max-w-content">
        <SectionHeading
          index={t.work.index}
          label={t.work.label}
          heading={t.work.heading}
          description={t.work.description}
        />

        <div className="mt-16 flex flex-col gap-24 sm:mt-20 sm:gap-32">
          {featured.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        {secondary.length > 0 && (
          <>
            <FadeIn amount={0.8}>
              <div className="mt-24 flex items-center gap-3 border-t border-ink/10 pt-12 font-mono text-xs uppercase tracking-widest2 text-clay-400 sm:mt-32">
                <span className="h-px w-8 bg-clay-300/60" />
                <span>{t.work.moreLabel}</span>
              </div>
            </FadeIn>
            <div className="mt-10 grid gap-16 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
              {secondary.map((project, i) => (
                <ProjectCard key={project.name} project={project} compact delay={i * 0.1} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
