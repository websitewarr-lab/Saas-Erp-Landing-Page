"use client";

import React from "react";

interface ERPPreviewLaptopProps {
  children: React.ReactNode;
}

export function ERPPreviewLaptop({ children }: ERPPreviewLaptopProps) {
  return (
    <div className="w-full max-w-[860px] mx-auto relative select-none">
      {/* ========================================================================= */}
      {/* 1. LAPTOP DISPLAY LID / SCREEN ASSEMBLY                                   */}
      {/* ========================================================================= */}
      <div className="relative mx-auto w-[94%] bg-[#0B0F19] p-2 sm:p-3 rounded-t-[20px] border-t border-x border-slate-700/80 shadow-[0_25px_60px_rgba(15,23,42,0.35)]">
        {/* Top Bezel Center Camera Dot & Sensor */}
        <div className="flex items-center justify-center gap-1.5 pb-1 sm:pb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
            <div className="w-0.5 h-0.5 rounded-full bg-[#1E293B]" />
          </div>
          <div className="w-1 h-1 rounded-full bg-emerald-500/80 animate-pulse" />
        </div>

        {/* Display Glass Bezel Inner Screen Frame */}
        <div className="relative w-full bg-[#0F172A] rounded-lg overflow-hidden border border-slate-800/90 aspect-[16/10] sm:aspect-[16/9.8] flex flex-col">
          {/* Inner Dashboard View Container */}
          <div className="w-full h-full overflow-y-auto overflow-x-hidden scrollbar-none">
            {children}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. LAPTOP HINGE & LOWER ALUMINUM BASE DECK                               */}
      {/* ========================================================================= */}
      <div className="relative w-full">
        {/* Hinge Barrel Layer */}
        <div className="mx-auto w-[24%] h-[4px] bg-[#1E293B] rounded-t-sm shadow-inner" />

        {/* Aluminum Base Deck Face (Perspectived angled lip) */}
        <div className="w-full h-3 sm:h-4 bg-gradient-to-b from-[#94A3B8] via-[#64748B] to-[#475569] rounded-b-xl border-t border-slate-400/50 shadow-lg flex items-center justify-center relative">
          {/* Center Thumb Notch */}
          <div className="w-14 sm:w-20 h-1 sm:h-1.5 bg-[#334155] rounded-b-md shadow-inner" />
        </div>

        {/* Ground Reflection & Soft Ambient Drop Shadow */}
        <div className="w-[96%] h-4 mx-auto bg-slate-950/25 blur-md rounded-full -mt-1 pointer-events-none" />
      </div>
    </div>
  );
}
