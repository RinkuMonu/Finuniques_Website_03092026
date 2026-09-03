import { BusinessPage } from "@/components/business-page";
export const metadata = { title: "Payment Slices / Split Payments | Finunique" };
export default function Page() {
  return (
    <BusinessPage
      eyebrow="Accept Payments"
      title="Slices (Split Payments)"
      description="Automatically split incoming payments between multiple vendors, sellers or service providers in real-time. Ideal for marketplaces, platforms and aggregators."
      accent="One payment. Multiple destinations. Zero reconciliation hassle."
      features={[
        ["Users", "Automated Splits", "Define split rules by percentage, fixed amount or tiered logic — applied instantly on every transaction."],
        ["WalletCards", "Multiple Beneficiaries", "Split across unlimited bank accounts, UPI IDs or wallets with instant settlement to each party."],
        ["ShieldCheck", "Compliance Ready", "Built-in KYC onboarding for sub-merchants, TDS tracking and regulatory reporting."],
        ["BarChart3", "Unified Reconciliation", "Single settlement report with breakup per beneficiary — finance teams love it."],
        ["Zap", "Real-time Webhooks", "Instant notifications for each split component — success, failure, refund, dispute."],
        ["Repeat2", "Dynamic Rules", "Update split ratios on the fly without code changes — perfect for promotional campaigns."],
      ]}
      steps={[
        ["01", "Onboard Sub-merchants", "Invite vendors/sellers to complete KYC and link their settlement accounts."],
        ["02", "Configure Rules", "Set split logic by percentage, fixed fee, category or custom business rules."],
        ["03", "Go Live", "Process payments — splits happen automatically with real-time visibility for all parties."],
      ]}
    />
  );
}