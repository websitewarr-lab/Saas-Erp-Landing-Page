"use client";

import React from "react";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="erp-site min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <SiteHeader />

      <main className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Page Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-extrabold tracking-widest uppercase">
              <ShieldCheck className="w-4 h-4" />
              Legal & Compliance
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Last updated: September 17, 2026 | Effective Date: September 17, 2026
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-slate-700 text-sm leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <Eye className="w-5 h-5 text-blue-600" />
                1. Overview & Commitment
              </h2>
              <p>
                At <strong>MossiERP Systems</strong> (&ldquo;MossiERP&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we take enterprise data privacy and data governance seriously. This Privacy Policy governs how we collect, process, store, and safeguard corporate and personal information obtained when you visit our website, subscribe to our SaaS ERP services, or interact with our software applications.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <FileText className="w-5 h-5 text-blue-600" />
                2. Information We Collect
              </h2>
              <p>
                Depending on your interaction with MossiERP, we collect the following categories of data:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>
                  <strong>Account & Registration Details:</strong> Name, work email address, job title, phone number, company name, and billing details provided during registration or demo requests.
                </li>
                <li>
                  <strong>Enterprise Operational Data:</strong> Database inputs, inventory logs, CRM records, employee attendance logs, financial journal vouchers, and operational metrics processed within your ERP tenant.
                </li>
                <li>
                  <strong>System Usage Analytics:</strong> Anonymized log data, browser user-agents, IP addresses, session durations, and access timestamps collected to maintain system stability and enhance security.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <Lock className="w-5 h-5 text-blue-600" />
                3. How We Protect Your Data
              </h2>
              <p>
                MossiERP employs bank-grade security protocols, including AES-256 encryption at rest, TLS 1.3 encryption in transit, strict multi-tenant data isolation, role-based access control (RBAC), and automated continuous backup policies to prevent unauthorized access or data loss.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                4. Data Sharing & Third Parties
              </h2>
              <p>
                We do not sell, rent, or monetize your personal or enterprise data under any circumstances. We may share necessary transaction data only with trusted enterprise cloud infrastructure providers (e.g., AWS, GCP) and licensed payment gateways strictly to execute contracted service agreements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                5. Contact & Privacy Officer
              </h2>
              <p>
                If you have any questions regarding this Privacy Policy or wish to exercise your data access/deletion rights under GDPR, CCPA, or applicable data protection laws, please contact our Data Governance Team:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs font-mono space-y-1 text-slate-700">
                <p><strong>Email:</strong> privacy@mossierp.com</p>
                <p><strong>Entity:</strong> MossiERP Systems Pvt Ltd</p>
                <p><strong>Support:</strong> +1 (800) 555-MOSSI</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

