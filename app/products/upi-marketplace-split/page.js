import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "UPI Marketplace Split | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="UPI Payments"
      title="UPI Marketplace Split"
      description="Automatically split UPI collections between multiple vendors, sellers, or service providers on every transaction. Built for marketplaces, platforms, and aggregators with instant vendor settlement and unified reconciliation."
      accent="One UPI payment. Instant split. Every vendor paid."
      features={[
        ["Users", "Flexible Split Rules", "Define splits by percentage, fixed amount, or tiered slabs per vendor, category, or transaction value."],
        ["Send", "Instant Vendor Settlement", "Vendors receive their share instantly via UPI/IMPS — no waiting for T+2 gateway settlements."],
        ["ShieldCheck", "Compliance & Escrow", "Optional escrow hold, platform fee deduction, TDS auto-cut, and GST-compliant split invoices."],
        ["Repeat2", "Dynamic Vendor Onboarding", "Vendors self-onboard with KYC, bank account verification, and mandate setup via white-labeled flow."],
        ["BarChart3", "Split Analytics", "Per-vendor collection, settlement, refund, and chargeback tracking with automated reconciliation."],
        ["FileCheck", "Unified Reporting", "Single settlement report showing gross collection, platform fees, vendor payouts, and net revenue."],
      ]}
      steps={[
        ["01", "Configure Split Logic", "Define marketplace commission, vendor categories, split rules, and settlement schedules."],
        ["02", "Onboard Vendors", "Invite vendors to self-onboard with KYC, bank verification, and UPI handle linking."],
        ["03", "Collect & Auto-Split", "Customer pays via UPI → platform fee deducted → vendor shares instantly settled → unified report generated."],
      ]}
    />
  );
}