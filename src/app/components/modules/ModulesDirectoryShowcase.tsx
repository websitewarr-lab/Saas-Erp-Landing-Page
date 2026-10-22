"use client";

import { useState, type ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { PopupCtaButton } from "../popup-cta";
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
  ChevronDown,
  Link2,
  TrendingUp,
  Layers3,
  ShieldCheck,
} from "lucide-react";

interface ModuleDirectoryItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  watermark: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  colorGradient: string;
  shadowColor: string;
  bgLight: string;
  textColor: string;
  features: [string, string, string];
  orbitSummary: string;
}

const MODULES_DIRECTORY: ModuleDirectoryItem[] = [
  {
    id: "hrms",
    slug: "hrms",
    name: "HRMS & Payroll",
    tagline: "People Operations & Compliance",
    watermark: "PEOPLE OPERATIONS",
    description: "Employee lifecycle, biometric attendance tracking, leave workflows, and statutory Indian payroll in sync.",
    icon: UsersRound,
    colorGradient: "from-purple-500 to-indigo-600",
    shadowColor: "shadow-purple-500/25",
    bgLight: "bg-purple-50 border-purple-200/70 text-purple-600",
    textColor: "text-purple-600",
    features: [
      "Automated monthly payroll, TDS, PF & ESI generation",
      "Biometric attendance sync & multi-level leave approvals",
      "Self-service employee portal & digital document vault",
    ],
    orbitSummary: "HRMS & Payroll: Employee lifecycle, biometric tracking & automated tax compliance",
  },
  {
    id: "sales",
    slug: "sales",
    name: "Sales & Orders",
    tagline: "Quotations, Orders & Fulfillment",
    watermark: "ORDERS & BILLING",
    description: "Multi-channel quotations, approval workflows, dynamic pricing rules, stock allocation, and GST billing.",
    icon: ShoppingCart,
    colorGradient: "from-sky-500 to-blue-600",
    shadowColor: "shadow-blue-500/25",
    bgLight: "bg-sky-50 border-sky-200/70 text-sky-600",
    textColor: "text-sky-600",
    features: [
      "Dynamic tiered rate matrix & multi-currency price lists",
      "Real-time stock reservation & dispatch note generation",
      "1-click proforma conversion to GST tax invoicing",
    ],
    orbitSummary: "Sales & Orders: Quotations, dynamic price rules & instant fulfillment sync",
  },
  {
    id: "inventory",
    slug: "inventory",
    name: "Inventory Management",
    tagline: "Multi-Warehouse Stock Ledger",
    watermark: "STOCK & WAREHOUSE",
    description: "Multi-location warehouse control, real-time stock ledger, serial/batch traceability, and barcode scans.",
    icon: Boxes,
    colorGradient: "from-emerald-500 to-teal-600",
    shadowColor: "shadow-emerald-500/25",
    bgLight: "bg-emerald-50 border-emerald-200/70 text-emerald-600",
    textColor: "text-emerald-600",
    features: [
      "Real-time serial, batch & expiry date traceability",
      "Automated reorder triggers & safety stock alerts",
      "Mobile barcode scanning & cycle count audit tools",
    ],
    orbitSummary: "Inventory: Multi-warehouse stock ledger, batch tracking & barcode audits",
  },
  {
    id: "purchase",
    slug: "purchase",
    name: "Purchase & Procurement",
    tagline: "Vendor Management & 3-Way Match",
    watermark: "SUPPLY CHAIN & AP",
    description: "Automated requisitions, RFQ comparisons, vendor rating matrix, and automated 3-way invoice matching.",
    icon: Receipt,
    colorGradient: "from-amber-500 to-orange-600",
    shadowColor: "shadow-amber-500/25",
    bgLight: "bg-amber-50 border-amber-200/70 text-amber-600",
    textColor: "text-amber-600",
    features: [
      "Requisition to PO workflows with threshold approvals",
      "Automated 3-way matching (PO, GRN & Vendor Invoice)",
      "Vendor performance rating & historical rate audits",
    ],
    orbitSummary: "Purchase: Automated PO workflows, vendor ratings & 3-way invoice matching",
  },
  {
    id: "project",
    slug: "project",
    name: "Project Management",
    tagline: "Milestones, Timesheets & Billing",
    watermark: "COLLABORATION & TASKS",
    description: "Gantt schedules, resource capacity planning, timesheet tracking, and project profitability analytics.",
    icon: FolderKanban,
    colorGradient: "from-pink-500 to-rose-600",
    shadowColor: "shadow-pink-500/25",
    bgLight: "bg-rose-50 border-rose-200/70 text-rose-600",
    textColor: "text-rose-600",
    features: [
      "Interactive Gantt & Kanban task scheduling boards",
      "Real-time employee timesheets & resource allocation",
      "Milestone billing & live project margin tracking",
    ],
    orbitSummary: "Projects: Milestones, live timesheets, Gantt boards & project costing",
  },
  {
    id: "accounting",
    slug: "accounting",
    name: "Accounting & Finance",
    tagline: "Automated General Ledger & MIS",
    watermark: "FINANCE & GL",
    description: "Automated double-entry GL postings, bank reconciliations, multi-currency handling, and live MIS reports.",
    icon: BarChart3,
    colorGradient: "from-cyan-500 to-[#006fc9]",
    shadowColor: "shadow-blue-500/25",
    bgLight: "bg-blue-50 border-blue-200/70 text-[#006fc9]",
    textColor: "text-[#006fc9]",
    features: [
      "Automated double-entry GL posting from all operational modules",
      "Smart bank feed reconciliation & auto-matching rules",
      "Real-time P&L, Balance Sheet, and cash flow forecasting",
    ],
    orbitSummary: "Finance: Automated double-entry GL postings, bank reconciliations & real-time MIS",
  },
  {
    id: "production",
    slug: "production",
    name: "Production Management",
    tagline: "Manufacturing & MRP Engine",
    watermark: "SHOP FLOOR & BOM",
    description: "Multi-level Bill of Materials (BOM), Material Requirements Planning (MRP), work orders, and shop floor tracking.",
    icon: Factory,
    colorGradient: "from-teal-500 to-emerald-600",
    shadowColor: "shadow-teal-500/25",
    bgLight: "bg-teal-50 border-teal-200/70 text-teal-600",
    textColor: "text-teal-600",
    features: [
      "Multi-level Bill of Materials (BOM) with scrap factor calculation",
      "MRP engine linking sales demand directly to shop floor orders",
      "Workstation capacity scheduling & live routing tracking",
    ],
    orbitSummary: "Production: Multi-level BOM, MRP calculations & live workstation tracking",
  },
  {
    id: "crm",
    slug: "crm",
    name: "CRM & Pipeline",
    tagline: "360° Customer Relationship Mgmt",
    watermark: "SALES PIPELINE",
    description: "360-degree customer pipeline, AI lead scoring, WhatsApp integration, and automated deal forecasting.",
    icon: Target,
    colorGradient: "from-orange-500 to-red-500",
    shadowColor: "shadow-orange-500/25",
    bgLight: "bg-orange-50 border-orange-200/70 text-orange-600",
    textColor: "text-orange-600",
    features: [
      "AI predictive lead scoring & auto-territory distribution",
      "Omnichannel sync for WhatsApp, email threads & phone calls",
      "1-click proposal conversion to approved sales orders",
    ],
    orbitSummary: "CRM: 360° lead pipeline, forecasting, WhatsApp sync & deal stages",
  },
];

export default function ModulesDirectoryShowcase() {
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);

  const handleOrbitHover = (moduleItem: ModuleDirectoryItem) => {
    setActiveHighlight(moduleItem.slug);
  };

  const handleOrbitLeave = () => {
    setActiveHighlight(null);
  };

  const scrollToCard = (slug: string) => {
    const el = document.getElementById(`module-card-${slug}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setActiveHighlight(slug);
      setTimeout(() => {
        setActiveHighlight(null);
      }, 2500);
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* ======================================================================= */}
      {/* BACKGROUND AMBIENT MESH & SUBTLE ORGANIC WAVES                          */}
      {/* ======================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none">
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute top-0 right-1/4 w-[680px] h-[520px] bg-sky-200/35 rounded-full blur-[130px]" />
        <div className="absolute top-24 left-10 w-[540px] h-[460px] bg-blue-100/40 rounded-full blur-[110px]" />
        
        {/* Subtle Wave Path Background */}
        <svg
          className="absolute top-12 left-0 w-full h-[620px] opacity-35"
          viewBox="0 0 1440 620"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M-80 340 C 340 480, 720 140, 1520 300 L 1520 620 L -80 620 Z"
            fill="url(#modulesWaveGrad)"
          />
          <path
            d="M-80 200 C 400 60, 860 410, 1520 180"
            stroke="#bce0f8"
            strokeWidth="1.5"
            strokeOpacity="0.65"
            fill="none"
          />
          <defs>
            <linearGradient id="modulesWaveGrad" x1="720" y1="140" x2="720" y2="620" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e0eefb" stopOpacity="0.65" />
              <stop offset="1" stopColor="#f8faff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ======================================================================= */}
      {/* SECTION 1: HERO SECTION WITH INTERACTIVE 8-NODE ORBIT GRAPHIC          */}
      {/* ======================================================================= */}
      <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Value Copy & Interactive Status Pill */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            

            {/* Display H1 Heading */}
            <h1 className="font-sans font-extrabold text-[36px] sm:text-[46px] lg:text-[54px] text-[#0F172A] tracking-[-0.03em] leading-[1.12]">
              One ERP,<br className="hidden sm:inline" />{" "}
              <span className="bg-gradient-to-r from-[#006fc9] via-[#0082dc] to-[#005fae] bg-clip-text text-transparent">
                every department.
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-slate-600 text-[15px] sm:text-[16.5px] leading-relaxed max-w-xl font-normal">
              Explore Mossie ERP&apos;s suite of 8 deeply integrated enterprise applications. Connect your core business operations under one calm, intelligent platform engineered for speed, visibility, and control.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <PopupCtaButton
                intent="demo"
                className="btn-primary-erp px-7 py-3 rounded-full bg-[#006fc9] hover:bg-[#005fae] text-white text-[14px] font-bold shadow-md shadow-[#006fc9]/25 transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Book a Live Demo</span>
                <ArrowRight className="w-4 h-4" />
              </PopupCtaButton>

              <a
                href="#modules-grid"
                className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-[14px] font-bold border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Explore All 8 Modules</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Animated Orbit System Graphic */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="orbit-system relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center select-none">
              
              {/* Layer 1: Ambient Pulsing Glow Halo */}
              <div className="absolute inset-4 rounded-full bg-sky-200/40 blur-2xl animate-pulse-halo pointer-events-none" />

              {/* Layer 2: Outer Dashed Orbit Ring (Slow counter-rotation) */}
              <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full border-[1.5px] border-dashed border-slate-300/70 animate-ring-reverse pointer-events-none" />

              {/* Layer 3: Middle Soft Track with Glowing Data Orbiters */}
              <div className="absolute w-44 h-44 sm:w-48 sm:h-48 rounded-full border border-slate-200 bg-radial from-white/90 to-sky-50/40 shadow-inner animate-ring-reverse pointer-events-none">
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#006fc9] shadow-xs shadow-[#006fc9]" />
                <span className="absolute bottom-4 -right-0.5 w-2 h-2 rounded-full bg-blue-600 shadow-xs shadow-blue-600" />
                <span className="absolute bottom-5 -left-0.5 w-1.5 h-1.5 rounded-full bg-teal-400" />
              </div>

              {/* Layer 4: Center Stationary Brand Logo Hub */}
              <div
                className="relative z-20 w-24 h-24 rounded-full bg-white shadow-xl shadow-sky-900/10 border border-slate-200/80 flex flex-col items-center justify-center group cursor-pointer transition-transform duration-300 hover:scale-105"
                title="Mossie ERP — Calm, Unified Platform"
              >
                <Image
                  src="/images/logo/mossierplogo.webp"
                  alt="Mossie ERP"
                  width={52}
                  height={34}
                  priority
                  className="h-7 w-auto object-contain transition-transform group-hover:scale-105"
                />
                <span className="text-[9.5px] font-extrabold text-slate-900 tracking-tight leading-none mt-1">
                  Mossie <span className="text-[#006fc9]">ERP</span>
                </span>
              </div>

              {/* Layer 5: Rotating Orbit Track with 8 Interactive Nodes */}
              <div className="absolute inset-0 animate-orbit-cw">
                
                {/* 1. Top: HRMS & Payroll (Purple) */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <div
                    onMouseEnter={() => handleOrbitHover(MODULES_DIRECTORY[0])}
                    onMouseLeave={handleOrbitLeave}
                    onClick={() => scrollToCard("hrms")}
                    className="animate-orbit-ccw orbit-node w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/30 flex items-center justify-center ring-4 ring-white/90 cursor-pointer"
                    title="HRMS & Payroll"
                  >
                    <UsersRound className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* 2. Top-Right: Sales & Orders (Sky/Blue) */}
                <div className="absolute top-7 right-5">
                  <div
                    onMouseEnter={() => handleOrbitHover(MODULES_DIRECTORY[1])}
                    onMouseLeave={handleOrbitLeave}
                    onClick={() => scrollToCard("sales")}
                    className="animate-orbit-ccw orbit-node w-11 h-11 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-lg shadow-blue-500/30 flex items-center justify-center ring-4 ring-white/90 cursor-pointer"
                    title="Sales & Orders"
                  >
                    <ShoppingCart className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* 3. Right: Inventory Management (Emerald) */}
                <div className="absolute top-1/2 -translate-y-1/2 -right-2">
                  <div
                    onMouseEnter={() => handleOrbitHover(MODULES_DIRECTORY[2])}
                    onMouseLeave={handleOrbitLeave}
                    onClick={() => scrollToCard("inventory")}
                    className="animate-orbit-ccw orbit-node w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-white shadow-lg shadow-emerald-500/30 flex items-center justify-center ring-4 ring-white/90 cursor-pointer"
                    title="Inventory Management"
                  >
                    <Boxes className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* 4. Bottom-Right: Purchase & Procurement (Amber) */}
                <div className="absolute bottom-7 right-5">
                  <div
                    onMouseEnter={() => handleOrbitHover(MODULES_DIRECTORY[3])}
                    onMouseLeave={handleOrbitLeave}
                    onClick={() => scrollToCard("purchase")}
                    className="animate-orbit-ccw orbit-node w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/30 flex items-center justify-center ring-4 ring-white/90 cursor-pointer"
                    title="Purchase & Procurement"
                  >
                    <Receipt className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* 5. Bottom: Project Management (Pink/Rose) */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                  <div
                    onMouseEnter={() => handleOrbitHover(MODULES_DIRECTORY[4])}
                    onMouseLeave={handleOrbitLeave}
                    onClick={() => scrollToCard("project")}
                    className="animate-orbit-ccw orbit-node w-11 h-11 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30 flex items-center justify-center ring-4 ring-white/90 cursor-pointer"
                    title="Project Management"
                  >
                    <FolderKanban className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* 6. Bottom-Left: Accounting & Finance (Cyan/Brand Accent) */}
                <div className="absolute bottom-7 left-5">
                  <div
                    onMouseEnter={() => handleOrbitHover(MODULES_DIRECTORY[5])}
                    onMouseLeave={handleOrbitLeave}
                    onClick={() => scrollToCard("accounting")}
                    className="animate-orbit-ccw orbit-node w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-[#006fc9] text-white shadow-lg shadow-cyan-500/30 flex items-center justify-center ring-4 ring-white/90 cursor-pointer"
                    title="Accounting & Finance"
                  >
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* 7. Left: Production Management (Teal/Emerald) */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-2">
                  <div
                    onMouseEnter={() => handleOrbitHover(MODULES_DIRECTORY[6])}
                    onMouseLeave={handleOrbitLeave}
                    onClick={() => scrollToCard("production")}
                    className="animate-orbit-ccw orbit-node w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-lg shadow-teal-500/30 flex items-center justify-center ring-4 ring-white/90 cursor-pointer"
                    title="Production Management"
                  >
                    <Factory className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* 8. Top-Left: CRM & Pipeline (Orange/Red) */}
                <div className="absolute top-7 left-5">
                  <div
                    onMouseEnter={() => handleOrbitHover(MODULES_DIRECTORY[7])}
                    onMouseLeave={handleOrbitLeave}
                    onClick={() => scrollToCard("crm")}
                    className="animate-orbit-ccw orbit-node w-11 h-11 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-lg shadow-orange-500/30 flex items-center justify-center ring-4 ring-white/90 cursor-pointer"
                    title="CRM & Pipeline"
                  >
                    <Target className="w-5 h-5 text-white" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* 4 Mini Feature Pillars Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/70 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-start gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#006fc9] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#006fc9] group-hover:text-white transition-colors">
              <Link2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-slate-800">Fully Integrated</h4>
              <p className="text-[11px] text-slate-500 leading-tight">Shared database & live real-time sync</p>
            </div>
          </div>

          <div className="flex items-start gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-700 group-hover:text-white transition-colors">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-slate-800">Scalability Ready</h4>
              <p className="text-[11px] text-slate-500 leading-tight">Engineered for high transaction loads</p>
            </div>
          </div>

          <div className="flex items-start gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-indigo-700 group-hover:text-white transition-colors">
              <Layers3 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-slate-800">Modular Expansion</h4>
              <p className="text-[11px] text-slate-500 leading-tight">Plug-and-play capability activation</p>
            </div>
          </div>

          <div className="flex items-start gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-teal-700 group-hover:text-white transition-colors">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-slate-800">Secure & Compliant</h4>
              <p className="text-[11px] text-slate-500 leading-tight">Granular RBAC & immutable audit logs</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* SECTION 2: 8 ENTERPRISE MODULES GRID                                    */}
      {/* ======================================================================= */}
      <section id="modules-grid" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          
          <h2 className="font-sans font-extrabold text-[28px] sm:text-[36px] text-[#0F172A] tracking-[-0.025em] leading-[1.2]">
            Explore All 8 Integrated Business Modules
          </h2>
              
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODULES_DIRECTORY.map((mod) => {
            const Icon = mod.icon;
            const isHighlighted = activeHighlight === mod.slug;

            return (
              <div
                id={`module-card-${mod.slug}`}
                key={`module-card-${mod.slug}`}
                className={`rounded-2xl p-6 bg-white/95 backdrop-blur-md border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                  isHighlighted
                    ? "border-[#006fc9] ring-2 ring-[#006fc9] shadow-xl shadow-[#006fc9]/15 -translate-y-1.5"
                    : "border-slate-200/80 shadow-xs hover:border-[#006fc9]/60 hover:shadow-xl hover:-translate-y-1.5"
                }`}
              >
                <div>
                  {/* Card Header: Icon, Watermark & Direct Arrow Link */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${mod.colorGradient} text-white shadow-md ${mod.shadowColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100/90 text-slate-600 border border-slate-200/70 text-[9.5px] font-extrabold tracking-wider uppercase">
                      {mod.watermark}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-sans font-bold text-[18px] text-[#0F172A] group-hover:text-[#006fc9] transition-colors leading-snug">
                    {mod.name}
                  </h3>
                  <p className="text-[12px] text-slate-500 font-medium mb-3">
                    {mod.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-[12.5px] text-slate-600 leading-relaxed font-normal mb-4">
                    {mod.description}
                  </p>

                  <hr className="my-3.5 border-slate-100" />

                  {/* 3 Core Bullet Capabilities */}
                  <ul className="space-y-2 text-[11.5px] text-slate-700 font-medium">
                    {mod.features.map((feat, fIdx) => (
                      <li key={`${mod.slug}-bullet-${fIdx}`} className="flex items-start gap-2 leading-snug">
                        <Check className="w-3.5 h-3.5 text-[#006fc9] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-5 mt-4 border-t border-slate-100">
                  <Link
                    href={`/modules/${mod.slug}`}
                    className="inline-flex items-center justify-between w-full px-4.5 py-2.5 rounded-full bg-[#006fc9]/10 hover:bg-[#006fc9] text-[#006fc9] hover:text-white font-bold text-xs transition-all duration-200 group/btn"
                  >
                    <span>Explore Features</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ======================================================================= */}
      {/* SECTION 5: HIGH-IMPACT ENTERPRISE CTA BANNER                            */}
      {/* ======================================================================= */}
      <section id="cta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="rounded-3xl p-8 sm:p-12 text-white shadow-2xl shadow-[#006fc9]/25 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden bg-gradient-to-r from-[#004e8f] via-[#006fc9] to-[#3b9fe5]">
          {/* Ambient Lighting Gradients */}
          <div className="absolute -right-12 -top-24 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute left-1/3 -bottom-24 w-80 h-80 rounded-full bg-sky-300/15 blur-2xl pointer-events-none" />

          {/* Copy */}
          <div className="space-y-3 max-w-xl relative z-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-sky-200">
              READY TO GET STARTED?
            </span>
            <h2 className="font-sans font-extrabold text-[26px] sm:text-[34px] tracking-tight leading-tight !text-white text-white">
              Streamline your business with Mossie ERP.
            </h2>
            <p className="text-xs sm:text-[14.5px] text-sky-100/90 leading-relaxed">
              Connect your team with a personalized walkthrough tailored to your industry, processes, and corporate workflows.
            </p>
          </div>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 shrink-0 relative z-10">
            <PopupCtaButton
              intent="demo"
              className="bg-white hover:bg-slate-50 text-[#006fc9] text-xs font-bold px-6 py-3.5 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Book a Live Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </PopupCtaButton>

            <PopupCtaButton
              intent="trial"
              className="bg-white/10 hover:bg-white/20 border border-white/35 text-white text-xs font-bold px-6 py-3.5 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Start 14-Day Free Sandbox</span>
            </PopupCtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}
