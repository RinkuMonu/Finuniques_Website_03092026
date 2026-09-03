import { BusinessPage } from "@/components/business-page";
export const metadata = { title: "Payment Analytics | Finunique" };
export default function Page() {
  return (
    <BusinessPage
      eyebrow="Manage Payments"
      title="Payment Analytics"
      description="Deep-dive into your payment performance with cohort analysis, funnel visualisation, decline reason intelligence and revenue optimisation insights."
      accent="Data that drives decisions. Analytics that accelerate growth."
      features={[
        ["BarChart3", "Success Rate Intelligence", "Breakdown by method, gateway, geography, device, time — identify and fix conversion leaks."],
        ["TrendingUp", "Revenue Analytics", "GMV, net revenue, take rate, refund rate, chargeback rate with period-over-period comparisons."],
        ["CreditCard", "Method Performance", "Cards vs UPI vs wallets vs net banking — success rates, latency, customer preference trends."],
        ["Search", "Decline Reason Mining", "Automated categorisation of decline codes — actionable retry and routing recommendations."],
        ["Users", "Customer Cohorts", "New vs returning, high-value segments, churn risk — tailor experiences by behaviour."],
        ["FileCheck", "Export & Integration", "Scheduled reports (CSV/PDF), API access, webhook streaming and BI tool connectors (Metabase, Looker)."],
      ]}
      steps={[
        ["01", "Connect", "Analytics auto-enabled — no additional integration needed."],
        ["02", "Explore", "Pre-built dashboards or build custom views with drag-and-drop."],
        ["03", "Act", "Set alerts, automate optimisations and share insights with your team."],
      ]}
    />
  );
}