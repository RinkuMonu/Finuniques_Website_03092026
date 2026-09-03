import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Offers Engine | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Cards & Affordability"
      title="Offers Engine"
      description="Create, manage, and optimize targeted payment offers — bank offers, cashback, instant discounts, and coupon campaigns — without engineering effort. Drive conversions with the right offer at the right moment."
      accent="Right offer. Right customer. Right moment. No code needed."
      features={[
        ["BadgePercent", "Multi-Type Offers", "Instant discount, cashback (flat/%), bank-specific offers, coupon codes, and combo offers (card + UPI)."],
        ["Target", "Precision Targeting", "Target by card BIN, bank, UPI app, customer segment (new/repeat), geography, device, order value, and category."],
        ["Zap", "Real-Time Eligibility", "Offers evaluated at checkout in milliseconds — only eligible customers see the offer, zero manual errors."],
        ["Calendar", "Schedule & Automate", "Pre-schedule festive campaigns, flash sales, and recurring offers with start/end dates and budget caps."],
        ["BarChart3", "Offer Analytics", "Track redemption rate, incremental revenue, ROI, customer acquisition cost, and cannibalization per offer."],
        ["ShieldCheck", "Budget & Fraud Controls", "Set total/campaign/daily budgets, per-customer redemption limits, and velocity checks to prevent abuse."],
      ]}
      steps={[
        ["01", "Create Offer", "Choose offer type, set value, define targeting rules, set budget, and schedule via no-code dashboard."],
        ["02", "Preview & Test", "Simulate checkout for different customer profiles to verify offer eligibility and messaging."],
        ["03", "Launch & Optimize", "Go live instantly. Monitor real-time performance and adjust targeting/budget without engineering."],
      ]}
    />
  );
}