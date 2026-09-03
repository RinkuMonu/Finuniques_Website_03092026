import { DeveloperPage } from "@/components/developer-page";

export const metadata = { title: "Developer Hub" };

export default function Page() {
	return <DeveloperPage eyebrow="Developer hub" title="Build payment experiences that feel native." description="Everything your team needs to connect payments, payouts and verification into a reliable product experience." label="quickstart.js" code={[["amount", "2650"], ["currency", "INR"], ["capture", "automatic"]]} capabilities={[["Code2", "Clear APIs", "Predictable resources and practical examples for every core payment flow."], ["Webhook", "Event-driven tools", "Keep your systems in sync with signed webhooks and delivery visibility."], ["LockKeyhole", "Production-ready", "Use scoped keys, idempotency and sensible safeguards from day one."]]} steps={[["01", "Choose your path", "Start with API documentation, a supported SDK or a guided integration."], ["02", "Test the flow", "Use the sandbox to simulate payments, refunds and webhook events."], ["03", "Go live", "Switch credentials, complete checks and monitor your first transactions."]]}/>;
}
