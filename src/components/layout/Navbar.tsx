"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import MagneticButton from "@/components/ui/MagneticButton";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  const navItems = [
    { label: t.nav.work, href: "#work" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.capabilities, href: "#capabilities" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`container-px mx-auto flex max-w-content items-center justify-between transition-all duration-500 ease-premium ${
            scrolled ? "py-4" : "py-7"
          }`}
        >
          <div
            className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-full border-b transition-all duration-500 ${
              scrolled
                ? "border-ink/10 bg-cream-100/80 backdrop-blur-xl"
                : "border-transparent bg-transparent"
            }`}
          />

          <a href="#top" data-cursor="Home" className="font-display text-lg font-medium tracking-tight text-ink">
            YA<span className="text-clay-300">.</span>
          </a>

          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative font-mono text-xs uppercase tracking-widest2 text-ink-100"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-clay-300 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageToggle />
            <MagneticButton>
              <a
                href="#contact"
                data-cursor="Go"
                className="flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-widest2 text-cream-100 transition-colors duration-300 hover:bg-clay-300"
              >
                {t.nav.talk}
                <ArrowUpRight size={14} />
              </a>
            </MagneticButton>
          </div>

          <div className="flex items-center gap-2.5 lg:hidden">
            <LanguageToggle />
            <button
              onClick={() => setOpen(true)}
              className="flex items-center justify-center rounded-full border border-ink/15 p-2.5"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink text-cream-100 lg:hidden"
          >
            <div className="container-px flex items-center justify-between py-7">
              <span className="font-display text-lg font-medium">YA<span className="text-clay-300">.</span></span>
              <div className="flex items-center gap-2.5">
                <LanguageToggle className="border-cream-100/20 text-cream-100 hover:border-cream-100/50" />
                <button
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-full border border-cream-100/20 p-2.5"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            <nav className="container-px flex flex-1 flex-col justify-center gap-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-cream-100/10 py-5 font-display text-4xl font-medium"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="container-px py-8 font-mono text-xs uppercase tracking-widest2 text-cream-100/50">
              yehiaahmed195200@gmail.com
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
