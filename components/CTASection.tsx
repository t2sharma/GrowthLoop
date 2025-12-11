"use client";

import { Section } from "./Section";
import { Button } from "./Button";
import Link from "next/link";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  id?: string;
}

// Shared CTA block used across pages for consistent, high-converting calls-to-action.
export const CTASection = ({
  eyebrow,
  title,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  id,
}: CTASectionProps) => {
  return (
    <Section className="pb-16" id={id}>
      <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-borderSubtle/60 bg-gradient-to-r from-slate-900 via-background to-slate-950 px-6 py-10 text-sm shadow-lg sm:px-10 sm:py-12 lg:flex-row lg:items-center">
        <div className="max-w-xl space-y-3">
          {eyebrow && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">
              {eyebrow}
            </p>
          )}
          <h2 className="text-2xl font-semibold text-heading sm:text-3xl">{title}</h2>
          <p className="text-body/90">{body}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="lg" asChild>
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button variant="ghost" size="sm" asChild>
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
};
