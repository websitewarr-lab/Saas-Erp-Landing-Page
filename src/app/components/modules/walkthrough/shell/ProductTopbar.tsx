"use client";

import React from "react";
import {
  Menu,
  Plus,
  Search,
  Bell,
  Globe,
  Maximize2,
  ChevronDown,
  Moon,
  Sparkles,
} from "lucide-react";

export default function ProductTopbar({ moduleTitle }: { moduleTitle: string }) {
  return (
    <header className="h-13 bg-white border-b border-slate-200 px-3 sm:px-4 flex items-center justify-between shrink-0 select-none text-slate-800 font-sans shadow-2xs">
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Mac-style window controls */}
        <div className="flex items-center gap-1.5 mr-1">
          <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
        </div>

        {/* Company Logo & Brand Badge */}
        <div className="flex items-center gap-2 px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-xl">
          <img
            src="/images/logo/Wlogo.webp"
            alt="Warrgyizmorsch"
            className="h-5 w-auto object-contain filter drop-shadow-xs"
          />
          <div className="leading-none">
            <span className="block font-black text-slate-900 text-xs tracking-tight">Warrgyizmorsch</span>
            <span className="text-[9px] text-blue-600 font-bold font-mono block">ENTERPRISE ERP</span>
          </div>
        </div>

        {/* Navigation Breadcrumb / Tenant context */}
        <div className="hidden lg:flex items-center gap-2 text-xs text-slate-500 font-medium border-l border-slate-200 pl-3">
          <button className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 font-bold text-[11px] flex items-center gap-1 hover:bg-blue-100 transition-colors">
            <span>MODULES</span>
            <ChevronDown className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-1 text-slate-600">
            <span className="font-bold text-slate-800">Demo Tenant</span>
            <span className="text-[10px] text-slate-400 font-mono">(Headquarters - FY 2026-2027)</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-2.5">
        {/* Search */}
        <div className="relative hidden md:flex items-center w-40 lg:w-52 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1 text-xs text-slate-500 gap-2">
          <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="truncate text-[11px]">Search system...</span>
          <kbd className="ml-auto bg-white text-slate-400 px-1.5 py-0.5 rounded text-[9px] font-mono border border-slate-200">⌘K</kbd>
        </div>

        {/* Language Flag */}
        <div className="hidden sm:flex items-center justify-center w-7 h-7 rounded-lg bg-slate-50 border border-slate-200 text-xs cursor-pointer hover:bg-slate-100">
          🇺🇸
        </div>

        {/* Fullscreen icon */}
        <div className="hidden sm:flex items-center justify-center w-7 h-7 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 cursor-pointer hover:bg-slate-100">
          <Maximize2 className="w-3.5 h-3.5" />
        </div>

        {/* Dark/Light mode toggle */}
        <div className="hidden sm:flex items-center justify-center w-7 h-7 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 cursor-pointer hover:bg-slate-100">
          <Moon className="w-3.5 h-3.5" />
        </div>

        {/* Notifications */}
        <button
          className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 relative flex items-center justify-center"
          aria-label="Notifications"
        >
          <Bell className="w-3.5 h-3.5" />
          <span className="w-4 h-4 rounded-full bg-emerald-500 text-white text-[9px] font-bold absolute -top-1 -right-1 flex items-center justify-center">
            3
          </span>
        </button>

        {/* User Profile Avatar */}
        <div className="flex items-center gap-2 pl-1 border-l border-slate-200">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-extrabold text-[10px] shadow-sm border border-blue-400/30">
            DS
          </div>
        </div>
      </div>
    </header>
  );
}
