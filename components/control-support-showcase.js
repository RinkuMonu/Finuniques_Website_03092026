"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  Headphones,
  Lock,
  Mail,
  MessageSquare,
  Repeat2,
  ShieldCheck,
  TrendingUp,
  UserCheck,
} from "lucide-react";

export function ControlSupportShowcase() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f8fc] via-[#f7fafc] to-[#f2f8fc] py-14 sm:py-20 text-ink">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-cyan-200/35 blur-[100px]" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-ocean/10 blur-[100px]" />

      <div className="page-shell relative z-10 space-y-12">
        {/* Block 1: Designed for Control (Frameless Open Layout) */}
        <div>
          <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Designed for control</p>
              <h2 className="mt-2 max-w-2xl text-2xl font-black tracking-tight text-ink sm:text-3xl lg:text-4xl">
                Clear visibility across every money movement.
              </h2>
            </div>
            <p className="max-w-md text-xs leading-5 text-ink/60 sm:text-sm">
              Layered security controls, instant automated reconciliation, and deep transaction insights from one connected platform.
            </p>
          </div>

          {/* 3 Feature Cards Grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {/* Feature 1: Secure Workflows */}
            <div className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ocean/40 hover:shadow-[0_14px_35px_rgba(7,143,209,0.14)]">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-50 text-ocean transition-all duration-300 group-hover:bg-ocean group-hover:text-white group-hover:scale-105">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <span className="flex items-center gap-1 text-[10px] font-extrabold text-emerald-700">
                  <Lock className="h-3 w-3" /> PCI-DSS L1
                </span>
              </div>
              <h3 className="mt-4 text-sm font-extrabold text-ink transition-colors duration-200 group-hover:text-ocean">
                Secure Workflows
              </h3>
              <p className="mt-1 text-xs leading-5 text-ink/60">
                Layered security controls, 256-bit SSL encryption & tokenized processing.
              </p>
            </div>

            {/* Feature 2: Easy Reconciliation */}
            <div className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_14px_35px_rgba(139,92,246,0.14)]">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-50 text-violet-600 transition-all duration-300 group-hover:bg-violet-600 group-hover:text-white group-hover:scale-105">
                  <Repeat2 className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-700">
                  100% Auto
                </span>
              </div>
              <h3 className="mt-4 text-sm font-extrabold text-ink transition-colors duration-200 group-hover:text-violet-600">
                Easy Reconciliation
              </h3>
              <p className="mt-1 text-xs leading-5 text-ink/60">
                Match payments, processing fees, refunds and bank settlements instantly.
              </p>
            </div>

            {/* Feature 3: Useful Insights */}
            <div className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-[0_14px_35px_rgba(245,158,11,0.14)]">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-50 text-amber-600 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-105">
                  <BarChart3 className="h-5 w-5" />
                </span>
                <span className="flex items-center gap-0.5 text-[10px] font-extrabold text-emerald-600">
                  +28.4% <TrendingUp className="h-3 w-3" />
                </span>
              </div>
              <h3 className="mt-4 text-sm font-extrabold text-ink transition-colors duration-200 group-hover:text-amber-600">
                Useful Insights
              </h3>
              <p className="mt-1 text-xs leading-5 text-ink/60">
                Understand volume, peak conversion times, and performance analytics.
              </p>
            </div>
          </div>
        </div>

        {/* Block 2: Merchant Support Banner */}
        <div className="relative overflow-hidden rounded-[2.4rem] border border-cyan-400/30 bg-gradient-to-br from-ink via-[#073650] to-ocean p-7 sm:p-10 text-white shadow-[0_20px_60px_rgba(7,143,209,0.28)]">
          {/* Ambient Glowing Background Orbs */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan-400/25 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2.5">
                <p className="text-xs font-bold uppercase tracking-[.18em] text-cyan-200">Merchant support</p>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  24/7 Priority Desk
                </span>
              </div>

              <h3 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.16]">
                Real help when <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-white via-cyan-100 to-emerald-200 bg-clip-text text-transparent">
                  money is moving.
                </span>
              </h3>

              <p className="mt-3 text-xs leading-6 text-white/75 sm:text-sm lg:max-w-xl">
                Get operational guidance and technical assistance from a dedicated team that understands payment infrastructure.
              </p>

              {/* Support Callout Checklist */}
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-xs font-bold text-white/90">
                  <UserCheck className="h-4 w-4 text-cyan-300 shrink-0" />
                  <span>Dedicated account manager</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-xs font-bold text-white/90">
                  <Clock className="h-4 w-4 text-emerald-300 shrink-0" />
                  <span>Response under 5 minutes</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Support Widget Card (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-extrabold text-white">Live Support Queue</span>
                  </div>
                  <span className="rounded-full bg-cyan-400/20 px-2.5 py-0.5 text-[10px] font-bold text-cyan-200 border border-cyan-400/30">
                    Wait: &lt; 3 mins
                  </span>
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href="mailto:support@finuniques.in"
                    className="group/btn inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-5 py-3.5 text-xs font-extrabold text-ink shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
                  >
                    <Mail className="h-4 w-4 text-ocean" />
                    Email support team
                    <ArrowRight className="h-3.5 w-3.5 text-ocean transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-xs font-bold text-white transition hover:bg-white/20"
                  >
                    <MessageSquare className="h-3.5 w-3.5 text-cyan-300" />
                    Talk to specialist
                  </Link>
                </div>

                <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] font-bold text-white/50">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                  <span>Direct human response • No automated bot loops</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
