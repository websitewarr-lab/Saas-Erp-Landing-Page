"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
} from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ConnectedWorkflowFlow from "./modules/ConnectedWorkflowFlow";
import ModuleHeroPreview from "./modules/ModuleHeroPreview";
import { AllFeatures, HighlightedFeatures } from "./modules/ModuleFeatures";
import {
  MODULES_DATA,
  ModulePageConfig,
} from "./modules/moduleData";

export default function ModuleDetailTemplate({ data }: { data: ModulePageConfig }) {
  // Look up tailored preview configuration, fallback to CRM if not found
  const config: ModulePageConfig =
    (data && data.heroHeadline ? data : MODULES_DATA[data?.slug]) || MODULES_DATA.crm;

  // Interactive States
  const [sentinelApproved, setSentinelApproved] = useState<boolean>(false);

  return (
    <div className="erp-site min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Global Site Header */}
      <SiteHeader />

      <main>
        {/* ========================================================================= */}
        {/* 1. HIGH-IMPACT COMPACT HERO WITH INTERACTIVE MOCKUP                      */}
        {/* ========================================================================= */}
        <section className="relative module-detail-section bg-gradient-to-br from-[#F8FAFC] via-[#EDF5FF] to-[#E2EFFF] overflow-hidden border-b border-slate-200/70">
          {/* Ambient Blur Lighting Accents */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/80 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-[5%] w-[450px] h-[450px] bg-gradient-to-br from-blue-300/30 via-indigo-300/20 to-purple-300/10 rounded-full blur-3xl pointer-events-none pulse-glow" />

          <div className="max-w-[1380px] mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
            {/* Breadcrumb + Module Tag */}
            <div className="flex items-center gap-2 mb-4">
              <Link
                href="/modules"
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              >
                Modules
              </Link>
              <span className="text-slate-400 text-xs">/</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-900 text-xs font-extrabold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                {config.badge}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">
                ✓ Verified Real-Time Sync
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Copy & Value Proposition */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-[44px] xl:text-5xl font-extrabold text-[#0F172A] tracking-[-0.03em] leading-[1.12]">
                  {config.heroHeadline}{" "}
                  <span className="text-blue-600">
                    {config.heroHighlight}
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                  {config.heroDescription}
                </p>

                {/* 3 Quick Value Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 bg-white/90 p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">
                      ✦
                    </div>
                    <span className="text-xs font-bold text-slate-800">{config.chip1}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/90 p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                      ⚡
                    </div>
                    <span className="text-xs font-bold text-slate-800">{config.chip2}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/90 p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                    <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs shrink-0">
                      ∞
                    </div>
                    <span className="text-xs font-bold text-slate-800">{config.chip3}</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href="/#contact"
                    className="px-7 py-3 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white font-extrabold text-sm shadow-md shadow-blue-600/25 transition-all inline-flex items-center gap-2 active:scale-95"
                  >
                    <span>Start 14-Day Free Sandbox</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#features-matrix"
                    className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-extrabold text-sm transition-all shadow-2xs inline-flex items-center gap-2"
                  >
                    <span>Explore All {config.featuresCatalog.items.length} Features</span>
                    <ArrowRight className="w-4 h-4 text-slate-500 rotate-90" />
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Laptop Preview (Clean preview window styled like All Features preview) */}
              <div className="lg:col-span-6 w-full flex items-center justify-center">
                <ModuleHeroPreview
                  config={config}
                  sentinelApproved={sentinelApproved}
                  onApproveSentinel={() => setSentinelApproved(true)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. "THE MOSSIERP EDGE": WHAT EXTRA WE PROVIDE / WHY WE ARE BETTER        */}
        {/* ========================================================================= */}
        <HighlightedFeatures key={`highlights-${config.slug}`} config={config} />

        {/* ========================================================================= */}
        {/* 3. "ALL FEATURES" CATEGORIZED MATRIX (TABBED & SEARCHABLE)               */}
        {/* ========================================================================= */}
        <AllFeatures key={`features-${config.slug}`} config={config} />

        {/* ========================================================================= */}
        {/* 4. HEAD-TO-HEAD COMPETITIVE COMPARISON MATRIX (DIFFERENCES)              */}
        {/* ========================================================================= */}
        <section
          id="comparison-section"
          className="module-detail-section bg-slate-50 relative border-b border-slate-200/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto module-section-header space-y-2">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                {config.comparison.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                {config.comparison.title}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                {config.comparison.subtitle}
              </p>
            </div>

            {/* Comparison Table Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-100/70 text-xs text-slate-700">
                      <th className="p-4 sm:p-5 font-extrabold w-1/3">Evaluation Metric</th>
                      <th className="p-4 sm:p-5 font-black text-blue-700 bg-blue-50/80 w-1/4 border-x border-blue-200/80">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                          <span>MossiERP</span>
                          <span className="ml-auto text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold">
                            WINNER
                          </span>
                        </div>
                      </th>
                      <th className="p-4 sm:p-5 font-bold text-slate-500 w-1/5">
                        {config.comparison.competitor1Name}
                      </th>
                      <th className="p-4 sm:p-5 font-bold text-slate-500 w-1/5">
                        {config.comparison.competitor2Name}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                    {config.comparison.rows.slice(0, 5).map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-4 sm:p-5 font-bold text-slate-900">
                          {row.metric}
                          <div className="text-[11px] text-slate-500 font-normal">
                            {row.metricDesc}
                          </div>
                        </td>
                        <td className="p-4 sm:p-5 bg-blue-50/40 border-x border-blue-100">
                          <div className="font-black text-emerald-700 text-xs sm:text-sm">
                            {row.mossi.highlight}
                          </div>
                          <div className="text-[11px] text-slate-600 font-medium mt-0.5">
                            {row.mossi.detail}
                          </div>
                        </td>
                        <td className="p-4 sm:p-5">
                          <div className="font-bold text-slate-700 text-xs sm:text-sm">
                            {row.legacy.highlight}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">{row.legacy.detail}</div>
                        </td>
                        <td className="p-4 sm:p-5">
                          <div className="font-bold text-slate-700 text-xs sm:text-sm">
                            {row.pointSolution.highlight}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            {row.pointSolution.detail}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. CONNECTED WORKFLOW (THE ERP NETWORK EFFECT)                           */}
        {/* ========================================================================= */}
        <section
          id="workflow-section"
          className="module-detail-section bg-gradient-to-b from-[#f7faff] via-[#eef3fb] to-[#f4f8fe] relative border-b border-slate-200/80 overflow-hidden"
        >
          <ConnectedWorkflowFlow workflow={config.workflow} />
        </section>

        {/* ========================================================================= */}
        {/* 6. REAL SWITCHER TESTIMONIAL & QUANTIFIABLE ROI PROOF                    */}
        {/* ========================================================================= */}
        <section className="module-detail-section bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left: Switcher Quote */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-extrabold border border-emerald-200">
                  <span>{config.testimonialAndRoi.testimonial.badge}</span>
                </div>

                <blockquote className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug tracking-tight">
                  &ldquo;{config.testimonialAndRoi.testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-2">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold text-sm flex items-center justify-center shadow-sm">
                    {config.testimonialAndRoi.testimonial.initials}
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">
                      {config.testimonialAndRoi.testimonial.userName}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {config.testimonialAndRoi.testimonial.userRole},{" "}
                      {config.testimonialAndRoi.testimonial.userCompany}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Quantified Impact Cards */}
              {/* <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {config.testimonialAndRoi.impactCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1"
                  >
                    <div className={`text-3xl font-black font-mono ${card.color}`}>
                      {card.value}
                    </div>
                    <div className="text-xs font-bold text-slate-900">{card.label}</div>
                    <div className="text-[11px] text-slate-500">{card.description}</div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. HIGH-CONVERTING FINAL CTA SECTION                                      */}
        {/* ========================================================================= */}
        <section
          id="contact"
          className="module-detail-section bg-gradient-to-br from-[#0C1E38] via-[#0F294D] to-[#0A1728] text-white relative overflow-hidden"
        >
          {/* Ambient tech circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 font-extrabold text-xs border border-blue-400/30">
              <span>{config.cta.pill}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {config.cta.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {config.cta.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/#contact"
                className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-black text-sm shadow-xl shadow-blue-500/30 transition-all inline-flex items-center gap-2 active:scale-95"
              >
                <span>{config.cta.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/modules"
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all"
              >
                <span>{config.cta.secondaryCtaText}</span>
              </Link>
            </div>

            <div className="pt-8 text-xs text-slate-400 flex items-center justify-center gap-6">
              <span>✓ No credit card required</span>
              <span>✓ 14-day full feature sandbox</span>
              <span>✓ Zero-lockin data export</span>
            </div>
          </div>
        </section>
      </main>

      {/* Global Site Footer */}
      <SiteFooter />
    </div>
  );
}
