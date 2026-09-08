import { SimpleFeaturePage } from "@/components/simple-feature-page";

export const metadata = { title: "Blog | Finunique" };

export default function Page() {
  return (
    <SimpleFeaturePage
      eyebrow="Resources"
      title="Finunique Blog"
      description="Guides, product updates and practical ideas for teams building payments, payouts and verification workflows."
      action="Talk to sales"
      features={[
        ["ReceiptText", "Payment Guides", "Learn how to plan smoother checkout, settlement and reconciliation flows.", "/images/industries/ecommerce-v2.png"],
        ["ShieldCheck", "Compliance Notes", "Understand KYC, verification and security basics for digital finance operations.", "/images/industries/insurance-v2.png"],
        ["TrendingUp", "Growth Ideas", "Explore tactics for improving conversion, cash flow and operational visibility.", "/images/industries/wealthtech-v2.png"],
      ]}
    />
  );
}
