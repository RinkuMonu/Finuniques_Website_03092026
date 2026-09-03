"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  CheckCircle2,
  ChevronRight,
  Zap,
} from "lucide-react";

const steps = [
  {
    num: "01",
    Icon: BookOpenCheck,
    title: "Tell us about your business",
    text: "Rapid digital onboarding & service pick.",
    highlight: "Instant Onboarding",
    detail: "Choose hosted flows, payment links, or payout APIs in minutes.",
    badge: "Step 1 of 4",
  },
  {
    num: "02",
    Icon: BadgeCheck,
    title: "Complete verification",
    text: "Automated business verification & bank checks.",
    highlight: "Real-time Verification",
    detail: "PAN, GSTIN & bank account validation completed automatically.",
    badge: "Step 2 of 4",
  },
  {
    num: "03",
    Icon: Zap,
    title: "Choose an integration",
    text: "Flexible APIs, hosted checkout & SDKs.",
    highlight: "Plug & Play Stack",
    detail: "Low-code widgets, developer docs, and sandbox testing environment.",
    badge: "Step 3 of 4",
  },
  {
    num: "04",
    Icon: BarChart3,
    title: "Operate and optimize",
    text: "Track settlements, success rates & growth.",
    highlight: "Unified Intelligence",
    detail: "Real-time volume tracking, automated settlements, and reporting.",
    badge: "Step 4 of 4",
  },
];

export function OnboardingStepsShowcase() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const current = steps[activeStep];
  const CurrentIcon = current.Icon;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f0f7fa] to-[#ffffff] py-16 sm:py-24 border-y border-ink/5">
      {/* Background Soft Ambient Light Glow Orbs */}
      <div className="pointer-events-none absolute -left-28 top-1/4 h-96 w-96 rounded-full bg-cyan-200/40 blur-[130px]" />
      <div className="pointer-events-none absolute -right-28 bottom-1/4 h-96 w-96 rounded-full bg-ocean/10 blur-[130px]" />

      <div className="page-shell relative z-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow text-ocean">From onboarding to growth</p>
            <h2 className="mt-2 max-w-2xl text-3xl font-black tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Go live in four clear steps.
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <p className="hidden max-w-sm text-xs leading-6 text-ink/65 sm:block font-medium">
              Choose what your business needs today and add more services as it grows.
            </p>
            <Link
              href="/signup"
              className="group inline-flex items-center gap-2 shrink-0 rounded-xl bg-ocean px-5 py-2.5 text-xs font-extrabold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:shadow-xl"
            >
              Start onboarding
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Step-by-Step Automatic Progress Timeline & Cards */}
        <div className="mt-10 space-y-6">
          {/* Top Automatic Step Progress Line Tracker */}
          <div className="relative hidden overflow-hidden rounded-2xl border border-[#d8edf6] bg-[#f4f9fc] p-5 shadow-2xs backdrop-blur-md md:block">
            {/* Background Progress Track Line */}
            <div className="absolute top-1/2 left-12 right-12 h-2 -translate-y-1/2 rounded-full bg-slate-200/80" />

            {/* Glowing Animated Filled Progress Bar */}
            <div
              className="absolute top-1/2 left-12 h-2 -translate-y-1/2 rounded-full bg-gradient-to-r from-ocean via-cyan-500 to-emerald-500 transition-all duration-700 ease-out shadow-[0_0_12px_rgba(7,143,209,0.5)]"
              style={{ width: `${(activeStep / (steps.length - 1)) * 80}%` }}
            />

            {/* 4 Step Nodes Display */}
            <div className="relative z-10 flex items-center justify-between">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPast = idx < activeStep;
                return (
                  <div
                    key={step.num}
                    className={`flex items-center gap-2.5 rounded-xl border px-4 py-2 bg-white transition-all duration-300 ${
                      isActive
                        ? "border-ocean text-ocean font-extrabold shadow-md ring-2 ring-ocean/15"
                        : isPast
                        ? "border-emerald-300 text-ink font-extrabold shadow-2xs"
                        : "border-slate-200 text-ink/40"
                    }`}
                  >
                    <span
                      className={`grid h-7 w-7 place-items-center rounded-full text-xs font-black transition-colors duration-300 ${
                        isActive
                          ? "bg-ocean text-white shadow-xs"
                          : isPast
                          ? "bg-emerald-500 text-white"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {isPast ? <CheckCircle2 className="h-4 w-4 text-white" /> : step.num}
                    </span>
                    <span className="text-xs tracking-tight">{step.title}</span>
                    {isActive && (
                      <ArrowRight className="h-3.5 w-3.5 text-ocean animate-pulse ml-0.5" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4 Cards Grid Auto-Advancing */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => {
              const Icon = step.Icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.num}
                  className={`group relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 ${
                    isActive
                      ? "border-ocean bg-white shadow-[0_18px_50px_rgba(7,143,209,0.15)] ring-2 ring-ocean/15"
                      : "border-slate-200/80 bg-white/80 hover:bg-white hover:border-slate-300 shadow-2xs hover:shadow-md"
                  }`}
                >
                  <div>
                    {/* Top Row: Icon + Step Badge */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`grid h-11 w-11 place-items-center rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-br from-ocean to-cyan-600 text-white shadow-md"
                            : "bg-slate-100 text-ink/60"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>

                      {/* Active Badge */}
                      {isActive ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 px-2.5 py-1 text-[10px] font-extrabold text-ocean border border-cyan-200/80 shadow-2xs animate-pulse">
                          <span>Active Step</span>
                          <ArrowRight className="h-3 w-3 text-ocean" />
                        </span>
                      ) : (
                        <span className="text-xs font-black text-ink/30">
                          {step.num}
                        </span>
                      )}
                    </div>

                    <h3
                      className={`mt-5 text-base font-extrabold transition-colors duration-200 ${
                        isActive ? "text-ocean" : "text-ink"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-5 text-ink/65 font-medium">
                      {step.text}
                    </p>
                  </div>

                  {/* Flow Arrow to next step */}
                  <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-3">
                    <span className="text-[10px] font-bold text-ink/45">
                      {step.badge}
                    </span>
                    {idx < steps.length - 1 && (
                      <ChevronRight
                        className={`h-4 w-4 transition-all duration-300 ${
                          isActive ? "text-ocean translate-x-1 font-bold" : "text-ink/20"
                        }`}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Feature Bar */}
          <div className="flex flex-col justify-between gap-3 rounded-2xl border border-cyan-200/80 bg-gradient-to-r from-cyan-50/90 via-white to-cyan-50/90 p-4.5 shadow-sm text-ink sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-ocean shrink-0 border border-ocean/20 shadow-xs">
                <CurrentIcon className="h-4.5 w-4.5" />
              </span>
              <div>
                <span className="text-xs font-extrabold text-ink">{current.highlight}: </span>
                <span className="text-xs text-ink/70 font-medium">{current.detail}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-800 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200 shrink-0 shadow-2xs">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Ready to launch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
