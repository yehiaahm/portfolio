"use client";

import { motion } from "framer-motion";
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
      <div className="pointer-events-none absolute -left-40 top-0 -z-10 h-[560px] w-[560px] rounded-full bg-clay-100/50 blur-[130px]" />
      <div className="pointer-events-none absolute -right-24 top-40 -z-10 h-[420px] w-[420px] rounded-full bg-sage-100/60 blur-[120px]" />

      <div className="hero-grid container-px mx-auto grid max-w-content gap-y-12 gap-x-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          <div style={{ gridArea: "heading" }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream-50 px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sage-500" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-50">
                {t.hero.badge}
              </span>
            </motion.div>

            <h1 className="font-display text-display-xl font-medium text-ink">
              <RevealText text={t.hero.name} delay={0.55} stagger={0.06} />
              <span className="mt-1 flex flex-wrap items-baseline gap-x-4">
                <RevealText
                  text={t.hero.line2}
                  delay={0.8}
                  stagger={0.045}
                  className="text-display-md text-ink-50"
                />
              </span>
              <span className="flex flex-wrap items-baseline gap-x-4">
                <RevealText
                  text={t.hero.line3}
                  delay={0.95}
                  stagger={0.045}
                  className="text-display-md text-ink-50"
                />
                <span className="overflow-hidden py-[0.1em]">
                  <motion.span
                    initial={{ y: "110%", rotate: 3 }}
                    animate={{ y: "0%", rotate: 0 }}
                    transition={{ duration: 0.9, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block font-serif text-display-md italic text-clay-400"
                  >
                    {t.hero.accentWord}
                  </motion.span>
                </span>
              </span>
            </h1>
          </div>

          <div style={{ gridArea: "photo" }} className="py-2 lg:py-0">
            <PortraitArt hasPortrait={hasPortrait} />
          </div>

          <div style={{ gridArea: "body" }}>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-lg text-pretty text-lg leading-relaxed text-ink-50"
            >
              {t.hero.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
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
            </motion.div>
          </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.9 }}
        className="mt-20 border-y border-ink/10 py-5"
      >
        <Marquee>
          {t.hero.keywords.map((k) => (
            <span key={k} className="flex items-center gap-12 font-mono text-sm uppercase tracking-widest2 text-ink-50/70">
              {k}
              <span className="text-clay-300">/</span>
            </span>
          ))}
        </Marquee>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.1 }}
        className="mt-10 flex justify-center"
      >
        <a href="#about" data-cursor="Scroll" className="flex flex-col items-center gap-2 text-ink-50">
          <span className="font-mono text-[10px] uppercase tracking-widest2">{t.hero.scroll}</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
