"use client";

import { useState } from "react";
import {
  Calculator,
  TrendingUp,
  IndianRupee,
  Percent,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Wallet,
  CircleHelp,
} from "lucide-react";

export default function ProfitMarginCalculatorPage() {
  const [revenue, setRevenue] = useState("");
  const [cost, setCost] = useState("");

  const revenueValue = parseFloat(revenue) || 0;
  const costValue = parseFloat(cost) || 0;

  const profit = revenueValue - costValue;

  const profitMargin =
    revenueValue > 0 ? (profit / revenueValue) * 100 : 0;

  const markup =
    costValue > 0 ? (profit / costValue) * 100 : 0;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute left-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute right-[-100px] bottom-[-100px] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
              <Calculator size={16} />
              Profit Margin Calculator
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Calculate your
              <span className="block text-blue-400">
                profit margin instantly
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Quickly calculate your profit, profit margin, and markup
              percentage. Understand your business profitability and make
              smarter pricing decisions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
              >
                Calculate Now
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

      {/* ================= CALCULATOR ================= */}
      <section
        id="calculator"
        className="bg-slate-50 px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Free Calculator
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Calculate your profit margin
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Enter your revenue and total cost to instantly see your
              profitability.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {/* INPUT CARD */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">

              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Calculator size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Enter your numbers
                  </h3>
                  <p className="text-sm text-slate-500">
                    All amounts are in Indian Rupees
                  </p>
                </div>
              </div>

              {/* REVENUE */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Total Revenue
                </label>

                <div className="relative">
                  <IndianRupee
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="number"
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    placeholder="e.g. 100000"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-4 pl-11 pr-4 text-lg font-medium outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Total amount generated from sales
                </p>
              </div>

              {/* COST */}
              <div className="mb-8">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Total Cost
                </label>

                <div className="relative">
                  <IndianRupee
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="number"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    placeholder="e.g. 70000"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-4 pl-11 pr-4 text-lg font-medium outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Total cost incurred to generate the revenue
                </p>
              </div>

              {/* FORMULA */}
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Profit Margin Formula
                </p>

                <p className="mt-3 text-sm font-medium text-slate-700">
                  Profit Margin =
                  <span className="mx-2 rounded bg-white px-2 py-1 text-blue-600">
                    (Revenue − Cost) ÷ Revenue × 100
                  </span>
                </p>
              </div>
            </div>

            {/* RESULT CARD */}
            <div className="rounded-3xl bg-slate-950 p-7 text-white shadow-xl sm:p-9">

              <div className="mb-8">
                <p className="text-sm font-medium text-slate-400">
                  Your Results
                </p>

                <div className="mt-2 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                    <TrendingUp size={22} />
                  </div>

                  <h3 className="text-2xl font-bold">
                    Profit Overview
                  </h3>
                </div>
              </div>

              {/* MAIN PROFIT */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-400">
                  Total Profit
                </p>

                <p className="mt-2 text-4xl font-bold">
                  {formatCurrency(profit)}
                </p>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-blue-500 transition-all duration-500"
                    style={{
                      width: `${Math.min(Math.max(profitMargin, 0), 100)}%`,
                    }}
                  />
                </div>
              </div>

              {/* STATS */}
              <div className="mt-5 grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Percent size={17} />
                    <span className="text-sm">
                      Profit Margin
                    </span>
                  </div>

                  <p className="mt-3 text-2xl font-bold text-white">
                    {profitMargin.toFixed(2)}%
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-2 text-slate-400">
                    <BarChart3 size={17} />
                    <span className="text-sm">
                      Markup
                    </span>
                  </div>

                  <p className="mt-3 text-2xl font-bold text-white">
                    {markup.toFixed(2)}%
                  </p>
                </div>

              </div>

              {/* REVENUE / COST */}
              <div className="mt-5 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-white/5 p-5">
                  <p className="text-xs text-slate-500">
                    Revenue
                  </p>
                  <p className="mt-2 font-semibold">
                    {formatCurrency(revenueValue)}
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 p-5">
                  <p className="text-xs text-slate-500">
                    Cost
                  </p>
                  <p className="mt-2 font-semibold">
                    {formatCurrency(costValue)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
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
              Calculate profitability in three simple steps
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Enter Revenue",
                description:
                  "Enter the total revenue generated from your products or services.",
                icon: Wallet,
              },
              {
                number: "02",
                title: "Enter Your Costs",
                description:
                  "Add the total cost associated with generating that revenue.",
                icon: IndianRupee,
              },
              {
                number: "03",
                title: "Get Your Results",
                description:
                  "Instantly view your profit, profit margin, and markup percentage.",
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

      {/* ================= FEATURES ================= */}
      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Why Use It
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Make better business decisions
            </h2>

            <p className="mt-4 text-slate-600">
              A simple way to understand your profitability before making
              pricing and business decisions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Instant calculations",
              "Accurate profit analysis",
              "Easy pricing decisions",
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

      {/* ================= PROFIT MARGIN EXPLANATION ================= */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Understand Your Numbers
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              What is profit margin?
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Profit margin is the percentage of revenue that remains as
              profit after deducting your costs. It helps you understand
              how efficiently your business converts sales into profit.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              For example, if your business generates ₹1,00,000 in revenue
              and your total costs are ₹70,000, your profit is ₹30,000 and
              your profit margin is 30%.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                <BarChart3 size={24} />
              </div>

              <h3 className="text-xl font-bold">
                Example Calculation
              </h3>
            </div>

            <div className="mt-8 space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-slate-400">
                  Revenue
                </span>
                <span className="font-semibold">
                  ₹1,00,000
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-slate-400">
                  Cost
                </span>
                <span className="font-semibold">
                  ₹70,000
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-slate-400">
                  Profit
                </span>
                <span className="font-semibold text-blue-400">
                  ₹30,000
                </span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-lg font-semibold">
                  Profit Margin
                </span>
                <span className="text-3xl font-bold text-blue-400">
                  30%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
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
                question: "What is the profit margin formula?",
                answer:
                  "Profit margin is calculated by subtracting total cost from revenue, dividing the result by revenue, and multiplying by 100.",
              },
              {
                question: "What is the difference between margin and markup?",
                answer:
                  "Profit margin measures profit as a percentage of revenue, while markup measures profit as a percentage of cost.",
              },
              {
                question: "Can I use this calculator for any business?",
                answer:
                  "Yes. The calculator can be used for products, services, ecommerce businesses, retail businesses, agencies, and other business models.",
              },
              {
                question: "Is the calculator free to use?",
                answer:
                  "Yes. You can use the calculator to calculate your profit margin without creating an account.",
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

      {/* ================= CTA ================= */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-blue-600 px-8 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Know your numbers. Grow your business.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Use our profit margin calculator to understand your
            profitability and make more confident business decisions.
          </p>

          <a
            href="#calculator"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Calculate Profit Margin
            <ArrowRight size={18} />
          </a>

        </div>
      </section>

    </main>
  );
}