import { BusinessPage } from "@/components/business-page";
export const metadata = { title: "EBPS - Bill Payment System | Finunique" };
export default function Page() {
  return (
    <BusinessPage
      eyebrow="Accept Payments"
      title="EBPS (Bill Payment System)"
      description="Enable your customers to pay utility bills, insurance premiums, loan EMIs and other recurring bills through your platform. Become a Bharat BillPay operating unit."
      accent="One platform. Every bill. Nationwide reach."
      features={[
        ["ReceiptText", "Bharat BillPay Integration", "Certified BBPOU — accept payments for 200+ billers across electricity, water, gas, telecom, insurance and more."],
        ["CreditCard", "Multiple Payment Modes", "Customers pay via cards, UPI, net banking, wallets or assisted modes at your counters."],
        ["Zap", "Instant Confirmation", "Real-time payment acknowledgment with biller reference numbers — no manual reconciliation."],
        ["ShieldCheck", "Secure & Compliant", "RBI/BBPS compliant with end-to-end encryption, audit trails and settlement guarantees."],
        ["BarChart3", "Agent & Counter Management", "Manage sub-agents, counters, commissions and collections from a unified dashboard."],
        ["Users", "White-label Experience", "Fully branded payment experience — your customers never leave your platform."],
      ]}
      steps={[
        ["01", "BBPS Onboarding", "We handle BBPOU certification and biller onboarding — you focus on distribution."],
        ["02", "Integrate", "Use our APIs or hosted bill payment pages with your branding."],
        ["03", "Scale", "Onboard agents, enable counters and grow your bill payment network nationwide."],
      ]}
    />
  );
}