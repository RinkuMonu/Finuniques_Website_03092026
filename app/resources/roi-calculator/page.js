import { SimpleFeaturePage } from "@/components/simple-feature-page";

export const metadata = { title: "ROI Calculator | Finunique" };

export default function Page() {
  return (
    <SimpleFeaturePage
      eyebrow="Calculator"
      title="ROI Calculator"
      description="Measure returns on business investments, payment improvements and operational changes."
      action="Discuss ROI"
      features={[
        ["TrendingUp", "Return Estimates", "Compare investment against projected gain for clearer business decisions."],
        ["BarChart3", "Performance Inputs", "Model revenue lift, cost savings and implementation effort together."],
        ["Zap", "Optimization Lens", "Identify where faster payments or automation can improve returns."],
      ]}
    />
  );
}
