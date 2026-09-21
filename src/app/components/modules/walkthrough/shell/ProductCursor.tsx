"use client";

import React from "react";
import { MousePointer2 } from "lucide-react";

export interface CursorPosition {
  x: number; // percentage 0 - 100
  y: number; // percentage 0 - 100
  isClicking?: boolean;
  targetLabel?: string;
}

export default function ProductCursor({
  position,
}: {
  position: CursorPosition;
}) {
  return (
    <div
      className="absolute z-50 pointer-events-none transition-all duration-700 ease-out"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-10%, -10%)",
      }}
    >
      {/* Ripple ring on click */}
      {position.isClicking && (
        <span className="absolute -inset-3 rounded-full border-2 border-blue-500 bg-blue-500/20 animate-ping" />
      )}

      {/* Mouse Icon */}
      <div className="relative">
        <MousePointer2 className="w-5 h-5 text-blue-600 fill-blue-600 drop-shadow-md" />
        
        {/* Target Label Tooltip */}
        {position.targetLabel && (
          <div className="absolute left-4 top-4 px-2 py-0.5 rounded bg-slate-900/90 text-white text-[10px] font-bold whitespace-nowrap shadow-lg border border-slate-700">
            {position.targetLabel}
          </div>
        )}
      </div>
    </div>
  );
}

