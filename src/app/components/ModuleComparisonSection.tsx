import React from "react";
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
          <span className="text-xs font-bold text-[#006fc9] tracking-wider uppercase">
            {config.comparison.eyebrow}
          </span>
          <h2 className="text-[22px] sm:text-[28px] font-extrabold text-[#0F172A] tracking-tight leading-tight">
            {config.comparison.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
            {config.comparison.subtitle}
          </p>
        </div>

        {/* Prototype Card Container */}
        <div className="comparison-prototype-wrap">
          <div className="comparison-card" aria-label={config.comparison.title}>
            {/* Mobile Header Banner */}
            <div className="mobile-heading" aria-hidden="true">
              <p>
                Key capabilities
                <span>{config.comparison.competitor1Name} vs {config.comparison.competitor2Name}</span>
              </p>
              <div className="mobile-winner">
                <svg viewBox="0 0 48 48">
                  <use href="#crown" />
                </svg>
                <div>
                  Mossie ERP
                </div>
              </div>
            </div>

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
    </section>
  );
}
