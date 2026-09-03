import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Gas & LPG Bill Payment | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Utility Services"
      title="Gas & LPG Bill Payment"
      description="Pay commercial PNG (piped natural gas) and LPG cylinder bills for offices, factories, restaurants, and hotels. Coverage across GAIL, IGL, MGL, BPCL, HPCL, IOCL, and all major gas distributors."
      accent="Commercial gas payments. All distributors. One platform."
      features={[
        ["CircleDollarSign", "PNG & LPG Support", "Piped natural gas (GAIL, IGL, MGL, Gujarat Gas, Torrent, etc.) and commercial LPG cylinders (HPCL, BPCL, IOCL, private distributors)."],
        ["Building2", "Multi-Location Coverage", "Manage gas connections for restaurants, hotels, factories, canteens, and office pantries across cities."],
        ["FileText", "Auto-Fetch Consumption Bills", "Consumer number based auto-fetch for PNG monthly bills. LPG cylinder booking and delivery tracking."],
        ["Calendar", "Subscription & Auto-Pay", "Auto-pay PNG bills monthly. Schedule LPG refills based on consumption patterns — never run out."],
        ["CreditCard", "Flexible Payment Options", "UPI, net banking, corporate cards, wallet. Consolidated invoicing for multiple connections."],
        ["BarChart3", "Consumption Analytics", "Track gas usage trends, cost per unit, cylinder turnaround, and budget vs. actual by location."],
      ]}
      steps={[
        ["01", "Add Gas Connections", "Register PNG consumer numbers and LPG distributor IDs with location and consumption profile."],
        ["02", "Configure Auto-Management", "Set PNG auto-pay, LPG refill thresholds, approval limits, and notification preferences."],
        ["03", "Monitor & Optimize", "Real-time bill payment, cylinder delivery tracking, and consumption analytics for cost optimization."],
      ]}
    />
  );
}