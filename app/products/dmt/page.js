import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "DMT (Domestic Money Transfer) | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Payout & Banking"
      title="DMT — Domestic Money Transfer"
      description="Enable cash-to-account and account-to-account domestic money transfers through your merchant network. Power financial inclusion with RBI-compliant DMT services for walk-in customers."
      accent="Turn every merchant into a money transfer hub."
      features={[
        ["Landmark", "Agent-Assisted Transfers", "Merchants initiate transfers for walk-in customers using biometric or OTP authentication."],
        ["Send", "Multi-Rail Support", "IMPS, NEFT, and UPI rails for instant or same-day credit to any Indian bank account."],
        ["ShieldCheck", "KYC & Compliance", "Built-in customer KYC (OTP, biometric), transaction limits, velocity checks, and AML monitoring."],
        ["CreditCard", "Cash Collection", "Merchants collect cash from customers and credit to beneficiary accounts instantly."],
        ["BarChart3", "Real-Time Dashboard", "Track agent performance, transaction volumes, commission earnings, and settlement status."],
        ["WalletCards", "Commission Management", "Flexible commission structures — flat fee, percentage, or tiered slabs with instant settlement to agents."],
      ]}
      steps={[
        ["01", "Onboard Agents", "Register merchants as DMT agents with KYC, training, and device setup (POS/mobile app)."],
        ["02", "Customer Walk-In", "Customer provides beneficiary details and cash. Agent verifies KYC and initiates transfer."],
        ["03", "Instant Credit & Receipt", "Beneficiary receives funds instantly. Agent prints/shares SMS receipt. Commission auto-credited."],
      ]}
    />
  );
}