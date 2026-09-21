import type { Metadata } from "next";
import ModuleDetailTemplate from "@/app/components/ModuleDetailTemplate";
import { MODULES_DATA } from "@/app/components/modules/moduleData";

export const metadata: Metadata = {
  title: "Project Management & Professional Services | MossiERP",
  description:
    "Deliver projects on-time and within budget. Milestone Gantt planning, billable capacity tracking, timesheet approvals, and project billing in MossiERP Project.",
};

export default function ProjectModulePage() {
  return <ModuleDetailTemplate data={MODULES_DATA.project} />;
}
