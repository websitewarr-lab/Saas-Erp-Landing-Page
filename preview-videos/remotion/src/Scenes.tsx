import React from "react";
import {
  C,
  Icon,
  Tag,
  Panel,
  Heading,
  Stats,
  Divider,
  Progress,
  Rail,
  LineChart,
  MODULES,
  money,
  staged,
  type ModuleKey,
  type PreviewKind,
  type SceneProps,
} from "./ui";

const CRM: React.FC<SceneProps> = ({ t }) => {
  const p = staged(t, 1.45, 2.65);
  return (
    <>
      <Stats
        items={[
          ["Pipeline value", "₹8.4L", "24 open opportunities"],
          ["Quotes in review", "08", "Linked to your deals"],
          ["Follow-ups today", "12", "A clear next action"],
        ]}
      />
      <Panel>
        <Heading
          title="Deal pipeline"
          subtitle="Opportunities, quotations and the next conversation"
          action={<Tag>Board view</Tag>}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 14,
            position: "relative",
            height: 200,
          }}
        >
          {["Qualification", "Proposal", "Won"].map((s, i) => (
            <div
              key={s}
              style={{
                background: i === 2 ? "#f2faf6" : "#f5f8fc",
                borderRadius: 11,
                padding: 14,
              }}
            >
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 650,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {s}
                <span style={{ color: C.muted }}>
                  {i === 0
                    ? "01"
                    : i === 1
                      ? p > 0.9
                        ? "00"
                        : "01"
                      : p > 0.9
                        ? "01"
                        : "00"}
                </span>
              </div>
              {i === 0 && (
                <div
                  style={{
                    background: "white",
                    marginTop: 17,
                    padding: 15,
                    borderRadius: 9,
                    border: "1px solid " + C.line,
                  }}
                >
                  <div style={{ fontSize: 16, fontWeight: 600 }}>
                    {i === 0 ? "Warehouse expansion" : "Service renewal"}
                  </div>
                  <div
                    style={{ fontSize: 13, color: C.muted, margin: "9px 0" }}
                  >
                    Demo account {i === 0 ? "02" : "03"}
                  </div>
                  <Tag color={i === 0 ? C.orange : C.green}>
                    {i === 0 ? "Next: discovery" : "Won"}
                  </Tag>
                </div>
              )}
            </div>
          ))}
          <div
            style={{
              position: "absolute",
              width: "calc(33.333% - 25px)",
              left: `calc(33.333% + 14px + ${p * 33.333}%)`,
              top: 55,
              background: "white",
              padding: 16,
              borderRadius: 10,
              border: "1px solid " + (p > 0.9 ? C.green : C.blue),
              boxShadow: "0 10px 24px #0b427c12",
              translate: `0px ${-Math.sin(p * Math.PI) * 17}px`,
              zIndex: 2,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 16,
                fontWeight: 680,
              }}
            >
              <span>Equipment supply</span>
              <Icon
                name={p > 0.9 ? "check" : "document"}
                size={19}
                color={p > 0.9 ? C.green : C.blue}
              />
            </div>
            <div style={{ fontSize: 13, color: C.muted, margin: "9px 0 12px" }}>
              Demo account 01 · {money(180000)}
            </div>
            <Tag color={p > 0.9 ? C.green : C.blue}>
              {p > 0.9 ? "Won" : "Quote in review"}
            </Tag>
          </div>
        </div>
        <Divider />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 14,
          }}
        >
          <Icon name="clock" color={C.blue} size={18} />
          <span>Next activity</span>
          <span style={{ color: C.muted }}>
            Product consultation · Tomorrow, 10:30
          </span>
          <span style={{ marginLeft: "auto" }}>
            <Tag color={C.green}>Follow-up scheduled</Tag>
          </span>
        </div>
      </Panel>
    </>
  );
};
const Sales: React.FC<SceneProps> = ({ t }) => {
  const step = Math.min(4, Math.floor(t / 0.86));
  const p = staged(t, 2.15, 2.8);
  return (
    <>
      <Stats
        items={[
          ["Open orders", "32", "Quotation to fulfillment"],
          ["Ready for dispatch", "08", "Availability reviewed"],
          ["Invoices prepared", "14", "Linked documents"],
        ]}
      />
      <Panel>
        <Heading
          title="Sales order · SO-DEMO-01"
          subtitle="Demo account 01 · Warehouse A"
          action={
            <Tag color={step > 2 ? C.green : C.blue}>
              {step > 2 ? "Ready for dispatch" : "Confirmed"}
            </Tag>
          }
        />
        <Rail
          steps={["Quotation", "Order", "Pick & pack", "Dispatch", "Invoice"]}
          active={step}
        />
        <Divider />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.45fr 1fr",
            gap: 20,
          }}
        >
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 55px 95px",
                fontSize: 12,
                color: C.muted,
                paddingBottom: 10,
              }}
            >
              <span>ORDER ITEMS</span>
              <span>QTY</span>
              <span>AMOUNT</span>
            </div>
            {[
              ["Industrial pump", 2, 72000],
              ["Mounting kit", 4, 8000],
              ["Spare assembly", 2, 12000],
            ].map(([name, qty, total]) => (
              <div
                key={name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 55px 95px",
                  padding: "15px 0",
                  borderTop: "1px solid " + C.line,
                  fontSize: 15,
                }}
              >
                <span style={{ fontWeight: 550 }}>{name}</span>
                <span>{qty}</span>
                <span>{money(Number(total))}</span>
              </div>
            ))}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 18,
                fontWeight: 720,
                paddingTop: 14,
              }}
            >
              <span>Order value</span>
              <span>{money(92000)}</span>
            </div>
          </div>
          <div style={{ padding: 19, background: C.pale, borderRadius: 11 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                fontSize: 16,
                fontWeight: 680,
                marginBottom: 14,
              }}
            >
              <Icon name="boxes" />
              Fulfillment readiness
            </div>
            <Progress value={12 + staged(t, 0.5, 2.35) * 88} />
            <div
              style={{ fontSize: 13, color: C.muted, margin: "10px 0 20px" }}
            >
              Allocated → Picked → Packed
            </div>
            <div
              style={{
                opacity: p,
                translate: `0px ${(1 - p) * 12}px`,
                background: "white",
                borderRadius: 9,
                padding: 15,
                border: "1px solid #d4e7fa",
              }}
            >
              <Tag color={C.green}>
                <Icon name="check" size={14} />
                Invoice draft prepared
              </Tag>
              <div style={{ fontSize: 13, color: C.muted, marginTop: 10 }}>
                SO / dispatch reference attached
              </div>
            </div>
          </div>
        </div>
      </Panel>
    </>
  );
};
const Inventory: React.FC<SceneProps> = ({ t }) => {
  const p = staged(t, 1, 2.45);
  const count = Math.round(p * 24);
  return (
    <>
      <Stats
        items={[
          ["Stock on hand", "4,280", "Across three warehouses"],
          ["Available stock", "3,920", "Reservations visible"],
          ["Tracked lots", "64", "Serial and batch records"],
        ]}
      />
      <Panel>
        <Heading
          title="Warehouse stock movement"
          subtitle="Industrial assembly · DEMO-SKU-01"
          action={<Tag>Transfer preview</Tag>}
        />
        <div
          style={{
            display: "flex",
            gap: 28,
            position: "relative",
            padding: "8px 0 22px",
          }}
        >
          {["Warehouse A", "Warehouse B", "Warehouse C"].map((s, i) => (
            <div
              key={s}
              style={{
                flex: 1,
                padding: 18,
                borderRadius: 12,
                background: i === 1 ? C.pale : "#f6f8fc",
                border: "1px solid " + (i === 1 ? "#d5eaff" : C.line),
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 9,
                  alignItems: "center",
                  fontSize: 16,
                  fontWeight: 650,
                }}
              >
                <Icon name="boxes" color={C.blue} />
                {s}
              </div>
              <div
                style={{ fontSize: 32, fontWeight: 730, margin: "16px 0 4px" }}
              >
                {i === 0 ? 480 - count : i === 1 ? 220 + count : 180}
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: C.muted,
                    marginLeft: 7,
                  }}
                >
                  units
                </span>
              </div>
              <div style={{ fontSize: 12, color: C.muted }}>
                Available stock
              </div>
            </div>
          ))}
          <div
            style={{
              position: "absolute",
              top: 67,
              left: `calc(20% + ${p * 32}%)`,
              width: 39,
              height: 39,
              borderRadius: 10,
              background: C.blue,
              display: "grid",
              placeItems: "center",
              color: "white",
              opacity: Math.sin(p * Math.PI),
              boxShadow: "0 8px 24px #006fc948",
              zIndex: 2,
            }}
          >
            <Icon name="boxes" size={23} />
          </div>
        </div>
        <Divider />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.35fr 1fr",
            gap: 25,
          }}
        >
          <div>
            <div style={{ fontSize: 14, fontWeight: 650, marginBottom: 13 }}>
              Batch & serial visibility
            </div>
            {["LOT-DEMO-01 · 120 units", "LOT-DEMO-02 · 80 units"].map(
              (s, i) => (
                <div
                  key={s}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 11,
                    fontSize: 13,
                  }}
                >
                  <span>{s}</span>
                  <Tag color={i === 0 ? C.green : C.blue}>
                    {i === 0 ? "Available" : "Reserved"}
                  </Tag>
                </div>
              ),
            )}
          </div>
          <div style={{ background: "#fff9ef", padding: 16, borderRadius: 10 }}>
            <div style={{ fontSize: 14, fontWeight: 650, color: "#a96d1c" }}>
              Replenishment watch
            </div>
            <div style={{ fontSize: 13, color: C.muted, margin: "10px 0" }}>
              Spare part · Below reorder point
            </div>
            <Tag color={C.orange}>Review purchase demand</Tag>
          </div>
        </div>
      </Panel>
    </>
  );
};
const Purchase: React.FC<SceneProps> = ({ t }) => {
  const p = staged(t, 2.15, 2.8);
  const chosen = t > 1.3;
  return (
    <>
      <Stats
        items={[
          ["Requisitions to review", "12", "Linked to demand"],
          ["Quotes received", "03", "Compare supplier terms"],
          ["Receipts pending", "06", "Track store & billing states"],
        ]}
      />
      <Panel>
        <Heading
          title="Request for quotation · RFQ-DEMO-01"
          subtitle="Industrial assembly · Required quantity: 100"
          action={<Tag>Supplier comparison</Tag>}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 14,
          }}
        >
          {["Supplier A", "Supplier B", "Supplier C"].map((s, i) => (
            <div
              key={s}
              style={{
                padding: 18,
                border: "1.5px solid " + (i === 1 && chosen ? C.green : C.line),
                borderRadius: 11,
                background: i === 1 && chosen ? "#f1fbf6" : "white",
                scale: i === 1 && chosen ? 1.015 : 1,
              }}
            >
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 650,
                  marginBottom: 12,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {s}
                {i === 1 && chosen && (
                  <Icon name="check" color={C.green} size={20} />
                )}
              </div>
              <div style={{ fontSize: 29, fontWeight: 750, letterSpacing: -1 }}>
                {money([920, 850, 895][i])}
                <span style={{ fontSize: 12, fontWeight: 500, color: C.muted }}>
                  {" "}
                  / unit
                </span>
              </div>
              <div
                style={{ fontSize: 13, color: C.muted, margin: "12px 0 16px" }}
              >
                Lead time · {[7, 5, 8][i]} days
              </div>
              <Tag color={i === 1 && chosen ? C.green : C.blue}>
                {i === 1 && chosen ? "Selected for review" : "Quote received"}
              </Tag>
            </div>
          ))}
        </div>
        <div
          style={{
            opacity: p,
            translate: `0px ${(1 - p) * 15}px`,
            padding: 18,
            background: C.pale,
            borderRadius: 10,
            marginTop: 19,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 16, fontWeight: 680 }}>
              Purchase order draft ready
            </div>
            <div style={{ fontSize: 13, color: C.muted, marginTop: 7 }}>
              Supplier B · 100 units · Source RFQ linked
            </div>
          </div>
          <Tag>PO → GRN → Bill</Tag>
        </div>
        <Divider />
        <Rail
          steps={[
            "Requisition",
            "Compare RFQ",
            "Purchase order",
            "Goods receipt",
            "Bill matching",
          ]}
          active={Math.min(3, Math.floor(t / 1.1))}
        />
      </Panel>
    </>
  );
};

const Production: React.FC<SceneProps> = ({ t }) => {
  const running = 12 + staged(t, 0.45, 3.75) * 74;
  return (
    <>
      <Stats
        items={[
          ["Active orders", "08", "BOM & routing linked"],
          [
            "Capacity utilization",
            Math.round(72 + running * 0.06) + "%",
            "Review work-center load",
          ],
          ["Quality inspections", "06", "Operation-level visibility"],
        ]}
      />
      <Panel>
        <Heading
          title="Production order · MO-DEMO-01"
          subtitle="BOM v2.0 · Batch DEMO-04 · 120 units"
          action={<Tag>In progress</Tag>}
        />
        <div style={{ display: "flex", gap: 9, marginBottom: 20 }}>
          {[
            "BOM & routing",
            "Material readiness",
            "Capacity plan",
            "MES & quality",
          ].map((s, i) => (
            <Tag key={s} color={t > i * 0.75 ? C.blue : C.muted}>
              {s}
            </Tag>
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.35fr 1fr",
            gap: 24,
          }}
        >
          <div>
            {[
              ["01", "Cutting", 100, C.green],
              ["02", "Assembly", running, C.blue],
              [
                "03",
                "Quality check",
                t > 3.1 ? 100 : 0,
                t > 3.1 ? C.green : C.muted,
              ],
            ].map(([n, name, pct, color]) => (
              <div key={String(n)} style={{ marginBottom: 20 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 15,
                    fontWeight: 600,
                    marginBottom: 9,
                  }}
                >
                  <span>
                    <span style={{ color: C.muted, marginRight: 10 }}>{n}</span>
                    {name}
                  </span>
                  <span style={{ fontSize: 12, color: String(color) }}>
                    {Number(pct) === 100
                      ? "Complete"
                      : Number(pct) === 0
                        ? "Queued"
                        : Math.round(Number(pct)) + "%"}
                  </span>
                </div>
                <Progress
                  value={Number(pct)}
                  color={String(color)}
                  height={9}
                />
              </div>
            ))}
          </div>
          <div style={{ background: "#f5f8fc", borderRadius: 11, padding: 18 }}>
            <div style={{ fontSize: 15, fontWeight: 680, marginBottom: 13 }}>
              WIP & traceability
            </div>
            {[
              ["Planned quantity", "120"],
              ["Completed quantity", String(Math.round(running))],
              ["Lot reference", "DEMO-04"],
            ].map(([a, b]) => (
              <div
                key={a}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 13,
                  marginBottom: 14,
                }}
              >
                <span style={{ color: C.muted }}>{a}</span>
                <span style={{ fontWeight: 650 }}>{b}</span>
              </div>
            ))}
            <Divider />
            <Tag color={t > 3.1 ? C.green : C.orange}>
              {t > 3.1 ? "QC checkpoint reviewed" : "QC checkpoint pending"}
            </Tag>
          </div>
        </div>
      </Panel>
    </>
  );
};
const Accounting: React.FC<SceneProps> = ({ t }) => {
  const p = staged(t, 2.1, 2.8);
  return (
    <>
      <Stats
        items={[
          ["Cash balance", "₹12.4L", "Sample business snapshot"],
          ["Receivables", "₹4.8L", "Outstanding invoices"],
          ["Payables", "₹3.2L", "Supplier balances"],
        ]}
      />
      <div
        style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 18 }}
      >
        <Panel>
          <Heading
            title="General ledger"
            subtitle="Voucher · JV-DEMO-01"
            action={<Tag color={C.green}>Balanced</Tag>}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 100px 100px",
              fontSize: 12,
              color: C.muted,
              padding: "8px 0 12px",
            }}
          >
            <span>ACCOUNT</span>
            <span>DEBIT</span>
            <span>CREDIT</span>
          </div>
          {[
            ["Receivables", 125000, 0],
            ["Sales revenue", 0, 125000],
          ].map(([a, d, c]) => (
            <div
              key={a}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 100px 100px",
                borderTop: "1px solid " + C.line,
                padding: "19px 0",
                fontSize: 14,
              }}
            >
              <span style={{ fontWeight: 600 }}>{a}</span>
              <span>{d ? money(Number(d)) : "—"}</span>
              <span>{c ? money(Number(c)) : "—"}</span>
            </div>
          ))}
          <div
            style={{
              background: "#eff9f4",
              padding: 14,
              borderRadius: 9,
              color: C.green,
              fontSize: 14,
              fontWeight: 600,
              display: "flex",
              gap: 9,
              marginTop: 10,
            }}
          >
            <Icon name="check" size={18} />
            Debits and credits match
          </div>
          <div style={{ marginTop: 19, opacity: p }}>
            <Tag color={C.blue}>2 bank entries reconciled</Tag>
          </div>
        </Panel>
        <Panel>
          <Heading title="Cash flow" subtitle="Sample monthly movement" />
          <LineChart progress={0.1 + staged(t, 0.35, 2.15) * 0.9} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 12,
              color: C.muted,
              marginTop: 12,
            }}
          >
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
          </div>
          <Divider />
          <div style={{ fontSize: 14, fontWeight: 600 }}>
            Reports in one workspace
          </div>
          <div style={{ display: "flex", gap: 7, marginTop: 13 }}>
            <Tag>P&L</Tag>
            <Tag>Balance sheet</Tag>
          </div>
        </Panel>
      </div>
    </>
  );
};
const HRMS: React.FC<SceneProps> = ({ t }) => {
  const ready = t > 2.6;
  return (
    <>
      <Stats
        items={[
          ["Team attendance", "128 / 132", "A shared workforce view"],
          ["Requests to review", "06", "Leave, WFH & overtime"],
          ["Payroll period", "October", "Inputs ready for review"],
        ]}
      />
      <div
        style={{ display: "grid", gridTemplateColumns: "1.18fr 1fr", gap: 18 }}
      >
        <Panel>
          <Heading
            title="Workforce inputs"
            subtitle="Sample attendance and approval queue"
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 85px 110px",
              fontSize: 12,
              color: C.muted,
              paddingBottom: 11,
            }}
          >
            <span>TEAM MEMBER</span>
            <span>INPUT</span>
            <span>STATUS</span>
          </div>
          {[
            ["Team member 01", "Present", "Reviewed"],
            ["Team member 02", "Leave", t > 1.2 ? "Approved" : "Pending"],
            ["Team member 03", "Overtime", t > 1.95 ? "Approved" : "Pending"],
          ].map(([a, b, c]) => (
            <div
              key={a}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 85px 110px",
                alignItems: "center",
                fontSize: 14,
                padding: "17px 0",
                borderTop: "1px solid " + C.line,
              }}
            >
              <span style={{ fontWeight: 550 }}>{a}</span>
              <span style={{ color: C.muted }}>{b}</span>
              <Tag color={c === "Pending" ? C.orange : C.green}>{c}</Tag>
            </div>
          ))}
          <Divider />
          <div style={{ display: "flex", gap: 7 }}>
            <Tag>Recruitment</Tag>
            <Tag>OKRs & reviews</Tag>
            <Tag>Employee lifecycle</Tag>
          </div>
        </Panel>
        <Panel style={{ background: ready ? "#f4fbf8" : "white" }}>
          <Heading
            title="Payroll preparation"
            subtitle="Sample calculation · Team member 01"
            action={<Icon name="document" color={C.blue} size={25} />}
          />
          {[
            ["Gross pay", 120000],
            ["Deductions", 8000],
            ["Net pay", 112000],
          ].map(([a, b], i) => (
            <div
              key={a}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 22,
                fontSize: i === 2 ? 22 : 15,
                fontWeight: i === 2 ? 730 : 500,
                color: i === 2 ? C.ink : C.muted,
              }}
            >
              <span>{a}</span>
              <span>{money(Number(b))}</span>
            </div>
          ))}
          <Divider />
          <Progress
            value={12 + staged(t, 0.5, 2.6) * 88}
            color={ready ? C.green : C.blue}
          />
          <div style={{ marginTop: 16 }}>
            <Tag color={ready ? C.green : C.blue}>
              {ready
                ? "Prepared for payroll review"
                : "Reviewing workforce inputs"}
            </Tag>
          </div>
          <div style={{ fontSize: 12, color: C.muted, marginTop: 13 }}>
            Attendance · Leave · OT · Salary components
          </div>
        </Panel>
      </div>
    </>
  );
};
const Projects: React.FC<SceneProps> = ({ t }) => {
  const p = staged(t, 0.35, 3.3);
  const marker = 28 + staged(t, 0.8, 3.5) * 34;
  return (
    <>
      <Stats
        items={[
          [
            "Project progress",
            Math.round(42 + p * 36) + "%",
            "Plan and actual side by side",
          ],
          ["Approved timesheets", "32 h", "Resource & cost inputs"],
          ["Budget utilization", "64%", "A visible margin picture"],
        ]}
      />
      <Panel>
        <Heading
          title="Project timeline · DEMO-01"
          subtitle="Dependencies, team workload and milestones"
          action={<Tag>Gantt view</Tag>}
        />
        <div
          style={{ display: "grid", gridTemplateColumns: "170px 1fr", gap: 20 }}
        >
          <div style={{ fontSize: 14 }}>
            <div style={{ height: 29, color: C.muted, fontSize: 12 }}>
              WORK BREAKDOWN
            </div>
            {[
              "Planning",
              "Procurement",
              "Implementation",
              "Quality review",
              "Delivery milestone",
            ].map((s) => (
              <div
                key={s}
                style={{
                  height: 43,
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 550,
                }}
              >
                {s}
              </div>
            ))}
          </div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                display: "flex",
                height: 29,
                fontSize: 12,
                color: C.muted,
              }}
            >
              {["Week 1", "Week 2", "Week 3", "Week 4"].map((s) => (
                <div key={s} style={{ flex: 1 }}>
                  {s}
                </div>
              ))}
            </div>
            {[
              [0, 25, C.green],
              [15, 32, C.blue],
              [36, 40, C.blue],
              [68, 18, C.violet],
              [86, 10, C.green],
            ].map(([left, width, color], i) => (
              <div
                key={i}
                style={{
                  height: 43,
                  backgroundImage:
                    "linear-gradient(to right, #e9eef5 1px, transparent 1px)",
                  backgroundSize: "25% 100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    marginLeft: left + "%",
                    width: width + "%",
                    height: 20,
                    borderRadius: 5,
                    background: String(color),
                    opacity: i === 3 && t < 2.6 ? 0.35 : 1,
                  }}
                />
              </div>
            ))}
            <div
              style={{
                position: "absolute",
                left: marker + "%",
                top: 26,
                bottom: 0,
                width: 2,
                background: C.orange,
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: -7,
                  left: -4,
                  width: 10,
                  height: 10,
                  borderRadius: 3,
                  background: C.orange,
                }}
              />
            </div>
          </div>
        </div>
        <Divider />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            <Tag>Timesheets</Tag>
            <Tag>Cost variance</Tag>
            <Tag>Resource allocation</Tag>
          </div>
          <Tag color={t > 3.1 ? C.green : C.blue}>
            {t > 3.1
              ? "Milestone ready for signoff"
              : "Delivery progress tracked"}
          </Tag>
        </div>
      </Panel>
    </>
  );
};
const Dashboard: React.FC<SceneProps> = ({ t }) => (
  <>
    <Stats
      items={[
        ["Sales this month", "₹9.6L", "Orders & invoicing"],
        ["Cash position", "₹12.4L", "Finance overview"],
        ["Stock available", "3,920", "Warehouse visibility"],
        ["Team present", "128", "Workforce overview"],
      ]}
    />
    <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 18 }}>
      <Panel>
        <Heading
          title="Business pulse"
          subtitle="A shared view across your business"
          action={<Tag>Overview</Tag>}
        />
        <LineChart progress={0.1 + staged(t, 0.35, 2.5) * 0.9} height={195} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: C.muted,
            fontSize: 12,
            marginTop: 9,
          }}
        >
          <span>Week 1</span>
          <span>Week 2</span>
          <span>Week 3</span>
          <span>Week 4</span>
        </div>
      </Panel>
      <Panel>
        <Heading
          title="Your work, connected"
          subtitle="Sample cross-module activity"
        />
        {[
          ["Sales order", "Ready for dispatch", "cart"],
          ["Purchase requisition", "In review", "document"],
          ["Production order", "In progress", "factory"],
          ["Payroll preparation", "Inputs reviewed", "people"],
        ].map(([title, state, icon], i) => (
          <div
            key={title}
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              marginTop: 17,
              opacity: 0.35 + staged(t, i * 0.4, i * 0.4 + 0.45) * 0.65,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 9,
                background: C.pale,
                display: "grid",
                placeItems: "center",
                color: C.blue,
              }}
            >
              <Icon name={icon} size={19} />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 650 }}>{title}</div>
              <div style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>
                {state}
              </div>
            </div>
            <span style={{ marginLeft: "auto", color: C.green }}>
              <Icon name="check" size={17} />
            </span>
          </div>
        ))}
      </Panel>
    </div>
  </>
);
const Workflow: React.FC<SceneProps> = ({ t }) => {
  const active = Math.min(5, Math.floor(t / 0.72));
  const steps = [
    { name: "Lead & quote", module: "CRM", icon: "people" },
    { name: "Sales order", module: "Sales", icon: "cart" },
    { name: "Demand & stock", module: "Inventory", icon: "boxes" },
    { name: "Procurement", module: "Purchase", icon: "document" },
    { name: "Manufacturing", module: "Production", icon: "factory" },
    { name: "Invoice & ledger", module: "Finance", icon: "chart" },
  ];
  return (
    <Panel style={{ height: 478, padding: 30 }}>
      <Heading
        title="From first inquiry to financial visibility"
        subtitle="An illustrative manufacturing-order journey"
        action={<Tag>Connected workflow</Tag>}
      />
      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(6,1fr)",
          gap: 13,
          marginTop: 50,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 38,
            left: 65,
            right: 65,
            height: 3,
            background: C.line,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 38,
            left: 65,
            width: `calc((100% - 130px) * ${Math.min(1, t / 3.6)})`,
            height: 3,
            background: C.blue,
          }}
        />
        {steps.map((s, i) => (
          <div
            key={s.name}
            style={{
              position: "relative",
              textAlign: "center",
              translate: `0px ${i === active ? -7 : 0}px`,
            }}
          >
            <div
              style={{
                height: 76,
                width: 76,
                margin: "0 auto 21px",
                background: i <= active ? C.pale : "#f5f7fa",
                border: "1px solid " + (i <= active ? "#c9e4ff" : C.line),
                borderRadius: 19,
                color: i <= active ? C.blue : C.muted,
                display: "grid",
                placeItems: "center",
                boxShadow: i === active ? "0 12px 24px #006fc916" : "none",
              }}
            >
              <Icon name={s.icon} size={31} />
            </div>
            <div style={{ fontSize: 14, fontWeight: 680 }}>{s.name}</div>
            <div style={{ fontSize: 12, color: C.muted, marginTop: 7 }}>
              {s.module}
            </div>
            {i < active && (
              <div style={{ fontSize: 11, color: C.green, marginTop: 11 }}>
                Reference linked
              </div>
            )}
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          gap: 20,
          marginTop: 55,
          padding: 19,
          background: "#f6f9fd",
          borderRadius: 12,
          alignItems: "center",
        }}
      >
        <Icon name="grid" size={28} color={C.blue} />
        <div style={{ fontSize: 15, fontWeight: 650 }}>
          Shared context across teams
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 9 }}>
          <Tag>Project time & costs</Tag>
          <Tag>People & payroll inputs</Tag>
        </div>
      </div>
    </Panel>
  );
};
const Overview: React.FC<SceneProps> = ({ t }) => {
  const keys: ModuleKey[] = [
    "crm",
    "sales",
    "inventory",
    "purchase",
    "production",
    "accounting",
    "hrms",
    "project",
  ];
  const active = Math.min(7, Math.floor(t / 0.57));
  return (
    <Panel style={{ padding: 28, height: 478 }}>
      <Heading
        title="Eight modules. One calm workspace."
        subtitle="Discover the platform your teams share"
        action={<Tag>Mossie ERP</Tag>}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 16,
          marginTop: 27,
        }}
      >
        {keys.map((key, i) => (
          <div
            key={key}
            style={{
              height: 154,
              padding: 19,
              borderRadius: 13,
              border: "1.5px solid " + (i === active ? C.blue : C.line),
              background: i === active ? C.pale : "#fcfdff",
              scale: i === active ? 1.018 : 1,
              boxShadow: i === active ? "0 8px 24px #006fc910" : "none",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: C.blue,
              }}
            >
              <Icon name={MODULES[key].icon} size={27} />
              {i <= active && <Icon name="check" size={17} color={C.green} />}
            </div>
            <div
              style={{ fontSize: 19, fontWeight: 700, margin: "15px 0 8px" }}
            >
              {MODULES[key].short}
            </div>
            <div style={{ fontSize: 12, color: C.muted }}>
              {MODULES[key].features[0]}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
};

export const Scene: React.FC<{ kind: PreviewKind; t: number }> = ({
  kind,
  t,
}) => {
  switch (kind) {
    case "crm":
      return <CRM t={t} />;
    case "sales":
      return <Sales t={t} />;
    case "inventory":
      return <Inventory t={t} />;
    case "purchase":
      return <Purchase t={t} />;
    case "production":
      return <Production t={t} />;
    case "accounting":
      return <Accounting t={t} />;
    case "hrms":
      return <HRMS t={t} />;
    case "project":
      return <Projects t={t} />;
    case "home-dashboard":
      return <Dashboard t={t} />;
    case "home-workflow":
      return <Workflow t={t} />;
    case "home-modules":
      return <Overview t={t} />;
  }
};
