import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Tax & Statutory Payments | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Utility Services"
      title="Tax & Statutory Payments"
      description="Organize tax, statutory dues and recurring compliance-related business payments from one workflow."
      accent="Stay ahead of mandatory payment cycles."
      features={[
        ["FileCheck", "Due Tracking", "Keep statutory payment tasks visible before deadlines arrive."],
        ["CircleDollarSign", "Business Payments", "Pay recurring dues with a structured finance operations process."],
        ["ReceiptText", "Audit Records", "Maintain references and transaction records for review and reconciliation."],
      ]}
    />
  );
}
