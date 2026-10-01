import type { Metadata } from "next";
import ModuleDetailTemplate from "@/app/components/ModuleDetailTemplate";
import { MODULES_DATA } from "@/app/components/modules/moduleData";

export const metadata: Metadata = {
  title: "HRMS & Automated Statutory Payroll | Mossie ERP",
  description:
    "Hire to retire workforce management, biometric attendance integration, shift rosters, leave encashment, and 1-click payroll in Mossie ERP HRMS.",
};

export default function HrmsModulePage() {
  return <ModuleDetailTemplate data={MODULES_DATA.hrms} />;
}
