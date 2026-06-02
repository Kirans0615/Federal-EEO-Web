"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Eye } from "lucide-react";

const links = [
  { href: "/about",    label: "About" },
  { href: "/services", label: "Services" },
  { href: "/resources",label: "Resources" },
  { href: "/contact",  label: "Contact" },
];

export function Navbar() {
  const pathname    = usePathname();
  const [open, setOpen]           = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [readMode, setReadMode]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.documentElement.setAttribute("data-reading-mode", String(readMode));
    if (readMode) {
      document.documentElement.style.setProperty("--body-size", "1.125rem");
    } else {
      document.documentElement.style.removeProperty("--body-size");
    }
  }, [readMode]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-brand-navy/98 backdrop-blur-md shadow-lg" : "bg-brand-navy"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight focus-visible:outline-brand-gold focus-visible:outline-offset-4">
            <span className="font-serif text-white text-xl small-caps font-semibold tracking-wide">
              Federal EEO, LLC
            </span>
            <span className="text-brand-gold text-[0.58rem] tracking-[0.2em] uppercase font-sans">
              Consultants &amp; Advocates
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => {
              const isActive = pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative font-sans text-sm tracking-wide transition-colors duration-200 group"
                  style={{ color: isActive ? "#C4922A" : "rgba(255,255,255,0.8)" }}
                >
                  {l.label}
                  {/* Active dot */}
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
                  {/* Hover underline */}
                  <span className="absolute -bottom-0.5 left-0 w-full h-px bg-white/40 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" aria-hidden="true" />
                </Link>
              );
            })}

            {/* Reading mode toggle */}
            <button
              aria-label={readMode ? "Disable reading mode" : "Enable reading mode (high contrast, larger text)"}
              aria-pressed={readMode}
              onClick={() => setReadMode(!readMode)}
              title="Reading mode — high contrast, larger text"
              className={`p-2 rounded-sm transition-colors duration-200 ${
                readMode ? "bg-brand-gold/20 text-brand-gold" : "text-white/50 hover:text-white/80"
              }`}
            >
              <Eye size={16} />
            </button>

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
            className="md:hidden text-white p-2 -mr-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-brand-navy border-t border-white/10 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`text-base font-sans py-1 transition-colors ${
                      pathname.startsWith(l.href) ? "text-brand-gold" : "text-white/80"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
                <button
                  onClick={() => setReadMode(!readMode)}
                  className="flex items-center gap-2 text-white/60 text-sm font-sans py-1"
                >
                  <Eye size={15} />
                  {readMode ? "Disable" : "Enable"} Reading Mode
                </button>
                <Link href="/contact" className="mt-1 px-5 py-3 bg-brand-gold text-white text-sm font-sans font-medium rounded-sm text-center">
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
