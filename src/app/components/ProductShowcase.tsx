"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Target,
  Boxes,
  ShoppingCart,
  TrendingUp,
  Factory,
  FolderKanban,
  ReceiptText,
  Check,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Settings2,
} from "lucide-react";

interface ShowcaseActivity {
  title: string;
  desc: string;
  status: string;
  color: string;
}

interface ShowcaseTabItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  navIndex: number;
  title: string;
  description: string;
  bullets: string[];
  ctaText: string;
  link: string;
  mockupLabel: string;
  metric: string;
  metricLabel: string;
  secondary: string;
  accent: string;
  metric2: { label: string; value: string; secondary: string; accent: string };
  metric3: { label: string; value: string; secondary: string; accent: string };
  chart: { title: string; yAxis: string[]; data: number[] };
  activities: ShowcaseActivity[];
  capacity: string;
  approvals: number;
  copilotPrompt: string;
}

const SHOWCASE_TABS: ShowcaseTabItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    navIndex: 0,
    title: "Operations & Business Pulse",
    description:
      "A live view of the signals your business runs on — revenue, cash runway, orders, and team capacity connected in real time.",
    bullets: [
      "Real-time revenue, cash runway, and order fulfillment signals",
      "Natural language queries to surface operational anomalies across departments",
      "Instant drill-down into open invoices, POs, and team capacity",
    ],
    ctaText: "Explore Operations Suite",
    link: "/modules/accounting",
    mockupLabel: "Operations overview",
    metric: "$128.4k",
    metricLabel: "Revenue this month",
    secondary: "+12.6% vs last month",
    accent: "blue",
    metric2: { label: "Orders this week", value: "1,204", secondary: "+8.4% compared to last week", accent: "mint" },
    metric3: { label: "Inventory health", value: "96%", secondary: "8 items need attention", accent: "violet" },
    chart: { title: "Business pulse", yAxis: ["$150k", "$100k", "$50k", "$0"], data: [38, 54, 47, 65, 58, 76, 69, 89, 73, 94] },
    activities: [
      { title: "Invoice #2041", desc: "Finance · 2 min ago", status: "Paid", color: "blue" },
      { title: "Purchase order #882", desc: "Purchasing · 14 min ago", status: "Open", color: "mint" },
      { title: "Payroll run prepared", desc: "People · 38 min ago", status: "Ready", color: "violet" },
    ],
    capacity: "82%",
    approvals: 12,
    copilotPrompt:
      "Summarize today's fulfillment exceptions and recommend staffing adjustments for peak dispatch shifts.",
  },
  {
    id: "crm",
    label: "CRM",
    icon: Target,
    navIndex: 1,
    title: "Customer Relationship Management",
    description:
      "Track leads, account interactions, deal stages, and customer communications in a unified CRM pipeline.",
    bullets: [
      "Unified 360-degree view of contacts, deals, communications, and order history",
      "Automated lead scoring, stage progression prompts, and assignment rules",
      "Seamless bridge from CRM deals to instant quotation and sales order creation",
    ],
    ctaText: "Explore CRM Suite",
    link: "/modules/crm",
    mockupLabel: "CRM & Deals pipeline",
    metric: "142",
    metricLabel: "Active deal pipeline",
    secondary: "$1.4M total pipeline value",
    accent: "violet",
    metric2: { label: "Win rate", value: "34.8%", secondary: "+4.2% vs last quarter", accent: "mint" },
    metric3: { label: "New leads today", value: "28", secondary: "High intent qualified", accent: "blue" },
    chart: { title: "Deal conversions", yAxis: ["$200k", "$150k", "$100k", "$0"], data: [42, 58, 50, 72, 64, 85, 78, 92, 88, 96] },
    activities: [
      { title: "Apex Tech deal", desc: "Enterprise · 8 min ago", status: "Proposal", color: "blue" },
      { title: "New lead assigned", desc: "Inbound · 22 min ago", status: "Contacted", color: "mint" },
      { title: "Contract sent", desc: "Mid-market · 1 hr ago", status: "Pending", color: "amber" },
    ],
    capacity: "88%",
    approvals: 4,
    copilotPrompt:
      "Identify high-value leads with stalled activity over 7 days and draft custom re-engagement emails.",
  },
  {
    id: "inventory",
    label: "Inventory",
    icon: Boxes,
    navIndex: 2,
    title: "Warehouse & Stock Control",
    description:
      "Spot low stock, stock movements, batch tracking, and multi-location warehouse needs before they become blockers.",
    bullets: [
      "Real-time multi-warehouse stock tracking with barcode scanning integration",
      "Automated reorder point alerts and supplier purchase order triggers",
      "Batch, lot, and serial number tracking with full expiration control",
    ],
    ctaText: "Explore Inventory Suite",
    link: "/modules/inventory",
    mockupLabel: "Warehouse stock control",
    metric: "98.4%",
    metricLabel: "Stock availability",
    secondary: "6 items below safety threshold",
    accent: "amber",
    metric2: { label: "Fulfillment rate", value: "99.1%", secondary: "On-time order dispatch", accent: "mint" },
    metric3: { label: "In-transit valuation", value: "$68.5k", secondary: "4 incoming shipments", accent: "blue" },
    chart: { title: "Stock movement", yAxis: ["2k", "1.5k", "1k", "0"], data: [65, 60, 75, 70, 85, 80, 92, 88, 95, 98] },
    activities: [
      { title: "Stock restocked", desc: "Warehouse Alpha · 10 min ago", status: "Complete", color: "mint" },
      { title: "Low stock alert", desc: "SKU-8042 · 30 min ago", status: "Warning", color: "amber" },
      { title: "Cargo received", desc: "Bay 2 · 1 hr ago", status: "Verified", color: "blue" },
    ],
    capacity: "76%",
    approvals: 6,
    copilotPrompt:
      "Forecast warehouse replenishment for top SKUs based on projected 30-day order velocity.",
  },
  {
    id: "purchase",
    label: "Purchase",
    icon: ShoppingCart,
    navIndex: 3,
    title: "Procurement & Vendor Management",
    description:
      "Streamline purchase requisitions, PO approvals, vendor evaluations, and 3-way matching in one fluid workflow.",
    bullets: [
      "Automated purchase order generation based on min-max inventory triggers",
      "3-way matching connecting purchase orders, goods receipts, and vendor bills",
      "Vendor performance scorecards tracking lead times, pricing, and compliance",
    ],
    ctaText: "Explore Procurement Suite",
    link: "/modules/purchase",
    mockupLabel: "Procurement control",
    metric: "$64.8k",
    metricLabel: "Pending PO value",
    secondary: "18 active orders",
    accent: "blue",
    metric2: { label: "On-time vendor delivery", value: "94.2%", secondary: "+1.8% vendor rating", accent: "mint" },
    metric3: { label: "Approved requisitions", value: "32", secondary: "Ready for PO issuance", accent: "violet" },
    chart: { title: "Procurement spend", yAxis: ["$100k", "$75k", "$50k", "$0"], data: [50, 42, 60, 55, 70, 68, 80, 75, 88, 92] },
    activities: [
      { title: "PO #4029 issued", desc: "Steel Corp · 12 min ago", status: "Issued", color: "blue" },
      { title: "Goods receipt note", desc: "Dock 1 · 40 min ago", status: "Received", color: "mint" },
      { title: "Vendor bill match", desc: "Accounts Payable · 2 hrs ago", status: "Matched", color: "violet" },
    ],
    capacity: "92%",
    approvals: 8,
    copilotPrompt:
      "Compare supplier prices for raw materials over the last quarter and flag any cost inflation above 5%.",
  },
  {
    id: "sales",
    label: "Sales",
    icon: TrendingUp,
    navIndex: 4,
    title: "Sales Orders & Revenue Operations",
    description:
      "Convert quotes to sales orders instantly, manage customer pricing tiers, and track revenue delivery effortlessly.",
    bullets: [
      "Instant quotation-to-sales-order conversion with dynamic pricing rules",
      "Multi-channel sales aggregation across B2B portals, direct reps, and e-commerce",
      "Automated credit limits, discount approval gates, and invoicing triggers",
    ],
    ctaText: "Explore Sales Suite",
    link: "/modules/sales",
    mockupLabel: "Sales & Orders workspace",
    metric: "$184.5k",
    metricLabel: "Sales booked this month",
    secondary: "+18.4% target achievement",
    accent: "mint",
    metric2: { label: "Active sales orders", value: "342", secondary: "92% in fulfillment", accent: "blue" },
    metric3: { label: "Average order value", value: "$2,450", secondary: "+5.2% vs last month", accent: "amber" },
    chart: { title: "Sales trend", yAxis: ["$250k", "$180k", "$100k", "$0"], data: [45, 55, 62, 70, 68, 84, 79, 90, 88, 98] },
    activities: [
      { title: "Order #SO-992", desc: "Global Logistics · 5 min ago", status: "Booked", color: "mint" },
      { title: "Quote approved", desc: "Industrial Supplies · 18 min ago", status: "Approved", color: "blue" },
      { title: "Invoice generated", desc: "Billing · 1 hr ago", status: "Sent", color: "violet" },
    ],
    capacity: "94%",
    approvals: 3,
    copilotPrompt:
      "Analyze top customer purchasing patterns this month and suggest cross-selling opportunities for key accounts.",
  },
  {
    id: "production",
    label: "Production",
    icon: Factory,
    navIndex: 5,
    title: "Manufacturing & Production Planning",
    description:
      "Master Work Orders, Bill of Materials (BOM), shop floor scheduling, and material requirements planning (MRP).",
    bullets: [
      "Multi-level Bill of Materials (BOM) management with precise cost roll-ups",
      "Shop floor work order dispatch, machine load balancing, and stage tracking",
      "Automated MRP calculation forecasting component shortages before runs",
    ],
    ctaText: "Explore Production Suite",
    link: "/modules/production",
    mockupLabel: "Shop floor & MRP engine",
    metric: "94.6%",
    metricLabel: "OEE Efficiency",
    secondary: "+3.1% plant performance",
    accent: "violet",
    metric2: { label: "Active Work Orders", value: "48", secondary: "Line A & B operational", accent: "blue" },
    metric3: { label: "Material readiness", value: "98%", secondary: "Zero component bottlenecks", accent: "mint" },
    chart: { title: "Production output", yAxis: ["5k units", "3.5k", "2k", "0"], data: [52, 60, 58, 72, 70, 82, 78, 88, 84, 95] },
    activities: [
      { title: "WO #7021 started", desc: "Line A · 15 min ago", status: "In Progress", color: "violet" },
      { title: "BOM revision v3.2", desc: "Engineering · 45 min ago", status: "Released", color: "blue" },
      { title: "Quality check pass", desc: "Batch #B44 · 1 hr ago", status: "Passed", color: "mint" },
    ],
    capacity: "91%",
    approvals: 5,
    copilotPrompt:
      "Audit machine utilization on Production Line B and optimize sequence for upcoming high-priority work orders.",
  },
  {
    id: "project",
    label: "Project",
    icon: FolderKanban,
    navIndex: 6,
    title: "Project Management & Professional Services",
    description:
      "Plan milestones, track resource capacity, record billable hours, and monitor project profitability live.",
    bullets: [
      "Gantt & Kanban views with automated milestone dependency tracking",
      "Time logging & resource utilization dashboards linked to payroll and billing",
      "Project budget vs actual expenditure analysis with real-time margin alerts",
    ],
    ctaText: "Explore Project Suite",
    link: "/modules/project",
    mockupLabel: "Project management hub",
    metric: "38",
    metricLabel: "Active projects",
    secondary: "92% delivered on schedule",
    accent: "blue",
    metric2: { label: "Billable utilization", value: "86.4%", secondary: "+4.1% team efficiency", accent: "mint" },
    metric3: { label: "Project margin", value: "38.2%", secondary: "Healthy profitability", accent: "violet" },
    chart: { title: "Project progress", yAxis: ["100%", "75%", "50%", "0"], data: [40, 52, 60, 68, 75, 80, 84, 88, 92, 96] },
    activities: [
      { title: "Milestone 3 complete", desc: "ERP Implementation · 10 min ago", status: "Achieved", color: "mint" },
      { title: "Timesheet submitted", desc: "Consulting · 30 min ago", status: "Approved", color: "blue" },
      { title: "Budget review", desc: "Project Alpha · 2 hrs ago", status: "On Track", color: "violet" },
    ],
    capacity: "84%",
    approvals: 7,
    copilotPrompt:
      "Generate a project status report for client accounts highlighting milestone completion rates and billable hours.",
  },
  {
    id: "accounting",
    label: "Accounting",
    icon: ReceiptText,
    navIndex: 7,
    title: "Financial Accounting & General Ledger",
    description:
      "Close financial books faster with automated GL entries, bank reconciliations, multi-currency ledger, and audit trails.",
    bullets: [
      "Automated Double-Entry General Ledger synchronized across all operational transactions",
      "Instant bank reconciliation with automated rule matching and statement feeds",
      "Multi-entity financial consolidation, P&L, Balance Sheet, and Trial Balance reporting",
    ],
    ctaText: "Explore Accounting Suite",
    link: "/modules/accounting",
    mockupLabel: "Financial accounting GL",
    metric: "$412.8k",
    metricLabel: "Monthly GL balance",
    secondary: "Clean reconciliation score",
    accent: "mint",
    metric2: { label: "Open receivables", value: "$84.2k", secondary: "42 invoices tracking", accent: "blue" },
    metric3: { label: "Payables due", value: "$32.4k", secondary: "Scheduled for payout", accent: "amber" },
    chart: { title: "Financial ledger", yAxis: ["$500k", "$350k", "$200k", "$0"], data: [55, 62, 70, 68, 80, 78, 88, 85, 92, 98] },
    activities: [
      { title: "Journal Entry #108", desc: "GL · 4 min ago", status: "Posted", color: "mint" },
      { title: "Bank recon completed", desc: "Treasury · 25 min ago", status: "Reconciled", color: "blue" },
      { title: "P&L Statement export", desc: "Finance · 1 hr ago", status: "Generated", color: "violet" },
    ],
    capacity: "95%",
    approvals: 14,
    copilotPrompt:
      "Run a balance reconciliation check across bank accounts and flag any unmatched ledger transactions above $1,000.",
  },
];

function LogoMarkCompact() {
  return (
    <img
      src="/images/logo/warrgyizmorsch-logo.png"
      alt="MossiERP Logo"
      className="h-6 w-auto object-contain"
    />
  );
}

export default function ProductShowcase() {
  const [activeTabId, setActiveTabId] = useState<string>("dashboard");
  const tabListRef = useRef<HTMLDivElement>(null);

  const currentTab =
    SHOWCASE_TABS.find((t) => t.id === activeTabId) ?? SHOWCASE_TABS[0];
  const Icon = currentTab.icon;

  const sidebarIcons = [
    LayoutDashboard,
    Target,
    Boxes,
    ShoppingCart,
    TrendingUp,
    Factory,
    FolderKanban,
    ReceiptText,
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (tabListRef.current) {
      const scrollAmount = direction === "left" ? -150 : 150;
      tabListRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (tabListRef.current) {
      const activeEl = tabListRef.current.querySelector<HTMLElement>(".ai-tab-pill.active");
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeTabId]);

  return (
    <section className="ai-showcase-section" id="showcase">
      {/* Top Ambient Radial Glow */}
      <div className="ai-showcase-glow" />

      <div className="ai-showcase-container">
        {/* Section Header */}
        <div className="ai-showcase-header">
          <h2 className="ai-showcase-title">Powerful tools. Simple experience.</h2>
          <p className="ai-showcase-subtitle">
            Switch modules in place — the same connected data, reframed for each team&apos;s day.
          </p>
        </div>

        {/* Desktop Tab Pills Row (Hidden on Smartphone < 768px) */}
        <div className="ai-tab-nav" role="tablist" aria-label="Product modules">
          {SHOWCASE_TABS.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTabId(tab.id)}
                className={`ai-tab-pill ${isActive ? "active" : ""}`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Smartphone Tab Pills Slider with Left/Right Arrows (Visible ONLY on Smartphone < 768px) */}
        <div className="md:hidden relative flex items-center gap-1.5 w-full mb-6 px-1">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            className="w-8.5 h-8.5 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 shrink-0 z-10 active:scale-95 transition-all cursor-pointer"
            aria-label="Previous module"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Touch-Swipable Horizontal Scroll Area */}
          <div
            ref={tabListRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth w-full py-1.5 px-0.5 snap-x snap-mandatory touch-pan-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {SHOWCASE_TABS.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`ai-tab-pill whitespace-nowrap shrink-0 snap-center ${isActive ? "active" : ""}`}
                >
                  <TabIcon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            className="w-8.5 h-8.5 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 shrink-0 z-10 active:scale-95 transition-all cursor-pointer"
            aria-label="Next module"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Main 2-Column Showcase Card */}
        <div className="ai-showcase-card">
          {/* Left Column: Content & Checkpoints */}
          <div className="ai-card-content">
            {/* Gradient Icon Badge */}
            <div className="ai-card-badge">
              <Icon className="w-6 h-6 stroke-[2.2]" />
            </div>

            {/* Title */}
            <h3 className="ai-card-title">{currentTab.title}</h3>

            {/* Description */}
            <p className="ai-card-desc">{currentTab.description}</p>

            {/* Feature Checkpoints */}
            <div className="ai-card-bullets">
              {currentTab.bullets.map((bullet, idx) => (
                <div key={idx} className="ai-bullet-item">
                  <Check className="ai-bullet-icon" strokeWidth={3} />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link href={currentTab.link || "#contact"} className="ai-card-btn">
              <span>{currentTab.ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Right Column: The Original Dashboard UI Mockup ("the old img") */}
          <div className="ai-preview-shell">
            <div className="dashboard-shell dashboard-compact w-full">
              {/* Window Topbar with Live Indicator */}
              <div className="dashboard-topbar">
                <div className="window-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <span>Workspace / {currentTab.mockupLabel}</span>
                <span className="live-status">
                  <b /> Live
                </span>
              </div>

              {/* Dashboard Body with Sidebar and Content */}
              <div className="dashboard-body">
                <aside className="dashboard-sidebar hidden sm:flex" aria-label="Product navigation">
                  <div className="sidebar-brand">
                    <LogoMarkCompact />
                  </div>
                  {sidebarIcons.map((SideIcon, idx) => (
                    <span
                      className={idx === currentTab.navIndex ? "sidebar-icon active" : "sidebar-icon"}
                      key={idx}
                    >
                      <SideIcon />
                    </span>
                  ))}
                  <span className="sidebar-icon sidebar-bottom">
                    <Settings2 />
                  </span>
                </aside>

                <div className="dashboard-content">
                  {/* Dashboard Header */}
                  <div className="dashboard-heading">
                    <div>
                      <span className="dashboard-kicker">Monday, 09 September 2026</span>
                      <h3>{currentTab.mockupLabel}</h3>
                    </div>
                    <span className="dashboard-avatar">RS</span>
                  </div>

                  {/* Metric Cards Grid */}
                  <div className="metric-grid">
                    <div className={`metric-card metric-${currentTab.accent}`}>
                      <span>{currentTab.metricLabel}</span>
                      <strong>{currentTab.metric}</strong>
                      <small>{currentTab.secondary}</small>
                    </div>
                    <div className={`metric-card metric-${currentTab.metric2.accent}`}>
                      <span>{currentTab.metric2.label}</span>
                      <strong>{currentTab.metric2.value}</strong>
                      <small>{currentTab.metric2.secondary}</small>
                    </div>
                    <div className={`metric-card metric-${currentTab.metric3.accent}`}>
                      <span>{currentTab.metric3.label}</span>
                      <strong>{currentTab.metric3.value}</strong>
                      <small>{currentTab.metric3.secondary}</small>
                    </div>
                  </div>

                  {/* Middle Row: Bar Chart & Recent Activity Feed */}
                  <div className="dashboard-grid-row">
                    <div className="dashboard-panel sales-panel">
                      <div className="panel-heading">
                        <strong>{currentTab.chart.title}</strong>
                        <span>
                          Last 12 months <ChevronDown className="w-3 h-3 inline ml-0.5" />
                        </span>
                      </div>
                      <div className="chart">
                        <div className="chart-y">
                          {currentTab.chart.yAxis.map((y) => (
                            <span key={y}>{y}</span>
                          ))}
                        </div>
                        <div className="bars">
                          {currentTab.chart.data.map((height, index) => (
                            <i
                              className={`bar bar-${index + 1}`}
                              key={index}
                              style={{ "--bar-height": `${height}%` } as React.CSSProperties}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="chart-labels">
                        <span>Oct</span>
                        <span>Dec</span>
                        <span>Feb</span>
                        <span>Apr</span>
                        <span>Jun</span>
                        <span>Aug</span>
                      </div>
                    </div>

                    <div className="dashboard-panel activity-panel hidden sm:block">
                      <div className="panel-heading">
                        <strong>Recent activity</strong>
                        <ArrowUpRight className="w-3 h-3" />
                      </div>
                      <div className="activity-list">
                        {currentTab.activities.map((act, i) => (
                          <div key={i}>
                            <span className={`activity-dot dot-${act.color}`} />
                            <p>
                              <b>{act.title}</b>
                              <small>{act.desc}</small>
                            </p>
                            <em>{act.status}</em>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Footer Row */}
                  <div className="dashboard-footer-row hidden sm:flex">
                    <div>
                      <span className="mini-label">Team capacity</span>
                      <strong>{currentTab.capacity}</strong>
                      <span className="progress">
                        <i />
                      </span>
                    </div>
                    <div>
                      <span className="mini-label">Open approvals</span>
                      <strong>{currentTab.approvals}</strong>
                      <span className="approval-pills">
                        {Array.from({ length: Math.min(5, currentTab.approvals) }).map((_, i) => (
                          <i key={i} />
                        ))}
                      </span>
                    </div>
                    <div className="dashboard-footer-note">
                      <Sparkles className="w-3 h-3 text-blue-500 inline mr-1" />
                      Your workspace is up to date
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
