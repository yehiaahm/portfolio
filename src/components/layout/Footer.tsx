"use client";

import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.work, href: "#work" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.capabilities, href: "#capabilities" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="border-t border-cream-100/10 bg-ink text-cream-100">
      <div className="container-px mx-auto flex max-w-content flex-col gap-10 py-14 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <a href="#top" data-cursor="Top" className="font-display text-2xl font-medium tracking-tight">
            {t.hero.name}
            <span className="text-clay-200">.</span>
          </a>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream-100/50">{t.footer.tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-widest2 text-cream-100/60 transition-colors duration-300 hover:text-cream-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#top"
          data-cursor="Up"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cream-100/15 transition-colors duration-300 hover:border-clay-200 hover:text-clay-200"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </a>
      </div>

      <div className="container-px mx-auto flex max-w-content flex-col items-center justify-between gap-3 border-t border-cream-100/10 py-6 text-xs text-cream-100/40 sm:flex-row">
        <span>
          &copy; {new Date().getFullYear()} {t.hero.name}. {t.footer.rights}
        </span>
        <span className="font-mono uppercase tracking-widest2">{t.footer.designedBy}</span>
      </div>
    </footer>
  );
}
