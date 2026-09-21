import type { Metadata } from "next";
import ModuleDetailTemplate from "@/app/components/ModuleDetailTemplate";
import { MODULES_DATA } from "@/app/components/modules/moduleData";

export const metadata: Metadata = {
  title: "HRMS & Automated Statutory Payroll | MossiERP",
  description:
    "Hire to retire workforce management, biometric attendance integration, shift rosters, leave encashment, and 1-click payroll in MossiERP HRMS.",
};

export default function HrmsModulePage() {
  return <ModuleDetailTemplate data={MODULES_DATA.hrms} />;
}
