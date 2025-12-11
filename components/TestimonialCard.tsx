"use client";

import type { ReactNode } from "react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  business: string;
  footer?: ReactNode;
}

// Simple, reusable testimonial card used on marketing pages.
export const TestimonialCard = ({ quote, name, business, footer }: TestimonialCardProps) => {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-black/5 bg-background/60 p-4 text-sm">
      <p className="text-body/90">“{quote}”</p>
      <figcaption className="mt-3 text-xs font-medium text-heading">
        {name} • <span className="font-normal text-body/80">{business}</span>
      </figcaption>
      {footer}
    </figure>
  );
};
