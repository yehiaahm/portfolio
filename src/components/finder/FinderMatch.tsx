"use client";

import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import ProjectPreview, { type PreviewName } from "@/components/sections/ProjectPreview";
import { useLanguage } from "@/lib/i18n/LanguageContext";

/** The projects that match the client's business, shown right after they pick it. */
export default function FinderMatch({ names }: { names: PreviewName[] }) {
  const { t } = useLanguage();
  const projects = names.flatMap((name) => t.work.projects.filter((p) => p.name === name));

  return (
    <div className={clsx("grid gap-12 md:gap-8", projects.length > 1 ? "md:grid-cols-2" : "max-w-4xl")}>
      {projects.map((project) => {
        const preview = (
          <ProjectPreview name={project.name as PreviewName} url={project.liveUrl} playLabel={t.work.playLabel} />
        );

        return (
          <article key={project.name}>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Visit"
                aria-label={`${project.name} — ${t.work.ctaLive}`}
                className="group block"
              >
                {preview}
              </a>
            ) : (
              <div className="group">{preview}</div>
            )}
            <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">{project.name}</h3>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="Visit"
                  className="group/live inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest2 text-clay-400 transition-colors duration-300 hover:text-clay-500"
                >
                  {t.work.ctaLive}
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover/live:-translate-y-0.5"
                  />
                </a>
              )}
            </div>
            <p className="mt-2 max-w-xl text-pretty leading-relaxed text-ink-50">{project.tagline}</p>
          </article>
        );
      })}
    </div>
  );
}
