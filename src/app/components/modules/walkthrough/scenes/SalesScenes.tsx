"use client";

import React from "react";
import {
  FileText,
  CheckCircle2,
  Percent,
  Truck,
  Receipt,
  Plus,
  ShieldCheck,
  DollarSign,
} from "lucide-react";

export default function SalesScenes({ stepId }: { stepId: string }) {
  if (stepId === "quotation") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-600" />
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm">CPQ Multi-Item Quotation Generator</h4>
          </div>
          <span className="text-[11px] font-bold font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
            QTN-2026-9041
          </span>
        </div>

        <div className="overflow-x-auto flex-1 text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200 text-[11px]">
                <th className="py-2 px-3">Item Description</th>
                <th className="py-2 px-3">Qty</th>
                <th className="py-2 px-3">Unit Price (₹)</th>
                <th className="py-2 px-3">Disc %</th>
                <th className="py-2 px-3">GST Rate</th>
                <th className="py-2 px-3 text-right">Net Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              <tr>
                <td className="py-2.5 px-3 font-bold text-slate-900">Heavy Industrial Drive Unit - 45kW</td>
                <td className="py-2.5 px-3">10 Pcs</td>
                <td className="py-2.5 px-3 font-mono">₹2,20,000</td>
                <td className="py-2.5 px-3 font-mono text-emerald-700">5.0%</td>
                <td className="py-2.5 px-3">18% IGST</td>
                <td className="py-2.5 px-3 font-mono font-bold text-right text-slate-900">₹20,90,000</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-slate-900">Precision Alloy Bearing Assembly</td>
                <td className="py-2.5 px-3">50 Pcs</td>
                <td className="py-2.5 px-3 font-mono">₹18,500</td>
                <td className="py-2.5 px-3 font-mono text-emerald-700">2.5%</td>
                <td className="py-2.5 px-3">18% IGST</td>
                <td className="py-2.5 px-3 font-mono font-bold text-right text-slate-900">₹9,01,875</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50/80 p-3 rounded-xl border border-blue-200 flex items-center justify-between text-xs">
          <div className="text-slate-600">
            <span className="block font-bold text-slate-900">Customer: Arvind Industrial Systems</span>
            <span className="text-[10px]">Payment Terms: 30 Days Credit Net</span>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-slate-500 font-bold block uppercase">Grand Total (Incl GST)</span>
            <span className="font-mono font-black text-blue-800 text-base">₹35,30,412</span>
          </div>
        </div>
      </div>
    );
  }

  if (stepId === "approval") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">
          Quotation Approval & Commercial Governance Flow
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
          <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 opacity-60">
            <span className="text-[10px] font-bold text-slate-500 block">Step 01</span>
            <span className="font-bold text-slate-800">Draft Quote</span>
          </div>
          <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-300 text-amber-900 font-bold">
            <span className="text-[10px] text-amber-700 block">Step 02</span>
            <span>VP Approval Pending</span>
          </div>
          <div className="p-2.5 rounded-lg bg-blue-600 text-white font-bold shadow-xs">
            <span className="text-[10px] text-blue-200 block">Step 03</span>
            <span>Commercial Approved</span>
          </div>
          <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-900 font-bold">
            <span className="text-[10px] text-emerald-700 block">Step 04</span>
            <span>Dispatched to Client</span>
          </div>
        </div>

        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs flex-1">
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-900">Discount Governance Check</span>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Within VP Threshold (Max 7.5%)
            </span>
          </div>
          <p className="text-[11px] text-slate-600">
            Requested discount of 5.0% on Quote #QTN-2026-9041 auto-approved by VP Operations (Arvind I.).
          </p>
        </div>
      </div>
    );
  }

  if (stepId === "gst") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">GST Tax Split & Commercial Controls</h4>
          <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
            Inter-State IGST 18%
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 text-xs flex-1">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-[10px] text-slate-500 font-bold block">Taxable Value</span>
            <span className="font-mono font-bold text-slate-900 text-sm">₹29,91,875</span>
          </div>
          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 space-y-1">
            <span className="text-[10px] text-blue-700 font-bold block">IGST Amount (18%)</span>
            <span className="font-mono font-bold text-blue-900 text-sm">₹5,38,537</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
            <span className="text-[10px] text-emerald-700 font-bold block">Total Invoice Payable</span>
            <span className="font-mono font-bold text-emerald-900 text-sm">₹35,30,412</span>
          </div>
        </div>
      </div>
    );
  }

  if (stepId === "order") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Sales Order & E-Way Bill Dispatch</h4>
          <span className="bg-blue-100 text-blue-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
            SO #SO-2026-4412
          </span>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs flex-1">
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-900">E-Way Bill Metadata</span>
            <span className="font-mono text-blue-700 font-bold">EWAY-99812-2026</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
            <div>Transporter: VRL Logistics Ltd</div>
            <div>Vehicle No: MH-12-AB-9812</div>
          </div>
        </div>
      </div>
    );
  }

  // stepId === "returns"
  return (
    <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
      <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">
        Customer Receipts & Open Balance Allocation
      </h4>
      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-2 flex-1">
        <div className="flex items-center justify-between font-bold text-emerald-900">
          <span>Advance Customer Receipt</span>
          <span className="font-mono text-sm">₹10,00,000 Received</span>
        </div>
        <p className="text-[11px] text-emerald-700">Allocated to Sales Order #SO-2026-4412 • HDFC Bank Ref #NEFT-88912</p>
      </div>
    </div>
  );
}

