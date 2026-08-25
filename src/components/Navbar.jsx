import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, ChevronDown } from "lucide-react";
import { navLinks, programs } from "../data/content";
import MagneticButton from "./ui/MagneticButton";
import SmartLink from "./ui/SmartLink";
import ThemeToggle from "./ui/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [careerMenuOpen, setCareerMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const featuredPreview = programs.slice(0, 3);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "glass-panel border-b border-ink-line" : "bg-transparent"
      }`}
    >
      <nav className="container-vc flex h-[72px] items-center justify-between">
        <SmartLink href="/" className="flex items-center gap-2.5 font-display text-lg font-semibold text-text-soft">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal to-violet font-mono text-sm text-ink">
            <Terminal size={18} strokeWidth={2.5} />
          </span>
          VaultofCodes
        </SmartLink>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isCareer = link.label === "Career";
            return (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => isCareer && setCareerMenuOpen(true)}
                onMouseLeave={() => isCareer && setCareerMenuOpen(false)}
              >
                <SmartLink
                  href={link.href}
                  className="relative flex items-center gap-1 text-sm font-medium text-text-muted transition-colors hover:text-text-soft after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-teal after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                  {isCareer && (
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${careerMenuOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </SmartLink>

                {isCareer && (
                  <AnimatePresence>
                    {careerMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full w-[320px] -translate-x-1/2 pt-3"
                      >
                        <div className="glass-panel rounded-2xl border border-ink-line p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]">
                          <span className="px-1 font-mono text-[10px] uppercase tracking-widest text-teal">
                            Featured Programs
                          </span>
                          <ul className="mt-2 space-y-1">
                            {featuredPreview.map((p) => (
                              <li key={p.id}>
                                <SmartLink
                                  href="/career"
                                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-text-soft transition-colors hover:bg-ink-panel"
                                >
                                  <span>{p.title}</span>
                                  <span className="font-mono text-[10px] uppercase text-text-muted">
                                    {p.duration}
                                  </span>
                                </SmartLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <SmartLink href="/login" className="text-sm font-medium text-text-muted hover:text-text-soft transition-colors">
            Login
          </SmartLink>
          <MagneticButton
            as="a"
            href="#programs"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-violet px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_0_24px_rgba(47,224,196,0.25)] transition-shadow hover:shadow-[0_0_32px_rgba(139,127,242,0.4)]"
          >
            Get Started
          </MagneticButton>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-line text-text-soft"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden glass-panel border-t border-ink-line lg:hidden"
          >
            <ul className="container-vc flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <SmartLink
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-text-soft hover:bg-ink-panel"
                  >
                    {link.label}
                  </SmartLink>
                </li>
              ))}
              <li className="mt-2 flex gap-3 px-3">
                <SmartLink
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-full border border-ink-line py-2.5 text-center text-sm font-semibold text-text-soft"
                >
                  Login
                </SmartLink>
                <a
                  href="#programs"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-full bg-gradient-to-r from-teal to-violet py-2.5 text-center text-sm font-semibold text-ink"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
