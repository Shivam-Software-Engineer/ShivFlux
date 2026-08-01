"use client";

import { Star, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Client Feedback"
          title="What businesses say after working with us."
          align="center"
        />

        {/* <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="flex flex-col gap-5 rounded-2xl border border-flux-100 bg-flux-25/50 p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <Quote className="h-7 w-7 text-flux-300" />
              <p className="flex-1 text-sm leading-relaxed text-ink-soft">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-flux-500 text-flux-500" />
                ))}
              </div>
              <div className="flex items-center gap-3 border-t border-flux-100 pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-flux-600 font-display text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-faint">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </Container>
    </section>
  );
}
