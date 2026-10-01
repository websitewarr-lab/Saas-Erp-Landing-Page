"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { WorkflowStage } from "./moduleData";

interface ConnectedWorkflowFlowProps {
  workflow: {
    eyebrow?: string;
    title: string;
    subtitle: string;
    steps: WorkflowStage[];
  };
}

// Wave layer ribbon & line math (matches the SVG periodic waves for seamless drifting)
const W = 2400;
const pts = (period: number, amp: number, y: number, phase: number) => {
  const out: string[] = [];
  for (let x = 0; x <= W; x += 12) {
    out.push(
      x + "," + (y + amp * Math.sin((2 * Math.PI * x) / period + phase)).toFixed(1)
    );
  }
  return out;
};
const line = (period: number, amp: number, y: number, phase: number) =>
  "M" + pts(period, amp, y, phase).join("L");
const ribbon = (period: number, amp: number, y: number, phase: number) =>
  "M" +
  pts(period, amp, y, phase).join("L") +
  "L" +
  pts(period, amp, y, phase + Math.PI).reverse().join("L") +
  "Z";

const WAVE_LAYERS = [
  { d: ribbon(600, 46, 130, 0), cls: "w-rib-a", t: 30 },
  { d: ribbon(400, 30, 138, 0.8), cls: "w-rib-b", t: 22 },
  { d: line(300, 22, 116, 0.4), cls: "w-line-a", t: 16 },
  { d: line(400, 40, 142, 1.9), cls: "w-line-b", t: 26 },
  { d: line(240, 14, 128, 2.6), cls: "w-line-c", t: 12 },
];

/* =========================================================================
   Bespoke Connected Workflow Stage Vector Illustrations (41 Unique Stages)
   Precision SVG vectors with OKLCH theme gradients and micro-animations
   ========================================================================= */

/* --- HRMS Stages --- */
function HrmsPunchIcon() {
  return (
    <svg className="ic ic-punch" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Mobile/Biometric Terminal Frame */}
      <rect x="15" y="7" width="34" height="50" rx="7" stroke="url(#icoGrad)" strokeWidth="3.5" />
      <line x1="28" y1="12" x2="36" y2="12" stroke="url(#icoGrad)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Biometric Fingerprint Whorls */}
      <g stroke="url(#icoGrad)" strokeWidth="2.8" strokeLinecap="round">
        <path d="M32 24a8 8 0 0 1 8 8v4" />
        <path d="M24 36v-4a8 8 0 0 1 16 0v7" />
        <path d="M28 38v-6a4 4 0 0 1 8 0v5" />
        <path d="M32 35v3" />
      </g>
      {/* Horizontal Laser Scanning Line */}
      <line className="mf-laser" x1="19" y1="26" x2="45" y2="26" stroke="#38bdf8" strokeWidth="2.8" strokeLinecap="round" />
      {/* Geo-Fenced Mobile GPS Indicator */}
      <circle cx="41" cy="48" r="4.5" fill="#10b981" />
      <circle cx="41" cy="48" r="2" fill="#ffffff" />
    </svg>
  );
}

function HrmsLeaveIcon() {
  return (
    <svg className="ic ic-leave" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Calendar Binder Sheet */}
      <rect x="11" y="13" width="42" height="40" rx="6" stroke="url(#icoGrad)" strokeWidth="3.5" />
      <path d="M11 23h42" stroke="url(#icoGrad)" strokeWidth="3" />
      <line x1="21" y1="8" x2="21" y2="15" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="43" y1="8" x2="43" y2="15" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Calendar Days */}
      <circle cx="21" cy="31" r="2" fill="url(#icoGrad)" />
      <circle cx="32" cy="31" r="2" fill="url(#icoGrad)" />
      <circle cx="21" cy="40" r="2" fill="url(#icoGrad)" />
      {/* Overtime Clock / Signoff Seal */}
      <circle cx="43" cy="42" r="11" fill="#fff" stroke="url(#icoGreen)" strokeWidth="3" />
      <path d="M43 36v6l4 2" stroke="url(#icoGreen)" strokeWidth="2.5" strokeLinecap="round" />
      <path className="chk" d="M37 42l2.5 2.5 5.5-5.5" stroke="url(#icoGreen)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HrmsPayrollIcon() {
  return (
    <svg className="ic ic-payroll" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Gross-to-Net Calculator / Execution Terminal */}
      <rect x="13" y="8" width="38" height="48" rx="6" stroke="url(#icoGrad)" strokeWidth="3.5" />
      {/* LCD Display */}
      <rect x="19" y="14" width="26" height="12" rx="3" fill="url(#icoGrad)" />
      {/* Rupee Symbol ₹ on LCD */}
      <path d="M26 18h7M26 21h7M26 18c2 0 3.5 1 3.5 3s-1.5 3-3.5 3M28 24l3.5 4" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Keypad Grid */}
      <circle cx="23" cy="34" r="2.5" fill="url(#icoGrad)" />
      <circle cx="32" cy="34" r="2.5" fill="url(#icoGrad)" />
      <circle cx="41" cy="34" r="2.5" fill="url(#icoGrad)" />
      <circle cx="23" cy="44" r="2.5" fill="url(#icoGrad)" />
      <circle cx="32" cy="44" r="2.5" fill="url(#icoGrad)" />
      {/* 1-Click Execution Lightning Bolt */}
      <path d="M43 38l-4 8h5l-3 7" stroke="url(#icoAmber)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HrmsBankIcon() {
  return (
    <svg className="ic ic-bank" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Classical Bank Building Pediment Roof */}
      <path d="M9 22L32 10l23 12H9z" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinejoin="round" />
      {/* Pillars */}
      <line x1="17" y1="24" x2="17" y2="44" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="27" y1="24" x2="27" y2="44" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="37" y1="24" x2="37" y2="44" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Foundation Platform */}
      <rect x="8" y="44" width="48" height="6" rx="2" stroke="url(#icoGrad)" strokeWidth="3.5" />
      {/* Outbound NACH Bank Wire Wave */}
      <g stroke="url(#icoGreen)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M42 30h14M50 25l6 5-6 5" />
      </g>
    </svg>
  );
}

function HrmsLedgerIcon() {
  return (
    <svg className="ic ic-salary-ledger" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* General Ledger Book */}
      <path d="M14 10h30a6 6 0 0 1 6 6v38a2 2 0 0 1-2 2H18a6 6 0 0 1-6-6V12a2 2 0 0 1 2-2z" stroke="url(#icoGrad)" strokeWidth="3.5" />
      <path d="M18 10v46" stroke="url(#icoGrad)" strokeWidth="3" />
      {/* Ledger Lines */}
      <line x1="25" y1="20" x2="42" y2="20" stroke="url(#icoGrad)" strokeWidth="3" strokeLinecap="round" />
      <line x1="25" y1="28" x2="38" y2="28" stroke="url(#icoGrad)" strokeWidth="3" strokeLinecap="round" />
      {/* Official Voucher Audit Stamp */}
      <circle cx="36" cy="42" r="10" fill="#fff" stroke="url(#icoGreen)" strokeWidth="3" />
      <path className="chk" d="M31 42l3.5 3.5 7.5-7.5" stroke="url(#icoGreen)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* --- Accounting Stages --- */
function AccEventIcon() {
  return (
    <svg className="ic ic-event" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Central Event Bus Hub */}
      <circle cx="32" cy="32" r="10" stroke="url(#icoGrad)" strokeWidth="3.5" />
      <circle cx="32" cy="32" r="4" fill="url(#icoGrad)" />
      {/* Multi-Stream Event Inputs */}
      <g stroke="url(#icoGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="12" x2="24" y2="24" />
        <path d="M12 18V12h6" />
        <line x1="12" y1="52" x2="24" y2="40" />
        <path d="M18 52h-6v-6" />
        <line x1="52" y1="12" x2="40" y2="24" />
        <path d="M46 12h6v6" />
        <line x1="52" y1="52" x2="40" y2="40" />
        <circle cx="52" cy="52" r="3" fill="#10b981" />
      </g>
    </svg>
  );
}

function AccVoucherIcon() {
  return (
    <svg className="ic ic-voucher" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Scales Fulcrum Pillar */}
      <path d="M32 10v42M24 54h16" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Balanced Beam */}
      <path className="scale-beam" d="M12 20h40" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Left Debit Pan */}
      <path d="M12 20l-5 14h10z" stroke="url(#icoGrad)" strokeWidth="3" strokeLinejoin="round" />
      {/* Right Credit Pan */}
      <path d="M52 20l-5 14h10z" stroke="url(#icoGrad)" strokeWidth="3" strokeLinejoin="round" />
      {/* Center Equilibrium Pivot */}
      <circle cx="32" cy="20" r="3.5" fill="#fff" stroke="url(#icoGreen)" strokeWidth="3" />
    </svg>
  );
}

function AccBankFeedIcon() {
  return (
    <svg className="ic ic-bank-feed" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Bank Institution Terminal */}
      <rect x="8" y="16" width="22" height="34" rx="4" stroke="url(#icoGrad)" strokeWidth="3.5" />
      <path d="M8 26h22" stroke="url(#icoGrad)" strokeWidth="3" />
      <circle cx="19" cy="38" r="4" stroke="url(#icoGrad)" strokeWidth="2.5" />
      {/* Bi-Directional Synchronized API Data Arrows */}
      <g stroke="url(#icoGreen)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M36 22h14l-4-4M46 22l-4 4" />
        <path d="M50 42H36l4-4M40 42l-4 4" />
      </g>
      {/* ERP Cloud Node */}
      <circle cx="50" cy="32" r="5" stroke="url(#icoGrad)" strokeWidth="3" />
    </svg>
  );
}

function AccGstIcon() {
  return (
    <svg className="ic ic-gst" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Compliance Shield */}
      <path d="M32 7L12 15v18c0 14 20 24 20 24s20-10 20-24V15L32 7z" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinejoin="round" />
      {/* GSTR-2B Sheet */}
      <rect x="23" y="19" width="18" height="22" rx="3" stroke="#93c5fd" strokeWidth="2.5" />
      {/* Verified Reconciliation Checkmark */}
      <path className="chk" d="M22 34l7 7 13-13" stroke="url(#icoGreen)" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AccPnlIcon() {
  return (
    <svg className="ic ic-pnl" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Statement Axes */}
      <path d="M10 52h44" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Growth Metric Bars */}
      <rect className="bf bf1" x="14" y="36" width="6" height="16" rx="2" fill="url(#icoGrad)" />
      <rect className="bf bf2" x="24" y="26" width="6" height="26" rx="2" fill="url(#icoGrad)" />
      <rect className="bf bf3" x="34" y="16" width="6" height="36" rx="2" fill="url(#icoGrad)" />
      {/* Ascending P&L Profit Trendline */}
      <path d="M14 32l10-8 10-6 16-10" stroke="url(#icoGreen)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 8h6v6" stroke="url(#icoGreen)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* --- CRM Stages --- */
function CrmDedupIcon() {
  return (
    <svg className="ic ic-dedup" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Lead Ingestion Funnel */}
      <path d="M10 12h44l-16 20v18l-8 4V32L10 12z" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinejoin="round" />
      {/* Twin Duplicate Inbound Leads */}
      <circle cx="24" cy="18" r="3" fill="#60a5fa" />
      <circle cx="40" cy="18" r="3" fill="#60a5fa" />
      {/* Deduplication Filter Mesh */}
      <line x1="22" y1="26" x2="42" y2="26" stroke="#93c5fd" strokeWidth="2.5" strokeDasharray="3 3" />
      {/* Clean Single Master Contact Output */}
      <circle cx="32" cy="54" r="4" fill="url(#icoGreen)" />
    </svg>
  );
}

function CrmHealthIcon() {
  return (
    <svg className="ic ic-health" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Deal Telemetry Monitor */}
      <rect x="8" y="12" width="48" height="40" rx="7" stroke="url(#icoGrad)" strokeWidth="3.5" />
      {/* Heartbeat Pulse Line */}
      <path className="pulse-line" d="M14 34h8l4-12 6 22 5-14 4 6 9-2" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Stalled Deal Red Alert Beacon */}
      <circle cx="46" cy="20" r="3.5" fill="#ef4444" />
      <circle cx="46" cy="20" r="6.5" stroke="#ef4444" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}

function CrmQuoteIcon() {
  return (
    <svg className="ic ic-quote" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Master Quote Sheet */}
      <path d="M12 16h26l10 10v26a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4z" stroke="url(#icoGrad)" strokeWidth="3.5" />
      {/* Child Revision Sheet Branch */}
      <path d="M20 10h24l8 8v24" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" />
      {/* Document Lines */}
      <line x1="16" y1="28" x2="34" y2="28" stroke="url(#icoGrad)" strokeWidth="3" strokeLinecap="round" />
      <line x1="16" y1="36" x2="30" y2="36" stroke="url(#icoGrad)" strokeWidth="3" strokeLinecap="round" />
      {/* "-R2" Revision Badge */}
      <rect x="28" y="40" width="26" height="14" rx="4" fill="url(#icoGrad)" />
      <text x="41" y="50" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold" fontFamily="monospace">R2</text>
    </svg>
  );
}

function CrmWhatsAppIcon() {
  return (
    <svg className="ic ic-whatsapp" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Messaging Speech Bubble */}
      <path d="M14 10h36a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6H30l-12 9V46h-4a6 6 0 0 1-6-6V16a6 6 0 0 1 6-6z" stroke="url(#icoGreen)" strokeWidth="3.5" strokeLinejoin="round" />
      {/* 1-Tap Client Accept Checkmark */}
      <path className="chk" d="M22 28l7.5 7.5L43 21" stroke="url(#icoGreen)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrmOrderIcon() {
  return (
    <svg className="ic ic-order" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Closed-Won Order Box */}
      <path d="M32 6l23 12.5v27L32 58 9 45.5v-27z" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M9 18.5L32 31l23-12.5" stroke="url(#icoGrad)" strokeWidth="3" />
      <path d="M32 31v27" stroke="url(#icoGrad)" strokeWidth="3" />
      {/* ERP Ledger Posting Checkmark Seal */}
      <circle cx="32" cy="31" r="10" fill="#fff" stroke="url(#icoGreen)" strokeWidth="3" />
      <path className="chk" d="M28 31l3 3 6-6" stroke="url(#icoGreen)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* --- Sales Stages --- */
function SalesShortageIcon() {
  return (
    <svg className="ic ic-shortage" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Sales Order Router Node */}
      <rect x="22" y="6" width="20" height="16" rx="4" stroke="url(#icoGrad)" strokeWidth="3.5" />
      <text x="32" y="17" textAnchor="middle" fill="url(#icoGrad)" fontSize="8" fontWeight="bold">SO</text>
      {/* Shortage Decision Routing Branches */}
      <path d="M32 22v10M32 32H18v8M32 32h14v8" stroke="url(#icoGrad)" strokeWidth="3" strokeLinecap="round" />
      {/* Purchase Requisition (PR) */}
      <rect x="8" y="40" width="20" height="16" rx="4" stroke="url(#icoAmber)" strokeWidth="3" />
      <text x="18" y="51" textAnchor="middle" fill="url(#icoAmber)" fontSize="8" fontWeight="bold">PR</text>
      {/* Manufacturing Order (MO) */}
      <rect x="36" y="40" width="20" height="16" rx="4" stroke="url(#icoGreen)" strokeWidth="3" />
      <text x="46" y="51" textAnchor="middle" fill="url(#icoGreen)" fontSize="8" fontWeight="bold">MO</text>
    </svg>
  );
}

function SalesPickIcon() {
  return (
    <svg className="ic ic-pick" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Warehouse High-Density Storage Bin */}
      <rect x="12" y="14" width="40" height="36" rx="4" stroke="url(#icoGrad)" strokeWidth="3.5" />
      <line x1="32" y1="14" x2="32" y2="50" stroke="url(#icoGrad)" strokeWidth="2.5" />
      <line x1="12" y1="32" x2="52" y2="32" stroke="url(#icoGrad)" strokeWidth="2.5" />
      {/* Barcode Laser Target Crosshairs */}
      <circle cx="42" cy="23" r="7" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="3 2" />
      <line x1="42" y1="13" x2="42" y2="33" stroke="#ef4444" strokeWidth="1.8" />
      <line x1="32" y1="23" x2="52" y2="23" stroke="#ef4444" strokeWidth="1.8" />
    </svg>
  );
}

function SalesEInvoiceIcon() {
  return (
    <svg className="ic ic-einvoice" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Indian GST Tax Invoice */}
      <rect x="10" y="8" width="44" height="48" rx="6" stroke="url(#icoGrad)" strokeWidth="3.5" />
      <path d="M10 20h44" stroke="url(#icoGrad)" strokeWidth="3" />
      {/* Government IRN 2D QR Matrix */}
      <rect x="16" y="27" width="16" height="16" rx="2" stroke="url(#icoGrad)" strokeWidth="2" fill="none" />
      <rect x="19" y="30" width="4" height="4" fill="url(#icoGrad)" />
      <rect x="25" y="30" width="4" height="4" fill="url(#icoGrad)" />
      <rect x="19" y="36" width="4" height="4" fill="url(#icoGrad)" />
      <rect x="25" y="36" width="4" height="4" fill="url(#icoGreen)" />
      {/* NIC API Radio Transmission Waves */}
      <g stroke="url(#icoGreen)" strokeWidth="2.5" strokeLinecap="round">
        <path d="M37 28c3 2 3 6 0 8" />
        <path d="M42 25c6 4 6 12 0 16" />
        <path d="M47 22c9 6 9 18 0 24" />
      </g>
    </svg>
  );
}

function SalesDispatchIcon() {
  return (
    <svg className="ic ic-dispatch" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Freight Transport Cargo Truck */}
      <rect x="6" y="16" width="32" height="26" rx="3" stroke="url(#icoGrad)" strokeWidth="3.5" />
      <path d="M38 24h12l6 8v10H38V24z" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinejoin="round" />
      {/* Wheels */}
      <circle cx="16" cy="46" r="6" stroke="url(#icoGrad)" strokeWidth="3.5" fill="#fff" />
      <circle cx="48" cy="46" r="6" stroke="url(#icoGrad)" strokeWidth="3.5" fill="#fff" />
      {/* Digital POD Glass Stylus Signature */}
      <path className="chk" d="M14 28c4 3 8-2 12 1" stroke="url(#icoGreen)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function SalesLedgerIcon() {
  return (
    <svg className="ic ic-sales-ledger" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Double-Entry Journal Voucher */}
      <rect x="12" y="8" width="40" height="48" rx="6" stroke="url(#icoGrad)" strokeWidth="3.5" />
      <line x1="12" y1="20" x2="52" y2="20" stroke="url(#icoGrad)" strokeWidth="3" />
      <line x1="36" y1="20" x2="36" y2="56" stroke="url(#icoGrad)" strokeWidth="2" strokeDasharray="3 3" />
      {/* Balanced Dr/Cr Ledger Postings */}
      <line x1="18" y1="28" x2="30" y2="28" stroke="url(#icoGrad)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="42" y1="36" x2="48" y2="36" stroke="url(#icoGrad)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Verification Check Seal */}
      <circle cx="26" cy="44" r="8" fill="#fff" stroke="url(#icoGreen)" strokeWidth="2.5" />
      <path className="chk" d="M22 44l2.5 2.5 5.5-5.5" stroke="url(#icoGreen)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/* --- Inventory Stages --- */
function InvDockIcon() {
  return (
    <svg className="ic ic-dock" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Warehouse Receiving Bay Frame */}
      <path d="M8 12h48v40H8z" stroke="url(#icoGrad)" strokeWidth="3.5" />
      <path d="M8 20h48" stroke="url(#icoGrad)" strokeWidth="2.5" />
      {/* Inbound Pallet Crate */}
      <rect x="18" y="26" width="28" height="20" rx="3" stroke="url(#icoGrad)" strokeWidth="3" fill="#fff" />
      <line x1="18" y1="26" x2="46" y2="46" stroke="url(#icoGrad)" strokeWidth="2" />
      {/* Dock Barcode Scan Beam */}
      <line className="mf-laser" x1="14" y1="36" x2="50" y2="36" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function InvQcIcon() {
  return (
    <svg className="ic ic-qc" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Material Batch Cylinder */}
      <rect x="10" y="20" width="30" height="34" rx="4" stroke="url(#icoGrad)" strokeWidth="3.5" />
      <path d="M18 14h14v6H18z" stroke="url(#icoGrad)" strokeWidth="3" />
      {/* Quality Inspection Magnifying Lens */}
      <circle cx="38" cy="28" r="14" stroke="url(#icoGrad)" strokeWidth="3.5" fill="#fff" />
      <line x1="48" y1="38" x2="56" y2="46" stroke="url(#icoGrad)" strokeWidth="4.5" strokeLinecap="round" />
      {/* QC Passed Verification Check */}
      <path className="chk" d="M31 28l4.5 4.5 8.5-8.5" stroke="url(#icoGreen)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InvPutAwayIcon() {
  return (
    <svg className="ic ic-putaway" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* High-Bay Warehouse Storage Racks */}
      <line x1="12" y1="8" x2="12" y2="56" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="52" y1="8" x2="52" y2="56" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Shelving Levels */}
      <line x1="12" y1="20" x2="52" y2="20" stroke="url(#icoGrad)" strokeWidth="3" />
      <line x1="12" y1="36" x2="52" y2="36" stroke="url(#icoGrad)" strokeWidth="3" />
      <line x1="12" y1="52" x2="52" y2="52" stroke="url(#icoGrad)" strokeWidth="3" />
      {/* Smart Directional Put-Away Trajectory Arrow */}
      <path className="putaway-path" d="M22 46c0-12 8-16 18-18" stroke="url(#icoGreen)" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="4 2" />
      <path d="M36 28h5v5" stroke="url(#icoGreen)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Targeted Bin Compartment */}
      <rect x="36" y="24" width="12" height="10" rx="2" stroke="url(#icoGreen)" strokeWidth="2.5" />
    </svg>
  );
}

function InvSyncIcon() {
  return (
    <svg className="ic ic-sync" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Central Inventory Stock Cube */}
      <path d="M32 14L46 22v16L32 46 18 38V22z" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M18 22L32 30l14-8" stroke="url(#icoGrad)" strokeWidth="2.5" />
      <path d="M32 30v16" stroke="url(#icoGrad)" strokeWidth="2.5" />
      {/* Concentric 360-Degree Real-Time Broadcast Waves */}
      <circle className="radar-wave wave1" cx="32" cy="30" r="22" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
      <circle className="radar-wave wave2" cx="32" cy="30" r="28" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.4" />
    </svg>
  );
}

function InvValuationIcon() {
  return (
    <svg className="ic ic-inv-valuation" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Perpetual Inventory Valuation Ledger */}
      <rect x="12" y="8" width="40" height="48" rx="6" stroke="url(#icoGrad)" strokeWidth="3.5" />
      <path d="M12 20h40" stroke="url(#icoGrad)" strokeWidth="3" />
      <line x1="18" y1="28" x2="34" y2="28" stroke="url(#icoGrad)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="18" y1="36" x2="30" y2="36" stroke="url(#icoGrad)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Balance Sheet Asset Valuation Coin */}
      <circle cx="40" cy="40" r="9" fill="#fff" stroke="url(#icoAmber)" strokeWidth="3" />
      <text x="40" y="44" textAnchor="middle" fill="url(#icoAmber)" fontSize="10" fontWeight="bold">₹</text>
    </svg>
  );
}

/* --- Purchase Stages --- */
function PurRfqIcon() {
  return (
    <svg className="ic ic-rfq" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Multi-Vendor Transmission Tower */}
      <path d="M26 52L32 16l6 36" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="22" y1="42" x2="42" y2="42" stroke="url(#icoGrad)" strokeWidth="3" />
      <line x1="25" y1="28" x2="39" y2="28" stroke="url(#icoGrad)" strokeWidth="3" />
      <circle cx="32" cy="14" r="4" fill="url(#icoGrad)" />
      {/* RFQ Broadcast Waves */}
      <path className="rfq-wave" d="M18 10c-8 6-8 18 0 24" stroke="url(#icoCyan)" strokeWidth="2.5" strokeLinecap="round" />
      <path className="rfq-wave" d="M46 10c8 6 8 18 0 24" stroke="url(#icoCyan)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function PurPoIcon() {
  return (
    <svg className="ic ic-po-award" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Comparative Bid Matrix Sheet */}
      <rect x="10" y="12" width="44" height="42" rx="6" stroke="url(#icoGrad)" strokeWidth="3.5" />
      <line x1="10" y1="24" x2="54" y2="24" stroke="url(#icoGrad)" strokeWidth="3" />
      <line x1="16" y1="33" x2="36" y2="33" stroke="url(#icoGrad)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="16" y1="42" x2="30" y2="42" stroke="url(#icoGrad)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Crowned L1 Vendor Award Badge */}
      <circle cx="43" cy="38" r="9" fill="#fff" stroke="url(#icoAmber)" strokeWidth="2.5" />
      <text x="43" y="42" textAnchor="middle" fill="url(#icoAmber)" fontSize="9" fontWeight="bold">L1</text>
    </svg>
  );
}

function PurGateIcon() {
  return (
    <svg className="ic ic-gate" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Factory Gate Pillars */}
      <rect x="8" y="14" width="8" height="40" rx="2" stroke="url(#icoGrad)" strokeWidth="3.5" />
      <rect x="48" y="14" width="8" height="40" rx="2" stroke="url(#icoGrad)" strokeWidth="3.5" />
      {/* Security Boom Barrier Arm */}
      <line x1="16" y1="26" x2="48" y2="26" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 4" />
      {/* Incoming Raw Material Container */}
      <rect x="22" y="32" width="20" height="18" rx="2" stroke="url(#icoGrad)" strokeWidth="3" fill="#fff" />
      {/* Serial Barcode Tag */}
      <line x1="27" y1="38" x2="27" y2="44" stroke="url(#icoGrad)" strokeWidth="2" />
      <line x1="31" y1="38" x2="31" y2="44" stroke="url(#icoGrad)" strokeWidth="2" />
      <line x1="35" y1="38" x2="35" y2="44" stroke="url(#icoGrad)" strokeWidth="2" />
    </svg>
  );
}

function PurLandedCostIcon() {
  return (
    <svg className="ic ic-landed" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Intermodal Freight Cargo Container */}
      <rect x="10" y="16" width="44" height="28" rx="3" stroke="url(#icoGrad)" strokeWidth="3.5" />
      <line x1="21" y1="16" x2="21" y2="44" stroke="url(#icoGrad)" strokeWidth="2" />
      <line x1="32" y1="16" x2="32" y2="44" stroke="url(#icoGrad)" strokeWidth="2" />
      <line x1="43" y1="16" x2="43" y2="44" stroke="url(#icoGrad)" strokeWidth="2" />
      {/* True Landed Cost Allocation Breakdown */}
      <circle cx="22" cy="50" r="5" stroke="url(#icoGreen)" strokeWidth="2" />
      <text x="22" y="53" textAnchor="middle" fill="url(#icoGreen)" fontSize="6" fontWeight="bold">%</text>
      <circle cx="42" cy="50" r="5" stroke="url(#icoAmber)" strokeWidth="2" />
      <text x="42" y="53" textAnchor="middle" fill="url(#icoAmber)" fontSize="6" fontWeight="bold">₹</text>
    </svg>
  );
}

function PurMatchIcon() {
  return (
    <svg className="ic ic-match" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* 3 Interlocking Verification Rings (PO, GRN, Bill) */}
      <circle cx="24" cy="24" r="13" stroke="url(#icoGrad)" strokeWidth="3.5" />
      <circle cx="40" cy="24" r="13" stroke="url(#icoGreen)" strokeWidth="3.5" />
      <circle cx="32" cy="38" r="13" stroke="url(#icoAmber)" strokeWidth="3.5" />
      {/* Central Tamper-Proof Security Padlock */}
      <rect x="27" y="27" width="10" height="9" rx="2" fill="#fff" stroke="url(#icoGrad)" strokeWidth="2.5" />
      <path d="M29 27v-3a3 3 0 0 1 6 0v3" stroke="url(#icoGrad)" strokeWidth="2.5" />
    </svg>
  );
}

/* --- Production Stages --- */
function ProdBomIcon() {
  return (
    <svg className="ic ic-bom" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Parent Finished Good Node */}
      <rect x="22" y="8" width="20" height="14" rx="3" stroke="url(#icoGrad)" strokeWidth="3.5" />
      {/* Hierarchical BOM Branches */}
      <path d="M32 22v10M18 32h28" stroke="url(#icoGrad)" strokeWidth="2.5" />
      <path d="M18 32v8M46 32v8" stroke="url(#icoGrad)" strokeWidth="2.5" />
      {/* Sub-Assembly Components */}
      <rect x="10" y="40" width="16" height="12" rx="2" stroke="url(#icoGrad)" strokeWidth="2.5" />
      <rect x="38" y="40" width="16" height="12" rx="2" stroke="url(#icoGrad)" strokeWidth="2.5" />
      {/* Immutable Engineering Snapshot Padlock */}
      <circle cx="32" cy="32" r="6" fill="#fff" stroke="url(#icoGreen)" strokeWidth="2" />
      <path d="M30 32v-2a2 2 0 0 1 4 0v2" stroke="url(#icoGreen)" strokeWidth="2" />
    </svg>
  );
}

function ProdMrpIcon() {
  return (
    <svg className="ic ic-mrp" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Industrial Machine Gear */}
      <g className="gear-spin" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="28" cy="32" r="14" />
        <line x1="28" y1="14" x2="28" y2="18" />
        <line x1="28" y1="46" x2="28" y2="50" />
        <line x1="10" y1="32" x2="14" y2="32" />
        <line x1="42" y1="32" x2="46" y2="32" />
      </g>
      {/* Meshing Gear */}
      <circle cx="45" cy="20" r="8" stroke="url(#icoGreen)" strokeWidth="3" />
      {/* Gross-to-Net Shortfall Inward Arrow */}
      <path d="M45 42v10m-4-4l4 4 4-4" stroke="url(#icoAmber)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProdApsIcon() {
  return (
    <svg className="ic ic-aps" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Capacity Schedule Axes */}
      <line x1="12" y1="12" x2="12" y2="54" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="12" y1="54" x2="56" y2="54" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Machine 1 Capacity Load Bar */}
      <rect x="18" y="18" width="22" height="8" rx="2" fill="url(#icoGrad)" />
      {/* Machine 2 Capacity Load Bar */}
      <rect x="28" y="30" width="24" height="8" rx="2" fill="url(#icoCyan)" />
      {/* Machine 3 Capacity Load Bar */}
      <rect x="18" y="42" width="18" height="8" rx="2" fill="url(#icoGreen)" />
      {/* 6-Point Readiness Gate Line */}
      <line x1="46" y1="14" x2="46" y2="50" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="3 3" />
    </svg>
  );
}

function ProdMesIcon() {
  return (
    <svg className="ic ic-mes" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Rugged Shopfloor Tablet Console */}
      <rect x="8" y="14" width="38" height="38" rx="5" stroke="url(#icoGrad)" strokeWidth="3.5" />
      <rect x="14" y="20" width="26" height="26" rx="2" fill="url(#icoGrad)" opacity="0.15" />
      {/* Operator Touchpoint */}
      <circle cx="27" cy="33" r="5" stroke="url(#icoGrad)" strokeWidth="2.5" />
      {/* 3-Tier Andon Alert Beacon Tower */}
      <rect x="49" y="10" width="9" height="36" rx="3" stroke="url(#icoGrad)" strokeWidth="2.5" />
      <circle cx="53.5" cy="16" r="3" fill="#ef4444" />
      <circle cx="53.5" cy="26" r="3" fill="#f59e0b" />
      <circle cx="53.5" cy="36" r="3" fill="#10b981" />
    </svg>
  );
}

function ProdQcIcon() {
  return (
    <svg className="ic ic-inprocess-qc" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Precision Micrometer Caliper Jaws */}
      <path d="M14 18h24v8H26v16h12v8H14z" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinejoin="round" />
      {/* Machined Workpiece Being Gauged */}
      <rect x="26" y="28" width="16" height="12" rx="2" fill="url(#icoGrad)" />
      <line x1="42" y1="34" x2="54" y2="34" stroke="url(#icoGrad)" strokeWidth="4" strokeLinecap="round" />
      {/* Tolerance Pass Verification Check */}
      <path className="chk" d="M30 48l4 4 8-8" stroke="url(#icoGreen)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ProdTraceIcon() {
  return (
    <svg className="ic ic-trace" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Bi-Directional Lot Genealogy Tree */}
      <circle cx="16" cy="20" r="6" stroke="url(#icoGrad)" strokeWidth="3" />
      <circle cx="16" cy="44" r="6" stroke="url(#icoGrad)" strokeWidth="3" />
      <circle cx="48" cy="32" r="7" stroke="url(#icoGreen)" strokeWidth="3.5" />
      {/* Interconnecting Trace Lines */}
      <path d="M22 20c12 0 14 12 20 12" stroke="url(#icoGrad)" strokeWidth="3" />
      <path d="M22 44c12 0 14-12 20-12" stroke="url(#icoGrad)" strokeWidth="3" />
      {/* Bi-Directional Forward & Backward Arrowheads */}
      <path d="M30 18l4 2-4 2" stroke="url(#icoGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 42l-4 2 4 2" stroke="url(#icoGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* --- Project Management Stages --- */
function ProjCharterIcon() {
  return (
    <svg className="ic ic-charter" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Architectural Blueprint Master Roll */}
      <rect x="10" y="12" width="44" height="40" rx="4" stroke="url(#icoGrad)" strokeWidth="3.5" />
      <line x1="10" y1="24" x2="54" y2="24" stroke="url(#icoGrad)" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="28" y1="12" x2="28" y2="52" stroke="url(#icoGrad)" strokeWidth="2" strokeDasharray="3 3" />
      {/* Drafting Compass */}
      <path d="M36 28L44 46M36 28L28 46" stroke="url(#icoGrad)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="36" cy="28" r="3" fill="url(#icoGrad)" />
      {/* Budget Allocation Baseline Coin */}
      <circle cx="44" cy="20" r="5" stroke="url(#icoAmber)" strokeWidth="2" />
    </svg>
  );
}

function ProjResourceIcon() {
  return (
    <svg className="ic ic-resource" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Resource Avatar Column */}
      <circle cx="16" cy="18" r="4" fill="url(#icoGrad)" />
      <circle cx="16" cy="32" r="4" fill="url(#icoCyan)" />
      <circle cx="16" cy="46" r="4" fill="url(#icoGreen)" />
      {/* WBS Task Gantt Allocation Bars */}
      <rect x="26" y="15" width="22" height="6" rx="3" fill="url(#icoGrad)" />
      <rect x="34" y="29" width="20" height="6" rx="3" fill="url(#icoCyan)" />
      <rect x="26" y="43" width="26" height="6" rx="3" fill="url(#icoGreen)" />
      {/* Dependency Link Arrow */}
      <path d="M37 21v8h-3" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ProjTimesheetIcon() {
  return (
    <svg className="ic ic-timesheet" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Site Task Clipboard */}
      <rect x="10" y="10" width="34" height="46" rx="5" stroke="url(#icoGrad)" strokeWidth="3.5" />
      <path d="M20 7h14v6H20z" stroke="url(#icoGrad)" strokeWidth="2.5" />
      <line x1="18" y1="22" x2="32" y2="22" stroke="url(#icoGrad)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="18" y1="30" x2="28" y2="30" stroke="url(#icoGrad)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Precision Execution Stopwatch Overlay */}
      <circle cx="42" cy="38" r="13" fill="#fff" stroke="url(#icoGreen)" strokeWidth="3" />
      <path d="M42 32v6l4 2" stroke="url(#icoGreen)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="42" y1="22" x2="42" y2="25" stroke="url(#icoGreen)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function ProjMilestoneIcon() {
  return (
    <svg className="ic ic-milestone" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Milestone Flagpole */}
      <line x1="16" y1="10" x2="16" y2="54" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinecap="round" />
      {/* Checkered Milestone Flag */}
      <path d="M16 12h28l-5 11 5 11H16V12z" stroke="url(#icoGrad)" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M16 23h24" stroke="url(#icoGrad)" strokeWidth="2" />
      {/* Digital Client Sign-off Stylus */}
      <path className="chk" d="M24 44c6 4 14-3 20 2" stroke="url(#icoGreen)" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="46" cy="46" r="3" fill="url(#icoGreen)" />
    </svg>
  );
}

function ProjCashIcon() {
  return (
    <svg className="ic ic-cash" viewBox="0 0 64 64" aria-hidden="true" fill="none">
      {/* Milestone Billing Invoice */}
      <rect x="12" y="8" width="40" height="48" rx="6" stroke="url(#icoGrad)" strokeWidth="3.5" />
      <line x1="12" y1="20" x2="52" y2="20" stroke="url(#icoGrad)" strokeWidth="3" />
      {/* 100% Milestone Progress Bar */}
      <rect x="18" y="28" width="28" height="6" rx="3" stroke="url(#icoGrad)" strokeWidth="2" />
      <rect x="19" y="29" width="20" height="4" rx="2" fill="url(#icoGreen)" />
      {/* Realized Margin Cash Coin */}
      <circle cx="38" cy="44" r="8" fill="#fff" stroke="url(#icoGreen)" strokeWidth="2.5" />
      <text x="38" y="48" textAnchor="middle" fill="url(#icoGreen)" fontSize="10" fontWeight="bold">₹</text>
    </svg>
  );
}

/* Master Stage Icon Resolver: Combines explicit stage icon tags and title keyword analysis */
function renderStageIcon(iconName: string | undefined, stepTitle?: string, stepIndex: number = 0) {
  if (iconName) {
    switch (iconName) {
      // HRMS
      case "hrms-punch": return <HrmsPunchIcon />;
      case "hrms-leave": return <HrmsLeaveIcon />;
      case "hrms-payroll": return <HrmsPayrollIcon />;
      case "hrms-bank": return <HrmsBankIcon />;
      case "hrms-ledger": return <HrmsLedgerIcon />;

      // Accounting
      case "acc-event": return <AccEventIcon />;
      case "acc-voucher": return <AccVoucherIcon />;
      case "acc-bank": return <AccBankFeedIcon />;
      case "acc-gst": return <AccGstIcon />;
      case "acc-pnl": return <AccPnlIcon />;

      // CRM
      case "crm-dedup": return <CrmDedupIcon />;
      case "crm-health": return <CrmHealthIcon />;
      case "crm-quote": return <CrmQuoteIcon />;
      case "crm-whatsapp": return <CrmWhatsAppIcon />;
      case "crm-order": return <CrmOrderIcon />;

      // Sales
      case "sales-shortage": return <SalesShortageIcon />;
      case "sales-pick": return <SalesPickIcon />;
      case "sales-einvoice": return <SalesEInvoiceIcon />;
      case "sales-dispatch": return <SalesDispatchIcon />;
      case "sales-ledger": return <SalesLedgerIcon />;

      // Inventory
      case "inv-dock": return <InvDockIcon />;
      case "inv-qc": return <InvQcIcon />;
      case "inv-putaway": return <InvPutAwayIcon />;
      case "inv-sync": return <InvSyncIcon />;
      case "inv-valuation": return <InvValuationIcon />;

      // Purchase
      case "pur-rfq": return <PurRfqIcon />;
      case "pur-po": return <PurPoIcon />;
      case "pur-gate": return <PurGateIcon />;
      case "pur-landed": return <PurLandedCostIcon />;
      case "pur-match": return <PurMatchIcon />;

      // Production
      case "prod-bom": return <ProdBomIcon />;
      case "prod-mrp": return <ProdMrpIcon />;
      case "prod-aps": return <ProdApsIcon />;
      case "prod-mes": return <ProdMesIcon />;
      case "prod-qc": return <ProdQcIcon />;
      case "prod-trace": return <ProdTraceIcon />;

      // Project
      case "proj-charter": return <ProjCharterIcon />;
      case "proj-resource": return <ProjResourceIcon />;
      case "proj-timesheet": return <ProjTimesheetIcon />;
      case "proj-milestone": return <ProjMilestoneIcon />;
      case "proj-cash": return <ProjCashIcon />;
    }
  }

  // Fallback keyword analysis based on step title to ensure zero mismatch
  const t = (stepTitle || "").toLowerCase();
  if (t.includes("punch") || t.includes("biometric")) return <HrmsPunchIcon />;
  if (t.includes("leave") || t.includes("ot review")) return <HrmsLeaveIcon />;
  if (t.includes("payroll") || t.includes("salary run")) return <HrmsPayrollIcon />;
  if (t.includes("bank disburse") || t.includes("nach")) return <HrmsBankIcon />;
  if (t.includes("erp ledger") || t.includes("gl salary")) return <HrmsLedgerIcon />;

  if (t.includes("operational event") || t.includes("event bus")) return <AccEventIcon />;
  if (t.includes("voucher") || t.includes("double entry")) return <AccVoucherIcon />;
  if (t.includes("bank feed") || t.includes("api banking")) return <AccBankFeedIcon />;
  if (t.includes("gst match") || t.includes("gstr-2b")) return <AccGstIcon />;
  if (t.includes("p&l") || t.includes("financials") || t.includes("audit-ready")) return <AccPnlIcon />;

  if (t.includes("deduplication") || t.includes("dedup") || t.includes("fuzzy")) return <CrmDedupIcon />;
  if (t.includes("health") || t.includes("stalled")) return <CrmHealthIcon />;
  if (t.includes("revision") || t.includes("quote")) return <CrmQuoteIcon />;
  if (t.includes("whatsapp")) return <CrmWhatsAppIcon />;
  if (t.includes("auto-order") || t.includes("closed-won")) return <CrmOrderIcon />;

  if (t.includes("shortage") || t.includes("routing")) return <SalesShortageIcon />;
  if (t.includes("pick") || t.includes("allocate")) return <SalesPickIcon />;
  if (t.includes("e-invoice") || t.includes("e-way")) return <SalesEInvoiceIcon />;
  if (t.includes("dispatch") || t.includes("pod")) return <SalesDispatchIcon />;
  if (t.includes("auto ledger") || t.includes("sales ledger")) return <SalesLedgerIcon />;

  if (t.includes("dock") || t.includes("grn against")) return <InvDockIcon />;
  if (t.includes("quality check") || t.includes("qc inspection")) return <InvQcIcon />;
  if (t.includes("put-away") || t.includes("bin assignment")) return <InvPutAwayIcon />;
  if (t.includes("cross-module") || t.includes("sync")) return <InvSyncIcon />;
  if (t.includes("valuation") || t.includes("balance sheet")) return <InvValuationIcon />;

  if (t.includes("rfq") || t.includes("broadcast")) return <PurRfqIcon />;
  if (t.includes("l1") || t.includes("po award")) return <PurPoIcon />;
  if (t.includes("gate") || t.includes("inward")) return <PurGateIcon />;
  if (t.includes("landed cost") || t.includes("lcv")) return <PurLandedCostIcon />;
  if (t.includes("3-way") || t.includes("match")) return <PurMatchIcon />;

  if (t.includes("bom") || t.includes("snapshot")) return <ProdBomIcon />;
  if (t.includes("mrp") || t.includes("shortfall")) return <ProdMrpIcon />;
  if (t.includes("aps") || t.includes("finite capacity")) return <ProdApsIcon />;
  if (t.includes("mes") || t.includes("andon")) return <ProdMesIcon />;
  if (t.includes("in-process qc") || t.includes("capa")) return <ProdQcIcon />;
  if (t.includes("genealogy") || t.includes("lot trace")) return <ProdTraceIcon />;

  if (t.includes("charter") || t.includes("contract")) return <ProjCharterIcon />;
  if (t.includes("resource") || t.includes("scheduling")) return <ProjResourceIcon />;
  if (t.includes("timesheet") || t.includes("execution")) return <ProjTimesheetIcon />;
  if (t.includes("milestone") || t.includes("signoff")) return <ProjMilestoneIcon />;
  if (t.includes("cash") || t.includes("margin realization")) return <ProjCashIcon />;

  // Default fallback based on index
  const fallbacks = [
    <HrmsPunchIcon key="0" />,
    <AccVoucherIcon key="1" />,
    <SalesEInvoiceIcon key="2" />,
    <InvSyncIcon key="3" />,
    <PurMatchIcon key="4" />
  ];
  return fallbacks[stepIndex % fallbacks.length];
}

// Connector component between steps
function StageConnector({
  isSending,
  index,
}: {
  isSending: boolean;
  index: number;
}) {
  return (
    <div className={`conn ${isSending ? "sending-active" : ""}`} aria-hidden="true" style={{ "--i": index } as React.CSSProperties}>
      <svg className="rib" viewBox="0 0 200 100" preserveAspectRatio="none">
        <line className="axis" x1="0" y1="50" x2="200" y2="50" />
        <g className="lensg">
          <path className="lens" d="M0 50C55 6 145 6 200 50C145 94 55 94 0 50Z" />
          <path className="tw1" d="M0 50C62 90 138 10 200 50" />
          <path className="tw2" d="M0 50C62 10 138 90 200 50" />
        </g>
      </svg>
      <span className="end l" />
      <span className="end r" />
      <span className="p p1" />
      <span className="p p2" />
      <span className="p p3" />
      <span className="blob" />
      <svg className="chev" viewBox="0 0 30 22">
        <path d="M6 4l7 7-7 7" />
        <path d="M16 4l7 7-7 7" />
      </svg>
      <span className="comet" />
    </div>
  );
}

export default function ConnectedWorkflowFlow({
  workflow,
}: ConnectedWorkflowFlowProps) {
  const steps = React.useMemo(() => workflow.steps || [], [workflow.steps]);
  const N = steps.length;

  const [active, setActive] = useState(0);
  const [displayStepIndex, setDisplayStepIndex] = useState(0);
  const [isPaused] = useState(false);
  const [sendingIndex, setSendingIndex] = useState<number | null>(null);
  const [isOut, setIsOut] = useState(false);
  const [isSweep, setIsSweep] = useState(false);

  // Animated metric counter state
  const rawMetric = steps[displayStepIndex]?.latency || "< 100ms";
  const [animatedMetric, setAnimatedMetric] = useState(rawMetric);
  const rafRef = useRef<number | null>(null);

  // Animate countUp when displayStepIndex changes
  useEffect(() => {
    const valStr = steps[displayStepIndex]?.latency || "< 100ms";
    const match = valStr.match(/\d+(\.\d+)?/);
    if (!match || parseFloat(match[0]) === 0) {
      const raf = requestAnimationFrame(() => setAnimatedMetric(valStr));
      return () => cancelAnimationFrame(raf);
    }

    const target = parseFloat(match[0]);
    const pre = valStr.slice(0, match.index);
    const post = valStr.slice((match.index ?? 0) + match[0].length);
    const t0 = performance.now();
    const dur = 450;

    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      const current = Math.round(target * (1 - Math.pow(1 - p, 3)));
      setAnimatedMetric(`${pre}${current}${post}`);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [displayStepIndex, steps]);

  // Stage transition trigger
  const goToStage = useCallback(
    (targetIndex: number) => {
      if (targetIndex === active) return;
      const prev = active;
      setActive(targetIndex);

      // Trigger packet comet animation on step advance
      if (targetIndex === (prev + 1) % N) {
        setSendingIndex(prev);
        setTimeout(() => setSendingIndex(null), 600);
      }

      // Smooth detail card crossfade and light sweep
      setIsOut(true);
      setTimeout(() => {
        setDisplayStepIndex(targetIndex);
        setIsOut(false);
        setIsSweep(true);
        setTimeout(() => setIsSweep(false), 700);
      }, 160);
    },
    [active, N]
  );

  // Autoplay progression timer: 2 seconds auto step change
  useEffect(() => {
    if (isPaused || N <= 1) return;

    const timer = setInterval(() => {
      goToStage((active + 1) % N);
    }, 2000);

    return () => clearInterval(timer);
  }, [active, isPaused, N, goToStage]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const map: Record<string, number> = {
      ArrowRight: 1,
      ArrowDown: 1,
      ArrowLeft: -1,
      ArrowUp: -1,
    };
    if (e.key in map) {
      e.preventDefault();
      const nextIndex = (active + map[e.key] + N) % N;
      goToStage(nextIndex);
    } else if (e.key === "Home") {
      e.preventDefault();
      goToStage(0);
    } else if (e.key === "End") {
      e.preventDefault();
      goToStage(N - 1);
    }
  };

  const currStep = steps[displayStepIndex] || steps[0];
  const metricLabel = currStep?.latency?.includes("ms")
    ? "Latency"
    : currStep?.latency?.includes("%")
    ? "Audit trail"
    : "Metric";

  return (
    <div
      className={`mossi-flow-root ${isPaused ? "paused" : ""}`}
    >
      {/* Shared SVG gradients */}
      <svg className="defs" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="icoGrad" gradientUnits="userSpaceOnUse" x1="0" y1="4" x2="0" y2="60">
            <stop offset="0" stopColor="#3d8dff" />
            <stop offset="1" stopColor="#0a56df" />
          </linearGradient>
          <linearGradient id="icoGreen" gradientUnits="userSpaceOnUse" x1="0" y1="4" x2="0" y2="60">
            <stop offset="0" stopColor="#3fd476" />
            <stop offset="1" stopColor="#13994a" />
          </linearGradient>
          <linearGradient id="icoAmber" gradientUnits="userSpaceOnUse" x1="0" y1="4" x2="0" y2="60">
            <stop offset="0" stopColor="#fbbf24" />
            <stop offset="1" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="icoCyan" gradientUnits="userSpaceOnUse" x1="0" y1="4" x2="0" y2="60">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="icoPurple" gradientUnits="userSpaceOnUse" x1="0" y1="4" x2="0" y2="60">
            <stop offset="0" stopColor="#a855f7" />
            <stop offset="1" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="ribGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#9cc2ff" stopOpacity="0.05" />
            <stop offset="0.3" stopColor="#5b9bff" stopOpacity="0.35" />
            <stop offset="0.5" stopColor="#1f6ff5" stopOpacity="0.6" />
            <stop offset="0.7" stopColor="#5b9bff" stopOpacity="0.35" />
            <stop offset="1" stopColor="#9cc2ff" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flow-wrap">
        {/* Section Header */}
        <header className="flow-hero text-center max-w-5xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            {workflow.title}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {workflow.subtitle}
          </p>
        </header>

        {/* Interactive Flow Canvas */}
        <section className="flow" aria-label="Process automation flow">
          {/* Drifting wave background ribbons */}
          <svg
            className="waves"
            viewBox="0 0 1200 260"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {WAVE_LAYERS.map((layer, idx) => (
              <g
                key={idx}
                className="drift"
                style={{ "--t": `${layer.t}s` } as React.CSSProperties}
              >
                <path d={layer.d} className={layer.cls} />
              </g>
            ))}
          </svg>

          {/* Connected Steps Grid */}
          <ol
            className="steps"
            role="tablist"
            aria-label="Process stages"
            onKeyDown={handleKeyDown}
            style={{
              gridTemplateColumns: `repeat(${N}, minmax(0, 1fr))`,
            }}
          >
            {steps.map((s, i) => {
              const isActive = i === active;
              const isDone = i < active;
              const isSending = sendingIndex === i;

              // Clean title string if it contains "1. " prefix
              const cleanTitle = s.title.replace(/^\d+\.\s*/, "");

              return (
                <li
                  key={s.stepNumber || i}
                  className={`step ${isActive ? "active" : ""} ${isDone ? "done" : ""} ${
                    isSending ? "sending" : ""
                  }`}
                  role="presentation"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <button
                    className="tab"
                    type="button"
                    role="tab"
                    id={`tab-${i}`}
                    aria-controls="workflow-detail"
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => goToStage(i)}
                  >
                    <span className="node">
                      <span className="halo" />
                      <span className="halo h2" />
                      <svg className="orbit" viewBox="0 0 100 100" aria-hidden="true">
                        <circle cx="50" cy="50" r="49" />
                      </svg>
                      <span className="badge" aria-hidden="true">
                        {i + 1}
                      </span>
                      {renderStageIcon(s.icon, s.title, i)}
                    </span>
                    <span className="txt">
                      <span className="t">{cleanTitle}</span>
                      <span className="d">{s.subtitle}</span>
                    </span>
                  </button>

                  {/* Inter-stage Connector */}
                  {i < N - 1 && <StageConnector isSending={isSending} index={i} />}
                </li>
              );
            })}
          </ol>
        </section>

      

        {/* Dynamic Detail Frosted Glass Card */}
        <section
          className={`detail ${isOut ? "out" : ""} ${isSweep ? "sweep" : ""}`}
          id="workflow-detail"
          role="tabpanel"
          aria-labelledby={`tab-${displayStepIndex}`}
        >
          <div className="d-icon fx">
            {renderStageIcon(currStep?.icon, currStep?.title, displayStepIndex)}
          </div>
          <div className="d-main">
            <h3 className="d-title fx" style={{ "--d": ".04s" } as React.CSSProperties}>
              {currStep?.detailTitle}
            </h3>
            <p className="d-body fx" style={{ "--d": ".08s" } as React.CSSProperties}>
              {currStep?.detailDescription}
            </p>
          </div>
          <div className="d-side">
            <div className="metric fx" style={{ "--d": ".12s" } as React.CSSProperties}>
              <span>{metricLabel}:</span>
              <b>{animatedMetric}</b>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
