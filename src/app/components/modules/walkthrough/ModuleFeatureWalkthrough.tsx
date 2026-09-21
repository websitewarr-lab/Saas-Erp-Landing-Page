"use client";

import React, { useState, useEffect, useCallback } from "react";
import { moduleWalkthroughDatasets } from "./walkthroughData";
import ProductDemoShell from "./shell/ProductDemoShell";

// Import Scene components
import CrmScenes from "./scenes/CrmScenes";
import SalesScenes from "./scenes/SalesScenes";
import PurchaseScenes from "./scenes/PurchaseScenes";
import InventoryScenes from "./scenes/InventoryScenes";
import ProductionScenes from "./scenes/ProductionScenes";
import AccountingScenes from "./scenes/AccountingScenes";
import HrmsScenes from "./scenes/HrmsScenes";
import ProjectScenes from "./scenes/ProjectScenes";

import { Play, Pause, ChevronRight, ChevronLeft, Sparkles, CheckCircle2 } from "lucide-react";

export default function ModuleFeatureWalkthrough({ moduleSlug }: { moduleSlug: string }) {
  const dataset = moduleWalkthroughDatasets[moduleSlug] || moduleWalkthroughDatasets.crm;
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const currentFeature = dataset.features[activeStepIndex] || dataset.features[0];

  const handleNextStep = useCallback(() => {
    setActiveStepIndex((prev) => (prev + 1) % dataset.features.length);
  }, [dataset.features.length]);

  const handlePrevStep = useCallback(() => {
    setActiveStepIndex((prev) => (prev - 1 + dataset.features.length) % dataset.features.length);
  }, [dataset.features.length]);

  // Handle direct step ID selection (e.g. clicking from sidebar)
  const handleSelectStep = (stepId: string) => {
    const foundIdx = dataset.features.findIndex((f) => f.id === stepId);
    if (foundIdx !== -1) {
      setActiveStepIndex(foundIdx);
    }
  };

  // Auto-play interval
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      handleNextStep();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, handleNextStep]);

  // Helper to render current module scene
  const renderScene = () => {
    switch (moduleSlug) {
      case "crm":
        return <CrmScenes stepId={currentFeature.id} />;
      case "sales":
        return <SalesScenes stepId={currentFeature.id} />;
      case "purchase":
        return <PurchaseScenes stepId={currentFeature.id} />;
      case "inventory":
        return <InventoryScenes stepId={currentFeature.id} />;
      case "production":
        return <ProductionScenes stepId={currentFeature.id} />;
      case "accounting":
        return <AccountingScenes stepId={currentFeature.id} />;
      case "hrms":
        return <HrmsScenes stepId={currentFeature.id} />;
      case "project":
        return <ProjectScenes stepId={currentFeature.id} />;
      default:
        return <CrmScenes stepId={currentFeature.id} />;
    }
  };

  return (
    <section className="py-[15px] bg-slate-100 text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {dataset.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            {dataset.subtitle}
          </p>
        </div>

        {/* Top Feature Nav Tabs & Auto-Play Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
          {/* Horizontal Step Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none flex-1">
            {dataset.features.map((feature, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-102"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-75">{feature.stepNumber}</span>
                  <span>{feature.shortName}</span>
                </button>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-2 border-t sm:border-t-0 border-slate-100 pt-2 sm:pt-0 shrink-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-blue-600" /> : <Play className="w-3.5 h-3.5 text-blue-600" />}
              <span className="hidden xs:inline">{isPlaying ? "Auto Playing" : "Paused"}</span>
            </button>

            <div className="flex items-center gap-1">
              <button
                onClick={handlePrevStep}
                className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                aria-label="Previous feature"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextStep}
                className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                aria-label="Next feature"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Centered Desktop PC Preview Screen Frame */}
        <div className="w-full">
          <ProductDemoShell
            activeModule={moduleSlug}
            moduleTitle={dataset.badge}
            activeStepId={currentFeature.id}
            onSelectStep={handleSelectStep}
          >
            {renderScene()}
          </ProductDemoShell>
        </div>

      </div>
    </section>
  );
}
