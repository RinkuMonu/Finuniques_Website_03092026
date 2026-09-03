"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState(1); // 1: Details, 2: OTP Verification
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let interval;
    if (step === 2 && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    // Validate passwords match
    if (formData.password && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setStep(2);
    setTimer(30);
    setCanResend(false);
  };

  const handleOtpChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next box if digit entered
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-box-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-box-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleResendOtp = () => {
    if (!canResend) return;
    setOtp(["", "", "", "", "", ""]);
    setTimer(30);
    setCanResend(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] via-[#f1f6fa] to-[#f8fafc] py-4 sm:py-6 px-4 flex items-center justify-center">
      {/* Background Soft Glow Orbs */}
      <div className="pointer-events-none fixed -left-20 top-1/4 h-80 w-80 rounded-full bg-cyan-200/30 blur-[100px]" />
      <div className="pointer-events-none fixed -right-20 bottom-1/4 h-80 w-80 rounded-full bg-ocean/10 blur-[100px]" />

      <div className="w-full max-w-4xl relative z-10">
        <div className="overflow-hidden rounded-[1.8rem] border border-ink/10 bg-white shadow-[0_20px_60px_rgba(7,59,76,0.08)] grid lg:grid-cols-12">
          {/* Left Form Column (7 Cols) */}
          <div className="p-5 sm:p-7 lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Back to Home Button */}
              <div className="mb-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-ink/15 bg-slate-50/80 px-3.5 py-1.5 text-xs font-extrabold text-ink/70 hover:bg-white hover:text-ocean hover:border-ocean/30 transition shadow-2xs hover:-translate-y-0.5"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back to Home</span>
                </Link>
              </div>

              {/* Form Title & Step Indicator */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl sm:text-2xl font-black tracking-tight text-ink">
                    {step === 1 ? "Create Your Account" : "Verify Mobile OTP"}
                  </h1>
                  <p className="mt-0.5 text-xs text-ink/55">
                    {step === 1
                      ? "Start accepting payments with Finunique"
                      : `OTP sent to +91 ${formData.phone || "9876543210"}`}
                  </p>
                </div>
                <span className="rounded-full bg-ocean/10 px-2.5 py-1 text-[10px] font-bold text-ocean border border-ocean/20">
                  Step {step} of 2
                </span>
              </div>

              {step === 1 ? (
                /* Step 1: Details Form */
                <form onSubmit={handleSendOtp} className="mt-4 space-y-2.5">
                  {/* First Name & Last Name */}
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-bold text-ink">
                        First Name
                      </label>
                      <input
                        required
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter your first name"
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/10 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-ink">
                        Last Name
                      </label>
                      <input
                        required
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter your last name"
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/10 transition"
                      />
                    </div>
                  </div>

                  {/* Business Email */}
                  <div>
                    <label className="block text-[11px] font-bold text-ink">
                      Business Email
                    </label>
                    <input
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="merchant@yourcompany.com"
                      className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/10 transition"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-[11px] font-bold text-ink">
                      Company Name
                    </label>
                    <input
                      required
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      type="text"
                      placeholder="Your registered business name"
                      className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/10 transition"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-[11px] font-bold text-ink">
                      Phone Number
                    </label>
                    <div className="mt-1 flex rounded-lg border border-ink/15 bg-white overflow-hidden focus-within:border-ocean focus-within:ring-1 focus-within:ring-ocean/10 transition">
                      <span className="flex items-center justify-center bg-slate-50 px-3 text-xs font-bold text-ink/60 border-r border-ink/10">
                        +91
                      </span>
                      <input
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel"
                        placeholder="Enter 10 digit mobile number"
                        className="w-full px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none bg-transparent"
                      />
                    </div>
                  </div>

                  {/* Password & Confirm Password */}
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-bold text-ink">
                        Password
                      </label>
                      <input
                        required
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        type="password"
                        placeholder="Create a password"
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/10 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-ink">
                        Confirm Password
                      </label>
                      <input
                        required
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        type="password"
                        placeholder="Re-enter password"
                        className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink placeholder:text-ink/35 outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/10 transition"
                      />
                    </div>
                  </div>

                  {/* Terms Agreement Checkbox */}
                  <div className="pt-0.5 flex items-start gap-2">
                    <input
                      required
                      id="terms"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      type="checkbox"
                      className="mt-0.5 h-3.5 w-3.5 rounded border-ink/20 text-ocean focus:ring-ocean accent-ocean"
                    />
                    <label htmlFor="terms" className="text-[10px] text-ink/60 leading-3.5">
                      I agree to the{" "}
                      <Link href="/terms" className="font-bold text-ocean hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="font-bold text-ocean hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  {/* Send OTP Button */}
                  <button
                    type="submit"
                    className="mt-2 w-full flex items-center justify-center gap-2 rounded-xl bg-ocean py-2.5 text-xs font-extrabold text-white shadow-md transition hover:bg-ink hover:-translate-y-0.5"
                  >
                    <span>Send OTP & Continue</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </form>
              ) : (
                /* Step 2: 6-Digit OTP Verification Section */
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (typeof window !== "undefined") {
                      const name = formData.company || `${formData.firstName} ${formData.lastName}`.trim() || "Merchant Account";
                      localStorage.setItem("finunique_logged_in", "true");
                      localStorage.setItem("finunique_merchant_name", name);
                      window.dispatchEvent(new Event("finunique_auth_change"));
                    }
                    router.push("/?kyc_modal=true");
                  }}
                  className="mt-6 space-y-4"
                >
                  {/* Verified Details Summary Pill */}
                  <div className="flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200/80 p-3 text-xs font-bold text-emerald-800">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>
                      Details submitted for {formData.firstName || "Merchant"}. Verification code sent via SMS.
                    </span>
                  </div>

                  {/* 6-Digit OTP Boxes */}
                  <div>
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-bold text-ink">
                        Enter 6-Digit Verification Code
                      </label>
                      <button
                        type="button"
                        onClick={handleResendOtp}
                        disabled={!canResend}
                        className={`flex items-center gap-1 text-[11px] font-bold ${
                          canResend
                            ? "text-ocean cursor-pointer hover:underline"
                            : "text-ink/40 cursor-not-allowed"
                        }`}
                      >
                        <RefreshCw className={`h-3 w-3 ${!canResend ? "animate-spin" : ""}`} />
                        <span>{canResend ? "Resend OTP" : `Resend in ${timer}s`}</span>
                      </button>
                    </div>

                    <div className="mt-2 flex items-center justify-between gap-2">
                      {otp.map((digit, idx) => (
                        <input
                          key={idx}
                          id={`otp-box-${idx}`}
                          type="text"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleOtpChange(e.target.value, idx)}
                          onKeyDown={(e) => handleOtpKeyDown(e, idx)}
                          className="h-11 w-11 text-center text-base font-black text-ink bg-slate-50 border border-ink/15 rounded-xl outline-none focus:border-ocean focus:bg-white focus:ring-2 focus:ring-ocean/20 transition shadow-xs"
                          placeholder="•"
                          autoFocus={idx === 0}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2.5 pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-xs font-extrabold text-white shadow-md transition hover:bg-ink hover:-translate-y-0.5"
                    >
                      <span>Verify OTP & Create Account</span>
                      <CheckCircle2 className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-full flex items-center justify-center gap-1.5 text-xs font-bold text-ink/60 hover:text-ocean transition"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                      <span>Edit Account Details</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Already have an account */}
            <div className="mt-3 text-center border-t border-ink/10 pt-2">
              <p className="text-xs text-ink/60">
                Already have an account?{" "}
                <Link href="/login" className="font-extrabold text-ocean hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          {/* Right Hero/Trust Column (5 Cols) */}
          <div className="p-5 sm:p-7 lg:col-span-5 bg-gradient-to-br from-[#fffbf7] via-[#fff8f2] to-[#f4f9fd] border-t lg:border-t-0 lg:border-l border-ink/5 relative overflow-hidden flex flex-col justify-between">
            {/* Subtle Grid Background Pattern */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 space-y-4">
              {/* Eyebrow & Headline */}
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-ocean">
                  New Merchant
                </p>
                <h2 className="mt-1 text-lg font-black text-ink leading-snug">
                  Start accepting UPI in minutes
                </h2>
                <p className="mt-1 text-[11px] leading-4 text-ink/60">
                  Create your account, complete verification, and collect payments on dashboard.
                </p>
              </div>

              {/* Stepper Pills */}
              <div className="flex items-center gap-1.5">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border transition ${
                    step === 1
                      ? "bg-ocean/10 text-ocean border-ocean/20"
                      : "bg-emerald-100 text-emerald-800 border-emerald-300"
                  }`}
                >
                  1 · Sign up
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border transition ${
                    step === 2
                      ? "bg-ocean/10 text-ocean border-ocean/20 animate-pulse"
                      : "bg-slate-100 text-ink/50 border-ink/10"
                  }`}
                >
                  2 · OTP Verification
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-ink/50 border border-ink/10">
                  3 · Go live
                </span>
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
                  <span className="font-extrabold text-ink">Encrypted sessions</span> · Built for Indian businesses accepting UPI.
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
