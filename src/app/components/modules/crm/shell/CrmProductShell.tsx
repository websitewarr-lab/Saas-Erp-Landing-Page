"use client";

import React from "react";
import CrmSidebar from "./CrmSidebar";
import CrmTopbar from "./CrmTopbar";

export default function CrmProductShell({
  activeView,
  activeTitle,
  onNavigate,
  children,
}: {
  activeView: string;
  activeTitle: string;
  onNavigate?: (view: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative rounded-2xl border border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(37,99,235,0.12)] bg-[#0B0F19] overflow-hidden flex flex-col h-[500px] sm:h-[540px] w-full max-w-full">
      {/* Product Window Top Navigation Bar */}
      <CrmTopbar activeTitle={activeTitle} />

      {/* Main Workspace Frame */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* CRM-Only Sidebar */}
        <CrmSidebar activeView={activeView} onNavigate={onNavigate} />

        {/* Dynamic Content Workspace Canvas */}
        <main className="flex-1 bg-[#0B0F19] text-slate-100 overflow-hidden relative p-3 sm:p-4 flex flex-col">
          {children}
        </main>
      </div>
    </div>
  );
}

