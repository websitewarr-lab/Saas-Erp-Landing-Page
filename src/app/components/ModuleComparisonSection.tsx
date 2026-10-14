"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ModulePageConfig, ComparisonRow } from "./modules/moduleData";

interface ModuleComparisonSectionProps {
  config: ModulePageConfig;
}

function parseHighlight(text: string): { status: "positive" | "limited" | "negative"; label: string } {
  const trimmed = (text || "").trim();
  let status: "positive" | "limited" | "negative" = "positive";
  let label = trimmed;

  if (trimmed.startsWith("✓")) {
    status = "positive";
    label = trimmed.replace(/^✓\s*/, "");
  } else if (trimmed.startsWith("⚠️")) {
    status = "limited";
    label = trimmed.replace(/^⚠️\s*/, "");
  } else if (trimmed.startsWith("✕")) {
    status = "negative";
    label = trimmed.replace(/^✕\s*/, "");
  }

  label = label.replace(/\s*\([^)]*\)\s*$/, "").trim();
  return { status, label };
}

function cleanMetric(metric: string): string {
  if (!metric) return "";
  return metric
    .replace(/\s*\([^)]*\)\s*$/, "")
    .replace(/\s*& Multi-Vector ECO Governance/i, " & ECO")
    .replace(/\s*Engine & Live Shortage Workbench/i, " Engine")
    .replace(/\s*& Interactive Dispatch Board/i, "")
    .replace(/\s*Operator Console & Real-Time Andon Execution/i, " & Andon")
    .replace(/\s*, Automated NCR & Closed-Loop CAPA/i, " & CAPA")
    .replace(/\s*& Exit Clearances/i, "")
    .replace(/\s*& Break Tracking/i, "")
    .replace(/\s*\(Trade & Manufacturing\)/i, "")
    .replace(/\s*\(Zero Plugin Cost\)/i, "")
    .replace(/\s*\(True Landed Cost LCV\)/i, "")
    .replace(/\s*\(FEFO & Quarantine\)/i, " (FEFO)")
    .trim();
}

function getFeatureIconId(metric: string, idx: number): string {
  const m = (metric || "").toLowerCase();
  if (
    m.includes("biometric") ||
    m.includes("attendance") ||
    m.includes("selfie") ||
    m.includes("punch") ||
    m.includes("duplicate") ||
    m.includes("fuzzy") ||
    m.includes("health") ||
    m.includes("stalled")
  ) {
    return "fingerprint";
  }
  if (
    m.includes("bom") ||
    m.includes("mrp") ||
    m.includes("mes") ||
    m.includes("shopfloor") ||
    m.includes("andon") ||
    m.includes("manufacturing") ||
    m.includes("labor") ||
    m.includes("capacity") ||
    m.includes("aps")
  ) {
    return "factory";
  }
  if (
    m.includes("stock") ||
    m.includes("warehouse") ||
    m.includes("replenishment") ||
    m.includes("batch") ||
    m.includes("expiry") ||
    m.includes("fefo") ||
    m.includes("grn") ||
    m.includes("quarantine")
  ) {
    return "boxes";
  }
  if (
    m.includes("route") ||
    m.includes("shortage") ||
    m.includes("dispatch") ||
    m.includes("delivery") ||
    m.includes("pod")
  ) {
    return "route";
  }
  if (
    m.includes("ledger") ||
    m.includes("journal") ||
    m.includes("accounting") ||
    m.includes("valuation") ||
    m.includes("depreciation") ||
    m.includes("cost") ||
    m.includes("lcv") ||
    m.includes("p&l") ||
    m.includes("3-way")
  ) {
    return "journal";
  }
  if (
    m.includes("gantt") ||
    m.includes("cpm") ||
    m.includes("milestone") ||
    m.includes("planning") ||
    m.includes("variance") ||
    m.includes("rostering") ||
    m.includes("shift")
  ) {
    return "gantt";
  }
  if (
    m.includes("settlement") ||
    m.includes("exit") ||
    m.includes("asset") ||
    m.includes("team") ||
    m.includes("resource") ||
    m.includes("rfq") ||
    m.includes("vendor") ||
    m.includes("lead") ||
    m.includes("customer")
  ) {
    return "people";
  }
  if (
    m.includes("gate") ||
    m.includes("lock") ||
    m.includes("fraud") ||
    m.includes("ncr") ||
    m.includes("capa") ||
    m.includes("audit") ||
    m.includes("guardrail")
  ) {
    return "shield";
  }
  if (
    m.includes("payroll") ||
    m.includes("gst") ||
    m.includes("invoice") ||
    m.includes("bill") ||
    m.includes("quote") ||
    m.includes("quotation") ||
    m.includes("approval") ||
    m.includes("statutory") ||
    m.includes("msme")
  ) {
    return "document";
  }
  const fallback = ["document", "fingerprint", "factory", "journal", "people"];
  return fallback[idx % fallback.length];
}

export function ModuleComparisonSection({ config }: ModuleComparisonSectionProps) {
  const rows = config.comparison.rows.slice(0, 5);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isHolding) return;
    const handleRelease = () => setIsHolding(false);
    window.addEventListener("mouseup", handleRelease);
    window.addEventListener("touchend", handleRelease);
    window.addEventListener("touchcancel", handleRelease);
    return () => {
      window.removeEventListener("mouseup", handleRelease);
      window.removeEventListener("touchend", handleRelease);
      window.removeEventListener("touchcancel", handleRelease);
    };
  }, [isHolding]);

  const activeMobileIndex = rows.length > 0 ? mobileIndex % rows.length : 0;
  const activeRow = rows[activeMobileIndex];

  // 5-second auto-slider for smartphone comparison cards (pauses while held)
  useEffect(() => {
    if (isHolding || rows.length <= 1) return;
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % rows.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeMobileIndex, isHolding, rows.length]);

  function stepMobileSlide(dir: -1 | 1) {
    if (rows.length === 0) return;
    setMobileIndex((prev) => (prev + dir + rows.length) % rows.length);
  }

  return (
    <section
      id="comparison-section"
      className="module-detail-section relative border-b border-slate-200/80 comparison-section-bg"
    >
      {/* SVG Vector Icon Library (sr-only with zero vertical footprint, preserves gradient definitions) */}
      <svg
        className="sr-only"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <defs>
          <linearGradient id="comp-blue-fill" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#006fc9" />
            <stop offset="1" stopColor="#00569e" />
          </linearGradient>
          <linearGradient id="comp-green-fill" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#10b981" />
            <stop offset="1" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="comp-red-fill" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#ef4444" />
            <stop offset="1" stopColor="#dc2626" />
          </linearGradient>
        </defs>

        <symbol id="crown" viewBox="0 0 48 48">
          <path d="m6 15 10 9 8-17 8 17 10-9-4 26H10Z" fill="url(#comp-blue-fill)" />
          <g fill="currentColor">
            <circle cx="5" cy="13" r="3.5" />
            <circle cx="24" cy="6" r="3.5" />
            <circle cx="43" cy="13" r="3.5" />
          </g>
        </symbol>

        <symbol id="team" viewBox="0 0 48 48">
          <g fill="currentColor">
            <circle cx="24" cy="13" r="9" />
            <path d="M10 42v-6a14 14 0 0 1 28 0v6Z" />
            <circle cx="9" cy="22" r="5" opacity=".86" />
            <circle cx="39" cy="22" r="5" opacity=".86" />
            <path d="M2 39v-4a8 8 0 0 1 10-8 18 18 0 0 0-5 12Zm44 0v-4a8 8 0 0 0-10-8 18 18 0 0 1 5 12Z" opacity=".86" />
          </g>
        </symbol>

        <symbol id="monitor" viewBox="0 0 48 48">
          <rect x="4" y="7" width="40" height="28" rx="3" fill="currentColor" />
          <rect x="8" y="11" width="32" height="20" rx="1" fill="#e2e8f0" />
          <path d="M24 35v6m-7 0h14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </symbol>

        <symbol id="document" viewBox="0 0 64 64">
          <path
            d="M15 7h23l14 14v35H15a4 4 0 0 1-4-4V11a4 4 0 0 1 4-4Z"
            fill="none"
            stroke="url(#comp-blue-fill)"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <path
            d="M36 8v16h15M22 32h20M22 41h20M22 49h7m7 0h6"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>

        <symbol id="fingerprint" viewBox="0 0 64 64">
          <g fill="none" stroke="url(#comp-blue-fill)" strokeWidth="4.2" strokeLinecap="round">
            <path d="M7 31a25 25 0 0 1 50 0m-50 7v-1m49 2-1 5M13 47c3-6 2-10 2-16a17 17 0 0 1 34 0c0 9-1 13 4 19M11 54l3-4M21 53c5-11 2-16 2-22a9 9 0 0 1 18 0c0 14-2 19 6 27M25 59l2-4M32 30c0 9 2 18-3 28m11 1c-4-8-3-13-3-19" />
          </g>
        </symbol>

        <symbol id="factory" viewBox="0 0 64 64">
          <path d="M6 32a3 3 0 0 1 1-2l10-10 11 12 11-12 9 9V9a4 4 0 0 1 4-4h4v27l5 5v21H6Z" fill="url(#comp-blue-fill)" />
          <path d="M13 17v-4m39-3h4" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <circle cx="13" cy="10" r="4.5" fill="currentColor" />
          <g fill="white">
            <circle cx="18" cy="45" r="4.2" />
            <circle cx="34" cy="45" r="4.2" />
            <circle cx="50" cy="45" r="4.2" />
          </g>
        </symbol>

        <symbol id="journal" viewBox="0 0 64 64">
          <rect x="8" y="4" width="49" height="56" rx="6" fill="url(#comp-blue-fill)" />
          <rect x="15" y="11" width="35" height="20" rx="2" fill="white" />
          <path d="M15 40h34M15 49h11m8 0h15m-19-9v13" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <circle cx="24" cy="21" r="4" fill="currentColor" />
          <path d="M34 18h9m-9 6h6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </symbol>

        <symbol id="people" viewBox="0 0 64 64">
          <g fill="url(#comp-blue-fill)">
            <circle cx="19" cy="23" r="10" />
            <circle cx="47" cy="17" r="12" />
            <path d="M1 57v-6a18 18 0 0 1 35-6 19 19 0 0 1 28 0v12Z" />
            <path d="M29 57v-8a19 19 0 0 1 35 0v8Z" />
          </g>
        </symbol>

        <symbol id="boxes" viewBox="0 0 64 64">
          <path d="M12 20 32 8l20 12v24L32 56 12 44Z" fill="url(#comp-blue-fill)" />
          <path
            d="M32 8v48M12 20l20 12 20-12"
            fill="none"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="32" cy="32" r="4" fill="currentColor" />
        </symbol>

        <symbol id="route" viewBox="0 0 64 64">
          <circle cx="16" cy="18" r="8" fill="url(#comp-blue-fill)" />
          <circle cx="48" cy="46" r="8" fill="url(#comp-blue-fill)" />
          <path
            d="M24 18h16a8 8 0 0 1 8 8v12"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="2 6"
          />
          <path
            d="m42 40 6 6 6-6"
            fill="none"
            stroke="url(#comp-blue-fill)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>

        <symbol id="gantt" viewBox="0 0 64 64">
          <rect x="8" y="10" width="48" height="44" rx="6" fill="none" stroke="url(#comp-blue-fill)" strokeWidth="5" />
          <path d="M8 22h48M18 6v8M46 6v8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <rect x="16" y="30" width="16" height="6" rx="3" fill="url(#comp-blue-fill)" />
          <rect x="28" y="42" width="20" height="6" rx="3" fill="currentColor" />
        </symbol>

        <symbol id="shield" viewBox="0 0 64 64">
          <path d="M32 8 14 16v18c0 14 18 22 18 22s18-8 18-22V16Z" fill="url(#comp-blue-fill)" />
          <path d="m24 32 6 6 12-12" fill="none" stroke="white" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>

        <symbol id="check" viewBox="0 0 44 44">
          <circle cx="22" cy="22" r="20" fill="url(#comp-green-fill)" />
          <path d="m13 22 6 6 12-13" fill="none" stroke="white" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>

        <symbol id="warning" viewBox="0 0 44 44">
          <path d="M18.8 5.5a3.6 3.6 0 0 1 6.4 0l16 30A3.6 3.6 0 0 1 38 41H6a3.6 3.6 0 0 1-3.2-5.5Z" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
          <path d="M22 15v12" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="22" cy="33" r="2" fill="white" />
        </symbol>

        <symbol id="cross" viewBox="0 0 44 44">
          <circle cx="22" cy="22" r="20" fill="url(#comp-red-fill)" />
          <path d="m15 15 14 14m0-14L15 29" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
        </symbol>
      </svg>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto module-section-header space-y-1 mb-4 sm:mb-5">
          <h2 className="section-heading">
            {config.comparison.title}
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* SMARTPHONE COMPARISON SLIDER (< 768px)                                     */}
        {/* 5-second auto-slider with hold-to-pause, swipe, arrows & recessed peeks   */}
        {/* ========================================================================= */}
        {activeRow && (
          <div className="block md:hidden">
            {/* Top Mobile Header Bar with Winner Pill & Left/Right Controls */}
            <div className="flex items-center justify-between gap-2 max-w-[390px] mx-auto mb-3 px-1">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f0f7ff] border border-[#bfdbfe] text-[#006fc9] text-[11px] font-bold">
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 48 48" aria-hidden="true">
                    <use href="#crown" />
                  </svg>
                  <span>Mossie ERP vs Alternatives</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => stepMobileSlide(-1)}
                  aria-label="Previous capability comparison"
                  className="w-8 h-8 rounded-full bg-white border border-slate-200/90 shadow-xs flex items-center justify-center text-slate-600 hover:text-[#006fc9] active:scale-95 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => stepMobileSlide(1)}
                  aria-label="Next capability comparison"
                  className="w-8 h-8 rounded-full bg-white border border-slate-200/90 shadow-xs flex items-center justify-center text-slate-600 hover:text-[#006fc9] active:scale-95 transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Slider Card Deck with Left & Right Recessed Peeks */}
            <div
              className="relative w-full max-w-[390px] mx-auto px-3 py-1 select-none [-webkit-touch-callout:none]"
              onMouseDown={() => setIsHolding(true)}
              onMouseUp={() => setIsHolding(false)}
              onMouseLeave={() => setIsHolding(false)}
              onTouchStart={(e) => {
                setIsHolding(true);
                touchStartXRef.current = e.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={(e) => {
                setIsHolding(false);
                if (touchStartXRef.current !== null && e.changedTouches[0]) {
                  const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
                  if (Math.abs(deltaX) > 36) {
                    stepMobileSlide(deltaX < 0 ? 1 : -1);
                  }
                }
                touchStartXRef.current = null;
              }}
              onTouchCancel={() => {
                setIsHolding(false);
                touchStartXRef.current = null;
              }}
              onContextMenu={(e) => e.preventDefault()}
            >
              {/* Recessed Left & Right Card Peeks */}
              <div
                className="absolute inset-y-4 left-0 right-6 rounded-[20px] bg-white border border-slate-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.03)] pointer-events-none z-0"
                aria-hidden="true"
              />
              <div
                className="absolute inset-y-4 left-6 right-0 rounded-[20px] bg-white border border-slate-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.03)] pointer-events-none z-0"
                aria-hidden="true"
              />

              {/* Active Capability Comparison Slide */}
              <div className="relative z-10 flex">
                <AnimatePresence mode="wait">
                  {(() => {
                    const iconId = getFeatureIconId(activeRow.metric, activeMobileIndex);
                    const mossiParsed = parseHighlight(activeRow.mossi.highlight);
                    const legacyParsed = parseHighlight(activeRow.legacy.highlight);
                    const pointSolutionParsed = parseHighlight(activeRow.pointSolution.highlight);

                    return (
                      <motion.div
                        key={`mobile-comp-${activeMobileIndex}-${activeRow.metric}`}
                        initial={{ opacity: 0, x: 22, scale: 0.97 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -22, scale: 0.97 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className={`w-full rounded-[20px] bg-white border p-4 transition-shadow duration-200 select-none ${
                          isHolding
                            ? "border-[#006fc9] shadow-[0_14px_34px_-8px_rgba(0,111,201,0.20)]"
                            : "border-slate-200/90 shadow-[0_10px_28px_-6px_rgba(15,23,42,0.08)]"
                        }`}
                      >
                        {/* 1. Capability Header */}
                        <div className="flex items-start gap-3 pb-3.5 mb-3.5 border-b border-slate-100">
                          <span className="feature-icon !w-11 !h-11 !rounded-[12px] shrink-0">
                            <svg aria-hidden="true" className="!w-6 !h-6">
                              <use href={`#${iconId}`} />
                            </svg>
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2 mb-0.5">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#006fc9]">
                                Key Capability {activeMobileIndex + 1}/{rows.length}
                              </span>
                            </div>
                            <h3 className="text-[15px] font-extrabold text-slate-900 leading-snug tracking-tight">
                              {cleanMetric(activeRow.metric)}
                            </h3>
                            {activeRow.metricDesc && (
                              <p className="text-[11.5px] text-slate-500 leading-relaxed mt-1 line-clamp-2">
                                {activeRow.metricDesc}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* 2. Vendor Comparison Rows */}
                        <div className="space-y-2">
                          {/* Mossie ERP Winner Box */}
                          <div className="flex items-center gap-2.5 p-2.5 rounded-[12px] bg-[#f0f7ff] border-[1.5px] border-[#bfdbfe]">
                            <span className={`status ${mossiParsed.status} !w-7 !h-7 shrink-0`}>
                              <svg aria-hidden="true" className="!w-6 !h-6">
                                <use
                                  href={`#${
                                    mossiParsed.status === "positive"
                                      ? "check"
                                      : mossiParsed.status === "limited"
                                      ? "warning"
                                      : "cross"
                                  }`}
                                />
                              </svg>
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1 text-[9.5px] font-extrabold uppercase tracking-wider text-[#006fc9]">
                                <svg className="w-3 h-3 shrink-0" viewBox="0 0 48 48" aria-hidden="true">
                                  <use href="#crown" />
                                </svg>
                                <span>Mossie ERP</span>
                              </div>
                              <div className="text-[13px] font-bold text-slate-900 leading-snug">
                                {mossiParsed.label}
                              </div>
                            </div>
                          </div>

                          {/* Competitor 1 Box */}
                          <div className="flex items-center gap-2.5 p-2.5 rounded-[12px] bg-slate-50/70 border border-slate-200/70">
                            <span className={`status ${legacyParsed.status} !w-7 !h-7 shrink-0`}>
                              <svg aria-hidden="true" className="!w-6 !h-6">
                                <use
                                  href={`#${
                                    legacyParsed.status === "positive"
                                      ? "check"
                                      : legacyParsed.status === "limited"
                                      ? "warning"
                                      : "cross"
                                  }`}
                                />
                              </svg>
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="text-[9.5px] font-bold uppercase tracking-wider text-slate-500">
                                {config.comparison.competitor1Name}
                              </div>
                              <div className="text-[12.5px] font-semibold text-slate-700 leading-snug">
                                {legacyParsed.label}
                              </div>
                            </div>
                          </div>

                          {/* Competitor 2 Box */}
                          <div className="flex items-center gap-2.5 p-2.5 rounded-[12px] bg-slate-50/70 border border-slate-200/70">
                            <span className={`status ${pointSolutionParsed.status} !w-7 !h-7 shrink-0`}>
                              <svg aria-hidden="true" className="!w-6 !h-6">
                                <use
                                  href={`#${
                                    pointSolutionParsed.status === "positive"
                                      ? "check"
                                      : pointSolutionParsed.status === "limited"
                                      ? "warning"
                                      : "cross"
                                  }`}
                                />
                              </svg>
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="text-[9.5px] font-bold uppercase tracking-wider text-slate-500">
                                {config.comparison.competitor2Name}
                              </div>
                              <div className="text-[12.5px] font-semibold text-slate-700 leading-snug">
                                {pointSolutionParsed.label}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })()}
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Pagination Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-3.5">
              {rows.map((row, idx) => (
                <button
                  key={`comp-dot-${idx}-${row.metric}`}
                  type="button"
                  onClick={() => setMobileIndex(idx)}
                  aria-label={`Show capability ${idx + 1}: ${cleanMetric(row.metric)}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeMobileIndex
                      ? "w-5 bg-[#006fc9]"
                      : "w-1.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* DESKTOP & TABLET 4-COLUMN COMPARISON TABLE (>= 768px)                      */}
        {/* ========================================================================= */}
        <div className="hidden md:block">
          <div className="comparison-prototype-wrap">
            <div className="comparison-card" aria-label={config.comparison.title}>
              {/* 4-Column Grid Table */}
              <table className="comparison-table" role="table" aria-label="Competitive feature comparison matrix">
                <thead className="comparison-thead" role="rowgroup">
                  <tr className="comparison-tr" role="row">
                    <th className="comparison-th capability-heading" scope="col" role="columnheader">
                      Key Capability
                    </th>
                    <th className="comparison-th vendor-heading mossie-heading" scope="col" role="columnheader">
                      <svg className="vendor-icon" aria-hidden="true">
                        <use href="#crown" />
                      </svg>
                      <span className="brand-name">Mossie ERP</span>
                    </th>
                    <th className="comparison-th vendor-heading standalone-heading" scope="col" role="columnheader">
                      <svg className="vendor-icon" aria-hidden="true">
                        <use href="#team" />
                      </svg>
                      <span>{config.comparison.competitor1Name}</span>
                    </th>
                    <th className="comparison-th vendor-heading traditional-heading" scope="col" role="columnheader">
                      <svg className="vendor-icon" aria-hidden="true">
                        <use href="#monitor" />
                      </svg>
                      <span>{config.comparison.competitor2Name}</span>
                    </th>
                  </tr>
                </thead>

                <tbody className="comparison-tbody" role="rowgroup">
                  {rows.map((row: ComparisonRow, idx: number) => {
                    const iconId = getFeatureIconId(row.metric, idx);
                    const mossiParsed = parseHighlight(row.mossi.highlight);
                    const legacyParsed = parseHighlight(row.legacy.highlight);
                    const pointSolutionParsed = parseHighlight(row.pointSolution.highlight);

                    return (
                      <tr key={idx} className="comparison-tr" role="row">
                        {/* 1. Capability Header Cell */}
                        <th className="comparison-th capability" scope="row" role="rowheader">
                          <span className="feature-icon">
                            <svg aria-hidden="true">
                              <use href={`#${iconId}`} />
                            </svg>
                          </span>
                          <span className="feature-text-block">
                            <span className="feature-title">{cleanMetric(row.metric)}</span>
                            {row.metricDesc && (
                              <span className="feature-description">{row.metricDesc}</span>
                            )}
                          </span>
                        </th>

                        {/* 2. Mossie ERP (Winner Cell) */}
                        <td className="comparison-td result mossie" role="cell">
                          <span className={`status ${mossiParsed.status}`}>
                            <svg aria-hidden="true">
                              <use href={`#${mossiParsed.status === "positive" ? "check" : mossiParsed.status === "limited" ? "warning" : "cross"}`} />
                            </svg>
                          </span>
                          <span className="result-text-block">
                            <span className="mobile-label" aria-hidden="true">
                              Mossie ERP
                            </span>
                            <span className="result-highlight-title">{mossiParsed.label}</span>
                          </span>
                        </td>

                        {/* 3. Competitor 1 Cell */}
                        <td className="comparison-td result standalone" role="cell">
                          <span className={`status ${legacyParsed.status}`}>
                            <svg aria-hidden="true">
                              <use href={`#${legacyParsed.status === "positive" ? "check" : legacyParsed.status === "limited" ? "warning" : "cross"}`} />
                            </svg>
                          </span>
                          <span className="result-text-block">
                            <span className="mobile-label" aria-hidden="true">
                              {config.comparison.competitor1Name}
                            </span>
                            <span className="result-highlight-title">{legacyParsed.label}</span>
                          </span>
                        </td>

                        {/* 4. Competitor 2 Cell */}
                        <td className="comparison-td result traditional" role="cell">
                          <span className={`status ${pointSolutionParsed.status}`}>
                            <svg aria-hidden="true">
                              <use href={`#${pointSolutionParsed.status === "positive" ? "check" : pointSolutionParsed.status === "limited" ? "warning" : "cross"}`} />
                            </svg>
                          </span>
                          <span className="result-text-block">
                            <span className="mobile-label" aria-hidden="true">
                              {config.comparison.competitor2Name}
                            </span>
                            <span className="result-highlight-title">{pointSolutionParsed.label}</span>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
