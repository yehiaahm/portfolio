"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Code2, Sparkles } from "lucide-react";
import { useMousePosition } from "@/lib/hooks/useMousePosition";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function PortraitArt({ hasPortrait }: { hasPortrait: boolean }) {
  const { t } = useLanguage();
  const { x, y } = useMousePosition();
  const reduceMotion = useReducedMotion();
  const px = reduceMotion ? 0 : x;
  const py = reduceMotion ? 0 : y;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.35 }}
      className="relative mx-auto aspect-square w-full max-w-[420px]"
    >
      <div
        aria-hidden
        className="absolute inset-[8%] rounded-full bg-gradient-to-br from-clay-200/50 via-cream-300/30 to-sage-100/40 blur-3xl transition-transform duration-300 ease-out"
        style={{ transform: `translate(${px * 10}px, ${py * 10}px)` }}
      />

      <motion.svg
        aria-hidden
        viewBox="0 0 100 100"
        className="absolute inset-[-3%] h-[106%] w-[106%]"
        animate={reduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="50"
          cy="50"
          r="49"
          fill="none"
          stroke="url(#portraitRing)"
          strokeWidth="0.5"
          strokeDasharray="4.5 3.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="portraitRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C96A45" />
            <stop offset="50%" stopColor="#DED4BE" />
            <stop offset="100%" stopColor="#6B7261" />
          </linearGradient>
        </defs>
      </motion.svg>

      <motion.div
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        animate={{ clipPath: "circle(50% at 50% 50%)" }}
        transition={{ duration: 1.3, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        style={{ transform: `translate(${px * 8}px, ${py * 8}px)` }}
        className="absolute inset-[6%] overflow-hidden rounded-full border border-ink/10 bg-cream-200 shadow-[0_40px_100px_-30px_rgba(33,30,26,0.4)] transition-transform duration-300 ease-out"
      >
        {hasPortrait ? (
          <>
            <motion.div
              initial={{ scale: 1.18 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full w-full"
            >
              <Image
                src="/images/portrait.jpg"
                alt="Portrait of Yehia Ahmed"
                fill
                priority
                sizes="(max-width: 640px) 320px, 420px"
                className="object-cover"
                style={{ filter: "grayscale(0.1) contrast(1.05) saturate(1.05)" }}
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-clay-400/20 via-transparent to-sage-300/10 mix-blend-multiply" />
            <div className="noise-bg pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-overlay" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink to-ink-100">
            <span className="font-display text-8xl font-medium text-cream-100/90">YA</span>
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -left-6 top-6 sm:-left-10"
      >
        <motion.div
          animate={reduceMotion ? {} : { y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: `translate(${px * -14}px, ${py * -14}px)` }}
          className="flex items-center gap-2 rounded-2xl border border-ink/10 bg-cream-50/90 px-4 py-3 shadow-lg backdrop-blur-sm"
        >
          <Code2 size={16} className="text-clay-400" />
          <span className="font-mono text-xs uppercase tracking-widest2 text-ink-50">{t.hero.badgeFullStack}</span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.65, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -right-4 bottom-10 sm:-right-8"
      >
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          style={{ transform: `translate(${px * 16}px, ${py * 16}px)` }}
          className="flex items-center gap-2 rounded-2xl border border-ink/10 bg-cream-50/90 px-4 py-3 shadow-lg backdrop-blur-sm"
        >
          <Sparkles size={16} className="text-sage-500" />
          <span className="font-mono text-xs uppercase tracking-widest2 text-ink-50">{t.hero.badgeCsStudent}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
