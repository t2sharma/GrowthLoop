import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import Link from "next/link";

export default function SoftwareSolutionsServicePage() {
  return (
    <>
      <PageHeader
        eyebrow="Software Solutions"
        title="Custom software and automation for local teams."
        subtitle="From simple internal tools to targeted automations, we build software that reduces manual work, connects your systems, and gives you a clear view of what&apos;s happening."
        actions={
          <Button asChild>
            <Link href="/contact" className="text-white">
              Discuss a software project
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
                We focus on solving the unglamorous problems that quietly slow your team down: manual data entry, tools that don&apos;t talk, and paper or spreadsheet processes.
              </p>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold text-slate-100">Inventory & job tracking tools:</span> Simple internal apps that show what&apos;s on hand, what&apos;s assigned, and what&apos;s next.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Billing & quoting helpers:</span> Faster, more consistent quotes and invoices with fewer manual steps.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">CRM and lead follow-up:</span> Lightweight systems so leads don&apos;t fall through the cracks.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Automations between tools:</span> Connect forms, calendars, CRMs, and accounting so data moves without retyping.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Dashboards your team actually uses:</span> Clear, role-specific views of what&apos;s happening right now.
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300 shadow-lg backdrop-blur-md">
            <div>
              <h3 className="text-base font-semibold text-slate-100">Who this is for</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-300">
                <li>Trades and home services teams juggling jobs, crews, and materials</li>
                <li>Clinics and professional services with repeat clients and paperwork</li>
                <li>Multi-location businesses that need better visibility across sites</li>
                <li>Any local business where spreadsheets are holding things together</li>
              </ul>
            </div>
            <div className="rounded-xl bg-background/80 p-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Pricing preview</h4>
              <p className="mt-2 text-xs text-slate-300">
                Software projects start with a focused, high-impact workflow and grow from there. For ballpark ranges, visit our
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
          <h2 className="text-xl font-semibold text-slate-50">How the software process works</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Step 1</p>
              <h3 className="mt-1 text-sm font-semibold text-slate-100">Discovery</h3>
              <p className="mt-1 text-xs">
                We unpack where time is being lost today and which workflows matter most.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Step 2</p>
              <h3 className="mt-1 text-sm font-semibold text-slate-100">Design</h3>
              <p className="mt-1 text-xs">
                We sketch simple interfaces and flows that fit how your team already works.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Step 3</p>
              <h3 className="mt-1 text-sm font-semibold text-slate-100">Build</h3>
              <p className="mt-1 text-xs">
                We implement the tool or automation, connect it to your existing systems, and test with real data.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Step 4</p>
              <h3 className="mt-1 text-sm font-semibold text-slate-100">Launch & support</h3>
              <p className="mt-1 text-xs">
                We roll out gradually, train your team, and iterate as you see what saves the most time.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <CTASection
        eyebrow="Next step"
        title="Want to automate the busywork in your business?"
        body="We&apos;ll help you identify one or two processes that software can improve right away, then design a roadmap that fits your size and pace."
        primaryLabel="Book a free call"
        primaryHref="/contact"
        secondaryLabel="Review pricing options"
        secondaryHref="/pricing"
      />
    </>
  );
}
