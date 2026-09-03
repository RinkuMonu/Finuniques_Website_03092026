import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "UPI APIs | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="UPI Payments"
      title="UPI APIs"
      description="Build custom UPI payment experiences with our developer-first APIs. Full control over intent, collect, QR, Autopay, and mandate flows with sandbox, webhooks, and production-grade SLAs."
      accent="Your UPI stack. Your rules. Our infrastructure."
      features={[
        ["Code", "RESTful API Design", "Clean, versioned APIs for payment initiation, status polling, refunds, mandates, and settlement queries."],
        ["Smartphone", "All UPI Flows", "Intent API (push), Collect API (pull), QR API (dynamic/static), Autopay API (mandates), and Refund API."],
        ["Repeat2", "Mandate Management", "Create, amend, pause, revoke, and retry mandates with real-time status callbacks and customer notifications."],
        ["ShieldCheck", "Enterprise Security", "Request signing, encryption, idempotency keys, rate limiting, and PCI DSS Level 1 infrastructure."],
        ["TestTube", "Full Sandbox Environment", "Simulate success, failure, timeout, and bank downtime scenarios with mock PSP bank responses."],
        ["BarChart3", "Observability Suite", "Request logs, latency percentiles, error rates, success rates by PSP bank, and custom alerting."],
      ]}
      steps={[
        ["01", "Get API Keys", "Sign up, complete developer KYC, and generate sandbox credentials instantly."],
        ["02", "Integrate & Test", "Use our SDKs (Node, Python, Java, Go, PHP) or raw APIs. Test exhaustively in sandbox."],
        ["03", "Go Live", "Submit go-live checklist, get production keys, configure webhooks, and launch with confidence."],
      ]}
    />
  );
}