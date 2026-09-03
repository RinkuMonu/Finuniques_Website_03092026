import Link from "next/link";
import { GrowthShowcase } from "@/components/growth-showcase";
import { IndustryTrustSlider } from "@/components/industry-trust-slider";
import { FuturisticHero } from "@/components/futuristic-hero";
import { DeveloperInfrastructure } from "@/components/developer-infrastructure";
import { IndustriesShowcase } from "@/components/industries-showcase";
import { CustomerStories } from "@/components/customer-stories";
import UtilityIllustration from "@/components/utility-illustration";
import { WhyChooseUsIllustration } from "@/components/why-choose-us-illustration";
import { OnboardingStepsShowcase } from "@/components/onboarding-steps-showcase";
import { ControlSupportShowcase } from "@/components/control-support-showcase";
import { KycModalOverlay } from "@/components/kyc-modal-overlay";
import {
  ArrowRight, BadgeCheck, BarChart3, BookOpenCheck, BriefcaseBusiness, Bus,
  Check, ChevronRight, CircleDollarSign, CreditCard, FileCheck, Fingerprint,
  Gift, GraduationCap, Landmark, MonitorSmartphone, Plane, ReceiptText, Repeat2, Send,
  Headphones, LayoutDashboard, Plug, Rocket, ShieldCheck, Smartphone, Sparkles,
  Store, TrendingUp, Users, WalletCards, Zap,
} from "lucide-react";

const productCards = [
  [CreditCard, "Accept Payments", "Gateway, payin, subscriptions and payment links.", "/payments"],
  [Send, "Payout & Banking", "Payouts, DMT and AEPS from one secure platform.", "/payouts"],
  [Smartphone, "UPI Payments", "Collections, links, split payments and flexible APIs.", "/payments"],
  [ReceiptText, "Utility Services", "Business bills, fleet recharges and vendor payments.", "/services#utility-services"],
  [Fingerprint, "Verification", "Aadhaar, PAN, GSTIN, bank and business checks.", "/kyc-policy"],
  [WalletCards, "Cards & Affordability", "Corporate cards, EMI, BNPL and offers.", "/payments"],
  [Gift, "Gifts & Vouchers", "Digital rewards for customers, teams and partners.", "/services#gift-cards-vouchers"],
  [Sparkles, "AI Solutions", "Smarter routing, risk detection and payment insights.", "/platform"],
];

const utilities = [
  [ReceiptText, "Vendor Invoices"], [Smartphone, "Mobile & DTH"], [Zap, "Electricity"],
  [CircleDollarSign, "Water & Gas"], [CreditCard, "FASTag"], [Landmark, "Broadband"],
];

const utilityProducts = [
  [Smartphone, "Corporate Mobile & DTH", "Manage business mobile and DTH recharges", "/services#mobile-dth-recharges"],
  [Zap, "Commercial Electricity", "Pay electricity bills across business locations", "/services#electricity-bill-payment"],
  [CircleDollarSign, "Water & Municipal Bills", "Manage water and municipal utility payments", "/services#water-bill-payment"],
  [CircleDollarSign, "Gas & LPG Payments", "Pay commercial gas and LPG bills", "/services#gas-bill-payment"],
  [CreditCard, "FASTag & Fleet Recharge", "Recharge FASTag accounts for business fleets", "/services#fastag-recharge"],
  [MonitorSmartphone, "Broadband & Landline", "Pay office broadband and landline bills", "/services#broadband-landline"],
  [ReceiptText, "Vendor Invoice Payments", "Track and pay recurring vendor invoices", "/payouts"],
  [Landmark, "Rent & Property Payments", "Manage rent across offices and business locations", "/services#rent-payments"],
  [FileCheck, "Tax & Statutory Payments", "Organize business tax and statutory dues", "/services#statutory-payments"],
];

const verifications = [
  [Fingerprint, "Aadhaar OTP", "Instant identity verification using Aadhaar OTP."],
  [FileCheck, "PAN OTP", "PAN verification with secure OTP-driven checks."],
  [Landmark, "Bank Account", "Confirm beneficiary accounts and account ownership."],
  [BriefcaseBusiness, "GSTIN & CIN", "Validate business registrations and company IDs."],
  [BadgeCheck, "Udyam", "MSME & Udyam validation for small businesses."],
  [Users, "Voter ID", "Alternative identity verification where required."],
];

const industries = [
  [Plane, "Travel", "Bookings and payment journeys for travel businesses.", "/services#travel"],
  [Landmark, "Lending", "Collections and workflows for modern lenders.", "/services#loans"],
  [ShieldCheck, "Insurance", "Premium collection across health, life and motor.", "/services#insurance"],
  [GraduationCap, "EdTech", "Fee collection and reconciliation for education.", "/merchants"],
  [Store, "D2C & E-Commerce", "Checkout, payments, refunds and RTO support.", "/merchants"],
  [TrendingUp, "WealthTech", "Simplified SIP collections and fund flows.", "/merchants"],
];

const faqs = [
  ["What can I manage from Finunique?", "Accept payments, run payouts, verify customers and businesses, manage utility services, review settlements and monitor performance from one connected platform."],
  ["Which payment methods are supported?", "The platform is designed for cards, UPI, net banking, wallets, payment links, subscriptions and assisted payment workflows."],
  ["Can I use verification APIs separately?", "Yes. Aadhaar, PAN, bank, GSTIN, CIN, Udyam and other verification workflows can be integrated based on your approved use case."],
  ["How can my team get started?", "Tell us about your business, complete onboarding, select the services you need and choose between hosted experiences or API integration."],
];

const productPalettes = ["from-sky-50 to-white", "from-violet-50 to-white", "from-amber-50 to-white", "from-emerald-50 to-white", "from-rose-50 to-white", "from-cyan-50 to-white"];

function ProductCard({ item, index = 0 }) {
  const [Icon,title,text,href] = item;
  return <Link href={href} className={`group block w-[280px] shrink-0 rounded-[1.4rem] border border-ink/10 bg-gradient-to-br ${productPalettes[index%productPalettes.length]} p-6 shadow-[0_12px_35px_rgba(7,59,76,.05)] transition hover:border-ocean/30 hover:shadow-[0_16px_38px_rgba(7,59,76,.09)]`}><span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-ocean shadow-sm transition group-hover:bg-ocean group-hover:text-white"><Icon className="h-5 w-5" /></span><h3 className="mt-5 text-lg font-extrabold">{title}</h3><p className="mt-2 min-h-[60px] text-sm leading-6 text-ink/55">{text}</p><span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-ocean">Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>;
}

const platformBenefits = [
  [Plug, "Plug-and-play APIs", "Clear documentation and developer-friendly APIs help your team integrate and launch faster."],
  [LayoutDashboard, "Unified dashboard", "Track transactions, settlements, payouts and verification activity from one place."],
  [TrendingUp, "Higher success rates", "Optimized payment journeys deliver smoother checkout experiences for your customers."],
  [ShieldCheck, "Secure and reliable", "Protected workflows and robust controls keep every financial operation dependable."],
  [Rocket, "Quick onboarding", "A streamlined digital onboarding process gets your business ready without unnecessary delays."],
  [Headphones, "Responsive support", "Get practical assistance across your integration and day-to-day operations."],
];

const paymentLogos = [
  ["/images/payment-logos/visa.svg", "Visa"],
  ["/images/payment-logos/mastercard.svg", "Mastercard"],
  ["/images/payment-logos/googlepay.svg", "Google Pay"],
  ["/images/payment-logos/phonepe.svg", "PhonePe"],
  ["/images/payment-logos/paytm.svg", "Paytm"],
  ["/images/payment-logos/americanexpress.svg", "American Express"],
  ["/images/payment-logos/paypal.svg", "PayPal"],
];

function WhyFinunique() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#edf8fc] via-[#f7fbfd] to-[#f3f1ff] py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-cyan-200/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />
      <div className="page-shell relative">
       <div>
        <div className="grid items-center gap-10 lg:grid-cols-[.82fr_1.18fr]">
          <div>
            <p className="eyebrow">Why businesses choose us</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Financial operations,<br className="hidden sm:block"/> made remarkably simple.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-ink/55">From your first API call to every successful transaction, Finunique gives your business the speed, control and support it needs to grow.</p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-ink/70">
              {["One integration", "Real-time visibility", "Built to scale"].map((label) => <span key={label} className="flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 shadow-sm"><Check className="h-4 w-4 text-ocean" />{label}</span>)}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[650px]">
            <div className="absolute inset-x-[10%] bottom-0 h-16 rounded-full bg-ocean/20 blur-3xl" />
            <WhyChooseUsIllustration />
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {platformBenefits.map(([Icon, title, text], index) => (
            <article key={title} style={{animationDelay: `${index * 90}ms`}} className="group animate-hero-copy cursor-default rounded-[1.4rem] border border-ink/[.07] bg-white/80 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-ocean/35 hover:bg-white hover:shadow-[0_18px_45px_rgba(7,143,209,.13)]">
              <div className="flex items-center gap-4">
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-ocean group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(7,143,209,.25)] ${index % 3 === 1 ? "bg-violet-50 text-violet-600" : index % 3 === 2 ? "bg-amber-50 text-amber-600" : "bg-cyan-50 text-ocean"}`}><Icon className="h-5 w-5" /></span>
                <h3 className="text-base font-extrabold text-ink transition-colors duration-300 group-hover:text-ocean">{title}</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-ink/55 transition-colors duration-300 group-hover:text-ink/70">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-[1.7rem] border border-ink/[.07] bg-white/70">
          <div className="grid items-center overflow-hidden lg:grid-cols-[.68fr_1.32fr]">
            <div className="relative z-10 flex gap-4 bg-transparent p-6 sm:p-8">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cyan-50 text-ocean"><CreditCard className="h-5 w-5" /></span>
              <div><p className="text-2xl font-extrabold text-ink">150+ payment options</p><p className="mt-2 max-w-sm text-sm leading-6 text-ink/55">Cards, UPI, wallets and more—through one secure integration.</p></div>
            </div>
            <div className="relative overflow-hidden border-t border-ink/[.07] bg-[#f8fbfd] py-6 lg:border-l lg:border-t-0">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#f8fbfd] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#f8fbfd] to-transparent" />
              <div className="animate-trust-slider flex w-max items-center gap-3">
                {[...paymentLogos, ...paymentLogos].map(([src, label], index) => <div key={`${label}-${index}`} className="grid h-20 w-32 shrink-0 place-items-center rounded-xl border border-ink/[.07] bg-white px-5 shadow-sm"><img src={src} alt={label} className="max-h-8 max-w-[88px] object-contain" /></div>)}
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    </section>
  );
}

function PaymentSimpleSection() {
  const benefits = [
    "Developer-friendly payment APIs",
    "Fast merchant onboarding",
    "Secure, compliant infrastructure",
    "Support when transactions move",
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="page-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div className="relative mx-auto h-[320px] w-full max-w-[580px] sm:h-[380px]" aria-hidden="true">
            <div className="absolute inset-x-8 bottom-2 h-20 rounded-full bg-ocean/15 blur-3xl" />
            <div className="absolute left-[5%] top-[8%] h-40 w-44 animate-payment-dot-field rounded-full bg-[radial-gradient(#078fd1_1.4px,transparent_1.4px)] opacity-30 [background-size:14px_14px] motion-reduce:animate-none" />
            <div className="absolute bottom-[5%] right-[2%] h-36 w-48 animate-payment-dot-field rounded-full bg-[radial-gradient(#18a8e5_1.4px,transparent_1.4px)] opacity-35 [animation-delay:-2s] [background-size:14px_14px] motion-reduce:animate-none" />

            <div className="absolute left-[16%] top-[22%] h-48 w-[68%] origin-center rotate-[-8deg] animate-payment-card-drift rounded-[1.75rem] border border-ocean/15 bg-white p-5 shadow-[0_28px_70px_rgba(7,59,76,.13)] motion-reduce:animate-none">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-ink/35">Payment hub</p>
                  <p className="mt-1 text-xl font-black text-ink">Live checkout</p>
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ocean text-white shadow-[0_12px_24px_rgba(7,143,209,.22)]"><CreditCard className="h-5 w-5" /></span>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl bg-cloud p-4">
                <span className="absolute left-4 top-[86px] h-24 w-12 animate-payment-scan-line bg-gradient-to-r from-transparent via-white/70 to-transparent motion-reduce:animate-none" />
                <div className="flex items-end gap-2">
                  {[42, 68, 50, 86, 64, 96, 74].map((height, index) => (
                    <span key={index} className="flex-1 rounded-full bg-gradient-to-t from-ocean to-emerald-300" style={{height: `${height}px`, opacity: .55 + index * .05}} />
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-ocean" />
                <span className="h-2.5 w-2.5 rounded-full bg-ocean/35" />
                <span className="h-2.5 w-2.5 rounded-full bg-lime" />
                <span className="ml-auto rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-extrabold text-emerald-700">99.8% success</span>
              </div>
            </div>

            <div className="absolute left-[8%] top-[7%] grid h-[76%] w-[84%] animate-payment-orbit-breathe place-items-center rounded-full border border-dashed border-ocean/25 motion-reduce:animate-none">
              {[
                ["left-0 top-[18%]", Plug, "API"],
                ["right-[2%] top-[8%]", ShieldCheck, "Secure"],
                ["right-0 bottom-[22%]", Send, "Payout"],
                ["left-[9%] bottom-[2%]", WalletCards, "Cards"],
              ].map(([position, Icon, label], index) => (
                <div key={label} style={{animationDelay: `${index * 220}ms`}} className={`absolute ${position} flex animate-payment-icon-orbit items-center gap-2 rounded-2xl border border-ocean/15 bg-white px-3 py-2 text-ocean shadow-[0_14px_35px_rgba(7,59,76,.09)] motion-reduce:animate-none`}>
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50"><Icon className="h-[18px] w-[18px]" /></span>
                  <span className="text-xs font-extrabold text-ink">{label}</span>
                </div>
              ))}
            </div>

            <div className="absolute bottom-[7%] right-[9%] w-48 animate-payment-float-panel rounded-2xl border border-white/70 bg-white/90 p-4 shadow-[0_24px_60px_rgba(7,59,76,.14)] backdrop-blur motion-reduce:animate-none">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime/20 text-ink"><ReceiptText className="h-5 w-5" /></span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[.12em] text-ink/35">Settled</p>
                  <p className="text-sm font-black text-ink">INR 48,200</p>
                </div>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-ocean/10">
                <span className="block h-full w-4/5 animate-payment-progress rounded-full bg-ocean motion-reduce:animate-none" />
              </div>
            </div>

            {[0, 1, 2, 3, 4].map((item) => (
              <span key={item} style={{animationDelay: `${item * 420}ms`}} className="absolute left-[12%] top-[49%] h-2.5 w-2.5 animate-payment-flow-dot rounded-full bg-lime shadow-[0_0_18px_rgba(24,168,229,.55)] motion-reduce:animate-none" />
            ))}
          </div>

          <div>
            <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.22] tracking-tight text-ink sm:text-4xl lg:text-[2.65rem]">
              Payment infrastructure built for simpler business growth
            </h2>
            <div className="mt-9 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 text-base font-medium leading-7 text-black sm:text-lg">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ocean text-white">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <Link href="/signup" className="mt-10 inline-flex min-h-[58px] min-w-[210px] items-center justify-center gap-2 rounded-2xl bg-ocean px-7 text-base font-extrabold text-white shadow-[0_14px_30px_rgba(7,143,209,.28)] transition hover:-translate-y-0.5 hover:bg-ink">
              Sign up now <ChevronRight className="h-5 w-5 stroke-[3]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShoppingCartIcon({ className }) {
  return <svg className={className} viewBox="0 0 32 32" fill="none"><path d="M6 8h3l3 12h12l3-8H11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="m19 10 5-5v5h-5Z" fill="currentColor" opacity=".65"/><circle cx="14" cy="25" r="2" fill="currentColor"/><circle cx="23" cy="25" r="2" fill="currentColor"/></svg>;
}

function ShieldIcon({ className }) {
  return <svg className={className} viewBox="0 0 32 32" fill="none"><path d="M16 4 26 8v7c0 6.5-4 10.8-10 13-6-2.2-10-6.5-10-13V8l10-4Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/><path d="m12 16 3 3 6-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function PinIcon({ className }) {
  return <svg className={className} viewBox="0 0 32 32" fill="none"><path d="M16 28s9-8 9-16a9 9 0 1 0-18 0c0 8 9 16 9 16Z" fill="currentColor" opacity=".18" stroke="currentColor" strokeWidth="2.5"/><circle cx="16" cy="12" r="3" fill="currentColor"/></svg>;
}

function BagIcon({ className }) {
  return <svg className={className} viewBox="0 0 32 32" fill="none"><path d="M8 11h16l2 16H6l2-16Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/><path d="M12 11V9a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><path d="M19 18h4v5h-4z" fill="currentColor" opacity=".55"/></svg>;
}

function GiftIcon({ className }) {
  return <svg className={className} viewBox="0 0 32 32" fill="none"><path d="M6 13h20v14H6zM4 9h24v4H4zM16 9v18" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/><path d="M16 9c-4-5-8-3-8 0 0 2 3 2 8 0Zm0 0c4-5 8-3 8 0 0 2-3 2-8 0Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/></svg>;
}

function ShirtIcon({ className }) {
  return <svg className={className} viewBox="0 0 32 32" fill="none"><path d="m10 7 4-2h4l4 2 5 5-4 4-2-2v13H11V14l-2 2-4-4 5-5Z" fill="currentColor" opacity=".2" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/></svg>;
}

export default function Home() {
  return (
    <>
      <FuturisticHero />

      <section className="py-20 sm:py-28">
        <div className="page-shell"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Everything your business needs</p><h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">A growing suite of financial services.</h2></div><Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-ocean">View all services <ArrowRight className="h-4 w-4" /></Link></div></div>
        <div className="mt-12 overflow-hidden">
          <div className="home-product-slider flex w-max gap-5 px-5 sm:px-8">
            {[...productCards, ...productCards].map((item, index) => (
              <ProductCard key={`${item[1]}-${index}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <GrowthShowcase />

      <PaymentSimpleSection />

      <WhyFinunique />

      <DeveloperInfrastructure />

      <section className="overflow-hidden bg-white py-16 sm:py-20">
        <div className="page-shell">
          <div className="mx-auto max-w-4xl text-center"><h2 className="text-3xl font-extrabold leading-[1.2] tracking-tight sm:text-4xl">More than 1,00,000 businesses trust<br className="hidden sm:block"/> Finunique payments platform</h2></div>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.3fr_.7fr] lg:gap-12">
            <IndustryTrustSlider />
            <div className="max-w-lg"><p className="text-base leading-8 text-ink/80">India&apos;s growing businesses trust the Finunique payments platform to manage online payment collections, vendor payouts and financial operations. Experience a simpler way to manage payments and connected financial services.</p></div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-white to-emerald-50 text-ink py-20 sm:py-24">
        <div className="page-shell">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-emerald-600">Verification & Trust</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink">Verify identities instantly — onboard faster, reduce risk.</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-ink/70">A single, secure integration for identity and account verification. Real-time responses, audit trails and enterprise-grade reliability — no extra choices required.</p>
              <div className="mt-6 flex gap-3">
                <Link href="/kyc-policy" className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-5 py-3 text-sm font-bold text-emerald-700">Learn more <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-ink/10 bg-white px-5 py-3 text-sm font-bold text-ink">Talk to sales</Link>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="h-64 w-64 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                <Fingerprint className="h-16 w-16 text-emerald-600 animate-fade-in" />
              </div>
              <svg className="absolute -right-10 -top-6 h-12 w-12 text-emerald-300 opacity-90 animate-bounce" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/></svg>
              <svg className="absolute -left-10 -bottom-6 h-12 w-12 text-emerald-300 opacity-90 animate-bounce" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5"/></svg>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="page-shell">
          <div className="grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-4">
                {/* <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-sm"><ReceiptText className="h-6 w-6" /></span> */}
                <p className="text-xs font-bold uppercase tracking-[.18em] text-ocean">Utility services</p>
              </div>

              <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-ink">Everyday payments, <span className="text-emerald-600">simplified.</span></h2>
              <p className="mt-4 max-w-lg leading-7 text-ink/60">Pay bills, recharge services and manage recurring vendor invoices from one connected platform.</p>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="flex flex-col items-start gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-md text-emerald-600"><ShieldCheck className="h-5 w-5" /></span>
                  <p className="font-extrabold text-ink">Secure</p>
                  <p className="text-sm text-ink/60">Bank‑grade security for every transaction</p>
                </div>
                <div className="flex flex-col items-start gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-md text-ocean"><Plug className="h-5 w-5" /></span>
                  <p className="font-extrabold text-ink">One Integration</p>
                  <p className="text-sm text-ink/60">Access multiple services with a single API</p>
                </div>
                <div className="flex flex-col items-start gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-md text-lime"><Repeat2 className="h-5 w-5" /></span>
                  <p className="font-extrabold text-ink">Real‑time</p>
                  <p className="text-sm text-ink/60">Instant updates & payment confirmations</p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <Link href="/services#utility-services" className="inline-flex items-center gap-2 rounded-full bg-ocean px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-ink">Explore Utility Services <ArrowRight className="h-4 w-4" /></Link>
                <p className="text-sm text-ink/60 italic">All your payments. One smart solution.</p>
              </div>
            </div>

            <div className="relative flex justify-center">
              <UtilityIllustration />
            </div>
          </div>
        </div>
      </section>

      <IndustriesShowcase />

      <OnboardingStepsShowcase />

      <ControlSupportShowcase />

      <CustomerStories />

      <section className="bg-white py-16 sm:py-20">
        <div className="page-shell">
          <div className="mx-auto max-w-6xl rounded-[1.8rem] border border-ink/10 bg-[#f7fbfd] p-6 shadow-sm sm:p-8">
            <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
              <div className="lg:border-r lg:border-ink/10 lg:pr-10">
                <p className="eyebrow text-ink/50">Finunique questions</p>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Fast answers for payment builders.</h2>
                <p className="mt-5 text-base leading-7 text-ink/70">From integration to verification and payouts, these are the practical questions our customers ask before they go live.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-900">Talk to our team <ArrowRight className="h-4 w-4" /></Link>
                  <Link href="/signup" className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-bold text-ink transition hover:border-emerald-300 hover:text-emerald-700">Launch now</Link>
                </div>
              </div>

              <div className="space-y-4">
                {faqs.map(([question, answer], index) => (
                  <details key={question} className="group rounded-[1.4rem] border border-white/80 bg-white p-4 shadow-sm transition hover:shadow-md" open={index === 0}>
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-ink">
                      <span>{question}</span>
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-50 text-emerald-700 transition duration-300 group-open:bg-ink group-open:text-white">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-ink/65">{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <KycModalOverlay />
    </>
  );
}
