import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Smart Checkout | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="AI Solutions"
      title="Smart Checkout"
      description="AI-personalized checkout experience that dynamically reorders payment methods, surfaces relevant offers, pre-fills customer details, and optimizes the path to payment — increasing conversion by 15-30% without any UX changes."
      accent="Checkout that adapts to every customer. Automatically."
      features={[
        ["MonitorSmartphone", "Dynamic Method Ordering", "ML ranks payment methods per customer — preferred method first, eligible offers highlighted, failed methods hidden."],
        ["Zap", "Smart Prefill", "Auto-detect returning customers via device/fingerprint. Pre-fill card, UPI, address — one-tap checkout for repeat buyers."],
        ["BadgePercent", "Contextual Offer Surfacing", "Show the right offer (EMI, BNPL, bank discount, cashback) at the right moment based on cart value, card BIN, and history."],
        ["Brain", "Adaptive Layout", "Checkout layout adjusts for device, network speed, customer segment, and risk profile — fewer fields for trusted users."],
        ["ShieldCheck", "Risk-Based Friction", "Low-risk customers: express checkout. High-risk: step-up verification. Invisible to genuine users."],
        ["BarChart3", "Conversion Intelligence", "A/B test results, method-wise conversion, drop-off funnel, offer uplift, and personalization impact — all measured."],
      ]}
      steps={[
        ["01", "Embed Smart Checkout", "Replace your checkout with our SDK (React, Vue, vanilla JS) or hosted checkout page — 30-min integration."],
        ["02", "Enable Personalization", "Turn on modules: method ranking, prefill, offers, adaptive layout. Configure brand guidelines."],
        ["03", "Measure & Iterate", "Dashboard shows conversion lift vs. control. Model improves automatically with each transaction."],
      ]}
    />
  );
}