"use client";

import React from "react";
import { Boxes, ShieldAlert, CheckCircle2, RotateCcw, Zap } from "lucide-react";

export default function InventoryScenes({ stepId }: { stepId: string }) {
  if (stepId === "dashboard") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
        <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">Multi-Warehouse Bin Capacity & Movement</h4>
        <div className="grid grid-cols-3 gap-3 text-xs flex-1">
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-[10px] text-slate-500 font-bold block">WH-101 (Chakan Plant)</span>
            <span className="font-mono font-bold text-blue-700 text-sm">84% Capacity</span>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-1">
              <div className="bg-blue-600 h-full w-[84%]" />
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-[10px] text-slate-500 font-bold block">WH-102 (Pimpri Hub)</span>
            <span className="font-mono font-bold text-emerald-700 text-sm">62% Capacity</span>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-1">
              <div className="bg-emerald-600 h-full w-[62%]" />
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-[10px] text-slate-500 font-bold block">WH-103 (Transit Store)</span>
            <span className="font-mono font-bold text-purple-700 text-sm">35% Capacity</span>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-1">
              <div className="bg-purple-600 h-full w-[35%]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (stepId === "grn") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">Goods Receipt (GRN) Inbound QC Check</h4>
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5 flex-1">
          <div className="flex items-center justify-between font-bold text-slate-900">
            <span>GRN #GRN-2026-3312 Received</span>
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-mono">100% Inward Cleared</span>
          </div>
          <p className="text-[11px] text-slate-600">Material: Steel Alloy Rods (4140 Grade) • Vendor: Jindal Steel</p>
        </div>
      </div>
    );
  }

  if (stepId === "quarantine") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">Quality Quarantine Bin Management</h4>
        <div className="grid grid-cols-3 gap-2 text-xs flex-1 text-center">
          <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 font-bold text-emerald-900">
            <span>Passed Stock</span>
            <span className="block font-mono text-sm mt-1">2,350 Kg</span>
          </div>
          <div className="p-2 rounded-lg bg-amber-50 border border-amber-300 font-bold text-amber-900">
            <span>Quarantine Bin</span>
            <span className="block font-mono text-sm mt-1">100 Kg</span>
          </div>
          <div className="p-2 rounded-lg bg-rose-50 border border-rose-200 font-bold text-rose-900">
            <span>Rejected / RTV</span>
            <span className="block font-mono text-sm mt-1">50 Kg</span>
          </div>
        </div>
      </div>
    );
  }

  if (stepId === "mrp") {
    return (
      <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">MRP Shortage Auto-Reorder Trigger</h4>
          <button className="px-2.5 py-1 bg-blue-600 text-white font-bold text-xs rounded-lg shadow-xs">Auto PR Trigger</button>
        </div>
        <div className="grid grid-cols-4 gap-2 text-xs text-center flex-1">
          <div className="p-2 rounded bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-500 font-bold block">Required</span>
            <span className="font-mono font-bold text-slate-900 text-sm">2,500 Kg</span>
          </div>
          <div className="p-2 rounded bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-500 font-bold block">Available</span>
            <span className="font-mono font-bold text-slate-900 text-sm">700 Kg</span>
          </div>
          <div className="p-2 rounded bg-slate-50 border border-slate-200">
            <span className="text-[10px] text-slate-500 font-bold block">Incoming PO</span>
            <span className="font-mono font-bold text-slate-900 text-sm">1,000 Kg</span>
          </div>
          <div className="p-2 rounded bg-rose-50 border border-rose-300">
            <span className="text-[10px] text-rose-700 font-bold block">Shortage</span>
            <span className="font-mono font-extrabold text-rose-800 text-sm">800 Kg</span>
          </div>
        </div>
      </div>
    );
  }

  // stepId === "fefo"
  return (
    <div className="space-y-3 h-full flex flex-col bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
      <h4 className="font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-2">Batch, Serial & FEFO Expiry Movement</h4>
      <div className="p-3 bg-purple-50 rounded-xl border border-purple-200 text-xs space-y-1.5 flex-1">
        <div className="flex items-center justify-between font-bold text-purple-900">
          <span>Batch #B-2026-9041 • First-Expiry-First-Out</span>
          <span className="text-purple-700 bg-white px-2 py-0.5 rounded border border-purple-200 font-mono">FEFO Pick Priority #1</span>
        </div>
        <p className="text-[11px] text-purple-700">Mfg Date: Jun 2026 • Expiry Date: Dec 2026 • Bin A-04-12</p>
      </div>
    </div>
  );
}

