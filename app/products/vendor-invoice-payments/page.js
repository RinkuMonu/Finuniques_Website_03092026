import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Vendor Invoice Payments | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Utility Services"
      title="Vendor Invoice Payments"
      description="Track recurring vendor invoices and pay suppliers through organized business payout workflows."
      accent="Keep supplier payments visible and on schedule."
      features={[
        ["ReceiptText", "Invoice Tracking", "Organize pending, paid and upcoming vendor payment obligations."],
        ["Send", "Supplier Payouts", "Move money to vendors with clear payout status and references."],
        ["BarChart3", "Finance Reporting", "Maintain cleaner records for reconciliation and month-end reviews."],
      ]}
    />
  );
}
