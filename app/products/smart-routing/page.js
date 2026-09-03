import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Smart Payment Routing | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="AI Solutions"
      title="Smart Payment Routing"
      description="AI-powered dynamic routing that automatically sends each transaction to the best-performing gateway, PSP bank, or payment rail in real-time. Maximize success rates, minimize latency, and reduce costs without manual rules."
      accent="Every transaction. Best route. Automatically optimized."
      features={[
        ["Zap", "Real-Time Decision Engine", "ML model evaluates 50+ signals (bank health, latency, success rate, ticket size, payment mode) in <10ms per transaction."],
        ["TrendingUp", "Continuous Learning", "Model retrains daily on latest transaction data. Adapts to bank outages, new gateways, and seasonal patterns automatically."],
        ["ShieldCheck", "Fallback & Retry Logic", "Instant failover to secondary/tertiary routes on timeout or decline. Configurable retry with exponential backoff."],
        ["Settings", "Business Rule Layer", "Overlay routing with cost optimization, compliance rules (data residency), and partner preference without code."],
        ["BarChart3", "Routing Analytics", "Per-route success rate, latency, cost, volume, and revenue attribution. A/B test routing strategies."],
        ["AlertCircle", "Outage Detection", "Automatic detection of bank/gateway degradation within seconds. Traffic shifted before customers notice."],
      ]}
      steps={[
        ["01", "Connect Gateways & Banks", "Add all your payment gateways, PSP banks, and UPI handles. Health checks run automatically."],
        ["02", "Define Objectives", "Set primary goal: maximize success rate, minimize cost, reduce latency — or weighted multi-objective."],
        ["03", "Enable & Monitor", "Activate AI routing. Dashboard shows real-time routing decisions, uplift vs. static rules, and savings."],
      ]}
    />
  );
}