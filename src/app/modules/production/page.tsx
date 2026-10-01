import type { Metadata } from "next";
import ModuleDetailTemplate from "@/app/components/ModuleDetailTemplate";
import { MODULES_DATA } from "@/app/components/modules/moduleData";

export const metadata: Metadata = {
  title: "Production & Manufacturing Execution | Mossie ERP",
  description:
    "Master multi-level BOMs, MRP calculations, capacity scheduling, shopfloor MES execution, OEE machine analytics, and subcontracting in Mossie ERP Production.",
};

export default function ProductionModulePage() {
  return <ModuleDetailTemplate data={MODULES_DATA.production} />;
}
