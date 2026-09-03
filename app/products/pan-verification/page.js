import { BusinessPage } from "@/components/business-page";
export const metadata = { title: "PAN Verification | Finunique" };
export default function Page() {
  return (
    <BusinessPage
      eyebrow="Verification Services"
      title="PAN Verification (OTP-based)"
      description="Verify PAN details instantly using OTP-based authentication with NSDL/Protean. Confirm identity, PAN status and linkage — compliant and real-time."
      accent="PAN verified. Identity confirmed. Compliance sorted."
      features={[
        ["FileCheck", "OTP-based Verification", "Customer enters PAN, receives OTP on linked mobile/email — verification completes in seconds."],
        ["ShieldCheck", "NSDL/Protean Authorised", "Official integration with Protean (formerly NSDL e-Gov) for authoritative PAN data."],
        ["Zap", "Instant Results", "Get PAN holder name, status (active/inactive), category, Aadhaar linkage and last updated date."],
        ["Lock", "Secure & Auditable", "End-to-end encryption, consent logs and compliance-ready audit trails for every verification."],
        ["BarChart3", "Bulk Verification", "API supports bulk PAN verification for onboarding at scale — 1000s per minute."],
        ["Code2", "Developer Friendly", "REST APIs, webhooks, sandbox environment and comprehensive documentation."],
      ]}
      steps={[
        ["01", "Enter PAN", "Customer provides PAN number on your platform."],
        ["02", "OTP Verification", "OTP sent to PAN-linked mobile/email — customer submits OTP."],
        ["03", "Verified", "Receive verified PAN details including name, status and Aadhaar linkage instantly."],
      ]}
    />
  );
}