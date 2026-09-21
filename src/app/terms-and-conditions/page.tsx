"use client";

import React from "react";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import { Scale, FileText, CheckCircle2, ShieldAlert } from "lucide-react";

export default function TermsAndConditionsPage() {
  return (
    <div className="erp-site min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <SiteHeader />

      <main className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Page Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-extrabold tracking-widest uppercase">
              <Scale className="w-4 h-4" />
              Terms of Service
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Last updated: September 17, 2026 | Effective Date: September 17, 2026
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-slate-700 text-sm leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <FileText className="w-5 h-5 text-blue-600" />
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing, registering for, or using the <strong>MossiERP platform</strong>, modules, mobile apps, or associated APIs (collectively, the &ldquo;Services&rdquo;), you agree to be bound by these Terms & Conditions. If you are entering into this agreement on behalf of a corporation or entity, you represent that you have legal authorization to bind such entity.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                2. Subscription & Tenant License Grant
              </h2>
              <p>
                Subject to compliance with these terms and payment of applicable license fees, MossiERP grants your organization a non-exclusive, non-transferable, global subscription license to utilize the subscribed ERP modules (CRM, Sales, Purchase, Inventory, Production, Accounting, HRMS, Project Management) for internal business operations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <ShieldAlert className="w-5 h-5 text-blue-600" />
                3. Acceptable Use & Account Responsibilities
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>
                  You are responsible for maintaining confidentiality of admin credentials and multi-factor authentication setup.
                </li>
                <li>
                  You agree not to reverse-engineer, decompile, or attempt to extract source code or core models of MossiERP.
                </li>
                <li>
                  You agree not to store unlawful, fraudulent, or malicious payloads within system database fields.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                4. Service Level Commitment (SLA) & Maintenance
              </h2>
              <p>
                MossiERP guarantees a monthly uptime service level of <strong>99.9%</strong> for cloud-hosted enterprise tenants, excluding scheduled zero-downtime maintenance windows communicated 48 hours in advance.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                5. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, MossiERP Systems shall not be liable for any indirect, incidental, consequential, or punitive damages arising from temporary network disruptions, third-party internet outages, or user input data entry errors.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                6. Governing Law & Dispute Resolution
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with applicable corporate technology laws. Any dispute arising out of or in connection with these terms shall be settled through binding arbitration before seeking judicial remedies.
              </p>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

