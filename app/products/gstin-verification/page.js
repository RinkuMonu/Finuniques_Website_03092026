import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "GSTIN Verification | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Verification Services"
      title="GSTIN Verification"
      description="Instant GSTIN validation and business detail retrieval from the GST Network. Verify registration status, legal name, trade name, address, constitution, and filing compliance for vendor onboarding and B2B KYC."
      accent="Verify any GSTIN in seconds. Government-sourced. Audit-ready."
      features={[
        ["BriefcaseBusiness", "Real-Time GSTN Lookup", "Direct GST Network integration — validate GSTIN structure, registration status, and taxpayer details."],
        ["FileText", "Comprehensive Business Data", "Legal name, trade name, principal/additional places of business, constitution (proprietorship/partnership/company), date of registration."],
        ["ShieldCheck", "Filing Compliance Check", "Return filing status (GSTR-1, GSTR-3B), last return filed, tax payment status, and cancellation/suspension history."],
        ["Zap", "Sub-Second API", "Verification in <300ms. Batch API for vendor onboarding at scale with async webhook callbacks."],
        ["Target", "Vendor Onboarding Flow", "White-labeled GSTIN capture → auto-fetch details → pre-fill onboarding form → manual review only on mismatch."],
        ["FileCheck", "Audit & Compliance", "Complete verification logs with timestamps, GSTN response codes, and data snapshots for regulatory evidence."],
      ]}
      steps={[
        ["01", "Capture GSTIN", "Vendor enters 15-digit GSTIN on your portal or via API during onboarding."],
        ["02", "Auto-Fetch & Validate", "System queries GSTN. Returns registration details, status, and filing compliance in real-time."],
        ["03", "Pre-Fill & Verify", "Business details auto-populated in onboarding form. Mismatches flagged for manual review."],
      ]}
    />
  );
}