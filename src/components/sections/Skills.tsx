"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="bg-cream-200/60 py-28 sm:py-36">
      <div className="container-px mx-auto max-w-content">
        <SectionHeading
          index={t.skills.index}
          label={t.skills.label}
          heading={t.skills.heading}
          description={t.skills.description}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {t.skills.groups.map((group, i) => (
            <FadeIn key={group.title} delay={i * 0.06} amount={0.4}>
              <div className="h-full rounded-2xl border border-ink/10 bg-cream-100 p-7 transition-colors duration-300 hover:border-clay-300/50">
                <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-50/60">
                  {group.title}
                </span>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-ink/10 bg-cream-50 px-3.5 py-2 font-display text-sm font-medium text-ink transition-colors duration-300 hover:border-clay-300 hover:text-clay-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
