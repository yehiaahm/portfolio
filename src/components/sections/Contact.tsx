"use client";

import type { ComponentType } from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";
import MagneticButton from "@/components/ui/MagneticButton";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function WhatsAppIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.41-1.42a9.87 9.87 0 0 0 4.63 1.18h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.84 14.06c-.25.7-1.23 1.28-2.02 1.45-.55.12-1.26.21-3.68-.79-2.98-1.23-4.91-4.23-5.06-4.43-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.008.44-.07.68.52.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.08.13.08.72-.17 1.42Z" />
    </svg>
  );
}

const iconMap: Record<string, ComponentType<{ size?: number }>> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  whatsapp: WhatsAppIcon,
};

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-28 text-cream-100 sm:py-40">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-clay-400/20 blur-[140px]" />

      <div className="container-px relative mx-auto max-w-content text-center">
        <FadeIn amount={0.8}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cream-100/15 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sage-500" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-cream-100/70">
              {t.contact.badge}
            </span>
          </div>
        </FadeIn>

        <h2 className="font-display text-display-lg font-medium">
          <RevealText text={t.contact.heading1} className="justify-center" />
          <span className="flex justify-center">
            <RevealText
              text={t.contact.heading2}
              delay={0.15}
              className="font-serif italic text-clay-200"
            />
          </span>
        </h2>

        <FadeIn delay={0.2} amount={0.7}>
          <p className="mx-auto mt-7 max-w-lg text-pretty text-lg leading-relaxed text-cream-100/70">
            {t.contact.body}
          </p>
        </FadeIn>

        <FadeIn delay={0.3} amount={0.7}>
          <div className="mt-12 flex justify-center">
            <MagneticButton strength={0.25}>
              <a
                href={`mailto:${t.email}`}
                data-cursor="Email me"
                dir="ltr"
                className="group inline-flex items-center gap-3 rounded-full border border-cream-100/20 px-8 py-5 font-display text-xl font-medium transition-colors duration-300 hover:border-clay-200 sm:text-2xl"
              >
                {t.email}
                <ArrowUpRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </MagneticButton>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} amount={0.7}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            {t.contact.socials.map((s) => {
              const Icon = iconMap[s.key];
              return (
                <a
                  key={s.key}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-cursor={s.label}
                  className="flex items-center gap-2 rounded-full border border-cream-100/15 px-5 py-3 font-mono text-xs uppercase tracking-widest2 text-cream-100/70 transition-colors duration-300 hover:border-cream-100/40 hover:text-cream-100"
                >
                  <Icon size={14} />
                  {s.label}
                </a>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
