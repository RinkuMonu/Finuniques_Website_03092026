import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "CIBIL Score Check | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Verification Services"
      title="CIBIL Score Check"
      description="Instant CIBIL score and credit report retrieval for customer onboarding, loan underwriting, and risk assessment. Secure, consent-based, and compliant with RBI and CICRA guidelines."
      accent="Know your customer's creditworthiness in seconds. Not days."
      features={[
        ["BarChart3", "Instant Score & Report", "Real-time CIBIL TransUnion score (300-900) and detailed credit report with account history, enquiries, and defaults."],
        ["Fingerprint", "Consent-Based Access", "Explicit customer consent via OTP or digital signature. Audit trail for every pull with timestamp and purpose code."],
        ["ShieldCheck", "RBI & CICRA Compliant", "Licensed Credit Information Company (CIC) integration. Data encryption, access logs, and retention policies built-in."],
        ["Zap", "Bulk & API Access", "Single API call or bulk CSV upload for portfolio scoring. Webhook callbacks for async report delivery."],
        ["Target", "Custom Scorecards", "Build proprietary scorecards combining CIBIL score with alternative data (bank statements, GST, utility payments)."],
        ["FileCheck", "Adverse Action Support", "Automated adverse action notice generation with reason codes for declined applications."],
      ]}
      steps={[
        ["01", "Collect Consent", "Customer provides consent via your app/website — OTP, e-sign, or physical signature captured digitally."],
        ["02", "Pull Report", "API call with consent artifact. Score and report returned in <3 seconds. Webhook for bulk jobs."],
        ["03", "Decide & Act", "Integrate score into your decision engine. Auto-approve, refer, or decline with audit-ready documentation."],
      ]}
    />
  );
}