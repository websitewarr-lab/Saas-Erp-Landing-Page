"use client";

import React from "react";
import {
  Menu,
  Plus,
  Search,
  Globe,
  Bell,
  Sparkles,
  Command,
  CheckCircle2,
} from "lucide-react";

export default function CrmTopbar({ activeTitle }: { activeTitle: string }) {
  return (
    <header className="h-13 bg-[#111827] border-b border-slate-800/80 px-4 flex items-center justify-between shrink-0 select-none text-white">
      <div className="flex items-center gap-3">
        {/* Window controls styling */}
        <div className="flex items-center gap-1.5 mr-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
        </div>

        {/* Company Logo & Name Header */}
        <div className="flex items-center gap-2 px-2.5 py-1 bg-slate-900/80 border border-slate-700/60 rounded-xl">
          <img
            src="/images/logo/Wlogo.webp"
            alt="Warrgyizmorsch"
            className="h-5 w-auto object-contain filter drop-shadow"
          />
          <div className="leading-tight">
            <span className="block font-black text-slate-100 text-xs tracking-tight">Warrgyizmorsch</span>
            <span className="text-[9px] text-blue-400 font-bold font-mono block">ENTERPRISE ERP</span>
          </div>
        </div>

        {/* Active Breadcrumb Badge */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-semibold pl-2">
          <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[11px] font-mono uppercase font-bold">
            CRM Console
          </span>
          <span className="text-slate-600">/</span>
          <span className="font-extrabold text-slate-200">{activeTitle}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Command Search Bar */}
        <div className="relative hidden md:flex items-center w-56 lg:w-64 bg-slate-900/90 border border-slate-700/60 rounded-xl px-3 py-1.5 text-xs text-slate-400 gap-2">
          <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="truncate">Search leads, deals, GSTIN...</span>
          <kbd className="ml-auto bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded text-[10px] font-mono border border-slate-700">⌘K</kbd>
        </div>

        {/* Live Status Indicator */}
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>System Live</span>
        </div>

        {/* Notifications */}
        <button className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white relative">
          <Bell className="w-4 h-4" />
          <span className="w-2 h-2 rounded-full bg-blue-500 absolute top-1 right-1" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center font-extrabold text-xs shadow-md shadow-blue-500/20 border border-blue-400/40">
            AI
          </div>
          <div className="hidden xl:block text-left text-xs leading-none">
            <div className="font-extrabold text-slate-200">Arvind I.</div>
            <div className="text-[9px] text-slate-400">VP Operations</div>
          </div>
        </div>
      </div>
    </header>
  );
}


