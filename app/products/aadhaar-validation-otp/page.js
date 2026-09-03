import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Aadhaar Validation with OTP | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Verification Services"
      title="Aadhaar Validation with OTP"
      description="Secure Aadhaar number validation with OTP-based consent from UIDAI. Verify identity, age, gender, address, and photo match — fully compliant with Aadhaar Act and RBI KYC norms."
      accent="Validate Aadhaar instantly. Consent-first. UIDAI-compliant."
      features={[
        ["Fingerprint", "UIDAI Authentication", "Direct integration with UIDAI — verify Aadhaar validity, demographic match, and authentication history."],
        ["ShieldCheck", "OTP & Biometric Consent", "OTP to Aadhaar-linked mobile or biometric auth. Explicit consent as per Aadhaar Act Section 4."],
        ["IdCard", "Demographic Verification", "Validate name, date of birth, gender, address, and photo match against UIDAI records."],
        ["Zap", "Real-Time Response", "Validation completes in <1 second. Supports e-KYC flow for instant account opening and onboarding."],
        ["Users", "Offline XML/QR Support", "Accept offline Aadhaar XML or QR code for scenarios with limited connectivity."],
        ["FileCheck", "Regulatory Compliance", "Audit logs, consent artifacts, data minimization, and retention policies aligned with UIDAI circulars."],
      ]}
      steps={[
        ["01", "Enter Aadhaar Number", "Customer provides 12-digit Aadhaar. System initiates OTP to registered mobile."],
        ["02", "Consent & Verify", "Customer enters OTP. Consent captured. UIDAI returns demographic data (name, DOB, gender, address, photo)."],
        ["03", "Match & Decide", "Compare returned data with customer-provided info. Auto-approve or flag mismatches for review."],
      ]}
    />
  );
}