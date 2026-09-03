import { SimpleFeaturePage } from "@/components/simple-feature-page";

export const metadata = { title: "Profit Margin Calculator | Finunique" };

export default function Page() {
  return (
    <SimpleFeaturePage
      eyebrow="Calculator"
      title="Profit Margin Calculator"
      description="Estimate selling price, cost, margin and markup so your payment economics stay visible."
      action="Plan with us"
      features={[
        ["BarChart3", "Margin View", "Compare profit against selling price with quick percentage estimates."],
        ["CircleDollarSign", "Cost Planning", "Understand how payment fees and operating costs affect net earnings."],
        ["TrendingUp", "Pricing Decisions", "Model target margins before launching products, services or offers."],
      ]}
    />
  );
}
