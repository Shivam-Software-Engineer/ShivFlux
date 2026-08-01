"use client";

import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="work" className="relative bg-flux-25/60 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Recent projects from our studio."
          description="A quick look at the kind of work we do — websites, dashboards and stores designed to actually move the needle for the business behind them."
        />

        {/* <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group flex flex-col overflow-hidden rounded-3xl border border-flux-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className={`relative h-44 bg-gradient-to-br ${project.color} p-6`}>
                <div className="pixel-dots absolute right-4 top-4 h-16 w-16 text-white/20" />
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {project.tag}
                </span>
                <span className="absolute bottom-5 left-6 font-display text-2xl font-extrabold text-white">
                  {project.metric}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="font-display text-lg font-bold text-ink">{project.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-ink-soft">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-flux-50 px-3 py-1 text-[11px] font-medium text-flux-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <div className="mt-12 flex justify-center" data-aos="fade-up">
          <a href="#top" className="btn-secondary">
            Want results like these for your business?
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
