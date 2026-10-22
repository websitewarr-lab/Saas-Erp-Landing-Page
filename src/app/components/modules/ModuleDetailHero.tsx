"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Boxes,
  Factory,
  Receipt,
  Users,
  Landmark,
  Kanban,
  Activity,
} from "lucide-react";
import { PopupCtaButton } from "../popup-cta";
import type { ModulePageConfig } from "./moduleData";

/* ========================================================================= */
/* 1. MODULE PREVIEW IMAGES MAPPING                                          */
/* High-resolution WebP dashboard screenshots in /images/Modulespreviewimgs   */
/* ========================================================================= */

interface ModuleImageMeta {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const MODULE_PREVIEW_IMAGES: Record<string, ModuleImageMeta | undefined> = {
  production: {
    src: "/images/Modulespreviewimgs/01_Production_Dashboard.webp",
    alt: "Mossie ERP Production & Shop Floor MES Dashboard Preview",
    width: 1910,
    height: 992,
  },
  crm: {
    src: "/images/Modulespreviewimgs/02_CRM_Executive_Dashboard_v2.webp",
    alt: "Mossie ERP CRM Executive Dashboard Preview",
    width: 1898,
    height: 986,
  },
  sales: {
    src: "/images/Modulespreviewimgs/03_Sales_Quotations_Listing.webp",
    alt: "Mossie ERP Sales Quotations & Order Dispatch Preview",
    width: 1909,
    height: 992,
  },
  inventory: {
    src: "/images/Modulespreviewimgs/04_Inventory_Supply_Chain_Dashboard.webp",
    alt: "Mossie ERP Inventory & Supply Chain Dashboard Preview",
    width: 1909,
    height: 989,
  },
  purchase: {
    src: "/images/Modulespreviewimgs/05_Purchase_Suppliers_Directory.webp",
    alt: "Mossie ERP Purchase & Suppliers Directory Preview",
    width: 1909,
    height: 991,
  },
  hrms: {
    src: "/images/Modulespreviewimgs/06_HRMS_Dashboard.webp",
    alt: "Mossie ERP HRMS & Payroll Dashboard Preview",
    width: 1909,
    height: 992,
  },
};

/* ========================================================================= */
/* 2. TAILORED HERO EXTRA CONFIGURATION                                      */
/* Overlays, status tags, and action messaging per slug                      */
/* ========================================================================= */

interface ModuleHeroDetail {
  leftCard: {
    iconType: "whatsapp" | "truck" | "receipt" | "boxes" | "factory" | "landmark" | "users" | "kanban";
    title: string;
    subtitle: string;
    innerLabel: string;
    innerDetail: string;
    approveLabel: string;
    reviewLabel: string;
    approvedMessage: string;
    reviewMessage: string;
  };
  rightCard: {
    iconType: "shield" | "activity" | "check" | "receipt";
    engineTitle: string;
    verifiedLabel: string;
    statusLabel: string;
    statusValue: string;
  };
}

const MODULE_HERO_CONFIG: Record<string, ModuleHeroDetail> = {
  crm: {
    leftCard: {
      iconType: "whatsapp",
      title: "1-Click WhatsApp Approval",
      subtitle: "Instant Deal Closure",
      innerLabel: "Approval Request for Quote",
      innerDetail: "Quote #QT-2026-0001 • ₹1.12 Cr",
      approveLabel: "Approve",
      reviewLabel: "Review",
      approvedMessage: "✓ 1-Click WhatsApp Approval synced! Fuzzy Duplicate Engine verified 0 collisions & updated ERP Ledger.",
      reviewMessage: "Quote #QT-2026-0001 (R2) opened in Multi-Revision Audit Trail.",
    },
    rightCard: {
      iconType: "shield",
      engineTitle: "Fuzzy Duplicate Engine",
      verifiedLabel: "Verified 100%",
      statusLabel: "Duplicate Check:",
      statusValue: "Zero Collisions",
    },
  },
  sales: {
    leftCard: {
      iconType: "truck",
      title: "1-Click Order Confirmation",
      subtitle: "Automated Dispatch Routing",
      innerLabel: "Dispatch Order #SO-8842",
      innerDetail: "Godrej Modern • ₹14.2L",
      approveLabel: "Generate E-Way",
      reviewLabel: "Review POD",
      approvedMessage: "✓ Order #SO-8842 Approved! E-Way Bill & IRN generated (<1.4s) and warehouse dispatch notice issued.",
      reviewMessage: "Order #SO-8842 opened: Digital POD & Loading Challan verified.",
    },
    rightCard: {
      iconType: "receipt",
      engineTitle: "GST E-Way & IRN Engine",
      verifiedLabel: "IRN Active",
      statusLabel: "NIC Portal Sync:",
      statusValue: "100% Online (<1.4s)",
    },
  },
  production: {
    leftCard: {
      iconType: "factory",
      title: "MES Work Order Dispatch",
      subtitle: "Shop Floor Execution",
      innerLabel: "Work Order #MO-5104",
      innerDetail: "Gearbox Housing (500 Units)",
      approveLabel: "Approve Dispatch",
      reviewLabel: "Inspect BOM",
      approvedMessage: "✓ Work Order #MO-5104 Completed! 500 units inspected, scrap recorded (0.2%), and moved to FG warehouse.",
      reviewMessage: "Work Order #MO-5104 opened: 4-level BOM routing & workstation capacity verified.",
    },
    rightCard: {
      iconType: "activity",
      engineTitle: "Finite-Capacity APS Engine",
      verifiedLabel: "94.2% OEE",
      statusLabel: "Bottleneck Check:",
      statusValue: "Zero Clashes",
    },
  },
  inventory: {
    leftCard: {
      iconType: "boxes",
      title: "Mobile Barcode Bin Transfer",
      subtitle: "Zero-Drift Stock Movement",
      innerLabel: "Stock Transfer #TR-2201",
      innerDetail: "WH-Mumbai → WH-Pune (200 Units)",
      approveLabel: "Verify & Receive",
      reviewLabel: "Audit Lot",
      approvedMessage: "✓ Stock Transfer #TR-2201 Received! 200 units verified via barcode & allocated to Bin A-14.",
      reviewMessage: "Transfer #TR-2201 opened: Serial numbers and QA certificate verified.",
    },
    rightCard: {
      iconType: "shield",
      engineTitle: "Real-Time Bin & Lot Tracker",
      verifiedLabel: "Audit Cleared",
      statusLabel: "Inventory Variance:",
      statusValue: "Active (0% Drift)",
    },
  },
  purchase: {
    leftCard: {
      iconType: "receipt",
      title: "3-Way PO Match Approval",
      subtitle: "Automated Accounts Payable",
      innerLabel: "PO #PO-9410 vs GRN Match",
      innerDetail: "JSW Structural • ₹8.5L",
      approveLabel: "Approve Match",
      reviewLabel: "Compare L1",
      approvedMessage: "✓ PO #PO-9410 3-Way Match Approved! Verified with GRN-4812 and posted to Accounts Payable.",
      reviewMessage: "PO #PO-9410 opened: 3 vendor quotations and tax breakout verified.",
    },
    rightCard: {
      iconType: "shield",
      engineTitle: "Automated 3-Way Audit Engine",
      verifiedLabel: "Audit Cleared",
      statusLabel: "Discrepancy Check:",
      statusValue: "Zero Discrepancy",
    },
  },
  hrms: {
    leftCard: {
      iconType: "users",
      title: "1-Click Biometric Payroll Run",
      subtitle: "Automated Batch Payout",
      innerLabel: "October 2026 Salary Cycle",
      innerDetail: "482 Staff • ₹42.8L Total",
      approveLabel: "Run Payroll",
      reviewLabel: "Audit TDS",
      approvedMessage: "✓ Payroll Run Approved! Net salaries queued for HDFC Corporate Batch Payout. WhatsApp payslips queued.",
      reviewMessage: "October 2026 Payroll opened: Biometric muster roll & TDS Form 16 computations verified.",
    },
    rightCard: {
      iconType: "check",
      engineTitle: "Statutory Compliance Engine",
      verifiedLabel: "ECR Ready",
      statusLabel: "Statutory Check:",
      statusValue: "100% Compliant",
    },
  },
  accounting: {
    leftCard: {
      iconType: "landmark",
      title: "Bank API Auto-Reconciliation",
      subtitle: "Instant GL Posting",
      innerLabel: "HDFC API Match #TX-9021",
      innerDetail: "Larsen Infra • ₹4,50,000",
      approveLabel: "Post to GL",
      reviewLabel: "Audit Trail",
      approvedMessage: "✓ Payment ₹4,50,000 Auto-Reconciled! Matched with INV-8812 and posted to General Ledger in 0.8s.",
      reviewMessage: "Transaction TX-9021 opened: Bank feed reference matched against outstanding invoice.",
    },
    rightCard: {
      iconType: "check",
      engineTitle: "Real-Time General Ledger Engine",
      verifiedLabel: "Zero Variance",
      statusLabel: "Trial Balance:",
      statusValue: "100% Balanced",
    },
  },
  project: {
    leftCard: {
      iconType: "kanban",
      title: "Milestone Signoff & Billing",
      subtitle: "Revenue Recognition",
      innerLabel: "Phase 2 Signoff #M3",
      innerDetail: "Greenfield Pharma • ₹35L",
      approveLabel: "Approve Milestone",
      reviewLabel: "Timesheet Log",
      approvedMessage: "✓ Milestone 3 Approved! ₹35,00,000 tax invoice generated and booked to Project Revenue.",
      reviewMessage: "Milestone 3 opened: 320 logged hours and deliverables signoff verified.",
    },
    rightCard: {
      iconType: "activity",
      engineTitle: "Earned Value EVM Engine",
      verifiedLabel: "Margin Verified",
      statusLabel: "Cost Performance:",
      statusValue: "CPI: 1.08 • SPI: 1.04",
    },
  },
};

/* ========================================================================= */
/* 3. ICON RENDER HELPER (RESPONSIVE ICON SIZING)                           */
/* ========================================================================= */

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.98 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8.01 12.27C8.14 12.44 9.76 14.94 12.25 16.01C14.34 16.92 14.76 16.74 15.21 16.7C15.66 16.66 16.68 16.09 16.89 15.51C17.1 14.93 17.1 14.43 17.04 14.33C16.97 14.24 16.81 14.18 16.56 14.06C16.31 13.94 15.09 13.34 14.87 13.25C14.64 13.17 14.48 13.13 14.31 13.38C14.15 13.63 13.67 14.18 13.53 14.35C13.38 14.52 13.24 14.54 12.99 14.42C12.74 14.29 11.94 14.03 11 13.2C10.26 12.54 9.77 11.73 9.62 11.48C9.48 11.23 9.61 11.1 9.73 10.97C9.84 10.86 9.98 10.68 10.1 10.54C10.23 10.39 10.27 10.29 10.35 10.13C10.43 9.96 10.39 9.82 10.33 9.7C10.27 9.57 9.77 8.36 9.56 7.86C9.36 7.38 9.16 7.44 9.01 7.44C8.86 7.43 8.7 7.33 8.53 7.33Z" />
    </svg>
  );
}

function renderLeftIcon(iconType: string, className = "w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"): ReactNode {
  switch (iconType) {
    case "whatsapp":
      return <WhatsAppIcon className={`${className} fill-white`} />;
    case "truck":
      return <Truck className={`${className} text-white`} strokeWidth={2.4} />;
    case "boxes":
      return <Boxes className={`${className} text-white`} strokeWidth={2.4} />;
    case "factory":
      return <Factory className={`${className} text-white`} strokeWidth={2.4} />;
    case "receipt":
      return <Receipt className={`${className} text-white`} strokeWidth={2.4} />;
    case "users":
      return <Users className={`${className} text-white`} strokeWidth={2.4} />;
    case "landmark":
      return <Landmark className={`${className} text-white`} strokeWidth={2.4} />;
    case "kanban":
      return <Kanban className={`${className} text-white`} strokeWidth={2.4} />;
    default:
      return <CheckCircle2 className={`${className} text-white`} strokeWidth={2.4} />;
  }
}

function renderRightIcon(iconType: string, className = "w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"): ReactNode {
  switch (iconType) {
    case "activity":
      return <Activity className={`${className} text-[#006fc9]`} strokeWidth={2.4} />;
    case "check":
      return <CheckCircle2 className={`${className} text-[#006fc9]`} strokeWidth={2.4} />;
    case "receipt":
      return <Receipt className={`${className} text-[#006fc9]`} strokeWidth={2.4} />;
    case "shield":
    default:
      return <ShieldCheck className={`${className} text-[#006fc9]`} strokeWidth={2.4} />;
  }
}

/* ========================================================================= */
/* 4. MAIN SHARED MODULE DETAIL HERO COMPONENT                               */
/* Clean, focused hero layout used by all ERP module detail pages.           */
/* ========================================================================= */

export default function ModuleDetailHero({ config }: { config: ModulePageConfig }) {
  const slug = config?.slug || "crm";
  const heroData = MODULE_HERO_CONFIG[slug] || MODULE_HERO_CONFIG.crm;
  const imageMeta = MODULE_PREVIEW_IMAGES[slug];

  const [isApproved, setIsApproved] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const featureCount = config?.featuresCatalog?.items?.length || 6;

  const showToast = (message: string) => {
    setToastMessage(message);
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 4200);
  };

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const handleApprove = () => {
    setIsApproved(true);
    showToast(heroData.leftCard.approvedMessage);
  };

  const handleReview = () => {
    showToast(heroData.leftCard.reviewMessage);
  };

  return (
    <section className="relative z-20 overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#f4f9ff] to-[#eaf3ff] border-b border-slate-200/70 pt-8 sm:pt-12 lg:pt-14 pb-14 sm:pb-20 lg:pb-24">
      {/* Background Centered Dot Matrix Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(#94a3b8 1.25px, transparent 1.25px)",
          backgroundSize: "18px 18px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 35%, rgba(0,0,0,0.7) 15%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 35%, rgba(0,0,0,0.7) 15%, transparent 85%)",
        }}
      />

      {/* Ambient Centered Brand Accent Blue Radial Glow */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[720px] h-[520px] rounded-full bg-[#006fc9]/10 blur-[130px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* ======================================================================= */}
        {/* TOP BREADCRUMB: Modules / [Module Badge]                                */}
        {/* ======================================================================= */}
        <div className="inline-flex items-center justify-center gap-2 bg-white/95 border border-slate-200/90 shadow-2xs rounded-full px-4 py-1.5 mb-6 backdrop-blur-xs">
          <Link
            href="/modules"
            className="text-[12.5px] font-medium text-slate-500 hover:text-slate-800 transition-colors"
          >
            Modules
          </Link>
          <span className="text-slate-300 text-xs">/</span>
          <div className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-slate-800">
            <span className="w-2 h-2 rounded-full bg-[#006fc9]" />
            <span>{config?.badge || "Enterprise Module"}</span>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* CENTERED 2-LINE HEADING                                                 */}
        {/* ======================================================================= */}
        <h1 className="font-sans font-extrabold text-[32px] sm:text-[44px] lg:text-[52px] text-[#0f172a] tracking-tight leading-[1.14] max-w-4xl mb-5">
          {config?.heroHeadline?.trim() || "Turn Operations into Long-Term Growth"}{" "}
          <span className="text-[#006fc9] inline-block">
            {config?.heroHighlight || "with Connected ERP Intelligence."}
          </span>
        </h1>

        {/* ======================================================================= */}
        {/* CENTERED SUBTITLE                                                        */}
        {/* ======================================================================= */}
        <p className="text-[15px] sm:text-[17px] leading-[1.65] text-[#334155] max-w-2xl mx-auto font-normal mb-8">
          {config?.heroDescription ||
            "Unified workflows, real-time sync, and automated audit trails connecting finance, inventory, production, sales, and HR in one calm platform."}
        </p>

        {/* ======================================================================= */}
        {/* CENTERED DUAL CTAs (SINGLE LINE ON SMARTPHONE)                          */}
        {/* ======================================================================= */}
        <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-3.5 md:gap-4 mb-10 sm:mb-12 md:mb-14 w-full max-w-full px-1">
          <PopupCtaButton
            intent="trial"
            className="btn-primary-erp text-white text-[11px] min-[380px]:text-[12px] sm:text-[14.5px] md:text-[15px] font-bold px-2.5 min-[380px]:px-3.5 sm:px-7 md:px-8 py-2 sm:py-3.5 rounded-full flex items-center justify-center gap-1 sm:gap-2 shadow-lg shadow-[#006fc9]/25 hover:shadow-xl hover:shadow-[#006fc9]/35 active:scale-95 cursor-pointer transition-all whitespace-nowrap shrink-0"
          >
            <span className="hidden min-[480px]:inline">Start 14-Day Free Sandbox</span>
            <span className="min-[480px]:hidden">14-Day Free Sandbox</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 stroke-[2.4] shrink-0" />
          </PopupCtaButton>

          <a
            href="#features-matrix"
            className="btn-secondary-erp text-slate-800 text-[11px] min-[380px]:text-[12px] sm:text-[14.5px] md:text-[15px] font-bold px-2.5 min-[380px]:px-3.5 sm:px-6 md:px-7 py-2 sm:py-3.5 rounded-full flex items-center justify-center gap-1 sm:gap-2 border border-slate-200/90 bg-white hover:bg-slate-50/90 shadow-2xs active:scale-95 cursor-pointer transition-all whitespace-nowrap shrink-0"
          >
            <span className="hidden min-[480px]:inline">Explore All {featureCount} Features</span>
            <span className="min-[480px]:hidden">All {featureCount} Features</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500 rotate-90 stroke-[2.2] shrink-0" />
          </a>
        </div>

        {/* ======================================================================= */}
        {/* EMBEDDED DASHBOARD PREVIEW WINDOW (MAX-W 980PX)                         */}
        {/* BLUE BACKDROP CONTAINER MATCHING REFERENCE IMAGE MOCKUP                */}
        {/* ======================================================================= */}
        <div className="w-full max-w-[980px] relative">
          {/* Blue Container Backdrop */}
          <div className="rounded-[20px] sm:rounded-[28px] md:rounded-[36px] bg-gradient-to-b from-[#e8f3fc] via-[#edf6fe] to-[#e6f1fb] border border-[#bcdcf8] p-2.5 sm:p-4 md:p-6 lg:p-7 shadow-[0_22px_55px_-18px_rgba(0,111,201,0.18),0_10px_20px_-8px_rgba(15,23,42,0.06)] relative">
            
            {/* The Inner Preview Window Displaying Module Screenshot or Gradient Canvas */}
            <div className="rounded-lg sm:rounded-xl md:rounded-2xl border border-slate-200/90 shadow-[0_16px_36px_-12px_rgba(15,23,42,0.14)] bg-white overflow-hidden text-left relative">
              {imageMeta ? (
                <Image
                  src={imageMeta.src}
                  alt={imageMeta.alt}
                  width={imageMeta.width}
                  height={imageMeta.height}
                  priority
                  className="w-full h-auto block select-none"
                />
              ) : (
                <div className="w-full aspect-[1908/992] bg-gradient-to-br from-white via-slate-50/70 to-[#eef6fc] relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
                </div>
              )}
            </div>

            {/* Interactive Floating Overlays Dynamically Scaling with Screen Width */}
            <>
              {/* Overlay 1: Top-Right Engine Verification Card */}
              <div className="absolute -top-2 sm:-top-3.5 md:-top-5 right-2 sm:right-4 md:right-8 z-20 bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-2.5 md:p-3.5 lg:p-4 border border-slate-200/90 shadow-md sm:shadow-lg md:shadow-xl shadow-slate-900/10 w-[clamp(130px,28%,260px)] text-left transition-all hover:scale-[1.02]">
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 mb-1 sm:mb-1.5 md:mb-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-[#006fc9]/10 text-[#006fc9] border border-[#006fc9]/20 flex items-center justify-center shrink-0">
                    {renderRightIcon(heroData.rightCard.iconType)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[9px] sm:text-[11px] md:text-[12px] font-bold text-slate-800 truncate">
                      {heroData.rightCard.engineTitle}
                    </div>
                    <div className="text-[7.5px] sm:text-[9.5px] md:text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="truncate">{heroData.rightCard.verifiedLabel}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50/90 rounded sm:rounded-md md:rounded-lg p-1 sm:p-1.5 md:p-2 border border-slate-100 flex items-center justify-between text-[8px] sm:text-[10px] md:text-[11px] gap-1">
                  <span className="text-slate-500 font-medium truncate">
                    {heroData.rightCard.statusLabel}
                  </span>
                  <span className="text-[#006fc9] font-bold bg-[#006fc9]/10 px-1 sm:px-1.5 py-0.5 rounded text-[7.5px] sm:text-[9.5px] md:text-[10.5px] shrink-0 border border-[#006fc9]/20">
                    {heroData.rightCard.statusValue}
                  </span>
                </div>
              </div>

              {/* Overlay 2: Bottom-Left Action Approval Card */}
              <div className="absolute -bottom-2 sm:-bottom-3.5 md:-bottom-5 left-2 sm:left-4 md:left-8 z-20 bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-2.5 md:p-3.5 lg:p-4 border border-slate-200/90 shadow-md sm:shadow-lg md:shadow-xl shadow-slate-900/10 w-[clamp(145px,32%,295px)] text-left transition-all hover:scale-[1.02]">
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 mb-1 sm:mb-1.5 md:mb-2">
                  <div
                    className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 shadow-xs ${
                      heroData.leftCard.iconType === "whatsapp"
                        ? "bg-[#22c55e] text-white"
                        : "bg-[#006fc9] text-white"
                    }`}
                  >
                    {renderLeftIcon(heroData.leftCard.iconType)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[9px] sm:text-[11px] md:text-[12px] font-bold text-slate-800 truncate">
                      {heroData.leftCard.title}
                    </div>
                    <div className="text-[7.5px] sm:text-[9.5px] md:text-[10.5px] text-slate-500 truncate">
                      {heroData.leftCard.subtitle}
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50/90 rounded sm:rounded-md md:rounded-lg p-1 sm:p-1.5 md:p-2 border border-slate-100 mb-1.5 sm:mb-2 text-[8px] sm:text-[10px] md:text-[10.5px]">
                  <div className="font-semibold text-slate-700 truncate">
                    {heroData.leftCard.innerLabel}
                  </div>
                  <div className="text-slate-500 text-[7px] sm:text-[9px] md:text-[10px] truncate">
                    {heroData.leftCard.innerDetail}
                  </div>
                </div>

                <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                  <button
                    type="button"
                    onClick={handleApprove}
                    className={`flex-1 py-0.5 sm:py-1 md:py-1.5 px-1.5 sm:px-2 md:px-3 rounded sm:rounded-md md:rounded-lg text-[8px] sm:text-[10px] md:text-[11px] font-bold transition-all shadow-2xs active:scale-95 cursor-pointer text-center truncate ${
                      isApproved
                        ? "bg-emerald-600 text-white"
                        : heroData.leftCard.iconType === "whatsapp"
                        ? "bg-[#22c55e] hover:bg-[#16a34a] text-white"
                        : "bg-[#006fc9] hover:bg-[#005fae] text-white"
                    }`}
                  >
                    {isApproved ? "✓ Approved" : heroData.leftCard.approveLabel}
                  </button>
                  <button
                    type="button"
                    onClick={handleReview}
                    className="py-0.5 sm:py-1 md:py-1.5 px-1.5 sm:px-2 md:px-3 rounded sm:rounded-md md:rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[8px] sm:text-[10px] md:text-[11px] font-semibold transition-all shadow-2xs active:scale-95 cursor-pointer text-center truncate"
                  >
                    {heroData.leftCard.reviewLabel}
                  </button>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>

      {/* Floating Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm sm:max-w-md bg-slate-900/95 backdrop-blur-md text-white text-[12.5px] px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-700 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="leading-snug">{toastMessage}</span>
        </div>
      )}
    </section>
  );
}
