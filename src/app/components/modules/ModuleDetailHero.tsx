"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Check,
  Truck,
  Boxes,
  Factory,
  Landmark,
  Users,
  Kanban,
  Receipt,
} from "lucide-react";
import { PopupCtaButton } from "../popup-cta";
import type { ModulePageConfig } from "./moduleData";

interface ModuleHeroExtra {
  navActiveName: string;
  searchPlaceholder: string;
  subHeading: string;
  realtimePill: string;
  leftCard: {
    iconType: "whatsapp" | "truck" | "receipt" | "boxes" | "factory" | "landmark" | "users" | "kanban";
    iconBg: string;
    badgeLines: [string, string];
    innerTitle: string;
    innerSub: string;
    approveLabel: string;
    reviewLabel: string;
    approvedMessage: string;
    reviewMessage: string;
  };
  rightCard: {
    engineTitle: string;
    statusLabel: string;
    statusValue: string;
    verifiedPill: string;
  };
  pillBadges: [string, string, string];
  kpiUpdate: {
    index: number;
    updatedValue: string;
  };
  kanbanApprovedCard: {
    targetColumnIndex: number;
    approvedBadge: string;
  };
}

const MODULE_HERO_EXTRA_CONFIG: Record<string, ModuleHeroExtra> = {
  crm: {
    navActiveName: "CRM Module",
    searchPlaceholder: "Search crm module records...",
    subHeading: "CRM MODULE / LIVE OPERATIONS",
    realtimePill: "• REALTIME PIPELINE ACTIVE",
    leftCard: {
      iconType: "whatsapp",
      iconBg: "bg-[#22c55e]",
      badgeLines: ["1-Click WhatsApp", "Approval"],
      innerTitle: "Approval Request for Quote",
      innerSub: "Quote #QT-2026-0001 • ₹1.12 Cr",
      approveLabel: "Approve",
      reviewLabel: "Review",
      approvedMessage: "1-Click WhatsApp Approval synced! Fuzzy Duplicate Engine verified 0 collisions & updated ERP Ledger.",
      reviewMessage: "Quote QT-2026-0001 R2 opened in Multi-Revision Inspector.",
    },
    rightCard: {
      engineTitle: "Fuzzy Duplicate Engine",
      statusLabel: "Duplicate Check:",
      statusValue: "Zero Collisions",
      verifiedPill: "Verified 100%",
    },
    pillBadges: ["Validate", "Automate", "Sync"],
    kpiUpdate: {
      index: 0,
      updatedValue: "₹5.14 Cr",
    },
    kanbanApprovedCard: {
      targetColumnIndex: 1,
      approvedBadge: "✓ Approved via WhatsApp",
    },
  },
  sales: {
    navActiveName: "Sales Orders",
    searchPlaceholder: "Search sales & order records...",
    subHeading: "SALES MODULE / LIVE DISPATCH",
    realtimePill: "• ORDER STREAM SYNCHRONIZED",
    leftCard: {
      iconType: "truck",
      iconBg: "bg-[#006fc9]",
      badgeLines: ["1-Click Order", "Confirmation"],
      innerTitle: "Dispatch Order #SO-8842",
      innerSub: "Godrej Modern • ₹14.2L",
      approveLabel: "Approve",
      reviewLabel: "Review",
      approvedMessage: "Order #SO-8842 Approved! E-Way Bill & IRN generated (<1.4s) and warehouse dispatch notice issued.",
      reviewMessage: "Order #SO-8842 opened: Digital POD & Loading Challan verified.",
    },
    rightCard: {
      engineTitle: "GST E-Way & IRN Engine",
      statusLabel: "NIC Portal Status:",
      statusValue: "100% Online (<1.4s)",
      verifiedPill: "Auto-Signed QR",
    },
    pillBadges: ["Verify Credit", "Auto-Route", "Generate E-Way"],
    kpiUpdate: {
      index: 0,
      updatedValue: "₹42.6L",
    },
    kanbanApprovedCard: {
      targetColumnIndex: 1,
      approvedBadge: "✓ E-Way & Challan Generated",
    },
  },
  purchase: {
    navActiveName: "Procurement",
    searchPlaceholder: "Search purchase orders & vendor RFQs...",
    subHeading: "PURCHASE MODULE / 3-WAY AUDIT",
    realtimePill: "• 3-WAY AUDIT ACTIVE",
    leftCard: {
      iconType: "receipt",
      iconBg: "bg-[#059669]",
      badgeLines: ["3-Way PO Match", "Approval"],
      innerTitle: "PO #PO-9410 vs GRN Match",
      innerSub: "JSW Structural • ₹8.5L",
      approveLabel: "Approve",
      reviewLabel: "Review",
      approvedMessage: "PO #PO-9410 3-Way Match Approved! Verified with GRN-4812 and posted to Accounts Payable.",
      reviewMessage: "PO #PO-9410 opened in 3-Way Audit Matrix (Zero Variance).",
    },
    rightCard: {
      engineTitle: "Automated 3-Way Audit Engine",
      statusLabel: "Tolerance Check:",
      statusValue: "Zero Discrepancy",
      verifiedPill: "L1 Matched",
    },
    pillBadges: ["Check Rates", "3-Way Match", "Post to AP"],
    kpiUpdate: {
      index: 0,
      updatedValue: "₹27.1L",
    },
    kanbanApprovedCard: {
      targetColumnIndex: 1,
      approvedBadge: "✓ 3-Way Matched & Cleared",
    },
  },
  inventory: {
    navActiveName: "Warehouse Stock",
    searchPlaceholder: "Search SKUs, lots & serial numbers...",
    subHeading: "INVENTORY / LIVE STOCK LEDGER",
    realtimePill: "• LIVE STOCK LEDGER ACTIVE",
    leftCard: {
      iconType: "boxes",
      iconBg: "bg-[#d97706]",
      badgeLines: ["Mobile Barcode", "Bin Transfer"],
      innerTitle: "Stock Transfer #TR-2201",
      innerSub: "WH-Mumbai → WH-Pune (200 Units)",
      approveLabel: "Approve",
      reviewLabel: "Review",
      approvedMessage: "Stock Transfer #TR-2201 Received! 200 units verified via barcode & allocated to Bin A-14.",
      reviewMessage: "Transfer #TR-2201 opened: FIFO batch & expiry verified.",
    },
    rightCard: {
      engineTitle: "Real-Time Bin & Lot Tracker",
      statusLabel: "FIFO Lot Allocation:",
      statusValue: "Active (0% Drift)",
      verifiedPill: "Barcode 99.8%",
    },
    pillBadges: ["Scan Bin", "Verify Lot", "Sync Ledger"],
    kpiUpdate: {
      index: 1,
      updatedValue: "99.9% Barcode",
    },
    kanbanApprovedCard: {
      targetColumnIndex: 1,
      approvedBadge: "✓ Stock Received & Binned",
    },
  },
  production: {
    navActiveName: "Shop Floor MES",
    searchPlaceholder: "Search work orders, BOMs & machines...",
    subHeading: "PRODUCTION / MES DISPATCH",
    realtimePill: "• SHOP FLOOR LIVE",
    leftCard: {
      iconType: "factory",
      iconBg: "bg-[#7c3aed]",
      badgeLines: ["MES Touch-Screen", "Dispatch"],
      innerTitle: "Work Order #MO-5104",
      innerSub: "Gearbox Housing (500 Units)",
      approveLabel: "Approve",
      reviewLabel: "Review",
      approvedMessage: "Work Order #MO-5104 Completed! 500 units inspected, scrap recorded (0.2%), and moved to FG warehouse.",
      reviewMessage: "Work Order #MO-5104 opened in Shop-Floor MES Touch Terminal.",
    },
    rightCard: {
      engineTitle: "Finite-Capacity APS Engine",
      statusLabel: "Capacity Balance:",
      statusValue: "Zero Clashes (94.2% OEE)",
      verifiedPill: "BOM Exploded",
    },
    pillBadges: ["Check BOM", "Level APS", "Auto-Dispatch"],
    kpiUpdate: {
      index: 0,
      updatedValue: "96.1% Plant",
    },
    kanbanApprovedCard: {
      targetColumnIndex: 1,
      approvedBadge: "✓ QC Passed & Binned",
    },
  },
  accounting: {
    navActiveName: "General Ledger",
    searchPlaceholder: "Search vouchers, accounts & tax reports...",
    subHeading: "ACCOUNTING / REALTIME AUDIT",
    realtimePill: "• REALTIME BALANCE SHEET",
    leftCard: {
      iconType: "landmark",
      iconBg: "bg-[#006fc9]",
      badgeLines: ["Bank API Auto-", "Reconciliation"],
      innerTitle: "HDFC API Match #TX-9021",
      innerSub: "Larsen Infra • ₹4,50,000",
      approveLabel: "Approve",
      reviewLabel: "Review",
      approvedMessage: "Payment ₹4,50,000 Auto-Reconciled! Matched with INV-8812 and posted to General Ledger in 0.8s.",
      reviewMessage: "Txn #TX-9021 opened in Bank Reconciliation Wizard.",
    },
    rightCard: {
      engineTitle: "Real-Time General Ledger Engine",
      statusLabel: "Double Entry Check:",
      statusValue: "100% Balanced",
      verifiedPill: "GST Reconciled",
    },
    pillBadges: ["Match Rule", "Post to GL", "Close Period"],
    kpiUpdate: {
      index: 0,
      updatedValue: "100% Reconciled ✓",
    },
    kanbanApprovedCard: {
      targetColumnIndex: 1,
      approvedBadge: "✓ Reconciled & Posted",
    },
  },
  hrms: {
    navActiveName: "People & Payroll",
    searchPlaceholder: "Search employees, shifts & payroll cycles...",
    subHeading: "HRMS / BIOMETRIC ROSTER",
    realtimePill: "• BIOMETRIC ROSTER ACTIVE",
    leftCard: {
      iconType: "users",
      iconBg: "bg-[#e11d48]",
      badgeLines: ["1-Click Biometric", "Payroll Run"],
      innerTitle: "October 2026 Salary Cycle",
      innerSub: "482 Staff • ₹42.8L Total",
      approveLabel: "Approve",
      reviewLabel: "Review",
      approvedMessage: "Payroll Run Approved! Net salaries queued for HDFC Corporate Batch Payout. WhatsApp payslips queued.",
      reviewMessage: "October 2026 Payroll Run opened in Statutory Compliance Inspector.",
    },
    rightCard: {
      engineTitle: "Statutory Compliance Engine",
      statusLabel: "PF, ESI & TDS:",
      statusValue: "100% Compliant (ECR Ready)",
      verifiedPill: "Zero Error",
    },
    pillBadges: ["Verify Shifts", "Compute Tax", "Generate ECR"],
    kpiUpdate: {
      index: 1,
      updatedValue: "Executed (0.8s) ✓",
    },
    kanbanApprovedCard: {
      targetColumnIndex: 1,
      approvedBadge: "✓ Disbursed & ECR Ready",
    },
  },
  project: {
    navActiveName: "Projects & EVM",
    searchPlaceholder: "Search projects, milestones & timesheets...",
    subHeading: "PROJECTS / EVM MARGIN RADAR",
    realtimePill: "• EVM MARGIN RADAR ACTIVE",
    leftCard: {
      iconType: "kanban",
      iconBg: "bg-[#0891b2]",
      badgeLines: ["Milestone Signoff", "& Client Billing"],
      innerTitle: "Phase 2 Signoff #M3",
      innerSub: "Greenfield Pharma • ₹35L",
      approveLabel: "Approve",
      reviewLabel: "Review",
      approvedMessage: "Milestone 3 Approved! ₹35,00,000 tax invoice generated and booked to Project Revenue.",
      reviewMessage: "Milestone #M3 opened in Earned Value Management Inspector.",
    },
    rightCard: {
      engineTitle: "Earned Value EVM Engine",
      statusLabel: "Cost & Schedule Index:",
      statusValue: "CPI: 1.08 • SPI: 1.04",
      verifiedPill: "Budget Protected",
    },
    pillBadges: ["Track Hours", "Burn Rate", "Bill Client"],
    kpiUpdate: {
      index: 1,
      updatedValue: "26.2% Avg",
    },
    kanbanApprovedCard: {
      targetColumnIndex: 1,
      approvedBadge: "✓ Invoiced & Recognized",
    },
  },
};

export default function ModuleDetailHero({ config }: { config: ModulePageConfig }) {
  const slug = config.slug || "crm";
  const extra = MODULE_HERO_EXTRA_CONFIG[slug] || MODULE_HERO_EXTRA_CONFIG.crm;

  // Responsive stage auto-scaler using ResizeObserver
  const containerRef = useRef<HTMLDivElement>(null);
  const [stageScale, setStageScale] = useState<number>(1);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      if (!containerWidth) return;
      // 680px base diagram width; subtract 8px for shadow breathing room
      const availableWidth = containerWidth - 8;
      const BASE_WIDTH = 680;
      const calculatedScale = Math.min(1, Math.max(0.42, availableWidth / BASE_WIDTH));
      setStageScale(calculatedScale);
    };

    updateScale();

    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && containerRef.current) {
      observer = new ResizeObserver(() => updateScale());
      observer.observe(containerRef.current);
    }

    window.addEventListener("resize", updateScale, { passive: true });
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  // Interactive state
  const [isSimulating, setIsSimulating] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 3600);
  };

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const triggerWorkflowSimulation = () => {
    setIsSimulating(true);
    setIsApproved(true);
    showToast(extra.leftCard.approvedMessage);

    setTimeout(() => {
      setIsSimulating(false);
    }, 3200);
  };

  // Compute active feature count for secondary CTA
  const featureCount = config.featuresCatalog?.items?.length || 6;

  // Render left card icon
  const renderLeftCardIcon = () => {
    switch (extra.leftCard.iconType) {
      case "whatsapp":
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.98 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8.01 12.27C8.14 12.44 9.76 14.94 12.25 16.01C14.34 16.92 14.76 16.74 15.21 16.7C15.66 16.66 16.68 16.09 16.89 15.51C17.1 14.93 17.1 14.43 17.04 14.33C16.97 14.24 16.81 14.18 16.56 14.06C16.31 13.94 15.09 13.34 14.87 13.25C14.64 13.17 14.48 13.13 14.31 13.38C14.15 13.63 13.67 14.18 13.53 14.35C13.38 14.52 13.24 14.54 12.99 14.42C12.74 14.29 11.94 14.03 11 13.2C10.26 12.54 9.77 11.73 9.62 11.48C9.48 11.23 9.61 11.1 9.73 10.97C9.84 10.86 9.98 10.68 10.1 10.54C10.23 10.39 10.27 10.29 10.35 10.13C10.43 9.96 10.39 9.82 10.33 9.7C10.27 9.57 9.77 8.36 9.56 7.86C9.36 7.38 9.16 7.44 9.01 7.44C8.86 7.43 8.7 7.33 8.53 7.33Z"/>
          </svg>
        );
      case "truck":
        return <Truck className="w-4 h-4" />;
      case "receipt":
        return <Receipt className="w-4 h-4" />;
      case "boxes":
        return <Boxes className="w-4 h-4" />;
      case "factory":
        return <Factory className="w-4 h-4" />;
      case "landmark":
        return <Landmark className="w-4 h-4" />;
      case "users":
        return <Users className="w-4 h-4" />;
      case "kanban":
      default:
        return <Kanban className="w-4 h-4" />;
    }
  };

  return (
    <section className="relative z-20 overflow-hidden bg-gradient-to-br from-[#ffffff] via-[#f7faff] to-[#eaf3ff] border-b border-slate-200/70 pt-8 sm:pt-10 lg:pt-12 pb-14 sm:pb-16 lg:pb-20">
      {/* Background Dot Matrix Overlay */}
      <div className="absolute inset-0 dot-matrix-bg pointer-events-none z-0" />
      {/* Ambient Soft Blue Glow Behind Right Diagram */}
      <div className="absolute right-[5%] top-[18%] w-[620px] h-[520px] rounded-full bg-sky-200/35 blur-[110px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* ======================================================================= */}
          {/* LEFT COLUMN: HERO COPY & CTAs (5 Cols)                                   */}
          {/* ======================================================================= */}
          <div className="lg:col-span-5 flex flex-col items-start z-20">
            {/* Breadcrumb & Status Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-5 sm:mb-6">
              <Link
                href="/modules"
                className="text-[13px] font-medium text-slate-500 hover:text-slate-800 transition-colors"
              >
                Modules
              </Link>
              <span className="text-slate-400 text-xs">/</span>

              {/* Badge 1: Module Badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200/90 shadow-2xs rounded-full px-3.5 py-1 text-[12px] sm:text-[12.5px] font-bold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-[#006fc9]" />
                <span>{config.badge}</span>
              </div>

              {/* Badge 2: Verified Real-Time Sync */}
              <div className="inline-flex items-center gap-1.5 bg-[#e6faef] border border-[#a7f3d0] rounded-full px-3 py-1 text-[11.5px] sm:text-[12px] font-semibold text-[#065f46]">
                <Check className="w-3.5 h-3.5 text-[#059669] stroke-[2.6]" />
                <span>Verified Real-Time Sync</span>
              </div>
            </div>

            {/* Main Display Heading */}
            <h1 className="font-sans font-extrabold text-[32px] sm:text-[42px] xl:text-[50px] text-[#0f172a] mb-5 tracking-[-0.03em] leading-[1.12]">
              {config.heroHeadline}{" "}
              <span className="text-[#006fc9]">{config.heroHighlight}</span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-[15px] sm:text-[16px] leading-[1.62] text-[#334155] max-w-[500px] mb-8 font-normal">
              {config.heroDescription}
            </p>

            {/* Dual CTA Pill Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-2">
              <PopupCtaButton
                intent="trial"
                className="btn-primary-erp text-white text-[14.5px] font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <span>Start 14-Day Free Sandbox</span>
                <ArrowRight className="w-4 h-4 stroke-[2.4]" />
              </PopupCtaButton>

              <a
                href="#features-matrix"
                className="btn-secondary-erp text-[#0f172a] text-[14.5px] font-bold px-5 sm:px-6 py-3 sm:py-3.5 rounded-full flex items-center gap-2 cursor-pointer"
              >
                <span>Explore All {featureCount} Features</span>
                <ArrowRight className="w-4 h-4 text-slate-600 rotate-90 stroke-[2.2]" />
              </a>
            </div>

            {/* Interactive Simulation Hint Pill */}
            <div className="mt-4 flex items-center gap-2 text-[12px] text-slate-500 font-medium">
              {/* <button
                type="button"
                onClick={triggerWorkflowSimulation}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#006fc9]/10 hover:bg-[#006fc9]/15 border border-[#006fc9]/25 text-[#006fc9] font-bold transition-colors active:scale-95 cursor-pointer"
              >
                <RotateCw className={`w-3.5 h-3.5 ${isSimulating ? "animate-spin" : ""}`} />
                <span>Run Live Workflow Simulation</span>
              </button>
              <span className="text-slate-400 hidden sm:inline">• Click Approve on diagram</span> */}
            </div>
          </div>

          {/* ======================================================================= */}
          {/* RIGHT COLUMN: WORKFLOW DIAGRAM & ERP DASHBOARD (7 Cols)                  */}
          {/* ======================================================================= */}
          <div
            ref={containerRef}
            className="lg:col-span-7 flex justify-center lg:justify-end overflow-visible min-w-0"
          >
            {/* Fixed Coordinate Stage (680x540) Scaled Dynamically to fit container without right-edge cut */}
            <div
              style={{
                width: `${Math.round(680 * stageScale)}px`,
                height: `${Math.round(540 * stageScale)}px`,
                position: "relative",
              }}
              className="select-none shrink-0"
            >
              <div
                style={{
                  width: "680px",
                  height: "540px",
                  transform: `scale(${stageScale})`,
                  transformOrigin: "top left",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
                className="select-none"
              >
              
              {/* ======================================================================= */}
              {/* LAYER 1: CENTRAL ERP DASHBOARD WINDOW                                   */}
              {/* ======================================================================= */}
              <div className="absolute left-[72px] top-[148px] w-[585px] h-[330px] rounded-[14px] bg-white crm-window-shadow flex overflow-hidden z-10">
                
                {/* Left Dark Navy Sidebar */}
                <div className="w-[108px] bg-[#0f1e2e] text-slate-300 flex flex-col justify-between py-3.5 px-2.5 shrink-0">
                  <div>
                    {/* Brand Mini Header */}
                    <div className="flex items-center gap-2 px-1 mb-5">
                      <div className="w-5 h-5 rounded bg-[#006fc9] flex items-center justify-center text-[10px] font-extrabold text-white shadow-2xs">
                        M
                      </div>
                      <span className="text-[11px] font-bold text-white tracking-tight">Mossie ERP</span>
                    </div>

                    {/* Sidebar Navigation List */}
                    <div className="space-y-1 text-[9.5px] font-medium">
                      <div className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-300/90">
                        <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
                        </svg>
                        <span>Overview</span>
                      </div>

                      {/* Active Item */}
                      <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-[#006fc9]/20 text-[#38bdf8] font-semibold border border-[#006fc9]/30">
                        <svg className="w-3 h-3 text-[#38bdf8]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l3-8 4 16 3-8h4"/>
                        </svg>
                        <span className="truncate">{extra.navActiveName}</span>
                      </div>

                      <div className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-400">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                        </svg>
                        <span>Reports</span>
                      </div>

                      <div className="flex items-center gap-2 px-2 py-1.5 rounded text-slate-400">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                        </svg>
                        <span>Automation</span>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Footer: Live engine */}
                  <div className="flex items-center gap-1.5 px-1.5 pt-2 border-t border-slate-800/80 text-[8.5px] text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live engine</span>
                  </div>
                </div>

                {/* Right Main Content Area */}
                <div className="flex-1 bg-[#f8fafc] flex flex-col justify-between p-3 relative min-w-0">
                  <div>
                    {/* Top Search Input */}
                    <div className="w-[230px] bg-[#eef2f6] border border-slate-200/80 rounded-md px-2.5 py-1 flex items-center gap-1.5 text-[9px] text-slate-400 mb-2">
                      <Search className="w-2.5 h-2.5 text-slate-400 stroke-[2.2]" />
                      <span className="truncate">{extra.searchPlaceholder}</span>
                    </div>

                    {/* Module Title & Realtime Pill */}
                    <div className="flex items-end justify-between mb-2 min-w-0 gap-2">
                      <div className="min-w-0 flex-1">
                        <div className="text-[7.5px] font-bold uppercase tracking-wider text-slate-400 truncate">
                          {extra.subHeading}
                        </div>
                        <div className="text-[13px] font-extrabold text-slate-900 tracking-tight leading-tight truncate">
                          mossie-erp // {config.mockup.windowTitle.replace("mossie-erp // ", "")}
                        </div>
                      </div>
                      <div className="bg-[#e6faef] border border-[#a7f3d0] rounded-full px-2.5 py-0.5 flex items-center gap-1 text-[7.5px] font-extrabold text-[#047857] shrink-0 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                        <span>{extra.realtimePill}</span>
                      </div>
                    </div>

                    {/* 3 KPI Metric Cards */}
                    <div className="grid grid-cols-3 gap-2 mb-2 min-w-0">
                      {config.mockup.topMetrics.map((kpi, idx) => {
                        const isTargetKpi = idx === extra.kpiUpdate.index;
                        const displayVal = (isTargetKpi && isApproved)
                          ? extra.kpiUpdate.updatedValue
                          : kpi.value;

                        return (
                          <div
                            key={idx}
                            className={`bg-white rounded-lg p-2 border border-slate-200/80 shadow-2xs transition-all min-w-0 overflow-hidden ${
                              isTargetKpi && isApproved ? "ring-1 ring-[#006fc9]/40 bg-sky-50/20" : ""
                            }`}
                          >
                            <div className="text-[8px] font-medium text-slate-500 truncate block">{kpi.label}</div>
                            <div className={`text-[12px] font-extrabold text-slate-900 leading-snug transition-all truncate block ${
                              isTargetKpi && isApproved ? "text-[#006fc9]" : ""
                            }`}>
                              {displayVal}
                            </div>
                            <div className={`text-[7.5px] font-bold leading-none truncate block ${kpi.subColor}`}>
                              {kpi.sub}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Kanban Stage Tracker Box */}
                    <div className="bg-white rounded-xl p-2 border border-slate-200/90 shadow-2xs min-w-0">
                      <div className="flex items-center justify-between mb-1.5 min-w-0 gap-2">
                        <div className="flex items-center gap-1.5 text-[8.5px] font-extrabold text-slate-800 min-w-0 flex-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#006fc9] shrink-0" />
                          <span className="truncate block">{config.mockup.kanbanTitle}</span>
                        </div>
                        <div className="text-[7.5px] text-slate-400 font-medium shrink-0 whitespace-nowrap">
                          Auto-updates ERP Ledger &amp; Revisions
                        </div>
                      </div>

                      {/* 3 Kanban Columns */}
                      <div className="grid grid-cols-3 gap-2 min-w-0">
                        {config.mockup.columns.map((col, idx) => {
                          const isTargetCol = idx === extra.kanbanApprovedCard.targetColumnIndex;
                          const showApprovedState = isTargetCol && isApproved;

                          return (
                            <div key={idx} className="bg-[#f8fafc] rounded-lg p-1.5 border border-slate-200/70 min-w-0 overflow-hidden flex flex-col justify-between">
                              <div className="flex items-center justify-between text-[7px] font-bold text-slate-500 mb-1 px-0.5 min-w-0 gap-1">
                                <span className="truncate block min-w-0 flex-1">{col.stageName}</span>
                                <span className="text-slate-600 font-mono shrink-0 whitespace-nowrap">{col.amount}</span>
                              </div>
                              <div
                                className={`bg-white rounded p-1.5 border shadow-2xs transition-all min-w-0 overflow-hidden ${
                                  showApprovedState
                                    ? "border-emerald-400 bg-emerald-50/20"
                                    : col.isHighlighted
                                    ? "border-sky-300"
                                    : "border-slate-200/80"
                                }`}
                              >
                                <div className="text-[8.5px] font-extrabold text-slate-800 truncate block">
                                  {col.cardTitle}
                                </div>
                                <div className="text-[7px] text-slate-400 truncate block mt-0.5">
                                  {col.cardDesc}
                                </div>
                                <div
                                  className={`mt-1.5 inline-block text-[6.5px] font-bold px-1.5 py-0.5 rounded truncate max-w-full ${
                                    showApprovedState
                                      ? "bg-emerald-50 border border-emerald-200 text-emerald-700"
                                      : col.cardTagStyle || "bg-slate-100 text-slate-700"
                                  }`}
                                >
                                  {showApprovedState ? extra.kanbanApprovedCard.approvedBadge : col.cardTag}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* AI Sentinel Alert Bar */}
                    <div className="mt-2 bg-white rounded-lg px-2.5 py-1.5 border border-slate-200/90 flex items-center justify-between shadow-2xs min-w-0">
                      <div className="flex items-center gap-1.5 min-w-0 flex-1 mr-2">
                        <span className="w-4 h-4 rounded-full bg-[#006fc9]/10 border border-[#006fc9]/25 text-[#006fc9] text-[7.5px] font-extrabold flex items-center justify-center shrink-0">
                          AI
                        </span>
                        <span className="text-[7.8px] font-bold text-slate-700 truncate block">
                          {config.mockup.alertText}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => showToast(`Sentinel Action Dispatched: ${config.mockup.alertAction}`)}
                        className="bg-[#006fc9] hover:bg-[#005fae] text-white text-[7.5px] font-bold px-2.5 py-1 rounded-full shrink-0 whitespace-nowrap transition-colors active:scale-95 cursor-pointer"
                      >
                        {config.mockup.alertAction}
                      </button>
                    </div>
                  </div>

                  {/* Dashboard Bottom Status Bar */}
                  <div className="flex items-center justify-between pt-1 text-[7.5px] text-slate-500 font-medium min-w-0">
                    <div className="flex items-center gap-1 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Live data feed connected</span>
                    </div>
                    <div className="truncate min-w-0">{config.moduleName}</div>
                  </div>
                </div>
              </div>

              {/* ======================================================================= */}
              {/* LAYER 2: SVG WORKFLOW CONNECTOR LINES, GLOWING NODES & PILLS            */}
              {/* ======================================================================= */}
              <svg
                className="absolute inset-0 w-[680px] h-[540px] pointer-events-none z-20 workflow-glow"
                viewBox="0 0 680 540"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Top Path Gradient */}
                  <linearGradient id={`gradTopPath-${slug}`} x1="65" y1="230" x2="432" y2="74" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#10b981"/>
                    <stop offset="28%" stopColor="#3b82f6"/>
                    <stop offset="65%" stopColor="#006fc9"/>
                    <stop offset="100%" stopColor="#10b981"/>
                  </linearGradient>

                  {/* Top Branch Down Gradient */}
                  <linearGradient id={`gradTopBranch-${slug}`} x1="350" y1="74" x2="314" y2="145" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#14b8a6"/>
                    <stop offset="100%" stopColor="#006fc9"/>
                  </linearGradient>

                  {/* Middle Path Gradient */}
                  <linearGradient id={`gradMidPath-${slug}`} x1="331" y1="246" x2="578" y2="314" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#06b6d4"/>
                    <stop offset="48%" stopColor="#3b82f6"/>
                    <stop offset="100%" stopColor="#7c3aed"/>
                  </linearGradient>

                  {/* Bottom Path Gradient */}
                  <linearGradient id={`gradBotPath-${slug}`} x1="126" y1="406" x2="582" y2="395" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#10b981"/>
                    <stop offset="32%" stopColor="#10b981"/>
                    <stop offset="58%" stopColor="#006fc9"/>
                    <stop offset="82%" stopColor="#7c3aed"/>
                    <stop offset="100%" stopColor="#6d28d9"/>
                  </linearGradient>

                  {/* Soft Drop Shadow for Connector Lines */}
                  <filter id={`lineShadow-${slug}`} x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#006fc9" floodOpacity="0.22"/>
                  </filter>
                </defs>

                {/* 1. TOP CONNECTOR PATH */}
                <path
                  d="M 65 232 L 65 110 C 65 86 85 74 109 74 L 428 74"
                  stroke={`url(#gradTopPath-${slug})`}
                  strokeWidth="5"
                  strokeLinecap="round"
                  filter={`url(#lineShadow-${slug})`}
                  className={isSimulating ? "flow-active" : ""}
                />
                <path d="M 421 65 L 431 74 L 421 83" stroke="#10b981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>

                {/* Branch from Top Path down into CRM Top Bar */}
                <path
                  d="M 358 74 C 330 74 316 92 316 116 L 316 147"
                  stroke={`url(#gradTopBranch-${slug})`}
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  className={isSimulating ? "flow-active" : ""}
                />
                <path d="M 308 140 L 316 149 L 324 140" stroke="#006fc9" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round"/>

                {/* Glowing Radar Node on Top Path */}
                <g transform="translate(262, 74)">
                  <circle r="22" fill="#38bdf8" fillOpacity="0.18" className="pulse-ring"/>
                  <circle r="15" fill="#006fc9" fillOpacity="0.28"/>
                  <circle r="8.5" fill="#006fc9" stroke="#e0f2fe" strokeWidth="2.5"/>
                </g>

                {/* Start Node on Top of Left Card */}
                <g transform="translate(65, 232)">
                  <circle r="11" fill="#10b981" fillOpacity="0.25"/>
                  <circle r="6.5" fill="#10b981" stroke="#ffffff" strokeWidth="2.2"/>
                </g>

                {/* 2. MIDDLE CONNECTOR PATH */}
                <path
                  d="M 332 246 C 332 272 350 280 385 280 L 542 280 C 558 280 567 290 567 306 L 567 315"
                  stroke={`url(#gradMidPath-${slug})`}
                  strokeWidth="4.8"
                  strokeLinecap="round"
                  filter={`url(#lineShadow-${slug})`}
                  className={isSimulating ? "flow-active" : ""}
                />
                <path d="M 559 309 L 567 318 L 575 309" stroke="#7c3aed" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round"/>

                {/* Glowing Cyan Start Node */}
                <g transform="translate(332, 246)">
                  <circle r="15" fill="#06b6d4" fillOpacity="0.22" className="pulse-ring"/>
                  <circle r="10" fill="#ffffff" stroke="#38bdf8" strokeWidth="2"/>
                  <circle r="5.5" fill="#006fc9"/>
                </g>

                {/* 3. BOTTOM CONNECTOR PATH */}
                <path
                  d="M 124 405 L 124 452 C 124 478 144 494 172 494 L 336 494 C 368 494 382 475 392 458 C 398 447 418 447 424 458 C 434 475 446 494 474 494 L 542 494 C 558 494 567 478 567 452 L 567 396"
                  stroke={`url(#gradBotPath-${slug})`}
                  strokeWidth="4.8"
                  strokeLinecap="round"
                  filter={`url(#lineShadow-${slug})`}
                  className={isSimulating ? "flow-active" : ""}
                />
                <path d="M 559 403 L 567 393 L 575 403" stroke="#6d28d9" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round"/>

                {/* Glowing Green Start Node under Left Card */}
                <g transform="translate(124, 408)">
                  <circle r="13" fill="#10b981" fillOpacity="0.28" className="pulse-ring"/>
                  <circle r="6" fill="#ffffff" stroke="#10b981" strokeWidth="2.5"/>
                </g>

                {/* Glowing Blue Apex Node below AI Sentinel Bar */}
                <g transform="translate(408, 451)">
                  <circle r="14" fill="#3b82f6" fillOpacity="0.22" className="pulse-ring"/>
                  <circle r="9" fill="#ffffff" stroke="#60a5fa" strokeWidth="2"/>
                  <circle r="5" fill="#006fc9"/>
                </g>
              </svg>

              {/* ======================================================================= */}
              {/* LAYER 3: WORKFLOW PILL BADGES ("Validate", "Automate", "Sync")          */}
              {/* ======================================================================= */}
              
              {/* Badge 1 on Middle Path */}
              <div className="absolute left-[395px] top-[266px] z-30 bg-gradient-to-r from-[#2563eb] to-[#4f46e5] text-white text-[10px] font-bold px-3.5 py-1 rounded-full shadow-md border border-white/80 tracking-tight">
                {extra.pillBadges[0]}
              </div>

              {/* Badge 2 on Bottom Path */}
              <div className="absolute left-[215px] top-[480px] z-30 bg-[#ecfdf5] text-[#065f46] text-[10.5px] font-bold px-4 py-1 rounded-full shadow-md border-2 border-[#34d399] tracking-tight">
                {extra.pillBadges[1]}
              </div>

              {/* Badge 3 on Bottom Path */}
              <div className="absolute left-[468px] top-[480px] z-30 bg-[#f5f3ff] text-[#5b21b6] text-[10.5px] font-bold px-3.5 py-1 rounded-full shadow-md border-2 border-[#a78bfa] tracking-tight">
                {extra.pillBadges[2]}
              </div>

              {/* ======================================================================= */}
              {/* LAYER 4: FLOATING CARD 1 (LEFT ACTION CARD)                             */}
              {/* ======================================================================= */}
              <div className="absolute left-[2px] top-[236px] w-[178px] rounded-[14px] p-3.5 floating-card-left border border-white z-30">
                {/* Header: Icon + Title */}
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className={`w-7 h-7 rounded-full ${extra.leftCard.iconBg} flex items-center justify-center text-white shadow-2xs shrink-0`}>
                    {renderLeftCardIcon()}
                  </div>
                  <div className="text-[11.5px] font-extrabold text-slate-900 leading-[1.2]">
                    {extra.leftCard.badgeLines[0]}<br/>
                    {extra.leftCard.badgeLines[1]}
                  </div>
                </div>

                {/* Inner Approval Request Box */}
                <div className="bg-white rounded-xl p-2.5 border border-slate-200/80 shadow-2xs mb-2.5">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#16a34a] flex items-center justify-center text-white shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.4]" />
                    </div>
                    <div className="text-[9px] font-bold text-slate-800 leading-tight">
                      {extra.leftCard.innerTitle}
                    </div>
                  </div>
                  <div className="text-[7.5px] text-slate-500 font-medium mt-1 truncate pl-1">
                    {extra.leftCard.innerSub}
                  </div>
                  {/* Skeleton Preview Bars */}
                  <div className="mt-2 space-y-1.5 pl-1">
                    <div className="h-1.5 w-full bg-slate-200 rounded-full" />
                    <div className="h-1.5 w-3/5 bg-slate-200 rounded-full" />
                  </div>
                </div>

                {/* Action Buttons: Approve & Review */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={triggerWorkflowSimulation}
                    className="bg-gradient-to-b from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] text-white text-[10px] font-bold py-1.5 rounded-lg shadow-2xs transition-transform active:scale-95 cursor-pointer"
                  >
                    {extra.leftCard.approveLabel}
                  </button>
                  <button
                    type="button"
                    onClick={() => showToast(extra.leftCard.reviewMessage)}
                    className="bg-gradient-to-b from-[#006fc9] to-[#005fae] hover:from-[#005fae] hover:to-[#004e8f] text-white text-[10px] font-bold py-1.5 rounded-lg shadow-2xs transition-transform active:scale-95 cursor-pointer"
                  >
                    {extra.leftCard.reviewLabel}
                  </button>
                </div>
              </div>

              {/* ======================================================================= */}
              {/* LAYER 5: FLOATING CARD 2 (TOP RIGHT ENGINE CARD)                        */}
              {/* ======================================================================= */}
              <div className="absolute left-[424px] top-[2px] w-[240px] rounded-[14px] floating-card-right z-30 overflow-visible">
                {/* Header Bar with Soft Blue Tint */}
                <div className="bg-gradient-to-r from-[#e0f2fe] via-[#dbeafe] to-[#e0e7ff] px-3.5 py-2.5 flex items-center gap-2 border-b border-blue-200/60 rounded-t-[14px]">
                  <span className="w-4 h-4 rounded-full bg-[#10b981] text-white flex items-center justify-center shadow-2xs">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span className="text-[11.5px] font-extrabold text-slate-900 tracking-tight truncate">
                    {extra.rightCard.engineTitle}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-3.5 bg-white/95 relative rounded-b-[14px]">
                  <div className="text-[10px] font-medium text-slate-600">{extra.rightCard.statusLabel}</div>
                  <div className="text-[14px] font-extrabold text-slate-900 tracking-tight mt-0.5 truncate">
                    {extra.rightCard.statusValue}
                  </div>

                  {/* Document Scanner Graphic */}
                  <div className="mt-2 flex items-center justify-end gap-2.5 pr-2 pt-1">
                    {/* Left Unscanned Document Icon */}
                    <div className="w-9 h-11 rounded-md bg-slate-50 border border-slate-200/90 p-1.5 flex flex-col gap-1 shadow-2xs shrink-0">
                      <div className="w-3.5 h-1.5 bg-slate-300 rounded-xs mb-0.5" />
                      <div className="w-full h-1 bg-slate-300/80 rounded-full" />
                      <div className="w-full h-1 bg-slate-200 rounded-full" />
                      <div className="w-4/5 h-1 bg-slate-200 rounded-full" />
                    </div>

                    {/* Dotted Arrow */}
                    <div className="flex items-center text-slate-400 shrink-0">
                      <span className="w-3 border-t border-dashed border-slate-400" />
                      <svg className="w-2.5 h-2.5 -ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7 5l6 5-6 5V5z"/>
                      </svg>
                    </div>

                    {/* Right Scanned Document inside Viewfinder Brackets */}
                    <div className="relative w-12 h-13 p-1.5 flex items-center justify-center bg-sky-50/70 rounded-lg shrink-0">
                      {/* Viewfinder Brackets */}
                      <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#006fc9] rounded-tl" />
                      <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#006fc9] rounded-tr" />
                      <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#006fc9] rounded-bl" />
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#006fc9] rounded-br" />

                      {/* Green Verified Badge */}
                      <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#10b981] text-white flex items-center justify-center shadow-xs z-20">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>

                      {/* Inner Document Card */}
                      <div className="w-9 h-11 rounded-md bg-white border border-sky-200 p-1.5 flex flex-col gap-1 shadow-xs relative overflow-hidden">
                        <div className="w-3.5 h-1.5 bg-sky-300 rounded-xs mb-0.5" />
                        <div className="w-full h-1 bg-slate-300 rounded-full" />
                        <div className="w-full h-1 bg-slate-200 rounded-full" />
                        <div className="w-4/5 h-1 bg-slate-200 rounded-full" />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-sky-400/15" />
                      </div>

                      {/* Glowing Horizontal Laser Scan Line */}
                      <div className="scanner-laser absolute -inset-x-0.5 h-[2.5px] bg-gradient-to-r from-transparent via-[#006fc9] to-transparent shadow-[0_0_8px_#006fc9] z-10" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle 4-Point Sparkle Star at Bottom Right */}
              <svg className="absolute right-[10px] bottom-[34px] w-7 h-7 text-slate-300/55 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z"/>
              </svg>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Interactive Notification Toast */}
      <div
        className={`fixed bottom-6 right-6 z-50 max-w-sm bg-[#0f1e2e] text-white px-4 py-3 rounded-xl shadow-2xl border border-sky-500/30 flex items-center gap-3 transition-all duration-300 ${
          toastMessage ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-24 opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-7 h-7 rounded-full bg-[#006fc9] flex items-center justify-center shrink-0 text-white font-bold text-xs">
          ✓
        </div>
        <div className="text-[13px] font-medium leading-snug text-slate-100">
          {toastMessage || "Action triggered"}
        </div>
      </div>
    </section>
  );
}

