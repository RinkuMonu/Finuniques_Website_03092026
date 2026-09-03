import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Reconciliation | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Manage Payments"
      title="Reconciliation"
      description="Automated reconciliation engine that matches payments, fees, refunds, and settlements across all your payment channels. Eliminate manual spreadsheets and close your books faster with 100% accuracy."
      accent="Match every transaction. Close books in hours, not days."
      features={[
        ["Repeat2", "Auto-Match Engine", "Intelligently match payments against orders, invoices, and settlements across gateways, UPI, cards, and wallets."],
        ["ShieldCheck", "Fee & Charge Verification", "Automatically verify gateway fees, MDR, platform charges, and TDS deductions against your commercial agreements."],
        ["AlertCircle", "Exception Management", "Flag unmatched, partial, or disputed transactions with root-cause analysis and suggested resolutions."],
        ["Calendar", "Multi-Cycle Support", "Reconcile daily, weekly, or monthly cycles with configurable cut-off times and settlement calendars."],
        ["FileText", "Settlement Report Ingestion", "Auto-ingest bank statements, gateway settlement files, and NPCI reports via SFTP, API, or email parsing."],
        ["BarChart3", "Audit-Ready Trail", "Maintain a complete audit trail with timestamps, match logic, and user actions for compliance and reporting."],
      ]}
      steps={[
        ["01", "Connect Sources", "Link your gateways, bank accounts, ERP, and order management systems via API or SFTP."],
        ["02", "Configure Rules", "Define matching logic, tolerance thresholds, fee structures, and settlement calendars."],
        ["03", "Automate & Monitor", "Run reconciliation on schedule, review exceptions in the dashboard, and export journal entries."],
      ]}
    />
  );
}