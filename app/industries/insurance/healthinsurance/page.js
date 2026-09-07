"use client";

import React from "react";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  HeartPulse,
  Hospital,
  FileCheck2,
  Wallet,
  Users,
  Clock3,
  BadgeCheck,
  Stethoscope,
  IndianRupee,
  ChevronDown,
  Phone,
  Activity,
  UserRound,
  Baby,
  Heart,
} from "lucide-react";

export default function HealthInsurance() {
  return (
    <main className="overflow-hidden bg-white text-[#073F52]">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#f4fbfe]">

        {/* Background glow */}
        <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-[#d9f5ff] blur-3xl opacity-70" />
        <div className="absolute right-[-100px] top-[-100px] h-[600px] w-[600px] rounded-full bg-[#dff7ff] blur-3xl opacity-80" />

        <div className="relative mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-20">

          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">

            {/* LEFT CONTENT */}
            <div>

              {/* Label */}
              <div className="mb-8 inline-flex items-center rounded-full border border-[#bde7f7] bg-white px-6 py-3 shadow-sm">
                <span className="text-sm font-bold tracking-[0.18em] text-[#058fd0]">
                  HEALTH INSURANCE
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-[700px] text-[48px] font-bold leading-[1.02] tracking-[-0.04em] text-[#063F52] sm:text-[60px] lg:text-[72px]">
                Better health.
                <br />
                <span className="text-[#0798D5]">
                  Stronger protection.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-[650px] text-[18px] leading-8 text-[#315b68] sm:text-[20px]">
                Protect yourself and your family with comprehensive health
                insurance designed for hospitalisation, medical emergencies,
                cashless treatment and everyday healthcare needs.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-wrap gap-4">

                <button className="group flex items-center gap-4 rounded-full bg-[#0798D5] px-8 py-4 text-[17px] font-semibold text-white shadow-[0_15px_35px_rgba(7,152,213,0.25)] transition hover:bg-[#058bc5]">
                  Get Health Cover
                  <ArrowRight
                    size={20}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

                <button className="flex items-center gap-3 rounded-full border border-[#b9e3f3] bg-white px-8 py-4 text-[17px] font-semibold text-[#078dcc] shadow-sm transition hover:bg-[#f0faff]">
                  <Phone size={19} />
                  Talk to an Expert
                </button>

              </div>

              {/* Mini features */}
              <div className="mt-11 grid max-w-[700px] grid-cols-2 gap-4 sm:grid-cols-4">

                {[
                  {
                    icon: ShieldCheck,
                    title: "Secure",
                  },
                  {
                    icon: Hospital,
                    title: "Cashless",
                  },
                  {
                    icon: Clock3,
                    title: "24/7 Support",
                  },
                  {
                    icon: BadgeCheck,
                    title: "Trusted",
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

            {/* RIGHT VISUAL */}
            <div className="relative flex min-h-[570px] items-center justify-center">

              {/* Main circle */}
              <div className="absolute h-[420px] w-[420px] rounded-full border border-[#bce8f7] bg-[#e8f8fd] sm:h-[500px] sm:w-[500px]" />

              <div className="absolute h-[330px] w-[330px] rounded-full border border-[#c7edf8] bg-white/70 sm:h-[400px] sm:w-[400px]" />

              {/* Main insurance card */}
              <div className="relative z-10 w-[310px] rounded-[30px] border border-[#d9edf4] bg-white p-7 shadow-[0_30px_80px_rgba(6,63,82,0.14)] sm:w-[350px]">

                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-xs font-bold tracking-[0.15em] text-[#0798D5]">
                      HEALTH COVER
                    </p>

                    <p className="mt-2 text-3xl font-bold text-[#073F52]">
                      ₹10 Lakh
                    </p>

                    <p className="mt-1 text-sm text-[#83a3ad]">
                      Sum insured
                    </p>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#073F52] text-white">
                    <HeartPulse size={27} />
                  </div>

                </div>

                {/* Protection item */}
                <div className="mt-7 rounded-2xl border border-[#c9ebf7] bg-[#effaff] p-4">

                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0798D5] text-white">
                      <Hospital size={21} />
                    </div>

                    <div>
                      <p className="font-semibold text-[#073F52]">
                        Cashless Hospitalisation
                      </p>

                      <p className="text-xs text-[#8aa8b1]">
                        Access quality healthcare
                      </p>
                    </div>
                  </div>

                </div>

                {/* Protection items */}
                <div className="mt-3 space-y-3">

                  {[
                    ["₹0", "Paperwork hassle"],
                    ["24/7", "Health assistance"],
                    ["100%", "Digital claims"],
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

                <div className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#eaf8fc] py-3 text-sm font-semibold text-[#078dcc]">
                  <ShieldCheck size={18} />
                  Your health. Your protection.
                </div>

              </div>

              {/* FLOATING BADGE 1 */}
              <div className="absolute left-0 top-[110px] z-20 rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(6,63,82,0.10)]">

                <p className="text-[11px] font-bold tracking-[0.15em] text-[#0798D5]">
                  CLAIM SUPPORT
                </p>

                <p className="mt-1 text-xl font-bold text-[#073F52]">
                  24 × 7
                </p>

              </div>

              {/* FLOATING BADGE 2 */}
              <div className="absolute right-[-10px] top-[80px] z-20 rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(6,63,82,0.10)]">

                <p className="text-[11px] font-bold tracking-[0.15em] text-[#0798D5]">
                  COVERAGE
                </p>

                <p className="mt-1 text-xl font-bold text-[#073F52]">
                  ₹10L+
                </p>

              </div>

              {/* FLOATING BADGE 3 */}
              <div className="absolute bottom-[85px] left-[-15px] z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d6edf5] bg-white text-[#0798D5] shadow-[0_15px_40px_rgba(6,63,82,0.10)]">
                <ShieldCheck size={28} />
              </div>

              {/* FLOATING BADGE 4 */}
              <div className="absolute bottom-[70px] right-[5px] z-20 rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(6,63,82,0.10)]">

                <p className="text-[11px] font-bold tracking-[0.15em] text-[#0798D5]">
                  PROCESS
                </p>

                <p className="mt-1 text-xl font-bold text-[#073F52]">
                  Simple
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          TRUST STATS
      ========================================================= */}
      <section className="border-y border-[#e3f2f6] bg-white">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 lg:grid-cols-4">

          {[
            ["10L+", "Customers Protected"],
            ["15,000+", "Network Hospitals"],
            ["24/7", "Claim Assistance"],
            ["99%+", "Customer Satisfaction"],
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
          COVERAGE SECTION
      ========================================================= */}
      <section className="bg-white py-20 lg:py-28">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="mx-auto max-w-[700px] text-center">

            <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
              COMPLETE PROTECTION
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-[#073F52] sm:text-5xl">
              Coverage that takes care of what matters most.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#6d909b]">
              From unexpected hospitalisation to planned treatments,
              get comprehensive protection for your healthcare journey.
            </p>

          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: Hospital,
                title: "Hospitalisation",
                description:
                  "Coverage for room rent, ICU, surgery and eligible hospital expenses.",
              },
              {
                icon: Activity,
                title: "Critical Illness",
                description:
                  "Financial protection against major critical illnesses and treatments.",
              },
              {
                icon: Stethoscope,
                title: "Day Care",
                description:
                  "Cover eligible procedures that do not require overnight hospitalisation.",
              },
              {
                icon: Wallet,
                title: "Medical Expenses",
                description:
                  "Support for pre and post-hospitalisation medical expenses.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-[25px] border border-[#dceff5] bg-white p-7 shadow-[0_12px_35px_rgba(6,63,82,0.05)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(6,63,82,0.09)]"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9f8fd] text-[#0798D5]">
                    <Icon size={27} strokeWidth={1.8} />
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

              <div className="absolute left-1/2 top-1/2 flex h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_25px_70px_rgba(6,63,82,0.10)]">

                <div className="text-center">

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#0798D5] text-white shadow-lg">
                    <HeartPulse size={38} />
                  </div>

                  <p className="mt-5 text-2xl font-bold text-[#073F52]">
                    Health First
                  </p>

                  <p className="mt-1 text-sm text-[#8aa5ad]">
                    Protection that stays with you
                  </p>

                </div>

              </div>

              <div className="absolute left-0 top-10 rounded-2xl border border-[#d4edf5] bg-white px-5 py-4 shadow-lg">
                <ShieldCheck className="text-[#0798D5]" size={24} />
                <p className="mt-2 text-sm font-bold text-[#073F52]">
                  Secure
                </p>
              </div>

              <div className="absolute bottom-10 right-0 rounded-2xl border border-[#d4edf5] bg-white px-5 py-4 shadow-lg">
                <BadgeCheck className="text-[#0798D5]" size={24} />
                <p className="mt-2 text-sm font-bold text-[#073F52]">
                  Reliable
                </p>
              </div>

            </div>


            {/* Content */}
            <div>

              <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
                WHY CHOOSE US
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-[#073F52] sm:text-5xl">
                Healthcare protection without the complexity.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#6c8e98]">
                We make health insurance easier to understand, easier to
                purchase and easier to use when you need it most.
              </p>

              <div className="mt-8 space-y-5">

                {[
                  [
                    "Simple & transparent",
                    "Understand your coverage, exclusions and benefits clearly.",
                  ],
                  [
                    "Wide hospital network",
                    "Access cashless treatment across a broad network of hospitals.",
                  ],
                  [
                    "Fast claim assistance",
                    "Get dedicated support throughout your claim journey.",
                  ],
                  [
                    "Flexible coverage",
                    "Choose coverage that fits your health and financial needs.",
                  ],
                ].map(([title, description], index) => (
                  <div key={index} className="flex gap-4">

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
          WHO IS IT FOR
      ========================================================= */}
      <section className="bg-white py-20 lg:py-28">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="text-center">

            <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
              COVER EVERYONE
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">
              Health cover for every stage of life.
            </h2>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: UserRound,
                title: "Individuals",
                text: "Personal health protection built around your needs.",
              },
              {
                icon: Users,
                title: "Families",
                text: "One comprehensive plan to protect your loved ones.",
              },
              {
                icon: Baby,
                title: "Young Families",
                text: "Protection for parents, children and growing families.",
              },
              {
                icon: Heart,
                title: "Senior Citizens",
                text: "Dedicated coverage for healthcare needs later in life.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[26px] border border-[#dceff5] p-7 transition hover:border-[#a9dff1] hover:bg-[#f6fcfe]"
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
          HOW IT WORKS
      ========================================================= */}
      <section className="bg-[#f4fbfe] py-20 lg:py-28">

        <div className="mx-auto max-w-[1100px] px-6">

          <div className="mx-auto max-w-[700px] text-center">

            <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
              HOW IT WORKS
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">
              Get protected in three simple steps.
            </h2>

          </div>

          <div className="relative mt-16 grid gap-8 md:grid-cols-3">

            {/* Connecting line */}
            <div className="absolute left-[17%] right-[17%] top-[40px] hidden h-px bg-[#bce6f3] md:block" />

            {[
              {
                number: "01",
                icon: FileCheck2,
                title: "Choose your cover",
                text: "Select the sum insured and plan that fits your healthcare needs.",
              },
              {
                number: "02",
                icon: ShieldCheck,
                title: "Get protected",
                text: "Complete your application and receive your policy digitally.",
              },
              {
                number: "03",
                icon: HeartPulse,
                title: "Use when needed",
                text: "Access healthcare and claim support whenever you need it.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="relative text-center">

                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-[#f4fbfe] bg-[#0798D5] text-white shadow-lg">
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
          PLANS
      ========================================================= */}
      <section className="bg-white py-20 lg:py-28">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div>
              <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
                PLANS
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">
                Protection that fits your budget.
              </h2>
            </div>

            <p className="max-w-[450px] text-sm leading-7 text-[#7897a0]">
              Choose the coverage level that works for you. Plans can be
              customised according to your requirements.
            </p>

          </div>


          <div className="mt-14 grid gap-6 lg:grid-cols-3">

            {[
              {
                name: "Essential",
                amount: "₹5 Lakh",
                description: "For individuals looking for basic protection.",
                features: [
                  "Hospitalisation cover",
                  "Day care procedures",
                  "Pre & post hospitalisation",
                  "Cashless treatment",
                ],
              },
              {
                name: "Comprehensive",
                amount: "₹10 Lakh",
                description: "Balanced protection for individuals and families.",
                features: [
                  "Everything in Essential",
                  "Higher hospitalisation cover",
                  "Critical illness benefits",
                  "Extended medical coverage",
                  "24/7 claim assistance",
                ],
                popular: true,
              },
              {
                name: "Premium",
                amount: "₹25 Lakh",
                description: "Enhanced protection for complete peace of mind.",
                features: [
                  "Everything in Comprehensive",
                  "Higher sum insured",
                  "Premium healthcare benefits",
                  "Enhanced family protection",
                  "Priority assistance",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-[30px] border p-8 ${
                  plan.popular
                    ? "border-[#0798D5] bg-[#073F52] text-white shadow-[0_25px_60px_rgba(6,63,82,0.18)]"
                    : "border-[#dceff5] bg-white"
                }`}
              >

                {plan.popular && (
                  <div className="absolute right-7 top-7 rounded-full bg-[#0798D5] px-4 py-2 text-xs font-bold text-white">
                    MOST POPULAR
                  </div>
                )}

                <p
                  className={`text-sm font-bold ${
                    plan.popular ? "text-[#6fd3f5]" : "text-[#0798D5]"
                  }`}
                >
                  {plan.name}
                </p>

                <p className="mt-5 text-4xl font-bold">
                  {plan.amount}
                </p>

                <p
                  className={`mt-3 text-sm leading-6 ${
                    plan.popular ? "text-[#a5c4cd]" : "text-[#7897a0]"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="my-7 h-px bg-current opacity-10" />

                <div className="space-y-4">

                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-3"
                    >

                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full ${
                          plan.popular
                            ? "bg-[#0798D5] text-white"
                            : "bg-[#e8f8fd] text-[#0798D5]"
                        }`}
                      >
                        <Check size={14} />
                      </div>

                      <span
                        className={`text-sm ${
                          plan.popular
                            ? "text-[#d4e7ed]"
                            : "text-[#547984]"
                        }`}
                      >
                        {feature}
                      </span>

                    </div>
                  ))}

                </div>

                <button
                  className={`mt-8 flex w-full items-center justify-center gap-3 rounded-full py-4 font-semibold ${
                    plan.popular
                      ? "bg-[#0798D5] text-white"
                      : "border border-[#bce4f2] text-[#0798D5]"
                  }`}
                >
                  Explore Plan
                  <ArrowRight size={18} />
                </button>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          CASHLESS HOSPITAL SECTION
      ========================================================= */}
      <section className="bg-[#f4fbfe] py-20 lg:py-28">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
                CASHLESS HEALTHCARE
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">
                Get the care you need without worrying about the paperwork.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#6d909b]">
                With cashless hospitalisation, eligible medical expenses can
                be settled directly with your insurer at network hospitals.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Wide network of hospitals",
                  "Digital policy management",
                  "Dedicated claim assistance",
                  "Simple documentation process",
                ].map((text, index) => (
                  <div key={index} className="flex items-center gap-3">

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
                Find Network Hospitals
                <ArrowRight size={18} />
              </button>

            </div>


            {/* Hospital visual */}
            <div className="relative">

              <div className="rounded-[35px] border border-[#d7edf5] bg-white p-8 shadow-[0_25px_70px_rgba(6,63,82,0.08)]">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs font-bold tracking-[0.15em] text-[#0798D5]">
                      NETWORK
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-[#073F52]">
                      Partner Hospitals
                    </h3>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf8fd] text-[#0798D5]">
                    <Hospital size={27} />
                  </div>

                </div>

                <div className="mt-8 space-y-3">

                  {[
                    "Apollo Hospitals",
                    "Fortis Healthcare",
                    "Max Healthcare",
                    "Manipal Hospitals",
                  ].map((hospital, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-2xl border border-[#e2f0f4] px-5 py-4"
                    >

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#effaff] text-[#0798D5]">
                          <Hospital size={19} />
                        </div>

                        <span className="text-sm font-semibold text-[#315e6c]">
                          {hospital}
                        </span>

                      </div>

                      <Check
                        size={19}
                        className="text-[#0798D5]"
                      />

                    </div>
                  ))}

                </div>

                <div className="mt-5 rounded-2xl bg-[#eaf8fd] px-5 py-4 text-center text-sm font-semibold text-[#078dcc]">
                  Thousands of hospitals across India
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          CLAIM PROCESS
      ========================================================= */}
      <section className="bg-white py-20 lg:py-28">

        <div className="mx-auto max-w-[1100px] px-6">

          <div className="text-center">

            <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
              CLAIMS
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">
              When you need us, we're here.
            </h2>

            <p className="mx-auto mt-5 max-w-[650px] text-lg leading-8 text-[#7897a0]">
              Our claim process is designed to be straightforward, transparent
              and supported every step of the way.
            </p>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {[
              {
                icon: Phone,
                title: "Notify",
                text: "Inform us about your hospitalisation or planned treatment.",
              },
              {
                icon: FileCheck2,
                title: "Submit",
                text: "Share the required documents through our digital process.",
              },
              {
                icon: Wallet,
                title: "Settle",
                text: "Once approved, eligible expenses are settled as per your policy.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[25px] border border-[#dceff5] bg-[#f8fcfd] p-7"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#0798D5] shadow-sm">
                    <Icon size={26} />
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
              "What does health insurance cover?",
              "How does cashless hospitalisation work?",
              "What is the ideal sum insured for my family?",
              "Can I include my parents in my health insurance?",
              "How do I file a health insurance claim?",
              "Are pre-existing diseases covered?",
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
                  Coverage depends on the specific policy, plan terms,
                  exclusions and applicable conditions. Please review your
                  policy wording or speak with our insurance expert for
                  plan-specific details.
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
            <HeartPulse size={30} />
          </div>

          <h2 className="mt-7 text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Give your health the protection it deserves.
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] text-lg leading-8 text-[#b5d2da]">
            Get comprehensive health insurance and take the financial worry
            out of unexpected medical expenses.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <button className="flex items-center gap-3 rounded-full bg-[#0798D5] px-8 py-4 font-semibold text-white transition hover:bg-[#10a4df]">
              Get Health Insurance
              <ArrowRight size={19} />
            </button>

            <button className="flex items-center gap-3 rounded-full border border-[#4f7c89] px-8 py-4 font-semibold text-white transition hover:bg-white/10">
              <Phone size={18} />
              Talk to an Expert
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}