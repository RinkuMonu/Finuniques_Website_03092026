import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "UPI Payment Links | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="UPI Payments"
      title="UPI Payment Links"
      description="Create shareable UPI payment links in seconds. Customers pay via any UPI app — no app installation, no gateway redirect. Perfect for social commerce, WhatsApp business, and instant collections."
      accent="Share a UPI link. Get paid instantly. No integration needed."
      features={[
        ["Link2", "Instant Link Generation", "Create UPI payment links via dashboard or API with amount, note, expiry, and customer details pre-filled."],
        ["Smartphone", "Universal UPI Compatibility", "Works with PhonePe, Google Pay, Paytm, BHIM, bank apps, and 50+ UPI apps — customer chooses their preferred app."],
        ["CreditCard", "Pre-Filled Payment Details", "Amount, merchant name, transaction note, and reference ID auto-populated in customer's UPI app."],
        ["ShieldCheck", "Secure & Configurable", "Set expiry (minutes to days), max attempts, single/multi-use, and domain allowlist for brand protection."],
        ["Bell", "Real-Time Notifications", "Instant webhook, SMS, email, and WhatsApp notifications on payment initiation, success, and failure."],
        ["BarChart3", "Link Analytics", "Track views, clicks, payment attempts, conversion rates, and drop-off points per link and campaign."],
      ]}
      steps={[
        ["01", "Create Link", "Enter amount, description, customer mobile/email, expiry, and usage limits via dashboard or API."],
        ["02", "Share Instantly", "Copy link, generate QR, or one-click share to WhatsApp, SMS, email, Instagram, Facebook."],
        ["03", "Collect & Reconcile", "Customer opens link → chooses UPI app → pays → you get instant notification + auto-reconciliation."],
      ]}
    />
  );
}