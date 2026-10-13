"use client";

import { useRef } from "react";
import Image from "next/image";
import { Code2 } from "lucide-react";
import { useMouseParallax } from "@/lib/hooks/useMousePosition";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { basePath } from "@/lib/basePath";

const parallax = (amount: number) => ({
  transform: `translate(calc(var(--mx, 0) * ${amount}px), calc(var(--my, 0) * ${amount}px))`,
});

export default function PortraitArt({ hasPortrait }: { hasPortrait: boolean }) {
  const { t } = useLanguage();
  const rootRef = useRef<HTMLDivElement>(null);
  useMouseParallax(rootRef);

  return (
    <div ref={rootRef} className="anim-fade relative mx-auto aspect-square w-full max-w-[420px]">
      <div
        aria-hidden
        className="absolute inset-[8%] rounded-full bg-[radial-gradient(closest-side,rgba(222,156,121,0.38),rgba(217,221,209,0.28)_65%,transparent)] transition-transform duration-300 ease-out"
        style={parallax(10)}
      />

      <svg
        aria-hidden
        viewBox="0 0 100 100"
        className="anim-spin-34 absolute inset-[-3%] h-[106%] w-[106%]"
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
      </svg>

      <div
        style={parallax(8)}
        className="absolute inset-[6%] overflow-hidden rounded-full border border-ink/10 bg-cream-200 shadow-[0_40px_100px_-30px_rgba(33,30,26,0.4)] transition-transform duration-300 ease-out"
      >
        {hasPortrait ? (
          <>
            <div className="anim-zoom relative h-full w-full">
              <Image
                src={`${basePath}/images/portrait.jpg`}
                alt="Portrait of Yehia Ahmed"
                fill
                priority
                sizes="(max-width: 640px) 320px, 420px"
                className="object-cover"
                style={{ filter: "grayscale(0.1) contrast(1.05) saturate(1.05)" }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-clay-400/20 via-transparent to-sage-300/10" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink to-ink-100">
            <span className="font-display text-8xl font-medium text-cream-100/90">YA</span>
          </div>
        )}
      </div>

      <div className="anim-rise absolute -left-6 top-6 sm:-left-10" style={{ animationDelay: "0.3s" }}>
        <div style={parallax(-14)} className="transition-transform duration-300 ease-out">
          <div className="anim-bob flex items-center gap-2 rounded-2xl border border-ink/10 bg-cream-50/90 px-4 py-3 shadow-lg backdrop-blur-sm">
            <Code2 size={16} className="text-clay-400" />
            <span className="font-mono text-xs uppercase tracking-widest2 text-ink-50">{t.hero.badgeFullStack}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
