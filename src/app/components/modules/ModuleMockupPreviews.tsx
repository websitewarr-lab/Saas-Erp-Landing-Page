"use client";

import React from "react";
import {
  LayoutDashboard,
  Users,
  Building2,
  Target,
  CheckSquare,
  Search,
  Plus,
  ChevronDown,
  BarChart3,
  Briefcase,
  Home,
  ShoppingCart,
  Boxes,
  Receipt,
  UsersRound,
  FolderKanban,
  Factory,
  CheckCircle2,
  Clock,
  TrendingUp,
  Sliders,
  ShieldCheck,
  Truck,
  Layers,
  Cpu,
  FileSpreadsheet,
  FileText,
  DollarSign,
  AlertCircle,
  PackageCheck,
  Wrench,
  UserPlus,
  Calendar,
  Zap,
} from "lucide-react";

// ============================================================================
// 1. CRM DASHBOARD PREVIEW
// ============================================================================
export function CrmMockup() {
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_50px_rgba(99,102,241,0.12)] overflow-hidden text-xs select-none">
      {/* Top Header Bar inside Mockup */}
      <div className="bg-white px-3 py-2 border-b border-slate-200 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
            M
          </div>
          <div className="relative max-w-[140px] hidden sm:block">
            <Search className="w-3 h-3 absolute left-2 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              readOnly
              placeholder="Search deals..."
              className="w-full bg-slate-50 border border-slate-200 rounded-md pl-7 pr-2 py-0.5 text-[10px] text-slate-700 placeholder-slate-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-md border border-slate-200 bg-slate-50 text-[10px] text-slate-700 font-semibold cursor-pointer">
            <span>This Month</span>
            <ChevronDown className="w-2.5 h-2.5 text-slate-500" />
          </div>

          <div className="flex items-center gap-1.5 border-l border-slate-200 pl-2">
            <div className="w-6 h-6 rounded-full bg-purple-600 text-white font-extrabold text-[10px] flex items-center justify-center shadow-xs">
              K
            </div>
            <div className="hidden xl:block text-left leading-tight">
              <div className="font-bold text-slate-900 text-[10px]">Kapil Menaria</div>
              <div className="text-[9px] text-slate-500">Sales Head</div>
            </div>
          </div>

          <button type="button" className="px-2.5 py-1 rounded-md bg-blue-600 text-white text-[10px] font-bold flex items-center gap-1 shadow-xs hover:bg-blue-700 transition-colors">
            <Plus className="w-3 h-3" />
            <span>New Deal</span>
          </button>
        </div>
      </div>

      {/* Main Container with Sidebar + Kanban Board */}
      <div className="flex items-stretch min-h-[340px]">
        {/* Left Sidebar */}
        <div className="w-28 xl:w-32 bg-slate-50/70 border-r border-slate-200 p-2 space-y-1 hidden sm:block shrink-0">
          <div className="px-2 py-1 rounded-md text-slate-600 font-medium text-[10px] flex items-center gap-1.5 hover:bg-slate-100">
            <LayoutDashboard className="w-3 h-3 text-slate-500 shrink-0" />
            <span className="truncate">Dashboard</span>
          </div>
          <div className="px-2 py-1 rounded-md text-slate-600 font-medium text-[10px] flex items-center gap-1.5 hover:bg-slate-100">
            <Users className="w-3 h-3 text-slate-500 shrink-0" />
            <span className="truncate">Leads</span>
          </div>
          <div className="px-2 py-1 rounded-md text-slate-600 font-medium text-[10px] flex items-center gap-1.5 hover:bg-slate-100">
            <Building2 className="w-3 h-3 text-slate-500 shrink-0" />
            <span className="truncate">Accounts</span>
          </div>
          <div className="px-2 py-1 rounded-md bg-blue-50 text-blue-700 font-bold text-[10px] flex items-center gap-1.5 border border-blue-100 shadow-2xs">
            <Target className="w-3 h-3 text-blue-600 shrink-0" />
            <span className="truncate">Deals</span>
          </div>
          <div className="px-2 py-1 rounded-md text-slate-600 font-medium text-[10px] flex items-center gap-1.5 hover:bg-slate-100">
            <CheckSquare className="w-3 h-3 text-slate-500 shrink-0" />
            <span className="truncate">Activities</span>
          </div>
          <div className="px-2 py-1 rounded-md text-slate-600 font-medium text-[10px] flex items-center gap-1.5 hover:bg-slate-100">
            <Briefcase className="w-3 h-3 text-slate-500 shrink-0" />
            <span className="truncate">Tasks</span>
          </div>
          <div className="px-2 py-1 rounded-md text-slate-600 font-medium text-[10px] flex items-center gap-1.5 hover:bg-slate-100">
            <BarChart3 className="w-3 h-3 text-slate-500 shrink-0" />
            <span className="truncate">Reports</span>
          </div>
        </div>

        {/* Right Kanban Board */}
        <div className="flex-1 p-2 sm:p-2.5 bg-[#FAFBFD] overflow-hidden">
          <div className="flex items-center justify-between mb-2 px-0.5">
            <h4 className="font-black text-slate-900 text-xs sm:text-sm">Deals Pipeline</h4>
            <div className="flex items-center gap-1 text-[9.5px] text-slate-500">
              <span>Filter:</span>
              <span className="font-semibold text-slate-700">All Reps</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-1.5 sm:gap-2 w-full">
            {/* Column 1: Qualified */}
            <div className="space-y-1.5 min-w-0">
              <div className="bg-sky-100/70 p-1.5 rounded-md border border-sky-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
                <span className="font-extrabold text-sky-950 text-[9px] sm:text-[9.5px] truncate">Qualified (12)</span>
                <span className="font-extrabold text-sky-800 text-[8.5px] sm:text-[9px] truncate">₹ 2.40Cr</span>
              </div>
              <div className="bg-white p-1.5 sm:p-2 rounded-lg border border-slate-200 shadow-2xs space-y-0.5 hover:border-blue-300 transition-all">
                <div className="font-bold text-slate-900 text-[9.5px] sm:text-[10px] truncate">ABC Tech</div>
                <div className="text-[8.5px] text-slate-500 truncate">IT Services</div>
                <div className="flex justify-between items-center text-[9px] pt-1 border-t border-slate-100">
                  <strong className="text-slate-900 font-extrabold truncate">₹ 25L</strong>
                  <span className="text-slate-400 text-[8px] shrink-0">Oct 12</span>
                </div>
              </div>
              <div className="bg-white p-1.5 sm:p-2 rounded-lg border border-slate-200 shadow-2xs space-y-0.5 hover:border-blue-300 transition-all">
                <div className="font-bold text-slate-900 text-[9.5px] sm:text-[10px] truncate">Sunrise Ind.</div>
                <div className="text-[8.5px] text-slate-500 truncate">Manufacturing</div>
                <div className="flex justify-between items-center text-[9px] pt-1 border-t border-slate-100">
                  <strong className="text-slate-900 font-extrabold truncate">₹ 18L</strong>
                  <span className="text-slate-400 text-[8px] shrink-0">Oct 14</span>
                </div>
              </div>
            </div>

            {/* Column 2: Proposal */}
            <div className="space-y-1.5 min-w-0">
              <div className="bg-indigo-100/70 p-1.5 rounded-md border border-indigo-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
                <span className="font-extrabold text-indigo-950 text-[9px] sm:text-[9.5px] truncate">Proposal (8)</span>
                <span className="font-extrabold text-indigo-800 text-[8.5px] sm:text-[9px] truncate">₹ 1.75Cr</span>
              </div>
              <div className="bg-white p-1.5 sm:p-2 rounded-lg border border-slate-200 shadow-2xs space-y-0.5 hover:border-blue-300 transition-all">
                <div className="font-bold text-slate-900 text-[9.5px] sm:text-[10px] truncate">Global Foods</div>
                <div className="text-[8.5px] text-slate-500 truncate">FMCG</div>
                <div className="flex justify-between items-center text-[9px] pt-1 border-t border-slate-100">
                  <strong className="text-slate-900 font-extrabold truncate">₹ 28L</strong>
                  <span className="text-slate-400 text-[8px] shrink-0">Oct 10</span>
                </div>
              </div>
              <div className="bg-white p-1.5 sm:p-2 rounded-lg border border-slate-200 shadow-2xs space-y-0.5 hover:border-blue-300 transition-all">
                <div className="font-bold text-slate-900 text-[9.5px] sm:text-[10px] truncate">Shree Ent.</div>
                <div className="text-[8.5px] text-slate-500 truncate">Trading</div>
                <div className="flex justify-between items-center text-[9px] pt-1 border-t border-slate-100">
                  <strong className="text-slate-900 font-extrabold truncate">₹ 15L</strong>
                  <span className="text-slate-400 text-[8px] shrink-0">Oct 12</span>
                </div>
              </div>
            </div>

            {/* Column 3: Negotiation */}
            <div className="space-y-1.5 min-w-0">
              <div className="bg-purple-100/70 p-1.5 rounded-md border border-purple-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
                <span className="font-extrabold text-purple-950 text-[9px] sm:text-[9.5px] truncate">Negotiation (6)</span>
                <span className="font-extrabold text-purple-800 text-[8.5px] sm:text-[9px] truncate">₹ 3.10Cr</span>
              </div>
              <div className="bg-white p-1.5 sm:p-2 rounded-lg border border-slate-200 shadow-2xs space-y-0.5 hover:border-blue-300 transition-all">
                <div className="font-bold text-slate-900 text-[9.5px] sm:text-[10px] truncate">Omni Log.</div>
                <div className="text-[8.5px] text-slate-500 truncate">Logistics</div>
                <div className="flex justify-between items-center text-[9px] pt-1 border-t border-slate-100">
                  <strong className="text-slate-900 font-extrabold truncate">₹ 45L</strong>
                  <span className="text-slate-400 text-[8px] shrink-0">Oct 20</span>
                </div>
              </div>
              <div className="bg-white p-1.5 sm:p-2 rounded-lg border border-slate-200 shadow-2xs space-y-0.5 hover:border-blue-300 transition-all">
                <div className="font-bold text-slate-900 text-[9.5px] sm:text-[10px] truncate">Kailash Group</div>
                <div className="text-[8.5px] text-slate-500 truncate">Construction</div>
                <div className="flex justify-between items-center text-[9px] pt-1 border-t border-slate-100">
                  <strong className="text-slate-900 font-extrabold truncate">₹ 60L</strong>
                  <span className="text-slate-400 text-[8px] shrink-0">Oct 22</span>
                </div>
              </div>
            </div>

            {/* Column 4: Won */}
            <div className="space-y-1.5 min-w-0">
              <div className="bg-emerald-100/70 p-1.5 rounded-md border border-emerald-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
                <span className="font-extrabold text-emerald-950 text-[9px] sm:text-[9.5px] truncate">Won (18)</span>
                <span className="font-extrabold text-emerald-800 text-[8.5px] sm:text-[9px] truncate">₹ 4.25Cr</span>
              </div>
              <div className="bg-white p-1.5 sm:p-2 rounded-lg border border-slate-200 shadow-2xs space-y-0.5 hover:border-emerald-300 transition-all">
                <div className="font-bold text-slate-900 text-[9.5px] sm:text-[10px] truncate">Delta Systems</div>
                <div className="text-[8.5px] text-slate-500 truncate">IT Services</div>
                <div className="flex justify-between items-center text-[9px] pt-1 border-t border-slate-100">
                  <strong className="text-slate-900 font-extrabold truncate">₹ 26L</strong>
                  <span className="text-slate-400 text-[8px] shrink-0">Sep 28</span>
                </div>
              </div>
              <div className="bg-white p-1.5 sm:p-2 rounded-lg border border-slate-200 shadow-2xs space-y-0.5 hover:border-emerald-300 transition-all">
                <div className="font-bold text-slate-900 text-[9.5px] sm:text-[10px] truncate">Arcadia Metals</div>
                <div className="text-[8.5px] text-slate-500 truncate">Manufacturing</div>
                <div className="flex justify-between items-center text-[9px] pt-1 border-t border-slate-100">
                  <strong className="text-slate-900 font-extrabold truncate">₹ 75L</strong>
                  <span className="text-slate-400 text-[8px] shrink-0">Sep 25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 2. SALES DASHBOARD PREVIEW
// ============================================================================
export function SalesDashboardPreview() {
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_50px_rgba(99,102,241,0.12)] overflow-hidden text-xs select-none">
      {/* Top Header Bar */}
      <div className="bg-white px-3 py-2 border-b border-slate-200 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-xs">M</div>
          <span className="font-extrabold text-slate-900 text-xs">Sales Orders</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-md border border-slate-200 bg-slate-50 text-[10px] text-slate-700 font-semibold">
            <span>This Quarter</span>
            <ChevronDown className="w-2.5 h-2.5 text-slate-500" />
          </div>
          <button type="button" className="px-2.5 py-1 rounded-md bg-blue-600 text-white text-[10px] font-bold flex items-center gap-1 shadow-xs hover:bg-blue-700">
            <Plus className="w-3 h-3" />
            <span>+ New Sales Order</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex items-stretch min-h-[340px]">
        {/* Sidebar */}
        <div className="w-28 xl:w-32 bg-slate-50/70 border-r border-slate-200 p-2 space-y-1 hidden sm:block shrink-0">
          <div className="px-2 py-1 rounded-md text-slate-600 text-[10px] font-medium hover:bg-slate-100 flex items-center gap-1.5"><LayoutDashboard className="w-3 h-3" /><span>Dashboard</span></div>
          <div className="px-2 py-1 rounded-md text-slate-600 text-[10px] font-medium hover:bg-slate-100 flex items-center gap-1.5"><FileText className="w-3 h-3" /><span>Quotations</span></div>
          <div className="px-2 py-1 rounded-md bg-blue-50 text-blue-700 font-bold text-[10px] flex items-center gap-1.5 border border-blue-100"><ShoppingCart className="w-3 h-3 text-blue-600" /><span>Sales Orders</span></div>
          <div className="px-2 py-1 rounded-md text-slate-600 text-[10px] font-medium hover:bg-slate-100 flex items-center gap-1.5"><Truck className="w-3 h-3" /><span>Challans</span></div>
          <div className="px-2 py-1 rounded-md text-slate-600 text-[10px] font-medium hover:bg-slate-100 flex items-center gap-1.5"><Receipt className="w-3 h-3" /><span>Invoices</span></div>
        </div>

        {/* Main Workspace */}
        <div className="flex-1 p-3 bg-[#FAFBFD] space-y-3">
          {/* Stat Cards */}
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Total Orders</span>
              <div className="text-sm font-black text-slate-900">248</div>
              <span className="text-[8.5px] text-emerald-600 font-bold">↑ 18.4% YTD</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Dispatches</span>
              <div className="text-sm font-black text-slate-900">18 Pending</div>
              <span className="text-[8.5px] text-amber-600 font-bold">Allocated</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Revenue</span>
              <div className="text-sm font-black text-slate-900">₹ 84.5L</div>
              <span className="text-[8.5px] text-blue-600 font-bold">Processed</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Outstanding</span>
              <div className="text-sm font-black text-slate-900">₹ 12.4L</div>
              <span className="text-[8.5px] text-purple-600 font-bold">30 Days SLA</span>
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
            <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-200 flex justify-between text-[9.5px] font-bold text-slate-600">
              <span>ORDER CODE</span><span>CUSTOMER</span><span>STATUS</span><span>VALUE</span>
            </div>
            <div className="divide-y divide-slate-100 text-[9.5px]">
              <div className="px-3 py-2 flex justify-between items-center">
                <span className="font-mono font-bold text-blue-600">#SO-2026-891</span>
                <span className="font-semibold text-slate-800">Reliance Retail</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[8.5px]">Confirmed</span>
                <strong className="text-slate-900 font-extrabold">₹ 14,50,000</strong>
              </div>
              <div className="px-3 py-2 flex justify-between items-center">
                <span className="font-mono font-bold text-blue-600">#SO-2026-892</span>
                <span className="font-semibold text-slate-800">TATA Motors</span>
                <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[8.5px]">Partially Invoiced</span>
                <strong className="text-slate-900 font-extrabold">₹ 28,10,000</strong>
              </div>
              <div className="px-3 py-2 flex justify-between items-center">
                <span className="font-mono font-bold text-blue-600">#SO-2026-893</span>
                <span className="font-semibold text-slate-800">Godrej Consumer</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-bold text-[8.5px]">Shipped</span>
                <strong className="text-slate-900 font-extrabold">₹ 8,90,000</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 3. PURCHASE DASHBOARD PREVIEW
// ============================================================================
export function PurchaseDashboardPreview() {
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_50px_rgba(99,102,241,0.12)] overflow-hidden text-xs select-none">
      <div className="bg-white px-3 py-2 border-b border-slate-200 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-xs">M</div>
          <span className="font-extrabold text-slate-900 text-xs">Procurement Control</span>
        </div>
        <button type="button" className="px-2.5 py-1 rounded-md bg-blue-600 text-white text-[10px] font-bold flex items-center gap-1 shadow-xs hover:bg-blue-700">
          <Plus className="w-3 h-3" />
          <span>+ New Purchase Request</span>
        </button>
      </div>

      <div className="flex items-stretch min-h-[340px]">
        <div className="w-28 xl:w-32 bg-slate-50/70 border-r border-slate-200 p-2 space-y-1 hidden sm:block shrink-0">
          <div className="px-2 py-1 rounded-md text-slate-600 text-[10px] font-medium hover:bg-slate-100 flex items-center gap-1.5"><LayoutDashboard className="w-3 h-3" /><span>Dashboard</span></div>
          <div className="px-2 py-1 rounded-md text-slate-600 text-[10px] font-medium hover:bg-slate-100 flex items-center gap-1.5"><FileText className="w-3 h-3" /><span>Requisitions</span></div>
          <div className="px-2 py-1 rounded-md bg-blue-50 text-blue-700 font-bold text-[10px] flex items-center gap-1.5 border border-blue-100"><Receipt className="w-3 h-3 text-blue-600" /><span>Purchase Orders</span></div>
          <div className="px-2 py-1 rounded-md text-slate-600 text-[10px] font-medium hover:bg-slate-100 flex items-center gap-1.5"><Building2 className="w-3 h-3" /><span>Vendors</span></div>
        </div>

        <div className="flex-1 p-3 bg-[#FAFBFD] space-y-3">
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Requisitions</span>
              <div className="text-sm font-black text-slate-900">14 Pending</div>
              <span className="text-[8.5px] text-blue-600 font-bold">Multi-level SLA</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Active RFQs</span>
              <div className="text-sm font-black text-slate-900">6 Comparative</div>
              <span className="text-[8.5px] text-purple-600 font-bold">Vendor Bids</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Open POs</span>
              <div className="text-sm font-black text-slate-900">22 Issued</div>
              <span className="text-[8.5px] text-emerald-600 font-bold">GRN Sync</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Savings Margin</span>
              <div className="text-sm font-black text-slate-900">14.2% Saved</div>
              <span className="text-[8.5px] text-emerald-600 font-bold">Landed Cost</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
            <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-200 flex justify-between text-[9.5px] font-bold text-slate-600">
              <span>PO NUMBER</span><span>VENDOR</span><span>APPROVAL</span><span>VALUE</span>
            </div>
            <div className="divide-y divide-slate-100 text-[9.5px]">
              <div className="px-3 py-2 flex justify-between items-center">
                <span className="font-mono font-bold text-blue-600">#PO-4091</span>
                <span className="font-semibold text-slate-800">Tata Steel Ltd</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[8.5px]">3-Way Matched</span>
                <strong className="text-slate-900 font-extrabold">₹ 34,20,000</strong>
              </div>
              <div className="px-3 py-2 flex justify-between items-center">
                <span className="font-mono font-bold text-blue-600">#PO-4092</span>
                <span className="font-semibold text-slate-800">Arvind Industrial</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-bold text-[8.5px]">Pending GRN</span>
                <strong className="text-slate-900 font-extrabold">₹ 12,80,000</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 4. INVENTORY DASHBOARD PREVIEW
// ============================================================================
export function InventoryDashboardPreview() {
  const items = [
    { name: "Laptop Pro X1", cat: "Electronics", qty: "250 pcs", status: "In Stock", tone: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { name: "Office Chair", cat: "Furniture", qty: "45 pcs", status: "Low Stock", tone: "bg-amber-50 text-amber-700 border-amber-200" },
    { name: "LED Monitor", cat: "Electronics", qty: "0 pcs", status: "Out of Stock", tone: "bg-rose-50 text-rose-700 border-rose-200" },
    { name: "Printer ZT-200", cat: "Electronics", qty: "120 pcs", status: "In Stock", tone: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { name: "Work Desk", cat: "Furniture", qty: "30 pcs", status: "Low Stock", tone: "bg-amber-50 text-amber-700 border-amber-200" },
    { name: "Mechanical Parts", cat: "Raw Material", qty: "1,250 pcs", status: "In Stock", tone: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { name: "Packaging Box", cat: "Consumables", qty: "560 pcs", status: "In Stock", tone: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { name: "USB Cable", cat: "Electronics", qty: "75 pcs", status: "In Stock", tone: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { name: "Steel Rod", cat: "Raw Material", qty: "0 pcs", status: "Out of Stock", tone: "bg-rose-50 text-rose-700 border-rose-200" },
    { name: "Safety Helmet", cat: "Safety", qty: "90 pcs", status: "In Stock", tone: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { name: "Hand Gloves", cat: "Safety", qty: "200 pcs", status: "In Stock", tone: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { name: "Cleaning Kit", cat: "Consumables", qty: "25 pcs", status: "Low Stock", tone: "bg-amber-50 text-amber-700 border-amber-200" },
  ];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_60px_rgba(37,99,235,0.14)] overflow-hidden text-xs select-none">
      {/* Top Bar */}
      <div className="bg-white px-3 py-2 border-b border-slate-200 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-xs">W</div>
          <div className="relative max-w-[150px] hidden sm:block">
            <Search className="w-3 h-3 absolute left-2 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              readOnly
              placeholder="Search items..."
              className="w-full bg-slate-50 border border-slate-200 rounded-md pl-7 pr-2 py-0.5 text-[10px] text-slate-700 placeholder-slate-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-md border border-slate-200 bg-slate-50 text-[10px] text-slate-700 font-semibold cursor-pointer">
            <span>This Month</span>
            <ChevronDown className="w-2.5 h-2.5 text-slate-500" />
          </div>

          <div className="flex items-center gap-1.5 border-l border-slate-200 pl-2">
            <div className="w-6 h-6 rounded-full bg-purple-600 text-white font-extrabold text-[10px] flex items-center justify-center shadow-xs">
              K
            </div>
            <div className="hidden xl:block text-left leading-tight">
              <div className="font-bold text-slate-900 text-[10px]">Kapil Menaria</div>
              <div className="text-[9px] text-slate-500">Inventory Manager</div>
            </div>
          </div>

          <button type="button" className="px-2.5 py-1 rounded-md bg-blue-600 text-white text-[10px] font-bold flex items-center gap-1 shadow-xs hover:bg-blue-700 transition-colors">
            <Plus className="w-3 h-3" />
            <span>New Item</span>
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex items-stretch min-h-[360px]">
        {/* Sidebar */}
        <div className="w-28 xl:w-32 bg-slate-50/70 border-r border-slate-200 p-2 space-y-1 hidden sm:block shrink-0">
          <div className="px-2 py-1 rounded-md text-slate-600 text-[10px] font-medium hover:bg-slate-100 flex items-center gap-1.5"><LayoutDashboard className="w-3 h-3 text-slate-400" /><span>Dashboard</span></div>
          <div className="px-2 py-1 rounded-md text-slate-600 text-[10px] font-medium hover:bg-slate-100 flex items-center gap-1.5"><ShoppingCart className="w-3 h-3 text-slate-400" /><span>Purchase</span></div>
          <div className="px-2 py-1 rounded-md text-slate-600 text-[10px] font-medium hover:bg-slate-100 flex items-center gap-1.5"><Boxes className="w-3 h-3 text-slate-400" /><span>Sales</span></div>
          <div className="px-2 py-1 rounded-lg bg-amber-50/90 text-amber-700 font-bold text-[10px] flex items-center gap-1.5 border border-amber-200/60 shadow-2xs"><Boxes className="w-3 h-3 text-amber-600" /><span>Inventory</span></div>
          <div className="px-2 py-1 rounded-md text-slate-600 text-[10px] font-medium hover:bg-slate-100 flex items-center gap-1.5"><Building2 className="w-3 h-3 text-slate-400" /><span>Warehouse</span></div>
          <div className="px-2 py-1 rounded-md text-slate-600 text-[10px] font-medium hover:bg-slate-100 flex items-center gap-1.5"><Sliders className="w-3 h-3 text-slate-400" /><span>Adjustments</span></div>
          <div className="px-2 py-1 rounded-md text-slate-600 text-[10px] font-medium hover:bg-slate-100 flex items-center gap-1.5"><FileSpreadsheet className="w-3 h-3 text-slate-400" /><span>Reports</span></div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-3 bg-slate-50/40 space-y-3">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <span className="font-black text-slate-900 text-sm">Inventory Items</span>
              <div className="flex items-center gap-1 ml-2">
                <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white font-extrabold text-[9.5px] shadow-2xs">All Items (1,240)</span>
                <span className="px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 font-bold text-[9.5px] border border-rose-100">Low Stock (32)</span>
                <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-600 font-bold text-[9.5px] border border-red-100 hidden sm:inline-block">Out of Stock (8)</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[9.5px] border border-emerald-100 hidden md:inline-block">Fast Moving (210)</span>
              </div>
            </div>

            <div className="text-[9.5px] text-slate-500 font-medium flex items-center gap-1">
              <span>Filter:</span>
              <span className="font-bold text-slate-700 cursor-pointer flex items-center gap-0.5">All Categories <ChevronDown className="w-2.5 h-2.5 text-slate-400" /></span>
            </div>
          </div>

          {/* Items Grid (4 columns) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {items.map((item, idx) => (
              <div key={idx} className="bg-white p-2 rounded-xl border border-slate-200/80 shadow-2xs flex flex-col justify-between space-y-1">
                <div>
                  <h5 className="font-bold text-slate-900 text-[10.5px] truncate">{item.name}</h5>
                  <p className="text-[9px] text-slate-400 font-medium">{item.cat}</p>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                  <span className="font-black text-slate-900 text-[10px]">{item.qty}</span>
                  <span className={`px-1.5 py-0.5 rounded-md font-bold text-[8.5px] border ${item.tone}`}>{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 5. PRODUCTION DASHBOARD PREVIEW
// ============================================================================
export function ProductionDashboardPreview() {
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_50px_rgba(99,102,241,0.12)] overflow-hidden text-xs select-none">
      <div className="bg-white px-3 py-2 border-b border-slate-200 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-xs">M</div>
          <span className="font-extrabold text-slate-900 text-xs">Shopfloor MES Engine</span>
        </div>
        <button type="button" className="px-2.5 py-1 rounded-md bg-blue-600 text-white text-[10px] font-bold flex items-center gap-1 shadow-xs hover:bg-blue-700">
          <Plus className="w-3 h-3" />
          <span>+ New Production Order</span>
        </button>
      </div>

      <div className="flex items-stretch min-h-[340px]">
        <div className="w-28 xl:w-32 bg-slate-50/70 border-r border-slate-200 p-2 space-y-1 hidden sm:block shrink-0">
          <div className="px-2 py-1 rounded-md text-slate-600 text-[10px] font-medium hover:bg-slate-100 flex items-center gap-1.5"><LayoutDashboard className="w-3 h-3" /><span>Dashboard</span></div>
          <div className="px-2 py-1 rounded-md bg-blue-50 text-blue-700 font-bold text-[10px] flex items-center gap-1.5 border border-blue-100"><Factory className="w-3 h-3 text-blue-600" /><span>Work Orders</span></div>
          <div className="px-2 py-1 rounded-md text-slate-600 text-[10px] font-medium hover:bg-slate-100 flex items-center gap-1.5"><Layers className="w-3 h-3" /><span>Multi BOM</span></div>
        </div>

        <div className="flex-1 p-3 bg-[#FAFBFD] space-y-3">
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Active Orders</span>
              <div className="text-sm font-black text-slate-900">16 Running</div>
              <span className="text-[8.5px] text-emerald-600 font-bold">MRP Verified</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Material Readiness</span>
              <div className="text-sm font-black text-slate-900">94.2% Ready</div>
              <span className="text-[8.5px] text-blue-600 font-bold">Zero Shortage</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Machine OEE</span>
              <div className="text-sm font-black text-slate-900">88.4% OEE</div>
              <span className="text-[8.5px] text-purple-600 font-bold">CNC Press Brake</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Output Today</span>
              <div className="text-sm font-black text-slate-900">1,240 Units</div>
              <span className="text-[8.5px] text-emerald-600 font-bold">On Schedule</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
            <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-200 flex justify-between text-[9.5px] font-bold text-slate-600">
              <span>WO CODE</span><span>PRODUCT</span><span>PROGRESS</span><span>STATUS</span>
            </div>
            <div className="divide-y divide-slate-100 text-[9.5px]">
              <div className="px-3 py-2 flex justify-between items-center">
                <span className="font-mono font-bold text-blue-600">#WO-2026-302</span>
                <span className="font-semibold text-slate-800">Control Panel Box</span>
                <span className="font-bold text-blue-600">380/500 (76%)</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[8.5px]">In Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 6. ACCOUNTING DASHBOARD PREVIEW
// ============================================================================
export function AccountingDashboardPreview() {
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_50px_rgba(99,102,241,0.12)] overflow-hidden text-xs select-none">
      <div className="bg-white px-3 py-2 border-b border-slate-200 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-xs">M</div>
          <span className="font-extrabold text-slate-900 text-xs">General Ledger Control</span>
        </div>
        <button type="button" className="px-2.5 py-1 rounded-md bg-blue-600 text-white text-[10px] font-bold flex items-center gap-1 shadow-xs hover:bg-blue-700">
          <Plus className="w-3 h-3" />
          <span>+ New Voucher</span>
        </button>
      </div>

      <div className="flex items-stretch min-h-[340px]">
        <div className="w-28 xl:w-32 bg-slate-50/70 border-r border-slate-200 p-2 space-y-1 hidden sm:block shrink-0">
          <div className="px-2 py-1 rounded-md text-slate-600 text-[10px] font-medium hover:bg-slate-100 flex items-center gap-1.5"><LayoutDashboard className="w-3 h-3" /><span>Dashboard</span></div>
          <div className="px-2 py-1 rounded-md bg-blue-50 text-blue-700 font-bold text-[10px] flex items-center gap-1.5 border border-blue-100"><BarChart3 className="w-3 h-3 text-blue-600" /><span>Vouchers</span></div>
          <div className="px-2 py-1 rounded-md text-slate-600 text-[10px] font-medium hover:bg-slate-100 flex items-center gap-1.5"><FileText className="w-3 h-3" /><span>GST Returns</span></div>
        </div>

        <div className="flex-1 p-3 bg-[#FAFBFD] space-y-3">
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Gross Margin</span>
              <div className="text-sm font-black text-slate-900">42.8%</div>
              <span className="text-[8.5px] text-emerald-600 font-bold">Real-time P&L</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Working Capital</span>
              <div className="text-sm font-black text-slate-900">₹ 68.4L</div>
              <span className="text-[8.5px] text-blue-600 font-bold">Quick Ratio 1.8</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Cash & Bank</span>
              <div className="text-sm font-black text-slate-900">₹ 1.24 Cr</div>
              <span className="text-[8.5px] text-purple-600 font-bold">Auto-Reconciled</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">GST Compliance</span>
              <div className="text-sm font-black text-slate-900">100% Audit</div>
              <span className="text-[8.5px] text-emerald-600 font-bold">GSTR-1 Ready</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
            <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-200 flex justify-between text-[9.5px] font-bold text-slate-600">
              <span>VOUCHER CODE</span><span>LEDGER</span><span>STATUS</span><span>VALUE</span>
            </div>
            <div className="divide-y divide-slate-100 text-[9.5px]">
              <div className="px-3 py-2 flex justify-between items-center">
                <span className="font-mono font-bold text-blue-600">#VOUCH-8012</span>
                <span className="font-semibold text-slate-800">Sales A/c - West Zone</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[8.5px]">Posted</span>
                <strong className="text-slate-900 font-extrabold">₹ 18,50,000</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 7. HRMS DASHBOARD PREVIEW
// ============================================================================
export function HRMSDashboardPreview() {
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_50px_rgba(99,102,241,0.12)] overflow-hidden text-xs select-none">
      <div className="bg-white px-3 py-2 border-b border-slate-200 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-xs">M</div>
          <span className="font-extrabold text-slate-900 text-xs">People & Payroll</span>
        </div>
        <button type="button" className="px-2.5 py-1 rounded-md bg-blue-600 text-white text-[10px] font-bold flex items-center gap-1 shadow-xs hover:bg-blue-700">
          <Plus className="w-3 h-3" />
          <span>+ Add Employee</span>
        </button>
      </div>

      <div className="flex items-stretch min-h-[340px]">
        <div className="w-28 xl:w-32 bg-slate-50/70 border-r border-slate-200 p-2 space-y-1 hidden sm:block shrink-0">
          <div className="px-2 py-1 rounded-md text-slate-600 text-[10px] font-medium hover:bg-slate-100 flex items-center gap-1.5"><LayoutDashboard className="w-3 h-3" /><span>Dashboard</span></div>
          <div className="px-2 py-1 rounded-md bg-blue-50 text-blue-700 font-bold text-[10px] flex items-center gap-1.5 border border-blue-100"><UsersRound className="w-3 h-3 text-blue-600" /><span>Employees</span></div>
          <div className="px-2 py-1 rounded-md text-slate-600 text-[10px] font-medium hover:bg-slate-100 flex items-center gap-1.5"><Calendar className="w-3 h-3" /><span>Attendance</span></div>
        </div>

        <div className="flex-1 p-3 bg-[#FAFBFD] space-y-3">
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Total Workforce</span>
              <div className="text-sm font-black text-slate-900">342 Active</div>
              <span className="text-[8.5px] text-blue-600 font-bold">Biometric Sync</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Present Today</span>
              <div className="text-sm font-black text-slate-900">318 Staff</div>
              <span className="text-[8.5px] text-emerald-600 font-bold">93% Attendance</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">On Leave</span>
              <div className="text-sm font-black text-slate-900">14 Approved</div>
              <span className="text-[8.5px] text-purple-600 font-bold">Self-Service</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Payroll Status</span>
              <div className="text-sm font-black text-slate-900">Oct Ready</div>
              <span className="text-[8.5px] text-emerald-600 font-bold">Automated PDF</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
            <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-200 flex justify-between text-[9.5px] font-bold text-slate-600">
              <span>EMP CODE</span><span>EMPLOYEE</span><span>DEPT</span><span>ATTENDANCE</span>
            </div>
            <div className="divide-y divide-slate-100 text-[9.5px]">
              <div className="px-3 py-2 flex justify-between items-center">
                <span className="font-mono font-bold text-blue-600">#EMP-1042</span>
                <span className="font-semibold text-slate-800">Ananya Sharma</span>
                <span className="text-slate-600">Engineering</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[8.5px]">Biometric 9:02 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 8. PROJECT DASHBOARD PREVIEW
// ============================================================================
export function ProjectDashboardPreview() {
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_50px_rgba(99,102,241,0.12)] overflow-hidden text-xs select-none">
      <div className="bg-white px-3 py-2 border-b border-slate-200 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-xs">M</div>
          <span className="font-extrabold text-slate-900 text-xs">Project Workspace</span>
        </div>
        <button type="button" className="px-2.5 py-1 rounded-md bg-blue-600 text-white text-[10px] font-bold flex items-center gap-1 shadow-xs hover:bg-blue-700">
          <Plus className="w-3 h-3" />
          <span>+ New Project</span>
        </button>
      </div>

      <div className="flex items-stretch min-h-[340px]">
        <div className="w-28 xl:w-32 bg-slate-50/70 border-r border-slate-200 p-2 space-y-1 hidden sm:block shrink-0">
          <div className="px-2 py-1 rounded-md text-slate-600 text-[10px] font-medium hover:bg-slate-100 flex items-center gap-1.5"><LayoutDashboard className="w-3 h-3" /><span>Dashboard</span></div>
          <div className="px-2 py-1 rounded-md bg-blue-50 text-blue-700 font-bold text-[10px] flex items-center gap-1.5 border border-blue-100"><FolderKanban className="w-3 h-3 text-blue-600" /><span>Projects</span></div>
          <div className="px-2 py-1 rounded-md text-slate-600 text-[10px] font-medium hover:bg-slate-100 flex items-center gap-1.5"><CheckSquare className="w-3 h-3" /><span>Timesheets</span></div>
        </div>

        <div className="flex-1 p-3 bg-[#FAFBFD] space-y-3">
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Active Projects</span>
              <div className="text-sm font-black text-slate-900">12 Projects</div>
              <span className="text-[8.5px] text-emerald-600 font-bold">Gantt Tracked</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Tasks In Progress</span>
              <div className="text-sm font-black text-slate-900">84 Active</div>
              <span className="text-[8.5px] text-blue-600 font-bold">Kanban Sync</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Milestone Due</span>
              <div className="text-sm font-black text-slate-900">3 Next Week</div>
              <span className="text-[8.5px] text-purple-600 font-bold">Billing Ready</span>
            </div>
            <div className="bg-white p-2 rounded-xl border border-slate-200 space-y-0.5">
              <span className="text-[9px] text-slate-500 font-semibold block">Budget Health</span>
              <div className="text-sm font-black text-slate-900">92% On Track</div>
              <span className="text-[8.5px] text-emerald-600 font-bold">Margin +34%</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
            <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-200 flex justify-between text-[9.5px] font-bold text-slate-600">
              <span>PROJECT</span><span>CLIENT</span><span>PROGRESS</span><span>DEADLINE</span>
            </div>
            <div className="divide-y divide-slate-100 text-[9.5px]">
              <div className="px-3 py-2 flex justify-between items-center">
                <span className="font-bold text-blue-600">SaaS Migration</span>
                <span className="font-semibold text-slate-800">Mahindra &amp; Mahindra</span>
                <span className="font-bold text-emerald-600">82% (14/18)</span>
                <span className="text-slate-500">Nov 15</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// DYNAMIC PREVIEW ROUTER
// ============================================================================
export function GenericModuleMockup({ slug, badge }: { slug: string; badge: string }) {
  switch (slug) {
    case "crm":
      return <CrmMockup />;
    case "sales":
      return <SalesDashboardPreview />;
    case "purchase":
      return <PurchaseDashboardPreview />;
    case "inventory":
      return <InventoryDashboardPreview />;
    case "production":
      return <ProductionDashboardPreview />;
    case "accounting":
    case "finance":
      return <AccountingDashboardPreview />;
    case "hrms":
      return <HRMSDashboardPreview />;
    case "project":
      return <ProjectDashboardPreview />;
    default:
      return <CrmMockup />;
  }
}

// ============================================================================
// SALES ANALYTICS WIDGET (LIGHT EMBEDDED PREVIEW FOR HOW IT WORKS SECTION)
// ============================================================================
export function SalesAnalyticsWidget() {
  return (
    <div className="w-full bg-white rounded-2xl border border-indigo-100 p-4 shadow-sm space-y-4 select-none text-xs">
      {/* 4 Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div className="bg-indigo-50/60 p-2.5 rounded-xl border border-indigo-100/60">
          <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Total Leads</div>
          <div className="text-base font-black text-slate-900 mt-0.5">1,482</div>
          <div className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5 mt-0.5">
            <TrendingUp className="w-2.5 h-2.5" /> +18.4%
          </div>
        </div>

        <div className="bg-purple-50/60 p-2.5 rounded-xl border border-purple-100/60">
          <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Pipeline Value</div>
          <div className="text-base font-black text-slate-900 mt-0.5">₹ 4.85 Cr</div>
          <div className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5 mt-0.5">
            <TrendingUp className="w-2.5 h-2.5" /> +12.1%
          </div>
        </div>

        <div className="bg-blue-50/60 p-2.5 rounded-xl border border-blue-100/60">
          <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Win Rate</div>
          <div className="text-base font-black text-slate-900 mt-0.5">64.2%</div>
          <div className="text-[10px] font-bold text-indigo-600 flex items-center gap-0.5 mt-0.5">
            <TrendingUp className="w-2.5 h-2.5" /> +4.5%
          </div>
        </div>

        <div className="bg-sky-50/60 p-2.5 rounded-xl border border-sky-100/60">
          <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Avg Sales Cycle</div>
          <div className="text-base font-black text-slate-900 mt-0.5">14 Days</div>
          <div className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5 mt-0.5">
            <Clock className="w-2.5 h-2.5" /> -3 Days
          </div>
        </div>
      </div>

      {/* Visual Charts Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Line Chart Card (2 cols) */}
        <div className="sm:col-span-2 bg-slate-50/60 p-3 rounded-xl border border-slate-100 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-slate-800 text-[11px]">Monthly Revenue & Growth Trend</span>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-bold">2026 Q3</span>
          </div>

          <div className="h-28 w-full relative pt-2">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
              <defs>
                <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="0" y1="20" x2="300" y2="20" stroke="#E2E8F0" strokeDasharray="3 3" strokeWidth="1" />
              <line x1="0" y1="50" x2="300" y2="50" stroke="#E2E8F0" strokeDasharray="3 3" strokeWidth="1" />
              <line x1="0" y1="75" x2="300" y2="75" stroke="#E2E8F0" strokeWidth="1" />

              {/* Area */}
              <path
                d="M 0 65 Q 50 45, 100 35 T 200 25 T 300 10 L 300 75 L 0 75 Z"
                fill="url(#salesGrad)"
              />

              {/* Line */}
              <path
                d="M 0 65 Q 50 45, 100 35 T 200 25 T 300 10"
                fill="none"
                stroke="#4F46E5"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Data Dots */}
              <circle cx="0" cy="65" r="3" fill="#4F46E5" />
              <circle cx="75" cy="42" r="3" fill="#4F46E5" />
              <circle cx="150" cy="30" r="3" fill="#4F46E5" />
              <circle cx="225" cy="22" r="3" fill="#4F46E5" />
              <circle cx="300" cy="10" r="4" fill="#4F46E5" stroke="#ffffff" strokeWidth="2" />
            </svg>
          </div>

          <div className="flex justify-between text-[9px] text-slate-400 font-semibold pt-1">
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
          </div>
        </div>

        {/* Donut / Breakdown Card (1 col) */}
        <div className="bg-slate-50/60 p-3 rounded-xl border border-slate-100 flex flex-col justify-between">
          <span className="font-bold text-slate-800 text-[11px] mb-1">Lead Sources</span>
          
          <div className="flex items-center justify-center my-1 relative">
            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-indigo-100"
                strokeWidth="4"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-indigo-600"
                strokeDasharray="45, 100"
                strokeWidth="4.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-purple-500"
                strokeDasharray="25, 100"
                strokeDashoffset="-45"
                strokeWidth="4.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-sky-400"
                strokeDasharray="20, 100"
                strokeDashoffset="-70"
                strokeWidth="4.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-[11px] font-black text-slate-900">45%</span>
              <span className="text-[8px] text-slate-400 uppercase font-semibold">Direct</span>
            </div>
          </div>

          <div className="space-y-1 text-[9px] font-medium pt-1">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-indigo-600" /> Direct / Website</span>
              <span className="font-bold text-slate-800">45%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Referrals</span>
              <span className="font-bold text-slate-800">25%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-sky-400" /> Campaigns</span>
              <span className="font-bold text-slate-800">20%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

