import type { Metadata } from "next";
import ModuleDetailTemplate from "@/app/components/ModuleDetailTemplate";
import { MODULES_DATA } from "@/app/components/modules/moduleData";

export const metadata: Metadata = {
  title: "CRM & Sales Pipeline Management | Mossie ERP",
  description:
    "Manage your entire customer lifecycle from lead capture to deal closing and customer account management with Mossie ERP CRM.",
};

export default function CrmModulePage() {
  return <ModuleDetailTemplate data={MODULES_DATA.crm} />;
}
