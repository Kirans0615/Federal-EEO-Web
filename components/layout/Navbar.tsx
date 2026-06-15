"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, BookOpen, HelpCircle, ListChecks, Map as MapIcon, Video } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const links = [
  { href: "/about",     label: "About" },
  { href: "/services",  label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/contact",   label: "Contact" },
];

const RESOURCES_MENU = [
  { href: "/resources/",             icon: BookOpen,    label: "Articles",     desc: "Flagship guides — 45-day clock, ROI, accommodation." },
  { href: "/resources/faq/",         icon: HelpCircle,  label: "FAQ",          desc: "Searchable answers to the most common questions." },
  { href: "/resources/glossary/",    icon: ListChecks,  label: "Glossary",     desc: "36 federal EEO terms in plain English." },
  { href: "/resources/process/",     icon: MapIcon,     label: "Process Map",  desc: "The complete process, end to end, scroll-by-stage." },
  { href: "/webinars/",              icon: Video,       label: "Webinars",     desc: "Live sessions and recordings, free." },
];

export function Navbar() {
  const pathname  = usePathname();
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="fixed top-0 inset-x-0 z-50"
        style={{ backgroundColor: "#1B2A4A" }}
      >
        {/* ── Top contact strip ─────────────────────────────────── */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              key="contact-strip"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 36, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="overflow-hidden border-b border-white/10"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 h-9 flex items-center justify-end gap-6">
                <a
                  href="mailto:edorsey@federal-eeo.com"
                  className="font-sans text-white/40 hover:text-brand-gold transition-colors duration-200"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}
                >
                  edorsey@federal-eeo.com
                </a>
                <a
                  href="tel:+13015314322"
                  className="font-sans text-white/40 hover:text-brand-gold transition-colors duration-200"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}
                >
                  (301) 531-4322
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Main nav ──────────────────────────────────────────── */}
        <nav
          className={`max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between transition-shadow duration-300 ${
            scrolled ? "shadow-lg" : ""
          }`}
          aria-label="Primary navigation"
        >
          {/* Wordmark — "EEO" letters animate up on hover */}
          <Link
            href="/"
            className="group flex flex-col leading-tight focus-visible:outline-brand-gold focus-visible:outline-offset-4"
            aria-label="Federal EEO, LLC — home"
          >
            <span className="font-serif text-white text-xl small-caps font-semibold tracking-wide">
              Federal{" "}
              {(["E", "E", "O"] as const).map((letter, i) => (
                <span
                  key={i}
                  className="text-brand-gold inline-block group-hover:-translate-y-0.5 transition-transform duration-200"
                  style={{ transitionDelay: `${i * 60}ms` }}
                  aria-hidden="true"
                >
                  {letter}
                </span>
              ))}
              <span className="sr-only">EEO</span>
              {", LLC"}
            </span>
            <span className="text-brand-gold text-[0.58rem] tracking-[0.2em] uppercase font-sans">
              Consultants &amp; Advocates
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => {
              const isActive = pathname.startsWith(l.href);
              const isResources = l.href === "/resources";
              if (isResources) {
                return (
                  <div
                    key={l.href}
                    className="relative"
                    onMouseEnter={() => setResourcesOpen(true)}
                    onMouseLeave={() => setResourcesOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setResourcesOpen((v) => !v)}
                      aria-expanded={resourcesOpen}
                      aria-haspopup="menu"
                      className="relative inline-flex items-center gap-1 font-sans text-sm tracking-wide transition-colors duration-200 group"
                      style={{ color: isActive ? "#C4922A" : "rgba(255,255,255,0.8)" }}
                    >
                      {l.label}
                      <ChevronDown
                        size={13}
                        aria-hidden="true"
                        className={`transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {resourcesOpen && (
                        <motion.div
                          role="menu"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18 }}
                          className="absolute right-0 top-full mt-3 w-[420px] bg-white border border-brand-border rounded-sm shadow-xl p-3"
                          style={{ color: "#1B2A4A" }}
                        >
                          {RESOURCES_MENU.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                role="menuitem"
                                className="flex items-start gap-3 p-3 rounded-sm hover:bg-brand-cream transition-colors"
                              >
                                <Icon size={16} className="text-brand-gold shrink-0 mt-1" aria-hidden="true" />
                                <div>
                                  <p className="font-sans text-sm font-semibold text-brand-navy">
                                    {item.label}
                                  </p>
                                  <p className="font-sans text-xs text-brand-muted leading-snug">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative font-sans text-sm tracking-wide transition-colors duration-200 group"
                  style={{ color: isActive ? "#C4922A" : "rgba(255,255,255,0.8)" }}
                >
                  {l.label}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="navdot"
                        className="absolute -bottom-1 left-1/2 w-1 h-1 rounded-full bg-brand-gold"
                        style={{ translateX: "-50%" }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.2 }}
                        aria-hidden="true"
                      />
                    )}
                  </AnimatePresence>
                  <span
                    className="absolute -bottom-0.5 left-0 w-full h-px bg-white/40 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                    aria-hidden="true"
                  />
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="ml-1 px-5 py-2 bg-brand-gold text-white text-sm font-sans font-medium rounded-sm hover:bg-brand-gold/90 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden text-white p-2 -mr-2 z-10 relative"
            onClick={() => setOpen(!open)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* ── Mobile full-screen overlay ────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col bg-brand-navy md:hidden"
            style={{ paddingTop: "80px" }}
          >
            <nav className="flex flex-col px-8 pt-8 flex-1" aria-label="Mobile navigation">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.35, ease: EASE }}
                >
                  <Link
                    href={l.href}
                    className={`block py-5 border-b font-serif transition-colors duration-200 ${
                      pathname.startsWith(l.href)
                        ? "text-brand-gold border-brand-gold/30"
                        : "text-white border-white/10 hover:text-brand-gold"
                    }`}
                    style={{ fontSize: "2rem", letterSpacing: "-0.02em", lineHeight: 1.15 }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-8 flex flex-col gap-4"
              >
                <Link
                  href="/contact"
                  className="w-full text-center py-4 bg-brand-gold text-white font-sans text-sm font-medium rounded-sm"
                >
                  Book Consultation
                </Link>
              </motion.div>
            </nav>

            <div className="px-8 pb-8 mt-auto">
              <p className="font-sans text-white/30 text-xs leading-relaxed">
                Washington, DC · edorsey@federal-eeo.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
