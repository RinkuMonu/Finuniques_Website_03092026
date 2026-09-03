import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "FASTag & Fleet Recharge | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Utility Services"
      title="FASTag & Fleet Recharge"
      description="Manage FASTag recharge, toll expense tracking, and fleet payments for logistics, cab fleets, and corporate vehicles. Support for all issuer banks — NHAI, ICICI, HDFC, Axis, Paytm, SBI, Kotak, and more."
      accent="Zero toll delays. Full fleet visibility. One recharge platform."
      features={[
        ["CreditCard", "All Issuer Bank Support", "Recharge FASTags from NHAI, ICICI, HDFC, Axis, Paytm, SBI, Kotak, IDFC, Federal, Equitas, and 20+ issuers."],
        ["Users", "Fleet-Level Management", "Organize by vehicle, driver, route, or cost center. Bulk upload 1000+ FASTags with vehicle mapping."],
        ["Zap", "Instant Recharge & Low Balance Alerts", "Real-time recharge via BBPS/NPCI. Auto-recharge on low balance threshold. SMS/app alerts to driver and fleet manager."],
        ["BarChart3", "Toll Expense Analytics", "Trip-wise toll details, plaza-level analysis, route optimization, and monthly fleet toll budgets vs. actual."],
        ["FileText", "Consolidated Invoicing", "Single monthly invoice for all fleet FASTags with GST-compliant breakdown for input tax credit."],
        ["Settings", "Integration Ready", "API for TMS/ERP integration. Webhook for recharge status, low balance, and transaction notifications."],
      ]}
      steps={[
        ["01", "Register Fleet FASTags", "Upload FASTag IDs with vehicle numbers, driver tags, and cost center mapping."],
        ["02", "Set Auto-Recharge Rules", "Define minimum balance thresholds, recharge amounts, and approval workflows per vehicle/group."],
        ["03", "Track & Optimize", "Monitor real-time toll transactions, analyze route costs, and export GST-ready toll expense reports."],
      ]}
    />
  );
}