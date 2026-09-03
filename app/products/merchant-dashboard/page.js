import { BusinessPage } from "@/components/business-page";
export const metadata = { title: "Merchant Dashboard | Finunique" };
export default function Page() {
  return (
    <BusinessPage
      eyebrow="Manage Payments"
      title="Merchant Dashboard"
      description="Your command center for payments, payouts, verification and analytics. Real-time visibility, actionable insights and complete control — all in one workspace."
      accent="One dashboard. Complete financial visibility."
      features={[
        ["LayoutDashboard", "Unified Transaction View", "Payments, payouts, refunds, settlements and verification — filter, search and export in seconds."],
        ["BarChart3", "Real-time Analytics", "Success rates, volume trends, decline reasons, settlement timelines and cohort analysis."],
        ["ShieldCheck", "Risk & Dispute Center", "Manage chargebacks, fraud alerts, risk rules and compliance cases from a single queue."],
        ["Users", "Team & Access Control", "Role-based access (Admin, Finance, Ops, Developer), audit logs and approval workflows."],
        ["CreditCard", "Virtual Terminal", "Manual payment entry for phone/email orders — no integration needed for occasional transactions."],
        ["Zap", "Webhook Management", "Configure, test, retry and monitor webhook deliveries with full payload visibility."],
      ]}
      steps={[
        ["01", "Login", "Access your dashboard with MFA-secured credentials."],
        ["02", "Customize", "Set up views, alerts, team roles and webhook endpoints."],
        ["03", "Operate", "Monitor, reconcile and optimise your financial operations daily."],
      ]}
    />
  );
}