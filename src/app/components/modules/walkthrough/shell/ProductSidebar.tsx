"use client";

import React from "react";
import {
  Users,
  Building2,
  PieChart,
  Target,
  ShoppingCart,
  Boxes,
  Truck,
  Factory,
  Calculator,
  UserCheck,
  FolderGit2,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  CheckSquare,
  FileSpreadsheet,
  Home,
  LayoutGrid,
  Settings,
  Layers,
  FileText,
  Activity,
  SlidersHorizontal,
} from "lucide-react";

export default function ProductSidebar({
  activeModule,
  activeStepId,
  onSelectStep,
}: {
  activeModule: string;
  activeStepId: string;
  onSelectStep?: (stepId: string) => void;
}) {
  const isCrm = activeModule === "crm";

  // CRM Module Specific Sidebar
  if (isCrm) {
    return (
      <aside className="w-56 bg-slate-50 text-slate-700 flex flex-col border-r border-slate-200 text-xs shrink-0 select-none hidden md:flex font-sans">
        {/* Workspace section */}
        <div className="p-3 border-b border-slate-200">
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">
            WORKSPACE
          </div>
          <div className="space-y-1">
            <button
              onClick={() => onSelectStep?.("dashboard")}
              className={`w-full text-left px-2.5 py-1.5 rounded-lg font-semibold flex items-center gap-2 text-xs transition-colors ${
                activeStepId === "dashboard"
                  ? "bg-blue-50 text-blue-600 font-bold border-l-4 border-blue-600"
                  : "text-slate-700 hover:bg-slate-200/60"
              }`}
            >
              <Home className="w-3.5 h-3.5 text-slate-500" />
              <span>Executive Dashboard</span>
            </button>
            <div className="w-full text-left px-2.5 py-1.5 rounded-lg text-slate-500 flex items-center gap-2 text-xs">
              <LayoutGrid className="w-3.5 h-3.5 text-slate-400" />
              <span>Tenant Console</span>
            </div>
          </div>
        </div>

        {/* Module specific section */}
        <div className="p-3 flex-1 overflow-y-auto space-y-3">
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-1">
            REVENUE CYCLE
          </div>

          <div className="space-y-1">
            {/* CRM Executive Dashboard */}
            <button
              onClick={() => onSelectStep?.("dashboard")}
              className={`w-full text-left px-2.5 py-1.5 rounded-lg font-bold flex items-center justify-between text-xs transition-colors ${
                activeStepId === "dashboard"
                  ? "bg-blue-50 text-blue-600 font-extrabold border-l-4 border-blue-600"
                  : "text-slate-700 hover:bg-slate-200/60"
              }`}
            >
              <div className="flex items-center gap-2">
                <Target className="w-3.5 h-3.5 text-blue-600" />
                <span>CRM Executive Dashboard</span>
              </div>
            </button>

            {/* CRM Dropdown Section */}
            <div className="pt-1">
              <div className="px-2.5 py-1 text-[11px] font-bold text-slate-900 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  <span>CRM</span>
                </div>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>

              {/* Sub items */}
              <div className="pl-4 space-y-0.5 mt-0.5 border-l-2 border-slate-200 ml-3">
                <button
                  onClick={() => onSelectStep?.("leads")}
                  className={`w-full text-left px-2.5 py-1 rounded text-xs block transition-colors ${
                    activeStepId === "leads"
                      ? "text-blue-600 font-bold bg-blue-50/80"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  Leads
                </button>
                <button
                  onClick={() => onSelectStep?.("pipeline")}
                  className={`w-full text-left px-2.5 py-1 rounded text-xs block transition-colors ${
                    activeStepId === "pipeline"
                      ? "text-blue-600 font-bold bg-blue-50/80"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  Deals (Pipeline)
                </button>
                <button
                  onClick={() => onSelectStep?.("accounts")}
                  className={`w-full text-left px-2.5 py-1 rounded text-xs block transition-colors ${
                    activeStepId === "accounts"
                      ? "text-blue-600 font-bold bg-blue-50/80"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  Accounts (Companies)
                </button>
                <button
                  onClick={() => onSelectStep?.("customers")}
                  className={`w-full text-left px-2.5 py-1 rounded text-xs block transition-colors ${
                    activeStepId === "customers"
                      ? "text-blue-600 font-bold bg-blue-50/80"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  Customers
                </button>
                <button
                  onClick={() => onSelectStep?.("tracker")}
                  className={`w-full text-left px-2.5 py-1 rounded text-xs block transition-colors ${
                    activeStepId === "tracker"
                      ? "text-blue-600 font-bold bg-blue-50/80"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  Activities
                </button>
                <button
                  onClick={() => onSelectStep?.("status")}
                  className={`w-full text-left px-2.5 py-1 rounded text-xs block transition-colors ${
                    activeStepId === "status"
                      ? "text-blue-600 font-bold bg-blue-50/80"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  Track Status
                </button>
              </div>
            </div>

            {/* CRM Masters */}
            <button
              onClick={() => onSelectStep?.("masters")}
              className={`w-full text-left px-2.5 py-1.5 rounded-lg font-bold flex items-center justify-between text-xs transition-colors ${
                activeStepId === "masters"
                  ? "bg-blue-50 text-blue-600 font-extrabold border-l-4 border-blue-600"
                  : "text-slate-700 hover:bg-slate-200/60"
              }`}
            >
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
                <span>CRM Masters</span>
              </div>
            </button>

            <div className="px-2.5 py-1.5 text-slate-500 font-medium flex items-center gap-2 text-xs">
              <CheckSquare className="w-3.5 h-3.5 text-slate-400" />
              <span>Approvals</span>
            </div>
            <div className="px-2.5 py-1.5 text-slate-500 font-medium flex items-center gap-2 text-xs">
              <FolderGit2 className="w-3.5 h-3.5 text-slate-400" />
              <span>Projects</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-2.5 border-t border-slate-200 bg-white flex items-center justify-between text-[10px] text-slate-500 font-medium">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>CRM Sync Active</span>
          </div>
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
        </div>
      </aside>
    );
  }

  // Default Generic Light Sidebar for other modules
  return (
    <aside className="w-56 bg-slate-50 text-slate-700 flex flex-col border-r border-slate-200 text-xs shrink-0 select-none hidden md:flex font-sans">
      <div className="p-3 border-b border-slate-200">
        <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">
          WORKSPACE
        </div>
        <div className="space-y-1">
          <div className="px-2.5 py-1.5 rounded-lg text-slate-800 font-semibold flex items-center gap-2 text-xs bg-slate-200/60">
            <Home className="w-3.5 h-3.5 text-blue-600" />
            <span className="capitalize">{activeModule} Dashboard</span>
          </div>
        </div>
      </div>

      <div className="p-3 flex-1 overflow-y-auto space-y-3">
        <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-1">
          MODULE OPERATIONS
        </div>
        <div className="space-y-1">
          <button
            onClick={() => onSelectStep?.("step-1")}
            className="w-full text-left px-2.5 py-1.5 rounded-lg font-bold flex items-center gap-2 text-xs bg-blue-50 text-blue-600 border-l-4 border-blue-600"
          >
            <Activity className="w-3.5 h-3.5" />
            <span className="capitalize">{activeModule} Management</span>
          </button>
          <div className="px-2.5 py-1.5 text-slate-600 font-medium flex items-center gap-2 text-xs">
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>Reports &amp; Analytics</span>
          </div>
          <div className="px-2.5 py-1.5 text-slate-600 font-medium flex items-center gap-2 text-xs">
            <Settings className="w-3.5 h-3.5 text-slate-400" />
            <span>Module Masters</span>
          </div>
        </div>
      </div>

      <div className="p-2.5 border-t border-slate-200 bg-white flex items-center justify-between text-[10px] text-slate-500 font-medium">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Live Workspace</span>
        </div>
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
      </div>
    </aside>
  );
}
