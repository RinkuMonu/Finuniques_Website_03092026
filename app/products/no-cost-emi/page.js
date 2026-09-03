import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "No-Cost EMI | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Cards & Affordability"
      title="No-Cost EMI"
      description="Enable zero-interest EMI on credit cards and debit cards where the interest component is absorbed by the merchant or brand. Drive high-ticket sales without customers paying a rupee extra."
      accent="Zero interest for customers. Higher conversions for you."
      features={[
        ["BadgePercent", "True Zero-Interest", "Customer pays exact product price in EMIs — no interest, no processing fee, no hidden charges."],
        ["CreditCard", "Card & Debit EMI", "Support no-cost EMI on credit cards (major banks) and debit cards (HDFC, ICICI, Axis, Kotak, SBI)."],
        ["Zap", "Subvention Models", "Merchant-funded, brand-funded, or split subvention. Configure per product, category, or campaign."],
        ["Target", "Smart Eligibility", "Real-time BIN/issuer check ensures only eligible cards show no-cost EMI — no failed transactions."],
        ["BarChart3", "Revenue Impact Tracking", "Measure incremental sales, AOV uplift, subvention cost, and net ROI per campaign and product."],
        ["Settings", "Flexible Configuration", "Define eligible tenures (3/6/9/12 months), minimum order value, product/category inclusions/exclusions."],
      ]}
      steps={[
        ["01", "Define Subvention Strategy", "Choose merchant-funded, brand-funded, or split model. Set subvention cost per tenure."],
        ["02", "Configure Eligibility", "Select banks, card types, tenures, product categories, and minimum order values."],
        ["03", "Activate & Measure", "No-cost EMI auto-appears for eligible cards at checkout. Track ROI and optimize in real-time."],
      ]}
    />
  );
}