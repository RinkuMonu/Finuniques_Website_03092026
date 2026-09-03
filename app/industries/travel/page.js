import { BusinessPage } from "@/components/business-page";

export const metadata = { title: "Travel & Booking | Finunique" };

export default function Page() {
  return (
    <BusinessPage
      eyebrow="Travel & Booking"
      title="Payments for every booking journey."
      description="Collect booking payments, manage refunds and keep travel operations visible across bus, hotel, train and flight workflows."
      accent="Built for fast-moving travel businesses."
      features={[
        ["Send", "Booking Collections", "Accept payments across digital booking flows with smooth checkout experiences."],
        ["Repeat2", "Refund Control", "Track cancellations, refunds and reversals from a unified operations view."],
        ["BarChart3", "Travel Reporting", "Monitor payment success, channels and settlement performance across every journey."],
      ]}
    />
  );
}
