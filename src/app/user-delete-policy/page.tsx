import type { Metadata } from "next";
import { Clock, FileText, Mail, ShieldCheck, UserRoundX } from "lucide-react";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata: Metadata = {
  title: "Account Deletion Policy",
  description:
    "How to request deletion of your Mossie ERP account and associated personal data, including identity verification and processing times.",
  alternates: {
    canonical: "/user-delete-policy",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const deletionEmail = "info@mossierp.com";
const emailSubject = "Account Deletion Request";
const emailTemplate = `Hello Mossie ERP Team,

Please permanently delete my Mossie ERP account and its associated personal data.

Registered email address: [Your registered email]
Username (if applicable): [Your username]
Company or workspace name (if applicable): [Your company or workspace]

Thank you.`;
const emailHref = `mailto:${deletionEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailTemplate)}`;

export default function AccountDeletionPolicyPage() {
  return (
    <div className="erp-site min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <SiteHeader />

      <main id="main-content" className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Page Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold tracking-widest uppercase">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              Legal &amp; Compliance
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-[-0.03em] leading-[1.12]">
              Account Deletion Policy
            </h1>
          </div>

          {/* Main Card */}
          <div className="bg-card text-card-foreground border border-border rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-sm leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
                <Mail className="w-5 h-5 shrink-0 text-primary" aria-hidden="true" />
                1. Request Account Deletion
              </h2>
              <p>
                To delete your <strong>Mossie ERP</strong> account and associated
                personal data, email our Data Governance Team from your registered
                email address.
              </p>
              <div className="bg-surface border border-border rounded-2xl p-4 space-y-2">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${deletionEmail}`}
                    className="text-primary font-semibold break-all underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-sm"
                  >
                    {deletionEmail}
                  </a>
                </p>
                <p><strong>Subject:</strong> {emailSubject}</p>
              </div>
              <p>Please include:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Your registered email address.</li>
                <li>Your username, if applicable.</li>
                <li>Your company or workspace name, if applicable, so we can identify the correct account.</li>
              </ul>
              <p><strong>Do not send your password.</strong></p>
              <a
                href={emailHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-brand-accent-hover transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Email Deletion Request
              </a>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
                <FileText className="w-5 h-5 shrink-0 text-primary" aria-hidden="true" />
                2. Email Template
              </h2>
              <p>You can use the following template for your request:</p>
              <pre className="bg-surface border border-border rounded-2xl p-4 whitespace-pre-wrap wrap-anywhere font-sans text-sm leading-relaxed">
                {emailTemplate}
              </pre>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
                <Clock className="w-5 h-5 shrink-0 text-primary" aria-hidden="true" />
                3. Verification &amp; Processing Time
              </h2>
              <p>
                We verify your identity before processing a deletion request to
                protect your account against unauthorized requests.
              </p>
              <p className="bg-primary/5 border border-primary/20 rounded-2xl p-4">
                We will process your request and delete your account within{" "}
                <strong className="font-bold text-primary">24-48 working hours</strong>{" "}
                after verifying your identity.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
                <UserRoundX className="w-5 h-5 shrink-0 text-primary" aria-hidden="true" />
                4. Data Covered by Your Request
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Account information:</strong> Your login credentials, registration details, and personal account profile.</li>
                <li><strong>Profile information:</strong> Your personal preferences, user settings, and display details.</li>
                <li><strong>Associated personal data:</strong> Personal saved items, history, and uploads linked to your account.</li>
              </ul>
              <p>
                Deleting your individual user account does not delete your
                organization&apos;s shared ERP records or other users&apos; accounts.
                Business records that must be retained for legal, accounting, or
                contractual obligations are handled separately from your personal
                account deletion request.
              </p>
              <p>
                Account deletion is permanent. Save any personal information you
                need before submitting your request. For questions about deletion,
                contact our team at{" "}
                <a
                  href={`mailto:${deletionEmail}`}
                  className="text-primary font-semibold break-all underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-sm"
                >
                  {deletionEmail}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
