"use client";

import React from "react";
import { Sparkles, Layers, CheckCircle2 } from "lucide-react";
import { MODULE_SHOWCASE_DATA, VisualType } from "./moduleShowcaseData";
import {
  CrmKanbanVisual,
  CrmLeadsVisual,
  CrmAccountVisual,
  CrmActivityVisual,
  CrmConversionVisual,
} from "./visuals/CrmShowcaseVisuals";
import {
  SalesQuoteVisual,
  SalesTaxVisual,
  SalesApprovalVisual,
  SalesDispatchVisual,
} from "./visuals/SalesShowcaseVisuals";
import {
  PurchasePrVisual,
  PurchaseRfqVisual,
  PurchaseMatchVisual,
  PurchaseSavingsVisual,
} from "./visuals/PurchaseShowcaseVisuals";
import {
  InventoryStockVisual,
  InventoryInspectionVisual,
  InventoryMrpVisual,
  InventoryBatchVisual,
} from "./visuals/InventoryShowcaseVisuals";
import {
  ProductionBomVisual,
  ProductionRoutingVisual,
  ProductionCockpitVisual,
  ProductionOeeVisual,
} from "./visuals/ProductionShowcaseVisuals";
import {
  AccountingLedgerVisual,
  AccountingReconcileVisual,
  AccountingVoucherVisual,
  AccountingReportsVisual,
} from "./visuals/AccountingShowcaseVisuals";
import {
  HrmsProfileVisual,
  HrmsAttendanceVisual,
  HrmsPayrollVisual,
  HrmsExpenseVisual,
} from "./visuals/HrmsShowcaseVisuals";
import {
  ProjectGanttVisual,
  ProjectUtilizationVisual,
} from "./visuals/ProjectShowcaseVisuals";

function renderFeatureVisual(visualType: VisualType) {
  switch (visualType) {
    case "crm_kanban":
      return <CrmKanbanVisual />;
    case "crm_leads":
      return <CrmLeadsVisual />;
    case "crm_account":
      return <CrmAccountVisual />;
    case "crm_activity":
      return <CrmActivityVisual />;
    case "crm_conversion":
      return <CrmConversionVisual />;

    case "sales_quote":
      return <SalesQuoteVisual />;
    case "sales_tax":
      return <SalesTaxVisual />;
    case "sales_approval":
      return <SalesApprovalVisual />;
    case "sales_dispatch":
      return <SalesDispatchVisual />;

    case "purchase_pr":
      return <PurchasePrVisual />;
    case "purchase_rfq":
      return <PurchaseRfqVisual />;
    case "purchase_match":
      return <PurchaseMatchVisual />;
    case "purchase_savings":
      return <PurchaseSavingsVisual />;

    case "inventory_stock":
      return <InventoryStockVisual />;
    case "inventory_inspection":
      return <InventoryInspectionVisual />;
    case "inventory_mrp":
      return <InventoryMrpVisual />;
    case "inventory_batch":
      return <InventoryBatchVisual />;

    case "production_bom":
      return <ProductionBomVisual />;
    case "production_routing":
      return <ProductionRoutingVisual />;
    case "production_cockpit":
      return <ProductionCockpitVisual />;
    case "production_oee":
      return <ProductionOeeVisual />;

    case "accounting_ledger":
      return <AccountingLedgerVisual />;
    case "accounting_reconcile":
      return <AccountingReconcileVisual />;
    case "accounting_voucher":
      return <AccountingVoucherVisual />;
    case "accounting_reports":
      return <AccountingReportsVisual />;

    case "hrms_profile":
      return <HrmsProfileVisual />;
    case "hrms_attendance":
      return <HrmsAttendanceVisual />;
    case "hrms_payroll":
      return <HrmsPayrollVisual />;
    case "hrms_expense":
      return <HrmsExpenseVisual />;

    case "project_gantt":
      return <ProjectGanttVisual />;
    case "project_utilization":
      return <ProjectUtilizationVisual />;

    default:
      return null;
  }
}

export default function ModuleFeatureShowcase({ moduleSlug }: { moduleSlug: string }) {
  const showcaseItems = MODULE_SHOWCASE_DATA[moduleSlug] || [];

  if (showcaseItems.length === 0) {
    return (
      <section className="py-[15px] bg-[#0B0F17] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-slate-400">
            Project capabilities are being structured to support connected planning, execution, and reporting.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-[15px] bg-[#0B0F17] text-slate-100 overflow-hidden select-none border-b border-slate-800">
      {/* Background Ambient Glow & Grid Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Everything your business needs.<br className="hidden sm:inline" /> In one connected platform.
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Explore the core operational capabilities built for scale, automation, and total enterprise control.
          </p>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-12 gap-6 items-stretch">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              className={`${item.spanClass} rounded-[28px] bg-[#FAFAFC] border border-slate-200/90 p-6 lg:p-8 flex flex-col justify-between text-slate-900 shadow-2xl shadow-black/40 hover:shadow-blue-500/10 transition-all duration-300 group overflow-hidden`}
            >
              {/* Card Text Content */}
              <div className="space-y-3 mb-6">
                <span className="text-[11px] font-mono font-extrabold tracking-widest text-blue-600 uppercase block">
                  {item.category}
                </span>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>

                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200/90 shadow-2xs"
                      >
                        <CheckCircle2 className="w-3 h-3 text-blue-600" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Custom Product UI Visual Preview */}
              <div className="mt-auto w-full pt-2">
                {renderFeatureVisual(item.visualType)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

