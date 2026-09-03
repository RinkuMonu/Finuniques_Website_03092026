import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Gift Cards & Vouchers | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Gifts & Vouchers"
      title="Gift Cards & Vouchers"
      description="Discover digital gift card and voucher workflows for rewards, campaigns, employee benefits and customer engagement."
      accent="Digital rewards that are easy to distribute."
      features={[
        ["BadgeCheck", "Reward Catalogs", "Offer branded gift cards and vouchers for common business campaigns."],
        ["Users", "Bulk Distribution", "Support employee, partner and customer reward distribution at scale."],
        ["BarChart3", "Campaign Tracking", "Monitor issued, redeemed and pending reward activity."],
      ]}
    />
  );
}
