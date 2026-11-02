"use client";

import React, { useState, FormEvent } from "react";
import Image from "next/image";
import { PopupCtaButton } from "@/app/components/popup-cta";
import styles from "./AiFeatures.module.css";

// --- Types ---
type LangKey = "en" | "hinglish" | "hi" | "gu" | "mr" | "ta";
type SuiteKey = "ask-mossie" | "compliance-guardian" | "cash-pilot" | "order-to-shortage" | "ai-onboarding";
type CompKey = "ims" | "gstr2b" | "einvoice" | "eway" | "sec43bh" | "sec194q" | "payroll" | "hsn";
type CashScenarioKey = "baseline" | "mehta" | "machine";
type OtsStepKey = "1" | "2" | "3" | "4" | "5" | "6";
type DeptKey = "Finance" | "Sales" | "Inventory" | "Manufacturing" | "HR" | "Projects" | "Purchase" | "CRM";

interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
}

// --- Data Constants ---
const ASTRA_LANGS: Record<LangKey, { badge: string; q: string; a: string }> = {
  en: {
    badge: "English",
    q: "“What is our cash position today and which orders are blocked by material shortages?”",
    a: "<strong>9:00 AM Executive Brief:</strong> Available cash is <strong>₹42.8L</strong> (Bank Ledger #BK-01). Overdue receivables stand at <strong>₹11.4L</strong> across 3 customers. Sales Order <strong>#SO-1048</strong> is blocked by 420 kg CRCA sheet shortage (PR-309 ready). CNC-02 has scheduled maintenance at 2:00 PM, and 4 MSME bills hit Section 43B(h) due dates in 5 days.",
  },
  hinglish: {
    badge: "Hinglish",
    q: "“Aaj ka cash balance kya hai aur kaunse orders material shortage ki wajah se ruke hue hain?”",
    a: "<strong>9:00 AM Brief:</strong> Aaj available cash <strong>₹42.8L</strong> hai (#BK-01). 3 customers se <strong>₹11.4L</strong> overdue hai. Order <strong>#SO-1048</strong> 420 kg CRCA sheet shortage ki wajah se hold par hai (PR-309 ready for approval). 4 MSME vendor bills agle 5 din mein Section 43B(h) deadline touch karenge.",
  },
  hi: {
    badge: "हिंदी",
    q: "“आज हमारा कैश बैलेंस क्या है और सामग्री की कमी के कारण कौन से ऑर्डर रुके हुए हैं?”",
    a: "<strong>सुबह 9:00 बजे की संक्षिप्त रिपोर्ट:</strong> उपलब्ध नकदी <strong>₹42.8 लाख</strong> है (#BK-01)। 3 ग्राहकों पर <strong>₹11.4 लाख</strong> बकाया है। सेल्स ऑर्डर <strong>#SO-1048</strong> 420 किग्रा CRCA शीट की कमी से रुका है। 4 MSME बिल 5 दिनों में धारा 43B(h) की समय-सीमा पर हैं।",
  },
  gu: {
    badge: "ગુજરાતી",
    q: "“આજે આપણું કેશ બેલેન્સ કેટલું છે અને કયા ઓર્ડર મટીરીયલની અછતથી અટકેલા છે?”",
    a: "<strong>સવારે 9:00 ની બ્રીફ:</strong> ઉપલબ્ધ કેશ બેલેન્સ <strong>₹42.8 લાખ</strong> છે (#BK-01). 3 ગ્રાહકો પાસેથી <strong>₹11.4 લાખ</strong> લેવાના બાકી છે. ઓર્ડર <strong>#SO-1048</strong> માટે 420 kg CRCA શીટની અછત છે (PR-309 તૈયાર છે).",
  },
  mr: {
    badge: "मराठी",
    q: "“आजची कॅश पोझिशन काय आहे आणि मटेरियल तुटवड्यामुळे कोणते ऑर्डर्स थांबले आहेत?”",
    a: "<strong>सकाळी 9:00 चा अहवाल:</strong> उपलब्ध कॅश <strong>₹42.8 लाख</strong> आहे (#BK-01). 3 ग्राहकांकडे <strong>₹11.4 लाख</strong> थकीत आहेत. ऑर्डर <strong>#SO-1048</strong> 420 kg CRCA शीटच्या तुटवड्यामुळे थांबली आहे (PR-309 मंजुरीसाठी तयार).",
  },
  ta: {
    badge: "தமிழ்",
    q: "“இன்றைய ரொக்க இருப்பு என்ன? பொருள் பற்றாக்குறையால் எந்த ஆர்டர்கள் நிறுத்தப்பட்டுள்ளன?”",
    a: "<strong>காலை 9:00 மணி சுருக்கம்:</strong> கையிருப்பு ரொக்கம் <strong>₹42.8 லட்சம்</strong> (#BK-01). 3 வாடிக்கையாளர்களிடம் <strong>₹11.4 லட்சம்</strong> நிலுவையில் உள்ளது. ஆர்டர் <strong>#SO-1048</strong> 420 கிலோ CRCA தாள் பற்றாக்குறையால் காத்திருக்கிறது.",
  },
};

const COMP_DATA: Record<CompKey, { title: string; desc: string; badge: string; subBadge: string; color: string }> = {
  ims: {
    title: "1. IMS Copilot — Three-Way Invoice & ITC Protection",
    desc: "Matches inward supplier invoices against purchase orders, goods receipt notes (GRNs), and vendor bills; recommends Accept / Reject / Pending with clear reasons, and drafts supplier follow-ups when missing uploads put Input Tax Credit (ITC) at risk.",
    badge: "Action: Accept / Reject / Pending + Supplier Follow-Up",
    subBadge: "ITC Guard",
    color: "amber",
  },
  gstr2b: {
    title: "2. GSTR-2B vs. Books Reconciliation",
    desc: "Automatically reconciles monthly GSTR-2B statements against purchase registers and flags potential ITC over-claims or mismatched GSTINs before GSTR-3B filing.",
    badge: "Status: Pre-GSTR-3B ITC Verification",
    subBadge: "Pre-3B",
    color: "blue",
  },
  einvoice: {
    title: "3. E-Invoice 30-Day IRN Clock",
    desc: "Monitors un-reported B2B invoices, warns proactively on Day 25 of the mandatory 30-day IRN reporting window, and pre-validates invoice schemas before IRP submission.",
    badge: "Alert: Warns on Day 25 of 30-Day Window",
    subBadge: "Day 25 Alert",
    color: "red",
  },
  eway: {
    title: "4. Automated E-Way Bill Lifecycle",
    desc: "Generates E-way bills directly from dispatch orders, predicts transit expiry based on distance and vehicle logs, and prompts timely extension or closure.",
    badge: "Automation: Dispatch Generation & Expiry Prediction",
    subBadge: "Dispatch",
    color: "indigo",
  },
  sec43bh: {
    title: "5. Section 43B(h) MSME Payment Tracker",
    desc: "Tags vendors by Udyam registration category (Micro/Small), calculates statutory 15-day and 45-day payment due dates, and ranks payment priorities to protect tax deductibility.",
    badge: "Priority: Udyam 15 / 45-Day Due Date Ranking",
    subBadge: "Udyam MSME",
    color: "purple",
  },
  sec194q: {
    title: "6. Section 194Q Threshold & TDS Engine",
    desc: "Tracks cumulative fiscal-year purchases against the ₹50 lakh per-vendor threshold in real time and automatically applies 0.1% TDS once crossed.",
    badge: "Threshold: ₹50 Lakh Per-Vendor Auto-TDS",
    subBadge: "₹50L Limit",
    color: "emerald",
  },
  payroll: {
    title: "7. Payroll Statutory Compliance (PF ECR & ESI)",
    desc: "Validates monthly PF ECR and ESI contribution uploads for calculation accuracy and proactively flags employee wage transitions affecting ESI-period eligibility.",
    badge: "Validation: PF ECR & ESI Eligibility Checks",
    subBadge: "PF / ESI",
    color: "cyan",
  },
  hsn: {
    title: "8. GST 2.0 HSN & Tax-Rate Audit",
    desc: "Continuously re-validates item master HSN codes and GST tax-rate mappings against updated notifications to eliminate billing errors across sales and procurement.",
    badge: "Audit: Continuous Item Master HSN Validation",
    subBadge: "GST 2.0",
    color: "teal",
  },
};

const CASH_SCENARIOS: Record<
  CashScenarioKey,
  {
    label: string;
    minBadge: string;
    minBadgeClass: string;
    bars: number[];
    headline: string;
    actions: string[];
  }
> = {
  baseline: {
    label: "Baseline 13-Week Cash Forecast (₹ Lakhs)",
    minBadge: "Lowest Week: ₹24.5L (Safe)",
    minBadgeClass: "text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full",
    bars: [42, 39, 45, 36, 31, 28, 34, 38, 24.5, 33, 41, 46, 52],
    headline: "Healthy 13-Week Buffer Maintained",
    actions: [
      "Follow up with 2 overdue accounts (₹11.4L) before GST 20th deadline.",
      "TReDS Discounting: Eligible to discount ₹8.5L Tier-1 invoices at 7.4% p.a. if needed.",
      "Safe to Wait: 3 non-MSME vendor bills (₹6.2L) have 22 days remaining on net-60 terms.",
    ],
  },
  mehta: {
    label: "Scenario: What if Mehta Auto (₹14.6L) pays 30 days late?",
    minBadge: "Week 6 Dip: ₹6.2L (Action Needed)",
    minBadgeClass: "text-[11px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full",
    bars: [42, 39, 41, 25, 14, 6.2, 18, 32, 28, 35, 41, 46, 52],
    headline: "Week 6 Buffer Drops to ₹6.2L — Recommended Actions:",
    actions: [
      "Discount via TReDS: Discount Mehta Auto INV-882 (₹8.4L) on TReDS today to restore Week 6 liquidity.",
      "Chase Priority: Escalate collection on Apex Gears (₹5.1L due in 4 days).",
      "Safely Defer: Push non-MSME import bill #VB-412 (₹4.8L) by 10 days without penalty.",
    ],
  },
  machine: {
    label: "Scenario: Can we afford this ₹18L machine in November?",
    minBadge: "Week 9 Shortfall: -₹3.1L if Cash Outright",
    minBadgeClass: "text-[11px] font-bold text-red-700 bg-red-100 px-2.5 py-0.5 rounded-full",
    bars: [42, 39, 45, 36, 31, 28, 16, 12, 4, 15, 23, 28, 34],
    headline: "Outright Purchase Creates Week 9 Tightness — Action Plan:",
    actions: [
      "Recommended Financing: Use ₹4.5L down payment + equipment EMI instead of ₹18L lump-sum outflow.",
      "Pre-Purchase Collection: Collect ₹9.2L overdue from 2 Tier-1 customers before machine delivery.",
      "Section 43B(h) Guard: Keep ₹7.4L reserved in Week 8 for mandatory MSME vendor payouts.",
    ],
  },
};

const OTS_DATA: Record<OtsStepKey, { title: string; desc: string; badge: string }> = {
  "1": {
    title: "Step 1: Multi-Channel Customer PO Intake",
    desc: "Receives a customer purchase order directly from a WhatsApp photo, PDF email attachment, or B2B customer portal and triggers an event-driven workflow.",
    badge: "Input: WhatsApp Photo / Email / Portal",
  },
  "2": {
    title: "Step 2: Automated Draft Sales Order Creation",
    desc: "Extracts customer details, item SKUs, quantities, target prices, and requested delivery dates into a structured draft Sales Order.",
    badge: "Contract: CRM → Sales Event",
  },
  "3": {
    title: "Step 3: Multi-Level Feasibility & Capacity Check",
    desc: "Checks real-time stock and reservations, runs multi-level BOM explosion, evaluates work-center capacity, and factors in subcontract (job-work) lead times.",
    badge: "Contract: Sales → Inventory & Factory",
  },
  "4": {
    title: "Step 4: Automated Shortage PRs / RFQs & Vendor Scoring",
    desc: "Automatically drafts purchase requisitions and RFQs for exact material shortages and selects the best vendors ranked by price, quality, and lead-time score.",
    badge: "Output: Draft PRs & Ranked Vendor RFQs",
  },
  "5": {
    title: "Step 5: Cash Pilot Working-Capital Impact Check",
    desc: "Verifies how the required raw-material procurement outflow and expected customer collection date impact the 13-week Cash Pilot forecast.",
    badge: "Integration: Cash Pilot Verification",
  },
  "6": {
    title: "Step 6: Bundled Proposal for One-Tap Approval",
    desc: "Presents the complete execution package—Sales Order confirmation, production schedule, shortage RFQs, and cash impact—for one-tap human sign-off.",
    badge: "Execution: 1-Tap Sign-Off on Web / WhatsApp",
  },
};

const DEPT_INFO: Record<DeptKey, { title: string; desc: string; prompt: string }> = {
  Finance: {
    title: "FINANCE & COMPLIANCE",
    desc: "Cash Pilot 13-week rolling forecast, IMS copilot, GSTR-2B vs. books, E-invoice 25-day clock, Section 43B(h) MSME due dates & Section 194Q TDS.",
    prompt: "Run Compliance Guardian check for Section 43B(h) & GSTR-2B",
  },
  Sales: {
    title: "SALES & RECEIVABLES",
    desc: "WhatsApp photo/email PO intake into draft Sales Orders, overdue customer payment reminders via Ask Mossie, and TReDS invoice discounting.",
    prompt: "What if Mehta Auto pays 30 days late?",
  },
  Inventory: {
    title: "INVENTORY & SHORTAGES",
    desc: "Real-time stock & reservation checks, multi-level BOM explosion, GST 2.0 HSN code audit, and automated Tally item master import.",
    prompt: "Check stock & BOM shortages blocking open sales orders",
  },
  Manufacturing: {
    title: "FACTORY & JOB-WORK",
    desc: "Work-center capacity checks, subcontract lead times, Job-Work Intelligence challan reconciliation, and 9 AM machine downtime brief.",
    prompt: "Run Order-to-Shortage feasibility check for today’s POs",
  },
  HR: {
    title: "HR & PAYROLL COMPLIANCE",
    desc: "Validates PF ECR and ESI uploads, flags ESI-period eligibility transitions, and processes leave requests via WhatsApp/voice approval.",
    prompt: "Validate this month’s PF ECR and ESI payroll uploads",
  },
  Projects: {
    title: "PROJECTS & CAPEX PLANNING",
    desc: "Simulates capital expenditure impact on 13-week cash flow before committing to new machinery or project milestones.",
    prompt: "Can we afford this ₹18L machine in November?",
  },
  Purchase: {
    title: "PROCUREMENT & VENDOR SCORING",
    desc: "Auto-drafts shortage PRs/RFQs, ranks vendors by reliability score, tracks ₹50L Sec 194Q threshold, and follows up on missing GSTR-2B uploads.",
    prompt: "Draft RFQs for current BOM shortages and rank top vendors",
  },
  CRM: {
    title: "CRM & ONBOARDING",
    desc: "Deduplicates customer/vendor masters during Tally migration and links every conversational answer back to source CRM/ERP records.",
    prompt: "Preview Tally XML & WhatsApp export migration summary",
  },
};

export default function AiFeaturesClient() {
  // State
  const [activeSuite, setActiveSuite] = useState<SuiteKey>("ask-mossie");
  const [viewMode, setViewMode] = useState<"spotlight" | "bento">("spotlight");
  const [selectedLang, setSelectedLang] = useState<LangKey>("en");
  const [selectedComp, setSelectedComp] = useState<CompKey>("ims");
  const [selectedCashScenario, setSelectedCashScenario] = useState<CashScenarioKey>("baseline");
  const [selectedOtsStep, setSelectedOtsStep] = useState<OtsStepKey>("1");
  const [selectedDept, setSelectedDept] = useState<DeptKey>("Finance");
  const [deptCardOpen, setDeptCardOpen] = useState(true);

  // Modals
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Copilot chat state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "initial",
      sender: "ai",
      text: "Namaste! I'm Ask Mossie. Ask me about your 13-week Cash Pilot forecast, Compliance Guardian alerts (GSTR-2B, Sec 43B(h), E-invoice clock), or Order-to-Shortage feasibility.",
    },
  ]);
  const [chatInput, setChatInput] = useState("");

  const handleOpenCopilot = (prefillPrompt?: string) => {
    setIsCopilotOpen(true);
    if (prefillPrompt) {
      sendCopilotMessage(prefillPrompt);
    }
  };

  const sendCopilotMessage = (queryText: string) => {
    const q = queryText.trim();
    if (!q) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: q,
    };
    setChatMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const qLower = q.toLowerCase();
      let reply =
        "Ask Mossie [Source: Ledger #INV-2049 & SO-1048]: Net cash is ₹42.8L. 2 purchase orders await your 1-tap approval on WhatsApp.";

      if (qLower.includes("mehta auto") || qLower.includes("30 days late")) {
        reply =
          "Cash Pilot Simulation: If Mehta Auto (₹14.6L across INV-882 & INV-904) pays 30 days late, Week 6 cash buffer dips to ₹6.2L. Recommended Action: Discount INV-882 via TReDS today and defer non-MSME vendor bill #VB-412 by 10 days.";
      } else if (qLower.includes("18l machine") || qLower.includes("november")) {
        reply =
          "Cash Pilot Simulation: Purchasing the ₹18L machine outright in November leaves a ₹3.1L shortfall in Week 9 due to GST + PF ECR outflows. Recommended Action: Opt for ₹4.5L down payment + EMI, or collect ₹9.2L overdue from 2 Tier-1 customers first.";
      } else if (qLower.includes("43b") || qLower.includes("gstr-2b") || qLower.includes("compliance")) {
        reply =
          "Compliance Guardian Report: (1) IMS Copilot matched 48/51 inward bills; 3 bills flagged for missing GSTR-2B upload (₹1.85L ITC at risk — supplier follow-up drafted). (2) 4 Udyam Micro/Small vendor bills hit the 45-day Section 43B(h) limit within 6 days. (3) E-invoice IRN clock: 2 invoices are at Day 25/30.";
      } else if (qLower.includes("shortage") || qLower.includes("rfq") || qLower.includes("feasibility")) {
        reply =
          "Order-to-Shortage Agent: Extracted 14 line items from WhatsApp PO. BOM explosion shows 420 kg CRCA sheet shortage. Drafted RFQ #RFQ-309 for top 2 scored vendors (lead time: 4 days), verified Cash Pilot impact (+₹11.2L net margin), ready for 1-tap approval.";
      } else if (qLower.includes("tally") || qLower.includes("migration")) {
        reply =
          "AI Onboarding / Migration: Imported Tally XML (1,420 ledgers mapped to Mossie ERP CoA), deduplicated 38 vendor records, inferred HSN codes for 610 items, and prepared 45 draft BOMs in the Import-Review screen.";
      } else if (qLower.includes("approve") || qLower.includes("reminder")) {
        reply =
          "Action Executed: Approval logged with timestamp and audit trail linked to source record. Notification dispatched over WhatsApp.";
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: reply,
      };
      setChatMessages((prev) => [...prev, aiMsg]);
    }, 280);
  };

  const handleChatSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    sendCopilotMessage(chatInput);
    setChatInput("");
  };

  const jumpToSuite = (suiteKey: SuiteKey) => {
    setViewMode("spotlight");
    setActiveSuite(suiteKey);
    const el = document.getElementById("ai-suites");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const activeCash = CASH_SCENARIOS[selectedCashScenario];
  const activeCompData = COMP_DATA[selectedComp];
  const activeOtsData = OTS_DATA[selectedOtsStep];
  const activeDeptInfo = DEPT_INFO[selectedDept];

  return (
    <div className="bg-white text-slate-900 selection:bg-[#006fc9] selection:text-white">
      {/* =====================================================================
           TOP HERO SECTION
           ===================================================================== */}
      <div id="top" className={`${styles.heroSurface} relative overflow-hidden border-b border-slate-200/70 pt-6 pb-12 sm:pb-16`}>
        <div className="relative z-10 max-w-[1080px] mx-auto px-5 sm:px-8 pt-4 pb-8 lg:pt-8 lg:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Left Column: Eyebrow, Heading, Subtitle, 2 Action Buttons */}
            <div className="lg:col-span-6">
              {/* Eyebrow - Clean Badge without Stars */}
              <div className="inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full bg-blue-100/80 border border-blue-200/70">
                <span className="w-2 h-2 rounded-full bg-[#006fc9] inline-block animate-pulse" />
                <span className="text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#006fc9]">
                  AI FEATURES
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-[36px] sm:text-[46px] lg:text-[48px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0b192c] mb-4">
                Your{" "}
                <span className="bg-gradient-to-r from-[#006fc9] via-[#218ef2] to-[#60a5fa] bg-clip-text text-transparent">
                  Intelligent
                </span>
                <br />
                Business Partner
              </h1>

              {/* Subtitle */}
              <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 leading-[1.65] max-w-[460px] mb-7 font-normal">
                Embedded AI that understands your data, learns from your business, and helps you make faster, smarter decisions.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => {
                    const sec = document.getElementById("features");
                    if (sec) sec.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-gradient-to-b from-[#006fc9] to-[#005fae] hover:from-[#1b81dc] hover:to-[#006fc9] text-white text-[13.5px] font-semibold px-7 py-3.5 rounded-full shadow-[0_8px_20px_rgba(0,111,201,0.28)] hover:shadow-[0_10px_24px_rgba(0,111,201,0.38)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  Explore Features
                </button>

                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="bg-white hover:bg-slate-50 text-slate-800 text-[13.5px] font-semibold px-6 py-3.5 rounded-full shadow-[0_4px_14px_rgba(15,23,42,0.06)] border border-slate-200/80 inline-flex items-center gap-2.5 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span className="w-5 h-5 rounded-full border-2 border-[#006fc9] text-[#006fc9] flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span>Watch Video</span>
                </button>
              </div>
            </div>

            {/* Right Column: 3D Assistant Robot + Analytics Dashboard + Speech Bubble */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-[500px]">
                {/* Floating Speech Bubble ("How can I help you today?") */}
                <button
                  type="button"
                  onClick={() => handleOpenCopilot()}
                  aria-label="Open Ask Mossie Copilot"
                  className={`${styles.speechBubble} absolute top-4 right-3 sm:top-5 sm:right-6 z-20 bg-white hover:bg-blue-50/50 text-slate-800 px-5 py-3 rounded-2xl shadow-[0_10px_28px_rgba(0,111,201,0.14)] border border-slate-100 text-[13px] sm:text-[13.5px] font-semibold tracking-tight -rotate-2 transition-transform hover:scale-105 cursor-pointer`}
                >
                  How can I help you today?
                </button>

                {/* 3D ERP Dashboard & Robot Illustration */}
                <div
                  onClick={() => handleOpenCopilot()}
                  className="cursor-pointer group relative transition-transform hover:scale-[1.01]"
                  title="Click to talk with Ask Mossie"
                >
                  <Image
                    src="/images/ai-features-pageimg/mossie-ai-robot.png"
                    alt="Mossie ERP 3D AI Assistant Robot and Analytics Dashboard"
                    width={900}
                    height={675}
                    priority
                    className={`${styles.heroIllustrationMask} w-full h-auto object-contain select-none drop-shadow-[0_20px_35px_rgba(0,111,201,0.12)]`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
           4-COLUMN VALUE PROPOSITION STRIP
           ===================================================================== */}
      <section id="benefits" className="bg-white border-b border-slate-100">
        <div className="max-w-[1040px] mx-auto px-5 sm:px-8 py-7">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {/* Stat 1: Faster Decisions */}
            <div className="flex flex-col items-center text-center px-4 py-3 sm:py-1">
              <div className="w-9 h-9 rounded-xl bg-[#eef6ff] text-[#006fc9] flex items-center justify-center mb-2.5 shadow-2xs">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l-3 5h4l-3 5" />
                </svg>
              </div>
              <h2 className="text-[14.5px] font-extrabold text-[#0f172a] mb-0.5">Faster Decisions</h2>
              <p className="text-[12px] text-slate-500">With AI insights</p>
            </div>

            {/* Stat 2: Lower Costs */}
            <div className="flex flex-col items-center text-center px-4 py-3 sm:py-1">
              <div className="w-9 h-9 rounded-xl bg-[#eef6ff] text-[#006fc9] flex items-center justify-center mb-2.5 shadow-2xs">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.5 0-2.5.8-2.5 2s1 1.8 2.5 2.2 2.5 1 2.5 2.3-1 2-2.5 2c-1 0-2-.5-2.5-1.5M12 6.5v11" />
                </svg>
              </div>
              <h2 className="text-[14.5px] font-extrabold text-[#0f172a] mb-0.5">Lower Costs</h2>
              <p className="text-[12px] text-slate-500">Through automation</p>
            </div>

            {/* Stat 3: Higher Efficiency */}
            <div className="flex flex-col items-center text-center px-4 py-3 sm:py-1">
              <div className="w-9 h-9 rounded-xl bg-[#eef6ff] text-[#006fc9] flex items-center justify-center mb-2.5 shadow-2xs">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" strokeDasharray="4 2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 14.5L14.5 9.5M14.5 9.5H10.5M14.5 9.5V13.5" />
                </svg>
              </div>
              <h2 className="text-[14.5px] font-extrabold text-[#0f172a] mb-0.5">Higher Efficiency</h2>
              <p className="text-[12px] text-slate-500">Across all departments</p>
            </div>

            {/* Stat 4: Better Growth */}
            <div className="flex flex-col items-center text-center px-4 py-3 sm:py-1">
              <div className="w-9 h-9 rounded-xl bg-[#eef6ff] text-[#006fc9] flex items-center justify-center mb-2.5 shadow-2xs">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15V9m0 0l-2.5 2.5M12 9l2.5 2.5" />
                </svg>
              </div>
              <h2 className="text-[14.5px] font-extrabold text-[#0f172a] mb-0.5">Better Growth</h2>
              <p className="text-[12px] text-slate-500">With data-backed actions</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
           OVERVIEW GRID: "What Can AI Do for Your Business?"
           ===================================================================== */}
      <section id="features" className="pt-14 pb-10 bg-white">
        <div className="max-w-[1020px] mx-auto px-5 sm:px-8">
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-[620px] mx-auto mb-12">
            <h2 className="text-[26px] sm:text-[31px] font-extrabold text-[#0b192c] tracking-tight mb-3">
              What Can AI Do for Your Business?
            </h2>
            <p className="text-[14px] sm:text-[14.5px] text-slate-500 leading-[1.65]">
              From daily operations to strategic planning, our AI features are designed to simplify, automate and accelerate your business.
            </p>
          </div>

          {/* 3x2 Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {/* 1. Ask Mossie Copilot */}
            <button
              type="button"
              onClick={() => jumpToSuite("ask-mossie")}
              className={`${styles.featureItem} text-left flex items-start gap-4 p-3.5 rounded-2xl hover:bg-[#f8faff] border border-transparent hover:border-blue-100 cursor-pointer`}
            >
              <div className="w-14 h-14 rounded-full bg-[#e8f2ff] text-[#006fc9] flex items-center justify-center shrink-0 shadow-2xs">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h5m-9 4V6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H9l-5 4z" />
                </svg>
              </div>
              <div className="pt-0.5">
                <h3 className="text-[15px] font-extrabold text-[#0f172a] mb-1">Ask Mossie Copilot</h3>
                <p className="text-[13px] text-slate-500 leading-[1.5]">
                  Instant answers &amp; approvals over WhatsApp, web &amp; voice in 6 languages
                </p>
              </div>
            </button>

            {/* 2. Order-to-Shortage Agent */}
            <button
              type="button"
              onClick={() => jumpToSuite("order-to-shortage")}
              className={`${styles.featureItem} text-left flex items-start gap-4 p-3.5 rounded-2xl hover:bg-[#fcfaff] border border-transparent hover:border-purple-100 cursor-pointer`}
            >
              <div className="w-14 h-14 rounded-full bg-[#f4eaff] text-[#8b2cf5] flex items-center justify-center shrink-0 shadow-2xs">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div className="pt-0.5">
                <h3 className="text-[15px] font-extrabold text-[#0f172a] mb-1">Order-to-Shortage Agent</h3>
                <p className="text-[13px] text-slate-500 leading-[1.5]">
                  Automates PO intake, BOM feasibility, vendor RFQs &amp; cash checks
                </p>
              </div>
            </button>

            {/* 3. Cash Pilot */}
            <button
              type="button"
              onClick={() => jumpToSuite("cash-pilot")}
              className={`${styles.featureItem} text-left flex items-start gap-4 p-3.5 rounded-2xl hover:bg-[#f6fef9] border border-transparent hover:border-emerald-100 cursor-pointer`}
            >
              <div className="w-14 h-14 rounded-full bg-[#e6faef] text-[#0f9d60] flex items-center justify-center shrink-0 shadow-2xs">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.1" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16M6 16v-4m4 4v-6m4 6v-3m4 3V8M6 9l4-3 4 2 4-4" />
                </svg>
              </div>
              <div className="pt-0.5">
                <h3 className="text-[15px] font-extrabold text-[#0f172a] mb-1">Cash Pilot Forecast</h3>
                <p className="text-[13px] text-slate-500 leading-[1.5]">
                  13-week rolling cash forecast, what-if scenarios &amp; TReDS actions
                </p>
              </div>
            </button>

            {/* 4. Compliance Guardian */}
            <button
              type="button"
              onClick={() => jumpToSuite("compliance-guardian")}
              className={`${styles.featureItem} text-left flex items-start gap-4 p-3.5 rounded-2xl hover:bg-[#fffdf6] border border-transparent hover:border-amber-100 cursor-pointer`}
            >
              <div className="w-14 h-14 rounded-full bg-[#fff5e2] text-[#ea9010] flex items-center justify-center shrink-0 shadow-2xs">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.1" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
              </div>
              <div className="pt-0.5">
                <h3 className="text-[15px] font-extrabold text-[#0f172a] mb-1">Compliance Guardian</h3>
                <p className="text-[13px] text-slate-500 leading-[1.5]">
                  Proactive IMS, GSTR-2B, E-invoice, Section 43B(h), 194Q &amp; PF/ESI
                </p>
              </div>
            </button>

            {/* 5. AI Onboarding / Migration */}
            <button
              type="button"
              onClick={() => jumpToSuite("ai-onboarding")}
              className={`${styles.featureItem} text-left flex items-start gap-4 p-3.5 rounded-2xl hover:bg-[#fff9f6] border border-transparent hover:border-orange-100 cursor-pointer`}
            >
              <div className="w-14 h-14 rounded-full bg-[#ffece6] text-[#f25122] flex items-center justify-center shrink-0 shadow-2xs">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.5 2.5 4 6 4 9.5a4 4 0 01-8 0C8 9 9.5 5.5 12 3zm0 13.5v4m-3-2.5l-2 2m8-2l2 2" />
                  <circle cx="12" cy="11" r="1.5" />
                </svg>
              </div>
              <div className="pt-0.5">
                <h3 className="text-[15px] font-extrabold text-[#0f172a] mb-1">AI Onboarding &amp; Migration</h3>
                <p className="text-[13px] text-slate-500 leading-[1.5]">
                  Go live in days from Tally XML/Excel, BOMs &amp; WhatsApp exports
                </p>
              </div>
            </button>

            {/* 6. Job-Work Intelligence */}
            <button
              type="button"
              onClick={() => {
                const bento = document.getElementById("bento-overview");
                if (bento) bento.scrollIntoView({ behavior: "smooth" });
              }}
              className={`${styles.featureItem} text-left flex items-start gap-4 p-3.5 rounded-2xl hover:bg-[#faf8ff] border border-transparent hover:border-violet-100 cursor-pointer`}
            >
              <div className="w-14 h-14 rounded-full bg-[#f1ebff] text-[#7c3aed] flex items-center justify-center shrink-0 shadow-2xs">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="5" y="4" width="14" height="16" rx="2" />
                  <circle cx="12" cy="11" r="2.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 16h6M9 7h6" />
                </svg>
              </div>
              <div className="pt-0.5">
                <h3 className="text-[15px] font-extrabold text-[#0f172a] mb-1">Work Smarter Across ERP</h3>
                <p className="text-[13px] text-slate-500 leading-[1.5]">
                  Job-Work Intelligence &amp; unified automation across all modules
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
           ELEVATED INTERACTIVE AI SUITES SHOWCASE
           ===================================================================== */}
      <section id="ai-suites" className="py-14 bg-gradient-to-b from-[#f6f9ff] via-[#f2f6ff] to-white border-y border-slate-200/60">
        <div className="max-w-[1080px] mx-auto px-5 sm:px-8">
          {/* Section Header + View Switcher */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-9">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-[#006fc9] text-[11px] font-bold uppercase tracking-wider mb-2.5">
                <span>Intelligent ERP Capabilities</span>
              </div>
              <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#0b192c] tracking-tight leading-tight">
                Built to Run Your Entire Business on Autopilot
              </h2>
              <p className="text-[14px] text-slate-500 mt-1.5 max-w-[580px]">
                Explore each AI capability below to see how Mossie ERP connects conversational insights, statutory compliance, cash flow, production planning, and rapid Tally migration.
              </p>
            </div>

            {/* View Mode Toggle: Interactive Spotlight vs All-in-One Bento Grid */}
            <div className="inline-flex bg-slate-200/70 p-1 rounded-xl self-start md:self-auto shrink-0">
              <button
                type="button"
                onClick={() => setViewMode("spotlight")}
                className={`text-[12px] font-bold px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  viewMode === "spotlight" ? styles.viewModeBtnActive : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Interactive Explorer
              </button>
              <button
                type="button"
                onClick={() => setViewMode("bento")}
                className={`text-[12px] font-bold px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  viewMode === "bento" ? styles.viewModeBtnActive : "text-slate-600 hover:text-slate-900"
                }`}
              >
                All Features Grid
              </button>
            </div>
          </div>

          {/* VIEW 1: INTERACTIVE SPLIT-SCREEN FEATURE EXPLORER */}
          {viewMode === "spotlight" && (
            <div id="spotlight-view" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left Column: 5 Interactive Suite Selector Tabs (4 cols) */}
              <div className="lg:col-span-4 flex flex-col gap-2.5 justify-between">
                {/* Tab 1: Ask Mossie */}
                <button
                  type="button"
                  onClick={() => setActiveSuite("ask-mossie")}
                  className={`text-left bg-white/70 hover:bg-white rounded-2xl p-4 border border-slate-200/80 relative overflow-hidden flex items-start gap-3.5 cursor-pointer ${
                    activeSuite === "ask-mossie" ? styles.suiteNavBtnActive : ""
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-1 rounded-r ${
                      activeSuite === "ask-mossie" ? styles.suiteIndicatorActive : "bg-transparent"
                    }`}
                  />
                  <div className="w-10 h-10 rounded-xl bg-[#e8f2ff] text-[#006fc9] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h5m-9 4V6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H9l-5 4z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10.5px] font-bold uppercase tracking-wider text-[#006fc9] mb-0.5">Talk to Your Business</div>
                    <h3 className="text-[14.5px] font-extrabold text-[#0f172a] leading-snug">Ask Mossie Copilot</h3>
                    <p className="text-[12px] text-slate-500 mt-0.5 line-clamp-2">WhatsApp, web &amp; voice notes in 6 languages with 9 AM daily brief.</p>
                  </div>
                </button>

                {/* Tab 2: Compliance Guardian */}
                <button
                  type="button"
                  onClick={() => setActiveSuite("compliance-guardian")}
                  className={`text-left bg-white/70 hover:bg-white rounded-2xl p-4 border border-slate-200/80 relative overflow-hidden flex items-start gap-3.5 cursor-pointer ${
                    activeSuite === "compliance-guardian" ? styles.suiteNavBtnActive : ""
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-1 rounded-r ${
                      activeSuite === "compliance-guardian" ? styles.suiteIndicatorActive : "bg-transparent"
                    }`}
                  />
                  <div className="w-10 h-10 rounded-xl bg-[#fff5e2] text-[#d97706] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10.5px] font-bold uppercase tracking-wider text-[#d97706] mb-0.5">Compliance on Autopilot</div>
                    <h3 className="text-[14.5px] font-extrabold text-[#0f172a] leading-snug">Compliance Guardian</h3>
                    <p className="text-[12px] text-slate-500 mt-0.5 line-clamp-2">IMS copilot, GSTR-2B, E-invoice, E-way bills, Sec 43B(h), 194Q &amp; PF/ESI.</p>
                  </div>
                </button>

                {/* Tab 3: Cash Pilot */}
                <button
                  type="button"
                  onClick={() => setActiveSuite("cash-pilot")}
                  className={`text-left bg-white/70 hover:bg-white rounded-2xl p-4 border border-slate-200/80 relative overflow-hidden flex items-start gap-3.5 cursor-pointer ${
                    activeSuite === "cash-pilot" ? styles.suiteNavBtnActive : ""
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-1 rounded-r ${
                      activeSuite === "cash-pilot" ? styles.suiteIndicatorActive : "bg-transparent"
                    }`}
                  />
                  <div className="w-10 h-10 rounded-xl bg-[#e6faef] text-[#0f9d60] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16M6 16v-4m4 4v-6m4 6v-3m4 3V8M6 9l4-3 4 2 4-4" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10.5px] font-bold uppercase tracking-wider text-[#0f9d60] mb-0.5">Cash &amp; Working Capital</div>
                    <h3 className="text-[14.5px] font-extrabold text-[#0f172a] leading-snug">Cash Pilot (13-Week Forecast)</h3>
                    <p className="text-[12px] text-slate-500 mt-0.5 line-clamp-2">Rolling weekly cash forecast, what-if simulator &amp; TReDS actions.</p>
                  </div>
                </button>

                {/* Tab 4: Order-to-Shortage Agent */}
                <button
                  type="button"
                  onClick={() => setActiveSuite("order-to-shortage")}
                  className={`text-left bg-white/70 hover:bg-white rounded-2xl p-4 border border-slate-200/80 relative overflow-hidden flex items-start gap-3.5 cursor-pointer ${
                    activeSuite === "order-to-shortage" ? styles.suiteNavBtnActive : ""
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-1 rounded-r ${
                      activeSuite === "order-to-shortage" ? styles.suiteIndicatorActive : "bg-transparent"
                    }`}
                  />
                  <div className="w-10 h-10 rounded-xl bg-[#f4eaff] text-[#8b2cf5] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10.5px] font-bold uppercase tracking-wider text-[#8b2cf5] mb-0.5">Plan &amp; Run the Factory</div>
                    <h3 className="text-[14.5px] font-extrabold text-[#0f172a] leading-snug">Order-to-Shortage Agent</h3>
                    <p className="text-[12px] text-slate-500 mt-0.5 line-clamp-2">6-step autonomous pipeline connecting POs, BOMs, RFQs &amp; Cash Pilot.</p>
                  </div>
                </button>

                {/* Tab 5: AI Onboarding / Migration */}
                <button
                  type="button"
                  onClick={() => setActiveSuite("ai-onboarding")}
                  className={`text-left bg-white/70 hover:bg-white rounded-2xl p-4 border border-slate-200/80 relative overflow-hidden flex items-start gap-3.5 cursor-pointer ${
                    activeSuite === "ai-onboarding" ? styles.suiteNavBtnActive : ""
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-1 rounded-r ${
                      activeSuite === "ai-onboarding" ? styles.suiteIndicatorActive : "bg-transparent"
                    }`}
                  />
                  <div className="w-10 h-10 rounded-xl bg-[#ffece6] text-[#f25122] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10.5px] font-bold uppercase tracking-wider text-[#f25122] mb-0.5">Adoption &amp; Trust</div>
                    <h3 className="text-[14.5px] font-extrabold text-[#0f172a] leading-snug">AI Onboarding &amp; Migration</h3>
                    <p className="text-[12px] text-slate-500 mt-0.5 line-clamp-2">Go live in days from Tally XML/Excel, BOMs &amp; WhatsApp exports.</p>
                  </div>
                </button>
              </div>

              {/* Right Column: Interactive Workspace Panel (8 cols) */}
              <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 shadow-[0_18px_45px_-15px_rgba(0,111,201,0.08)] overflow-hidden flex flex-col justify-between">
                {/* ===============================================================
                     PANEL 1: ASK MOSSIE WORKSPACE
                     =============================================================== */}
                {activeSuite === "ask-mossie" && (
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-5">
                      <div>
                        <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wider text-[#006fc9] bg-blue-50 px-3 py-1 rounded-full mb-2">
                          <span>WhatsApp + Web + Voice Copilot</span>
                        </div>
                        <h3 className="text-[22px] font-extrabold text-[#0b192c]">Ask Mossie — Talk to Your Business</h3>
                        <p className="text-[13.5px] text-slate-500 mt-1 max-w-[520px]">
                          Answers questions across WhatsApp, web, and voice notes using live tenant data, links every figure back to source records, and executes approvals on command.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleOpenCopilot("Send my 9 AM daily brief covering cash, receivables, shortages, downtime & compliance")}
                        className="bg-[#006fc9] hover:bg-[#005fae] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-2xs shrink-0 cursor-pointer"
                      >
                        Open Live Copilot →
                      </button>
                    </div>

                    {/* Interactive Language Switcher + Live Chat Preview */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                      <div className="md:col-span-5 flex flex-col justify-between space-y-4">
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                            Click a Language to Preview Voice/Chat:
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {(["en", "hinglish", "hi", "gu", "mr", "ta"] as LangKey[]).map((langKey) => (
                              <button
                                key={langKey}
                                type="button"
                                onClick={() => setSelectedLang(langKey)}
                                className={`text-[11.5px] font-semibold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                                  selectedLang === langKey
                                    ? "bg-[#006fc9] text-white shadow-2xs"
                                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                                }`}
                              >
                                {ASTRA_LANGS[langKey].badge}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2.5 text-[12.5px] text-slate-600 bg-slate-50 rounded-2xl p-4 border border-slate-200/60">
                          <div className="flex items-start gap-2">
                            <span className="text-[#006fc9] font-bold">•</span>
                            <span><strong>Source Record Grounding:</strong> Every number links directly to invoices, POs, or ledgers.</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-[#006fc9] font-bold">•</span>
                            <span><strong>Approval Actions:</strong> Approve POs, remind overdue customers, or log leave requests.</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-[#006fc9] font-bold">•</span>
                            <span><strong>Daily 9:00 AM Brief:</strong> Cash position, overdue receivables, order shortages, machine downtime &amp; compliance deadlines.</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Simulated WhatsApp / Web Copilot Card */}
                      <div className="md:col-span-7 bg-[#f4f7ff] rounded-2xl p-4 border border-blue-100 flex flex-col justify-between space-y-3">
                        <div className="flex items-center justify-between border-b border-blue-200/60 pb-2.5">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-extrabold text-slate-800">Ask Mossie — WhatsApp &amp; Voice Feed</span>
                          </div>
                          <span className="text-[10.5px] font-bold bg-white text-[#006fc9] px-2.5 py-0.5 rounded-full border border-blue-200">
                            {ASTRA_LANGS[selectedLang].badge}
                          </span>
                        </div>

                        {/* User Bubble */}
                        <div className="bg-[#006fc9] text-white rounded-2xl rounded-tr-none px-3.5 py-2.5 text-xs self-end max-w-[90%] shadow-2xs">
                          <div className="text-[10px] text-blue-200 font-semibold mb-0.5">🎤 Voice Note / WhatsApp Query</div>
                          <div>{ASTRA_LANGS[selectedLang].q}</div>
                        </div>

                        {/* Mossie Reply */}
                        <div className="bg-white rounded-2xl rounded-tl-none p-3.5 border border-slate-200/80 text-xs text-slate-700 space-y-2 shadow-2xs">
                          <div
                            className="leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: ASTRA_LANGS[selectedLang].a }}
                          />
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            <button
                              type="button"
                              onClick={() => handleOpenCopilot("Approve Purchase Order #PO-4092 for 420 kg CRCA sheet")}
                              className="text-[11px] font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-lg cursor-pointer"
                            >
                              ✓ Approve PO #PO-4092
                            </button>
                            <button
                              type="button"
                              onClick={() => handleOpenCopilot("Send WhatsApp payment reminder to Mehta Auto for overdue invoice #INV-882")}
                              className="text-[11px] font-bold bg-blue-50 hover:bg-blue-100 text-[#006fc9] border border-blue-200 px-2.5 py-1 rounded-lg cursor-pointer"
                            >
                              Remind Overdue Customer
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ===============================================================
                     PANEL 2: COMPLIANCE GUARDIAN WORKSPACE
                     =============================================================== */}
                {activeSuite === "compliance-guardian" && (
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-4">
                      <div>
                        <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wider text-[#d97706] bg-amber-50 px-3 py-1 rounded-full mb-2">
                          <span>Unified Compliance Calendar &amp; Proactive Agent</span>
                        </div>
                        <h3 className="text-[22px] font-extrabold text-[#0b192c]">Compliance Guardian — 8 Statutory Engines</h3>
                        <p className="text-[13.5px] text-slate-500 mt-1 max-w-[540px]">
                          Click any of the 8 compliance modules below to inspect how Mossie ERP protects input tax credit (ITC), prevents statutory penalties, and automates filings.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleOpenCopilot("Run full Compliance Guardian diagnostic across IMS, GSTR-2B, E-invoice, Section 43B(h), 194Q & Payroll")}
                        className="bg-[#006fc9] hover:bg-[#005fae] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-2xs shrink-0 cursor-pointer"
                      >
                        Run Full Audit →
                      </button>
                    </div>

                    {/* 8 Compliance Tiles */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {(Object.keys(COMP_DATA) as CompKey[]).map((key) => {
                        const item = COMP_DATA[key];
                        const isActive = selectedComp === key;
                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => setSelectedComp(key)}
                            className={`text-left p-3 rounded-2xl border transition-all cursor-pointer ${
                              isActive ? styles.compTileActive : "border-slate-200 bg-white hover:border-slate-300"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[10px] font-bold uppercase text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-full">
                                {item.subBadge}
                              </span>
                              <span className={`w-2 h-2 rounded-full ${isActive ? "bg-amber-500" : "bg-slate-300"}`} />
                            </div>
                            <div className="text-[12.5px] font-extrabold text-slate-900 leading-tight">{item.title.split(" — ")[0]}</div>
                            <div className="text-[11px] text-slate-500 truncate mt-0.5">{item.badge.split(": ")[0]}</div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Live Inspector Card for Selected Compliance Capability */}
                    <div className="bg-[#fffbeb] border border-amber-200/80 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="text-sm font-extrabold text-slate-900">{activeCompData.title}</div>
                        <p className="text-xs text-slate-600 leading-relaxed">{activeCompData.desc}</p>
                      </div>
                      <div className="bg-white border border-amber-200 rounded-xl px-3.5 py-2 text-xs font-bold text-amber-800 shrink-0">
                        {activeCompData.badge}
                      </div>
                    </div>
                  </div>
                )}

                {/* ===============================================================
                     PANEL 3: CASH PILOT WORKSPACE
                     =============================================================== */}
                {activeSuite === "cash-pilot" && (
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-4">
                      <div>
                        <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wider text-[#0f9d60] bg-emerald-50 px-3 py-1 rounded-full mb-2">
                          <span>13-Week Rolling Cash Forecast &amp; Working-Capital Engine</span>
                        </div>
                        <h3 className="text-[22px] font-extrabold text-[#0b192c]">Cash Pilot — Forecast &amp; Scenario Simulator</h3>
                        <p className="text-[13.5px] text-slate-500 mt-1 max-w-[540px]">
                          Forecasts weekly cash using open sales orders, predicted customer payment dates, POs, bills, payroll, GST/TDS/PF dues, Section 43B(h) deadlines, and EMIs.
                        </p>
                      </div>

                      {/* Scenario Switcher Buttons */}
                      <div className="flex flex-wrap gap-1.5">
                        <button
                          type="button"
                          onClick={() => setSelectedCashScenario("baseline")}
                          className={`text-[11px] font-bold px-3 py-1.5 rounded-lg cursor-pointer transition-all ${
                            selectedCashScenario === "baseline" ? "bg-[#0f9d60] text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                          }`}
                        >
                          Baseline 13-Wk
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedCashScenario("mehta")}
                          className={`text-[11px] font-bold px-3 py-1.5 rounded-lg cursor-pointer transition-all ${
                            selectedCashScenario === "mehta" ? "bg-[#0f9d60] text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                          }`}
                        >
                          “What if Mehta Auto pays 30d late?”
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedCashScenario("machine")}
                          className={`text-[11px] font-bold px-3 py-1.5 rounded-lg cursor-pointer transition-all ${
                            selectedCashScenario === "machine" ? "bg-[#0f9d60] text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                          }`}
                        >
                          “Afford ₹18L machine in Nov?”
                        </button>
                      </div>
                    </div>

                    {/* Interactive 13-Week Bar Chart + Action Recommendations */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                      {/* 13-Week Visual Forecast Bars (7 cols) */}
                      <div className="md:col-span-7 bg-slate-50 rounded-2xl p-4 border border-slate-200/80 flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-extrabold text-slate-800">{activeCash.label}</span>
                          <span className={activeCash.minBadgeClass}>{activeCash.minBadge}</span>
                        </div>

                        {/* 13 Bars */}
                        <div className="h-32 flex items-end justify-between gap-1.5 pt-4 px-1 border-b border-slate-200">
                          {activeCash.bars.map((val, idx) => {
                            const pct = Math.max(14, Math.min(100, Math.round((val / 55) * 100)));
                            let barColor = val < 15 ? "bg-amber-500" : "bg-[#0f9d60]";
                            if (selectedCashScenario === "machine" && idx === 8) barColor = "bg-red-500";
                            return (
                              <div key={idx} className="flex-1 flex flex-col items-center justify-end h-full group relative">
                                <span className="text-[9px] font-bold text-slate-500 mb-1">{Math.round(val)}</span>
                                <div className={`${styles.barCol} w-full rounded-t-md ${barColor}`} style={{ height: `${pct}%` }} />
                              </div>
                            );
                          })}
                        </div>
                        <div className="flex justify-between text-[10px] font-semibold text-slate-400 pt-1.5 px-1">
                          {["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12", "W13"].map((w) => (
                            <span key={w}>{w}</span>
                          ))}
                        </div>
                      </div>

                      {/* Recommended Working-Capital Actions (5 cols) */}
                      <div className="md:col-span-5 bg-[#f2fbf6] rounded-2xl p-4 border border-emerald-200/80 flex flex-col justify-between space-y-3">
                        <div>
                          <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#0f9d60] mb-1">Recommended Actions</div>
                          <div className="text-xs font-bold text-slate-900 mb-2">{activeCash.headline}</div>
                          <ul className="space-y-2 text-[12px] text-slate-600">
                            {activeCash.actions.map((act, i) => (
                              <li key={i}>• {act}</li>
                            ))}
                          </ul>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleOpenCopilot("What if Mehta Auto pays 30 days late?")}
                          className="w-full bg-[#0f9d60] hover:bg-[#0c824f] text-white text-xs font-bold py-2.5 rounded-xl transition-colors cursor-pointer"
                        >
                          Simulate Custom Scenario in Copilot →
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ===============================================================
                     PANEL 4: ORDER-TO-SHORTAGE AGENT WORKSPACE
                     =============================================================== */}
                {activeSuite === "order-to-shortage" && (
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-4">
                      <div>
                        <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wider text-[#8b2cf5] bg-purple-50 px-3 py-1 rounded-full mb-2">
                          <span>Autonomous Factory &amp; Supply Chain Workflow</span>
                        </div>
                        <h3 className="text-[22px] font-extrabold text-[#0b192c]">Order-to-Shortage Agent — 6-Step Pipeline</h3>
                        <p className="text-[13.5px] text-slate-500 mt-1 max-w-[540px]">
                          Connects sales, production planning, procurement, and cash over event-driven contracts (<code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">CRM→Sales</code> &amp; <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">Sales→Inventory</code>). Click any step to inspect:
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleOpenCopilot("Run Order-to-Shortage feasibility check for today’s POs")}
                        className="bg-[#006fc9] hover:bg-[#005fae] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-2xs shrink-0 cursor-pointer"
                      >
                        Run Agent Live →
                      </button>
                    </div>

                    {/* 6 Interactive Pipeline Steps */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                      {(["1", "2", "3", "4", "5", "6"] as OtsStepKey[]).map((stepKey) => {
                        const step = OTS_DATA[stepKey];
                        const isActive = selectedOtsStep === stepKey;
                        return (
                          <button
                            key={stepKey}
                            type="button"
                            onClick={() => setSelectedOtsStep(stepKey)}
                            className={`text-left p-3 rounded-2xl border transition-all cursor-pointer ${
                              isActive ? styles.otsStepActive : "border-slate-200 bg-white hover:border-slate-300"
                            }`}
                          >
                            <div className="text-[10px] font-extrabold uppercase text-[#8b2cf5]">Step 0{stepKey}</div>
                            <div className="text-xs font-extrabold text-slate-900 mt-0.5 leading-tight">{step.title.split(": ")[1]}</div>
                            <div className="text-[11px] text-slate-500 mt-0.5 leading-snug truncate">{step.desc}</div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Live Step Inspector Card */}
                    <div className="bg-[#faf7ff] border border-purple-200/80 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="text-sm font-extrabold text-slate-900 mb-1">{activeOtsData.title}</div>
                        <p className="text-xs text-slate-600 leading-relaxed">{activeOtsData.desc}</p>
                      </div>
                      <span className="bg-white border border-purple-200 rounded-xl px-3.5 py-2 text-xs font-bold text-[#8b2cf5] shrink-0">
                        {activeOtsData.badge}
                      </span>
                    </div>
                  </div>
                )}

                {/* ===============================================================
                     PANEL 5: AI ONBOARDING / MIGRATION WORKSPACE
                     =============================================================== */}
                {activeSuite === "ai-onboarding" && (
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-4">
                      <div>
                        <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wider text-[#f25122] bg-orange-50 px-3 py-1 rounded-full mb-2">
                          <span>Go Live in Days Rather Than Months</span>
                        </div>
                        <h3 className="text-[22px] font-extrabold text-[#0b192c]">AI Onboarding &amp; Tally Migration</h3>
                        <p className="text-[13.5px] text-slate-500 mt-1 max-w-[540px]">
                          Eliminates months of manual ERP setup by ingesting your existing files, mapping ledgers, cleaning duplicates, and presenting an interactive Import-Review screen.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleOpenCopilot("Preview Tally XML & WhatsApp export migration summary")}
                        className="bg-[#006fc9] hover:bg-[#005fae] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-2xs shrink-0 cursor-pointer"
                      >
                        Preview Migration →
                      </button>
                    </div>

                    {/* 3-Stage Migration Architecture Visual */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
                      {/* Col 1: Legacy Inputs */}
                      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2.5">
                        <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">1. Legacy Data Sources</div>
                        <div className="bg-white rounded-xl p-2.5 border border-slate-200/70 text-xs font-semibold text-slate-800">📄 Tally XML &amp; Excel Exports</div>
                        <div className="bg-white rounded-xl p-2.5 border border-slate-200/70 text-xs font-semibold text-slate-800">📦 Item Lists &amp; Excel BOMs</div>
                        <div className="bg-white rounded-xl p-2.5 border border-slate-200/70 text-xs font-semibold text-slate-800">🏷️ Price Lists &amp; Employee Sheets</div>
                        <div className="bg-white rounded-xl p-2.5 border border-slate-200/70 text-xs font-semibold text-slate-800">💬 WhatsApp Chat Exports</div>
                      </div>

                      {/* Col 2: AI Mapping & Structuring */}
                      <div className="bg-[#fff6f3] rounded-2xl p-4 border border-orange-200/80 space-y-2.5">
                        <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#f25122]">2. AI Intelligence Engine</div>
                        <div className="bg-white rounded-xl p-2.5 border border-orange-200/60 text-xs text-slate-700">
                          <strong className="text-slate-900">CoA Mapping:</strong> Maps Tally ledgers to Mossie ERP Chart of Accounts
                        </div>
                        <div className="bg-white rounded-xl p-2.5 border border-orange-200/60 text-xs text-slate-700">
                          <strong className="text-slate-900">Deduplication:</strong> Merges duplicate customer &amp; vendor masters
                        </div>
                        <div className="bg-white rounded-xl p-2.5 border border-orange-200/60 text-xs text-slate-700">
                          <strong className="text-slate-900">Tax &amp; UoM Inference:</strong> Infers categories, HSN codes &amp; UoMs
                        </div>
                        <div className="bg-white rounded-xl p-2.5 border border-orange-200/60 text-xs text-slate-700">
                          <strong className="text-slate-900">Factory Setup:</strong> Builds draft multi-level BOMs &amp; routings
                        </div>
                      </div>

                      {/* Col 3: Import-Review Screen */}
                      <div className="bg-[#f4f7ff] rounded-2xl p-4 border border-blue-200/80 flex flex-col justify-between space-y-3">
                        <div>
                          <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#006fc9] mb-2">3. Import-Review Screen</div>
                          <p className="text-xs text-slate-600 leading-relaxed mb-3">
                            Nothing is committed blindly—review, edit, and approve mapped ledgers, deduplicated parties, and draft BOMs before final cutover.
                          </p>
                          <div className="space-y-1.5 text-[11.5px]">
                            <div className="flex justify-between bg-white px-3 py-1.5 rounded-lg border border-blue-100">
                              <span className="text-slate-600">Ledgers Mapped</span>
                              <span className="font-bold text-emerald-600">99.4% Confidence</span>
                            </div>
                            <div className="flex justify-between bg-white px-3 py-1.5 rounded-lg border border-blue-100">
                              <span className="text-slate-600">Duplicates Merged</span>
                              <span className="font-bold text-[#006fc9]">38 Records</span>
                            </div>
                            <div className="flex justify-between bg-white px-3 py-1.5 rounded-lg border border-blue-100">
                              <span className="text-slate-600">HSN Codes Inferred</span>
                              <span className="font-bold text-[#006fc9]">610 Items</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-[11px] font-bold text-slate-700 bg-white/90 px-3 py-2 rounded-xl border border-slate-200 text-center">
                          Go Live in Days, Not Months
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* VIEW 2: ALL-IN-ONE BENTO GRID OVERVIEW */}
          {viewMode === "bento" && (
            <div id="bento-overview" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Bento Card 1: Ask Mossie */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs flex flex-col justify-between hover:border-blue-300 transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#006fc9] bg-blue-50 px-3 py-1 rounded-full">Pillar A • Copilot</span>
                    <span className="text-[11px] font-semibold text-slate-400">WhatsApp • Web • Voice</span>
                  </div>
                  <h3 className="text-[17px] font-extrabold text-[#0b192c] mb-2">Ask Mossie Copilot</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed mb-4">
                    Answers business questions in <strong>English, Hinglish, Hindi, Gujarati, Marathi, and Tamil</strong> with direct links to source records. Executes PO approvals, payment reminders, and leave requests, and sends a <strong>9 AM daily brief</strong>.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-500">9 AM Daily Plant &amp; Cash Brief</span>
                  <button type="button" onClick={() => jumpToSuite("ask-mossie")} className="font-bold text-[#006fc9] hover:underline cursor-pointer">
                    Explore →
                  </button>
                </div>
              </div>

              {/* Bento Card 2: Compliance Guardian */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs flex flex-col justify-between hover:border-amber-300 transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#d97706] bg-amber-50 px-3 py-1 rounded-full">Pillar B • Statutory</span>
                    <span className="text-[11px] font-semibold text-slate-400">8 Automated Engines</span>
                  </div>
                  <h3 className="text-[17px] font-extrabold text-[#0b192c] mb-2">Compliance Guardian</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed mb-4">
                    Unifies <strong>IMS copilot</strong> (PO/GRN/bill match &amp; ITC protection), <strong>GSTR-2B vs. books</strong>, <strong>E-invoice Day 25 clock</strong>, <strong>E-way bills</strong>, <strong>Section 43B(h)</strong> Udyam 15/45-day rankings, <strong>Section 194Q</strong> (₹50L TDS), <strong>PF/ESI payroll</strong>, and <strong>GST 2.0 HSN audit</strong>.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-500">Proactive Indian Tax &amp; Payroll</span>
                  <button type="button" onClick={() => jumpToSuite("compliance-guardian")} className="font-bold text-[#006fc9] hover:underline cursor-pointer">
                    Explore →
                  </button>
                </div>
              </div>

              {/* Bento Card 3: Cash Pilot */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs flex flex-col justify-between hover:border-emerald-300 transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0f9d60] bg-emerald-50 px-3 py-1 rounded-full">Pillar C • Working Capital</span>
                    <span className="text-[11px] font-semibold text-slate-400">13-Week Horizon</span>
                  </div>
                  <h3 className="text-[17px] font-extrabold text-[#0b192c] mb-2">Cash Pilot Forecast</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed mb-4">
                    Rolling 13-week cash forecast across sales orders, predicted customer payments, bills, payroll, GST/TDS/PF, Sec 43B(h) deadlines, and EMIs. Simulates what-if scenarios and recommends collections, <strong>TReDS discounting</strong>, and payment timing.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-500">Interactive Scenario Simulator</span>
                  <button type="button" onClick={() => jumpToSuite("cash-pilot")} className="font-bold text-[#006fc9] hover:underline cursor-pointer">
                    Explore →
                  </button>
                </div>
              </div>

              {/* Bento Card 4: Order-to-Shortage Agent */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs flex flex-col justify-between hover:border-purple-300 transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8b2cf5] bg-purple-50 px-3 py-1 rounded-full">Pillar D • Factory</span>
                    <span className="text-[11px] font-semibold text-slate-400">6-Step Autonomous Flow</span>
                  </div>
                  <h3 className="text-[17px] font-extrabold text-[#0b192c] mb-2">Order-to-Shortage Agent</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed mb-4">
                    Captures POs from WhatsApp/email/portal into draft sales orders, checks stock, BOM explosion, work-center capacity &amp; subcontract lead times, drafts shortage RFQs with vendor scores, checks Cash Pilot impact, and presents 1-tap approvals.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-500">Event-Driven Sales → Factory → Cash</span>
                  <button type="button" onClick={() => jumpToSuite("order-to-shortage")} className="font-bold text-[#006fc9] hover:underline cursor-pointer">
                    Explore →
                  </button>
                </div>
              </div>

              {/* Bento Card 5: AI Onboarding / Migration */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs flex flex-col justify-between hover:border-orange-300 transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#f25122] bg-orange-50 px-3 py-1 rounded-full">Pillar G • Adoption</span>
                    <span className="text-[11px] font-semibold text-slate-400">Switch from Tally</span>
                  </div>
                  <h3 className="text-[17px] font-extrabold text-[#0b192c] mb-2">AI Onboarding &amp; Migration</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed mb-4">
                    Imports Tally XML/Excel exports, item lists, Excel BOMs, price lists, employee sheets, and WhatsApp chats. Maps ledgers to Chart of Accounts, deduplicates parties, infers HSN &amp; UoMs, and builds draft BOMs with an import-review screen.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-500">Go Live in Days, Not Months</span>
                  <button type="button" onClick={() => jumpToSuite("ai-onboarding")} className="font-bold text-[#006fc9] hover:underline cursor-pointer">
                    Explore →
                  </button>
                </div>
              </div>

              {/* Bento Card 6: Job-Work Intelligence */}
              <div className="bg-gradient-to-br from-[#0b192c] via-[#006fc9] to-[#2563eb] text-white rounded-3xl p-6 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-white/20 px-3 py-1 rounded-full">India Manufacturing Moat</span>
                    <span className="text-[11px] font-semibold text-blue-100">Subcontracting AI</span>
                  </div>
                  <h3 className="text-[17px] font-extrabold mb-2">Job-Work Intelligence</h3>
                  <p className="text-[13px] text-blue-100 leading-relaxed mb-4">
                    Purpose-built for Indian subcontracting workflows—tracking outward/inward job-work challans, process lead times, scrap and yield reconciliation, and statutory GST job-work return deadlines seamlessly alongside Order-to-Shortage.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs">
                  <span className="font-semibold text-blue-100">Connected Across All 8 Modules</span>
                  <button
                    type="button"
                    onClick={() => handleOpenCopilot("Show how Job-Work Intelligence tracks subcontract challans, scrap reconciliation, and lead times")}
                    className="font-bold text-white underline cursor-pointer hover:text-blue-200"
                  >
                    Ask Copilot →
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================================
           UNIFIED PLATFORM BANNER: "One AI Platform. Every Department."
           ===================================================================== */}
      <section id="departments" className="pb-16 pt-12 bg-white">
        <div className="max-w-[1040px] mx-auto px-5 sm:px-8">
          <div className="bg-[#f4f6fb] rounded-[28px] border border-slate-200/70 px-6 sm:px-12 py-10 text-center shadow-[0_6px_28px_rgba(15,23,42,0.03)]">
            <h2 className="text-[20px] sm:text-[23px] font-extrabold text-[#0b192c] tracking-tight mb-2.5">
              One AI Platform. Every Department.
            </h2>
            <p className="text-[13.5px] sm:text-[14px] text-slate-500 leading-relaxed max-w-[500px] mx-auto mb-8">
              Unified AI capabilities across Finance, Sales, Inventory, Manufacturing,
              <br className="hidden sm:inline" />
              HR, Projects and more.
            </p>

            {/* 8 Department Icon Badges Row */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 sm:gap-3 max-w-[780px] mx-auto">
              {(["Finance", "Sales", "Inventory", "Manufacturing", "HR", "Projects", "Purchase", "CRM"] as DeptKey[]).map((dKey) => {
                const isActive = selectedDept === dKey;
                return (
                  <button
                    key={dKey}
                    type="button"
                    onClick={() => {
                      setSelectedDept(dKey);
                      setDeptCardOpen(true);
                    }}
                    className={`${styles.deptBtn} group flex flex-col items-center focus:outline-none cursor-pointer`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl text-white flex items-center justify-center shadow-2xs mb-2 transition-all ${
                        isActive ? styles.deptBtnActive : ""
                      } ${
                        dKey === "Finance"
                          ? "bg-gradient-to-b from-[#1ba5c4] to-[#1287a3]"
                          : dKey === "Sales"
                          ? "bg-gradient-to-b from-[#29c47e] to-[#1aa164]"
                          : dKey === "Inventory"
                          ? "bg-gradient-to-b from-[#20acc2] to-[#158da1]"
                          : dKey === "Manufacturing"
                          ? "bg-gradient-to-b from-[#006fc9] to-[#005fae]"
                          : dKey === "HR"
                          ? "bg-gradient-to-b from-[#a073ff] to-[#8454eb]"
                          : dKey === "Projects"
                          ? "bg-gradient-to-b from-[#b459ff] to-[#963de6]"
                          : dKey === "Purchase"
                          ? "bg-gradient-to-b from-[#3950f2] to-[#263ad4]"
                          : "bg-gradient-to-b from-[#006fc9] to-[#004e8f]"
                      }`}
                    >
                      {dKey === "Finance" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <rect x="5" y="4" width="14" height="16" rx="2" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6M9 13h6M9 17h4" />
                        </svg>
                      )}
                      {dKey === "Sales" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <rect x="4" y="4" width="16" height="16" rx="3" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 14l2.5-2.5 2 2L16 10" />
                        </svg>
                      )}
                      {dKey === "Inventory" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <rect x="4" y="4" width="16" height="16" rx="2" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 4v6h6V4M8 15h4" />
                        </svg>
                      )}
                      {dKey === "Manufacturing" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16V10l-4 3V10l-4 3V7H4v13z" />
                        </svg>
                      )}
                      {dKey === "HR" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="9" cy="9" r="2.5" />
                          <circle cx="15" cy="9" r="2.5" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 18c0-2 2-3.5 4-3.5s4 1.5 4 3.5m0 0c0-2 1.8-3.5 3.5-3.5S20 16 20 18" />
                        </svg>
                      )}
                      {dKey === "Projects" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <rect x="5" y="4" width="14" height="16" rx="2" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                        </svg>
                      )}
                      {dKey === "Purchase" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 6h2l1.5 8h8l1.5-6H8" />
                          <circle cx="10" cy="18" r="1.3" />
                          <circle cx="16" cy="18" r="1.3" />
                        </svg>
                      )}
                      {dKey === "CRM" && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <rect x="4" y="4" width="16" height="16" rx="3" />
                          <circle cx="12" cy="10" r="2.5" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 17c.8-1.8 2.2-2.7 4-2.7s3.2.9 4 2.7" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-[12px] font-semibold transition-colors ${isActive ? "text-[#006fc9] font-bold" : "text-slate-700 group-hover:text-[#006fc9]"}`}>
                      {dKey}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Interactive Department AI Capability Preview Pill */}
            {deptCardOpen && (
              <div className="mt-7 bg-white rounded-2xl border border-slate-200/80 p-4 max-w-[700px] mx-auto text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm animate-fade-in">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#006fc9]" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#006fc9]">
                      {activeDeptInfo.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{activeDeptInfo.desc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenCopilot(activeDeptInfo.prompt)}
                  className="bg-[#006fc9] hover:bg-[#005fae] text-white text-xs font-semibold px-4 py-2 rounded-xl shrink-0 cursor-pointer transition-colors"
                >
                  Test in Ask Mossie →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================================
           MODAL 1: INTERACTIVE ASK MOSSIE COPILOT MODAL
           ===================================================================== */}
      {isCopilotOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 animate-scale-up">
            <div className="bg-gradient-to-r from-[#0b192c] via-[#006fc9] to-[#2563eb] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-cyan-300 animate-pulse" />
                <div>
                  <h3 className="text-sm font-bold leading-none">Ask Mossie — WhatsApp + Web + Voice Copilot</h3>
                  <span className="text-[11px] text-blue-100">English • Hinglish • हिंदी • ગુજરાતી • मराठी • தமிழ்</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsCopilotOpen(false)}
                className="text-white/80 hover:text-white text-lg font-bold px-2 cursor-pointer"
                aria-label="Close copilot"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 h-64 overflow-y-auto space-y-3 text-xs">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className={`flex items-start gap-2.5 ${msg.sender === "user" ? "justify-end" : ""}`}>
                    {msg.sender === "ai" && (
                      <span className="w-6 h-6 rounded-full bg-[#006fc9] text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                        AI
                      </span>
                    )}
                    <div
                      className={`rounded-2xl px-3.5 py-2.5 text-xs shadow-2xs max-w-[85%] leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-[#006fc9] text-white rounded-tr-none"
                          : "bg-white border border-slate-200/80 text-slate-700 rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Prompt Chips */}
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => sendCopilotMessage("What if Mehta Auto pays 30 days late?")}
                  className="text-[11px] font-medium bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                >
                  “What if Mehta Auto pays 30 days late?”
                </button>
                <button
                  type="button"
                  onClick={() => sendCopilotMessage("Can we afford this ₹18L machine in November?")}
                  className="text-[11px] font-medium bg-blue-50 hover:bg-blue-100 text-[#006fc9] px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                >
                  “Can we afford this ₹18L machine in November?”
                </button>
                <button
                  type="button"
                  onClick={() => sendCopilotMessage("Run Compliance Guardian check for Section 43B(h) & GSTR-2B")}
                  className="text-[11px] font-medium bg-amber-50 hover:bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                >
                  Check Sec 43B(h) &amp; GSTR-2B
                </button>
              </div>

              {/* Input Form */}
              <form onSubmit={handleChatSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask in English, Hinglish, Hindi, Gujarati, Marathi, or Tamil..."
                  className="flex-1 rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#006fc9] focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#006fc9] hover:bg-[#005fae] text-white text-xs font-semibold px-4 py-2.5 rounded-xl cursor-pointer transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
           MODAL 2: WATCH VIDEO / WALKTHROUGH MODAL
           ===================================================================== */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-100 animate-scale-up">
            <div className="bg-[#0b192c] text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-sm font-bold">Mossie ERP — AI Capabilities Walkthrough</h3>
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="text-slate-400 hover:text-white text-lg font-bold px-2 cursor-pointer"
                aria-label="Close video modal"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="rounded-2xl overflow-hidden bg-[#eef6ff] border border-slate-200/80 p-4 flex flex-col sm:flex-row items-center gap-5">
                <div className="w-36 h-28 relative shrink-0">
                  <Image
                    src="/images/ai-features-pageimg/mossie-ai-robot.png"
                    alt="Mossie AI Walkthrough"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#006fc9] bg-blue-100/80 px-2.5 py-1 rounded-full mb-2">
                    Interactive Product Tour
                  </span>
                  <h4 className="text-base font-extrabold text-slate-900 mb-1">Built for Growing Enterprises &amp; Manufacturing</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Explore how Ask Mossie (WhatsApp/Voice), Compliance Guardian (GST/MSME 43B(h)/194Q), Cash Pilot (13-week forecast), Order-to-Shortage Agent, and Tally AI Migration work together as one calm platform.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <PopupCtaButton className="bg-[#006fc9] hover:bg-[#005fae] text-white text-xs font-semibold px-5 py-2.5 rounded-full cursor-pointer">
                  <span>Schedule 1-on-1 Live Demo</span>
                </PopupCtaButton>
                <button
                  type="button"
                  onClick={() => {
                    setIsVideoOpen(false);
                    setIsCopilotOpen(true);
                  }}
                  className="text-[#006fc9] hover:underline text-xs font-bold cursor-pointer"
                >
                  Launch Ask Mossie Copilot →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
