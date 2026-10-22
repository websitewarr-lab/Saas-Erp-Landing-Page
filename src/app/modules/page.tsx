import type { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import ModulesDirectoryShowcase from "@/app/components/modules/ModulesDirectoryShowcase";

export const metadata: Metadata = {
  title: "ERP Modules Directory | 8 Unified Business Suites | Mossie ERP",
  description:
    "Explore all 8 unified Mossie ERP modules: Finance, HRMS & Payroll, CRM, Inventory, Production, Project Management, Sales, and Purchasing under one calm, intelligent platform.",
  alternates: {
    canonical: "/modules",
  },
  openGraph: {
    title: "ERP Modules Directory | 8 Unified Business Suites | Mossie ERP",
    description:
      "Explore all 8 unified Mossie ERP modules: Finance, HRMS & Payroll, CRM, Inventory, Production, Project Management, Sales, and Purchasing under one calm, intelligent platform.",
    url: "/modules",
  },
};

export default function ModulesHubPage() {
  return (
    <div className="erp-site min-h-screen bg-[#f8faff] text-slate-900 font-sans selection:bg-[#006fc9] selection:text-white">
      {/* Global Site Header */}
      <SiteHeader />

      <main id="main-content">
        <ModulesDirectoryShowcase />
      </main>

      {/* Global Site Footer */}
      <SiteFooter />
    </div>
  );
}
