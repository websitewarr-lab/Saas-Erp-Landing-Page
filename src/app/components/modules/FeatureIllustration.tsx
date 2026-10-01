import { ArrowRight, Bell, Check, Circle, LayoutDashboard, Search, Sparkles } from "lucide-react";
import type { CSSProperties } from "react";
import type { FeatureVisual } from "./moduleData";
import FeatureIcon from "./FeatureIcon";
import styles from "./ModuleFeatures.module.css";

// Each feature supplies its own process, metric, icon, and illustration type.
// These are illustrative product views, not live business records.
function PreviewContent({ visual }: { visual: FeatureVisual }) {
  const { kind, steps } = visual;
  if (kind === "pipeline" || kind === "production") {
    return (
      <div className={styles.board}>
        {steps.map((step, index) => (
          <div className={styles.boardColumn} key={step}>
            <span className={styles.boardLabel}><i />{step}</span>
            {[0, 1, 2].slice(0, 3 - index % 2).map((card) => (
              <div className={styles.boardCard} key={card}>
                <span className={styles.miniLabel}>{kind === "production" ? "WORK ORDER" : "ACTIVITY"} 0{index + card + 1}</span>
                <div className={styles.skeleton} /><div className={styles.shortSkeleton} />
                <div className={styles.boardCardFooter}><span className={styles.avatar}>{index + card + 1}</span><span className={styles.miniPill}>{index === 2 ? "Complete" : "In progress"}</span></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  if (kind === "schedule") {
    return (
      <div className={styles.schedule}>
        <div className={styles.scheduleDays}><span>This week</span>{["MON", "TUE", "WED", "THU", "FRI"].map(day => <span key={day}>{day}</span>)}</div>
        {steps.map((step, index) => (
          <div className={styles.scheduleRow} key={step}>
            <span>{step}</span>
            <div className={styles.scheduleTrack}><i style={{ "--offset": `${index * 20}%`, "--span": `${65 - index * 10}%` } as CSSProperties}><Check size={12} />{index === 2 ? "Ready" : "Scheduled"}</i></div>
          </div>
        ))}
        <div className={styles.previewFooter}><CalendarMark />A connected plan, from start to finish</div>
      </div>
    );
  }
  if (kind === "stock") {
    return (
      <div className={styles.stockView}>
        <div className={styles.racks}>
          {[0, 1, 2].map(rack => <div className={styles.rack} key={rack}><span>ZONE 0{rack + 1}</span><div>{Array.from({ length: 9 }, (_, box) => <i key={box} data-filled={(rack + box) % 4 !== 0}><FeatureIcon name="boxes" /></i>)}</div></div>)}
        </div>
        <div className={styles.stockRows}>{steps.map((step, index) => <div key={step}><span className={styles.dot} /><span>{step}</span><span className={styles.stockBar}><i style={{ width: `${88 - index * 19}%` }} /></span><Check size={13} /></div>)}</div>
      </div>
    );
  }
  if (kind === "ledger") {
    return (
      <div className={styles.ledgerView}>
        <div className={styles.chartHeader}><span>Financial overview</span><span className={styles.miniPill}>Balanced <Check size={11} /></span></div>
        <div className={styles.chart}>
          {[35, 49, 43, 65, 58, 78, 71, 93].map((height, index) => <div key={index}><i style={{ height: `${height}%` }} /><i style={{ height: `${height * .7}%` }} /></div>)}
        </div>
        <div className={styles.ledgerRows}>{steps.map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong><Check size={14} /></div>)}</div>
      </div>
    );
  }
  if (kind === "people") {
    return (
      <div className={styles.peopleView}>
        <div className={styles.profile}><div className={styles.profileAvatar}><FeatureIcon name={visual.icon} /></div><div><strong>{visual.title}</strong><div className={styles.shortSkeleton} /><span className={styles.miniPill}>Connected workspace</span></div></div>
        {steps.map((step, index) => <div className={styles.personRow} key={step}><span className={styles.avatar}>{["AK", "SM", "RP"][index]}</span><div><strong>{step}</strong><div className={styles.shortSkeleton} /></div><span className={styles.miniPill}><Check size={12} /> Verified</span></div>)}
      </div>
    );
  }
  if (kind === "versions") {
    return (
      <div className={styles.versionsView}>
        <div className={styles.documents}>{steps.map((step, index) => <div className={styles.document} key={step}><span className={styles.miniLabel}>REVISION 0{index + 1}</span><FeatureIcon name={visual.icon} /><strong>{step}</strong><div className={styles.skeleton} /><div className={styles.shortSkeleton} /><span className={styles.miniPill}>{index === 2 ? "Current" : "Saved"}</span></div>)}</div>
        <div className={styles.previewFooter}><FeatureIcon name="git" />Complete history. Nothing overwritten.</div>
      </div>
    );
  }
  if (kind === "matching" || kind === "quality") {
    return (
      <div className={styles.matchingView}>
        <div className={styles.matchingHeader}><span className={styles.checkSeal}><FeatureIcon name={kind === "quality" ? "shield" : "scan"} /></span><div><strong>{kind === "quality" ? "Checks & controls" : "Intelligent verification"}</strong><p>{visual.metric}</p></div></div>
        {steps.map((step, index) => <div className={styles.matchRow} key={step}><span className={styles.rowNumber}>0{index + 1}</span><strong>{step}</strong><span className={styles.matchDashes} /><span className={styles.verified}><Check size={14} />{kind === "quality" ? "Checked" : "Matched"}</span></div>)}
        <div className={styles.previewFooter}><FeatureIcon name="check" />A clear, traceable audit trail</div>
      </div>
    );
  }
  return (
    <div className={styles.approvalView}>
      <div className={styles.approvalFilters}><span>All records</span><span>In progress</span><span>Approved <Check size={11} /></span></div>
      <div className={styles.tableHead}><span>WORKFLOW</span><span>STATUS</span></div>
      {steps.map((step, index) => <div className={styles.approvalRow} key={step}><span className={styles.avatar}>0{index + 1}</span><strong>{step}</strong><span className={styles.miniPill}><Check size={11} />{index === 2 ? "Approved" : "Complete"}</span></div>)}
      <div className={styles.previewFooter}><FeatureIcon name={visual.icon} />{visual.metric}</div>
    </div>
  );
}

function CalendarMark() {
  return <FeatureIcon name="calendar" />;
}

export default function FeatureIllustration({ visual, moduleName }: { visual: FeatureVisual; moduleName: string }) {
  const shortModuleName = moduleName.replace(/ Module$/, "");
  return (
    <div className={styles.illustration} data-tone={visual.tone} role="img" aria-label={`${shortModuleName} preview: ${visual.title}. ${visual.steps.join(" → ")}. ${visual.metric}.`}>
      <div className={styles.artContent} aria-hidden="true">
        <div className={styles.halo} /><div className={styles.swoosh} />
        <svg className={styles.connection} viewBox="0 0 600 180" fill="none"><path d="M50 150C180-30 420-15 550 150" stroke="currentColor" strokeDasharray="6 6" /><circle cx="225" cy="40" r="7" fill="currentColor" /><circle cx="431" cy="67" r="5" fill="currentColor" /><path d="m294 31 30-9-10 30-5-16-15-5Zm15 5 15-14" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /></svg>
        <div className={`${styles.notice} ${styles.noticeStart}`}><span className={styles.noticeIcon}><FeatureIcon name={visual.icon} /></span><div><strong>{visual.steps[0]}</strong><small>{shortModuleName}</small></div></div>
        <div className={`${styles.notice} ${styles.noticeEnd}`}><span className={styles.successIcon}><Check /></span><div><strong>{visual.steps[2]}</strong><small>Connected in MossiERP</small></div></div>
        <div className={styles.laptop}>
          <div className={styles.screen}>
            <div className={styles.sidebar}>
              <div className={styles.previewBrand}><span>M</span>MossiERP</div>
              <div><LayoutDashboard />Overview</div>
              <div className={styles.sidebarActive}><FeatureIcon name={visual.icon} />{shortModuleName}</div>
              <div><FeatureIcon name="chart" />Reports</div>
              <div><FeatureIcon name="refresh" />Automation</div>
              <div><FeatureIcon name="shield" />Activity log</div>
              <span className={styles.workspaceStatus}><Circle />Workspace connected</span>
            </div>
            <div className={styles.previewApp}>
              <div className={styles.appBar}><Search size={12} /><span>Search your workspace...</span><Bell size={14} /><span className={styles.avatar}>MS</span></div>
              <div className={styles.appHeading}><div><span className={styles.miniLabel}>{shortModuleName} / Overview</span><h4>{visual.title}</h4></div><span className={styles.appIcon}><FeatureIcon name={visual.icon} /></span></div>
              <PreviewContent visual={visual} />
              <div className={styles.appBottom}><span><i /> All changes saved</span><span>Illustrative preview</span></div>
            </div>
          </div>
          <div className={styles.laptopBase} />
        </div>
        <div className={styles.floatingDocument}><span className={styles.featureTile} data-tone={visual.tone}><FeatureIcon name={visual.icon} /></span><strong>{visual.title}</strong><div className={styles.skeleton} /><div className={styles.shortSkeleton} /><span className={styles.documentAction}>{visual.steps[1]}<ArrowRight size={13} /></span></div>
        <div className={styles.floatingSuccess}><span className={styles.successIcon}><Sparkles /></span><div><small>THE MOSSIERP ADVANTAGE</small><strong>{visual.metric}</strong></div></div>
      </div>
    </div>
  );
}
