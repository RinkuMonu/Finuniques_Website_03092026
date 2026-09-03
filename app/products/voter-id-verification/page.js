import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Voter ID Verification | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Verification Services"
      title="Voter ID Verification"
      description="Electoral Photo Identity Card (EPIC) verification from the Election Commission of India database. Validate voter identity, age, address, and constituency details for KYC, age-gated services, and address proof."
      accent="Verify voter identity instantly. ECI-sourced. Age & address proven."
      features={[
        ["IdCard", "ECI Database Validation", "Direct lookup from National Electoral Roll — verify EPIC number validity, voter name, and enrollment status."],
        ["UserRound", "Demographic Verification", "Validate name, relative's name (father/husband), age, gender, and photograph match against electoral roll."],
        ["MapPin", "Address & Constituency Proof", "Verified residential address with polling station, assembly constituency, and parliamentary constituency details."],
        ["ShieldCheck", "Age-Gated Compliance", "Instant age verification for alcohol, tobacco, gaming, gambling, and adult content — meets regulatory requirements."],
        ["Zap", "Real-Time & Offline Support", "Online ECI API verification (<1s) + offline QR code on physical EPIC card for field verification scenarios."],
        ["FileCheck", "Audit-Ready Logs", "Verification timestamp, ECI response, consent record, and data snapshot for regulatory and compliance evidence."],
      ]}
      steps={[
        ["01", "Enter EPIC Number", "Customer provides 10-character EPIC number (alphanumeric) during onboarding or age verification."],
        ["02", "Verify & Consent", "Online: OTP to registered mobile. Offline: Scan QR on physical card. Consent captured per ECI guidelines."],
        ["03", "Identity Confirmed", "Name, age, address, constituency, and photo returned. Integrate into KYC, age-gate, or address proof workflow."],
      ]}
    />
  );
}