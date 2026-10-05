export const POPUP_CTA_MODULES = [
  { id: "crm", name: "CRM", tone: "blue" },
  { id: "sales", name: "Sales & Order Management", tone: "indigo" },
  { id: "purchase", name: "Purchase & Procurement", tone: "teal" },
  { id: "inventory", name: "Inventory Management", tone: "amber" },
  { id: "production", name: "Production Management", tone: "purple" },
  { id: "accounting", name: "Accounting & Finance", tone: "emerald" },
  { id: "hrms", name: "HRMS & Payroll", tone: "rose" },
  { id: "project", name: "Project Management", tone: "sky" },
] as const;

export type PopupCtaModule = (typeof POPUP_CTA_MODULES)[number]["id"];
export type EnquiryIntent = "demo" | "trial" | "quote";

export interface PopupCtaRequest {
  intent: EnquiryIntent;
  module?: PopupCtaModule;
}

export const POPUP_CTA_COPY = {
  demo: {
    eyebrow: "Personalized Product Walkthrough",
    title: "Book your live ERP demo.",
    description: "Tell us a little about your business. We'll tailor the walkthrough to the exact modules and workflows that matter to you.",
    action: "Request Live Demo",
  },
  trial: {
    eyebrow: "14-Day Full Sandbox Access",
    title: "Let's get your trial started.",
    description: "Choose the modules you'd like to test. Our product team will help you configure your sandbox with live workflows.",
    action: "Start 14-Day Free Sandbox",
  },
  quote: {
    eyebrow: "Tailored Enterprise Pricing",
    title: "Let's shape your ERP plan.",
    description: "Share your team size and required modules so we can prepare transparent, scalable pricing for your organization.",
    action: "Request Custom Quote",
  },
} satisfies Record<EnquiryIntent, { eyebrow: string; title: string; description: string; action: string }>;

export function isPopupCtaModule(value: string): value is PopupCtaModule {
  return POPUP_CTA_MODULES.some((module) => module.id === value);
}

// Backwards-compatible aliases for legacy demo imports
export const DEMO_MODULES = POPUP_CTA_MODULES;
export type DemoModule = PopupCtaModule;
export type DemoRequest = PopupCtaRequest;
export const ENQUIRY_COPY = POPUP_CTA_COPY;
export const isDemoModule = isPopupCtaModule;
