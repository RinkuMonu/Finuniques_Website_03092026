"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  ChevronRight,
  PhoneCall,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const existingName = localStorage.getItem("finunique_merchant_name");
      if (!existingName) {
        localStorage.setItem("finunique_merchant_name", "Finunique Merchant");
      }
      localStorage.setItem("finunique_logged_in", "true");
      window.dispatchEvent(new Event("finunique_auth_change"));
    }
    router.push("/?kyc_modal=true");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] via-[#f1f6fa] to-[#f8fafc] py-4 sm:py-6 px-4 flex items-center justify-center">
      {/* Background Soft Glow Orbs */}
      <div className="pointer-events-none fixed -left-20 top-1/4 h-80 w-80 rounded-full bg-cyan-200/30 blur-[100px]" />
      <div className="pointer-events-none fixed -right-20 bottom-1/4 h-80 w-80 rounded-full bg-ocean/10 blur-[100px]" />

      <div className="w-full max-w-4xl relative z-10">
        <div className="overflow-hidden rounded-[1.8rem] border border-ink/10 bg-white shadow-[0_20px_60px_rgba(7,59,76,0.08)] grid lg:grid-cols-12">
          {/* Left Form Column (7 Cols) */}
          <div className="p-6 sm:p-8 lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Back to Home Button */}
              <div className="mb-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-ink/15 bg-slate-50/80 px-3.5 py-1.5 text-xs font-extrabold text-ink/70 hover:bg-white hover:text-ocean hover:border-ocean/30 transition shadow-2xs hover:-translate-y-0.5"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back to Home</span>
                </Link>
              </div>

              {/* Form Title & Subtext */}
              <div>
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-ink">
                  Login to your account
                </h1>
                <p className="mt-1 text-xs text-ink/55">
                  Enter your email and password
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleLogin} className="mt-6 space-y-3.5">
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-ink">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="merchant@company.com"
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/10 transition"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-xs font-bold text-ink">
                    Password
                  </label>
                  <input
                    required
                    type="password"
                    placeholder="Enter your password"
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-3.5 py-2 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/10 transition"
                  />
                </div>

                {/* Remember Me & Forgot Password Row */}
                <div className="flex items-center justify-between pt-0.5">
                  <label className="flex items-center gap-2 text-xs font-semibold text-ink/60 cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-3.5 w-3.5 rounded border-ink/20 text-ocean focus:ring-ocean accent-ocean"
                    />
                    <span>Remember me</span>
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs font-bold text-ocean hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* Sign in Button */}
                <button
                  type="submit"
                  className="mt-1 w-full rounded-xl bg-ocean py-2.5 text-xs font-extrabold text-white shadow-md transition hover:bg-ink hover:-translate-y-0.5"
                >
                  Sign in
                </button>

                {/* Or Continue With Divider */}
                <div className="relative my-4 text-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-ink/10" />
                  </div>
                  <span className="relative bg-white px-3 text-[10px] font-extrabold tracking-widest text-ink/40 uppercase">
                    OR CONTINUE WITH
                  </span>
                </div>

                {/* Phone / OTP Login Button */}
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-ink/15 bg-white py-2 text-xs font-extrabold text-ink transition hover:bg-slate-50 hover:border-ink/25"
                >
                  <PhoneCall className="h-4 w-4 text-ocean" />
                  <span>Phone</span>
                </button>
              </form>
            </div>

            {/* Don't have an account link */}
            <div className="mt-6 text-center border-t border-ink/10 pt-3">
              <p className="text-xs text-ink/60">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="font-extrabold text-ocean hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          {/* Right Hero/Trust Column (5 Cols) */}
          <div className="p-6 sm:p-8 lg:col-span-5 bg-gradient-to-br from-[#fffbf7] via-[#fff8f2] to-[#f4f9fd] border-t lg:border-t-0 lg:border-l border-ink/5 relative overflow-hidden flex flex-col justify-between">
            {/* Subtle Grid Background Pattern */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 space-y-5">
              {/* Eyebrow & Headline */}
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-ocean">
                  Welcome Back
                </p>
                <h2 className="mt-1 text-lg font-black text-ink leading-snug">
                  Your dashboard awaits
                </h2>
                <p className="mt-1 text-xs leading-4 text-ink/60">
                  Sign in to manage payments, payouts, and settings—same secure Finunique rails.
                </p>
              </div>

              {/* Payment Diagram Flow */}
              <div className="rounded-xl border border-ink/10 bg-white/80 p-3.5 shadow-sm backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  {/* Payer Node */}
                  <div className="flex flex-col items-center">
                    <div className="relative grid h-10 w-10 place-items-center rounded-xl border border-ocean/20 bg-cyan-50 text-ocean shadow-sm">
                      <Smartphone className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 grid h-3.5 w-3.5 place-items-center rounded-full bg-emerald-500 text-white">
                        <CheckCircle2 className="h-2.5 w-2.5" />
                      </span>
                    </div>
                    <span className="mt-1.5 text-[10px] font-bold text-ink/60">Payer</span>
                  </div>

                  {/* Flow Arrow 1 */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center text-ocean">
                      <span className="h-0.5 w-4 bg-gradient-to-r from-ocean to-cyan-400" />
                      <ChevronRight className="h-3.5 w-3.5 -ml-1 text-ocean" />
                    </div>
                  </div>

                  {/* Finunique Core Node */}
                  <div className="flex flex-col items-center">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-ocean text-white shadow-[0_8px_20px_rgba(7,143,209,0.3)] ring-3 ring-ocean/15 scale-105">
                      <Zap className="h-6 w-6" />
                    </div>
                    <span className="mt-1.5 text-[11px] font-black text-ocean">Finunique</span>
                  </div>

                  {/* Flow Arrow 2 */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center text-ocean">
                      <span className="h-0.5 w-4 bg-gradient-to-r from-ocean to-cyan-400" />
                      <ChevronRight className="h-3.5 w-3.5 -ml-1 text-ocean" />
                    </div>
                  </div>

                  {/* Settlement Node */}
                  <div className="flex flex-col items-center">
                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-ink/10 bg-amber-50 text-amber-600 shadow-sm">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <span className="mt-1.5 text-[10px] font-bold text-ink/60">Settlement</span>
                  </div>
                </div>

                {/* Animated Volume Signal Bars */}
                <div className="mt-3.5 flex justify-center items-end gap-1.5 h-5">
                  <span className="w-1.5 h-2 rounded-full bg-ocean/30 animate-pulse" />
                  <span className="w-1.5 h-3 rounded-full bg-ocean/50 animate-pulse" />
                  <span className="w-1.5 h-4.5 rounded-full bg-ocean/80 animate-pulse" />
                  <span className="w-1.5 h-5 rounded-full bg-ocean animate-pulse" />
                  <span className="w-1.5 h-3.5 rounded-full bg-ocean/70 animate-pulse" />
                </div>
              </div>

              {/* Encrypted Sessions Box */}
              <div className="flex items-center gap-2.5 rounded-xl border border-ocean/15 bg-white p-3 shadow-sm">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-cyan-50 text-ocean shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <div className="text-[10px] leading-3.5 text-ink/70">
                  <span className="font-extrabold text-ink">Encrypted sessions</span> · Same trusted UPI infrastructure.
                </div>
              </div>
            </div>

            {/* Metric Footer */}
            <div className="mt-4 pt-3 text-center border-t border-ink/5">
              <p className="text-[10px] font-extrabold text-ink/60">
                <span className="text-ocean font-black">1,00,000+</span> businesses rely on Finunique
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
