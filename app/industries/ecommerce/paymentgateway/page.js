"use client";

import React from "react";
import {
  ArrowRight,
  Check,
  CreditCard,
  Smartphone,
  Building2,
  Wallet,
  ShieldCheck,
  LockKeyhole,
  Zap,
  BarChart3,
  RefreshCcw,
  Globe2,
  Receipt,
  Settings2,
  Clock3,
  CircleCheck,
  ChevronDown,
  Send,
  IndianRupee,
  Route,
  Code2,
  Layers3,
} from "lucide-react";

export default function PaymentGateway() {
  return (
    <main className="overflow-hidden bg-white text-[#073F52]">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#f4fbfe]">

        {/* Background */}
        <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-[#d9f5ff] opacity-70 blur-3xl" />

        <div className="absolute right-[-120px] top-[-100px] h-[600px] w-[600px] rounded-full bg-[#dff7ff] opacity-80 blur-3xl" />

        <div className="relative mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-20">

          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">

            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}
            <div>

              {/* Badge */}
              <div className="mb-8 inline-flex items-center rounded-full border border-[#bde7f7] bg-white px-6 py-3 shadow-sm">

                <span className="text-sm font-bold tracking-[0.18em] text-[#058fd0]">
                  PAYMENT GATEWAY
                </span>

              </div>


              {/* Heading */}
              <h1 className="max-w-[700px] text-[48px] font-bold leading-[1.02] tracking-[-0.04em] text-[#063F52] sm:text-[60px] lg:text-[72px]">

                Payments made
                <br />

                <span className="text-[#0798D5]">
                  simple, fast & secure.
                </span>

              </h1>


              {/* Description */}
              <p className="mt-8 max-w-[650px] text-[18px] leading-8 text-[#315b68] sm:text-[20px]">

                Accept payments through UPI, cards, net banking and
                wallets with a powerful payment gateway built for
                seamless checkout experiences.

              </p>


              {/* Buttons */}
              <div className="mt-9 flex flex-wrap gap-4">

                <button className="group flex items-center gap-4 rounded-full bg-[#0798D5] px-8 py-4 text-[17px] font-semibold text-white shadow-[0_15px_35px_rgba(7,152,213,0.25)] transition hover:bg-[#058bc5]">

                  Get Started

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


              {/* Payment Types */}
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
                PAYMENT GATEWAY UI
            ===================================================== */}
            <div className="relative flex min-h-[570px] items-center justify-center">

              {/* Glow Circle */}
              <div className="absolute h-[430px] w-[430px] rounded-full border border-[#bce8f7] bg-[#e8f8fd] sm:h-[510px] sm:w-[510px]" />

              <div className="absolute h-[340px] w-[340px] rounded-full border border-[#c7edf8] bg-white/70 sm:h-[410px] sm:w-[410px]" />


              {/* ===================================================
                  CHECKOUT CARD
              =================================================== */}
              <div className="relative z-10 w-[315px] rounded-[30px] border border-[#d9edf4] bg-white p-7 shadow-[0_30px_80px_rgba(6,63,82,0.14)] sm:w-[355px]">

                {/* Header */}
                <div className="flex items-start justify-between">

                  <div>

                    <p className="text-xs font-bold tracking-[0.15em] text-[#0798D5]">
                      SECURE CHECKOUT
                    </p>

                    <p className="mt-2 text-3xl font-bold text-[#073F52]">
                      ₹2,650.00
                    </p>

                    <p className="mt-1 text-sm text-[#83a3ad]">
                      Payment amount
                    </p>

                  </div>


                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#073F52] text-white">

                    <LockKeyhole size={26} />

                  </div>

                </div>


                {/* Payment Methods */}
                <div className="mt-7 space-y-3">

                  {/* UPI */}
                  <div className="rounded-2xl border-2 border-[#0798D5] bg-[#effaff] p-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0798D5] text-white">

                        <Smartphone size={21} />

                      </div>

                      <div className="flex-1">

                        <p className="font-semibold text-[#073F52]">
                          UPI
                        </p>

                        <p className="text-xs text-[#8aa8b1]">
                          Instant payment
                        </p>

                      </div>

                      <CircleCheck
                        size={20}
                        className="text-[#0798D5]"
                      />

                    </div>

                  </div>


                  {/* Cards */}
                  <div className="rounded-2xl border border-[#dceff5] bg-white p-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#effaff] text-[#0798D5]">

                        <CreditCard size={21} />

                      </div>

                      <div className="flex-1">

                        <p className="font-semibold text-[#073F52]">
                          Cards
                        </p>

                        <p className="text-xs text-[#8aa8b1]">
                          Debit & credit cards
                        </p>

                      </div>

                      <ArrowRight
                        size={18}
                        className="text-[#b0c3c9]"
                      />

                    </div>

                  </div>


                  {/* Banking */}
                  <div className="rounded-2xl border border-[#dceff5] bg-white p-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#effaff] text-[#0798D5]">

                        <Building2 size={21} />

                      </div>

                      <div className="flex-1">

                        <p className="font-semibold text-[#073F52]">
                          Net Banking
                        </p>

                        <p className="text-xs text-[#8aa8b1]">
                          All major banks
                        </p>

                      </div>

                      <ArrowRight
                        size={18}
                        className="text-[#b0c3c9]"
                      />

                    </div>

                  </div>


                  {/* Wallet */}
                  <div className="rounded-2xl border border-[#dceff5] bg-white p-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#effaff] text-[#0798D5]">

                        <Wallet size={21} />

                      </div>

                      <div className="flex-1">

                        <p className="font-semibold text-[#073F52]">
                          Wallets
                        </p>

                        <p className="text-xs text-[#8aa8b1]">
                          Popular wallets
                        </p>

                      </div>

                      <ArrowRight
                        size={18}
                        className="text-[#b0c3c9]"
                      />

                    </div>

                  </div>

                </div>


                {/* Secure Footer */}
                <div className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#eaf8fc] py-3 text-sm font-semibold text-[#078dcc]">

                  <ShieldCheck size={18} />

                  Secure checkout active

                </div>

              </div>


              {/* ===================================================
                  FLOATING BADGES
              =================================================== */}

              {/* Success Rate */}
              <div className="absolute left-0 top-[100px] z-20 rotate-[-3deg] rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(6,63,82,0.10)]">

                <p className="text-[11px] font-bold tracking-[0.15em] text-[#0798D5]">
                  SUCCESS RATE
                </p>

                <p className="mt-1 text-xl font-bold text-[#073F52]">
                  99.9%
                </p>

              </div>


              {/* Settlement */}
              <div className="absolute right-[-5px] top-[85px] z-20 rotate-[4deg] rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(6,63,82,0.10)]">

                <p className="text-[11px] font-bold tracking-[0.15em] text-[#0798D5]">
                  SETTLEMENT
                </p>

                <p className="mt-1 text-xl font-bold text-[#073F52]">
                  T+1
                </p>

              </div>


              {/* Smart Routing */}
              <div className="absolute bottom-[75px] left-[-10px] z-20 rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(6,63,82,0.10)]">

                <p className="text-[11px] font-bold tracking-[0.15em] text-[#0798D5]">
                  SMART ROUTING
                </p>

                <p className="mt-1 text-xl font-bold text-[#073F52]">
                  Active
                </p>

              </div>


              {/* Security */}
              <div className="absolute bottom-[65px] right-[0px] z-20 rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(6,63,82,0.10)]">

                <p className="text-[11px] font-bold tracking-[0.15em] text-[#0798D5]">
                  RISK CHECKS
                </p>

                <p className="mt-1 text-xl font-bold text-[#073F52]">
                  Enabled
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          TRUST STRIP
      ========================================================= */}
      <section className="border-y border-[#e3f2f6] bg-white">

        <div className="mx-auto grid max-w-[1200px] grid-cols-2 lg:grid-cols-4">

          {[
            ["99.9%", "Payment Success"],
            ["50L+", "Transactions"],
            ["₹500Cr+", "Processed"],
            ["T+1", "Settlement"],
          ].map(([value, label], index) => (

            <div
              key={index}
              className="border-[#e6f2f6] px-6 py-9 text-center lg:border-r last:border-r-0"
            >

              <p className="text-3xl font-bold text-[#073F52]">
                {value}
              </p>

              <p className="mt-2 text-sm text-[#7696a0]">
                {label}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          PAYMENT SOLUTIONS
      ========================================================= */}
      <section className="bg-white py-20 lg:py-28">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="mx-auto max-w-[720px] text-center">

            <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
              ONE GATEWAY
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-[#073F52] sm:text-5xl">

              Every payment method your business needs.

            </h2>

            <p className="mt-5 text-lg leading-8 text-[#6d909b]">

              Give customers a smooth checkout experience across
              the most popular digital payment methods.

            </p>

          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: Smartphone,
                title: "UPI Payments",
                description:
                  "Accept instant UPI payments with a fast and frictionless checkout.",
              },
              {
                icon: CreditCard,
                title: "Cards",
                description:
                  "Accept major credit and debit cards with secure processing.",
              },
              {
                icon: Building2,
                title: "Net Banking",
                description:
                  "Enable customers to pay directly through their bank accounts.",
              },
              {
                icon: Wallet,
                title: "Wallets",
                description:
                  "Support popular digital wallets for additional convenience.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-[25px] border border-[#dceff5] bg-white p-7 shadow-[0_12px_35px_rgba(6,63,82,0.05)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(6,63,82,0.09)]"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9f8fd] text-[#0798D5]">

                    <Icon
                      size={27}
                      strokeWidth={1.8}
                    />

                  </div>


                  <h3 className="mt-6 text-xl font-bold text-[#073F52]">
                    {item.title}
                  </h3>


                  <p className="mt-3 text-sm leading-7 text-[#7897a0]">
                    {item.description}
                  </p>


                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#0798D5]">

                    Explore

                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />

                  </div>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          SMART ROUTING
      ========================================================= */}
      <section className="bg-[#f4fbfe] py-20 lg:py-28">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Visual */}
            <div className="relative min-h-[480px]">

              <div className="absolute inset-5 rounded-[40px] bg-[#dff5fc]" />


              {/* Routing Card */}
              <div className="absolute left-1/2 top-1/2 w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-[#dceff5] bg-white p-7 shadow-[0_25px_70px_rgba(6,63,82,0.11)]">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs font-bold tracking-[0.15em] text-[#0798D5]">
                      SMART ROUTING
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#073F52]">
                      Payment route
                    </p>

                  </div>


                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf8fd] text-[#0798D5]">

                    <Route size={24} />

                  </div>

                </div>


                {/* Route 1 */}
                <div className="mt-7 rounded-2xl border-2 border-[#0798D5] bg-[#effaff] p-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0798D5] text-white">

                      <Building2 size={19} />

                    </div>

                    <div className="flex-1">

                      <p className="font-semibold text-[#073F52]">
                        Gateway Route A
                      </p>

                      <p className="text-xs text-[#7f9da6]">
                        Primary route
                      </p>

                    </div>

                    <span className="text-xs font-bold text-[#0798D5]">
                      ACTIVE
                    </span>

                  </div>

                </div>


                {/* Route 2 */}
                <div className="mt-3 rounded-2xl border border-[#dceff5] p-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#effaff] text-[#0798D5]">

                      <Building2 size={19} />

                    </div>

                    <div className="flex-1">

                      <p className="font-semibold text-[#073F52]">
                        Gateway Route B
                      </p>

                      <p className="text-xs text-[#7f9da6]">
                        Backup route
                      </p>

                    </div>

                    <Check
                      size={18}
                      className="text-[#0798D5]"
                    />

                  </div>

                </div>


                {/* Success */}
                <div className="mt-5 flex items-center justify-between rounded-xl bg-[#eaf8fc] px-4 py-3">

                  <span className="text-sm text-[#557883]">
                    Optimized success rate
                  </span>

                  <span className="font-bold text-[#0798D5]">
                    99.9%
                  </span>

                </div>

              </div>


              {/* Floating */}
              <div className="absolute left-0 top-10 rounded-2xl border border-[#d4edf5] bg-white px-5 py-4 shadow-lg">

                <Zap
                  className="text-[#0798D5]"
                  size={24}
                />

                <p className="mt-2 text-sm font-bold text-[#073F52]">
                  Intelligent Routing
                </p>

              </div>


              <div className="absolute bottom-10 right-0 rounded-2xl border border-[#d4edf5] bg-white px-5 py-4 shadow-lg">

                <RefreshCcw
                  className="text-[#0798D5]"
                  size={24}
                />

                <p className="mt-2 text-sm font-bold text-[#073F52]">
                  Smart Failover
                </p>

              </div>

            </div>


            {/* Content */}
            <div>

              <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
                SMART ROUTING
              </span>


              <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-[#073F52] sm:text-5xl">

                Keep payments moving, even when routes change.

              </h2>


              <p className="mt-6 text-lg leading-8 text-[#6c8e98]">

                Intelligent routing helps direct transactions through
                optimized payment routes to improve reliability and
                maximize successful payments.

              </p>


              <div className="mt-8 space-y-5">

                {[
                  [
                    "Intelligent routing",
                    "Automatically select the best available payment route.",
                  ],
                  [
                    "Automatic failover",
                    "Keep transactions moving when a route becomes unavailable.",
                  ],
                  [
                    "Higher success rates",
                    "Optimize payment flows for improved transaction performance.",
                  ],
                  [
                    "Real-time monitoring",
                    "Track gateway performance and payment health continuously.",
                  ],
                ].map(([title, description], index) => (

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
                        {description}
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
          FEATURES
      ========================================================= */}
      <section className="bg-white py-20 lg:py-28">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="mx-auto max-w-[700px] text-center">

            <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
              POWERFUL FEATURES
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">

              Built for modern businesses.

            </h2>

          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: Zap,
                title: "Fast Checkout",
                text: "Create a smooth payment experience with fast-loading checkout flows.",
              },
              {
                icon: ShieldCheck,
                title: "Secure Payments",
                text: "Protect transactions with secure payment infrastructure and risk controls.",
              },
              {
                icon: BarChart3,
                title: "Real-Time Analytics",
                text: "Monitor payment performance and transaction trends in real time.",
              },
              {
                icon: Receipt,
                title: "Instant Receipts",
                text: "Generate and share payment confirmations automatically.",
              },
              {
                icon: RefreshCcw,
                title: "Smart Retries",
                text: "Improve transaction recovery with intelligent retry mechanisms.",
              },
              {
                icon: Globe2,
                title: "Multi-Channel",
                text: "Accept payments across web, mobile applications and digital platforms.",
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
          DASHBOARD
      ========================================================= */}
      <section className="bg-[#f4fbfe] py-20 lg:py-28">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Content */}
            <div>

              <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
                PAYMENT ANALYTICS
              </span>


              <h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">

                See every payment at a glance.

              </h2>


              <p className="mt-6 text-lg leading-8 text-[#6d909b]">

                Understand your payment performance with real-time
                transaction data, success rates and settlement visibility.

              </p>


              <div className="mt-8 space-y-4">

                {[
                  "Real-time transaction monitoring",
                  "Payment success & failure reports",
                  "Settlement tracking",
                  "Transaction reconciliation",
                  "Exportable reports",
                ].map((text, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >

                    <Check
                      size={19}
                      className="text-[#0798D5]"
                    />

                    <span className="text-sm font-semibold text-[#315e6c]">
                      {text}
                    </span>

                  </div>

                ))}

              </div>


              <button className="mt-8 flex items-center gap-3 rounded-full bg-[#0798D5] px-7 py-4 font-semibold text-white">

                Explore Analytics

                <ArrowRight size={18} />

              </button>

            </div>


            {/* Dashboard */}
            <div className="rounded-[35px] border border-[#d7edf5] bg-white p-7 shadow-[0_20px_50px_rgba(6,63,82,0.06)]">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs font-bold tracking-[0.15em] text-[#0798D5]">
                    PAYMENT ANALYTICS
                  </p>

                  <p className="mt-2 text-2xl font-bold text-[#073F52]">
                    Transaction Overview
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
                    Total payments
                  </p>

                  <p className="mt-2 text-2xl font-bold text-[#073F52]">
                    42,860
                  </p>

                  <p className="mt-1 text-xs font-semibold text-[#0798D5]">
                    +12.8%
                  </p>

                </div>


                <div className="rounded-2xl bg-[#effaff] p-4">

                  <p className="text-xs text-[#7897a0]">
                    Success rate
                  </p>

                  <p className="mt-2 text-2xl font-bold text-[#073F52]">
                    99.9%
                  </p>

                  <p className="mt-1 text-xs font-semibold text-[#0798D5]">
                    Excellent
                  </p>

                </div>

              </div>


              {/* Graph */}
              <div className="mt-7">

                <div className="mb-3 flex items-center justify-between">

                  <p className="text-sm font-bold text-[#073F52]">
                    Payment volume
                  </p>

                  <p className="text-xs text-[#8ba5ad]">
                    Last 7 days
                  </p>

                </div>


                <div className="flex h-[130px] items-end gap-3">

                  {[38, 55, 48, 72, 63, 88, 78].map(
                    (height, index) => (

                      <div
                        key={index}
                        className="flex flex-1 items-end"
                      >

                        <div
                          className="w-full rounded-t-xl bg-[#0798D5]"
                          style={{
                            height: `${height}%`,
                          }}
                        />

                      </div>

                    )
                  )}

                </div>

              </div>


              {/* Footer */}
              <div className="mt-7 flex items-center justify-between rounded-xl bg-[#eaf8fc] px-4 py-3">

                <div className="flex items-center gap-2">

                  <CircleCheck
                    size={18}
                    className="text-[#0798D5]"
                  />

                  <span className="text-sm font-semibold text-[#315e6c]">
                    Gateway operational
                  </span>

                </div>

                <span className="text-xs font-bold text-[#0798D5]">
                  LIVE
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          DEVELOPER FRIENDLY
      ========================================================= */}
      <section className="bg-white py-20 lg:py-28">

        <div className="mx-auto max-w-[1150px] px-6">

          <div className="rounded-[35px] bg-[#073F52] p-8 sm:p-12 lg:p-16">

            <div className="grid items-center gap-12 lg:grid-cols-2">

              <div>

                <span className="text-sm font-bold tracking-[0.18em] text-[#54c8f5]">
                  DEVELOPER FRIENDLY
                </span>


                <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">

                  Integrate payments without the complexity.

                </h2>


                <p className="mt-6 text-lg leading-8 text-[#b5d2da]">

                  Simple APIs, clear documentation and flexible integration
                  options make it easy to bring payments into your website
                  or application.

                </p>


                <div className="mt-8 space-y-4">

                  {[
                    "Simple REST APIs",
                    "SDKs for faster integration",
                    "Webhook notifications",
                    "Sandbox environment",
                  ].map((text, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >

                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0798D5] text-white">

                        <Check size={14} />

                      </div>

                      <span className="text-sm font-semibold text-white">
                        {text}
                      </span>

                    </div>

                  ))}

                </div>


                <button className="mt-8 flex items-center gap-3 rounded-full bg-[#0798D5] px-7 py-4 font-semibold text-white">

                  View API Documentation

                  <ArrowRight size={18} />

                </button>

              </div>


              {/* Code Window */}
              <div className="rounded-[25px] border border-[#315f6d] bg-[#052f3e] p-5 shadow-2xl">

                <div className="mb-5 flex items-center gap-2">

                  <div className="h-3 w-3 rounded-full bg-[#6c8c95]" />
                  <div className="h-3 w-3 rounded-full bg-[#6c8c95]" />
                  <div className="h-3 w-3 rounded-full bg-[#6c8c95]" />

                </div>


                <div className="overflow-hidden rounded-2xl bg-[#073F52] p-5">

                  <p className="text-xs text-[#7fa8b5]">
                    POST /api/v1/payment/create
                  </p>


                  <div className="mt-5 space-y-2 font-mono text-sm">

                    <p className="text-[#b7dce7]">
                      {"{"}
                    </p>

                    <p className="pl-5 text-[#b7dce7]">
                      <span className="text-[#8ddaff]">
                        "amount"
                      </span>
                      : 2650,
                    </p>

                    <p className="pl-5 text-[#b7dce7]">
                      <span className="text-[#8ddaff]">
                        "currency"
                      </span>
                      : "INR",
                    </p>

                    <p className="pl-5 text-[#b7dce7]">
                      <span className="text-[#8ddaff]">
                        "method"
                      </span>
                      : "UPI",
                    </p>

                    <p className="pl-5 text-[#b7dce7]">
                      <span className="text-[#8ddaff]">
                        "customer"
                      </span>
                      : "customer_123"
                    </p>

                    <p className="text-[#b7dce7]">
                      {"}"}
                    </p>

                  </div>


                  <div className="mt-6 flex items-center gap-2 rounded-xl bg-[#0a5369] px-4 py-3 text-xs font-semibold text-[#8ddaff]">

                    <CircleCheck size={16} />

                    Payment request ready

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SECURITY
      ========================================================= */}
      <section className="bg-[#f4fbfe] py-20 lg:py-28">

        <div className="mx-auto max-w-[1100px] px-6">

          <div className="mx-auto max-w-[700px] text-center">

            <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
              SECURITY
            </span>


            <h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">

              Built with security at every step.

            </h2>


            <p className="mt-5 text-lg leading-8 text-[#7897a0]">

              Protect your business and customers with secure payment
              processing and continuous transaction monitoring.

            </p>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {[
              {
                icon: ShieldCheck,
                title: "Secure Processing",
                text: "Transactions are handled through secure payment infrastructure.",
              },
              {
                icon: LockKeyhole,
                title: "Data Protection",
                text: "Sensitive payment information is protected throughout the payment flow.",
              },
              {
                icon: Settings2,
                title: "Risk Controls",
                text: "Configurable controls help identify and manage suspicious transactions.",
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
      <section className="bg-white py-20 lg:py-28">

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
              "What payment methods are supported?",
              "How can I integrate the payment gateway?",
              "Does the gateway support UPI payments?",
              "Can I track successful and failed payments?",
              "How does payment settlement work?",
              "Can I receive webhook notifications?",
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

                  Our payment gateway supports multiple payment methods
                  and provides integration, transaction monitoring and
                  settlement capabilities according to your business
                  requirements.

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

            <CreditCard size={30} />

          </div>


          <h2 className="mt-7 text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">

            Give every customer a better way to pay.

          </h2>


          <p className="mx-auto mt-6 max-w-[650px] text-lg leading-8 text-[#b5d2da]">

            Accept more payments, simplify your checkout and get complete
            visibility with a modern payment gateway.

          </p>


          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <button className="flex items-center gap-3 rounded-full bg-[#0798D5] px-8 py-4 font-semibold text-white transition hover:bg-[#10a4df]">

              Get Started

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