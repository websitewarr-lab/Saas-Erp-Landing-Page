"use client";

import React from "react";
import Link from "next/link";
import {
  Target,
  ShoppingCart,
  Receipt,
  Boxes,
  Factory,
  BarChart3,
  TrendingUp,
  UsersRound,
  FolderKanban,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

interface ModuleHubItem {
  slug: string;
  name: string;
  badge: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
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
    slug: "sales",
    name: "Sales & Order Management",
    badge: "Orders & Pricing",
    description: "Multi-channel quotations, sales orders, pricing rules, and invoicing.",
    icon: ShoppingCart,
    features: [
      "Automated Sales Order Approval Workflows",
      "Dynamic Tiered Pricing & Discount Matrix",
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
    slug: "finance",
    name: "Finance & Treasury",
    badge: "Treasury & FX",
    description: "Corporate treasury management, cash flow forecasting, and FX risk hedging.",
    icon: TrendingUp,
    features: [
      "Real-Time Multi-Bank Treasury Consolidation",
      "Predictive Cash Flow Forecasting Engine",
      "Foreign Exchange (FX) & Hedging Risk Control",
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
    <div className="erp-site min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Global Site Header */}
      <SiteHeader />

      <main>
        {/* Intro Hero Header */}
        <section className="relative py-20 bg-gradient-to-b from-blue-50/70 via-slate-50 to-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              One ERP, every department.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore MossiERP&apos;s suite of 8 deeply integrated enterprise applications. Connect your core business operations under one calm, intelligent platform designed for speed, visibility, and control.
            </p>
          </div>
        </section>

     
        {/* 8 Modules Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modulesList.map((mod) => {
              const IconComp = mod.icon;
              return (
                <div
                  key={mod.slug}
                  className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-200 flex flex-col justify-between group space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-[11px] font-bold uppercase tracking-wider">
                        {mod.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                      {mod.name}
                    </h2>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {mod.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {mod.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={`/modules/${mod.slug}`}
                      className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs group-hover:bg-blue-600 transition-all shadow-sm"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Global CTA Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white p-10 lg:p-14 text-center overflow-hidden shadow-2xl shadow-blue-600/20">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Ready to transform your business operations?
              </h2>
              <p className="text-base text-blue-100 leading-relaxed">
                Connect your team with a personalized walkthrough of MossiERP tailored to your operational workflows.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  href="/#contact"
                  className="px-8 py-4 rounded-xl bg-white text-blue-700 font-extrabold text-sm shadow-xl hover:bg-slate-100 transition-all flex items-center gap-2"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
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
