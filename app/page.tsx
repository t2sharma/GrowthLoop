"use client";

import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { WebsitePreviewSlideshow } from "@/components/WebsitePreviewSlideshow";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: "🌐",
    title: "Website Design & Development",
    bullets: [
      "Modern sites that make you look established, not DIY.",
      "Built to load fast and look great on every device.",
      "Clear calls-to-action that drive calls and bookings.",
    ],
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    bullets: [
      "Keep loyal customers close with your own app.",
      "Loyalty, ordering, or scheduling in their pocket.",
      "Push notifications that bring people back in.",
    ],
  },
  {
    icon: "⚙️",
    title: "Custom Software & Automation",
    bullets: [
      "Automate repetitive admin tasks and follow-ups.",
      "Connect tools that don&apos;t talk to each other.",
      "Dashboards that show what&apos;s working at a glance.",
    ],
  },
  {
    icon: "🛠️",
    title: "Maintenance & Support",
    bullets: [
      "Ongoing updates so your site never feels dated.",
      "Monitoring and quick fixes when issues pop up.",
      "A partner you can email when something breaks.",
    ],
  },
];

const pillars = [
  {
    title: "Professional Look",
    body: "We design digital experiences that make your business feel bigger than it is—without losing the local touch.",
  },
  {
    title: "Automation That Cuts Costs",
    body: "We replace manual busywork with simple systems so your team can focus on the work that matters.",
  },
  {
    title: "Marketing & SEO Ready",
    body: "We set you up with the structure, content, and tracking you need to turn visitors into customers.",
  },
  {
    title: "Fast, Human Support",
    body: "When you need a change or have a question, you talk to people who know your business, not a ticket bot.",
  },
];

const projects = [
  {
    businessType: "Neighborhood Restaurant",
    outcome:
      "Turned phone-only reservations into an online booking flow that increased weekend covers.",
    tags: ["Website + Booking System", "Menu Updates", "Local SEO"],
  },
  {
    businessType: "Boutique Fitness Studio",
    outcome:
      "Launched a class booking app that boosted repeat visits and reduced no-shows.",
    tags: ["App + Push Notifications", "Member Portal"],
  },
  {
    businessType: "Home Services Company",
    outcome:
      "Automated quotes and follow-ups, cutting admin time while increasing closed jobs.",
    tags: ["Automation", "CRM Integration", "Custom Dashboard"],
  },
];

const testimonials = [
  {
    name: "Alex R.",
    business: "Local Cafe Owner",
    quote:
      "Our new site finally looks like the experience we give in person and we’re getting more online orders than ever.",
  },
  {
    name: "Jordan P.",
    business: "Gym & Training Studio",
    quote:
      "GrowthLoop helped us streamline signups and reminders. It feels like we added a part-time staff member without the payroll.",
  },
  {
    name: "Taylor M.",
    business: "Family Law Firm",
    quote:
      "Clients tell us they chose us because the site felt clear and trustworthy. That’s exactly what we were hoping for.",
  },
];

const scrollToId = (id: string) => {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-12 pb-20 lg:pt-16 lg:pb-24">
        <div className="pointer-events-none absolute -right-40 -top-40 h-72 w-72 rounded-full bg-primary/25 blur-3xl" aria-hidden="true" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.3fr)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Helping Local Businesses Grow, On Repeat.
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
              Top-notch websites & apps for local businesses.
            </h1>
            <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
              GrowthLoop designs and builds websites, mobile apps, and custom software so
              your business can look more professional, cut costs with automation, and
              consistently bring in new customers.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg" asChild>
                <Link href="/contact" className="text-white">
                  Get a Free Consultation
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/portfolio">View our work</Link>
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-400">
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
                <span className="mr-1">Or call us at</span>
                <a
                  href="tel:+16692547777"
                  className="font-medium underline underline-offset-4 hover:text-primary"
                >
                  +1 669-254-7777
                </a>
              </p>
            </div>
            <div className="mt-4 grid gap-4 text-xs text-slate-300 sm:grid-cols-3">
              <div>
                <p className="text-base font-semibold text-slate-50">Look professional</p>
                <p>Give customers confidence from the first click, not the fifth tab.</p>
              </div>
              <div>
                <p className="text-base font-semibold text-slate-50">Cut busywork</p>
                <p>Automate reminders, bookings, and follow-ups that used to take hours.</p>
              </div>
              <div>
                <p className="text-base font-semibold text-slate-50">Bring in customers</p>
                <p>Turn your site and app into a quiet but steady lead machine.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            <WebsitePreviewSlideshow />
          </motion.div>
        </div>
      </Section>

      {/* Services overview */}
      <Section id="services" className="py-24 lg:py-32">
        <div className="flex flex-col gap-10">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Services
            </p>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              Everything you need to grow online.
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              From your first professional website to custom tools that automate your
              operations, we help you upgrade the parts of your business customers see—and
              the parts they never do.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {services.map((service) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/80 text-base text-slate-50">
                    {service.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-100">
                    {service.title}
                  </h3>
                </div>
                <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-slate-400">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      {/* Why work with us */}
      <Section id="why-us" className="bg-slate-900/40 py-20 lg:py-28">
        <div className="flex flex-col gap-10">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Why work with us
            </p>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              A partner that understands local businesses.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex h-full flex-col rounded-2xl border border-slate-700 bg-slate-800/30 p-6 text-sm backdrop-blur transition-transform duration-300 ease-out hover:scale-[1.02] hover:border-secondary/60 hover:shadow-xl lg:p-7"
              >
                <h3 className="mb-2 text-xl font-semibold text-slate-100">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mini-portfolio */}
      <Section id="mini-portfolio" className="bg-slate-950 py-24 lg:py-32">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Results
              </p>
              <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
                A snapshot of what we build.
              </h2>
              <p className="max-w-xl text-sm text-slate-300 sm:text-base">
                Every project is tailored to the business, but the pattern is the same:
                clearer messaging, smoother operations, and more of the right customers.
              </p>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/portfolio">View full portfolio</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {projects.map((project) => (
              <motion.article
                key={project.businessType}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 text-sm shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-8"
              >
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    {project.businessType}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {project.outcome}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials & Final CTA */}
      <Section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 lg:py-32">
        <div className="flex flex-col gap-12">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Kind words
            </p>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              Local businesses we’ve helped.
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {testimonials.map((item) => (
              <motion.figure
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-sm text-slate-300 shadow-lg transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-7"
              >
                <div>
                  <div className="mb-3 flex items-start justify-between">
                    <span className="text-3xl leading-none text-primary">“</span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                      Local story
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300">{item.quote}</p>
                </div>
                <div className="mt-4 border-t border-slate-800 pt-3">
                  <p className="text-sm font-semibold text-slate-100">{item.name}</p>
                  <p className="text-xs text-slate-400">{item.business}</p>
                </div>
              </motion.figure>
            ))}
          </div>

          {/* Integrated Final CTA */}
          <div
            id="contact-cta"
            className="mt-16 flex flex-col items-start justify-between gap-8 rounded-3xl border border-slate-800 bg-slate-950/80 px-6 py-8 text-sm shadow-xl lg:flex-row lg:items-center lg:px-12 lg:py-12"
          >
            <div className="max-w-xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                Next step
              </p>
              <h3 className="text-2xl font-semibold text-slate-50 lg:text-3xl">
                Ready to level up your local business?
              </h3>
              <p className="text-sm text-slate-300 sm:text-base">
                Share where you are today and where you’d like to be. We’ll come prepared
                with practical ideas tailored to your business—not a generic sales pitch.
              </p>
            </div>
            <div className="flex w-full flex-col items-start gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <Button className="bg-indigo-500 text-white shadow-lg shadow-indigo-500/40 hover:bg-indigo-400">
                Get a Free Strategy Call
              </Button>
              <div className="text-xs text-slate-400 sm:text-sm">
                <Link
                  href="/contact"
                  className="font-medium text-slate-200 underline underline-offset-4 hover:text-primary"
                >
                  Or contact us directly →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
