import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Commercial Electricity Bill Payment | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Utility Services"
      title="Commercial Electricity Bill Payment"
      description="Pay electricity bills for all your business locations across India — offices, warehouses, retail stores, factories — through a single platform. Support for 50+ state electricity boards and private discoms with auto-fetch, scheduling, and bulk payment."
      accent="Every location. Every discom. One payment platform."
      features={[
        ["Zap", "Pan-India Discom Coverage", "50+ electricity boards — MSEDCL, BESCOM, TNEB, MPPKVVCL, DHBVN, UHBVN, TSSPDCL, APSPDCL, and all major private discoms (Tata Power, Adani, BSES, CESC)."],
        ["FileText", "Auto-Fetch Bills", "Enter consumer number once. System auto-fetches latest bill amount, due date, and consumption details monthly."],
        ["Users", "Multi-Location Management", "Organize by location, department, or cost center. Bulk upload 500+ consumer numbers with metadata."],
        ["Calendar", "Auto-Pay & Scheduling", "Set up auto-pay on bill date or due date. Approve workflows for high-value bills. Never miss a due date."],
        ["CreditCard", "Multiple Payment Modes", "Pay via UPI, net banking, corporate cards, or wallet. Split payment across modes for large bills."],
        ["BarChart3", "Consumption & Cost Analytics", "Track unit consumption, bill trends, peak/off-peak usage, and cost per location. Export for energy audits."],
      ]}
      steps={[
        ["01", "Add Consumer Accounts", "Upload consumer numbers with location tags. System validates and fetches first bill automatically."],
        ["02", "Configure Payment Rules", "Set auto-pay, approval limits, payment modes, and notification preferences per account."],
        ["03", "Pay & Monitor", "One-click pay all, schedule, or auto-pay. Real-time receipts, consumption dashboards, and expense reports."],
      ]}
    />
  );
}