
"use client";

import { useState } from "react";
import {
  Calculator,
  IndianRupee,
  Percent,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Wallet,
  CircleHelp,
  FileText,
  PiggyBank,
} from "lucide-react";

export default function RoiCalculatorPage() {
  const [investment, setInvestment] = useState("");
  const [finalValue, setFinalValue] = useState("");

  const investmentValue = parseFloat(investment) || 0;
  const finalValueAmount = parseFloat(finalValue) || 0;

  // ROI Calculation
  const profit = finalValueAmount - investmentValue;

  const roi =
    investmentValue > 0
      ? (profit / investmentValue) * 100
      : 0;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(value);
  };

  const formatPercent = (value) => {
    return `${value.toFixed(2)}%`;
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
              ROI Calculator
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Calculate your
              <span className="block text-blue-400">
                return on investment
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Quickly calculate your Return on Investment (ROI), total profit,
              and final investment value. Understand how effectively your
              investment has performed in seconds.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#calculator"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
              >
                Calculate ROI
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
          ROI CALCULATOR
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
              Calculate your ROI
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Enter your initial investment and final investment value to
              instantly calculate your profit and Return on Investment.
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
                  INITIAL INVESTMENT
              ================================================= */}
              <div className="mb-6">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Initial Investment
                </label>

                <div className="relative">

                  <IndianRupee
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="number"
                    min="0"
                    value={investment}
                    onChange={(e) => setInvestment(e.target.value)}
                    placeholder="e.g. 100000"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-4 pl-11 pr-4 text-lg font-medium outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Enter the amount you initially invested
                </p>

              </div>


              {/* =================================================
                  FINAL INVESTMENT VALUE
              ================================================= */}
              <div className="mb-8">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Final Investment Value
                </label>

                <div className="relative">

                  <IndianRupee
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="number"
                    min="0"
                    value={finalValue}
                    onChange={(e) => setFinalValue(e.target.value)}
                    placeholder="e.g. 125000"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-4 pl-11 pr-4 text-lg font-medium outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Enter the current or final value of your investment
                </p>

              </div>


              {/* =================================================
                  FORMULA
              ================================================= */}
              <div className="rounded-2xl bg-slate-50 p-5">

                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  ROI Formula
                </p>

                <p className="mt-3 text-sm font-medium text-slate-700">
                  ROI =
                  <span className="mx-2 rounded bg-white px-2 py-1 text-blue-600">
                    (Final Value − Initial Investment) ÷ Initial Investment × 100
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
                    <TrendingUp size={22} />
                  </div>

                  <h3 className="text-2xl font-bold">
                    ROI Overview
                  </h3>

                </div>

              </div>


              {/* =================================================
                  ROI
              ================================================= */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                <p className="text-sm text-slate-400">
                  Return on Investment
                </p>

                <p
                  className={`mt-2 text-4xl font-bold ${
                    roi >= 0 ? "text-blue-400" : "text-red-400"
                  }`}
                >
                  {formatPercent(roi)}
                </p>

              </div>


              {/* =================================================
                  PROFIT / LOSS
              ================================================= */}
              <div
                className={`mt-5 rounded-2xl border p-6 ${
                  profit >= 0
                    ? "border-blue-400/20 bg-blue-500/10"
                    : "border-red-400/20 bg-red-500/10"
                }`}
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-slate-400">
                      {profit >= 0 ? "Total Profit" : "Total Loss"}
                    </p>

                    <p
                      className={`mt-2 text-3xl font-bold ${
                        profit >= 0
                          ? "text-blue-400"
                          : "text-red-400"
                      }`}
                    >
                      {formatCurrency(Math.abs(profit))}
                    </p>

                  </div>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      profit >= 0
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    <TrendingUp size={23} />
                  </div>

                </div>

              </div>


              {/* =================================================
                  INVESTMENT + FINAL VALUE
              ================================================= */}
              <div className="mt-5 grid grid-cols-2 gap-4">

                {/* Initial Investment */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <p className="text-xs text-slate-500">
                    Initial Investment
                  </p>

                  <p className="mt-2 text-xl font-bold">
                    {formatCurrency(investmentValue)}
                  </p>

                </div>


                {/* Final Value */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <p className="text-xs text-slate-500">
                    Final Value
                  </p>

                  <p className="mt-2 text-xl font-bold">
                    {formatCurrency(finalValueAmount)}
                  </p>

                </div>

              </div>


              {/* Summary */}
              <div className="mt-5 rounded-2xl bg-white/5 p-5">

                <div className="flex items-center justify-between">

                  <span className="text-sm text-slate-400">
                    Investment Performance
                  </span>

                  <span
                    className={`font-semibold ${
                      roi >= 0
                        ? "text-blue-400"
                        : "text-red-400"
                    }`}
                  >
                    {roi >= 0 ? "Positive Return" : "Negative Return"}
                  </span>

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
              Calculate ROI in three simple steps
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Enter Initial Investment",
                description:
                  "Enter the amount you initially invested in the asset, business, project, or investment.",
                icon: Wallet,
              },
              {
                number: "02",
                title: "Enter Final Value",
                description:
                  "Enter the current or final value of your investment after the investment period.",
                icon: PiggyBank,
              },
              {
                number: "03",
                title: "Get Your Results",
                description:
                  "Instantly view your ROI percentage, total profit or loss, and investment performance.",
                icon: TrendingUp,
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
              Simplify your ROI calculations
            </h2>

            <p className="mt-4 text-slate-600">
              Quickly understand the profitability and performance of your
              investments with a simple and easy-to-use ROI calculator.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Instant ROI calculation",
              "Profit & loss breakdown",
              "Simple and easy to use",
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
          ROI EXPLANATION
      ========================================================= */}
      <section className="px-6 py-20 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Understand Your ROI
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              What is ROI?
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Return on Investment (ROI) is a financial metric used to
              measure the profitability of an investment relative to the
              amount initially invested.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              ROI is generally expressed as a percentage. A positive ROI
              indicates that an investment has generated a return, while a
              negative ROI indicates that the investment has resulted in a
              loss.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              The ROI formula compares the gain or loss from an investment
              with the original investment amount, making it easier to
              evaluate investment performance.
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
                  Initial Investment
                </span>

                <span className="font-semibold">
                  ₹1,00,000
                </span>

              </div>


              <div className="flex items-center justify-between border-b border-white/10 pb-4">

                <span className="text-slate-400">
                  Final Investment Value
                </span>

                <span className="font-semibold">
                  ₹1,25,000
                </span>

              </div>


              <div className="flex items-center justify-between border-b border-white/10 pb-4">

                <span className="text-slate-400">
                  Profit
                </span>

                <span className="font-semibold text-blue-400">
                  ₹25,000
                </span>

              </div>


              <div className="flex items-center justify-between border-b border-white/10 pb-4">

                <span className="text-slate-400">
                  ROI
                </span>

                <span className="font-semibold text-blue-400">
                  25%
                </span>

              </div>


              <div className="flex items-center justify-between pt-2">

                <span className="text-lg font-semibold">
                  Return
                </span>

                <span className="text-3xl font-bold text-blue-400">
                  ₹25,000
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
                question: "What is ROI?",
                answer:
                  "ROI stands for Return on Investment. It measures the gain or loss generated by an investment compared with the original investment amount.",
              },
              {
                question: "How is ROI calculated?",
                answer:
                  "ROI is calculated by subtracting the initial investment from the final investment value, dividing the result by the initial investment, and multiplying it by 100.",
              },
              {
                question: "What does a positive ROI mean?",
                answer:
                  "A positive ROI means that the final value of the investment is higher than the original amount invested, resulting in a profit.",
              },
              {
                question: "What does a negative ROI mean?",
                answer:
                  "A negative ROI means that the final investment value is lower than the initial investment, resulting in a loss.",
              },
              {
                question: "Can ROI be more than 100%?",
                answer:
                  "Yes. ROI can be greater than 100% when the profit generated by an investment is greater than the original amount invested.",
              },
              {
                question: "Does ROI consider the investment period?",
                answer:
                  "Basic ROI does not directly account for the time period of an investment. For comparing investments over different periods, annualized return metrics may be more appropriate.",
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
            Calculate your ROI quickly and easily
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Use our free ROI calculator to calculate your investment return,
            profit or loss, and overall investment performance in seconds.
          </p>

          <a
            href="#calculator"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Calculate ROI
            <ArrowRight size={18} />
          </a>

        </div>

      </section>

    </main>
  );
}
