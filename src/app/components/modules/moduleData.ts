// Comprehensive Data Store for Next-Gen Module Details Pages
// Recreating the exact UX architecture, proprietary edge features,
// competitive benchmarks, categorized feature matrix, and connected workflows
// from module-details-preview.html across all 8 Mossie ERP modules.

export type FeatureIconName =
  | "messages" | "activity" | "files" | "scan" | "building" | "calendar"
  | "route" | "receipt" | "truck" | "ledger" | "boxes" | "refresh"
  | "warehouse" | "barcode" | "coins" | "factory" | "lock" | "layers"
  | "clock" | "chart" | "bank" | "shield" | "network" | "undo"
  | "asset" | "check" | "calculator" | "git" | "gauge" | "monitor"
  | "fingerprint" | "users" | "wallet" | "folder" | "gantt" | "kanban" | "target";

export interface FeatureVisual {
  title: string;
  icon: FeatureIconName;
  kind: "approvals" | "pipeline" | "versions" | "matching" | "stock" | "ledger" | "schedule" | "people" | "production" | "quality";
  tone: "blue" | "green" | "orange" | "purple" | "rose";
  metric: string;
  steps: [string, string, string];
}

export interface EdgeSuperpower {
  summary: string;
  visual: FeatureVisual;
  id: string;
  number: number;
  icon: string;
  gradient: string;
  shadowColor: string;
  tagBg: string;
  title: string;
  description: string;
  legacyComparison: string;
  mossiComparison: string;
  impactMetric: string;
  impactColor: string;
}

export interface ComparisonRow {
  metric: string;
  metricDesc: string;
  mossi: {
    highlight: string;
    detail: string;
  };
  legacy: {
    highlight: string;
    detail: string;
  };
  pointSolution: {
    highlight: string;
    detail: string;
  };
}

export interface CategorizedFeatureItem {
  visual: FeatureVisual;
  id: string;
  category: string;
  categoryLabel: string;
  tagTone: string;
  icon: string;
  iconBg: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface FeatureCategory {
  id: string;
  label: string;
  description?: string;
  icon?: string;
}

export interface WorkflowStage {
  stepNumber: number;
  title: string;
  subtitle: string;
  detailTitle: string;
  detailDescription: string;
  latency: string;
  icon?: string;
  metricLabel?: string;
}

export interface SwitcherTestimonial {
  badge: string;
  quote: string;
  userName: string;
  userRole: string;
  userCompany: string;
  initials: string;
}

export interface RoiImpactMetric {
  value: string;
  label: string;
  description: string;
  color: string;
}

// export interface ModuleHeroMetrics {
//   stat1: { value: string; label: string };
//   stat2: { value: string; label: string };
//   stat3: { value: string; label: string };
//   stat4: { value: string; label: string };
// }

export interface KanbanColumn {
  stageName: string;
  amount: string;
  cardTitle: string;
  cardDesc: string;
  cardTag: string;
  cardTagStyle: string;
  isHighlighted?: boolean;
}

export interface ModulePreviewConfig {
  slug: string;
  moduleName: string;
  badge: string;
  heroHeadline: string;
  heroHighlight: string;
  heroDescription: string;
  chip1: string;
  chip2: string;
  chip3: string;
  // heroMetrics: ModuleHeroMetrics;
  mockup: {
    windowTitle: string;
    liveBadge: string;
    topMetrics: [
      { label: string; value: string; sub: string; subColor: string },
      { label: string; value: string; sub: string; subColor: string },
      { label: string; value: string; sub: string; subColor: string }
    ];
    kanbanTitle: string;
    kanbanSubtitle: string;
    columns: [KanbanColumn, KanbanColumn, KanbanColumn];
    alertText: string;
    alertAction: string;
  };
  edge: {
    eyebrow?: string;
    title: string;
    titleHighlight: string;
    description: string;
    superpowers: EdgeSuperpower[];
  };
  comparison: {
    eyebrow: string;
    title: string;
    subtitle: string;
    competitor1Name: string;
    competitor2Name: string;
    rows: ComparisonRow[];
  };
  featuresCatalog: {
    previewName: string;
    headline: { action: string; description: string };
    eyebrow: string;
    title: string;
    subtitle: string;
    categories: FeatureCategory[];
    items: CategorizedFeatureItem[];
  };
  workflow: {
   
    eyebrow?: string;
    title: string;
    subtitle: string;
    steps: WorkflowStage[];
  };
  testimonialAndRoi: {
    testimonial: SwitcherTestimonial;
    impactCards: RoiImpactMetric[];
  };
  cta: {
    pill: string;
    title: string;
    description: string;
    primaryCtaText: string;
    secondaryCtaText: string;
  };
}

export const MODULE_PREVIEW_DATA: Record<string, ModulePreviewConfig> = {
  // =========================================================================
  // 1. CRM MODULE (Exact match to module-details-preview.html)
  // =========================================================================
  crm: {
    slug: "crm",
    moduleName: "CRM Module",
    badge: "Sales & Deal Automations",
    heroHeadline: "Turn Leads into Long-Term Relationships — ",
    heroHighlight: "with Intelligent Deal Automations",
    heroDescription:
      "Manage your entire sales cycle with 1-click WhatsApp quotation approvals, AI deal health tracking (>5 day stalled alerts), multi-revision quote trails, and fuzzy duplicate protection.",
    chip1: "1-Click WhatsApp Quote Approval",
    chip2: "AI Deal Health & Stalled Alerts",
    chip3: "Zero-Duplicate Fuzzy Matching",
    // heroMetrics: {
    //   stat1: { value: "1-Click", label: "Client WhatsApp Approval" },
    //   stat2: { value: ">5 Days", label: "Stalled Deal Red Alert" },
    //   stat3: { value: "100%", label: "Multi-Version Quote Trail" },
    //   stat4: { value: "0", label: "Duplicate Collisions (Fuzzy)" },
    // },
    mockup: {
      windowTitle: "mossie-erp // crm-deal-automations",
      liveBadge: "● REALTIME PIPELINE ACTIVE",
      topMetrics: [
        { label: "Active Pipeline", value: "₹4.82 Cr", sub: "↑ 18.4% this month", subColor: "text-emerald-600 font-bold" },
        { label: "Quote Approval", value: "1-Click WhatsApp", sub: "Auto Closed-Won", subColor: "text-emerald-600 font-bold" },
        { label: "Duplicate Engine", value: "Zero Collisions", sub: "Fuzzy matching active", subColor: "text-blue-600 font-bold" },
      ],
      kanbanTitle: "Opportunity Stage Tracker (Drag & Drop)",
      kanbanSubtitle: "Auto-updates ERP Ledger & Revisions",
      columns: [
        {
          stageName: "Qualified",
          amount: "₹1.2Cr",
          cardTitle: "Tata Advanced Tech",
          cardDesc: "Fuzzy Duplicates Checked (Zero Collisions)",
          cardTag: "Health: 94% Active",
          cardTagStyle: "bg-blue-50 text-blue-700",
        },
        {
          stageName: "Proposal Sent",
          amount: "₹2.1Cr",
          cardTitle: "Mahindra Logistics",
          cardDesc: "Quote QT-2026-0001-R2 • WhatsApp Link Sent",
          cardTag: "Awaiting Mobile Tap",
          cardTagStyle: "bg-amber-50 text-amber-700",
          isHighlighted: true,
        },
        {
          stageName: "Closed Won",
          amount: "₹1.5Cr",
          cardTitle: "Reliance Digital Supply",
          cardDesc: "✓ Approved via WhatsApp Tap • Auto Sales Order",
          cardTag: "Closed Won Auto-Sync",
          cardTagStyle: "bg-emerald-50 text-emerald-700",
        },
      ],
      alertText: "AI Deal Sentinel: Stalled deal #491 inactive for >5 days. Critical Red Alert triggered for sales manager.",
      alertAction: "Review Stalled Deal",
    },
    edge: {
      title: "What Extra We Provide: ",
      titleHighlight: "Sales & Deal Automations",
      description:
        "Most CRM tools are glorified address books where deals stall unnoticed, duplicate entries cause territory wars, and negotiation revisions get lost. Mossie ERP arms your revenue team with 4 proprietary sales superpowers.",
      superpowers: [
        {
          summary: "Share quotes and get client approvals instantly via WhatsApp or email.",
          visual: {"title":"WhatsApp & email approvals","icon":"messages","kind":"approvals","tone":"green","metric":"1-click approval","steps":["Quotation shared","Client approval","Deal closed"]},
          id: "sp-1",
          number: 1,
          icon: "📞",
          gradient: "from-blue-500 to-indigo-600",
          shadowColor: "shadow-blue-500/20",
          tagBg: "bg-blue-50 text-blue-700 border-blue-200",
          title: "WhatsApp & Email Quotation Approval",
          description:
            'A direct quotation link is shared with the client via WhatsApp or Email. When the client taps "Accept" or "Reject" on their mobile phone → the quotation status instantly updates to "Accepted" in the ERP with zero manual data entry, and the Deal automatically moves to the "Closed Won" stage.',
          legacyComparison:
            "✕ Legacy CRM: Sales reps chase clients across multiple phone calls and manually update quotation statuses, causing lost momentum and delayed order handoffs.",
          mossiComparison:
            '✓ Mossie ERP: "1-Click Client Quotation Approval via WhatsApp & Email." Instant automated deal conversion upon client mobile tap.',
          impactMetric: "1-Click Client Approval via WhatsApp",
          impactColor: "text-blue-600",
        },
        {
          summary: "Spot stalled deals and prompt timely follow-ups before opportunities go cold.",
          visual: {"title":"AI deal health tracker","icon":"activity","kind":"pipeline","tone":"orange","metric":"5-day stalled alerts","steps":["Engagement tracked","Risk detected","Follow-up assigned"]},
          id: "sp-2",
          number: 2,
          icon: "🎯",
          gradient: "from-amber-500 to-orange-600",
          shadowColor: "shadow-amber-500/20",
          tagBg: "bg-amber-50 text-amber-800 border-amber-200",
          title: "AI Deal Health Tracker & Stalled Alerts",
          description:
            "The system monitors customer engagement, activity cadence, and last contact date. If a prospect remains unresponsive for over 5 days, the deal is flagged with a Red/Critical Alert, notifying sales managers immediately to take action before the lead goes cold.",
          legacyComparison:
            "✕ Legacy CRM: Deals rot in pipelines unnoticed until month-end reviews when revenue targets have already been missed.",
          mossiComparison:
            '✓ Mossie ERP: "Never lose a deal — Smart Deal Health scores & proactive stalled lead alerts." Real-time critical alerts at day 5 prompt immediate intervention.',
          impactMetric: "Zero Cold Deals (>5 Day Alert)",
          impactColor: "text-amber-700",
        },
        {
          summary: "Keep every quote revision, compare changes, and preserve negotiation history.",
          visual: {"title":"Multi-revision quote trail","icon":"files","kind":"versions","tone":"purple","metric":"Every revision, saved","steps":["Original quotation","Revised quote","Version comparison"]},
          id: "sp-3",
          number: 3,
          icon: "📑",
          gradient: "from-emerald-500 to-teal-600",
          shadowColor: "shadow-emerald-500/20",
          tagBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
          title: "Multi-Revision Quotation Trail (-R1, -R2)",
          description:
            "When a client negotiates quotes or quantities, original quotes are never overwritten. The system automatically creates a parent-child versioned quote (QT-2026-0001-R1), giving you a side-by-side comparison of original vs revised numbers in one click.",
          legacyComparison:
            "✕ Legacy CRM: Reps overwrite spreadsheets or create disjointed PDF files, losing quote negotiation history and margin visibility.",
          mossiComparison:
            '✓ Mossie ERP: "Full Negotiation Audit Trail with Multi-Version Quotes." Instant side-by-side comparison of original vs revised quotes.',
          impactMetric: "Complete Negotiation Audit Trail",
          impactColor: "text-emerald-700",
        },
        {
          summary: "Catch duplicate leads before they create conflicting accounts and repeated outreach.",
          visual: {"title":"Zero-duplicate lead engine","icon":"scan","kind":"matching","tone":"blue","metric":"One trusted record","steps":["Incoming lead","Fuzzy match check","Clean customer record"]},
          id: "sp-4",
          number: 4,
          icon: "🔍",
          gradient: "from-purple-500 to-violet-600",
          shadowColor: "shadow-purple-500/20",
          tagBg: "bg-purple-50 text-purple-800 border-purple-200",
          title: "Zero-Duplicate Lead Engine (Fuzzy Matching)",
          description:
            "Even if two sales reps enter slightly different spellings of a company name or phone number, the intelligent duplicate engine intercepts the entry, preventing territory overlaps and multi-rep collisions.",
          legacyComparison:
            "✕ Legacy CRM: Reps fight over duplicated accounts and clients receive embarrassing duplicate cold calls from multiple reps.",
          mossiComparison:
            '✓ Mossie ERP: "Smart Duplicate Blocker — Clean CRM data with zero team conflict." Intelligent fuzzy matching stops duplicates before entry.',
          impactMetric: "Zero Duplicate Conflicts",
          impactColor: "text-purple-700",
        },
      ],
    },
    comparison: {
      eyebrow: "HONEST & DIRECT BENCHMARK",
      title: "How Mossie ERP CRM Compares to the Competition",
      subtitle: "Compare our automated quotation and deal engine against traditional legacy ERP suites and fragmented standalone sales apps.",
      competitor1Name: "Legacy ERPs (SAP CRM / NetSuite)",
      competitor2Name: "Fragmented Point Apps (Zoho / HubSpot)",
      rows: [
        {
          metric: "WhatsApp & Email Quotation Approval",
          metricDesc: "Speed and friction of client quotation approval and deal conversion.",
          mossi: {
            highlight: "✓ 1-Click Mobile Approval",
            detail: "Client taps Accept/Reject on WhatsApp/Email → Quote auto-updates and deal moves to Closed-Won",
          },
          legacy: {
            highlight: "✕ Multi-Day Phone Chasing",
            detail: "Sales reps chase clients manually, then re-key quote status into ERP with delayed handoffs",
          },
          pointSolution: {
            highlight: "⚠️ Disconnected Links",
            detail: "Requires expensive third-party WhatsApp add-ons without direct ERP sales order creation",
          },
        },
        {
          metric: "AI Deal Health & Stalled Alerts",
          metricDesc: "Proactive detection of cold leads and stalled sales cycles.",
          mossi: {
            highlight: "✓ >5-Day Stalled Red Alert",
            detail: "Monitors engagement cadence continuously; auto-escalates inactive deals to sales managers",
          },
          legacy: {
            highlight: "✕ Blind Pipeline Rot",
            detail: "No automated cadence alerts; stalled deals sit unnoticed until quarterly pipeline reviews",
          },
          pointSolution: {
            highlight: "⚠️ Generic Last-Contact Date",
            detail: "Displays timestamp without automated manager escalation alerts or deal health scoring",
          },
        },
        {
          metric: "Multi-Revision Quotation Trail (-R1, -R2)",
          metricDesc: "Preserving quote negotiation history without overwriting data.",
          mossi: {
            highlight: "✓ Parent-Child Versioning",
            detail: "Auto-creates versioned quotes (-R1, -R2) with 1-click side-by-side comparison of original vs revised numbers",
          },
          legacy: {
            highlight: "⚠️ Overwritten Revisions",
            detail: "Overwrites original quote or creates disconnected files that destroy the audit trail",
          },
          pointSolution: {
            highlight: "✕ Disjointed PDF Copies",
            detail: "Reps save offline PDFs with zero systemic comparison of changed line items and margins",
          },
        },
        {
          metric: "Zero-Duplicate Lead Engine",
          metricDesc: "Preventing multi-rep territory overlaps and duplicate lead entry.",
          mossi: {
            highlight: "✓ Fuzzy Name & Phone Matching",
            detail: "Intelligently intercepts typos, phonetic variations, and domains before duplicate creation",
          },
          legacy: {
            highlight: "✕ Exact Match Only",
            detail: "Fails on minor spelling differences, creating territory wars and multi-rep collisions",
          },
          pointSolution: {
            highlight: "⚠️ Post-Import Deduplication",
            detail: "Allows duplicates into database, requiring manual weekend CSV export cleanups",
          },
        },
        {
          metric: "Cross-Module Order & Stock Bridge",
          metricDesc: "Direct conversion of won deals into reservations, production, and billing.",
          mossi: {
            highlight: "✓ 100% Native Event Bus",
            detail: "Accepted quotes convert into Sales Orders, lock physical inventory, and check credit limits in 1 click",
          },
          legacy: {
            highlight: "⚠️ Nightly Batch Sync",
            detail: "Handoff between CRM and ERP takes hours or requires manual sales admin re-entry",
          },
          pointSolution: {
            highlight: "✕ Disconnected Silo",
            detail: "CRM has zero visibility into real-time factory floor stock, BOMs, or accounting ledgers",
          },
        },
      ],
    },
    featuresCatalog: {
      previewName: "CRM",
      headline: {"action":"sell smarter","description":"Powerful tools to capture, nurture, convert, and retain customers — without complexity."},
      eyebrow: "Comprehensive Functionality Catalog",
      title: "Explore All Features in the CRM Module",
      subtitle:
        "Filter by functional category or search for specific workflows like GSTIN verification, drag-and-drop Kanban, or automated lead assignment.",
      categories: [
        { id: "all", label: "All Features" },
        { id: "pipeline", label: "Lead & Pipeline" },
        { id: "conversion", label: "Conversion & Orders" },
        { id: "accounts", label: "Account 360° & GST" },
        { id: "automation", label: "Activity & Automation" },
      ],
      items: [
        {
          visual: {"title":"Zero-duplicate lead engine","icon":"scan","kind":"matching","tone":"blue","metric":"One trusted record","steps":["Incoming lead","Fuzzy match check","Clean customer record"]},
          id: "crm-f1",
          category: "pipeline",
          categoryLabel: "Lead & Pipeline",
          tagTone: "bg-purple-50 text-purple-700",
          icon: "🔍",
          iconBg: "bg-purple-50 text-purple-600",
          title: "Zero-Duplicate Lead Engine (Fuzzy Matching)",
          description: "Smart Duplicate Blocker — Clean CRM data with zero team conflict.",
          bullets: [
            "Fuzzy name, domain, and phone number collision detection",
            "Prevents territory overlaps and multi-rep cold calling collisions",
            "Auto-merges duplicate web entries while preserving complete activity history",
          ],
        },
        {
          visual: {"title":"AI deal health tracker","icon":"activity","kind":"pipeline","tone":"orange","metric":"5-day stalled alerts","steps":["Engagement tracked","Risk detected","Follow-up assigned"]},
          id: "crm-f2",
          category: "pipeline",
          categoryLabel: "Lead & Pipeline",
          tagTone: "bg-amber-50 text-amber-700",
          icon: "🎯",
          iconBg: "bg-amber-50 text-amber-600",
          title: "AI Deal Health Tracker & Stalled Alerts",
          description: "Never lose a deal — Smart Deal Health scores & proactive stalled lead alerts.",
          bullets: [
            "Continuous tracking of customer engagement, activity cadence, and last touch",
            "Automatic Red/Critical Alert triggered if prospect remains unresponsive for >5 days",
            "Instant manager notifications to re-engage accounts before deals go cold",
          ],
        },
        {
          visual: {"title":"WhatsApp & email approvals","icon":"messages","kind":"approvals","tone":"green","metric":"1-click approval","steps":["Quotation shared","Client approval","Deal closed"]},
          id: "crm-f3",
          category: "conversion",
          categoryLabel: "Conversion & Orders",
          tagTone: "bg-emerald-50 text-emerald-700",
          icon: "📞",
          iconBg: "bg-emerald-50 text-emerald-600",
          title: "WhatsApp & Email Quotation Approval",
          description: "1-Click Client Quotation Approval via WhatsApp & Email.",
          bullets: [
            "Direct interactive quotation link shared via official WhatsApp & Email",
            'Client taps "Accept" or "Reject" right from their mobile phone screen',
            'ERP status instantly updates to "Accepted" & moves Deal to "Closed Won" automatically',
          ],
        },
        {
          visual: {"title":"Multi-revision quote trail","icon":"files","kind":"versions","tone":"purple","metric":"Every revision, saved","steps":["Original quotation","Revised quote","Version comparison"]},
          id: "crm-f4",
          category: "conversion",
          categoryLabel: "Conversion & Orders",
          tagTone: "bg-blue-50 text-blue-700",
          icon: "📑",
          iconBg: "bg-blue-50 text-blue-600",
          title: "Multi-Revision Quotation Trail (-R1, -R2)",
          description: "Full Negotiation Audit Trail with Multi-Version Quotes.",
          bullets: [
            "Parent-child versioned quote generation (e.g. QT-2026-0001-R1, -R2)",
            "Side-by-side comparison of original vs revised quotes, quantities, and terms",
            "Never overwrites original proposals; protects complete audit integrity",
          ],
        },
        {
          visual: {"title":"360° customer view","icon":"building","kind":"people","tone":"blue","metric":"One customer timeline","steps":["Account details","Contacts & GSTIN","Transaction history"]},
          id: "crm-f5",
          category: "accounts",
          categoryLabel: "Account 360° & GST",
          tagTone: "bg-cyan-50 text-cyan-700",
          icon: "🏢",
          iconBg: "bg-cyan-50 text-cyan-600",
          title: "360° Accounts & Customer Master",
          description: "Complete commercial dossier with multi-contact profiles and compliance.",
          bullets: [
            "Comprehensive corporate accounts with unlimited key stakeholders",
            "GSTIN, PAN validation & strict credit limit enforcement",
            "Complete transactional ledger history & past invoice timelines",
          ],
        },
        {
          visual: {"title":"Activity & follow-ups","icon":"calendar","kind":"schedule","tone":"rose","metric":"Every follow-up, visible","steps":["Call scheduled","Reminder queued","Activity recorded"]},
          id: "crm-f6",
          category: "automation",
          categoryLabel: "Activity & Automation",
          tagTone: "bg-rose-50 text-rose-700",
          icon: "📅",
          iconBg: "bg-rose-50 text-rose-600",
          title: "Lead Activity & Follow-up Tracking",
          description: "Keep reps accountable with automated task queues and meeting logs.",
          bullets: [
            "Track open activities, scheduled calls, and follow-up deadlines",
            "Built-in WhatsApp & Email communication audit trail",
            "Rep activity metrics & team task completion heatmaps",
          ],
        },
      ],
    },
    workflow: {
      eyebrow: "HOW DATA MOVES IN MOSSIE ERP",
      title: "From Lead Ingestion to Closed-Won Cash",
      subtitle: "Click any step below to see how our unified sales automation eliminates friction.",
      steps: [
        {
          stepNumber: 1,
          icon: "crm-dedup",
          title: "1. Fuzzy Deduplication",
          subtitle: "Zero duplicate lead engine",
          detailTitle: "Stage 1: Multi-Channel Ingestion & Fuzzy Deduplication",
          detailDescription:
            "Leads arrive from WhatsApp, website forms, and ads. The Zero-Duplicate Lead Engine uses fuzzy matching on company names and phone numbers to intercept duplicates before creating conflicts.",
          latency: "< 150ms",
        },
        {
          stepNumber: 2,
          icon: "crm-health",
          title: "2. Deal Health Tracker",
          subtitle: "Cadence & stalled alerts",
          detailTitle: "Stage 2: Engagement Cadence & Stalled Deal Alerts",
          detailDescription:
            "The system monitors customer response intervals. If a prospect stays unresponsive for over 5 days, a Critical Red Alert is triggered for sales managers.",
          latency: "< 250ms",
        },
        {
          stepNumber: 3,
          icon: "crm-quote",
          title: "3. Multi-Revision Quote",
          subtitle: "Parent-child -R1, -R2 trails",
          detailTitle: "Stage 3: Multi-Version Quotation Negotiation (-R1, -R2)",
          detailDescription:
            "During client negotiations, original quotes are preserved. The system generates parent-child revisions (e.g. QT-2026-0001-R1) with 1-click side-by-side comparison.",
          latency: "< 100ms",
        },
        {
          stepNumber: 4,
          icon: "crm-whatsapp",
          title: "4. WhatsApp Approval",
          subtitle: "1-click client mobile accept",
          detailTitle: "Stage 4: 1-Click Client Quotation Approval via WhatsApp & Email",
          detailDescription:
            'A secure link is shared via WhatsApp. When the client taps "Accept" on their phone, the quote is marked Accepted and the deal shifts automatically to Closed Won.',
          latency: "< 100ms",
        },
        {
          stepNumber: 5,
          icon: "crm-order",
          title: "5. Auto-Order & Ledger",
          subtitle: "Stock reserved & ledger posted",
          detailTitle: "Stage 5: Autonomous Sales Order & Accounting Bridge",
          detailDescription:
            "Winning the deal automatically creates the Customer Master profile, allocates real-time stock, and initiates fulfillment with zero data re-keying.",
          latency: "< 200ms",
        },
      ],
    },
    testimonialAndRoi: {
      testimonial: {
        badge: "✓ VERIFIED SWITCHER FROM ORACLE NETSUITE",
        quote:
          "We spent 9 painful months struggling with NetSuite’s clunky UI and endless consultant bills. Moving to Mossie ERP took less than 3 weeks. Our sales team actually logs their daily deals now, and the automated stock check on quotation creation saved us from two major fulfillment disasters last quarter.",
        userName: "Vikramaditya Roy",
        userRole: "Chief Operating Officer",
        userCompany: "Zenith Industrial Systems (Turnover ₹120 Cr)",
        initials: "VR",
      },
      impactCards: [
        {
          value: "42%",
          label: "Faster Quote Generation",
          description: "From 45 mins to under 3 mins with automated quotation rules.",
          color: "text-blue-600",
        },
        {
          value: "0",
          label: "Data Re-Keying Errors",
          description: "Eliminated all duplicate typing between CRM & Tally/ERP.",
          color: "text-emerald-600",
        },
        {
          value: "18 Days",
          label: "Total Migration Time",
          description: "Imported 45,000 legacy contacts and items with zero downtime.",
          color: "text-purple-600",
        },
        {
          value: "100%",
          label: "Audit Compliance",
          description: "Complete traceability for GST E-Way Bill & customer credit.",
          color: "text-amber-600",
        },
      ],
    },
    cta: {
      pill: "READY FOR A NEW STANDARD OF ERP?",
      title: "See Why Fast-Growing Teams Are Upgrading to Mossie ERP",
      description:
        "Experience a 20-minute tailored walkthrough of our CRM and operational modules. We'll show you the exact automated flow configured for your industry.",
      primaryCtaText: "Schedule a 20-Min Architecture Demo",
      secondaryCtaText: "Review All Modules",
    },
  },

  // =========================================================================
  // 2. SALES MODULE
  // =========================================================================
  sales: {
    slug: "sales",
    moduleName: "Sales & Fulfillment Module",
    badge: "Smart Logistics & GST Billing",
    heroHeadline: "From Order to Customer Doorstep — ",
    heroHighlight: "Smart Logistics & GST Billing",
    heroDescription:
      "Automate sales order processing with 1-click shortage auto-routing, native Indian GST E-Invoice & E-Way Bill generation (<2s), end-to-end dispatch with digital POD, and zero-touch ledger accounting.",
    chip1: "1-Click Shortage Auto-Routing",
    chip2: "Native Indian GST E-Invoice & E-Way Bill",
    chip3: "End-to-End Digital POD Dispatch",
    // heroMetrics: {
    //   stat1: { value: "1-Click", label: "Shortage Auto-Routing" },
    //   stat2: { value: "< 2 Sec", label: "E-Invoice & E-Way Bill" },
    //   stat3: { value: "100%", label: "Digital POD Delivery" },
    //   stat4: { value: "Zero-Touch", label: "Double-Entry Ledger" },
    // },
    mockup: {
      windowTitle: "mossie-erp // sales-fulfillment-engine",
      liveBadge: "● ORDER STREAM SYNCHRONIZED",
      topMetrics: [
        { label: "Today's Orders", value: "₹28.4L", sub: "Auto-Routed & Balanced", subColor: "text-emerald-600 font-bold" },
        { label: "Shortage Routing", value: "1-Click Active", sub: "PR / MO auto-triggered", subColor: "text-amber-600 font-bold" },
        { label: "E-Way & IRN", value: "< 2s API", sub: "Zero plugin cost", subColor: "text-blue-600 font-bold" },
      ],
      kanbanTitle: "Sales Order Dispatch Matrix",
      kanbanSubtitle: "Direct Sync with Warehouse Loading Docks & Digital POD",
      columns: [
        {
          stageName: "Order Confirmed",
          amount: "₹6.4L",
          cardTitle: "Larsen Infrastructure",
          cardDesc: "Shortage Auto-Routing: 1-Click MO Triggered",
          cardTag: "Shop-Floor MO Active",
          cardTagStyle: "bg-amber-50 text-amber-700",
        },
        {
          stageName: "Allocated & Packing",
          amount: "₹14.2L",
          cardTitle: "Godrej Modern Spaces",
          cardDesc: "Stock Available: Physical Bin Locked",
          cardTag: "Bin Locked (0% Oversell)",
          cardTagStyle: "bg-blue-50 text-blue-700",
          isHighlighted: true,
        },
        {
          stageName: "Dispatched & Delivered",
          amount: "₹8.8L",
          cardTitle: "Blue Star HVAC Projects",
          cardDesc: "Signed POD Photo Uploaded • Ledger Auto-Posted",
          cardTag: "POD Verified & Balanced",
          cardTagStyle: "bg-emerald-50 text-emerald-700",
        },
      ],
      alertText: "Logistics Alert: Order #SO-741 dispatched. E-Way Bill & IRN QR generated in 1.4s. Digital POD pending driver upload.",
      alertAction: "View Challan & POD",
    },
    edge: {
      title: "What Extra We Provide: ",
      titleHighlight: "Smart Logistics & GST Billing",
      description:
        "Standard sales tools take orders and leave stock shortages, GST compliance, and dispatch disputes to manual spreadsheets. Mossie ERP automates shortage routing, government billing, and digital doorstep POD.",
      superpowers: [
        {
          summary: "Turn stock shortages into purchase or production requests in one click.",
          visual: {"title":"Smart shortage routing","icon":"route","kind":"stock","tone":"orange","metric":"1-click routing","steps":["Stock checked","Shortage identified","Purchase or production"]},
          id: "sales-sp-1",
          number: 1,
          icon: "⚡",
          gradient: "from-blue-500 to-indigo-600",
          shadowColor: "shadow-blue-500/20",
          tagBg: "bg-blue-50 text-blue-700 border-blue-200",
          title: "1-Click Shortage Auto-Routing (Trade & Manufacturing)",
          description:
            "Upon Sales Order confirmation, real-time warehouse inventory is checked automatically: If stock is available, it instantly reserves & locks physical inventory in 1 click. If there's a stock shortage in trading, it auto-generates a Purchase Requisition (PR) in 1 click. In manufacturing, it triggers a Shop-Floor Production Work Order (MO) in 1 click.",
          legacyComparison:
            "✕ Legacy ERPs: Requires manual stock inquiries with warehouse managers, leading to overselling, delayed production orders, and frequent cancellations.",
          mossiComparison:
            '✓ Mossie ERP: "Instant Stock Shortage Detection with 1-Click Auto-Routing." Auto-reserves stock, creates trading PRs, or triggers manufacturing MOs instantly.',
          impactMetric: "Instant Shortage Detection & Auto-Routing",
          impactColor: "text-blue-600",
        },
        {
          summary: "Generate GST e-invoices and e-way bills directly from your sales workflow.",
          visual: {"title":"GST invoices & e-way bills","icon":"receipt","kind":"approvals","tone":"blue","metric":"Native GST compliance","steps":["Invoice prepared","IRN generated","E-way bill ready"]},
          id: "sales-sp-2",
          number: 2,
          icon: "🇮🇳",
          gradient: "from-emerald-500 to-teal-600",
          shadowColor: "shadow-emerald-500/20",
          tagBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
          title: "Native Indian GST E-Invoice & E-Way Bill (Zero Plugin Cost)",
          description:
            "Eliminate expensive third-party connectors and recurring subscription plugins. Generate government-compliant E-Invoice IRN QR Codes and E-Way Bill JSON in under 2 seconds directly from your dispatch flow.",
          legacyComparison:
            "✕ Legacy ERPs: Require paid third-party middleware (ClearTax, Tally plugins, or manual CSV uploads) with high integration costs and frequent portal errors.",
          mossiComparison:
            '✓ Mossie ERP: "Built-in Indian GST E-Invoice & E-Way Bill Engine in 1-Click." Direct government NIC API generation in < 2 seconds at zero plugin cost.',
          impactMetric: "< 2s Native GST E-Invoice & E-Way Bill",
          impactColor: "text-emerald-700",
        },
        {
          summary: "Track orders from dispatch to delivery with a digital proof of receipt.",
          visual: {"title":"Dispatch & proof of delivery","icon":"truck","kind":"schedule","tone":"green","metric":"Delivery, fully tracked","steps":["Order dispatched","Shipment in transit","POD captured"]},
          id: "sales-sp-3",
          number: 3,
          icon: "🚚",
          gradient: "from-purple-500 to-violet-600",
          shadowColor: "shadow-purple-500/20",
          tagBg: "bg-purple-50 text-purple-800 border-purple-200",
          title: "End-to-End Dispatch & Digital Proof of Delivery (POD)",
          description:
            "Manage the complete dispatch cycle: Warehouse picking → Transporter & Driver/Vehicle allocation → Delivery Challan PDF → Uploading signed Proof of Delivery (POD) photos directly to the order upon delivery.",
          legacyComparison:
            "✕ Legacy ERPs: Logistics visibility ends when goods leave the loading dock. Lost paper delivery challans result in disputed invoices and delayed payments.",
          mossiComparison:
            '✓ Mossie ERP: "Complete Dispatch Tracking from Warehouse to Customer Doorstep." Drivers or dispatch teams upload signed POD photos directly to the order.',
          impactMetric: "End-to-End Dispatch & Digital POD",
          impactColor: "text-purple-700",
        },
        {
          summary: "Keep invoices and financial ledgers in sync with automatic double-entry posting.",
          visual: {"title":"Automatic double-entry posting","icon":"ledger","kind":"ledger","tone":"purple","metric":"Zero manual re-entry","steps":["Invoice finalized","Ledger entries posted","Balances updated"]},
          id: "sales-sp-4",
          number: 4,
          icon: "⚖️",
          gradient: "from-amber-500 to-orange-600",
          shadowColor: "shadow-amber-500/20",
          tagBg: "bg-amber-50 text-amber-800 border-amber-200",
          title: "Zero-Touch Double-Entry Auto Accounting",
          description:
            "The moment a sales invoice is confirmed, balanced double-entry journal vouchers (Accounts Receivable Dr, Sales Revenue Cr, CGST/SGST/IGST Cr, Freight Income Cr) are posted instantly to the general ledger without manual accounting work.",
          legacyComparison:
            "✕ Legacy ERPs: Billing invoices sit in queues until accounting staff manually key in voucher entries, resulting in discrepancies and delayed financial closes.",
          mossiComparison:
            '✓ Mossie ERP: "Automated Bookkeeping — Sales invoices instantly generate balanced ledger entries." Complete double-entry posting with zero human re-keying.',
          impactMetric: "Zero-Touch Double-Entry Posting",
          impactColor: "text-amber-700",
        },
      ],
    },
    comparison: {
      eyebrow: "HONEST & DIRECT BENCHMARK",
      title: "How Mossie ERP Sales Compares to the Market",
      subtitle: "Compare our automated fulfillment suite against legacy ERP tools and basic invoicing apps.",
      competitor1Name: "Legacy ERPs (SAP SD / NetSuite)",
      competitor2Name: "Basic Invoicing (Zoho Books / Tally)",
      rows: [
        {
          metric: "Shortage Detection & Auto-Routing",
          metricDesc: "Instant stock reservation or automated PR/MO dispatch upon order confirmation.",
          mossi: {
            highlight: "✓ 1-Click Shortage Auto-Routing",
            detail: "Stock available: locks physical stock. Stock shortage: triggers PR (trade) or MO (manufacturing) in 1 click",
          },
          legacy: {
            highlight: "✕ 2 to 4 Days Manual Lag",
            detail: "Requires warehouse physical checks, cross-department emails, and manual requisition creation",
          },
          pointSolution: {
            highlight: "✕ Zero Shopfloor/PO Bridge",
            detail: "Invoicing apps cannot check manufacturing capacity or generate supplier purchase requisitions",
          },
        },
        {
          metric: "GST E-Invoice & E-Way Bill",
          metricDesc: "Native NIC compliance speed and extra connector cost.",
          mossi: {
            highlight: "✓ Built-in < 2s Engine (₹0 Extra)",
            detail: "Direct NIC portal API generates QR-embedded IRN invoice and E-Way Bill in dispatch flow with zero plugins",
          },
          legacy: {
            highlight: "⚠️ Expensive Middleware Add-on",
            detail: "Requires ₹2L - ₹5L third-party connector licenses, annual AMC, and fragile middleware",
          },
          pointSolution: {
            highlight: "⚠️ Manual CSV / Portal Re-entry",
            detail: "Requires manual export, uploading JSON to government portal, and pasting IRN back into billing",
          },
        },
        {
          metric: "End-to-End Dispatch & Digital POD",
          metricDesc: "Transporter allocation, delivery challan generation, and photo delivery proof.",
          mossi: {
            highlight: "✓ Full Dispatch & Photo POD",
            detail: "Picks, packs, assigns transporter/vehicle, and attaches driver-signed photo POD directly to the sales order",
          },
          legacy: {
            highlight: "✕ Paper Challans Only",
            detail: "Physical paper slips get misplaced, resulting in 30-day payment delays and delivery disputes",
          },
          pointSolution: {
            highlight: "✕ Zero Logistics Tracking",
            detail: "Lacks driver assignment, gate pass generation, and digital delivery receipt confirmation",
          },
        },
        {
          metric: "Zero-Touch Double-Entry Auto Accounting",
          metricDesc: "Automated balanced journal voucher creation upon invoice confirmation.",
          mossi: {
            highlight: "✓ 100% Zero-Touch Posting",
            detail: "Instantly balances AR Dr, Revenue Cr, CGST/SGST/IGST Cr, and Freight Income Cr in general ledger",
          },
          legacy: {
            highlight: "⚠️ Nightly Batch Processing",
            detail: "Transactions queue up for overnight posting, causing mid-day ledger and credit limit discrepancies",
          },
          pointSolution: {
            highlight: "✕ Manual Bookkeeping",
            detail: "Requires accountant to re-enter sales invoices into Tally or accounting ledgers by hand",
          },
        },
        {
          metric: "Dynamic Margin & Credit Guardrails",
          metricDesc: "Preventing sales below minimum gross margin or beyond customer credit limits.",
          mossi: {
            highlight: "✓ Real-Time Automated Lock",
            detail: "Enforces hard stop if discount drops gross margin below threshold or customer overdue invoices exceed limit",
          },
          legacy: {
            highlight: "⚠️ Rigid Post-Order Approvals",
            detail: "Complicated workflow chains hold up orders for days even for trusted enterprise accounts",
          },
          pointSolution: {
            highlight: "✕ Zero Margin Protection",
            detail: "Reps can discount freely without margin visibility or automated credit hold warnings",
          },
        },
      ],
    },
    featuresCatalog: {
      previewName: "Sales",
      headline: {"action":"fulfill every order","description":"Connect quotations, stock, dispatch, and billing in one clear sales journey."},
      eyebrow: "Comprehensive Functionality Catalog",
      title: "Explore All Features in Sales & Fulfillment",
      subtitle: "From 1-click shortage detection and native GST billing to digital POD tracking and auto bookkeeping.",
      categories: [
        { id: "all", label: "All Features" },
        { id: "orders", label: "Orders & Routing" },
        { id: "fulfillment", label: "Fulfillment & POD" },
        { id: "compliance", label: "GST & Accounting" },
      ],
      items: [
        {
          visual: {"title":"Smart shortage routing","icon":"route","kind":"stock","tone":"orange","metric":"1-click routing","steps":["Stock checked","Shortage identified","Purchase or production"]},
          id: "sales-f1",
          category: "orders",
          categoryLabel: "Orders & Routing",
          tagTone: "bg-blue-50 text-blue-700",
          icon: "⚡",
          iconBg: "bg-blue-50 text-blue-600",
          title: "1-Click Shortage Auto-Routing (Trade & Manufacturing)",
          description: "Instant Stock Shortage Detection with 1-Click Auto-Routing.",
          bullets: [
            "Stock Available: Instantly Reserves & Locks physical inventory in 1 click",
            "Stock Shortage (Trading Flow): Generates a Purchase Requisition (PR) in 1 click",
            "Stock Shortage (Manufacturing Flow): Triggers a Shop-Floor Production Work Order (MO) in 1 click",
          ],
        },
        {
          visual: {"title":"GST invoices & e-way bills","icon":"receipt","kind":"approvals","tone":"blue","metric":"Native GST compliance","steps":["Invoice prepared","IRN generated","E-way bill ready"]},
          id: "sales-f2",
          category: "compliance",
          categoryLabel: "GST & Accounting",
          tagTone: "bg-emerald-50 text-emerald-700",
          icon: "🇮🇳",
          iconBg: "bg-emerald-50 text-emerald-600",
          title: "Native Indian GST E-Invoice & E-Way Bill (Zero Plugin Cost)",
          description: "Built-in Indian GST E-Invoice & E-Way Bill Engine in 1-Click.",
          bullets: [
            "Generate government-compliant E-Invoice IRN QR Codes & E-Way Bill JSON in under 2 seconds",
            "Direct dispatch flow integration without recurring third-party connector fees",
            "Automated vehicle distance calculation and credit/debit note reference linking",
          ],
        },
        {
          visual: {"title":"Dispatch & proof of delivery","icon":"truck","kind":"schedule","tone":"green","metric":"Delivery, fully tracked","steps":["Order dispatched","Shipment in transit","POD captured"]},
          id: "sales-f3",
          category: "fulfillment",
          categoryLabel: "Fulfillment & POD",
          tagTone: "bg-purple-50 text-purple-700",
          icon: "🚚",
          iconBg: "bg-purple-50 text-purple-600",
          title: "End-to-End Dispatch & Digital Proof of Delivery (POD)",
          description: "Complete Dispatch Tracking from Warehouse to Customer Doorstep.",
          bullets: [
            "Warehouse wave picking and automated packing slip generation",
            "Transporter, driver & vehicle allocation with official Delivery Challan PDF",
            "Mobile upload of signed Proof of Delivery (POD) photos directly attached to the order",
          ],
        },
        {
          visual: {"title":"Automatic double-entry posting","icon":"ledger","kind":"ledger","tone":"purple","metric":"Zero manual re-entry","steps":["Invoice finalized","Ledger entries posted","Balances updated"]},
          id: "sales-f4",
          category: "compliance",
          categoryLabel: "GST & Accounting",
          tagTone: "bg-amber-50 text-amber-700",
          icon: "⚖️",
          iconBg: "bg-amber-50 text-amber-600",
          title: "Zero-Touch Double-Entry Auto Accounting",
          description: "Automated Bookkeeping — Sales invoices instantly generate balanced ledger entries.",
          bullets: [
            "Instant posting of balanced journal vouchers (AR Dr, Revenue Cr, GST Cr, Freight Cr)",
            "Eliminates manual bookkeeping delays between dispatch and finance teams",
            "Real-time customer outstanding ledger updating with credit limit enforcement",
          ],
        },
      ],
    },
    workflow: {
      eyebrow: "HOW DATA MOVES IN MOSSIE ERP",
      title: "From Sales Order to Doorstep Cash",
      subtitle: "Connected fulfillment eliminates errors between sales, warehouse, logistics, and accounting.",
      steps: [
        {
          stepNumber: 1,
          icon: "sales-shortage",
          title: "1. Shortage Auto-Routing",
          subtitle: "Bin lock, PR, or MO in 1 click",
          detailTitle: "Stage 1: 1-Click Shortage Auto-Routing",
          detailDescription:
            "Upon Sales Order confirmation, inventory is checked instantly: Available stock is physically reserved. If short, trading orders raise a Purchase Requisition (PR) and manufacturing orders trigger a Work Order (MO) in 1 click.",
          latency: "< 100ms",
        },
        {
          stepNumber: 2,
          icon: "sales-pick",
          title: "2. Pick & Allocate",
          subtitle: "Warehouse bin reservation",
          detailTitle: "Stage 2: Warehouse Bin Allocation & Picking",
          detailDescription:
            "Stock is locked in specific warehouse bins. Handheld barcode scanning directs warehouse staff through optimal picking routes.",
          latency: "< 150ms",
        },
        {
          stepNumber: 3,
          icon: "sales-einvoice",
          title: "3. GST E-Invoice & E-Way",
          subtitle: "< 2s native NIC API generation",
          detailTitle: "Stage 3: Native Indian GST E-Invoice & E-Way Bill (< 2s)",
          detailDescription:
            "Direct government NIC API bridge generates the E-Invoice IRN QR code and E-Way Bill JSON in under 2 seconds directly within the dispatch flow at zero plugin cost.",
          latency: "< 800ms",
        },
        {
          stepNumber: 4,
          icon: "sales-dispatch",
          title: "4. Dispatch & Digital POD",
          subtitle: "Transporter & signed photo POD",
          detailTitle: "Stage 4: End-to-End Dispatch & Digital Proof of Delivery",
          detailDescription:
            "Driver and vehicle are allocated; Delivery Challan PDF is generated. Upon customer receipt, a signed photo of the POD is uploaded directly to the order record.",
          latency: "< 250ms",
        },
        {
          stepNumber: 5,
          icon: "sales-ledger",
          title: "5. Auto Ledger Posting",
          subtitle: "Balanced double-entry journal",
          detailTitle: "Stage 5: Zero-Touch Double-Entry Auto Accounting",
          detailDescription:
            "The confirmed sales invoice instantly posts balanced journal vouchers (AR Dr, Sales Cr, GST Cr, Freight Cr) directly into the general ledger without manual accounting work.",
          latency: "< 100ms",
        },
      ],
    },
    testimonialAndRoi: {
      testimonial: {
        badge: "✓ VERIFIED SWITCHER FROM TALLY + EXCEL",
        quote:
          "Before Mossie ERP, our sales reps had to call the warehouse five times a day to confirm whether stock was actually available. Now the second an order is approved, stock is locked and E-Way bills are ready before the truck arrives.",
        userName: "Suresh Kulkarni",
        userRole: "VP Commercial & Supply Chain",
        userCompany: "Prism Polymers & Packaging (Turnover ₹85 Cr)",
        initials: "SK",
      },
      impactCards: [
        { value: "0%", label: "Overselling Incidents", description: "Zero double-selling across parallel branch teams.", color: "text-blue-600" },
        { value: "85%", label: "Faster Order Processing", description: "Reduced order-to-dispatch turnaround from 2 days to 3 hours.", color: "text-emerald-600" },
        { value: "100%", label: "E-Way Bill Compliance", description: "Direct API generation with zero truck detention at checkpoints.", color: "text-purple-600" },
        { value: "₹24L", label: "Working Capital Saved", description: "Avoided bad debts through real-time debtor credit locks.", color: "text-amber-600" },
      ],
    },
    cta: {
      pill: "UPGRADE YOUR SALES FULFILLMENT",
      title: "Eliminate Order Bottlenecks & Accelerate Cash Collection",
      description: "Schedule a live 20-minute demonstration of Mossie ERP's unified sales and dispatch platform.",
      primaryCtaText: "Book an Order Flow Demo",
      secondaryCtaText: "Explore Inventory Sync",
    },
  },

  // =========================================================================
  // 3. INVENTORY MODULE
  // =========================================================================
  inventory: {
    slug: "inventory",
    moduleName: "Inventory & Warehouses",
    badge: "Multi-Warehouse Inventory",
    heroHeadline: "Complete Stock Precision — ",
    heroHighlight: "Across Every Bin & Location",
    heroDescription:
      "Real-time serial, batch, and expiry tracking with automated reorder alerts, barcode scanning, and multi-warehouse transfers.",
    chip1: "Real-Time Stock Alerts",
    chip2: "Automated Reorder Engine",
    chip3: "Barcode & Bin Traceability",
    // heroMetrics: {
    //   stat1: { value: "99.9%", label: "Inventory Accuracy" },
    //   stat2: { value: "35%", label: "Reduced Holding Cost" },
    //   stat3: { value: "100%", label: "Batch & Expiry Trace" },
    //   stat4: { value: "Sub-Sec", label: "Multi-Location Sync" },
    // },
    mockup: {
      windowTitle: "mossie-erp // warehouse-stock-grid",
      liveBadge: "● 14 WAREHOUSES CONNECTED",
      topMetrics: [
        { label: "Total Valuation", value: "₹18.4 Cr", sub: "FIFO Landed Cost", subColor: "text-blue-600 font-bold" },
        { label: "Stock Items", value: "14,820 SKUs", sub: "Zero blind spots", subColor: "text-emerald-600 font-bold" },
        { label: "Reorder Triggers", value: "8 Items Low", sub: "Auto POs Drafted", subColor: "text-amber-600 font-bold" },
      ],
      kanbanTitle: "Warehouse Stock Distribution",
      kanbanSubtitle: "Real-time Multi-Location Bin Balances",
      columns: [
        {
          stageName: "Bhiwandi Hub (Main DC)",
          amount: "₹8.2Cr",
          cardTitle: "Raw Copper Rods 8mm",
          cardDesc: "Bin A-14 • 42,000 kg available",
          cardTag: "Optimal Stock",
          cardTagStyle: "bg-emerald-50 text-emerald-700",
        },
        {
          stageName: "Manesar Assembly Plant",
          amount: "₹5.4Cr",
          cardTitle: "Microcontroller IC-32",
          cardDesc: "Bin C-02 • 1,200 units left",
          cardTag: "Reorder Triggered",
          cardTagStyle: "bg-amber-50 text-amber-700",
          isHighlighted: true,
        },
        {
          stageName: "In-Transit (Internal Transfer)",
          amount: "₹4.8Cr",
          cardTitle: "Finished Valves Batch #902",
          cardDesc: "Truck MH-04-E-8821 in route",
          cardTag: "ETA: 4 Hours",
          cardTagStyle: "bg-blue-50 text-blue-700",
        },
      ],
      alertText: "Inventory Alert: SKU #VAL-88 reached safety threshold (80 units remaining). Auto-drafted PO to Vendor.",
      alertAction: "View PO",
    },
    edge: {
      title: "What Extra We Provide: ",
      titleHighlight: "Predictive Warehouse Precision",
      description:
        "Forget outdated stocktaking spreadsheets. Mossie ERP monitors consumption velocity, seasonal lead times, and landed costs down to individual serial numbers.",
      superpowers: [
        {
          summary: "See on-hand, reserved, and available stock across your entire operation.",
          visual: {"title":"Real-time stock intelligence","icon":"boxes","kind":"stock","tone":"blue","metric":"Live stock visibility","steps":["On-hand inventory","Reserved quantities","Available to promise"]},
          id: "inv-sp-1",
          number: 1,
          icon: "📦",
          gradient: "from-blue-500 to-indigo-600",
          shadowColor: "shadow-blue-500/20",
          tagBg: "bg-blue-50 text-blue-700 border-blue-200",
          title: "Real-Time Stock Intelligence",
          description:
            "Instant multi-facility visibility across available, reserved, incoming, and critical low-stock inventory with live telemetry.",
          legacyComparison: "✕ Legacy ERPs: Periodic spreadsheet updates and delayed batches cause overselling and critical stockouts.",
          mossiComparison: "✓ Mossie ERP: Sub-second telemetry locks physical stock instantly upon order confirmation across every node.",
          impactMetric: "Sub-Second Stock Telemetry",
          impactColor: "text-blue-600",
        },
        {
          summary: "Anticipate demand and replenish stock before shortages slow you down.",
          visual: {"title":"Smart replenishment","icon":"refresh","kind":"stock","tone":"orange","metric":"Demand-aware reordering","steps":["Safety stock checked","Demand forecast","Reorder triggered"]},
          id: "inv-sp-2",
          number: 2,
          icon: "⚡",
          gradient: "from-amber-500 to-orange-600",
          shadowColor: "shadow-amber-500/20",
          tagBg: "bg-amber-50 text-amber-800 border-amber-200",
          title: "Smart Replenishment Engine",
          description:
            "Algorithmic safety buffers dynamically monitor supplier lead times and consumption velocity to auto-generate replenishment purchase orders.",
          legacyComparison: "✕ Legacy ERPs: Static min/max formulas fail to adjust when lead times spike, causing factory halts.",
          mossiComparison: "✓ Mossie ERP: Dynamic predictive triggers auto-draft POs before stock hits critical safety thresholds.",
          impactMetric: "100% Stockout Prevention",
          impactColor: "text-amber-700",
        },
        {
          summary: "Coordinate warehouses, branches, and transfers from one connected view.",
          visual: {"title":"Multi-warehouse control","icon":"warehouse","kind":"stock","tone":"purple","metric":"Every location, connected","steps":["Central warehouse","Branch allocation","Transfer received"]},
          id: "inv-sp-3",
          number: 3,
          icon: "🏢",
          gradient: "from-purple-500 to-violet-600",
          shadowColor: "shadow-purple-500/20",
          tagBg: "bg-purple-50 text-purple-800 border-purple-200",
          title: "Multi-Warehouse Control",
          description:
            "Centralized multi-hub governance with automated inter-warehouse transfer orders, in-transit telemetry, and bin-level synchronization.",
          legacyComparison: "✕ Legacy ERPs: Disconnected warehouse silos require manual phone calls and spreadsheet consolidation.",
          mossiComparison: "✓ Mossie ERP: Unified multi-facility orchestration with 1-click inter-warehouse transfer orders and live tracking.",
          impactMetric: "Zero Cross-Hub Discrepancy",
          impactColor: "text-purple-700",
        },
        {
          summary: "Trace batches, track expiry dates, and prioritize the right stock for dispatch.",
          visual: {"title":"Batch & expiry intelligence","icon":"barcode","kind":"quality","tone":"green","metric":"End-to-end traceability","steps":["Batch registered","Expiry monitored","FEFO allocation"]},
          id: "inv-sp-4",
          number: 4,
          icon: "🏷️",
          gradient: "from-rose-500 to-pink-600",
          shadowColor: "shadow-rose-500/20",
          tagBg: "bg-rose-50 text-rose-800 border-rose-200",
          title: "Batch & Expiry Intelligence",
          description:
            "Strict First-Expired-First-Out (FEFO) automated dispatch, granular batch genealogy, and automated quarantine locks for expiring goods.",
          legacyComparison: "✕ Legacy ERPs: Expired lots shipped accidentally due to manual paper-based batch logging and FIFO picking.",
          mossiComparison: "✓ Mossie ERP: Algorithmic FEFO routing locks expiring batches and isolates non-compliant lots automatically.",
          impactMetric: "Zero Expired Dispatches",
          impactColor: "text-rose-700",
        },
        {
          summary: "Connect landed costs, valuation, and accounting for a clearer stock position.",
          visual: {"title":"Inventory valuation","icon":"coins","kind":"ledger","tone":"blue","metric":"Accurate stock value","steps":["Landed costs added","Valuation calculated","Ledger synchronized"]},
          id: "inv-sp-5",
          number: 5,
          icon: "💰",
          gradient: "from-emerald-500 to-teal-600",
          shadowColor: "shadow-emerald-500/20",
          tagBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
          title: "Advanced Inventory Valuation",
          description:
            "Perpetual real-time FIFO and weighted average valuation with automatic proportional landed cost (LCV) freight and customs capitalization.",
          legacyComparison: "✕ Legacy ERPs: Freight, customs, and demurrage dumped into generic overhead accounts, skewing profitability.",
          mossiComparison: "✓ Mossie ERP: True landed cost automatically apportioned into individual unit valuations in real time.",
          impactMetric: "100% True Landed Margin",
          impactColor: "text-emerald-700",
        },
      ],
    },
    comparison: {
      eyebrow: "HONEST & DIRECT BENCHMARK",
      title: "How Mossie ERP Inventory Compares to Legacy Solutions",
      subtitle: "Compare our modern warehouse management suite against legacy ERP modules and standalone inventory apps.",
      competitor1Name: "Legacy ERPs (SAP MM / NetSuite)",
      competitor2Name: "Standalone WMS / Tally Add-ons",
      rows: [
        {
          metric: "Multi-Location Real-Time Bin Reservation",
          metricDesc: "Instant stock locking across physical bins, warehouses, and branches.",
          mossi: {
            highlight: "✓ Sub-Second Reactive Locking",
            detail: "Locks physical bins across warehouses instantly upon order confirmation, preventing overselling",
          },
          legacy: {
            highlight: "⚠️ Batch Run Discrepancies",
            detail: "Overnight sync causes phantom stock allocations and multi-branch inventory collisions",
          },
          pointSolution: {
            highlight: "✕ Disconnected Silos",
            detail: "Requires manual stock sheets and spreadsheet consolidation between locations",
          },
        },
        {
          metric: "True Landed Cost Apportionment (LCV)",
          metricDesc: "Proportional allocation of freight, customs duty, and handling into unit inventory value.",
          mossi: {
            highlight: "✓ 1-Click Proportional LCV",
            detail: "Auto-applies freight and customs proportionally across item unit costs for accurate balance sheet valuation",
          },
          legacy: {
            highlight: "⚠️ Complex Cost Center Allocations",
            detail: "Requires tedious month-end cost journal adjustments by finance consultants",
          },
          pointSolution: {
            highlight: "✕ Generic Overhead Dumping",
            detail: "Freight is booked as generic operational expense, distorting item profit margins",
          },
        },
        {
          metric: "Batch, Serial & Shelf-Life Expiry Control",
          metricDesc: "FEFO (First-Expired-First-Out) picking and automated quarantine of expiring lots.",
          mossi: {
            highlight: "✓ Automated FEFO & Quarantine",
            detail: "Directs pickers to nearest-expiry batches and automatically locks lots 30 days before shelf-life expiry",
          },
          legacy: {
            highlight: "⚠️ Heavy Batch Management Add-on",
            detail: "Requires cumbersome SAP batch master setup and manual selection during picking",
          },
          pointSolution: {
            highlight: "✕ Static Text Fields",
            detail: "Batch numbers stored as plain text notes without expiry locking or automated FEFO enforcement",
          },
        },
        {
          metric: "Mobile Barcode & Perpetual Cycle Counting",
          metricDesc: "Continuous stock audits without halting factory or warehouse operations.",
          mossi: {
            highlight: "✓ Mobile Android Barcode Audits",
            detail: "Allows continuous cycle counting via standard Android phones or industrial scanners with zero downtime",
          },
          legacy: {
            highlight: "✕ Annual Plant Shutdowns",
            detail: "Requires 3-day operational freeze for physical stock verification using paper audit lists",
          },
          pointSolution: {
            highlight: "⚠️ Manual Tally Recounts",
            detail: "Manual count sheets prone to transcription errors and multi-week reconciliation backlogs",
          },
        },
        {
          metric: "Bi-Directional Lot Traceability Tree",
          metricDesc: "Instant forward and backward audit trail from supplier heat to customer dispatch.",
          mossi: {
            highlight: "✓ 30-Second 1-Click Trace Tree",
            detail: "Traces defective raw material batch to every finished product, work order, and customer invoice in seconds",
          },
          legacy: {
            highlight: "⚠️ Dense Custom SQL Queries",
            detail: "Requires database administrators to run custom table queries across multiple modules",
          },
          pointSolution: {
            highlight: "✕ Zero Traceability Tree",
            detail: "Cannot link supplier inward GRN batch to finished goods sold to customers",
          },
        },
      ],
    },
    featuresCatalog: {
      previewName: "Inventory",
      headline: {"action":"keep stock in sync","description":"Know what is available, where it belongs, and when to replenish — across every warehouse."},
      eyebrow: "Comprehensive Functionality Catalog",
      title: "Explore All Features in Inventory Management",
      subtitle:
        "Comprehensive controls for multi-warehouse stock movements, lot & batch traceability, valuation models, and automated replenishment.",
      categories: [
        { id: "all", label: "All Features" },
        { id: "stock", label: "Stock Control" },
        { id: "warehouse", label: "Warehouse & Locations" },
        { id: "traceability", label: "Batch & Traceability" },
        { id: "intelligence", label: "Replenishment & Costing" },
      ],
      items: [
        {
          visual: {"title":"Products, variants & barcodes","icon":"barcode","kind":"stock","tone":"blue","metric":"Scan. Identify. Track.","steps":["Product master","Variant attributes","Barcode identified"]},
          id: "inv-f1",
          category: "stock",
          categoryLabel: "Stock Control",
          tagTone: "bg-blue-50 text-blue-700",
          icon: "📦",
          iconBg: "bg-blue-50 text-blue-600",
          title: "Product Master, Variants & Barcode Scanning",
          description: "Centralized item master for raw materials, variants, and assemblies with multi-UoM conversion and barcode support.",
          bullets: [
            "Formula-based SKU generator, custom attributes, and multi-level category taxonomy",
            "Multi-UoM conversions with fractional precision between purchase, stocking, and sales",
            "Thermal barcode and 2D QR label printing with mobile Android scanner support",
          ],
        },
        {
          visual: {"title":"Stock movements & ledger","icon":"refresh","kind":"ledger","tone":"green","metric":"Every movement, recorded","steps":["Goods received","Stock transferred","Ledger updated"]},
          id: "inv-f2",
          category: "stock",
          categoryLabel: "Stock Control",
          tagTone: "bg-blue-50 text-blue-700",
          icon: "🔄",
          iconBg: "bg-blue-50 text-blue-600",
          title: "Perpetual Stock Movements & Ledger",
          description: "Real-time stock inward, outward, adjustments, and inter-branch transfers with double-entry stock ledger.",
          bullets: [
            "Sub-second balance updates on purchase GRNs, sales dispatches, and work orders",
            "Audited stock adjustments, shrinkage write-offs, and mandatory reason codes",
            "Perpetual running quantity and valuation ledger with point-in-time reconstruction",
          ],
        },
        {
          visual: {"title":"Available & reserved stock","icon":"lock","kind":"stock","tone":"purple","metric":"Promise with confidence","steps":["Physical stock","Reserved for orders","Available balance"]},
          id: "inv-f3",
          category: "stock",
          categoryLabel: "Stock Control",
          tagTone: "bg-blue-50 text-blue-700",
          icon: "🔒",
          iconBg: "bg-blue-50 text-blue-600",
          title: "Available vs Reserved Stock Allocation",
          description: "Sub-second order reservation preventing multi-channel overselling across open quotes and active work orders.",
          bullets: [
            "Multi-bucket telemetry tracking on-hand, order-locked, inspection, and sellable stock",
            "Real-time Available-to-Promise (ATP) calculations displayed directly in CRM",
            "Configurable reservation expiry buffers releasing idle held stock automatically",
          ],
        },
        {
          visual: {"title":"Multi-warehouse control","icon":"warehouse","kind":"stock","tone":"purple","metric":"Every location, connected","steps":["Central warehouse","Branch allocation","Transfer received"]},
          id: "inv-f4",
          category: "warehouse",
          categoryLabel: "Warehouse & Locations",
          tagTone: "bg-purple-50 text-purple-700",
          icon: "🏢",
          iconBg: "bg-purple-50 text-purple-600",
          title: "Multi-Warehouse & Central DC Management",
          description: "Centralized multi-facility control across regional distribution centers, plant stores, and transit yards.",
          bullets: [
            "Unlimited warehouse hierarchy with granular facility-level user permissions",
            "Inter-warehouse stock transfer orders (STO) with automated in-transit tracking",
            "Consolidated pan-India stock visibility with inter-hub stock rebalancing",
          ],
        },
        {
          visual: {"title":"Bins & aisle routing","icon":"warehouse","kind":"stock","tone":"orange","metric":"Find the right bin","steps":["Warehouse zone","Aisle & rack","Pick location"]},
          id: "inv-f5",
          category: "warehouse",
          categoryLabel: "Warehouse & Locations",
          tagTone: "bg-purple-50 text-purple-700",
          icon: "🗄️",
          iconBg: "bg-purple-50 text-purple-600",
          title: "3D Bin Location & Aisle Routing",
          description: "Aisle, rack, shelf, and bin coordinate mapping with volumetric capacity limits and put-away rules.",
          bullets: [
            "Automated put-away logic routing fast-moving items near dock receiving doors",
            "Bin capacity utilization gauges preventing structural weight and volume overloads",
            "Mobile picking guidance displaying optimal walking routes to minimize pick times",
          ],
        },
        {
          visual: {"title":"Batch & lot genealogy","icon":"layers","kind":"versions","tone":"purple","metric":"Forward & backward tracing","steps":["Source batch","Stock movements","Customer shipment"]},
          id: "inv-f6",
          category: "traceability",
          categoryLabel: "Batch & Traceability",
          tagTone: "bg-rose-50 text-rose-700",
          icon: "🏷️",
          iconBg: "bg-rose-50 text-rose-600",
          title: "Bi-Directional Batch & Lot Genealogy",
          description: "1-click trace tree tracking raw supplier heats forward to customer dispatches or backward to vendors.",
          bullets: [
            "Vendor heat/lot number capture against inward Purchase Orders and GRNs",
            "Complete serialization lifecycle logging with warranty, AMC, and RMA history",
            "Mock recall audit reports isolating contaminated batches in under 30 seconds",
          ],
        },
        {
          visual: {"title":"Shelf life & FEFO","icon":"clock","kind":"quality","tone":"orange","metric":"Expiry-aware allocation","steps":["Expiry date checked","Earliest batch selected","Stock issued"]},
          id: "inv-f7",
          category: "traceability",
          categoryLabel: "Batch & Traceability",
          tagTone: "bg-rose-50 text-rose-700",
          icon: "⏰",
          iconBg: "bg-rose-50 text-rose-600",
          title: "Shelf-Life Expiry & Automated FEFO Control",
          description: "Enforces First-Expired-First-Out (FEFO) picking logic and automatically quarantines near-expiry lots.",
          bullets: [
            "Automated quarantine locking on lots 30, 60, and 90 days before expiration",
            "System-directed picklists prioritizing batches closest to shelf-life expiry",
            "Manufacturing and bottling date tracking with digital Certificate of Analysis (COA)",
          ],
        },
        {
          visual: {"title":"Smart replenishment","icon":"refresh","kind":"stock","tone":"orange","metric":"Demand-aware reordering","steps":["Safety stock checked","Demand forecast","Reorder triggered"]},
          id: "inv-f8",
          category: "intelligence",
          categoryLabel: "Replenishment & Costing",
          tagTone: "bg-emerald-50 text-emerald-700",
          icon: "⚡",
          iconBg: "bg-emerald-50 text-emerald-600",
          title: "Predictive Safety Stock & Auto Reorder",
          description: "Algorithmic replenishment triggers analyzing supplier lead times and consumption velocity.",
          bullets: [
            "Lead-time adjusted dynamic safety buffers eliminating stockouts and dead capital",
            "1-click conversion from trigger alerts into consolidated vendor Purchase Orders",
            "Economic Order Quantity (EOQ) optimization capturing vendor volume discounts",
          ],
        },
        {
          visual: {"title":"Landed cost & aging","icon":"chart","kind":"ledger","tone":"green","metric":"Complete inventory cost","steps":["Freight & duties","Stock valuation","Aging analysis"]},
          id: "inv-f9",
          category: "intelligence",
          categoryLabel: "Replenishment & Costing",
          tagTone: "bg-emerald-50 text-emerald-700",
          icon: "📊",
          iconBg: "bg-emerald-50 text-emerald-600",
          title: "Landed Cost Valuation & Aging Analytics",
          description: "Perpetual FIFO and weighted average valuation with freight/customs capitalization and aging reports.",
          bullets: [
            "Automated 3-way landed cost variance (LCV) apportionment into unit valuations",
            "Granular stock aging analysis (0-30, 31-60, 61-90, 90+ days) and dead stock alarms",
            "Perpetual cycle counts with mobile barcode audits without halting plant operations",
          ],
        },
      ],
    },
    workflow: {
      eyebrow: "HOW DATA MOVES IN MOSSIE ERP",
      title: "From Goods Receipt to Consumption",
      subtitle: "Seamless inventory lifecycle connecting suppliers, warehouses, and shop floors.",
      steps: [
        {
          stepNumber: 1,
          icon: "inv-dock",
          title: "1. Dock Receipt",
          subtitle: "GRN against purchase order",
          detailTitle: "Stage 1: Goods Receipt Note (GRN) & Physical Inspection",
          detailDescription: "Goods arrive at warehouse docks. Barcode scanning matches packing list against original Purchase Order.",
          latency: "< 200ms",
        },
        {
          stepNumber: 2,
          icon: "inv-qc",
          title: "2. Quality Check",
          subtitle: "QC inspection & quarantine",
          detailTitle: "Stage 2: Quality Inspection & Batch Certificate Validation",
          detailDescription: "Items pass through automated QC sampling. Approved stock releases to inventory; rejected units isolate in quarantine bins.",
          latency: "< 300ms",
        },
        {
          stepNumber: 3,
          icon: "inv-putaway",
          title: "3. Put-Away",
          subtitle: "Optimized bin assignment",
          detailTitle: "Stage 3: Automated Bin Suggestion & Put-Away",
          detailDescription: "Mossie ERP directs warehouse operators to optimal bin locations based on item dimensions and turnover velocity.",
          latency: "< 150ms",
        },
        {
          stepNumber: 4,
          icon: "inv-sync",
          title: "4. Cross-Module Sync",
          subtitle: "Sales & production visibility",
          detailTitle: "Stage 4: Real-Time Availability Broadcast",
          detailDescription: "Available stock reflects instantly across CRM quotations, production schedules, and e-commerce stores.",
          latency: "< 100ms",
        },
        {
          stepNumber: 5,
          icon: "inv-valuation",
          title: "5. Ledger Posting",
          subtitle: "Auto-posted GL journal entry",
          detailTitle: "Stage 5: Automated Valuation & Balance Sheet Posting",
          detailDescription: "Perpetual inventory ledger updates stock asset values in the general ledger with zero manual journal typing.",
          latency: "< 200ms",
        },
      ],
    },
    testimonialAndRoi: {
      testimonial: {
        badge: "✓ VERIFIED SWITCHER FROM SAP MM",
        quote:
          "SAP was an administrative nightmare for our warehouse operators. They spent 20 minutes keying in one GRN transaction. Mossie ERP's mobile scanner app cut receiving time by 70%, and we haven't had a single stockout crisis in 14 months.",
        userName: "Gautam Singhania",
        userRole: "Director of Operations",
        userCompany: "Apex Electrical Assemblies (Turnover ₹110 Cr)",
        initials: "GS",
      },
      impactCards: [
        { value: "99.9%", label: "Inventory Accuracy", description: "Eliminated annual physical inventory audit variances.", color: "text-blue-600" },
        { value: "35%", label: "Reduced Holding Costs", description: "Dynamic reorder triggers eliminated excess safety buffer stock.", color: "text-emerald-600" },
        { value: "70%", label: "Faster Receiving Time", description: "Mobile GRN scanning streamlined dock-to-shelf turnaround.", color: "text-purple-600" },
        { value: "100%", label: "FIFO Adherence", description: "Prevented expired stock obsolescence across perishable SKUs.", color: "text-amber-600" },
      ],
    },
    cta: {
      pill: "TAKE TOTAL CONTROL OF STOCK",
      title: "Gain Real-Time Multi-Warehouse Visibility Today",
      description: "Experience a live walkthrough of Mossie ERP's intelligent inventory and warehouse management engine.",
      primaryCtaText: "Schedule a Warehouse Demo",
      secondaryCtaText: "Review Manufacturing Module",
    },
  },

  // =========================================================================
  // 4. ACCOUNTING MODULE
  // =========================================================================
  accounting: {
    slug: "accounting",
    moduleName: "Accounting & Finance",
    badge: "Accounting & General Ledger",
    heroHeadline: "Automated Financial Intelligence — ",
    heroHighlight: "Built for Indian Compliance",
    heroDescription:
      "Auto-posted general ledger journals, bank feed reconciliation, and real-time Balance Sheet & P&L statements without manual month-end crunch.",
    chip1: "Auto-Balanced Journals",
    chip2: "E-Way Bill & E-Invoice",
    chip3: "Instant P&L & Balance Sheet",
    // heroMetrics: {
    //   stat1: { value: "3 Days", label: "Month-End Close Time" },
    //   stat2: { value: "100%", label: "Automated GL Postings" },
    //   stat3: { value: "Direct", label: "Bank Feed Sync" },
    //   stat4: { value: "100%", label: "Audit & GST Traceable" },
    // },
    mockup: {
      windowTitle: "mossie-erp // financial-ledger-core",
      liveBadge: "● GENERAL LEDGER RECONCILED",
      topMetrics: [
        { label: "Net Revenue (YTD)", value: "₹24.8 Cr", sub: "↑ 22% vs budget", subColor: "text-emerald-600 font-bold" },
        { label: "EBITDA Margin", value: "19.4%", sub: "Audited & reconciled", subColor: "text-blue-600 font-bold" },
        { label: "Pending Bank Match", value: "₹4.2L", sub: "3 auto-matched entries", subColor: "text-slate-500 font-medium" },
      ],
      kanbanTitle: "Continuous Close Ledger Monitor",
      kanbanSubtitle: "Automated Trial Balance Reconciliation",
      columns: [
        {
          stageName: "Accounts Receivable",
          amount: "₹3.8Cr",
          cardTitle: "Invoice #INV-2026-902",
          cardDesc: "Tata Motors Ltd • 30 Days Due",
          cardTag: "Reconciled with GST Portal",
          cardTagStyle: "bg-blue-50 text-blue-700",
        },
        {
          stageName: "Accounts Payable",
          amount: "₹1.9Cr",
          cardTitle: "Vendor PO #PO-8821",
          cardDesc: "Jindal Steel Pipes • 3-Way Match",
          cardTag: "Ready for Disbursement",
          cardTagStyle: "bg-emerald-50 text-emerald-700",
          isHighlighted: true,
        },
        {
          stageName: "Tax & Compliance",
          amount: "₹42.8L",
          cardTitle: "GSTR-1 & GSTR-3B Drafts",
          cardDesc: "Direct JSON Generation Ready",
          cardTag: "100% ITC Matched",
          cardTagStyle: "bg-purple-50 text-purple-700",
        },
      ],
      alertText: "Finance Alert: ₹18.5L payment received via NEFT auto-matched with Sales Order #SO-6412.",
      alertAction: "View Voucher",
    },
    edge: {
      title: "What Extra We Provide: ",
      titleHighlight: "Continuous Close Architecture",
      description:
        "Tally and basic accounting tools require tedious manual voucher entries and end-of-month panic. Mossie ERP's reactive event bus posts ledger journals in real time.",
      superpowers: [
        {
          summary: "Bring every department’s transactions into one continuously updated ledger.",
          visual: {"title":"One live ledger","icon":"ledger","kind":"ledger","tone":"blue","metric":"One financial source","steps":["Business transaction","General ledger","Live financial reports"]},
          id: "acc-sp-1",
          number: 1,
          icon: "📒",
          gradient: "from-blue-500 to-indigo-600",
          shadowColor: "shadow-blue-500/20",
          tagBg: "bg-blue-50 text-blue-700 border-blue-200",
          title: "One ERP. One Live Ledger.",
          description:
            "Central General Ledger receiving animated, continuous transaction streams from Sales, Purchase, Inventory, Production, and Payroll.",
          legacyComparison: "✕ Legacy Accounting: Operational transactions sit in holding queues or require manual re-keying into Tally.",
          mossiComparison: "✓ Mossie ERP: Single unified ledger updates instantaneously across the enterprise with zero manual journal typing.",
          impactMetric: "Sub-Second Ledger Sync",
          impactColor: "text-blue-600",
        },
        {
          summary: "Turn business events into balanced journal entries without manual re-entry.",
          visual: {"title":"Event-driven auto posting","icon":"refresh","kind":"ledger","tone":"green","metric":"Posting on every event","steps":["Source event","Balanced journal","Ledger posted"]},
          id: "acc-sp-2",
          number: 2,
          icon: "⚡",
          gradient: "from-emerald-500 to-teal-600",
          shadowColor: "shadow-emerald-500/20",
          tagBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
          title: "Event-Driven Auto Posting",
          description:
            "Every warehouse dispatch, GRN receipt, depreciation run, and payroll cycle triggers an automatic, balanced double-entry voucher.",
          legacyComparison: "✕ Legacy Accounting: Tedious manual voucher typing and end-of-month panic with missed accruals.",
          mossiComparison: "✓ Mossie ERP: Reactive event bus posts balanced journal vouchers in the background with zero latency.",
          impactMetric: "90% Faster Close",
          impactColor: "text-emerald-700",
        },
        {
          summary: "Match bank feeds to ledger entries and focus your team on exceptions.",
          visual: {"title":"Smart bank reconciliation","icon":"bank","kind":"matching","tone":"purple","metric":"Clear matched balances","steps":["Bank feed imported","Entries matched","Exceptions reviewed"]},
          id: "acc-sp-3",
          number: 3,
          icon: "🏦",
          gradient: "from-amber-500 to-orange-600",
          shadowColor: "shadow-amber-500/20",
          tagBg: "bg-amber-50 text-amber-800 border-amber-200",
          title: "Intelligent Bank Reconciliation",
          description:
            "Direct banking API feeds automatically match statement credits and debits against open invoices, highlighting unmatched items instantly.",
          legacyComparison: "✕ Legacy Accounting: Downloading manual bank statements and line-by-line manual tick-offs with rulers.",
          mossiComparison: "✓ Mossie ERP: Algorithmic rule engines auto-match 95%+ of banking transactions in under 5 minutes daily.",
          impactMetric: "95% Auto-Matched",
          impactColor: "text-amber-700",
        },
        {
          summary: "Build approvals, posting rules, and a clear audit trail into everyday accounting.",
          visual: {"title":"Financial control engine","icon":"shield","kind":"quality","tone":"orange","metric":"Controlled at every step","steps":["Posting rules","Approval controls","Audit trail"]},
          id: "acc-sp-4",
          number: 4,
          icon: "🛡️",
          gradient: "from-purple-500 to-violet-600",
          shadowColor: "shadow-purple-500/20",
          tagBg: "bg-purple-50 text-purple-800 border-purple-200",
          title: "Financial Control Engine",
          description:
            "Maker-checker review workflows, cryptographic period locking, and unalterable audit trails preventing backdated entries.",
          legacyComparison: "✕ Legacy Accounting: Unchecked voucher edits and backdated adjustments lead to audit fines and fraud risks.",
          mossiComparison: "✓ Mossie ERP: Multi-tier approval hierarchies, immutable change logs, and strict period closing locks.",
          impactMetric: "100% Audit Compliance",
          impactColor: "text-purple-700",
        },
        {
          summary: "Connect company accounts and see consolidated financial results in one place.",
          visual: {"title":"Multi-company consolidation","icon":"network","kind":"ledger","tone":"blue","metric":"One group-wide view","steps":["Entity balances","Intercompany eliminations","Consolidated reports"]},
          id: "acc-sp-5",
          number: 5,
          icon: "🌐",
          gradient: "from-cyan-500 to-blue-600",
          shadowColor: "shadow-cyan-500/20",
          tagBg: "bg-cyan-50 text-cyan-800 border-cyan-200",
          title: "Multi-Company Consolidation",
          description:
            "Instant multi-entity financial consolidation with automated inter-company transaction eliminations and unified group P&L.",
          legacyComparison: "✕ Disconnected Tools: Separate company files requiring manual spreadsheet stitching and painful eliminations.",
          mossiComparison: "✓ Mossie ERP: 1-click consolidated balance sheet and elimination journals across all subsidiary legal entities.",
          impactMetric: "1-Click Group Close",
          impactColor: "text-cyan-700",
        },
      ],
    },
    comparison: {
      eyebrow: "HONEST & DIRECT BENCHMARK",
      title: "How Mossie ERP Accounting Compares to Tally & Legacy ERPs",
      subtitle: "Compare our automated continuous-close ledger against legacy desktop software and Western ERPs.",
      competitor1Name: "Legacy ERPs (SAP FI / NetSuite)",
      competitor2Name: "Desktop Tools (Tally Prime / Busy)",
      rows: [
        {
          metric: "Zero-Touch Continuous Close Ledger",
          metricDesc: "Automated journal posting directly from operational warehouse, sales, and purchase events.",
          mossi: {
            highlight: "✓ 100% Real-Time Event Ledger",
            detail: "Sales dispatches, inward GRNs, production WIP, and payroll automatically create balanced double-entry vouchers",
          },
          legacy: {
            highlight: "⚠️ Heavy Nightly Batch Jobs",
            detail: "Operational events sit in holding queues, delaying financial statements and ledger accuracy",
          },
          pointSolution: {
            highlight: "✕ 100% Manual Voucher Entry",
            detail: "Accountants must manually re-type every sales invoice, purchase bill, and stock transfer",
          },
        },
        {
          metric: "Automated GSTR-2B ITC Reconciliation",
          metricDesc: "Automated matching of purchase bills against government GSTR-2B to prevent lost tax credits.",
          mossi: {
            highlight: "✓ 1-Click API ITC Matcher",
            detail: "Instantly reconciles purchase register against GSTR-2B JSON, flagging missing vendor filings to protect input tax credits",
          },
          legacy: {
            highlight: "⚠️ Costly Third-Party Tax Engine",
            detail: "Requires separate GST middleware licensing and external consultant implementation",
          },
          pointSolution: {
            highlight: "✕ Manual Excel VLOOKUP",
            detail: "Accountants spend days manually comparing 5,000+ line items in spreadsheets, missing unclaimed credits",
          },
        },
        {
          metric: "Native Direct Bank Feed Reconciliation",
          metricDesc: "Rule-based automated matching of bank statement transactions with ERP vouchers.",
          mossi: {
            highlight: "✓ Auto-Rule Bank Reconciliation",
            detail: "Fetches statement feeds via Open Banking APIs; auto-matches invoices, NEFT/RTGS, and UPI references",
          },
          legacy: {
            highlight: "⚠️ Complex MT940 Configuration",
            detail: "Requires expensive Swift/MT940 banking add-on modules and manual parsing scripts",
          },
          pointSolution: {
            highlight: "✕ Line-by-Line Manual Ticking",
            detail: "Accountant prints bank statements and manually reconciles entries one-by-one with highlighter pens",
          },
        },
        {
          metric: "Real-Time Instant P&L & Balance Sheet",
          metricDesc: "Executive financial visibility without waiting for month-end close cycles.",
          mossi: {
            highlight: "✓ Sub-Second Live Financials",
            detail: "P&L, Balance Sheet, and Cash Flow statements update live with every transaction across all branches",
          },
          legacy: {
            highlight: "✕ 15 to 20 Days Month-End Lag",
            detail: "Leadership operates blind for 2 weeks while finance teams process manual closing adjustments",
          },
          pointSolution: {
            highlight: "✕ Outdated Desktop Backups",
            detail: "Data trapped on single office desktop PC; remote directors cannot access live financials",
          },
        },
        {
          metric: "Multi-Entity Inter-Company Consolidation",
          metricDesc: "Consolidating group companies with automated inter-company transaction elimination.",
          mossi: {
            highlight: "✓ 1-Click Group Consolidation",
            detail: "Eliminates inter-company sales and purchases automatically, generating unified group financial statements",
          },
          legacy: {
            highlight: "⚠️ Exorbitant Multi-Entity Fees",
            detail: "NetSuite OneWorld and SAP charge massive extra recurring license fees per subsidiary",
          },
          pointSolution: {
            highlight: "✕ Disconnected Company Files",
            detail: "Requires maintaining separate company files and manually stitching group balance sheets in Excel",
          },
        },
      ],
    },
    featuresCatalog: {
      previewName: "Accounting",
      headline: {"action":"close with confidence","description":"Bring every transaction, reconciliation, and financial decision into one connected ledger."},
      eyebrow: "Comprehensive Functionality Catalog",
      title: "Explore All Features in Accounting & Finance",
      subtitle:
        "Complete fiscal management including General Ledger, Accounts Payable, Receivable, Fixed Assets, and Indian Tax Compliance.",
      categories: [
        { id: "all", label: "All Features" },
        { id: "gl", label: "General Ledger & Vouchers" },
        { id: "banking", label: "Banking & Payables" },
        { id: "tax", label: "GST & Tax Compliance" },
        { id: "governance", label: "Reporting & Controls" },
      ],
      items: [
        {
          visual: {"title":"Accounts & multi-currency ledger","icon":"ledger","kind":"ledger","tone":"blue","metric":"Every currency, balanced","steps":["Chart of accounts","Currency conversion","General ledger"]},
          id: "acc-f1",
          category: "gl",
          categoryLabel: "General Ledger & Vouchers",
          tagTone: "bg-blue-50 text-blue-700",
          icon: "📒",
          iconBg: "bg-blue-50 text-blue-600",
          title: "Chart of Accounts & Multi-Currency Ledger",
          description: "Flexible account hierarchy accommodating corporate group, division, department, and project cost centers.",
          bullets: [
            "Unlimited sub-account depth with MCA-compliant pre-built corporate templates",
            "Cost center and profit center tagging on every financial transaction",
            "Multi-currency ledger support with automated daily forex revaluation",
          ],
        },
        {
          visual: {"title":"Event-driven auto posting","icon":"refresh","kind":"ledger","tone":"green","metric":"Posting on every event","steps":["Source event","Balanced journal","Ledger posted"]},
          id: "acc-f2",
          category: "gl",
          categoryLabel: "General Ledger & Vouchers",
          tagTone: "bg-blue-50 text-blue-700",
          icon: "⚡",
          iconBg: "bg-blue-50 text-blue-600",
          title: "Automated Double-Entry Voucher Engine",
          description: "Zero-touch automated posting creating balanced journal, payment, receipt, contra, and debit/credit notes.",
          bullets: [
            "Balanced double-entry enforcement preventing unbalanced manual entries",
            "Automated journal generation from operational sales dispatches, GRNs, and payroll",
            "Recurring voucher automation for monthly leases, retainers, and accruals",
          ],
        },
        {
          visual: {"title":"Assets & depreciation","icon":"asset","kind":"ledger","tone":"orange","metric":"Complete asset lifecycle","steps":["Asset capitalized","Depreciation scheduled","Book value updated"]},
          id: "acc-f3",
          category: "gl",
          categoryLabel: "General Ledger & Vouchers",
          tagTone: "bg-blue-50 text-blue-700",
          icon: "🏛️",
          iconBg: "bg-blue-50 text-blue-600",
          title: "Fixed Asset Management & Dual Depreciation",
          description: "Track corporate capital assets, asset register, and automatic depreciation posting.",
          bullets: [
            "Companies Act (SLM) and Income Tax Act (WDV) simultaneous dual depreciation",
            "Automated monthly batch depreciation posting directly to the General Ledger",
            "Asset disposal, scrapping, revaluation, and CWIP capitalization workflows",
          ],
        },
        {
          visual: {"title":"Smart bank reconciliation","icon":"bank","kind":"matching","tone":"purple","metric":"Clear matched balances","steps":["Bank feed imported","Entries matched","Exceptions reviewed"]},
          id: "acc-f4",
          category: "banking",
          categoryLabel: "Banking & Payables",
          tagTone: "bg-amber-50 text-amber-700",
          icon: "🏦",
          iconBg: "bg-amber-50 text-amber-600",
          title: "Algorithmic Bank Feed Reconciliation",
          description: "Direct corporate banking API feeds matching statement credits and debits against open ERP vouchers.",
          bullets: [
            "Direct banking API connections (ICICI, HDFC, Axis, SBI) with daily statement sync",
            "Automated rule engine matching 95%+ of banking transactions in seconds",
            "Instant exception list highlighting unpresented cheques and auto-generated BRS",
          ],
        },
        {
          visual: {"title":"Payables & 3-way matching","icon":"check","kind":"matching","tone":"green","metric":"Verified before payment","steps":["Purchase order","Goods receipt","Vendor invoice"]},
          id: "acc-f5",
          category: "banking",
          categoryLabel: "Banking & Payables",
          tagTone: "bg-amber-50 text-amber-700",
          icon: "💳",
          iconBg: "bg-amber-50 text-amber-600",
          title: "Accounts Payable & 3-Way Matching",
          description: "Match vendor bills against original purchase orders and warehouse GRNs before releasing payment.",
          bullets: [
            "Quantity and price tolerance threshold validation preventing over-payments",
            "Automated TDS deduction computation (Section 194C/194J/194Q) at bill booking",
            "Branded electronic payment advice notes emailed automatically to suppliers",
          ],
        },
        {
          visual: {"title":"GST & e-invoicing","icon":"receipt","kind":"approvals","tone":"blue","metric":"Tax-ready transactions","steps":["GST calculated","E-invoice generated","Return data prepared"]},
          id: "acc-f6",
          category: "tax",
          categoryLabel: "GST & Tax Compliance",
          tagTone: "bg-purple-50 text-purple-700",
          icon: "⚖️",
          iconBg: "bg-purple-50 text-purple-600",
          title: "Native Indian GST & E-Invoicing Engine",
          description: "End-to-end statutory compliance with automated GSTR-1, GSTR-3B filing, and real-time E-Invoicing.",
          bullets: [
            "Direct IRP integration generating government IRN and signed QR codes in 1 click",
            "Automated GSTR-1 and GSTR-3B JSON exports compatible with GSTN portal",
            "Automated Part-A & Part-B E-Way Bill generation for interstate cargo dispatches",
          ],
        },
        {
          visual: {"title":"GSTR-2B reconciliation","icon":"scan","kind":"matching","tone":"purple","metric":"Clear input tax credits","steps":["Purchase register","GSTR-2B statement","ITC matched"]},
          id: "acc-f7",
          category: "tax",
          categoryLabel: "GST & Tax Compliance",
          tagTone: "bg-purple-50 text-purple-700",
          icon: "🔍",
          iconBg: "bg-purple-50 text-purple-600",
          title: "Automated GSTR-2B ITC Reconciliation",
          description: "Algorithmic matching of inward purchase bills against government GSTR-2B to recover 100% Input Tax Credit.",
          bullets: [
            "Isolates missing vendor invoices and duplicate tax claims before monthly filing",
            "Automated payment withholding on defaulting suppliers missing from GSTR-2B",
            "Eliminates ITC loss and prevents statutory notice penalties",
          ],
        },
        {
          visual: {"title":"Continuous close reporting","icon":"chart","kind":"ledger","tone":"green","metric":"Reports without the wait","steps":["Trial balance","Profit & loss","Balance sheet"]},
          id: "acc-f8",
          category: "governance",
          categoryLabel: "Reporting & Controls",
          tagTone: "bg-emerald-50 text-emerald-700",
          icon: "📊",
          iconBg: "bg-emerald-50 text-emerald-600",
          title: "Continuous Close Financial Reporting",
          description: "Real-time Balance Sheet, P&L, Cash Flow, Trial Balance, and aging reports available at any hour.",
          bullets: [
            "Statutory Schedule III formatted Balance Sheet and P&L drillable to vouchers",
            "Customer AR & vendor AP aging matrices with automated dunning notifications",
            "Cash runway simulator predicting future liquidity factoring open payables",
          ],
        },
        {
          visual: {"title":"Maker-checker & company close","icon":"shield","kind":"quality","tone":"rose","metric":"A controlled close","steps":["Journal prepared","Independent approval","Company period closed"]},
          id: "acc-f9",
          category: "governance",
          categoryLabel: "Reporting & Controls",
          tagTone: "bg-emerald-50 text-emerald-700",
          icon: "🛡️",
          iconBg: "bg-emerald-50 text-emerald-600",
          title: "Maker-Checker Controls & Multi-Company Close",
          description: "Enterprise governance with segregation of duties, locked accounting periods, and group consolidation.",
          bullets: [
            "Maker-checker voucher approval hierarchies preventing unauthorized postings",
            "Cryptographic cutoff period locks preventing backdated entries and audit tampering",
            "1-click multi-entity consolidation with automated inter-company eliminations",
          ],
        },
      ],
    },
    workflow: {
      eyebrow: "HOW DATA MOVES IN MOSSIE ERP",
      title: "From Business Transaction to Audited Financials",
      subtitle: "Continuous accounting automation eliminates manual bookkeeping bottlenecks.",
      steps: [
        {
          stepNumber: 1,
          icon: "acc-event",
          title: "1. Operational Event",
          subtitle: "Sales dispatch, GRN, payroll",
          detailTitle: "Stage 1: Real-Time Event Bus Notification",
          detailDescription: "When an operational event completes in any module, Mossie ERP's event bus triggers corresponding financial journal rules.",
          latency: "< 50ms",
        },
        {
          stepNumber: 2,
          icon: "acc-voucher",
          title: "2. Auto-Voucher",
          subtitle: "Balanced double entry generated",
          detailTitle: "Stage 2: Automatic Double-Entry Voucher Generation",
          detailDescription: "Debit and credit vouchers post with cost center, GST tax, and department tags automatically populated.",
          latency: "< 100ms",
        },
        {
          stepNumber: 3,
          icon: "acc-bank",
          title: "3. Bank Feed",
          subtitle: "Direct API banking match",
          detailTitle: "Stage 3: Algorithmic Bank Feed Reconciliation",
          detailDescription: "Bank statement feeds pull in real time; customer receipts and vendor payouts auto-match against ledger entries.",
          latency: "< 250ms",
        },
        {
          stepNumber: 4,
          icon: "acc-gst",
          title: "4. GST Match",
          subtitle: "GSTR-2B vs AP ledger",
          detailTitle: "Stage 4: Automated GSTR-2B Input Tax Credit Validation",
          detailDescription: "Government portal filings are matched against purchase bills to safeguard every rupee of input tax credit.",
          latency: "< 400ms",
        },
        {
          stepNumber: 5,
          icon: "acc-pnl",
          title: "5. Real-Time P&L",
          subtitle: "Audit-ready statements",
          detailTitle: "Stage 5: Continuous Close Financial Reporting",
          detailDescription: "Balance Sheet, Profit & Loss, and Cash Flow statements update live on executive mobile and web dashboards.",
          latency: "< 150ms",
        },
      ],
    },
    testimonialAndRoi: {
      testimonial: {
        badge: "✓ VERIFIED SWITCHER FROM TALLY + MANUAL SPREADSHEETS",
        quote:
          "Month-end close used to take our finance team 18 sleepless days. With Mossie ERP's auto-posting event bus and bank API sync, our books close on the 2nd of every month. Our statutory auditor praised the clean audit trail.",
        userName: "Radhika Mehra",
        userRole: "Chief Financial Officer",
        userCompany: "Kaveri Precision Components (Turnover ₹140 Cr)",
        initials: "RM",
      },
      impactCards: [
        { value: "3 Days", label: "Month-End Close", description: "Reduced close cycle from 18 days to just 3 days.", color: "text-blue-600" },
        { value: "100%", label: "ITC Reconciliation", description: "Zero lost input tax credit through automated 2B reconciliation.", color: "text-emerald-600" },
        { value: "80%", label: "Fewer Manual Vouchers", description: "Eliminated routine data entry across invoices, bills, and payments.", color: "text-purple-600" },
        { value: "Live", label: "P&L Visibility", description: "Executive decision-makers access live financial metrics 24/7.", color: "text-amber-600" },
      ],
    },
    cta: {
      pill: "MODERNIZE YOUR CORPORATE FINANCE",
      title: "Transform Accounting into a Strategic Competitive Advantage",
      description: "Schedule a confidential 20-minute architecture demo with our senior enterprise finance consultants.",
      primaryCtaText: "Book a Finance Architecture Demo",
      secondaryCtaText: "Explore Full Modules Directory",
    },
  },

  // =========================================================================
  // 5. PURCHASE MODULE
  // =========================================================================
  purchase: {
    slug: "purchase",
    moduleName: "Purchase & Procurement Module",
    badge: "Cost Control & Sourcing",
    heroHeadline: "Strategic Procurement Control — ",
    heroHighlight: "Cut Spend with Multi-Vendor Sourcing",
    heroDescription:
      "Take total control of organizational spend: compare up to 10 vendors on an automated RFQ matrix, auto-allocate landed costs, enforce fraud-proof 3-way matching, and perform gate-level QC tracking.",
    chip1: "Multi-Vendor RFQ Matrix & L1",
    chip2: "True Landed Cost Engine (LCV)",
    chip3: "Fraud-Proof 3-Way Matching",
    // heroMetrics: {
    //   stat1: { value: "Up to 10", label: "Multi-Vendor RFQs" },
    //   stat2: { value: "Auto L1", label: "Lowest Bid & Savings" },
    //   stat3: { value: "100%", label: "3-Way Match Reconciled" },
    //   stat4: { value: "Gate-Level", label: "QC & Serial Tracking" },
    // },
    mockup: {
      windowTitle: "mossie-erp // procurement-engine",
      liveBadge: "● VENDOR PORTAL CONNECTED",
      topMetrics: [
        { label: "Active Spend (MTD)", value: "₹3.42 Cr", sub: "Under budgeted cap", subColor: "text-emerald-600 font-bold" },
        { label: "Live RFQ Matrix", value: "10 Vendors", sub: "Auto L1 Bid Highlighted", subColor: "text-blue-600 font-bold" },
        { label: "3-Way Reconciliation", value: "100% Match", sub: "Zero Overpayments", subColor: "text-emerald-600 font-bold" },
      ],
      kanbanTitle: "Procurement Requisition Pipeline",
      kanbanSubtitle: "From Shop Floor Requisition to Approved GRN & LCV",
      columns: [
        {
          stageName: "RFQ Bidding Matrix",
          amount: "₹12.5L",
          cardTitle: "Cast Iron Flanges Grade A",
          cardDesc: "8 bids received • Auto L1 Vendor Selected",
          cardTag: "Cost Savings: 11.2%",
          cardTagStyle: "bg-blue-50 text-blue-700",
        },
        {
          stageName: "Gate Receipt & QC",
          amount: "₹8.4L",
          cardTitle: "Hydraulic Cylinders 120mm",
          cardDesc: "Batch #B-902 scanned • QC Quarantine active",
          cardTag: "QC Passed (50/50)",
          cardTagStyle: "bg-amber-50 text-amber-700",
          isHighlighted: true,
        },
        {
          stageName: "3-Way Match & Pay",
          amount: "₹18.2L",
          cardTitle: "Jindal Steel Pipes",
          cardDesc: "PO vs GRN vs Bill verified • Landed Cost Allocated",
          cardTag: "LCV & Payment Cleared",
          cardTagStyle: "bg-emerald-50 text-emerald-700",
        },
      ],
      alertText: "Procurement Sentinel: Multi-Vendor RFQ #RFQ-902 identified L1 bid with ₹1.4L cost savings against historical purchase price.",
      alertAction: "Award PO to L1",
    },
    edge: {
      title: "What Extra We Provide: ",
      titleHighlight: "Cost Control & Sourcing",
      description:
        "Stop uncontrolled maverick spending and supplier billing errors. Mossie ERP connects shop floor material needs with automated 10-vendor RFQ bidding, landed cost allocation, and fraud-proof invoice verification.",
      superpowers: [
        {
          summary: "Compare vendor quotations side by side and make informed sourcing decisions.",
          visual: {"title":"Vendor RFQs & cost savings","icon":"chart","kind":"matching","tone":"blue","metric":"Compare every offer","steps":["RFQ shared","Vendor quotes compared","Supplier selected"]},
          id: "pur-sp-1",
          number: 1,
          icon: "📊",
          gradient: "from-blue-500 to-indigo-600",
          shadowColor: "shadow-blue-500/20",
          tagBg: "bg-blue-50 text-blue-700 border-blue-200",
          title: "Multi-Vendor RFQ Matrix & Live Cost Savings Analytics",
          description:
            "Broadcast quotation requests (RFQs) to up to 10 vendors simultaneously. Compare bids side-by-side on an interactive matrix, auto-highlight the lowest bid (L1 Vendor), and calculate actual Cost Savings (₹ / %) against historical purchase prices.",
          legacyComparison:
            "✕ Legacy ERPs: Buyers copy-paste PDF quotes into manual spreadsheets, losing track of terms and missing the lowest true cost.",
          mossiComparison:
            '✓ Mossie ERP: "Multi-Vendor RFQ Comparison Matrix with Auto L1 & Cost Savings Analytics." Instant side-by-side comparison across 10 vendors.',
          impactMetric: "Auto L1 Vendor & Live Spend Savings",
          impactColor: "text-blue-600",
        },
        {
          summary: "Include freight, duties, and other charges in the true cost of your inventory.",
          visual: {"title":"True landed cost","icon":"coins","kind":"ledger","tone":"orange","metric":"See the complete cost","steps":["Purchase price","Freight & import costs","Landed valuation"]},
          id: "pur-sp-2",
          number: 2,
          icon: "💰",
          gradient: "from-emerald-500 to-teal-600",
          shadowColor: "shadow-emerald-500/20",
          tagBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
          title: "True Landed Cost Valuation (LCV Engine)",
          description:
            "Freight charges, customs duties, insurance, and local transport costs are automatically allocated proportionally across item unit costs, giving you accurate gross margins and true inventory valuation.",
          legacyComparison:
            "✕ Legacy ERPs: Ancillary freight and duty fees are dumped into general expense accounts, corrupting product costing and margin reports.",
          mossiComparison:
            '✓ Mossie ERP: "True Inventory Costing — Freight & Customs duties auto-allocated to item value." 100% accurate landed valuation per SKU.',
          impactMetric: "True Unit Cost with LCV Engine",
          impactColor: "text-emerald-700",
        },
        {
          summary: "Match purchase orders, goods receipts, and vendor bills before payment.",
          visual: {"title":"3-way invoice matching","icon":"shield","kind":"matching","tone":"purple","metric":"Verify before you pay","steps":["Purchase order","Goods receipt","Vendor bill matched"]},
          id: "pur-sp-3",
          number: 3,
          icon: "🔒",
          gradient: "from-purple-500 to-violet-600",
          shadowColor: "shadow-purple-500/20",
          tagBg: "bg-purple-50 text-purple-800 border-purple-200",
          title: "Fraud-Proof 3-Way Matching (PO vs GRN vs Vendor Bill)",
          description:
            'Before releasing vendor payments, the system cross-verifies: "Did the bill rate match the PO? Did the warehouse receive this exact quantity?" Any discrepancy triggers an automatic billing hold.',
          legacyComparison:
            "✕ Legacy ERPs: Manual paperwork allows duplicate vendor invoices, rate discrepancies, and billing for unreceived stock to slip through unnoticed.",
          mossiComparison:
            '✓ Mossie ERP: "Fraud-Proof Accounts Payable with Automated 3-Way Reconciliation." Automatic hold on mismatched quantities or inflated rates.',
          impactMetric: "Zero Duplicate or Fraudulent Bills",
          impactColor: "text-purple-700",
        },
        {
          summary: "Capture batches, serial numbers, and quality checks as goods arrive.",
          visual: {"title":"Goods receipt & quality checks","icon":"barcode","kind":"quality","tone":"green","metric":"Quality at the door","steps":["Goods received","Batch & serial captured","QC released"]},
          id: "pur-sp-4",
          number: 4,
          icon: "🏷️",
          gradient: "from-amber-500 to-orange-600",
          shadowColor: "shadow-amber-500/20",
          tagBg: "bg-amber-50 text-amber-800 border-amber-200",
          title: "Inward GRN with Batch, Serial & Quality Inspection (QC)",
          description:
            "At factory receipt, goods are scanned with Batch Numbers, Expiry Dates, and Serial Numbers. QC teams segregate rejected items so only approved quantities enter sellable stock.",
          legacyComparison:
            "✕ Legacy ERPs: Defective raw materials bypass receipt inspection and land straight on the shop floor, causing assembly line breakdowns.",
          mossiComparison:
            '✓ Mossie ERP: "Gate-Level Quality Control (QC) with Batch & Serial Tracking." Strict QC quarantine ensures only approved stock enters inventory.',
          impactMetric: "Gate-Level QC & Complete Lot Traceability",
          impactColor: "text-amber-700",
        },
      ],
    },
    comparison: {
      eyebrow: "HONEST & DIRECT BENCHMARK",
      title: "How Mossie ERP Procurement Compares to Legacy Suites",
      subtitle: "Compare our modern procurement engine against legacy ERP suites and basic PO generators.",
      competitor1Name: "Legacy ERPs (SAP MM / NetSuite)",
      competitor2Name: "Basic Purchasing (Zoho / QuickBooks)",
      rows: [
        {
          metric: "Multi-Vendor RFQ Matrix & Live Cost Savings (Auto L1)",
          metricDesc: "Simultaneous RFQ broadcasting, side-by-side comparison matrix, and automated L1 vendor ranking.",
          mossi: {
            highlight: "✓ Automated 10-Vendor Matrix & L1",
            detail: "Broadcasts RFQ to 10 suppliers; auto-ranks L1 bid and computes live ₹ / % cost savings against historical purchase price",
          },
          legacy: {
            highlight: "⚠️ Complex Vendor Quotation Schemas",
            detail: "Requires complex quotation master configuration and lacks visual side-by-side cost delta comparison",
          },
          pointSolution: {
            highlight: "✕ Manual Excel Comparison",
            detail: "Purchasers manually copy quotes into Excel tables and calculate margins by hand",
          },
        },
        {
          metric: "True Landed Cost Valuation (LCV Engine)",
          metricDesc: "Proportional distribution of ocean freight, customs duty, insurance, and handling into item unit cost.",
          mossi: {
            highlight: "✓ Proportional LCV Cost Engine",
            detail: "Auto-apportions import duties and freight across item lines based on value or weight, ensuring true inventory costing",
          },
          legacy: {
            highlight: "⚠️ Delayed Month-End Cost Runs",
            detail: "Landed costs are calculated weeks after receipt via complex cost center settlement jobs",
          },
          pointSolution: {
            highlight: "✕ Generic Expense Booking",
            detail: "Customs and freight are booked as generic operating expenses, severely distorting SKU gross margins",
          },
        },
        {
          metric: "Fraud-Proof 3-Way Matching (PO vs GRN vs Vendor Bill)",
          metricDesc: "Automated rate and quantity reconciliation before vendor payment voucher release.",
          mossi: {
            highlight: "✓ Automated Anti-Fraud Gate",
            detail: "Cross-checks bill rate vs PO and billed quantity vs physically inspected GRN; auto-holds payment on discrepancy",
          },
          legacy: {
            highlight: "⚠️ Rigid Exception Freezes",
            detail: "Minor rounding differences completely freeze account payable batches requiring IT intervention",
          },
          pointSolution: {
            highlight: "✕ Manual Paper Slip Checking",
            detail: "Relies entirely on human memory and paper receipts, leading to duplicate payments and rate inflations",
          },
        },
        {
          metric: "Gate-Level Inward GRN with Batch, Serial & QC Quarantine",
          metricDesc: "Factory dock receipt scanning, batch/expiry capture, and automatic quarantine until QC clearance.",
          mossi: {
            highlight: "✓ Gate QC & Quarantine Isolation",
            detail: "Captures batch and serial at dock; automatically locks stock in QC Quarantine until inspection signoff",
          },
          legacy: {
            highlight: "⚠️ Expensive SAP QM License",
            detail: "Requires separate Quality Management licensing and complex laboratory inspection work center setup",
          },
          pointSolution: {
            highlight: "✕ Zero QC Quarantine",
            detail: "Uninspected goods flow directly into sellable inventory, causing factory defects and customer returns",
          },
        },
        {
          metric: "MSME 45-Day Payment Rule Compliance & Vendor Portal",
          metricDesc: "Automatic tracking of MSME supplier payment deadlines under Section 43B(h) and self-service vendor portal.",
          mossi: {
            highlight: "✓ MSME 45-Day Priority Alerts",
            detail: "Tracks vendor MSME classification with automated countdown alerts before 45-day statutory payment cutoff",
          },
          legacy: {
            highlight: "⚠️ Custom Consulting Customization",
            detail: "Requires expensive consultant programming to adapt legacy workflows to Indian MSME regulations",
          },
          pointSolution: {
            highlight: "✕ Zero MSME Tracking",
            detail: "Leaves business vulnerable to income tax disallowances and interest penalties under Section 43B(h)",
          },
        },
      ],
    },
    featuresCatalog: {
      previewName: "Purchasing",
      headline: {"action":"buy with confidence","description":"Compare suppliers, control costs, and connect every purchase to the goods you receive."},
      eyebrow: "Comprehensive Functionality Catalog",
      title: "Explore All Features in Purchase & Procurement",
      subtitle: "Full lifecycle procurement tools from RFQ bidding matrix to landed cost valuation and gate QC.",
      categories: [
        { id: "all", label: "All Features" },
        { id: "rfq", label: "RFQ & Sourcing" },
        { id: "orders", label: "Purchase & Landed Cost" },
        { id: "quality", label: "3-Way Match & QC" },
      ],
      items: [
        {
          visual: {"title":"Vendor RFQs & cost savings","icon":"chart","kind":"matching","tone":"blue","metric":"Compare every offer","steps":["RFQ shared","Vendor quotes compared","Supplier selected"]},
          id: "pur-f1",
          category: "rfq",
          categoryLabel: "RFQ & Sourcing",
          tagTone: "bg-blue-50 text-blue-700",
          icon: "📊",
          iconBg: "bg-blue-50 text-blue-600",
          title: "Multi-Vendor RFQ Matrix & Live Cost Savings Analytics",
          description: "Multi-Vendor RFQ Comparison Matrix with Auto L1 & Cost Savings Analytics.",
          bullets: [
            "Broadcast quotation requests (RFQs) to up to 10 vendors simultaneously",
            "Side-by-side interactive comparison matrix auto-highlighting lowest bid (L1 Vendor)",
            "Live calculation of actual cost savings (₹ / %) against historical purchase benchmarks",
          ],
        },
        {
          visual: {"title":"True landed cost","icon":"coins","kind":"ledger","tone":"orange","metric":"See the complete cost","steps":["Purchase price","Freight & import costs","Landed valuation"]},
          id: "pur-f2",
          category: "orders",
          categoryLabel: "Purchase & Landed Cost",
          tagTone: "bg-emerald-50 text-emerald-700",
          icon: "💰",
          iconBg: "bg-emerald-50 text-emerald-600",
          title: "True Landed Cost Valuation (LCV Engine)",
          description: "True Inventory Costing — Freight & Customs duties auto-allocated to item value.",
          bullets: [
            "Freight charges, customs duties, insurance, and local transport allocated proportionally",
            "Eliminates distorted margin metrics by embedding actual landed costs into unit valuation",
            "Automatic multi-currency foreign exchange rate conversion for import consignments",
          ],
        },
        {
          visual: {"title":"3-way invoice matching","icon":"shield","kind":"matching","tone":"purple","metric":"Verify before you pay","steps":["Purchase order","Goods receipt","Vendor bill matched"]},
          id: "pur-f3",
          category: "quality",
          categoryLabel: "3-Way Match & QC",
          tagTone: "bg-purple-50 text-purple-700",
          icon: "🔒",
          iconBg: "bg-purple-50 text-purple-600",
          title: "Fraud-Proof 3-Way Matching (PO vs GRN vs Vendor Bill)",
          description: "Fraud-Proof Accounts Payable with Automated 3-Way Reconciliation.",
          bullets: [
            'Automated cross-check: "Did the bill rate match the PO? Did the warehouse receive this exact quantity?"',
            "Instant billing hold triggered whenever discrepancy exceeds defined tolerance",
            "Prevents duplicate vendor invoicing and unapproved price escalation",
          ],
        },
        {
          visual: {"title":"Goods receipt & quality checks","icon":"barcode","kind":"quality","tone":"green","metric":"Quality at the door","steps":["Goods received","Batch & serial captured","QC released"]},
          id: "pur-f4",
          category: "quality",
          categoryLabel: "3-Way Match & QC",
          tagTone: "bg-amber-50 text-amber-700",
          icon: "🏷️",
          iconBg: "bg-amber-50 text-amber-600",
          title: "Inward GRN with Batch, Serial & Quality Inspection (QC)",
          description: "Gate-Level Quality Control (QC) with Batch & Serial Tracking.",
          bullets: [
            "Dock barcode scanning of Batch Numbers, Expiry Dates, and Serial Numbers upon receipt",
            "QC inspection workflow isolates and segregates rejected items into quarantine",
            "Only approved quantities enter sellable or production-ready warehouse inventory",
          ],
        },
      ],
    },
    workflow: {
      eyebrow: "HOW DATA MOVES IN MOSSIE ERP",
      title: "From RFQ Broadcast to Settled Bill",
      subtitle: "Eliminate duplicate paper approvals and supplier billing discrepancies.",
      steps: [
        {
          stepNumber: 1,
          icon: "pur-rfq",
          title: "1. Multi-Vendor RFQ",
          subtitle: "Broadcast to up to 10 vendors",
          detailTitle: "Stage 1: Multi-Vendor RFQ Broadcast & Comparison",
          detailDescription: "Requisitions trigger simultaneous RFQ broadcasts to up to 10 suppliers. Bids populate into an interactive matrix with auto-highlighted L1 and cost savings calculations.",
          latency: "< 200ms",
        },
        {
          stepNumber: 2,
          icon: "pur-po",
          title: "2. Auto L1 PO Award",
          subtitle: "1-click Purchase Order creation",
          detailTitle: "Stage 2: Auto L1 Selection & Digital PO Approval",
          detailDescription: "Management approves the lowest-cost or highest-rated vendor quote in 1 click, generating a binding digital PO with automated vendor dispatch notification.",
          latency: "< 150ms",
        },
        {
          stepNumber: 3,
          icon: "pur-gate",
          title: "3. Inward GRN & Gate QC",
          subtitle: "Batch, serial & QC quarantine",
          detailTitle: "Stage 3: Gate Receipt & Quality Inspection (QC)",
          detailDescription: "Goods arrive at the dock and are scanned with Batch Numbers, Expiry Dates, and Serial Numbers. QC segregates rejected lots before releasing approved stock.",
          latency: "< 300ms",
        },
        {
          stepNumber: 4,
          icon: "pur-landed",
          title: "4. True Landed Cost (LCV)",
          subtitle: "Freight & duties auto-allocated",
          detailTitle: "Stage 4: Landed Cost Valuation (LCV Engine)",
          detailDescription: "Freight, customs duties, insurance, and local transport are allocated proportionally across item unit costs for 100% accurate gross margin valuation.",
          latency: "< 100ms",
        },
        {
          stepNumber: 5,
          icon: "pur-match",
          title: "5. Fraud-Proof 3-Way Match",
          subtitle: "PO vs GRN vs Bill verified",
          detailTitle: "Stage 5: Fraud-Proof 3-Way Reconciliation & Payment",
          detailDescription: "The system cross-verifies PO rates and GRN quantities against the vendor bill. Any discrepancy triggers an automatic hold before disbursement is cleared.",
          latency: "< 100ms",
        },
      ],
    },
    testimonialAndRoi: {
      testimonial: {
        badge: "✓ VERIFIED SWITCHER FROM MANUAL PURCHASING",
        quote:
          "Our buyers used to negotiate via personal WhatsApp and store quotes in email inboxes. Mossie ERP brought total transparency. Our overall procurement spend dropped by 11% in the first 6 months simply through automated RFQ matrices.",
        userName: "Manish Agarwal",
        userRole: "Head of Global Sourcing",
        userCompany: "Supreme Fasteners & Hardware (Turnover ₹95 Cr)",
        initials: "MA",
      },
      impactCards: [
        { value: "11%", label: "Average Cost Reduction", description: "Secured lower unit rates via transparent multi-vendor bidding.", color: "text-blue-600" },
        { value: "0", label: "Duplicate Billing Errors", description: "3-way matching blocked ₹14L in duplicate or incorrect vendor invoices.", color: "text-emerald-600" },
        { value: "45 Days", label: "MSME Compliance", description: "Zero interest penalties through automated MSME payment schedule tracking.", color: "text-purple-600" },
        { value: "3x", label: "Faster PO Approvals", description: "Mobile approval queues cut PO release turnaround from 4 days to 4 hours.", color: "text-amber-600" },
      ],
    },
    cta: {
      pill: "CONTROL ENTERPRISE SPEND",
      title: "Streamline Procurement & Build Stronger Vendor Relationships",
      description: "Request a custom walkthrough of Mossie ERP's strategic procurement and vendor portal architecture.",
      primaryCtaText: "Book a Procurement Demo",
      secondaryCtaText: "Explore Production Module",
    },
  },

  // =========================================================================
  // 6. PRODUCTION MODULE (Enterprise Manufacturing & MES - 6 Core Pillars)
  // =========================================================================
  production: {
    slug: "production",
    moduleName: "Production & Manufacturing Execution (MES)",
    badge: "Enterprise MRP, APS & Shop Floor MES",
    heroHeadline: "Enterprise Manufacturing & Shop Floor MES — ",
    heroHighlight: "Unified from Engineering BOM to Machine Dispatch",
    heroDescription:
      "An enterprise-grade manufacturing suite unifying dynamic parameterized BOMs, supply-aware MRP, finite-capacity scheduling (APS), touch-screen MES operator consoles, in-process QC stage-gates, and bi-directional lot genealogy.",
    chip1: "Finite Capacity Scheduling (APS)",
    chip2: "Touch-Screen MES & Andon Alerts",
    chip3: "In-Process QC & Lot Genealogy",
    // heroMetrics: {
    //   stat1: { value: "74", label: "Specialized Domain Services" },
    //   stat2: { value: "< 90s", label: "Supply-Aware MRP Run" },
    //   stat3: { value: "6-Point", label: "Pre-Release Readiness Gate" },
    //   stat4: { value: "Real-Time", label: "OEE & 3-Way Variance" },
    // },
    mockup: {
      windowTitle: "mossie-erp // enterprise-mes-engine",
      liveBadge: "● 6 WORK CENTERS • APS ACTIVE",
      topMetrics: [
        { label: "Plant-Wide OEE", value: "89.4%", sub: "Avail × Perf × Quality", subColor: "text-emerald-600 font-bold" },
        { label: "Active Work Orders", value: "18 Jobs", sub: "Finite capacity leveled", subColor: "text-blue-600 font-bold" },
        { label: "In-Process QC", value: "0 Open NCRs", sub: "All stage-gates passed", subColor: "text-emerald-600 font-bold" },
      ],
      kanbanTitle: "Machine Dispatch Swimlane & WIP Tracker",
      kanbanSubtitle: "Drag-and-Drop Schedule with Operation Locking",
      columns: [
        {
          stageName: "Cutting & Press (Op 10)",
          amount: "500 Pcs",
          cardTitle: "Dynamic Formula BOM #DF-401",
          cardDesc: "Dimensioned: 2400×1200×18mm",
          cardTag: "Immutable Snapshot Locked",
          cardTagStyle: "bg-blue-50 text-blue-700",
        },
        {
          stageName: "CNC Machining (Op 20)",
          amount: "320 Pcs",
          cardTitle: "Engine Block Batch #EB-92",
          cardDesc: "Tablet Kiosk: In Progress (Op: Rajesh)",
          cardTag: "Pre-Release Gates Passed (6/6)",
          cardTagStyle: "bg-amber-50 text-amber-700",
          isHighlighted: true,
        },
        {
          stageName: "Subcontract & QC (Op 30)",
          amount: "180 Pcs",
          cardTitle: "Powder Coating Return #DC-881",
          cardDesc: "Vendor Material Balance Reconciled",
          cardTag: "Bi-Directional Lot Tagged",
          cardTagStyle: "bg-emerald-50 text-emerald-700",
        },
      ],
      alertText: "APS Sentinel Alert: Line 2 tool wear detected. What-if simulation scheduled alternate CNC-04 with zero order delay.",
      alertAction: "Promote Scenario",
    },
    edge: {
      title: "Enterprise Manufacturing Capabilities: ",
      titleHighlight: "6 Core Production Pillars",
      description:
        "Traditional ERPs treat manufacturing as rigid post-facto accounting entries. Mossie ERP connects engineering formulas, finite-capacity scheduling, touch-screen shopfloor execution, and bi-directional genealogy into a unified MES platform.",
      superpowers: [
        {
          summary: "Manage configurable bills of materials with controlled engineering revisions.",
          visual: {"title":"Dynamic BOM & change control","icon":"git","kind":"versions","tone":"purple","metric":"Every change, governed","steps":["Parameterized BOM","Engineering change","Approved revision"]},
          id: "prod-sp-1",
          number: 1,
          icon: "📐",
          gradient: "from-blue-600 to-indigo-700",
          shadowColor: "shadow-blue-500/20",
          tagBg: "bg-blue-50 text-blue-700 border-blue-200",
          title: "Dynamic Parameterized BOM & Multi-Vector ECO Governance",
          description:
            "Configure mathematical formulas for dimension-driven manufacturing (length, width, thickness, density) with an instant formula preview sandbox. When production orders release, an immutable BOM & routing snapshot locks in place. Formal Engineering Change Orders (ECO) perform multi-vector impact analysis across open orders, active shopfloor WIP, and scrap exposure before deployment.",
          legacyComparison:
            "✕ Legacy ERPs: Rigid static BOMs force engineers to create thousands of redundant part numbers for minor dimensional variations, and ad-hoc edits break active shopfloor orders with zero scrap analysis.",
          mossiComparison:
            '✓ Mossie ERP: "Dynamic Parameterized BOMs & Immutable Order Snapshots." Dimension-driven formulas with multi-vector ECO scrap, WIP, and cycle-time impact analysis.',
          impactMetric: "Zero In-Flight Order Corruption",
          impactColor: "text-blue-600",
        },
        {
          summary: "Connect demand and available supply to keep material shortages in view.",
          visual: {"title":"Supply-aware MRP","icon":"boxes","kind":"stock","tone":"blue","metric":"Plan around real supply","steps":["Demand requirements","Material availability","Shortage workbench"]},
          id: "prod-sp-2",
          number: 2,
          icon: "⚡",
          gradient: "from-amber-500 to-orange-600",
          shadowColor: "shadow-amber-500/20",
          tagBg: "bg-amber-50 text-amber-800 border-amber-200",
          title: "Supply-Aware MRP Engine & Live Shortage Workbench",
          description:
            "A reactive multi-echelon MRP engine that calculates gross-to-net material requirements factoring in live stock, existing allocations, purchase pipeline, vendor MOQs, and order multiples. Planners use the interactive Shortage Workbench to auto-generate material requisition slips and monitor exceptions like lead-time deviations and late supplier deliveries.",
          legacyComparison:
            "✕ Legacy ERPs: Clunky overnight batch MRP runs take 4 to 8 hours, fail to account for vendor MOQs or purchase pipeline, leaving planners stranded with obsolete shortfall reports.",
          mossiComparison:
            '✓ Mossie ERP: "Supply-Aware MRP with Real-Time Shortage Workbench." Sub-minute recalculations with automated material requisition slips and proactive exception alerts.',
          impactMetric: "< 90s Full MRP Run Duration",
          impactColor: "text-amber-700",
        },
        {
          summary: "Schedule work around real machine capacity and dispatch priorities.",
          visual: {"title":"Capacity & dispatch planning","icon":"gantt","kind":"schedule","tone":"orange","metric":"A feasible production plan","steps":["Machine capacity","Work order schedule","Dispatch sequence"]},
          id: "prod-sp-3",
          number: 3,
          icon: "🎛️",
          gradient: "from-emerald-500 to-teal-700",
          shadowColor: "shadow-emerald-500/20",
          tagBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
          title: "Finite Capacity Scheduling (APS) & Interactive Dispatch Board",
          description:
            "True finite-capacity scheduling based on actual machine uptime, shift calendars, setup times, and operator skill matrices. Supports forward and backward/JIT leveling, drag-and-drop swimlane dispatch boards, isolated what-if simulation scenarios (overtime/breakdowns), and a strict 6-dimension pre-release readiness gate before shopfloor dispatch.",
          legacyComparison:
            "✕ Legacy ERPs: Infinite-capacity scheduling blindly piles overlapping work orders onto overloaded machines, creating shopfloor bottlenecks and missed customer delivery dates.",
          mossiComparison:
            '✓ Mossie ERP: "Finite-Capacity APS with Drag-and-Drop Dispatch Swimlanes." What-if scenario modeling and 6-dimension readiness verification prevent dispatching stalled orders.',
          impactMetric: "+31% Plant Throughput & Zero Overbooking",
          impactColor: "text-emerald-700",
        },
        {
          summary: "Keep operators, work orders, and live shop floor status connected.",
          visual: {"title":"Live shop floor execution","icon":"monitor","kind":"production","tone":"blue","metric":"See work as it happens","steps":["Operator check-in","Operation progress","Andon status"]},
          id: "prod-sp-4",
          number: 4,
          icon: "📱",
          gradient: "from-purple-500 to-violet-700",
          shadowColor: "shadow-purple-500/20",
          tagBg: "bg-purple-50 text-purple-800 border-purple-200",
          title: "Touch-Screen MES Operator Console & Real-Time Andon Execution",
          description:
            "A paperless shopfloor execution layer built for rugged tablets and kiosk terminals. Operators tap to claim jobs via barcode/QR scans, cycle through execution state machines (Ready, In Progress, Paused, On Hold), log partial output, and trigger plant-wide Andon escalation alerts for breakdowns, material shortages, or quality defects.",
          legacyComparison:
            "✕ Legacy ERPs: Paper travelers stained with machine oil and end-of-shift desktop keyboard data entry that delays operational visibility by 24 to 48 hours.",
          mossiComparison:
            '✓ Mossie ERP: "Paperless MES Tablet Kiosks & Instant Andon Escalations." Real-time state machines, partial quantity logging, and instant plant-wide alert broadcasting.',
          impactMetric: "Sub-Second Shopfloor Status Sync",
          impactColor: "text-purple-700",
        },
        {
          summary: "Resolve quality issues with in-process inspections and corrective actions.",
          visual: {"title":"Quality gates & CAPA","icon":"shield","kind":"quality","tone":"green","metric":"Quality in every operation","steps":["In-process inspection","NCR investigation","Corrective action"]},
          id: "prod-sp-5",
          number: 5,
          icon: "🛡️",
          gradient: "from-rose-500 to-red-700",
          shadowColor: "shadow-rose-500/20",
          tagBg: "bg-rose-50 text-rose-800 border-rose-200",
          title: "In-Process Quality Gates, Automated NCR & Closed-Loop CAPA",
          description:
            "Quality is enforced directly during machining and assembly, not just at final receipt. Configurable in-process QC stage-gates lock downstream WIP movement until parametric inspections pass. Failed checks auto-generate Non-Conformance Reports (NCR), trigger closed-loop CAPA investigation workflows, and route parts into dedicated rework loops.",
          legacyComparison:
            "✕ Legacy ERPs: Disconnected quality clipboards where defects are only caught at final shipping after tens of thousands of rupees in machining and assembly have been wasted.",
          mossiComparison:
            '✓ Mossie ERP: "In-Process Stage-Gate Locks with Automated NCR & CAPA." Parametric tolerance validation blocks defective WIP from advancing down the assembly line.',
          impactMetric: "-48% Shopfloor Scrap & Defect Rate",
          impactColor: "text-rose-700",
        },
      ],
    },
    comparison: {
      eyebrow: "HONEST & DIRECT BENCHMARK",
      title: "How Mossie ERP Manufacturing Compares to Legacy Suites",
      subtitle: "Compare our unified MRP, APS, and MES platform against monolithic legacy ERPs and fragmented shop floor spreadsheets.",
      competitor1Name: "Legacy ERPs (SAP PP / Infor LN)",
      competitor2Name: "Fragmented Standalone Tools / Excel",
      rows: [
        {
          metric: "Unified Architecture",
          metricDesc: "Integration across MRP planning, finite APS, and shopfloor MES.",
          mossi: { highlight: "✓ 100% Unified Suite", detail: "Single database bridging engineering BOMs, finite scheduling, and tablet execution" },
          legacy: { highlight: "⚠️ Disjointed Modules", detail: "Requires expensive integration between separate PP, APS, and MES software" },
          pointSolution: { highlight: "✕ Disconnected Silos", detail: "Planners manually stitch together 6 different spreadsheets and whiteboards" },
        },
        {
          metric: "Scheduling & Readiness",
          metricDesc: "Finite machine capacity and pre-dispatch readiness verification.",
          mossi: { highlight: "✓ Finite APS & 6-Point Gate", detail: "Checks stock, predecessor WIP, breakdowns, QC, and lot tags before dispatch" },
          legacy: { highlight: "✕ Infinite Capacity", detail: "Piles orders onto machines without checking actual uptime or operator skills" },
          pointSolution: { highlight: "✕ Manual Guesswork", detail: "Whiteboard scheduling leading to constant machine bottlenecks" },
        },
        {
          metric: "Shop Floor Data Capture",
          metricDesc: "How machine operators report progress and machine downtime.",
          mossi: { highlight: "✓ Touchscreen Kiosks & Andon", detail: "Real-time state machines, barcode/QR scans, and instant plant-wide alerts" },
          legacy: { highlight: "⚠️ Dense Desktop Terminals", detail: "Requires walking to a supervisor PC and typing complex transaction codes" },
          pointSolution: { highlight: "✕ Paper Travelers", detail: "Physical paper slips prone to loss, dirty handwriting, and delayed entry" },
        },
        {
          metric: "In-Process Quality & NCR",
          metricDesc: "Preventing defective parts from moving to downstream operations.",
          mossi: { highlight: "✓ In-Process Gate Locks", detail: "Blocks downstream WIP movement until parametric inspections pass; auto NCR/CAPA" },
          legacy: { highlight: "⚠️ Post-Production QC", detail: "Defects identified late after entire batch machining cost has accumulated" },
          pointSolution: { highlight: "✕ Paper QC Sheets", detail: "Manual inspection sheets stored in filing cabinets with zero trace" },
        },
        {
          metric: "Lot Traceability & Subcontracting",
          metricDesc: "Tracking raw heats to finished goods and vendor material balances.",
          mossi: { highlight: "✓ Bi-Directional Genealogy", detail: "Forward/backward lot tree with 4-model subcontracting gate passes and balance ledgers" },
          legacy: { highlight: "⚠️ Costly Traceability Add-on", detail: "Requires complex batch management configuration and manual challans" },
          pointSolution: { highlight: "✕ Zero Traceability", detail: "Unable to trace defective supplier heats across finished assemblies" },
        },
      ],
    },
    featuresCatalog: {
      previewName: "Production",
      headline: {"action":"make every run count","description":"Connect materials, machines, people, and quality from the first BOM to the finished product."},
      eyebrow: "Comprehensive Functionality Catalog",
      title: "Explore All Features in Production Planning & MES",
      subtitle: "The complete audited manufacturing suite spanning 74 domain services, 70 models, and 298 routes.",
      categories: [
        { id: "all", label: "All 6 Pillars" },
        { id: "engineering", label: "Engineering, BOM & ECO" },
        { id: "planning", label: "MRP & Finite Capacity (APS)" },
        { id: "execution", label: "Shop Floor MES & Andon" },
        { id: "quality_trace", label: "Quality, WIP & Traceability" },
      ],
      items: [
        {
          visual: {"title":"Dynamic BOM & change control","icon":"git","kind":"versions","tone":"purple","metric":"Every change, governed","steps":["Parameterized BOM","Engineering change","Approved revision"]},
          id: "prod-f1",
          category: "engineering",
          categoryLabel: "Engineering, BOM & ECO",
          tagTone: "bg-blue-50 text-blue-700",
          icon: "📐",
          iconBg: "bg-blue-50 text-blue-600",
          title: "Dynamic Parameterized BOM & Multi-Vector ECO Governance",
          description: "Mathematical formulas for dimension-driven manufacturing and structured revision control.",
          bullets: [
            "Dynamic formulas for custom furniture, sheet metal, cut-to-size, and engineered-to-order (ETO)",
            "Formula Preview Sandbox to validate calculations against sample dimensions before saving",
            "Immutable Production Order Snapshots lock BOM & routing to protect in-flight manufacturing",
            "Multi-vector ECO impact analysis evaluating open orders, WIP, scrap exposure, and unit costs",
          ],
        },
        {
          visual: {"title":"Supply-aware MRP","icon":"boxes","kind":"stock","tone":"blue","metric":"Plan around real supply","steps":["Demand requirements","Material availability","Shortage workbench"]},
          id: "prod-f2",
          category: "planning",
          categoryLabel: "MRP & Finite Capacity (APS)",
          tagTone: "bg-amber-50 text-amber-700",
          icon: "⚡",
          iconBg: "bg-amber-50 text-amber-600",
          title: "Supply-Aware MRP Engine & Live Shortage Workbench",
          description: "Multi-factor material planning that eliminates stockouts and assembly line starvation.",
          bullets: [
            "Evaluates stock, existing allocations, purchase pipeline, vendor MOQs, and order multiples",
            "Interactive Shortage Workbench with 1-click material requisition generation for storekeepers",
            "Automated material requisition slips generated directly against production reservations",
            "Planning Exception Monitoring for bottleneck operations, lead-time deviations, and supplier delays",
          ],
        },
        {
          visual: {"title":"Capacity & dispatch planning","icon":"gantt","kind":"schedule","tone":"orange","metric":"A feasible production plan","steps":["Machine capacity","Work order schedule","Dispatch sequence"]},
          id: "prod-f3",
          category: "planning",
          categoryLabel: "MRP & Finite Capacity (APS)",
          tagTone: "bg-emerald-50 text-emerald-700",
          icon: "🎛️",
          iconBg: "bg-emerald-50 text-emerald-600",
          title: "Finite Capacity Scheduling (APS) & Interactive Dispatch Board",
          description: "Realistic shopfloor scheduling based on actual machine availability, shifts, and operator skills.",
          bullets: [
            "Considers machine operating windows, maintenance schedules, setup times, and break calendars",
            "Forward scheduling (earliest completion) and backward/JIT scheduling (latest feasible start)",
            "Automated capacity leveling and isolated what-if simulation scenarios (overtime/breakdowns)",
            "Interactive drag-and-drop dispatch swimlanes with operation locking and visual conflict indicators",
            "6-dimension pre-release readiness gate: stock, predecessor WIP, machine status, subcontract, QC, lots",
          ],
        },
        {
          visual: {"title":"Live shop floor execution","icon":"monitor","kind":"production","tone":"blue","metric":"See work as it happens","steps":["Operator check-in","Operation progress","Andon status"]},
          id: "prod-f4",
          category: "execution",
          categoryLabel: "Shop Floor MES & Andon",
          tagTone: "bg-purple-50 text-purple-700",
          icon: "📱",
          iconBg: "bg-purple-50 text-purple-600",
          title: "Touch-Screen MES Operator Console & Real-Time Andon Execution",
          description: "Paperless tablet kiosks with execution state machines, partial reporting, and Andon alerts.",
          bullets: [
            "Rugged touch-screen operator console designed for kiosk terminals and mobile shopfloor tablets",
            "Real-time execution state machine: Ready, In Progress, Paused (with standardized reasons), and Completed",
            "Partial production reporting allows logging completed units without closing the operation",
            "Instant plant-wide Andon escalation alerts for machine breakdowns, material shortages, and defects",
            "Barcode & QR scanning for operator badges, machine tags, lot travelers, and pallet label printing",
          ],
        },
        {
          visual: {"title":"Quality gates & CAPA","icon":"shield","kind":"quality","tone":"green","metric":"Quality in every operation","steps":["In-process inspection","NCR investigation","Corrective action"]},
          id: "prod-f5",
          category: "quality_trace",
          categoryLabel: "Quality, WIP & Traceability",
          tagTone: "bg-rose-50 text-rose-700",
          icon: "🛡️",
          iconBg: "bg-rose-50 text-rose-600",
          title: "In-Process Quality Gates, Automated NCR & Closed-Loop CAPA",
          description: "Stage-gate quality enforcement preventing defective parts from moving to downstream stations.",
          bullets: [
            "In-process QC stage-gates block downstream WIP movement until authorized inspection completes",
            "Parametric Quality Plans defining target, minimum, maximum, and tolerance limit evaluations",
            "Automated Non-Conformance Reports (NCR) generated instantly with structured containment logs",
            "Closed-loop CAPA workflows for investigation, root-cause action planning, verification, and sign-off",
            "Engineering deviations and dedicated rework orders with configurable rework routing loops",
          ],
        },
        {
          visual: {"title":"Lot genealogy & subcontracting","icon":"network","kind":"production","tone":"rose","metric":"Trace every production lot","steps":["Raw material lot","WIP & subcontracting","Finished goods lot"]},
          id: "prod-f6",
          category: "quality_trace",
          categoryLabel: "Quality, WIP & Traceability",
          tagTone: "bg-cyan-50 text-cyan-700",
          icon: "🔗",
          iconBg: "bg-cyan-50 text-cyan-600",
          title: "Bi-Directional Lot Genealogy, Multi-Stage WIP & 4-Model Subcontracting",
          description: "Full operation-level WIP tracking, forward/backward genealogy, and job work management.",
          bullets: [
            "Multi-stage WIP ledger tracking good, available, completed, rejected, and scrap at every operation",
            "Bi-directional lot traceability: raw supplier heats → SFG → FG, and customer serials back to original lots",
            "Quantity reconciliation engine balances inputs against finished output, scrap, rework, and active WIP",
            "Supports 4 subcontract models: In-House, Complete Subcontract, Company-Supplied Materials, and Hybrid",
            "Delivery Challans / Gate Passes with Vendor Material Balance ledgers (sent, returned, yield, scrap)",
            "Plant maintenance integration (PM/breakdowns block scheduling) and real-time OEE with 3-way cost variance",
          ],
        },
      ],
    },
    workflow: {
      eyebrow: "HOW DATA MOVES IN MOSSIE ERP",
      title: "The Complete Manufacturing Lifecycle",
      subtitle: "From engineering formulas and supply-aware planning to finite scheduling, touch MES, and lot trace.",
      steps: [
        {
          stepNumber: 1,
          icon: "prod-bom",
          title: "1. Dynamic BOM & Snapshot",
          subtitle: "Formulas & immutable release",
          detailTitle: "Stage 1: Parameterized BOM & Immutable Order Snapshot",
          detailDescription:
            "Engineers test dimension-driven formulas in the preview sandbox. Upon production order release, an immutable snapshot locks the BOM and routing, insulating the active job from subsequent engineering revisions.",
          latency: "< 100ms",
        },
        {
          stepNumber: 2,
          icon: "prod-mrp",
          title: "2. Supply-Aware MRP",
          subtitle: "Gross-to-net shortfall check",
          detailTitle: "Stage 2: Supply-Aware MRP & Shortage Workbench",
          detailDescription:
            "The multi-echelon MRP engine calculates component requirements factoring in live stock, allocations, purchase pipeline, vendor MOQs, and order multiples. Shortage workbenches auto-draft material requisition slips.",
          latency: "< 90s",
        },
        {
          stepNumber: 3,
          icon: "prod-aps",
          title: "3. Finite Capacity APS",
          subtitle: "6-point gate & dispatch board",
          detailTitle: "Stage 3: Finite Capacity Scheduling & Pre-Release Gates",
          detailDescription:
            "APS evaluates actual machine operating windows, maintenance schedules, and shift calendars. Before schedule release, a 6-point readiness gate verifies materials, predecessor WIP, machines, subcontracting, and QC.",
          latency: "< 250ms",
        },
        {
          stepNumber: 4,
          icon: "prod-mes",
          title: "4. Touch MES & Andon",
          subtitle: "Tablet kiosks & state machines",
          detailTitle: "Stage 4: Shopfloor Execution & Real-Time Andon Alerts",
          detailDescription:
            "Operators log in at tablet stations via barcode/QR scans. Real-time state machines track progress (In Progress, Paused, On Hold) and operators log partial output or trigger Andon escalation alerts for breakdowns.",
          latency: "< 100ms",
        },
        {
          stepNumber: 5,
          icon: "prod-qc",
          title: "5. In-Process QC & CAPA",
          subtitle: "WIP movement locks & NCRs",
          detailTitle: "Stage 5: Stage-Gate Quality Control & Automated NCRs",
          detailDescription:
            "Downstream WIP movement is blocked until parametric tolerance inspections pass. Failed checks auto-generate Non-Conformance Reports (NCR) and trigger closed-loop CAPA investigation workflows.",
          latency: "< 150ms",
        },
        {
          stepNumber: 6,
          icon: "prod-trace",
          title: "6. Lot Trace & Cost Variance",
          subtitle: "Genealogy & 3-way variance",
          detailTitle: "Stage 6: Bi-Directional Genealogy, Subcontracting & Variance",
          detailDescription:
            "Finished goods enter inventory with full bi-directional lot genealogy. Subcontract material balances are reconciled, and actual costs are absorbed across materials, labor, and machine overhead.",
          latency: "< 200ms",
        },
      ],
    },
    testimonialAndRoi: {
      testimonial: {
        badge: "✓ VERIFIED SWITCHER FROM SAP PP + SHOP EXCEL",
        quote:
          "Before Mossie ERP, our planners spent all day building disconnected spreadsheets while operators filled out paper job travelers that were entered 2 days late. Mossie ERP's finite-capacity scheduling and tablet MES consoles gave us real-time OEE visibility and eliminated line starvation completely. Our plant throughput jumped 31% in our first quarter.",
        userName: "Devendra Patil",
        userRole: "VP of Manufacturing & Operations",
        userCompany: "Orbital Precision Technologies (Turnover ₹145 Cr)",
        initials: "DP",
      },
      impactCards: [
        { value: "+31%", label: "Plant Throughput Boost", description: "Finite capacity leveling eliminated machine overbooking and bottlenecks.", color: "text-blue-600" },
        { value: "0", label: "Line Starvation Crises", description: "Supply-aware MRP with MOQ logic prevented raw component stockouts.", color: "text-emerald-600" },
        { value: "< 30s", label: "Full Lot Recall Trace", description: "Bi-directional genealogy links raw supplier heats directly to customer serials.", color: "text-purple-600" },
        { value: "100%", label: "Real-Time 3-Way Variance", description: "Actual material, labor, and machine overhead absorbed on every batch.", color: "text-amber-600" },
      ],
    },
    cta: {
      pill: "SUPERCHARGE YOUR SHOP FLOOR",
      title: "Eliminate Manufacturing Delays & Maximize Plant OEE",
      description: "Schedule a live 20-minute demonstration of Mossie ERP's unified engineering, finite scheduling, and shopfloor MES platform.",
      primaryCtaText: "Book a Factory Architecture Demo",
      secondaryCtaText: "Review Quality & Traceability",
    },
  },

  // =========================================================================
  // 7. HRMS MODULE
  // =========================================================================
  hrms: {
    slug: "hrms",
    moduleName: "HRMS & Payroll",
    badge: "Workforce & Compliance",
    heroHeadline: "Calm People Operations — ",
    heroHighlight: "From Biometric Punch to Payroll Direct Deposit",
    heroDescription:
      "Automate employee lifecycle management, geo-fenced mobile attendance, leave approvals, Indian statutory deductions (PF, ESI, PT, TDS), and payslips.",
    chip1: "1-Click Payroll Run",
    chip2: "Statutory PF, ESI & TDS",
    chip3: "Mobile Employee Portal",
    // heroMetrics: {
    //   stat1: { value: "1-Click", label: "Monthly Payroll Execution" },
    //   stat2: { value: "100%", label: "Statutory Compliance" },
    //   stat3: { value: "Zero", label: "Attendance Reconcile Delay" },
    //   stat4: { value: "24/7", label: "Employee Self Service" },
    // },
    mockup: {
      windowTitle: "mossie-erp // hrms-payroll-engine",
      liveBadge: "● 480 EMPLOYEES ACTIVE",
      topMetrics: [
        { label: "Monthly Payroll", value: "₹1.48 Cr", sub: "Disbursement ready", subColor: "text-blue-600 font-bold" },
        { label: "Today's Attendance", value: "96.4%", sub: "462 present on shift", subColor: "text-emerald-600 font-bold" },
        { label: "Statutory Filing", value: "PF / ESI Ready", sub: "ECR file generated", subColor: "text-purple-600 font-bold" },
      ],
      kanbanTitle: "Monthly Payroll Cycle Monitor",
      kanbanSubtitle: "Automated Attendance Lock to Bank Advice Export",
      columns: [
        {
          stageName: "Attendance Lock",
          amount: "480 Staff",
          cardTitle: "Biometric & Leave Synced",
          cardDesc: "All shifts reconciled • 0 anomalies",
          cardTag: "Attendance Locked",
          cardTagStyle: "bg-blue-50 text-blue-700",
        },
        {
          stageName: "Tax & Deduction Review",
          amount: "₹24.8L Deductions",
          cardTitle: "Statutory PF, ESI, PT & TDS",
          cardDesc: "Form 16 declarations verified",
          cardTag: "Compliant & Verified",
          cardTagStyle: "bg-emerald-50 text-emerald-700",
          isHighlighted: true,
        },
        {
          stageName: "Direct Deposit Advice",
          amount: "₹1.23 Cr Net",
          cardTitle: "Bank NACH / Sal-Pay Export",
          cardDesc: "1-click direct salary disbursal file",
          cardTag: "Payslips Auto-Emailed",
          cardTagStyle: "bg-purple-50 text-purple-700",
        },
      ],
      alertText: "HRMS Notice: 14 employees submitted tax investment proofs for final March TDS adjustments.",
      alertAction: "Approve Proofs",
    },
    edge: {
      title: "What Extra We Provide: ",
      titleHighlight: "Seamless Workforce Architecture",
      description:
        "Unlike standalone HR apps that sit in a silo, Mossie ERP automatically connects employee attendance to factory labor costing and general ledger salary vouchers.",
      superpowers: [
        {
          summary: "Run payroll and prepare Indian bank payment files from one connected process.",
          visual: {"title":"Payroll & bank file export","icon":"wallet","kind":"people","tone":"green","metric":"1-click payroll run","steps":["Payroll calculated","Salary approved","Bank file exported"]},
          id: "hr-sp-1",
          number: 1,
          icon: "⚡",
          gradient: "from-blue-500 to-indigo-600",
          shadowColor: "shadow-blue-500/20",
          tagBg: "bg-blue-50 text-blue-700 border-blue-200",
          title: "1-Click Payroll Run with Direct Indian Bank File Export",
          description:
            "Process payroll for 500+ employees across multiple plants in under 3 minutes. Generate ready-to-upload payment files for HDFC, ICICI, SBI, and Axis Bank.",
          legacyComparison: "✕ Legacy HR: HR teams spend 5 days in Excel calculating overtime, lop days, and formulas manually.",
          mossiComparison: "✓ Mossie ERP: 1-click execution automatically factors attendance punches and leave approvals.",
          impactMetric: "90% Reduction in Payroll Processing Time",
          impactColor: "text-blue-600",
        },
        {
          summary: "Handle PF, ESI, PT, LWF, and TDS with built-in statutory calculations.",
          visual: {"title":"Indian statutory compliance","icon":"shield","kind":"quality","tone":"blue","metric":"Built-in statutory rules","steps":["PF & ESI calculated","PT & TDS applied","Statutory reports ready"]},
          id: "hr-sp-2",
          number: 2,
          icon: "🏛️",
          gradient: "from-emerald-500 to-teal-600",
          shadowColor: "shadow-emerald-500/20",
          tagBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
          title: "Built-In Indian Statutory Compliance (PF, ESI, PT, LWF, TDS)",
          description:
            "Generate government ECR files for EPFO and ESIC portals with zero manual formatting. State-specific Professional Tax (PT) slabs update automatically.",
          legacyComparison: "✕ Western HR Apps: Do not understand Indian statutory rules and require manual tax consultants.",
          mossiComparison: "✓ Mossie ERP: Built-in 100% statutory adherence with instant ECR text generation.",
          impactMetric: "Zero Compliance Fines",
          impactColor: "text-emerald-700",
        },
        {
          summary: "Connect geo-fenced mobile punches and biometric attendance records.",
          visual: {"title":"Attendance & biometric sync","icon":"fingerprint","kind":"people","tone":"orange","metric":"Attendance, verified","steps":["Geo-fenced punch","Biometric sync","Attendance recorded"]},
          id: "hr-sp-3",
          number: 3,
          icon: "📱",
          gradient: "from-amber-500 to-orange-600",
          shadowColor: "shadow-amber-500/20",
          tagBg: "bg-amber-50 text-amber-800 border-amber-200",
          title: "Geo-Fenced Mobile Attendance & Biometric Sync",
          description:
            "Field staff check in via GPS-verified mobile app; factory workers use biometric fingerprint/facial recognition terminals that sync in real time.",
          legacyComparison: "✕ Disconnected Hardware: Offline biometric machines where data must be downloaded via USB flash drive.",
          mossiComparison: "✓ Mossie ERP: Cloud API sync connects biometric terminals in 20 cities simultaneously.",
          impactMetric: "Real-Time Shift Attendance",
          impactColor: "text-amber-700",
        },
        {
          summary: "Give employees a shared home for requests, records, and secure documents.",
          visual: {"title":"Employee self-service","icon":"folder","kind":"people","tone":"purple","metric":"One employee workspace","steps":["Employee profile","Self-service requests","Secure documents"]},
          id: "hr-sp-4",
          number: 4,
          icon: "💼",
          gradient: "from-purple-500 to-violet-600",
          shadowColor: "shadow-purple-500/20",
          tagBg: "bg-purple-50 text-purple-800 border-purple-200",
          title: "Employee Self-Service (ESS) & Digital Document Vault",
          description:
            "Employees view payslips, submit leave applications, download Form 16, and declare tax investments directly from their smartphone.",
          legacyComparison: "✕ HR Helpdesk Chaos: HR staff answering 40 emails a day asking for past payslip PDFs.",
          mossiComparison: "✓ Mossie ERP: 100% self-service access reduces HR administrative overhead significantly.",
          impactMetric: "-75% Routine HR Inquiries",
          impactColor: "text-purple-700",
        },
      ],
    },
    comparison: {
      eyebrow: "HONEST & DIRECT BENCHMARK",
      title: "How Mossie ERP HRMS Compares to Standalone HR Tools",
      subtitle: "Compare our deeply integrated ERP-HRMS against isolated software like Darwinbox or Keka and desktop spreadsheets.",
      competitor1Name: "Standalone HR SaaS (Darwinbox / Keka)",
      competitor2Name: "Legacy Desktop Payroll (GreytHR / Excel)",
      rows: [
        {
          metric: "1-Click Indian Statutory Payroll (PF, ESI, PT, TDS)",
          metricDesc: "Automated statutory deduction computation under Old vs New tax regimes and bank disbursement.",
          mossi: {
            highlight: "✓ 1-Click Multi-Statutory Engine",
            detail: "Calculates PF, ESI, Professional Tax, and Section 115BAC TDS automatically; generates bank NEFT payout files in 1 click",
          },
          legacy: {
            highlight: "⚠️ Complex Configuration",
            detail: "Requires 6+ months of complex implementation and external consultant support for statutory rule updates",
          },
          pointSolution: {
            highlight: "⚠️ Disconnected Salary Sheets",
            detail: "Calculates gross pay but cannot verify attendance data directly against factory shift rosters without manual exports",
          },
        },
        {
          metric: "Biometric & Geo-Fenced Mobile Attendance Sync",
          metricDesc: "Real-time sync from plant biometric thumb scanners and field sales geo-fenced mobile punches.",
          mossi: {
            highlight: "✓ Live Biometric & Geo-Fence Sync",
            detail: "Syncs factory biometric hardware and field team mobile GPS punches directly into daily shift rosters in real time",
          },
          legacy: {
            highlight: "⚠️ Third-Party Middleware",
            detail: "Requires fragile external middleware scripts to bridge biometric device logs into ERP database tables",
          },
          pointSolution: {
            highlight: "✕ Disconnected Punch Registers",
            detail: "HR must manually export punch logs from machine software and re-upload into Excel monthly",
          },
        },
        {
          metric: "Shopfloor Labor Absorption into Manufacturing WIP",
          metricDesc: "Direct allocation of operator shift hours and wage cost into Work Order batch costs.",
          mossi: {
            highlight: "✓ Live MES Labor Absorption",
            detail: "Operator tablet job cards automatically absorb direct labor wage hours into the production Work Order unit cost",
          },
          legacy: {
            highlight: "✕ Not Supported / Complex Costing",
            detail: "Requires heavy SAP CO-PC activity type rate setups and tedious month-end labor variance postings",
          },
          pointSolution: {
            highlight: "✕ Complete Silo",
            detail: "Standalone HR software has zero visibility into factory production orders or machine jobs",
          },
        },
        {
          metric: "Zero-Touch Payroll Ledger Journal Posting",
          metricDesc: "Automated balanced double-entry accounting entries upon monthly payroll approval.",
          mossi: {
            highlight: "✓ Automated GL Salary Posting",
            detail: "Instantly debits Salary Expense and credits Net Salary Payable, PF Payable, ESI Payable, and TDS Payable",
          },
          legacy: {
            highlight: "⚠️ Delayed Batch Journal Entry",
            detail: "Finance teams manually enter consolidated salary journals days after bank disbursement",
          },
          pointSolution: {
            highlight: "✕ Manual CSV Accounting Entry",
            detail: "Accountant must manually key totals from HR software into Tally or accounting ledgers by hand",
          },
        },
        {
          metric: "Self-Service Employee Portal & Document Vault",
          metricDesc: "Digital onboarding, mobile payslip access, leave applications, and Form 16 downloads.",
          mossi: {
            highlight: "✓ Mobile Self-Service & WhatsApp Bot",
            detail: "Employees view payslips, apply for leaves, and download Form 16 directly on mobile or via WhatsApp",
          },
          legacy: {
            highlight: "✕ Clunky Desktop Portal",
            detail: "Unintuitive employee self-service portals that workers avoid using, flooding HR with support tickets",
          },
          pointSolution: {
            highlight: "⚠️ Separate Per-User Fee",
            detail: "Charges extra per-employee per-month add-on fee for self-service portal and document access",
          },
        },
      ],
    },
    featuresCatalog: {
      previewName: "HR & Payroll",
      headline: {"action":"put your people first","description":"Make attendance, payroll, compliance, and employee self-service work together effortlessly."},
      eyebrow: "Comprehensive Functionality Catalog",
      title: "Explore All Features in HRMS & Payroll",
      subtitle: "Empower your HR team with calm automation from hire to retire.",
      categories: [
        { id: "all", label: "All Features" },
        { id: "payroll", label: "Payroll & Tax" },
        { id: "attendance", label: "Attendance & Leaves" },
        { id: "lifecycle", label: "Employee Lifecycle" },
      ],
      items: [
        {
          visual: {"title":"Indian payroll engine","icon":"calculator","kind":"people","tone":"green","metric":"From gross to net","steps":["Attendance inputs","Salary & deductions","Payslips generated"]},
          id: "hr-f1",
          category: "payroll",
          categoryLabel: "Payroll & Tax",
          tagTone: "bg-blue-50 text-blue-700",
          icon: "💵",
          iconBg: "bg-blue-50 text-blue-600",
          title: "Comprehensive Indian Payroll Engine",
          description: "Flexible salary structures with Basic, HRA, Special Allowance, PF, ESI, Gratuity, and Bonus.",
          bullets: [
            "Old vs New tax regime automatic tax liability comparison",
            "Arrears, loan deductions, and advance salary tracking",
            "Customizable PDF payslips delivered via automated WhatsApp & email",
          ],
        },
        {
          visual: {"title":"Shifts & overtime","icon":"clock","kind":"schedule","tone":"orange","metric":"Every shift, accounted for","steps":["Shift roster","Overtime captured","Payroll inputs ready"]},
          id: "hr-f2",
          category: "attendance",
          categoryLabel: "Attendance & Leaves",
          tagTone: "bg-emerald-50 text-emerald-700",
          icon: "⏰",
          iconBg: "bg-emerald-50 text-emerald-600",
          title: "Shift Management & Overtime Rules",
          description: "Multi-shift rotations, grace periods, night shift allowances, and double-time overtime calculations.",
          bullets: [
            "Configurable leave policies (Casual, Sick, Earned/Privilege Leave)",
            "Automated leave balance accrual on monthly or annual schedule",
            "Compensatory off (Comp-Off) approval workflow engine",
          ],
        },
      ],
    },
    workflow: {
      eyebrow: "HOW DATA MOVES IN MOSSIE ERP",
      title: "From Daily Attendance to Disbursed Payroll",
      subtitle: "Zero-stress monthly payroll cycle running on automated guardrails.",
      steps: [
        {
          stepNumber: 1,
          icon: "hrms-punch",
          title: "1. Daily Punches",
          subtitle: "Biometrics & mobile GPS",
          detailTitle: "Stage 1: Multi-Location Attendance Capture",
          detailDescription: "Biometric devices and geo-fenced mobile punches capture daily shift arrivals and departures in real time.",
          latency: "< 100ms",
        },
        {
          stepNumber: 2,
          icon: "hrms-leave",
          title: "2. Leave & OT Review",
          subtitle: "Manager signoffs",
          detailTitle: "Stage 2: Automated Attendance & Overtime Reconciliation",
          detailDescription: "Overtime hours, approved leaves, and holiday calendars reconcile automatically with zero manual spreadsheet merging.",
          latency: "< 200ms",
        },
        {
          stepNumber: 3,
          icon: "hrms-payroll",
          title: "3. Payroll Execution",
          subtitle: "1-click salary run",
          detailTitle: "Stage 3: 1-Click Gross-to-Net Payroll Calculation",
          detailDescription: "PF, ESI, Professional Tax, and Income Tax (TDS) calculate according to current Indian tax regimes.",
          latency: "< 90s",
        },
        {
          stepNumber: 4,
          icon: "hrms-bank",
          title: "4. Bank Disbursement",
          subtitle: "NACH bank file export",
          detailTitle: "Stage 4: Automated Bank Payment Advice & Payslip Distribution",
          detailDescription: "Bank payment files generate for direct upload; password-protected PDF payslips dispatch via email and WhatsApp.",
          latency: "< 150ms",
        },
        {
          stepNumber: 5,
          icon: "hrms-ledger",
          title: "5. ERP Ledger Post",
          subtitle: "GL salary vouchers posted",
          detailTitle: "Stage 5: Automated General Ledger Posting",
          detailDescription: "Salary expense, PF payable, and TDS liability vouchers post into the finance accounting ledger automatically.",
          latency: "< 100ms",
        },
      ],
    },
    testimonialAndRoi: {
      testimonial: {
        badge: "✓ VERIFIED SWITCHER FROM MANUAL PAYROLL",
        quote:
          "Running payroll for 380 factory and sales staff used to take my HR executive 6 full days every month. With Mossie ERP, biometric data syncs automatically, statutory ECRs are ready instantly, and payroll is disbursed in 10 minutes flat.",
        userName: "Ananya Deshmukh",
        userRole: "Head of People & Culture",
        userCompany: "Matrix Automotive Components (Turnover ₹72 Cr)",
        initials: "AD",
      },
      impactCards: [
        { value: "10 Mins", label: "Payroll Processing Time", description: "Cut from 6 full days to a 10-minute automated run.", color: "text-blue-600" },
        { value: "100%", label: "Statutory Filing Accuracy", description: "Zero penalties on EPFO, ESIC, and PT filings.", color: "text-emerald-600" },
        { value: "Zero", label: "Ghost Attendance", description: "Biometric and geo-fenced mobile sync eliminated attendance fraud.", color: "text-purple-600" },
        { value: "98%", label: "Employee ESS Adoption", description: "Staff download their own payslips and Form 16 without HR emails.", color: "text-amber-600" },
      ],
    },
    cta: {
      pill: "MODERNIZE WORKFORCE OPERATIONS",
      title: "Deliver a World-Class Employee Experience While Ensuring 100% Compliance",
      description: "Book a personalized demonstration of Mossie ERP's integrated HRMS and payroll engine.",
      primaryCtaText: "Schedule an HRMS Demo",
      secondaryCtaText: "Explore Projects Module",
    },
  },

  // =========================================================================
  // 8. PROJECT MANAGEMENT MODULE
  // =========================================================================
  project: {
    slug: "project",
    moduleName: "Project Management",
    badge: "Projects & Timesheets",
    heroHeadline: "Deliver Projects on Time & on Budget — ",
    heroHighlight: "With Real-Time Cost & Resource Visibility",
    heroDescription:
      "Track project milestones, billable timesheets, contractor costs, Gantt schedules, and profit margins integrated directly with client invoicing.",
    chip1: "Live Milestone Gantt",
    chip2: "Billable Timesheet Tracking",
    chip3: "Real-Time Margin Tracking",
    // heroMetrics: {
    //   stat1: { value: "32%", label: "Better Project Margins" },
    //   stat2: { value: "100%", label: "Timesheet Billability" },
    //   stat3: { value: "Live", label: "Budget Burn Rate" },
    //   stat4: { value: "1-Click", label: "Milestone to Invoice" },
    // },
    mockup: {
      windowTitle: "mossie-erp // project-pmo-engine",
      liveBadge: "● 18 CLIENT PROJECTS TRACKED",
      topMetrics: [
        { label: "Active Budget", value: "₹6.82 Cr", sub: "Cost burn: 64%", subColor: "text-blue-600 font-bold" },
        { label: "Billable Hours (MTD)", value: "3,480 Hrs", sub: "94% utilization rate", subColor: "text-emerald-600 font-bold" },
        { label: "Milestones Due", value: "4 This Week", sub: "₹24L invoice ready", subColor: "text-amber-600 font-bold" },
      ],
      kanbanTitle: "Enterprise Project Milestone Tracker",
      kanbanSubtitle: "Direct Bridge to Client Invoicing & Material Procurement",
      columns: [
        {
          stageName: "Planning & Procurement",
          amount: "₹1.4Cr",
          cardTitle: "Solar EPC Plant 5MW",
          cardDesc: "Procuring Inverters & Panels",
          cardTag: "Procurement Locked",
          cardTagStyle: "bg-blue-50 text-blue-700",
        },
        {
          stageName: "Execution & Site Work",
          amount: "₹3.2Cr",
          cardTitle: "Metro Station HVAC Installation",
          cardDesc: "Foundation ducting 78% done",
          cardTag: "Milestone Signoff Due",
          cardTagStyle: "bg-amber-50 text-amber-700",
          isHighlighted: true,
        },
        {
          stageName: "Milestone Billed",
          amount: "₹2.2Cr",
          cardTitle: "Automated Warehouse Conveyor",
          cardDesc: "Testing complete • Client signoff",
          cardTag: "Invoice #892 Billed",
          cardTagStyle: "bg-emerald-50 text-emerald-700",
        },
      ],
      alertText: "PMO Alert: Project #PRJ-88 site expenses exceeded estimated contingency budget by 4.2%.",
      alertAction: "Review Variance",
    },
    edge: {
      title: "What Extra We Provide: ",
      titleHighlight: "True Project Cost Accounting",
      description:
        "Trello and Asana manage tasks but have zero clue about material costs or invoice margins. Mossie ERP connects every hour logged and bolt purchased directly to the project's bottom line.",
      superpowers: [
        {
          summary: "Connect milestones, dependencies, and tasks in a shared delivery plan.",
          visual: {"title":"Visual project planning","icon":"gantt","kind":"schedule","tone":"blue","metric":"A shared delivery plan","steps":["Project milestones","Task dependencies","Delivery schedule"]},
          id: "prj-sp-1",
          number: 1,
          icon: "📊",
          gradient: "from-blue-500 to-indigo-600",
          shadowColor: "shadow-blue-500/20",
          tagBg: "bg-blue-50 text-blue-700 border-blue-200",
          title: "Visual Project Planning",
          description:
            "Dynamic multi-tier Gantt charts with Critical Path Method (CPM), milestone tracking, and drag-and-drop auto-rescheduling.",
          legacyComparison: "✕ Standalone Project Tools: Task trackers (Monday/Asana) do not integrate with purchasing or accounting.",
          mossiComparison: "✓ Mossie ERP: Interactive CPM Gantt engine that cascades schedule changes directly to procurement and financials.",
          impactMetric: "Zero Milestone Slip",
          impactColor: "text-blue-600",
        },
        {
          summary: "Balance team capacity and assign the right people to the right work.",
          visual: {"title":"Smart resource allocation","icon":"users","kind":"people","tone":"purple","metric":"The right people, available","steps":["Team capacity","Workload balanced","Resource assigned"]},
          id: "prj-sp-2",
          number: 2,
          icon: "👥",
          gradient: "from-emerald-500 to-teal-600",
          shadowColor: "shadow-emerald-500/20",
          tagBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
          title: "Smart Resource Allocation",
          description:
            "Real-time visual workload heatmaps, skill-matrix matching, and automated capacity leveling across all client projects.",
          legacyComparison: "✕ Disconnected Spreadsheets: Key technical talent is double-booked across competing site projects.",
          mossiComparison: "✓ Mossie ERP: Intelligent workload leveling balances team capacity and surfaces bench strength instantly.",
          impactMetric: "94% Billable Utilization",
          impactColor: "text-emerald-700",
        },
        {
          summary: "Bring time, expenses, and purchasing into a live view of project costs.",
          visual: {"title":"Live project costing","icon":"coins","kind":"ledger","tone":"green","metric":"Every cost, connected","steps":["Time & expenses","Committed purchases","Actual project cost"]},
          id: "prj-sp-3",
          number: 3,
          icon: "💰",
          gradient: "from-amber-500 to-orange-600",
          shadowColor: "shadow-amber-500/20",
          tagBg: "bg-amber-50 text-amber-800 border-amber-200",
          title: "Live Project Costing",
          description:
            "Direct ledger integration capturing material requisitions, contractor bills, and billable labor against WBS codes in real time.",
          legacyComparison: "✕ Standalone Task Tools: Task apps have zero financial visibility; project overruns discovered months after handover.",
          mossiComparison: "✓ Mossie ERP: Continuous project cost accounting computes material, labor, and subcontractor burn live.",
          impactMetric: "Real-Time Cost Precision",
          impactColor: "text-amber-700",
        },
        {
          summary: "Compare plans with actual delivery and identify budget variance early.",
          visual: {"title":"Estimates vs actuals","icon":"chart","kind":"ledger","tone":"orange","metric":"Stay ahead of variance","steps":["Approved estimate","Actual consumption","Budget variance"]},
          id: "prj-sp-4",
          number: 4,
          icon: "📈",
          gradient: "from-purple-500 to-violet-600",
          shadowColor: "shadow-purple-500/20",
          tagBg: "bg-purple-50 text-purple-800 border-purple-200",
          title: "Estimated vs Actual Intelligence",
          description:
            "Granular variance tracking comparing planned hours and procurement estimates against actual field expenditure.",
          legacyComparison: "✕ Legacy Disconnect: Budget overruns go unnoticed until cash reserves are depleted and client disputes arise.",
          mossiComparison: "✓ Mossie ERP: Proactive threshold alerts warn project leaders when variance breaches 5% of contingency.",
          impactMetric: "100% Variance Alerting",
          impactColor: "text-purple-700",
        },
        {
          summary: "Track revenue and delivery costs to understand each project’s margin.",
          visual: {"title":"Project profitability","icon":"target","kind":"ledger","tone":"blue","metric":"Margins in view","steps":["Project revenue","Total delivery costs","Contribution margin"]},
          id: "prj-sp-5",
          number: 5,
          icon: "💹",
          gradient: "from-cyan-500 to-blue-600",
          shadowColor: "shadow-cyan-500/20",
          tagBg: "bg-cyan-50 text-cyan-800 border-cyan-200",
          title: "Project Profitability",
          description:
            "Up-to-the-minute project P&L, recognized revenue, and gross margin analytics updated with every milestone signoff.",
          legacyComparison: "✕ General Overhead: Material and labor costs dumped into generic company overhead, hiding project losses.",
          mossiComparison: "✓ Mossie ERP: Real-time project P&L shows exact gross margin on every phase and deliverable milestone.",
          impactMetric: "+32% Average Project Margin",
          impactColor: "text-cyan-700",
        },
      ],
    },
    comparison: {
      eyebrow: "HONEST & DIRECT BENCHMARK",
      title: "How Mossie ERP Projects Compares to Task Trackers",
      subtitle: "Compare our ERP project management suite against standalone SaaS task boards and legacy project modules.",
      competitor1Name: "Legacy ERP Modules (SAP PS / NetSuite)",
      competitor2Name: "Standalone Task Tools (Asana / Monday / Jira)",
      rows: [
        {
          metric: "Real-Time Project Cost Accounting & Budget Burn",
          metricDesc: "Live tracking of procurement expenses, subcontractor bills, and direct labor against project budget.",
          mossi: {
            highlight: "✓ 100% Native Real-Time Project P&L",
            detail: "Every purchase order, vendor bill, and timesheet updates the project budget burn and estimated margin live",
          },
          legacy: {
            highlight: "⚠️ Rigid WBS Configuration",
            detail: "Requires dense SAP WBS hierarchy setup and weeks of consulting to generate budget reports",
          },
          pointSolution: {
            highlight: "✕ Zero Financial Visibility",
            detail: "Asana and Jira track task statuses but have zero connection to bank payments, POs, or invoices",
          },
        },
        {
          metric: "Milestone Signoff to 1-Click Tax Invoice Bridge",
          metricDesc: "Speed and accuracy of billing client upon deliverable signoff.",
          mossi: {
            highlight: "✓ 1-Click Milestone GST Billing",
            detail: "Client deliverable approval triggers GST E-Invoice generation in 1 click, linking contract milestone to ledger",
          },
          legacy: {
            highlight: "✕ Multi-Day Billing Delay",
            detail: "Project managers must notify finance via email, who then manually generate invoices after days of delay",
          },
          pointSolution: {
            highlight: "✕ Completely Disconnected",
            detail: "Cannot generate tax invoices; project teams manually notify external accounting department",
          },
        },
        {
          metric: "WBS-Level Material Consumption & Issue Tracking",
          metricDesc: "Issuing inventory materials from warehouse directly to specific project phases.",
          mossi: {
            highlight: "✓ Direct Project Material Issue",
            detail: "Stock transfers and material requisitions link directly to specific project WBS codes, preventing project cost leakages",
          },
          legacy: {
            highlight: "⚠️ Complex Plant-to-Project Transfers",
            detail: "Requires multi-step transaction codes in SAP MM to link warehouse issue to PS project network",
          },
          pointSolution: {
            highlight: "✕ Not Supported",
            detail: "Task apps cannot see warehouse stock levels or issue materials against project tasks",
          },
        },
        {
          metric: "Cross-Project Resource Capacity & Workload Balancing",
          metricDesc: "Unified visibility into engineer and technician capacity across all ongoing company projects.",
          mossi: {
            highlight: "✓ Live Heatmap & Skill Allocation",
            detail: "Real-time workload heatmap reveals over-allocated personnel and available bench strength instantly",
          },
          legacy: {
            highlight: "⚠️ Static Resource Allocation",
            detail: "Resource planning tools require manual schedule recalculations and lack real-time task progress",
          },
          pointSolution: {
            highlight: "⚠️ Siloed Project Views",
            detail: "Difficult to see cross-departmental workload without paying for expensive enterprise tier upgrades",
          },
        },
        {
          metric: "Interactive Gantt with Critical Path & Auto-Rescheduling",
          metricDesc: "Visual dependency tracking with automated cascade rescheduling upon milestone shifts.",
          mossi: {
            highlight: "✓ Interactive Gantt with CPM Engine",
            detail: "Full Critical Path Method (CPM) with Finish-to-Start dependencies and automatic cascade rescheduling",
          },
          legacy: {
            highlight: "✕ Clunky Desktop Interfaces",
            detail: "Requires archaic desktop software like Primavera or complex SAP GUI screens",
          },
          pointSolution: {
            highlight: "✓ Modern Gantt UI Only",
            detail: "Has good Gantt views, but changes fail to reflect on project procurement orders or customer cash flow forecasts",
          },
        },
      ],
    },
    featuresCatalog: {
      previewName: "Projects",
      headline: {"action":"deliver with clarity","description":"Bring plans, people, time, and costs together to keep every project moving profitably."},
      eyebrow: "Comprehensive Functionality Catalog",
      title: "Explore All Features in Project Management",
      subtitle:
        "Plan, execute, and bill enterprise projects with total financial clarity, Gantt schedules, and resource capacity management.",
      categories: [
        { id: "all", label: "All Features" },
        { id: "planning", label: "Planning & Scheduling" },
        { id: "execution", label: "Tasks & Timesheets" },
        { id: "costing", label: "Costing & Budgeting" },
        { id: "billing", label: "Billing & ERP Bridge" },
      ],
      items: [
        {
          visual: {"title":"Gantt & critical path","icon":"gantt","kind":"schedule","tone":"blue","metric":"See what drives delivery","steps":["Task dependencies","Critical path","Milestone dates"]},
          id: "prj-f1",
          category: "planning",
          categoryLabel: "Planning & Scheduling",
          tagTone: "bg-blue-50 text-blue-700",
          icon: "📊",
          iconBg: "bg-blue-50 text-blue-600",
          title: "Interactive Gantt Chart & Critical Path (CPM)",
          description: "Visual dependency tracking with automated cascade rescheduling upon milestone shifts.",
          bullets: [
            "Finish-to-Start (FS), SS, FF dependencies with configurable lag and lead buffers",
            "Critical Path Method (CPM) identifying tasks directly affecting delivery dates",
            "Multiple baseline version snapshots (Contract Baseline vs Re-baselined V1)",
          ],
        },
        {
          visual: {"title":"Project setup & WBS","icon":"folder","kind":"versions","tone":"purple","metric":"Start with a clear structure","steps":["Project template","Work breakdown","Work packages"]},
          id: "prj-f2",
          category: "planning",
          categoryLabel: "Planning & Scheduling",
          tagTone: "bg-blue-50 text-blue-700",
          icon: "🚀",
          iconBg: "bg-blue-50 text-blue-600",
          title: "Project Setup & WBS Template Library",
          description: "Rapid project authoring with hierarchical Work Breakdown Structures and reusable templates.",
          bullets: [
            "Pre-built WBS project templates for turnkey EPC, software, and fabrication",
            "Multi-tier program hierarchy linking master projects to phases and sub-tasks",
            "Direct linkage to CRM sales contracts, client agreements, and delivery sites",
          ],
        },
        {
          visual: {"title":"Tasks & Kanban boards","icon":"kanban","kind":"pipeline","tone":"blue","metric":"From to-do to done","steps":["Backlog","Work in progress","Completed tasks"]},
          id: "prj-f3",
          category: "execution",
          categoryLabel: "Tasks & Timesheets",
          tagTone: "bg-purple-50 text-purple-700",
          icon: "📋",
          iconBg: "bg-purple-50 text-purple-600",
          title: "Task Management & Visual Kanban Boards",
          description: "Agile task execution with custom swimlanes, WIP limits, subtasks, checklists, and recurring tasks.",
          bullets: [
            "Drag-and-drop Kanban workflow stages with SLA priority alerts",
            "Subtask breakdown with automated percentage completion rollups",
            "Mandatory quality and safety audit checklists before task sign-off",
          ],
        },
        {
          visual: {"title":"Smart resource allocation","icon":"users","kind":"people","tone":"purple","metric":"The right people, available","steps":["Team capacity","Workload balanced","Resource assigned"]},
          id: "prj-f4",
          category: "execution",
          categoryLabel: "Tasks & Timesheets",
          tagTone: "bg-purple-50 text-purple-700",
          icon: "👥",
          iconBg: "bg-purple-50 text-purple-600",
          title: "Resource Workload Balancing & Heatmaps",
          description: "Visual cross-project capacity planning matching personnel skills and preventing engineer burnout.",
          bullets: [
            "Real-time heatmap revealing over-allocated personnel in red and bench in green",
            "1-click drag-and-drop task rebalancing directly from the capacity view",
            "Skill tagging and certification tracking matching right engineers to tasks",
          ],
        },
        {
          visual: {"title":"Timesheets & approvals","icon":"clock","kind":"people","tone":"orange","metric":"Time ready for billing","steps":["Billable time captured","Manager approval","Project cost updated"]},
          id: "prj-f5",
          category: "execution",
          categoryLabel: "Tasks & Timesheets",
          tagTone: "bg-purple-50 text-purple-700",
          icon: "⏱️",
          iconBg: "bg-purple-50 text-purple-600",
          title: "Mobile Billable Timesheets & Approvals",
          description: "Engineers log daily hours against client projects with automated managerial approval workflows.",
          bullets: [
            "Billable versus non-billable time classification with rate-card tracking",
            "Project manager 1-click timesheet approval queues synced with payroll",
            "Direct synchronization with payroll and client billing rate cards",
          ],
        },
        {
          visual: {"title":"Live project costing","icon":"coins","kind":"ledger","tone":"green","metric":"Every cost, connected","steps":["Time & expenses","Committed purchases","Actual project cost"]},
          id: "prj-f6",
          category: "costing",
          categoryLabel: "Costing & Budgeting",
          tagTone: "bg-amber-50 text-amber-700",
          icon: "💰",
          iconBg: "bg-amber-50 text-amber-600",
          title: "Real-Time Project Cost Accounting",
          description: "Live project ledger tracking direct labor, materials, subcontractor invoices, and corporate overhead.",
          bullets: [
            "Material issue requisitions charged directly to project WBS cost centers",
            "Subcontractor PO tracking with measurement sheets and retention money",
            "Continuous cost burn tracking against project budget lines in real time",
          ],
        },
        {
          visual: {"title":"Cost breakdown & variance","icon":"chart","kind":"ledger","tone":"rose","metric":"Know where budgets move","steps":["Cost baseline","Actual spend","Variance alert"]},
          id: "prj-f7",
          category: "costing",
          categoryLabel: "Costing & Budgeting",
          tagTone: "bg-amber-50 text-amber-700",
          icon: "📈",
          iconBg: "bg-amber-50 text-amber-600",
          title: "Cost Breakdown Structure (CBS) & Variance Alerts",
          description: "Granular budget vs actual tracking with proactive threshold alerts preventing project overruns.",
          bullets: [
            "Committed vs Actual vs Budgeted three-way expenditure monitoring",
            "Automated warning alerts when spending reaches 80% and 95% of contingency",
            "Revision tracking and change order logging maintaining budget audit history",
          ],
        },
        {
          visual: {"title":"Milestone to GST invoice","icon":"receipt","kind":"approvals","tone":"green","metric":"1-click milestone billing","steps":["Milestone completed","Invoice prepared","GST invoice issued"]},
          id: "prj-f8",
          category: "billing",
          categoryLabel: "Billing & ERP Bridge",
          tagTone: "bg-emerald-50 text-emerald-700",
          icon: "🏁",
          iconBg: "bg-emerald-50 text-emerald-600",
          title: "1-Click Milestone Completion to GST Invoicing",
          description: "Client deliverable approval triggers compliant GST tax invoice generation in accounting without delays.",
          bullets: [
            "Contract milestone sign-off automatically drafts GST E-Invoice with IRN",
            "Supports Milestone, Time & Material (T&M), Retainer, and Fixed-Fee billing",
            "Accelerated client billing cycle eliminating 18 days of administrative delay",
          ],
        },
        {
          visual: {"title":"Profitability & project health","icon":"gauge","kind":"pipeline","tone":"purple","metric":"A complete project picture","steps":["Margin tracked","Schedule monitored","Health reviewed"]},
          id: "prj-f9",
          category: "billing",
          categoryLabel: "Billing & ERP Bridge",
          tagTone: "bg-emerald-50 text-emerald-700",
          icon: "📊",
          iconBg: "bg-emerald-50 text-emerald-600",
          title: "Project Profitability & Health Telemetry",
          description: "Live project P&L, recognized revenue, gross margin analytics, and Earned Value Management (EVM).",
          bullets: [
            "Real-time gross margin percentage tracked continuously throughout execution",
            "Cost Performance Index (CPI) and Schedule Performance Index (SPI) analytics",
            "Dedicated restricted client portal for Gantt visibility and digital sign-offs",
          ],
        },
      ],
    },
    workflow: {
      eyebrow: "HOW DATA MOVES IN MOSSIE ERP",
      title: "From Project Award to Final Margin Realization",
      subtitle: "Eliminate project margin leakages and accelerate billing.",
      steps: [
        {
          stepNumber: 1,
          icon: "proj-charter",
          title: "1. Project Charter",
          subtitle: "Contract & budget setup",
          detailTitle: "Stage 1: Project Scope & Budget Baselines",
          detailDescription: "Signed client contract auto-populates project milestones, budgeted labor hours, and material estimates.",
          latency: "< 100ms",
        },
        {
          stepNumber: 2,
          icon: "proj-resource",
          title: "2. Resource Scheduling",
          subtitle: "WBS task assignments",
          detailTitle: "Stage 2: Resource Allocation & Gantt Scheduling",
          detailDescription: "Team members and subcontractors are scheduled on tasks based on skill requirements and current capacity.",
          latency: "< 200ms",
        },
        {
          stepNumber: 3,
          icon: "proj-timesheet",
          title: "3. Execution & Timesheets",
          subtitle: "Site updates & material logs",
          detailTitle: "Stage 3: Real-Time Execution Tracking",
          detailDescription: "Engineers log daily timesheets and site material consumption tagged to the project WBS code.",
          latency: "< 150ms",
        },
        {
          stepNumber: 4,
          icon: "proj-milestone",
          title: "4. Milestone Signoff",
          subtitle: "Client digital acceptance",
          detailTitle: "Stage 4: Milestone Signoff & QA Audit",
          detailDescription: "Client signs off on completed project deliverables, automatically unlocking billing readiness.",
          latency: "< 100ms",
        },
        {
          stepNumber: 5,
          icon: "proj-cash",
          title: "5. Invoice & Cash",
          subtitle: "GST invoice & ledger",
          detailTitle: "Stage 5: Automated Billing & True Margin Analysis",
          detailDescription: "Tax invoice generates instantly in accounting; project analytics reveal true gross margin earned.",
          latency: "< 200ms",
        },
      ],
    },
    testimonialAndRoi: {
      testimonial: {
        badge: "✓ VERIFIED SWITCHER FROM ASANA + EXCEL",
        quote:
          "With Asana, we knew who was doing what task, but had no idea if our EPC projects were making or losing money until the final audit. Mossie ERP's real-time budget burn and 1-click milestone invoicing improved our cash flow by ₹65L.",
        userName: "Venkatesh Raman",
        userRole: "Managing Director",
        userCompany: "Apex Infrastructure Solutions (Turnover ₹115 Cr)",
        initials: "VR",
      },
      impactCards: [
        { value: "32%", label: "Higher Project Margins", description: "Identified and halted material cost overruns before milestone delivery.", color: "text-blue-600" },
        { value: "18 Days", label: "Faster Invoicing", description: "Automated milestone signoff-to-bill turnaround.", color: "text-emerald-600" },
        { value: "94%", label: "Billable Utilization", description: "Balanced team capacity across projects to eliminate idle engineering hours.", color: "text-purple-600" },
        { value: "100%", label: "Budget Traceability", description: "Complete audit trail connecting every screw and hour to the project.", color: "text-amber-600" },
      ],
    },
    cta: {
      pill: "DELIVER PROFITABLE PROJECTS",
      title: "Gain Total Visibility into Project Costs, Deadlines & Team Utilization",
      description: "Schedule a live 20-minute demonstration of Mossie ERP's enterprise project management architecture.",
      primaryCtaText: "Book a Project Architecture Demo",
      secondaryCtaText: "Review All Modules",
    },
  },
};

export type ModulePageConfig = ModulePreviewConfig;
export const MODULES_DATA = MODULE_PREVIEW_DATA;
