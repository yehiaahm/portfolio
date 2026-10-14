"use client";

import type { ReactNode } from "react";
import clsx from "clsx";
import { ArrowUpRight, CircleAlert, CircleCheck, Clock, Layers, Mail, Pencil, RotateCcw } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  WHATSAPP_NUMBER,
  type Budget,
  type BusinessId,
  type DeadlineId,
  type FeatureId,
  type KindId,
} from "@/lib/finder/config";
import { budgetFit, deadlineFit, estimate } from "@/lib/finder/estimate";
import { formatBudget, formatPrice } from "@/lib/finder/format";

export type EditableStep = "business" | "kind" | "features" | "budget" | "deadline";

const tones = {
  good: { icon: CircleCheck, color: "text-sage-300" },
  warn: { icon: Clock, color: "text-gold-200" },
  phase: { icon: Layers, color: "text-clay-200" },
  alert: { icon: CircleAlert, color: "text-clay-200" },
};

const budgetTone = { unsure: "good", fits: "good", close: "warn", phased: "phase", below: "alert" } as const;
const deadlineTone = { flexible: "good", fits: "good", tight: "warn", phased: "phase" } as const;

function FitRow({ tone, children }: { tone: keyof typeof tones; children: ReactNode }) {
  const { icon: Icon, color } = tones[tone];
  return (
    <div className="flex items-start gap-3">
      <Icon size={18} className={clsx("mt-1 shrink-0", color)} />
      <p className="text-pretty leading-relaxed text-cream-100/85">{children}</p>
    </div>
  );
}

function PhaseBox({ label, price, items }: { label: string; price?: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-cream-100/10 p-4">
      <span className="font-mono text-[11px] uppercase tracking-widest2 text-clay-200">{label}</span>
      {price && <p className="mt-1 text-sm text-cream-100/60">{price}</p>}
      <ul className="mt-3 space-y-1.5 text-sm text-cream-100/85">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function FinderResult({
  business,
  kind,
  features,
  budget,
  deadline,
  onEdit,
  onRestart,
}: {
  business: BusinessId;
  kind: KindId;
  features: FeatureId[];
  budget: Budget;
  deadline: DeadlineId;
  onEdit: (step: EditableStep) => void;
  onRestart: () => void;
}) {
  const { t } = useLanguage();
  const f = t.finder;
  const r = f.result;
  const currency = f.budget.currency;

  const { price, weeks } = estimate(kind, features);
  const bFit = budgetFit(kind, features, budget);
  const dFit = deadlineFit(kind, features, deadline);

  const featureTitle = (id: FeatureId) => f.features.options[id].title;
  const kindTitle = f.kind.options[kind].title;
  const priceText = formatPrice(price, currency);
  const weeksText = r.weeks(weeks);

  const answers: { step: EditableStep; label: string; value: string }[] = [
    { step: "business", label: r.labels.business, value: f.business.options[business].title },
    { step: "kind", label: r.labels.kind, value: kindTitle },
    { step: "features", label: r.labels.features, value: features.map(featureTitle).join(t.dir === "rtl" ? "، " : ", ") || r.none },
    { step: "budget", label: r.labels.budget, value: formatBudget(budget, f.budget) },
    { step: "deadline", label: r.labels.deadline, value: f.deadline.options[deadline].title },
  ];

  const message = [
    r.greeting,
    "",
    ...answers.map((a) => `${a.label}: ${a.value}`),
    `${r.estimateLine}: ${priceText} (${weeksText})`,
  ].join("\n");
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const emailHref = `mailto:${t.email}?subject=${encodeURIComponent(
    `${r.emailSubject} — ${answers[0].value}`
  )}&body=${encodeURIComponent(message)}`;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="relative overflow-hidden rounded-3xl bg-ink p-7 text-cream-100 sm:p-10">
        <div className="pointer-events-none absolute -end-24 -top-24 h-72 w-72 rounded-full bg-clay-400/25 blur-[90px]" />

        <span className="font-mono text-xs uppercase tracking-widest2 text-cream-100/60">{r.cost}</span>
        <p className="mt-3 font-display text-[2rem] font-medium leading-tight sm:text-5xl lg:text-[2.6rem] xl:text-6xl">
          <span className="sm:whitespace-nowrap">{formatPrice(price)}</span>
          <span className="ms-2 text-lg text-cream-100/60 sm:text-2xl">{currency}</span>
        </p>
        <p className="mt-4 flex items-center gap-2 text-cream-100/75">
          <Clock size={16} className="shrink-0" />
          {r.timeline}: {weeksText}
        </p>

        <div className="mt-8 space-y-4 border-t border-cream-100/10 pt-8">
          <FitRow tone={budgetTone[bFit.status]}>{r.budgetFit[bFit.status]}</FitRow>
          {bFit.status === "phased" && (
            <div className="grid gap-3 sm:grid-cols-2 sm:ps-8">
              <PhaseBox
                label={r.phaseNow}
                price={formatPrice(bFit.price, currency)}
                items={[kindTitle, ...bFit.now.map(featureTitle)]}
              />
              <PhaseBox label={r.phaseLater} items={bFit.later.map(featureTitle)} />
            </div>
          )}
          <FitRow tone={deadlineTone[dFit.status]}>
            {dFit.status === "phased"
              ? r.deadlineFit.phased.replace("{weeks}", r.weeks(dFit.weeks))
              : r.deadlineFit[dFit.status]}
          </FitRow>
        </div>

        <div className="mt-8">
          <span className="font-mono text-xs uppercase tracking-widest2 text-cream-100/60">{r.included}</span>
          <ul className="mt-3 flex flex-wrap gap-2">
            {r.includes[kind].map((item) => (
              <li key={item} className="rounded-full border border-cream-100/15 px-3 py-1.5 text-sm text-cream-100/75">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-pretty text-sm leading-relaxed text-cream-100/50">{r.disclaimer}</p>
      </div>

      <div className="flex flex-col rounded-3xl border border-ink/10 bg-cream-50 p-7 sm:p-10">
        <span className="font-mono text-xs uppercase tracking-widest2 text-ink-50">{r.answers}</span>
        <dl className="mt-5 divide-y divide-ink/10">
          {answers.map((a) => (
            <div key={a.step} className="py-4 first:pt-0">
              <dt className="font-mono text-[11px] uppercase tracking-widest2 text-ink-50/70">{a.label}</dt>
              <dd className="mt-1 flex items-start justify-between gap-4">
                <span className="text-pretty font-display text-lg font-medium leading-snug text-ink">{a.value}</span>
                <button
                  type="button"
                  onClick={() => onEdit(a.step)}
                  aria-label={`${r.edit}: ${a.label}`}
                  className="shrink-0 rounded-full border border-ink/10 p-2 text-ink-50 transition-colors duration-300 hover:border-ink/30 hover:text-ink"
                >
                  <Pencil size={13} />
                </button>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-auto pt-8">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="Send"
            className="group flex w-full items-center justify-center gap-3 rounded-full bg-clay-300 px-6 py-4 font-display text-lg font-medium text-cream-50 transition-colors duration-300 hover:bg-clay-400"
          >
            <WhatsAppIcon size={18} />
            {r.whatsapp}
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
          <p className="mt-3 text-center text-sm text-ink-50">{r.whatsappHint}</p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-5">
            <a
              href={emailHref}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest2 text-ink-50 transition-colors duration-300 hover:text-ink"
            >
              <Mail size={14} />
              {r.email}
            </a>
            <button
              type="button"
              onClick={onRestart}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest2 text-ink-50 transition-colors duration-300 hover:text-ink"
            >
              <RotateCcw size={14} />
              {r.startOver}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
