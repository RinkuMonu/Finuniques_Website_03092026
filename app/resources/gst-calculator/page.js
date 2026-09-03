import { SimpleFeaturePage } from "@/components/simple-feature-page";

export const metadata = { title: "GST Calculator | Finunique" };

export default function Page() {
  return (
    <SimpleFeaturePage
      eyebrow="Calculator"
      title="GST Calculator"
      description="Estimate GST-inclusive and GST-exclusive values for invoices, fees and business payments."
      action="Request help"
      features={[
        ["ReceiptText", "Inclusive Values", "Work backwards from a GST-inclusive amount to taxable value and tax."],
        ["CircleDollarSign", "Exclusive Values", "Add GST to base amounts for quotes, invoices and payment planning."],
        ["BarChart3", "Clear Breakdowns", "Review tax, subtotal and total values in a simple business-friendly format."],
      ]}
    />
  );
}
