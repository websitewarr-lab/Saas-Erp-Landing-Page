"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Users,
  Target,
  Building2,
  FileSpreadsheet,
  Sliders,
  CheckSquare,
  UserPlus,
  Filter,
  FileText,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Zap,
  Lock,
  DollarSign,
  ShoppingCart,
  Boxes,
  ReceiptText,
  UsersRound,
  FolderKanban,
  ShoppingBag,
  Factory,
  ShieldCheck,
  Truck,
  Layers,
  Cpu,
  Fingerprint,
  Building,
  QrCode,
  ShieldAlert,
  ClipboardList,
  GitCompare,
  Calculator,
  CheckCheck,
  ClipboardCheck,
  Calendar,
  Search,
  PieChart,
  Gauge,
  BookOpen,
  Receipt,
  FileBarChart,
  Clock,
  Globe,
  UserCheck,
  Award,
  CreditCard,
  Rocket,
  Lightbulb,
  Trophy,
  Database,
  Settings2,
} from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { ModulePageConfig, DEFAULT_FLOATING_PILLS } from "./modules/moduleData";
import { GenericModuleMockup, SalesAnalyticsWidget } from "./modules/ModuleMockupPreviews";
import { ERPPreviewLaptop } from "./modules/ERPPreviewLaptop";
import ModuleFeatureShowcase from "./modules/ModuleFeatureShowcase";

// Helper map for dynamic Lucide icon rendering
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Target,
  Building2,
  FileSpreadsheet,
  Sliders,
  CheckSquare,
  UserPlus,
  Filter,
  FileText,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Zap,
  Lock,
  DollarSign,
  ShoppingCart,
  Boxes,
  ReceiptText,
  UsersRound,
  FolderKanban,
  ShoppingBag,
  Factory,
  ShieldCheck,
  Truck,
  Layers,
  Cpu,
  Fingerprint,
  Building,
  QrCode,
  ShieldAlert,
  ClipboardList,
  GitCompare,
  Calculator,
  CheckCheck,
  ClipboardCheck,
  Calendar,
  Search,
  PieChart,
  Gauge,
  BookOpen,
  Receipt,
  FileBarChart,
  Clock,
  Globe,
  UserCheck,
  Award,
  CreditCard,
  Rocket,
  Lightbulb,
  Trophy,
  Database,
  Settings2,
};

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const IconComp = ICON_MAP[name] || Sparkles;
  return <IconComp className={className || "w-5 h-5"} />;
}

export default function ModuleDetailTemplate({ data }: { data: ModulePageConfig }) {
  // Extract pills for hero floating badges (3 on left, 3 on right)
  const pills =
    data.floatingFeatures && data.floatingFeatures.length >= 6
      ? data.floatingFeatures
      : DEFAULT_FLOATING_PILLS;
  const leftPills = pills.slice(0, 3);
  const rightPills = pills.slice(3, 6);
  const allPills = pills.slice(0, 6);

  // Dynamic Headline Parsing: Highlight phrase
  let headlinePart1 = data.heroHeadline;
  let headlinePart2 = "";

  if (data.heroHeadlineHighlight && data.heroHeadline.includes(data.heroHeadlineHighlight)) {
    const parts = data.heroHeadline.split(data.heroHeadlineHighlight);
    headlinePart1 = parts[0].trim();
    headlinePart2 = data.heroHeadlineHighlight.trim();
  } else {
    const words = data.heroHeadline.split(" ");
    if (words.length > 3) {
      headlinePart1 = words.slice(0, Math.ceil(words.length / 2)).join(" ");
      headlinePart2 = words.slice(Math.ceil(words.length / 2)).join(" ");
    }
  }

  return (
    <div className="erp-site min-h-screen bg-[#FDFDFE] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Global Site Header */}
      <SiteHeader />

      <main>
        {/* ========================================================================= */}
        {/* SECTION 1: HERO SECTION (CENTERED LAPTOP + 6 FLOATING PILLS)              */}
        {/* ========================================================================= */}
        <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#F0F6FF] via-[#F8FAFC] to-[#EDF4FF] overflow-hidden border-b border-slate-200/60 text-center">
          {/* Top-Center Ambient Blue Flare */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-blue-200/50 via-sky-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Large Abstract Flowing Blue Shapes & Soft Glows */}
          <div className="absolute -top-24 -left-20 w-[420px] h-[420px] bg-gradient-to-br from-blue-300/25 via-sky-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] bg-gradient-to-bl from-blue-300/30 via-indigo-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Upward/Forward Arrow-like Abstract Shape on Right Flank */}
          <div className="absolute right-[2%] sm:right-[5%] top-[12%] sm:top-[16%] w-[260px] sm:w-[380px] lg:w-[480px] pointer-events-none opacity-40 select-none hidden md:block">
            <svg viewBox="0 0 400 400" fill="none" className="w-full h-full drop-shadow-[0_20px_40px_rgba(37,99,235,0.15)]">
              <path
                d="M 60 340 L 260 140 L 220 140 L 320 40 L 340 160 L 300 160 L 110 350 Z"
                fill="url(#heroArrowGrad1)"
                opacity="0.75"
              />
              <path
                d="M 130 360 L 300 190 L 265 190 L 360 95 L 380 205 L 345 205 L 180 370 Z"
                fill="url(#heroArrowGrad2)"
                opacity="0.4"
              />
              <defs>
                <linearGradient id="heroArrowGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                  <stop offset="60%" stopColor="#2563EB" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.85" />
                </linearGradient>
                <linearGradient id="heroArrowGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#818CF8" stopOpacity="0.05" />
                  <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.65" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Perspective Grid Floor Beneath the Laptop */}
          <div className="absolute bottom-0 left-0 right-0 h-80 pointer-events-none overflow-hidden select-none">
            <div
              className="w-[180%] -left-[40%] h-[500px] absolute bottom-0 bg-[linear-gradient(to_right,#3B82F6_1px,transparent_1px),linear-gradient(to_bottom,#3B82F6_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.14] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_70%,#000_70%,transparent_100%)]"
              style={{
                transform: "perspective(500px) rotateX(65deg)",
                transformOrigin: "bottom center",
              }}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[700px] h-32 bg-blue-500/15 blur-3xl rounded-full" />
          </div>

          {/* Main Hero Content Container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-blue-200/90 shadow-2xs text-slate-800 text-xs font-bold tracking-tight backdrop-blur-md mb-5">
              <div className="w-4.5 h-4.5 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center text-[10px] font-extrabold shadow-2xs">
                <Boxes className="w-3 h-3" />
              </div>
              <span>{data.badgeLabel} Module</span>
            </div>

            {/* Main Centered Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-black text-[#0B1B3A] tracking-[-0.035em] leading-[1.12] max-w-4xl mx-auto mb-4">
              {headlinePart1}{" "}
              {headlinePart2 && (
                <span className="text-[#1677FF] block sm:inline">
                  {headlinePart2}
                </span>
              )}
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal mb-8">
              {data.heroDescription}
            </p>

            {/* Two Primary CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12 sm:mb-16">
              <Link
                href="/#contact"
                className="px-7 py-3 rounded-full bg-[#1677FF] hover:bg-blue-600 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-500/30 transition-all inline-flex items-center gap-2 active:scale-98"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/modules"
                className="px-7 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-extrabold text-sm sm:text-base transition-all shadow-xs inline-flex items-center gap-1.5 backdrop-blur-sm"
              >
                <span>Request a Demo</span>
              </Link>
            </div>

            {/* Laptop Showcase Assembly with 6 Small Floating Feature Pills */}
            <div className="relative max-w-5xl mx-auto pt-2">
              
              {/* Left 3 Floating Feature Pills (Desktop) */}
              <div className="hidden lg:flex flex-col gap-4 absolute -left-6 xl:-left-12 top-1/2 -translate-y-1/2 z-20">
                {leftPills.map((pill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_10px_25px_rgba(15,23,42,0.08)] hover:shadow-md hover:border-blue-300 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1677FF] border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-[#1677FF] group-hover:text-white transition-colors">
                      <DynamicIcon name={pill.iconName} className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-slate-800 tracking-tight pr-1">
                      {pill.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Centerpiece Laptop Mockup Display */}
              <div className="relative z-10 mx-auto w-full px-2 sm:px-4">
                <ERPPreviewLaptop>
                  <GenericModuleMockup slug={data.slug} badge={data.badgeLabel} />
                </ERPPreviewLaptop>
              </div>

              {/* Right 3 Floating Feature Pills (Desktop) */}
              <div className="hidden lg:flex flex-col gap-4 absolute -right-6 xl:-right-12 top-1/2 -translate-y-1/2 z-20">
                {rightPills.map((pill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_10px_25px_rgba(15,23,42,0.08)] hover:shadow-md hover:border-blue-300 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1677FF] border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-[#1677FF] group-hover:text-white transition-colors">
                      <DynamicIcon name={pill.iconName} className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-slate-800 tracking-tight pr-1">
                      {pill.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mobile / Tablet 6 Feature Pills Bar */}
              <div className="flex lg:hidden flex-wrap items-center justify-center gap-2.5 mt-8 px-2 relative z-20">
                {allPills.map((pill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xs"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-[#1677FF] flex items-center justify-center shrink-0">
                      <DynamicIcon name={pill.iconName} className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 tracking-tight">
                      {pill.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: INTERACTIVE MODULE FEATURE SHOWCASE (REPLACES OLD KEY FEATURES) */}
        {/* ========================================================================= */}
        <ModuleFeatureShowcase moduleSlug={data.slug} />

        {/* ========================================================================= */}
        {/* SECTION 3: HOW IT WORKS                                                   */}
        {/* ========================================================================= */}
        <section className="py-7 lg:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Heading + 5 Process Steps Horizontal Flow */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* Section Header */}
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-wider uppercase">
                  <span className="w-4 h-0.5 bg-blue-600 rounded-full" />
                  <span>{data.workflowEyebrow}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  {data.workflowTitle}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-normal">
                  {data.workflowSubtitle}
                </p>
              </div>

              {/* Top Icons Row + Arrow Connectors */}
              <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1 pt-1">
                {data.workflowSteps.map((step, idx) => {
                  const circleTones = [
                    { outer: "bg-blue-50 border-blue-200/60", inner: "bg-white text-blue-600 border-blue-200 shadow-xs" },
                    { outer: "bg-purple-50 border-purple-200/60", inner: "bg-white text-purple-600 border-purple-200 shadow-xs" },
                    { outer: "bg-emerald-50 border-emerald-200/60", inner: "bg-white text-emerald-600 border-emerald-200 shadow-xs" },
                    { outer: "bg-amber-50 border-amber-200/60", inner: "bg-white text-amber-600 border-amber-200 shadow-xs" },
                    { outer: "bg-sky-50 border-sky-200/60", inner: "bg-white text-sky-600 border-sky-200 shadow-xs" },
                  ];
                  const tone = circleTones[idx % circleTones.length];

                  return (
                    <React.Fragment key={idx}>
                      <div className="flex flex-col items-center text-center space-y-1.5 min-w-[65px]">
                        {/* Dual-layer Icon Badge */}
                        <div className={`w-14 h-14 rounded-full ${tone.outer} border flex items-center justify-center hover:scale-105 transition-transform`}>
                          <div className={`w-9 h-9 rounded-xl ${tone.inner} flex items-center justify-center`}>
                            <DynamicIcon name={step.iconName} className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      {/* Right Arrow Connector */}
                      {idx < data.workflowSteps.length - 1 && (
                        <ArrowRight className="w-4.5 h-4.5 text-blue-500 opacity-80 shrink-0 select-none" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Bottom Step Titles & Bullet Descriptions */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
                {data.workflowSteps.map((step, idx) => (
                  <div key={idx} className="space-y-1 text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="w-4.5 h-4.5 rounded-full bg-blue-600 text-white font-extrabold text-[10.5px] flex items-center justify-center shrink-0 shadow-2xs">
                        {step.stepNumber}
                      </span>
                      <h4 className="font-extrabold text-slate-900 text-[13px] sm:text-[13.5px] leading-tight">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-snug font-normal pl-6 sm:pl-0">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Light Blue Container */}
            <div className="lg:col-span-6 bg-blue-50/70 p-5 sm:p-6 rounded-3xl border border-blue-100/90 shadow-2xs flex flex-col justify-between overflow-hidden">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight tracking-tight mb-3">
                &ldquo;Get complete visibility of your business operations&rdquo;
              </h3>

              {/* Render Light Sales Analytics Widget */}
              <div className="w-full">
                <SalesAnalyticsWidget />
              </div>
            </div>

          </div>

        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: WHY CHOOSE THIS MODULE?                                       */}
        {/* ========================================================================= */}
        <section className="py-7 lg:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
          
          <div className="space-y-1 mb-6">
            <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-wider uppercase">
              <span className="w-4 h-0.5 bg-blue-600 rounded-full" />
              <span>{data.whyChooseEyebrow}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              {data.whyChooseTitle}
            </h2>
          </div>

          {/* 4 Benefit Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.whyChooseBenefits.map((benefit, idx) => {
              const toneBg: Record<string, string> = {
                purple: "bg-purple-50 text-purple-600 border-purple-200",
                blue: "bg-blue-50 text-blue-600 border-blue-200",
                sky: "bg-sky-50 text-sky-600 border-sky-200",
                cyan: "bg-cyan-50 text-cyan-600 border-cyan-200",
                emerald: "bg-emerald-50 text-emerald-600 border-emerald-200",
                amber: "bg-amber-50 text-amber-600 border-amber-200",
                indigo: "bg-indigo-50 text-indigo-600 border-indigo-200",
                rose: "bg-rose-50 text-rose-600 border-rose-200",
              };

              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all space-y-2.5"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${toneBg[benefit.tone] || toneBg.blue}`}>
                    <DynamicIcon name={benefit.iconName} className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900">{benefit.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{benefit.description}</p>
                </div>
              );
            })}
          </div>

        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: ERP ECOSYSTEM INTEGRATION                                     */}
        {/* ========================================================================= */}
        <section className="py-7 lg:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
          
          <div className="space-y-1 mb-6">
            <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-wider uppercase">
              <span className="w-4 h-0.5 bg-blue-600 rounded-full" />
              <span>{data.integrationEyebrow}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              {data.integrationTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              {data.integrationSubtitle}
            </p>
          </div>

          {/* Connected Module Cards Row */}
          <div className="pt-2">
            <div className="flex flex-wrap items-center gap-3">
              {data.connectedModules.map((mod, idx) => {
                const iconTileTones = [
                  "bg-blue-50 text-blue-600 border-blue-100",
                  "bg-amber-50 text-amber-600 border-amber-100",
                  "bg-emerald-50 text-emerald-600 border-emerald-100",
                  "bg-rose-50 text-rose-600 border-rose-100",
                  "bg-purple-50 text-purple-600 border-purple-100",
                  "bg-sky-50 text-sky-600 border-sky-100",
                  "bg-indigo-50 text-indigo-600 border-indigo-100",
                ];
                const tileTone = iconTileTones[idx % iconTileTones.length];

                return (
                  <Link
                    key={idx}
                    href={`/modules/${mod.slug}`}
                    className="px-4 py-3 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 text-xs font-bold text-slate-800 flex items-center gap-3 shadow-2xs hover:shadow-md transition-all group"
                  >
                    <div className={`w-9 h-9 rounded-xl ${tileTone} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                      <DynamicIcon name={mod.iconName} className="w-4.5 h-4.5" />
                    </div>
                    <span className="font-extrabold text-slate-900 text-xs">{mod.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: TRUSTED BUSINESSES / SOCIAL PROOF                             */}
        {/* ========================================================================= */}
        <section className="py-7 lg:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Trusted Logo Strip */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">Trusted by Growing Businesses</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Join companies that are already transforming their operations with our ERP.
                </p>
              </div>

              {/* Logo Grid */}
              <div className="grid grid-cols-4 gap-3 opacity-80">
                <div className="p-2.5 bg-slate-100/80 rounded-xl flex items-center justify-center font-black text-slate-700 text-xs">TATA</div>
                <div className="p-2.5 bg-slate-100/80 rounded-xl flex items-center justify-center font-black text-slate-700 text-xs">Infosys</div>
                <div className="p-2.5 bg-slate-100/80 rounded-xl flex items-center justify-center font-black text-slate-700 text-xs">Mahindra</div>
                <div className="p-2.5 bg-slate-100/80 rounded-xl flex items-center justify-center font-black text-slate-700 text-xs">Adani</div>
                <div className="p-2.5 bg-slate-100/80 rounded-xl flex items-center justify-center font-black text-slate-700 text-xs">Reliance</div>
                <div className="p-2.5 bg-slate-100/80 rounded-xl flex items-center justify-center font-black text-slate-700 text-xs">L&T</div>
                <div className="p-2.5 bg-slate-100/80 rounded-xl flex items-center justify-center font-black text-slate-700 text-xs">Godrej</div>
                <div className="p-2.5 bg-slate-100/80 rounded-xl flex items-center justify-center font-black text-slate-700 text-xs">JSW</div>
              </div>
            </div>

            {/* Right Column: Customer Testimonial Card */}
            <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed font-medium">
                &ldquo;{data.testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-2.5 pt-2 border-t border-slate-100">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                  {data.testimonial.userInitials}
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-xs">{data.testimonial.userName}</h4>
                  <p className="text-[10px] text-slate-500 font-medium">
                    {data.testimonial.userRole}, {data.testimonial.userCompany}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: FINAL CTA                                                     */}
        {/* ========================================================================= */}
        <section className="py-7 lg:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50/60 to-purple-50/40 border border-blue-100 p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                {data.ctaTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {data.ctaDescription}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link
                href="/#contact"
                className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all inline-flex items-center gap-2"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#contact"
                className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-extrabold text-xs sm:text-sm transition-all shadow-2xs"
              >
                <span>Contact Sales</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Global Site Footer */}
      <SiteFooter />
    </div>
  );
}
