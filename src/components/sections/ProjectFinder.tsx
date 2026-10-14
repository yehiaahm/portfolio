"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  CalendarCheck,
  CalendarDays,
  CalendarRange,
  CircleHelp,
  ClipboardList,
  Coffee,
  CreditCard,
  Dumbbell,
  Globe,
  Languages,
  Layers,
  LayoutDashboard,
  LayoutGrid,
  Monitor,
  Pill,
  Receipt,
  Rocket,
  Server,
  Shirt,
  ShoppingBag,
  Sparkles,
  Store,
  UserRound,
  WandSparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import OptionCard from "@/components/finder/OptionCard";
import FinderMatch from "@/components/finder/FinderMatch";
import FinderResult, { type EditableStep } from "@/components/finder/FinderResult";
import MagneticButton from "@/components/ui/MagneticButton";
import { thumbnailFor } from "@/components/sections/ProjectPreview";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  businesses,
  deadlines,
  type BusinessId,
  type DeadlineId,
  type FeatureId,
  type KindId,
} from "@/lib/finder/config";
import { defaultFeatures, featuresFor } from "@/lib/finder/estimate";

type Step = EditableStep | "choice" | "match" | "result";

const STEPS: Step[] = ["choice", "business", "match", "kind", "features", "deadline", "result"];
const QUESTIONS: Step[] = ["business", "kind", "features", "deadline"];

const BUSINESS_IDS = Object.keys(businesses) as BusinessId[];
const KIND_IDS: KindId[] = ["website", "system", "both"];

const businessIcons: Record<BusinessId, LucideIcon> = {
  pharmacy: Pill,
  fashion: Shirt,
  retail: Store,
  fitness: Dumbbell,
  startup: Rocket,
  other: Sparkles,
};

const kindIcons: Record<KindId, LucideIcon> = { website: Globe, system: Server, both: Layers };

const featureIcons: Record<FeatureId, LucideIcon> = {
  store: ShoppingBag,
  payments: CreditCard,
  accounts: UserRound,
  booking: CalendarCheck,
  dashboard: LayoutDashboard,
  inventory: Boxes,
  pos: Receipt,
  branches: Building2,
  reports: BarChart3,
  desktop: Monitor,
  bilingual: Languages,
  ai: WandSparkles,
};

const deadlineIcons: Record<DeadlineId, LucideIcon> = {
  asap: Zap,
  month: CalendarDays,
  quarter: CalendarRange,
  flexible: Coffee,
};

const ALL_PROJECTS = Array.from(new Set(BUSINESS_IDS.flatMap((id) => businesses[id].projects)));

const primaryButton =
  "flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-mono text-xs uppercase tracking-widest2 text-cream-100 transition-colors duration-300 hover:bg-clay-300";

function StepHeading({ heading, accent, sub, aside }: { heading: string; accent: string; sub: string; aside?: ReactNode }) {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div className="min-w-0 lg:flex-1">
        <h1 className="max-w-4xl text-balance font-display text-display-md font-medium text-ink">
          {heading} <span className="font-serif italic text-clay-400">{accent}</span>
        </h1>
        {sub && <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink-50">{sub}</p>}
      </div>
      {aside && <div className="shrink-0">{aside}</div>}
    </div>
  );
}

export default function ProjectFinder() {
  const { t } = useLanguage();
  const f = t.finder;

  const [step, setStep] = useState<Step>("choice");
  const [business, setBusiness] = useState<BusinessId>("other");
  const [kind, setKind] = useState<KindId>("website");
  const [features, setFeatures] = useState<FeatureId[]>([]);
  const [deadline, setDeadline] = useState<DeadlineId | null>(null);

  const topRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  // Shareable deep link: ?for=pharmacy opens straight on that business's matching work.
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("for");
    if (id && id in businesses) {
      setBusiness(id as BusinessId);
      setStep("match");
    }
  }, []);

  // Keep the question in view when a step changes after the visitor has scrolled down.
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const el = topRef.current;
    if (el && el.getBoundingClientRect().top < 80) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [step]);

  const back = () => setStep(STEPS[Math.max(0, STEPS.indexOf(step) - 1)]);

  const chooseBusiness = (id: BusinessId) => {
    setBusiness(id);
    setStep("match");
  };

  const chooseKind = (id: KindId) => {
    setKind(id);
    setFeatures(defaultFeatures(business, id));
    setStep("features");
  };

  const toggleFeature = (id: FeatureId) =>
    setFeatures((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const restart = () => {
    setStep("choice");
    setFeatures([]);
    setDeadline(null);
  };

  const questionIndex = QUESTIONS.indexOf(step);
  const progress = (STEPS.indexOf(step) / (STEPS.length - 1)) * 100;
  const recommended = businesses[business].kind;

  const showProjects = () => {
    const el = document.getElementById("work");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  let body: ReactNode;
  switch (step) {
    case "choice":
      body = (
        <>
          <StepHeading {...f.choice} />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4">
            <OptionCard
              icon={LayoutGrid}
              title={f.choice.projects.title}
              desc={f.choice.projects.desc}
              onClick={showProjects}
            />
            <OptionCard
              icon={ClipboardList}
              title={f.choice.assess.title}
              desc={f.choice.assess.desc}
              onClick={() => setStep("business")}
            />
          </div>
        </>
      );
      break;

    case "business":
      body = (
        <>
          <StepHeading {...f.business} />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {BUSINESS_IDS.map((id) => (
              <OptionCard
                key={id}
                icon={businessIcons[id]}
                title={f.business.options[id].title}
                desc={f.business.options[id].desc}
                onClick={() => chooseBusiness(id)}
              />
            ))}
          </div>
          <a
            href="#work"
            className="group mt-10 inline-flex items-center gap-4 font-mono text-xs uppercase tracking-widest2 text-ink-50 transition-colors duration-300 hover:text-ink"
          >
            <span className="flex -space-x-3 rtl:space-x-reverse">
              {ALL_PROJECTS.map((name) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={name}
                  src={thumbnailFor(name)}
                  alt=""
                  className="h-9 w-9 rounded-full border-2 border-cream-100 object-cover object-top"
                />
              ))}
            </span>
            {f.skip}
            <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </>
      );
      break;

    case "match":
      body = (
        <>
          <StepHeading
            {...f.match}
            aside={
              <div className="flex flex-col items-start gap-5 lg:items-end">
                <MagneticButton>
                  <button type="button" onClick={() => setStep("kind")} data-cursor="Go" className={primaryButton}>
                    {f.match.cta}
                    <ArrowRight size={14} className="rtl:rotate-180" />
                  </button>
                </MagneticButton>
                <a
                  href="#work"
                  className="font-mono text-xs uppercase tracking-widest2 text-ink-50 underline-offset-4 transition-colors duration-300 hover:text-ink hover:underline"
                >
                  {f.skip}
                </a>
              </div>
            }
          />
          <div className="mt-12">
            <FinderMatch names={businesses[business].projects} />
          </div>
        </>
      );
      break;

    case "kind":
      body = (
        <>
          <StepHeading {...f.kind} />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {KIND_IDS.map((id) => (
              <OptionCard
                key={id}
                icon={kindIcons[id]}
                title={f.kind.options[id].title}
                desc={f.kind.options[id].desc}
                badge={id === recommended ? f.kind.recommended : undefined}
                onClick={() => chooseKind(id)}
              />
            ))}
            <OptionCard
              icon={CircleHelp}
              title={f.kind.notSure.title}
              desc={f.kind.notSure.desc}
              onClick={() => chooseKind(recommended)}
            />
          </div>
        </>
      );
      break;

    case "features":
      body = (
        <>
          <StepHeading {...f.features} />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {featuresFor(kind).map((id) => (
              <OptionCard
                key={id}
                multi
                icon={featureIcons[id]}
                title={f.features.options[id].title}
                desc={f.features.options[id].desc}
                selected={features.includes(id)}
                onClick={() => toggleFeature(id)}
              />
            ))}
          </div>
          <div className="mt-10">
            <MagneticButton>
              <button type="button" onClick={() => setStep("deadline")} data-cursor="Go" className={primaryButton}>
                {f.next}
                <ArrowRight size={14} className="rtl:rotate-180" />
              </button>
            </MagneticButton>
          </div>
        </>
      );
      break;

    case "deadline":
      body = (
        <>
          <StepHeading {...f.deadline} />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {deadlines.map((id) => (
              <OptionCard
                key={id}
                icon={deadlineIcons[id]}
                title={f.deadline.options[id].title}
                desc={f.deadline.options[id].desc}
                selected={id === deadline}
                onClick={() => {
                  setDeadline(id);
                  setStep("result");
                }}
              />
            ))}
          </div>
        </>
      );
      break;

    case "result":
      body = (
        <>
          <StepHeading {...f.result} />
          <div className="mt-10">
            {deadline && (
              <FinderResult
                business={business}
                kind={kind}
                features={features}
                deadline={deadline}
                onEdit={setStep}
                onRestart={restart}
              />
            )}
          </div>
        </>
      );
      break;
  }

  return (
    <section id="start" className="relative overflow-hidden pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="pointer-events-none absolute -left-40 top-0 -z-10 h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(235,194,172,0.5),transparent)]" />
      <div className="pointer-events-none absolute -right-24 top-40 -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(217,221,209,0.6),transparent)]" />

      <div className="anim-rise container-px mx-auto max-w-content">
        <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream-50 px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-sage-500" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-50">{f.eyebrow}</span>
        </div>

        <div ref={topRef} className="mb-10 mt-8 flex h-9 scroll-mt-28 items-center gap-4 sm:mb-12">
          {step !== "choice" && (
            <button
              type="button"
              onClick={back}
              className="flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 font-mono text-[11px] uppercase tracking-widest2 text-ink transition-colors duration-300 hover:border-ink/40"
            >
              <ArrowLeft size={13} className="rtl:rotate-180" />
              {f.back}
            </button>
          )}
          {questionIndex >= 0 && (
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-50/80">
              {f.stepLabel.replace("{n}", String(questionIndex + 1)).replace("{total}", String(QUESTIONS.length))}
            </span>
          )}
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-ink/10">
            <div
              className="h-full rounded-full bg-clay-300 transition-[width] duration-500 ease-premium"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {body}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
