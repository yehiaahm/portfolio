"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="container-px mx-auto max-w-content py-28 sm:py-36">
      <SectionHeading
        index={t.process.index}
        label={t.process.label}
        heading={t.process.heading}
        description={t.process.description}
      />

      <div className="relative mt-16">
        <div className="absolute start-[27px] top-0 hidden h-full w-px bg-ink/10 sm:block" />
        <div className="flex flex-col">
          {t.process.steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.06} amount={0.5}>
              <div className="group flex gap-6 border-t border-ink/10 py-8 first:border-none sm:gap-10 sm:py-10">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-cream-100 font-mono text-sm text-ink-50 transition-colors duration-500 group-hover:border-clay-300 group-hover:bg-clay-300 group-hover:text-cream-100">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-2xl font-medium text-ink sm:w-56 sm:shrink-0 sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="max-w-xl text-pretty leading-relaxed text-ink-50">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
