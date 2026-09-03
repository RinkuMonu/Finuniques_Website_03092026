import { BusinessPage } from "@/components/business-page";
export const metadata = { title: "Aadhaar Verification | Finunique" };
export default function Page() {
  return (
    <BusinessPage
      eyebrow="Verification Services"
      title="Aadhaar Verification (OTP-based)"
      description="Verify customer identity instantly using Aadhaar OTP authentication. UIDAI-compliant, secure and real-time — ideal for onboarding, KYC and access control."
      accent="Identity verified in seconds. UIDAI compliant. Zero paper."
      features={[
        ["Fingerprint", "OTP-based Authentication", "Customer receives OTP on Aadhaar-registered mobile — enter to verify identity instantly."],
        ["ShieldCheck", "UIDAI Compliant", "Licensed AUA/KUA integration — fully compliant with Aadhaar Authentication API 2.0."],
        ["Zap", "Real-time Response", "Verification complete in under 3 seconds with demographic data (name, address, photo, DOB, gender)."],
        ["FileCheck", "Consent-driven", "Explicit customer consent captured per transaction — audit trail maintained."],
        ["BarChart3", "High Success Rates", "Optimised for low-failure authentication with fallback to offline XML/QR modes."],
        ["Code2", "Simple API Integration", "RESTful APIs with webhooks — integrate in hours, not weeks."],
      ]}
      steps={[
        ["01", "Collect Aadhaar", "Customer enters 12-digit Aadhaar number on your platform."],
        ["02", "OTP Sent", "UIDAI sends OTP to registered mobile — customer enters it."],
        ["03", "Verified", "Receive demographic data and verification status instantly via webhook."],
      ]}
    />
  );
}