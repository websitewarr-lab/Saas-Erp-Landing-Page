"use client";

import React from "react";
import { FileCheck2, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function CrmConversionView() {
  return (
    <div className="space-y-3 h-full flex flex-col bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 shadow-sm text-slate-100 select-none">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <div className="flex items-center gap-2">
          <FileCheck2 className="w-4 h-4 text-emerald-400" />
          <h4 className="font-extrabold text-white text-xs sm:text-sm">Lead-to-Quotation &amp; Customer Conversion Engine</h4>
        </div>
        <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-black px-2.5 py-0.5 rounded-full border border-emerald-500/30">
          Conversion Ready
        </span>
      </div>

      <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3 text-xs flex-1">
        {/* Lead Details Header */}
        <div className="flex items-center justify-between bg-slate-900 p-3 rounded-xl border border-slate-800">
          <div>
            <span className="text-[9px] font-extrabold text-slate-400 block uppercase tracking-wider">Qualified Account Target</span>
            <span className="font-black text-white text-sm sm:text-base">Arvind Industrial Systems</span>
          </div>
          <div className="text-right">
            <span className="text-[9px] font-extrabold text-slate-400 block uppercase tracking-wider">Opportunity Value</span>
            <span className="font-mono font-black text-blue-400 text-sm sm:text-base">₹4,80,000</span>
          </div>
        </div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold flex items-center justify-between shadow-md cursor-pointer hover:from-blue-500 hover:to-indigo-500 transition-all border border-blue-400/30">
            <div>
              <span className="block text-xs">Generate Official Quotation</span>
              <span className="text-[10px] text-blue-200 font-mono font-semibold">Generate #QTN-2026-9041</span>
            </div>
            <ArrowRight className="w-4 h-4" />
          </div>

          <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold flex items-center justify-between shadow-md cursor-pointer hover:from-emerald-500 hover:to-teal-500 transition-all border border-emerald-400/30">
            <div>
              <span className="block text-xs">Create Customer Account</span>
              <span className="text-[10px] text-emerald-200 font-mono font-semibold">Auto Credit &amp; GSTIN Sync</span>
            </div>
            <CheckCircle2 className="w-4 h-4" />
          </div>
        </div>

        {/* Audit Status Bar */}
        <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 flex items-center gap-2 text-[11px] font-semibold">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Audit Trail Logged: Lead status transitioned to &ldquo;Converted&rdquo; with automated Commercial Sales notification.</span>
        </div>
      </div>
    </div>
  );
}


