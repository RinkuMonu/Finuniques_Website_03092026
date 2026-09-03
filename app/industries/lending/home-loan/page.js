import { LendingLoanPage } from "@/components/lending-loan-page";

export const metadata = { title: "Home Loans | Finunique" };

export default function Page() {
  return <LendingLoanPage eyebrow="Lending / Home loan" title="Make the path to a home feel clearer." description="Support high-value home loan applications with structured documentation, dependable verification and long-term repayment visibility." amount="Up to Rs 1 crore" rate="From 8.5%" timeline="5-30 years" features={[["CreditCard", "Guided applications", "Organize applicant, property and income details in one digital journey."], ["FileCheck2", "Document readiness", "Collect and validate property and identity documents before review."], ["ShieldCheck", "Long-term servicing", "Keep repayment schedules, notices and account status easy to manage."]]} steps={[["01", "Capture intent", "Bring borrower and property information together from the first application."], ["02", "Review securely", "Verify documents and financial details with an auditable lending process."], ["03", "Support the loan", "Coordinate disbursal milestones and long-term repayment servicing."]]}/>;
}
