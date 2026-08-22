# Yehia Ahmed — Portfolio

Premium personal portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding your portrait photo

Drop your photo at:

```
public/images/portrait.jpg
```

The Hero section will automatically pick it up. Until then, it falls back to a styled monogram.

## Structure

- `src/app` — root layout, global styles, page composition
- `src/components/layout` — Navbar, Footer, custom cursor, grain overlay
- `src/components/ui` — reusable primitives (reveal text, magnetic button, marquee, fade-in)
- `src/components/sections` — Hero, About, Selected Work, Capabilities, Skills, Process, Contact
- `src/lib/data.ts` — all editable content (projects, skills, capabilities, process, socials)

To update project case studies, bio, skills, or links, edit `src/lib/data.ts` — no need to touch component code.

## Build

```bash
npm run build
npm run start
```
