import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import Link from "next/link";

export default function WebsitesServicePage() {
  return (
    <>
      <PageHeader
        eyebrow="Websites"
        title="Conversion-driven websites for local businesses."
        subtitle="We design and build mobile-friendly, SEO-ready websites that make your business look established, explain what you do in plain language, and guide visitors to call, book, or visit."
        actions={
          <Button asChild>
            <Link href="/contact" className="text-white">
              Book a website consult
            </Link>
          </Button>
        }
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div className="space-y-6 text-sm text-slate-300 sm:text-base">
            <h2 className="text-xl font-semibold text-slate-100">What you get</h2>
            <div className="space-y-3">
              <p>
                Your website becomes the clear, confident front door to your business, not a confusing brochure that people click away from.
              </p>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold text-slate-100">Mobile-friendly design:</span> Looks sharp on phones, tablets, and desktops so every visitor gets the best impression.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">SEO-ready structure:</span> Pages and content organized so you can show up when locals search for what you offer.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Clear booking & contact paths:</span> Call, contact, booking, or directions buttons built right into the layout.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Online menus & service lists:</span> Easy-to-update menus, services, or pricing summaries that don&apos;t require a developer for every change.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Analytics & basic tracking:</span> See which pages people visit most so you know what&apos;s working.
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300 shadow-lg backdrop-blur-md">
            <div>
              <h3 className="text-base font-semibold text-slate-100">Who this is for</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-300">
                <li>Restaurants and cafes that need menus, reservations, or online orders</li>
                <li>Salons, spas, and clinics that rely on bookings and appointments</li>
                <li>Gyms and studios that want to showcase classes and memberships</li>
                <li>Local retailers who want to feature products and drive foot traffic</li>
                <li>Service providers who have outgrown DIY website builders</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Pricing preview</h4>
              <p className="mt-2 text-xs text-slate-300">
                Most website projects for local businesses fall into our core packages. For details, see our
                {" "}
                <Link href="/pricing" className="font-medium text-primary underline-offset-2 hover:underline">
                  pricing page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="space-y-6 text-sm text-slate-300 sm:text-base">
          <h2 className="text-xl font-semibold text-slate-50">How the website process works</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Step 1</p>
              <h3 className="mt-1 text-sm font-semibold text-slate-100">Discovery</h3>
              <p className="mt-1 text-xs">
                We learn about your business, ideal customers, and what a "win" looks like for the site.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Step 2</p>
              <h3 className="mt-1 text-sm font-semibold text-slate-100">Design</h3>
              <p className="mt-1 text-xs">
                We map out pages, write key messaging, and design a look that fits your brand.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Step 3</p>
              <h3 className="mt-1 text-sm font-semibold text-slate-100">Build</h3>
              <p className="mt-1 text-xs">
                We develop the site, wire up forms and integrations, and prepare everything for launch.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Step 4</p>
              <h3 className="mt-1 text-sm font-semibold text-slate-100">Launch & support</h3>
              <p className="mt-1 text-xs">
                We go live, monitor early traffic, and stay available for tweaks and ongoing updates.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <CTASection
        eyebrow="Next step"
        title="Ready to talk about your new website?"
        body="Share where your online presence is today and what you&apos;d like it to do for your business. We&apos;ll come prepared with practical ideas, not a hard sell."
        primaryLabel="Book a free call"
        primaryHref="/contact"
        secondaryLabel="View website pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
