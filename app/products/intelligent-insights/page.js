import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Intelligent Insights | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="AI Solutions"
      title="Intelligent Insights"
      description="Turn payment data into actionable business intelligence. AI-powered analytics that surface revenue opportunities, churn signals, operational inefficiencies, and growth levers — delivered as natural language insights, not just dashboards."
      accent="Your payments data. Finally talking back."
      features={[
        ["Brain", "Natural Language Insights", "Ask questions in plain English — \"Why did success rates drop last week?\" — get answers with root cause and recommended actions."],
        ["TrendingUp", "Revenue Opportunity Detection", "Identify underperforming payment methods, high-dropout checkout steps, eligible customers for EMI/BNPL, and optimal routing changes."],
        ["Users", "Customer Cohort Intelligence", "Segment by payment behavior, lifetime value, churn risk, preferred methods, and affordability appetite. Sync to marketing tools."],
        ["AlertCircle", "Anomaly Alerts", "Automatic detection of unusual patterns — success rate drops, refund spikes, chargeback clusters, settlement delays."],
        ["FileText", "Automated Reports", "Weekly business reviews, monthly board decks, and custom stakeholder reports generated and delivered on schedule."],
        ["BarChart3", "Predictive Modeling", "Forecast revenue, predict chargeback probability, estimate settlement cash flows, and model pricing changes."],
      ]}
      steps={[
        ["01", "Connect Data Sources", "Payment gateway, payouts, reconciliation, customer CRM, and order data — unified in one analytics layer."],
        ["02", "Define KPIs & Questions", "Set business metrics that matter: NRR, success rate, CAC payback, chargeback rate, settlement timing."],
        ["03", "Receive & Act", "Insights delivered via dashboard, email, Slack, or API. Track action taken and measure impact."],
      ]}
    />
  );
}