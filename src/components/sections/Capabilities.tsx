"use client";

import { Blocks, Layers, Database, Target } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const icons = [Blocks, Layers, Database, Target];

export default function Capabilities() {
  const { t } = useLanguage();

  return (
    <section id="capabilities" className="container-px mx-auto max-w-content py-28 sm:py-36">
      <SectionHeading
        index={t.capabilities.index}
        label={t.capabilities.label}
        heading={t.capabilities.heading}
        description={t.capabilities.description}
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
        {t.capabilities.items.map((cap, i) => {
          const Icon = icons[i];
          return (
            <FadeIn key={cap.title} delay={i * 0.08} amount={0.4}>
              <div className="group relative h-full bg-cream-100 p-8 transition-colors duration-500 hover:bg-cream-50 sm:p-10">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink/10 bg-cream-50 text-clay-400 transition-colors duration-500 group-hover:border-clay-300/40">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-xs text-ink-50/50">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium text-ink sm:text-3xl">{cap.title}</h3>
                <p className="mt-4 max-w-sm text-pretty leading-relaxed text-ink-50">{cap.description}</p>
                <div className="absolute bottom-0 start-0 h-0.5 w-0 bg-clay-300 transition-all duration-500 group-hover:w-full" />
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
