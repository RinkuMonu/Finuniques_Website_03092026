"use client";

import {
  Check,
  CheckCircle2,
  Droplet,
  Flame,
  ReceiptText,
  Smartphone,
  Wifi,
  Zap,
} from "lucide-react";

const paymentItems = [
  {
    icon: Zap,
    label: "Electricity",
    iconClass: "bg-amber-50 text-amber-500",
  },
  {
    icon: Droplet,
    label: "Water",
    iconClass: "bg-sky-50 text-sky-500",
  },
  {
    icon: Flame,
    label: "Gas",
    iconClass: "bg-violet-50 text-violet-600",
  },
];

const utilityBubbles = [
  { icon: Zap, label: "Electricity", iconClass: "text-amber-400", angle: 0 },
  { icon: Wifi, label: "Broadband", iconClass: "text-sky-400", angle: 60 },
  { icon: Droplet, label: "Water", iconClass: "text-cyan-400", angle: 120 },
  { icon: ReceiptText, label: "Rent & Bills", iconClass: "text-emerald-400", angle: 180 },
  { icon: Flame, label: "Gas & LPG", iconClass: "text-violet-400", angle: 240 },
  { icon: Smartphone, label: "Recharge", iconClass: "text-rose-400", angle: 300 },
];

export default function UtilityIllustration() {
  return (
    <div className="relative mx-auto min-h-[440px] w-full max-w-[640px] sm:min-h-[490px]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-[54%] rounded-full bg-gradient-to-br from-cyan-50 via-sky-50 to-white sm:h-[410px] sm:w-[410px]" />

      <div className="pointer-events-none absolute left-1/2 top-[47%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/70 sm:h-[360px] sm:w-[360px]" />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 720 590"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M355 105C288 75 233 103 238 170"
          stroke="#9ED7EA"
          strokeWidth="2"
          strokeDasharray="7 8"
        />
        <path
          d="M235 171C169 176 156 213 191 250"
          stroke="#9ED7EA"
          strokeWidth="2"
          strokeDasharray="7 8"
        />
        <path
          d="M190 252C139 294 165 354 218 372"
          stroke="#9ED7EA"
          strokeWidth="2"
          strokeDasharray="7 8"
        />
        <path
          d="M437 108C532 82 600 114 595 179"
          stroke="#9ED7EA"
          strokeWidth="2"
          strokeDasharray="7 8"
        />
        <path
          d="M594 181C650 199 657 246 623 278"
          stroke="#9ED7EA"
          strokeWidth="2"
          strokeDasharray="7 8"
        />
        <path
          d="M625 280C675 314 663 374 613 392"
          stroke="#9ED7EA"
          strokeWidth="2"
          strokeDasharray="7 8"
        />
      </svg>

      {/* Circular Utility Bubble Icons Ring positioned behind mobile phone for 3D depth */}
      <div className="pointer-events-none absolute left-[58%] top-[12%] z-20 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 [--bubble-radius:100px] sm:top-[14%] sm:h-[300px] sm:w-[300px] sm:[--bubble-radius:128px]">
        {/* Dashed circular orbit track */}
        <div className="absolute inset-2 rounded-full border-2 border-dashed border-sky-400/30 shadow-[0_0_20px_rgba(7,143,209,0.12)] sm:inset-3" />

        {/* Rotating ring container */}
        <div className="relative h-full w-full animate-utility-spin">
          {utilityBubbles.map(({ icon: Icon, label, iconClass, angle }) => (
            <div
              key={label}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${angle}deg) translateY(calc(-1 * var(--bubble-radius))) rotate(${-angle}deg)`,
              }}
            >
              <div className="animate-utility-counter-spin flex items-center justify-center group">
                <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-white/40 bg-slate-900/95 shadow-[0_16px_36px_rgba(15,23,42,0.42)] backdrop-blur-md transition-all duration-300 group-hover:scale-115 group-hover:border-sky-300 group-hover:shadow-[0_20px_42px_rgba(15,23,42,0.55)] sm:h-18 sm:w-18">
                  <Icon className={`h-7 w-7 sm:h-8 sm:w-8 ${iconClass}`} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[16%] left-[18%] flex items-end gap-2 opacity-55">
        <div className="h-24 w-10 rounded-t-xl bg-gradient-to-t from-cyan-100 to-slate-50 p-2">
          <div className="grid grid-cols-2 gap-2">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className="h-2 rounded-sm bg-white/90" />
            ))}
          </div>
        </div>

        <div className="h-32 w-14 rounded-t-2xl bg-gradient-to-t from-sky-100 to-white p-3">
          <div className="grid grid-cols-2 gap-2">
            {Array.from({ length: 12 }).map((_, index) => (
              <span key={index} className="h-2 rounded-sm bg-white" />
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[18%] right-[15%] h-28 w-24">
        <span className="absolute bottom-5 left-10 h-20 w-6 -rotate-[32deg] rounded-[100%_0_100%_0] bg-emerald-300" />
        <span className="absolute bottom-8 left-3 h-16 w-6 rotate-[24deg] rounded-[100%_0_100%_0] bg-teal-300" />
        <span className="absolute bottom-3 right-1 h-20 w-7 rotate-[42deg] rounded-[100%_0_100%_0] bg-cyan-300" />
        <span className="absolute bottom-0 left-8 h-10 w-14 rounded-t-full bg-teal-600/80" />
      </div>

      <div className="absolute bottom-[8%] left-1/2 h-20 w-[315px] -translate-x-1/2 rounded-[50%] bg-white shadow-[0_32px_55px_rgba(14,116,144,0.17)] sm:w-[380px]">
        <div className="absolute inset-x-0 bottom-0 h-8 rounded-[50%] border-b-[5px] border-cyan-700 bg-gradient-to-b from-white to-cyan-50" />
      </div>

      <div className="absolute bottom-[16%] left-[58%] z-30 h-[325px] w-[190px] -translate-x-1/2 rotate-[6deg] rounded-[2.1rem] border-[3px] border-slate-800 bg-slate-800 p-[4px] shadow-[0_35px_70px_rgba(15,23,42,0.30)] sm:bottom-[18%] sm:h-[375px] sm:w-[225px]">
        <div className="relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-white to-slate-50 px-4 pb-5 pt-8">
          <span className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-slate-800" />

          <div className="flex items-center justify-between text-[8px] font-medium text-slate-700">
            <span>9:41</span>
            <span className="flex gap-0.5" aria-hidden="true">
              <span className="h-0.5 w-0.5 rounded-full bg-slate-300" />
              <span className="h-0.5 w-0.5 rounded-full bg-slate-300" />
              <span className="h-0.5 w-0.5 rounded-full bg-slate-300" />
            </span>
          </div>

          <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
            Pay your bills
          </h3>

          <div className="mt-4 space-y-2.5">
            {paymentItems.map(({ icon: Icon, label, iconClass }) => (
              <div key={label} className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5 shadow-[0_9px_24px_rgba(15,23,42,0.07)]">
                <div className="flex items-center gap-3">
                  <span className={`grid h-8 w-8 place-items-center rounded-full ${iconClass}`}>
                    <Icon className="h-4 w-4" />
                  </span>

                  <span className="text-xs font-semibold text-slate-800">{label}</span>
                </div>

                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              </div>
            ))}

            <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-[0_9px_24px_rgba(15,23,42,0.07)]">
              <span className="grid grid-cols-2 gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              </span>

              <span className="text-xs font-semibold text-slate-700">More</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[13%] left-[30%] z-0 w-[150px] -translate-x-1/2 rotate-[-12deg] bg-white px-4 pb-8 pt-5 shadow-[0_22px_45px_rgba(15,23,42,0.17)] sm:w-[170px]">
        <div
          className="absolute inset-x-0 -bottom-3 h-5"
          style={{
            backgroundImage:
              "linear-gradient(135deg, transparent 50%, white 50%), linear-gradient(45deg, white 50%, transparent 50%)",
            backgroundPosition: "0 0, 10px 0",
            backgroundSize: "20px 20px",
            backgroundRepeat: "repeat-x",
          }}
        />

        <p className="text-center text-base font-bold text-slate-900">Bill Paid</p>

        <span className="mx-auto mt-4 grid h-12 w-12 place-items-center rounded-full border-2 border-cyan-700 text-cyan-700">
          <Check className="h-6 w-6" />
        </span>

        <div className="mt-5 space-y-2">
          <div className="h-2 rounded-full bg-slate-200" />
          <div className="h-2 w-4/5 rounded-full bg-slate-100" />
          <div className="h-2 w-3/5 rounded-full bg-slate-100" />
        </div>
      </div>

      <div className="absolute bottom-[9%] right-[5%] z-40 h-[88px] w-[155px] rotate-[8deg] rounded-2xl bg-gradient-to-br from-cyan-800 via-teal-700 to-slate-800 p-4 shadow-[0_22px_45px_rgba(15,23,42,0.20)] sm:right-[7%] sm:h-[98px] sm:w-[170px]">
        <div className="h-6 w-8 rounded-md bg-white/25" />

        <div className="mt-5 flex justify-between">
          <span className="h-1.5 w-16 rounded-full bg-white/25" />
          <span className="h-5 w-7 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
}
