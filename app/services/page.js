import Link from "next/link";
import { AppIcon } from "@/components/app-icon";

export const metadata = { title: "Services | Finunique" };

const sections = [
  {
    id: "travel-booking",
    title: "Travel & Booking",
    description: "Bus, hotel, train and flight booking services.",
    items: ["Bus Booking", "Hotel Booking", "Train Booking", "Flight Booking"],
  },
  {
    id: "loans",
    title: "Lending",
    description: "Credit cards and loan solutions for every customer.",
    items: ["Credit Card", "Loans", "Home Loan", "Instant Loan", "Personal Loan", "Business Loan", "Education Loan", "Car Loan", "Gold Loan"],
  },
  {
    id: "insurance",
    title: "Insurance",
    description: "Health, life, motor and travel insurance payment services.",
    items: ["Insurance", "Health Insurance", "Life Insurance", "Motor Insurance", "Travel Insurance"],
  },
  {
    id: "blog",
    title: "Resources",
    description: "Help your team make smarter decisions with tools and guides.",
    items: ["Blog", "GST Calculator", "Profit Margin Calculator", "ROI Calculator", "EMI Calculator"],
  },
  {
    id: "utility-services",
    title: "Utility Services",
    description: "Everyday business payments across mobile, electricity, water, gas and more.",
    items: ["Corporate Mobile & DTH", "Commercial Electricity", "Water & Municipal Bills", "Gas & LPG Payments", "FASTag & Fleet Recharge", "Broadband & Landline", "Rent & Property Payments", "Tax & Statutory Payments", "Gift Cards & Vouchers"],
  },
  {
    id: "dmt",
    title: "DMT & AEPS",
    description: "Domestic money transfer and Aadhaar-enabled service options.",
    items: ["DMT", "AEPS"],
  },
];

const anchors = [
  ["Travel Booking", "/services#travel-booking"],
  ["Hotel Booking", "/services#hotel-booking"],
  ["Train Booking", "/services#train-booking"],
  ["Flight Booking", "/services#flight-booking"],
  ["Credit Card", "/services#credit-card"],
  ["Loans", "/services#loans"],
  ["Home Loan", "/services#home-loan"],
  ["Instant Loan", "/services#instant-loan"],
  ["Personal Loan", "/services#personal-loan"],
  ["Business Loan", "/services#business-loan"],
  ["Education Loan", "/services#education-loan"],
  ["Car Loan", "/services#car-loan"],
  ["Gold Loan", "/services#gold-loan"],
  ["Insurance", "/services#insurance"],
  ["Health Insurance", "/services#health-insurance"],
  ["Life Insurance", "/services#life-insurance"],
  ["Motor Insurance", "/services#motor-insurance"],
  ["Travel Insurance", "/services#travel-insurance"],
  ["Blog", "/services#blog"],
  ["GST Calculator", "/services#gst-calculator"],
  ["Profit Margin Calculator", "/services#profit-margin-calculator"],
  ["ROI Calculator", "/services#roi-calculator"],
  ["EMI Calculator", "/services#emi-calculator"],
  ["DMT", "/services#dmt"],
  ["AEPS", "/services#aeps"],
  ["Corporate Mobile & DTH", "/services#mobile-dth-recharges"],
  ["Commercial Electricity", "/services#electricity-bill-payment"],
  ["Water & Municipal Bills", "/services#water-bill-payment"],
  ["Gas & LPG Payments", "/services#gas-bill-payment"],
  ["FASTag & Fleet Recharge", "/services#fastag-recharge"],
  ["Broadband & Landline", "/services#broadband-landline"],
  ["Rent & Property Payments", "/services#rent-payments"],
  ["Tax & Statutory Payments", "/services#statutory-payments"],
  ["Gift Cards & Vouchers", "/services#gift-cards-vouchers"],
];

export default function Services() {
  return (
    <>
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="page-shell grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="eyebrow text-sky-300">Service catalog</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl">
              Finunique services for every business flow.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Discover payments, verification, transfers and business utilities across one platform with built-in tools, calculators and trusted integrations.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-ocean px-6 py-3 text-sm font-bold text-white hover:bg-sky-500">
                Talk to sales →
              </Link>
              <Link href="/developers" className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white/90">
                Developer docs →
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-white/60">Jump to a section</p>
            <div className="mt-6 grid gap-2 text-sm text-white/80">
              {anchors.map(([label, href]) => (
                <Link key={label} href={href} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-white/20 hover:bg-white/10">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell space-y-20 py-16 sm:py-20">
        {sections.map(({ id, title, description, items }) => (
          <article key={id} id={id} className="rounded-[2rem] border border-ink/10 bg-white p-8 shadow-soft sm:p-12">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow text-ocean">{title}</p>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
                <p className="mt-4 max-w-2xl text-ink/70">{description}</p>
              </div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ocean text-white">
                <AppIcon name="Send" className="h-5 w-5" />
              </span>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <div key={item} className="rounded-3xl border border-ink/10 bg-slate-50 p-6">
                  <p className="text-sm font-bold text-ink">{item}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
