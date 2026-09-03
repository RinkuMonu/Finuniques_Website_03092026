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
        ["ReceiptText", "Payment Guides", "Learn how to plan smoother checkout, settlement and reconciliation flows."],
        ["ShieldCheck", "Compliance Notes", "Understand KYC, verification and security basics for digital finance operations."],
        ["TrendingUp", "Growth Ideas", "Explore tactics for improving conversion, cash flow and operational visibility."],
      ]}
    />
  );
}
