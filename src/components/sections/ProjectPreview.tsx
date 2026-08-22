import { FlaskConical } from "lucide-react";

const accentMap = {
  clay: { bg: "bg-clay-300", soft: "bg-clay-100", text: "text-clay-500", ring: "ring-clay-300/40", hex: "#C96A45" },
  sage: { bg: "bg-sage-500", soft: "bg-sage-100", text: "text-sage-700", ring: "ring-sage-500/30", hex: "#6B7261" },
  gold: { bg: "bg-gold-300", soft: "bg-gold-100", text: "text-gold-500", ring: "ring-gold-300/40", hex: "#B8863F" },
  sky: { bg: "bg-sky-300", soft: "bg-sky-100", text: "text-sky-500", ring: "ring-sky-300/40", hex: "#5B7C99" },
};

function BrowserChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-cream-50 shadow-inner">
      <div className="flex items-center gap-1.5 border-b border-ink/10 bg-cream-100 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <div className="ml-3 h-4 flex-1 max-w-[220px] rounded-full bg-ink/5" />
      </div>
      <div className="relative flex-1 p-4 sm:p-6">{children}</div>
    </div>
  );
}

function PharmacyPreview({}: { accent: keyof typeof accentMap }) {
  return (
    <BrowserChrome>
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/pharmacy-storefront.jpg"
          alt="صيدلية أحمد علاء الدين storefront"
        />
        <div className="absolute inset-0 bg-[#0A0F1D]/90" />
        <div className="relative flex h-full flex-col items-center justify-center gap-2 px-3 text-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#F97316]/10">
            <FlaskConical size={16} className="text-[#D4AF37]" />
          </div>
          <span className="rounded-full bg-[#D4AF37]/10 px-2.5 py-1 font-mono text-[9px] tracking-wide text-[#D4AF37]">
            د/ أحمد علاء الدين
          </span>
          <h4 className="bg-gradient-to-r from-white via-[#D4AF37] to-[#F97316] bg-clip-text text-lg font-bold text-transparent sm:text-xl">
            صيدلية أحمد علاء الدين
          </h4>
        </div>
      </div>
    </BrowserChrome>
  );
}

function PetMatePreview({}: { accent: keyof typeof accentMap }) {
  return (
    <BrowserChrome>
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="absolute inset-0 h-full w-full object-cover object-top"
          src="/images/petmate-screenshot.jpg"
          alt="PetMate — pet breeding matchmaking platform"
        />
      </div>
    </BrowserChrome>
  );
}

function FitnessPreview({}: { accent: keyof typeof accentMap }) {
  return (
    <BrowserChrome>
      <video
        className="h-full w-full rounded-lg object-cover"
        src="/videos/fitness-demo.mp4"
        poster="/images/fitness-poster.jpg"
        controls
        muted
        playsInline
        preload="metadata"
      />
    </BrowserChrome>
  );
}

function AnimaSysPreview({}: { accent: keyof typeof accentMap }) {
  return (
    <BrowserChrome>
      <video
        className="h-full w-full rounded-lg object-cover"
        src="/videos/animasys-demo.mp4"
        poster="/images/animasys-poster.jpg"
        controls
        muted
        playsInline
        preload="metadata"
      />
    </BrowserChrome>
  );
}

const previews = {
  "Pharmacy E-commerce & ERP": PharmacyPreview,
  AnimaSys: AnimaSysPreview,
  "AI Fitness & Nutrition Coaching Platform": FitnessPreview,
  PetMate: PetMatePreview,
};

export default function ProjectPreview({
  name,
  accent,
}: {
  name: keyof typeof previews;
  accent: keyof typeof accentMap;
}) {
  const Preview = previews[name];
  return (
    <div className="relative aspect-[4/3] w-full p-1.5">
      <Preview accent={accent} />
    </div>
  );
}
