"use client";

import { Check, ShieldCheck } from "lucide-react";

export function WhyChooseUsIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      {/* Background Ambient Glow Spheres */}
      <div className="pointer-events-none absolute -left-6 top-4 h-36 w-36 rounded-full bg-cyan-200/40 blur-2xl" />
      <div className="pointer-events-none absolute -right-6 bottom-4 h-40 w-40 rounded-full bg-sky-300/30 blur-2xl" />

      {/* Sleek Compact Outer Card */}
      <div className="relative overflow-hidden rounded-[1.6rem] border border-white/70 bg-white/75 p-2 shadow-[0_16px_40px_rgba(7,59,76,0.09)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_20px_48px_rgba(7,59,76,0.13)]">
        <div className="relative overflow-hidden rounded-[1.3rem] bg-gradient-to-br from-cyan-50/50 via-white to-sky-50/40">
          <img
            src="/images/why-choose-us.png"
            alt="Finunique Financial Operations Illustration"
            className="h-[250px] w-full object-cover object-center rounded-[1.3rem] transition-transform duration-500 hover:scale-[1.02] sm:h-[280px]"
          />
        </div>

        {/* Overlay Connected Status Badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-xl border border-white/80 bg-white/90 px-3 py-2 shadow-md backdrop-blur-md sm:bottom-5 sm:left-5">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
            <Check className="h-3.5 w-3.5 stroke-[3]" />
          </span>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[.14em] text-ink/40">
              Connected securely
            </p>
            <p className="text-xs font-extrabold text-ink">Ready for business</p>
          </div>
        </div>

        {/* Overlay Security Badge */}
        <div className="absolute top-4 right-4 hidden sm:flex items-center gap-1.5 rounded-full border border-sky-100 bg-white/90 px-3 py-1 shadow-sm backdrop-blur-md text-[11px] font-extrabold text-ocean">
          <ShieldCheck className="h-3.5 w-3.5 text-ocean" />
          PCI-DSS Compliant
        </div>
      </div>
    </div>
  );
}
