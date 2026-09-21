"use client";

import React from "react";
import { Kanban, Plus, CheckCircle2, ChevronRight, User, TrendingUp, Sparkles } from "lucide-react";

export default function CrmDealsView() {
  return (
    <div className="space-y-3 h-full flex flex-col select-none text-slate-100">
      {/* Top Pipeline Summary Bar */}
      <div className="flex items-center justify-between bg-slate-900/90 p-3 rounded-xl border border-slate-800 shadow-sm backdrop-blur-sm shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30">
            <Kanban className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white text-xs sm:text-sm">Q3 Enterprise Deals Pipeline</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold border border-emerald-500/30 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +18.4% MoM
              </span>
            </div>
            <p className="text-[10px] text-slate-400 hidden sm:block">Automated probability scoring &amp; revenue forecast engine</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs">
            <span className="text-slate-400 text-[11px]">Total Pipeline:</span>
            <span className="font-mono font-black text-blue-400">₹15,95,000</span>
          </div>
          <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-blue-600/20 transition-all">
            <Plus className="w-3.5 h-3.5" />
            <span>Add Deal</span>
          </button>
        </div>
      </div>

      {/* Kanban Board Columns Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 flex-1 overflow-hidden">
        {/* Stage 1: New */}
        <div className="bg-slate-900/70 p-2 rounded-xl border border-slate-800/90 flex flex-col space-y-2">
          <div className="flex items-center justify-between text-xs font-extrabold text-slate-300 border-b border-slate-800 pb-2 px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              New (1)
            </span>
            <span className="text-[10px] text-blue-400 font-mono font-bold">₹2.75L</span>
          </div>
          <div className="bg-slate-800/90 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-700/70 shadow-sm space-y-2 transition-all cursor-pointer">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-extrabold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30">
                38% Prob
              </span>
              <span className="text-[9px] text-slate-400 font-mono">14 Oct</span>
            </div>
            <div className="font-extrabold text-xs text-slate-100">Rajasthan Components</div>
            <div className="text-xs text-blue-300 font-mono font-black">₹2,75,000</div>
            <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1.5 border-t border-slate-700/50">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-indigo-600 text-[9px] text-white flex items-center justify-center font-bold">AS</div>
                <span>Amit S.</span>
              </div>
              <span className="text-[9px] text-slate-500">SME</span>
            </div>
          </div>
        </div>

        {/* Stage 2: Contacted */}
        <div className="bg-slate-900/70 p-2 rounded-xl border border-slate-800/90 flex flex-col space-y-2">
          <div className="flex items-center justify-between text-xs font-extrabold text-slate-400 border-b border-slate-800 pb-2 px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-500" />
              Contacted (0)
            </span>
            <span className="text-[10px] text-slate-500 font-mono">₹0</span>
          </div>
          <div className="flex-1 rounded-xl border border-dashed border-slate-800 bg-slate-900/30 flex flex-col items-center justify-center text-[10px] text-slate-500 gap-1">
            <span>Stage Clear</span>
          </div>
        </div>

        {/* Stage 3: Qualified */}
        <div className="bg-slate-900/70 p-2 rounded-xl border border-slate-800/90 flex flex-col space-y-2">
          <div className="flex items-center justify-between text-xs font-extrabold text-slate-300 border-b border-slate-800 pb-2 px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Qualified (1)
            </span>
            <span className="text-[10px] text-cyan-400 font-mono font-bold">₹8.40L</span>
          </div>
          <div className="bg-slate-800/90 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-700/70 shadow-sm space-y-2 transition-all cursor-pointer">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-extrabold text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30">
                55% Prob
              </span>
              <span className="text-[9px] text-slate-400 font-mono">03 Oct</span>
            </div>
            <div className="font-extrabold text-xs text-slate-100">Nova Manufacturing</div>
            <div className="text-xs text-cyan-300 font-mono font-black">₹8,40,000</div>
            <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1.5 border-t border-slate-700/50">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-purple-600 text-[9px] text-white flex items-center justify-center font-bold">NJ</div>
                <span>Neha J.</span>
              </div>
              <span className="text-[9px] text-slate-500">Mid-Market</span>
            </div>
          </div>
        </div>

        {/* Stage 4: Quotation (ACTIVE GLOWING STAGE) */}
        <div className="bg-blue-950/40 p-2 rounded-xl border border-blue-500/40 flex flex-col space-y-2 relative shadow-[0_0_20px_rgba(37,99,235,0.1)]">
          <div className="flex items-center justify-between text-xs font-extrabold text-blue-300 border-b border-blue-500/30 pb-2 px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Quotation (1)
            </span>
            <span className="text-[10px] text-blue-300 font-mono font-bold">₹4.80L</span>
          </div>

          <div className="bg-gradient-to-b from-blue-600 to-indigo-700 text-white p-3 rounded-xl border border-blue-400/50 shadow-lg space-y-2.5 relative">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-black bg-white text-blue-900 px-2 py-0.5 rounded-full shadow-xs">
                72% Win Prob
              </span>
              <span className="text-[9px] text-blue-200 font-mono">24 Sep</span>
            </div>
            <div>
              <div className="font-black text-xs leading-tight">Arvind Industrial Systems</div>
              <div className="text-[10px] text-blue-200">High-Precision Gearboxes</div>
            </div>
            <div className="text-sm font-mono font-black text-white">₹4,80,000</div>

            {/* Progress Meter Bar */}
            <div className="w-full bg-blue-900/60 rounded-full h-1.5 overflow-hidden">
              <div className="bg-emerald-400 h-full w-[72%]" />
            </div>

            <div className="text-[10px] text-blue-100 flex items-center justify-between pt-1 border-t border-blue-400/40">
              <span className="font-semibold">Rep: Amit Sharma</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Stage 5: Won */}
        <div className="bg-slate-900/70 p-2 rounded-xl border border-slate-800/90 flex flex-col space-y-2">
          <div className="flex items-center justify-between text-xs font-extrabold text-emerald-400 border-b border-slate-800 pb-2 px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Converted
            </span>
            <span className="text-[10px] text-emerald-400 font-mono font-bold">Closed</span>
          </div>
          <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-300 font-extrabold flex items-center justify-between shadow-xs">
            <div className="space-y-0.5">
              <span>YTD Won Deals</span>
              <div className="text-xs font-mono font-black text-emerald-400">₹42,80,000</div>
            </div>
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}


