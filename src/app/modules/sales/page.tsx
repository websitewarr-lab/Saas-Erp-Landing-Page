import type { Metadata } from "next";
import ModuleDetailTemplate from "@/app/components/ModuleDetailTemplate";
import { MODULES_DATA } from "@/app/components/modules/moduleData";

export const metadata: Metadata = {
  title: "Sales & Order Management | MossiERP",
  description:
    "Accelerate order-to-cash cycles with quotations, commercial pricing approvals, delivery challans, and customer tax invoicing in MossiERP Sales.",
};

export default function SalesModulePage() {
  return <ModuleDetailTemplate data={MODULES_DATA.sales} />;
}
