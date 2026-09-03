import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Card EMI | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Cards & Affordability"
      title="Card EMI"
      description="Offer your customers flexible card-based EMI options at checkout across all major credit cards. Increase average order value, reduce cart abandonment, and drive conversions with zero cost to you."
      accent="Turn big tickets into easy EMIs. Boost conversions instantly."
      features={[
        ["CreditCard", "Multi-Bank EMI", "Support EMI on HDFC, ICICI, SBI, Axis, Kotak, Yes Bank, RBL, Federal, IndusInd, and 15+ issuing banks."],
        ["Zap", "Instant Eligibility Check", "Real-time BIN-based eligibility detection — show EMI options only to eligible customers pre-checkout."],
        ["BadgePercent", "Flexible Tenures", "Offer 3, 6, 9, 12, 18, 24 month tenures with configurable interest rates (bank-funded, merchant-funded, or split)."],
        ["ShieldCheck", "No Integration Overhead", "Works with your existing payment gateway integration — EMI plans auto-surfaced at checkout."],
        ["BarChart3", "Conversion Analytics", "Track EMI uptake, AOV uplift, tenure preference, and revenue impact by bank and product category."],
        ["ReceiptText", "No-Cost EMI Support", "Absorb interest cost or split with bank to offer zero-interest EMIs on select products/categories."],
      ]}
      steps={[
        ["01", "Enable Card EMI", "Activate in dashboard — no code changes needed if using Finunique Payment Gateway."],
        ["02", "Configure Plans", "Select banks, tenures, interest models (customer/merchant/shared), and eligible product categories."],
        ["03", "Go Live & Optimize", "EMI options auto-appear for eligible cards. Monitor uptake and adjust plans via dashboard."],
      ]}
    />
  );
}