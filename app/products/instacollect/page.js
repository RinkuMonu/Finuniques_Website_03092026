import { BusinessPage } from "@/components/business-page";
export const metadata = { title: "InstaCollect - UPI Collections | Finunique" };
export default function Page() {
  return (
    <BusinessPage
      eyebrow="Accept Payments"
      title="InstaCollect (UPI Collections)"
      description="Collect instant UPI payments using Virtual Payment Addresses (VPAs), QR codes and intent flows. Purpose-built for high-volume, low-friction UPI collections."
      accent="UPI-first collections. Instant. Secure. Scalable."
      features={[
        ["Smartphone", "VPA-based Collections", "Generate unique VPAs per customer, invoice or order — reconcile automatically on payment."],
        ["QrCode", "Dynamic QR Codes", "Create amount-fixed or amount-open QR codes for counter, delivery or field collections."],
        ["Zap", "Intent Flow", "Launch any UPI app (GPay, PhonePe, Paytm, BHIM) directly from your app or website."],
        ["ShieldCheck", "Real-time Verification", "Instant payment confirmation with payer VPA, bank name and transaction reference."],
        ["BarChart3", "High Success Rates", "Optimised for UPI — smart routing across NPCI rails with fallback handling."],
        ["Repeat2", "Bulk VPA Generation", "API-driven bulk VPA creation for large-scale invoice or order-based collections."],
      ]}
      steps={[
        ["01", "Configure", "Set up VPA handles, QR branding and webhook endpoints from the dashboard."],
        ["02", "Generate", "Create VPAs/QR codes per invoice, order or customer via API or dashboard."],
        ["03", "Collect", "Customers pay instantly via any UPI app — you get real-time confirmation."],
      ]}
    />
  );
}