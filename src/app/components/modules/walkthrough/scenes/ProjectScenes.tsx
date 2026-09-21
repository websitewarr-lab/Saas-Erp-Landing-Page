"use client";

import React from "react";
import { FolderGit2, CheckCircle2, Clock, PieChart, Users } from "lucide-react";

export default function ProjectScenes({ stepId }: { stepId: string }) {
  if (stepId === "gantt") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">Project Milestone Gantt Timeline</h4>
        <div className="space-y-2 text-xs flex-1">
          <div className="p-2 rounded bg-blue-50 border border-blue-200 flex items-center justify-between font-bold text-blue-900">
            <span>Phase 1: System Architecture & Requirements</span>
            <span className="text-[10px] font-mono text-emerald-700 bg-white px-2 py-0.5 rounded">100% DONE</span>
          </div>
          <div className="p-2 rounded bg-amber-50 border border-amber-300 flex items-center justify-between font-bold text-amber-900">
            <span>Phase 2: Custom BOM & Workflow Integration</span>
            <span className="text-[10px] font-mono text-amber-700 bg-white px-2 py-0.5 rounded">65% IN PROGRESS</span>
          </div>
        </div>
      </div>
    );
  }

  if (stepId === "resources") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">Engineering Resource Allocation & Utilization</h4>
        <div className="grid grid-cols-2 gap-3 text-xs flex-1">
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-500 font-bold block">Billable Hours Target</span>
            <span className="font-mono font-bold text-blue-700 text-sm">88.5% Utilization</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-500 font-bold block">Active Senior Engineers</span>
            <span className="font-mono font-bold text-slate-900 text-sm">6 Allocated</span>
          </div>
        </div>
      </div>
    );
  }

  if (stepId === "costing") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">Project Cost Center Budgeting vs Actuals</h4>
        <div className="grid grid-cols-3 gap-2 text-xs text-center flex-1">
          <div className="p-2 rounded bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-500 font-bold block">Approved Budget</span>
            <span className="font-mono font-bold text-slate-900">₹45,00,000</span>
          </div>
          <div className="p-2 rounded bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-500 font-bold block">Actual Cost YTD</span>
            <span className="font-mono font-bold text-blue-700">₹32,10,000</span>
          </div>
          <div className="p-2 rounded bg-emerald-50 border border-emerald-200">
            <span className="text-[10px] text-emerald-700 font-bold block">Remaining Margin</span>
            <span className="font-mono font-bold text-emerald-900">₹12,90,000</span>
          </div>
        </div>
      </div>
    );
  }

  // stepId === "timesheets"
  return (
    <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
      <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">Daily Timesheet Log & Milestone Billing Approval</h4>
      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5 flex-1">
        <div className="flex items-center justify-between font-bold text-slate-900">
          <span>Timesheet #TS-2026-8812 • 40 Hours Logged</span>
          <span className="text-emerald-700 font-mono">Approved for Milestone Invoice</span>
        </div>
        <p className="text-[11px] text-slate-600">Lead Engineer: Rajesh K. • Project: Arvind Industrial Automation Phase 2</p>
      </div>
    </div>
  );
}

