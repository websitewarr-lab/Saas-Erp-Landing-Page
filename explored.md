# ERP exploration and Mossie ERP website review

Reviewed: 7 October 2026. Project: `/home/kaps/Documents/package`.

## Scope and evidence

I signed into the supplied ERP, reviewed all seven app areas visible to the account through the browser, and signed out. This expanded review replaces the earlier HRMS-only scope: CRM, Sales, Inventory, Purchase, Production, HR & Payroll, and Administration now have live-screen feature maps and inferred workflows below. The authenticated application was reviewed at `https://astra-erp.londonstreetstore.com`. The website was inspected in this repository and through the existing local preview at `http://127.0.0.1:3000`.

The entire ERP review was read-only. I did not create, edit, approve, reject, delete, import, export, download records, clock in, move candidates, process payroll, submit any business form, generate reports/scan events, change subscriptions, install modules, test integration connections, or send communications. Login and logout were the only intentional authentication changes. This report excludes credentials, employee and candidate names, contact values, and personal record contents.

Evidence labels used below:

- **Observed UI:** a page, tab, field, status, navigation entry, or control was present. This establishes that the interface exists; it does not prove its processing logic works.
- **Source-confirmed:** behavior or content can be established from the website source.
- **Inferred workflow:** a likely sequence assembled from observed screens and controls. No transaction or approval sequence was executed.
- **Unverified:** insufficient access or evidence. This does not mean the feature is absent from the product.

The review used one supplied administrator login. The exact role assigned to that account was not independently established from a role-assignment screen. No employee, manager, accountant, auditor, or separate tenant session was used.

## Most consequential findings

1. **The website enquiry form does not deliver enquiries.** Its handler validates fields and sets local success state, with no request to an API, CRM, mail service, or server action, then promises follow-up. This is source-confirmed; no test enquiry was submitted.
2. **All seven visible ERP areas have now been explored.** The expanded non-HR review inspected 162 distinct accessible route/view combinations, including list/configuration pages, blank forms and representative document details, in addition to the earlier detailed HRMS review. This is interface coverage, not proof that every hidden feature or transaction works.
3. **The product supports a richer, more concrete website story:** linked CRM/deal/quotation history; sales order/dispatch/invoice/receipt views; inventory demand, tracking and valuation; requisition/RFQ/receipt/bill workflows; extensive production engineering, planning, MES, quality, cost and maintenance screens; broad HR lifecycle/performance tools; and administration/integration setup.
4. **Strong automation claims still exceed the evidence.** Configuration, fields and status columns do not establish statutory output accuracy, live device/API delivery, accounting postings, AI quality, predictive replenishment, financial guardrails or guaranteed business outcomes.
5. **Important conditions must appear in copy:** bill matching allows Off/Warn/Hold; production manual scheduling is labelled Coming Soon; the MES scanner is a simulator; WhatsApp setup is device linking rather than a demonstrated employee bot.
6. **Access limits remain:** HR My Attendance returned Not Found; HR My Assets returned Forbidden; Accounting and Project probes were inaccessible. No separate employee, customer, vendor, accountant or operator login was tested.
7. **The website's eight-module catalog and this account's seven-area app directory differ.** Accounting/Project are marketed, Administration is visible in the app, and entitlement/role effects are unverified. The commercial catalog needs owner confirmation, not automatic reduction to seven products.
8. **Website usability/content defects remain:** wrong HR card destination, duplicate module cards, hover-dependent controls, incomplete metadata and motion support. The underlying reusable templates are a useful foundation.

## Coverage of the seven visible ERP areas

| Visible app area | Actual entry route | Review depth | Report section |
| --- | --- | --- | --- |
| CRM | `/crm/dashboard` | 17 route/view combinations excluding shared quotations; dashboards, leads/deals/accounts/customers, masters, approvals, tracking, blank forms and representative lead/deal details. | CRM: features and workflows |
| Sales | `/crm/quotations` | 13 combinations including the three shared quotation views; orders, invoices, receipts, returns, policy, blank forms and order detail. | Sales: features and workflows |
| Inventory | `/supply-chain/dashboard` | 22 combinations including transporter list/form; masters, demand/shortages, production material requests, dispatch, tracking, transfers, adjustments, ledger, reservations, printing and reports. | Inventory: features and workflows |
| Purchase | `/purchase/vendors` | 25 combinations including GRNs; suppliers, PR/RFQ/PO, consolidation, approvals, receipts, landed cost, matching, bills, payments/advances/returns, blank forms and RFQ detail. | Purchase: features and workflows |
| Production | `/production/dashboard` | 71 combinations; engineering/resources, planning/capacity/scheduling, MES/WIP, quality, subcontracting, maintenance/intelligence, blank forms and representative order/BOM/routing details. | Production: features and workflows |
| HR & Payroll | `/hrms/dashboard` | All previously observed HR sidebar areas, organized into the 27 feature groups below, with policy/forms, roster and recruitment pipeline inspection. | HRMS module-by-module feature map |
| Administration | `/platform/subscription` | 14 combinations excluding inventory's transporter master; plans, terms, notifications, SMTP, WhatsApp, GST, Meta, access roles/users and audit. | Administration: features and workflows |

Counts distinguish routes/views, **not feature counts**. Shared quotations are counted under Sales and transporter setup under Inventory; they are not duplicated in the 162 total. All observed sidebar destinations in the six non-HR areas were checked against the visited routes. Hidden roles, unexposed routes, record-specific variations and transaction outcomes remain outside that completeness claim. An index of the expanded review's routes appears near the end.

## HRMS module-by-module feature map

All sequences called “workflow” in this section are **inferred workflows**, unless explicitly identified as a navigation result. Form controls were inspected without submitting them.

### 1. ERP directory and HRMS dashboard

Routes: `/dashboard`, `/hrms/dashboard`.

**Observed UI:** ERP navigation exposes CRM, Sales, Inventory, Purchase, Production, HR & Payroll, and Administration. The HRMS dashboard includes customization/add-widget controls, attendance clock-in, leave/WFH/punch/expense approval queues, holiday information, probation and exit links, and shortcuts to leave, encashment, shift changes, overtime, attendance regularization, and payslips.

**Workflow:** open the role dashboard → inspect queues and summaries → enter the appropriate module → review the request or record.

**Limits:** widgets were not saved, clock-in was not used, and requests were not actioned. “Role dashboard” wording does not establish which widgets other roles receive. Accounting and Project were not separate entries in the reviewed ERP app directory. Expanded read-only probes of `/accounting/journals`, `/accounting/dashboard`, `/projects` and `/projects/dashboard` returned Forbidden; `/project` returned Not Found. The last three project paths were exploratory probes, not discovered sidebar links. Availability under other subscriptions/roles remains unverified.

### 2. Organization structure

Route: `/hrms/org`.

**Observed UI:** Legal Entities, Business Units, Branches, Departments, and Designations tabs. Configuration fields include entity identity, currency/timezone, organizational parent relationships, unit/branch managers, department heads, designation grade levels, and active/inactive status. Search, sorting, and scoped filters are present.

**Workflow:** define the legal entity → establish business units/branches → associate departments and designations → assign managers and employee organizational placement.

**Limits:** entity setup does not prove cross-company accounting consolidation, currency conversion, or tenant data isolation.

### 3. Salary structures and payroll rules

Route: `/hrms/salary-structure`.

**Observed UI:** pay groups; Salary Structures (Slabs), Salary Components, Payroll Rules, Recurring Components, and Ad-hoc Components; a CTC calculator control. Slabs have minimum/maximum annual CTC, component calculation/value fields, earnings/deduction classifications, and status.

Payroll rule controls include calendar-day/fixed-30-day/working-day proration, loss-of-pay treatment, attendance and variable-input lock days, a PF contribution wage ceiling, and an ESI gross-salary threshold.

**Workflow:** configure components → create pay groups and CTC slabs → set proration/lock/deduction rules → associate employees → use those inputs in payroll processing.

**Limits:** the presence of PF/ESI settings does not validate calculation accuracy. PT, TDS, old/new tax-regime selection, statutory returns, and effective-date maintenance were not established. No CTC calculation or rule update was submitted.

### 4. Leave policy configuration and transitions

Routes: `/hrms/leave-structure`, `/hrms/leave-structure/transition`.

**Observed UI:** company-scoped leave plans with effective dates; paid/unpaid leave types and yearly quotas; renewal control. The transition screen provides employee scope, target plan, transition method, and unused-leave handling.

**Workflow:** configure plan and quotas → assign employees → receive leave applications → use renewal or plan transition when policy changes.

**Limits:** no balances were changed. Automatic accruals, carry-forward calculations, and the website's “zero balance loss” outcome require validation with controlled examples.

### 5. Shift master, weekly patterns, and roster board

Routes: `/hrms/roster`, `/hrms/roster?tab=weekly_patterns`, `/hrms/roster?tab=roster`.

**Observed UI:** shift names/codes, start/end times, break minutes, company scope, overtime permission, and status. Weekly Patterns displays employees against Monday–Sunday. Roster Board displays employees against dated days. Assignment interfaces support organizational/employee scope, selected shifts, date periods, and notes.

**Workflow:** define shifts → assign weekly defaults → assign dated exceptions/rosters → review shift-change and overtime applications.

**Limits:** no roster was assigned. Peer-to-peer swaps, automated scheduling, collision prevention, and actual biometric-to-roster matching were not tested.

### 6. Penalization, attendance capture, and overtime policies

Route: `/hrms/penalization-policy`.

**Observed UI:** late-arrival grace/occurrence tiers, work-hours deficits, missing-log penalties, settlement/deduction values, and overtime slabs/multipliers. Overtime configuration includes thresholds, minimum request hours, monthly maximums, and weekend/holiday multipliers.

Attendance rules expose office biometric and web/mobile check-in switches; office latitude/longitude/radius; location capture and shift tracking; WFH location/selfie/home-geofence options; and site location/selfie/tracking options. Device-detection/mapping controls are visible.

**Workflow:** choose company/branch policy scope → define allowed capture methods and location rules → define violation/overtime treatment → apply resulting attendance inputs to payroll.

**Limits:** no device was detected/mapped and no location permission or punch was submitted. Radius fields support describing configurable location/geofence rules; they do not prove polygon boundaries, GPS-spoof prevention, facial matching, or tamper-proof attendance. A selfie-capture requirement is not proof of biometric identity verification.

### 7. Holiday calendar

Route: `/hrms/holidays`.

**Observed UI:** date/name/status, company/business-unit/branch scope, description, and filtering/sorting.

**Workflow:** maintain scoped holidays → make them available to attendance, leave, roster, and overtime policies.

**Limits:** the calendar exists; downstream holiday calculations were not executed.

### 8. Employees and profile change requests

Routes: `/hrms/employees`, `/hrms/employees/profile-requests`.

**Observed UI:** employee directory with organizational placement, stage/status filters, and lifecycle links. The employee interface includes user-account/system-role assignment, reporting manager, shift, pay group, leave plan, employment type, joining/probation/confirmation dates, compensation, work location, document/resume/photo fields, and personal/banking information categories. No personal field values are reproduced here.

Profile Edit Requests has All/Pending/Approved/Rejected views and department/date filters. Spreadsheet import/export/template controls exist in the directory; none was used.

**Workflow:** link an employee to a user and organization → assign manager and policies → track probation/active service → review proposed profile changes → handle separation when needed.

**Limits:** permissions attached to role assignment, employee self-edit experience, and actual change-request approvals were not tested. Profile detail subpages and complete employment-history behavior were not exhaustively reviewed in this pass.

### 9. Probation reviews

Route: `/hrms/probation`.

**Observed UI:** in-probation, due-soon, overdue, and confirmed views; manager and probation-date columns. Evaluation fields cover performance/execution, attendance/punctuality, culture/teamwork, confirmation, extension duration, termination recommendation, notice/immediate mode, reason, and remarks.

**Workflow:** identify a due review → assess the three rating areas → recommend confirmation, extension, or termination → update the lifecycle stage.

**Limits:** no evaluation or confirmation was submitted. Automatic notice calculations and probation-to-offboarding transitions were not verified.

### 10. Offboarding policies and exit workspace

Routes: `/hrms/offboarding-policies`, `/hrms/exits`.

**Observed UI:** configurable clearance authorities/checklist points, company scope, ordering, mandatory sign-off, and status. Exit workspace includes Exit Cases, Clearance & NOCs, Asset Recovery, FnF Settlements, and Relieving Certificates.

Clearance interfaces cover IT/assets, facilities/admin, finance/payroll, HR operations, and reporting manager, with status, deduction amounts, and remarks. Exit approval has last-working-day/notice-shortfall fields. FnF finalization exposes settlement channel, payment method/reference, notes, and an explicit managerial override for pending clearances.

**Workflow:** register separation → review last working day/notice → collect departmental clearances → reconcile assets and dues → finalize settlement → issue the applicable exit certificate.

**Limits:** no approval, settlement, or certificate generation was performed. Gratuity calculations and instant document generation remain unverified. The observed override means website language describing an unconditional hard block on settlement should be qualified.

### 11. Document masters, templates, and employee registry

Routes: `/hrms/documents-master`, `/hrms/documents`.

**Observed UI:** document masters, categories, templates, upload responsibility, mandatory/approval/signature requirements, expiry/reminder controls, and employee view/download permissions. Registry distinguishes employee-uploaded and HR-uploaded documents, with pending-upload/verification/signature, approved, and rejected states.

The upload interface offers a local file or generation from a document template, employee/category/master selection, expiry, and HR signer/signature fields.

**Workflow:** define document requirements/template → collect or generate a document → review/sign according to its configuration → track status and expiry.

**Limits:** no file was uploaded, generated, signed, or downloaded. Signature controls do not establish an external e-sign provider, legal certification, delivery, or access-control correctness.

### 12. Asset catalog and employee custody

Routes: `/hrms/assets`, `/hrms/assets-module`, `/hrms/assets-module/my-assets`.

**Observed UI:** asset categories and item catalog; registered/available units; unit codes, serial-number fields, condition, assignment status, purchase metadata; allocation dates/expected returns and return-condition notes. Custody workspace has Asset Requests and Allocation History, including pending/partially allocated/allocated/rejected status and bulk-allocation/rejection controls.

A category setting explicitly states that production-machinery purchases will be surfaced in Production for machine registration. A raw translation key, `hrms.assets.tbl_category`, appeared as a label in the asset interface.

**Workflow:** categorize/register assets → receive a request or make an allocation → track custody → record return condition → include outstanding assets in offboarding reconciliation.

**Limits:** no allocation, return, import, or export was performed. My Assets returned **Forbidden** for the reviewed account. Employee handover acknowledgments, warranty display, asset recovery outcomes, and the Production handoff were not verified.

### 13. Attendance administration and corrections

Routes: `/hrms/attendance`, `/hrms/attendance/my-attendance`.

**Observed UI:** date-grouped attendance summaries, Employee View and Correction Requests controls, status filters for present/WFH/late/half-day/absent/leave, and correction fields for approved check-in/check-out and rejection reason. Add/import/export/template controls are present.

**Workflow:** capture attendance → review exceptions → receive a correction request → review times and reason → pass accepted attendance into payroll.

**Limits:** no attendance record or correction was submitted. My Attendance returned **Not Found**; dashboard regularization/full-log shortcuts point to that route. Web timers, employee-side corrections, actual device sync, and payroll recalculation were not verified.

### 14. Leave applications and encashment

Route: `/hrms/leaves`.

**Observed UI:** Leave Applications and Encashment Requests tabs; leave type, start/end dates and sessions, reason, attachment, notification members, requested encashment days, review/rejection, and cancellation controls. Pending/approved/rejected views exist.

**Workflow:** employee requests leave or encashment → approver reviews → status changes → approved leave affects attendance/balance; approved encashment contributes to settlement/payroll.

**Limits:** those downstream effects are inferred. No request, withdrawal, cancellation, or encashment calculation was executed.

### 15. Work from home

Route: `/hrms/wfh`.

**Observed UI:** date/session range, reason, attachment, WFH coordinates, pending/approved/rejected status, rejection and cancellation fields.

**Workflow:** request WFH with location context → review → use the applicable WFH attendance policy during the approved period.

**Limits:** no request or location mapping was submitted; enforcement and notifications remain unverified.

### 16. Shift changes and overtime applications

Route: `/hrms/shift-overtime`.

**Observed UI:** Shift Change Applications and Overtime Applications tabs. Shift requests support change type, effective period, recurring weekdays, requested shift, reason, attachment, and cancellation. Overtime shows requested/approved hours, date/time window, compensation type, and review status.

**Workflow:** request a shift exception or overtime → manager reviews period/hours/compensation → accepted inputs contribute to the roster and payroll.

**Limits:** no application was submitted. Peer swaps, automatic authorization, and exact compensation calculation were not verified.

### 17. Expense master and approval policies

Route: `/hrms/expense-policy`.

**Observed UI:** expense categories; policies/workflow configuration scoped by company, unit, branch, department, and designation; one/two-level approval-related fields, first/second approver role, amount threshold, default workflow, and status.

**Workflow:** maintain expense categories → define scoped routing/thresholds → attach the applicable policy to submitted travel/expense requests.

**Limits:** role routing fields do not prove a universal manager → department head → HR/finance chain for every HR request. Escalations, delegation, and proxy sign-offs were not verified.

### 18. Travel, advances, and expense reports

Route: `/hrms/travel-expense`.

**Observed UI:** Travel Requests, Cash Advances, and Expense Reports. Tables include destination/dates/budget, advance amount/purpose, claim items/totals, and status. Review fields include approved travel budget and individual expense-item decisions/rejection reasons. Advance states include approved/disbursed/settled; report states include draft/submitted/approved/paid.

**Workflow:** request travel → review budget → request and settle an advance → submit expense items → approve eligible items → reimburse/reconcile.

**Limits:** no travel request, claim, disbursement, or reconciliation was performed. Receipt validation, automatic policy enforcement, ledger posting, and payroll reimbursement remain unverified.

### 19. KRA/KPI appraisals

Route: `/hrms/kra-kpi`.

**Observed UI:** All Scorecards, Appraisal Cycles, KRA & KPI Library, and Role Templates. Cycles include evaluation dates, deadlines, goals/competency weighting, and frequency. KPI definitions include unit, direction/calculation, target, and weight. Assignment supports employee/department scope and template packs.

Stage filters expose Draft → Goals Submitted → Goals Active → Self-Reviewed → Manager-Reviewed → Calibrated → Completed & Signed.

**Workflow:** build KRA/KPI library → create cycle/template → assign scorecards → set goals → self-review → manager review/calibration → completion/sign-off.

**Limits:** the stage list is observed; progression and scoring were not tested. No individual scorecard review was submitted or complete scoring formula verified.

### 20. Goals and OKRs

Route: `/hrms/goals`.

**Observed UI:** Company & Strategic, My & Team Goals, Cascading Alignment Tree, and Cycles & Pillars. Objective ownership/scope, department/employees, parent goal, priority/due date, key-result metric/unit/target, progress check-in, health, notes, and blockers are supported in the interface.

**Workflow:** define cycle/pillar → establish strategic objective → align team/individual objectives → add key results → check in progress and risks.

**Limits:** no goal or check-in was created. Automatic links to appraisal scores, compensation, or projects were not established.

### 21. 360° feedback

Route: `/hrms/feedback-360`.

**Observed UI:** campaigns/cycles, reviews to complete, evaluations/reports, peer approvals, competencies/question bank. Controls cover nomination/submission deadlines, participants, anonymous peer/upward feedback, self-nomination, manager approval, question type, and target reviewer type. Stages include draft, nomination, collection, manager review, and completed.

**Workflow:** define competency questions/cycle → nominate reviewers → approve nominations where required → collect feedback → manager review → publish evaluation/report.

**Limits:** no feedback was submitted. Anonymity protection, report visibility, aggregated scoring, and notification delivery were not tested.

### 22. Performance improvement plans

Route: `/hrms/pip`.

**Observed UI:** active/past plans, category master, policy templates; employee/manager, category, template, review frequency, start/end dates, and reason. Status options cover active, under review, successful completion, extension, reassignment, and failed/terminated outcomes.

**Workflow:** identify concern → initiate scoped plan/template → conduct check-ins → record final outcome or extension.

**Limits:** no populated plan review or final outcome was exercised. Employee acknowledgments and automatic separation handoff remain unverified.

### 23. Internal helpdesk and knowledge base

Routes: `/hrms/helpdesk`, `/hrms/helpdesk/categories`, `/hrms/helpdesk/kb`.

**Observed UI:** all/my/assigned/unassigned/overdue/resolved queues; requester/agent/priority/status/SLA columns; submission fields for category, subject, description, and attachments. Category settings include SLA hours, default-agent routing, and confidentiality. Knowledge base includes category filters, articles, publication control, and full-guide links.

**Workflow:** find guidance → raise a categorized ticket → assign/default-route it → track SLA → resolve and use recurring answers in the knowledge base.

**Limits:** tickets were not created or changed. Individual ticket conversations, CSAT ratings, automatic FAQ suggestions, confidentiality enforcement, and actual escalation delivery were not verified. Full knowledge-base articles were not individually reviewed.

### 24. SOP management

Route: `/hrms/sop`.

**Observed UI:** SOP Directory, My SOPs, Categories Master; version/criticality/status/compliance columns. Fields cover department, review interval, summary/objective/scope/prerequisites, audience, PDF attachment, ordered step content/checklists, acknowledgment deadline, mandatory sign-off, and auto-assignment to new hires.

**Workflow:** define/version a procedure → assign its audience → collect acknowledgment/compliance → review on the configured cycle.

**Limits:** no procedure was created or acknowledged. Assignment, overdue reminders, and compliance calculations were not tested.

### 25. Broadcasts and announcements

Route: `/hrms/broadcasts`.

**Observed UI:** published, scheduled/draft, archived/expired views; category/priority/audience; content, document/banner attachments, schedule/expiry, required acknowledgment, comments, dashboard banner, and email-dispatch controls. Read/acknowledgment rate columns are present.

**Workflow:** choose audience → prepare announcement → publish/schedule → request acknowledgment → monitor read/acknowledgment status → archive/expire.

**Limits:** no broadcast was published, opened, liked, commented on, or acknowledged. Actual email delivery, threaded discussions, likes, and pinning were not established.

### 26. Recruitment requisitions, candidate bank, and pipeline

Routes: `/hrms/recruitment`, `/hrms/recruitment/requisitions`, `/hrms/recruitment/candidates`, `/hrms/recruitment/pipeline/:id`.

**Observed navigation:** `/hrms/recruitment` leads to requisitions. A linked pipeline screen was opened read-only.

**Observed UI:** requisition department/designation, vacancy count, experience range, work mode/employment type, priority, target joining date, skills, description, and open/pending-approval/closed states. Candidate bank has requisition/source, experience, notice period, current-role/location categories, and resume attachment controls.

Pipeline stages are **Applied, Screening, Interviewing, Offer Sent, Hired, Rejected**. Stage-move controls, interview rounds with date/interviewer/meeting-link fields, and offer-template/designation/department/annual-CTC/joining-date/signature fields are present.

**Workflow:** authorize requisition → attach candidates → screen → schedule interview rounds → prepare offer → move successful candidate to hired → create/link employee onboarding.

**Limits:** no candidate was moved or document downloaded. Drag-and-drop, structured interviewer scoring, one-click employee conversion, job-board publication, and requisition salary-band limits were not verified. Offer CTC fields do not establish requisition-level salary-band enforcement.

### 27. Payroll operations and self-service payslips

Routes: `/hrms/payroll`, `/hrms/payroll/my-salary`.

**Observed UI:** monthly run list and processing control, month/calculation period, pay-group or employee selection, lock/paid states, payout status, and bank-file export link. Employee payout columns include loss-of-pay days, base gross, salary deductions, ad-hoc components, overtime, retro refunds, and net payout. An ad-hoc component interface includes date period, target scope, amount, and remarks. Status filtering includes paid/approved and withheld.

My Salary & Payslips opens with release month, calculation period, bank-account, net-payout, status, and action columns.

**Workflow:** finalize attendance/variable inputs → choose month and employees/pay group → compute/review the run → handle withheld payouts → complete payout → prepare bank file/payslip → expose released salary information.

**Limits:** no payroll was run, payout completed, bank file exported, or payslip downloaded. Calculation correctness, bank-file format/acceptance, password protection, email/WhatsApp dispatch, direct deposits, statutory filings, and automatic journals remain unverified. The self-service list opens for this session; an employee role's access was not tested.

## CRM: features and workflows

Entry: `/crm/dashboard`. Screens reviewed include `/crm/leads`, `/crm/deals`, `/crm/deals/kanban`, `/crm/accounts`, `/crm/customers`, `/crm/leads/track-status`, `/crm/masters/lead-statuses`, `/crm/masters/deal-statuses`, `/crm/settings`, `/crm/approvals/quotations`, and `/crm/quotations`. Blank lead, deal, account, and quotation forms were opened without saving.

| Feature group | Observed UI and scope | Limits |
| --- | --- | --- |
| Dashboard and sales performance | Executive overview and sales-velocity/representative view; period, representative and campaign filters; lead/deal/revenue/conversion summaries; pipeline flow/chart; campaign, ad-set and creative dimensions. | Metric definitions, revenue attribution, refresh latency and prediction accuracy were not validated. |
| Lead capture and qualification | B2B/B2C forms; company and contact sections; tax ID, industry, source, owner, priority, requirements, expected revenue/date and product quantities. List statuses: New, Qualified, Dealing, Won, Lost. | A source dropdown containing a channel does not prove an active ingestion integration for it. |
| Lead ownership and activities | Bulk representative-assignment controls; interaction logging with type/outcome/notes; next-activity title, time and duration; guest/tagged-person fields and Calendar/Meet options. | Lead detail exposes Overview, Timeline & Audit, History and Interactions, plus Convert to Deal and attachment/follow-up controls. No assignment, conversion, log, appointment, notification or calendar event was created. |
| Deal pipeline | Account/contact/owner, expected revenue, expected closing date, source and product lines; list and Kanban destinations; stage-change/discussion/activity controls; health/value information. Actual stages: Qualification, Needs Analysis, Proposal, Negotiation, Won, Lost. | Deal detail also exposes quotations/proposals, sales orders, audit/history and scheduled-call views, plus Sync AI Health and Generate AI Draft Reply controls. Neither AI action was invoked; drag/drop persistence, scoring, forecasting and reply quality remain untested. |
| Account and customer records | Company accounts, account manager, primary contact, GSTIN, deals and lifetime-value columns; account form includes credit limit and buying-center role; separate active/inactive customer directory. | Account/customer synchronization, credit-limit enforcement and completeness of a 360° history need transactional evidence. |
| Customer buying-center roles | Account form options include Purchase Decision Maker, Technical Evaluator, Finance/Accounts, Influencer and End User. | These are contact classifications, not ERP login roles. |
| Lead-to-order tracking | Tracking screen exposes Lead, Quotation, Store Inventory, Sales, PR, PO and GRN stages/tabs. | The UI links the concepts; a complete historical transaction was not reconciled end to end. |
| Configurable lifecycle masters | Lead-status and deal-stage masters expose name, color/order, custom/system status distinction and win probability for deals. | Status reordering and downstream rule changes were not exercised. |
| Quotation governance | Quotation list, creation and approval queue; configurable multi-stage approval versus fast-track/auto-approved path; rejection reason and rework-related states. | Approval permissions, sequence, notifications and auto-approval logic were not exercised. |

**Inferred workflows:**

1. **Lead to opportunity:** enter an inquiry with its source/owner/products → qualify it → record interactions and schedule follow-up → manage an account-linked deal → progress through configured stages → mark Won or Lost. Automatic lead conversion and round-robin assignment are unverified.
2. **Account relationship management:** create an account and primary buying contact → associate deals and representatives → inspect activities and commercial history. The account form supports credit-limit configuration; actual sales blocking requires separate verification.
3. **Quote approval:** select customer/products/prices/taxes and validity → save Draft or send for approval → review/rework/reject/approve according to settings → send/accept quotation → continue into Sales. Not every displayed status is a mandatory sequential step.
4. **Operational follow-through:** use lead tracking to inspect quotation, stock, sales and procurement stages; use dashboard filters to review pipeline and campaign performance.

**Website opportunities:** show actual lead/deal stages, account buying-center roles, linked-document tracking and configurable quotation approvals. Meta setup supports a specific lead-capture configuration story; other channel names, automatic territory routing, loss-reason analytics and AI forecasting need independent proof.

## Sales: features and workflows

Entry: `/crm/quotations`. Sales shares quotation screens with CRM rather than having a separate quotation namespace. Reviewed `/sales/orders`, `/sales/invoices`, `/sales/payments`, `/sales/returns`, `/sales/settings`, and their available blank creation forms.

| Feature group | Observed UI and scope | Limits |
| --- | --- | --- |
| Quotations | Customer, salesperson, issue/expiry dates, product quantity, unit price, tax, discount and notes; approval-related lifecycle and queue. | Quote detail includes Send via WhatsApp and Send via Email controls with recipient/message/PDF-related fields. No message was sent; revisions, PDF quality, pro-forma output and customer acceptance mechanisms need detailed evidence. |
| Sales orders | Customer and quotation references, representative, dates, payment terms, billing/shipping addresses, freight terms/amount; item-level or order-level discount and tax choices; CGST/SGST or IGST. List includes order amount, invoiced amount, balance and delivery-challan information. | Price-list automation, volume slabs, credit blocking, stock reservation and tax arithmetic were not executed. |
| Order lifecycle | Draft, Confirmed, Partially Shipped, Shipped and Cancelled options. | Partial shipment and cancellation reversal correctness remain unverified. |
| Invoicing | Creation against Sales Order or Dispatch Order/Delivery; source reference, invoice/due date, payment terms, discount, tax, freight tax and adjustments. List includes SO/dispatch references and e-invoice/e-way-bill status columns. | Posting, IRN/e-way-bill generation, duplicate prevention and ledger entries were not tested. |
| Invoicing policy | Settings provide SO Only, Dispatch Only and Both, with explanatory text. | Policy enforcement and migration behavior were not exercised. |
| Receipts | Customer payment list and blank receipt form with date, amount, reference/notes, allocation destination and order/invoice links. Method options include bank transfer, cash, cheque, UPI/QR and card; these are classifications, not proof of connected payment rails. | Allocation, bank reconciliation, online gateway capture and accounting settlement were not tested. |
| Sales returns | Against Sales Order or Direct Return; optional invoice reference, customer/reason/date; item quantity, serial information, restock warehouse and refund unit price. | Stock restoration, credit-note generation, tax reversal and actual refund are unverified. |
| Dispatch connection | Orders/invoices connect to inventory dispatch; dispatch form shows ordered, available, reserved, dispatched, remaining and dispatch quantities. | Physical fulfillment, reservation correctness and proof of delivery were not demonstrated. |

A representative `/sales/orders/:id` detail page has Details, Delivery Challans/DO, Invoices, Payments and Returns tabs, with Create Invoice and Record Receipt/Advance links. Those links support document navigation; no linked document was created.

**Inferred workflows:**

1. **Quote to cash:** CRM quotation → applicable approval → customer order → confirm → fulfill all or part through Inventory dispatch → invoice according to configured policy → record receipt → review balance/payment status.
2. **Invoice from dispatch:** select dispatch/delivery source → review customer, product quantities, taxes/freight → post invoice → check GST/e-invoice status if that integration is configured. Configuration and status columns do not prove a successful government API response.
3. **Return and refund:** identify original order/invoice or direct return → identify products/serials and restock warehouse → record return → process authorized refund/credit and stock/accounting changes. The latter processing steps are inferred and untested.

Invoice status options include Draft, Posted, Partially Paid, Paid and Cancelled. A visible status describes a supported UI state, not proof that all permitted transitions were exercised.

**Website opportunities:** describe the configurable order-versus-dispatch billing policy, partial fulfillment and document links. Dynamic price books, customer payment portals, sales commissions, automatic credit stops and government API latency need verification before being presented as confirmed capabilities.

## Inventory: features and workflows

Entry: `/supply-chain/dashboard`. This dashboard presents Sales Order, Purchase Order and GRN views alongside inventory/procurement shortcuts. Inventory includes demand and dispatch operations in addition to stock masters.

| Feature group and routes | Observed UI and scope |
| --- | --- |
| Item master: `/inventory/products`, `/inventory/products/create` | Goods/services; single items/variants; Trade/Manufacture procurement choice; finished good, semi-finished good, raw material, component and service classifications; SKU/UOM, barcode/UPC/EAN/ISBN, HSN/GST, selling/cost price, preferred supplier, sales/purchase/inventory-account fields, dimensions/weight, photos/notes; attribute/variant grid and warehouse opening-stock inputs. |
| Stock planning and valuation setup | Reorder point, minimum order quantity and order multiple; FIFO or Weighted Average valuation choice; serial and batch tracking switches. Default production-model options are Pure Manufacturing, Complete Subcontracting, Subcontracting with Company Material and Hybrid Manufacturing + Subcontracting. |
| Warehouses: `/inventory/warehouses` | Warehouse code/name, default/active status and address configuration. Multiple warehouse selections also appear in stock and document forms. |
| Demand fulfillment: `/inventory/material-requirements` | Sales-order-linked requirements, customer/date/carrier/tracking information; Pending, Processing, Picked, Packed, Ready, Dispatched, Delivered and Cancelled statuses. |
| Shortage/procurement: `/inventory/mrp-shortage` | Shortage view and purchase-requisition connection. An empty state limits inspection of populated shortage calculations. |
| Production material requests: `/inventory/material-requests` | Production order/slip references and requested/issued progress; Pending Issue, Partially Issued and Completed states. |
| Dispatch: `/inventory/dispatches`, `/inventory/dispatches/create` | Pending/all dispatch views, order availability and progress; source/customer-invoice selection; warehouse and ordered/available/reserved/dispatched/remaining quantity columns; transporter/carrier, freight, vehicle, shipping and instruction fields. The `/sales/dispatches/create` link resolves to the inventory creation route. |
| Transporter master: `/platform/transporters`, `/platform/transporters/create` | Transporter code/ID, road/rail/air/sea/multimodal choice, GST/PAN, TDS section/rate and declaration fields, fleet/service zones, payment terms and operational/contact/bank sections. Values were excluded from this report. |
| Serials: `/inventory/serial-numbers` | Product/warehouse, inward GRN/purchase-cost and outward invoice/dispatch references; Available, Sold, Reserved, Returned and Damaged states. |
| Batches/lots: `/inventory/batches` | Product/warehouse, manufacture/expiry dates, expiry filtering, inward and available quantities. |
| Transfers: `/inventory/transfers`, `/inventory/transfers/create` | Source/destination warehouses, date/reason, item quantities and serial-number entry; Draft, In Transit, Completed and Cancelled states. |
| Adjustments: `/inventory/adjustments`, `/inventory/adjustments/create` | Warehouse, date, reason/notes, line type/quantity/unit cost and serials; Draft, Approved and Cancelled states. |
| Ledger: `/inventory/transactions` | Product/warehouse IN/OUT entries with date, quantity, balance, unit cost, total value and reference document. |
| Reservations: `/inventory/reservations` | Reserved quantity, source document and expiry; Active, Completed, Released and Expired states. |
| Barcode printing: `/inventory/barcodes` | Product versus serial print modes, product/warehouse, format and copy-count controls. Nothing was generated or printed. |
| Stock reports: `/inventory/reports/low-stock`, `/inventory/reports/valuation` | Low-stock/reorder shortage with Raise PR control; warehouse quantity, unit cost and asset-value view. No PR was raised and no report was exported. |

**Inferred workflows:**

1. **Define stock:** establish UOM/item/variant/procurement method → configure tracking/valuation/reorder settings → associate warehouses → receive or establish stock → inspect ledger, serial/lot and valuation views.
2. **Fulfill sales:** inspect sales material requirement → assess available/reserved stock → procure or manufacture a shortage → pick/pack/ready stock → create and progress dispatch → link delivery/invoice. The form's quantity columns support this sequence; reservation and issue logic are untested.
3. **Supply production:** review production-linked material request → select stock/warehouse → issue partially or completely → inspect stock/WIP references. Actual consumption/posting was not performed.
4. **Control stock:** request a warehouse transfer or adjustment → review/approve as applicable → complete movement → inspect balances and serial locations.
5. **Replenish:** review low-stock/MRP shortage → raise requisition → Purchase RFQ/PO → GRN → inspect received stock and valuation. Reorder fields do not by themselves establish predictive EOQ or autonomous buying.

**Limits:** stock arithmetic, concurrency, negative-stock prevention, reservation enforcement, FIFO/average calculations, expiry-based FEFO selection, quarantine, automated replenishment and physical scanning were not tested. The inspected warehouse UI does not establish a 3D bin/pick-route interface. Batch expiry tracking is narrower than automatic FEFO enforcement.

## Purchase: features and workflows

Entry: `/purchase/vendors`. Review included supplier setup, demand consolidation, RFQs, requisitions/orders and approvals, goods receipt, freight/landed costs, bill matching, bills, payments/advances and returns. Blank forms were inspected without submitting.

| Feature group and routes | Observed UI and scope |
| --- | --- |
| Suppliers: `/purchase/vendors`, `/purchase/vendors/create` | Active/inactive supplier master, code/company, GST/PAN, addresses, bank details, payment terms and opening balance. No actual values are reproduced. |
| Purchase requisitions: `/purchase/requisitions`, `/purchase/requisitions/create` | Required/expected dates, item destination warehouse/quantity/estimated cost; manual, Sales Order, Manufacturing Order, production material-request, material-requirement and requisition-slip references. List also exposes a subcontract-service source category, source document and reminder information. |
| Consolidation: `/purchase/requisitions/pending-items` | Assigned Suppliers and No Supplier tabs; Bulk POs/Bulk RFQs controls. No bulk action was performed. |
| RFQs: `/purchase/rfqs`, `/purchase/rfqs/create` | Source requisition, dates/notes and per-item multi-supplier assignments/estimated cost; Draft, Sent, Received, Confirmed and Cancelled statuses. A representative detail shows a supplier comparison matrix for rate/quantity/delivery/validity, payment terms/quotation reference/attachments, supplier portal links, Send RFQ and Create PO controls. Nothing was sent, saved or converted; portal tokens are excluded from the report and the supplier-facing portal was not opened. |
| Sourcing analytics: `/purchase/rfqs/savings-dashboard` | Department spend/savings and supplier RFQ wins/PO value; savings against quoted alternatives. Formula and realized savings were not audited. |
| Purchase orders: `/purchase/orders`, `/purchase/orders/create` | Warehouse/location, supplier, PR reference, order/delivery dates, freight; Stock, Asset or Expense line type, product/description, asset-category and account fields; quantity/rate, discount and CGST/SGST or IGST. Draft, Approved and Cancelled states; reminder information. |
| Approval queues: `/purchase/pr-approvals`, `/purchase/po-approvals` | PR/PO review controls, reasons and reminder-related interfaces. Approval behavior and segregation of duties were not tested. |
| Receipt queues: `/grns/pending`, `/grns`, `/grns/create` | PO ordered/received/remaining quantities, supplier and warehouse; receipt/challan dates, transporter/vehicle/LR details; item received, rejected and accepted quantities/rates. GRNs have separate store and billing statuses, plus Draft/Approved/Cancelled options. |
| Landed costs: `/purchase/landed-costs`, `/purchase/landed-costs/create` | GRN association, expense head/vendor/amount/tax mechanism and By Qty, By Value or Equal allocation basis; preview columns for base unit rate, allocated extra cost and new landed unit cost. Draft, Posted and Cancelled statuses. |
| Supplier bills: `/purchase/bills` | All Bills, Pending Inbound Freight and Pending Outbound Freight views; supplier invoice, due date, total/paid/balance; Posted, Paid, Partially Paid and On Hold states. |
| Freight/service bills: `/purchase/bills/create-service` | Outbound dispatch versus inbound GRN source; service vendor/head, reference, amount, GST, dates and notes; FCM and RCM tax choices. |
| Bill matching: `/purchase/bill-matching` | Quantity/price tolerance settings and Off, Warn, Hold modes; mismatch/override-reason controls. Off disables checks; Warn permits posting; Hold describes keeping mismatches out of the ledger until release. This is configuration evidence, not a tested posting result. |
| Payments: `/purchase/payments` | Supplier/bill association, payment method/reference, amount/type. |
| Advances: `/purchase/advances` | Supplier/PO-linked advance amount, method/reference and status. Recovery/allocation were not exercised. |
| Returns: `/purchase/returns`, `/purchase/returns/create` | Against goods receipt or direct return; supplier/reason/date; product, warehouse, quantity and rate; return/refund tracking. |

**Inferred workflows:**

1. **Procure to receive:** demand from sales, production or manual request → requisition → applicable approval → supplier allocation/consolidation → RFQ and comparison/confirmation where needed → draft/approve PO → receive some/all quantities through GRN → resolve rejected quantities → review received stock.
2. **Receive to pay:** receipt and supplier invoice → review bill matching under configured tolerances/mode → post or hold/release as applicable → record payment/allocate advance → review paid amount/balance. Automatic receipt-to-bill creation and ledger posting require separate evidence.
3. **Allocate landed cost:** select GRN(s) → add freight/other expense lines and tax/allocation basis → inspect allocation preview → post voucher → inspect new stock value. No valuation calculation or journal was verified.
4. **Freight settlement:** identify outbound dispatch or inbound receipt → create corresponding service bill → match relevant transporter/service-provider expense → settle through authorized payment process.
5. **Return to supplier:** select GRN or direct return → select warehouse/items/quantities → approve/complete return as applicable → reconcile inventory, supplier balance and refund/credit. Automatic debit-note/accounting treatment was not established.

**Website opportunities and limits:** use the real RFQ/consolidation, demand-source links, separate receipt/billing states and configurable bill-matching modes. A blanket “fraud-proof three-way match” promise overstates settings that allow Off and Warn. Budget blocking, approved-vendor restrictions, MSME 45-day enforcement, blanket rate contracts, multi-currency import processing and automatic debit notes were not verified by these screens.

## Production: features and workflows

Entry: `/production/dashboard`. This is a large module: engineering and resource masters, planning/scheduling, MES/WIP, quality, subcontracting, maintenance, traceability and intelligence. The dashboard explicitly presents Work Centers → Routings → BOMs → Production Orders → Schedules → MES → WIP → Quality as a navigation journey.

### Engineering and production resources

| Area and routes | Observed UI |
| --- | --- |
| Work centers: `/production/work-centers`, `/production/work-centers/create` | Department/Section/Work Center/Machine Group hierarchy, parent, physical location, type, capacity, efficiency, hourly cost/overhead, active shifts and production calendar. Types include machining, assembly, painting, packaging, QC, subcontract, warehouse, internal transport and maintenance. |
| Machines: `/production/machines`, `/production/machines/create` | Work-center assignment, code/type, manufacturer/model, capacity, installation and maintenance details; active/inactive/maintenance lifecycle options. One option displays the untranslated `production.decommissioned` key. |
| Operator qualifications: `/production/operator-skills`, `/production/operator-skills/create` | User/operator skill code with optional work-center/machine restriction and active qualification. Enforcement during assignment was not tested. |
| Shifts/calendars: `/production/shifts`, `/production/calendars`, respective `/create` forms | Start/end/break, overtime flag and active state; named/default calendars and working weekdays. Synchronization with HR shift masters is unverified. |
| Routings: `/production/routing`, `/production/routing/create` | Product/version/effectivity/default choice; auto/manual sequence numbering; operation sequence/name, expected yield, predecessor, parallel group, queue threshold, transfer batch/lag, instructions, work center/machine, setup/run/wait time, labor rate and QC gate. Outsourced operation fields specify supplier, material supply, input mode, lead time, cost/unit, service product and dispatch/return buffers. |
| BOMs: `/production/boms`, `/production/boms/create` | Product/base quantity/UOM, version/effective dates/revision reason, routing reference; Manufacturing, Engineering, Sales Kit, Phantom and Subcontracting BOM types. Separate usage contexts include Manufacturing, Engineering, Prototype and Costing; quantity choices include Fixed or Formula. Components include quantity/type/formula, UOM, scrap %, priority, line validity, alternatives/group. Components and Operations tabs exist. A representative BOM detail also includes Multi-Level BOM Explosion, Workflow & Routing, Estimated Material Cost Summary, Audit Log & History and Where Used. Version/approval/rejection controls are present; no revision was made and calculation accuracy remains unverified. |
| Engineering changes: `/production/ecos`, `/production/ecos/create` | BOM, Routing or Both change; product/proposed references, effective date, reason/description; Draft, Under Review, Approved, Released, Rejected and Closed states. |

**Inferred engineering workflow:** establish centers/machines/shifts/calendars/skills → define routing with sequencing, costing and QC requirements → associate component BOM/version → review/approve applicable masters → use approved definitions for a production order → handle later changes through revision/ECO governance.

BOM formula fields and routing dependencies are real UI evidence. Their evaluation, cycle detection, snapshot behavior and effect on already-released orders were not tested.

### Demand, planning and capacity

| Area and routes | Observed UI |
| --- | --- |
| Production orders: `/production/orders`, `/production/orders/create` | Sales Order Request, target product, BOM/routing, quantity and dates; production mode choices Standard, Batch/Lot, Serial or Batch & Serial; model choices Pure Manufacturing, Complete Subcontracting, Subcontracting with Company Material and Hybrid Manufacturing + Subcontracting; component availability/required/rate/amount preview; ordered/produced and planned/actual information. Draft, Released, In Progress, Completed, Closed and Cancelled states. |
| Plans: `/production/plans`, `/production/plans/create` | Sales demand reference, product/BOM/routing, target quantity and dates; Draft, Pending, Approved, MRP Generated, Released, Completed, Closed and Cancelled options. |
| Schedules: `/production/schedules`, `/production/schedules/create` | Production-order reference, start date and scheduling method; Forward and Backward choices. **Manual Scheduling is explicitly labelled “Coming Soon” in the creation form.** Its appearance in a list filter is not evidence of current availability. |
| Schedule views | `/production/schedules/calendar`, its Gantt layout, work-center view and dispatch board; scenario area `/production/schedules/scenarios` for what-if planning. Dispatch-board controls include Ripple Shift, Level Capacity, Pre-Release Check and Audit Log; none were invoked. Saving, applying and moving schedule operations were not attempted. |
| Capacity: `/production/capacity` | Work Center Load, Machine Load, Daily Grid and Scheduled Operations List; available/setup/run/required hours, utilization, downtime/overload/conflict information; reschedule machine/start/reason controls. |
| Exceptions: `/production/planning-exceptions` | Demand/order quantity and overall-risk/exception indicators. |
| Operational dashboard: `/production/dashboard` | Pending-demand, ready-to-start, active and at-risk queues; machine state and subcontract procurement/dispatch/vendor/QC queues. |

**Inferred planning workflow:** inspect sales demand → choose product/BOM/routing and production model → prepare plan/order → review material shortages and procurement needs → review/approve/release as applicable → forward/backward schedule against resources → inspect conflicts/calendar/dispatch views → route operations into MES. Automatic MRP expansion, scheduling optimization, scenario isolation and automatic sales-request conversion are unverified.

### MES, operator execution, WIP and traceability

| Area and routes | Observed UI |
| --- | --- |
| MES overview: `/production/mes` | Order/product/work-center filters and links to machine/work-center boards, scheduling and order operations. |
| Operator work: `/production/mes/operator`, `/production/mes/operator/my-operations` | Operator dashboard and assigned operations; operation states Ready, Waiting, Running, Paused, Completed; assignment states Pending Acceptance, Accepted, Rejected, Completed. No job was accepted, started, paused or completed. |
| Execution boards: `/production/mes/work-centers`, `/production/mes/machines` | Work-center queues and machine details; dashboard machine states include Running, Idle, Setup, Breakdown, Maintenance and Offline. A visible board is not proof of connected PLC/device telemetry. |
| WIP: `/production/wip` | Order and detailed-subcard views; work center, batch/operation/machine association, quantities and WIP/finished-good values; Active, Quality Hold, Rework and Completed states. |
| Scanner: `/production/mes/scanner` | Explicitly a **MES Barcode Scanner Simulator**, with code input and Send Scan Event control. It was not used and is not evidence of a tested camera/scanner integration. |
| Scan logs: `/production/mes/scan-logs` | Scan/entity type, resolution, device/user/time columns. No logs were exported. |
| Timeline: `/production/mes/timeline` | Filters for order, machine, operator, severity, source, batch/serial and dates; service-source categories for orders, scheduling, MES, batches, serials, machine states, downtime and system. Source labels do not prove an event bus or delivery guarantees. |
| Traceability: `/production/mes/traceability` | Production Batch, Serial Number, Order and Inventory Lot targets; Forward, Backward or Both direction. No trace query or exported genealogy was generated. |

A representative `/production/orders/:id` detail exposes **Overview, Production Readiness, Operations Routing, Progress Logs, WIP Tracking, Component Plan, Material Status, Issued Materials, Material Requisitions, Scrap & Rework, Routing Variance, Planning Risk Analysis, Cost Analysis, Cost Adjustments and Audit Trail Events**. Subviews include a component-plan matrix, hierarchical process/BOM tree, quality inspections, scrap, reusable offcuts/remnants and rework. Cost tables compare planned/actual/variance and automatic/manual/final costs, including daily/cumulative views. Forms exist for progress time/quantity, issue/return materials, finished-goods receipt and quality status, additional material requests linked to PR, operator assignment and manual cost adjustments. None were submitted.

**Inferred execution workflow:** release scheduled operations → assign qualified operator/resource → accept/start operation → record execution, quantities/time and exceptions → inspect operation/WIP progress → meet QC gates → complete finished output → review timeline and lot/serial traceability. Actual consumption, yield, device reporting and inventory/accounting transfers remain untested.

**Inferred exception workflow:** machine/quality interruption → visible downtime/hold state → investigate/reassign or rework → clear authorized restriction → resume operation → inspect updated schedule/WIP history. Displayed states do not establish blocking rules.

### Quality management

| Area and routes | Observed UI |
| --- | --- |
| Quality dashboard: `/production/quality/dashboard` | Inspection and NCR summaries/queues by production context. |
| Quality plans: `/production/quality-plans`, `/production/quality-plans/create` | Version, scope/product/work center, approval status; numeric, pass/fail or text parameters, min/max/UOM and mandatory flags. Product, work-center and general-process scopes appear in the creation form. |
| Inspections: `/production/quality/inspections`, `/production/quality/inspections/create` | Plan template, incoming/in-process/final stage, order and operation reference; Draft, Submitted, Review Required, Approved and Audited states. |
| Deviations: `/production/quality/deviations` | Temporary/time-bound, permanent and customer-waiver concepts with expiry date/quantity controls. |
| NCRs: `/production/quality/ncrs` | Defect category/disposition, inspection/order and dates; Open, Under Review, Disposition Pending and Closed states. Blank NCR form was inspected where available. |
| CAPA: `/production/quality/capas` | NCR, responsible owner/target, investigation and action lifecycle; Draft, Investigation, Active, Implementation, Verified, Effective and Closed states. Blank CAPA form was inspected where available. |
| Rework: `/production/quality/rework` | NCR/order, estimated/actual cost and labor hours; Draft, Scheduled, Running, Completed, Failed and Scrapped states. |
| Scrap: `/production/quality/scrap` | Reason/category, quantity, cost and disposal status. |

**Inferred quality workflow:** configure/approve plan → inspect incoming material or production step/output → submit/review results → release acceptable output or raise NCR → determine deviation, rework, scrap and/or CAPA → verify effectiveness and close. Enforcement of production holds, mandatory readings, reinspection and scrap accounting was not exercised.

### Subcontracting

Routes: `/production/subcontract/delivery-challans`, its `/create` form, `/production/subcontract/analytics`, and `/production/settings`.

**Observed UI:** routing distinguishes Company Supplied versus Vendor Supplied material and BOM Raw Materials versus Previous Operation WIP input. It also carries supplier/service-product/lead-time/rate/buffer fields. Subcontract challans contain supplier, warehouses, material quantities, dispatch/expected-return date and transport references. The creation page separately exposes Save Draft Gate Pass and Create & Dispatch Delivery Challan (Deduct Stock); neither was clicked.

Analytics includes on-time %, average delay, acceptance/rework, cost variance and overdue operations blocking the next operation. Settings expose **Manual PR → PO**, **Auto Draft PO**, and **Auto Approved PO below a financial threshold**. These are configuration choices, not verified generated purchase documents.

**Inferred workflow:** mark outsourced routing step and material responsibility → create subcontract procurement under selected policy → dispatch company stock/WIP where applicable → track supplier return → inspect/rework/accept → continue downstream operation → reconcile vendor service cost. The production-order form explicitly names four models: Pure Manufacturing, Complete Subcontracting, Subcontracting with Company Material and Hybrid Manufacturing + Subcontracting. These model choices are distinct from routing's material-supply/input choices. Stock ownership, billing and return logic for each model remain untested.

### Maintenance and manufacturing intelligence

| Area and routes | Observed UI |
| --- | --- |
| Maintenance dashboard: `/production/maintenance/dashboard` | Due preventive schedules, work-order queue, Generate Due Work Orders and Report Breakdown controls. Neither was used. |
| Maintenance work orders: `/production/maintenance/work-orders`, `/create` | Machine, Preventive/Breakdown/Calibration type, priority, technician, planned times and scope/problem; Draft, Scheduled, In Progress, Completed and Cancelled states. |
| Preventive schedules: `/production/maintenance/schedules`, `/create` | Machine/name, Preventive/Calibration/Inspection type, frequency in days/weeks/months, duration, last-completed date and checklist. |
| Variance analysis: `/production/variances` | Product/operation recommendations, evidence/sample counts, average variance, planned/actual time and scrap/alternative-machine information. Automated recommendation quality is unverified. |
| Intelligence dashboard: `/production/intelligence/dashboard` | Work-center/period filters and layout preference controls. Preferences were not saved. |
| Andon: `/production/intelligence/andon` | Monitor-board interface. Live refresh, thresholds and real machine connectivity were not demonstrated. |
| KPI targets: `/production/kpi-targets` | OEE, availability, performance, quality, throughput, utilization, scrap and downtime targets. Displayed targets do not validate OEE calculation. |
| Alerts: `/production/intelligence/alerts` | Threshold/severity/active configuration and timestamped event view. The audit-evaluation action was not invoked. |
| Reports: `/production/intelligence/reports` | Parameter forms for machine, work-center, downtime, production-order summary, daily production, material consumption, cost variance, order detail and sales-order tracking. Report generation/export was not invoked. |

**Inferred maintenance workflow:** configure recurring machine schedule → identify due work or report breakdown → assign technician/work order → perform/checklist/complete maintenance → update machine availability and next due date. Meter-based triggers, spare-part consumption and hard lockout during maintenance are unverified.

**Inferred management workflow:** inspect production/quality/downtime data → compare KPI targets and variances → investigate drilldowns/reports → authorize corrective action, maintenance or replanning. No AI diagnosis, automatic intervention, labor-to-GL posting or measured OEE gain was established.

## Administration: features and workflows

Entry: `/platform/subscription`. This seventh visible ERP area supports commercial configuration, common masters, communications, integrations and access governance; it should not be omitted from the product map.

| Area and routes | Observed UI | Limits |
| --- | --- | --- |
| Subscription/module selection: `/platform/subscription` | Available module/plan choices and Pay & Install Selected Modules/Switch Plan controls. | No subscription, payment, installation or entitlement was changed. |
| Payment terms: `/platform/payment-terms`, `/create` | Name/code, due days, active status and description for invoice/PO terms. | Due-date calculation and consistent document propagation were not tested. |
| Notification rules: `/platform/notification-rules`, `/create` | ERP event trigger/module, recipient roles/users, creator/assigned-executive flags, title/body templates, action route/icon and active setting; module filters include CRM, Sales, Inventory, Purchase, Production, HRMS and Documents. | No rule saved, event triggered or delivery received. |
| Email: `/platform/email-settings` | Company/branch-scoped SMTP configuration, sender/host/port/encryption/default/authentication and test controls. | No stored secrets copied, configuration changed or test email sent. Presence of settings does not prove successful delivery. |
| WhatsApp: `/platform/whatsapp-settings` | WhatsApp Web/device-linking setup, Node.js bridge URL/token fields, QR refresh/disconnect and test-message controls. | None were used. This is narrower than a verified employee self-service bot or official Cloud API integration. |
| GST: `/platform/gst-settings` | GSP provider/environment/authentication, company/branch seller configuration, e-invoice/e-way-bill options and Auto Generate IRN on Invoice Post flag. | No government request or invoice posting; response latency, entitlement/cost and regulatory correctness are unverified. |
| Meta leads: `/platform/meta-settings` | Scoped credentials/campaign guidance/token instructions, simulator, ingested-lead and webhook-log areas; owner/source/priority defaults. | No token tested or lead ingested. Meta configuration does not prove other source-dropdown channels are connected. |
| Users: `/access/users`, `/access/users/create` | Users/roles directory, account/password controls and multiple-role selector. | No account created/reset; user names, emails and password data excluded. |
| Roles: `/access/roles`, `/access/roles/create` | Role name/slug/level/description; list visibility/permission columns. | Full permission editing/enforcement matrix and the supplied account's exact assignment were not verified. |
| Audit: `/access/audit-log` | Actor/time/action/subject/target and before/after concepts. | Record values omitted; immutability, completeness and tamper resistance not established. |

**Inferred workflows:**

1. **Access setup:** define role → assign one or more roles to user → use module access → inspect authorized changes in audit history. A role list is not an authorization test.
2. **Event notification:** select module/event → choose roles/users/record participants → define templates/action route → enable rule → inspect notifications after an authorized business event. Actual dispatch and scope filtering remain unverified.
3. **Communication setup:** configure scoped SMTP or link a WhatsApp device/bridge → authorized owner verifies connectivity → inspect delivery/status logs. No connectivity tests were performed here.
4. **Sales integrations:** configure Meta mapping/webhook credentials → ingest inquiry into CRM; configure GST provider/seller → invoice posting optionally requests IRN → inspect e-invoice/e-way-bill status. Both outcomes are inferred from UI and were not executed.
5. **Common commercial setup:** configure payment terms → select them on sales/purchase documents; manage plan/module entitlement through the subscription page. Pricing and provisioning promises require owner confirmation.


## Roles and access evidence

The employee and user-assignment selectors expose the following **role labels**, not a verified permission matrix:

- Tenant Owner; Company Admin.
- HR Manager; Accountant; Auditor; Read Only User.
- Production Manager; Production Engineer.
- Sales Manager; Sales Executive.
- Inventory Manager; Purchase Manager.

The notification-recipient selector additionally includes **Super Admin**; this does not prove the supplied account has that role or that it is assignable through the inspected user form. The user creation selector displays the twelve assignment roles with “Global” labels, and the role list has Level, Visibility and Permissions columns. The blank role form exposes name/slug/level/description, not a complete permission matrix.

Organizational reporting-manager/department-head fields, expense approver-role fields, interviewers, helpdesk default agents, and offboarding clearance authorities establish several workflow responsibilities. They are not necessarily separate system roles.

The employee and line-manager personas described on the marketing site remain **unverified as separate login experiences**. The reviewed account had broad HR administrative visibility, but this review did not establish row-level permissions, confidential ticket access, anonymized feedback, cross-entity isolation, or which screens a Read Only User can access. The My Assets and Accounting/Project denials are observed access restrictions, not a complete RBAC test. Operator, customer and supplier personas are also unverified as independent authenticated experiences; an operator dashboard and RFQ supplier-portal link do not establish those users' permission scope.

## Connections across ERP modules

| Connection | Evidence | What remains unverified |
| --- | --- | --- |
| Organization → employees/policies | Employee, leave, roster, expense, holiday, and document interfaces expose organizational scoping. **Observed UI.** | Scope enforcement and inheritance across entities/roles. |
| Recruitment → employee lifecycle | Hiring stages, interview/offer forms, employee directory, probation, and exit workspace exist. **Inferred workflow.** | Automatic candidate conversion and document/profile transfer. |
| Attendance/leave/roster/OT → payroll | Capture/approval policies and payroll LOP/overtime/deduction columns exist. **UI-supported, inferred processing.** | Correct recalculation, lock timing, exceptions, and late adjustments. |
| Expenses/advances → finance/payroll | Expense disbursement/settlement states and payroll ad-hoc/retro inputs exist. **Inferred connection.** | Automatic reimbursement, advance recovery, and accounting entries. |
| Documents/SOPs/broadcasts → employee onboarding | Mandatory/signature/acknowledgment controls and SOP auto-assign-new-hire setting exist. **Observed UI configuration.** | Actual assignments, reminders, and employee completion. |
| Assets → offboarding/FnF | Custody and asset-recovery/clearance workspaces exist. **UI-supported workflow.** | Automatic deduction computation and settlement enforcement, including overrides. |
| Asset purchasing → Production machines | Asset category explicitly offers “production machinery” handoff for machine registration. **Observed UI intent.** | A completed purchase-to-machine registration event. |
| Payroll → banks | Export Bank File control exists. **Observed UI.** | NEFT/NACH format, bank acceptance, API payments, reconciliation, direct deposit. |
| Payroll → Accounting/GL | Marketed in website content. **Unverified integration.** | Balanced generated journals, account mappings, posting trigger, reversals, liability treatment. |
| Employee labor → Production WIP | Marketed as live MES labor absorption. **Unverified integration.** | Operator time capture, rates, batch/job allocation, WIP and variance accounting. |
| Employee time/cost → Projects | Website markets timesheets and real-time project cost accounting. **Unverified integration.** | Project screens and actual HRMS-to-project time/cost transfer. |
| CRM → Sales | Quotation-linked sales-order form, deal quotations/sales-order tabs, conversion links and order detail are visible. **Observed navigation/configuration.** | Actual conversion mapping, approval conditions, duplicate prevention and immutable revision history. |
| Sales → Inventory | Order-linked material requirements, dispatch quantity breakdown, order delivery-challan tabs and invoice source modes. **Observed document references.** | Atomic reservations, picking/dispatch deductions, partial fulfillment and cancellation reversals. |
| Sales → Production | Production plan/order forms select a Sales Order Request; production dashboard has demand queues and reporting includes sales-order tracking. **Observed references.** | Automatic manufacturing request creation, fulfillment allocation and customer promise-date updates. |
| Inventory/Production → Purchase | Requisition source selector and reference fields identify sales/material requirements, manufacturing orders and production material requests. Order material-requisition detail includes linked PR/status. **Observed cross-document references.** | Correct shortage quantity, automatic consolidation/conversion and rerun idempotency. |
| Purchase → Inventory | GRNs have PO/supplier/warehouse and received/rejected/accepted quantities; serials link inward GRN; landed-cost voucher shows allocated stock-cost preview. **Observed UI-supported flow.** | Accepted-stock movement, QC hold, valuation recalculation and rollback. |
| Production → Inventory | BOM components use shared items; order detail has reservation/issue/return, additional material and finished-goods receipt forms; WIP and lot/serial views exist. **Observed UI.** | Actual consumption/receipt balances, remnant reuse, scrap treatment and stock ownership. |
| Production → Purchase/subcontract | Outsourced routing has vendor/service-product/rate; settings choose manual PR→PO or automatic draft/threshold-approved PO; challan/analytics screens exist. **Observed configuration.** | Generated PO/receipt, material ownership and accounting for each named production model. |
| Purchase/Sales → common masters | Shared payment terms, products, warehouses and transporter fields are exposed across documents. **Observed UI references.** | Whether all entities share one authoritative record and correct scope/default inheritance. |
| Sales/Purchase/Production → Accounting | Order/invoice/receipt amounts, bill matching ledger wording, account fields and production cost tables exist; Accounting routes were Forbidden. **Partial configuration evidence.** | Balanced journals, account mapping, posting period/trigger, tax liabilities, reconciliation and reversals. |
| Administration → notifications | Module/event rules target roles/users/creator/assigned executive and define templates/action route. **Observed configuration.** | Event dispatch, recipient isolation, retry, delivery, opt-outs and escalation. |
| Administration → CRM/Sales communications | Meta lead mapping/logs, SMTP, quote email/WhatsApp forms and WhatsApp device bridge exist. **Observed setup/controls.** | Successful ingestion/delivery, external authorization and employee self-service bot behavior. |
| Administration → Sales/GST | Provider/seller setup, auto-IRN-on-post flag and invoice e-invoice/e-way status. **Observed configuration.** | Actual IRN/e-way bill response, failures/retries, cancellation and cost/latency. |
| Projects → other modules | Website describes CRM/contracts, employee time, costs and invoicing; inspected project paths inaccessible. **Unverified integration.** | Accessible project screens and source-to-destination transactions. |

KRA/KPI, OKRs, PIP, and 360° feedback appear as related performance tools. Automatic score/goal synchronization between them, or automatic compensation changes, was not established.

## Website claims compared with HRMS evidence

Primary HRMS marketing content: [moduleData.ts](src/app/components/modules/moduleData.ts), HRMS configuration starting around line 2969. Additional broad claims appear on the homepage, integrations diagram, module catalog, shared previews, and legal pages.

“Confirmed” below means **confirmed at the stated UI level**, not audited transactional behavior.

| Website claim | Finding | Appropriate treatment |
| --- | --- | --- |
| Multiple companies, units, branches, departments, designations | **Confirmed UI.** All five organization areas exist. | Keep; separate organizational setup from financial consolidation/security claims. |
| Central employee records and lifecycle management | **Confirmed UI.** Employee, probation, profile-request, and exit interfaces exist. | Keep with real sanitized screen examples. |
| Leave, WFH, encashment, and policy transitions | **Confirmed UI.** Corresponding forms/tabs/routes exist. | Keep; qualify automatic balance/carry-forward guarantees until tested. |
| Shift roster and overtime management | **Confirmed UI.** Shift master, weekly/daily boards, change/OT applications and policy fields exist. | Keep; validate peer swaps and automated matching separately. |
| Document templates, signatures, expiry tracking | **Confirmed configuration UI; processing unverified.** | Describe configurable templates/requirements; obtain generated-output/signature evidence. |
| Asset inventory, bulk allocation, custody, recovery | **Confirmed administrative UI; ESS partly inaccessible.** | Keep admin capabilities; verify My Assets under employee access. |
| Recruitment stages and interview/offer handling | **Confirmed UI.** Actual pipeline stages and forms were inspected. | Keep pipeline description; validate drag/drop, scorecards, conversion and salary bands. |
| PIP, expense requests, internal tickets, broadcasts | **Confirmed UI.** Forms, queues, and statuses exist. | Keep without claiming guaranteed automatic settlement/resolution/delivery. |
| Configurable salary components, payroll periods, withholding | **Confirmed UI.** Slabs/components/runs/statuses exist. | Keep; payroll formulas and payout outcomes still need testing. |
| One-click PF/ESI/PT/TDS, old/new tax regimes, 100% compliance | **Partially supported.** PF ceiling, ESI threshold and deduction configuration observed; full statutory engine not established. | Require controlled calculation examples, maintained-rule evidence and owner sign-off; avoid absolute accuracy claims. |
| ECR files, statutory returns, Form 16/declaration proofs | **Unverified.** Not established in reviewed screens. Mockups asserting them are not evidence. | Verify routes and generated artifacts in an authorized test environment. |
| NACH/NEFT export and payroll direct deposit | **Partial.** Bank-file export link exists; file/export/payment not exercised. | Say bank-file preparation only after format verification; distinguish file export from actual fund transfer. |
| Password-protected PDF payslips emailed/WhatsApp-dispatched | **Partial/unverified.** Salary/payslip page exists; protection and delivery not tested. | Verify generated format, protection, queue/delivery logs, and employee access. |
| Mobile self-service and WhatsApp bot | **Partial/unverified.** Web self-service entry points exist; My Attendance failed and My Assets denied this account; no WhatsApp bot verified. | Distinguish responsive web access, native mobile app, and messaging bot. Validate each independently. |
| Real-time biometric and mobile GPS sync | **Partial.** Capture/device/location policy controls exist. | Demonstrate a supported device feeding attendance and a safe mobile punch before asserting live sync/latency. |
| Strict GPS polygon geofencing, selfie identity verification, zero fraud | **Unverified stronger claims.** Radius/location/selfie configuration observed. | Use precise “configurable location and selfie requirements”; verify polygon, facial matching and anti-spoof behavior separately. |
| Multi-tier routing with SLA escalation/proxy approval across all HR requests | **Partial.** Expense routing fields and several approval queues exist. | Document request-specific routing; escalation, delegation and proxy permissions need evidence. |
| Automatic FnF/gratuity and blocked settlement until assets returned | **Partial.** FnF/clearance UI exists, including managerial override. | Explain conditions and overrides; validate calculations and actual enforcement. |
| Automatic salary GL journals | **Unverified.** No resulting journal or mapping was validated. | Obtain payroll-run-to-journal trace including reversal behavior before promising zero-touch posting. |
| Manufacturing WIP labor absorption and project costing | **Unverified integrations.** | Obtain source time/rate and destination accounting traces; label diagrams illustrative meanwhile. |
| Helpdesk smart FAQ suggestions/CSAT and social broadcast likes/pinning | **Unverified details.** Ticket/KB and broadcast configuration exist. | Verify detailed employee/ticket interactions before advertising these specifics. |
| AI/copilot actions, “Live data feed connected,” “Verified Real-Time Sync” | **Website simulation/source content; HRMS implementation unverified.** Deal detail exposes AI health/reply controls, but these were not invoked and do not establish an HRMS copilot. | Mark marketing previews illustrative. A local state change in a preview is not a live ERP approval. |
| Named customer endorsement, 10-minute payroll, 98% adoption, zero penalties/fraud, 100% asset recovery | **Unverified business evidence.** Values/testimonial are hardcoded marketing data. | Obtain consent, provenance, measurement method and timeframe; otherwise remove or label illustrative. No personal names are repeated here. |
| Competitors universally require middleware/manual journals, extra ESS fees or lengthy implementations | **Unverified comparison assertions.** | Compare documented, dated, named offerings/editions or use conditional workflow comparisons. |
| AES-256, TLS 1.3, hourly backups, immutable logs, SOC-2-compliant infrastructure | **Unverified operational/security claims.** Login/UI access cannot establish them. | Align copy with architecture, backup/restore evidence and applicable assurance documents. Infrastructure-provider compliance is not automatically product certification. |
| Third-party integrations shown by logos | **Partial UI evidence for some setups; delivery unverified.** SMTP, WhatsApp device linking, Meta and GST settings now inspected; the website integrations map remains static. | Add verified status, data direction, prerequisites and setup documentation per integration. Do not infer the other logos are connected. |
| 14-day full-feature sandbox, no credit card, zero-lock-in export | **Unverified commercial/product promise.** CTA currently opens an enquiry flow rather than provisioning a tenant. | Align wording with the actual delivery process and contractual offering. Do not claim trial activation from a local success state. |

## Website claims compared with the other ERP modules

Source: the eight module configurations in `src/app/components/modules/moduleData.ts`, plus shared previews and homepage copy. **Confirmed UI** means the stated screen/control exists. It does not mean the feature was transactionally tested. A compound marketing feature can contain supported basics and unverified promises simultaneously.

| Module / marketed feature | Live evidence and status | Claims still needing verification |
| --- | --- | --- |
| CRM: omnichannel/webhook capture | **Partial UI:** source classifications and Meta credential/mapping/webhook/ingestion-log areas exist. | Active website/email/telephony connectors, sub-second ingestion, enrichment and UTM completeness. |
| CRM: territory/round-robin routing | **Partial UI:** owner selection and bulk representative assignment. | Territory rules, workload algorithms, SLA reassignments and conflict prevention. |
| CRM: Kanban and revenue forecast | **Confirmed UI:** deal Kanban destination, actual stage choices, probabilities and dashboard revenue/pipeline views. | Drag persistence, predictive forecast accuracy, scoring accuracy and stalled-alert delivery. Sync AI Health and Generate AI Draft Reply controls were observed, but their outputs were not requested. |
| CRM: lost-deal/competitor insights | **Partial:** Lost is a supported deal/lead state. | Structured competitor/loss-reason analysis and resulting reports. |
| CRM: 360° accounts | **Confirmed UI:** accounts, contacts/buying roles, deals, credit limit and history-related views. | Full financial/communication aggregation, lifetime-value formula and isolation by role. |
| CRM: activities/follow-ups | **Confirmed UI:** interaction, follow-up, schedule and Calendar/Meet controls. | Recurring reminders, successful external calendar creation and automated SLA escalation. |
| Sales: dynamic prices/volume discounts | **Partial:** item/order discounts, prices and account credit-limit fields are present. | Customer rate contracts, tier/date rules, automatic margins and override prevention. |
| Sales: quotations/revisions/pro-formas | **Confirmed quote UI:** source quotations and approval/communication controls; source-linked order form. | Revision preservation, secure customer sign-off, pro-forma generation and actual conversion outcome. |
| Sales: credit guardrails | **Partial:** account credit limit, invoice balance/payment status. | Posting/dispatch blocks for overdue or exceeded limits and authorized override rules. |
| Sales: packing/gate passes | **Partial:** dispatch quantities, transport/warehouse details and delivery-challan references. | Multi-box packing outputs, digital POD and gate-pass generation for sales deliveries. A subcontract gate-pass control does not prove the sales equivalent. |
| Sales: customer portal/milestones | **Partial:** internal linked-document/order tracking. | Separate customer login, public-safe status visibility and milestone/payment portal. |
| Sales: targets/commissions | **Partial:** representative performance dashboard. | Target setup, commission formulas, accrual/payout and clawbacks. |
| Sales: GST automation / zero-touch accounting | **Partial:** GST provider/settings, automatic-IRN flag and invoice status columns. | Successful government responses, advertised under-two-second latency, zero-cost assumptions, generated balanced journals and reversals. |
| Inventory: master/variants/barcodes | **Confirmed UI:** item/variant/UOM/identifier setup and barcode-print controls. | Formula-generated SKU, fractional multi-UOM conversions, Android scanner and print formats. |
| Inventory: perpetual ledger | **Confirmed UI:** stock movement/balance/value/source-document table. | Sub-second updates, double-entry integrity, point-in-time reconstruction and concurrency correctness. |
| Inventory: available/reserved allocation | **Confirmed UI:** reservation records and dispatch quantity breakdown. | Automatic reservation trigger, atomic oversell protection, allocation priorities and expiry release. |
| Inventory: multi-warehouse | **Confirmed UI:** warehouse master, warehouse stock inputs and inter-warehouse transfers. | Central-DC business rules, cross-entity controls and automatic replenishment between locations. |
| Inventory: 3D bins/aisle routing | **Unverified:** not established in inspected warehouse screens. | Actual bin/location model, 3D interface and optimized picking route. |
| Inventory: bidirectional genealogy | **Partial:** batches/serial document references and production forward/backward traceability form. | Generated and complete cross-module genealogy with receipt, consumption, output and dispatch links. |
| Inventory: expiry/FEFO | **Partial:** manufacture/expiry dates and expiry filtering. | Mandatory FEFO selection, quarantine/expiry blocks and override controls. |
| Inventory: predictive safety stock/reorder | **Partial:** reorder point, minimum/order multiple, low-stock/MRP shortage and Raise PR control. | Predictive safety stock/EOQ, forecasts, lead-time computation and autonomous procurement. |
| Inventory: landed cost/aging | **Confirmed allocation UI:** GRN expense allocation preview and stock valuation report. | Posted valuation accuracy, inventory aging buckets and cost impact/reversals. |
| Purchase: PR/budget sign-off | **Confirmed UI:** demand sources, PR/PO approval queues and consolidated RFQ/PO controls. | Cost-center budget enforcement, exact approval hierarchy and one-click conversion result. |
| Purchase: approved vendor/scorecards | **Partial:** supplier master, RFQ savings analytics and production subcontract delivery/quality analytics. | General material-grade/compliance AVL restrictions and OTIF algorithm; an RFQ-specific supplier portal link was observed, but its external-user workflow and broader vendor portal were not reviewed. |
| Purchase: MSME compliance | **Unverified:** not established by the reviewed supplier/payment screens. | MSME classification, statutory clock calculation, alerts and enforced 45-day behavior. |
| Purchase: blanket orders/rate contracts | **Unverified:** ordinary purchase-order form inspected. | Blanket quantities/releases, contract effective dates and automated rate retrieval. |
| Purchase: RTV/debit notes | **Confirmed return UI:** GRN-linked/direct return and refund tracking. | Automatically generated tax/accounting debit notes and settlement integration. |
| Purchase: imports/multi-currency/port logistics | **Unverified:** domestic GST/warehouse/freight forms do not establish it. | Currency/rate controls, customs/duty, port milestones and import-cost accounting. |
| Purchase: RFQ comparison/landed costs/matching | **Partial/confirmed UI:** multi-supplier RFQs, savings view, landed-cost allocation and configurable matching. | Ten-supplier comparison limit, allocation correctness and gate-level automatic QC. **Off/Warn/Hold matching modes require qualifying “fraud-proof enforcement” wording.** |
| Production: telemetry/downtime/OEE | **Confirmed UI:** machine states/boards, KPI targets, downtime report controls and Andon interface. | Real telemetry source, refresh/latency, automated OEE arithmetic and micro-stop classification. |
| Production: actual costing/absorption | **Partial UI:** work-center overhead/cost, routing labor rates, WIP values and variance/material-consumption report controls. | Actual payroll wages, power/depreciation calculation, accounting postings and material/labor/overhead variance formulas. |
| Production: maintenance/tool life/calibration | **Confirmed UI:** preventive/breakdown/calibration work orders and recurring schedules/checklists. | Meter/tool-life triggers, spare consumption and execution lockout while overdue. |
| Production: scrap/rework/by-products | **Confirmed scrap/rework UI:** NCR, CAPA, rework costs and scrap records. | By-product recovery, co-product yield/cost splits and actual valuation/journal treatment. |
| Production: routing/cycle times | **Confirmed configuration UI:** sequential/predecessor/parallel operations, yield, queue transfer, setup/run/wait, QC and operator skills. | Dependency/capacity enforcement, skill restrictions, automatic benchmark updates and runtime formulas. |
| Production: genealogy/WIP/subcontract models | **Confirmed configuration UI:** trace direction, WIP subcards, four named production models, routing material/input choices and procurement policies. | Complete traced output, tested execution of all four combinations and automatic PR/PO/receipt/quality transitions. |
| Production: APS/manual scheduling | **Partial UI:** forward/backward scheduling, capacity/calendar/dispatch/scenario views. **Manual scheduling marked Coming Soon.** | Finite-capacity algorithm, optimization, ripple/level actions, saved scenarios and production-ready manual scheduling. |
| Administration: notifications/integrations/access | **Confirmed configuration UI:** event rules, SMTP, WhatsApp device linking, GST, Meta, users/roles and audit history. | Delivery success, official API capability, employee bot flows, permission enforcement and immutable audit guarantees. |
| Accounting and Projects | **Access limitation:** accounting journal/dashboard and plural project paths returned Forbidden. `/project` returned Not Found when probed. No separate app card was visible for these areas. | Ledger/bank feeds/statements, project Gantt/CPM/timesheets/margins and all related automations. Their absence from this session does not establish absence from the product. |

The website presents **eight commercial modules** (including Accounting and Project), while this account's app directory presents **seven areas** (including Administration). These are different taxonomies and access scopes. Agree the commercial catalog with the product owner; identify included, optional and role/subscription-restricted capabilities rather than inferring the entire product catalog from one account.

The CRM preview's Discovery/Demo stages should be aligned with the observed Qualification/Needs Analysis stages, or explicitly identified as a configurable example. Likewise, “Live,” “Verified Real-Time Sync,” AI actions and implementation counts in website mockups are marketing content, not evidence that this browser session is connected to that feature.



## Existing website project review

### Pages, content, and architecture

The project has a homepage; an eight-module catalog; dedicated CRM, Sales, Purchase, Inventory, Production, Accounting, HRMS, and Project pages; and Privacy, Terms, and Cancellation pages. Module routes use a shared `ModuleDetailTemplate` and typed data in `moduleData.ts`. Shared header/footer and a central enquiry provider reduce duplicated interaction code.

The module template provides hero preview, highlighted features, searchable/filterable feature catalog, comparison table, connected workflow, testimonial, and CTA. This is a useful foundation. The HRMS page currently has 11 feature-catalog entries, but the HRMS content does not mention **KRA/KPI, OKRs, 360° feedback, or SOP management** despite their live screens. Probation receives only a passing mention.

The homepage repeats module discovery through `ProductShowcase` and `PlatformModulesShowcase`. The latter contains **11 items while its copy advertises eight modules**, including Finance Management/Accounting & Finance and HR & Payroll/HRMS & Payroll duplicates. Its first HR & Payroll item links to `/modules/crm` at [PlatformModulesShowcase.tsx](src/app/components/PlatformModulesShowcase.tsx#L43), while the later HRMS item correctly links to `/modules/hrms`.

`ModuleDetailTemplate` imports the whole `MODULES_DATA` object in its client bundle for fallback selection, even though each route already passes its own module configuration. The homepage, catalog and legal pages are also client components despite containing much static material. These are performance improvement candidates, not measured Core Web Vitals failures.

### Navigation and calls to action

- Header links route to homepage anchors and the module catalog. Module/industry dropdowns in [SiteHeader.tsx](src/app/components/SiteHeader.tsx#L98) depend on `group-hover`; there is no equivalent disclosure state, focus-within opening, or expanded/controls relationship for those panels. The module catalog still provides an alternative route to all module pages.
- All industry links lead to the same `/#industries` section. This is not a set of individual industry pages or selected-industry deep links.
- Footer social icons all lead to `/#contact`, despite platform-specific accessible labels. “Documentation” leads to the FAQ, and “Customer Stories” leads to the hero/solutions anchor. These destinations do not match their labels.
- Contact information is displayed as text rather than actionable telephone/email links.
- Demo/trial/quote CTAs use the shared modal/provider and route-aware module defaults. This reuse is a strength.
- **Delivery defect:** [PopupCtaModal.tsx](src/app/components/popup-cta/PopupCtaModal.tsx#L142) prevents normal form submission, performs client validation, then only calls `setSubmitted(true)` at line 166. The success copy at line 288 promises follow-up. No delivery endpoint or server action was found in this project. A visitor's enquiry is lost on refresh/close rather than delivered by this handler.
- Trial copy promises sandbox access, while the common success message describes scheduling a demo. Neither actual provisioning nor intent-specific backend processing is implemented in that handler.

### Design and responsive behavior

Visually inspected browser pages: `/`, `/modules`, `/modules/hrms`, `/modules/project`, and `/privacy-policy`, at **1440×1000** and **390×844**. Other module routes and both other legal pages were reviewed through source/shared structure; they did not receive the same individual browser coverage.

**Observed strengths:** consistent blue branding, loaded fonts/logo/images, readable main headings, modular page sections, mobile hero stacking, mobile module carousels, and a comparison table that changes into stacked capability cards. The five HRMS comparison rows remained in the mobile layout. The sampled pages had no page-wide horizontal overflow; some internal sections/carousels/decorative effects extend beyond their own boxes, which is not by itself a layout defect. No empty unnamed icon buttons were found by the basic DOM check on these sampled routes.

**Suggested improvements:**

- Replace the generic transformation-focused homepage hero with a concrete buyer outcome and clear audience. Connect the message to verified workflows rather than additional superlatives.
- Make real product screens distinguishable from code-generated mockups. Some feature previews already say “Illustrative preview”; apply the same clarity to hero/live/AI mockups.
- Reduce the duplicated showcase content so readers reach product evidence and the enquiry CTA sooner.
- Simplify dense microcopy and 8.5–12px labels in comparisons/mockups, particularly on mobile. Maintain comfortable zoom and readable descriptions.
- Preserve stacked mobile comparisons and scoped scrolling; check 320px, tablet widths, 200% zoom, touch devices, and the modal under the on-screen keyboard before declaring full responsive coverage.
- Offer direct links instead of making desktop module details depend on hover flips. Preserve the mobile cards' explicit action links.

### Accessibility and animations

**Source-confirmed strengths:** `lang="en"`, main/navigation landmarks, descriptive menu toggle and icon-button labels, labelled enquiry inputs, native `<dialog>`, dialog labelling and focus-management code, module feature tabs with panel relationships/roving focus/arrow keys, and comparison row/column headers. Several sections include reduced-motion handling.

**Source-confirmed issues or gaps:**

- Header dropdown opening and desktop module flips rely on hover. Keyboard/touch access should have an explicit equivalent.
- Homepage `ProductShowcase` uses `role="tab"`/`aria-selected` but lacks the full panel relationship, roving focus, and arrow-key behavior present in the richer module feature catalog. Mobile showcase tabs are not within the same declared tablist structure.
- Homepage FAQ buttons remove the outline and have no explicit replacement focus style at that control; they also lack a relationship to the answer panel. Add visible focus and answer IDs/controls relationships.
- There is no skip-to-main link. Add one that becomes visible on focus.
- Module workflow autoplay advances every two seconds. `isPaused` is initialized to false without a setter; there is no functional pause control or reduced-motion guard for that interval in [ConnectedWorkflowFlow.tsx](src/app/components/modules/ConnectedWorkflowFlow.tsx#L908).
- CSS disables motion in several scoped sections, but the hero `.pulse-glow` remains animated under emulated reduced motion. Reduced motion needs a complete policy, including Framer Motion industry entrances and scripted stage changes, rather than only some CSS effects.
- CSS changes the semantic comparison table to grids/contents. Explicit roles and scopes help, but screen-reader compatibility should be verified across browsers; it was not tested with assistive technology here.

**Browser-interaction limitation:** the existing local dev preview repeatedly logged an HMR WebSocket handshake error (`ERR_INVALID_HTTP_RESPONSE`). Programmatic mobile-menu/CTA tests did not reliably produce an open menu/dialog, so their runtime success, focus trap, escape restoration, dropdown scrolling, and mobile-keyboard behavior are **not claimed as verified**. No enquiry was submitted. The modal/accessibility strengths above are source observations. This local-preview limitation is not proof that the deployed website has the same failure. I did not restart servers or alter project configuration to resolve it.

This was not a full WCAG, contrast, screen-reader, or real-device audit.

### SEO and metadata

**Observed/source-confirmed:** all eight module detail routes export their own title and description. Root layout includes generic title/description and icons; sampled pages have an H1 and main landmark. Root and module sitemaps exist, and robots references both. Canonicals and social-share image metadata were absent on sampled browser pages.

**Gaps:**

- `/modules` and the legal pages inherit the homepage title/description instead of having page-specific metadata.
- No `metadataBase`, canonical URL, Open Graph/Twitter configuration, or structured-data implementation was found in the reviewed source.
- Sitemap origins use `NEXT_PUBLIC_SITE_URL` with a fallback domain. The deployed canonical origin should be verified and made consistent with page metadata.
- Both sitemap generators use `new Date()` for every page's last-modified value, rather than a meaningful content revision date.
- Industry navigation does not have distinct indexable landing pages; create them only where there is verified, useful industry content.
- Security, customer, commercial and legal assertions need provenance before they become prominent searchable copy. This review does not validate the policies or provide a legal determination.

The terms/privacy/cancellation pages make specific commitments about security, uptime, refunds, retention/export, response times, and billing-portal access. Those were not established by this HRMS exploration and should be reviewed by their business/technical owners. Do not treat generic legal-page text as product evidence.

## Prioritized recommendations

Priorities: **P0** = address before relying on the site for enquiries/public promises; **P1** = next implementation cycle; **P2** = subsequent refinement. These are recommendations only; no implementation was made.

| Priority | Recommendation | Concrete scope and acceptance evidence |
| --- | --- | --- |
| P0 | Deliver enquiries and make success truthful | Update the shared enquiry submission path, not every CTA separately. Validate on the server; persist/forward the enquiry with its intent/module context; show success only after confirmed acceptance; provide loading/retry/error behavior. Verify a test enquiry reaches the intended destination in an authorized test environment. |
| P0 | Align trial/demo/quote promises with actual delivery | Use intent-specific confirmation. If trials are manually provisioned, say “Request trial access”; otherwise demonstrate real provisioning. Confirm duration, available modules, and commercial terms with the owner. |
| P0 | Establish evidence for strong product/security/customer promises | Review HRMS entries in `moduleData.ts`, shared live/verified preview badges, homepage FAQ/trust strip, integrations map and legal pages. Remove/qualify unsupported absolutes. Maintain a claim registry containing owner, route/version, evidence, conditions, and verification date. |
| P1 | Correct module destinations and maintain one catalog | Fix the HR-to-CRM link. Consolidate duplicates into an owner-confirmed commercial module catalog; distinguish analytics as a capability if it is not a separate product. Reuse one catalog for header/footer/cards/modal options. Validate every visible module label against its destination. |
| P1 | Showcase the actual HRMS breadth | Add KRA/KPI appraisals, OKRs, 360° feedback, SOPs, and clearer probation/offboarding coverage. Group content into Setup, Employee Lifecycle, Workforce Operations, Talent, Service & Communication, Payroll. Each feature should have a sanitized screenshot, observed scope, and request-specific workflow. |
| P1 | Make every module page reflect actual screens and conditions | CRM: real pipeline stages, activities and quote approvals. Sales: order/dispatch invoicing policy and linked receipts/returns. Inventory: tracking, reservations, replenishment and valuation. Purchase: RFQ matrix, supplier portal links, landed cost and configurable matching. Production: BOM/routing/ECO, capacity/dispatch views, material/cost/QC detail and maintenance. Add administration/integration prerequisites where relevant. Distinguish Coming Soon and simulator behavior. Acceptance: product owner reviews each feature against a sanitized route/version capture. |
| P1 | Present a connected buyer journey with explicit evidence | Reuse the workflow component for lead→quote→order→procure/manufacture→dispatch→invoice→receipt, and HR inputs→payroll. Link feature cards to meaningful detailed explanations. Label inferred automations; get controlled source/destination evidence before using “automatic,” “zero-touch” or speed guarantees. |
| P1 | Resolve/qualify self-service access | Investigate My Attendance's Not Found response and whether My Assets denial is expected for this account. Review employee/manager/HR/accountant/auditor roles in a separate authorized session. Also establish why Accounting/Project are forbidden and how their entitlements relate to the eight-module website. Publish a verified persona-based feature/access matrix. |
| P1 | Make navigation work by keyboard and touch | Add proper module/industry disclosures and focus handling, support explicit card activation, preserve module-catalog fallback. Correct footer social/documentation/customer-story destinations and add actionable business contact links. Test keyboard-only discovery from header through CTA. |
| P1 | Fix motion and control accessibility | Add workflow pause/resume, pause during focus where appropriate, respect reduced motion in timers/Framer Motion/CSS, and stop nonessential offscreen activity. Bring ProductShowcase tabs to the standard used by the feature catalog; restore FAQ focus and add skip navigation. Verify with reduced motion and keyboard navigation. |
| P1 | Complete metadata and link discovery | Add unique catalog/legal metadata, agreed-origin canonicals, social-share images and appropriate structured data using verified facts. Use meaningful sitemap revision dates. Confirm production URLs, robots and sitemap responses after deployment. |
| P1 | Verify local and deployed interaction behavior | Diagnose existing local HMR errors without assuming they are production failures. Recheck CTA opening, module defaults, focus trap/restoration, Escape, touch/module dropdown scrolling, and on-screen keyboard using a functioning preview. Obtain deployed-browser evidence before sign-off. |
| P2 | Replace illustrative credibility with real proof | Use consented, redacted product captures and attributable case studies. Label mock data consistently. Publish actual integration setup/status notes and release-specific device support instead of logo-only assurances. |
| P2 | Reduce page repetition and improve readability | Consolidate overlapping showcase sections, shorten generic copy, improve small labels, give industry links purposeful destinations, and make approved workflows easier to scan. Check mobile completion of a buyer journey, not just fitting the viewport. |
| P2 | Reduce avoidable client work and image cost | Keep static catalog/legal/page content server-rendered where appropriate, isolate interactive islands, remove whole-catalog fallback data from the shared client template if unnecessary, and optimize meaningful raster images with sizes/loading hints. Measure production LCP/INP/CLS and bundle sizes before further optimization. |

### Suggested content direction using current evidence

An evidence-aligned HRMS lead could be:

> Connect employee records, attendance, leave, expenses, performance reviews, and payroll in one workspace.

Support the HRMS page with four concrete journeys, all labelled illustrative until their outcomes are tested:

1. **Hire to active employee:** requisition → candidate pipeline/interview/offer → employee policies/documents → probation.
2. **Workforce inputs to payroll:** shifts/holidays → attendance/corrections → leave/WFH/OT → review payroll inputs → payroll run/payout preparation.
3. **Employee service:** profile request → document requirement → asset request → expense/helpdesk/SOP/broadcast workflows.
4. **Performance and separation:** appraisal/OKR/360/PIP tools → lifecycle decision → clearances/assets → FnF/certificate.

Avoid calling the last step a completed banking transaction or accounting integration until its downstream evidence is available.

### Content direction for the other modules

- **CRM:** inquiries, ownership, actual pipeline stages, activity history, account relationships and quotation governance.
- **Sales:** quotation/order references, flexible invoicing policy, partial dispatch, receipts and returns.
- **Inventory:** shared item/variant masters, warehouse movements, serial/lot history, reservations, demand and valuation.
- **Purchase:** demand-to-PR/RFQ/PO, supplier comparison, separate receipt/billing stages, landed costs and matching options.
- **Production:** group features under Engineering, Planning, Shop Floor, Quality, Subcontracting, Maintenance and Intelligence. Explain the four named production models and configuration conditions rather than implementation route/service counts.
- **Administration:** configuration prerequisites and access/notification governance can support a platform page or trust/setup section; whether it is a commercial module is an owner decision.
- **Accounting/Projects:** retain as unverified pending appropriate read-only access and entitlement confirmation; do not publish detailed accuracy/performance claims based on marketing copy alone.

Use a repeatable module story: who uses it → task/problem → actual screen → configurable steps → downstream document → conditions/limitations. Show real redacted captures or clearly labelled illustrative previews; do not expose record names, personal values, tokens or secrets.

### ERP product improvement candidates arising from this review

These are product-side suggestions, not website-code defects:

- Clarify administrator versus employee navigation; hide inapplicable shortcuts or provide an explanatory state instead of unexpected forbidden/not-found destinations.
- Fix exposed translation keys in assets, CRM WhatsApp interaction labels and production machine lifecycle options. Make Coming Soon/simulator labels consistent wherever those capabilities are listed.
- Make payroll provenance inspectable: which attendance/policy/component input produced each deduction or adjustment, with a read-only link to the source.
- Make FnF overrides explicit, permission-controlled and auditable, and show their conditions in product documentation.
- Document role/access expectations for confidential tickets, document download permissions, 360° anonymity and cross-company visibility.
- Provide read-only integration-health/documentation views for devices, banking exports, messaging and accounting handoffs so advertised automations can be demonstrated without changing live business records.

- Document configurable guardrails honestly: bill-matching mode/tolerances/overrides, quotation fast-track approval, subcontract auto-PO threshold and manual cost adjustments. Provide a read-only explanation of the effective settings and their audit history.
- Clarify integrations by type: SMTP delivery, WhatsApp Web bridge, employee bot, Meta webhook and GST provider are distinct capabilities. Surface read-only health/error information and owner documentation without requiring a live test action.
- Provide sanitized representative read-only documents for invoice/payment, PO/GRN, project and accounting workflows so feature demonstrations do not depend on changing customer data.

These suggestions concern reviewability, documentation and observed UI issues. This exploration does not establish that the backend lacks transaction safeguards or integration logging.

## Coverage gaps and validation backlog

| Area | Limitation | Needed evidence |
| --- | --- | --- |
| My Attendance | `/hrms/attendance/my-attendance` returned Not Found, including a dashboard-linked destination. | Route owner investigation and employee session check. |
| My Assets | `/hrms/assets-module/my-assets` returned Forbidden in this session. | Intended role policy and authorized employee session. |
| Role behavior | Role labels, user multiple-role selection, level/visibility/permission columns and notification roles observed; exact account assignment/full enforcement matrix unverified. | Separate authorized employee/manager/operator/sales/purchase/accountant/auditor/customer/vendor sessions, with scope and denial checks. |
| Empty/detail workflows | PIP/360/broadcast/detail flows were not fully populated/exercised; individual employee/ticket/scorecard pages not exhaustive. | Redacted, populated read-only examples. |
| Payroll/statutory outputs | No computation, export, filing, payslip download or payment. | Authorized test-tenant calculation/output evidence, including corrections and reversals. |
| Recruitment conversion | Pipeline and offer UI inspected; no hiring transaction or conversion. | Controlled candidate-to-employee demonstration and scorecard evidence. |
| Devices/mobile/messaging | No real biometric device, mobile permissions, native app, or WhatsApp channel tested. | Supported-device trace, employee/mobile demonstration and delivery logs. |
| Cross-module transfers | Document references, source selectors, production cost/material detail and integration settings reviewed; completed transactions and accounting destinations not traced. | Source-to-destination records in a safe test environment, including partials/reversals and error recovery. |
| Accounting/Projects | `/accounting/journals`, `/accounting/dashboard`, `/projects`, `/projects/dashboard`: Forbidden. `/project`: Not Found. Last three project paths were exploratory probes. | Appropriate read-only role/entitlement and discovered canonical project routes. No access-control bypass attempted. |
| Record details | Representative CRM lead/deal/quote, sales order, RFQ, production order/BOM/routing inspected; no detail link was available to the scan on invoice/PO/GRN/production-plan lists. Details are not exhaustive. | Sanitized populated examples and role-specific detail variants. Do not interpret an unavailable sample as a missing product feature. |
| RFQ/customer portals | RFQ supplier-portal link exists but was not opened; independent supplier/customer authentication and portal submission were not reviewed. | Authorized portal persona and read-only status/permission evidence; exclude secret portal tokens. |
| Production execution | No scan event, acceptance/start, issue/return/FG receipt, reschedule, ripple/level, QC disposition, maintenance generation or cost adjustment performed. | Controlled test-tenant demonstrations, formulas, guardrail enforcement and audit/stock/accounting traces. |
| Integration/notification delivery | Setup and send/test controls inspected; no external connection test, message, notification, webhook simulator or government request performed. | Authorized test integration logs and configuration/version scope. |
| Hidden/new ERP features | All seven visible areas and observed sidebar destinations reviewed; feature completeness beyond this account/UI cannot be guaranteed. | Owner-supplied feature/route catalog, release version, subscription matrix and additional authorized read-only roles. |
| Website interactions | Existing local HMR errors limited reliable automated click/focus verification. | Functioning preview and deployed-browser checks; no enquiry submission was made. |
| Responsive/accessibility/performance | Two sampled viewport sizes; no real-device, assistive-technology, full contrast or production-performance audit. | Broader widths/zoom, touch/keyboard/screen-reader, and measured production performance. |
| Commercial/security/legal claims | Not established from UI/repository assertions. | Relevant business owner records, operational evidence and assurance documentation. |

Unverified features should remain in this backlog rather than being presented as confirmed or definitively missing.

## Expanded live-review route index

The routes below were opened in the read-only browser review. `:id` represents one representative existing record; identifiers and contents are omitted. `/create` pages were opened solely to inspect blank fields and controls, with no save/submit. The HR routes are listed in the 27 HRMS feature groups above. This index records UI access, not successful execution of each available action. The Forbidden/Not Found probes are listed separately in the coverage backlog.

### CRM

`/crm/accounts`, `/crm/accounts/create`, `/crm/approvals/quotations`, `/crm/customers`, `/crm/dashboard`, `/crm/deals`, `/crm/deals/:id`, `/crm/deals/create`, `/crm/deals/kanban`, `/crm/leads`, `/crm/leads/:id`, `/crm/leads/create`, `/crm/leads/track-status`, `/crm/masters/deal-statuses`, `/crm/masters/lead-statuses`, `/crm/settings`.

### Sales — shared quotations

`/crm/quotations`, `/crm/quotations/:id`, `/crm/quotations/create`.

### Sales

`/sales/invoices`, `/sales/invoices/create`, `/sales/orders`, `/sales/orders/:id`, `/sales/orders/create`, `/sales/payments`, `/sales/payments/create`, `/sales/returns`, `/sales/returns/create`, `/sales/settings`.

### Inventory and transport

`/inventory/adjustments`, `/inventory/adjustments/create`, `/inventory/barcodes`, `/inventory/batches`, `/inventory/dispatches`, `/inventory/dispatches/create`, `/inventory/material-requests`, `/inventory/material-requirements`, `/inventory/mrp-shortage`, `/inventory/products`, `/inventory/products/create`, `/inventory/reports/low-stock`, `/inventory/reports/valuation`, `/inventory/reservations`, `/inventory/serial-numbers`, `/inventory/transactions`, `/inventory/transfers`, `/inventory/transfers/create`, `/inventory/warehouses`, `/platform/transporters`, `/platform/transporters/create`, `/supply-chain/dashboard`.

### Purchase and goods receipt

`/grns`, `/grns/create`, `/grns/pending`, `/purchase/advances`, `/purchase/bill-matching`, `/purchase/bills`, `/purchase/bills/create-service`, `/purchase/landed-costs`, `/purchase/landed-costs/create`, `/purchase/orders`, `/purchase/orders/create`, `/purchase/payments`, `/purchase/po-approvals`, `/purchase/pr-approvals`, `/purchase/requisitions`, `/purchase/requisitions/create`, `/purchase/requisitions/pending-items`, `/purchase/returns`, `/purchase/returns/create`, `/purchase/rfqs`, `/purchase/rfqs/:id`, `/purchase/rfqs/create`, `/purchase/rfqs/savings-dashboard`, `/purchase/vendors`, `/purchase/vendors/create`.

### Production — dashboard, engineering and orders

`/production/boms`, `/production/boms/:id`, `/production/boms/create`, `/production/calendars`, `/production/calendars/create`, `/production/dashboard`, `/production/ecos`, `/production/ecos/create`, `/production/machines`, `/production/machines/create`, `/production/operator-skills`, `/production/operator-skills/create`, `/production/orders`, `/production/orders/:id`, `/production/orders/create`, `/production/routing`, `/production/routing/:id`, `/production/routing/create`, `/production/shifts`, `/production/shifts/create`, `/production/wip`, `/production/work-centers`, `/production/work-centers/create`.

### Production — planning and scheduling

`/production/capacity`, `/production/planning-exceptions`, `/production/plans`, `/production/plans/create`, `/production/schedules`, `/production/schedules/calendar`, `/production/schedules/create`, `/production/schedules/dispatch-board`, `/production/schedules/scenarios`, `/production/schedules/work-center-view`.

### Production — MES and traceability

`/production/mes`, `/production/mes/machines`, `/production/mes/operator`, `/production/mes/operator/my-operations`, `/production/mes/scan-logs`, `/production/mes/scanner`, `/production/mes/timeline`, `/production/mes/traceability`, `/production/mes/work-centers`.

### Production — quality

`/production/quality-plans`, `/production/quality-plans/create`, `/production/quality/capas`, `/production/quality/capas/create`, `/production/quality/dashboard`, `/production/quality/deviations`, `/production/quality/inspections`, `/production/quality/inspections/create`, `/production/quality/ncrs`, `/production/quality/ncrs/create`, `/production/quality/rework`, `/production/quality/scrap`.

### Production — subcontracting

`/production/settings`, `/production/subcontract/analytics`, `/production/subcontract/delivery-challans`, `/production/subcontract/delivery-challans/create`.

### Production — maintenance

`/production/maintenance/dashboard`, `/production/maintenance/schedules`, `/production/maintenance/schedules/create`, `/production/maintenance/work-orders`, `/production/maintenance/work-orders/create`.

### Production — intelligence

`/production/intelligence/alerts`, `/production/intelligence/andon`, `/production/intelligence/dashboard`, `/production/intelligence/reports`, `/production/kpi-targets`, `/production/variances`.

### Administration

`/access/audit-log`, `/access/roles`, `/access/roles/create`, `/access/users`, `/access/users/create`, `/platform/email-settings`, `/platform/gst-settings`, `/platform/meta-settings`, `/platform/notification-rules`, `/platform/notification-rules/create`, `/platform/payment-terms`, `/platform/payment-terms/create`, `/platform/subscription`, `/platform/whatsapp-settings`.

## Checks and change boundary

- Read-only browser navigation covered all seven visible ERP areas, 162 accessible non-HR route/view combinations and the previously reviewed HR sidebar areas, roster views and candidate pipeline. Visible sidebar destinations were checked against visited routes; inaccessible finance/project and HR self-service routes are explicitly listed above.
- Logout completed after the expanded ERP review; `/login` and its login form were visible afterward.
- Representative website desktop/mobile screenshots and DOM checks were reviewed. Shared template/content, navigation, enquiry code, legal routes, metadata, robots and sitemap source were inspected.
- Initial website-review check, `npm run lint`: passed with **0 errors and 5 existing `no-img-element` warnings** in HeroLaptopShowcase, IntegrationsEcosystem, ProductShowcase, SiteFooter and SiteHeader.
- Initial website-review check, `npx tsc --noEmit --incremental false`: passed. These source checks were not repeated for the report-only expansion; source files remained unchanged.
- A production build was not run, and no server was started/reconfigured, to preserve the requested file boundary. Production build/deployed behavior remains unverified.
- Source/configuration/asset hashes matched the initial review baseline. **Only `explored.md` was created/updated in the project by this task.** Existing workspace deletions of the two earlier HTML previews were left untouched. No prototype or production integration was performed.
