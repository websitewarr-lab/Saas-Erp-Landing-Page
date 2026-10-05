import { BarChart3, Boxes, Check, Layers3, Target, UsersRound } from "lucide-react";
import styles from "./PopupCtaModal.module.css";

export default function PopupCtaIllustration() {
  return (
    <div className={styles.illustration} aria-hidden="true">
      <div className={styles.orbit} />
      <svg className={styles.connections} viewBox="0 0 300 240" fill="none">
        <path d="M54 35V76Q54 90 70 90H112M246 35V76Q246 90 230 90H188M54 212V176Q54 162 70 162H112M246 212V176Q246 162 230 162H188" />
      </svg>
      <div className={`${styles.moduleNode} ${styles.nodeFinance}`}><BarChart3 size={15} />Finance<span /></div>
      <div className={`${styles.moduleNode} ${styles.nodeCrm}`}><Target size={15} />CRM<span /></div>
      <div className={`${styles.moduleNode} ${styles.nodePeople}`}><UsersRound size={15} />HRMS<span /></div>
      <div className={`${styles.moduleNode} ${styles.nodeStock}`}><Boxes size={15} />Inventory<span /></div>
      <div className={styles.workspace}>
        <div className={styles.workspaceHeader}><Layers3 size={14} /><strong>Your workspace</strong><span><Check size={9} /> In sync</span></div>
        <div className={styles.workspaceBody}>
          <div className={styles.workspaceRail}><span /><span /><span /><span /></div>
          <div className={styles.workspaceContent}>
            <div className={styles.workspaceTiles}><span /><span /><span /></div>
            <div className={styles.workspaceChart}>
              {[38, 57, 44, 72, 62, 88, 100].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}
            </div>
            <div className={styles.workspaceLine}><span /><Check size={10} /></div>
          </div>
        </div>
      </div>
      <div className={styles.connectedPill}><span />One shared source of truth</div>
    </div>
  );
}
