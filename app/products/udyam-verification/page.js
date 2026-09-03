import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Udyam Verification | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Verification Services"
      title="Udyam Verification"
      description="Verify MSME registration (Udyam) instantly from the Ministry of MSME database. Validate Udyam Registration Number (URN), enterprise details, classification, and investment/turnover limits for priority sector lending and government schemes."
      accent="Validate MSME status instantly. Unlock priority benefits."
      features={[
        ["BadgeCheck", "Official Udyam Portal Integration", "Direct lookup from Ministry of MSME Udyam Registration portal — verify URN validity and registration status."],
        ["BriefcaseBusiness", "Complete Enterprise Details", "Legal name, PAN, GSTIN, social category, enterprise type (micro/small/medium), NIC codes, and address."],
        ["BarChart3", "Investment & Turnover Verification", "Plant & machinery/equipment investment and annual turnover as declared — critical for PSL classification."],
        ["ShieldCheck", "Scheme Eligibility Checks", "Auto-verify eligibility for CGTMSE, PMEGP, Mudra, and state-specific MSME schemes based on Udyam data."],
        ["Zap", "Real-Time & Bulk API", "Single verification in <500ms. Bulk CSV upload for portfolio validation with downloadable compliance reports."],
        ["FileCheck", "Lender-Grade Reports", "Generate Udyam verification certificates accepted by banks, NBFCs, and government agencies."],
      ]}
      steps={[
        ["01", "Enter URN", "MSME provides 19-digit Udyam Registration Number during onboarding or loan application."],
        ["02", "Instant Verification", "System queries Udyam portal. Returns enterprise details, classification, and registration validity."],
        ["03", "Auto-Qualify", "Map Udyam data to your credit policy, PSL targets, and scheme eligibility. Auto-approve eligible cases."],
      ]}
    />
  );
}