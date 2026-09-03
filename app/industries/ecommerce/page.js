import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "D2C & E-Commerce | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="D2C & E-Commerce"
      title="Checkout, payments and seller flows in one place."
      description="Improve checkout conversion, manage payment links and split marketplace collections for online commerce businesses."
      accent="Built around modern commerce growth."
      features={[
        ["CreditCard", "High-converting Checkout", "Offer popular payment methods with reliable payment completion."],
        ["Users", "Marketplace Split", "Split collections between sellers, vendors or partners automatically."],
        ["ReceiptText", "Order Reconciliation", "Match orders, payments, refunds and settlement reports with less manual work."],
      ]}
    />
  );
}
