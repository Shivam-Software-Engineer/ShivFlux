"use client";

import { BrainCircuit, Rocket, Timer, LineChart } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const POINTS = [
  {
    icon: BrainCircuit,
    title: "AI-assisted design & strategy",
    description:
      "We use AI tools through the design process — from layout ideas to content and SEO structure — so your site is sharper, and reaches you faster than a fully manual build.",
  },
  {
    icon: Rocket,
    title: "Built to generate leads",
    description:
      "Every section on your site is designed around one job: turning a visitor into an enquiry. No decoration without a purpose.",
  },
  {
    icon: Timer,
    title: "Fast turnaround",
    description:
      "We're a small, focused studio — no layers of approvals. You get quick replies and a working website sooner than most agencies quote.",
  },
  {
    icon: LineChart,
    title: "Growth, not just a launch",
    description:
      "A website is never really 'done'. We keep tracking, tuning and improving it long after launch as part of your management plan.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-ink py-24 text-white sm:py-28">
      <div className="pixel-dots pointer-events-none absolute -left-10 bottom-0 h-56 w-56 text-flux-500/10" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-flux-600/10 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why ShivFlux"
          title="A new-age studio — small team, sharp process, real accountability."
          description="We're just getting started, and that works in your favour: direct access to the people building your website, an AI-assisted workflow, and pricing that doesn't punish a growing business."
          light
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {POINTS.map((point, i) => (
            <div
              key={point.title}
              data-aos="fade-up"
              data-aos-delay={(i % 2) * 100}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-flux-400/40 hover:bg-white/[0.06]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-flux-600/20 text-flux-300">
                <point.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
