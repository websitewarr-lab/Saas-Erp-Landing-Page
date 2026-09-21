"use client";

import React from "react";
import { CalendarCheck, Phone, Mail, CheckCircle2, Clock, Plus, User, Sparkles } from "lucide-react";

export default function CrmActivitiesView() {
  return (
    <div className="space-y-3 h-full flex flex-col bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 shadow-sm text-slate-100 select-none">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <div className="flex items-center gap-2">
          <CalendarCheck className="w-4 h-4 text-blue-400" />
          <h4 className="font-extrabold text-white text-xs sm:text-sm">Interactive Activity &amp; Task Stream</h4>
        </div>
        <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold shadow-md shadow-blue-600/20 flex items-center gap-1">
          <Plus className="w-3.5 h-3.5" />
          <span>Schedule Activity</span>
        </button>
      </div>

      <div className="space-y-2.5 flex-1 text-xs overflow-y-auto">
        {/* Activity 1 */}
        <div className="p-3 rounded-xl bg-slate-950/90 border border-blue-500/40 flex items-start gap-3 shadow-xs">
          <div className="w-8 h-8 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-500/40 flex items-center justify-center shrink-0 font-bold mt-0.5">
            <Phone className="w-4 h-4" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-white">Follow-up Call with Arvind Industrial Systems</span>
              <span className="text-[10px] font-mono font-bold text-blue-300 bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/30">
                Today · 3:30 PM
              </span>
            </div>
            <p className="text-[11px] text-slate-300">
              Confirm technical specifications for 45kW gearbox quote with Rohan Mehta &amp; Kavita Joshi.
            </p>
            <div className="flex items-center gap-3 text-[10px] text-slate-400 font-medium pt-1 border-t border-slate-800">
              <span>Assigned rep: Amit Sharma</span>
              <span>•</span>
              <span className="text-amber-400 font-bold">Priority: High</span>
            </div>
          </div>
        </div>

        {/* Activity 2 */}
        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-purple-600/30 text-purple-300 border border-purple-500/40 flex items-center justify-center shrink-0 font-bold mt-0.5">
            <Mail className="w-4 h-4" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-white">Send Commercial Proposal to Nova Manufacturing</span>
              <span className="text-[10px] font-mono font-semibold text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                Tomorrow · 11:00 AM
              </span>
            </div>
            <p className="text-[11px] text-slate-300">
              Dispatch CPQ quotation #QTN-2026-904 with 5.0% volume discount schedule.
            </p>
            <div className="flex items-center gap-3 text-[10px] text-slate-400 font-medium pt-1 border-t border-slate-800">
              <span>Assigned rep: Neha Jain</span>
              <span>•</span>
              <span className="text-blue-400 font-bold">Priority: Medium</span>
            </div>
          </div>
        </div>

        {/* Activity 3 */}
        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shrink-0 font-bold mt-0.5">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-slate-400 line-through">Demo Presentation &amp; Discovery</span>
              <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                24 Sep · Completed
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Completed executive presentation for Rajasthan Components management team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


