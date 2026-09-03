import { BusinessPage } from "@/components/business-page";
export const metadata = { title: "Payment Links | Finunique" };
export default function Page() {
  return (
    <BusinessPage
      eyebrow="Accept Payments"
      title="Payment Links"
      description="Create and share payment links instantly — no website or code required. Collect payments via email, SMS, WhatsApp or social media with customizable branding and expiry controls."
      accent="Share a link. Get paid. No integration needed."
      features={[
        ["Link2", "Instant Link Creation", "Generate payment links in seconds from the dashboard or API with custom amounts and descriptions."],
        ["Smartphone", "Multi-channel Sharing", "Share via WhatsApp, SMS, email, social media or embed as QR codes for in-person collections."],
        ["CreditCard", "All Payment Methods", "Customers pay via cards, UPI, net banking, wallets, EMI — same gateway, zero extra setup."],
        ["ShieldCheck", "Secure & Compliant", "PCI DSS compliant, encrypted links with configurable expiry, usage limits and domain verification."],
        ["BarChart3", "Real-time Tracking", "Monitor link views, payment attempts, successes and failures with instant notifications."],
        ["Repeat2", "Recurring Links", "Create subscription links for automatic recurring collections with mandate management."],
      ]}
      steps={[
        ["01", "Create Link", "Enter amount, description, customer details and optional expiry from the dashboard."],
        ["02", "Share", "Copy the link or use one-click sharing to WhatsApp, SMS, email or social platforms."],
        ["03", "Collect", "Receive instant notifications on payment completion with auto-reconciliation."],
      ]}
    />
  );
}