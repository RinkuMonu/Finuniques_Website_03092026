import { BusinessPage } from "@/components/business-page";
export const metadata = { title: "EasyCollect - Subscriptions | Finunique" };
export default function Page() {
  return (
    <BusinessPage
      eyebrow="Accept Payments"
      title="EasyCollect (Subscriptions)"
      description="Manage recurring payments effortlessly with flexible billing cycles, automated retries, mandate management and dunning workflows — all without building complex subscription logic."
      accent="Recurring revenue, simplified. Set it up once, collect forever."
      features={[
        ["Repeat2", "Flexible Billing Cycles", "Daily, weekly, monthly, quarterly, yearly or custom intervals with proration support."],
        ["CreditCard", "Multiple Payment Methods", "Collect via cards, UPI mandates, net banking, wallets — customer chooses their preferred method."],
        ["ShieldCheck", "Smart Retry & Dunning", "Configurable retry logic, grace periods, payment failure notifications and automatic card updater."],
        ["BarChart3", "Revenue Analytics", "MRR, churn, LTV, trial conversion and cohort analysis — all in one dashboard."],
        ["FileCheck", "Invoice Automation", "Auto-generate GST-compliant invoices, send via email/WhatsApp and track payment status."],
        ["Lock", "Secure Mandate Management", "UPI AutoPay, eNACH and card tokenisation with customer authorisation flow."],
      ]}
      steps={[
        ["01", "Create Plans", "Define pricing tiers, billing intervals, trial periods and add-ons from the dashboard."],
        ["02", "Onboard Customers", "Share checkout links, embed subscription buttons or use API for seamless signup."],
        ["03", "Automate Collection", "Recurring charges run automatically with smart retries — you monitor revenue growth."],
      ]}
    />
  );
}