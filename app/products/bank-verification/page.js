import { BusinessPage } from "@/components/business-page";
export const metadata = { title: "Bank Account Verification | Finunique" };
export default function Page() {
  return (
    <BusinessPage
      eyebrow="Verification Services"
      title="Bank Account Verification"
      description="Verify bank account ownership and beneficiary details instantly. Penny drop, reverse penny drop and UPI-based verification — confirm accounts before payouts or onboarding."
      accent="Account verified. Beneficiary confirmed. Risk eliminated."
      features={[
        ["Landmark", "Penny Drop Verification", "Deposit ₹1 to verify account existence, holder name match and IFSC validity — results in seconds."],
        ["Send", "Reverse Penny Drop", "Customer initiates ₹1 transfer from their account — confirms ownership and UPI handle simultaneously."],
        ["Smartphone", "UPI-based Verification", "Verify via VPA — confirm bank account, account holder name and UPI linkage in one flow."],
        ["ShieldCheck", "Name Match Scoring", "Fuzzy matching algorithms — handle name variations, initials and joint accounts intelligently."],
        ["BarChart3", "Bulk Verification", "Verify thousands of accounts via API or file upload — ideal for vendor onboarding and payroll."],
        ["Lock", "Compliance Ready", "Audit trails, consent management and data retention policies aligned with RBI guidelines."],
      ]}
      steps={[
        ["01", "Submit Details", "Provide account number, IFSC and expected account holder name via API."],
        ["02", "Verification Run", "Penny drop, reverse penny drop or UPI verification executes automatically."],
        ["03", "Result", "Receive account status, name match score, holder name and bank details instantly."],
      ]}
    />
  );
}