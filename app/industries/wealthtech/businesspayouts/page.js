"use client";

import {
  ArrowDownLeft,
  ArrowRight,
  ArrowUpRight,
  Banknote,
  CheckCircle2,
  ChevronDown,
  Clock3,
  CreditCard,
  FileCheck2,
  Landmark,
  Lock,
  RefreshCw,
  Send,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

export default function BusinessPayoutsPage() {
  return (
    <main className="min-h-screen bg-white text-[#073F52]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="bg-[#f4fbfe] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* LEFT CONTENT */}
            <div>

              <span className="inline-flex rounded-full bg-[#0798D5]/10 px-4 py-2 text-sm font-semibold text-[#0798D5]">
                BUSINESS PAYOUTS
              </span>

              <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Send Money
                <span className="block text-[#0798D5]">
                  Faster & Smarter
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#7897a0]">
                Make fast, secure and reliable business payouts with a
                powerful platform built to simplify your payment operations.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <button className="inline-flex items-center gap-2 rounded-full bg-[#0798D5] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#0798D5]/20 transition hover:-translate-y-0.5">
                  Get Started
                  <ArrowRight size={18} />
                </button>

                <button className="rounded-full border border-[#0798D5] px-7 py-3.5 font-semibold text-[#0798D5] transition hover:bg-[#0798D5]/5">
                  Talk to Sales
                </button>

              </div>

              {/* FEATURES */}
              <div className="mt-9 grid gap-3 sm:grid-cols-2">

                {[
                  "Instant bank payouts",
                  "Bulk payment processing",
                  "Real-time tracking",
                  "Secure transactions",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-[#7897a0]"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#0798D5]"
                    />
                    {item}
                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT DASHBOARD */}
            <div className="relative">

              <div className="rounded-[30px] border border-[#dceff5] bg-white p-5 shadow-[0_25px_70px_rgba(7,63,82,0.12)]">

                {/* Dashboard Header */}
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-[#7897a0]">
                      Total Payouts
                    </p>

                    <h3 className="mt-1 text-3xl font-bold">
                      ₹24,68,450
                    </h3>

                    <div className="mt-2 flex items-center gap-1 text-xs font-medium text-green-600">
                      <TrendingUp size={14} />
                      12.8% this month
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#0798D5]/10 p-3">
                    <Send
                      size={25}
                      className="text-[#0798D5]"
                    />
                  </div>

                </div>

                {/* Graph */}
                <div className="mt-7 rounded-2xl bg-[#f4fbfe] p-5">

                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-xs text-[#7897a0]">
                      Payout Volume
                    </p>

                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold">
                      This Month
                    </span>
                  </div>

                  <div className="flex h-32 items-end gap-2">

                    {[35, 48, 42, 58, 52, 70, 65, 82, 76, 95].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-lg bg-[#0798D5]/70"
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}

                  </div>

                </div>

                {/* Stats */}
                <div className="mt-5 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl bg-[#f4fbfe] p-4">

                    <div className="flex items-center gap-2">
                      <CheckCircle2
                        size={17}
                        className="text-green-600"
                      />

                      <p className="text-xs text-[#7897a0]">
                        Successful
                      </p>
                    </div>

                    <p className="mt-2 text-xl font-bold">
                      98.7%
                    </p>

                  </div>

                  <div className="rounded-2xl bg-[#f4fbfe] p-4">

                    <div className="flex items-center gap-2">
                      <Clock3
                        size={17}
                        className="text-[#0798D5]"
                      />

                      <p className="text-xs text-[#7897a0]">
                        Processing
                      </p>
                    </div>

                    <p className="mt-2 text-xl font-bold">
                      ₹42.8K
                    </p>

                  </div>

                </div>

              </div>

              {/* FLOATING SUCCESS CARD */}
              <div className="absolute -bottom-6 -left-5 rounded-2xl border border-[#dceff5] bg-white p-4 shadow-xl">

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-green-50 p-2">
                    <CheckCircle2
                      size={20}
                      className="text-green-600"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-[#7897a0]">
                      Payout Successful
                    </p>

                    <p className="font-bold">
                      ₹25,000
                    </p>
                  </div>

                </div>

              </div>

              {/* FLOATING BANK CARD */}
              <div className="absolute -right-4 top-10 hidden rounded-2xl border border-[#dceff5] bg-white p-4 shadow-xl sm:block">

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-[#0798D5]/10 p-2">
                    <Landmark
                      size={20}
                      className="text-[#0798D5]"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-[#7897a0]">
                      Bank Transfer
                    </p>

                    <p className="font-bold">
                      Completed
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          FEATURES
      ========================================================= */}
      <section className="py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-sm font-bold uppercase tracking-wider text-[#0798D5]">
              POWERFUL PAYOUTS
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Everything You Need to
              <span className="text-[#0798D5]">
                {" "}Manage Payouts
              </span>
            </h2>

            <p className="mt-4 leading-7 text-[#7897a0]">
              Simplify your business payments with fast transfers,
              automation and complete visibility.
            </p>

          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: Send,
                title: "Instant Payouts",
                text: "Transfer funds quickly to bank accounts and beneficiaries whenever you need.",
              },
              {
                icon: Users,
                title: "Bulk Payouts",
                text: "Process multiple payouts together and save time on repetitive transactions.",
              },
              {
                icon: RefreshCw,
                title: "Automated Transfers",
                text: "Schedule recurring payments and automate your regular payout operations.",
              },
              {
                icon: TrendingUp,
                title: "Real-Time Tracking",
                text: "Monitor every transaction with live status updates and detailed reports.",
              },
              {
                icon: FileCheck2,
                title: "Easy Reconciliation",
                text: "Match transactions and maintain accurate payout records effortlessly.",
              },
              {
                icon: ShieldCheck,
                title: "Secure Payments",
                text: "Keep every payout protected with secure authentication and monitoring.",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[25px] border border-[#dceff5] bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0798D5]/10">
                    <Icon
                      size={24}
                      className="text-[#0798D5]"
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#7897a0]">
                    {item.text}
                  </p>

                </div>
              );

            })}

          </div>

        </div>
      </section>


      {/* =========================================================
          PAYOUT TYPES
      ========================================================= */}
      <section className="bg-[#f4fbfe] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* CONTENT */}
            <div>

              <span className="text-sm font-bold uppercase tracking-wider text-[#0798D5]">
                PAYOUT SOLUTIONS
              </span>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                One Platform for
                <span className="block text-[#0798D5]">
                  Every Business Payout
                </span>
              </h2>

              <p className="mt-5 leading-7 text-[#7897a0]">
                From vendor payments to employee salaries, manage your
                business payouts from one simple platform.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  ["Vendor Payments", "Pay your suppliers and vendors on time."],
                  ["Employee Payouts", "Process salaries, incentives and reimbursements."],
                  ["Customer Refunds", "Send fast and reliable refunds to customers."],
                  ["Partner Payments", "Manage commissions and partner settlements."],
                ].map(([title, text]) => (

                  <div
                    key={title}
                    className="flex gap-4 rounded-2xl border border-[#dceff5] bg-white p-4"
                  >

                    <div className="mt-1 rounded-xl bg-[#0798D5]/10 p-2">
                      <CheckCircle2
                        size={18}
                        className="text-[#0798D5]"
                      />
                    </div>

                    <div>
                      <h4 className="font-bold">
                        {title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-[#7897a0]">
                        {text}
                      </p>
                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* PAYOUT VISUAL */}
            <div className="rounded-[30px] border border-[#dceff5] bg-white p-6 shadow-xl">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-[#7897a0]">
                    Recent Payouts
                  </p>

                  <h3 className="mt-1 text-2xl font-bold">
                    ₹4,82,500
                  </h3>
                </div>

                <div className="rounded-xl bg-[#0798D5]/10 p-3">
                  <Banknote
                    size={23}
                    className="text-[#0798D5]"
                  />
                </div>

              </div>


              <div className="mt-6 space-y-3">

                {[
                  ["Vendor Payment", "₹85,000", "Paid"],
                  ["Employee Salary", "₹1,25,000", "Paid"],
                  ["Partner Commission", "₹42,500", "Paid"],
                  ["Customer Refund", "₹18,000", "Processing"],
                ].map(([title, amount, status]) => (

                  <div
                    key={title}
                    className="flex items-center justify-between rounded-2xl bg-[#f4fbfe] p-4"
                  >

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-white p-2">
                        {status === "Paid" ? (
                          <ArrowUpRight
                            size={18}
                            className="text-green-600"
                          />
                        ) : (
                          <Clock3
                            size={18}
                            className="text-[#0798D5]"
                          />
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-semibold">
                          {title}
                        </p>

                        <p className="text-xs text-[#7897a0]">
                          Today
                        </p>
                      </div>

                    </div>

                    <div className="text-right">

                      <p className="font-bold">
                        {amount}
                      </p>

                      <p
                        className={`text-xs font-medium ${
                          status === "Paid"
                            ? "text-green-600"
                            : "text-[#0798D5]"
                        }`}
                      >
                        {status}
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
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-wider text-[#0798D5]">
              HOW IT WORKS
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Simple & Seamless Payouts
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#7897a0]">
              Send business payments in just a few simple steps.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-4">

            {[
              [
                "01",
                "Add Beneficiary",
                "Add and verify the beneficiary you want to pay.",
              ],
              [
                "02",
                "Enter Amount",
                "Enter the amount and payment details.",
              ],
              [
                "03",
                "Authorize Payment",
                "Review and securely authorize the transaction.",
              ],
              [
                "04",
                "Track Payout",
                "Monitor the payout status in real time.",
              ],
            ].map(([number, title, text]) => (

              <div
                key={number}
                className="rounded-[25px] border border-[#dceff5] bg-white p-7"
              >

                <span className="text-4xl font-bold text-[#0798D5]/20">
                  {number}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-[#7897a0]">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          BULK PAYOUTS
      ========================================================= */}
      <section className="bg-[#073F52] py-20 text-white">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <span className="text-sm font-bold uppercase tracking-wider text-[#0798D5]">
                BULK PAYOUTS
              </span>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Pay Hundreds of
                <span className="block text-[#0798D5]">
                  Beneficiaries at Once
                </span>
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-white/65">
                Upload your payout data, validate beneficiary details and
                process multiple transactions without handling every payment
                individually.
              </p>

              <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0798D5] px-6 py-3.5 font-semibold text-white">
                Explore Bulk Payouts
                <ArrowRight size={18} />
              </button>

            </div>


            <div className="rounded-[30px] border border-white/10 bg-white/5 p-6">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-white/10 p-3">
                    <Users size={22} />
                  </div>

                  <div>
                    <p className="font-semibold">
                      Bulk Payout Batch
                    </p>

                    <p className="text-xs text-white/50">
                      Batch #PAY-20482
                    </p>
                  </div>

                </div>

                <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                  Processing
                </span>

              </div>


              <div className="mt-7 grid grid-cols-3 gap-3">

                {[
                  ["500", "Payments"],
                  ["₹8.4L", "Amount"],
                  ["98.4%", "Success"],
                ].map(([value, label]) => (

                  <div
                    key={label}
                    className="rounded-2xl bg-white/5 p-4"
                  >

                    <p className="text-xl font-bold">
                      {value}
                    </p>

                    <p className="mt-1 text-xs text-white/50">
                      {label}
                    </p>

                  </div>

                ))}

              </div>


              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">

                <div
                  className="h-full rounded-full bg-[#0798D5]"
                  style={{ width: "78%" }}
                />

              </div>

              <div className="mt-3 flex justify-between text-xs text-white/50">
                <span>390 completed</span>
                <span>500 total</span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECURITY
      ========================================================= */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div className="rounded-[30px] bg-[#f4fbfe] p-8">

              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  ["Secure Transfers", ShieldCheck],
                  ["Bank Connectivity", Landmark],
                  ["Real-Time Alerts", Smartphone],
                  ["Transaction Reports", FileCheck2],
                ].map(([title, Icon]) => (

                  <div
                    key={title}
                    className="rounded-2xl border border-[#dceff5] bg-white p-5"
                  >

                    <Icon
                      size={24}
                      className="text-[#0798D5]"
                    />

                    <p className="mt-3 font-semibold">
                      {title}
                    </p>

                  </div>

                ))}

              </div>

            </div>


            <div>

              <span className="text-sm font-bold uppercase tracking-wider text-[#0798D5]">
                SECURITY FIRST
              </span>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Every Payout,
                <span className="block text-[#0798D5]">
                  Protected
                </span>
              </h2>

              <p className="mt-5 leading-8 text-[#7897a0]">
                Keep your business funds protected with secure payment
                infrastructure, transaction monitoring and controlled access.
              </p>

              <div className="mt-7 space-y-4">

                {[
                  "Secure beneficiary verification",
                  "Transaction authentication",
                  "Real-time payment monitoring",
                  "Detailed transaction records",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <div className="rounded-full bg-[#0798D5]/10 p-2">
                      <CheckCircle2
                        size={17}
                        className="text-[#0798D5]"
                      />
                    </div>

                    <span className="font-medium">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-[#f4fbfe] py-20">

        <div className="mx-auto max-w-4xl px-6">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-wider text-[#0798D5]">
              FAQ
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Frequently Asked Questions
            </h2>

          </div>


          <div className="mt-10 space-y-4">

            {[
              [
                "What are business payouts?",
                "Business payouts allow companies to securely transfer money to vendors, employees, partners, customers and other beneficiaries.",
              ],
              [
                "Can I process bulk payouts?",
                "Yes. Bulk payout functionality allows businesses to process multiple beneficiary payments in a single batch.",
              ],
              [
                "Can I track payout status?",
                "Yes. Every payout can be monitored with real-time transaction status and detailed payment records.",
              ],
              [
                "Can I automate recurring payouts?",
                "Yes. Recurring and scheduled payout workflows can be configured for regular business payments.",
              ],
            ].map(([question, answer]) => (

              <details
                key={question}
                className="group rounded-2xl border border-[#dceff5] bg-white p-5"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">

                  {question}

                  <ChevronDown
                    size={20}
                    className="transition group-open:rotate-180"
                  />

                </summary>

                <p className="mt-4 leading-7 text-[#7897a0]">
                  {answer}
                </p>

              </details>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl rounded-[30px] bg-[#f4fbfe] px-6 py-14 text-center sm:px-12">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Simplify Your
            <span className="text-[#0798D5]">
              {" "}Business Payouts?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#7897a0]">
            Make faster, safer and more efficient business payments with
            a modern payout platform built for your business.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0798D5] px-7 py-4 font-semibold text-white shadow-lg shadow-[#0798D5]/20">
            Get Started
            <ArrowRight size={18} />
          </button>

        </div>

      </section>

    </main>
  );
}