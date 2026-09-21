"use client";

import React from "react";
import ModuleFeatureWalkthrough from "../walkthrough/ModuleFeatureWalkthrough";

/**
 * Clean wrapper component for CRM feature walkthrough.
 * Reuses the single unified ModuleFeatureWalkthrough component.
 */
export default function CrmFeatureShowcase() {
  return <ModuleFeatureWalkthrough moduleSlug="crm" />;
}
