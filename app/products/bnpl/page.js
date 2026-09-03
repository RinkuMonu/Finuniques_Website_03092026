import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Buy Now, Pay Later (BNPL) | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Cards & Affordability"
      title="Buy Now, Pay Later"
      description="Integrate India's leading BNPL providers — LazyPay, Simpl, ZestMoney, Kissht, and more — through a single integration. Offer pay-later at checkout with instant credit decisions and zero risk to you."
      accent="More ways to pay. Higher conversions. Zero credit risk."
      features={[
        ["Users", "Multi-Partner BNPL", "LazyPay, Simpl, ZestMoney, Kissht, Capital Float, and 10+ BNPL partners via one integration."],
        ["Zap", "Instant Credit Decision", "Real-time eligibility check at checkout — approved customers complete purchase in one tap."],
        ["ShieldCheck", "Zero Merchant Risk", "BNPL partner bears 100% credit risk. You get paid upfront (T+1) regardless of customer repayment."],
        ["CreditCard", "Unified Checkout", "BNPL appears alongside cards, UPI, net banking — no separate flow, no redirect friction."],
        ["BarChart3", "Performance Dashboard", "Track BNPL conversion rate, AOV uplift, partner-wise performance, and customer cohort analysis."],
        ["Settings", "Flexible Configuration", "Enable/disable partners per category, set minimum order value, and customize messaging per partner."],
      ]}
      steps={[
        ["01", "Select BNPL Partners", "Choose partners based on your customer demographics, ticket size, and category fit."],
        ["02", "Configure & Test", "Set eligibility rules, minimum order values, and branding. Test in sandbox with partner simulators."],
        ["03", "Launch & Scale", "BNPL options go live at checkout. Monitor performance and add/remove partners anytime."],
      ]}
    />
  );
}