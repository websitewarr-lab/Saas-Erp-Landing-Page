"use client";

import ModuleDetailHero from "./ModuleDetailHero";
import type { ModulePageConfig } from "./moduleData";

export default function CrmDetailHero({ config }: { config: ModulePageConfig }) {
  return <ModuleDetailHero config={config} />;
}
