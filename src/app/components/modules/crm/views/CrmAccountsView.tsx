"use client";

import React from "react";
import { Building2, ShieldCheck, CreditCard, Users, FileText, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

export default function CrmAccountsView() {
  return (
    <div className="space-y-3 h-full flex flex-col select-none text-slate-100">
      {/* Account Overview Header */}
      <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 shadow-sm space-y-3 backdrop-blur-sm">
        <div className="flex items-start justify-between border-b border-slate-800 pb-2.5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-sm shadow-md shadow-blue-600/30 border border-blue-400/30">
              AI
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-extrabold text-white text-xs sm:text-sm">Arvind Industrial Systems Pvt. Ltd.</h4>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  GSTIN Verified
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                <span>Owner: Amit Sharma</span>
                <span>•</span>
                <span className="text-slate-300">Jaipur Industrial Hub, RJ</span>
              </div>
            </div>
          </div>
          <span className="bg-blue-500/10 text-blue-300 border border-blue-500/30 text-xs font-black px-2.5 py-1 rounded-lg hidden sm:block">
            Tier-1 Enterprise Account
          </span>
        </div>

        {/* Commercial & Financial Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
          <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
            <span className="text-[9px] text-slate-400 font-extrabold block uppercase tracking-wider">Approved Credit Limit</span>
            <span className="font-mono font-black text-blue-400 text-sm">₹12,00,000</span>
            <div className="w-full bg-slate-800 rounded-full h-1 overflow-hidden mt-1">
              <div className="bg-blue-400 h-full w-[68%]" />
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-0.5">
            <span className="text-[9px] text-slate-400 font-extrabold block uppercase tracking-wider">GSTIN Number</span>
            <span className="font-mono font-bold text-slate-200 text-xs">08AAACA1234F1Z5</span>
            <span className="text-[9px] text-emerald-400 block font-semibold">Live Govt Portal Sync</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-0.5">
            <span className="text-[9px] text-slate-400 font-extrabold block uppercase tracking-wider">PAN Status</span>
            <span className="font-mono font-bold text-slate-200 text-xs">AAACA1234F</span>
            <span className="text-[9px] text-blue-400 block font-semibold">Active Clear Account</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-0.5">
            <span className="text-[9px] text-slate-400 font-extrabold block uppercase tracking-wider">YTD ERP Billing</span>
            <span className="font-mono font-black text-emerald-400 text-sm">₹42,80,000</span>
            <span className="text-[9px] text-emerald-300 flex items-center gap-1">
              <TrendingUp className="w-2.5 h-2.5" />
              +24% vs Prev Year
            </span>
          </div>
        </div>
      </div>

      {/* Key Contacts List Container */}
      <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 shadow-sm flex-1 space-y-2.5">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h5 className="font-extrabold text-white text-xs flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-400" />
            <span>Key Account Stakeholders &amp; Decision Makers</span>
          </h5>
          <span className="text-[10px] text-slate-400 font-mono">3 Verified Contacts</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1 hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-white text-xs">Rohan Mehta</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[10px] font-bold text-blue-400 block">Head of Procurement</span>
            <span className="text-[9px] text-slate-400 font-mono block">rohan@arvindindustrial.com</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1 hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-white text-xs">Kavita Joshi</span>
              <span className="w-2 h-2 rounded-full bg-blue-400" />
            </div>
            <span className="text-[10px] font-bold text-purple-300 block">VP Finance &amp; Audit</span>
            <span className="text-[9px] text-slate-400 font-mono block">kavita@arvindindustrial.com</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1 hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-white text-xs">Suresh Jain</span>
              <span className="w-2 h-2 rounded-full bg-slate-400" />
            </div>
            <span className="text-[10px] font-bold text-slate-300 block">Operations Director</span>
            <span className="text-[9px] text-slate-400 font-mono block">suresh@arvindindustrial.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}


