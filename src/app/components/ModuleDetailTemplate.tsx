"use client";

import { useState, useEffect, useRef, type KeyboardEvent, type CSSProperties } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Barcode,
  Bell,
  Blocks,
  BookOpen,
  Boxes,
  Building2,
  Calculator,
  CalendarDays,
  ChartGantt,
  ChartNoAxesCombined,
  Check,
  CheckCheck,
  ChevronRight,
  Circle,
  Clock3,
  Coins,
  Factory,
  Files,
  Fingerprint,
  FolderOpen,
  Gauge,
  GitBranch,
  Kanban,
  Landmark,
  Layers3,
  LayoutDashboard,
  LockKeyhole,
  MessagesSquare,
  Monitor,
  Network,
  PackageCheck,
  ReceiptText,
  RefreshCw,
  Route,
  ScanSearch,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Truck,
  Undo2,
  UsersRound,
  Wallet,
  X,
} from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ConnectedWorkflowFlow from "./modules/ConnectedWorkflowFlow";
import {
  MODULES_DATA,
  type EdgeSuperpower,
  type FeatureIconName,
  type FeatureVisual,
  type ModulePageConfig,
} from "./modules/moduleData";

/* ========================================================================= */
/* 1. FEATURE ICON MAPPING COMPONENT                                         */
/* Maps dynamic icon keys from moduleData.ts to Lucide React SVG icons.      */
/* ========================================================================= */

const ICONS_MAP = {
  messages: MessagesSquare,
  activity: Activity,
  files: Files,
  scan: ScanSearch,
  building: Building2,
  calendar: CalendarDays,
  route: Route,
  receipt: ReceiptText,
  truck: Truck,
  ledger: BookOpen,
  boxes: Boxes,
  refresh: RefreshCw,
  warehouse: PackageCheck,
  barcode: Barcode,
  coins: Coins,
  factory: Factory,
  lock: LockKeyhole,
  layers: Layers3,
  clock: Clock3,
  chart: ChartNoAxesCombined,
  bank: Landmark,
  shield: ShieldCheck,
  network: Network,
  undo: Undo2,
  asset: Blocks,
  check: CheckCheck,
  calculator: Calculator,
  git: GitBranch,
  gauge: Gauge,
  monitor: Monitor,
  fingerprint: Fingerprint,
  users: UsersRound,
  wallet: Wallet,
  folder: FolderOpen,
  gantt: ChartGantt,
  kanban: Kanban,
  target: Target,
} satisfies Record<FeatureIconName, typeof Activity>;

/**
 * FeatureIcon: Renders consistent, stroke-normalized SVG icons for features,
 * navigation tabs, and mockup previews.
 */
function FeatureIcon({ name, className }: { name: FeatureIconName; className?: string }) {
  const IconComponent = ICONS_MAP[name] ?? BadgeCheck;
  return <IconComponent className={className} strokeWidth={1.7} aria-hidden="true" />;
}

/* ========================================================================= */
/* 2. DYNAMIC ILLUSTRATIVE MOCKUPS (FEATURE PREVIEWS)                        */
/* Renders domain-specific UI representations (Kanban, Ledger, Schedule,     */
/* Stock Racks, Team Roster, Revision History, 3-Way Matching, Approvals).   */
/* Content dynamically adapts based on the active feature's visual metadata. */
/* ========================================================================= */

function PreviewContent({ visual }: { visual: FeatureVisual }) {
  const { kind, steps } = visual;

  // 1. Kanban Pipeline / Production Work Order Board
  if (kind === "pipeline" || kind === "production") {
    return (
      <div className="mf-board">
        {steps.map((step, index) => (
          <div className="mf-board-column" key={step}>
            <span className="mf-board-label">
              <i />
              {step}
            </span>
            {[0, 1, 2].slice(0, 3 - (index % 2)).map((card) => (
              <div className="mf-board-card" key={card}>
                <span className="mf-mini-label">
                  {kind === "production" ? "WORK ORDER" : "ACTIVITY"} 0{index + card + 1}
                </span>
                <div className="mf-skeleton" />
                <div className="mf-short-skeleton" />
                <div className="mf-board-card-footer">
                  <span className="mf-avatar">{index + card + 1}</span>
                  <span className="mf-mini-pill">{index === 2 ? "Complete" : "In progress"}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  // 2. Schedule & Gantt Timeline View
  if (kind === "schedule") {
    return (
      <div className="mf-schedule">
        <div className="mf-schedule-days">
          <span>This week</span>
          {["MON", "TUE", "WED", "THU", "FRI"].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        {steps.map((step, index) => (
          <div className="mf-schedule-row" key={step}>
            <span>{step}</span>
            <div className="mf-schedule-track">
              <i
                style={
                  {
                    "--offset": `${index * 20}%`,
                    "--span": `${65 - index * 10}%`,
                  } as CSSProperties
                }
              >
                <Check size={12} />
                {index === 2 ? "Ready" : "Scheduled"}
              </i>
            </div>
          </div>
        ))}
        <div className="mf-preview-footer">
          <FeatureIcon name="calendar" />
          <span>A connected plan, from start to finish</span>
        </div>
      </div>
    );
  }

  // 3. Multi-Warehouse Stock & Inventory Grid
  if (kind === "stock") {
    return (
      <div className="mf-stock-view">
        <div className="mf-racks">
          {[0, 1, 2].map((rack) => (
            <div className="mf-rack" key={rack}>
              <span>ZONE 0{rack + 1}</span>
              <div>
                {Array.from({ length: 9 }, (_, box) => (
                  <i key={box} data-filled={(rack + box) % 4 !== 0}>
                    <FeatureIcon name="boxes" />
                  </i>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mf-stock-rows">
          {steps.map((step, index) => (
            <div key={step}>
              <span className="mf-dot" />
              <span>{step}</span>
              <span className="mf-stock-bar">
                <i style={{ width: `${88 - index * 19}%` }} />
              </span>
              <Check size={13} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 4. Financial General Ledger & Balanced Bar Chart
  if (kind === "ledger") {
    return (
      <div className="mf-ledger-view">
        <div className="mf-chart-header">
          <span>Financial overview</span>
          <span className="mf-mini-pill">
            Balanced <Check size={11} />
          </span>
        </div>
        <div className="mf-chart">
          {[35, 49, 43, 65, 58, 78, 71, 93].map((height, index) => (
            <div key={index}>
              <i style={{ height: `${height}%` }} />
              <i style={{ height: `${height * 0.7}%` }} />
            </div>
          ))}
        </div>
        <div className="mf-ledger-rows">
          {steps.map((step, index) => (
            <div key={step}>
              <span>0{index + 1}</span>
              <strong>{step}</strong>
              <Check size={14} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 5. HRMS Team Roster & Workforce Directory
  if (kind === "people") {
    return (
      <div className="mf-people-view">
        <div className="mf-profile">
          <div className="mf-profile-avatar">
            <FeatureIcon name={visual.icon} />
          </div>
          <div>
            <strong>{visual.title}</strong>
            <div className="mf-short-skeleton" />
            <span className="mf-mini-pill">Connected workspace</span>
          </div>
        </div>
        {steps.map((step, index) => (
          <div className="mf-person-row" key={step}>
            <span className="mf-avatar">{["AK", "SM", "RP"][index]}</span>
            <div>
              <strong>{step}</strong>
              <div className="mf-short-skeleton" />
            </div>
            <span className="mf-mini-pill">
              <Check size={12} /> Verified
            </span>
          </div>
        ))}
      </div>
    );
  }

  // 6. Version History & Audit Trail Document Tree
  if (kind === "versions") {
    return (
      <div className="mf-versions-view">
        <div className="mf-documents">
          {steps.map((step, index) => (
            <div className="mf-document" key={step}>
              <span className="mf-mini-label">REVISION 0{index + 1}</span>
              <FeatureIcon name={visual.icon} />
              <strong>{step}</strong>
              <div className="mf-skeleton" />
              <div className="mf-short-skeleton" />
              <span className="mf-mini-pill">{index === 2 ? "Current" : "Saved"}</span>
            </div>
          ))}
        </div>
        <div className="mf-preview-footer">
          <FeatureIcon name="git" />
          <span>Complete history. Nothing overwritten.</span>
        </div>
      </div>
    );
  }

  // 7. 3-Way Matching & Quality Inspection Checks
  if (kind === "matching" || kind === "quality") {
    return (
      <div className="mf-matching-view">
        <div className="mf-matching-header">
          <span className="mf-check-seal">
            <FeatureIcon name={kind === "quality" ? "shield" : "scan"} />
          </span>
          <div>
            <strong>{kind === "quality" ? "Checks & controls" : "Intelligent verification"}</strong>
            <p>{visual.metric}</p>
          </div>
        </div>
        {steps.map((step, index) => (
          <div className="mf-match-row" key={step}>
            <span className="mf-row-number">0{index + 1}</span>
            <strong>{step}</strong>
            <span className="mf-match-dashes" />
            <span className="mf-verified">
              <Check size={14} />
              {kind === "quality" ? "Checked" : "Matched"}
            </span>
          </div>
        ))}
        <div className="mf-preview-footer">
          <FeatureIcon name="check" />
          <span>A clear, traceable audit trail</span>
        </div>
      </div>
    );
  }

  // 8. Default Approval & Workflow Status Feed
  return (
    <div className="mf-approval-view">
      <div className="mf-approval-filters">
        <span>All records</span>
        <span>In progress</span>
        <span>
          Approved <Check size={11} />
        </span>
      </div>
      <div className="mf-table-head">
        <span>WORKFLOW</span>
        <span>STATUS</span>
      </div>
      {steps.map((step, index) => (
        <div className="mf-approval-row" key={step}>
          <span className="mf-avatar">0{index + 1}</span>
          <strong>{step}</strong>
          <span className="mf-mini-pill">
            <Check size={11} />
            {index === 2 ? "Approved" : "Complete"}
          </span>
        </div>
      ))}
      <div className="mf-preview-footer">
        <FeatureIcon name={visual.icon} />
        <span>{visual.metric}</span>
      </div>
    </div>
  );
}

/**
 * FeatureIllustration: The composite laptop frame + dynamic preview canvas
 * placed beside the active catalog item or inside the modal dialog.
 */
function FeatureIllustration({ visual, moduleName }: { visual: FeatureVisual; moduleName: string }) {
  const shortModuleName = moduleName.replace(/ Module$/, "");
  return (
    <div
      className="mf-illustration"
      data-tone={visual.tone}
      role="img"
      aria-label={`${shortModuleName} preview: ${visual.title}. ${visual.steps.join(" → ")}. ${visual.metric}.`}
    >
      <div className="mf-art-content" aria-hidden="true">
        <div className="mf-halo" />
        <div className="mf-swoosh" />
        <svg className="mf-connection" viewBox="0 0 600 180" fill="none">
          <path d="M50 150C180-30 420-15 550 150" stroke="currentColor" strokeDasharray="6 6" />
          <circle cx="225" cy="40" r="7" fill="currentColor" />
          <circle cx="431" cy="67" r="5" fill="currentColor" />
          <path
            d="m294 31 30-9-10 30-5-16-15-5Zm15 5 15-14"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>

        {/* Top-left Origin Notification */}
        <div className="mf-notice mf-notice-start">
          <span className="mf-notice-icon">
            <FeatureIcon name={visual.icon} />
          </span>
          <div>
            <strong>{visual.steps[0]}</strong>
            <small>{shortModuleName}</small>
          </div>
        </div>

        {/* Top-right Destination Sync Notification */}
        <div className="mf-notice mf-notice-end">
          <span className="mf-success-icon">
            <Check />
          </span>
          <div>
            <strong>{visual.steps[2]}</strong>
            <small>Connected in Mossie ERP</small>
          </div>
        </div>

        {/* 3D Angled Laptop Shell */}
        <div className="mf-laptop">
          <div className="mf-screen">
            {/* SaaS Mini Sidebar */}
            <div className="mf-sidebar">
              <div className="mf-preview-brand">
                <span>M</span>Mossie ERP
              </div>
              <div>
                <LayoutDashboard />Overview
              </div>
              <div className="mf-sidebar-active">
                <FeatureIcon name={visual.icon} />
                {shortModuleName}
              </div>
              <div>
                <FeatureIcon name="chart" />Reports
              </div>
              <div>
                <FeatureIcon name="refresh" />Automation
              </div>
              <div>
                <FeatureIcon name="shield" />Activity log
              </div>
              <span className="mf-workspace-status">
                <Circle />Workspace connected
              </span>
            </div>

            {/* Inner App Dashboard */}
            <div className="mf-preview-app">
              <div className="mf-app-bar">
                <Search size={12} />
                <span>Search your workspace...</span>
                <Bell size={14} />
                <span className="mf-avatar">MS</span>
              </div>
              <div className="mf-app-heading">
                <div>
                  <span className="mf-mini-label">{shortModuleName} / Overview</span>
                  <h4>{visual.title}</h4>
                </div>
                <span className="mf-app-icon">
                  <FeatureIcon name={visual.icon} />
                </span>
              </div>
              <PreviewContent visual={visual} />
              <div className="mf-app-bottom">
                <span>
                  <i /> All changes saved
                </span>
                <span>Illustrative preview</span>
              </div>
            </div>
          </div>
          <div className="mf-laptop-base" />
        </div>

        {/* Floating Step Action Pill */}
        <div className="mf-floating-document">
          <span className="mf-tile" data-tone={visual.tone}>
            <FeatureIcon name={visual.icon} />
          </span>
          <strong>{visual.title}</strong>
          <div className="mf-skeleton" />
          <div className="mf-short-skeleton" />
          <span className="mf-document-action">
            {visual.steps[1]}
            <ArrowRight size={13} />
          </span>
        </div>

        {/* Floating Advantage Badge */}
        <div className="mf-floating-success">
          <span className="mf-success-icon">
            <Sparkles />
          </span>
          <div>
            <small>THE MOSSIE ERP ADVANTAGE</small>
            <strong>{visual.metric}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 3. HERO RIGHT-COLUMN INTERACTIVE PREVIEW MOCKUP                           */
/* Clean, straight, high-density live operations preview window.             */
/* Features a dark SaaS sidebar, top search bar, live KPIs, 3-column kanban, */
/* and an interactive AI Sentinel dispatch action.                           */
/* ========================================================================= */

interface ModuleHeroPreviewProps {
  config: ModulePageConfig;
  sentinelApproved: boolean;
  onApproveSentinel: () => void;
}

function ModuleHeroPreview({
  config,
  sentinelApproved,
  onApproveSentinel,
}: ModuleHeroPreviewProps) {
  const tone = config.edge?.superpowers?.[0]?.visual?.tone || "blue";
  const primaryIcon = config.featuresCatalog?.items?.[0]?.visual?.icon || "chart";

  return (
    <div
      className="mf-hero-container"
      data-tone={tone}
      role="region"
      aria-label={`${config.moduleName} Live Operations Preview`}
    >
      <div className="mf-hero-window">
        {/* SaaS Dark Left Sidebar */}
        <div className="mf-hero-sidebar" aria-hidden="true">
          <div className="mf-sidebar-brand">
            <span>M</span>Mossie ERP
          </div>
          <div className="mf-sidebar-item">
            <LayoutDashboard size={14} />
            <span>Overview</span>
          </div>
          <div className="mf-sidebar-item mf-sidebar-item-active">
            <FeatureIcon name={primaryIcon} />
            <span>{config.moduleName.replace(/ Management| Solutions| Suite/, "")}</span>
          </div>
          <div className="mf-sidebar-item">
            <FeatureIcon name="chart" />
            <span>Reports</span>
          </div>
          <div className="mf-sidebar-item">
            <FeatureIcon name="refresh" />
            <span>Automation</span>
          </div>
          <div className="mf-sidebar-item">
            <FeatureIcon name="shield" />
            <span>Audit Log</span>
          </div>
          <div className="mf-sidebar-status">
            <Circle size={8} />
            <span>Live engine</span>
          </div>
        </div>

        {/* Inner Dashboard Canvas */}
        <div className="mf-hero-main-canvas">
          {/* Top App Bar */}
          <div className="mf-hero-app-bar">
            <div className="mf-hero-search-bar">
              <Search size={12} className="text-slate-400 shrink-0" />
              <span>Search {config.moduleName.toLowerCase()} records...</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-500 hover:text-slate-700">
                <Bell size={12} />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-blue-600" />
              </span>
              <span className="mf-hero-avatar">MS</span>
            </div>
          </div>

          {/* App Heading */}
          <div className="mf-hero-app-heading">
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase block">
                {config.moduleName} / Live Operations
              </span>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight leading-tight truncate mt-0.5">
                {config.mockup.windowTitle}
              </h4>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[10px] font-bold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {config.mockup.liveBadge}
            </span>
          </div>

          {/* 1. Top Metrics Row */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            {config.mockup.topMetrics.map((tm, idx) => (
              <div
                key={idx}
                className="bg-white px-2 py-1.5 rounded-lg border border-slate-200/90 shadow-2xs"
              >
                <div className="text-[9px] text-slate-500 font-medium truncate leading-tight">
                  {tm.label}
                </div>
                <div className="text-xs sm:text-sm font-black text-slate-900 font-mono tracking-tight leading-tight my-0.5">
                  {tm.value}
                </div>
                <div className={`text-[8px] leading-tight truncate font-bold ${tm.subColor}`}>
                  {tm.sub}
                </div>
              </div>
            ))}
          </div>

          {/* 2. Interactive Kanban Simulator */}
          <div className="bg-white p-2 rounded-lg border border-slate-200/90 shadow-2xs space-y-1">
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
                      ? "bg-slate-50/80 border-slate-200/70"
                      : idx === 2
                      ? "bg-emerald-50/40 border-emerald-200/60"
                      : "bg-slate-50/80 border-slate-200/70"
                  }`}
                >
                  <div className="text-[8px] font-black text-slate-500 uppercase tracking-wider flex justify-between items-center gap-0.5">
                    <span className="truncate">{col.stageName}</span>
                    <span className="font-mono shrink-0">{col.amount}</span>
                  </div>
                  <div
                    className={`bg-white p-1.5 rounded-md border shadow-2xs space-y-1 ${
                      col.isHighlighted
                        ? "border-blue-400 ring-1 ring-blue-400/20"
                        : idx === 2
                        ? "border-emerald-300"
                        : "border-slate-200"
                    }`}
                  >
                    <div className="text-[9px] font-bold text-slate-900 leading-tight truncate">
                      {col.cardTitle}
                    </div>
                    <div className="text-[8px] text-slate-400 leading-tight truncate">
                      {col.cardDesc}
                    </div>
                    <span
                      className={`inline-block px-1.5 py-0.5 rounded text-[7.5px] font-extrabold leading-none ${col.cardTagStyle}`}
                    >
                      {col.cardTag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Automated Activity Feed with Interactive Sentinel */}
          <div className="bg-white px-2 py-1.5 rounded-lg border border-slate-200/90 text-[10px] flex items-center justify-between gap-2 shadow-2xs">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black text-[9px] shrink-0">
                AI
              </span>
              <span className="text-slate-700 font-medium text-[9.5px] truncate">
                {config.mockup.alertText}
              </span>
            </div>
            <button
              type="button"
              onClick={onApproveSentinel}
              className={`px-2.5 py-1 rounded-lg font-bold text-[8.5px] transition-all shrink-0 active:scale-95 cursor-pointer ${
                sentinelApproved
                  ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
              }`}
            >
              {sentinelApproved ? "✓ Dispatched" : config.mockup.alertAction}
            </button>
          </div>

          {/* Bottom Sync Bar */}
          <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-slate-200/60 mt-auto">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live data feed connected
            </span>
            <span className="font-semibold text-slate-500">{config.badge}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 4. "THE MOSSIE ERP EDGE": HIGHLIGHTED SUPERPOWERS (MAX 5)                 */
/* High-contrast cards showcasing how Mossie ERP outperforms competitors.    */
/* Clicking any card opens an accessible modal with in-depth illustration.   */
/* ========================================================================= */

function HighlightedFeatures({ config }: { config: ModulePageConfig }) {
  const [selected, setSelected] = useState<EdgeSuperpower | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingId = `${config.slug}-highlighted-heading`;

  function openFeature(feature: EdgeSuperpower) {
    setSelected(feature);
    dialogRef.current?.showModal();
  }

  return (
    <section
      id="edge-section"
      className="mf-section mf-highlights module-detail-section"
      aria-labelledby={headingId}
    >
      <div className="mf-container">
        {/* Section Intro */}
        <header className="mf-heading">
          <p className="mf-eyebrow">{config.edge.eyebrow || "Highlighted features"}</p>
          <h2 id={headingId}>
            {config.edge.title}
            <span>{config.edge.titleHighlight}</span>
          </h2>
        </header>

        {/* Superpowers Grid (Capped at 5 per user instructions) */}
        <div className="mf-cards">
          {config.edge.superpowers.slice(0, 5).map((feature) => (
            <button
              className="mf-card"
              type="button"
              key={feature.id}
              onClick={() => openFeature(feature)}
              aria-haspopup="dialog"
            >
              <span className="mf-tile" data-tone={feature.visual.tone}>
                <FeatureIcon name={feature.visual.icon} />
              </span>
              <span className="mf-card-arrow">
                <ChevronRight size={18} />
              </span>
              <h3>{feature.visual.title}</h3>
              <p>{feature.summary}</p>
              <span className="mf-card-link">
                Explore feature <ArrowRight size={15} />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Accessible Interactive Detail Modal */}
      <dialog
        ref={dialogRef}
        className="mf-section mf-dialog"
        aria-labelledby={`${config.slug}-feature-dialog-title`}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          ) {
            dialogRef.current?.close();
          }
        }}
      >
        <button
          className="mf-close-dialog"
          type="button"
          aria-label="Close feature details"
          onClick={() => dialogRef.current?.close()}
          autoFocus
        >
          <X size={21} />
        </button>

        {selected && (
          <div className="mf-dialog-layout">
            <div className="mf-dialog-copy">
              <p className="mf-eyebrow">Highlighted feature</p>
              <span className="mf-tile" data-tone={selected.visual.tone}>
                <FeatureIcon name={selected.visual.icon} />
              </span>
              <h2 id={`${config.slug}-feature-dialog-title`}>{selected.title}</h2>
              <p>{selected.description}</p>

              {/* Head-to-head Comparison Strip */}
              <div className="mf-comparison-notes">
                <div>
                  <span>Without connected tools</span>
                  <p>{selected.legacyComparison.replace(/^✕\s*Legacy[^:]*:\s*/, "")}</p>
                </div>
                <div>
                  <span>
                    <Check size={14} /> With Mossie ERP
                  </span>
                  <p>{selected.mossiComparison.replace(/^✓\s*(?:MossiERP|Mossie ERP):\s*/, "")}</p>
                </div>
              </div>
              <div className="mf-impact">
                <Check size={16} />
                {selected.impactMetric}
              </div>
            </div>
            <FeatureIllustration
              visual={selected.visual}
              moduleName={config.featuresCatalog.previewName}
            />
          </div>
        )}
      </dialog>
    </section>
  );
}

/* ========================================================================= */
/* 5. "ALL FEATURES" TABBED & SEARCHABLE EXPLORER MATRIX                      */
/* Allows filtering features by search query, vertical tab list,            */
/* and synchronizes preview mockup on the right.                              */
/* ========================================================================= */

function AllFeatures({ config }: { config: ModulePageConfig }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedId, setSelectedId] = useState(config.featuresCatalog.items[0]?.id);
  const navRef = useRef<HTMLDivElement>(null);
  const headingId = `${config.slug}-all-features-heading`;
  const panelId = `${config.slug}-feature-panel`;

  // Filter features by query and category
  const query = searchQuery.trim().toLowerCase();
  const filteredFeatures = config.featuresCatalog.items.filter(
    (item) =>
      (selectedCategory === "all" || item.category === selectedCategory) &&
      (!query ||
        [item.title, item.visual.title, item.description, item.categoryLabel, ...item.bullets].some(
          (text) => text.toLowerCase().includes(query)
        ))
  );
  const selected = filteredFeatures.find((f) => f.id === selectedId) ?? filteredFeatures[0];

  // Auto-scroll active tab into view in vertical explorer
  useEffect(() => {
    if (!selected) return;
    const activeTab = navRef.current?.querySelector<HTMLButtonElement>(
      `[id="${config.slug}-tab-${selected.id}"]`
    );
    if (activeTab && navRef.current) {
      const nav = navRef.current;
      const tabTop = activeTab.offsetTop;
      const tabBottom = tabTop + activeTab.offsetHeight;
      if (tabTop < nav.scrollTop || tabBottom > nav.scrollTop + nav.clientHeight) {
        activeTab.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [selected, config.slug]);

  function resetFilters() {
    setSearchQuery("");
    setSelectedCategory("all");
  }

  function navigateFeatures(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight")
      next = (index + 1) % filteredFeatures.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      next = (index - 1 + filteredFeatures.length) % filteredFeatures.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = filteredFeatures.length - 1;
    else return;
    event.preventDefault();
    setSelectedId(filteredFeatures[next].id);
    navRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }

  return (
    <section
      id="features-matrix"
      className="mf-section mf-catalog module-detail-section"
      aria-labelledby={headingId}
    >
      <div className="mf-container">
        {/* Section Header + Search Input */}
        <div className="mf-catalog-header">
          <header className="mf-heading">
            <p className="mf-eyebrow">{config.featuresCatalog.eyebrow || "All features"}</p>
            <h2 id={headingId}>
              Everything you need to <span>{config.featuresCatalog.headline.action}</span>
            </h2>
            <p className="mf-intro">{config.featuresCatalog.headline.description}</p>
          </header>

          {/* Live Search Bar */}
          <div className="mf-search">
            <Search size={18} aria-hidden="true" />
            <label htmlFor={`${config.slug}-feature-search`} className="mf-sr-only">
              Search {config.moduleName} features
            </label>
            <input
              id={`${config.slug}-feature-search`}
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Find a feature…"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear feature search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <span className="mf-sr-only" role="status">
          {filteredFeatures.length} features found
        </span>

        {/* Master-Detail Explorer */}
        {selected ? (
          <div className="mf-explorer">
            {/* Left Tabs List */}
            <div
              className="mf-nav"
              ref={navRef}
              role="tablist"
              aria-label={`${config.moduleName} features`}
              aria-orientation="vertical"
            >
              {filteredFeatures.map((feature, index) => (
                <button
                  type="button"
                  role="tab"
                  key={feature.id}
                  id={`${config.slug}-tab-${feature.id}`}
                  aria-selected={selected.id === feature.id}
                  aria-controls={panelId}
                  tabIndex={selected.id === feature.id ? 0 : -1}
                  onClick={() => setSelectedId(feature.id)}
                  onKeyDown={(event) => navigateFeatures(event, index)}
                  className="mf-tab"
                >
                  <span className="mf-tile" data-tone={feature.visual.tone}>
                    <FeatureIcon name={feature.visual.icon} />
                  </span>
                  <strong>{feature.visual.title}</strong>
                  {selected.id === feature.id ? (
                    <ArrowRight className="mf-tab-arrow" />
                  ) : (
                    <ChevronRight className="mf-tab-arrow" />
                  )}
                </button>
              ))}
            </div>

            {/* Right Active Feature Panel */}
            <div
              id={panelId}
              className="mf-panel"
              role="tabpanel"
              tabIndex={0}
              aria-labelledby={`${config.slug}-tab-${selected.id}`}
            >
              <div className="mf-details">
                <div className="mf-details-header">
                  <span className="mf-tile" data-tone={selected.visual.tone}>
                    <FeatureIcon name={selected.visual.icon} />
                  </span>
                  <div className="mf-heading-block">
                    <span className="mf-category-badge">
                      <i />
                      {selected.categoryLabel}
                    </span>
                    <h3>{selected.visual.title}</h3>
                  </div>
                </div>
                <p>{selected.description}</p>
                <ul className="mf-benefits">
                  {selected.bullets.map((bullet) => (
                    <li key={bullet}>
                      <span>
                        <Check size={13} />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a className="mf-primary-btn" href="#contact">
                  Explore with a demo <ArrowRight size={17} />
                </a>
              </div>

              {/* Dynamic Feature Mockup Illustration */}
              <FeatureIllustration
                visual={selected.visual}
                moduleName={config.featuresCatalog.previewName}
              />
            </div>
          </div>
        ) : (
          <div className="mf-empty-state">
            <Search size={30} aria-hidden="true" />
            <h3>No matching features</h3>
            <p>No features matched “{searchQuery}” in this category.</p>
            <button className="mf-primary-btn" type="button" onClick={resetFilters}>
              Clear filters <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ========================================================================= */
/* 6. MAIN MODULE DETAIL PAGE TEMPLATE                                       */
/* The full-page layout template used by all 8 ERP module routes.            */
/* ========================================================================= */

export default function ModuleDetailTemplate({ data }: { data: ModulePageConfig }) {
  // Look up tailored preview configuration, fallback to CRM if not found
  const config: ModulePageConfig =
    (data && data.heroHeadline ? data : MODULES_DATA[data?.slug]) || MODULES_DATA.crm;

  // Interactive state for hero preview AI sentinel dispatch
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

          <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb + Verified Sync Badge */}
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

            {/* Flex Hero Container (Left Copy + Right Mockup) */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
              {/* Left Column: Headline, Value Proposition, & CTAs */}
              <div className="w-full lg:flex-1 lg:max-w-[620px] space-y-6 text-left">
                <h1 className="text-[32px] sm:text-[43px] lg:text-[39px] xl:text-[43px] font-extrabold text-[#0F172A] tracking-[-0.03em] leading-[1.14]">
                  {config.heroHeadline}{" "}
                  <span className="text-blue-600">{config.heroHighlight}</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                  {config.heroDescription}
                </p>

                {/* Hero CTAs */}
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

              {/* Right Column: Hero Mockup Window */}
              <div className="w-full lg:flex-1 flex items-center justify-center lg:justify-end">
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
        {/* 2. "THE MOSSIE ERP EDGE": HIGHLIGHTED SUPERPOWERS (MAX 5)                 */}
        {/* ========================================================================= */}
        <HighlightedFeatures key={`highlights-${config.slug}`} config={config} />

        {/* ========================================================================= */}
        {/* 3. "ALL FEATURES" CATEGORIZED MATRIX (TABBED & SEARCHABLE)               */}
        {/* ========================================================================= */}
        <AllFeatures key={`features-${config.slug}`} config={config} />

        {/* ========================================================================= */}
        {/* 4. HEAD-TO-HEAD COMPETITIVE COMPARISON MATRIX (MAX 5 DIFFERENCES)        */}
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
                          <span>Mossie ERP</span>
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
                    {/* Capped at max 5 differences across all module pages */}
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

                <blockquote className="text-xs sm:text-2xl text-slate-600 leading-snug tracking-tight">
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
          {/* Ambient Tech Glow Circles */}
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
