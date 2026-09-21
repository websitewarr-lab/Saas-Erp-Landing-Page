"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  AlertTriangle,
  Layers,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ModuleFeatureWalkthrough from "./modules/walkthrough/ModuleFeatureWalkthrough";
import CrmFeatureShowcase from "./modules/crm/CrmFeatureShowcase";

export interface ModuleFeature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ModulePainPoint {
  title: string;
  description: string;
}

export interface ModuleWorkflowStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface ModuleReport {
  name: string;
  description: string;
  category: string;
}

export interface ModuleDetailData {
  slug: string;
  badge: string;
  title: string;
  subtitle?: string;
  oneLinePromise?: string;
  description: string;
  heroImageLabel?: string;
  metrics?: Array<{ label: string; value: string; change: string }>;
  tableHeaders?: string[];
  tableRows?: Array<{ id: string; col1: string; col2: string; col3: string; status: string; statusColor: string }>;
  benefits?: Array<{ title: string; desc: string }>;
  painPoints?: ModulePainPoint[];
  features?: ModuleFeature[];
  workflowSteps?: ModuleWorkflowStep[];
  integrationFlow?: {
    description: string;
    connectedModules: string[];
  };
  reports?: ModuleReport[];
  ctaPitch?: string;
}

export default function ModuleDetailTemplate({ data }: { data: ModuleDetailData }) {
  const painPoints = data.painPoints || [];
  const features = data.features || [];
  const workflowSteps = data.workflowSteps || [];
  const reports = data.reports || [];
  const connectedModules = data.integrationFlow?.connectedModules || [];
  const integrationDesc = data.integrationFlow?.description || "";
  const oneLinePromise = data.oneLinePromise || data.subtitle || data.description;
  const ctaPitch = data.ctaPitch || "See how Warrgyizmorsch can streamline operations for your team. Schedule a live walkthrough today.";

  return (
    <div className="erp-site min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Global Site Header */}
      <SiteHeader />

      <main>
        {/* SECTION 1: CTA HERO */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-b from-blue-50/80 via-slate-50 to-white border-b border-slate-200/80 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {data.title}
              </h1>

              <p className="text-xl font-bold text-blue-700 leading-snug">
                &ldquo;{oneLinePromise}&rdquo;
              </p>

              <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                {data.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/#contact"
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-blue-600/25 hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center gap-2"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#features"
                  className="px-7 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 font-bold text-sm transition-all shadow-xs"
                >
                  Explore Capabilities
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CENTERED MODULE PRODUCT WALKTHROUGH PREVIEW */}
        <ModuleFeatureWalkthrough moduleSlug={data.slug} />


        {/* SECTION 2: PROBLEM IT SOLVES */}
        {painPoints.length > 0 && (
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-200/80">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold uppercase tracking-widest">
                Problem It Solves
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
                Department challenges eliminated by {data.title}
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Replace manual workarounds, spreadsheets, and disconnected silos with automated ERP governance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {painPoints.map((pain, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 relative overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{pain.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{pain.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 3: KEY FEATURES */}
        {features.length > 0 && (
          <section id="features" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-200/80">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-widest">
                Key Features
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                Built for how your business actually runs
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Benefit-led capabilities designed for operational efficiency, compliance, and real-time visibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feat, idx) => {
                const IconComp = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 transition-all shadow-sm hover:shadow-md space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{feat.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{feat.description}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* SECTION 4: HOW IT WORKS */}
        {workflowSteps.length > 0 && (
          <section className="py-20 bg-white border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-widest">
                  How It Works
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
                  Typical workflow in this module
                </h2>
                <p className="text-slate-600 text-sm mt-2">
                  A step-by-step operational walkthrough from initiation to completion.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {workflowSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                      {step.stepNumber}
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 5: INTEGRATION WITH OTHER MODULES */}
        {integrationDesc && (
          <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 border-b border-slate-200/80">
            <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase">
                  <Layers className="w-3.5 h-3.5" /> Integration With Other Modules
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  Connected Cross-Module Data Flow
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {integrationDesc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center md:justify-end shrink-0">
                {connectedModules.map((mod, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold text-blue-300 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    {mod}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 6: REPORTS / DASHBOARDS FOR THIS MODULE */}
        {reports.length > 0 && (
          <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-200/80">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-widest">
                Reports & Dashboards
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
                Reports produced by this module
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Audit-ready analytics and executive dashboards out-of-the-box.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reports.map((report, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      {report.category}
                    </span>
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{report.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{report.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 7: CTA BAND */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white p-10 lg:p-14 text-center overflow-hidden shadow-2xl shadow-blue-600/20">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                See It In Action
              </h2>
              <p className="text-base text-blue-100 leading-relaxed">
                {ctaPitch}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  href="/#contact"
                  className="px-8 py-4 rounded-xl bg-white text-blue-700 font-extrabold text-sm shadow-xl hover:bg-slate-100 transition-all flex items-center gap-2"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Site Footer */}
      <SiteFooter />
    </div>
  );
}
