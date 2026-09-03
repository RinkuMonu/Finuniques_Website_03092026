import { LendingLoanPage } from "@/components/lending-loan-page";

export const metadata = { title: "Car Loans | Finunique" };

export default function Page() {
  return <LendingLoanPage eyebrow="Lending / Car loan" title="Put the right car within reach." description="Streamline new and used car lending from application to dealer settlement with a clear customer journey." amount="Up to Rs 30 lakh" rate="From 9.9%" timeline="12-84 months" features={[["CreditCard", "Dealer-ready checkout", "Move from vehicle selection to finance application without breaking the journey."], ["FileCheck2", "Quick verification", "Check borrower and vehicle documents before approving the right offer."], ["ShieldCheck", "Managed repayments", "Keep EMIs, notices and dealer settlements aligned from one view."]]} steps={[["01", "Select the car", "Connect vehicle and applicant details in a focused financing flow."], ["02", "Approve with context", "Review identity, income and asset information before making an offer."], ["03", "Settle and service", "Coordinate dealer disbursal while keeping the repayment lifecycle visible."]]}/>;
}
