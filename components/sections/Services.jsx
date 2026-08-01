"use client";

import * as Icons from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="relative bg-flux-25/60 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Everything your business needs to look good and get found online."
          description="From your first website to a full SaaS product — one team handles the design, the build, and everything that keeps it running."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = Icons[service.icon] || Icons.Sparkles;
            return (
              <div
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 100}
                className="group flex flex-col gap-4 rounded-2xl border border-flux-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-flux-300 hover:shadow-card-hover"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-flux-50 text-flux-600 transition-colors duration-300 group-hover:bg-flux-600 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-ink">{service.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{service.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
