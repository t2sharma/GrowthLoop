import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | GrowthLoop",
  description:
    "Websites, mobile apps, and custom software solutions for local businesses that want to look more professional, automate busywork, and win more customers.",
  openGraph: {
    title: "Services | GrowthLoop",
    description:
      "Explore GrowthLoop's end-to-end digital services for local businesses, from conversion-focused websites to mobile apps and custom software.",
    url: "https://growthloop.agency/services",
    siteName: "GrowthLoop",
    type: "website",
  },
};

const services = [
  {
    href: "/services/websites",
    name: "Websites",
    icon: "🌐",
    description:
      "Conversion-driven sites that look sharp on every device and turn visitors into enquiries.",
  },
  {
    href: "/services/apps",
    name: "Mobile Apps",
    icon: "📱",
    description:
      "Lightweight iOS and Android apps that keep your best customers close and coming back.",
  },
  {
    href: "/services/software-solutions",
    name: "Software Solutions",
    icon: "⚙️",
    description:
      "Custom tools and automations that quietly run the day-to-day so your team doesn't have to.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="End-to-end digital services for local businesses."
        subtitle="From your first professional website to custom apps and internal tools, GrowthLoop is your single partner for looking polished online, automating the busywork, and bringing in more of the right customers."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/80 text-base text-slate-50">
                    {service.icon}
                  </span>
                  <h2 className="text-base font-semibold text-slate-100 group-hover:text-primary">
                    {service.name}
                  </h2>
                </div>
                <p className="text-slate-400">{service.description}</p>
              </div>
              <p className="mt-4 text-xs font-medium text-primary group-hover:text-primary/80 group-hover:underline">
                Learn more →
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
