"use client";

import React from "react";
import {
  PieChart,
  Users,
  Kanban,
  Building2,
  UserCheck,
  CalendarCheck,
  Activity,
  Sliders,
  FileCheck2,
  ShoppingCart,
  FolderGit2,
  ChevronDown,
  Building,
} from "lucide-react";

export default function CrmSidebar({
  activeView,
  onNavigate,
}: {
  activeView: string;
  onNavigate?: (view: string) => void;
}) {
  return (
    <aside className="w-60 bg-white border-r border-slate-200 flex flex-col text-xs text-slate-700 select-none shrink-0 hidden md:flex">
      {/* Console Header */}
      <div className="px-4 py-3 border-b border-slate-200 bg-slate-50/80 flex items-center justify-between">
        <div className="font-extrabold text-slate-900 text-xs tracking-wider uppercase">
          CRM Console
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-2.5 space-y-4">
        {/* CRM SECTION */}
        <div>
          <div className="px-2.5 py-1 text-[10px] font-extrabold text-slate-400 tracking-wider uppercase flex items-center justify-between">
            <span>CRM & Sales Engine</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </div>

          <div className="space-y-0.5 mt-1">
            <button
              onClick={() => onNavigate?.("pipeline")}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors font-semibold ${
                activeView === "pipeline"
                  ? "bg-blue-50 text-blue-700 font-extrabold border-l-4 border-blue-600 shadow-2xs"
                  : "hover:bg-slate-100/80 text-slate-700"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Kanban className="w-4 h-4 text-blue-600" />
                <span>Deals (Pipeline)</span>
              </div>
              {activeView === "pipeline" && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
            </button>

            <button
              onClick={() => onNavigate?.("leads")}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors font-semibold ${
                activeView === "leads"
                  ? "bg-blue-50 text-blue-700 font-extrabold border-l-4 border-blue-600 shadow-2xs"
                  : "hover:bg-slate-100/80 text-slate-700"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-blue-600" />
                <span>Leads & Prospects</span>
              </div>
              {activeView === "leads" && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
            </button>

            <button
              onClick={() => onNavigate?.("accounts")}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors font-semibold ${
                activeView === "accounts"
                  ? "bg-blue-50 text-blue-700 font-extrabold border-l-4 border-blue-600 shadow-2xs"
                  : "hover:bg-slate-100/80 text-slate-700"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>Accounts 360°</span>
              </div>
              {activeView === "accounts" && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
            </button>

            <button
              onClick={() => onNavigate?.("activities")}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors font-semibold ${
                activeView === "activities"
                  ? "bg-blue-50 text-blue-700 font-extrabold border-l-4 border-blue-600 shadow-2xs"
                  : "hover:bg-slate-100/80 text-slate-700"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <CalendarCheck className="w-4 h-4 text-blue-600" />
                <span>Activities & Tasks</span>
              </div>
              {activeView === "activities" && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
            </button>

            <button
              onClick={() => onNavigate?.("masters")}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors font-semibold ${
                activeView === "masters"
                  ? "bg-blue-50 text-blue-700 font-extrabold border-l-4 border-blue-600 shadow-2xs"
                  : "hover:bg-slate-100/80 text-slate-700"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Sliders className="w-4 h-4 text-blue-600" />
                <span>CRM Masters</span>
              </div>
              {activeView === "masters" && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
            </button>

            <button
              onClick={() => onNavigate?.("conversion")}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors font-semibold ${
                activeView === "conversion"
                  ? "bg-blue-50 text-blue-700 font-extrabold border-l-4 border-blue-600 shadow-2xs"
                  : "hover:bg-slate-100/80 text-slate-700"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FileCheck2 className="w-4 h-4 text-emerald-600" />
                <span>Lead Conversion</span>
              </div>
              {activeView === "conversion" && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
            </button>
          </div>
        </div>

        {/* RELATED CRM MODULES */}
        <div className="pt-2 border-t border-slate-100">
          <div className="px-2.5 py-1 text-[10px] font-extrabold text-slate-400 tracking-wider uppercase">
            Sales Handoff
          </div>
          <div className="space-y-0.5 mt-1 font-medium text-slate-500">
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg opacity-70">
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Commercial Sales</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg opacity-70">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Project Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

