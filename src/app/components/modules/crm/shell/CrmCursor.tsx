"use client";

import React from "react";
import { MousePointer2 } from "lucide-react";

export interface CrmCursorPos {
  x: number;
  y: number;
  isClicking?: boolean;
  label?: string;
}

export default function CrmCursor({ position }: { position: CrmCursorPos }) {
  return (
    <div
      className="absolute z-50 pointer-events-none transition-all duration-700 ease-out"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-10%, -10%)",
      }}
    >
      {/* Click ripple animation */}
      {position.isClicking && (
        <span className="absolute -inset-3 rounded-full border-2 border-blue-600 bg-blue-500/20 animate-ping" />
      )}

      <div className="relative flex items-center gap-1.5">
        <MousePointer2 className="w-5 h-5 text-blue-600 fill-blue-600 drop-shadow-md" />

        {position.label && (
          <div className="px-2 py-0.5 rounded-md bg-slate-900 text-white text-[10px] font-extrabold whitespace-nowrap shadow-xl border border-slate-700">
            {position.label}
          </div>
        )}
      </div>
    </div>
  );
}

