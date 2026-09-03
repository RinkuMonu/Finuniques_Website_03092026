"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ProductHero } from "@/components/product-hero";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BarChart3,
  Check,
  ChevronRight,
  Code2,
  CreditCard,
  Gauge,
  Globe2,
  Landmark,
  Link2,
  LockKeyhole,
  MessageSquare,
  Radar,
  ReceiptText,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  TerminalSquare,
  WalletCards,
  Zap,
} from "lucide-react";

const R = "\u20B9";

const methodViews = {
  UPI: {
    icon: Smartphone,
    title: "Pay using UPI",
    amount: "4,999",
    fields: ["UPI ID", "rahul@upi"],
    action: "Verify UPI",
    meta: ["QR ready", "Intent supported", "Live status"],
  },
  Cards: {
    icon: CreditCard,
    title: "Card checkout",
    amount: "4,999",
    fields: ["Card Number", "4242 4242 4242 4242", "Expiry", "08 / 29", "CVV", "123", "Cardholder Name", "Rahul Sharma"],
    action: "Authenticate Card",
    meta: ["Tokenized", "Retry aware", "Mobile ready"],
  },
  "Net Banking": {
    icon: Landmark,
    title: "Choose your bank",
    amount: "4,999",
    banks: ["HDFC Bank", "ICICI Bank", "SBI", "Axis Bank"],
    action: "Continue to Bank",
    meta: ["Bank redirect", "Status sync", "Auto reconcile"],
  },
  Wallets: {
    icon: WalletCards,
    title: "Wallet payment",
    amount: "4,999",
    banks: ["Paytm", "PhonePe", "Amazon Pay", "Mobikwik"],
    action: "Pay with Wallet",
    meta: ["Saved user flow", "Fast callback", "Refund support"],
  },
  EMI: {
    icon: Banknote,
    title: "EMI options",
    amount: "4,999",
    banks: ["3 months", "6 months", "9 months", "12 months"],
    action: "Show EMI Plans",
    meta: ["Flexible tenure", "Offer logic", "Higher order value"],
  },
  International: {
    icon: Globe2,
    title: "International payment",
    amount: "4,999",
    fields: ["Currency", "USD equivalent", "Customer Country", "United States"],
    action: "Review Payment",
    meta: ["Multi-currency", "Risk checks", "Global cards"],
  },
};

const paymentSteps = ["Customer", "Authenticating", "Processing", "Payment Successful", "Merchant Balance"];
const methods = Object.keys(methodViews);
const trustedNames = ["NovaCart", "EduFlow", "TravelGrid", "LendWise", "CloudBooks", "MarketStack"];

const gatewayFeatureCards = [
  [WalletCards, "150+ payment options", "Accept payments through credit cards, debit cards, UPI, wallets, EMI, net banking, and BNPL with one Finunique gateway."],
  [BarChart3, "Best payment success rate", "Smart routing and retry logic help improve authorization rates, checkout completion, and business revenue."],
  [Zap, "Easy integration", "Developer-friendly APIs, SDK-ready flows, and clear documentation help your team go live quickly."],
  [CreditCard, "iFrame checkout", "Embed a hosted checkout experience in your website or app and keep customers inside a seamless payment flow."],
  [Gauge, "Unified dashboard", "Track live transactions, refunds, settlements, reconciliation, and reports from one merchant workspace."],
  [MessageSquare, "Dedicated technical support", "Get assistance for onboarding, integration, transaction queries, and production payment operations."],
];

const gatewaySteps = [
  ["1", "Customer Initiates Payment", "The customer chooses a payment mode such as UPI, card, wallet, EMI, or net banking and enters the payment details on your website or app."],
  ["2", "Secure Data Encryption", "Finunique encrypts payment information and securely routes it to payment networks and acquiring banks."],
  ["3", "Authorization & Verification", "The issuing bank verifies transaction details, validates risk checks, and approves or declines the payment."],
  ["4", "Settlement & Confirmation", "Once authorized, funds are debited and transferred to your merchant account with real-time confirmation."],
];

const benefitHighlights = [
  [Zap, "Quick and easy checkout process"],
  [BadgeCheck, "Better customer experience"],
  [CreditCard, "Reduces cart abandonment"],
  [BarChart3, "Industry best success rates"],
  [Gauge, "Gather valuable insights"],
  [Landmark, "Instant settlements"],
  [RefreshCw, "Instant Refunds"],
  [ShieldCheck, "Better risk management"],
];

const platformGroups = [
  ["Android", "Java", "Php", "Python", "Ruby"],
  ["Shopify", "AbanteCart", "Magento", "WooCommerce", "Opencart", "PrestaShop", "WHMCS"],
];

const choosePoints = [
  "Plug and play APIs",
  "PCI DSS Level-1 Compliant",
  "Quick Digital Onboarding",
  "24x7 Technical Support",
  "Transparent Pricing",
  "Unified Dashboard for Collections & Payouts",
];

const faqs = [
  ["What is a payment gateway?", "A payment gateway securely captures, encrypts, and routes customer payment data between your website or app, the payment network, banks, and your merchant account."],
  ["Which payment methods can Finunique support?", "Finunique can support UPI, cards, net banking, wallets, EMI, BNPL-style flows, payment links, and settlement workflows through one checkout and dashboard experience."],
  ["How fast can a business go live?", "Most businesses can start with dashboard onboarding and API or hosted checkout integration. The exact timeline depends on required documents, risk review, and integration scope."],
  ["Does the dashboard show refunds and settlements?", "Yes. The merchant dashboard section is designed to track payments, payouts, settlements, refunds, reports, analytics, and reconciliation in one place."],
  ["Can developers integrate using APIs?", "Yes. Developers can use API-led flows and hosted checkout patterns, with payment status updates, webhook-style events, and transaction reporting."],
];

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("pg-reveal-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`pg-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function SectionIntro({ eyebrow, title, text, light = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`text-xs font-extrabold uppercase tracking-[0.22em] ${light ? "text-cyan-200" : "text-ocean"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {text && <p className={`mt-4 text-sm font-medium leading-7 ${light ? "text-white/65" : "text-ink/60"}`}>{text}</p>}
    </div>
  );
}

function GatewayFeatureOverview() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <Reveal className="page-shell">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-black leading-tight tracking-tight text-ink sm:text-3xl">
            Fast and effortless payments with Finunique Payment Gateway
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-ink/65">
            Finunique is a secure payment gateway designed to make online transactions seamless for businesses of all sizes. It brings automated reconciliation, refund management, flexible payment modes, and checkout tools into one reliable platform.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {gatewayFeatureCards.map(([Icon, title, text], index) => (
            <article key={title} className="rounded-lg border border-sky-100 bg-white p-6 shadow-[0_14px_42px_rgba(7,59,76,.05)] transition hover:-translate-y-1 hover:border-ocean/25 animate-rise" style={{ animationDelay: `${index * 70}ms` }}>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-50 text-ocean">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-black text-ink">{title}</h3>
              <p className="mt-4 text-sm font-medium leading-7 text-ink/65">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/signup" className="inline-flex items-center justify-center gap-2 rounded-lg bg-ocean px-8 py-3.5 text-sm font-black text-white shadow-[0_16px_34px_rgba(7,143,209,.20)] transition hover:-translate-y-0.5 hover:bg-ink">
            Sign up now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

function GatewayWorkflow() {
  return (
    <section className="bg-[#f7fcff] py-14 sm:py-16">
      <Reveal className="page-shell">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-black leading-tight tracking-tight text-ink sm:text-3xl">How does a payment gateway work?</h2>
          <p className="mt-5 text-base font-medium leading-8 text-ink/65">
            A payment gateway securely transmits payment data between your customer's bank and your business account, making digital transactions safe, fast, and efficient.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {gatewaySteps.map(([number, title, text]) => (
            <article key={title} className="rounded-lg border border-sky-100 bg-white p-6 shadow-sm">
              <p className="text-4xl font-black leading-none text-ocean">{number}</p>
              <h3 className="mt-3 text-base font-black leading-7 text-ink">{title}</h3>
              <p className="mt-5 text-sm font-medium leading-7 text-ink/65">{text}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-base font-black text-ink">
          Explore quick integration steps in our <Link href="/developers" className="text-ocean underline underline-offset-4">developer docs</Link> or <Link href="/contact" className="text-ocean underline underline-offset-4">test a live demo</Link>
        </p>
      </Reveal>
    </section>
  );
}

function GatewayBenefitsBand() {
  return (
    <section className="bg-white py-14 text-ink sm:py-16">
      <Reveal className="page-shell">
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-black leading-tight tracking-tight sm:text-3xl">
          Benefits of using Finunique Payment Gateway for businesses
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefitHighlights.map(([Icon, title]) => (
            <div key={title} className="rounded-lg border border-sky-100 bg-[#f7fcff] p-5">
              <Icon className="h-6 w-6 text-ocean" />
              <p className="mt-4 text-sm font-black leading-6 text-ink">{title}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function GatewayIntegrationPlatforms() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <Reveal className="page-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-lg border border-slate-100 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,.06)]">
          <p className="text-sm font-black text-ink">Allows integration on platforms such as</p>
          <div className="mt-5 flex flex-wrap gap-4">
            {platformGroups[0].map((name) => (
              <div key={name} className="grid min-w-20 place-items-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-center">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-ocean shadow-sm">
                  <Code2 className="h-5 w-5" />
                </span>
                <span className="text-xs font-bold text-ink/60">{name}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm font-black text-ink">Plugins available with payment gateway</p>
          <div className="mt-5 flex flex-wrap gap-4">
            {platformGroups[1].map((name) => (
              <div key={name} className="grid min-w-24 place-items-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-center">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-emerald-500 shadow-sm">
                  <Link2 className="h-5 w-5" />
                </span>
                <span className="text-xs font-bold text-ink/60">{name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black leading-tight tracking-tight text-ink sm:text-3xl">
            Go live quickly with easy payment gateway integration for every platform
          </h2>
          <p className="mt-6 text-sm font-medium leading-7 text-ink/65">
            Integrate payments seamlessly with Finunique. Our platform offers ready-to-use SDKs, no-code plugins, and robust APIs supported by detailed developer documentation.
          </p>
          <p className="mt-4 text-sm font-medium leading-7 text-ink/65">
            Whether you run a startup, SME, or enterprise, Finunique helps you add secure payment experiences across UPI, cards, wallets, and net banking without heavy engineering effort.
          </p>
          <Link href="/developers" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-ocean px-8 py-3.5 text-sm font-black text-white shadow-[0_16px_34px_rgba(7,143,209,.18)] transition hover:-translate-y-0.5 hover:bg-ink">
            View API docs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

function GatewayWhyChoose() {
  return (
    <section className="border-t border-sky-100 bg-[#f7fcff] py-14 sm:py-16">
      <Reveal className="page-shell grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative min-h-64 overflow-hidden rounded-2xl bg-white p-8 shadow-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_42%,rgba(7,143,209,.13),transparent_27%)]" />
          <div className="relative mx-auto mt-6 h-36 w-52 rotate-[-10deg] rounded-[28px] border border-ocean/20 bg-white shadow-[0_26px_55px_rgba(7,59,76,.10)]">
            <div className="absolute inset-5 rounded-2xl border border-ocean/15" />
            <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-sky-50 text-ocean">
              <CreditCard className="h-6 w-6" />
            </span>
          </div>
          {[ShieldCheck, LockKeyhole, ReceiptText, WalletCards].map((Icon, index) => (
            <span key={index} className="absolute grid h-12 w-12 place-items-center rounded-xl border border-ocean/15 bg-white text-ocean shadow-sm" style={{ left: `${10 + index * 22}%`, top: `${18 + (index % 2) * 45}%` }}>
              <Icon className="h-5 w-5" />
            </span>
          ))}
        </div>

        <div>
          <h2 className="max-w-2xl text-2xl font-black leading-tight tracking-tight text-ink sm:text-3xl">
            Why choose Finunique payment gateway solution?
          </h2>
          <div className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {choosePoints.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-200 text-emerald-700">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm font-bold text-ink/75">{point}</p>
              </div>
            ))}
          </div>
          <Link href="/signup" className="mt-9 inline-flex items-center gap-2 rounded-lg bg-ocean px-8 py-3.5 text-sm font-black text-white shadow-[0_16px_34px_rgba(7,143,209,.18)] transition hover:-translate-y-0.5 hover:bg-ink">
            Sign up now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

function GatewayFaq() {
  return (
    <section className="bg-[#f7fcff] py-14 sm:py-16">
      <Reveal className="page-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-ocean">FAQ</p>
          <h2 className="mt-4 text-2xl font-black leading-tight tracking-tight text-ink sm:text-3xl">Payment gateway questions, answered.</h2>
        </div>
        <div className="mx-auto mt-10 max-w-4xl space-y-4">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black text-ink">
                {question}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky-50 text-ocean transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm font-medium leading-7 text-ink/65">{answer}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function FloatingReceipt({ className = "" }) {
  return (
    <div className={`rounded-2xl border border-emerald-200 bg-white/95 p-4 shadow-[0_20px_60px_rgba(7,59,76,0.14)] ${className}`}>
      <div className="flex items-center justify-between gap-5">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-ocean">Payment received</p>
        <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-emerald-700">
          <Check className="h-3.5 w-3.5" />
        </span>
      </div>
      <p className="mt-3 text-2xl font-black text-ink">{R}2,499</p>
      <div className="mt-2 flex items-center justify-between text-xs font-bold text-ink/45">
        <span>UPI</span>
        <span>2 sec ago</span>
      </div>
    </div>
  );
}

function HeroCheckout() {
  return (
    <div className="relative mx-auto max-w-lg">
      <span className="pg-hero-ring" />
      <div className="absolute -left-5 top-10 hidden rounded-full border border-ocean/15 bg-white px-4 py-2 text-xs font-black text-ink shadow-lg sm:block animate-payment-float-panel">UPI</div>
      <div className="absolute -right-4 top-32 hidden rounded-full border border-ocean/15 bg-white px-4 py-2 text-xs font-black text-ink shadow-lg sm:block animate-payment-icon-orbit">Cards</div>
      <div className="absolute -bottom-5 left-10 hidden rounded-full border border-ocean/15 bg-white px-4 py-2 text-xs font-black text-ink shadow-lg sm:block animate-card-float">Wallets</div>
      <FloatingReceipt className="absolute -right-8 -top-8 z-20 hidden w-56 sm:block animate-float" />

      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/70 bg-white p-5 shadow-[0_30px_90px_rgba(7,59,76,0.18)]">
        <div className="absolute inset-x-0 top-0 h-1 overflow-hidden bg-emerald-100">
          <span className="block h-full w-2/3 bg-ocean animate-payment-progress" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-ink/40">Checkout</p>
            <h3 className="mt-2 text-3xl font-black text-ink">Pay {R}2,499</h3>
          </div>
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-white">
            <LockKeyhole className="h-5 w-5" />
          </span>
        </div>

        <div className="mt-6 rounded-2xl bg-cloud p-4">
          <p className="text-sm font-black text-ink">Choose Payment Method</p>
          <div className="mt-4 grid gap-2">
            {["UPI", "Credit / Debit Card", "Net Banking", "Wallet"].map((item, index) => (
              <div key={item} className={`flex items-center gap-3 rounded-xl border px-3 py-3 ${index === 0 ? "border-ocean bg-white shadow-sm" : "border-transparent bg-white/55"}`}>
                <span className={`h-3.5 w-3.5 rounded-full border ${index === 0 ? "border-ocean bg-ocean ring-4 ring-ocean/10" : "border-ink/25"}`} />
                <span className="text-sm font-bold text-ink">{item}</span>
              </div>
            ))}
          </div>
          <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-5 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-ocean" type="button">
            Pay Securely <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-5 grid gap-2">
          {paymentSteps.map((step, index) => (
            <div key={step} className="flex items-center gap-3 pg-step-flow" style={{ animationDelay: `${index * 420}ms` }}>
              <span className={`grid h-7 w-7 place-items-center rounded-full text-[11px] font-black ${index < 4 ? "bg-emerald-100 text-emerald-700" : "bg-ocean text-white"}`}>
                {index < 3 ? index + 1 : <Check className="h-3.5 w-3.5" />}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-ocean/40 to-transparent" />
              <span className="min-w-[132px] text-right text-xs font-black uppercase tracking-[0.1em] text-ink/55">{step}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-700">Merchant Balance</p>
          <p className="mt-1 text-2xl font-black text-ink">+{R}2,499</p>
        </div>
      </div>
    </div>
  );
}

function BrandMarquee() {
  return (
    <div className="mt-14 overflow-hidden rounded-2xl border border-ink/10 bg-white/70 py-5 shadow-[0_18px_55px_rgba(7,59,76,0.07)]">
      <div className="pg-marquee flex items-center gap-5">
        {[...trustedNames, ...trustedNames, ...trustedNames].map((name, index) => (
          <div key={`${name}-${index}`} className="flex min-w-40 items-center justify-center rounded-xl border border-ocean/10 bg-cloud px-5 py-3 text-sm font-black text-ink/55">
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

function PaymentHighway() {
  const lanes = ["UPI", "Cards", "Wallets", "Banking", "EMI"];
  const amounts = ["499", "1,299", "5,499", "899"];
  return (
    <section className="bg-[#f7fcff] py-20 sm:py-28">
      <Reveal className="page-shell">
        <SectionIntro eyebrow="Payment Highway" title="One gateway. Every payment journey." text="Multiple payment methods enter one orchestration layer, get processed, and arrive as clean business transactions." />
        <div className="mt-14 overflow-hidden rounded-[1.5rem] border border-ocean/15 bg-white p-5 shadow-[0_24px_80px_rgba(7,59,76,0.08)] sm:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_280px_1fr]">
            <div className="space-y-4">
              {lanes.map((lane, index) => (
                <div key={lane} className="relative flex items-center gap-4">
                  <span className="w-20 text-sm font-black text-ink">{lane}</span>
                  <span className="relative h-2 flex-1 overflow-hidden rounded-full bg-ocean/10">
                    <span className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-ocean/40 animate-payment-progress" style={{ animationDelay: `${index * 180}ms` }} />
                  </span>
                </div>
              ))}
            </div>
            <div className="relative grid min-h-56 place-items-center rounded-[1.25rem] border border-ocean/20 bg-ink text-white shadow-soft">
              <span className="absolute inset-4 rounded-2xl border border-cyan-300/20 animate-payment-orbit-breathe" />
              <div className="relative text-center">
                <Zap className="mx-auto h-9 w-9 text-cyan-200" />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.24em] text-cyan-200">Payment</p>
                <p className="text-2xl font-black">Engine</p>
              </div>
            </div>
            <div className="relative min-h-56 overflow-hidden rounded-[1.25rem] border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">Business</p>
              <p className="mt-2 text-3xl font-black text-ink">Transactions verified</p>
              <div className="mt-6 grid gap-3">
                {amounts.map((amount, index) => (
                  <div key={amount} className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm animate-payment-float-panel" style={{ animationDelay: `${index * 220}ms` }}>
                    <span className="font-black text-ink">{R}{amount}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-black text-emerald-700"><Check className="h-4 w-4" /> Success</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function PaymentMethods() {
  const [active, setActive] = useState("UPI");
  const view = methodViews[active];
  const Icon = view.icon;

  return (
    <section id="payment-methods" className="bg-white py-14 sm:py-16">
      <Reveal className="page-shell grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-ocean">Payment Methods</p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl">Accept payments the way your customers prefer.</h2>
          <div className="mt-8 flex gap-2 overflow-x-auto pb-2 lg:grid lg:grid-cols-1 lg:overflow-visible">
            {methods.map((method) => (
              <button key={method} type="button" onClick={() => setActive(method)} className={`flex min-w-36 items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-black transition ${active === method ? "border-ocean bg-cloud text-ocean shadow-sm" : "border-ink/10 bg-white text-ink hover:border-ocean/30"}`}>
                {method}
                <ChevronRight className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-[1.5rem] border border-ink/10 bg-cloud p-4 shadow-soft sm:p-7">
          <div className="rounded-[1.25rem] bg-white p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-ink/40">Interactive checkout</p>
                <h3 className="mt-2 text-2xl font-black text-ink">Pay {R}{view.amount}</h3>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ocean text-white"><Icon className="h-5 w-5" /></span>
            </div>
            <div key={active} className="mt-6 min-h-72 rounded-2xl border border-ink/10 bg-slate-50 p-5 animate-rise">
              <p className="text-lg font-black text-ink">{view.title}</p>
              {view.fields && (
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {view.fields.map((field, index) => (
                    <div key={`${field}-${index}`} className={index % 2 === 0 ? "text-xs font-black uppercase tracking-[0.14em] text-ink/40 sm:col-span-2" : "rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm font-bold text-ink sm:col-span-2"}>
                      {field}
                    </div>
                  ))}
                  {active === "UPI" && (
                    <div className="mt-2 grid h-28 place-items-center rounded-xl border border-dashed border-ocean/35 bg-white text-xs font-black uppercase tracking-[0.18em] text-ocean sm:col-span-2">
                      QR code visual
                    </div>
                  )}
                </div>
              )}
              {view.banks && (
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {view.banks.map((bank) => (
                    <button key={bank} type="button" className="rounded-xl border border-ink/10 bg-white px-4 py-4 text-left text-sm font-black text-ink transition hover:border-ocean/35 hover:text-ocean">
                      {bank}
                    </button>
                  ))}
                </div>
              )}
              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-5 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-ocean" type="button">
                {view.action} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {view.meta.map((item) => (
                <span key={item} className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-black text-emerald-700">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function PaymentEngine() {
  const nodes = ["Fraud Check", "Authentication", "Payment Routing", "Smart Processing", "Status Tracking", "Verification"];
  return (
    <section className="bg-ink py-20 text-white sm:py-28">
      <Reveal className="page-shell">
        <SectionIntro light eyebrow="Infrastructure" title="What happens after your customer taps Pay?" text="A transaction enters the orchestration engine, passes checks, receives a route, and returns with a status your team can trust." />
        <div className="mt-14 grid gap-6 lg:grid-cols-[260px_1fr_260px]">
          <div className="space-y-4">
            {["Customer", "Payment Request"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <p className="text-sm font-black">{item}</p>
                <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10"><span className="block h-full w-2/3 bg-cyan-300 animate-payment-progress" /></div>
              </div>
            ))}
          </div>
          <div className="relative overflow-hidden rounded-[1.5rem] border border-cyan-300/20 bg-white/[0.06] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.25)]">
            <span className="absolute left-0 top-12 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent animate-payment-scan-line" />
            <div className="relative text-center">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">Payment Orchestration Engine</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {nodes.map((node, index) => (
                  <div key={node} className="rounded-2xl border border-white/10 bg-black/15 p-5">
                    <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-cyan-300/15 text-cyan-200">
                      {index % 2 ? <Radar className="h-5 w-5" /> : <ShieldCheck className="h-5 w-5" />}
                    </span>
                    <p className="mt-4 text-sm font-black">{node}</p>
                    <p className="mt-2 text-xs leading-5 text-white/45">Active when the transaction reaches this layer.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {["Payment Network", "Payment Success", "Merchant", "Settlement"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <span className={`grid h-8 w-8 place-items-center rounded-full ${index === 1 ? "bg-emerald-400 text-ink" : "bg-white/10 text-cyan-200"}`}>
                  {index === 1 ? <Check className="h-4 w-4" /> : index + 1}
                </span>
                <p className="text-sm font-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ConversionSystem() {
  const items = ["Fast Checkout", "Mobile Optimized", "Smart Retry", "Secure Authentication", "Multiple Payment Options", "Real-Time Status", "Responsive Checkout", "Payment Recovery"];
  return (
    <section className="bg-[#062f3e] py-20 text-white sm:py-28">
      <Reveal className="page-shell">
        <SectionIntro light eyebrow="Conversion" title={"Don't just process payments. Protect every conversion."} text="The checkout is surrounded by intelligence that helps customers complete payment instead of dropping off." />
        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="mx-auto max-w-md rounded-[1.5rem] border border-white/10 bg-white p-5 text-ink shadow-[0_35px_100px_rgba(0,0,0,0.35)]">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-ink/40">Smart checkout</p>
            <p className="mt-3 text-3xl font-black">Complete your order</p>
            <div className="mt-6 space-y-3">
              <div className="rounded-xl bg-cloud p-4 font-black">Amount: {R}7,840</div>
              <div className="rounded-xl border border-ocean/25 bg-white p-4 font-black text-ocean">UPI selected - best route available</div>
              <button type="button" className="w-full rounded-xl bg-ink py-4 text-sm font-black text-white">Pay now</button>
            </div>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, index) => (
              <div key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-3 text-center text-xs font-black text-white/80 animate-payment-float-panel" style={{ animationDelay: `${index * 120}ms` }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function DashboardExperience() {
  const [tab, setTab] = useState("Overview");
  const navItems = ["Overview", "Payments", "Payouts", "Settlements", "Analytics", "Reconciliation", "Refunds", "Reports"];
  const dashboardData = {
    Overview: {
      chartTitle: "Business volume",
      period: "Last 12 weeks",
      kpis: [["Total payments", "18,42,560", R], ["Successful", "4,824", ""], ["Failed", "87", ""], ["Refunded", "72,450", R], ["Settlement", "6,80,000", R]],
      bars: [38, 52, 44, 66, 58, 74, 62, 88, 71, 94, 80, 100],
      rows: [["Amit", "2,499", "Success"], ["Riya", "5,200", "Success"], ["Rahul", "1,899", "Processing"], ["Priya", "8,500", "Refunded"]],
    },
    Payments: {
      chartTitle: "Payment volume",
      period: "Today",
      kpis: [["Collected", "8,42,560", R], ["Successful", "1,284", ""], ["Pending", "41", ""], ["Failed", "32", ""], ["Success rate", "98.7%", ""]],
      bars: [42, 55, 48, 70, 62, 82, 75, 94, 68, 88, 92, 78],
      rows: [["NovaCart", "12,499", "Success"], ["EduFlow", "3,200", "Success"], ["TravelGrid", "9,899", "Processing"], ["CloudBooks", "1,500", "Failed"]],
    },
    Payouts: {
      chartTitle: "Payout volume",
      period: "Last 7 batches",
      kpis: [["Total payouts", "12,80,000", R], ["Completed", "942", ""], ["Queued", "63", ""], ["Failed", "11", ""], ["Avg. time", "42 min", ""]],
      bars: [30, 44, 51, 63, 59, 74, 81, 69, 86, 72, 94, 88],
      rows: [["Vendor A", "48,000", "Success"], ["Driver Pool", "1,20,000", "Processing"], ["Partner X", "32,500", "Success"], ["Refund Batch", "18,900", "Queued"]],
    },
    Settlements: {
      chartTitle: "Settlement trend",
      period: "T+1 cycles",
      kpis: [["Available", "6,80,000", R], ["Next batch", "1,28,500", R], ["Settled", "5,51,500", R], ["UTRs", "184", ""], ["Matched", "99.1%", ""]],
      bars: [48, 62, 57, 73, 68, 86, 80, 92, 77, 95, 90, 98],
      rows: [["UTR 3049182", "25,000", "Matched"], ["UTR 3049183", "18,500", "Matched"], ["UTR 3049184", "44,000", "Processing"], ["UTR 3049185", "9,800", "Matched"]],
    },
    Analytics: {
      chartTitle: "Conversion analytics",
      period: "Last 30 days",
      kpis: [["Conversion", "72.4%", ""], ["AOV", "2,146", R], ["Recovery", "18.2%", ""], ["Top method", "UPI", ""], ["Revenue lift", "12.8%", ""]],
      bars: [34, 39, 48, 45, 59, 63, 69, 75, 71, 84, 88, 92],
      rows: [["UPI", "62%", "Top"], ["Cards", "21%", "Stable"], ["Net Banking", "9%", "Rising"], ["Wallets", "8%", "Stable"]],
    },
    Reconciliation: {
      chartTitle: "Match rate",
      period: "Current cycle",
      kpis: [["Matched", "98.4%", ""], ["Exceptions", "23", ""], ["Unmatched", "1.6%", ""], ["Files", "12", ""], ["Variance", "4,260", R]],
      bars: [76, 82, 79, 88, 84, 91, 94, 89, 96, 93, 98, 97],
      rows: [["Order 1042", "2,499", "Matched"], ["Order 1043", "5,200", "Matched"], ["Order 1044", "1,899", "Investigating"], ["Order 1045", "8,500", "Matched"]],
    },
    Refunds: {
      chartTitle: "Refund activity",
      period: "Last 12 weeks",
      kpis: [["Refunded", "72,450", R], ["Requests", "84", ""], ["Approved", "71", ""], ["Pending", "13", ""], ["Avg. TAT", "4 hrs", ""]],
      bars: [18, 28, 22, 35, 31, 48, 38, 54, 42, 60, 50, 66],
      rows: [["Priya", "8,500", "Refunded"], ["Amit", "1,299", "Processing"], ["Rohan", "2,100", "Refunded"], ["Meera", "4,499", "Pending"]],
    },
    Reports: {
      chartTitle: "Report exports",
      period: "This month",
      kpis: [["Exports", "128", ""], ["Scheduled", "18", ""], ["Downloaded", "94", ""], ["Shared", "31", ""], ["Formats", "CSV/PDF", ""]],
      bars: [22, 31, 44, 40, 58, 52, 64, 76, 72, 84, 79, 90],
      rows: [["Settlement report", "PDF", "Ready"], ["Payment report", "CSV", "Ready"], ["Refund report", "CSV", "Processing"], ["Tax report", "PDF", "Ready"]],
    },
  };
  const activeData = dashboardData[tab] || dashboardData.Overview;

  return (
    <section className="bg-gradient-to-b from-white to-[#f3fbff] py-14 sm:py-16">
      <Reveal className="page-shell">
        <SectionIntro
          eyebrow="Merchant operating system"
          title="Everything happening in your business. One dashboard."
          text="Payments, payouts, settlements and reconciliation share one source of truth, so finance and operations read the same numbers."
        />

        <div className="mt-12 overflow-hidden rounded-[1.5rem] border border-sky-100 bg-white shadow-[0_28px_90px_rgba(7,59,76,0.10)]">
          <div className="flex items-center gap-3 border-b border-sky-100 bg-white/90 px-4 py-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </div>
            <span className="font-mono text-[11px] font-bold text-ink/45">dashboard.finunique.co</span>
            <span className="ml-auto hidden items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 font-mono text-[11px] font-bold text-emerald-700 sm:inline-flex">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,.12)]" />
              live data
            </span>
          </div>

          <div className="bg-[#f8fcff] p-3 sm:p-5">
            <nav className="flex gap-2 overflow-x-auto rounded-2xl border border-sky-100 bg-white p-2 shadow-sm" aria-label="Dashboard sections">
              {navItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTab(item)}
                  className={`shrink-0 rounded-xl px-4 py-2.5 text-[13px] font-black transition-all duration-300 ${
                    tab === item ? "bg-ink text-white shadow-[0_10px_25px_rgba(7,59,76,.16)]" : "text-ink/50 hover:bg-sky-50 hover:text-ink"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            <div key={tab} className="mt-5 animate-rise">
              <div className="grid gap-4 lg:grid-cols-[1fr_330px]">
                <div className="rounded-[1.25rem] border border-sky-100 bg-white p-5 shadow-sm">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-ocean">{tab}</p>
                      <h3 className="mt-2 text-xl font-black tracking-tight text-ink sm:text-2xl">{activeData.chartTitle}</h3>
                    </div>
                    <span className="w-fit rounded-full bg-sky-50 px-3 py-1.5 text-[11px] font-black text-ocean">{activeData.period}</span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 xl:grid-cols-5">
                    {activeData.kpis.map(([label, value, prefix], index) => (
                      <div key={label} className="rounded-2xl border border-sky-100 bg-gradient-to-br from-white to-sky-50/55 p-4 shadow-[0_8px_24px_rgba(7,59,76,.04)] animate-rise" style={{ animationDelay: `${index * 55}ms` }}>
                        <p className="truncate font-mono text-[10px] font-black uppercase tracking-[0.14em] text-ink/42">{label}</p>
                        <p className="mt-2 text-lg font-black text-ink">{prefix}{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-sky-100 bg-[#f8fcff] p-5">
                    <div className="flex h-52 items-end gap-2">
                      {activeData.bars.map((height, index) => (
                        <span key={index} className="group relative flex-1 rounded-t-xl bg-gradient-to-t from-ocean to-cyan-300 shadow-[0_8px_18px_rgba(7,143,209,.12)] transition-all duration-500 hover:brightness-110" style={{ height: `${height}%`, animationDelay: `${index * 45}ms` }}>
                          <span className="absolute -top-7 left-1/2 hidden -translate-x-1/2 rounded-md bg-ink px-2 py-1 text-[10px] font-black text-white group-hover:block">{height}%</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {["Webhook synced", "Auto reconciled", "Report ready"].map((item, index) => (
                      <div key={item} className="rounded-2xl border border-emerald-100 bg-emerald-50/55 px-4 py-3 text-sm font-black text-emerald-800 animate-rise" style={{ animationDelay: `${index * 70}ms` }}>
                        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <aside className="rounded-[1.25rem] border border-sky-100 bg-white p-5 shadow-sm">
                  <div className="rounded-2xl bg-ink p-5 text-white">
                    <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/45">Active workspace</p>
                    <p className="mt-2 text-2xl font-black">{tab}</p>
                    <p className="mt-3 text-sm font-semibold leading-6 text-white/55">Live operations view for your selected business workflow.</p>
                  </div>

                  <p className="mt-5 text-sm font-black text-ink">Recent {tab.toLowerCase()}</p>
                  <ul className="mt-3 space-y-2">
                    {activeData.rows.map(([name, amount, status], index) => (
                      <li key={`${tab}-${name}`} className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-3 animate-rise" style={{ animationDelay: `${index * 75}ms` }}>
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-[11px] font-black text-ink shadow-sm">
                          {name[0]}
                        </span>
                        <span className="min-w-0 flex-1 truncate text-[13px] font-bold text-ink">{name}</span>
                        <span className="shrink-0 text-[13px] font-black tabular-nums text-ink">{R}{amount}</span>
                        <span className={`shrink-0 rounded-full px-2 py-0.5 font-mono text-[10px] font-black ${
                          ["Success", "Matched", "Ready", "Top", "Stable"].includes(status) ? "bg-emerald-100 text-emerald-700" : ["Processing", "Rising", "Queued"].includes(status) ? "bg-sky-100 text-ocean" : "bg-amber-100 text-amber-800"
                        }`}>
                          {status}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 rounded-2xl border border-sky-100 bg-sky-50/70 p-4">
                    <p className="text-[11px] font-black uppercase tracking-[0.16em] text-ocean">Next action</p>
                    <p className="mt-2 text-sm font-bold leading-6 text-ink/65">Review {tab.toLowerCase()} insights and export the latest report.</p>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function DeveloperIntegration() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Reveal className="page-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-ocean">Developers</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-ink sm:text-5xl">From first API call to first payment.</h2>
          <div className="mt-8 overflow-hidden rounded-[1.25rem] border border-ink/10 bg-[#071f2a] text-white shadow-soft">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-amber-300" /><span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs font-black text-white/45">payments.js</span>
            </div>
            <pre className="overflow-x-auto p-5 text-sm leading-7 text-cyan-100"><code>{`const payment = await payments.create({
  amount: 2499,
  currency: "INR",
  customer: "cus_9287"
});

console.log(payment.status);`}</code></pre>
            <div className="border-t border-white/10 p-5">
              <div className="flex items-center gap-3 text-sm font-black text-cyan-200"><TerminalSquare className="h-4 w-4" /> POST /payments <span className="rounded-full bg-emerald-400 px-2 py-1 text-[10px] text-ink">200 OK</span></div>
              <pre className="mt-4 overflow-x-auto rounded-xl bg-black/20 p-4 text-xs leading-6 text-white/70"><code>{`{
  "status": "success",
  "amount": 2499
}`}</code></pre>
            </div>
          </div>
        </div>
        <div className="self-end">
          <div className="grid gap-4">
            {[[Link2, "Plug & Play", "Hosted Checkout"], [Gauge, "Low Code", "Payment SDK"], [Code2, "Build Your Way", "REST APIs"]].map(([Icon, title, text]) => (
              <div key={title} className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-cloud p-5">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-ocean shadow-sm"><Icon className="h-5 w-5" /></span>
                <div><p className="font-black text-ink">{title}</p><p className="text-sm font-bold text-ink/50">{text}</p></div>
              </div>
            ))}
          </div>
          <Link href="/developers" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-ocean">
            Explore Documentation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

function UseCases() {
  const cases = [
    ["E-commerce", "Product", "1,999", "Add to Cart", "Payment Success"],
    ["SaaS", "Pro Plan", "4,999/month", "Subscribe", "Subscription Active"],
    ["Marketplace", "Customer Payment", "10,000", "Platform", "Merchant"],
    ["Enterprise", "12,428 Payments Today", "Multiple Channels", "One Dashboard", "Clear Operations"],
  ];
  return (
    <section className="bg-white py-20 sm:py-28">
      <Reveal className="page-shell">
        <SectionIntro eyebrow="Business Flows" title="Built for every way business happens." />
        <div className="mt-12 flex gap-5 overflow-x-auto pb-4">
          {cases.map(([title, line1, amount, step, done]) => (
            <article key={title} className="min-w-[300px] flex-1 rounded-[1.25rem] border border-ink/10 bg-cloud p-6 sm:min-w-[420px]">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-ocean">{title}</p>
              <p className="mt-8 text-2xl font-black text-ink">{line1}</p>
              <p className="mt-2 text-4xl font-black text-ink">{amount.includes("Channels") ? amount : `${R}${amount}`}</p>
              <div className="mt-8 grid gap-3 text-sm font-black">
                {[step, "Payment", done].map((item, index) => (
                  <div key={item} className={`rounded-xl px-4 py-3 ${index === 2 ? "bg-emerald-100 text-emerald-800" : "bg-white text-ink"}`}>{item}{index === 2 && <Check className="ml-2 inline h-4 w-4" />}</div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function SecurityInfrastructure() {
  const layers = ["Authentication", "Fraud Detection", "Encryption", "Transaction Monitoring", "Risk Checks", "Verification", "Access Control", "Data Protection"];
  return (
    <section className="bg-[#061f2a] py-20 text-white sm:py-28">
      <Reveal className="page-shell">
        <SectionIntro light eyebrow="Security" title="Security built into every transaction." text="Each payment passes through layered controls before a final status reaches your product and operations team." />
        <div className="mx-auto mt-14 max-w-5xl rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_260px_1fr]">
            <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white/45">Transaction</p>
              <p className="mt-3 text-3xl font-black">{R}12,499</p>
            </div>
            <div className="relative grid min-h-64 place-items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-center">
              <Radar className="absolute h-44 w-44 text-cyan-300/15 animate-utility-spin" />
              <div className="relative">
                <ShieldCheck className="mx-auto h-12 w-12 text-cyan-200" />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Security Core</p>
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-200">Verified</p>
              <p className="mt-3 text-3xl font-black">Continue</p>
            </div>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {layers.map((layer) => (
              <div key={layer} className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-center text-xs font-black text-white/75">{layer}</div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs font-bold text-white/35">Certification and compliance badges can be added here once verified.</p>
        </div>
      </Reveal>
    </section>
  );
}

function SettlementExperience() {
  return (
    <section className="bg-[#f7fcff] py-20 sm:py-28">
      <Reveal className="page-shell grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-ocean">Settlements</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-ink sm:text-5xl">From payment received to money settled.</h2>
          <div className="mt-10 grid gap-3">
            {["Customer", "Payment Gateway - Processing", "Merchant Balance", "Settlement", "Bank Account"].map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-4 shadow-sm">
                <span className={`grid h-10 w-10 place-items-center rounded-full font-black ${index === 4 ? "bg-emerald-100 text-emerald-700" : "bg-cloud text-ocean"}`}>{index === 4 ? <Check className="h-5 w-5" /> : index + 1}</span>
                <div>
                  <p className="font-black text-ink">{step}</p>
                  <p className="text-sm font-bold text-ink/45">{index === 4 ? `+${R}25,000` : `${R}25,000`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[1.5rem] border border-ink/10 bg-white p-6 shadow-soft">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-ink/40">Available Balance</p>
          <p className="mt-3 text-5xl font-black text-ink">{R}4,82,940</p>
          <div className="mt-8 rounded-2xl bg-cloud p-5">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-ocean">Next Settlement</p>
            <p className="mt-2 text-3xl font-black text-ink">{R}1,28,500</p>
          </div>
          <button type="button" className="mt-6 w-full rounded-xl bg-ink px-5 py-4 text-sm font-black text-white transition hover:bg-ocean">View Settlements</button>
        </div>
      </Reveal>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-20">
      {["499", "12,499", "2,999", "849", "24,500"].map((amount, index) => (
        <span key={amount} className="absolute rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-black text-white/25 animate-payment-float-panel" style={{ left: `${8 + index * 19}%`, top: `${18 + (index % 3) * 22}%`, animationDelay: `${index * 260}ms` }}>
          {R}{amount} <Check className="inline h-3.5 w-3.5" />
        </span>
      ))}
      <Reveal className="page-shell relative text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-4xl">Start accepting payments with a cleaner checkout flow.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-white/65">Build a payment experience your customers can trust and your operations team can manage from one dashboard.</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/signup" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-black text-ink transition hover:-translate-y-0.5">
            Start Accepting Payments <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-4 text-sm font-black text-white transition hover:bg-white/10">
            Talk to Our Team
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

export function PaymentGatewayPage() {
  return (
    <main className="overflow-hidden bg-white">
      <ProductHero
        eyebrow="Payment Gateway"
        title="Best Payment Gateway for India's Scaling Businesses"
        description="Get onboarded with Finunique, a leading payment gateway in India, offering strong success rates, 150+ payment modes, and seamless checkout experiences."
        primaryLabel="See how it works"
        primaryHref="#payment-methods"
        secondaryLabel="Sign up Now"
        secondaryHref="/signup"
        variant="gateway"
      />

      <GatewayFeatureOverview />
      <GatewayWorkflow />
      <GatewayBenefitsBand />
      <PaymentMethods />
      <DashboardExperience />
      <GatewayIntegrationPlatforms />
      <GatewayWhyChoose />
      <GatewayFaq />
      <FinalCta />
    </main>
  );
}
