"use client";

import React from "react";
import { Calculator, CheckCircle2, ShieldCheck, FileSpreadsheet, ArrowRightLeft } from "lucide-react";

export default function AccountingScenes({ stepId }: { stepId: string }) {
  if (stepId === "chart") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
        <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">Multi-Tier Chart of Accounts (CoA) Structure</h4>
        <div className="space-y-1.5 font-mono text-xs flex-1">
          <div className="p-1.5 rounded bg-blue-50 border border-blue-200 font-bold text-blue-900">
            📁 1000 - ASSETS
          </div>
          <div className="pl-4 space-y-1 text-slate-700 font-medium text-[11px]">
            <div className="p-1 rounded bg-slate-100">├── 📁 1100 - Current Assets (HDFC Bank, Receivables, Stock)</div>
            <div className="p-1 rounded bg-slate-100">└── 📁 1200 - Fixed Assets (Plant Machinery, Vehicles)</div>
          </div>
          <div className="p-1.5 rounded bg-slate-50 border border-slate-200 font-bold text-slate-900">
            📁 2000 - LIABILITIES (Accounts Payable, GST Tax Payable)
          </div>
        </div>
      </div>
    );
  }

  if (stepId === "gl") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
        <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">Real-Time Double-Entry Journal Posting Stream</h4>
        <div className="overflow-x-auto flex-1 text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200 text-[11px]">
                <th className="py-2 px-3">Account Name</th>
                <th className="py-2 px-3">Cost Center</th>
                <th className="py-2 px-3 text-right">Debit (₹)</th>
                <th className="py-2 px-3 text-right">Credit (₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono font-medium">
              <tr>
                <td className="py-2.5 px-3 font-bold text-blue-900">HDFC Bank Operating A/c</td>
                <td className="py-2.5 px-3 font-sans text-slate-600">HQ Corporate</td>
                <td className="py-2.5 px-3 font-bold text-right text-emerald-700">₹35,30,412</td>
                <td className="py-2.5 px-3 text-right text-slate-400">-</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-slate-900">Trade Accounts Receivable</td>
                <td className="py-2.5 px-3 font-sans text-slate-600">HQ Corporate</td>
                <td className="py-2.5 px-3 text-right text-slate-400">-</td>
                <td className="py-2.5 px-3 font-bold text-right text-slate-900">₹35,30,412</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (stepId === "vouchers") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">Accounting Voucher Entry & Governance</h4>
        <div className="grid grid-cols-2 gap-2 text-xs flex-1">
          <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 font-bold text-blue-900">
            <span>Payment Voucher #PV-9912</span>
            <span className="block font-mono text-sm mt-1">₹11,25,000</span>
          </div>
          <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 font-bold text-emerald-900">
            <span>Receipt Voucher #RV-8812</span>
            <span className="block font-mono text-sm mt-1">₹10,00,000</span>
          </div>
        </div>
      </div>
    );
  }

  if (stepId === "reconciliation") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Automated Electronic Bank Feed Reconciliation</h4>
          <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">100% MATCHED</span>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs flex-1">
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-500 font-bold block">HDFC Bank Feed</span>
            <span className="font-mono font-bold text-slate-900">₹35,30,412 Inward</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-500 font-bold block">General Ledger Record</span>
            <span className="font-mono font-bold text-slate-900">₹35,30,412 Posted</span>
          </div>
        </div>
      </div>
    );
  }

  // stepId === "gst"
  return (
    <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
      <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">GSTR-1 & GSTR-3B Tax Filing Summary</h4>
      <div className="p-3 bg-purple-50 rounded-xl border border-purple-200 text-xs space-y-1.5 flex-1">
        <div className="flex items-center justify-between font-bold text-purple-900">
          <span>GSTR-1 Audit Summary • September 2026</span>
          <span className="text-purple-700 bg-white px-2 py-0.5 rounded border border-purple-200 font-mono">Output Tax: ₹5,38,537</span>
        </div>
        <p className="text-[11px] text-purple-700">Digital Signature Verified • Audit Log Hash: #HASH-99124488</p>
      </div>
    </div>
  );
}

