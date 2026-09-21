"use client";

import React from "react";
import { Truck, CheckCircle2, ShieldCheck, FileCheck, Layers } from "lucide-react";

export default function PurchaseScenes({ stepId }: { stepId: string }) {
  if (stepId === "demand") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Material Demand to Purchase Requisition</h4>
          <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full">Auto PR Triggered</span>
        </div>
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5 flex-1">
          <div className="font-bold text-slate-900">PR #PR-2026-8812 • Raw Material Steel Bar (Alloy 4140)</div>
          <p className="text-[11px] text-slate-600">Requisition Qty: 2,500 Kg • Stock Deficit: 1,800 Kg • Min Reorder Point: 1,000 Kg</p>
        </div>
      </div>
    );
  }

  if (stepId === "rfq") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
        <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">RFQ Supplier 3-Way Comparison Matrix</h4>
        <div className="overflow-x-auto flex-1 text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200 text-[11px]">
                <th className="py-2 px-3">Supplier Name</th>
                <th className="py-2 px-3">Unit Price (₹/Kg)</th>
                <th className="py-2 px-3">Lead Time</th>
                <th className="py-2 px-3">Rating</th>
                <th className="py-2 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              <tr>
                <td className="py-2.5 px-3">Tata Steel Alloys Ltd</td>
                <td className="py-2.5 px-3 font-mono">₹480</td>
                <td className="py-2.5 px-3">7 Days</td>
                <td className="py-2.5 px-3 text-amber-600 font-bold">4.8★</td>
                <td className="py-2.5 px-3"><span className="text-slate-400">Quote Only</span></td>
              </tr>
              <tr className="bg-emerald-50/80 text-emerald-900 font-bold">
                <td className="py-2.5 px-3">Jindal Steel & Power</td>
                <td className="py-2.5 px-3 font-mono font-black text-emerald-900">₹450</td>
                <td className="py-2.5 px-3">5 Days</td>
                <td className="py-2.5 px-3 text-emerald-700 font-bold">4.9★</td>
                <td className="py-2.5 px-3"><span className="bg-emerald-600 text-white text-[10px] px-2 py-0.5 rounded font-extrabold">SELECTED ✓</span></td>
              </tr>
              <tr>
                <td className="py-2.5 px-3">Mahindra Sona Metals</td>
                <td className="py-2.5 px-3 font-mono">₹490</td>
                <td className="py-2.5 px-3">9 Days</td>
                <td className="py-2.5 px-3 text-amber-600 font-bold">4.6★</td>
                <td className="py-2.5 px-3"><span className="text-slate-400">Quote Only</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (stepId === "po") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">Purchase Order Release & Authorization</h4>
        <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-xs space-y-1.5 flex-1">
          <div className="flex items-center justify-between">
            <span className="font-extrabold text-blue-900">PO #PO-2026-9912 Released to Jindal Steel</span>
            <span className="font-mono font-black text-blue-800">₹11,25,000</span>
          </div>
          <p className="text-[11px] text-blue-700">Delivery Scheduled: Oct 12, 2026 • Payment Terms: 45 Days Post GRN</p>
        </div>
      </div>
    );
  }

  if (stepId === "match") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Three-Way Matching Audit Clearance</h4>
          <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">MATCHED & APPROVED</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-xs text-center flex-1">
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-500 font-bold block">Purchase Order</span>
            <span className="font-mono font-bold text-slate-900">PO-2026-9912</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-500 font-bold block">Goods Receipt (GRN)</span>
            <span className="font-mono font-bold text-slate-900">GRN-2026-3312</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-500 font-bold block">Vendor Invoice</span>
            <span className="font-mono font-bold text-slate-900">INV-JSP-991</span>
          </div>
        </div>
      </div>
    );
  }

  // stepId === "payments"
  return (
    <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
      <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">Vendor Payment Voucher & Open Ledger</h4>
      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2 flex-1">
        <div className="flex items-center justify-between">
          <span className="font-bold text-slate-900">Payment Voucher #PV-2026-4412</span>
          <span className="font-mono font-bold text-emerald-700">₹11,25,000 Paid</span>
        </div>
        <p className="text-[11px] text-slate-600">Issued via SBI Corporate Netbanking • Ref #UTR-SBI-991244</p>
      </div>
    </div>
  );
}

