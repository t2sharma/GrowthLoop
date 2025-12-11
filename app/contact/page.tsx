"use client";

import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export default function ContactPage() {

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's explore what growth could look like."
        subtitle="The easiest way to get started is a quick call. Tell us what you're hoping to improve, and we'll talk through options with a simple, no-pressure conversation."
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300 shadow-lg backdrop-blur-md sm:p-8">
            <h3 className="text-base font-semibold text-slate-100 sm:text-lg">
              Ready when you are - just give us a call.
            </h3>
            <ol className="mt-2 list-decimal space-y-2 pl-5 text-slate-300">
              <li>Tell us a bit about your business and what&apos;s not working today.</li>
              <li>We&apos;ll talk through ideas for your website, app, or automation9in plain language.</li>
              <li>If it feels like a fit, we&apos;ll outline a simple next step and timeline.</li>
            </ol>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-400 sm:text-sm">
              <svg
                className="h-4 w-4 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2.25 5.25C2.25 4.00736 3.25736 3 4.5 3H6.75C7.30228 3 7.75 3.44772 7.75 4V7.25C7.75 7.61103 7.59053 7.95591 7.30901 8.19076L6.14645 9.17157C5.95118 9.3372 5.86813 9.60548 5.93461 9.85859C6.64035 12.5059 8.49406 14.8596 11.1414 16.5654C11.3945 16.6319 11.6628 16.5488 11.8284 16.3536L12.8092 15.191C13.0441 14.9095 13.389 14.75 13.75 14.75H17C17.5523 14.75 18 15.1977 18 15.75V19.5C18 20.7426 16.9926 21.75 15.75 21.75H14.25C8.58979 21.75 4.25 17.4102 4.25 11.75V10.25C4.25 9.00736 3.24264 8 2 8C2.13807 6.91681 2.25 6.07147 2.25 5.25Z"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>
                <span className="mr-1 font-medium text-slate-100">Call us directly:</span>
                <a
                  href="tel:+16692547777"
                  className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  +1 669-254-7777
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
