"use client";

import { useState } from "react";
import {
  Calculator,
  IndianRupee,
  Percent,
  ArrowRight,
  CheckCircle2,
  ReceiptIndianRupee,
  Wallet,
  CircleHelp,
  FileText,
} from "lucide-react";

export default function GstCalculatorPage() {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState("18");
  const [calculationType, setCalculationType] = useState("exclusive");

  const amountValue = parseFloat(amount) || 0;
  const rateValue = parseFloat(gstRate) || 0;

  /* ================= GST CALCULATION ================= */

  // GST exclusive:
  // GST = Amount × Rate / 100
  //
  // GST inclusive:
  // GST = Total Amount - (Total Amount / (1 + Rate / 100))

  const gstAmount =
    calculationType === "exclusive"
      ? (amountValue * rateValue) / 100
      : amountValue - amountValue / (1 + rateValue / 100);

  const baseAmount =
    calculationType === "exclusive"
      ? amountValue
      : amountValue - gstAmount;

  const totalAmount =
    calculationType === "exclusive"
      ? amountValue + gstAmount
      : amountValue;

  // For intra-state transactions
  const cgst = gstAmount / 2;
  const sgst = gstAmount / 2;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute left-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute right-[-100px] bottom-[-100px] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
              <Calculator size={16} />
              GST Calculator
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Calculate your
              <span className="block text-blue-400">
                GST instantly
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Quickly calculate GST on your goods and services. Get an
              instant breakdown of GST, CGST, SGST, and the final amount
              payable.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#calculator"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
              >
                Calculate GST
                <ArrowRight size={18} />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:bg-white/5"
              >
                How It Works
              </a>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          GST CALCULATOR
      ========================================================= */}
      <section
        id="calculator"
        className="bg-slate-50 px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">

          {/* Section Heading */}
          <div className="mb-12 text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Free Calculator
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Calculate your GST
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Enter your amount, select the applicable GST rate, and
              instantly calculate the GST amount and total payable amount.
            </p>

          </div>


          <div className="grid gap-8 lg:grid-cols-2">

            {/* =====================================================
                INPUT CARD
            ===================================================== */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">

              {/* Card Header */}
              <div className="mb-8 flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Calculator size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Enter your details
                  </h3>

                  <p className="text-sm text-slate-500">
                    All amounts are in Indian Rupees
                  </p>
                </div>

              </div>


              {/* =================================================
                  AMOUNT INPUT
              ================================================= */}
              <div className="mb-6">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Amount
                </label>

                <div className="relative">

                  <IndianRupee
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="number"
                    min="0"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="e.g. 100000"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-4 pl-11 pr-4 text-lg font-medium outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Enter the taxable amount or amount including GST
                </p>

              </div>


              {/* =================================================
                  CALCULATION TYPE
              ================================================= */}
              <div className="mb-6">

                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Calculation Type
                </label>

                <div className="grid grid-cols-2 gap-3">

                  {/* GST Exclusive */}
                  <button
                    type="button"
                    onClick={() => setCalculationType("exclusive")}
                    className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                      calculationType === "exclusive"
                        ? "border-blue-500 bg-blue-50 text-blue-600"
                        : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    Add GST

                    <span className="mt-1 block text-xs font-normal">
                      GST exclusive
                    </span>
                  </button>


                  {/* GST Inclusive */}
                  <button
                    type="button"
                    onClick={() => setCalculationType("inclusive")}
                    className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                      calculationType === "inclusive"
                        ? "border-blue-500 bg-blue-50 text-blue-600"
                        : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    Remove GST

                    <span className="mt-1 block text-xs font-normal">
                      GST inclusive
                    </span>
                  </button>

                </div>

              </div>


              {/* =================================================
                  GST RATE
              ================================================= */}
              <div className="mb-8">

                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  GST Rate
                </label>


                {/* Quick Rates */}
                <div className="grid grid-cols-4 gap-2">

                  {["5", "12", "18", "28"].map((rate) => (

                    <button
                      key={rate}
                      type="button"
                      onClick={() => setGstRate(rate)}
                      className={`rounded-xl border py-3 text-sm font-semibold transition ${
                        gstRate === rate
                          ? "border-blue-500 bg-blue-600 text-white"
                          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {rate}%
                    </button>

                  ))}

                </div>


                {/* Custom Rate */}
                <div className="relative mt-3">

                  <Percent
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="number"
                    min="0"
                    value={gstRate}
                    onChange={(e) => setGstRate(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    placeholder="Enter custom GST rate"
                  />

                </div>

              </div>


              {/* =================================================
                  FORMULA
              ================================================= */}
              <div className="rounded-2xl bg-slate-50 p-5">

                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  GST Formula
                </p>

                <p className="mt-3 text-sm font-medium text-slate-700">
                  GST =
                  <span className="mx-2 rounded bg-white px-2 py-1 text-blue-600">
                    Taxable Amount × GST Rate ÷ 100
                  </span>
                </p>

              </div>

            </div>


            {/* =====================================================
                RESULT CARD
            ===================================================== */}
            <div className="rounded-3xl bg-slate-950 p-7 text-white shadow-xl sm:p-9">

              {/* Result Header */}
              <div className="mb-8">

                <p className="text-sm font-medium text-slate-400">
                  Your Results
                </p>

                <div className="mt-2 flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                    <ReceiptIndianRupee size={22} />
                  </div>

                  <h3 className="text-2xl font-bold">
                    GST Overview
                  </h3>

                </div>

              </div>


              {/* =================================================
                  TOTAL AMOUNT
              ================================================= */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                <p className="text-sm text-slate-400">
                  {calculationType === "exclusive"
                    ? "Total Amount Including GST"
                    : "Base Amount Excluding GST"}
                </p>

                <p className="mt-2 text-4xl font-bold">
                  {formatCurrency(
                    calculationType === "exclusive"
                      ? totalAmount
                      : baseAmount
                  )}
                </p>

              </div>


              {/* =================================================
                  GST AMOUNT
              ================================================= */}
              <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-6">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-slate-400">
                      GST Amount
                    </p>

                    <p className="mt-2 text-3xl font-bold text-blue-400">
                      {formatCurrency(gstAmount)}
                    </p>

                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Percent size={23} />
                  </div>

                </div>

              </div>


              {/* =================================================
                  CGST + SGST
              ================================================= */}
              <div className="mt-5 grid grid-cols-2 gap-4">

                {/* CGST */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <p className="text-xs text-slate-500">
                    CGST
                  </p>

                  <p className="mt-2 text-xl font-bold">
                    {formatCurrency(cgst)}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {rateValue / 2}% CGST
                  </p>

                </div>


                {/* SGST */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <p className="text-xs text-slate-500">
                    SGST
                  </p>

                  <p className="mt-2 text-xl font-bold">
                    {formatCurrency(sgst)}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {rateValue / 2}% SGST
                  </p>

                </div>

              </div>


              {/* =================================================
                  SUMMARY
              ================================================= */}
              <div className="mt-5 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-white/5 p-5">

                  <p className="text-xs text-slate-500">
                    Base Amount
                  </p>

                  <p className="mt-2 font-semibold">
                    {formatCurrency(baseAmount)}
                  </p>

                </div>


                <div className="rounded-2xl bg-white/5 p-5">

                  <p className="text-xs text-slate-500">
                    GST Rate
                  </p>

                  <p className="mt-2 font-semibold">
                    {rateValue}%
                  </p>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section
        id="how-it-works"
        className="px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              How It Works
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Calculate GST in three simple steps
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Enter Amount",
                description:
                  "Enter the taxable amount or the total amount including GST.",
                icon: Wallet,
              },
              {
                number: "02",
                title: "Select GST Rate",
                description:
                  "Choose the applicable GST rate such as 5%, 12%, 18%, or 28%.",
                icon: Percent,
              },
              {
                number: "03",
                title: "Get Your Results",
                description:
                  "Instantly view GST, CGST, SGST, and the final payable amount.",
                icon: ReceiptIndianRupee,
              },
            ].map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon size={23} />
                    </div>

                    <span className="text-4xl font-bold text-slate-100">
                      {item.number}
                    </span>

                  </div>


                  <h3 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h3>


                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>

                </div>
              );

            })}

          </div>
        </div>
      </section>


      {/* =========================================================
          FEATURES
      ========================================================= */}
      <section className="bg-slate-50 px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Why Use It
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Simplify your GST calculations
            </h2>

            <p className="mt-4 text-slate-600">
              Quickly calculate GST and understand the tax amount included
              in your invoices and transactions.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Instant GST calculations",
              "CGST & SGST breakdown",
              "Multiple GST rates",
              "No signup required",
            ].map((feature) => (

              <div
                key={feature}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5"
              >

                <CheckCircle2
                  size={21}
                  className="shrink-0 text-blue-600"
                />

                <span className="font-medium text-slate-700">
                  {feature}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          GST EXPLANATION
      ========================================================= */}
      <section className="px-6 py-20 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Understand Your GST
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              What is GST?
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Goods and Services Tax (GST) is an indirect tax applied to
              the supply of goods and services in India. GST simplifies
              the indirect tax structure by combining multiple taxes into
              a unified tax system.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              When GST is charged on an eligible intra-state transaction,
              the tax is generally divided into Central GST (CGST) and
              State GST (SGST). This calculator helps you quickly
              understand the GST amount and total transaction value.
            </p>

          </div>


          {/* RIGHT EXAMPLE */}
          <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                <FileText size={24} />
              </div>

              <h3 className="text-xl font-bold">
                Example Calculation
              </h3>

            </div>


            <div className="mt-8 space-y-5">

              <div className="flex items-center justify-between border-b border-white/10 pb-4">

                <span className="text-slate-400">
                  Taxable Amount
                </span>

                <span className="font-semibold">
                  ₹1,00,000
                </span>

              </div>


              <div className="flex items-center justify-between border-b border-white/10 pb-4">

                <span className="text-slate-400">
                  GST Rate
                </span>

                <span className="font-semibold">
                  18%
                </span>

              </div>


              <div className="flex items-center justify-between border-b border-white/10 pb-4">

                <span className="text-slate-400">
                  GST Amount
                </span>

                <span className="font-semibold text-blue-400">
                  ₹18,000
                </span>

              </div>


              <div className="flex items-center justify-between border-b border-white/10 pb-4">

                <span className="text-slate-400">
                  CGST
                </span>

                <span className="font-semibold">
                  ₹9,000
                </span>

              </div>


              <div className="flex items-center justify-between border-b border-white/10 pb-4">

                <span className="text-slate-400">
                  SGST
                </span>

                <span className="font-semibold">
                  ₹9,000
                </span>

              </div>


              <div className="flex items-center justify-between pt-2">

                <span className="text-lg font-semibold">
                  Total Amount
                </span>

                <span className="text-3xl font-bold text-blue-400">
                  ₹1,18,000
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-slate-50 px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-4xl">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              FAQs
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Frequently asked questions
            </h2>

          </div>


          <div className="mt-12 space-y-4">

            {[
              {
                question: "What is GST?",
                answer:
                  "GST stands for Goods and Services Tax. It is an indirect tax applicable to the supply of goods and services in India.",
              },
              {
                question: "How is GST calculated?",
                answer:
                  "For a GST-exclusive amount, GST is calculated by multiplying the taxable amount by the GST rate and dividing it by 100.",
              },
              {
                question: "What is the difference between CGST and SGST?",
                answer:
                  "For eligible intra-state transactions, GST is generally divided into Central GST (CGST) and State GST (SGST).",
              },
              {
                question: "Can I calculate GST included in an amount?",
                answer:
                  "Yes. Select the 'Remove GST' option to calculate the base amount and GST component from a GST-inclusive amount.",
              },
              {
                question: "Which GST rates can I use?",
                answer:
                  "The calculator provides commonly used GST rates including 5%, 12%, 18%, and 28%. You can also enter a custom rate.",
              },
            ].map((faq) => (

              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >

                <div className="flex gap-4">

                  <CircleHelp
                    size={21}
                    className="mt-1 shrink-0 text-blue-600"
                  />

                  <div>

                    <h3 className="font-bold text-slate-900">
                      {faq.question}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-blue-600 px-8 py-14 text-center sm:px-12">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Calculate GST quickly and accurately
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Use our free GST calculator to calculate GST, CGST, SGST,
            and the final amount payable in seconds.
          </p>

          <a
            href="#calculator"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Calculate GST
            <ArrowRight size={18} />
          </a>

        </div>

      </section>

    </main>
  );
}
