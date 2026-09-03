import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "UPI Collections | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="UPI Payments"
      title="UPI Collections"
      description="Accept UPI payments with India's most complete UPI stack — intent flow, collect flow, QR codes, and UPI Autopay for mandates. Highest success rates, lowest latency, unified reconciliation."
      accent="One UPI integration. Every flow. Maximum conversion."
      features={[
        ["Smartphone", "Intent & Collect Flows", "Support both push (intent) and pull (collect) UPI flows for web, app, and POS checkout experiences."],
        ["QrCode", "Dynamic & Static QR", "Generate dynamic QR per transaction or static QR for counters. UPI 2.0 verified merchant QR with logo."],
        ["Repeat2", "UPI Autopay Mandates", "Set up recurring mandates for subscriptions, SIPs, loan EMIs, and bill payments with e-mandate authorization."],
        ["Zap", "Smart Routing", "Auto-route to best-performing PSP bank (SBI, HDFC, Axis, ICICI, Yes Bank) for 98%+ success rates."],
        ["ShieldCheck", "Risk & Fraud Control", "Real-time velocity checks, device fingerprinting, and ML-based fraud scoring on every transaction."],
        ["BarChart3", "Unified Analytics", "Single dashboard for UPI intent, collect, QR, and Autopay — success rates, latency, decline reasons, and revenue."],
      ]}
      steps={[
        ["01", "Integrate UPI Stack", "Use our SDKs (Android, iOS, React Native, Flutter) or server-side APIs for intent/collect/QR."],
        ["02", "Configure PSP Banks", "Select preferred PSP banks, set routing rules, and enable Autopay for recurring use cases."],
        ["03", "Go Live & Optimize", "Launch in production. Monitor success rates via dashboard and auto-optimize with smart routing."],
      ]}
    />
  );
}