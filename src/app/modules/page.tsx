import type { Metadata } from "next";
import type { ComponentType } from "react";
import Link from "next/link";
import {
  Target,
  ShoppingCart,
  Receipt,
  Boxes,
  Factory,
  BarChart3,
  UsersRound,
  FolderKanban,
  ArrowRight,
  Check,
} from "lucide-react";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import { PopupCtaButton } from "@/app/components/popup-cta";

export const metadata: Metadata = {
  title: "ERP Modules Directory | 8 Unified Business Suites",
  description:
    "Explore all 8 unified Mossie ERP modules: Finance, HRMS & Payroll, CRM, Inventory, Production, Project Management, Sales, and Purchasing.",
  alternates: {
    canonical: "/modules",
  },
  openGraph: {
    title: "ERP Modules Directory | Mossie ERP",
    description:
      "Explore all 8 unified Mossie ERP modules: Finance, HRMS & Payroll, CRM, Inventory, Production, Project Management, Sales, and Purchasing.",
    url: "/modules",
  },
};

interface ModuleHubItem {
  slug: string;
  name: string;
  badge: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  features: string[];
}

const modulesList: ModuleHubItem[] = [
  {
    slug: "crm",
    name: "CRM",
    badge: "Sales & Pipeline",
    description: "360-degree customer pipeline, AI lead scoring, and automated deal forecasting.",
    icon: Target,
    features: [
      "AI Predictive Lead Scoring & Territory Routing",
      "Omnichannel Email, Call & WhatsApp Sync",
      "1-Click Proposal to Sales Order Bridge",
    ],
  },
  {
    slug: "sales",
    name: "Sales & Order Management",
    badge: "Orders & Fulfillment",
    description: "Multi-channel quotations, sales orders, discount rules, and invoicing.",
    icon: ShoppingCart,
    features: [
      "Automated Sales Order Approval Workflows",
      "Dynamic Tiered Rate & Discount Matrix",
      "Real-time Stock Allocation & Shipping Sync",
    ],
  },
  {
    slug: "purchase",
    name: "Purchase & Procurement",
    badge: "Procurement & Vendors",
    description: "Requisition workflows, RFQ management, vendor performance, and POs.",
    icon: Receipt,
    features: [
      "Automated Requisition & Multi-level Approvals",
      "Vendor Rating & Delivery Performance Audits",
      "3-Way Invoice Matching (PO, GRN & Bill)",
    ],
  },
  {
    slug: "inventory",
    name: "Inventory Management",
    badge: "Stock & Warehouses",
    description: "Multi-location warehouse control, real-time stock tracking, and reorder alerts.",
    icon: Boxes,
    features: [
      "Real-Time Serial, Batch & Expiry Traceability",
      "Automated Reorder Triggers & Safety Stock Alerts",
      "Mobile Barcode Scanning & Cycle Count Audits",
    ],
  },
  {
    slug: "production",
    name: "Production Management",
    badge: "Manufacturing & MRP",
    description: "Multi-level Bill of Materials (BOM), MRP, work orders, and shop floor tracking.",
    icon: Factory,
    features: [
      "Multi-Level Bill of Materials (BOM) & Routing",
      "Material Requirements Planning (MRP Engine)",
      "Shop Floor Work Order & Capacity Tracking",
    ],
  },
  {
    slug: "accounting",
    name: "Accounting & Finance",
    badge: "General Ledger",
    description: "Automated GL journal posting, bank reconciliations, and financial statements.",
    icon: BarChart3,
    features: [
      "Automated Double-Entry General Ledger Postings",
      "Smart Bank Feed Reconciliation & Matching",
      "Real-Time Balance Sheet & P&L Statement Engine",
    ],
  },
  {
    slug: "hrms",
    name: "HRMS & Payroll",
    badge: "Workforce & Payroll",
    description: "Employee lifecycle, biometric attendance tracking, leave, and payroll.",
    icon: UsersRound,
    features: [
      "Automated Monthly Payroll & Tax Deduction Engine",
      "Biometric Attendance & Leave Approval Workflows",
      "Self-Service Employee Portal & Document Vault",
    ],
  },
  {
    slug: "project",
    name: "Project Management",
    badge: "Projects & Timesheets",
    description: "Project milestones, Gantt schedules, resource capacity, and billing.",
    icon: FolderKanban,
    features: [
      "Interactive Gantt & Kanban Task Scheduling",
      "Resource Capacity & Workload Balancing",
      "Milestone Invoicing & Project Margin Tracking",
    ],
  },
];

export default function ModulesHubPage() {
  return (
    <div className="erp-site min-h-screen !bg-white text-slate-900 font-sans selection:bg-[#006fc9] selection:text-white">
      {/* Global Site Header */}
      <SiteHeader />

      <main id="main-content" className="bg-white">
        {/* Intro Hero Header */}
        <section className="relative py-20 bg-gradient-to-b from-[#006fc9]/10 via-slate-50 to-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0F172A] tracking-[-0.03em] leading-[1.12] font-sans">
              One ERP, every department.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore Mossie ERP&apos;s suite of 8 deeply integrated enterprise applications. Connect your core business operations under one calm, intelligent platform designed for speed, visibility, and control.
            </p>
          </div>
        </section>

        {/* 8 Modules Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modulesList.map((mod) => {
              const IconComp = mod.icon;
              return (
                <div
                  key={`module-card-${mod.slug}`}
                  className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-[#006fc9]/60 hover:shadow-xl transition-all duration-200 flex flex-col justify-between group space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#006fc9]/10 border border-[#006fc9]/20 flex items-center justify-center text-[#006fc9] group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-[11px] font-bold uppercase tracking-wider">
                        {mod.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl group-hover:text-[#006fc9] transition-colors">
                      {mod.name}
                    </h2>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {mod.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {mod.features.map((feat, fIdx) => (
                        <div key={`${mod.slug}-feature-${fIdx}`} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <Check className="w-4 h-4 text-[#006fc9] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={`/modules/${mod.slug}`}
                      className="inline-flex items-center justify-between w-full px-5 py-3 rounded-full bg-[#006fc9] hover:bg-[#005fae] text-white font-bold text-xs transition-all shadow-sm shadow-[#006fc9]/20"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        </section>

        {/* Global CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="relative rounded-3xl bg-gradient-to-r from-[#004e8f] via-[#006fc9] to-[#3b9fe5] text-white p-10 lg:p-14 text-center overflow-hidden shadow-2xl shadow-[#006fc9]/25">
              <div className="cta-grid-lines" aria-hidden="true" />
              <div className="relative z-10 max-w-3xl mx-auto space-y-5">
                <h2 className="section-heading !text-white">
                  Ready to transform your business operations?
                </h2>
                <p className="section-description !text-blue-100">
                  Connect your team with a personalized walkthrough of Mossie ERP tailored to your operational workflows.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
                  <PopupCtaButton className="button button-light !bg-white !text-[#006fc9] hover:!bg-blue-50 !px-7 !min-h-[48px] !text-sm !font-bold shadow-lg cursor-pointer">
                    <span>Book a Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </PopupCtaButton>
                  <PopupCtaButton
                    intent="quote"
                    className="button button-ghost-light !text-white !border-white/35 !bg-white/10 hover:!bg-white/20 !px-7 !min-h-[48px] !text-sm !font-bold cursor-pointer"
                  >
                    <span>Request a Quote</span>
                  </PopupCtaButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Site Footer */}
      <SiteFooter />
    </div>
  );
}
