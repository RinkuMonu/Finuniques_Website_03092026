import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Native OTP | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Verification"
      title="Native OTP"
      description="Add OTP-based verification to customer onboarding, login and transaction confirmation workflows."
      accent="OTP flows that feel built into your product."
      features={[
        ["Smartphone", "Mobile-first Verification", "Trigger OTP checks inside sign-up, checkout and account update journeys."],
        ["ShieldCheck", "Risk Reduction", "Add an extra confirmation layer before sensitive account or payment actions."],
        ["Zap", "Fast Integration", "Connect OTP workflows through APIs designed for operational speed."],
      ]}
    />
  );
}
