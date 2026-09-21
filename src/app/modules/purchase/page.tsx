import type { Metadata } from "next";
import ModuleDetailTemplate from "@/app/components/ModuleDetailTemplate";
import { MODULES_DATA } from "@/app/components/modules/moduleData";

export const metadata: Metadata = {
  title: "Purchase & Procurement Management | MossiERP",
  description:
    "Streamline purchase requisitions, multi-vendor RFQ bid comparisons, 3-way invoice matching, and landed cost vouchers with MossiERP Purchase.",
};

export default function PurchaseModulePage() {
  return <ModuleDetailTemplate data={MODULES_DATA.purchase} />;
}
