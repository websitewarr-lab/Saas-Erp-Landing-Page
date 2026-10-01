"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight, Check, ChevronRight, Search, X } from "lucide-react";
import type { EdgeSuperpower, ModulePageConfig } from "./moduleData";
import FeatureIcon from "./FeatureIcon";
import FeatureIllustration from "./FeatureIllustration";
import styles from "./ModuleFeatures.module.css";

type FeaturesProps = { config: ModulePageConfig };

export function HighlightedFeatures({ config }: FeaturesProps) {
  const [selected, setSelected] = useState<EdgeSuperpower | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingId = `${config.slug}-highlighted-heading`;

  function openFeature(feature: EdgeSuperpower) {
    setSelected(feature);
    dialogRef.current?.showModal();
  }

  return (
    <section id="edge-section" className={`${styles.section} ${styles.highlights}`} aria-labelledby={headingId}>
      <div className={styles.container}>
        {/* Section Intro */}
        <header className={styles.heading}>
          <p className={styles.eyebrow}>{config.edge.eyebrow || "Highlighted features"}</p>
          <h2 id={headingId}>
            {config.edge.title}
            <span>{config.edge.titleHighlight}</span>
          </h2>
        </header>
        {/* Superpower cards share one layout; each module supplies its own content and visuals. */}
        <div className={styles.cards}>
          {config.edge.superpowers.slice(0, 5).map((feature) => (
            <button className={styles.card} type="button" key={feature.id} onClick={() => openFeature(feature)} aria-haspopup="dialog">
              <span className={styles.featureTile} data-tone={feature.visual.tone}><FeatureIcon name={feature.visual.icon} /></span>
              <span className={styles.cardArrow}><ChevronRight size={18} /></span>
              <h3>{feature.visual.title}</h3>
              <p>{feature.summary}</p>
              <span className={styles.cardLink}>Explore feature <ArrowRight size={15} /></span>
            </button>
          ))}
        </div>
      </div>
      <dialog ref={dialogRef} className={`${styles.section} ${styles.featureDialog}`} aria-labelledby={`${config.slug}-feature-dialog-title`} onClick={event => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialogRef.current?.close();
      }}>
        <button className={styles.closeDialog} type="button" aria-label="Close feature details" onClick={() => dialogRef.current?.close()} autoFocus><X size={21} /></button>
        {selected && <div className={styles.dialogLayout}>
          <div className={styles.dialogCopy}>
            <p className={styles.eyebrow}>Highlighted feature</p>
            <span className={styles.featureTile} data-tone={selected.visual.tone}><FeatureIcon name={selected.visual.icon} /></span>
            <h2 id={`${config.slug}-feature-dialog-title`}>{selected.title}</h2>
            <p>{selected.description}</p>
            {/* Before vs After Comparison Strip */}
            <div className={styles.comparisonNotes}>
              <div><span>Without connected tools</span><p>{selected.legacyComparison.replace(/^✕\s*Legacy[^:]*:\s*/, "")}</p></div>
              <div><span><Check size={14} /> With MossiERP</span><p>{selected.mossiComparison.replace(/^✓\s*MossiERP:\s*/, "")}</p></div>
            </div>
            <div className={styles.impact}><Check size={16} />{selected.impactMetric}</div>
          </div>
          <FeatureIllustration visual={selected.visual} moduleName={config.featuresCatalog.previewName} />
        </div>}
      </dialog>
    </section>
  );
}

export function AllFeatures({ config }: FeaturesProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedId, setSelectedId] = useState(config.featuresCatalog.items[0]?.id);
  const navRef = useRef<HTMLDivElement>(null);
  const headingId = `${config.slug}-all-features-heading`;
  const panelId = `${config.slug}-feature-panel`;

  // Filter features by active category and search query, preserving every catalog item.
  const query = searchQuery.trim().toLowerCase();
  const filteredFeatures = config.featuresCatalog.items.filter(item =>
    (selectedCategory === "all" || item.category === selectedCategory) &&
    (!query || [item.title, item.visual.title, item.description, item.categoryLabel, ...item.bullets].some(text => text.toLowerCase().includes(query)))
  );
  const selected = filteredFeatures.find(feature => feature.id === selectedId) ?? filteredFeatures[0];

  useEffect(() => {
    if (!selected) return;
    const activeTab = navRef.current?.querySelector<HTMLButtonElement>(`[id="${config.slug}-tab-${selected.id}"]`);
    if (activeTab && navRef.current) {
      const nav = navRef.current;
      const tabTop = activeTab.offsetTop;
      const tabBottom = tabTop + activeTab.offsetHeight;
      if (tabTop < nav.scrollTop || tabBottom > nav.scrollTop + nav.clientHeight) {
        activeTab.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [selected, config.slug]);

  function resetFilters() {
    setSearchQuery("");
    setSelectedCategory("all");
  }

  function navigateFeatures(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % filteredFeatures.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + filteredFeatures.length) % filteredFeatures.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = filteredFeatures.length - 1;
    else return;
    event.preventDefault();
    setSelectedId(filteredFeatures[next].id);
    navRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }

  return (
    <section id="features-matrix" className={`${styles.section} ${styles.catalog}`} aria-labelledby={headingId}>
      <div className={styles.container}>  
        <div className={styles.catalogHeader}>
          <header className={styles.heading}>
            <p className={styles.eyebrow}>{config.featuresCatalog.eyebrow || "All features"}</p>
            <h2 id={headingId}>
              Everything you need to <span>{config.featuresCatalog.headline.action}</span>
            </h2>
            <p className={styles.intro}>{config.featuresCatalog.headline.description}</p>
          </header>
          {/* Live Search Bar */}
          <div className={styles.search}>
            <Search size={18} aria-hidden="true" />
            <label htmlFor={`${config.slug}-feature-search`} className={styles.srOnly}>Search {config.moduleName} features</label>
            <input id={`${config.slug}-feature-search`} type="search" value={searchQuery} onChange={event => setSearchQuery(event.target.value)} placeholder="Find a feature…" />
            {searchQuery && <button type="button" onClick={() => setSearchQuery("")} aria-label="Clear feature search"><X size={16} /></button>}
          </div>
        </div>
        {/* Category Filter Pills */}
        <span className={styles.srOnly} role="status">{filteredFeatures.length} features found</span>
        {selected ? <div className={styles.explorer}>
          <div className={styles.featureNav} ref={navRef} role="tablist" aria-label={`${config.moduleName} features`} aria-orientation="vertical">
            {filteredFeatures.map((feature, index) => <button
              type="button" role="tab" key={feature.id} id={`${config.slug}-tab-${feature.id}`}
              aria-selected={selected.id === feature.id} aria-controls={panelId} tabIndex={selected.id === feature.id ? 0 : -1}
              onClick={() => setSelectedId(feature.id)} onKeyDown={event => navigateFeatures(event, index)}
              className={styles.featureTab}
            >
              <span className={styles.featureTile} data-tone={feature.visual.tone}><FeatureIcon name={feature.visual.icon} /></span>
              <strong>{feature.visual.title}</strong>
              {selected.id === feature.id ? <ArrowRight className={styles.tabArrow} /> : <ChevronRight className={styles.tabArrow} />}
            </button>)}
          </div>
          <div id={panelId} className={styles.featurePanel} role="tabpanel" tabIndex={0} aria-labelledby={`${config.slug}-tab-${selected.id}`}>
            <div className={styles.featureDetails}>
              <div className={styles.featureHeader}>
                <span className={styles.featureTile} data-tone={selected.visual.tone}><FeatureIcon name={selected.visual.icon} /></span>
                <div className={styles.featureHeadingBlock}>
                  <span className={styles.categoryBadge}><i />{selected.categoryLabel}</span>
                  <h3>{selected.visual.title}</h3>
                </div>
              </div>
              <p>{selected.description}</p>
              <ul className={styles.benefits}>{selected.bullets.map(bullet => <li key={bullet}><span><Check size={13} /></span>{bullet}</li>)}</ul>
              <a className={styles.primary} href="#contact">Explore with a demo <ArrowRight size={17} /></a>
            </div>
            <FeatureIllustration visual={selected.visual} moduleName={config.featuresCatalog.previewName} />
          </div>
        </div> : <div className={styles.emptyState}>
          <Search size={30} aria-hidden="true" /><h3>No matching features</h3>
          <p>No features matched “{searchQuery}” in this category.</p>
          <button className={styles.primary} type="button" onClick={resetFilters}>Clear filters <ArrowRight size={16} /></button>
        </div>}
      </div>
    </section>
  );
}
