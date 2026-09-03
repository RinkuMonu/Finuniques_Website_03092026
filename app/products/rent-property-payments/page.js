import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Rent & Property Payments | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Utility Services"
      title="Rent & Property Payments"
      description="Manage rent, maintenance and property-related payments across offices, stores and business locations."
      accent="Property payments without scattered follow-up."
      features={[
        ["Building2", "Location View", "Track payments across offices, branches and leased spaces."],
        ["Repeat2", "Recurring Payments", "Plan monthly rent and maintenance obligations with less manual chasing."],
        ["ReceiptText", "Payment Records", "Keep references and status visible for finance and operations teams."],
      ]}
    />
  );
}
