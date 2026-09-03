import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "PAN Verification with OTP | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Verification Services"
      title="PAN Verification with OTP"
      description="Instant PAN validation with OTP-based consent from the Income Tax Department database. Verify identity, name, and PAN status in real-time for KYC, onboarding, and compliance."
      accent="Verify PAN in seconds. Consent-first. Government-sourced."
      features={[
        ["IdCard", "Real-Time ITD Validation", "Direct integration with Income Tax Department — verify PAN validity, name match, and status (active/inactive)."],
        ["Fingerprint", "OTP-Based Consent", "Customer receives OTP on PAN-linked mobile/email. Explicit consent captured before verification."],
        ["ShieldCheck", "AML & KYC Compliant", "Meets RBI KYC norms, PMLA requirements, and SEBI regulations for customer onboarding."],
        ["Zap", "Sub-Second Response", "Verification completes in <500ms. Ideal for real-time onboarding flows and checkout-time KYC."],
        ["Users", "Bulk Verification", "Upload CSV of PANs for portfolio verification. Async processing with webhook callbacks and downloadable reports."],
        ["FileCheck", "Audit Trail", "Complete log of verification requests, consent artifacts, responses, and timestamps for regulatory audits."],
      ]}
      steps={[
        ["01", "Customer Enters PAN", "User inputs PAN on your form. System initiates OTP to PAN-registered mobile/email."],
        ["02", "OTP Verification", "Customer enters OTP. Consent recorded with timestamp, IP, and device fingerprint."],
        ["03", "Instant Result", "Name, PAN status, and validity returned. Integrate into your KYC decision workflow."],
      ]}
    />
  );
}