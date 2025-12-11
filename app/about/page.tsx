import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About | GrowthLoop",
  description:
    "GrowthLoop is a small, senior team focused on giving neighborhood businesses the kind of digital polish and automation usually reserved for big brands.",
  openGraph: {
    title: "About | GrowthLoop",
    description:
      "Learn how GrowthLoop partners with restaurants, salons, gyms, clinics, and other local teams to design and build websites, apps, and software that support real-world operations.",
    url: "https://growthloop.agency/about",
    siteName: "GrowthLoop",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Intro hero */}
      <Section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pb-16 pt-14 lg:pb-20 lg:pt-18">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            About
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            A small team obsessed with local businesses.
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-base">
            GrowthLoop exists to give neighborhood businesses the kind of digital polish and
            automation usually reserved for big brands, without the big-agency overhead.
          </p>
          <p className="mx-auto max-w-2xl text-xs text-slate-400 sm:text-sm">
            We work with restaurants, salons, gyms, clinics, and other local teams that want
            their online presence to finally match the quality of what they deliver in person.
          </p>
        </div>
      </Section>

      {/* Story + philosophy */}
      <Section className="border-t border-slate-800 bg-slate-950/60 py-12 lg:py-14">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div className="space-y-4 text-sm text-slate-300 sm:text-base">
              <h2 className="text-base font-semibold text-slate-100 sm:text-lg">
                Our story
              </h2>
              <p>
                We started GrowthLoop after watching too many great neighborhood businesses get
                stuck with dated sites, clunky booking tools, and manual spreadsheets that stole
                time from the work that actually mattered.
              </p>
              <p>
                Our background is in product, design, and engineering for software companies.
                Now we take that experience and apply it to local teams that need premium,
                reliable digital systems, without hiring a full in-house team.
              </p>
              <p>
                Every project is built to be simple to run day-to-day, with clear handoffs and
                support so your team doesn&apos;t have to become &quot;the tech department&quot; overnight.
              </p>
            </div>
            <div className="space-y-4 text-sm text-slate-300 sm:text-base">
              <h2 className="text-base font-semibold text-slate-100 sm:text-lg">
                What we believe
              </h2>
              <ul className="mt-1 space-y-2.5 text-sm text-slate-300">
                <li>
                  <span className="mr-2 text-secondary">&#8226;</span>
                  Local businesses deserve the same level of clarity, speed, and polish that big
                  brands enjoy.
                </li>
                <li>
                  <span className="mr-2 text-secondary">&#8226;</span>
                  Design should feel premium, but operations behind it must stay simple for your
                  team to manage.
                </li>
                <li>
                  <span className="mr-2 text-secondary">&#8226;</span>
                  The right website, app, or automation is one that you can actually keep updated
                  and measure.
                </li>
                <li>
                  <span className="mr-2 text-secondary">&#8226;</span>
                  The best results come from long-term partnerships, not one-off launches that get
                  forgotten a year later.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* How we work */}
      <Section className="bg-slate-950 py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-8 max-w-2xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              How we work
            </p>
            <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
              A simple process built around your business.
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              We keep projects focused, collaborative, and grounded in the realities of running a
              local business, not endless planning decks.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex h-full flex-col rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 text-sm text-slate-300 shadow-lg">
              <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-secondary">
                <span className="rounded-full bg-slate-900 px-2 py-1 text-[10px] text-slate-300">
                  01
                </span>
                Listen to your business
              </div>
              <p>
                We start by understanding how your business actually runs today - your customers,
                constraints, and goals - so we only solve problems that matter.
              </p>
            </div>
            <div className="flex h-full flex-col rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 text-sm text-slate-300 shadow-lg">
              <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-secondary">
                <span className="rounded-full bg-slate-900 px-2 py-1 text-[10px] text-slate-300">
                  02
                </span>
                Design a simple growth system
              </div>
              <p>
                Based on what we learn, we recommend the right mix of website, app, and
                automation, built to fit your existing tools, budget, and team capacity.
              </p>
            </div>
            <div className="flex h-full flex-col rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 text-sm text-slate-300 shadow-lg">
              <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-secondary">
                <span className="rounded-full bg-slate-900 px-2 py-1 text-[10px] text-slate-300">
                  03
                </span>
                Launch, learn, refine
              </div>
              <p>
                We launch together, track what&apos;s working, and keep refining. You get a partner
                who sticks around to support, not just a handoff and a PDF.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Client results + testimonial */}
      <Section className="bg-slate-950/70 pb-12 pt-4 lg:pb-16 lg:pt-8">
        <div className="mx-auto mt-12 max-w-5xl px-6 lg:mt-16 lg:px-8">
          <div className="rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl lg:flex lg:items-center lg:gap-10 lg:p-10">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary lg:mb-0">
              <span className="text-2xl" aria-hidden="true">
                “
              </span>
            </div>
            <div className="space-y-3 text-sm text-slate-300 sm:text-base">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                What clients say
              </p>
              <p className="text-base font-medium leading-relaxed text-slate-50 sm:text-lg">
                "GrowthLoop took our old brochure site and turned it into something that actually
                brings in bookings. We now get more website leads than phone calls, and we can see
                exactly where they&apos;re coming from."
              </p>
              <div className="pt-2 text-xs text-slate-400 sm:text-sm">
                <p className="font-semibold text-slate-100">Priya S.</p>
                <p>Owner, independent salon</p>
                <p className="mt-1 text-slate-400">
                  Result: A steady, predictable stream of online bookings without adding more admin
                  to the team&apos;s plate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Who&apos;s behind GrowthLoop */}
      <Section className="bg-slate-950 pb-20 pt-4 lg:pb-24 lg:pt-6">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Who&apos;s behind GrowthLoop
            </p>
            <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
              A small, senior team you can talk to.
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              We don&apos;t have account layers or rotating junior teams. You work directly with the
              people thinking about your product, design, and systems.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-200 sm:text-sm">
            <span className="rounded-full border border-slate-700 px-4 py-2">
              • Product strategist, ex-SaaS founder
            </span>
            <span className="rounded-full border border-slate-700 px-4 py-2">
              • Senior designer focused on local brands
            </span>
            <span className="rounded-full border border-slate-700 px-4 py-2">
              • Engineer with experience in automation and dashboards
            </span>
          </div>
        </div>
      </Section>
    </>
  );
}
