import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Settlement Reports | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Manage Payments"
      title="Settlement Reports"
      description="Finance-ready settlement reports that consolidate transactions, fees, refunds, and payouts across all payment modes. Export in formats your accounting team loves — no reformatting needed."
      accent="One report. Every settlement. Ready for your ledger."
      features={[
        ["FileText", "Unified Settlement View", "Consolidate gateway settlements, UPI credits, card batches, and wallet payouts into a single daily report."],
        ["Calculator", "Fee Breakdown", "Detailed MDR, platform fees, GST, TDS, and chargeback deductions mapped to each transaction."],
        ["RefreshCw", "Multi-Gateway Normalization", "Normalize column headers, date formats, and status codes across 10+ payment gateways and aggregators."],
        ["Download", "Flexible Export Formats", "Download as CSV, XLSX, PDF, or push directly to Google Sheets, Tally, Zoho Books, and QuickBooks."],
        ["Clock", "Scheduled Delivery", "Auto-email reports to finance, push to SFTP, or webhook to your ERP at your preferred cadence."],
        ["Search", "Drill-Down & Filter", "Filter by gateway, payment mode, date range, merchant ID, or settlement status with instant pivot views."],
      ]}
      steps={[
        ["01", "Configure Sources", "Add gateway credentials, bank accounts, and set up SFTP/API connections for auto-fetch."],
        ["02", "Define Report Template", "Choose columns, groupings, filters, and output format. Save as reusable templates."],
        ["03", "Schedule & Integrate", "Set delivery schedule, recipients, and integration endpoints. Reports arrive before your morning coffee."],
      ]}
    />
  );
}