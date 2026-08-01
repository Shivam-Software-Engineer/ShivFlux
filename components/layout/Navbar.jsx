"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why ShivFlux", href: "#why-us" },
  { label: "Management Plans", href: "#plans" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 ${
            scrolled || open
              ? "glass-panel shadow-glass"
              : "border border-transparent bg-transparent"
          }`}
        >
          {/* Logo lockup: SVG mark + PNG-safe text, per brand */}
          <a href="#top" className="flex items-center " onClick={() => setOpen(false)}>
            <Image
              src="/logo.svg"
              alt={`${site.shortName} logo mark`}
              width={38}
              height={38}
              priority
              className="h-9 w-9 "
            />
            <span className="font-display text-xl  font-extrabold tracking-tight text-ink">
              Shiv<span className="text-flux-600">Flux</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-flux-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Free Consultation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile 3-line hamburger toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-flux-100 bg-white/80 text-ink transition-colors hover:border-flux-300 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile glass menu panel */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${
            open ? "mt-3 max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass-panel flex flex-col gap-1 rounded-2xl p-4 shadow-glass">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-ink-soft transition-colors hover:bg-flux-25 hover:text-flux-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Book Free Consultation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
