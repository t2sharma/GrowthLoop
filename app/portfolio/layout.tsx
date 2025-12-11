import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | GrowthLoop",
  description:
    "Selected projects where GrowthLoop helped local businesses with websites, apps, and automation that support day-to-day operations.",
  openGraph: {
    title: "Portfolio | GrowthLoop",
    description:
      "Explore case studies of local businesses that partnered with GrowthLoop on websites, loyalty apps, and custom software.",
    url: "https://growthloop.agency/portfolio",
    siteName: "GrowthLoop",
    type: "website",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
