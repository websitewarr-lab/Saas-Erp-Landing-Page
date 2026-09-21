export interface CrmFeatureSpec {
  id: string;
  stepNumber: string;
  title: string;
  shortName: string;
  category: string;
  description: string;
  targetView: "pipeline" | "leads" | "accounts" | "masters" | "activities" | "conversion";
  cursorTarget: {
    x: number; // % relative to product window
    y: number; // % relative to product window
    label: string;
  };
}

export const CRM_FEATURE_SPECS: CrmFeatureSpec[] = [
  {
    id: "pipeline",
    stepNumber: "01",
    title: "Visual Deals & Pipeline Management",
    shortName: "Deals Pipeline",
    category: "Kanban & Pipeline",
    description:
      "Manage prospective deals through an interactive visual Kanban board with customizable deal stages, win probabilities, expected closing dates, and revenue values.",
    targetView: "pipeline",
    cursorTarget: { x: 38, y: 35, label: "Click Deal Card" },
  },
  {
    id: "leads",
    stepNumber: "02",
    title: "Lead & Prospect Management",
    shortName: "Lead Capture",
    category: "Lead Acquisition",
    description:
      "Capture and manage leads with company details, contacts, lead owners, lead sources, priority levels, and corporate segments.",
    targetView: "leads",
    cursorTarget: { x: 52, y: 44, label: "Filter IndiaMART Leads" },
  },
  {
    id: "accounts",
    stepNumber: "03",
    title: "360° Accounts & Customer Master Management",
    shortName: "360° Accounts",
    category: "Corporate Master",
    description:
      "Maintain comprehensive corporate account profiles, multiple contacts per account, tax registration (GSTIN/PAN), credit limits, and full transactional history.",
    targetView: "accounts",
    cursorTarget: { x: 68, y: 30, label: "View Credit Limit & GSTIN" },
  },
  {
    id: "masters",
    stepNumber: "04",
    title: "Customizable CRM Masters",
    shortName: "CRM Masters",
    category: "Workflow Governance",
    description:
      "Design custom sales workflows using configurable Lead Status Masters, Deal Stage Masters, and industry-specific classification rules.",
    targetView: "masters",
    cursorTarget: { x: 44, y: 58, label: "Edit Deal Stage Master" },
  },
  {
    id: "activities",
    stepNumber: "05",
    title: "Interactive Lead & Activity Tracker",
    shortName: "Activity Tracker",
    category: "Task Management",
    description:
      "Track lead progress, open activities, follow-up timelines, notes, and task completion metrics using built-in task tracking and status dashboards.",
    targetView: "activities",
    cursorTarget: { x: 78, y: 48, label: "Mark Follow-Up Completed" },
  },
  {
    id: "conversion",
    stepNumber: "06",
    title: "Lead-to-Quotation & Customer Conversion",
    shortName: "1-Click Conversion",
    category: "Order Handoff",
    description:
      "Convert qualified leads and won deals directly into formal Quotations or Customer Master records with a single click.",
    targetView: "conversion",
    cursorTarget: { x: 62, y: 72, label: "Create Official Quotation" },
  },
];

