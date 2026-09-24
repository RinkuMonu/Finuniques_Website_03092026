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
  CalendarDays,
} from "lucide-react";

export default function EmiCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");

  const principal = parseFloat(loanAmount) || 0;
  const annualRate = parseFloat(interestRate) || 0;
  const tenureYears = parseFloat(loanTenure) || 0;

  const monthlyRate = annualRate / 12 / 100;
  const tenureMonths = tenureYears * 12;

  // EMI Calculation
  const emi =
    principal > 0 && monthlyRate > 0 && tenureMonths > 0
      ? (principal *
          monthlyRate *
          Math.pow(1 + monthlyRate, tenureMonths)) /
        (Math.pow(1 + monthlyRate, tenureMonths) - 1)
      : principal > 0 && tenureMonths > 0
      ? principal / tenureMonths
      : 0;

  const totalPayment = emi * tenureMonths;
  const totalInterest = totalPayment - principal;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(value || 0);
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
              EMI Calculator
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Calculate your
              <span className="block text-blue-400">
                monthly loan EMI
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Calculate your Equated Monthly Instalment (EMI), total interest,
              and total repayment amount. Plan your loan payments with a
              simple and easy-to-use EMI calculator.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#calculator"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
              >
                Calculate EMI
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
          EMI CALCULATOR
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
              Calculate your EMI
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Enter your loan amount, interest rate, and loan tenure to
              instantly calculate your monthly EMI and total repayment.
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
                    Enter loan details
                  </h3>

                  <p className="text-sm text-slate-500">
                    Enter the details of your loan
                  </p>
                </div>

              </div>


              {/* =================================================
                  LOAN AMOUNT
              ================================================= */}
              <div className="mb-6">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Loan Amount
                </label>

                <div className="relative">

                  <IndianRupee
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="number"
                    min="0"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    placeholder="e.g. 500000"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-4 pl-11 pr-4 text-lg font-medium outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Enter the amount you want to borrow
                </p>

              </div>


              {/* =================================================
                  INTEREST RATE
              ================================================= */}
              <div className="mb-6">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Annual Interest Rate
                </label>

                <div className="relative">

                  <Percent
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    placeholder="e.g. 8.5"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-4 pl-11 pr-4 text-lg font-medium outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Enter the annual interest rate charged on your loan
                </p>

              </div>


              {/* =================================================
                  LOAN TENURE
              ================================================= */}
              <div className="mb-8">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Loan Tenure
                </label>

                <div className="relative">

                  <CalendarDays
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="number"
                    min="0"
                    step="0.5"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(e.target.value)}
                    placeholder="e.g. 5"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-4 pl-11 pr-20 text-lg font-medium outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400">
                    Years
                  </span>

                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Enter the repayment period for your loan
                </p>

              </div>


              {/* =================================================
                  FORMULA
              ================================================= */}
              <div className="rounded-2xl bg-slate-50 p-5">

                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  EMI Formula
                </p>

                <p className="mt-3 text-sm font-medium text-slate-700">
                  EMI =
                  <span className="mx-2 rounded bg-white px-2 py-1 text-blue-600">
                    P × R × (1 + R)ⁿ ÷ ((1 + R)ⁿ − 1)
                  </span>
                </p>

                <p className="mt-3 text-xs leading-6 text-slate-500">
                  P = Principal loan amount, R = Monthly interest rate,
                  and n = Number of monthly instalments.
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
                    EMI Overview
                  </h3>

                </div>

              </div>


              {/* =================================================
                  MONTHLY EMI
              ================================================= */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                <p className="text-sm text-slate-400">
                  Monthly EMI
                </p>

                <p className="mt-2 text-4xl font-bold text-blue-400">
                  {formatCurrency(emi)}
                </p>

                <p className="mt-2 text-xs text-slate-500">
                  Amount payable every month
                </p>

              </div>


              {/* =================================================
                  TOTAL INTEREST
              ================================================= */}
              <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-6">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-slate-400">
                      Total Interest
                    </p>

                    <p className="mt-2 text-3xl font-bold text-blue-400">
                      {formatCurrency(totalInterest)}
                    </p>

                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Percent size={23} />
                  </div>

                </div>

              </div>


              {/* =================================================
                  LOAN DETAILS
              ================================================= */}
              <div className="mt-5 grid grid-cols-2 gap-4">

                {/* Principal */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <p className="text-xs text-slate-500">
                    Loan Amount
                  </p>

                  <p className="mt-2 text-xl font-bold">
                    {formatCurrency(principal)}
                  </p>

                </div>


                {/* Interest Rate */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <p className="text-xs text-slate-500">
                    Interest Rate
                  </p>

                  <p className="mt-2 text-xl font-bold">
                    {annualRate}%
                  </p>

                </div>

              </div>


              {/* =================================================
                  TOTAL PAYMENT
              ================================================= */}
              <div className="mt-5 rounded-2xl bg-white/5 p-5">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-slate-400">
                      Total Repayment
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      {formatCurrency(totalPayment)}
                    </p>

                  </div>

                  <Wallet
                    size={28}
                    className="text-blue-400"
                  />

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
              Calculate your EMI in three simple steps
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Enter Loan Amount",
                description:
                  "Enter the amount you plan to borrow from the lender or financial institution.",
                icon: Wallet,
              },
              {
                number: "02",
                title: "Enter Interest & Tenure",
                description:
                  "Provide the annual interest rate and repayment period of your loan.",
                icon: Percent,
              },
              {
                number: "03",
                title: "Get Your EMI",
                description:
                  "Instantly view your monthly EMI, total interest, and total repayment amount.",
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
              Simplify your loan planning
            </h2>

            <p className="mt-4 text-slate-600">
              Get a clear understanding of your monthly loan obligation and
              overall repayment cost before taking a loan.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Instant EMI calculation",
              "Total interest breakdown",
              "Flexible loan tenure",
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
          EMI EXPLANATION
      ========================================================= */}
      <section className="px-6 py-20 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Understand Your EMI
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              What is EMI?
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Equated Monthly Instalment (EMI) is the fixed amount a borrower
              pays every month towards repaying a loan. Each EMI generally
              consists of a portion of the principal amount and the interest
              charged by the lender.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              The EMI amount depends mainly on the loan amount, interest rate,
              and repayment tenure. A longer tenure can reduce the monthly
              EMI, but it may increase the total interest paid over the life
              of the loan.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Using an EMI calculator helps you estimate your monthly
              repayment obligation and compare different loan scenarios
              before making a borrowing decision.
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
                  Loan Amount
                </span>

                <span className="font-semibold">
                  ₹5,00,000
                </span>

              </div>


              <div className="flex items-center justify-between border-b border-white/10 pb-4">

                <span className="text-slate-400">
                  Interest Rate
                </span>

                <span className="font-semibold">
                  8.5% p.a.
                </span>

              </div>


              <div className="flex items-center justify-between border-b border-white/10 pb-4">

                <span className="text-slate-400">
                  Loan Tenure
                </span>

                <span className="font-semibold">
                  5 Years
                </span>

              </div>


              <div className="flex items-center justify-between border-b border-white/10 pb-4">

                <span className="text-slate-400">
                  Monthly EMI
                </span>

                <span className="font-semibold text-blue-400">
                  ₹10,257 approx.
                </span>

              </div>


              <div className="flex items-center justify-between border-b border-white/10 pb-4">

                <span className="text-slate-400">
                  Total Interest
                </span>

                <span className="font-semibold">
                  ₹1,15,420 approx.
                </span>

              </div>


              <div className="flex items-center justify-between pt-2">

                <span className="text-lg font-semibold">
                  Total Repayment
                </span>

                <span className="text-3xl font-bold text-blue-400">
                  ₹6,15,420 approx.
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
                question: "What is EMI?",
                answer:
                  "EMI stands for Equated Monthly Instalment. It is the fixed amount a borrower generally pays every month towards repaying a loan, including principal and interest.",
              },
              {
                question: "How is EMI calculated?",
                answer:
                  "EMI is calculated using the loan principal, monthly interest rate, and total number of monthly instalments. The standard formula is P × R × (1 + R)ⁿ ÷ ((1 + R)ⁿ − 1).",
              },
              {
                question: "What factors affect my EMI?",
                answer:
                  "The main factors affecting EMI are the loan amount, interest rate, and loan tenure. Changes in any of these can change your monthly repayment.",
              },
              {
                question: "Does a longer loan tenure reduce EMI?",
                answer:
                  "Generally, a longer repayment tenure reduces the monthly EMI, but it can increase the total interest paid over the full loan period.",
              },
              {
                question: "What is the difference between EMI and total interest?",
                answer:
                  "EMI is the amount paid each month, while total interest is the total interest cost paid over the entire loan tenure.",
              },
              {
                question: "Can I use this calculator for different types of loans?",
                answer:
                  "Yes. The calculator can be used to estimate EMI for loans such as personal loans, home loans, car loans, education loans, and other amortizing loans.",
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
            Calculate your EMI before taking a loan
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Use our free EMI calculator to estimate your monthly payment,
            total interest, and total loan repayment in seconds.
          </p>

          <a
            href="#calculator"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Calculate EMI
            <ArrowRight size={18} />
          </a>

        </div>

      </section>

    </main>
  );
}
