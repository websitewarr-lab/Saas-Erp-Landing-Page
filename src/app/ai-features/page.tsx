import type { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import AiFeaturesClient from "./AiFeaturesClient";

export const metadata: Metadata = {
  title: "AI Features | Your Intelligent Business Partner | Mossie ERP",
  description:
    "Explore Mossie ERP's embedded AI features: Ask Mossie copilot in 6 languages over WhatsApp & voice, Compliance Guardian for GST & Section 43B(h), 13-week Cash Pilot forecasts, and autonomous Order-to-Shortage factory planning.",
  alternates: {
    canonical: "/ai-features",
  },
  openGraph: {
    title: "AI Features | Your Intelligent Business Partner | Mossie ERP",
    description:
      "Embedded AI that understands your data, learns from your business, and helps you make faster, smarter decisions. Live WhatsApp copilot, Compliance Guardian, Cash Pilot, and Order-to-Shortage factory automation.",
    url: "https://mossierp.com/ai-features",
    siteName: "Mossie ERP",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/ai-features-pageimg/mossie-ai-robot.png",
        width: 1200,
        height: 900,
        alt: "Mossie ERP AI Features and Intelligent Business Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Features | Your Intelligent Business Partner | Mossie ERP",
    description:
      "Embedded AI that understands your data, learns from your business, and helps you make faster, smarter decisions.",
    images: ["/images/ai-features-pageimg/mossie-ai-robot.png"],
  },
};

export default function AiFeaturesPage() {
  return (
    <div className="erp-site min-h-screen bg-white text-slate-900 font-sans selection:bg-[#006fc9] selection:text-white">
      {/* Global Site Header */}
      <SiteHeader />

      <main id="main-content">
        <AiFeaturesClient />
      </main>

      {/* Global Site Footer */}
      <SiteFooter />
    </div>
  );
}

