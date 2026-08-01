"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { plans } from "@/data/plans";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { site } from "@/data/site";

export default function ManagementPlans() {
  const [cycle, setCycle] = useState("monthly");

  return (
    <section id="plans" className="relative bg-white py-24 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Ongoing Management"
            title="We don't just build your website — we run it for you, for years."
            description="Think of us as your website's technical team. Updates, security, speed, SEO — handled every month or year, so you can just focus on running your business."
          />

          <div
            className="flex w-fit items-center gap-1 rounded-full border border-flux-100 bg-flux-25 p-1"
            data-aos="fade-up"
          >
            <ToggleButton active={cycle === "monthly"} onClick={() => setCycle("monthly")}>
              Monthly
            </ToggleButton>
            <ToggleButton active={cycle === "yearly"} onClick={() => setCycle("yearly")}>
              Yearly
              <span className="ml-1.5 rounded-full bg-flux-600 px-2 py-0.5 text-[10px] font-bold text-white">
                Save ~17%
              </span>
            </ToggleButton>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const price = cycle === "monthly" ? plan.monthly : plan.yearly;
            return (
              <div
                key={plan.name}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className={`relative flex flex-col gap-6 rounded-3xl p-8 transition-all duration-300 ${
                  plan.highlight
                    ? "border-2 border-flux-600 bg-flux-25 shadow-card-hover"
                    : "border border-flux-100 bg-white shadow-card hover:-translate-y-1 hover:shadow-card-hover"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-flux-600 px-4 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="font-display text-xl font-bold text-ink">{plan.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{plan.description}</p>
                </div>

                <div className="flex items-end gap-1.5">
                  <span className="font-display text-4xl font-extrabold text-ink">
                    ₹{price.toLocaleString("en-IN")}
                  </span>
                  <span className="pb-1.5 text-sm text-ink-faint">
                    /{cycle === "monthly" ? "month" : "year"}
                  </span>
                </div>

                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-flux-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={getWhatsAppLink(
                    `Hi ${site.shortName}! I'm interested in the ${plan.name} (${cycle}) website management plan. Can we discuss?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={plan.highlight ? "btn-primary mt-auto w-full" : "btn-secondary mt-auto w-full"}
                >
                  Choose {plan.name}
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-ink-faint" data-aos="fade-up">
          Prices are indicative starting plans — final pricing depends on your website&apos;s size and scope.
        </p>
      </Container>
    </section>
  );
}

function ToggleButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 ${
        active ? "bg-flux-600 text-white shadow-card" : "text-ink-soft hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
