import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Lending | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Lending"
      title="Payment and verification rails for lending."
      description="Support borrower onboarding, repayments and disbursals with connected payment, payout and verification workflows."
      accent="Designed for credit-led customer journeys."
      features={[
        ["ShieldCheck", "Digital Verification", "Verify customer and bank details before moving funds."],
        ["Repeat2", "Repayment Collections", "Collect EMIs, fees and recurring payments with clear transaction status."],
        ["Send", "Fast Disbursals", "Move approved funds to beneficiaries through secure payout workflows."],
      ]}
    />
  );
}
