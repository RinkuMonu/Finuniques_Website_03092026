import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "CIN Verification | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Verification Services"
      title="CIN Verification"
      description="Corporate Identity Number (CIN) verification from the Ministry of Corporate Affairs (MCA) database. Validate company registration, legal name, status, directors, authorized capital, and filing compliance for corporate KYC and vendor due diligence."
      accent="Verify any Indian company in seconds. MCA-sourced. Board-ready."
      features={[
        ["FileCheck", "MCA Database Lookup", "Direct integration with MCA21 — verify CIN validity, company status (active/strike off/amalgamated), and master data."],
        ["Building2", "Complete Company Profile", "Legal name, registered office, ROC, company category/class, authorized/paid-up capital, incorporation date, and AGM/financial year."],
        ["Users", "Director & Signatory Details", "Current directors, DIN, appointment dates, and authorized signatories for banking and contractual verification."],
        ["ShieldCheck", "Filing Compliance Tracker", "Annual return (MGT-7), financial statements (AOC-4), and other e-form filing status with due dates and penalties."],
        ["Zap", "Real-Time API & Bulk", "Sub-second verification. Bulk portfolio screening for vendor onboarding, credit underwriting, and merchant acquisition."],
        ["AlertCircle", "Charge & Litigation Alerts", "Registered charges (secured loans), pending litigation, inspection/inquiry status, and strike-off notices."],
      ]}
      steps={[
        ["01", "Capture CIN", "Enter 21-character CIN during corporate onboarding, credit application, or vendor due diligence."],
        ["02", "MCA Verification", "System queries MCA21 master data and filing history. Returns company profile, directors, and compliance status."],
        ["03", "Risk Assessment", "Integrate MCA data into your risk model — flag strike-off, default, high leverage, or governance red flags."],
      ]}
    />
  );
}