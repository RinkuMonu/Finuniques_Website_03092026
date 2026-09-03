import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Corporate Mobile & DTH Recharge | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Utility Services"
      title="Corporate Mobile & DTH Recharge"
      description="Centralized mobile and DTH recharge management for businesses. Recharge employee phones, company devices, and office DTH connections across all operators — single dashboard, bulk upload, instant confirmation."
      accent="One platform. All operators. Every connection recharged."
      features={[
        ["Smartphone", "All Operator Coverage", "Jio, Airtel, Vi, BSNL, MTNL for mobile. Tata Play, Dish TV, d2h, Sun Direct, Airtel Digital TV for DTH."],
        ["Users", "Bulk Recharge Management", "Upload CSV with 1000+ numbers. Auto-validate numbers, detect operator, and process in single batch."],
        ["Zap", "Instant Credit & Confirmation", "Real-time recharge via operator APIs. Instant SMS/email confirmation to user and admin dashboard."],
        ["CreditCard", "Corporate Wallet & Limits", "Pre-funded wallet with auto-top-up. Set per-employee/per-connection monthly limits and approval workflows."],
        ["BarChart3", "Usage Analytics & Reports", "Track recharge spend by department, employee, operator. Export for telecom expense management and tax."],
        ["Calendar", "Scheduled & Recurring", "Auto-recharge on due date or balance threshold. Never miss a critical connection recharge."],
      ]}
      steps={[
        ["01", "Add Connections", "Upload employee/company mobile numbers and DTH subscriber IDs. Auto-detect operators."],
        ["02", "Set Rules & Limits", "Define monthly budgets, recharge thresholds, approval chains, and recurring schedules."],
        ["03", "Recharge & Track", "Manual one-click, bulk upload, or auto-recharge. Real-time status, invoices, and spend analytics."],
      ]}
    />
  );
}