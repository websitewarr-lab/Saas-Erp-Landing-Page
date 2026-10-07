import React from "react";
import { Easing, interpolate } from "remotion";

export const C = {
  blue: "#006fc9",
  ink: "#17283c",
  muted: "#7b8ba0",
  line: "#e6edf5",
  pale: "#edf6ff",
  green: "#17a779",
  orange: "#ed9c3d",
  violet: "#7762da",
  navy: "#122439",
};
export const motion = {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
  easing: Easing.bezier(0.22, 1, 0.36, 1),
} as const;
export const money = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");
export type ModuleKey =
  | "crm"
  | "sales"
  | "inventory"
  | "purchase"
  | "production"
  | "accounting"
  | "hrms"
  | "project";
export type PreviewKind =
  | ModuleKey
  | "home-dashboard"
  | "home-workflow"
  | "home-modules";
export type PreviewProps = { kind: PreviewKind };
export type SceneProps = { t: number };

export const MODULES: Record<
  ModuleKey,
  {
    label: string;
    short: string;
    headline: string;
    nav: string[];
    features: string[];
    icon: string;
  }
> = {
  crm: {
    label: "Customer relationship management",
    short: "CRM",
    headline: "Move every opportunity forward.",
    nav: [
      "Overview",
      "Lead inbox",
      "Deal pipeline",
      "Accounts",
      "Quotations",
      "Activities",
    ],
    features: ["Lead capture", "Visual deal pipeline", "Follow-up tracking"],
    icon: "people",
  },
  sales: {
    label: "Sales & fulfillment",
    short: "Sales",
    headline: "From a quote to a fulfilled order.",
    nav: [
      "Overview",
      "Quotations",
      "Sales orders",
      "Dispatches",
      "Invoices",
      "Receipts",
    ],
    features: ["Quotations & orders", "Pick & dispatch", "Invoice & receipts"],
    icon: "cart",
  },
  inventory: {
    label: "Inventory & warehouses",
    short: "Inventory",
    headline: "Know what is available. Everywhere.",
    nav: [
      "Overview",
      "Item master",
      "Warehouses",
      "Stock ledger",
      "Batches & serials",
      "Reservations",
    ],
    features: [
      "Stock visibility",
      "Batch & serial tracking",
      "Warehouse transfers",
    ],
    icon: "boxes",
  },
  purchase: {
    label: "Purchase & procurement",
    short: "Purchase",
    headline: "Compare. Receive. Reconcile.",
    nav: [
      "Overview",
      "Requisitions",
      "Supplier RFQs",
      "Purchase orders",
      "Goods receipts",
      "Supplier bills",
    ],
    features: [
      "Supplier comparison",
      "Purchase approvals",
      "Receipt & bill matching",
    ],
    icon: "document",
  },
  production: {
    label: "Production & manufacturing",
    short: "Production",
    headline: "A clear view of every operation.",
    nav: [
      "Overview",
      "BOM & routing",
      "Production plans",
      "Capacity",
      "Shop floor · MES",
      "Quality & WIP",
    ],
    features: ["BOM & routing", "Capacity & MES", "Quality & traceability"],
    icon: "factory",
  },
  accounting: {
    label: "Accounting & finance",
    short: "Accounting",
    headline: "Bring your numbers into focus.",
    nav: [
      "Overview",
      "General ledger",
      "Receivables",
      "Payables",
      "Bank reconciliation",
      "Financial reports",
    ],
    features: [
      "Balanced journals",
      "Bank reconciliation",
      "Financial reporting",
    ],
    icon: "chart",
  },
  hrms: {
    label: "HRMS & payroll",
    short: "HR & Payroll",
    headline: "Connect the whole employee journey.",
    nav: [
      "Overview",
      "Attendance",
      "Leave & overtime",
      "Payroll",
      "Recruitment",
      "Performance & OKRs",
      "Assets & documents",
    ],
    features: [
      "Attendance & leave",
      "Payroll preparation",
      "Performance & lifecycle",
    ],
    icon: "people",
  },
  project: {
    label: "Project management",
    short: "Projects",
    headline: "See the plan. Protect the margin.",
    nav: [
      "Overview",
      "Projects & WBS",
      "Gantt timeline",
      "Tasks & milestones",
      "Timesheets",
      "Costs & profitability",
    ],
    features: [
      "Gantt & milestones",
      "Timesheets & resources",
      "Cost & profitability",
    ],
    icon: "gantt",
  },
};

export const Icon: React.FC<{
  name?: string;
  size?: number;
  color?: string;
}> = ({ name = "boxes", size = 22, color = "currentColor" }) => {
  const shapes: Record<string, React.ReactNode> = {
    people: (
      <>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 20v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 5" />
      </>
    ),
    boxes: (
      <>
        <path d="m12 2 8 4-8 4-8-4 8-4Zm-8 4v12l8 4 8-4V6M12 10v12M8 4l8 4" />
      </>
    ),
    cart: (
      <>
        <path d="M2 3h3l3 12h12l2-9H6" />
        <circle cx="9" cy="20" r="1" />
        <circle cx="19" cy="20" r="1" />
      </>
    ),
    document: (
      <>
        <path d="M6 2h9l4 4v16H6V2Zm9 0v5h4M9 11h7M9 15h7M9 19h4" />
      </>
    ),
    factory: <path d="M3 21V10l6 3V8l6 4V3h4v18H3ZM6 17h1m4 0h1m4 0h1" />,
    chart: <path d="M3 3v18h18M7 16v-5m5 5V6m5 10V9" />,
    gantt: <path d="M5 3v18M3 7h18M9 11h6m-3 4h9M3 19h18" />,
    check: <path d="m5 12 4 4L19 6" />,
    search: (
      <>
        <circle cx="10" cy="10" r="6" />
        <path d="m15 15 6 6" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l4 2" />
      </>
    ),
    bell: <path d="M5 17h14l-2-3V9a5 5 0 0 0-10 0v5l-2 3ZM10 21h4" />,
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {shapes[name] || shapes.boxes}
    </svg>
  );
};
export const Tag: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = C.blue,
}) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "6px 11px",
      borderRadius: 7,
      background: color + "13",
      color,
      fontSize: 14,
      fontWeight: 650,
      whiteSpace: "nowrap",
    }}
  >
    {children}
  </span>
);
export const Panel: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => (
  <div
    style={{
      background: "white",
      border: "1px solid " + C.line,
      borderRadius: 15,
      padding: 20,
      ...style,
    }}
  >
    {children}
  </div>
);
export const Heading: React.FC<{
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}> = ({ title, subtitle, action }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14,
    }}
  >
    <div>
      <div style={{ fontSize: 22, fontWeight: 720, letterSpacing: -0.4 }}>
        {title}
      </div>
      {subtitle && (
        <div style={{ fontSize: 14, color: C.muted, marginTop: 6 }}>
          {subtitle}
        </div>
      )}
    </div>
    {action}
  </div>
);
export const Stats: React.FC<{ items: [string, string, string][] }> = ({
  items,
}) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(" + items.length + ",1fr)",
      gap: 15,
      marginBottom: 16,
    }}
  >
    {items.map(([label, value, detail]) => (
      <Panel key={label} style={{ padding: "12px 18px" }}>
        <div style={{ fontSize: 13, color: C.muted, fontWeight: 550 }}>
          {label}
        </div>
        <div
          style={{
            fontSize: 30,
            fontWeight: 730,
            letterSpacing: -1,
            margin: "8px 0 5px",
          }}
        >
          {value}
        </div>
        <div style={{ fontSize: 12, color: C.green }}>{detail}</div>
      </Panel>
    ))}
  </div>
);
export const Divider = () => (
  <div style={{ height: 1, background: C.line, margin: "14px 0" }} />
);
export const Progress: React.FC<{
  value: number;
  color?: string;
  height?: number;
}> = ({ value, color = C.blue, height = 8 }) => (
  <div
    style={{
      height,
      borderRadius: 10,
      background: "#eef2f7",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        width: value + "%",
        height: "100%",
        borderRadius: 10,
        background: color,
      }}
    />
  </div>
);
export const Rail: React.FC<{ steps: string[]; active: number }> = ({
  steps,
  active,
}) => (
  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
    {steps.map((s, i) => (
      <React.Fragment key={s}>
        <div
          style={{
            flex: 1,
            fontSize: 12,
            fontWeight: 650,
            display: "flex",
            alignItems: "center",
            gap: 7,
            color: i <= active ? C.blue : C.muted,
          }}
        >
          <span
            style={{
              display: "grid",
              placeItems: "center",
              width: 22,
              height: 22,
              background: i <= active ? C.pale : "#f1f4f8",
              borderRadius: "50%",
              flexShrink: 0,
            }}
          >
            {i < active ? <Icon name="check" size={13} /> : i + 1}
          </span>
          {s}
        </div>
        {i < steps.length - 1 && (
          <div
            style={{
              width: 22,
              height: 1,
              background: i < active ? C.blue : C.line,
            }}
          />
        )}
      </React.Fragment>
    ))}
  </div>
);
export const LineChart: React.FC<{
  progress: number;
  color?: string;
  height?: number;
}> = ({ progress, color = C.blue, height = 165 }) => (
  <svg
    width="100%"
    height={height}
    viewBox="0 0 540 180"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
        <stop stopColor={color} stopOpacity=".15" />
        <stop offset="1" stopColor={color} stopOpacity="0" />
      </linearGradient>
      <clipPath id="chart-clip">
        <rect width={540 * progress} height="180" />
      </clipPath>
    </defs>
    {[30, 70, 110, 150].map((y) => (
      <line
        key={y}
        x1="0"
        x2="540"
        y1={y}
        y2={y}
        stroke={C.line}
        strokeDasharray="4 5"
      />
    ))}
    <g clipPath="url(#chart-clip)">
      <path
        d="M0 140C35 140 35 114 70 119S125 86 165 96S216 50 255 64S325 22 365 47S421 13 468 29S501 6 540 10L540 180H0Z"
        fill="url(#chart-fill)"
      />
      <path
        d="M0 140C35 140 35 114 70 119S125 86 165 96S216 50 255 64S325 22 365 47S421 13 468 29S501 6 540 10"
        fill="none"
        stroke={color}
        strokeWidth="3.5"
      />
    </g>
  </svg>
);
export const staged = (t: number, a: number, b: number) =>
  interpolate(t, [a, b], [0, 1], motion);
