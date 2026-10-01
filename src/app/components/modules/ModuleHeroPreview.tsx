"use client";

import { Bell, Circle, LayoutDashboard, Search } from "lucide-react";
import type { ModulePageConfig } from "./moduleData";
import FeatureIcon from "./FeatureIcon";
import styles from "./ModuleFeatures.module.css";

interface ModuleHeroPreviewProps {
  config: ModulePageConfig;
  sentinelApproved: boolean;
  onApproveSentinel: () => void;
}

export default function ModuleHeroPreview({
  config,
  sentinelApproved,
  onApproveSentinel,
}: ModuleHeroPreviewProps) {
  const tone = config.edge?.superpowers?.[0]?.visual?.tone || "blue";
  const primaryIcon = config.featuresCatalog?.items?.[0]?.visual?.icon || "chart";

  return (
    <div
      className={styles.heroPreviewContainer}
      data-tone={tone}
      role="region"
      aria-label={`${config.moduleName} Live Operations Preview`}
    >
      <div className={styles.heroPreviewWindow}>
        {/* SaaS Dark Left Sidebar (styled exactly like All Features preview) */}
        <div className={styles.heroSidebar} aria-hidden="true">
          <div className={styles.sidebarBrand}>
            <span>M</span>MossiERP
          </div>
          <div className={styles.sidebarItem}>
            <LayoutDashboard size={14} />
            <span>Overview</span>
          </div>
          <div className={`${styles.sidebarItem} ${styles.sidebarItemActive}`}>
            <FeatureIcon name={primaryIcon} />
            <span>{config.moduleName.replace(/ Management| Solutions| Suite/, "")}</span>
          </div>
          <div className={styles.sidebarItem}>
            <FeatureIcon name="chart" />
            <span>Reports</span>
          </div>
          <div className={styles.sidebarItem}>
            <FeatureIcon name="refresh" />
            <span>Automation</span>
          </div>
          <div className={styles.sidebarItem}>
            <FeatureIcon name="shield" />
            <span>Audit Log</span>
          </div>
          <div className={styles.sidebarStatus}>
            <Circle size={8} />
            <span>Live engine</span>
          </div>
        </div>

        {/* Inner Dashboard Canvas */}
        <div className={styles.heroMainCanvas}>
          {/* Top App Bar */}
          <div className={styles.heroAppBar}>
            <div className={styles.heroSearchBar}>
              <Search size={12} className="text-slate-400 shrink-0" />
              <span>Search {config.moduleName.toLowerCase()} records...</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-500 hover:text-slate-700">
                <Bell size={12} />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-blue-600" />
              </span>
              <span className={styles.heroAvatar}>MS</span>
            </div>
          </div>

          {/* App Heading */}
          <div className={styles.heroAppHeading}>
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase block">
                {config.moduleName} / Live Operations
              </span>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight leading-tight truncate mt-0.5">
                {config.mockup.windowTitle}
              </h4>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[10px] font-bold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {config.mockup.liveBadge}
            </span>
          </div>

          {/* 1. Top Metrics Row */}
          <div className="grid grid-cols-3 gap-2">
            {config.mockup.topMetrics.map((tm, idx) => (
              <div
                key={idx}
                className="bg-white px-2.5 py-2 rounded-xl border border-slate-200/90 shadow-2xs"
              >
                <div className="text-[9px] text-slate-500 font-medium truncate leading-tight">
                  {tm.label}
                </div>
                <div className="text-xs sm:text-sm font-black text-slate-900 font-mono tracking-tight leading-tight my-0.5">
                  {tm.value}
                </div>
                <div className={`text-[8px] leading-tight truncate font-bold ${tm.subColor}`}>
                  {tm.sub}
                </div>
              </div>
            ))}
          </div>

          {/* 2. Interactive Kanban Simulator */}
          <div className="bg-white p-2.5 rounded-xl border border-slate-200/90 shadow-2xs space-y-1.5">
            <div className="flex items-center justify-between text-[10px] pb-1.5 border-b border-slate-100">
              <span className="font-extrabold text-slate-800 flex items-center gap-1.5 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                <span className="truncate">{config.mockup.kanbanTitle}</span>
              </span>
              <span className="text-[9px] text-slate-400 font-mono shrink-0 ml-2">
                {config.mockup.kanbanSubtitle}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 text-left">
              {config.mockup.columns.map((col, idx) => (
                <div
                  key={idx}
                  className={`p-1.5 rounded-lg border space-y-1 ${
                    col.isHighlighted
                      ? "bg-slate-50/80 border-slate-200/70"
                      : idx === 2
                      ? "bg-emerald-50/40 border-emerald-200/60"
                      : "bg-slate-50/80 border-slate-200/70"
                  }`}
                >
                  <div className="text-[8px] font-black text-slate-500 uppercase tracking-wider flex justify-between items-center gap-0.5">
                    <span className="truncate">{col.stageName}</span>
                    <span className="font-mono shrink-0">{col.amount}</span>
                  </div>
                  <div
                    className={`bg-white p-1.5 rounded-md border shadow-2xs space-y-1 ${
                      col.isHighlighted
                        ? "border-blue-400 ring-1 ring-blue-400/20"
                        : idx === 2
                        ? "border-emerald-300"
                        : "border-slate-200"
                    }`}
                  >
                    <div className="text-[9px] font-bold text-slate-900 leading-tight truncate">
                      {col.cardTitle}
                    </div>
                    <div className="text-[8px] text-slate-400 leading-tight truncate">
                      {col.cardDesc}
                    </div>
                    <span
                      className={`inline-block px-1.5 py-0.5 rounded text-[7.5px] font-extrabold leading-none ${col.cardTagStyle}`}
                    >
                      {col.cardTag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Automated Activity Feed with Interactive Sentinel */}
          <div className="bg-white px-2.5 py-1.5 rounded-xl border border-slate-200/90 text-[10px] flex items-center justify-between gap-2 shadow-2xs">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black text-[9px] shrink-0">
                AI
              </span>
              <span className="text-slate-700 font-medium text-[9.5px] truncate">
                {config.mockup.alertText}
              </span>
            </div>
            <button
              type="button"
              onClick={onApproveSentinel}
              className={`px-2.5 py-1 rounded-lg font-bold text-[8.5px] transition-all shrink-0 active:scale-95 cursor-pointer ${
                sentinelApproved
                  ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
              }`}
            >
              {sentinelApproved ? "✓ Dispatched" : config.mockup.alertAction}
            </button>
          </div>

          {/* Bottom Sync Bar */}
          <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-slate-200/60 mt-auto">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live data feed connected
            </span>
            <span className="font-semibold text-slate-500">{config.badge}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
