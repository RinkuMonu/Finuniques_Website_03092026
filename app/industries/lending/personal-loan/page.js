import { LendingLoanPage } from "@/components/lending-loan-page";

export const metadata = { title: "Personal Loans | Finunique" };

export default function Page() {
  return <LendingLoanPage eyebrow="Lending / Personal loan" title="Personal finance, made easier to manage." description="Create a clear digital borrowing journey for planned expenses, emergencies and everyday financial needs." amount="Up to Rs 10 lakh" rate="From 10.5%" timeline="12-60 months" features={[["CreditCard", "Simple application", "Collect identity, income and bank details through one guided application."], ["FileCheck2", "Faster decisions", "Automate document checks and keep applicants informed at every stage."], ["ShieldCheck", "Reliable repayments", "Track EMI status, reminders and receipts with dependable payment controls."]]} steps={[["01", "Apply digitally", "Capture the borrower profile and required documents in a focused journey."], ["02", "Assess confidently", "Verify details and move eligible applications through your credit workflow."], ["03", "Disburse and collect", "Send approved funds and manage recurring repayments from one view."]]}/>;
}
