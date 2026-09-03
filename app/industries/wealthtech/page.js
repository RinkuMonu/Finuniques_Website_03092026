import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "WealthTech | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="WealthTech"
      title="Payment infrastructure for investment journeys."
      description="Support SIP collections, customer verification and fund-flow visibility for wealth, savings and investment platforms."
      accent="Reliable money movement for wealth platforms."
      features={[
        ["Repeat2", "SIP Collections", "Support recurring collection journeys with clear mandate and payment status."],
        ["Fingerprint", "Investor Verification", "Verify customer, PAN, bank and business details before activation."],
        ["BarChart3", "Flow Visibility", "Track collections, payouts and settlement data across your platform."],
      ]}
    />
  );
}
