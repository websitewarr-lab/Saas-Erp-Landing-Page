export interface FeatureCardData {
  id: string;
  title: string;
  iconName: string;
  bullets: string[];
}

export interface WorkflowStepData {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export interface BenefitCardData {
  title: string;
  description: string;
  iconName: string;
  tone: "purple" | "blue" | "sky" | "cyan" | "emerald" | "amber" | "indigo" | "rose";
}

export interface ConnectedModulePillData {
  name: string;
  slug: string;
  iconName: string;
  colorTone: string;
}

export interface TestimonialData {
  quote: string;
  userName: string;
  userRole: string;
  userCompany: string;
  userInitials: string;
}

export interface ModulePageConfig {
  slug: string;
  badgeLabel: string;
  heroHeadline: string;
  heroDescription: string;
  heroBenefits: [string, string, string];
  mockupAnnotation: string;
  keyFeaturesEyebrow: string;
  keyFeaturesTitle: string;
  keyFeaturesSubtitle: string;
  featureCards: FeatureCardData[];
  workflowEyebrow: string;
  workflowTitle: string;
  workflowSubtitle: string;
  workflowSteps: WorkflowStepData[];
  workflowWidgetTitle: string;
  whyChooseEyebrow: string;
  whyChooseTitle: string;
  whyChooseBenefits: BenefitCardData[];
  integrationEyebrow: string;
  integrationTitle: string;
  integrationSubtitle: string;
  integrationAnnotation: string;
  connectedModules: ConnectedModulePillData[];
  testimonial: TestimonialData;
  ctaTitle: string;
  ctaDescription: string;
}

export const MODULES_DATA: Record<string, ModulePageConfig> = {
  // =========================================================================
  // MODULE 1: CRM
  // =========================================================================
  crm: {
    slug: "crm",
    badgeLabel: "CRM",
    heroHeadline: "Turn Leads into Long-Term Relationships",
    heroDescription:
      "Manage your entire customer lifecycle — from lead capture to deal closing and beyond. Boost sales productivity with a unified, intelligent CRM built for growing businesses.",
    heroBenefits: [
      "Higher conversion rates",
      "Better customer insights",
      "Stronger revenue growth",
    ],
    mockupAnnotation: "Visual pipeline to track every opportunity",
    keyFeaturesEyebrow: "Key Features",
    keyFeaturesTitle: "Everything You Need to Drive Sales Growth",
    keyFeaturesSubtitle:
      "Powerful CRM capabilities designed to help your sales team work smarter, close deals faster, and build lasting customer relationships.",
    featureCards: [
      {
        id: "lead-mgmt",
        title: "Lead & Prospect Management",
        iconName: "Users",
        bullets: [
          "Capture leads from website, Meta Ads, IndiaMART, cold calls & referrals",
          "Assign lead owners, set priority levels & corporate segments (SME/Mid-Market/Enterprise)",
          "Track detailed interactions, company profiles & follow-up timelines",
        ],
      },
      {
        id: "deals-pipeline",
        title: "Visual Deals & Pipeline Management",
        iconName: "Target",
        bullets: [
          "Customizable deal stages with drag & drop Kanban board",
          "Track win probabilities, expected closing dates & deal revenue values",
          "Visual deal pipeline tracking with real-time deal health indicators",
        ],
      },
      {
        id: "accounts-master",
        title: "360° Accounts & Customer Master",
        iconName: "Building2",
        bullets: [
          "Comprehensive corporate account profiles with multiple contacts",
          "GSTIN, PAN details & customer credit limit enforcement",
          "Complete transactional history & order activity timeline",
        ],
      },
      {
        id: "quote-conversion",
        title: "Lead-to-Quotation & Conversion",
        iconName: "FileSpreadsheet",
        bullets: [
          "One-click conversion of qualified leads into formal quotations",
          "One-click conversion of won deals into active Customer Master records",
          "Automated lead-to-customer conversion workflow & audit trail",
        ],
      },
      {
        id: "custom-masters",
        title: "Customizable CRM Masters",
        iconName: "Sliders",
        bullets: [
          "Lead Status Masters & Deal Stage Masters configuration",
          "Industry-specific customer classification rules",
          "Flexible, configurable sales workflows for your team",
        ],
      },
      {
        id: "activity-tracking",
        title: "Lead Activity & Follow-up Tracking",
        iconName: "CheckSquare",
        bullets: [
          "Track open activities, follow-up timelines & call notes",
          "Built-in task tracking & communication history log",
          "Status dashboards for rep activity & team task completion metrics",
        ],
      },
    ],
    workflowEyebrow: "How It Works",
    workflowTitle: "From Lead to Loyal Customer",
    workflowSubtitle: "A simple, streamlined process to manage your entire sales cycle.",
    workflowSteps: [
      {
        stepNumber: 1,
        title: "Capture Leads",
        description: "From website, ads, referrals or manual entry",
        iconName: "UserPlus",
      },
      {
        stepNumber: 2,
        title: "Track & Qualify",
        description: "Assign, score and move through pipeline stages",
        iconName: "Filter",
      },
      {
        stepNumber: 3,
        title: "Create Quotes",
        description: "Convert qualified deals to quotations with approvals",
        iconName: "FileText",
      },
      {
        stepNumber: 4,
        title: "Close Deal",
        description: "Win the deal and create active customer records",
        iconName: "CheckCircle2",
      },
      {
        stepNumber: 5,
        title: "Nurture & Grow",
        description: "Track interactions and drive repeat business",
        iconName: "TrendingUp",
      },
    ],
    workflowWidgetTitle: "Get complete visibility of your sales pipeline",
    whyChooseEyebrow: "Why Choose Our CRM?",
    whyChooseTitle: "Built for Sales Teams That Aim Higher",
    whyChooseBenefits: [
      {
        title: "Increase Conversion Rates",
        description: "Turn more leads into paying customers with a structured, automated sales process.",
        iconName: "BarChart3",
        tone: "purple",
      },
      {
        title: "Improve Team Productivity",
        description: "Automate follow-up tasks and let reps focus on high-intent conversations.",
        iconName: "Zap",
        tone: "blue",
      },
      {
        title: "Build Stronger Relationships",
        description: "Get a 360° view of your customer accounts, communication notes, and purchase history.",
        iconName: "Users",
        tone: "sky",
      },
      {
        title: "Drive Revenue Growth",
        description: "Identify high-value pipeline opportunities and never miss a revenue follow-up.",
        iconName: "TrendingUp",
        tone: "cyan",
      },
    ],
    integrationEyebrow: "Seamless Integration",
    integrationTitle: "Works Across Your ERP Ecosystem",
    integrationSubtitle:
      "Your CRM is fully integrated with other modules, ensuring a seamless flow of data across your business.",
    integrationAnnotation: "One connected ecosystem for better efficiency",
    connectedModules: [
      { name: "Sales & Orders", slug: "sales", iconName: "ShoppingCart", colorTone: "blue" },
      { name: "Inventory", slug: "inventory", iconName: "Boxes", colorTone: "amber" },
      { name: "Accounting", slug: "accounting", iconName: "ReceiptText", colorTone: "emerald" },
      { name: "HRMS", slug: "hrms", iconName: "UsersRound", colorTone: "rose" },
      { name: "Project Management", slug: "project", iconName: "FolderKanban", colorTone: "indigo" },
      { name: "Purchase", slug: "purchase", iconName: "ShoppingBag", colorTone: "cyan" },
      { name: "Production", slug: "production", iconName: "Factory", colorTone: "purple" },
    ],
    testimonial: {
      quote:
        "The CRM module has completely transformed our sales process. We now have better visibility, faster follow-ups, and higher closure rates.",
      userName: "Rohit Sharma",
      userRole: "Director",
      userCompany: "Sunrise Industries",
      userInitials: "RS",
    },
    ctaTitle: "Ready to Transform Your Sales Process?",
    ctaDescription: "See how our CRM can help your business grow. Book a personalized demo today.",
  },

  // =========================================================================
  // MODULE 2: SALES & ORDERS
  // =========================================================================
  sales: {
    slug: "sales",
    badgeLabel: "Sales & Orders",
    heroHeadline: "Accelerate Your Order-to-Cash Workflow",
    heroDescription:
      "Convert quotations into sales orders instantly, enforce commercial pricing controls, track delivery challans, and automate customer invoicing with complete financial integrity.",
    heroBenefits: [
      "Faster order fulfillment",
      "Zero commercial pricing errors",
      "Automated challan & tax billing",
    ],
    mockupAnnotation: "Real-time sales order & invoicing workspace",
    keyFeaturesEyebrow: "Key Features",
    keyFeaturesTitle: "Complete Commercial & Sales Order Control",
    keyFeaturesSubtitle:
      "Streamline multi-item quotations, approval workflows, delivery challans, and customer payment allocations in one fluid interface.",
    featureCards: [
      {
        id: "sales-quote",
        title: "Quotation & Revision Management",
        iconName: "FileSpreadsheet",
        bullets: [
          "Multi-item sales quotations with line-item discounts & custom rates",
          "Configurable tax options, payment terms & custom conditions",
          "Complete quotation revision history & version tracking",
        ],
      },
      {
        id: "sales-approvals",
        title: "Approvals & Commercial Controls",
        iconName: "ShieldCheck",
        bullets: [
          "Multi-tier approval workflow (Draft, Pending, Approved, Sent, Accepted, Rejected)",
          "Approval audit history & commercial price protection rules",
          "Discount modes: Without Discount, Item-level, Order-level controls",
        ],
      },
      {
        id: "sales-tax",
        title: "GST, Tax & Freight Configuration",
        iconName: "Receipt",
        bullets: [
          "Intra-State GST (CGST/SGST), Inter-State GST (IGST) & order-wise tax",
          "Tax-exempt transaction handling & regional tax rule engine",
          "Freight terms: To Pay / Collect, Prepaid, To Be Billed, Customer Pickup",
        ],
      },
      {
        id: "sales-orders",
        title: "Sales Orders & Invoice Processing",
        iconName: "ShoppingBag",
        bullets: [
          "Instant conversion of approved quotes into Sales Orders",
          "Order state tracking (Open, Partially Invoiced, Fully Invoiced, Confirmed, Shipped)",
          "Invoicing against Delivery Challans or direct against Sales Orders",
        ],
      },
      {
        id: "sales-dispatch",
        title: "Delivery Challan & Dispatch Management",
        iconName: "Truck",
        bullets: [
          "Serial-numbered Delivery Challans & Dispatch Orders",
          "Transporter details, vehicle numbers, driver info & E-Way bill records",
          "Dispatch-linked billing to ensure zero unbilled shipments",
        ],
      },
      {
        id: "sales-payments",
        title: "Payments, Returns & PDF Documents",
        iconName: "CreditCard",
        bullets: [
          "Customer payment & advance receipts allocated to SOs / Tax Invoices",
          "Sales returns, warehouse inspection & customer Credit Notes",
          "Automated PDF generation for Quotes, SOs, Delivery Challans & Invoices",
        ],
      },
    ],
    workflowEyebrow: "How It Works",
    workflowTitle: "Seamless Order-to-Cash Execution",
    workflowSubtitle: "From initial quotation to dispatch challan and final payment receipt.",
    workflowSteps: [
      {
        stepNumber: 1,
        title: "Draft Quotation",
        description: "Create multi-item quotes with line discounts & terms",
        iconName: "FileText",
      },
      {
        stepNumber: 2,
        title: "Commercial Approval",
        description: "Managerial discount check & formal quotation approval",
        iconName: "ShieldCheck",
      },
      {
        stepNumber: 3,
        title: "Convert to Order",
        description: "Generate Sales Order and reserve warehouse inventory",
        iconName: "ShoppingBag",
      },
      {
        stepNumber: 4,
        title: "Dispatch Challan",
        description: "Issue Delivery Challan & E-Way bill for logistics",
        iconName: "Truck",
      },
      {
        stepNumber: 5,
        title: "Invoice & Collect",
        description: "Generate Tax Invoice & allocate customer payment receipts",
        iconName: "CheckCircle2",
      },
    ],
    workflowWidgetTitle: "Monitor active order fulfillment & revenue",
    whyChooseEyebrow: "Why Choose Our Sales Module?",
    whyChooseTitle: "Engineered for Revenue Growth & Precision",
    whyChooseBenefits: [
      {
        title: "Eliminate Order Delays",
        description: "Convert approved quotes to sales orders and dispatches without re-keying data.",
        iconName: "Zap",
        tone: "blue",
      },
      {
        title: "Enforce Pricing Integrity",
        description: "Protect profit margins with strict multi-tier discount approval gates.",
        iconName: "Lock",
        tone: "emerald",
      },
      {
        title: "Streamline Dispatch Billing",
        description: "Ensure every delivery challan is matched directly to a customer tax invoice.",
        iconName: "Truck",
        tone: "purple",
      },
      {
        title: "Real-Time Cash Flow",
        description: "Track open balances and customer advances directly linked to your general ledger.",
        iconName: "DollarSign",
        tone: "cyan",
      },
    ],
    integrationEyebrow: "Seamless Integration",
    integrationTitle: "Connected with Inventory & General Ledger",
    integrationSubtitle:
      "Sales orders instantly reserve warehouse stock and post revenue entries into your central accounting ledger.",
    integrationAnnotation: "Automated order-to-cash integration flow",
    connectedModules: [
      { name: "CRM", slug: "crm", iconName: "Target", colorTone: "purple" },
      { name: "Inventory", slug: "inventory", iconName: "Boxes", colorTone: "amber" },
      { name: "Accounting", slug: "accounting", iconName: "ReceiptText", colorTone: "emerald" },
      { name: "Production", slug: "production", iconName: "Factory", colorTone: "indigo" },
      { name: "Purchase", slug: "purchase", iconName: "ShoppingBag", colorTone: "cyan" },
      { name: "HRMS", slug: "hrms", iconName: "UsersRound", colorTone: "rose" },
      { name: "Project Management", slug: "project", iconName: "FolderKanban", colorTone: "blue" },
    ],
    testimonial: {
      quote:
        "MossiERP Sales eliminated all quotation errors and cut our order fulfillment time by 40%. The dispatch challan to invoice flow is seamless.",
      userName: "Vikram Mehta",
      userRole: "Head of Operations",
      userCompany: "Apex Tech Distribution",
      userInitials: "VM",
    },
    ctaTitle: "Ready to Supercharge Your Sales Operations?",
    ctaDescription: "See how MossiERP Sales & Orders can streamline your commercial workflows. Book a live demo.",
  },

  // =========================================================================
  // MODULE 3: PURCHASE & PROCUREMENT
  // =========================================================================
  purchase: {
    slug: "purchase",
    badgeLabel: "Purchase & Procurement",
    heroHeadline: "Smarter Procurement & Vendor Control",
    heroDescription:
      "Streamline internal purchase requisitions, compare multi-vendor RFQs side-by-side, enforce 3-way invoice matching, and calculate true landed costs.",
    heroBenefits: [
      "100% spend compliance",
      "Automated 3-way invoice matching",
      "True landed cost allocation",
    ],
    mockupAnnotation: "Vendor RFQ comparison & PO approval engine",
    keyFeaturesEyebrow: "Key Features",
    keyFeaturesTitle: "End-to-End Vendor & Procurement Management",
    keyFeaturesSubtitle:
      "From internal material requests to supplier bid comparisons, landed cost vouchers, and vendor Debit Notes.",
    featureCards: [
      {
        id: "purchase-req",
        title: "Purchase Requisitions & Demand",
        iconName: "ClipboardList",
        bullets: [
          "Internal Purchase Requests (PRs) with item quantities & target dates",
          "Pending PR line-item tracking by department & project",
          "Consolidated department-wise purchase demand aggregation",
        ],
      },
      {
        id: "purchase-approval",
        title: "Purchase Approval Workflow",
        iconName: "ShieldCheck",
        bullets: [
          "Managerial PR approval engine (Pending, Approved, Rejected)",
          "Approval requirement enforcement before RFQs or PO creation",
          "Role-based spend limit authorization & budget checks",
        ],
      },
      {
        id: "vendor-rfq",
        title: "Vendor RFQ & Bid Comparison",
        iconName: "GitCompare",
        bullets: [
          "Send RFQs to multiple suppliers with technical specs",
          "Side-by-side price, warranty & lead-time vendor bid comparison",
          "Winning-bid selection & 1-click conversion into official POs",
        ],
      },
      {
        id: "purchase-po",
        title: "Purchase Orders & Vendor Management",
        iconName: "ShoppingBag",
        bullets: [
          "Official Purchase Orders with multi-level managerial approval",
          "Delivery schedules, payment terms, vendor advance processing",
          "Purchase returns handling, vendor credit & Debit Notes",
        ],
      },
      {
        id: "landed-cost",
        title: "Purchase Savings & Landed Costing",
        iconName: "Calculator",
        bullets: [
          "Purchase savings dashboard (actual vs initial vendor quote)",
          "Landed Cost Vouchers: freight, customs, insurance & handling allocation",
          "Accurate received-item unit valuation reflected in stock ledger",
        ],
      },
      {
        id: "3way-matching",
        title: "Vendor Bills & 3-Way Matching",
        iconName: "CheckCheck",
        bullets: [
          "Supplier invoice verification & unbilled GRN tracking",
          "3-Way Invoice Matching: Purchase Order + GRN + Supplier Invoice",
          "GRN quantity verification & automated vendor payment approvals",
        ],
      },
    ],
    workflowEyebrow: "How It Works",
    workflowTitle: "Structured Strategic Procurement",
    workflowSubtitle: "From internal material request to verified supplier bill payment.",
    workflowSteps: [
      {
        stepNumber: 1,
        title: "Raise Requisition",
        description: "Department creates PR for required items & quantities",
        iconName: "ClipboardList",
      },
      {
        stepNumber: 2,
        title: "Approve PR",
        description: "Managerial authorization & budget limit validation",
        iconName: "ShieldCheck",
      },
      {
        stepNumber: 3,
        title: "Vendor RFQ Comparison",
        description: "Compare supplier bids on price, terms & lead time",
        iconName: "GitCompare",
      },
      {
        stepNumber: 4,
        title: "Issue Purchase Order",
        description: "Generate official PO & send to winning vendor",
        iconName: "ShoppingBag",
      },
      {
        stepNumber: 5,
        title: "3-Way Bill Matching",
        description: "Match PO + GRN + Bill before approving payment",
        iconName: "CheckCircle2",
      },
    ],
    workflowWidgetTitle: "Procurement savings & active supplier orders",
    whyChooseEyebrow: "Why Choose Our Purchase Module?",
    whyChooseTitle: "Drive Procurement Savings & Spend Control",
    whyChooseBenefits: [
      {
        title: "Control Enterprise Spend",
        description: "Prevent unauthorized purchases with strict PR and PO approval thresholds.",
        iconName: "Lock",
        tone: "purple",
      },
      {
        title: "Select Best Vendor Rates",
        description: "Compare side-by-side quotes to secure optimal pricing and payment terms.",
        iconName: "TrendingUp",
        tone: "emerald",
      },
      {
        title: "Prevent Invoice Fraud",
        description: "Automated 3-way matching prevents over-billing or paying for unreceived goods.",
        iconName: "ShieldCheck",
        tone: "blue",
      },
      {
        title: "Accurate Stock Valuation",
        description: "Landed cost allocation ensures true item costs include freight, duties, and handling.",
        iconName: "Calculator",
        tone: "amber",
      },
    ],
    integrationEyebrow: "Seamless Integration",
    integrationTitle: "Connected with Stores & Accounts Payable",
    integrationSubtitle:
      "Purchase orders automatically sync with inward GRN store receipts and accounts payable ledgers.",
    integrationAnnotation: "Automated procurement & inventory integration",
    connectedModules: [
      { name: "Inventory", slug: "inventory", iconName: "Boxes", colorTone: "amber" },
      { name: "Accounting", slug: "accounting", iconName: "ReceiptText", colorTone: "emerald" },
      { name: "Production", slug: "production", iconName: "Factory", colorTone: "purple" },
      { name: "Sales & Orders", slug: "sales", iconName: "ShoppingCart", colorTone: "blue" },
      { name: "HRMS", slug: "hrms", iconName: "UsersRound", colorTone: "rose" },
      { name: "Project Management", slug: "project", iconName: "FolderKanban", colorTone: "indigo" },
      { name: "CRM", slug: "crm", iconName: "Target", colorTone: "cyan" },
    ],
    testimonial: {
      quote:
        "The 3-way matching and landed cost allocation in MossiERP Purchase reduced our procurement cycle by 5 days and saved 8% on vendor spending.",
      userName: "Anil Kulkarni",
      userRole: "VP of Procurement",
      userCompany: "Hartwell Steel Corp",
      userInitials: "AK",
    },
    ctaTitle: "Take Control of Your Enterprise Procurement",
    ctaDescription: "See how MossiERP Purchase & Procurement can optimize your vendor workflows. Book a demo.",
  },

  // =========================================================================
  // MODULE 4: INVENTORY, STORES & GRN
  // =========================================================================
  inventory: {
    slug: "inventory",
    badgeLabel: "Inventory & Stores",
    heroHeadline: "Real-Time Warehouse & GRN Control",
    heroDescription:
      "Spot low stock, manage inward Goods Receipt Notes (GRN), enforce FEFO/FIFO batch controls, and run automated MRP shortage calculations across all warehouses.",
    heroBenefits: [
      "Zero stockout bottlenecks",
      "Multi-warehouse bin locations",
      "Automated MRP stock replenishment",
    ],
    mockupAnnotation: "Live stock ledger & warehouse control workspace",
    keyFeaturesEyebrow: "Key Features",
    keyFeaturesTitle: "Complete Material Planning & Store Control",
    keyFeaturesSubtitle:
      "From inward gate receipts and quality quarantine inspection to multi-bin ledger tracking and automated replenishment.",
    featureCards: [
      {
        id: "inv-dashboard",
        title: "Store & Supply Chain Dashboard",
        iconName: "Boxes",
        bullets: [
          "Real-time inventory stock levels & warehouse utilization tracking",
          "Material movement visibility across all bins & locations",
          "Pending dispatch orders & stock shortage alerts",
        ],
      },
      {
        id: "grn-processing",
        title: "GRN & Inward Material Processing",
        iconName: "Truck",
        bullets: [
          "Interactive Goods Receipt Note (GRN) workflow against Purchase Orders",
          "Supplier delivery challan numbers & vehicle gate entry recording",
          "Received quantity verification & unbilled GRN accrual tracking",
        ],
      },
      {
        id: "quality-inspection",
        title: "Inward Quality & Quarantine",
        iconName: "ShieldAlert",
        bullets: [
          "Gate-level incoming shipment inspection & quality testing",
          "Accepted vs Rejected stock classification & Quarantine Store isolation",
          "Release of approved stock into active warehouse inventory",
        ],
      },
      {
        id: "multi-warehouse",
        title: "Multi-Warehouse & Stock Ledger",
        iconName: "Building",
        bullets: [
          "Multiple warehouse & bin location management with stock ledgers",
          "In-transit stock tracking, inter-warehouse stock transfers & adjustments",
          "Stock reservations for confirmed sales & production orders",
        ],
      },
      {
        id: "batch-serial",
        title: "Batch, Serial & Expiry Control",
        iconName: "QrCode",
        bullets: [
          "Batch & lot management with manufacturing & expiration dates",
          "Serial number tracking & FEFO / FIFO stock picking enforcement",
          "End-to-end material traceability from inward GRN to dispatch",
        ],
      },
      {
        id: "mrp-shortage",
        title: "MRP & Shortage Replenishment",
        iconName: "Cpu",
        bullets: [
          "Automated MRP analysis for active sales & production demand",
          "Safety stock, stock reservations & open purchase supply rules",
          "Auto-generation of Purchase Requisitions for identified shortages",
        ],
      },
    ],
    workflowEyebrow: "How It Works",
    workflowTitle: "End-to-End Store & Warehouse Flow",
    workflowSubtitle: "From material receipt at the gate to bin storage and customer dispatch.",
    workflowSteps: [
      {
        stepNumber: 1,
        title: "Gate Entry",
        description: "Record supplier vehicle entry & delivery challan details",
        iconName: "Truck",
      },
      {
        stepNumber: 2,
        title: "Inward GRN",
        description: "Receive materials against official Purchase Orders",
        iconName: "ClipboardCheck",
      },
      {
        stepNumber: 3,
        title: "Quality Inspection",
        description: "Test incoming batch; approve or isolate in Quarantine",
        iconName: "ShieldAlert",
      },
      {
        stepNumber: 4,
        title: "Bin Storage",
        description: "Put away approved stock into bin locations & ledger",
        iconName: "Boxes",
      },
      {
        stepNumber: 5,
        title: "Pick & Dispatch",
        description: "Reserve & pick stock using FEFO/FIFO rules for orders",
        iconName: "CheckCircle2",
      },
    ],
    workflowWidgetTitle: "Warehouse stock levels & material replenishment",
    whyChooseEyebrow: "Why Choose Our Inventory Module?",
    whyChooseTitle: "Optimized Warehouse Efficiency & Accuracy",
    whyChooseBenefits: [
      {
        title: "Prevent Stockouts",
        description: "Automated MRP shortage analysis ensures raw materials are reordered before lines stop.",
        iconName: "Zap",
        tone: "amber",
      },
      {
        title: "Optimize Stock Storage",
        description: "Multi-bin location tracking maximizes warehouse space utilization and picking speed.",
        iconName: "Building",
        tone: "blue",
      },
      {
        title: "Trace Batch Expirations",
        description: "FEFO enforcement prevents stock spoilage and guarantees batch traceability.",
        iconName: "QrCode",
        tone: "purple",
      },
      {
        title: "Accurate Valuation",
        description: "Real-time stock ledger entries keep inventory valuation synchronized with finance.",
        iconName: "Receipt",
        tone: "emerald",
      },
    ],
    integrationEyebrow: "Seamless Integration",
    integrationTitle: "Connected with Purchase, Production & Sales",
    integrationSubtitle:
      "Inventory updates automatically when goods arrive via Purchase, when materials are issued to Production, or when orders ship via Sales.",
    integrationAnnotation: "Live inventory synchronization across modules",
    connectedModules: [
      { name: "Purchase", slug: "purchase", iconName: "ShoppingBag", colorTone: "cyan" },
      { name: "Production", slug: "production", iconName: "Factory", colorTone: "purple" },
      { name: "Sales & Orders", slug: "sales", iconName: "ShoppingCart", colorTone: "blue" },
      { name: "Accounting", slug: "accounting", iconName: "ReceiptText", colorTone: "emerald" },
      { name: "HRMS", slug: "hrms", iconName: "UsersRound", colorTone: "rose" },
      { name: "Project Management", slug: "project", iconName: "FolderKanban", colorTone: "indigo" },
      { name: "CRM", slug: "crm", iconName: "Target", colorTone: "purple" },
    ],
    testimonial: {
      quote:
        "MossiERP Inventory gave us 99.4% stock accuracy across 3 regional warehouses. We eliminated dead stock and automated raw material reordering.",
      userName: "Sanjay Patel",
      userRole: "Supply Chain Manager",
      userCompany: "Ferroline Logistics",
      userInitials: "SP",
    },
    ctaTitle: "Ready to Optimize Your Warehouse & Stores?",
    ctaDescription: "Experience real-time stock control with MossiERP Inventory. Schedule your live demo.",
  },

  // =========================================================================
  // MODULE 5: PRODUCTION & MANUFACTURING
  // =========================================================================
  production: {
    slug: "production",
    badgeLabel: "Production & Manufacturing",
    heroHeadline: "Master Shopfloor Execution & Planning",
    heroDescription:
      "Connect multi-level BOMs, shopfloor routing, capacity-constrained scheduling, WIP quality inspection, subcontracting, and real-time OEE machine analytics.",
    heroBenefits: [
      "Higher OEE machine throughput",
      "Real-time shopfloor MES execution",
      "Full batch & lot traceability",
    ],
    mockupAnnotation: "Shopfloor work-center dispatch & MRP schedule",
    keyFeaturesEyebrow: "Key Features",
    keyFeaturesTitle: "Complete Production & Engineering Control",
    keyFeaturesSubtitle:
      "From multi-level BOM versioning to capacity-constrained scheduling, operator MES cockpits, and planned vs actual production costing.",
    featureCards: [
      {
        id: "bom-ecm",
        title: "BOM, Formulas & Change Orders",
        iconName: "Layers",
        bullets: [
          "Multi-level BOMs for sub-assemblies, components & scrap allowances",
          "Formula-based BOMs with dynamic variable material calculations",
          "Engineering Change Orders (ECO), revision history & impact analysis",
        ],
      },
      {
        id: "mrp-planning",
        title: "Demand Planning & Advanced MRP",
        iconName: "Cpu",
        bullets: [
          "Convert sales demand into production plans & work orders",
          "Net material requirement calculations considering stock, reservations & open POs",
          "Automated shortage detection & consolidated Purchase Requisition generation",
        ],
      },
      {
        id: "routing-scheduling",
        title: "Routing & Work-Center Scheduling",
        iconName: "Calendar",
        bullets: [
          "Multi-step routing (operations, work centers, setup/processing times, buffers)",
          "Production readiness checks (materials, machines, WIP & subcontracting)",
          "Capacity-constrained scheduling factoring in machine availability & shifts",
        ],
      },
      {
        id: "shopfloor-mes",
        title: "Shopfloor Execution & Operator MES",
        iconName: "Factory",
        bullets: [
          "Interactive dispatch board with active job & machine status visibility",
          "Operator MES cockpit: start, pause, resume & record completed operations",
          "Dedicated shopfloor touchscreen interface for real-time progress logging",
        ],
      },
      {
        id: "wip-traceability",
        title: "WIP, Quality & Full Traceability",
        iconName: "Search",
        bullets: [
          "Work-in-progress (WIP) tracking across operations & work centers",
          "In-process quality inspections, NCR workflows, CAPA & rework routing",
          "Forward & backward batch/lot traceability from raw material to finished product",
        ],
      },
      {
        id: "subcontracting-costing",
        title: "Subcontracting & OEE Costing",
        iconName: "PieChart",
        bullets: [
          "Subcontracting: job work delivery challans, material issue & vendor reconciliation",
          "OEE analytics: Machine availability, performance, quality & downtime analysis",
          "Planned vs actual costing variance (materials, labor, machine & overheads)",
        ],
      },
    ],
    workflowEyebrow: "How It Works",
    workflowTitle: "End-to-End Manufacturing Cycle",
    workflowSubtitle: "From sales demand planning to shopfloor execution and quality clearance.",
    workflowSteps: [
      {
        stepNumber: 1,
        title: "MRP & Demand",
        description: "Convert sales demand into production orders & MRP shortages",
        iconName: "Cpu",
      },
      {
        stepNumber: 2,
        title: "BOM & Routing",
        description: "Release BOM version, setup operations & work center routing",
        iconName: "Layers",
      },
      {
        stepNumber: 3,
        title: "Capacity Schedule",
        description: "Schedule work centers based on machine & shift capacity",
        iconName: "Calendar",
      },
      {
        stepNumber: 4,
        title: "MES Shopfloor Run",
        description: "Operators log setup, processing & WIP run via shopfloor MES",
        iconName: "Factory",
      },
      {
        stepNumber: 5,
        title: "Quality & Costing",
        description: "Inspect finished goods, record scrap & analyze cost variances",
        iconName: "CheckCircle2",
      },
    ],
    workflowWidgetTitle: "Live shopfloor OEE & active work order status",
    whyChooseEyebrow: "Why Choose Our Production Module?",
    whyChooseTitle: "Precision Manufacturing & Operational Control",
    whyChooseBenefits: [
      {
        title: "Maximize OEE Throughput",
        description: "Monitor machine availability, performance, and quality metrics in real time.",
        iconName: "Gauge",
        tone: "purple",
      },
      {
        title: "Eliminate Line Downtime",
        description: "Production readiness validation ensures materials and machines are ready before runs begin.",
        iconName: "Zap",
        tone: "blue",
      },
      {
        title: "Precise Production Costing",
        description: "Track planned vs actual variances across raw materials, labor, machine hours, and overheads.",
        iconName: "PieChart",
        tone: "emerald",
      },
      {
        title: "100% Quality Compliance",
        description: "In-process quality checks and full batch lot traceability guarantee compliance standards.",
        iconName: "ShieldCheck",
        tone: "cyan",
      },
    ],
    integrationEyebrow: "Seamless Integration",
    integrationTitle: "Connected with Inventory, Sales & Accounting",
    integrationSubtitle:
      "Production plans draw raw materials from Inventory, fulfill Sales Orders, and post WIP cost variances to Accounting.",
    integrationAnnotation: "Integrated shopfloor & financial engine",
    connectedModules: [
      { name: "Inventory", slug: "inventory", iconName: "Boxes", colorTone: "amber" },
      { name: "Purchase", slug: "purchase", iconName: "ShoppingBag", colorTone: "cyan" },
      { name: "Sales & Orders", slug: "sales", iconName: "ShoppingCart", colorTone: "blue" },
      { name: "Accounting", slug: "accounting", iconName: "ReceiptText", colorTone: "emerald" },
      { name: "HRMS", slug: "hrms", iconName: "UsersRound", colorTone: "rose" },
      { name: "Project Management", slug: "project", iconName: "FolderKanban", colorTone: "indigo" },
      { name: "CRM", slug: "crm", iconName: "Target", colorTone: "purple" },
    ],
    testimonial: {
      quote:
        "MossiERP Production gave our shopfloor operators an intuitive touchscreen MES interface. OEE increased by 14% and material scrap dropped significantly.",
      userName: "Rajesh Iyer",
      userRole: "Plant Manager",
      userCompany: "Precision Motors Ltd",
      userInitials: "RI",
    },
    ctaTitle: "Transform Your Manufacturing Operations",
    ctaDescription: "Discover how MossiERP Production & Manufacturing can boost shopfloor OEE. Book a live demo.",
  },

  // =========================================================================
  // MODULE 6: ACCOUNTING & FINANCE
  // =========================================================================
  accounting: {
    slug: "accounting",
    badgeLabel: "Accounting & Finance",
    heroHeadline: "One ERP, One Ledger — Unified Financial Engine",
    heroDescription:
      "Every sale, purchase, stock movement, and payroll run automatically posts into a unified double-entry general ledger with real-time audit trails and statutory compliance.",
    heroBenefits: [
      "Single source of financial truth",
      "Automated double-entry GL",
      "Audit-ready financial statements",
    ],
    mockupAnnotation: "Real-time General Ledger & Executive Dashboard",
    keyFeaturesEyebrow: "Key Features",
    keyFeaturesTitle: "Complete Enterprise Financial Control",
    keyFeaturesSubtitle:
      "From multi-tier Chart of Accounts and fixed asset depreciation to automatic bank reconciliations and multi-company consolidation.",
    featureCards: [
      {
        id: "core-gl",
        title: "Core Ledger & Accounting Controls",
        iconName: "BookOpen",
        bullets: [
          "Configurable Chart of Accounts (Assets, Liabilities, Equity, Income, Expenses)",
          "General Journal double-entry entries with audit trails & period locking",
          "Cost Centers & multi-company/branch consolidated reporting",
        ],
      },
      {
        id: "vouchers-daily",
        title: "Vouchers & Daily Transactions",
        iconName: "Receipt",
        bullets: [
          "Standard voucher system: Payment, Receipt, Contra, Credit & Debit Notes",
          "Individual voucher numbering series & managerial approval audit trail",
          "One-click voucher reversal support with zero silent deletion",
        ],
      },
      {
        id: "fixed-assets",
        title: "Fixed Assets & Depreciation",
        iconName: "Building2",
        bullets: [
          "Asset Register & category-wise depreciation policy configuration",
          "Automated monthly depreciation schedules (Draft → Review → Approve → Post)",
          "Asset acquisition, disposals, write-offs & revaluations with full ledger reflection",
        ],
      },
      {
        id: "bank-recon-tax",
        title: "Bank Recon, Budgets & GST",
        iconName: "CheckCircle",
        bullets: [
          "Automatic bank statement import & ledger transaction matching",
          "Department & company budget vs actual tracking with real-time alerts",
          "GST tax compliance (GSTR-1, GSTR-3B summary view) & multi-currency sync",
        ],
      },
      {
        id: "financial-reports",
        title: "Financial Statements & Audit Trail",
        iconName: "FileBarChart",
        bullets: [
          "Trial Balance, General Ledger, Party Ledgers (Customer/Vendor)",
          "Profit & Loss Statement, Balance Sheet, Cash Flow Statement, AP/AR Aging",
          "Complete audit log of all entries, edits & period closures (PDF/Excel exports)",
        ],
      },
      {
        id: "executive-governance",
        title: "Executive Dashboard & Governance",
        iconName: "ShieldAlert",
        bullets: [
          "Live revenue, expenses, net profit, cash position & financial ratios",
          "Posting-Failure Recovery Queue for automated cross-module entries",
          "Configurable role-based approvals for vouchers, disposals & budgets",
        ],
      },
    ],
    workflowEyebrow: "How It Works",
    workflowTitle: "Automated Financial Ledger Flow",
    workflowSubtitle: "From operational event trigger to verified financial statement.",
    workflowSteps: [
      {
        stepNumber: 1,
        title: "Operational Event",
        description: "Sale, purchase, payroll run or stock movement is executed",
        iconName: "Zap",
      },
      {
        stepNumber: 2,
        title: "Voucher Creation",
        description: "System automatically creates draft double-entry voucher",
        iconName: "Receipt",
      },
      {
        stepNumber: 3,
        title: "Manager Approval",
        description: "Finance team reviews & authorizes high-value vouchers",
        iconName: "ShieldCheck",
      },
      {
        stepNumber: 4,
        title: "Post to GL",
        description: "Voucher posts instantly into Chart of Accounts & Cost Centers",
        iconName: "BookOpen",
      },
      {
        stepNumber: 5,
        title: "Financial Reports",
        description: "P&L, Balance Sheet & Tax returns update in real time",
        iconName: "FileBarChart",
      },
    ],
    workflowWidgetTitle: "Live GL balance & real-time P&L statement",
    whyChooseEyebrow: "Why Choose Our Accounting Module?",
    whyChooseTitle: "Unmatched Financial Integrity & Speed",
    whyChooseBenefits: [
      {
        title: "Zero Re-entry Errors",
        description: "Sales invoices, purchase bills, and payroll entries post automatically into your ledger.",
        iconName: "CheckCircle",
        tone: "emerald",
      },
      {
        title: "Instant Period Closure",
        description: "Close monthly financial books in hours with automated bank recon and trial balances.",
        iconName: "Clock",
        tone: "blue",
      },
      {
        title: "Complete Audit Governance",
        description: "Every voucher edit, reversal, and approval is logged in a tamper-proof audit trail.",
        iconName: "ShieldCheck",
        tone: "purple",
      },
      {
        title: "Multi-Entity Control",
        description: "Consolidate multiple company entities or review branch-wise P&L statements instantly.",
        iconName: "Globe",
        tone: "cyan",
      },
    ],
    integrationEyebrow: "Seamless Integration",
    integrationTitle: "The Financial Heart of Your ERP",
    integrationSubtitle:
      "One ERP, One Ledger. Sales, Purchase, Inventory movements, and HRMS payroll post directly into the same ledger.",
    integrationAnnotation: "Centralized event-driven general ledger engine",
    connectedModules: [
      { name: "Sales & Orders", slug: "sales", iconName: "ShoppingCart", colorTone: "blue" },
      { name: "Purchase", slug: "purchase", iconName: "ShoppingBag", colorTone: "cyan" },
      { name: "Inventory", slug: "inventory", iconName: "Boxes", colorTone: "amber" },
      { name: "HRMS", slug: "hrms", iconName: "UsersRound", colorTone: "rose" },
      { name: "Production", slug: "production", iconName: "Factory", colorTone: "purple" },
      { name: "Project Management", slug: "project", iconName: "FolderKanban", colorTone: "indigo" },
      { name: "CRM", slug: "crm", iconName: "Target", colorTone: "purple" },
    ],
    testimonial: {
      quote:
        "MossiERP Accounting eliminated manual journal entries between our departments. Monthly closing now takes 2 days instead of 3 weeks, with zero audit discrepancies.",
      userName: "Meera Deshmukh",
      userRole: "Chief Financial Officer",
      userCompany: "Northwind Enterprise Group",
      userInitials: "MD",
    },
    ctaTitle: "Experience One ERP, One Ledger Financial Power",
    ctaDescription: "Schedule a live demo with our accounting specialists to see MossiERP Finance in action.",
  },

  // =========================================================================
  // MODULE 7: HRMS & PAYROLL
  // =========================================================================
  hrms: {
    slug: "hrms",
    badgeLabel: "HRMS & Payroll",
    heroHeadline: "Automated Workforce & Payroll Management",
    heroDescription:
      "Streamline your workforce from hire to retire with biometric attendance integration, shift roster planning, leave encashment, 1-click payroll processing, and employee self-service.",
    heroBenefits: [
      "1-click statutory payroll processing",
      "Biometric hardware attendance sync",
      "Employee self-service digital vault",
    ],
    mockupAnnotation: "HR executive & biometric attendance workspace",
    keyFeaturesEyebrow: "Key Features",
    keyFeaturesTitle: "Complete Employee Lifecycle & Payroll Control",
    keyFeaturesSubtitle:
      "From ATS recruitment pipelines and biometric shift rosters to itemized PDF payslips and employee asset tracking.",
    featureCards: [
      {
        id: "emp-directory",
        title: "Employee Directory & Org Structure",
        iconName: "Users",
        bullets: [
          "Complete employee profiles: personal info, bank details, compliance docs",
          "Multi-company, branch, department & designation organization hierarchy",
          "Reporting structures & multi-tenant organization support",
        ],
      },
      {
        id: "recruitment-ats",
        title: "Recruitment, ATS & Offer Letters",
        iconName: "UserCheck",
        bullets: [
          "Job requisitions, stage-by-stage ATS pipeline & interview scorecards",
          "Custom offer-letter templates with dynamic salary variables",
          "Professional PDF offer letter generation & automated email delivery",
        ],
      },
      {
        id: "biometric-roster",
        title: "Shifts, Rosters & Biometrics",
        iconName: "Fingerprint",
        bullets: [
          "Flexible shift rules (overtime 1.5x/2.0x, grace periods, breaks)",
          "ZKTeco & IP biometric hardware integration via external punch APIs",
          "Shift roster planning, rotations, swap requests & supervisor approvals",
        ],
      },
      {
        id: "leave-wfh",
        title: "Leave, Holiday & WFH Management",
        iconName: "Calendar",
        bullets: [
          "Custom leave types (Annual, Sick, Casual, Maternity, Unpaid) & encashment",
          "Multi-level leave & WFH approval workflows with calendar sync",
          "Branch-wise national & regional holiday calendar configuration",
        ],
      },
      {
        id: "payroll-engine",
        title: "Salary Structure & 1-Click Payroll",
        iconName: "Calculator",
        bullets: [
          "Customizable salary components (Basic, HRA, PF, ESI, TDS, PT)",
          "Automated monthly payroll run integrated with attendance, leave & overtime",
          "Itemized PDF payslips, email distribution & self-service portal access",
        ],
      },
      {
        id: "employee-services",
        title: "Lifecycle, Assets & HR Analytics",
        iconName: "Award",
        bullets: [
          "Travel & expense claim reimbursement with receipt upload & limits",
          "Company asset allocation & return tracking (laptops, mobiles, licenses)",
          "Offboarding No-Dues clearance, exit interviews & HR analytics dashboard",
        ],
      },
    ],
    workflowEyebrow: "How It Works",
    workflowTitle: "End-to-End People & Payroll Flow",
    workflowSubtitle: "From biometric attendance logs to automated bank salary disbursement.",
    workflowSteps: [
      {
        stepNumber: 1,
        title: "Attendance Sync",
        description: "Biometric punches sync continuously from hardware devices",
        iconName: "Fingerprint",
      },
      {
        stepNumber: 2,
        title: "Leave & Overtime",
        description: "System compiles approved leave, WFH & overtime hours",
        iconName: "Calendar",
      },
      {
        stepNumber: 3,
        title: "Run Payroll",
        description: "1-Click gross-to-net salary calculation & tax deductions",
        iconName: "Calculator",
      },
      {
        stepNumber: 4,
        title: "Generate Payslips",
        description: "Issue itemized PDF payslips to employee self-service portal",
        iconName: "FileText",
      },
      {
        stepNumber: 5,
        title: "Bank Disbursement",
        description: "Export bank payout statements & post salary expense to GL",
        iconName: "CheckCircle2",
      },
    ],
    workflowWidgetTitle: "Monthly payroll summary & attendance metrics",
    whyChooseEyebrow: "Why Choose Our HRMS Module?",
    whyChooseTitle: "Empower Your People & Simplify Compliance",
    whyChooseBenefits: [
      {
        title: "Eliminate Payroll Errors",
        description: "Automated attendance, leave, and tax integrations guarantee 100% net salary accuracy.",
        iconName: "CheckCircle",
        tone: "rose",
      },
      {
        title: "Biometric Hardware Sync",
        description: "Direct API integration with ZKTeco and IP biometric devices eliminates manual timecards.",
        iconName: "Fingerprint",
        tone: "blue",
      },
      {
        title: "100% Tax & Statutory Compliance",
        description: "Automatic calculations for PF, ESI, TDS, and Professional Tax based on statutory rules.",
        iconName: "ShieldCheck",
        tone: "emerald",
      },
      {
        title: "Complete Asset Tracking",
        description: "Maintain a complete audit log of company laptops, mobile devices, and software licenses.",
        iconName: "Award",
        tone: "purple",
      },
    ],
    integrationEyebrow: "Seamless Integration",
    integrationTitle: "Connected with General Ledger & Projects",
    integrationSubtitle:
      "Payroll expense runs post automatically into Accounting, while employee billable hours link with Project Management.",
    integrationAnnotation: "Automated workforce & financial integration",
    connectedModules: [
      { name: "Accounting", slug: "accounting", iconName: "ReceiptText", colorTone: "emerald" },
      { name: "Project Management", slug: "project", iconName: "FolderKanban", colorTone: "indigo" },
      { name: "Production", slug: "production", iconName: "Factory", colorTone: "purple" },
      { name: "Sales & Orders", slug: "sales", iconName: "ShoppingCart", colorTone: "blue" },
      { name: "Purchase", slug: "purchase", iconName: "ShoppingBag", colorTone: "cyan" },
      { name: "Inventory", slug: "inventory", iconName: "Boxes", colorTone: "amber" },
      { name: "CRM", slug: "crm", iconName: "Target", colorTone: "purple" },
    ],
    testimonial: {
      quote:
        "MossiERP HRMS cut our payroll processing time from 4 days to 30 minutes. Biometric attendance sync and self-service payslips made our staff super happy.",
      userName: "Pooja Hegde",
      userRole: "Head of HR",
      userCompany: "Meridian Tech Solutions",
      userInitials: "PH",
    },
    ctaTitle: "Transform Your HR & Payroll Operations Today",
    ctaDescription: "See how MossiERP HRMS can automate your workforce management. Book a live demo.",
  },

  // =========================================================================
  // MODULE 8: PROJECT MANAGEMENT
  // =========================================================================
  project: {
    slug: "project",
    badgeLabel: "Project Management",
    heroHeadline: "Deliver Projects On-Time and Within Budget",
    heroDescription:
      "Plan milestones, track billable resource utilization, record employee timesheets, monitor budget vs actual costs, and maintain complete project profitability visibility.",
    heroBenefits: [
      "On-time milestone delivery",
      "Billable resource utilization",
      "Real-time project margins",
    ],
    mockupAnnotation: "Project Gantt & resource utilization workspace",
    keyFeaturesEyebrow: "Key Features",
    keyFeaturesTitle: "Complete Professional Services & Project Control",
    keyFeaturesSubtitle:
      "From Gantt milestone tracking and billable timesheets to budget vs actual variance alerts and direct customer milestone billing.",
    featureCards: [
      {
        id: "project-planning",
        title: "Project Planning & Milestones",
        iconName: "FolderKanban",
        bullets: [
          "Interactive Gantt & Kanban views with milestone dependency mapping",
          "Task assignment, milestone baseline tracking & progress indicators",
          "Project templates for quick repeatable service deployment",
        ],
      },
      {
        id: "resource-timesheets",
        title: "Resource Utilization & Timesheets",
        iconName: "Clock",
        bullets: [
          "Team capacity & billable vs non-billable utilization dashboards",
          "Employee daily timesheet logging linked to projects & tasks",
          "Supervisor timesheet approval workflows with billable rate rules",
        ],
      },
      {
        id: "project-budgeting",
        title: "Budget vs Actual Margin Control",
        iconName: "DollarSign",
        bullets: [
          "Project budget creation with real-time expenditure monitoring",
          "Labor, material & vendor expense cost allocation to projects",
          "Real-time project margin alerts & profitability reporting",
        ],
      },
      {
        id: "task-collab",
        title: "Task Management & Team Collab",
        iconName: "CheckSquare",
        bullets: [
          "Task priorities, sub-tasks, checklists & file attachments",
          "Team activity stream, comments & task completion metrics",
          "Automated milestone completion alerts & notifications",
        ],
      },
      {
        id: "client-portal",
        title: "Client Portal & Status Reporting",
        iconName: "Globe",
        bullets: [
          "External client portal with milestone status visibility",
          "Milestone completion certificates & billable hour summaries",
          "Transparent client communication log & document sharing",
        ],
      },
      {
        id: "project-billing",
        title: "Billing & ERP General Ledger Sync",
        iconName: "Receipt",
        bullets: [
          "Direct conversion of approved timesheets & milestones into Sales Invoices",
          "Project expense voucher allocation to General Ledger Cost Centers",
          "Complete project billing history & open milestone revenue tracking",
        ],
      },
    ],
    workflowEyebrow: "How It Works",
    workflowTitle: "Streamlined Professional Project Delivery",
    workflowSubtitle: "From initial project scope to milestone delivery and customer billing.",
    workflowSteps: [
      {
        stepNumber: 1,
        title: "Scope & Plan",
        description: "Setup project milestones, deliverables & team budget",
        iconName: "FolderKanban",
      },
      {
        stepNumber: 2,
        title: "Assign & Roster",
        description: "Allocate team resources based on capacity & billable rates",
        iconName: "Users",
      },
      {
        stepNumber: 3,
        title: "Track Timesheets",
        description: "Team logs daily task hours & milestone progress",
        iconName: "Clock",
      },
      {
        stepNumber: 4,
        title: "Review Margins",
        description: "Monitor budget vs actual cost variances in real time",
        iconName: "DollarSign",
      },
      {
        stepNumber: 5,
        title: "Milestone Billing",
        description: "Convert approved milestones & hours into Sales Invoices",
        iconName: "CheckCircle2",
      },
    ],
    workflowWidgetTitle: "Active project progress & billable team hours",
    whyChooseEyebrow: "Why Choose Our Project Module?",
    whyChooseTitle: "Maximize Team Productivity & Profitability",
    whyChooseBenefits: [
      {
        title: "Protect Project Margins",
        description: "Real-time cost tracking flags budget overruns before margins collapse.",
        iconName: "DollarSign",
        tone: "emerald",
      },
      {
        title: "Increase Billable Capacity",
        description: "Visibility into team utilization ensures billable hours are maximized.",
        iconName: "Clock",
        tone: "blue",
      },
      {
        title: "Prevent Scope Creep",
        description: "Milestone dependency tracking and change approvals keep projects on scope.",
        iconName: "ShieldCheck",
        tone: "purple",
      },
      {
        title: "Seamless ERP Billing",
        description: "Approved timesheets and milestone completions flow directly into Sales Invoicing.",
        iconName: "Receipt",
        tone: "cyan",
      },
    ],
    integrationEyebrow: "Seamless Integration",
    integrationTitle: "Connected with Sales, HRMS & General Ledger",
    integrationSubtitle:
      "Project milestones link directly with Sales Invoices, employee timesheets sync with HRMS, and project expenses post to Cost Centers.",
    integrationAnnotation: "Integrated project management & billing engine",
    connectedModules: [
      { name: "Sales & Orders", slug: "sales", iconName: "ShoppingCart", colorTone: "blue" },
      { name: "HRMS", slug: "hrms", iconName: "UsersRound", colorTone: "rose" },
      { name: "Accounting", slug: "accounting", iconName: "ReceiptText", colorTone: "emerald" },
      { name: "Purchase", slug: "purchase", iconName: "ShoppingBag", colorTone: "cyan" },
      { name: "Inventory", slug: "inventory", iconName: "Boxes", colorTone: "amber" },
      { name: "Production", slug: "production", iconName: "Factory", colorTone: "purple" },
      { name: "CRM", slug: "crm", iconName: "Target", colorTone: "purple" },
    ],
    testimonial: {
      quote:
        "MossiERP Project Management increased our agency's billable team utilization by 18% and automated customer milestone invoicing completely.",
      userName: "Karan Johar",
      userRole: "Managing Director",
      userCompany: "Cascade Creative Agency",
      userInitials: "KJ",
    },
    ctaTitle: "Deliver Every Project On Time and On Budget",
    ctaDescription: "See how MossiERP Project Management can boost your billable utilization. Book a live demo.",
  },
};

