"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BusFront,
  CheckCircle2,
  Clock3,
  RefreshCw,
  Send,
  ArrowLeftRight,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Send,
    title: "Booking Collections",
    description:
      "Collect payments from every booking with a simple and reliable payment experience.",
  },
  {
    icon: ArrowLeftRight,
    title: "Refund Control",
    description:
      "Manage refunds easily and give your customers a smooth travel experience.",
  },
  {
    icon: BarChart3,
    title: "Travel Reporting",
    description:
      "Track your bookings, payments and business performance from one place.",
  },
];

const bookingSteps = [
  ["01", "Choose a route", "Let travelers select routes, seats and passenger details in one clear flow."],
  ["02", "Collect the fare", "Accept secure payments and confirm the booking without holding up the journey."],
  ["03", "Settle with clarity", "Reconcile operators, refunds and daily collections from a single view."],
];

const metrics = [
  ["99.9%", "Payment uptime", Clock3],
  ["T+1", "Settlement cycle", RefreshCw],
  ["24/7", "Booking support", CheckCircle2],
];

export default function BusBookingPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#073B4C] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(82,220,239,.25),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(7,151,208,.22),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-[1580px] items-center gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1fr_.9fr] lg:px-16 lg:py-32">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-bold uppercase tracking-[.3em] text-cyan-300">Travel / Bus booking</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">Move more passengers with less payment friction.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">Give passengers a fast way to reserve seats, while your team keeps fares, refunds and operator settlements under control.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#073B4C] transition hover:bg-cyan-100">Talk to our team <ArrowRight className="h-4 w-4" /></Link>
              <Link href="#booking-flow" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10">See the booking flow</Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[40px] border border-cyan-300/20" />
            <div className="relative rounded-[28px] border border-white/15 bg-white p-5 text-[#073B4C] shadow-[0_30px_80px_rgba(0,0,0,.24)]">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div><p className="text-xs font-black uppercase tracking-[.16em] text-[#0797D0]">Live booking</p><p className="mt-1 text-xl font-black">Mumbai to Pune</p></div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#073B4C] text-cyan-300"><BusFront className="h-6 w-6" /></span>
              </div>
              <div className="mt-5 grid gap-3">
                <div className="flex items-center justify-between rounded-xl bg-[#EEF8FC] p-4"><span className="text-sm font-bold text-slate-500">Departure</span><strong>08:30 AM</strong></div>
                <div className="flex items-center justify-between rounded-xl bg-[#EEF8FC] p-4"><span className="text-sm font-bold text-slate-500">Seat</span><strong>12A · Window</strong></div>
                <div className="flex items-center justify-between rounded-xl bg-[#EEF8FC] p-4"><span className="text-sm font-bold text-slate-500">Fare</span><strong>&#8377;850.00</strong></div>
              </div>
              <div className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-emerald-50 py-3 text-sm font-bold text-emerald-700"><CheckCircle2 className="h-4 w-4" /> Booking confirmed</div>
            </div>
          </motion.div>
        </div>
      </section>

  

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#0797D0]/5 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#0797D0]/5 blur-3xl" />
        <div className="relative mx-auto max-w-[1580px] px-6 sm:px-10 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#0797D0] sm:text-base">
            Built for scale
          </p>

          <h2 className="text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#073B4C] sm:text-5xl lg:text-6xl xl:text-[64px]">
            Built for fast-moving travel
            <br className="hidden sm:block" />
            businesses.
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -8 }}
                className="group relative min-h-[330px] overflow-hidden rounded-[32px] border border-[#CFE5EE] bg-[#EEF8FC] p-9 transition-all duration-300 hover:border-[#0797D0]/40 hover:shadow-[0_20px_50px_rgba(7,151,208,0.12)] sm:p-10"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#0797D0]/5 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative mb-10 flex h-16 w-16 items-center justify-center rounded-[18px] bg-[#0797D0] text-white shadow-[0_10px_25px_rgba(7,151,208,0.2)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon size={29} strokeWidth={1.8} />
                </div>

                <div className="relative">
                  <h3 className="text-2xl font-bold tracking-[-0.02em] text-[#073B4C]">
                    {feature.title}
                  </h3>

                  <p className="mt-4 max-w-md text-base leading-7 text-[#527582]">
                    {feature.description}
                  </p>
                </div>

             
              </motion.div>
            );
          })}
        </div>
      </div>
      </section>

      <section id="booking-flow" className="bg-[#447686] py-24 text-white lg:py-28">
        <div className="mx-auto max-w-[1580px] px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[.3em] text-cyan-300">The booking flow</p><h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">A smoother journey at every handoff.</h2></div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {bookingSteps.map(([number, title, text]) => <article key={number} className="rounded-[28px] border border-white/15 bg-white/5 p-7 sm:p-9"><p className="text-5xl font-black text-cyan-300/50">{number}</p><h3 className="mt-10 text-2xl font-bold">{title}</h3><p className="mt-4 leading-7 text-white/60">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF8FC] py-20">
        <div className="mx-auto flex max-w-[1580px] flex-col justify-between gap-8 px-6 sm:px-10 md:flex-row md:items-center lg:px-16">
          <div><p className="text-sm font-bold uppercase tracking-[.3em] text-[#0797D0]">Ready when you are</p><h2 className="mt-4 max-w-2xl text-4xl font-black tracking-tight text-[#073B4C] sm:text-5xl">Make every seat reservation count.</h2></div>
          <Link href="/signup" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0797D0] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#073B4C]">Start building <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}