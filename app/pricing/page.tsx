import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | GrowthLoop",
  description:
    "Transparent, placeholder pricing packages for local-business websites, growth-focused online presence, and custom systems from GrowthLoop.",
  openGraph: {
    title: "Pricing | GrowthLoop",
    description:
      "Review GrowthLoop's example pricing tiers for new sites, growing businesses, and custom software so you can budget with confidence.",
    url: "https://growthloop.agency/pricing",
    siteName: "GrowthLoop",
    type: "website",
  },
};

const tiers = [
  {
    name: "Starter Site",
    ideal: "For new local businesses",
    features: [
      "One-page marketing site",
      "Mobile-friendly design",
      "Contact form + basic analytics",
    ],
  },
  {
    name: "Growth Presence",
    ideal: "For growing teams",
    features: [
      "Multi-page site (Home, Services, About, Contact)",
      "Blog or updates section",
      "Lead capture and simple automations",
    ],
  },
  {
    name: "Custom Systems",
    ideal: "For operations and automation",
    features: [
      "Custom software or app builds",
      "Integrations with your existing tools",
      "Ongoing support options",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Transparent packages built for local businesses."
        subtitle="We keep pricing simple and help you choose the path that makes the most sense for where you are right now."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl"
            >
              <div className="space-y-3">
                <h2 className="text-base font-semibold text-slate-100">{tier.name}</h2>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
                  {tier.ideal}
                </p>
                <ul className="mt-2 space-y-1 text-slate-300">
                  {tier.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <Button variant="secondary" size="sm" asChild>
                  <Link href="/contact">Talk about this option</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
