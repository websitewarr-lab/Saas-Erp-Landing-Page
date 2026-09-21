"use client";

import React from "react";
import {
  Kanban,
  Users,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Plus,
  Filter,
  TrendingUp,
  ShieldCheck,
  Phone,
  Mail,
  ChevronRight,
  ArrowUpRight,
  Download,
  MessageSquare,
  Sparkles,
  Search,
  Check,
  AlertCircle,
  Clock,
  Briefcase,
  Layers,
  Sliders,
  DollarSign,
  UserCheck,
  FileText,
} from "lucide-react";

export default function CrmScenes({ stepId }: { stepId: string }) {
  // -------------------------------------------------------------
  // Step 1: Executive Dashboard (Exact Replica of Screenshot 2)
  // -------------------------------------------------------------
  if (stepId === "dashboard" || !stepId) {
    return (
      <div className="p-4 sm:p-5 space-y-4 h-full overflow-y-auto bg-slate-100 text-slate-900 font-sans">
        {/* Top Header & Breadcrumb */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-black text-slate-900 tracking-tight">
                CRM Executive Dashboard
              </h2>
              <span className="text-xs text-slate-400 font-medium">
                Home &gt; CRM / Dashboard
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-1.5 shadow-2xs">
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>EXPORT ▾</span>
            </button>
            <button className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-sm">
              <Plus className="w-3.5 h-3.5" />
              <span>NEW LEAD</span>
            </button>
            <button className="px-3 py-1.5 rounded-lg border border-blue-300 bg-blue-50/50 hover:bg-blue-100 text-blue-700 text-xs font-bold flex items-center gap-1.5">
              <Plus className="w-3.5 h-3.5" />
              <span>NEW DEAL</span>
            </button>
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold">
              KANBAN
            </button>
            <button className="px-3 py-1.5 rounded-lg border border-amber-300 bg-amber-50/60 hover:bg-amber-100 text-amber-800 text-xs font-bold flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
              <span>WHATSAPP SETUP</span>
            </button>
          </div>
        </div>

        {/* Global Filter Bar */}
        <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1">
            <div>
              <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1">
                TIME PERIOD
              </label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 font-bold focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>This Month</option>
                <option>This Quarter</option>
                <option>This Year</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1">
                SALES REPRESENTATIVE
              </label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 font-bold focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>All Sales Reps</option>
                <option>Amit Sharma</option>
                <option>Priya Nair</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1">
                CATEGORY
              </label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 font-bold focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>All Categories (B2B &amp; B2C)</option>
                <option>Enterprise B2B</option>
                <option>Mid-Market</option>
              </select>
            </div>
          </div>

          <div className="text-right text-[11px] font-bold text-slate-500 md:border-l md:border-slate-200 md:pl-4">
            Data Period: <span className="text-slate-900 font-extrabold">01 Sep 2026 to 30 Sep 2026</span>
          </div>
        </div>

        {/* View Toggle Bar */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <button className="px-4 py-1.5 rounded-lg bg-blue-600 text-white font-extrabold shadow-sm">
              EXECUTIVE OVERVIEW
            </button>
            <button className="px-4 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 font-bold">
              SALES VELOCITY &amp; REPS
            </button>
          </div>
          <div className="text-[11px] text-slate-500 hidden sm:flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>Realtime metrics synced across tenant context</span>
          </div>
        </div>

        {/* 5 KPI Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Card 1 */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
            <div className="flex items-center justify-between text-[11px] font-extrabold text-slate-500 uppercase tracking-tight">
              <span>TOTAL LEADS CAPTURED</span>
              <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Users className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-2xl font-black text-slate-900">2</div>
            <div className="flex items-center gap-1 text-[11px] text-rose-500 font-bold">
              <span className="bg-rose-50 px-1.5 py-0.5 rounded">-88.7%</span>
              <span className="text-slate-400 font-normal">vs previous period</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
            <div className="flex items-center justify-between text-[11px] font-extrabold text-slate-500 uppercase tracking-tight">
              <span>ACTIVE REVENUE PIPELINE</span>
              <div className="w-6 h-6 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <DollarSign className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-2xl font-black text-slate-900">$16,350.00</div>
            <div className="flex items-center gap-1.5 text-[11px]">
              <span className="bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-extrabold">3 Open Deals</span>
              <span className="text-slate-400">Active Opps</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
            <div className="flex items-center justify-between text-[11px] font-extrabold text-slate-500 uppercase tracking-tight">
              <span>CLOSED WON REVENUE</span>
              <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-2xl font-black text-slate-900">$0.00</div>
            <div className="flex items-center gap-1.5 text-[11px]">
              <span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-extrabold">Win Rate 0%</span>
              <span className="text-slate-400">0 Deals Won</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
            <div className="flex items-center justify-between text-[11px] font-extrabold text-slate-500 uppercase tracking-tight">
              <span>QUOTATIONS ISSUED</span>
              <div className="w-6 h-6 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                <FileText className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-2xl font-black text-slate-900">$24,957.00</div>
            <div className="flex items-center gap-1.5 text-[11px]">
              <span className="bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded font-extrabold">2 Sent</span>
              <span className="text-slate-400">0 Pending Approval</span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
            <div className="flex items-center justify-between text-[11px] font-extrabold text-slate-500 uppercase tracking-tight">
              <span className="text-emerald-700">WHATSAPP BOT AUTOMATION</span>
              <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <MessageSquare className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-2xl font-black text-slate-900">0 <span className="text-xs font-normal text-slate-500">Bot Leads</span></div>
            <div className="flex items-center gap-1.5 text-[11px]">
              <span className="bg-emerald-500 text-white px-1.5 py-0.5 rounded font-extrabold">0% Auto-Qualified</span>
              <span className="text-slate-400">24/7 AI Active</span>
            </div>
          </div>
        </div>

        {/* 2 Main Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Funnel Health (5 cols) */}
          <div className="lg:col-span-5 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                Sales Funnel &amp; Stage Health
              </h3>
              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-600 text-[10px] font-extrabold uppercase border border-blue-200">
                Live Conversion
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between text-slate-600 font-bold mb-1">
                  <span>New</span>
                  <span>0 (0%)</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-0 h-full bg-blue-500" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-600 font-bold mb-1">
                  <span>Contacted</span>
                  <span>0 (0%)</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-0 h-full bg-indigo-500" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-600 font-bold mb-1">
                  <span>Qualified</span>
                  <span>0 (0%)</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-0 h-full bg-amber-500" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-600 font-bold mb-1">
                  <span>Quotation</span>
                  <span className="text-purple-700 font-black">2 (100%)</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-purple-600 rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-600 font-bold mb-1">
                  <span>Converted/Won</span>
                  <span className="text-emerald-700 font-black">2 (100%)</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-emerald-500 rounded-full" />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 grid grid-cols-2 text-center text-xs">
              <div>
                <div className="text-[10px] font-extrabold text-slate-400 uppercase">PERIOD CUSTOMERS</div>
                <div className="text-base font-black text-slate-900 mt-0.5">3</div>
              </div>
              <div>
                <div className="text-[10px] font-extrabold text-slate-400 uppercase">PERIOD ACCOUNTS</div>
                <div className="text-base font-black text-slate-900 mt-0.5">3</div>
              </div>
            </div>
          </div>

          {/* Revenue Trend Line Chart (7 cols) */}
          <div className="lg:col-span-7 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm">
                  Revenue &amp; Lead Acquisition Trend
                </h3>
                <p className="text-[11px] text-slate-500">Performance overview for the last 6 months</p>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[10px] font-extrabold border border-emerald-200">
                Realtime Sync
              </span>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-1 bg-blue-600 rounded-full" />
                <span>Leads Created</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-1 bg-emerald-500 rounded-full" />
                <span>Revenue Won ($)</span>
              </div>
            </div>

            {/* Simulated Trend SVG Chart */}
            <div className="h-44 w-full relative pt-2">
              <svg className="w-full h-full" viewBox="0 0 500 150" fill="none">
                {/* Grid horizontal lines */}
                <line x1="0" y1="30" x2="500" y2="30" stroke="#E2E8F0" strokeDasharray="3 3" />
                <line x1="0" y1="75" x2="500" y2="75" stroke="#E2E8F0" strokeDasharray="3 3" />
                <line x1="0" y1="120" x2="500" y2="120" stroke="#E2E8F0" strokeDasharray="3 3" />

                {/* Leads curve (Blue) */}
                <path
                  d="M 20 120 Q 120 130 220 115 T 420 30 T 480 110"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="3"
                />
                <path
                  d="M 20 120 Q 120 130 220 115 T 420 30 T 480 110 L 480 140 L 20 140 Z"
                  fill="url(#blueGrad)"
                  opacity="0.15"
                />

                {/* Revenue Won line (Green) */}
                <path
                  d="M 20 80 L 120 80 L 220 80 L 320 80 L 420 80 L 480 80"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2.5"
                />

                {/* Dots on green line */}
                <circle cx="20" cy="80" r="3.5" fill="#10B981" />
                <circle cx="120" cy="80" r="3.5" fill="#10B981" />
                <circle cx="220" cy="80" r="3.5" fill="#10B981" />
                <circle cx="320" cy="80" r="3.5" fill="#10B981" />
                <circle cx="420" cy="80" r="3.5" fill="#10B981" />
                <circle cx="480" cy="80" r="3.5" fill="#10B981" />

                <defs>
                  <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Month Labels */}
              <div className="flex justify-between text-[10px] text-slate-400 font-mono font-bold px-2 pt-1 border-t border-slate-100">
                <span>Apr 2026</span>
                <span>May 2026</span>
                <span>Jun 2026</span>
                <span>Jul 2026</span>
                <span>Aug 2026</span>
                <span>Sep 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // Step 2: Leads Screen
  // -------------------------------------------------------------
  if (stepId === "leads") {
    return (
      <div className="p-4 sm:p-5 space-y-4 h-full overflow-y-auto bg-slate-100 text-slate-900 font-sans">
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <div>
            <h2 className="text-lg font-black text-slate-900">Lead &amp; Prospect Management</h2>
            <p className="text-xs text-slate-500">Capture, qualify, and route leads to sales reps automatically</p>
          </div>
          <button className="px-3.5 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm">
            <Plus className="w-3.5 h-3.5" />
            <span>Create Lead</span>
          </button>
        </div>

        {/* Lead Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px]">
              <tr>
                <th className="p-3">Company Name</th>
                <th className="p-3">Contact Person</th>
                <th className="p-3">Source</th>
                <th className="p-3">Score</th>
                <th className="p-3">Status</th>
                <th className="p-3">Owner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              <tr>
                <td className="p-3 font-extrabold text-slate-900">Apex Global Systems</td>
                <td className="p-3">Rajesh Mehta</td>
                <td className="p-3"><span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-[10px]">Website</span></td>
                <td className="p-3"><span className="text-emerald-600 font-black">94 Hot</span></td>
                <td className="p-3"><span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-[10px]">Qualified</span></td>
                <td className="p-3">Amit S.</td>
              </tr>
              <tr>
                <td className="p-3 font-extrabold text-slate-900">Mahindra Sona Ltd</td>
                <td className="p-3">Vikas Verma</td>
                <td className="p-3"><span className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded text-[10px]">WhatsApp Bot</span></td>
                <td className="p-3"><span className="text-amber-600 font-black">78 Warm</span></td>
                <td className="p-3"><span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-[10px]">Contacted</span></td>
                <td className="p-3">Priya N.</td>
              </tr>
              <tr>
                <td className="p-3 font-extrabold text-slate-900">Tata Steel Alloys</td>
                <td className="p-3">Sunil Kapoor</td>
                <td className="p-3"><span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px]">LinkedIn</span></td>
                <td className="p-3"><span className="text-blue-600 font-black">88 Hot</span></td>
                <td className="p-3"><span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full text-[10px]">Proposal Sent</span></td>
                <td className="p-3">Amit S.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // Step 3: Deals (Pipeline) Screen
  // -------------------------------------------------------------
  if (stepId === "pipeline" || stepId === "deals") {
    return (
      <div className="p-4 sm:p-5 space-y-4 h-full overflow-y-auto bg-slate-100 text-slate-900 font-sans">
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
          <div>
            <h2 className="text-lg font-black text-slate-900">Deals Pipeline (Kanban)</h2>
            <p className="text-xs text-slate-500">Track deal progression, probabilities, and revenue milestones</p>
          </div>
          <button className="px-3.5 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm">
            <Plus className="w-3.5 h-3.5" />
            <span>Add Deal</span>
          </button>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between text-xs font-extrabold border-b pb-2">
              <span>Qualification (2)</span>
              <span className="text-blue-600 font-mono">$45,000</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1">
              <div className="font-extrabold text-xs">Jindal Power &amp; Steel</div>
              <div className="text-blue-600 font-black text-xs">$25,000</div>
              <div className="text-[10px] text-slate-500">Prob: 40% | Rep: Amit S.</div>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between text-xs font-extrabold border-b pb-2">
              <span>Proposal Sent (2)</span>
              <span className="text-purple-600 font-mono">$85,000</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1">
              <div className="font-extrabold text-xs">Rajasthan Components</div>
              <div className="text-purple-600 font-black text-xs">$60,000</div>
              <div className="text-[10px] text-slate-500">Prob: 75% | Rep: Priya N.</div>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between text-xs font-extrabold border-b pb-2">
              <span>Negotiation (1)</span>
              <span className="text-amber-600 font-mono">$64,000</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1">
              <div className="font-extrabold text-xs">Apex Global Tech</div>
              <div className="text-amber-600 font-black text-xs">$64,000</div>
              <div className="text-[10px] text-slate-500">Prob: 90% | Rep: Amit S.</div>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between text-xs font-extrabold border-b pb-2">
              <span>Closed Won (4)</span>
              <span className="text-emerald-600 font-mono">$180,000</span>
            </div>
            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200 space-y-1">
              <div className="font-extrabold text-xs text-emerald-900">Tata Steel Alloys</div>
              <div className="text-emerald-700 font-black text-xs">$120,000</div>
              <div className="text-[10px] text-emerald-600">Won 12 Sep | Rep: Priya N.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // Default fallback for other steps (accounts, customers, tracker, status, masters)
  // -------------------------------------------------------------
  return (
    <div className="p-4 sm:p-5 space-y-4 h-full overflow-y-auto bg-slate-100 text-slate-900 font-sans">
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between">
        <div>
          <h2 className="text-lg font-black text-slate-900 capitalize">
            CRM - {stepId.replace("_", " ")}
          </h2>
          <p className="text-xs text-slate-500">
            Enterprise workflow and master record management
          </p>
        </div>
        <button className="px-3.5 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-bold">
          Configure {stepId}
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-sm text-slate-900">Active Operational Module</h3>
            <p className="text-xs text-slate-500">Connected to central enterprise database with real-time audit logging.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
