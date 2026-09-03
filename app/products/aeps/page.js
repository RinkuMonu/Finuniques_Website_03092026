import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "AEPS (Aadhaar Enabled Payment System) | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Payout & Banking"
      title="AEPS — Aadhaar Enabled Payment System"
      description="Offer banking services to unbanked and underbanked customers using just their Aadhaar number and biometric authentication. Cash withdrawal, balance enquiry, and mini-statement at your merchant outlets."
      accent="Banking at the last mile. Powered by Aadhaar."
      features={[
        ["Fingerprint", "Biometric Authentication", "Secure fingerprint/iris authentication via certified RD devices — no cards, no PINs, no phones needed."],
        ["Send", "Cash Withdrawal", "Customers withdraw cash from any Aadhaar-linked bank account at your merchant outlet."],
        ["Eye", "Balance Enquiry", "Instant balance check for any Aadhaar-linked account with on-screen and printed confirmation."],
        ["FileText", "Mini Statement", "Last 5-10 transactions printed or displayed for customer reference."],
        ["ShieldCheck", "RBI & NPCI Compliant", "Certified AEPS 2.0 implementation with encryption, tokenization, and audit trails."],
        ["Users", "Agent Network Management", "Onboard, train, and manage BC agents with commission tracking, device monitoring, and dispute resolution."],
      ]}
      steps={[
        ["01", "Enable AEPS", "Activate AEPS on your merchant terminals with certified RD service and NPCI certification."],
        ["02", "Customer Authentication", "Customer provides Aadhaar number and authenticates via fingerprint/iris scan."],
        ["03", "Service Delivery", "Select service (withdrawal, balance, mini-statement). Transaction processes instantly via NPCI."],
      ]}
    />
  );
}