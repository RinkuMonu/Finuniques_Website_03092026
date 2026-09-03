import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Corporate Cards | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Cards & Affordability"
      title="Corporate Cards"
      description="Issue physical and virtual prepaid cards for business expenses, employee spend, vendor payments, and fleet management. Real-time controls, instant issuance, and seamless accounting integration."
      accent="Control every rupee. Issue cards in seconds. Reconcile automatically."
      features={[
        ["CreditCard", "Instant Virtual Cards", "Generate single-use, multi-use, or recurring virtual cards instantly via API or dashboard for online spend."],
        ["WalletCards", "Physical Card Issuance", "Branded physical cards (Visa/ RuPay) delivered to employees with custom designs and spend controls."],
        ["Settings", "Granular Spend Controls", "Set limits by amount, category (fuel, meals, travel), merchant type, time window, and geography per card."],
        ["Zap", "Real-Time Authorization", "Approve/decline transactions in real-time via webhook. Block suspicious spend instantly."],
        ["FileText", "Auto-Categorization & Receipts", "AI-powered expense categorization, receipt capture via app, and auto-match to accounting codes."],
        ["BarChart3", "Unified Expense Dashboard", "Track all card spend across teams, projects, and categories with budget vs. actual views and alerts."],
      ]}
      steps={[
        ["01", "Design Card Program", "Choose card type (virtual/physical), network (Visa/RuPay), branding, and default controls."],
        ["02", "Issue & Distribute", "Create cards in bulk via API or dashboard. Virtual cards ready instantly. Physical cards shipped in 3-5 days."],
        ["03", "Manage & Reconcile", "Monitor spend in real-time, auto-sync with accounting software, and generate audit-ready reports."],
      ]}
    />
  );
}