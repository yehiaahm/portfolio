"use client";

import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";
import PortraitArt from "@/components/sections/PortraitArt";
import Marquee from "@/components/ui/Marquee";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero({ hasPortrait }: { hasPortrait: boolean }) {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden pb-10 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute -left-40 top-0 -z-10 h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(235,194,172,0.5),transparent)]" />
      <div className="pointer-events-none absolute -right-24 top-40 -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(217,221,209,0.6),transparent)]" />

      <div className="hero-grid container-px mx-auto grid max-w-content gap-y-12 gap-x-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          <div style={{ gridArea: "heading" }}>
            <div className="anim-rise mb-7 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream-50 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sage-500" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-50">
                {t.hero.badge}
              </span>
            </div>

            <h1 className="font-display text-display-xl font-medium text-ink">
              <RevealText text={t.hero.name} immediate delay={0.05} stagger={0.06} />
              <span className="mt-1 flex flex-wrap items-baseline gap-x-4">
                <RevealText
                  text={t.hero.line2}
                  immediate
                  delay={0.15}
                  stagger={0.035}
                  className="text-display-md text-ink-50"
                />
              </span>
              <span className="flex flex-wrap items-baseline gap-x-4">
                <RevealText
                  text={t.hero.line3}
                  immediate
                  delay={0.25}
                  stagger={0.035}
                  className="text-display-md text-ink-50"
                />
                <span className="overflow-hidden py-[0.1em]">
                  <span
                    className="anim-word font-serif text-display-md italic text-clay-400"
                    style={{ animationDelay: "0.35s" }}
                  >
                    {t.hero.accentWord}
                  </span>
                </span>
              </span>
            </h1>
          </div>

          <div style={{ gridArea: "photo" }} className="py-2 lg:py-0">
            <PortraitArt hasPortrait={hasPortrait} />
          </div>

          <div style={{ gridArea: "body" }}>
            <p
              className="anim-rise max-w-lg text-pretty text-lg leading-relaxed text-ink-50"
              style={{ animationDelay: "0.3s" }}
            >
              {t.hero.tagline}
            </p>

            <div
              className="anim-rise mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.4s" }}
            >
              <MagneticButton>
                <a
                  href="#work"
                  data-cursor="View"
                  className="flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-mono text-xs uppercase tracking-widest2 text-cream-100 transition-colors duration-300 hover:bg-clay-300"
                >
                  <Sparkles size={14} />
                  {t.hero.ctaWork}
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="#contact"
                  data-cursor="Talk"
                  className="flex items-center gap-2 rounded-full border border-ink/15 px-7 py-4 font-mono text-xs uppercase tracking-widest2 text-ink transition-colors duration-300 hover:border-ink/40"
                >
                  {t.hero.ctaTalk}
                  <ArrowUpRight size={14} />
                </a>
              </MagneticButton>
            </div>
          </div>
      </div>

      <div className="anim-fade mt-20 border-y border-ink/10 py-5" style={{ animationDelay: "0.5s" }}>
        <Marquee>
          {t.hero.keywords.map((k) => (
            <span key={k} className="flex items-center gap-12 font-mono text-sm uppercase tracking-widest2 text-ink-50/70">
              {k}
              <span className="text-clay-300">/</span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="anim-fade mt-10 flex justify-center" style={{ animationDelay: "0.6s" }}>
        <a href="#work" data-cursor="Scroll" className="flex flex-col items-center gap-2 text-ink-50">
          <span className="font-mono text-[10px] uppercase tracking-widest2">{t.hero.scroll}</span>
          <span className="anim-nudge">
            <ArrowDown size={16} />
          </span>
        </a>
      </div>
    </section>
  );
}
