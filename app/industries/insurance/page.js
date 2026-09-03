import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Insurance | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Insurance"
      title="Simpler premium collections for insurance teams."
      description="Collect premiums, automate reminders and manage payment visibility across health, life, motor and travel insurance."
      accent="Reliable payments for protected journeys."
      features={[
        ["CreditCard", "Premium Payments", "Let policyholders pay through cards, UPI, wallets and other preferred modes."],
        ["Clock", "Renewal Flows", "Support reminders and recurring collection journeys for renewals."],
        ["ReceiptText", "Policy Reporting", "Keep payment, refund and settlement records easy to reconcile."],
      ]}
    />
  );
}
