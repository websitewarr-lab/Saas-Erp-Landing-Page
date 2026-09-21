"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserPlus,
  FileSpreadsheet,
  CheckCircle2,
  CreditCard,
  Boxes,
  Truck,
  ReceiptText,
  Landmark,
  BarChart3,
  UsersRound,
  UserCheck,
  CalendarCheck,
  Clock,
  Wallet,
  Award,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Zap,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

interface StageDetail {
  tag: string;
  headline: string;
  description: string;
  metrics: { label: string; val: string }[];
  outputBadge: string;
}

interface WorkflowStage {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  color: string; // Tailwind accent color
  glowColor: string;
  detail: StageDetail;
}

const OPERATIONS_STAGES: WorkflowStage[] = [
  {
    id: "lead",
    stepNumber: "01",
    title: "Lead",
    subtitle: "Capture & Score",
    icon: UserPlus,
    color: "text-blue-600",
    glowColor: "rgba(37, 99, 235, 0.25)",
    detail: {
      tag: "CRM Auto-Intake",
      headline: "Multi-channel lead ingestion & AI scoring",
      description:
        "Leads from web forms, chat, emails, and campaigns are automatically enriched, deduplicated, and scored in real-time.",
      metrics: [
        { label: "Intake Latency", val: "< 0.4s" },
        { label: "Enrichment Rate", val: "100%" },
        { label: "Manual Entry", val: "0 min" },
      ],
      outputBadge: "Creates Qualified Account Record",
    },
  },
  {
    id: "quotation",
    stepNumber: "02",
    title: "Quotation",
    subtitle: "CPQ & Estimate",
    icon: FileSpreadsheet,
    color: "text-emerald-600",
    glowColor: "rgba(16, 185, 129, 0.25)",
    detail: {
      tag: "Dynamic Pricing Engine",
      headline: "Instant margin-safe quote generation",
      description:
        "Apply custom client discount tiers, tax profiles, and margin protection rules without leaving the customer conversation.",
      metrics: [
        { label: "Quote Speed", val: "Instant" },
        { label: "Margin Guard", val: "Automated" },
        { label: "Win Rate", val: "+24%" },
      ],
      outputBadge: "Generates Digital Proposal & e-Sign",
    },
  },
  {
    id: "order",
    stepNumber: "03",
    title: "Sales Order",
    subtitle: "Confirm & Lock",
    icon: CheckCircle2,
    color: "text-indigo-600",
    glowColor: "rgba(99, 102, 241, 0.25)",
    detail: {
      tag: "Contract Commitment",
      headline: "Automated order locking & inventory hold",
      description:
        "Signed quotations convert into binding sales orders with automatic credit checks, instantly reserving available warehouse stock.",
      metrics: [
        { label: "Conversion Lag", val: "0 ms" },
        { label: "Credit Verification", val: "Pass" },
        { label: "Stock Reserved", val: "Real-time" },
      ],
      outputBadge: "Triggers Procurement & Allocation",
    },
  },
  {
    id: "purchase",
    stepNumber: "04",
    title: "Purchase",
    subtitle: "Procure & POs",
    icon: CreditCard,
    color: "text-amber-600",
    glowColor: "rgba(245, 158, 11, 0.25)",
    detail: {
      tag: "Smart Replenishment",
      headline: "Automated purchase requisition & vendor POs",
      description:
        "Evaluates lead times, minimum order quantities, and preferred vendor price sheets to dispatch POs automatically.",
      metrics: [
        { label: "PO Creation", val: "Auto" },
        { label: "Vendor Lead Time", val: "-2.5 Days" },
        { label: "Price Variance", val: "0%" },
      ],
      outputBadge: "Dispatches Vendor Purchase Order",
    },
  },
  {
    id: "inventory",
    stepNumber: "05",
    title: "Inventory",
    subtitle: "Stock & Multi-Bin",
    icon: Boxes,
    color: "text-sky-600",
    glowColor: "rgba(14, 165, 233, 0.25)",
    detail: {
      tag: "Multi-Warehouse Sync",
      headline: "Live bin allocation, serial & barcode scan",
      description:
        "Goods received at docks instantly update perpetual inventory counts, cross-dock allocations, and pick lists.",
      metrics: [
        { label: "Stock Accuracy", val: "99.8%" },
        { label: "Bin Tracking", val: "Barcode" },
        { label: "Discrepancies", val: "< 0.1%" },
      ],
      outputBadge: "Releases Pick & Pack Order",
    },
  },
  {
    id: "delivery",
    stepNumber: "06",
    title: "Delivery",
    subtitle: "Dispatch & Track",
    icon: Truck,
    color: "text-purple-600",
    glowColor: "rgba(168, 85, 247, 0.25)",
    detail: {
      tag: "Logistics Fulfillment",
      headline: "Waybill generation & live delivery tracking",
      description:
        "Generate compliant shipping documentation, packing manifests, and automated delivery milestone updates for buyers.",
      metrics: [
        { label: "Dispatch Time", val: "Same-day" },
        { label: "On-time SLA", val: "99.2%" },
        { label: "Proof of Delivery", val: "Digital" },
      ],
      outputBadge: "Generates Verified Delivery Proof",
    },
  },
  {
    id: "invoice",
    stepNumber: "07",
    title: "Invoice",
    subtitle: "Bill & E-Invoice",
    icon: ReceiptText,
    color: "text-cyan-600",
    glowColor: "rgba(6, 182, 212, 0.25)",
    detail: {
      tag: "Automated Billing",
      headline: "Instant invoice delivery & tax compliance",
      description:
        "Verified fulfillment triggers automatic tax-compliant e-invoicing with integrated payment links sent to buyer accounts.",
      metrics: [
        { label: "Billing Lag", val: "0 Days" },
        { label: "DSO Reduction", val: "-14 Days" },
        { label: "Tax Validation", val: "100%" },
      ],
      outputBadge: "Posts to Accounts Receivable",
    },
  },
  {
    id: "accounting",
    stepNumber: "08",
    title: "Accounting",
    subtitle: "General Ledger",
    icon: Landmark,
    color: "text-emerald-700",
    glowColor: "rgba(4, 120, 87, 0.25)",
    detail: {
      tag: "Ledger Reconciliation",
      headline: "Synchronized double-entry journal posting",
      description:
        "COGS, revenue, inventory revaluations, and customer balances automatically update the general ledger without manual batches.",
      metrics: [
        { label: "Month-End Close", val: "3 Days" },
        { label: "Reconciliation", val: "Automated" },
        { label: "Audit Trace", val: "Immutable" },
      ],
      outputBadge: "Updates Financial Statements",
    },
  },
  {
    id: "reports",
    stepNumber: "09",
    title: "Reports",
    subtitle: "BI & Analytics",
    icon: BarChart3,
    color: "text-blue-700",
    glowColor: "rgba(29, 78, 216, 0.25)",
    detail: {
      tag: "Unified Intelligence",
      headline: "Real-time executive dashboards & forecasts",
      description:
        "Instant visibility into order-to-cash velocity, operating margins, cash position, and department KPIs across all entities.",
      metrics: [
        { label: "Data Freshness", val: "Real-time" },
        { label: "Custom Dashboards", val: "Live" },
        { label: "Forecasting", val: "AI-ready" },
      ],
      outputBadge: "Closes the Operational Loop",
    },
  },
];

const PEOPLE_STAGES = [
  { id: "recruitment", step: "01", title: "Recruitment", desc: "Talent pipeline & ATS", icon: UserPlus },
  { id: "onboarding", step: "02", title: "Employee", desc: "Digital onboarding & records", icon: UserCheck },
  { id: "attendance", step: "03", title: "Attendance", desc: "Biometric & geofencing", icon: CalendarCheck },
  { id: "leave", step: "04", title: "Leave", desc: "Policy rules & approvals", icon: Clock },
  { id: "payroll", step: "05", title: "Payroll", desc: "Statutory tax & direct deposit", icon: Wallet },
  { id: "performance", step: "06", title: "Performance", desc: "Goals, reviews & appraisals", icon: Award },
];

export default function ConnectedWorkflow() {
  const [activeTab, setActiveTab] = useState<"operations" | "people">("operations");
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Continuous fast auto-cycle through stages (0.9s per step)
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % OPERATIONS_STAGES.length);
    }, 900);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const activeStage = OPERATIONS_STAGES[activeStepIndex];
  const ActiveIcon = activeStage.icon;

  return (
    <section className="py-[15px] bg-[#FAFBFD] relative overflow-hidden border-y border-slate-200/80" id="workflow">
      {/* Ambient background lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[340px] bg-gradient-to-b from-blue-100/40 via-sky-50/20 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-[10%] w-[500px] h-[300px] bg-indigo-50/30 blur-[90px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0F172A 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-[1280px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-3">
              One flow, from lead to report.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-xl">
              Every record passes through the same connected rail — data automatically transforms and updates across teams as work moves.
            </p>
          </motion.div>

          {/* Workflow Rail Switcher & Auto-play toggle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 shrink-0"
          >
            <div className="inline-flex p-1 bg-slate-200/70 rounded-xl border border-slate-300/60 shadow-2xs">
              <button
                type="button"
                onClick={() => setActiveTab("operations")}
                className={`px-3.5 py-1.5 rounded-lg text-[12.5px] font-bold transition-all cursor-pointer ${
                  activeTab === "operations"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Operations Flow (9 Steps)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("people")}
                className={`px-3.5 py-1.5 rounded-lg text-[12.5px] font-bold transition-all cursor-pointer ${
                  activeTab === "people"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                People & HR Flow
              </button>
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 1. MAIN INTERACTIVE PIPELINE RAIL                                        */}
        {/* ========================================================================= */}
        {activeTab === "operations" ? (
          <div className="bg-white rounded-[24px] border border-slate-200/90 p-5 sm:p-7 shadow-[0_12px_40px_rgba(15,23,42,0.05)] relative mb-5">
            {/* 9 Nodes Rail Container */}
            <div className="relative overflow-x-auto pb-4 pt-3 scrollbar-none select-none">
              {/* Dynamic Animated Connecting Wire with Energy Beam */}
              <div className="absolute top-[41px] left-[5%] right-[5%] h-[3px] bg-slate-100 rounded-full z-0 overflow-hidden pointer-events-none">
                {/* Active Progress Line */}
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 transition-all duration-200 ease-out"
                  style={{ width: `${((activeStepIndex + 0.5) / 9) * 100}%` }}
                />
                {/* Flowing Data Sparkle Energy Packet */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-transparent w-28 animate-[shimmer_0.8s_infinite]" />
              </div>

              {/* Steps Row */}
              <div className="flex items-start justify-between min-w-[860px] relative z-10 gap-2">
                {OPERATIONS_STAGES.map((stg, idx) => {
                  const Icon = stg.icon;
                  const isActive = activeStepIndex === idx;
                  const isPassed = idx < activeStepIndex;

                  return (
                    <button
                      key={stg.id}
                      type="button"
                      onClick={() => {
                        setActiveStepIndex(idx);
                        if (timerRef.current) clearInterval(timerRef.current);
                        timerRef.current = setInterval(() => {
                          setActiveStepIndex((prev) => (prev + 1) % OPERATIONS_STAGES.length);
                        }, 4200);
                      }}
                      className="group flex flex-col items-center text-center flex-1 focus:outline-none cursor-pointer"
                    >
                      {/* Node Circle Badge */}
                      <div className="relative mb-3">
                        {/* Glow halo when active */}
                        {isActive && (
                          <motion.div
                            layoutId="activeGlow"
                            className="absolute -inset-2.5 rounded-2xl bg-blue-500/15 blur-sm"
                            transition={{ duration: 0.3 }}
                          />
                        )}

                        <div
                          className={`w-[52px] h-[52px] rounded-[16px] flex flex-col items-center justify-center transition-all duration-300 relative border ${
                            isActive
                              ? "bg-slate-900 border-slate-900 text-white shadow-[0_10px_25px_-5px_rgba(15,23,42,0.35)] scale-110"
                              : isPassed
                              ? "bg-blue-50 border-blue-200/90 text-blue-600 shadow-xs hover:scale-105"
                              : "bg-white border-slate-200 text-slate-500 shadow-2xs hover:border-slate-300 hover:scale-105"
                          }`}
                        >
                          {/* Step Number Tag */}
                          <span
                            className={`text-[9.5px] font-mono font-bold leading-none mb-1 ${
                              isActive ? "text-cyan-300" : isPassed ? "text-blue-500" : "text-slate-400"
                            }`}
                          >
                            {stg.stepNumber}
                          </span>
                          <Icon
                            className={`w-4 h-4 ${
                              isActive ? "text-white stroke-[2.2]" : isPassed ? "text-blue-600" : "text-slate-600"
                            }`}
                          />
                        </div>
                      </div>

                      {/* Step Name */}
                      <strong
                        className={`text-[13.5px] tracking-tight block transition-colors ${
                          isActive
                            ? "text-slate-900 font-extrabold"
                            : isPassed
                            ? "text-slate-800 font-bold"
                            : "text-slate-600 font-semibold group-hover:text-slate-900"
                        }`}
                      >
                        {stg.title}
                      </strong>

                      {/* Subtitle */}
                      <span className="text-[10px] text-slate-600 tracking-tight mt-0.5 line-clamp-1">
                        {stg.subtitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ========================================================================= */}
            {/* ACTIVE STAGE DETAIL CALLOUT CARD (Live Real-Time Automation Preview)      */}
            {/* ========================================================================= */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-5 pt-5 border-t border-slate-100 bg-[#F8FAFC]/80 rounded-[18px] p-4.5 sm:p-6 border border-slate-200/70"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                  {/* Left info column */}
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100/80 text-blue-700 text-[11px] font-bold">
                        <Sparkles className="w-3 h-3 text-blue-600" />
                        {activeStage.detail.tag}
                      </span>
                      <span className="text-xs text-slate-600 font-medium">
                        Stage {activeStage.stepNumber} of 09
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2">
                      {activeStage.detail.headline}
                    </h3>
                    <p className="text-[13.5px] text-slate-600 leading-relaxed">
                      {activeStage.detail.description}
                    </p>
                  </div>

                  {/* Right metrics & next action column */}
                  <div className="lg:col-span-5 flex flex-col justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs">
                    <div className="grid grid-cols-3 gap-2 text-center divide-x divide-slate-100">
                      {activeStage.detail.metrics.map((m, i) => (
                        <div key={i} className="px-1">
                          <span className="text-[10px] text-slate-600 block uppercase tracking-wider font-semibold">
                            {m.label}
                          </span>
                          <strong className="text-[15px] font-extrabold text-slate-900 tracking-tight mt-0.5 block">
                            {m.val}
                          </strong>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs pt-2.5 border-t border-slate-100 mt-1">
                      <span className="text-emerald-600 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        {activeStage.detail.outputBadge}
                      </span>
                      <a
                        href="#contact"
                        className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-0.5"
                      >
                        Details <ChevronRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          /* ========================================================================= */
          /* 2. PEOPLE & HR FLOW VIEW                                                  */
          /* ========================================================================= */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-[24px] border border-slate-200/90 p-6 sm:p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)] relative mb-5"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold mb-1">
                  <UsersRound className="w-3.5 h-3.5" /> Synchronized People Operations
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">
                  Hire-to-Retire Employee Lifecycle on the Same Core Database
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {PEOPLE_STAGES.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="group bg-[#FAFBFD] hover:bg-white rounded-2xl border border-slate-200/80 p-4.5 flex flex-col justify-between shadow-2xs hover:shadow-md hover:border-purple-300 transition-all duration-300 cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-purple-600 transition-colors">
                          {item.step}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-purple-100/70 group-hover:bg-purple-600 text-purple-700 group-hover:text-white flex items-center justify-center transition-all duration-300">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                      </div>
                      <h4 className="text-[15px] font-bold text-slate-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[12px] text-slate-500 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] font-semibold text-purple-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Stage Ready <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* SUBTERRANEAN SYNCHRONIZED STRIP: Operations & People Connected             */}
        {/* ========================================================================= */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white rounded-[20px] p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-cyan-300 shrink-0">
              <Zap className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <strong className="text-[14px] font-bold text-white tracking-tight">
                  Continuous Data Rail
                </strong>
                <span className="px-2 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold border border-emerald-500/30">
                  Zero Data Silos
                </span>
              </div>
              <p className="text-[12px] text-slate-300 mt-0.5 leading-snug">
                When a sales order is confirmed, inventory allocates, vendor POs draft, and invoice ledgers queue automatically.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden lg:flex items-center gap-3 text-xs text-slate-400 pr-4 border-r border-slate-800">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Full Audit Trail
              </span>
              <span className="flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 text-cyan-400" /> Real-time Sync
              </span>
            </div>

            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              See Workflow In Action <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

