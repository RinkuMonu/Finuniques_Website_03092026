import { LegalPage } from "@/components/legal-page";

export const metadata = { title: "Privacy Policy | Finunique" };

const sections = [
  [
    "Information we collect",
    "We collect information you provide when using our services, creating an account, requesting support or interacting with our platform. This may include identity, contact, transaction, account and device data."
  ],
  [
    "How we use information",
    "We use collected information to provide services, process payments, prevent fraud, comply with legal obligations, improve our product and communicate important account updates."
  ],
  [
    "How we protect information",
    "We maintain administrative, technical and organizational safeguards designed to protect personal and business data against unauthorized access, loss or misuse. Access is limited to authorized personnel who need the data to deliver the service."
  ],
  [
    "Your privacy choices",
    "You may request access, correction or deletion of your personal information as permitted by applicable law. Some records may need to be retained for legal, regulatory or operational reasons."
  ],
  [
    "Cookies and tracking",
    "We use cookies and similar technologies to help our site function, analyze usage, remember preferences and personalize content. You can manage browser settings to control cookie usage."
  ],
  [
    "Contact us",
    "For privacy questions, access requests or data concerns, contact privacy@finunique.example. We respond promptly to legitimate requests and follow applicable privacy regulations."
  ],
];

export default function PrivacyPage() {
  return <LegalPage eyebrow="Your data" title="Privacy Policy" updated="31 July 2026" sections={sections} />;
}
