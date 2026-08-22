"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import clsx from "clsx";

export default function LanguageToggle({ className }: { className?: string }) {
  const { t, toggleLocale } = useLanguage();

  return (
    <button
      onClick={toggleLocale}
      data-cursor="Switch"
      className={clsx(
        "flex items-center gap-1.5 rounded-full border border-ink/15 px-3.5 py-2 font-mono text-xs uppercase tracking-widest2 text-ink transition-colors duration-300 hover:border-ink/40",
        className
      )}
      aria-label="Switch language"
    >
      <Languages size={13} />
      {t.langLabel}
    </button>
  );
}
