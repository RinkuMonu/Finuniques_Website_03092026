import { LendingLoanPage } from "@/components/lending-loan-page";

export const metadata = { title: "Business Loans | Finunique" };

export default function Page() {
  return <LendingLoanPage eyebrow="Lending / Business loan" title="Give growing businesses room to move." description="Power business lending journeys that turn verified applications into working capital with clear repayment operations." amount="Up to Rs 50 lakh" rate="From 12%" timeline="12-48 months" features={[["CreditCard", "Business onboarding", "Collect company, owner and cash-flow details without unnecessary friction."], ["FileCheck2", "Connected verification", "Review business documents and bank data before making a lending decision."], ["ShieldCheck", "Collection control", "Manage schedules, reminders and receipts across every business borrower."]]} steps={[["01", "Understand the business", "Capture the operating context behind each application, not just a form."], ["02", "Verify the essentials", "Check business identity, documents and financial signals through connected workflows."], ["03", "Fund growth", "Disburse approved capital and keep repayments visible as the business grows."]]}/>;
}
