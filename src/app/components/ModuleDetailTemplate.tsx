"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
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
} from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { ModulePageConfig } from "./modules/moduleData";
import { GenericModuleMockup, SalesAnalyticsWidget } from "./modules/ModuleMockupPreviews";

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
};

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const IconComp = ICON_MAP[name] || Sparkles;
  return <IconComp className={className || "w-5 h-5"} />;
}

export default function ModuleDetailTemplate({ data }: { data: ModulePageConfig }) {
  return (
    <div className="erp-site min-h-screen bg-[#FDFDFE] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Global Site Header */}
      <SiteHeader />

      <main>
        {/* ========================================================================= */}
        {/* SECTION 1: HERO SECTION (COMPACT 70% HEIGHT SAAS HERO)                     */}
        {/* ========================================================================= */}
        <section className="relative py-7 sm:py-8 lg:py-10 bg-gradient-to-br from-[#F8FAFC] via-[#EDF5FF] to-[#E0EDFF] overflow-hidden border-b border-slate-200/60">
          {/* Layer 1: Top-Left White Light Beam Flare */}
          <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-gradient-to-br from-white/90 via-white/50 to-transparent rounded-full blur-2xl pointer-events-none" />

          {/* Layer 2: Bottom-Left Ambient Ice Blue Glow */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#E0F2FE]/80 blur-3xl rounded-full pointer-events-none" />

          {/* Layer 3: Center-Right Large Organic Blue Bubble */}
          <div className="absolute top-1/2 -translate-y-1/2 right-[2%] sm:right-[6%] w-[380px] h-[380px] sm:w-[520px] sm:h-[520px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-[#93C5FD]/50 via-[#60A5FA]/30 to-[#3B82F6]/15 rounded-[48%_52%_58%_42%/52%_48%_52%_48%] blur-xl pointer-events-none" />

          {/* Layer 4: Bottom-Right Soft Pastel Purple/Lavender Arc */}
          <div className="absolute -bottom-24 -right-16 w-[350px] h-[350px] sm:w-[480px] sm:h-[480px] bg-gradient-to-tl from-[#DDD6FE]/80 via-[#E0E7FF]/50 to-transparent rounded-full blur-2xl pointer-events-none" />

          {/* Layer 5: Bottom-Right Diagonal Vibrant Blue/Purple Accent Bar */}
          <div className="absolute -bottom-10 -right-10 w-72 h-44 bg-gradient-to-br from-[#818CF8]/40 via-[#6366F1]/50 to-[#3B82F6]/60 rounded-full blur-lg transform -rotate-45 pointer-events-none opacity-80" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Copy, Benefits & CTAs */}
              <div className="lg:col-span-6 space-y-4 text-left">
                
                {/* Module Pill Badge with Orange Icon Mark */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/90 shadow-2xs text-slate-900 text-xs font-bold tracking-tight">
                  <div className="w-4.5 h-4.5 rounded-md bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center text-[9px] font-extrabold shadow-2xs">
                    <Boxes className="w-3 h-3" />
                  </div>
                  <span>{data.badgeLabel}</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-[-0.035em] leading-[1.12] max-w-2xl">
                  {data.heroHeadline}
                </h1>

                {/* Subtitle Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal">
                  {data.heroDescription}
                </p>

                {/* 3 Key Benefit Cards Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 pb-1">
                  {data.heroBenefits.map((benefit, idx) => {
                    const benefitIcons = [Layers, TrendingUp, ShieldCheck];
                    const IconComp = benefitIcons[idx % benefitIcons.length];
                    const parts = benefit.includes("-") ? benefit.split("-") : [benefit, "Live visibility"];
                    const title = parts[0].trim();
                    const desc = parts.slice(1).join("-").trim() || "Automated & reliable";

                    return (
                      <div key={idx} className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-blue-100/70 border border-blue-200/80 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="space-y-0.5 text-left">
                          <h4 className="font-extrabold text-slate-900 text-xs sm:text-[12.5px] leading-tight">{title}</h4>
                          <p className="text-[10.5px] text-slate-500 leading-tight font-medium">{desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Link
                    href="/#contact"
                    className="px-6 py-2.5 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-blue-600/25 transition-all inline-flex items-center gap-2 active:scale-98"
                  >
                    <span>Start a Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/modules"
                    className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-extrabold text-xs sm:text-sm transition-all shadow-2xs inline-flex items-center gap-1.5"
                  >
                    <span>Request a Demo</span>
                  </Link>
                </div>

                {/* Bottom Stats Metrics Strip */}
                <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
                  <div>
                    <div className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">500+</div>
                    <div className="text-[11px] text-slate-500 font-medium">Businesses Trust Us</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">99.9%</div>
                    <div className="text-[11px] text-slate-500 font-medium">Uptime &amp; Reliability</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">40%</div>
                    <div className="text-[11px] text-slate-500 font-medium">Faster Operations</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">24/7</div>
                    <div className="text-[11px] text-slate-500 font-medium">Expert Support</div>
                  </div>
                </div>

              </div>

              {/* Right Column: Dashboard Preview */}
              <div className="lg:col-span-6 relative pt-4 lg:pt-0">
                {/* Dot Matrix 1: Behind top-left of preview card */}
                <div className="absolute -top-6 -left-6 w-36 h-36 bg-[radial-gradient(#3B82F6_2px,transparent_2px)] [background-size:12px_12px] opacity-40 pointer-events-none hidden sm:block z-0" />

                {/* Dot Matrix 2: Half behind bottom-right of preview card */}
                <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-[radial-gradient(#3B82F6_2px,transparent_2px)] [background-size:12px_12px] opacity-40 pointer-events-none hidden sm:block z-0" />

                {/* Dashboard Mockup Container */}
                <div className="relative z-10 shadow-[0_20px_50px_rgba(37,99,235,0.12)] rounded-2xl">
                  <GenericModuleMockup slug={data.slug} badge={data.badgeLabel} />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: KEY FEATURES                                                   */}
        {/* ========================================================================= */}
        <section id="features" className="py-7 lg:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
            <div className="space-y-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs tracking-wider uppercase">
                <span className="w-4 h-0.5 bg-blue-600 rounded-full" />
                <span>{data.keyFeaturesEyebrow}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                {data.keyFeaturesTitle}
              </h2>
            </div>
            
          </div>

          {/* 6 Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.featureCards.map((card, idx) => {
              const toneColors = [
                "bg-blue-50 text-blue-600 border-blue-200",
                "bg-purple-50 text-purple-600 border-purple-200",
                "bg-emerald-50 text-emerald-600 border-emerald-200",
                "bg-amber-50 text-amber-600 border-amber-200",
                "bg-indigo-50 text-indigo-600 border-indigo-200",
                "bg-sky-50 text-sky-600 border-sky-200",
              ];
              const badgeStyle = toneColors[idx % toneColors.length];

              return (
                <div
                  key={card.id || idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group space-y-3 relative"
                >
                  <div className="space-y-3">
                    {/* Icon Tile */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${badgeStyle} shadow-2xs group-hover:scale-105 transition-transform`}>
                      <DynamicIcon name={card.iconName} className="w-5 h-5" />
                    </div>

                    {/* Card Title */}
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>

                    {/* Sub-feature Checkmark Bullets */}
                    <div className="space-y-1.5 pt-1 border-t border-slate-100">
                      {card.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-600 font-medium leading-normal">
                          <span className="text-blue-600 font-extrabold text-[11px] shrink-0 mt-0.5">✓</span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Right Arrow Button */}
                  <div className="flex justify-end pt-1">
                    <div className="w-6.5 h-6.5 rounded-full bg-slate-50 border border-slate-200 text-slate-400 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white flex items-center justify-center transition-all">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </section>

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
