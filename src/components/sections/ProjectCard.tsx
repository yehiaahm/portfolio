"use client";

import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/i18n/translations";
import ProjectPreview, { type PreviewName } from "./ProjectPreview";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const accentText: Record<Project["accent"], string> = {
  clay: "text-clay-400",
  sage: "text-sage-700",
  gold: "text-gold-400",
  sky: "text-sky-400",
};

const accentBg: Record<Project["accent"], string> = {
  clay: "bg-clay-300",
  sage: "bg-sage-500",
  gold: "bg-gold-300",
  sky: "bg-sky-300",
};

export default function ProjectCard({
  project,
  compact,
  delay = 0,
}: {
  project: Project;
  compact?: boolean;
  delay?: number;
}) {
  const { t } = useLanguage();
  const preview = (
    <ProjectPreview name={project.name as PreviewName} url={project.liveUrl} playLabel={t.work.playLabel} />
  );

  return (
    <FadeIn delay={delay} amount={0.15}>
      <article>
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

        <div
          className={
            compact
              ? "mt-6 flex flex-col gap-4"
              : "mt-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12"
          }
        >
          <div className="min-w-0">
            <div className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-widest2 text-ink-50/70">
              <span className={accentText[project.accent]}>{project.index}</span>
              <span className="h-px w-6 bg-ink/15" />
              <span>{project.year}</span>
              {project.liveUrl && (
                <span className="flex items-center gap-1.5 rounded-full border border-ink/10 bg-cream-50 px-2.5 py-1 text-[10px] text-ink">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-500 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage-500" />
                  </span>
                  {t.work.liveLabel}
                </span>
              )}
            </div>
            <h3
              className={
                compact
                  ? "text-balance font-display text-2xl font-medium text-ink sm:text-3xl"
                  : "text-balance font-display text-3xl font-medium text-ink sm:text-4xl xl:text-5xl"
              }
            >
              {project.name}
            </h3>
            <p className="mt-3 max-w-xl text-pretty leading-relaxed text-ink-50 sm:text-lg">{project.tagline}</p>
          </div>

          <div className={compact ? "flex flex-col gap-4" : "flex shrink-0 flex-col gap-4 lg:items-end"}>
            <ul className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[11px] uppercase tracking-wide text-ink-50/70">
              {project.tech.map((tech, i) => (
                <li key={tech} className="flex items-center gap-2.5">
                  {i > 0 && <span className="text-ink/20">/</span>}
                  {tech}
                </li>
              ))}
            </ul>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Visit"
                className={`group/live inline-flex w-fit items-center gap-2 rounded-full py-2.5 pe-4 ps-5 font-mono text-xs uppercase tracking-widest2 text-cream-50 transition-opacity duration-300 hover:opacity-90 ${accentBg[project.accent]}`}
              >
                {t.work.ctaLive}
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5"
                />
              </a>
            )}
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
