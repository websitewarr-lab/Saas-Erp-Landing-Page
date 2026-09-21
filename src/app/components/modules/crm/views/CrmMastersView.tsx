"use client";

import React from "react";
import { Sliders, Plus, Edit2, CheckCircle2, Sparkles, Settings } from "lucide-react";

export default function CrmMastersView() {
  return (
    <div className="space-y-3 h-full flex flex-col bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 shadow-sm text-slate-100 select-none">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-blue-400" />
          <h4 className="font-extrabold text-white text-xs sm:text-sm">Configurable CRM Masters &amp; Workflow Rule Engine</h4>
        </div>
        <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold shadow-md shadow-blue-600/20 flex items-center gap-1">
          <Plus className="w-3.5 h-3.5" />
          <span>Add Custom Master</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs flex-1">
        {/* Lead Status Master */}
        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 flex flex-col">
          <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
            <span className="font-extrabold text-white">Lead Status Matrix</span>
            <Edit2 className="w-3 h-3 text-slate-400 hover:text-white transition-colors cursor-pointer" />
          </div>
          <div className="space-y-1.5 font-semibold text-slate-300 flex-1">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
              <span>1. New Lead</span>
              <span className="text-[9px] text-blue-400 font-mono font-bold bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">Default</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">2. Contacted</div>
            <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-500/40 text-blue-300 font-extrabold flex items-center justify-between">
              <span>3. Qualified</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400">4. Unqualified</div>
            <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-bold">5. Converted</div>
          </div>
        </div>

        {/* Deal Stage Master */}
        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 flex flex-col">
          <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
            <span className="font-extrabold text-white">Deal Stage SLA Rules</span>
            <Edit2 className="w-3 h-3 text-slate-400 hover:text-white transition-colors cursor-pointer" />
          </div>
          <div className="space-y-1.5 font-semibold text-slate-300 flex-1">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
              <span>1. Prospecting</span>
              <span className="text-[9px] text-slate-400 font-mono">24h SLA</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
              <span>2. Discovery</span>
              <span className="text-[9px] text-slate-400 font-mono">48h SLA</span>
            </div>
            <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-500/40 text-blue-300 font-extrabold flex justify-between items-center">
              <span>3. Quotation</span>
              <span className="text-[9px] text-blue-400 font-mono font-bold">Auto Quote</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
              <span>4. Negotiation</span>
              <span className="text-[9px] text-slate-400 font-mono">3 Days SLA</span>
            </div>
            <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-bold flex justify-between items-center">
              <span>5. Won &amp; Handoff</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </div>
        </div>

        {/* Industry Classifications */}
        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 flex flex-col">
          <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
            <span className="font-extrabold text-white">Industry Segments</span>
            <Edit2 className="w-3 h-3 text-slate-400 hover:text-white transition-colors cursor-pointer" />
          </div>
          <div className="space-y-1.5 font-semibold text-slate-300 flex-1">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
              <span>Manufacturing &amp; Heavy Industries</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
              <span>Precision Engineering</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
              <span>Automotive Auto Components</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
              <span>IT &amp; Enterprise Software</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
              <span>Infrastructure &amp; Projects</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


