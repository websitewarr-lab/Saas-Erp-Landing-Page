"use client";

import React from "react";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import { RefreshCw, DollarSign, Clock, HelpCircle } from "lucide-react";

export default function CancellationPolicyPage() {
  return (
    <div className="erp-site min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <SiteHeader />

      <main className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Page Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-extrabold tracking-widest uppercase">
              <RefreshCw className="w-4 h-4" />
              Subscriptions & Refunds
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Cancellation & Refund Policy
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Last updated: September 17, 2026 | Effective Date: September 17, 2026
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-slate-700 text-sm leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <Clock className="w-5 h-5 text-blue-600" />
                1. Subscription Cancellation Notice
              </h2>
              <p>
                At <strong>MossiERP</strong>, we aim to provide flexible SaaS subscription terms. You can request cancellation of your monthly or annual subscription at any time directly through your tenant account portal or by contacting your dedicated account manager.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>
                  <strong>Monthly Plans:</strong> Cancellations take effect at the conclusion of the current monthly billing cycle. Access to active ERP modules remains open until the last day of the paid cycle.
                </li>
                <li>
                  <strong>Annual Contracts:</strong> Annual Enterprise contracts require a written notice 30 days prior to the annual renewal date to prevent automatic contract renewal.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <DollarSign className="w-5 h-5 text-blue-600" />
                2. Refund Eligibility & Rules
              </h2>
              <p>
                Our refund terms are designed to be fair and transparent:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>
                  <strong>30-Day Money-Back Guarantee:</strong> New enterprise clients purchasing standard cloud SaaS packages are eligible for a 100% full refund within 30 calendar days of initial account activation if the software fails to meet agreed requirements.
                </li>
                <li>
                  <strong>Prorated Refunds:</strong> Partial month subscription fees are non-refundable after the 30-day initial guarantee window.
                </li>
                <li>
                  <strong>Custom Onboarding & Migration Services:</strong> Fees paid for dedicated custom software development, custom data migration, or on-site staff training services already completed are non-refundable.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                3. Data Export & Post-Cancellation Retention
              </h2>
              <p>
                Upon subscription termination, MossiERP provides a <strong>60-day grace period</strong> during which your system administrator can export complete database backups in standard SQL, CSV, or JSON formats at no additional cost. After 60 days, database instances are safely purged from cloud servers according to compliance standards.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                4. How to Request Cancellation or Refund
              </h2>
              <p>
                To initiate a cancellation or request a refund under our guarantee policy, please submit a request to our Billing Operations department:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs font-mono space-y-1 text-slate-700">
                <p><strong>Support Email:</strong> billing@mossierp.com</p>
                <p><strong>Response Time:</strong> Within 1 business day</p>
                <p><strong>Portal:</strong> Admin Dashboard &gt; Settings &gt; Billing &amp; Subscription</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

