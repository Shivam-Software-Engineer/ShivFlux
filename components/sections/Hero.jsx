"use client";

import { ArrowUpRight, Play, Sparkles, TrendingUp, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import { getWhatsAppLink } from "@/lib/whatsapp";

const TRUST_CHIPS = [
  "Web Development",
  "SaaS Applications",
  "E-Commerce",
  "UI/UX Design",
  "AI-Assisted Growth",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pb-20 pt-32 sm:pt-40 lg:pb-28">
      {/* ambient background: soft radial + faint pixel-dot motif from the logo mark */}
      <div className="pointer-events-none absolute inset-0 bg-flux-radial" />
      <div className="pixel-dots pointer-events-none absolute right-6 top-24 h-40 w-40 text-flux-300/40 sm:right-16" />

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div data-aos="fade-up">
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            Mumbai-based Web &amp; SaaS Studio
          </span>

          <h1 className="mt-6 max-w-xl font-display text-4xl font-extrabold leading-[1.1] text-ink sm:text-5xl lg:text-[3.4rem]">
            Websites that don&apos;t just look good —{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-flux-streak bg-clip-text bg-[length:200%_auto] text-transparent animate-streak-move">
                they bring you customers.
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
            ShivFlux Technologies designs, builds and manages websites &amp; SaaS
            products for growing businesses — engineered for leads, backed by
            AI-assisted design, and looked after every single month.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Free Consultation
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#work" className="btn-secondary">
              <Play className="h-4 w-4" />
              View Our Work
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {TRUST_CHIPS.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-flux-100 bg-flux-25 px-3.5 py-1.5 text-xs font-medium text-flux-700"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Signature visual: abstract "growth" card stack, not a literal screenshot */}
        <div className="relative" data-aos="fade-left" data-aos-delay="150">
          <div className="relative mx-auto max-w-md rounded-3xl border border-flux-100 bg-white/80 p-2 shadow-card-hover backdrop-blur">
            <div className="rounded-2xl bg-gradient-to-br from-ink via-flux-800 to-flux-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
                  Lead Growth
                </span>
                <TrendingUp className="h-4 w-4 text-flux-300" />
              </div>
              <div className="mt-6 flex items-end gap-2">
                {[38, 58, 44, 72, 64, 88, 100].map((h, i) => (
                  <div
                    key={i}
                    className="w-full rounded-t-md bg-gradient-to-t from-flux-500 to-flux-300 animate-float"
                    style={{ height: `${h}px`, animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
              <p className="mt-5 text-sm text-white/70">
                Client enquiries, 6 months after launch
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 p-3">
              <div className="flex flex-col gap-1 rounded-xl bg-flux-25 p-4">
                <Users className="h-4 w-4 text-flux-600" />
                <span className="font-display text-lg font-bold text-ink">2.4x</span>
                <span className="text-[11px] text-ink-faint">More enquiries</span>
              </div>
              <div className="flex flex-col gap-1 rounded-xl bg-flux-25 p-4">
                <Sparkles className="h-4 w-4 text-flux-600" />
                <span className="font-display text-lg font-bold text-ink">AI</span>
                <span className="text-[11px] text-ink-faint">Assisted design</span>
              </div>
            </div>
          </div>

          {/* floating badge */}
          <div className="absolute left-4 bottom-[-80px] hidden sm:flex items-center gap-3 rounded-2xl border border-flux-100 bg-white px-4 py-3 shadow-card">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-flux-600 text-white">
              <TrendingUp className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <p className="text-xs font-semibold text-ink">Managed monthly</p>
              <p className="text-[11px] text-ink-faint">so you never worry about it</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
