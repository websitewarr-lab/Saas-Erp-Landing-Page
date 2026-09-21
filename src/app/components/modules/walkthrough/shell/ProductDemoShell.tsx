"use client";

import React from "react";
import ProductSidebar from "./ProductSidebar";
import ProductTopbar from "./ProductTopbar";

export default function ProductDemoShell({
  activeModule,
  moduleTitle,
  activeStepId,
  onSelectStep,
  children,
}: {
  activeModule: string;
  moduleTitle: string;
  activeStepId: string;
  onSelectStep?: (stepId: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative rounded-2xl border border-slate-300 shadow-2xl shadow-slate-400/20 bg-white overflow-hidden flex flex-col h-[600px] sm:h-[650px] w-full max-w-full text-slate-800 font-sans">
      {/* Top Application Header */}
      <ProductTopbar moduleTitle={moduleTitle} />

      {/* Main Body (Sidebar + Content Workspace) */}
      <div className="flex-1 flex overflow-hidden relative">
        <ProductSidebar
          activeModule={activeModule}
          activeStepId={activeStepId}
          onSelectStep={onSelectStep}
        />

        {/* Content Workspace Canvas */}
        <main className="flex-1 bg-slate-100 text-slate-900 overflow-hidden relative flex flex-col">
          {children}
        </main>
      </div>
    </div>
  );
}
