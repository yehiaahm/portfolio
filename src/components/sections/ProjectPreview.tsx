"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { basePath } from "@/lib/basePath";

type Media =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; poster: string };

const media = {
  "Pharmacy E-commerce & ERP": {
    kind: "image",
    src: "/images/pharmacy-site.jpg",
    alt: "Dr. Ahmed Alaa El-Din Pharmacy — live storefront homepage",
  },
  MERRIER: {
    kind: "image",
    src: "/images/merrier-site.jpg",
    alt: "MERRIER streetwear storefront — live homepage",
  },
  VOID: {
    kind: "image",
    src: "/images/void-site.jpg",
    alt: "VOID streetwear storefront — live homepage in store-closed mode",
  },
  AnimaSys: {
    kind: "video",
    src: "/videos/animasys-demo.mp4",
    poster: "/images/animasys-poster.jpg",
  },
  PetMate: {
    kind: "image",
    src: "/images/petmate-screenshot.jpg",
    alt: "PetMate — pet breeding matchmaking platform",
  },
  "AI Fitness & Nutrition Coaching Platform": {
    kind: "video",
    src: "/videos/fitness-demo.mp4",
    poster: "/images/fitness-poster.jpg",
  },
} satisfies Record<string, Media>;

export type PreviewName = keyof typeof media;

export function thumbnailFor(name: PreviewName) {
  const item: Media = media[name];
  return `${basePath}${item.kind === "video" ? item.poster : item.src}`;
}

function DemoVideo({ src, poster, playLabel }: { src: string; poster: string; playLabel: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    setStarted(true);
    videoRef.current?.play();
  };

  return (
    <>
      <video
        ref={videoRef}
        className="h-full w-full bg-ink object-cover"
        src={`${basePath}${src}`}
        poster={`${basePath}${poster}`}
        controls={started}
        muted
        playsInline
        preload="metadata"
      />
      {!started && (
        <button
          type="button"
          onClick={start}
          data-cursor="Play"
          aria-label={playLabel}
          className="group/play absolute inset-0 flex items-center justify-center bg-ink/10 transition-colors duration-500 hover:bg-ink/25"
        >
          <span className="flex items-center gap-3 rounded-full bg-cream-50/95 py-3 pe-6 ps-3 shadow-lg transition-transform duration-500 ease-premium group-hover/play:scale-105">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-cream-50">
              <Play size={16} fill="currentColor" className="ms-0.5" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest2 text-ink">{playLabel}</span>
          </span>
        </button>
      )}
    </>
  );
}

export default function ProjectPreview({
  name,
  url,
  playLabel,
}: {
  name: PreviewName;
  url?: string;
  playLabel: string;
}) {
  const item: Media = media[name];
  const host = url ? new URL(url).host : null;

  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-cream-50 shadow-[0_40px_90px_-45px_rgba(33,30,26,0.45)] transition-shadow duration-500 group-hover:shadow-[0_50px_110px_-40px_rgba(33,30,26,0.5)]">
      <div dir="ltr" className="flex items-center gap-1.5 border-b border-ink/10 bg-cream-100 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        {host ? (
          <span className="ms-3 truncate rounded-full bg-ink/5 px-3 py-0.5 font-mono text-[10px] text-ink-50/70">
            {host}
          </span>
        ) : (
          <span className="ms-3 h-4 w-full max-w-[200px] rounded-full bg-ink/5" />
        )}
      </div>
      <div className="relative aspect-video overflow-hidden">
        {item.kind === "video" ? (
          <DemoVideo src={item.src} poster={item.poster} playLabel={playLabel} />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${basePath}${item.src}`}
            alt={item.alt}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-premium group-hover:scale-[1.02]"
          />
        )}
      </div>
    </div>
  );
}
