import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Water & Municipal Bill Payment | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Utility Services"
      title="Water & Municipal Bill Payment"
      description="Pay water bills, property tax, trade license fees, and other municipal dues for all your business properties across India. Unified platform for 200+ municipal corporations and water boards."
      accent="One platform. Every municipal dues. Zero missed deadlines."
      features={[
        ["CircleDollarSign", "Multi-Utility Coverage", "Water bills, property tax, trade license, professional tax, solid waste charges, and development charges."],
        ["Building2", "200+ Municipal Bodies", "Major corporations — BMC, BBMP, GHMC, MCD, PMC, AMC, KMC, and 200+ urban local bodies and water boards."],
        ["FileText", "Auto-Fetch & Reminders", "Consumer ID/property ID based auto-fetch. Monthly/quarterly reminders before due dates with bill copies."],
        ["Users", "Portfolio Management", "Group properties by city, property type, or owning entity. Bulk upload with GIS coordinates for large portfolios."],
        ["Calendar", "Scheduled Payments", "Auto-pay on due date or custom schedule. Multi-level approval for high-value property tax payments."],
        ["BarChart3", "Expense Tracking & Compliance", "Consolidated municipal expense reports. Track property tax deductions, GST on water, and compliance certificates."],
      ]}
      steps={[
        ["01", "Register Properties", "Add consumer/property IDs with location tags. System identifies municipal body and fetches current dues."],
        ["02", "Set Payment Calendar", "Configure auto-pay, approval workflows, and notification rules per property or group."],
        ["03", "Pay & Stay Compliant", "Single-click payment for all dues. Auto-generated receipts, challans, and compliance certificates for records."],
      ]}
    />
  );
}