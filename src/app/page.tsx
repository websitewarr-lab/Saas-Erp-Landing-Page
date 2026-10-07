"use client";
import { useState, type ComponentType } from "react";
import HeroLaptopShowcase from "./components/HeroLaptopShowcase";
import HeroBackground from "./components/HeroBackground";
import PlatformModulesShowcase from "./components/PlatformModulesShowcase";
import ProductShowcase from "./components/ProductShowcase";
import IndustrySolutions from "./components/IndustrySolutions";
import ConnectedWorkflow from "./components/ConnectedWorkflow";
import IntegrationsEcosystem from "./components/IntegrationsEcosystem";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { PopupCtaButton } from "./components/popup-cta";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  ChevronDown,
  Layers3,
  Settings2,
  ShieldCheck,
  Workflow,
} from "lucide-react";

type IconType = ComponentType<{ className?: string; strokeWidth?: number }>;

const benefits: Array<{ title: string; description: string; icon: IconType; tone: string }> = [
  { title: "One connected platform", description: "Bring your core business operations together in one unified system.", icon: Layers3, tone: "icon-blue" },
  { title: "Automate manual work", description: "Replace repetitive tasks and hand-offs with workflows that keep work moving automatically.", icon: Workflow, tone: "icon-mint" },
  { title: "Real-time visibility", description: "See what’s happening across your business with live dashboards and connected data.", icon: BarChart3, tone: "icon-violet" },
  { title: "Built around your business", description: "Configure workflows, modules, roles and processes to match how your organization works.", icon: Settings2, tone: "icon-amber" },
  { title: "Secure by design", description: "Protect business and employee data with roles, permissions, audit trails and controlled access.", icon: ShieldCheck, tone: "icon-rose" },
  { title: "Scale with confidence", description: "Support growing teams, entities and operations without adding unnecessary complexity.", icon: BriefcaseBusiness, tone: "icon-blue" },
];

const faqs = [
  [
    "What is an ERP platform?",
    "An ERP (Enterprise Resource Planning) platform connects your core business functions—finance, sales, procurement, inventory, manufacturing, and HR—into a single, unified source of truth with real-time data flow across all teams.",
  ],
  [
    "Which business modules are included in Mossie ERP?",
    "Mossie ERP includes native modules for Accounting & Finance, HRMS & Payroll, CRM & Sales Pipelines, Inventory & Multi-Warehouse, Manufacturing & Production, Project Management, and Purchasing.",
  ],
  [
    "Can Mossie ERP be customized for our specific workflow?",
    "Yes. Custom fields, approval hierarchies, automated triggers, document layouts, and granular role-based permissions can be shaped around your unique business operations without writing custom code.",
  ],
  [
    "How does data migration from existing systems work?",
    "Our migration tools and onboarding team assist in mapping and importing your existing charts of accounts, contacts, open orders, and historical records with data verification at every step.",
  ],
  [
    "Does the platform support multi-company and multi-branch operations?",
    "Yes. Mossie ERP natively supports complex corporate structures with multiple companies, branches, warehouses, currencies, and consolidated financial statements in real time.",
  ],
  [
    "How secure is our enterprise and financial data?",
    "Mossie ERP employs enterprise-grade AES-256 and TLS 1.3 encryption, automated hourly backups, SOC-2 compliant cloud infrastructure, and immutable audit logs for every user action.",
  ],
];

function SectionIntro({ title, description, align = "left" }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "section-intro section-intro-center" : "section-intro"}>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="erp-site">
      <SiteHeader />

      <main id="main-content">
        <section className="hero-zoho-section" id="solutions">
          {/* Ambient Lighting, Gradients, Tech Patterns & 3D Perspective Grid Floor */}
          <HeroBackground />

          <div className="w-full max-w-[1440px] px-4 sm:px-6 mx-auto relative z-10 flex flex-col items-center text-center">

            {/* Main Headline from Zoho screenshot 2 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0F172A] tracking-[-0.03em] leading-[1.12] max-w-5xl mx-auto mb-5">
              A new era of ERP software<br className="hidden sm:inline" />{" "}
              from Mossie ERP
            </h1>

            {/* Subtitle from Zoho screenshot 2 */}
            <p className="text-[16px] sm:text-[17.5px] text-[#475569] max-w-2xl mx-auto leading-relaxed mb-8">
              Mossie ERP keeps pace with your technological transformation helping you become operationally faster, leaner, innovative, resilient, and more relevant.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8 sm:mb-10">
              <PopupCtaButton
                intent="trial"
                className="hero-btn-primary px-7 py-3 rounded-md bg-[#006fc9] hover:bg-[#005fae] text-white text-[14.5px] font-semibold shadow-md shadow-[#006fc9]/25 transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center justify-center cursor-pointer"
              >
                Start a Free Trial
              </PopupCtaButton>
              <PopupCtaButton
                className="hero-btn-secondary px-7 py-3 rounded-md bg-white hover:bg-slate-50 text-slate-800 text-[14.5px] font-semibold border border-slate-300 hover:border-slate-400 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center justify-center cursor-pointer"
              >
                Request a demo
              </PopupCtaButton>
            </div>

            {/* 3D Laptop Preview Showcase */}
            <HeroLaptopShowcase />
          </div>
        </section>

        <section className="trust-strip" aria-label="Trusted by growing businesses">
          <div className="container">
            <div className="logo-row">
              <span><b className="logo-glyph">n</b> Northwind</span>
              <span><b className="logo-glyph logo-glyph-round">b</b> Bluepeak</span>
              <span><b className="logo-glyph">c</b> Cascade Co.</span>
              <span><b className="logo-glyph logo-glyph-square">m</b> Meridian</span>
              <span><b className="logo-glyph">h</b> Hartwell</span>
              <span><b className="logo-glyph logo-glyph-round">f</b> Ferroline</span>
            </div>
          </div>
        </section>
        
        {/* AI-Powered Enterprise Product Showcase */}
        <ProductShowcase />
        
        <section className="section section-benefits">
          <div className="container">
            <SectionIntro eyebrow="Why Mossie ERP" title="A simpler way to run your business." align="center" />
            <div className="benefits-grid">
              {benefits.map(({ title, description, icon: Icon, tone }) => (
                <article className="benefit-card" key={title}>
                  <div className={`icon-tile ${tone}`}><Icon /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        
        
        {/* 8-Card Interactive Platform Modules Deck */}
        <PlatformModulesShowcase />

        {/* Connected Workflow Interactive Engine */}
        <ConnectedWorkflow />

        {/* Built-in Ecosystem & Live Integration Circuit Matrix */}
        <IntegrationsEcosystem />

       

        {/* Industry Solutions 8-Card Grid */}
        <IndustrySolutions />


        <section className="py-[20px] bg-white relative overflow-hidden" id="faq">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
            {/* Centered Headline matching reference layout */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-[38px] font-black uppercase tracking-tight text-[#0F172A] leading-tight sm:leading-snug">
                Everything you need to know about our
                <span className="block text-[#006fc9] mt-1 sm:mt-1.5">Enterprise ERP Solutions</span>
              </h2>
            </div>

            {/* Individual Accordion Cards */}
            <div className="space-y-3.5 sm:space-y-4">
              {faqs.map(([question, answer], index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={question}
                    className={`rounded-2xl transition-all duration-200 bg-white border ${
                      isOpen
                        ? "border-[#006fc9] shadow-xs"
                        : "border-slate-200/90 hover:border-slate-300"
                    }`}
                  >
                    <button
                      type="button"
                      id={`faq-btn-${index}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex items-center justify-between text-left p-5 sm:p-6 cursor-pointer select-none rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006fc9] focus-visible:ring-offset-2"
                    >
                      <span
                        className={`text-[15px] sm:text-[16px] font-bold tracking-tight pr-4 transition-colors ${
                          isOpen ? "text-[#006fc9]" : "text-[#0F172A]"
                        }`}
                      >
                        {question}
                      </span>
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-[#006fc9]/10 text-[#006fc9] rotate-180"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    </button>

                    <div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-btn-${index}`}
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[14px] sm:text-[14.5px] text-[#475569] leading-relaxed px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                          {answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section final-cta-section" id="contact">
          <div className="container">
            <div className="final-cta">
              <div className="cta-grid-lines" aria-hidden="true" />
              <div className="cta-content">
                <h2>Ready to bring your business together?</h2>
                <p>Discover how a connected ERP platform can simplify your operations and help your business grow with confidence.</p>
                <div className="hero-actions">
                  <PopupCtaButton className="button button-light">Book a Demo <ArrowRight /></PopupCtaButton>
                  <PopupCtaButton className="button button-ghost-light" intent="quote">Request a Quote</PopupCtaButton>
                </div>
              </div>
              <div className="cta-signal" aria-hidden="true"><span /><span /><span /><span /></div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
