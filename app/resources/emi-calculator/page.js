import { SimpleFeaturePage } from "@/components/simple-feature-page";

export const metadata = { title: "EMI Calculator | Finunique" };

export default function Page() {
  return (
    <SimpleFeaturePage
      eyebrow="Calculator"
      title="EMI Calculator"
      description="Estimate monthly instalments for loans, card EMI and affordability-led checkout options."
      action="Enable EMI"
      features={[
        ["CircleDollarSign", "Monthly Estimates", "Calculate approximate instalments from amount, tenure and rate."],
        ["CreditCard", "Checkout Planning", "Model EMI options before offering them to your customers."],
        ["ReceiptText", "Repayment Clarity", "Break down payment schedules for lending and affordability workflows."],
      ]}
    />
  );
}
