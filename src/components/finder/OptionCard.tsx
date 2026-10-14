"use client";

import clsx from "clsx";
import { Check, type LucideIcon } from "lucide-react";

interface OptionCardProps {
  title: string;
  desc?: string;
  icon?: LucideIcon;
  selected?: boolean;
  /** Renders a checkbox — for multi-select steps. */
  multi?: boolean;
  badge?: string;
  onClick: () => void;
}

export default function OptionCard({
  title,
  desc,
  icon: Icon,
  selected = false,
  multi = false,
  badge,
  onClick,
}: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={clsx(
        "group relative flex h-full w-full flex-col items-start gap-4 rounded-2xl border p-5 text-start transition-all duration-300 ease-premium sm:p-6",
        selected
          ? "border-clay-300 bg-cream-50 shadow-[0_24px_60px_-36px_rgba(169,78,48,0.7)]"
          : "border-ink/10 bg-cream-50/50 hover:-translate-y-0.5 hover:border-ink/25 hover:bg-cream-50"
      )}
    >
      {badge && (
        <span className="absolute -top-2.5 start-5 rounded-full bg-sage-500 px-2.5 py-1 font-mono text-[10px] uppercase leading-none tracking-widest2 text-cream-50">
          {badge}
        </span>
      )}
      {multi && (
        <span
          aria-hidden
          className={clsx(
            "absolute end-4 top-4 flex h-5 w-5 items-center justify-center rounded-md border transition-colors duration-300",
            selected ? "border-clay-300 bg-clay-300 text-cream-50" : "border-ink/20 text-transparent"
          )}
        >
          <Check size={13} strokeWidth={3} />
        </span>
      )}
      {Icon && (
        <span
          className={clsx(
            "flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-300",
            selected ? "bg-clay-300 text-cream-50" : "bg-cream-200 text-ink group-hover:bg-ink group-hover:text-cream-50"
          )}
        >
          <Icon size={20} strokeWidth={1.75} />
        </span>
      )}
      <span className={clsx("block", multi && "pe-6")}>
        <span className="block font-display text-lg font-medium leading-tight text-ink sm:text-xl">{title}</span>
        {desc && <span className="mt-1.5 block text-sm leading-snug text-ink-50">{desc}</span>}
      </span>
    </button>
  );
}
