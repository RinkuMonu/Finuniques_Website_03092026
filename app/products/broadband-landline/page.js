import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Broadband & Landline Bill Payment | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Utility Services"
      title="Broadband & Landline Bill Payment"
      description="Pay broadband, leased line, and landline bills for all business locations. Coverage across JioFiber, Airtel Xstream, BSNL, ACT, Hathway, Tata Play Fiber, and 50+ ISPs and telecom circles."
      accent="Every connection. Every provider. Paid on time, every time."
      features={[
        ["MonitorSmartphone", "50+ ISP & Telecom Coverage", "JioFiber, Airtel Xstream, BSNL Bharat Fiber, ACT Fibernet, Hathway, Tata Play Fiber, You Broadband, Spectra, and circle-specific landline providers."],
        ["Building2", "Multi-Location Connectivity", "Manage internet and phone for offices, branches, warehouses, data centers, and remote sites across India."],
        ["FileText", "Auto-Fetch Bills", "Customer ID/account number based auto-fetch. Leased line SLA credits and usage overage auto-calculated."],
        ["Calendar", "Recurring & Scheduled Payments", "Monthly auto-pay for broadband. Quarterly/annual for leased lines. Approval workflows for high-value circuits."],
        ["CreditCard", "Unified Payment & Invoicing", "Single payment for all connections. Consolidated GST invoice for telecom expense deduction and audit."],
        ["BarChart3", "Connectivity Cost Intelligence", "Track cost per Mbps, uptime vs. SLA, circuit utilization, and benchmark spend across locations."],
      ]}
      steps={[
        ["01", "Add Connections", "Upload customer IDs/account numbers with location, circuit type, and cost center tags."],
        ["02", "Automate Payments", "Set auto-pay schedules, approval limits, and SLA credit tracking for leased lines."],
        ["03", "Pay & Analyze", "One-click payment for all circuits. Monitor connectivity costs, uptime, and optimize circuit portfolio."],
      ]}
    />
  );
}