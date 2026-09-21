"use client";

import React from "react";
import { Factory, CheckCircle2, Play, Pause, AlertTriangle, Layers, Activity } from "lucide-react";

export default function ProductionScenes({ stepId }: { stepId: string }) {
  if (stepId === "bom") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
        <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">Multi-Level Bill of Materials (BOM) Tree</h4>
        <div className="space-y-1.5 font-mono text-xs flex-1">
          <div className="p-2 rounded bg-slate-900 text-white font-bold flex items-center justify-between">
            <span>📦 Finished Product: Industrial Gearbox 45kW (FG-904)</span>
            <span className="text-[10px] text-blue-400">Qty: 1 Unit</span>
          </div>
          <div className="pl-4 space-y-1 text-slate-700 font-medium text-[11px]">
            <div className="p-1.5 rounded bg-blue-50 border border-blue-200 text-blue-900 font-bold">
              ├── ⚙️ Sub-Assembly A: Hardened Gear Shaft (SA-102)
            </div>
            <div className="pl-6 space-y-1 text-slate-600">
              <div className="p-1 bg-slate-100 rounded">├── 🔩 Raw Alloy Bar 4140 (RM-01) - 4.5 Kg</div>
              <div className="p-1 bg-slate-100 rounded">└── 🔩 Oil Seal Ring 45mm (RM-04) - 2 Pcs</div>
            </div>
            <div className="p-1.5 rounded bg-blue-50 border border-blue-200 text-blue-900 font-bold">
              └── ⚙️ Sub-Assembly B: Aluminum Casing Housing (SA-108)
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (stepId === "readiness") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">Production Order Readiness Checklist</h4>
        <div className="space-y-2 text-xs flex-1">
          <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold">
            <span>✓ Raw Material Inventory Available</span>
            <span className="text-[10px] font-mono">100% Cleared</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold">
            <span>✓ CNC Machining Center 04 Ready</span>
            <span className="text-[10px] font-mono">Calibration OK</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold">
            <span>✓ Station Operator Assigned</span>
            <span className="text-[10px] font-mono">Operator ID: OP-881</span>
          </div>
        </div>
      </div>
    );
  }

  if (stepId === "routing") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">Work Center Machine Routing Flow</h4>
        <div className="grid grid-cols-4 gap-2 text-xs text-center flex-1">
          <div className="p-2 rounded-lg bg-slate-100 border border-slate-200">
            <span className="text-[10px] font-bold text-slate-500 block">Station 01</span>
            <span className="font-bold text-slate-900">Cutting</span>
          </div>
          <div className="p-2 rounded-lg bg-blue-600 text-white font-bold shadow-xs">
            <span className="text-[10px] text-blue-200 block">Station 02</span>
            <span>CNC Machining</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-100 border border-slate-200">
            <span className="text-[10px] font-bold text-slate-500 block">Station 03</span>
            <span className="font-bold text-slate-900">Assembly</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-100 border border-slate-200">
            <span className="text-[10px] font-bold text-slate-500 block">Station 04</span>
            <span className="font-bold text-slate-900">Final QA</span>
          </div>
        </div>
      </div>
    );
  }

  if (stepId === "cockpit") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Shopfloor Operator Cockpit</h4>
          <span className="bg-emerald-500 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full animate-pulse">JOB IN PROGRESS</span>
        </div>
        <div className="p-3 bg-slate-900 text-white rounded-xl space-y-2 text-xs flex-1">
          <div className="flex items-center justify-between font-mono">
            <span>Job Card: JC-2026-8812</span>
            <span className="text-emerald-400 font-bold">Elapsed: 01h 42m</span>
          </div>
          <p className="text-[11px] text-slate-300">Target Qty: 50 Pcs • Completed: 38 Pcs • Scrap Qty: 0 Pcs</p>
        </div>
      </div>
    );
  }

  // stepId === "oee"
  return (
    <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
      <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">Overall Equipment Effectiveness (OEE) Plant KPI</h4>
      <div className="grid grid-cols-4 gap-2 text-xs text-center flex-1">
        <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-[10px] text-slate-500 font-bold block">Availability</span>
          <span className="font-mono font-bold text-blue-700 text-sm">94.2%</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-[10px] text-slate-500 font-bold block">Performance</span>
          <span className="font-mono font-bold text-blue-700 text-sm">89.5%</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-[10px] text-slate-500 font-bold block">Quality</span>
          <span className="font-mono font-bold text-blue-700 text-sm">98.1%</span>
        </div>
        <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-300">
          <span className="text-[10px] text-emerald-700 font-bold block">Overall OEE</span>
          <span className="font-mono font-extrabold text-emerald-900 text-base">82.6%</span>
        </div>
      </div>
    </div>
  );
}

