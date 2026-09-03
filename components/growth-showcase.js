"use client";

import { useEffect, useState } from "react";
import { BarChart3, Check, CreditCard, Landmark, Network, Search, Smartphone, WalletCards, Zap } from "lucide-react";

const features = [
  [WalletCards, "Manage your money, your way", "payments"],
  [Search, "Insights to power your business", "insights"],
  [Network, "Easy integrations to go live in minutes", "integrations"],
  [CreditCard, "Total flexibility in payment modes", "methods"],
];

function PaymentsVisual() {
  return <div className="relative h-[315px]"><div className="absolute left-[8%] top-[8%] h-60 w-[84%] rounded-t-[8rem] bg-gradient-to-b from-emerald-100 to-emerald-200"/><div className="absolute left-[12%] top-[18%] w-44 rotate-[-7deg] rounded-2xl bg-ink p-5 text-white shadow-2xl"><div className="flex items-center justify-between"><span className="text-xs text-white/55">FINUNIQUE</span><Zap className="h-4 w-4 text-emerald-300"/></div><p className="mt-10 text-sm font-bold">Business Card</p><p className="mt-2 font-mono text-xs tracking-widest text-white/60">•••• 4286</p></div><div className="absolute right-[8%] top-[10%] rounded-2xl bg-white p-4 shadow-xl"><p className="text-[10px] text-ink/45">Payment received</p><p className="mt-1 text-xl font-extrabold text-ocean">INR 5,390</p><span className="mt-3 inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-800"><Check className="h-3 w-3"/>Successful</span></div><div className="absolute bottom-2 left-1/2 w-40 -translate-x-1/2 rounded-[1.5rem] bg-slate-900 p-4 shadow-2xl"><div className="mx-auto grid h-20 w-24 place-items-center rounded-xl bg-slate-800 text-emerald-300"><Smartphone className="h-9 w-9"/></div><div className="mx-auto mt-3 h-2 w-24 rounded-full bg-slate-700"/></div></div>;
}

function InsightsVisual() {
  return <div className="relative h-[315px]"><div className="absolute inset-x-[8%] top-4 h-64 rounded-t-[8rem] bg-gradient-to-b from-amber-100 to-amber-200"/><div className="absolute left-[6%] top-14 grid h-32 w-32 place-items-center rounded-full bg-white shadow-xl"><div className="grid h-24 w-24 place-items-center rounded-full [background:conic-gradient(#078fd1_0_38%,#43bde9_38%_68%,#d8f3ff_68%_100%)]"><div className="grid h-14 w-14 place-items-center rounded-full bg-white text-center"><span><b className="block text-lg">68%</b><small className="text-[9px] text-ink/45">Growth</small></span></div></div></div><div className="absolute right-[7%] top-8 w-[58%] rounded-2xl bg-white p-5 shadow-xl"><div className="flex items-end gap-2">{[38,62,48,76,58,88,100].map((h,i)=><span key={i} className="flex-1 rounded-t bg-gradient-to-t from-ocean to-emerald-300" style={{height:`${h}px`}}/>)}</div><div className="mt-3 flex items-center justify-between text-[10px] text-ink/40"><span>Mon</span><span>Revenue trend</span><span>Sun</span></div></div><div className="absolute bottom-5 left-[24%] flex w-[58%] items-center gap-3 rounded-xl bg-ink p-4 text-white shadow-xl"><BarChart3 className="h-6 w-6 text-emerald-300"/><div><p className="text-[10px] text-white/45">Actionable insight</p><p className="text-xs font-bold">UPI conversions increased 14%</p></div></div></div>;
}

function IntegrationsVisual() {
  return <div className="relative h-[315px]"><div className="absolute inset-x-[8%] top-4 h-64 rounded-t-[8rem] bg-gradient-to-b from-sky-100 to-blue-100"/><div className="absolute left-[7%] top-10 w-[62%] overflow-hidden rounded-2xl bg-[#071f2b] shadow-2xl"><div className="flex gap-1.5 border-b border-white/10 px-4 py-3">{["bg-red-400","bg-amber-400","bg-emerald-400"].map(c=><span key={c} className={`h-2 w-2 rounded-full ${c}`}/>)}</div><div className="space-y-2 p-5 font-mono text-[11px]"><p className="text-sky-300">POST <span className="text-white/60">/v1/payments</span></p><p className="text-emerald-300">{`{ amount: 5390,`}</p><p className="pl-4 text-white/45">currency: &quot;INR&quot;,</p><p className="pl-4 text-white/45">status: &quot;capture&quot;</p><p className="text-emerald-300">{`}`}</p></div></div><div className="absolute right-[5%] top-20 grid gap-3">{[CreditCard,WalletCards,Zap].map((Icon,i)=><span key={i} className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-ocean shadow-xl"><Icon className="h-6 w-6"/></span>)}</div><div className="absolute bottom-4 left-[30%] flex items-center gap-3 rounded-xl bg-white px-5 py-3 shadow-xl"><span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-100 text-emerald-700"><Check className="h-4 w-4"/></span><div><p className="text-xs font-bold">API connected</p><p className="text-[10px] text-ink/45">Ready for production</p></div></div></div>;
}

function MethodsVisual() {
  return <div className="relative h-[315px]"><div className="absolute inset-x-[8%] top-4 h-64 rounded-t-[8rem] bg-gradient-to-b from-violet-100 to-sky-100"/><div className="absolute left-[9%] top-8 w-44 rounded-[1.8rem] bg-ink p-4 text-white shadow-2xl"><div className="mx-auto h-1.5 w-14 rounded-full bg-white/15"/><p className="mt-6 text-xs text-white/45">Choose payment mode</p><div className="mt-4 grid gap-2">{[[CreditCard,"Cards"],[Smartphone,"UPI"],[Landmark,"Net Banking"]].map(([Icon,label])=><div key={label} className="flex items-center gap-2 rounded-lg bg-white/10 p-2.5 text-xs font-bold"><Icon className="h-4 w-4 text-emerald-300"/>{label}</div>)}</div></div><div className="absolute right-[6%] top-10 grid grid-cols-2 gap-3">{[["UPI","Instant"],["EMI","Flexible"],["Payouts","Business"],["Cards","Secure"]].map(([title,text],i)=><div key={title} className={`w-28 rounded-2xl p-4 shadow-xl ${i===0?"bg-ocean text-white":"bg-white text-ink"}`}><p className="font-extrabold">{title}</p><p className={`mt-1 text-[10px] ${i===0?"text-white/60":"text-ink/45"}`}>{text}</p></div>)}</div></div>;
}

const visuals = { payments: PaymentsVisual, insights: InsightsVisual, integrations: IntegrationsVisual, methods: MethodsVisual };
const copy = {
  payments: ["Manage your money, your way", "Use payment products that match your business and manage every transaction securely."],
  insights: ["Insights to power your business", "Keep a clear view of inflows, outflows and performance with actionable business data."],
  integrations: ["Easy integrations to go live in minutes", "Connect using developer-friendly APIs, hosted experiences and reliable webhooks."],
  methods: ["Total flexibility in payment modes", "Offer cards, UPI, net banking, EMI and more through one consistent experience."],
};

export function GrowthShowcase() {
  const [active,setActive] = useState("payments");
  useEffect(() => {
    const featureKeys = features.map((feature) => feature[2]);
    const timer = window.setInterval(() => {
      setActive((current) => featureKeys[(featureKeys.indexOf(current) + 1) % featureKeys.length]);
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);
  const Visual = visuals[active];
  return <section className="bg-gradient-to-br from-[#f2faff] via-[#faf7ff] to-[#fff8ed] py-20 sm:py-24"><div className="page-shell grid items-center gap-12 lg:grid-cols-2"><div><p className="eyebrow">Built beyond payments</p><h2 className="mt-4 max-w-xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">Unlock access to limitless business growth.</h2><p className="mt-5 max-w-xl text-base leading-7 text-ink/55">We&apos;re more than a payments partner. Build smoother processes and deliver an outstanding customer experience.</p><div className="mt-9 grid gap-3 sm:grid-cols-2">{features.map(([Icon,label,key],index)=><button key={key} type="button" onClick={()=>setActive(key)} className={`flex min-h-[82px] items-center gap-3 rounded-2xl border p-4 text-left transition-all ${active===key?"border-ocean/30 bg-white text-ocean shadow-[0_10px_28px_rgba(7,59,76,.08)]":index===0?"border-sky-200 bg-sky-50/80 text-ink hover:bg-white":index===1?"border-violet-200 bg-violet-50/80 text-ink hover:bg-white":index===2?"border-emerald-200 bg-emerald-50/80 text-ink hover:bg-white":"border-amber-200 bg-amber-50/80 text-ink hover:bg-white"}`}><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${active===key?"bg-ocean text-white":index===1?"bg-violet-100 text-violet-600":index===2?"bg-emerald-100 text-emerald-700":index===3?"bg-amber-100 text-amber-700":"bg-sky-100 text-sky-600"}`}><Icon className="h-5 w-5"/></span><span className="text-sm font-bold leading-5">{label}</span></button>)}</div></div><div key={active} className="growth-panel-in relative mx-auto w-full max-w-[570px]"><div className="rounded-[2rem] bg-gradient-to-br from-white/55 via-sky-100/65 to-violet-100/55 p-5 pb-0 sm:p-7 sm:pb-0"><Visual/></div><div className="relative px-3 pt-6 sm:px-6"><h3 className="text-xl font-extrabold">{copy[active][0]}</h3><p className="mt-2 max-w-md text-sm leading-6 text-ink/55">{copy[active][1]}</p></div></div></div></section>;
}
