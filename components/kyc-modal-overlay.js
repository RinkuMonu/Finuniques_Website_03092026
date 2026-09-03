"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  FileCheck,
  Landmark,
  ShieldAlert,
  ShieldCheck,
  User,
  X,
} from "lucide-react";

export function KycModalOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const kycModalParam = urlParams.get("kyc_modal") === "true";
      const isDismissed = sessionStorage.getItem("finunique_kyc_dismissed") === "true";

      // Show ONLY when explicitly redirected from login/signup (kyc_modal=true) and not dismissed
      if (kycModalParam && !isDismissed) {
        setIsOpen(true);
        // Clean URL parameter so reloads don't re-trigger popup
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("finunique_kyc_dismissed", "true");
    }
  };

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/75 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg rounded-3xl border border-white/20 bg-white p-6 sm:p-8 shadow-[0_30px_90px_rgba(7,59,76,0.3)] animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-ink/10 bg-slate-50 text-ink/60 transition hover:bg-slate-100 hover:text-ink"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header Eyebrow */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-black text-amber-900 shadow-xs">
            <Clock className="h-3.5 w-3.5 text-amber-600 animate-pulse" />
            <span>Complete KYC to Move Forward</span>
          </span>
        </div>

        {/* Modal Headline */}
        <h2 className="mt-4 text-2xl font-black tracking-tight text-ink sm:text-3xl">
          Complete Your Business KYC
        </h2>

        {/* Modal Description */}
        <p className="mt-2 text-xs leading-5 text-ink/65 sm:text-sm">
          Welcome to Finunique! To start accepting live payments, processing payouts, and unlocking full settlement features, please complete your merchant KYC verification.
        </p>

        {/* Steps Preview Card */}
        <div className="mt-5 rounded-2xl border border-ink/10 bg-slate-50/80 p-4 space-y-2.5">
          <p className="text-xs font-black text-ink uppercase tracking-wider">
            Quick 4-Step Verification:
          </p>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-ink/5 text-ink font-bold">
              <Building2 className="h-4 w-4 text-ocean shrink-0" />
              <span>1. Business Details</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-ink/5 text-ink font-bold">
              <User className="h-4 w-4 text-ocean shrink-0" />
              <span>2. Personal Details</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-ink/5 text-ink font-bold">
              <Landmark className="h-4 w-4 text-ocean shrink-0" />
              <span>3. Bank Details</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-ink/5 text-ink font-bold">
              <FileCheck className="h-4 w-4 text-ocean shrink-0" />
              <span>4. Documents & Non-GST</span>
            </div>
          </div>
        </div>

        {/* Security Guarantee Banner */}
        <div className="mt-4 flex items-center gap-2 text-[11px] font-extrabold text-emerald-700">
          <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>Takes less than 5 minutes · 256-Bit Encrypted & RBI Compliant</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-end">
          <button
            type="button"
            onClick={handleDismiss}
            className="rounded-xl border border-ink/15 px-4 py-2.5 text-xs font-bold text-ink hover:bg-slate-50 transition text-center"
          >
            I&apos;ll complete this later
          </button>

          <Link
            href="/kyc"
            onClick={handleDismiss}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-ocean px-6 py-3 text-xs font-black text-white shadow-md transition hover:bg-ink hover:scale-102"
          >
            <span>Complete KYC Now</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
