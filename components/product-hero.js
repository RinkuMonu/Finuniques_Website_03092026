import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  CreditCard,
  Landmark,
  LockKeyhole,
  MessageSquare,
  ShieldCheck,
  Smartphone,
  WalletCards,
  Zap,
} from "lucide-react";

const methods = [
  [Smartphone, "UPI", "Instant collect"],
  [CreditCard, "Cards", "All major cards"],
  [Landmark, "Banking", "Net banking"],
  [WalletCards, "Wallets", "Popular wallets"],
];

const benefits = [
  "95% Payment Success Rate",
  "Configurable Coupons & Discounts",
  "Instant Settlements & Refunds",
];

const partnerMarks = ["shopify", "Tally", "ZOHO", "WIX"];

function MethodRow({ icon: Icon, label, text, active = false }) {
  return (
    <div className={`flex items-center gap-3 rounded-xl border px-3 py-3 ${active ? "border-ocean bg-sky-50" : "border-sky-100 bg-white"}`}>
      <span className={`grid h-9 w-9 place-items-center rounded-lg ${active ? "bg-ocean text-white" : "bg-sky-50 text-ocean"}`}>
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-black text-ink">{label}</span>
        <span className="block truncate text-xs font-semibold text-ink/45">{text}</span>
      </span>
      <ArrowRight className="h-4 w-4 text-ink/30" />
    </div>
  );
}

function StatusPill({ className = "", label, value }) {
  return (
    <div className={`absolute rounded-2xl border border-sky-100 bg-white px-4 py-3 shadow-[0_18px_42px_rgba(7,59,76,.10)] ${className}`}>
      <p className="text-[10px] font-black uppercase tracking-[0.14em] text-ocean">{label}</p>
      <p className="mt-1 text-lg font-black text-ink">{value}</p>
    </div>
  );
}

function DefaultHeroAnimation() {
  return (
    <div className="relative mx-auto hidden min-h-[470px] w-full max-w-[640px] lg:block">
      <div className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ocean/10" />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ocean/10" />
      <div className="absolute left-[8%] top-[23%] h-px w-[84%] bg-gradient-to-r from-transparent via-ocean/25 to-transparent" />

      <div className="absolute left-1/2 top-1/2 z-10 w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-sky-100 bg-white p-5 shadow-[0_30px_90px_rgba(7,59,76,.14)] animate-card-float">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-ocean">Finunique Checkout</p>
            <p className="mt-2 text-3xl font-black text-ink">&#8377;2,650.00</p>
          </div>
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-white">
            <LockKeyhole className="h-5 w-5" />
          </span>
        </div>

        <div className="mt-5 grid gap-2">
          {methods.map(([Icon, label, text], index) => (
            <MethodRow key={label} icon={Icon} label={label} text={text} active={index === 0} />
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-emerald-50 py-3 text-xs font-black text-emerald-700">
          <ShieldCheck className="h-4 w-4" />
          Secure checkout active
        </div>
      </div>

      <StatusPill className="left-0 top-16 -rotate-6" label="Success rate" value="99.9%" />
      <StatusPill className="right-3 top-24 rotate-6" label="Settlement" value="T+1" />
      <StatusPill className="bottom-14 left-8 rotate-3" label="Smart routing" value="Live" />
      <StatusPill className="bottom-10 right-10 -rotate-3" label="Risk checks" value="Enabled" />

      <div className="absolute right-[16%] top-[11%] grid h-16 w-16 place-items-center rounded-2xl border border-sky-100 bg-white text-ocean shadow-[0_18px_42px_rgba(7,59,76,.09)] animate-payment-float-panel">
        <Zap className="h-7 w-7" />
      </div>
      <div className="absolute left-[14%] bottom-[30%] grid h-16 w-16 place-items-center rounded-2xl border border-sky-100 bg-white text-ocean shadow-[0_18px_42px_rgba(7,59,76,.09)] animate-payment-float-panel [animation-delay:500ms]">
        <Check className="h-7 w-7" />
      </div>
    </div>
  );
}

function GatewayVisual() {
  return (
    <div className="relative min-h-[430px] w-full lg:min-h-[520px]">
      <div className="absolute right-0 top-2 hidden h-[360px] w-[580px] rounded-tl-[30px] border border-white/25 bg-white/95 shadow-[0_24px_70px_rgba(15,23,42,.20)] sm:block lg:h-[420px] lg:w-[680px]">
        <div className="flex h-10 items-center gap-2 rounded-tl-[30px] border-b border-slate-100 bg-white px-5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <p className="ml-4 text-xs font-black text-slate-400">Finunique Merchant Dashboard</p>
        </div>
        <div className="p-7">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,.08)]">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo-50 text-indigo-600">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-bold text-slate-400">Success Transactions</p>
                  <p className="text-lg font-black text-slate-800">250</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,.08)]">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-50 text-violet-600">
                  <CreditCard className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-bold text-slate-400">Transaction Amount</p>
                  <p className="text-lg font-black text-slate-800">&#8377; 60,000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-9">
            <div className="flex items-center justify-between">
              <p className="text-sm font-black text-slate-700">Transaction</p>
              <BarChart3 className="h-5 w-5 text-indigo-500" />
            </div>
            <div className="relative mt-5 h-44 overflow-hidden rounded-xl border border-slate-100 bg-gradient-to-b from-white to-slate-50">
              <div className="absolute inset-x-5 top-10 h-px bg-slate-100" />
              <div className="absolute inset-x-5 top-20 h-px bg-slate-100" />
              <div className="absolute inset-x-5 top-32 h-px bg-slate-100" />
              <div className="absolute bottom-0 left-0 h-36 w-full bg-[linear-gradient(180deg,rgba(125,86,255,.30),rgba(125,86,255,0))] [clip-path:polygon(0_50%,18%_36%,34%_48%,52%_66%,72%_52%,100%_42%,100%_100%,0_100%)]" />
              <div className="absolute bottom-0 left-0 h-28 w-full bg-[linear-gradient(180deg,rgba(239,68,68,.32),rgba(239,68,68,0))] [clip-path:polygon(0_72%,16%_55%,28%_90%,42%_64%,57%_70%,72%_60%,100%_72%,100%_100%,0_100%)]" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-10 z-20 w-[250px] -translate-x-1/2 rounded-[24px] bg-white p-3 shadow-[0_26px_70px_rgba(15,23,42,.24)] animate-card-float sm:left-[22%] sm:translate-x-0 lg:top-24 lg:w-[285px]">
        <div className="overflow-hidden rounded-[20px] border border-slate-100">
          <div className="bg-gradient-to-r from-[#05364a] to-ocean px-4 py-3 text-white">
            <div className="flex items-center justify-between text-[10px] font-bold text-white/80">
              <span>Secured by Finunique</span>
              <span>English</span>
            </div>
            <div className="mt-4 rounded-xl bg-white/14 p-3">
              <p className="text-xs font-bold text-white/80">Paying Sweetcake Bakery</p>
              <p className="mt-1 text-2xl font-black">&#8377;99</p>
            </div>
          </div>
          <div className="bg-white px-4 py-4">
            <p className="text-xs font-black text-slate-600">Select Payment Method</p>
            <div className="mt-3 space-y-2">
              {methods.concat([[Landmark, "IMPS / NEFT", "Bank transfer"]]).map(([Icon, label, text], index) => (
                <div key={`${label}-${index}`} className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/70 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-indigo-600">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-black text-slate-800">{label}</p>
                      <p className="text-[10px] font-semibold text-slate-400">{text}</p>
                    </div>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GatewayHero({ title, description, primaryLabel, primaryHref, secondaryLabel = "Sign up Now", secondaryHref = "/signup" }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#05364a] via-ocean to-[#0b78a6] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_15%,rgba(255,255,255,.22),transparent_25%),radial-gradient(circle_at_15%_20%,rgba(92,255,227,.15),transparent_24%)]" />
      <div className="absolute -bottom-1 left-0 h-16 w-full bg-white [clip-path:polygon(0_66%,100%_34%,100%_100%,0_100%)]" />

      <div className="page-shell relative grid min-h-[560px] items-center gap-8 py-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="max-w-[590px] pb-12 lg:pb-8">
          <p className="text-xs font-black uppercase tracking-[0.12em] text-cyan-100">Digital payment solutions</p>
          <h1 className="mt-5 max-w-[560px] text-3xl font-black leading-[1.14] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-[540px] text-sm font-semibold leading-7 text-white/88 sm:text-base">
            {description}
          </p>

          <div className="mt-6 space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-4">
                <span className="h-6 w-0.5 rounded-full bg-cyan-300" />
                <span className="text-sm font-black text-white">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href={primaryHref} className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3 text-sm font-black text-ocean shadow-[0_18px_38px_rgba(15,23,42,.16)] transition hover:-translate-y-0.5 hover:bg-cyan-50">
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={secondaryHref || primaryHref} className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/80 px-7 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10">
              {secondaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12">
            <p className="text-sm font-black text-white">Works seamlessly with</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-xl font-black text-white/45">
              {partnerMarks.map((mark) => (
                <span key={mark}>{mark}</span>
              ))}
            </div>
          </div>
        </div>

        <GatewayVisual />
      </div>
    </section>
  );
}

function DefaultHero({ eyebrow, title, description, primaryLabel, primaryHref }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f7fcff] to-[#eef8fc] text-ink">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(24,168,229,.14),transparent_28%),radial-gradient(circle_at_18%_16%,rgba(16,185,129,.08),transparent_22%)]" />
      <div className="page-shell relative grid min-h-[560px] items-center gap-10 py-14 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full border border-ocean/20 bg-white/75 px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-ocean shadow-sm">
            {eyebrow}
          </p>

          <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-[-0.04em] text-ink sm:text-5xl lg:text-[3.6rem]">
            {title}
          </h1>

          <p className="mt-6 max-w-xl text-base font-medium leading-7 text-ink/62 sm:text-lg sm:leading-8">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={primaryHref} className="inline-flex items-center justify-center gap-3 rounded-full bg-ocean px-7 py-3.5 text-sm font-black text-white shadow-[0_18px_40px_rgba(7,143,209,.22)] transition hover:-translate-y-0.5 hover:bg-ink">
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 rounded-full border border-ocean/20 bg-white/80 px-7 py-3.5 text-sm font-black text-ocean shadow-sm transition hover:-translate-y-0.5 hover:bg-white">
              <MessageSquare className="h-4 w-4" />
              Talk to Sales
            </Link>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            {methods.map(([Icon, label]) => (
              <div key={label} className="rounded-2xl border border-sky-100 bg-white/75 px-4 py-3 shadow-sm">
                <Icon className="h-5 w-5 text-ocean" />
                <p className="mt-2 text-sm font-black text-ink">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <DefaultHeroAnimation />
      </div>
    </section>
  );
}

export function ProductHero({
  eyebrow = "Payment Gateway",
  title = "Accept payments faster with Finunique",
  description = "From UPI and cards to net banking, wallets, EMI and international payments, streamline every checkout flow through one secure gateway.",
  primaryLabel = "Start Accepting Payments",
  primaryHref = "/signup",
  secondaryLabel,
  secondaryHref,
  variant = "default",
}) {
  if (variant === "gateway") {
    return (
      <GatewayHero
        title={title}
        description={description}
        primaryLabel={primaryLabel}
        primaryHref={primaryHref}
        secondaryLabel={secondaryLabel}
        secondaryHref={secondaryHref}
      />
    );
  }

  return (
    <DefaultHero
      eyebrow={eyebrow}
      title={title}
      description={description}
      primaryLabel={primaryLabel}
      primaryHref={primaryHref}
    />
  );
}
