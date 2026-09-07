"use client";

import React from "react";
import {
  ArrowRight,
  Check,
  GraduationCap,
  School,
  CreditCard,
  Smartphone,
  Building2,
  Wallet,
  Receipt,
  Bell,
  ShieldCheck,
  Clock3,
  BarChart3,
  Users,
  FileCheck2,
  Banknote,
  CalendarDays,
  ChevronDown,
  Send,
  RefreshCcw,
  CircleCheck,
  IndianRupee,
  Layers,
  Settings2,
} from "lucide-react";

export default function FeePayments() {
  return (
    <main className="overflow-hidden bg-white text-[#073F52]">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#f4fbfe]">

        {/* Background Glows */}
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
                  FEE PAYMENTS
                </span>

              </div>


              {/* Heading */}
              <h1 className="max-w-[700px] text-[48px] font-bold leading-[1.02] tracking-[-0.04em] text-[#063F52] sm:text-[60px] lg:text-[72px]">

                Simpler fee
                <br />

                <span className="text-[#0798D5]">
                  collections for education.
                </span>

              </h1>


              {/* Description */}
              <p className="mt-8 max-w-[650px] text-[18px] leading-8 text-[#315b68] sm:text-[20px]">

                Collect school, college and institutional fees through
                multiple payment methods with automated reminders,
                instant receipts and complete payment visibility.

              </p>


              {/* Buttons */}
              <div className="mt-9 flex flex-wrap gap-4">

                <button className="group flex items-center gap-4 rounded-full bg-[#0798D5] px-8 py-4 text-[17px] font-semibold text-white shadow-[0_15px_35px_rgba(7,152,213,0.25)] transition hover:bg-[#058bc5]">

                  Start Collecting

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


              {/* Mini Feature Cards */}
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
                    icon: Receipt,
                    title: "Receipts",
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
                RIGHT PAYMENT DASHBOARD
            ===================================================== */}
            <div className="relative flex min-h-[570px] items-center justify-center">

              {/* Circles */}
              <div className="absolute h-[420px] w-[420px] rounded-full border border-[#bce8f7] bg-[#e8f8fd] sm:h-[500px] sm:w-[500px]" />

              <div className="absolute h-[330px] w-[330px] rounded-full border border-[#c7edf8] bg-white/70 sm:h-[400px] sm:w-[400px]" />


              {/* ===================================================
                  MAIN PAYMENT CARD
              =================================================== */}
              <div className="relative z-10 w-[310px] rounded-[30px] border border-[#d9edf4] bg-white p-7 shadow-[0_30px_80px_rgba(6,63,82,0.14)] sm:w-[350px]">

                {/* Header */}
                <div className="flex items-start justify-between">

                  <div>

                    <p className="text-xs font-bold tracking-[0.15em] text-[#0798D5]">
                      FEE COLLECTION
                    </p>

                    <p className="mt-2 text-3xl font-bold text-[#073F52]">
                      ₹2,65,000
                    </p>

                    <p className="mt-1 text-sm text-[#83a3ad]">
                      Collected this month
                    </p>

                  </div>


                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#073F52] text-white">

                    <IndianRupee size={27} />

                  </div>

                </div>


                {/* Collection Progress */}
                <div className="mt-7">

                  <div className="mb-2 flex justify-between text-xs">

                    <span className="font-semibold text-[#073F52]">
                      Monthly target
                    </span>

                    <span className="text-[#0798D5]">
                      82%
                    </span>

                  </div>


                  <div className="h-2 rounded-full bg-[#e5f3f7]">

                    <div className="h-2 w-[82%] rounded-full bg-[#0798D5]" />

                  </div>

                </div>


                {/* UPI Payment */}
                <div className="mt-7 rounded-2xl border border-[#c9ebf7] bg-[#effaff] p-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0798D5] text-white">

                      <Smartphone size={21} />

                    </div>

                    <div className="flex-1">

                      <p className="font-semibold text-[#073F52]">
                        UPI Payment
                      </p>

                      <p className="text-xs text-[#8aa8b1]">
                        Instant fee collection
                      </p>

                    </div>

                    <CircleCheck
                      size={20}
                      className="text-[#0798D5]"
                    />

                  </div>

                </div>


                {/* Collection Stats */}
                <div className="mt-3 space-y-3">

                  {[
                    ["₹1.2L", "UPI collections"],
                    ["₹85K", "Card payments"],
                    ["₹60K", "Net banking"],
                  ].map(([value, label], index) => (

                    <div
                      key={index}
                      className="flex items-center justify-between rounded-xl border border-[#e4f1f5] px-4 py-3"
                    >

                      <span className="font-bold text-[#0798D5]">
                        {value}
                      </span>

                      <span className="text-sm text-[#6e909a]">
                        {label}
                      </span>

                      <Check
                        size={18}
                        className="text-[#0798D5]"
                      />

                    </div>

                  ))}

                </div>


                {/* Footer */}
                <div className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#eaf8fc] py-3 text-sm font-semibold text-[#078dcc]">

                  <ShieldCheck size={18} />

                  Secure payment collection

                </div>

              </div>


              {/* ===================================================
                  FLOATING BADGES
              =================================================== */}

              {/* Badge 1 */}
              <div className="absolute left-0 top-[110px] z-20 rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(6,63,82,0.10)]">

                <p className="text-[11px] font-bold tracking-[0.15em] text-[#0798D5]">
                  COLLECTION
                </p>

                <p className="mt-1 text-xl font-bold text-[#073F52]">
                  98.5%
                </p>

              </div>


              {/* Badge 2 */}
              <div className="absolute right-[-10px] top-[80px] z-20 rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(6,63,82,0.10)]">

                <p className="text-[11px] font-bold tracking-[0.15em] text-[#0798D5]">
                  SETTLEMENT
                </p>

                <p className="mt-1 text-xl font-bold text-[#073F52]">
                  T+1
                </p>

              </div>


              {/* Badge 3 */}
              <div className="absolute bottom-[85px] left-[-15px] z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d6edf5] bg-white text-[#0798D5] shadow-[0_15px_40px_rgba(6,63,82,0.10)]">

                <Bell size={28} />

              </div>


              {/* Badge 4 */}
              <div className="absolute bottom-[70px] right-[5px] z-20 rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(6,63,82,0.10)]">

                <p className="text-[11px] font-bold tracking-[0.15em] text-[#0798D5]">
                  REMINDERS
                </p>

                <p className="mt-1 text-xl font-bold text-[#073F52]">
                  Automated
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          TRUST STATISTICS
      ========================================================= */}
      <section className="border-y border-[#e3f2f6] bg-white">

        <div className="mx-auto grid max-w-[1200px] grid-cols-2 lg:grid-cols-4">

          {[
            ["₹50Cr+", "Fees Collected"],
            ["2L+", "Payments Processed"],
            ["5,000+", "Institutions"],
            ["99.9%", "Payment Success"],
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

          <div className="mx-auto max-w-[700px] text-center">

            <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
              FEE COLLECTION
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-[#073F52] sm:text-5xl">

              Everything you need to collect fees effortlessly.

            </h2>

            <p className="mt-5 text-lg leading-8 text-[#6d909b]">

              Give students and parents a simple way to pay while your
              institution gets complete visibility over every collection.

            </p>

          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: Smartphone,
                title: "UPI Payments",
                description:
                  "Accept fast and convenient UPI payments from students and parents.",
              },
              {
                icon: CreditCard,
                title: "Cards",
                description:
                  "Accept major debit and credit cards through a secure checkout.",
              },
              {
                icon: Building2,
                title: "Net Banking",
                description:
                  "Let payers make direct payments through their preferred bank.",
              },
              {
                icon: Wallet,
                title: "Wallets",
                description:
                  "Offer additional digital payment options for greater convenience.",
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

                    Learn more

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
          WHY CHOOSE US
      ========================================================= */}
      <section className="bg-[#f4fbfe] py-20 lg:py-28">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Visual */}
            <div className="relative min-h-[450px]">

              <div className="absolute inset-8 rounded-[40px] bg-[#dff5fc]" />


              {/* Main Card */}
              <div className="absolute left-1/2 top-1/2 w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-[#dceff5] bg-white p-7 shadow-[0_25px_70px_rgba(6,63,82,0.10)]">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs font-bold tracking-wider text-[#0798D5]">
                      FEE OVERVIEW
                    </p>

                    <p className="mt-2 text-3xl font-bold text-[#073F52]">
                      ₹8.4L
                    </p>

                    <p className="mt-1 text-sm text-[#83a3ad]">
                      Total collected
                    </p>

                  </div>


                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0798D5] text-white">

                    <BarChart3 size={27} />

                  </div>

                </div>


                {/* Graph */}
                <div className="mt-8 flex h-[110px] items-end gap-3">

                  {[40, 58, 48, 70, 62, 88, 75].map(
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


                <div className="mt-4 flex items-center justify-between">

                  <span className="text-xs text-[#91aab1]">
                    Monthly collection
                  </span>

                  <span className="text-xs font-bold text-[#0798D5]">
                    +18.4%
                  </span>

                </div>

              </div>


              {/* Floating */}
              <div className="absolute left-0 top-10 rounded-2xl border border-[#d4edf5] bg-white px-5 py-4 shadow-lg">

                <Receipt
                  className="text-[#0798D5]"
                  size={24}
                />

                <p className="mt-2 text-sm font-bold text-[#073F52]">
                  Instant Receipts
                </p>

              </div>


              <div className="absolute bottom-10 right-0 rounded-2xl border border-[#d4edf5] bg-white px-5 py-4 shadow-lg">

                <Bell
                  className="text-[#0798D5]"
                  size={24}
                />

                <p className="mt-2 text-sm font-bold text-[#073F52]">
                  Auto Reminders
                </p>

              </div>

            </div>


            {/* Content */}
            <div>

              <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
                WHY CHOOSE US
              </span>


              <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-[#073F52] sm:text-5xl">

                Turn fee collection into a simpler experience.

              </h2>


              <p className="mt-6 text-lg leading-8 text-[#6c8e98]">

                Reduce manual follow-ups, improve collection efficiency and
                give parents a payment experience they can trust.

              </p>


              <div className="mt-8 space-y-5">

                {[
                  [
                    "Automated reminders",
                    "Send timely payment reminders so fewer fees remain pending.",
                  ],
                  [
                    "Instant receipts",
                    "Generate digital receipts automatically after successful payment.",
                  ],
                  [
                    "Real-time visibility",
                    "Track collections, pending fees and transactions from one dashboard.",
                  ],
                  [
                    "Secure payments",
                    "Protect every transaction with secure payment infrastructure.",
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
          HOW IT WORKS
      ========================================================= */}
      <section className="bg-white py-20 lg:py-28">

        <div className="mx-auto max-w-[1100px] px-6">

          <div className="mx-auto max-w-[700px] text-center">

            <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
              HOW IT WORKS
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">

              Collect fees in three simple steps.

            </h2>

          </div>


          <div className="relative mt-16 grid gap-8 md:grid-cols-3">

            {/* Connecting Line */}
            <div className="absolute left-[17%] right-[17%] top-[40px] hidden h-px bg-[#bce6f3] md:block" />


            {[
              {
                number: "01",
                icon: Settings2,
                title: "Set up fees",
                text: "Configure students, fee structures, due dates and payment requirements.",
              },
              {
                number: "02",
                icon: Send,
                title: "Collect payments",
                text: "Students and parents pay securely using their preferred payment method.",
              },
              {
                number: "03",
                icon: BarChart3,
                title: "Track & settle",
                text: "Monitor collections, reconcile transactions and manage settlements.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="relative text-center"
                >

                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-white bg-[#0798D5] text-white shadow-lg">

                    <Icon size={28} />

                  </div>


                  <span className="mt-5 block text-xs font-bold tracking-[0.2em] text-[#0798D5]">

                    STEP {item.number}

                  </span>


                  <h3 className="mt-3 text-xl font-bold text-[#073F52]">
                    {item.title}
                  </h3>


                  <p className="mx-auto mt-3 max-w-[280px] text-sm leading-7 text-[#7897a0]">

                    {item.text}

                  </p>

                </div>
              );

            })}

          </div>

        </div>
      </section>


      {/* =========================================================
          PAYMENT METHODS
      ========================================================= */}
      <section className="bg-[#f4fbfe] py-20 lg:py-28">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="text-center">

            <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
              PAYMENT OPTIONS
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">

              Let parents pay their way.

            </h2>

            <p className="mx-auto mt-5 max-w-[650px] text-lg leading-8 text-[#7897a0]">

              Give your students and parents a convenient checkout with
              multiple trusted payment methods.

            </p>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: Smartphone,
                title: "UPI",
                text: "Fast, instant and convenient digital payments.",
              },
              {
                icon: CreditCard,
                title: "Cards",
                text: "Accept debit and credit cards securely.",
              },
              {
                icon: Building2,
                title: "Net Banking",
                text: "Payments directly from supported bank accounts.",
              },
              {
                icon: Wallet,
                title: "Digital Wallets",
                text: "Give users additional payment flexibility.",
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


                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#0798D5]">

                    Available

                    <CircleCheck size={16} />

                  </div>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          FEE MANAGEMENT DASHBOARD
      ========================================================= */}
      <section className="bg-white py-20 lg:py-28">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Content */}
            <div>

              <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
                COMPLETE VISIBILITY
              </span>


              <h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">

                Know exactly where every fee stands.

              </h2>


              <p className="mt-6 text-lg leading-8 text-[#6d909b]">

                Get a centralized view of your fee collections, pending
                payments, successful transactions and settlements.

              </p>


              <div className="mt-8 space-y-4">

                {[
                  "Track paid and pending fees",
                  "Generate collection reports",
                  "Automate reconciliation",
                  "Monitor settlements",
                  "Export transaction data",
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

                View Dashboard

                <ArrowRight size={18} />

              </button>

            </div>


            {/* Dashboard */}
            <div className="relative">

              <div className="rounded-[35px] border border-[#d7edf5] bg-[#f4fbfe] p-7">

                <div className="rounded-[25px] bg-white p-6 shadow-[0_20px_50px_rgba(6,63,82,0.07)]">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xs font-bold tracking-wider text-[#0798D5]">
                        COLLECTION DASHBOARD
                      </p>

                      <p className="mt-2 text-2xl font-bold text-[#073F52]">
                        Fee Overview
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

                      <p className="mt-2 text-2xl font-bold text-[#073F52]">
                        ₹8.4L
                      </p>

                      <p className="mt-1 text-xs font-semibold text-[#0798D5]">
                        +18.4%
                      </p>

                    </div>


                    <div className="rounded-2xl bg-[#effaff] p-4">

                      <p className="text-xs text-[#7897a0]">
                        Pending
                      </p>

                      <p className="mt-2 text-2xl font-bold text-[#073F52]">
                        ₹1.6L
                      </p>

                      <p className="mt-1 text-xs font-semibold text-[#0798D5]">
                        142 payments
                      </p>

                    </div>

                  </div>


                  {/* Transactions */}
                  <div className="mt-5">

                    <p className="mb-3 text-sm font-bold text-[#073F52]">
                      Recent collections
                    </p>


                    <div className="space-y-2">

                      {[
                        ["Rahul Sharma", "₹18,500"],
                        ["Priya Singh", "₹24,000"],
                        ["Aarav Mehta", "₹12,500"],
                      ].map(([name, amount], index) => (

                        <div
                          key={index}
                          className="flex items-center justify-between rounded-xl border border-[#edf3f5] px-4 py-3"
                        >

                          <div className="flex items-center gap-3">

                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eaf8fd] text-[#0798D5]">

                              <Users size={17} />

                            </div>

                            <span className="text-sm font-semibold text-[#315e6c]">
                              {name}
                            </span>

                          </div>


                          <span className="text-sm font-bold text-[#073F52]">
                            {amount}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>


                  <div className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#eaf8fc] py-3 text-sm font-semibold text-[#078dcc]">

                    <RefreshCcw size={17} />

                    Reconciliation up to date

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          BENEFITS FOR INSTITUTIONS
      ========================================================= */}
      <section className="bg-[#f4fbfe] py-20 lg:py-28">

        <div className="mx-auto max-w-[1100px] px-6">

          <div className="text-center">

            <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
              BUILT FOR INSTITUTIONS
            </span>


            <h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">

              Less manual work. More control.

            </h2>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {[
              {
                icon: Clock3,
                title: "Save Time",
                text: "Reduce manual collection, follow-ups and reconciliation work.",
              },
              {
                icon: BarChart3,
                title: "Improve Visibility",
                text: "Get real-time insights into collections and pending payments.",
              },
              {
                icon: ShieldCheck,
                title: "Stay Secure",
                text: "Keep every payment protected with secure payment infrastructure.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[25px] border border-[#dceff5] bg-white p-7 text-center"
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
              "What types of fees can be collected?",
              "Which payment methods can students use?",
              "Can parents receive payment receipts?",
              "Can fee reminders be automated?",
              "Can institutions track pending payments?",
              "How are settlements and reconciliation managed?",
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

                  The fee collection system can be configured according to
                  your institution's fee structure, payment requirements
                  and operational workflow. Speak with our team to configure
                  the right setup for your institution.

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

        {/* Background Glow */}
        <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#0798D5] opacity-20 blur-3xl" />

        <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-[#0798D5] opacity-10 blur-3xl" />


        <div className="relative mx-auto max-w-[950px] px-6 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0798D5] text-white">

            <GraduationCap size={30} />

          </div>


          <h2 className="mt-7 text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">

            Make fee collection simple for everyone.

          </h2>


          <p className="mx-auto mt-6 max-w-[650px] text-lg leading-8 text-[#b5d2da]">

            Give parents an easier payment experience while giving your
            institution complete control over fee collections.

          </p>


          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <button className="flex items-center gap-3 rounded-full bg-[#0798D5] px-8 py-4 font-semibold text-white transition hover:bg-[#10a4df]">

              Start Collecting Fees

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