"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  X,
  ChevronDown,
} from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import {
  MODULES_DATA,
  ModulePageConfig,
} from "./modules/moduleData";

export default function ModuleDetailTemplate({ data }: { data: ModulePageConfig }) {
  // Look up tailored preview configuration, fallback to CRM if not found
  const config: ModulePageConfig =
    (data && data.heroHeadline ? data : MODULES_DATA[data?.slug]) || MODULES_DATA.crm;

  // Interactive States
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(1);
  const [sentinelApproved, setSentinelApproved] = useState<boolean>(false);
  const [showAllSuperpowers, setShowAllSuperpowers] = useState<boolean>(false);

  // Sliced superpowers to keep default 2x2 grid layout (4 cards), expanding to all when requested
  const displayedSuperpowers = useMemo(() => {
    if (showAllSuperpowers || config.edge.superpowers.length <= 4) {
      return config.edge.superpowers;
    }
    return config.edge.superpowers.slice(0, 4);
  }, [config.edge.superpowers, showAllSuperpowers]);

  // Filter features by active tab and search query
  const filteredFeatures = useMemo(() => {
    return config.featuresCatalog.items.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        query === "" ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query) ||
        item.bullets.some((b) => b.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [config.featuresCatalog.items, selectedCategory, searchQuery]);

  // Current active step in connected workflow
  const currentStep = useMemo(() => {
    return (
      config.workflow.steps.find((s) => s.stepNumber === activeWorkflowStep) ||
      config.workflow.steps[0]
    );
  }, [config.workflow.steps, activeWorkflowStep]);

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

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Copy & Value Proposition */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-[-0.035em] leading-[1.12]">
                  {config.heroHeadline}
                  <span className="text-blue-600 underline decoration-blue-300 decoration-wavy decoration-2">
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

                {/* Hero Metrics */}
                <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    {/* <div className="text-xl font-black text-slate-900 tracking-tight font-mono">
                      {config.heroMetrics.stat1.value}
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {config.heroMetrics.stat1.label}
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-black text-slate-900 tracking-tight font-mono">
                      {config.heroMetrics.stat2.value}
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {config.heroMetrics.stat2.label}
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-black text-slate-900 tracking-tight font-mono">
                      {config.heroMetrics.stat3.value}
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {config.heroMetrics.stat3.label}
                    </div> */}
                  {/* </div>
                  <div>
                    <div className="text-xl font-black text-slate-900 tracking-tight font-mono">
                      {config.heroMetrics.stat4.value}
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {config.heroMetrics.stat4.label}
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Live Dashboard Mockup */}
              <div className="lg:col-span-6 relative">
                {/* Dot matrix background pattern */}
                <div className="absolute -top-6 -left-6 w-36 h-36 bg-dot-matrix opacity-40 pointer-events-none hidden sm:block" />
                <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-dot-matrix opacity-40 pointer-events-none hidden sm:block" />

                {/* The Glass Window Container */}
                <div className="relative z-10 bg-white rounded-2xl border border-slate-200/90 shadow-[0_15px_40px_rgba(15,23,42,0.08)] overflow-hidden max-w-xl mx-auto lg:max-w-none">
                  {/* Window Title Bar */}
                  <div className="bg-slate-900 px-3 py-1.5 flex items-center justify-between border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
                      <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                      <span className="text-slate-400 text-[10px] font-mono ml-1.5 truncate">
                        {config.mockup.windowTitle}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-emerald-500/20 text-emerald-300 font-bold">
                        {config.mockup.liveBadge}
                      </span>
                    </div>
                  </div>

                  {/* Dashboard Mock Content */}
                  <div className="p-2.5 sm:p-3 bg-slate-50 space-y-2">
                    {/* Top Metrics */}
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                      {config.mockup.topMetrics.map((tm, idx) => (
                        <div
                          key={idx}
                          className="bg-white px-2 py-1.5 rounded-lg border border-slate-200/80 shadow-2xs"
                        >
                          <div className="text-[9px] text-slate-500 font-medium truncate leading-tight">{tm.label}</div>
                          <div className="text-sm sm:text-base font-black text-slate-900 font-mono tracking-tight leading-tight my-0.5">{tm.value}</div>
                          <div className={`text-[8px] leading-tight truncate font-medium ${tm.subColor}`}>{tm.sub}</div>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Kanban Simulator */}
                    <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200/80 shadow-2xs space-y-1.5">
                      <div className="flex items-center justify-between text-[10px] pb-1 border-b border-slate-100">
                        <span className="font-extrabold text-slate-800 flex items-center gap-1.5 truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                          <span className="truncate">{config.mockup.kanbanTitle}</span>
                        </span>
                        <span className="text-[9px] text-slate-400 font-mono shrink-0 ml-2">
                          {config.mockup.kanbanSubtitle}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-1.5 text-left">
                        {config.mockup.columns.map((col, idx) => (
                          <div
                            key={idx}
                            className={`p-1.5 rounded-lg border space-y-1 ${
                              col.isHighlighted
                                ? "bg-slate-50 border-slate-200/60"
                                : idx === 2
                                ? "bg-emerald-50/50 border-emerald-200/70"
                                : "bg-slate-50 border-slate-200/60"
                            }`}
                          >
                            <div className="text-[8.5px] font-black text-slate-500 uppercase tracking-wider flex justify-between items-center gap-1">
                              <span className="truncate">{col.stageName}</span>
                              <span className="font-mono shrink-0">{col.amount}</span>
                            </div>
                            <div
                              className={`bg-white p-1.5 rounded-md border shadow-2xs space-y-0.5 ${
                                col.isHighlighted
                                  ? "border-blue-300 ring-1 ring-blue-400/20"
                                  : idx === 2
                                  ? "border-emerald-300"
                                  : "border-slate-200"
                              }`}
                            >
                              <div className="text-[10px] font-bold text-slate-900 leading-tight truncate">{col.cardTitle}</div>
                              <div className="text-[8px] text-slate-400 leading-tight truncate">{col.cardDesc}</div>
                              <span
                                className={`inline-block px-1 py-0.2 rounded text-[7.5px] font-extrabold leading-none ${col.cardTagStyle}`}
                              >
                                {col.cardTag}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Automated Activity Feed with Interactive Sentinel */}
                    <div className="bg-white px-2 py-1.5 rounded-lg border border-slate-200/80 text-[10px] flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-[8px] shrink-0">
                          AI
                        </span>
                        <span className="text-slate-700 font-medium text-[10px] truncate">
                          {config.mockup.alertText}
                        </span>
                      </div>
                      <button
                        onClick={() => setSentinelApproved(true)}
                        className={`px-2 py-0.5 rounded font-bold text-[9px] transition-all shrink-0 active:scale-95 ${
                          sentinelApproved
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-blue-50 hover:bg-blue-100 text-blue-700"
                        }`}
                      >
                        {sentinelApproved ? "✓ Dispatched" : config.mockup.alertAction}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. "THE MOSSIERP EDGE": WHAT EXTRA WE PROVIDE / WHY WE ARE BETTER        */}
        {/* ========================================================================= */}
        <section
          id="edge-section"
          className="module-detail-section bg-white relative border-b border-slate-200/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Intro */}
            <div className="text-center max-w-3xl mx-auto module-section-header space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {config.edge.title}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {config.edge.titleHighlight}
                </span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                {config.edge.description}
              </p>
            </div>

            {/* Superpower Cards Grid: Strict 2x2 layout (4 cards) by default, expanding to all when requested */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {displayedSuperpowers.map((sp) => (
                <div
                  key={sp.id}
                  className="gradient-border-card p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sp.gradient} text-white flex items-center justify-center font-black text-xl shadow-md ${sp.shadowColor} group-hover:scale-105 transition-transform`}
                      >
                        {sp.icon}
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-extrabold border ${sp.tagBg}`}
                      >
                        {sp.id.toUpperCase().replace("-", " #")}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {sp.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">{sp.description}</p>

                    {/* Before vs After Comparison Strip */}
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                      <div className="flex items-start gap-2 text-slate-500">
                        <span className="text-rose-500 font-bold shrink-0">✕ Legacy ERPs:</span>
                        <span>{sp.legacyComparison.replace("✕ Legacy ERPs:", "").trim()}</span>
                      </div>
                      <div className="flex items-start gap-2 text-slate-800 font-medium">
                        <span className="text-emerald-600 font-bold shrink-0">✓ MossiERP:</span>
                        <span>{sp.mossiComparison.replace("✓ MossiERP:", "").trim()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-500">Impact Metric:</span>
                    <span className={`font-extrabold font-mono ${sp.impactColor}`}>
                      {sp.impactMetric}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Expand / Collapse Toggle if more than 4 superpowers exist */}
            {config.edge.superpowers.length > 4 && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() => setShowAllSuperpowers((prev) => !prev)}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-xl transition-all duration-200 group active:scale-95 cursor-pointer"
                >
                  <span>
                    {showAllSuperpowers ? "Show Less" : "Show More"}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      showAllSuperpowers ? "rotate-180" : "group-hover:translate-y-0.5"
                    }`}
                  />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. HEAD-TO-HEAD COMPETITIVE COMPARISON MATRIX                            */}
        {/* ========================================================================= */}
        <section
          id="comparison-section"
          className="module-detail-section bg-slate-50 relative border-b border-slate-200/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto module-section-header space-y-2">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                {config.comparison.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {config.comparison.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
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
                    {config.comparison.rows.map((row, idx) => (
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
        {/* 4. "ALL FEATURES" CATEGORIZED MATRIX (TABBED & SEARCHABLE)               */}
        {/* ========================================================================= */}
        <section
          id="features-matrix"
          className="module-detail-section bg-white relative border-b border-slate-200/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 module-section-header">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <span>{config.featuresCatalog.eyebrow}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {config.featuresCatalog.title}
                </h2>
                <p className="text-sm text-slate-600">{config.featuresCatalog.subtitle}</p>
              </div>

              {/* Live Search Bar */}
              <div className="w-full md:w-80">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search features (e.g. Kanban, GST, Quote)..."
                    className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 shadow-2xs"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Filter Category Tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-8 pb-3 border-b border-slate-200">
              {config.featuresCatalog.categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                const count =
                  cat.id === "all"
                    ? config.featuresCatalog.items.length
                    : config.featuresCatalog.items.filter((i) => i.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? "tab-active"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {cat.label} ({count})
                  </button>
                );
              })}
            </div>

            {/* Features Cards Grid */}
            {filteredFeatures.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFeatures.map((feat) => (
                  <div
                    key={feat.id}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-blue-400 transition-all space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-10 h-10 rounded-xl ${feat.iconBg} flex items-center justify-center font-bold text-lg`}
                        >
                          {feat.icon}
                        </div>
                        <span
                          className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${feat.tagTone}`}
                        >
                          {feat.categoryLabel}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-base font-extrabold text-slate-900">{feat.title}</h4>
                        <p className="text-xs text-slate-500 mt-1">{feat.description}</p>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
                        {feat.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-1.5">
                            <span className="text-blue-600 font-bold shrink-0">✓</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <p className="text-sm font-semibold text-slate-600">
                  No features matched &quot;{searchQuery}&quot; in this category.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. CONNECTED WORKFLOW (THE ERP NETWORK EFFECT)                           */}
        {/* ========================================================================= */}
        <section
          id="workflow-section"
          className="module-detail-section bg-slate-50 relative border-b border-slate-200/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto module-section-header space-y-2">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                {config.workflow.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {config.workflow.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600">{config.workflow.subtitle}</p>
            </div>

            {/* Connected Flow Visualizer */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8">
              <div
                className={`grid grid-cols-1 ${
                  config.workflow.steps.length === 6
                    ? "sm:grid-cols-3 lg:grid-cols-6"
                    : "sm:grid-cols-5"
                } gap-4 relative`}
              >
                {config.workflow.steps.map((st) => {
                  const isCurrent = activeWorkflowStep === st.stepNumber;

                  return (
                    <div
                      key={st.stepNumber}
                      onClick={() => setActiveWorkflowStep(st.stepNumber)}
                      className={`cursor-pointer p-4 rounded-xl border-2 transition-all text-center space-y-2 select-none ${
                        isCurrent
                          ? "border-blue-600 bg-blue-50/60 shadow-2xs"
                          : "border-slate-200 hover:border-blue-400 bg-white"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full font-black text-xs mx-auto flex items-center justify-center transition-colors ${
                          isCurrent
                            ? "bg-blue-600 text-white"
                            : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        {st.stepNumber}
                      </div>
                      <h5 className="text-xs font-extrabold text-slate-900">{st.title}</h5>
                      <p className="text-[11px] text-slate-500">{st.subtitle}</p>
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Step Inspector Box */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span>{currentStep.detailTitle}</span>
                  </div>
                  <p className="text-slate-600 text-xs">{currentStep.detailDescription}</p>
                </div>
                <div className="shrink-0 font-mono text-[11px] bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-blue-600 font-bold">
                  Latency: {currentStep.latency}
                </div>
              </div>
            </div>
          </div>
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

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
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
