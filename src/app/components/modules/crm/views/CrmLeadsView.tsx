"use client";

import React from "react";
import { Filter, Search, Plus, Sparkles, UserCheck, ArrowUpRight } from "lucide-react";

export default function CrmLeadsView() {
  return (
    <div className="space-y-3 h-full flex flex-col bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 shadow-sm text-slate-100 select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-extrabold text-white text-xs sm:text-sm">Lead &amp; Prospect Acquisition Master</h4>
            <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-mono font-bold border border-blue-500/30">
              1,420 Total
            </span>
          </div>
          <p className="text-[10px] text-slate-400">Multichannel acquisition with AI lead scoring &amp; intent tracking</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 bg-slate-800 border border-slate-700/70 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-300">
            <Filter className="w-3.5 h-3.5 text-blue-400" />
            <span>Source: All Channels</span>
          </div>
          <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold shadow-md shadow-blue-600/20 flex items-center gap-1">
            <Plus className="w-3.5 h-3.5" />
            <span>Capture Lead</span>
          </button>
        </div>
      </div>

      {/* Lead Table */}
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-950/80 text-slate-400 font-extrabold border-b border-slate-800 text-[10px] uppercase tracking-wider">
              <th className="py-2 px-3">Company &amp; Contact</th>
              <th className="py-2 px-3">Lead Score</th>
              <th className="py-2 px-3">Owner</th>
              <th className="py-2 px-3">Source Channel</th>
              <th className="py-2 px-3">Priority</th>
              <th className="py-2 px-3">Segment</th>
              <th className="py-2 px-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-medium">
            {/* Active Selected Row */}
            <tr className="bg-blue-950/40 border-l-2 border-blue-500 text-slate-100">
              <td className="py-2.5 px-3">
                <div className="font-extrabold text-white text-xs flex items-center gap-1.5">
                  <span>Arvind Industrial Systems</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                </div>
                <div className="text-[10px] text-slate-400 font-mono">Rohan Mehta (Procurement)</div>
              </td>
              <td className="py-2.5 px-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-black text-emerald-400 text-xs">94/100</span>
                  <div className="w-12 bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[94%]" />
                  </div>
                </div>
              </td>
              <td className="py-2.5 px-3 text-slate-300">Amit Sharma</td>
              <td className="py-2.5 px-3">
                <span className="bg-purple-500/20 text-purple-300 text-[10px] font-extrabold px-2 py-0.5 rounded-md border border-purple-500/30">
                  IndiaMART B2B
                </span>
              </td>
              <td className="py-2.5 px-3">
                <span className="bg-rose-500/20 text-rose-300 text-[10px] font-extrabold px-2 py-0.5 rounded border border-rose-500/30">High</span>
              </td>
              <td className="py-2.5 px-3 font-extrabold text-blue-300">Enterprise</td>
              <td className="py-2.5 px-3 text-right">
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  Qualified
                </span>
              </td>
            </tr>

            <tr className="hover:bg-slate-800/40 text-slate-200">
              <td className="py-2.5 px-3">
                <div className="font-extrabold text-white text-xs">Nova Manufacturing Pvt. Ltd.</div>
                <div className="text-[10px] text-slate-400 font-mono">Priya Shah (Director)</div>
              </td>
              <td className="py-2.5 px-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-blue-400 text-xs">78/100</span>
                  <div className="w-12 bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-blue-400 h-full w-[78%]" />
                  </div>
                </div>
              </td>
              <td className="py-2.5 px-3 text-slate-300">Neha Jain</td>
              <td className="py-2.5 px-3">
                <span className="bg-blue-500/20 text-blue-300 text-[10px] font-extrabold px-2 py-0.5 rounded-md border border-blue-500/30">
                  Web Direct
                </span>
              </td>
              <td className="py-2.5 px-3">
                <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-500/30">Medium</span>
              </td>
              <td className="py-2.5 px-3 font-bold text-slate-300">Mid-Market</td>
              <td className="py-2.5 px-3 text-right">
                <span className="bg-blue-500/20 text-blue-300 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-blue-500/30">
                  Contacted
                </span>
              </td>
            </tr>

            <tr className="hover:bg-slate-800/40 text-slate-200">
              <td className="py-2.5 px-3">
                <div className="font-extrabold text-white text-xs">Rajasthan Components</div>
                <div className="text-[10px] text-slate-400 font-mono">Vikram Singh (VP)</div>
              </td>
              <td className="py-2.5 px-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-400 text-xs">62/100</span>
                  <div className="w-12 bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-amber-400 h-full w-[62%]" />
                  </div>
                </div>
              </td>
              <td className="py-2.5 px-3 text-slate-300">Amit Sharma</td>
              <td className="py-2.5 px-3">
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold px-2 py-0.5 rounded-md border border-emerald-500/30">
                  Partner Referral
                </span>
              </td>
              <td className="py-2.5 px-3">
                <span className="bg-rose-500/20 text-rose-300 text-[10px] font-extrabold px-2 py-0.5 rounded border border-rose-500/30">High</span>
              </td>
              <td className="py-2.5 px-3 font-bold text-slate-300">SME</td>
              <td className="py-2.5 px-3 text-right">
                <span className="bg-slate-800 text-slate-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-slate-700">
                  New Lead
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}


