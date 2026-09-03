"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  CreditCard,
  Lock,
  ShieldCheck,
  Smartphone,
  Sparkles,
  WalletCards,
  X,
  Zap,
} from "lucide-react";

export default function MerchantDashboardPage() {
  const [showKycPopup, setShowKycPopup] = useState(true);

  return (
    <div className="min-h-screen bg-[#f8fafc] py-8 text-ink relative">
      {/* Top Merchant Workspace Bar */}
      <div className="page-shell">
        <div className="flex flex-col gap-4 border-b border-ink/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ocean text-white shadow-md">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-black text-ink">Acme Enterprises</h1>
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-extrabold text-amber-800 border border-amber-300">
                  <Clock className="h-3 w-3" /> KYC Pending
                </span>
              </div>
              <p className="text-xs text-ink/55">Merchant ID: MID-88420914 • Live Production</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowKycPopup(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-xs font-extrabold text-white shadow-sm hover:bg-amber-600 transition"
            >
              <ShieldCheck className="h-4 w-4" /> Complete KYC
            </button>
            <Link
              href="/kyc"
              className="inline-flex items-center gap-2 rounded-xl bg-ocean px-5 py-2 text-xs font-extrabold text-white shadow-md hover:bg-ink transition"
            >
              Verify Business <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Dashboard Quick Stats */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold text-ink/55">Today&apos;s Revenue</p>
            <p className="mt-2 text-2xl font-black text-ink">₹0.00</p>
            <p className="mt-1 text-[11px] text-amber-600 font-semibold">Enable payments by finishing KYC</p>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold text-ink/55">Total Transactions</p>
            <p className="mt-2 text-2xl font-black text-ink">0</p>
            <p className="mt-1 text-[11px] text-ink/45">API Key ready</p>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold text-ink/55">Next Settlement</p>
            <p className="mt-2 text-2xl font-black text-ink">₹0.00</p>
            <p className="mt-1 text-[11px] text-ink/45">T+1 Auto Settlement</p>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold text-ink/55">Account Status</p>
            <p className="mt-2 text-lg font-extrabold text-amber-600 flex items-center gap-1.5">
              <Lock className="h-5 w-5" /> Action Required
            </p>
            <p className="mt-1 text-[11px] text-ink/50">KYC verification pending</p>
          </div>
        </div>

        {/* Action Banner */}
        <div className="mt-6 rounded-2xl border border-amber-300/60 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-500 text-white shrink-0 shadow-md">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-ink">KYC Verification Needed</h3>
              <p className="mt-0.5 text-xs text-ink/65">
                Upload your Business PAN, GSTIN, and Bank settlement account to accept live customer payments.
              </p>
            </div>
          </div>
          <Link
            href="/kyc"
            className="inline-flex items-center gap-2 shrink-0 rounded-xl bg-amber-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-ink transition"
          >
            Start KYC Verification <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Instant KYC Modal Popup overlay (Shown After Login / Signup) */}
      {showKycPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/75 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg rounded-[2.2rem] border border-ocean/20 bg-white p-7 sm:p-9 shadow-[0_24px_80px_rgba(7,143,209,0.3)] animate-scale-up">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowKycPopup(false)}
              className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-ink/60 hover:bg-slate-200 transition"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header Icon Badge */}
            <div className="flex items-center gap-2">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-50 text-ocean border border-ocean/20 shadow-sm">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-extrabold text-amber-800 border border-amber-300">
                <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                Action Required
              </span>
            </div>

            <h2 className="mt-5 text-2xl font-black text-ink tracking-tight">
              Complete Your KYC Verification
            </h2>

            <p className="mt-2.5 text-xs leading-5 text-ink/65 sm:text-sm">
              Welcome to Finunique! To start accepting live payments, processing payouts, and unlocking your full merchant dashboard, please complete your business KYC verification.
            </p>

            {/* Stepper Preview Bar */}
            <div className="mt-5 rounded-2xl border border-ink/10 bg-slate-50 p-4 space-y-2">
              <div className="flex items-center justify-between text-xs font-extrabold text-ink">
                <span>Verification Steps:</span>
                <span className="text-ocean">3 Simple Steps</span>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] font-bold text-center">
                <span className="rounded-lg bg-white p-2 border border-ink/10 text-ink shadow-xs">
                  1. Business PAN
                </span>
                <span className="rounded-lg bg-white p-2 border border-ink/10 text-ink shadow-xs">
                  2. Bank Account
                </span>
                <span className="rounded-lg bg-white p-2 border border-ink/10 text-ink shadow-xs">
                  3. Documents
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 space-y-3">
              <Link
                href="/kyc"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-ocean py-3.5 text-xs font-extrabold text-white shadow-lg transition hover:bg-ink hover:-translate-y-0.5"
              >
                <span>Complete KYC Now</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <button
                type="button"
                onClick={() => setShowKycPopup(false)}
                className="w-full text-center text-xs font-bold text-ink/50 hover:text-ink transition py-1"
              >
                I&apos;ll complete this later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
