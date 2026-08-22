"use client";

import FadeIn from "@/components/ui/FadeIn";
import RevealText from "@/components/ui/RevealText";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="container-px mx-auto max-w-content py-28 sm:py-36">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <FadeIn amount={0.8}>
            <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest2 text-clay-400">
              <span className="text-clay-300">{t.about.index}</span>
              <span className="h-px w-8 bg-clay-300/60" />
              <span>{t.about.label}</span>
            </div>
          </FadeIn>

          <RevealText
            text={t.about.heading1}
            as="p"
            className="font-display text-display-sm font-medium text-ink"
            stagger={0.025}
          />
          <p className="font-serif text-display-sm italic text-clay-400">
            <RevealText text={t.about.heading2} stagger={0.03} delay={0.2} />
          </p>

          <FadeIn delay={0.1} amount={0.6}>
            <div className="mt-10 space-y-5 text-pretty text-lg leading-relaxed text-ink-50">
              {t.about.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} amount={0.5}>
          <div className="rounded-3xl border border-ink/10 bg-cream-50 p-8 sm:p-10">
            <span className="font-mono text-xs uppercase tracking-widest2 text-ink-50">
              {t.about.factsLabel}
            </span>
            <dl className="mt-8 space-y-6">
              {t.about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-center justify-between border-b border-ink/10 pb-5 last:border-none last:pb-0"
                >
                  <dt className="font-mono text-xs uppercase tracking-widest2 text-ink-50/70">
                    {fact.label}
                  </dt>
                  <dd className="text-end font-display text-lg font-medium text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
