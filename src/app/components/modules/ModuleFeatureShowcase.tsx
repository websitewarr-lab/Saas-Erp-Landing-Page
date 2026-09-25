"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  UserCheck,
  UserPlus,
  Filter,
  Users,
  MessageSquare,
  BarChart3,
  Settings2,
  Smartphone,
  Check,
  ArrowRight,
  Search,
  Bell,
  MoreVertical,
  ChevronRight,
  Calendar,
  Clock,
  Boxes,
  ShoppingCart,
  Truck,
  Factory,
  ShieldCheck,
  Layers,
  FolderKanban,
  CheckSquare,
  Target,
  BookOpen,
  Award,
  CreditCard,
  RefreshCw,
  GitCompare,
  FileSpreadsheet,
  FileText,
  Building2,
  DollarSign,
  ReceiptText,
} from "lucide-react";
import { MODULE_SHOWCASE_CONFIGS, ShowcaseFeatureItem } from "./moduleShowcaseData";

// Icon mapping helper
const SHOWCASE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  UserCheck,
  UserPlus,
  Filter,
  Users,
  MessageSquare,
  BarChart3,
  Settings2,
  Smartphone,
  Check,
  ArrowRight,
  Search,
  Bell,
  MoreVertical,
  ChevronRight,
  Calendar,
  Clock,
  Boxes,
  ShoppingCart,
  Truck,
  Factory,
  ShieldCheck,
  Layers,
  FolderKanban,
  CheckSquare,
  Target,
  BookOpen,
  Award,
  CreditCard,
  RefreshCw,
  GitCompare,
  FileSpreadsheet,
  FileText,
  Building2,
  DollarSign,
  ReceiptText,
};

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const IconComp = SHOWCASE_ICONS[name] || Check;
  return <IconComp className={className || "w-4 h-4"} />;
}

// Mini Bar Chart Component for Metric 1
function MiniBarChart({ active }: { active?: boolean }) {
  const heights = [24, 38, 48, 65, 52, 78, 100];
  return (
    <div className="flex items-end gap-1.5 h-10 w-full pt-1">
      {heights.map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-xs transition-all duration-500 ${
            active || i === heights.length - 1
              ? "bg-[#1677FF]"
              : "bg-blue-200/90"
          }`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

// Mini Wave Sparkline for Metric 2
function MiniWaveChart() {
  return (
    <div className="h-10 w-full relative overflow-visible pt-1">
      <svg className="w-full h-full overflow-visible" viewBox="0 0 140 40" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveSparkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1677FF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1677FF" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <path
          d="M 0 32 Q 25 10, 50 28 T 100 8 T 140 16 L 140 40 L 0 40 Z"
          fill="url(#waveSparkGrad)"
        />
        <path
          d="M 0 32 Q 25 10, 50 28 T 100 8 T 140 16"
          fill="none"
          stroke="#1677FF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="140" cy="16" r="3" fill="#1677FF" stroke="#FFFFFF" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

// Colored status badge helper for Live Cards
function StatusBadge({ status, tone }: { status: string; tone: string }) {
  const toneMap: Record<string, string> = {
    amber: "bg-amber-50 text-amber-700 border-amber-200/80",
    green: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    orange: "bg-orange-50 text-orange-700 border-orange-200/80",
    blue: "bg-blue-50 text-blue-700 border-blue-200/80",
    purple: "bg-purple-50 text-purple-700 border-purple-200/80",
    red: "bg-rose-50 text-rose-700 border-rose-200/80",
  };
  const toneClass = toneMap[tone] || toneMap.green;

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${toneClass} shrink-0`}>
      {status}
    </span>
  );
}

export default function ModuleFeatureShowcase({ moduleSlug }: { moduleSlug: string }) {
  const config = MODULE_SHOWCASE_CONFIGS[moduleSlug] || MODULE_SHOWCASE_CONFIGS.crm;
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const activeFeature: ShowcaseFeatureItem =
    config.features[activeFeatureIndex] || config.features[0];

  return (
    <section
      id="features"
      className="py-12 sm:py-16 lg:py-20 bg-[#F7FAFF] border-b border-slate-200/70 overflow-hidden relative select-none"
    >
      {/* Subtle Ambient Background Lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[300px] bg-sky-100/35 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* ========================================================================= */}
        {/* 1. TOP NAVIGATION BAR (Exact match to Reference Screenshot)                */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12 pb-6 border-b border-slate-200/80">
          {/* Left: Dark Module Number Box + Module Name Badge */}
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-xl bg-[#2A374A] text-white flex items-center justify-center font-bold text-2xl shadow-sm tracking-tight">
              {config.moduleNumber}
            </div>
            <div className="px-5 py-2.5 rounded-xl bg-[#2A374A] text-white font-bold text-base shadow-sm tracking-tight">
              {config.moduleName}
            </div>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            <a
              href="#overview"
              className="text-[#0B1B3A] font-bold underline underline-offset-8 decoration-2 decoration-[#1677FF]"
            >
              Overview
            </a>
            <a href="#features" className="text-slate-500 hover:text-slate-900 transition-colors">
              Features
            </a>
            <a href="#benefits" className="text-slate-500 hover:text-slate-900 transition-colors">
              Benefits
            </a>
            <a href="#integrations" className="text-slate-500 hover:text-slate-900 transition-colors">
              Integrations
            </a>
            <a href="#case-studies" className="text-slate-500 hover:text-slate-900 transition-colors">
              Case Studies
            </a>
          </div>

          {/* Right: Get Started CTA Button */}
          <div>
            <Link
              href="/#contact"
              className="px-6 py-2.5 rounded-full bg-[#1677FF] hover:bg-blue-600 text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all inline-flex items-center gap-1.5 active:scale-98"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. HERO / INTRO HEADING AREA                                              */}
        {/* ========================================================================= */}
        <div className="text-left mb-8 sm:mb-10 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-[-0.035em] leading-[1.12] mb-3 text-[#0B1B3A]">
            {config.titleLine1} <br />
            <span className="text-[#1677FF]">{config.titleLine2}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {config.subtitleHighlight && config.subtitle?.includes(config.subtitleHighlight) ? (
              <>
                {config.subtitle.split(config.subtitleHighlight)[0]}
                <span className="text-[#1677FF] font-semibold">{config.subtitleHighlight}</span>
                {config.subtitle.split(config.subtitleHighlight)[1]}
              </>
            ) : (
              config.subtitle
            )}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 3. THREE-PART INTERACTIVE SHOWCASE LAYOUT                                  */}
        {/* [Left Feature Nav] [Center Detail Card] [Right ERP Preview + Floating Card]*/}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 xl:gap-6 items-stretch">
          
          {/* --------------------------------------------------------------------- */}
          {/* COLUMN A: LEFT FEATURE NAVIGATION (Vertical Menu)                      */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-3 flex flex-col gap-1.5 justify-start">
            {config.features.map((feature, idx) => {
              const isActive = idx === activeFeatureIndex;
              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveFeatureIndex(idx)}
                  className={`w-full text-left px-3.5 py-3 rounded-xl transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-[#EAF4FF] border-l-4 border-[#1677FF] text-[#1677FF] shadow-xs font-bold"
                      : "bg-transparent hover:bg-white text-slate-700 font-medium border-l-4 border-transparent hover:shadow-2xs"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#1677FF] text-white shadow-2xs"
                          : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-[#1677FF]"
                      }`}
                    >
                      <DynamicIcon name={feature.iconName} className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold truncate tracking-tight">
                      {feature.label}
                    </span>
                  </div>

                  {isActive ? (
                    <ChevronRight className="w-4 h-4 text-[#1677FF] shrink-0" />
                  ) : (
                    <span className="w-4 h-4 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* COLUMN B: CENTER FEATURE INFORMATION CARD                             */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="bg-white rounded-[24px] p-6 sm:p-7 shadow-[0_12px_36px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between h-full min-h-[380px] transition-all duration-300">
              <div>
                <h3 className="text-2xl font-black text-[#0B1B3A] tracking-tight leading-snug mb-2.5">
                  {activeFeature.detailTitle}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {activeFeature.detailDescription}
                </p>

                {/* 4 Checkmark Bullets with Solid Blue Circles */}
                <div className="space-y-3.5">
                  {activeFeature.detailBullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#1677FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-slate-800 font-semibold text-sm leading-tight">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Pill Indicator */}
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs text-slate-400">
                <span>Feature {activeFeatureIndex + 1} of {config.features.length}</span>
                <span className="text-[#1677FF] font-bold inline-flex items-center gap-1">
                  Active in Live ERP <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] animate-ping" />
                </span>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* COLUMN C: RIGHT ERP APPLICATION PREVIEW & FLOATING DATA CARD          */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-5 relative flex flex-col justify-center">
            
            {/* Main Application Window Shell with Subtle Angle */}
            <div
              className="relative w-full rounded-[24px] bg-[#FFFFFF] border border-slate-200/80 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12)] p-4 sm:p-5 overflow-hidden transition-all duration-300"
              style={{
                transform: "perspective(1200px) rotateY(-3.5deg) rotateX(1.5deg)",
                transformOrigin: "left center",
              }}
            >
              {/* Application Top Bar Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 gap-2">
                {/* Left: Brand Logo glyph & Search Input */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1677FF] flex items-center justify-center font-black text-sm select-none shadow-2xs">
                    v.
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-lg px-2.5 py-1 text-xs text-slate-400 w-36 sm:w-52 shadow-2xs">
                    <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{config.searchPlaceholder}</span>
                  </div>
                </div>

                {/* Right: Notifications, User Avatar & Menu */}
                <div className="flex items-center gap-2.5">
                  <div className="relative text-slate-400 hover:text-slate-600 cursor-pointer">
                    <Bell className="w-4 h-4" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">
                      4
                    </span>
                  </div>

                  <div className="relative">
                    <div className="w-6.5 h-6.5 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                      KM
                    </div>
                    <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-white" />
                  </div>

                  <MoreVertical className="w-4 h-4 text-slate-400 cursor-pointer" />
                </div>
              </div>

              {/* Application Main Layout: Left Sidebar + Metric Area */}
              <div className="grid grid-cols-12 gap-3 pt-3.5 min-h-[300px]">
                {/* Internal App Sidebar */}
                <div className="col-span-3 border-r border-slate-100 pr-2 space-y-1 select-none">
                  {config.sidebarItems.map((item, sIdx) => {
                    const isItemActive =
                      item.toLowerCase() === activeFeature.activeSidebar.toLowerCase() ||
                      (sIdx === 0 && !activeFeature.activeSidebar);
                    return (
                      <div
                        key={sIdx}
                        className={`text-xs px-2 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                          isItemActive
                            ? "bg-[#EAF4FF] text-[#1677FF] font-bold shadow-2xs"
                            : "text-slate-600 hover:bg-slate-50 font-medium"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                        <span className="truncate">{item}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Main Internal Metric Area */}
                <div className="col-span-9 pl-1 space-y-3">
                  {/* Two Top Metric Cards Side by Side */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {/* Metric 1 */}
                    <div className="bg-[#FFFFFF] p-3 rounded-xl border border-slate-200/80 shadow-2xs flex flex-col justify-between">
                      <div className="flex items-center justify-between text-slate-500 text-[11px] font-semibold">
                        <span>{activeFeature.metric1.label}</span>
                        <ChevronRight className="w-3 h-3 text-slate-400" />
                      </div>
                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="text-xl font-black text-slate-900 tracking-tight">
                          {activeFeature.metric1.value}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded border border-emerald-200/60">
                          {activeFeature.metric1.change}
                        </span>
                      </div>
                      <MiniBarChart active={activeFeature.metric1.chartType === "bars"} />
                    </div>

                    {/* Metric 2 */}
                    <div className="bg-[#FFFFFF] p-3 rounded-xl border border-slate-200/80 shadow-2xs flex flex-col justify-between">
                      <div className="flex items-center justify-between text-slate-500 text-[11px] font-semibold">
                        <span>{activeFeature.metric2.label}</span>
                        <ChevronRight className="w-3 h-3 text-slate-400" />
                      </div>
                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="text-xl font-black text-slate-900 tracking-tight">
                          {activeFeature.metric2.value}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded border border-emerald-200/60">
                          {activeFeature.metric2.change}
                        </span>
                      </div>
                      <MiniWaveChart />
                    </div>
                  </div>

                  {/* Placeholder under metric cards where floating card overlaps */}
                  <div className="h-32 sm:h-36 rounded-xl bg-slate-50/50 border border-dashed border-slate-200/60" />
                </div>
              </div>
            </div>

            {/* ----------------------------------------------------------------- */}
            {/* FLOATING LIVE DATA CARD (Overlaps ERP Window exactly like ref)     */}
            {/* ----------------------------------------------------------------- */}
            <div className="mt-4 lg:mt-0 lg:absolute lg:bottom-2 lg:right-2 xl:-bottom-3 xl:-right-3 w-full lg:w-[310px] bg-white rounded-[22px] p-4.5 shadow-[0_20px_50px_rgba(15,23,42,0.18)] border border-slate-100/90 z-20 transition-all duration-300">
              {/* Card Header with Arrow */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-black text-slate-900 tracking-tight">
                  {activeFeature.liveCard.title}
                </span>
                <div className="w-6 h-6 rounded-full bg-blue-50 text-[#1677FF] flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer shadow-2xs">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Value & Indicator Bars */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-black text-slate-900 tracking-tight">
                    {activeFeature.liveCard.value}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-600">
                    {activeFeature.liveCard.change}
                  </span>
                </div>
                <div className="flex items-end gap-1 h-5">
                  <div className="w-1.5 h-2 bg-[#1677FF] rounded-xs" />
                  <div className="w-1.5 h-3 bg-[#1677FF] rounded-xs" />
                  <div className="w-1.5 h-4 bg-[#1677FF] rounded-xs" />
                  <div className="w-1.5 h-5 bg-[#1677FF] rounded-xs" />
                  <div className="w-1.5 h-3.5 bg-blue-300 rounded-xs" />
                </div>
              </div>

              {/* Live Records List (3 items) */}
              <div className="space-y-2.5 pt-3">
                {activeFeature.liveCard.records.map((rec, rIdx) => (
                  <div key={rIdx} className="flex items-center justify-between gap-2 text-left">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-700 to-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                        {rec.avatarText}
                      </div>
                      <div className="min-w-0 leading-tight">
                        <div className="text-xs font-bold text-slate-900 truncate">
                          {rec.name}
                        </div>
                        <div className="text-[10px] text-slate-500 truncate">
                          {rec.subtitle}
                        </div>
                      </div>
                    </div>

                    <StatusBadge status={rec.status} tone={rec.statusTone} />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export { ModuleFeatureShowcase };
