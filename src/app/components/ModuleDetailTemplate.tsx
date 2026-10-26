"use client";

import { useState, useEffect, useRef, type KeyboardEvent, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
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
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
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
import { PopupCtaButton } from "./popup-cta";
import ConnectedWorkflowFlow from "./modules/ConnectedWorkflowFlow";
import { ModuleComparisonSection } from "./ModuleComparisonSection";
import ModuleClientReviews from "./modules/ModuleClientReviews";
import ModuleDetailHero from "./modules/ModuleDetailHero";
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
/* 4. "THE MOSSIE ERP EDGE": HIGHLIGHTED SUPERPOWERS (MAX 5)                 */
/* High-contrast cards showcasing how Mossie ERP outperforms competitors.    */
/* Clicking any card opens an accessible modal with in-depth illustration.   */
/* ========================================================================= */

function HighlightedFeatures({ config }: { config: ModulePageConfig }) {
  const [selected, setSelected] = useState<EdgeSuperpower | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingId = `${config.slug}-highlighted-heading`;

  const totalFeatures = config.edge.superpowers.length;
  const hasMoreThanSix = totalFeatures > 6;
  const displayedFeatures = hasMoreThanSix && !showAll
    ? config.edge.superpowers.slice(0, 6)
    : config.edge.superpowers;
  const activeMobileFeature = config.edge.superpowers[mobileIndex] || config.edge.superpowers[0];

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

  useEffect(() => {
    if (isHolding || selected || totalFeatures === 0) return;
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % totalFeatures);
    }, 5000);
    return () => clearInterval(timer);
  }, [mobileIndex, isHolding, selected, totalFeatures]);

  useEffect(() => {
    if (!selected) return;

    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }

    // Lock background page scroll while dialog is open
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyPaddingRight = document.body.style.paddingRight;

    document.documentElement.classList.add("modal-locked");
    document.body.classList.add("modal-locked");
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${
        (parseFloat(getComputedStyle(document.body).paddingRight) || 0) + scrollbarWidth
      }px`;
    }

    // Intercept wheel events on window (capture phase) to prevent any background scroll
    const handleWheel = (e: WheelEvent) => {
      if (!dialog) {
        e.preventDefault();
        return;
      }

      const target = e.target as Node | null;
      // If outside the dialog (e.g. over backdrop or anywhere on the page), prevent scroll
      if (!target || (!dialog.contains(target) && target !== dialog)) {
        e.preventDefault();
        return;
      }

      // Inside dialog: check if dialog content can scroll (e.g. small mobile viewport)
      const canScroll = dialog.scrollHeight > dialog.clientHeight;
      if (!canScroll) {
        // Desktop view: fits entirely without scrolling, cancel all wheel scrolls
        e.preventDefault();
        return;
      }

      // Small viewport: allow scrolling inside dialog, but lock at top and bottom bounds
      const isScrollingUp = e.deltaY < 0;
      const isScrollingDown = e.deltaY > 0;
      const isAtTop = dialog.scrollTop <= 0;
      const isAtBottom = dialog.scrollTop + dialog.clientHeight >= dialog.scrollHeight - 1;

      if ((isScrollingUp && isAtTop) || (isScrollingDown && isAtBottom)) {
        e.preventDefault();
      }
    };

    // Intercept touchmove gestures (capture phase)
    const handleTouchMove = (e: TouchEvent) => {
      if (!dialog) {
        e.preventDefault();
        return;
      }

      const target = e.target as Node | null;
      if (!target || (!dialog.contains(target) && target !== dialog)) {
        e.preventDefault();
        return;
      }

      const canScroll = dialog.scrollHeight > dialog.clientHeight;
      if (!canScroll) {
        e.preventDefault();
      }
    };

    // Intercept keyboard scrolling keys
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (
        ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key)
      ) {
        if (!dialog) return;
        const target = e.target as HTMLElement | null;
        if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
          return;
        }
        const canScroll = dialog.scrollHeight > dialog.clientHeight;
        if (!canScroll) {
          e.preventDefault();
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false, capture: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false, capture: true });
    window.addEventListener("keydown", handleKeyDown);

    function handleDialogClose() {
      setSelected(null);
    }

    dialog?.addEventListener("close", handleDialogClose);

    return () => {
      window.removeEventListener("wheel", handleWheel, { capture: true });
      window.removeEventListener("touchmove", handleTouchMove, { capture: true });
      window.removeEventListener("keydown", handleKeyDown);
      document.documentElement.classList.remove("modal-locked");
      document.body.classList.remove("modal-locked");
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.paddingRight = originalBodyPaddingRight;
      dialog?.removeEventListener("close", handleDialogClose);
    };
  }, [selected]);

  function openFeature(feature: EdgeSuperpower) {
    setSelected(feature);
  }

  function closeFeature() {
    dialogRef.current?.close();
    setSelected(null);
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
          {/* <p className="section-eyebrow">{config.edge.eyebrow || "Highlighted features"}</p> */}
          <h2 id={headingId} className="section-heading">
            {config.edge.title}{" "}
            {config.edge.titleHighlight}
          </h2>
        </header>

        {/* Smartphone 5-Second Auto-Slider (< 640px) matching reference design */}
        {activeMobileFeature && (
          <div className="block sm:hidden">
            <div
              className="relative w-full max-w-[370px] mx-auto px-3 py-1 select-none [-webkit-touch-callout:none]"
              onMouseDown={() => setIsHolding(true)}
              onMouseUp={() => setIsHolding(false)}
              onMouseLeave={() => setIsHolding(false)}
              onTouchStart={() => setIsHolding(true)}
              onTouchEnd={() => setIsHolding(false)}
              onTouchCancel={() => setIsHolding(false)}
              onContextMenu={(e) => e.preventDefault()}
            >
              {/* Recessed Left & Right Card Peeks matching reference frame depth */}
              <div
                className="absolute inset-y-5 left-0 right-6 rounded-[20px] bg-white border border-slate-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.03)] pointer-events-none z-0"
                aria-hidden="true"
              />
              <div
                className="absolute inset-y-5 left-6 right-0 rounded-[20px] bg-white border border-slate-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.03)] pointer-events-none z-0"
                aria-hidden="true"
              />

              {/* Active Foreground Highlighted Feature Card (2s auto-slider) */}
              <div className="relative z-10 min-h-[268px] flex">
                <AnimatePresence mode="wait">
                  <motion.button
                    key={activeMobileFeature.id}
                    type="button"
                    onClick={() => openFeature(activeMobileFeature)}
                    aria-haspopup="dialog"
                    initial={{ opacity: 0, x: 22, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -22, scale: 0.96 }}
                    transition={{ duration: 0.26, ease: "easeOut" }}
                    className={`group relative w-full bg-gradient-to-b from-white via-white to-[#EEF5FF] p-5.5 rounded-[20px] border transition-shadow duration-200 text-left ${
                      isHolding
                        ? "border-[#006fc9] shadow-[0_12px_32px_-6px_rgba(0,111,201,0.20)]"
                        : "border-[#006fc9]/35 shadow-[0_10px_28px_-6px_rgba(0,111,201,0.12)]"
                    } flex flex-col justify-between select-none cursor-pointer`}
                  >
                    <div>
                      {/* Top-Left Blue Rounded Icon Badge */}
                      <div className="w-10 h-10 rounded-[11px] bg-[#006fc9] text-white flex items-center justify-center mb-4 shadow-sm shadow-[#006fc9]/20 [&_svg]:w-5 [&_svg]:h-5 [&_svg]:text-white">
                        <FeatureIcon name={activeMobileFeature.visual.icon} />
                      </div>

                      {/* Feature Title */}
                      <h3 className="text-[17px] font-bold text-slate-900 tracking-tight leading-snug mb-2.5">
                        {activeMobileFeature.visual.title}
                      </h3>

                      {/* Feature Summary */}
                      <p className="text-[13px] text-slate-600 leading-[1.65] font-normal mb-5">
                        {activeMobileFeature.summary}
                      </p>
                    </div>

                    {/* Card Divider & Learn More link */}
                    <div className="w-full border-t border-slate-200/75 pt-3 mt-auto flex items-center justify-between">
                      <span className="text-[13px] font-semibold text-[#006fc9] transition-colors inline-flex items-center gap-1">
                        Learn More{" "}
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </motion.button>
                </AnimatePresence>
              </div>
            </div>

            {/* Slider Progress Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {config.edge.superpowers.map((feature, idx) => (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setMobileIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === mobileIndex
                      ? "w-5 bg-[#006fc9]"
                      : "w-1.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Show ${feature.visual.title}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Tablet & Desktop Superpowers Grid (>= 640px, capped at 6 by default; expanded via 'Show All') */}
        <div className="hidden sm:block">
          <div className="mf-cards">
            {displayedFeatures.map((feature) => (
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

          {hasMoreThanSix && (
            <div className="mf-show-more-wrap flex justify-center mt-8">
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-sm transition-all shadow-xs inline-flex items-center gap-2 active:scale-95 cursor-pointer"
                aria-expanded={showAll}
              >
                <span>{showAll ? "Show Less" : "Show All"}</span>
                {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Accessible Interactive Detail Modal */}
      <dialog
        ref={dialogRef}
        className="mf-section mf-dialog"
        aria-labelledby={`${config.slug}-feature-dialog-title`}
        onWheel={(e) => e.stopPropagation()}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          ) {
            closeFeature();
          }
        }}
      >
        <button
          className="mf-close-dialog"
          type="button"
          aria-label="Close feature details"
          onClick={closeFeature}
          autoFocus
        >
          <X size={20} />
        </button>

        {selected && (
          <div className="mf-dialog-layout">
            <div className="mf-dialog-copy">
              {/* <p className="mf-eyebrow">Highlighted feature</p> */}
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
  const navRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);
  const headingId = `${config.slug}-all-features-heading`;
  const panelId = `${config.slug}-feature-panel`;

  // Deduplication guardrail: Never display features already highlighted in edge.superpowers
  const superpowerTitles = new Set(
    config.edge.superpowers.flatMap((sp) => [
      sp.title.toLowerCase().trim(),
      sp.visual.title.toLowerCase().trim(),
      sp.id.toLowerCase().trim(),
    ])
  );

  const availableItems = config.featuresCatalog.items.filter((item) => {
    const itemTitle = item.title.toLowerCase().trim();
    const visualTitle = item.visual.title.toLowerCase().trim();
    const itemId = item.id.toLowerCase().trim();
    return (
      !superpowerTitles.has(itemTitle) &&
      !superpowerTitles.has(visualTitle) &&
      !superpowerTitles.has(itemId)
    );
  });

  const [selectedId, setSelectedId] = useState(availableItems[0]?.id);

  // Filter features by query and category
  const query = searchQuery.trim().toLowerCase();
  const filteredFeatures = availableItems.filter(
    (item) =>
      (selectedCategory === "all" || item.category === selectedCategory) &&
      (!query ||
        [item.title, item.visual.title, item.description, item.categoryLabel, ...item.bullets].some(
          (text) => text.toLowerCase().includes(query)
        ))
  );
  const selected = filteredFeatures.find((f) => f.id === selectedId) ?? filteredFeatures[0];

  // Auto-scroll active tab into view in vertical explorer and horizontal mobile pill bar ONLY when user selects a tab
  useEffect(() => {
    // Prevent scrolling on initial page mount so the user always lands on the top hero section
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (!selected) return;

    // Scroll vertical list container ONLY without scrolling the entire window
    const activeTab = navRef.current?.querySelector<HTMLButtonElement>(
      `[id="${config.slug}-tab-${selected.id}"]`
    );
    const nav = navRef.current;
    if (activeTab && nav) {
      const tabTop = activeTab.offsetTop;
      const tabBottom = tabTop + activeTab.offsetHeight;
      if (tabTop < nav.scrollTop) {
        nav.scrollTo({ top: tabTop, behavior: "smooth" });
      } else if (tabBottom > nav.scrollTop + nav.clientHeight) {
        nav.scrollTo({ top: tabBottom - nav.clientHeight, behavior: "smooth" });
      }
    }

    // Scroll horizontal mobile pill container ONLY without scrolling the entire window
    const activeMobileTab = mobileNavRef.current?.querySelector<HTMLButtonElement>(
      `[id="${config.slug}-tab-mobile-${selected.id}"]`
    );
    const mobileNav = mobileNavRef.current;
    if (activeMobileTab && mobileNav) {
      const targetLeft =
        activeMobileTab.offsetLeft - (mobileNav.clientWidth - activeMobileTab.clientWidth) / 2;
      mobileNav.scrollTo({ left: targetLeft, behavior: "smooth" });
    }
  }, [selected, config.slug]);

  function stepMobileFeature(dir: -1 | 1) {
    if (filteredFeatures.length === 0) return;
    const currentIndex = filteredFeatures.findIndex((f) => f.id === selected?.id);
    const baseIndex = currentIndex >= 0 ? currentIndex : 0;
    const nextIndex = (baseIndex + dir + filteredFeatures.length) % filteredFeatures.length;
    setSelectedId(filteredFeatures[nextIndex].id);
  }

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
            {/* <p className="section-eyebrow">{config.featuresCatalog.eyebrow || "All features"}</p> */}
            <h2 id={headingId} className="section-heading">
              Everything you need to {config.featuresCatalog.headline.action}
            </h2>
            <p className="section-description">{config.featuresCatalog.headline.description}</p>
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
          <>
            {/* Smartphone Horizontal Pill Bar with Left/Right Arrows (Visible ONLY on < 768px) */}
            <div className="md:hidden relative flex items-center gap-1.5 w-full mb-5 px-0.5">
              {/* Left Arrow Button */}
              <button
                type="button"
                onClick={() => stepMobileFeature(-1)}
                className="w-8.5 h-8.5 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-[#006fc9] hover:border-[#006fc9]/40 shrink-0 z-10 active:scale-95 transition-all cursor-pointer"
                aria-label="Previous feature"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Touch-Swipable Horizontal Scroll Area */}
              <div
                ref={mobileNavRef}
                role="tablist"
                aria-label={`${config.moduleName} features mobile`}
                className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth w-full py-1.5 px-0.5 snap-x snap-mandatory touch-pan-x"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {filteredFeatures.map((feature) => {
                  const isActive = selected.id === feature.id;
                  return (
                    <button
                      key={feature.id}
                      type="button"
                      id={`${config.slug}-tab-mobile-${feature.id}`}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={panelId}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => setSelectedId(feature.id)}
                      className={`ai-tab-pill whitespace-nowrap shrink-0 snap-center ${isActive ? "active" : ""}`}
                    >
                      <FeatureIcon
                        name={feature.visual.icon}
                        className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-slate-400"}`}
                      />
                      <span>{feature.visual.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Right Arrow Button */}
              <button
                type="button"
                onClick={() => stepMobileFeature(1)}
                className="w-8.5 h-8.5 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-[#006fc9] hover:border-[#006fc9]/40 shrink-0 z-10 active:scale-95 transition-all cursor-pointer"
                aria-label="Next feature"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mf-explorer">
              {/* Left Tabs List (Hidden on Smartphone < 768px) */}
              <div className="hidden md:block">
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
                  <PopupCtaButton className="mf-primary-btn">
                    Explore with a demo <ArrowRight size={17} />
                  </PopupCtaButton>
                </div>

                {/* Dynamic Feature Mockup Illustration */}
                <FeatureIllustration
                  visual={selected.visual}
                  moduleName={config.featuresCatalog.previewName}
                />
              </div>
            </div>
          </>
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

  useEffect(() => {
    // If not arriving with an anchor hash (like #features-matrix), ensure page lands on the hero section at top
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [config.slug]);

  return (
    <div className="erp-site min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased selection:bg-[#006fc9] selection:text-white">
      {/* Global Site Header */}
      <SiteHeader />

      <main id="main-content">
        {/* ========================================================================= */}
        {/* 1. INTERACTIVE MODULE HERO WITH 680x540 DIAGRAM & WORKFLOW SIMULATOR      */}
        {/* ========================================================================= */}
        <ModuleDetailHero config={config} />

        {/* ========================================================================= */}
        {/* 2. "THE MOSSIE ERP EDGE": HIGHLIGHTED SUPERPOWERS (MAX 5)                 */}
        {/* ========================================================================= */}
        <HighlightedFeatures key={`highlights-${config.slug}`} config={config} />

        {/* ========================================================================= */}
        {/* 3. "ALL FEATURES" CATEGORIZED MATRIX (TABBED & SEARCHABLE)               */}
        {/* ========================================================================= */}
        <AllFeatures key={`features-${config.slug}`} config={config} />

        {/* ========================================================================= */}
        {/* 4. HEAD-TO-HEAD COMPETITIVE COMPARISON MATRIX (PROTOTYPE MATCHED)        */}
        {/* ========================================================================= */}
        <ModuleComparisonSection config={config} />

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
        {/* 6. CLIENT REVIEWS SECTION (Matches showcase carousel banner design)      */}
        {/* ========================================================================= */}
        <section id="reviews-section" className="module-detail-section py-[40px] bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ModuleClientReviews
              activeTestimonial={config.testimonialAndRoi.testimonial}
              moduleName={config.moduleName}
            />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. HIGH-CONVERTING FINAL CTA SECTION                                      */}
        {/* ========================================================================= */}
        <section
          id="contact"
          className="module-detail-section py-[40px] bg-gradient-to-br from-[#F3F8FD] via-[#EEF5FC] to-[#E8F1FB] text-[#0B172A] relative overflow-hidden border-t border-slate-200/70"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: CTA Copy, Action Buttons & Trust Bullets */}
              <div className="lg:col-span-7 text-left space-y-5 sm:space-y-6">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#D3E5FA] text-[#0E2E5C] font-extrabold text-[11px] sm:text-xs tracking-wide uppercase">
                  <span>{config.cta.pill}</span>
                </div>

                <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] xl:text-[52px] font-extrabold text-[#0B172A] tracking-[-0.03em] leading-[1.1] max-w-[620px]">
                  {config.cta.title.includes("Mossie ERP") ? (
                    <>
                      {config.cta.title.split("Mossie ERP")[0]}
                      <em className="not-italic text-[#006fc9] ">Mossie ERP</em>
                      {config.cta.title.split("Mossie ERP").slice(1).join("Mossie ERP")}
                    </>
                  ) : (
                    config.cta.title
                  )}
                </h2>

                <p className="text-[15px] sm:text-[17px] text-[#475569] leading-[1.6] font-normal max-w-[560px]">
                  {config.cta.description}
                </p>

                <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1">
                  <PopupCtaButton
                    className="px-6 sm:px-7 py-3.5 rounded-full bg-[#0066CC] hover:bg-[#0055B3] text-white font-bold text-[13.5px] sm:text-[15px] shadow-[0_6px_18px_rgba(0,102,204,0.25)] transition-all inline-flex items-center gap-2 active:scale-95 cursor-pointer"
                  >
                    <span>{config.cta.primaryCtaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </PopupCtaButton>
                  <Link
                    href="/modules"
                    className="px-6 sm:px-7 py-3.5 rounded-full bg-transparent hover:bg-white/75 border border-[#64748B] text-[#0F172A] font-bold text-[13.5px] sm:text-[15px] transition-all inline-flex items-center justify-center"
                  >
                    <span>{config.cta.secondaryCtaText}</span>
                  </Link>
                </div>

                <div className="pt-1 text-[12px] sm:text-[13px] text-[#475569] font-medium flex flex-wrap items-center gap-x-5 gap-y-2">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#475569] stroke-[2.2]" />
                    <span>No credit card required</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#475569] stroke-[2.2]" />
                    <span>14-day full feature sandbox</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#475569] stroke-[2.2]" />
                    <span>Zero-lockin data export</span>
                  </span>
                </div>
              </div>

              {/* Right Column: High-Resolution Enhanced CTA Illustration */}
              <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
                <Image
                  src="/images/modules/cta_illustration.webp"
                  alt="Fast-growing teams collaborating on Mossie ERP"
                  width={1009}
                  height={901}
                  loading="lazy"
                  className="w-full max-w-[440px] lg:max-w-[520px] h-auto object-contain select-none"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Site Footer */}
      <SiteFooter />
    </div>
  );
}
