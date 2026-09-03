import { LendingLoanPage } from "@/components/lending-loan-page";

export const metadata = { title: "Gold Loans | Finunique" };

export default function Page() {
  return <LendingLoanPage eyebrow="Lending / Gold loan" title="Make secured borrowing more transparent." description="Support gold loan applications with careful customer verification, pledge records and repayment controls." amount="Up to Rs 20 lakh" rate="From 8.9%" timeline="3-36 months" features={[["CreditCard", "Clear pledge onboarding", "Capture customer and asset details with a process teams can review easily."], ["FileCheck2", "Secure verification", "Keep valuation, KYC and pledge documentation organized before disbursal."], ["ShieldCheck", "Renewal and closure", "Track interest, renewals, releases and receipts through the loan lifecycle."]]} steps={[["01", "Capture the pledge", "Record applicant, valuation and collateral details in a structured flow."], ["02", "Verify and approve", "Complete KYC and documentation checks before moving approved funds."], ["03", "Manage the lifecycle", "Support repayments, renewals and collateral release with clear records."]]}/>;
}
