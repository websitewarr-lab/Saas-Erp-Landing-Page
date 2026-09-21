"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  CircleDollarSign,
  UsersRound,
  Target,
  ClipboardCheck,
  Boxes,
  Settings2,
  KanbanSquare,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface PlatformModule {
  id: string;
  title: string;
  watermark: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
}

const PLATFORM_MODULES: PlatformModule[] = [
  {
    id: "finance",
    title: "Finance Management",
    watermark: "FINANCIAL OPERATIONS",
    description: "Accounting, invoices, expenses, taxation and reporting in one unified ledger.",
    features: ["General ledger", "Invoices", "Expenses"],
    image: "/images/modules/finance.jpg",
    icon: CircleDollarSign,
    link: "/modules/accounting",
  },
  {
    id: "hr",
    title: "HR & Payroll",
    watermark: "PEOPLE OPERATIONS",
    description: "Keep employee records, attendance, leave and payroll in seamless sync.",
    features: ["Employee hub", "Attendance", "Payroll"],
    image: "/images/modules/hr_payroll.jpg",
    icon: UsersRound,
    link: "/modules/crm",
  },
  {
    id: "crm",
    title: "CRM & Sales",
    watermark: "SALES PIPELINE",
    description: "Turn leads into lasting customer relationships with a shared pipeline.",
    features: ["Leads", "Opportunities", "Sales orders"],
    image: "/images/modules/crm_sales.jpg",
    icon: Target,
    link: "/modules/crm",
  },
  {
    id: "sales",
    title: "Sales & Order Management",
    watermark: "ORDER FULFILLMENT",
    description: "Multi-channel quotations, sales orders, pricing rules, and invoicing.",
    features: ["Quotations", "Sales orders", "Fulfillment"],
    image: "/images/modules/crm_sales.jpg",
    icon: Target,
    link: "/modules/sales",
  },
  {
    id: "purchase",
    title: "Purchase Management",
    watermark: "PROCUREMENT & VENDORS",
    description: "Manage vendors, purchase requests, orders and approvals with ease.",
    features: ["Vendors", "Purchase orders", "Approvals"],
    image: "/images/modules/purchase.jpg",
    icon: ClipboardCheck,
    link: "/modules/purchase",
  },
  {
    id: "inventory",
    title: "Inventory Management",
    watermark: "WAREHOUSE & ASSETS",
    description: "See products, stock levels, warehouses and transfers as they happen.",
    features: ["Stock levels", "Warehouses", "Transfers"],
    image: "/images/modules/inventory.jpg",
    icon: Boxes,
    link: "/modules/inventory",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    watermark: "PRODUCTION & BOMS",
    description: "Plan production, manage BOMs and coordinate work orders from one view.",
    features: ["Production plans", "BOMs", "Work orders"],
    image: "/images/modules/manufacturing.jpg",
    icon: Settings2,
    link: "/modules/production",
  },
  {
    id: "accounting",
    title: "Accounting & Finance",
    watermark: "FINANCIAL OPERATIONS",
    description: "Accounting, invoices, expenses, taxation and reporting in one unified ledger.",
    features: ["General ledger", "Invoices", "Expenses"],
    image: "/images/modules/finance.jpg",
    icon: CircleDollarSign,
    link: "/modules/accounting",
  },
  {
    id: "hrms",
    title: "HRMS & Payroll",
    watermark: "PEOPLE OPERATIONS",
    description: "Keep employee records, attendance, leave and payroll in seamless sync.",
    features: ["Employee hub", "Attendance", "Payroll"],
    image: "/images/modules/hr_payroll.jpg",
    icon: UsersRound,
    link: "/modules/hrms",
  },
  {
    id: "projects",
    title: "Projects & Tasks",
    watermark: "COLLABORATION & MILESTONES",
    description: "Bring milestones, timesheets and team collaboration into the same flow.",
    features: ["Milestones", "Timesheets", "Collaboration"],
    image: "/images/modules/projects.jpg",
    icon: KanbanSquare,
    link: "/modules/project",
  },
  {
    id: "reports",
    title: "Reports & Analytics",
    watermark: "BUSINESS INTELLIGENCE",
    description: "Make decisions with dashboards, KPIs and reports built from your data.",
    features: ["Live dashboards", "KPIs", "Custom reports"],
    image: "/images/modules/analytics.jpg",
    icon: BarChart3,
    link: "/modules/accounting",
  },
];

export default function PlatformModulesShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  // Desktop Scroll handler
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -330 : 330;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Mobile Carousel Scroll Handlers
  const scrollMobileTo = (index: number) => {
    if (index < 0 || index >= PLATFORM_MODULES.length) return;
    setActiveMobileIndex(index);
    if (mobileScrollRef.current) {
      const container = mobileScrollRef.current;
      const child = container.children[index] as HTMLElement;
      if (child) {
        const scrollLeft = child.offsetLeft - (container.clientWidth - child.clientWidth) / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  };

  const scrollMobile = (direction: "left" | "right") => {
    const nextIndex =
      direction === "left"
        ? Math.max(0, activeMobileIndex - 1)
        : Math.min(PLATFORM_MODULES.length - 1, activeMobileIndex + 1);
    scrollMobileTo(nextIndex);
  };

  const handleMobileScroll = () => {
    if (mobileScrollRef.current) {
      const container = mobileScrollRef.current;
      const center = container.scrollLeft + container.clientWidth / 2;
      const children = Array.from(container.children) as HTMLElement[];
      let closestIdx = activeMobileIndex;
      let minDistance = Infinity;

      children.forEach((child, idx) => {
        const childCenter = child.offsetLeft + child.clientWidth / 2;
        const dist = Math.abs(childCenter - center);
        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = idx;
        }
      });

      if (closestIdx !== activeMobileIndex) {
        setActiveMobileIndex(closestIdx);
      }
    }
  };

  return (
    <section className="relative py-[15px] bg-white overflow-hidden" id="modules">
      {/* Ambient Backlight */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] pointer-events-none blur-[140px] opacity-40 bg-gradient-to-b from-blue-100 to-indigo-100"
      />
      <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* DESKTOP & TABLET VIEW (hidden md:block)                   */}
        {/* Preserves 100% of original 3D flip card deck layout      */}
        {/* ======================================================== */}
        <div className="hidden md:block">
          {/* Section Header */}
          <div className="relative mb-6 sm:mb-8">
            <div className="text-center max-w-3xl mx-auto px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                Our Platform Services
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
                Manage every core business function from one connected platform built for speed, governance, and scale.
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex justify-end items-center gap-2.5 mt-4 md:mt-0 md:absolute md:right-0 md:bottom-1">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous module"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
              >
                <ChevronLeft className="w-4 h-4 text-slate-700" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next module"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
              >
                <ChevronRight className="w-4 h-4 text-slate-700" />
              </button>
            </div>
          </div>

          {/* 8-Card 3D Center-Axis Rotation Flip Deck */}
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto py-4 px-2 sm:px-4 scrollbar-none snap-x snap-mandatory select-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PLATFORM_MODULES.map((mod) => {
              const Icon = mod.icon;

              return (
                <div
                  key={mod.id}
                  className="group shrink-0 snap-start w-[285px] sm:w-[305px] h-[460px] [perspective:1000px] cursor-pointer"
                >
                  {/* 3D Rotatable Card Inner Wrapper */}
                  <div className="relative w-full h-full duration-700 transition-transform [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    
                    {/* FRONT SIDE */}
                    <div className="absolute inset-0 w-full h-full rounded-[22px] overflow-hidden border border-slate-200/80 shadow-md flex flex-col justify-between [backface-visibility:hidden] bg-slate-900">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={mod.image}
                        alt={mod.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#06080E] via-[#06080E]/60 to-black/35" />

                      <div className="relative z-10 p-5 pt-6 text-center select-none pointer-events-none">
                        <span className="text-[10px] font-bold tracking-[0.22em] text-white/40 uppercase font-sans">
                          {mod.watermark}
                        </span>
                      </div>

                      <div className="relative z-10 p-5 pb-6">
                        <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white mb-3.5 shadow-xs">
                          <Icon className="w-5 h-5 text-white" />
                        </div>

                        <h3 className="text-[19px] font-extrabold text-white tracking-tight leading-snug mb-1.5">
                          {mod.title}
                        </h3>

                        <p className="text-[12.5px] text-slate-300 line-clamp-2 leading-relaxed font-normal mb-3">
                          {mod.description}
                        </p>

                        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-300 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                          <Sparkles className="w-3 h-3 text-blue-400" />
                          <span>Hover to flip card</span>
                        </div>
                      </div>
                    </div>

                    {/* BACK SIDE */}
                    <div className="absolute inset-0 w-full h-full rounded-[22px] bg-white border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-[0_16px_40px_-8px_rgba(15,23,42,0.16)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div>
                        <div className="w-10 h-10 rounded-[10px] bg-slate-900 text-white flex items-center justify-center mb-4 shadow-xs">
                          <Icon className="w-5 h-5 text-white stroke-[2]" />
                        </div>

                        <h3 className="text-[20px] font-extrabold text-slate-950 tracking-tight leading-snug mb-3">
                          {mod.title}
                        </h3>

                        <p className="text-[13.5px] text-slate-600 leading-relaxed mb-5 font-normal">
                          {mod.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {mod.features.map((feature) => (
                            <span
                              key={feature}
                              className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/70"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <Link
                          href={mod.link}
                          className="relative group/btn inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-950 text-white text-[12.5px] font-bold shadow-[0_4px_18px_rgba(37,99,235,0.35)] hover:bg-blue-600 hover:shadow-[0_6px_22px_rgba(37,99,235,0.55)] transition-all duration-200 hover:scale-[1.03]"
                        >
                          <span>Explore Details</span>
                          <ChevronRight className="w-3.5 h-3.5 text-white/90 group-hover/btn:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-6 border-t border-slate-100 mt-4">
            <Link
              href="/#showcase"
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              Explore all 8 modules <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ======================================================== */}
        {/* SMARTPHONE SLIDER VIEW (block md:hidden)                  */}
        {/* Matches reference screenshot design with center card,     */}
        {/* side peek preview, top controls & bottom dots indicator  */}
        {/* ======================================================== */}
        <div className="block md:hidden">
          {/* Header & Controls */}
          <div className="flex items-center justify-between px-1 mb-4">
            <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">
              Our Platform Services
            </h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollMobile("left")}
                aria-label="Previous card"
                className="w-8.5 h-8.5 rounded-full bg-white border border-slate-200 text-slate-700 shadow-xs flex items-center justify-center active:scale-95 transition-transform cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 text-slate-700" />
              </button>
              <button
                type="button"
                onClick={() => scrollMobile("right")}
                aria-label="Next card"
                className="w-8.5 h-8.5 rounded-full bg-white border border-slate-200 text-slate-700 shadow-xs flex items-center justify-center active:scale-95 transition-transform cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 text-slate-700" />
              </button>
            </div>
          </div>

          {/* Carousel Track with Left/Right Card Peek */}
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="flex items-stretch gap-4 overflow-x-auto px-[6vw] py-3 scrollbar-none snap-x snap-mandatory select-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PLATFORM_MODULES.map((mod, index) => {
              const Icon = mod.icon;
              const isActive = index === activeMobileIndex;

              return (
                <div
                  key={`mobile-${mod.id}-${index}`}
                  onClick={() => scrollMobileTo(index)}
                  className={`shrink-0 snap-center w-[82vw] max-w-[310px] rounded-[26px] bg-white border transition-all duration-300 flex flex-col justify-between p-4.5 cursor-pointer ${
                    isActive
                      ? "border-blue-500/40 shadow-[0_12px_32px_-6px_rgba(37,99,235,0.18)] scale-100"
                      : "border-slate-200/80 shadow-xs scale-[0.96] opacity-80"
                  }`}
                >
                  <div>
                    {/* Top Preview Image */}
                    <div className="relative h-40 w-full rounded-[18px] overflow-hidden mb-3.5 border border-slate-100 shadow-xs bg-slate-900">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={mod.image}
                        alt={mod.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Category Watermark Tag */}
                    <span className="text-[10px] font-extrabold tracking-widest text-blue-600 uppercase block mb-1">
                      {mod.watermark}
                    </span>

                    {/* Title */}
                    <h3 className="text-[18px] font-extrabold text-slate-900 leading-snug tracking-tight mb-2">
                      {mod.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[12.5px] text-slate-600 leading-relaxed line-clamp-2 mb-3.5">
                      {mod.description}
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {mod.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-[10.5px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/60"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <Link
                    href={mod.link}
                    className="inline-flex items-center justify-between w-full px-4.5 py-2.5 rounded-[14px] bg-slate-50 border border-slate-200/90 text-slate-900 font-bold text-xs hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-xs group cursor-pointer"
                  >
                    <span>Explore Module</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Bottom Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {PLATFORM_MODULES.map((mod, i) => (
              <button
                key={`dot-${mod.id}-${i}`}
                type="button"
                onClick={() => scrollMobileTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === activeMobileIndex
                    ? "w-6 h-2 bg-blue-600"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
