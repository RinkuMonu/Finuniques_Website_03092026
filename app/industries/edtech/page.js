import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "EdTech | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="EdTech"
      title="Education payments without operational clutter."
      description="Collect fees, course payments and instalments while giving finance teams clean reporting across learners, cohorts and campuses."
      accent="Built for learning platforms and institutions."
      features={[
        ["Link2", "Fee Links", "Send payment links for courses, admissions, events and one-time fees."],
        ["Repeat2", "Instalment Support", "Manage partial and recurring collections with better follow-up visibility."],
        ["BarChart3", "Campus Reporting", "Track collections and settlements across programs or locations."],
      ]}
    />
  );
}
