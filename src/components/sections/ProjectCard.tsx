"use client";

import { MouseEvent, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/i18n/translations";
import ProjectPreview from "./ProjectPreview";
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

const accentBorder: Record<Project["accent"], string> = {
  clay: "border-clay-300",
  sage: "border-sage-500",
  gold: "border-gold-300",
  sky: "border-sky-300",
};

export default function ProjectCard({ project, reverse }: { project: Project; reverse?: boolean }) {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 18 });
  const sry = useSpring(ry, { stiffness: 150, damping: 18 });
  const rotateX = useTransform(srx, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(sry, [-0.5, 0.5], [-6, 6]);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    ry.set((e.clientX - rect.left) / rect.width - 0.5);
    rx.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
      <FadeIn className={reverse ? "lg:order-2" : ""} amount={0.25}>
        <div
          ref={ref}
          onMouseMove={handleMove}
          onMouseLeave={reset}
          data-cursor="Details"
          style={{ perspective: 1200 }}
          className="group"
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative rounded-[28px] border border-ink/10 bg-cream-200/60 p-3 shadow-[0_40px_90px_-40px_rgba(33,30,26,0.4)] transition-shadow duration-500 group-hover:shadow-[0_50px_110px_-30px_rgba(33,30,26,0.45)]"
          >
            <ProjectPreview
              name={
                project.name as
                  | "Pharmacy E-commerce & ERP"
                  | "AnimaSys"
                  | "AI Fitness & Nutrition Coaching Platform"
                  | "PetMate"
              }
              accent={project.accent}
            />
          </motion.div>
        </div>
      </FadeIn>

      <FadeIn className={reverse ? "lg:order-1" : ""} delay={0.1} amount={0.25}>
        <div className="flex h-full flex-col justify-center">
          <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest2 text-ink-50/70">
            <span className={accentText[project.accent]}>{project.index}</span>
            <span className="h-px w-8 bg-ink/15" />
            <span>{project.status}</span>
            <span className="h-px w-8 bg-ink/15" />
            <span>{project.year}</span>
          </div>

          <h3 className="font-display text-4xl font-medium text-ink sm:text-5xl">{project.name}</h3>
          <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-ink-50">{project.tagline}</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-50/60">{t.work.problemLabel}</span>
              <p className="mt-2 text-sm leading-relaxed text-ink-50">{project.problem}</p>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-50/60">{t.work.builtLabel}</span>
              <p className="mt-2 text-sm leading-relaxed text-ink-50">{project.build}</p>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-50/60">{t.work.roleLabel}</span>
              <p className="mt-2 text-sm leading-relaxed text-ink-50">{project.role}</p>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-50/60">{t.work.edgeLabel}</span>
              <p className="mt-2 text-sm leading-relaxed text-ink-50">{project.edge}</p>
            </div>
          </div>

          <div className={`mt-7 rounded-2xl border-s-2 py-1 ps-5 ${accentBorder[project.accent]}`}>
            <p className={`font-serif text-xl italic leading-snug ${accentText[project.accent]}`}>
              &ldquo;{project.value}&rdquo;
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-ink/10 bg-cream-50 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-ink-50"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Visit"
                className={`group/live inline-flex w-fit items-center gap-2.5 rounded-full py-3 ps-5 pe-4 font-mono text-xs uppercase tracking-widest2 text-cream-50 transition-opacity duration-300 hover:opacity-90 ${accentBg[project.accent]}`}
              >
                {t.work.ctaLive}
                <ExternalLink size={14} className="transition-transform duration-300 group-hover/live:translate-x-1 group-hover/live:-translate-y-1" />
              </a>
            )}
            <a
              href="#contact"
              data-cursor="Talk"
              className="group/cta inline-flex w-fit items-center gap-2.5 rounded-full border border-ink/15 py-3 ps-5 pe-4 font-mono text-xs uppercase tracking-widest2 text-ink transition-colors duration-300 hover:border-ink/30 hover:bg-cream-50"
            >
              <span className={`h-1.5 w-1.5 rounded-full ${accentBg[project.accent]}`} />
              {t.work.ctaDiscuss}
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" />
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
