import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronDown,
  FileCheck2,
  Globe2,
  HeartPulse,
  Hospital,
  Landmark,
  MapPin,
  Phone,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Stethoscope,
  UserRound,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

const iconMap = {
  Activity,
  BadgeCheck,
  CalendarDays,
  FileCheck2,
  Globe2,
  HeartPulse,
  Hospital,
  Landmark,
  MapPin,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Stethoscope,
  UserRound,
  Users,
  Wallet,
  Zap,
};

function Icon({ name, size = 26, className = "" }) {
  const Component = iconMap[name] || ShieldCheck;
  return <Component size={size} className={className} />;
}

export function InsuranceDetailPage({
  metadataTitle,
  label,
  title,
  accentTitle,
  description,
  heroLabel,
  heroValue,
  heroSubtext,
  heroFeature,
  heroFeatureText,
  heroStats,
  trustStats,
  coverageIntro,
  coverage,
  whyTitle,
  whyDescription,
  whyItems,
  audiencesTitle,
  audiences,
  stepsTitle,
  steps,
  plans,
  service,
  claimsTitle,
  claimsDescription,
  claims,
  faqs,
  ctaTitle,
  ctaDescription,
  ctaLabel,
  ctaIcon = "ShieldCheck",
}) {
  return (
    <main className="overflow-hidden bg-white text-[#073F52]">
      <section className="relative min-h-[720px] overflow-hidden bg-[#f4fbfe]">
        <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-[#d9f5ff] blur-3xl opacity-70" />
        <div className="absolute right-[-100px] top-[-100px] h-[600px] w-[600px] rounded-full bg-[#dff7ff] blur-3xl opacity-80" />
        <div className="relative mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="mb-8 inline-flex items-center rounded-full border border-[#bde7f7] bg-white px-6 py-3 shadow-sm">
                <span className="text-sm font-bold tracking-[0.18em] text-[#058fd0]">{label}</span>
              </div>
              <h1 className="max-w-[700px] text-[48px] font-bold leading-[1.02] tracking-[-0.04em] text-[#063F52] sm:text-[60px] lg:text-[72px]">
                {title}<br /><span className="text-[#0798D5]">{accentTitle}</span>
              </h1>
              <p className="mt-8 max-w-[650px] text-[18px] leading-8 text-[#315b68] sm:text-[20px]">{description}</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/contact" className="group flex items-center gap-4 rounded-full bg-[#0798D5] px-8 py-4 text-[17px] font-semibold text-white shadow-[0_15px_35px_rgba(7,152,213,0.25)] transition hover:bg-[#058bc5]">Get {label}<ArrowRight size={20} className="transition group-hover:translate-x-1" /></Link>
                <Link href="/contact" className="flex items-center gap-3 rounded-full border border-[#b9e3f3] bg-white px-8 py-4 text-[17px] font-semibold text-[#078dcc] shadow-sm transition hover:bg-[#f0faff]"><Phone size={19} />Talk to an Expert</Link>
              </div>
              <div className="mt-11 grid max-w-[700px] grid-cols-2 gap-4 sm:grid-cols-4">
                {heroStats.map(([icon, text]) => <div key={text} className="rounded-2xl border border-[#d7edf5] bg-white px-4 py-4 shadow-[0_8px_30px_rgba(6,63,82,0.04)]"><Icon name={icon} size={22} className="mb-3 text-[#0798D5]" /><p className="text-sm font-semibold text-[#073F52]">{text}</p></div>)}
              </div>
            </div>

            <div className="relative flex min-h-[570px] items-center justify-center">
              <div className="absolute h-[420px] w-[420px] rounded-full border border-[#bce8f7] bg-[#e8f8fd] sm:h-[500px] sm:w-[500px]" />
              <div className="absolute h-[330px] w-[330px] rounded-full border border-[#c7edf8] bg-white/70 sm:h-[400px] sm:w-[400px]" />
              <div className="relative z-10 w-[310px] rounded-[30px] border border-[#d9edf4] bg-white p-7 shadow-[0_30px_80px_rgba(6,63,82,0.14)] sm:w-[350px]">
                <div className="flex items-start justify-between"><div><p className="text-xs font-bold tracking-[0.15em] text-[#0798D5]">{heroLabel}</p><p className="mt-2 text-3xl font-bold text-[#073F52]">{heroValue}</p><p className="mt-1 text-sm text-[#83a3ad]">{heroSubtext}</p></div><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#073F52] text-white"><Icon name={ctaIcon} size={27} /></div></div>
                <div className="mt-7 rounded-2xl border border-[#c9ebf7] bg-[#effaff] p-4"><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0798D5] text-white"><Icon name={heroFeature[0]} size={21} /></div><div><p className="font-semibold text-[#073F52]">{heroFeature[1]}</p><p className="text-xs text-[#8aa8b1]">{heroFeatureText}</p></div></div></div>
                <div className="mt-3 space-y-3">{heroFeature[2].map(([value, text]) => <div key={text} className="flex items-center justify-between rounded-xl border border-[#e4f1f5] px-4 py-3"><span className="font-bold text-[#0798D5]">{value}</span><span className="text-sm text-[#6e909a]">{text}</span><Check size={18} className="text-[#0798D5]" /></div>)}</div>
                <div className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#eaf8fc] py-3 text-sm font-semibold text-[#078dcc]"><ShieldCheck size={18} />Protection you can count on.</div>
              </div>
              <div className="absolute left-0 top-[110px] z-20 rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(6,63,82,0.10)]"><p className="text-[11px] font-bold tracking-[0.15em] text-[#0798D5]">SUPPORT</p><p className="mt-1 text-xl font-bold text-[#073F52]">24 × 7</p></div>
              <div className="absolute right-[-10px] top-[80px] z-20 rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(6,63,82,0.10)]"><p className="text-[11px] font-bold tracking-[0.15em] text-[#0798D5]">COVERAGE</p><p className="mt-1 text-xl font-bold text-[#073F52]">Flexible</p></div>
              <div className="absolute bottom-[85px] left-[-15px] flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d6edf5] bg-white text-[#0798D5] shadow-[0_15px_40px_rgba(6,63,82,0.10)]"><ShieldCheck size={28} /></div>
              <div className="absolute bottom-[70px] right-[5px] rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(6,63,82,0.10)]"><p className="text-[11px] font-bold tracking-[0.15em] text-[#0798D5]">PROCESS</p><p className="mt-1 text-xl font-bold text-[#073F52]">Simple</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e3f2f6] bg-white"><div className="mx-auto grid max-w-[1200px] grid-cols-2 lg:grid-cols-4">{trustStats.map(([value, text]) => <div key={text} className="border-[#e6f2f6] px-6 py-9 text-center lg:border-r last:border-r-0"><p className="text-3xl font-bold text-[#073F52]">{value}</p><p className="mt-2 text-sm text-[#7696a0]">{text}</p></div>)}</div></section>

      <section className="bg-white py-20 lg:py-28"><div className="mx-auto max-w-[1200px] px-6"><div className="mx-auto max-w-[700px] text-center"><span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">COMPLETE PROTECTION</span><h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-[#073F52] sm:text-5xl">{coverageIntro.title}</h2><p className="mt-5 text-lg leading-8 text-[#6d909b]">{coverageIntro.description}</p></div><div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{coverage.map(([icon, heading, text]) => <div key={heading} className="group rounded-[25px] border border-[#dceff5] bg-white p-7 shadow-[0_12px_35px_rgba(6,63,82,0.05)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(6,63,82,0.09)]"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9f8fd] text-[#0798D5]"><Icon name={icon} size={27} /></div><h3 className="mt-6 text-xl font-bold text-[#073F52]">{heading}</h3><p className="mt-3 text-sm leading-7 text-[#7897a0]">{text}</p><div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#0798D5]">Learn more<ArrowRight size={16} className="transition group-hover:translate-x-1" /></div></div>)}</div></div></section>

      <section className="bg-[#f4fbfe] py-20 lg:py-28"><div className="mx-auto max-w-[1200px] px-6"><div className="grid items-center gap-16 lg:grid-cols-2"><div className="relative min-h-[450px]"><div className="absolute inset-8 rounded-[40px] bg-[#dff5fc]" /><div className="absolute left-1/2 top-1/2 flex h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_25px_70px_rgba(6,63,82,0.10)]"><div className="text-center"><div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#0798D5] text-white shadow-lg"><Icon name={whyItems[0][0]} size={38} /></div><p className="mt-5 text-2xl font-bold text-[#073F52]">{whyItems[0][1]}</p><p className="mt-1 text-sm text-[#8aa5ad]">{whyItems[0][2]}</p></div></div><div className="absolute left-0 top-10 rounded-2xl border border-[#d4edf5] bg-white px-5 py-4 shadow-lg"><ShieldCheck className="text-[#0798D5]" size={24} /><p className="mt-2 text-sm font-bold text-[#073F52]">Secure</p></div><div className="absolute bottom-10 right-0 rounded-2xl border border-[#d4edf5] bg-white px-5 py-4 shadow-lg"><BadgeCheck className="text-[#0798D5]" size={24} /><p className="mt-2 text-sm font-bold text-[#073F52]">Reliable</p></div></div><div><span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">WHY CHOOSE US</span><h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-[#073F52] sm:text-5xl">{whyTitle}</h2><p className="mt-6 text-lg leading-8 text-[#6c8e98]">{whyDescription}</p><div className="mt-8 space-y-5">{whyItems.slice(1).map(([titleText, text]) => <div key={titleText} className="flex gap-4"><div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0798D5] text-white"><Check size={15} /></div><div><h3 className="font-bold text-[#073F52]">{titleText}</h3><p className="mt-1 text-sm leading-6 text-[#7897a0]">{text}</p></div></div>)}</div></div></div></div></section>

      <section className="bg-white py-20 lg:py-28"><div className="mx-auto max-w-[1200px] px-6"><div className="text-center"><span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">WHO IT&apos;S FOR</span><h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">{audiencesTitle}</h2></div><div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{audiences.map(([icon, heading, text]) => <div key={heading} className="rounded-[26px] border border-[#dceff5] p-7 transition hover:border-[#a9dff1] hover:bg-[#f6fcfe]"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf8fd] text-[#0798D5]"><Icon name={icon} size={27} /></div><h3 className="mt-6 text-xl font-bold text-[#073F52]">{heading}</h3><p className="mt-3 text-sm leading-7 text-[#7897a0]">{text}</p></div>)}</div></div></section>

      <section className="bg-[#f4fbfe] py-20 lg:py-28"><div className="mx-auto max-w-[1100px] px-6"><div className="mx-auto max-w-[700px] text-center"><span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">HOW IT WORKS</span><h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">{stepsTitle}</h2></div><div className="relative mt-16 grid gap-8 md:grid-cols-3"><div className="absolute left-[17%] right-[17%] top-[40px] hidden h-px bg-[#bce6f3] md:block" />{steps.map(([number, icon, heading, text]) => <div key={number} className="relative text-center"><div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-[#f4fbfe] bg-[#0798D5] text-white shadow-lg"><Icon name={icon} size={28} /></div><span className="mt-5 block text-xs font-bold tracking-[0.2em] text-[#0798D5]">STEP {number}</span><h3 className="mt-3 text-xl font-bold text-[#073F52]">{heading}</h3><p className="mx-auto mt-3 max-w-[280px] text-sm leading-7 text-[#7897a0]">{text}</p></div>)}</div></div></section>

      <section className="bg-white py-20 lg:py-28"><div className="mx-auto max-w-[1200px] px-6"><div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">PLANS</span><h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">Protection for every priority.</h2></div><p className="max-w-[450px] text-sm leading-7 text-[#7897a0]">Choose a plan that fits your requirements today and adapts as your protection needs grow.</p></div><div className="mt-14 grid gap-6 lg:grid-cols-3">{plans.map((plan) => <div key={plan.name} className={`relative rounded-[30px] border p-8 ${plan.popular ? "border-[#0798D5] bg-[#073F52] text-white shadow-[0_25px_60px_rgba(6,63,82,0.18)]" : "border-[#dceff5] bg-white"}`}>{plan.popular && <div className="absolute right-7 top-7 rounded-full bg-[#0798D5] px-4 py-2 text-xs font-bold text-white">MOST POPULAR</div>}<p className={`text-sm font-bold ${plan.popular ? "text-[#6fd3f5]" : "text-[#0798D5]"}`}>{plan.name}</p><p className="mt-5 text-4xl font-bold">{plan.amount}</p><p className={`mt-3 text-sm leading-6 ${plan.popular ? "text-[#a5c4cd]" : "text-[#7897a0]"}`}>{plan.description}</p><div className="my-7 h-px bg-current opacity-10" /><div className="space-y-4">{plan.features.map((feature) => <div key={feature} className="flex items-center gap-3"><div className={`flex h-6 w-6 items-center justify-center rounded-full ${plan.popular ? "bg-[#0798D5] text-white" : "bg-[#e8f8fd] text-[#0798D5]"}`}><Check size={14} /></div><span className={`text-sm ${plan.popular ? "text-[#d4e7ed]" : "text-[#547984]"}`}>{feature}</span></div>)}</div><Link href="/contact" className={`mt-8 flex w-full items-center justify-center gap-3 rounded-full py-4 text-center font-semibold ${plan.popular ? "bg-[#0798D5] text-white" : "border border-[#bce4f2] text-[#0798D5]"}`}>Explore Plan<ArrowRight size={18} /></Link></div>)}</div></div></section>

      <section className="bg-[#f4fbfe] py-20 lg:py-28"><div className="mx-auto max-w-[1200px] px-6"><div className="grid items-center gap-14 lg:grid-cols-2"><div><span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">{service.label}</span><h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">{service.title}</h2><p className="mt-6 text-lg leading-8 text-[#6d909b]">{service.description}</p><div className="mt-8 space-y-4">{service.points.map((text) => <div key={text} className="flex items-center gap-3"><Check size={19} className="text-[#0798D5]" /><span className="text-sm font-semibold text-[#315e6c]">{text}</span></div>)}</div><Link href="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0798D5] px-7 py-4 font-semibold text-white">{service.button}<ArrowRight size={18} /></Link></div><div className="rounded-[35px] border border-[#d7edf5] bg-white p-8 shadow-[0_25px_70px_rgba(6,63,82,0.08)]"><div className="flex items-center justify-between"><div><p className="text-xs font-bold tracking-[0.15em] text-[#0798D5]">{service.cardLabel}</p><h3 className="mt-2 text-2xl font-bold text-[#073F52]">{service.cardTitle}</h3></div><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf8fd] text-[#0798D5]"><Icon name={service.cardIcon} size={27} /></div></div><div className="mt-8 space-y-3">{service.cardItems.map((item) => <div key={item} className="flex items-center justify-between rounded-2xl border border-[#e2f0f4] px-5 py-4"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#effaff] text-[#0798D5]"><Icon name={service.cardIcon} size={19} /></div><span className="text-sm font-semibold text-[#315e6c]">{item}</span></div><Check size={19} className="text-[#0798D5]" /></div>)}</div><div className="mt-5 rounded-2xl bg-[#eaf8fd] px-5 py-4 text-center text-sm font-semibold text-[#078dcc]">{service.cardFooter}</div></div></div></div></section>

      <section className="bg-white py-20 lg:py-28"><div className="mx-auto max-w-[1100px] px-6"><div className="text-center"><span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">CLAIMS & SUPPORT</span><h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">{claimsTitle}</h2><p className="mx-auto mt-5 max-w-[650px] text-lg leading-8 text-[#7897a0]">{claimsDescription}</p></div><div className="mt-14 grid gap-5 md:grid-cols-3">{claims.map(([icon, heading, text]) => <div key={heading} className="rounded-[25px] border border-[#dceff5] bg-[#f8fcfd] p-7"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#0798D5] shadow-sm"><Icon name={icon} size={26} /></div><h3 className="mt-6 text-xl font-bold text-[#073F52]">{heading}</h3><p className="mt-3 text-sm leading-7 text-[#7897a0]">{text}</p></div>)}</div></div></section>

      <section className="bg-[#f4fbfe] py-20 lg:py-28"><div className="mx-auto max-w-[900px] px-6"><div className="text-center"><span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">FAQ</span><h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">Questions, answered.</h2></div><div className="mt-12 space-y-3">{faqs.map((question) => <details key={question} className="group rounded-2xl border border-[#d8edf4] bg-white"><summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 font-semibold text-[#073F52]">{question}<ChevronDown size={20} className="text-[#0798D5] transition group-open:rotate-180" /></summary><div className="border-t border-[#edf5f7] px-6 py-5 text-sm leading-7 text-[#7897a0]">Coverage depends on the selected plan, policy terms, exclusions and applicable conditions. Speak with an insurance expert for plan-specific details.</div></details>)}</div></div></section>

      <section className="relative overflow-hidden bg-[#073F52] py-20 lg:py-24"><div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#0798D5] opacity-20 blur-3xl" /><div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-[#0798D5] opacity-10 blur-3xl" /><div className="relative mx-auto max-w-[950px] px-6 text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0798D5] text-white"><Icon name={ctaIcon} size={30} /></div><h2 className="mt-7 text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">{ctaTitle}</h2><p className="mx-auto mt-6 max-w-[650px] text-lg leading-8 text-[#b5d2da]">{ctaDescription}</p><div className="mt-9 flex flex-wrap justify-center gap-4"><Link href="/contact" className="flex items-center gap-3 rounded-full bg-[#0798D5] px-8 py-4 font-semibold text-white transition hover:bg-[#10a4df]">{ctaLabel}<ArrowRight size={19} /></Link><Link href="/contact" className="flex items-center gap-3 rounded-full border border-[#4f7c89] px-8 py-4 font-semibold text-white transition hover:bg-white/10"><Phone size={18} />Talk to an Expert</Link></div></div></section>
    </main>
  );
}