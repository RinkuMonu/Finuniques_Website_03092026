"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, GraduationCap, Landmark, Plane, ShieldCheck, ShoppingBag, TrendingUp } from "lucide-react";

const industries = [
  { key: "ecommerce", label: "D2C & E-Commerce", Icon: ShoppingBag, title: "Grow your", accent: "e-commerce business", text: "Create smoother checkout journeys, manage collections and refunds, and keep every transaction visible from one connected platform.", stats: ["Faster checkout", "Easy reconciliation", "Flexible payouts"], image: "/images/industries/ecommerce-v2.png", position: "center", href: "/merchants" },
  { key: "education", label: "EdTech", Icon: GraduationCap, title: "Simplify your", accent: "education payments", text: "Collect fees, automate reminders and reconcile payments across courses, campuses and digital learning experiences.", stats: ["Fee collections", "Payment links", "Clear reporting"], image: "/images/industries/education-v2.png", position: "center", href: "/merchants" },
  { key: "lending", label: "Lending", Icon: Landmark, title: "Modernise your", accent: "lending operations", text: "Connect borrower verification, repayment collections and disbursal workflows with the visibility your lending business needs.", stats: ["Digital onboarding", "Repayments", "Account checks"], image: "/images/industries/lending-v2.png", position: "center", href: "/services#loans" },
  { key: "travel", label: "Travel", Icon: Plane, title: "Power every", accent: "travel journey", text: "Accept booking payments, handle refunds and give travellers a reliable payment experience across every destination.", stats: ["Booking payments", "Quick refunds", "Multiple methods"], image: "/images/industries/travel-v2.png", position: "center", href: "/services#travel" },
  { key: "insurance", label: "Insurance", Icon: ShieldCheck, title: "Transform your", accent: "insurance collections", text: "Make premium payments easier across health, life, motor and travel insurance while keeping operations secure and organised.", stats: ["Premium collection", "Auto reminders", "Secure workflows"], image: "/images/industries/insurance-v2.png", position: "center", href: "/services#insurance" },
  { key: "wealthtech", label: "WealthTech", Icon: TrendingUp, title: "Scale your", accent: "wealth platform", text: "Simplify recurring collections, verification and fund-flow operations for modern investment and wealth businesses.", stats: ["SIP collections", "Verification", "Fund visibility"], image: "/images/industries/wealthtech-v2.png", position: "center", href: "/merchants" },
];

export function IndustriesShowcase() {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const selectIndustry = (index) => {
    if (index === active) return;
    setActive(index);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % industries.length);
    }, 2000);
    return () => window.clearInterval(interval);
  }, [isHovered]);

  const item = industries[active];

  return (
    <section className="overflow-hidden bg-white py-10 sm:py-12">
      <div className="page-shell">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div><p className="eyebrow">Built for your industry</p><h2 className="mt-2 max-w-2xl text-2xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-3xl">Powering every industry.<br/>Backing every ambition.</h2></div>
          <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="flex items-center gap-2">{industries.map(({Icon,label}, index) => <button key={label} onClick={() => selectIndustry(index)} aria-label={label} className={`grid h-11 w-11 place-items-center rounded-xl border transition-all duration-300 ${active === index ? "border-ocean bg-ocean text-white shadow-[0_10px_28px_rgba(7,143,209,.24)]" : "border-ink/10 bg-white text-ink/55 hover:-translate-y-1 hover:border-ocean/30 hover:text-ocean"}`}><Icon className="h-5 w-5"/></button>)}</div>
        </div>

        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="mt-5 flex gap-6 overflow-x-auto border-b border-ink/10 [scrollbar-width:none]">{industries.map(({label}, index) => <button key={label} onClick={() => selectIndustry(index)} className={`relative shrink-0 pb-2.5 text-xs font-bold transition-colors ${active === index ? "text-ocean" : "text-ink/45 hover:text-ink"}`}>{label}{active === index && <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-ocean"/>}</button>)}</div>

        <div className="relative mt-5 min-h-[360px] overflow-hidden rounded-[1.4rem] bg-ink sm:min-h-[380px] shadow-2xl shadow-black/20">
          <div className="absolute inset-0 bg-black/15" />
          <img src={item.image} alt={`${item.label} business using Finunique services`} style={{objectPosition: item.position}} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-ink/10 to-transparent" />
          <article onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="absolute inset-x-3 bottom-3 rounded-[1.2rem] bg-white p-5 shadow-[0_28px_80px_rgba(10,24,42,.16)] sm:inset-x-auto sm:bottom-4 sm:left-4 sm:top-4 sm:w-[43%] sm:p-6 lg:w-[39%]">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-50 text-ocean"><item.Icon className="h-4 w-4"/></span>
            <h3 className="mt-3 text-xl font-extrabold leading-tight text-ink">{item.title}<br/><span className="text-ocean">{item.accent}</span></h3>
            <p className="mt-2.5 text-xs leading-5 text-ink/60 sm:text-sm">{item.text}</p>
            <div className="mt-3 hidden flex-wrap gap-1.5 sm:flex">{item.stats.map((stat) => <span key={stat} className="rounded-full bg-cloud px-2.5 py-1 text-[10px] font-bold text-ink/65">{stat}</span>)}</div>
            <Link href={item.href} className="mt-4 inline-flex items-center gap-2 rounded-lg bg-ocean px-4 py-2 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-ink shadow-md">See solutions <ArrowRight className="h-3.5 w-3.5"/></Link>
          </article>
        </div>
      </div>
    </section>
  );
}
