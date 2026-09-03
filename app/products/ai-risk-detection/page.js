import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "AI Risk Detection | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="AI Solutions"
      title="AI Risk Detection"
      description="Real-time fraud and risk detection powered by machine learning. Identify suspicious transactions, account takeover attempts, and pattern anomalies before they impact your business — with explainable decisions and low false positives."
      accent="Stop fraud in milliseconds. Explain every decision."
      features={[
        ["ShieldCheck", "Multi-Layer Detection", "Transaction anomaly detection, velocity checks, device fingerprinting, behavioral biometrics, and network analysis."],
        ["Brain", "Explainable AI", "Every flagged transaction comes with human-readable risk factors — no black-box decisions for compliance teams."],
        ["Zap", "Sub-10ms Scoring", "Risk score returned inline with payment authorization — no added latency, no checkout friction for genuine users."],
        ["Users", "Customer Risk Profiles", "Build longitudinal risk profiles across sessions, devices, and merchants. Detect account takeover and synthetic identity."],
        ["Settings", "Custom Rules Engine", "Layer deterministic rules (block lists, geo-fencing, amount thresholds) on top of ML scores with no-code builder."],
        ["BarChart3", "Risk Dashboard & Reporting", "Real-time fraud rate, false positive ratio, chargeback prevention, and model performance metrics by segment."],
      ]}
      steps={[
        ["01", "Enable Risk Scoring", "Activate on payment gateway, payouts, or onboarding flows. Works via API or embedded in checkout."],
        ["02", "Calibrate Thresholds", "Set risk score thresholds for auto-approve, review, and block. Start with recommended presets."],
        ["03", "Monitor & Refine", "Review flagged transactions, mark false positives/negatives. Model auto-retrains from your feedback."],
      ]}
    />
  );
}