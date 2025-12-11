import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | GrowthLoop",
  description:
    "Tell GrowthLoop about your local business and what you&apos;d like to improve so we can follow up with a simple, no-pressure conversation.",
  openGraph: {
    title: "Contact | GrowthLoop",
    description:
      "Reach out to GrowthLoop to discuss websites, apps, or software that could help your local business look sharper and run smoother.",
    url: "https://growthloop.agency/contact",
    siteName: "GrowthLoop",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
