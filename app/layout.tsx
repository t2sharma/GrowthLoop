import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "GrowthLoop | Helping Local Businesses Grow, On Repeat.",
  description:
    "GrowthLoop builds websites, mobile apps, and custom software to help local businesses look professional, cut costs with automation, and bring in new customers.",
  openGraph: {
    title: "GrowthLoop | Helping Local Businesses Grow, On Repeat.",
    description:
      "GrowthLoop builds websites, mobile apps, and custom software to help local businesses look professional, cut costs with automation, and bring in new customers.",
    url: "https://growthloop.agency/",
    siteName: "GrowthLoop",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background text-body flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
