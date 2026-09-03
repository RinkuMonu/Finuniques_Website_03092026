import { DeveloperPage } from "@/components/developer-page";

export const metadata = { title: "SDKs and Libraries" };

export default function Page() {
	return <DeveloperPage eyebrow="Developer hub / SDKs and libraries" title="Use the tools your team already knows." description="Build faster with typed helpers, reusable clients and language-friendly building blocks for Finunique APIs." label="npm install" code={[["package", "@finunique/node"], ["version", "latest"], ["typed", "true"]]} capabilities={[["Package", "Supported SDKs", "Use maintained packages and familiar methods to reduce integration overhead."], ["Code2", "Typed responses", "Make request and response shapes easier to discover in your editor."], ["GitBranch", "Version confidence", "Keep upgrades deliberate with clear releases and migration guidance."]]} steps={[["01", "Install a client", "Choose the package or library that matches your language and runtime."], ["02", "Configure credentials", "Point the client at the sandbox and make your first authenticated request."], ["03", "Ship your flow", "Add error handling, webhooks and production credentials when ready."]]}/>;
}
