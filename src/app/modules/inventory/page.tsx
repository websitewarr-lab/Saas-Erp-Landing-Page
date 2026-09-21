import type { Metadata } from "next";
import ModuleDetailTemplate from "@/app/components/ModuleDetailTemplate";
import { MODULES_DATA } from "@/app/components/modules/moduleData";

export const metadata: Metadata = {
  title: "Inventory, Stores & GRN Control | MossiERP",
  description:
    "Eliminate stockouts, manage inward GRN quality inspection, enforce FEFO/FIFO batch controls, and run automated MRP shortages with MossiERP Inventory.",
};

export default function InventoryModulePage() {
  return <ModuleDetailTemplate data={MODULES_DATA.inventory} />;
}
