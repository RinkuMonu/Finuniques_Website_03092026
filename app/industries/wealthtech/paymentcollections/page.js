"use client";

import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  CreditCard,
  FileCheck2,
  Lock,
  Receipt,
  RefreshCw,
  Send,
  ShieldCheck,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react";

export default function PaymentCollectionsPage() {
  return (
    <main className="min-h-screen bg-white text-[#073F52]">

      {/* HERO */}
      <section className="bg-[#f4fbfe] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-5 inline-flex rounded-full bg-[#0798D5]/10 px-4 py-2 text-sm font-semibold text-[#0798D5]">
                PAYMENT COLLECTIONS
              </span>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Collect Payments
                <span className="block text-[#0798D5]">
                  Faster & Smarter
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#7897a0]">
                Simplify payment collection with secure, automated and
                intelligent payment solutions built for modern businesses.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 rounded-full bg-[#0798D5] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#0798D5]/20">
                  Get Started
                  <ArrowRight size={18} />
                </button>

                <button className="rounded-full border border-[#0798D5] px-6 py-3.5 font-semibold text-[#0798D5]">
                  Talk to Sales
                </button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Multiple payment methods",
                  "Real-time payment tracking",
                  "Automated reconciliation",
                  "Secure settlements",
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

            {/* DASHBOARD */}
            <div className="relative">
              <div className="rounded-[30px] border border-[#dceff5] bg-white p-5 shadow-[0_25px_70px_rgba(7,63,82,0.12)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#7897a0]">
                      Total Collections
                    </p>
                    <h3 className="mt-1 text-3xl font-bold">
                      ₹18,42,650
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-[#0798D5]/10 p-3">
                    <Wallet
                      size={25}
                      className="text-[#0798D5]"
                    />
                  </div>
                </div>

                <div className="mt-7 h-32 rounded-2xl bg-[#f4fbfe] p-4">
                  <div className="flex h-full items-end gap-2">
                    {[35, 48, 42, 62, 55, 78, 70, 92, 82, 100].map(
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

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[#f4fbfe] p-4">
                    <p className="text-xs text-[#7897a0]">
                      Successful
                    </p>
                    <p className="mt-1 text-xl font-bold">
                      96.8%
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f4fbfe] p-4">
                    <p className="text-xs text-[#7897a0]">
                      Pending
                    </p>
                    <p className="mt-1 text-xl font-bold">
                      ₹84.2K
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-[#dceff5] bg-white p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-green-50 p-2">
                    <CheckCircle2
                      size={20}
                      className="text-green-600"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-[#7897a0]">
                      Payment Received
                    </p>
                    <p className="font-bold">
                      ₹24,500
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* FEATURES */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-[#0798D5]">
              Powerful Collections
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Everything You Need to
              <span className="text-[#0798D5]">
                {" "}Collect Payments
              </span>
            </h2>

            <p className="mt-4 text-[#7897a0]">
              Manage your entire payment collection process from one
              powerful platform.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: CreditCard,
                title: "Multiple Payment Methods",
                text: "Accept payments through cards, UPI, net banking and wallets.",
              },
              {
                icon: RefreshCw,
                title: "Automated Reconciliation",
                text: "Match incoming payments automatically and reduce manual work.",
              },
              {
                icon: TrendingUp,
                title: "Real-Time Analytics",
                text: "Track collections, success rates and payment trends instantly.",
              },
              {
                icon: Receipt,
                title: "Smart Invoices",
                text: "Generate and share professional invoices with your customers.",
              },
              {
                icon: Send,
                title: "Payment Reminders",
                text: "Send automated reminders for pending and overdue payments.",
              },
              {
                icon: ShieldCheck,
                title: "Secure Payments",
                text: "Protect every transaction with enterprise-grade security.",
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

      {/* PAYMENT METHODS */}
      <section className="bg-[#f4fbfe] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-[#0798D5]">
                Payment Methods
              </span>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Give Your Customers
                <span className="block text-[#0798D5]">
                  More Ways to Pay
                </span>
              </h2>

              <p className="mt-5 leading-7 text-[#7897a0]">
                Accept payments using the methods your customers already
                prefer.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "UPI & QR Payments",
                  "Credit & Debit Cards",
                  "Net Banking",
                  "Digital Wallets",
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

            <div className="rounded-[30px] border border-[#dceff5] bg-white p-7 shadow-xl">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  ["UPI", Zap],
                  ["Cards", CreditCard],
                  ["Banking", Wallet],
                  ["Invoices", Receipt],
                  ["Security", Lock],
                  ["Settlement", TrendingUp],
                ].map(([name, Icon]) => (
                  <div
                    key={name}
                    className="rounded-2xl bg-[#f4fbfe] p-5 text-center"
                  >
                    <Icon
                      size={25}
                      className="mx-auto text-[#0798D5]"
                    />
                    <p className="mt-3 text-sm font-semibold">
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-[#0798D5]">
              HOW IT WORKS
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Simple Payment Collection
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ["01", "Create Request", "Generate a payment request or invoice."],
              ["02", "Share Payment Link", "Send it to your customer instantly."],
              ["03", "Receive Payment", "Customer pays using their preferred method."],
              ["04", "Get Settled", "Track and reconcile your collections."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="relative rounded-[25px] border border-[#dceff5] bg-white p-7"
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

      {/* SECURITY */}
      <section className="bg-[#073F52] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Lock size={27} />
              </div>

              <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
                Security You Can
                <span className="block text-[#0798D5]">
                  Trust
                </span>
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-white/65">
                Every transaction is protected with secure payment
                infrastructure designed to keep your business and customers
                safe.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Encrypted Transactions",
                "Secure Authentication",
                "Fraud Monitoring",
                "Real-Time Alerts",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <ShieldCheck
                    size={22}
                    className="text-[#0798D5]"
                  />
                  <p className="mt-3 font-semibold">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
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
                "What payment methods can I accept?",
                "You can accept UPI, cards, net banking, wallets and other supported payment methods.",
              ],
              [
                "Can I track payments in real time?",
                "Yes. Your collection dashboard provides real-time visibility into successful, pending and failed payments.",
              ],
              [
                "Is payment reconciliation automated?",
                "Yes. Payments can be automatically matched with transactions to reduce manual reconciliation.",
              ],
              [
                "Are transactions secure?",
                "Yes. Payment transactions are protected using secure authentication and encryption mechanisms.",
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

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-[30px] bg-[#f4fbfe] px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Simplify Your
            <span className="text-[#0798D5]">
              {" "}Payment Collections?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#7897a0]">
            Start collecting payments faster with a smarter and more
            reliable payment collection experience.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0798D5] px-7 py-4 font-semibold text-white shadow-lg">
            Get Started
            <ArrowRight size={18} />
          </button>

        </div>
      </section>

    </main>
  );
}