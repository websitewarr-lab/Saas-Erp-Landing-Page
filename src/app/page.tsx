"use client";
import { useState, type ComponentType } from "react";
import HeroLaptopShowcase from "./components/HeroLaptopShowcase";
import HeroBackground from "./components/HeroBackground";
import PlatformModulesShowcase from "./components/PlatformModulesShowcase";
import ProductShowcase from "./components/ProductShowcase";
import IndustrySolutions from "./components/IndustrySolutions";
import ConnectedWorkflow from "./components/ConnectedWorkflow";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CloudCog,
  Code2,
  Database,
  FileCheck2,
  FileText,
  Fingerprint,
  Globe2,
  Layers3,
  LayoutDashboard,
  LockKeyhole,
  ReceiptText,
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

const capabilities: Array<{ title: string; description: string; icon: IconType }> = [
  { title: "Workflow Automation", description: "Move work forward automatically", icon: Workflow },
  { title: "Role-Based Access", description: "Give every team the right view", icon: LockKeyhole },
  { title: "Approval Management", description: "Keep decisions moving clearly", icon: FileCheck2 },
  { title: "Real-Time Dashboards", description: "Monitor the moments that matter", icon: LayoutDashboard },
  { title: "Custom Reports", description: "Answer the questions you ask", icon: ReceiptText },
  { title: "Notifications", description: "Keep everyone in the loop", icon: Bell },
  { title: "Document Management", description: "Keep context close to work", icon: FileText },
  { title: "Multi-Company & Branch", description: "Scale without losing clarity", icon: Globe2 },
  { title: "Mobile Access", description: "Stay close from anywhere", icon: CloudCog },
  { title: "API Integration", description: "Connect your existing stack", icon: Code2 },
  { title: "Audit Logs", description: "Make every change traceable", icon: Fingerprint },
  { title: "Reliable Infrastructure", description: "Build on a steady foundation", icon: Database },
];

const stories = [
  { company: "Customer story", industry: "Manufacturing", challenge: "Disconnected production, purchasing and finance workflows.", solution: "A connected operating view across teams and modules.", result: "Customer Result" },
  { company: "Customer story", industry: "Distribution", challenge: "Limited visibility across stock, orders and warehouse movement.", solution: "A clearer inventory-to-delivery workflow with shared reporting.", result: "Customer Result" },
  { company: "Customer story", industry: "Professional Services", challenge: "Project work, people capacity and billing lived in separate places.", solution: "One flow for projects, time, people and finance.", result: "Customer Result" },
];

const plans = [
  { name: "Starter", description: "For small teams", features: ["Core business modules", "Essential dashboards", "Guided onboarding"], recommended: false },
  { name: "Business", description: "For growing businesses", features: ["All core modules", "Workflow automation", "Priority support"], recommended: true },
  { name: "Enterprise", description: "For advanced requirements", features: ["Custom workflows", "Multi-company setup", "Dedicated success support"], recommended: false },
];

const faqs = [
  ["What is an ERP?", "An ERP is a connected business platform that brings core operations like finance, people, sales, inventory and reporting into one shared system."],
  ["Which business modules are included?", "Warrgyizmorsch is designed around finance, HR and payroll, CRM and sales, purchasing, inventory, manufacturing, projects, reporting and integrations."],
  ["Can the ERP be customized?", "Yes. Workflows, fields, permissions and connected processes can be shaped around your business requirements."],
  ["Can existing data be migrated?", "Yes. Data migration is part of the implementation process and is planned around the systems and records you already use."],
  ["Does the ERP support multiple branches?", "The platform is designed to support multi-company and multi-branch operating models where required."],
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

      <main id="top">
        <section className="hero-zoho-section" id="solutions">
          {/* Ambient Lighting, Gradients, Tech Patterns & 3D Perspective Grid Floor */}
          <HeroBackground />

          <div className="w-full max-w-[1440px] px-4 sm:px-6 mx-auto relative z-10 flex flex-col items-center text-center">

            {/* Main Headline from Zoho screenshot 2 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0F172A] tracking-[-0.03em] leading-[1.12] max-w-5xl mx-auto mb-5">
              A new era of ERP software<br className="hidden sm:inline" />{" "}
              from Warrgyizmorsch
            </h1>

            {/* Subtitle from Zoho screenshot 2 */}
            <p className="text-[16px] sm:text-[17.5px] text-[#475569] max-w-2xl mx-auto leading-relaxed mb-8">
              Warrgyizmorsch ERP keeps pace with your technological transformation helping you become operationally faster, leaner, innovative, resilient, and more relevant.
            </p>

            {/* Action Buttons from Zoho screenshot 2 */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8 sm:mb-10">
              <a
                href="#contact"
                style={{ color: '#FFFFFF', backgroundColor: '#0C1E38' }}
                className="hero-btn-primary px-7 py-3 rounded-md !text-white text-[14.5px] font-semibold shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 inline-flex items-center justify-center cursor-pointer"
              >
                Start a Free Trial
              </a>
              <a
                href="#contact"
                style={{ color: '#34241A', backgroundColor: '#F4EDE7' }}
                className="hero-btn-secondary px-7 py-3 rounded-md !text-[#34241A] text-[14.5px] font-semibold border border-[#E7DDD5] transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center justify-center cursor-pointer"
              >
                Request a demo
              </a>
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
            <SectionIntro eyebrow="Why Warrgyizmorsch" title="A simpler way to run your business." description="Connect your people, processes and data in one platform built to make everyday operations simpler." align="center" />
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

        <section className="section capabilities-section" id="features">
          <div className="container capabilities-grid">
            <SectionIntro eyebrow="Key capabilities" title="Built for the way work actually moves." description="The small details that help teams stay focused, accountable and in sync." />
            <div className="capability-list">
              {capabilities.map(({ title, description, icon: Icon }) => (
                <div className="capability-item" key={title}>
                  <span><Icon /></span>
                  <div><strong>{title}</strong><p>{description}</p></div>
                  <ArrowUpRight />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions 8-Card Grid */}
        <IndustrySolutions />

        <section className="section stories-section">
          <div className="container">
            <div className="section-heading-row">
              <SectionIntro eyebrow="Customer stories" title="Built for real operating days." description="Placeholder stories ready to become your customers' experiences when the time is right." />
              <a className="text-link" href="#contact">View case studies <ArrowUpRight /></a>
            </div>
            <div className="stories-grid">
              {stories.map((story) => (
                <article className="story-card" key={story.industry}>
                  <div className="story-top"><span className="story-mark"><BriefcaseBusiness /></span><span>{story.industry}</span></div>
                  <h3>{story.company}</h3>
                  <dl>
                    <div><dt>Challenge</dt><dd>{story.challenge}</dd></div>
                    <div><dt>Solution</dt><dd>{story.solution}</dd></div>
                  </dl>
                  <div className="story-result"><span>{story.result}</span><ArrowUpRight /></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="pricing">
          <div className="container">
            <SectionIntro eyebrow="Plans" title="Pricing that grows with you." description="Start with the right foundation and shape the setup around what your business needs." align="center" />
            <div className="pricing-grid">
              {plans.map((plan) => (
                <article className={plan.recommended ? "pricing-card pricing-card-featured" : "pricing-card"} key={plan.name}>
                  {plan.recommended ? <span className="recommended">Recommended</span> : null}
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                  <strong className="custom-price">Custom Pricing</strong>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}><Check /> {feature}</li>
                    ))}
                  </ul>
                  <a className={plan.recommended ? "button button-light" : "button button-secondary button-full"} href="#contact">
                    {plan.recommended ? "Book a Demo" : "Request a Quote"} <ArrowRight />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-[15px] bg-white relative overflow-hidden" id="faq">
          <div className="container mx-auto px-6 max-w-[1100px] relative z-10 py-0">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
              {/* Left Column */}
              <div className="lg:w-1/3">
                <div className="sticky top-28">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-6 leading-[1.1]">
                    A clearer start begins here.
                  </h2>
                  <p className="text-[16px] text-[#64748B] leading-relaxed max-w-sm">
                    A few of the things teams usually want to know before they take the next step.
                  </p>
                </div>
              </div>

              {/* Right Column - Accordion */}
              <div className="lg:w-2/3">
                <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
                  {faqs.map(([question, answer], index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div key={question} className="py-5">
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() => setOpenFaq(isOpen ? null : index)}
                          className="flex w-full items-center justify-between text-left focus:outline-none group cursor-pointer"
                        >
                          <span className={`text-[16px] font-bold pr-8 transition-colors ${isOpen ? 'text-[#2563EB]' : 'text-slate-900 group-hover:text-[#2563EB]'}`}>
                            {question}
                          </span>
                          <span className={`flex-shrink-0 transition-transform duration-300 flex items-center justify-center w-7 h-7 rounded-full ${isOpen ? 'rotate-180 bg-[#EBF3FF] text-[#2563EB]' : 'text-slate-400 group-hover:bg-slate-50'}`}>
                            <ChevronDown className="w-5 h-5" />
                          </span>
                        </button>

                        <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                          <div className="overflow-hidden">
                            <p className="text-[15px] text-[#475569] leading-relaxed pr-10 pb-1">
                              {answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
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
                  <a className="button button-light" href="mailto:hello@warrgyizmorsch-erp.example">Book a Demo <ArrowRight /></a>
                  <a className="button button-ghost-light" href="mailto:hello@warrgyizmorsch-erp.example">Request a Quote</a>
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
