"use client";

import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import {
  portfolioProjects,
  type PortfolioFilter,
} from "@/data/portfolioProjects";
import Image from "next/image";
import { useState } from "react";

type FilterId = "all" | PortfolioFilter;

const filterOptions: { id: FilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "website", label: "Website" },
  { id: "app", label: "Apps" },
  { id: "automation", label: "Automation" },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filteredProjects =
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.filters.includes(activeFilter));

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Selected projects for local businesses."
        subtitle="A closer look at how we combine websites, apps, and software to help local teams look sharper, run smoother, and grow with confidence."
      />
      <Section>
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2 text-xs">
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-full border px-3 py-1.5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isActive
                      ? "border-primary bg-primary text-white shadow-sm"
                      : "border-black/10 bg-white text-body hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl sm:p-5"
              >
                <div className="mb-4 overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900">
                  <Image
                    src={project.imageSrc}
                    alt={project.alt}
                    width={640}
                    height={360}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
                      {project.businessLabel}
                    </p>
                    <h2 className="mt-1 text-base font-semibold text-slate-100">
                      {project.title}
                    </h2>
                  </div>
                  <p className="text-slate-400">{project.description}</p>
                </div>
                <div className="mt-4 border-t border-slate-800 pt-3 text-xs text-slate-400">
                  <p className="font-semibold text-slate-200">Key result</p>
                  <p>{project.keyResult}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
