import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Payouts | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Payout & Banking"
      title="Payouts"
      description="Send secure, instant business payouts to bank accounts, UPI IDs, and wallets at scale. Built for payroll, vendor payments, refunds, and marketplace settlements with 99.9% success rates."
      accent="Move money at the speed of business. Instant. Secure. Compliant."
      features={[
        ["Send", "Instant Bank Transfers", "IMPS, NEFT, RTGS, and UPI payouts to any Indian bank account with real-time credit confirmation."],
        ["Users", "Bulk Payouts", "Upload CSV or use API to process 10,000+ payouts in a single batch with automated validation and retry."],
        ["ShieldCheck", "Beneficiary Verification", "Penny-drop and name-match verification before payout to eliminate failed transfers and compliance risk."],
        ["Repeat2", "Recurring & Scheduled", "Set up payroll, vendor retainers, and subscription payouts on daily, weekly, or monthly schedules."],
        ["AlertCircle", "Smart Routing & Fallback", "Auto-route via fastest rail (UPI > IMPS > NEFT) with instant fallback on bank downtime."],
        ["FileCheck", "Compliance & Reporting", "Built-in TDS deduction, Form 16A generation, and audit-ready payout registers for statutory compliance."],
      ]}
      steps={[
        ["01", "Add Beneficiaries", "Upload beneficiary details via dashboard or API. Auto-verify with penny-drop and name matching."],
        ["02", "Create Payout Batch", "Upload amounts via CSV, use API, or set up recurring rules. Validate and preview before release."],
        ["03", "Track & Reconcile", "Real-time status tracking, instant failure alerts, and auto-reconciliation with settlement reports."],
      ]}
    />
  );
}