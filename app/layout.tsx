import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/site-chrome";

export const metadata: Metadata = { title: { default: "Roots & Hooves Agro Farms", template: "%s | Roots & Hooves" }, description: "Quality yams, healthy goats, organic manure, and practical farm advisory services.", metadataBase: new URL("http://localhost:3000") };

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Roots & Hooves Agro Farms",
  description: "Sustainable yam production, commercial goat rearing, organic farm inputs, and practical farm advisory services.",
  email: "Abolmike@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }} /><a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:p-3">Skip to content</a><Header /><main id="main">{children}</main><Footer /></body></html>; }
