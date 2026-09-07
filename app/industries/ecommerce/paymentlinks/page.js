"use client";

import React from "react";
import {
  ArrowRight,
  Check,
  Link2,
  Smartphone,
  CreditCard,
  Building2,
  Wallet,
  ShieldCheck,
  Copy,
  Send,
  Clock3,
  BarChart3,
  Bell,
  Receipt,
  Users,
  Zap,
  Globe2,
  LockKeyhole,
  CircleCheck,
  ChevronDown,
  IndianRupee,
  Share2,
  QrCode,
} from "lucide-react";

export default function PaymentLinks() {
  return (
    <main className="overflow-hidden bg-white text-[#073F52]">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#f4fbfe]">

        {/* Background glow */}
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#dff7ff] opacity-80 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-[550px] w-[550px] rounded-full bg-[#d8f4fc] opacity-70 blur-3xl" />


        <div className="relative mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-20">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">

            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}
            <div>

              {/* Badge */}
              <div className="mb-8 inline-flex items-center rounded-full border border-[#bce7f6] bg-white px-6 py-3 shadow-sm">

                <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
                  PAYMENT LINKS
                </span>

              </div>


              {/* Heading */}
              <h1 className="max-w-[700px] text-[48px] font-bold leading-[1.02] tracking-[-0.045em] text-[#063F52] sm:text-[60px] lg:text-[72px]">

                Get paid with a link.
                <br />

                <span className="text-[#0798D5]">
                  Anywhere. Anytime.
                </span>

              </h1>


              {/* Description */}
              <p className="mt-8 max-w-[650px] text-[18px] leading-8 text-[#315c69] sm:text-[20px]">

                Create payment links in seconds and share them through
                WhatsApp, SMS, email or social channels. Make it easy
                for your customers to pay from anywhere.

              </p>


              {/* Buttons */}
              <div className="mt-9 flex flex-wrap gap-4">

                <button className="group flex items-center gap-4 rounded-full bg-[#0798D5] px-8 py-4 text-[17px] font-semibold text-white shadow-[0_15px_35px_rgba(7,152,213,0.25)] transition hover:bg-[#058bc5]">

                  Create Payment Link

                  <ArrowRight
                    size={20}
                    className="transition group-hover:translate-x-1"
                  />

                </button>


                <button className="flex items-center gap-3 rounded-full border border-[#b9e3f3] bg-white px-8 py-4 text-[17px] font-semibold text-[#078dcc] shadow-sm transition hover:bg-[#f0faff]">

                  <Send size={18} />

                  Talk to Sales

                </button>

              </div>


              {/* Payment methods */}
              <div className="mt-11 grid max-w-[700px] grid-cols-2 gap-4 sm:grid-cols-4">

                {[
                  {
                    icon: Smartphone,
                    title: "UPI",
                  },
                  {
                    icon: CreditCard,
                    title: "Cards",
                  },
                  {
                    icon: Building2,
                    title: "Banking",
                  },
                  {
                    icon: Wallet,
                    title: "Wallets",
                  },
                ].map((item, index) => {

                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-[#d7edf5] bg-white px-4 py-4 shadow-[0_8px_30px_rgba(6,63,82,0.04)]"
                    >

                      <Icon
                        size={22}
                        className="mb-3 text-[#0798D5]"
                        strokeWidth={1.8}
                      />

                      <p className="text-sm font-semibold text-[#073F52]">
                        {item.title}
                      </p>

                    </div>

                  );

                })}

              </div>

            </div>


            {/* =====================================================
                PAYMENT LINK VISUAL
            ===================================================== */}
            <div className="relative flex min-h-[590px] items-center justify-center">

              {/* Circles */}
              <div className="absolute h-[430px] w-[430px] rounded-full border border-[#bce8f7] bg-[#e8f8fd] sm:h-[520px] sm:w-[520px]" />

              <div className="absolute h-[330px] w-[330px] rounded-full border border-[#c8edf8] bg-white/70 sm:h-[410px] sm:w-[410px]" />


              {/* ===================================================
                  PAYMENT LINK CARD
              =================================================== */}
              <div className="relative z-10 w-[325px] rounded-[30px] border border-[#d8edf4] bg-white p-7 shadow-[0_30px_80px_rgba(6,63,82,0.14)] sm:w-[360px]">

                {/* Header */}
                <div className="flex items-start justify-between">

                  <div>

                    <p className="text-xs font-bold tracking-[0.15em] text-[#0798D5]">
                      PAYMENT LINK
                    </p>

                    <p className="mt-2 text-3xl font-bold text-[#073F52]">
                      ₹2,650
                    </p>

                    <p className="mt-1 text-sm text-[#88a6af]">
                      Order #FN24581
                    </p>

                  </div>


                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#073F52] text-white">

                    <Link2 size={26} />

                  </div>

                </div>


                {/* Link Box */}
                <div className="mt-7 rounded-2xl border border-[#cceaf5] bg-[#f2fbfe] p-4">

                  <p className="text-[11px] font-bold tracking-[0.12em] text-[#0798D5]">
                    YOUR PAYMENT LINK
                  </p>


                  <div className="mt-3 flex items-center gap-3">

                    <div className="min-w-0 flex-1 rounded-xl bg-white px-3 py-3">

                      <p className="truncate text-xs font-medium text-[#557883]">
                        pay.finunique.com/24581
                      </p>

                    </div>


                    <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0798D5] text-white">

                      <Copy size={18} />

                    </button>

                  </div>

                </div>


                {/* Share buttons */}
                <div className="mt-5">

                  <p className="mb-3 text-xs font-semibold text-[#7897a0]">
                    SHARE VIA
                  </p>


                  <div className="grid grid-cols-3 gap-3">

                    <div className="flex flex-col items-center gap-2 rounded-xl border border-[#e0f0f5] px-2 py-3">

                      <Send
                        size={20}
                        className="text-[#0798D5]"
                      />

                      <span className="text-[11px] font-semibold text-[#557883]">
                        WhatsApp
                      </span>

                    </div>


                    <div className="flex flex-col items-center gap-2 rounded-xl border border-[#e0f0f5] px-2 py-3">

                      <Smartphone
                        size={20}
                        className="text-[#0798D5]"
                      />

                      <span className="text-[11px] font-semibold text-[#557883]">
                        SMS
                      </span>

                    </div>


                    <div className="flex flex-col items-center gap-2 rounded-xl border border-[#e0f0f5] px-2 py-3">

                      <Globe2
                        size={20}
                        className="text-[#0798D5]"
                      />

                      <span className="text-[11px] font-semibold text-[#557883]">
                        Email
                      </span>

                    </div>

                  </div>

                </div>


                {/* Payment methods */}
                <div className="mt-5 space-y-3">

                  <div className="flex items-center gap-3 rounded-xl bg-[#effaff] px-4 py-3">

                    <Smartphone
                      size={19}
                      className="text-[#0798D5]"
                    />

                    <span className="flex-1 text-sm font-semibold text-[#073F52]">
                      UPI
                    </span>

                    <Check
                      size={18}
                      className="text-[#0798D5]"
                    />

                  </div>


                  <div className="flex items-center gap-3 rounded-xl border border-[#e0f0f5] px-4 py-3">

                    <CreditCard
                      size={19}
                      className="text-[#0798D5]"
                    />

                    <span className="flex-1 text-sm font-semibold text-[#073F52]">
                      Cards
                    </span>

                    <ArrowRight
                      size={17}
                      className="text-[#adc1c8]"
                    />

                  </div>

                </div>


                {/* Status */}
                <div className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#eaf8fc] py-3 text-sm font-semibold text-[#078dcc]">

                  <CircleCheck size={17} />

                  Link active & ready to pay

                </div>

              </div>


              {/* ===================================================
                  FLOATING BADGES
              =================================================== */}

              {/* Instant */}
              <div className="absolute left-0 top-[75px] z-20 rotate-[-4deg] rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(6,63,82,0.10)]">

                <p className="text-[11px] font-bold tracking-[0.15em] text-[#0798D5]">
                  CREATION TIME
                </p>

                <p className="mt-1 text-xl font-bold text-[#073F52]">
                  Instant
                </p>

              </div>


              {/* Conversion */}
              <div className="absolute right-[-5px] top-[105px] z-20 rotate-[4deg] rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(6,63,82,0.10)]">

                <p className="text-[11px] font-bold tracking-[0.15em] text-[#0798D5]">
                  PAYMENT SUCCESS
                </p>

                <p className="mt-1 text-xl font-bold text-[#073F52]">
                  99.9%
                </p>

              </div>


              {/* Share */}
              <div className="absolute bottom-[70px] left-[-5px] z-20 rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(6,63,82,0.10)]">

                <Share2
                  size={23}
                  className="text-[#0798D5]"
                />

                <p className="mt-2 text-sm font-bold text-[#073F52]">
                  Share Anywhere
                </p>

              </div>


              {/* Reminder */}
              <div className="absolute bottom-[65px] right-[-5px] z-20 rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(6,63,82,0.10)]">

                <Bell
                  size={23}
                  className="text-[#0798D5]"
                />

                <p className="mt-2 text-sm font-bold text-[#073F52]">
                  Smart Reminders
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-white py-20 lg:py-28">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="mx-auto max-w-[720px] text-center">

            <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
              SIMPLE COLLECTIONS
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-[#073F52] sm:text-5xl">

              Get paid wherever your customers are.

            </h2>

            <p className="mt-5 text-lg leading-8 text-[#6d909b]">

              No website or complicated integration required. Create
              a link, share it and start collecting payments.
            </p>

          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: Link2,
                title: "Create in Seconds",
                text: "Generate a payment link instantly with amount, customer and payment details.",
              },
              {
                icon: Share2,
                title: "Share Anywhere",
                text: "Send links through WhatsApp, SMS, email, social media or any other channel.",
              },
              {
                icon: Smartphone,
                title: "Mobile Friendly",
                text: "Customers can open the link and pay easily from any mobile device.",
              },
              {
                icon: Bell,
                title: "Payment Reminders",
                text: "Automatically remind customers when a payment is pending.",
              },
              {
                icon: BarChart3,
                title: "Track Payments",
                text: "Monitor created, pending, successful and expired payment links.",
              },
              {
                icon: Receipt,
                title: "Instant Confirmation",
                text: "Get payment notifications and receipts as soon as the transaction is completed.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-[25px] border border-[#dceff5] bg-white p-7 shadow-[0_12px_35px_rgba(6,63,82,0.05)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(6,63,82,0.09)]"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf8fd] text-[#0798D5]">

                    <Icon
                      size={27}
                      strokeWidth={1.8}
                    />

                  </div>


                  <h3 className="mt-6 text-xl font-bold text-[#073F52]">
                    {item.title}
                  </h3>


                  <p className="mt-3 text-sm leading-7 text-[#7897a0]">
                    {item.text}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section className="bg-[#f4fbfe] py-20 lg:py-28">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="mx-auto max-w-[700px] text-center">

            <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
              HOW IT WORKS
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">

              From link to payment in three simple steps.

            </h2>

          </div>


          <div className="relative mt-16 grid gap-8 md:grid-cols-3">

            {/* Connector */}
            <div className="absolute left-[20%] right-[20%] top-[50px] hidden border-t-2 border-dashed border-[#b9e5f3] md:block" />


            {[
              {
                number: "01",
                icon: Link2,
                title: "Create a Link",
                text: "Enter the amount and payment details to generate your payment link.",
              },
              {
                number: "02",
                icon: Share2,
                title: "Share the Link",
                text: "Send the link through WhatsApp, SMS, email or your preferred channel.",
              },
              {
                number: "03",
                icon: CircleCheck,
                title: "Get Paid",
                text: "Your customer completes the payment and you receive instant confirmation.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="relative z-10 text-center"
                >

                  <div className="mx-auto flex h-[100px] w-[100px] items-center justify-center rounded-[30px] border border-[#cfeaf4] bg-white shadow-[0_15px_40px_rgba(6,63,82,0.07)]">

                    <Icon
                      size={35}
                      className="text-[#0798D5]"
                      strokeWidth={1.7}
                    />

                  </div>


                  <p className="mt-5 text-xs font-bold tracking-[0.18em] text-[#0798D5]">
                    STEP {item.number}
                  </p>


                  <h3 className="mt-2 text-xl font-bold text-[#073F52]">
                    {item.title}
                  </h3>


                  <p className="mx-auto mt-3 max-w-[300px] text-sm leading-7 text-[#7897a0]">
                    {item.text}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          REMINDERS + ANALYTICS
      ========================================================= */}
      <section className="bg-white py-20 lg:py-28">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Visual */}
            <div className="relative min-h-[470px]">

              <div className="absolute inset-4 rounded-[40px] bg-[#eaf8fd]" />


              {/* Main dashboard */}
              <div className="absolute left-1/2 top-1/2 w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-[#dceff5] bg-white p-7 shadow-[0_25px_70px_rgba(6,63,82,0.11)]">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs font-bold tracking-[0.15em] text-[#0798D5]">
                      PAYMENT LINKS
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#073F52]">
                      Collections
                    </p>

                  </div>


                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf8fd] text-[#0798D5]">

                    <BarChart3 size={24} />

                  </div>

                </div>


                {/* Stats */}
                <div className="mt-7 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl bg-[#effaff] p-4">

                    <p className="text-xs text-[#7897a0]">
                      Collected
                    </p>

                    <p className="mt-2 text-xl font-bold text-[#073F52]">
                      ₹4.82L
                    </p>

                    <p className="mt-1 text-xs font-semibold text-[#0798D5]">
                      +18.4%
                    </p>

                  </div>


                  <div className="rounded-2xl bg-[#effaff] p-4">

                    <p className="text-xs text-[#7897a0]">
                      Successful
                    </p>

                    <p className="mt-2 text-xl font-bold text-[#073F52]">
                      98.7%
                    </p>

                    <p className="mt-1 text-xs font-semibold text-[#0798D5]">
                      Excellent
                    </p>

                  </div>

                </div>


                {/* Payment rows */}
                <div className="mt-6 space-y-3">

                  {[
                    ["PL-24581", "₹2,650", "Paid"],
                    ["PL-24580", "₹8,400", "Paid"],
                    ["PL-24579", "₹1,250", "Pending"],
                  ].map(([id, amount, status], index) => (

                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-xl border border-[#e1f0f5] px-4 py-3"
                    >

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#effaff] text-[#0798D5]">

                        <Link2 size={17} />

                      </div>


                      <div className="flex-1">

                        <p className="text-xs font-bold text-[#073F52]">
                          {id}
                        </p>

                        <p className="text-xs text-[#8aa5ad]">
                          {amount}
                        </p>

                      </div>


                      <span
                        className={
                          status === "Paid"
                            ? "text-xs font-bold text-[#0798D5]"
                            : "text-xs font-semibold text-[#8aa5ad]"
                        }
                      >
                        {status}
                      </span>

                    </div>

                  ))}

                </div>

              </div>


              {/* Floating reminder */}
              <div className="absolute left-0 top-12 rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-lg">

                <Bell
                  size={23}
                  className="text-[#0798D5]"
                />

                <p className="mt-2 text-sm font-bold text-[#073F52]">
                  Reminder Sent
                </p>

                <p className="mt-1 text-xs text-[#8aa5ad]">
                  2 mins ago
                </p>

              </div>


              {/* Floating payment */}
              <div className="absolute bottom-10 right-0 rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-lg">

                <CircleCheck
                  size={23}
                  className="text-[#0798D5]"
                />

                <p className="mt-2 text-sm font-bold text-[#073F52]">
                  Payment Received
                </p>

                <p className="mt-1 text-xs font-semibold text-[#0798D5]">
                  ₹8,400
                </p>

              </div>

            </div>


            {/* Content */}
            <div>

              <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
                COLLECTION CONTROL
              </span>


              <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-[#073F52] sm:text-5xl">

                Never lose track of a payment again.

              </h2>


              <p className="mt-6 text-lg leading-8 text-[#6d909b]">

                Manage your payment links and monitor every collection
                from one simple dashboard.

              </p>


              <div className="mt-8 space-y-5">

                {[
                  [
                    "Real-time payment status",
                    "Know exactly which links are paid, pending or expired.",
                  ],
                  [
                    "Automatic reminders",
                    "Send reminders to customers when payments are still pending.",
                  ],
                  [
                    "Collection analytics",
                    "Understand payment volume, success rates and collection trends.",
                  ],
                  [
                    "Easy reconciliation",
                    "Match payments with orders and transactions effortlessly.",
                  ],
                ].map(([title, text], index) => (

                  <div
                    key={index}
                    className="flex gap-4"
                  >

                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0798D5] text-white">

                      <Check size={15} />

                    </div>


                    <div>

                      <h3 className="font-bold text-[#073F52]">
                        {title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-[#7897a0]">
                        {text}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          USE CASES
      ========================================================= */}
      <section className="bg-[#f4fbfe] py-20 lg:py-28">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="mx-auto max-w-[700px] text-center">

            <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
              BUILT FOR EVERY BUSINESS
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">

              One simple link. Endless possibilities.

            </h2>

          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: Users,
                title: "Freelancers",
                text: "Collect payments from clients without building a checkout.",
              },
              {
                icon: Globe2,
                title: "Online Businesses",
                text: "Share payment links directly with customers anywhere.",
              },
              {
                icon: Receipt,
                title: "Service Providers",
                text: "Collect invoices, subscriptions and service payments.",
              },
              {
                icon: Building2,
                title: "Enterprises",
                text: "Manage large-scale payment collections with complete visibility.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[25px] border border-[#dceff5] bg-white p-7"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf8fd] text-[#0798D5]">

                    <Icon size={27} />

                  </div>


                  <h3 className="mt-6 text-xl font-bold text-[#073F52]">
                    {item.title}
                  </h3>


                  <p className="mt-3 text-sm leading-7 text-[#7897a0]">
                    {item.text}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          SECURITY
      ========================================================= */}
      <section className="bg-white py-20 lg:py-28">

        <div className="mx-auto max-w-[1100px] px-6">

          <div className="mx-auto max-w-[700px] text-center">

            <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
              SECURE COLLECTIONS
            </span>


            <h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">

              Every payment link is built for trust.

            </h2>


            <p className="mt-5 text-lg leading-8 text-[#7897a0]">

              Give customers a secure and reliable way to complete
              their payments.

            </p>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {[
              {
                icon: ShieldCheck,
                title: "Secure Checkout",
                text: "Customers complete payments through a protected checkout experience.",
              },
              {
                icon: LockKeyhole,
                title: "Protected Data",
                text: "Payment information is handled through secure payment infrastructure.",
              },
              {
                icon: Clock3,
                title: "Link Controls",
                text: "Set expiry and payment controls to manage how links remain active.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[25px] border border-[#dceff5] bg-white p-8 text-center"
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf8fd] text-[#0798D5]">

                    <Icon size={27} />

                  </div>


                  <h3 className="mt-6 text-xl font-bold text-[#073F52]">
                    {item.title}
                  </h3>


                  <p className="mt-3 text-sm leading-7 text-[#7897a0]">
                    {item.text}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-[#f4fbfe] py-20 lg:py-28">

        <div className="mx-auto max-w-[900px] px-6">

          <div className="text-center">

            <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
              FAQ
            </span>


            <h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">

              Questions, answered.

            </h2>

          </div>


          <div className="mt-12 space-y-3">

            {[
              "What is a payment link?",
              "How do I create a payment link?",
              "Where can I share payment links?",
              "Which payment methods are supported?",
              "Can payment links have an expiry date?",
              "Can I track payment link status?",
            ].map((question, index) => (

              <details
                key={index}
                className="group rounded-2xl border border-[#d8edf4] bg-white"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 font-semibold text-[#073F52]">

                  {question}

                  <ChevronDown
                    size={20}
                    className="text-[#0798D5] transition group-open:rotate-180"
                  />

                </summary>


                <div className="border-t border-[#edf5f7] px-6 py-5 text-sm leading-7 text-[#7897a0]">

                  Payment links allow businesses to collect payments
                  through a shareable URL. Customers can open the link
                  and complete their payment using supported payment
                  methods.

                </div>

              </details>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#073F52] py-20 lg:py-24">

        <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#0798D5] opacity-20 blur-3xl" />

        <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-[#0798D5] opacity-10 blur-3xl" />


        <div className="relative mx-auto max-w-[950px] px-6 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0798D5] text-white">

            <Link2 size={30} />

          </div>


          <h2 className="mt-7 text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">

            Create a link.
            <br />

            Get paid anywhere.

          </h2>


          <p className="mx-auto mt-6 max-w-[650px] text-lg leading-8 text-[#b5d2da]">

            Make payment collection simple with shareable payment links
            built for fast, secure and convenient transactions.

          </p>


          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <button className="flex items-center gap-3 rounded-full bg-[#0798D5] px-8 py-4 font-semibold text-white transition hover:bg-[#10a4df]">

              Create Payment Link

              <ArrowRight size={19} />

            </button>


            <button className="flex items-center gap-3 rounded-full border border-[#4f7c89] px-8 py-4 font-semibold text-white transition hover:bg-white/10">

              <Send size={18} />

              Talk to Sales

            </button>

          </div>

        </div>

      </section>

    </main>
  );
}