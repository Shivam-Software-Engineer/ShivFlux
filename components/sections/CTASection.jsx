"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <Container>
        <div
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-ink via-flux-800 to-flux-600 px-8 py-16 text-center sm:px-16 sm:py-20"
          data-aos="zoom-in"
        >
          <div className="pixel-dots pointer-events-none absolute -right-6 -top-6 h-40 w-40 text-white/10" />
          <div className="pixel-dots pointer-events-none absolute -bottom-6 -left-6 h-40 w-40 text-white/10" />

          <span className="eyebrow border-white/20 bg-white/10 text-white">
            Free, No-Obligation Call
          </span>

          <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Book a free consultation for your business website.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Tell us about your business on WhatsApp — we&apos;ll walk you
            through the right approach for your website or SaaS product, no
            pressure and no cost.
          </p>

          <div className="mt-9 flex justify-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-ink shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              Chat with Us on WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
