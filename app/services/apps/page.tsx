import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import Link from "next/link";

export default function AppsServicePage() {
  return (
    <>
      <PageHeader
        eyebrow="Mobile Apps"
        title="Mobile apps for loyal, repeat customers."
        subtitle="We design and ship lightweight iOS and Android apps that make it easier for your best customers to book, buy, and stay connected with your business."
        actions={
          <Button asChild>
            <Link href="/contact" className="text-white">
              Talk about an app idea
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
                Apps work best when they make life easier for your most valuable customers, not when they try to replace your entire website.
              </p>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold text-slate-100">iOS and Android support:</span> One codebase that reaches customers on the phones they actually use.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Push notifications:</span> Thoughtful reminders about orders, appointments, or offers that bring people back in.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Loyalty & membership features:</span> Digital punch cards, rewards, or member-only content to reward regulars.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Scheduling & appointments:</span> Booking flows that fit how your team actually works.
                </li>
                <li>
                  <span className="font-semibold text-slate-100">Simple dashboards:</span> A clear view of usage so you know what customers value most.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300 shadow-lg backdrop-blur-md">
            <div>
              <h3 className="text-base font-semibold text-slate-100">Who this is for</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-300">
                <li>Gyms and studios with memberships or class schedules</li>
                <li>Restaurants and cafes with frequent repeat customers</li>
                <li>Service businesses with bookings or recurring appointments</li>
                <li>Local brands that want a direct channel beyond social media</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Pricing preview</h4>
              <p className="mt-2 text-xs text-slate-300">
                App projects vary more than websites, but we often bundle core features into predictable packages. See our{" "}
                <Link href="/pricing" className="font-medium text-primary underline-offset-2 hover:underline">
                  pricing page
                </Link>{" "}
                for example ranges.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-6 text-sm text-slate-300 sm:text-base">
          <h2 className="text-xl font-semibold text-slate-50">How the app process works</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Step 1</p>
              <h3 className="mt-1 text-sm font-semibold text-slate-100">Discovery</h3>
              <p className="mt-1 text-xs">
                We clarify what the app should do, who it&apos;s for, and how it supports your existing business.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Step 2</p>
              <h3 className="mt-1 text-sm font-semibold text-slate-100">Design</h3>
              <p className="mt-1 text-xs">
                We map out core screens and flows so customers can quickly complete the actions that matter.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Step 3</p>
              <h3 className="mt-1 text-sm font-semibold text-slate-100">Build</h3>
              <p className="mt-1 text-xs">
                We develop the app, integrate it with your existing systems, and prepare it for store submission.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Step 4</p>
              <h3 className="mt-1 text-sm font-semibold text-slate-100">Launch & support</h3>
              <p className="mt-1 text-xs">
                We help with launch, early feedback, and ongoing improvements as you learn what customers use most.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Next step"
        title="Have an app idea for your local business?"
        body="We&apos;ll help you validate what belongs in an app, what stays on the web, and how to launch something customers actually use."
        primaryLabel="Book a free call"
        primaryHref="/contact"
        secondaryLabel="Review pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
