import { LendingLoanPage } from "@/components/lending-loan-page";

export const metadata = { title: "Instant Loans | Finunique" };

export default function Page() {
  return <LendingLoanPage eyebrow="Lending / Instant loan" title="Turn urgent financial needs into fast decisions." description="Build a quick, transparent borrowing journey with digital verification, instant status updates and controlled disbursals." amount="Up to Rs 5 lakh" rate="From 11%" timeline="3-36 months" features={[["CreditCard", "Short digital journey", "Collect only the details needed to move an eligible borrower forward."], ["FileCheck2", "Real-time checks", "Verify identity and financial information while the application is in progress."], ["ShieldCheck", "Fast disbursal", "Keep approval, payout and repayment status connected from one operating view."]]} steps={[["01", "Start in minutes", "Capture the borrower profile through a mobile-ready application flow."], ["02", "Check instantly", "Run verification and eligibility checks with clear application status."], ["03", "Move funds", "Disburse approved loans quickly and keep every repayment visible."]]}/>;
}
