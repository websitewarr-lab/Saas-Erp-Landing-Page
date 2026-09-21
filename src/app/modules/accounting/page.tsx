import type { Metadata } from "next";
import ModuleDetailTemplate from "@/app/components/ModuleDetailTemplate";
import { MODULES_DATA } from "@/app/components/modules/moduleData";

export const metadata: Metadata = {
  title: "Accounting & Financial General Ledger | MossiERP",
  description:
    "One ERP, One Ledger. Double-entry general ledger, fixed asset depreciation, bank reconciliation, GST returns, and audit trails in MossiERP Accounting.",
};

export default function AccountingModulePage() {
  return <ModuleDetailTemplate data={MODULES_DATA.accounting} />;
}
