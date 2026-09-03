"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BookOpen, Check, Code2, Copy, Expand, FlaskConical, Play, Workflow } from "lucide-react";

const code = `const payment = await finunique.payments.create({
  amount: 5390,
  currency: "INR",
  method: "upi",
  customer: {
    name: "Acme Business",
    email: "finance@acme.in"
  }
});

console.log(payment.status);`;

export function DeveloperInfrastructure() {
  const [visibleCode, setVisibleCode] = useState("");

  useEffect(() => {
    let index = 0;
    let timer;
    const type = () => {
      if (index <= code.length) {
        setVisibleCode(code.slice(0, index));
        index += 1;
        timer = window.setTimeout(type, 20);
      } else {
        timer = window.setTimeout(() => {
          index = 0;
          setVisibleCode("");
          type();
        }, 2200);
      }
    };
    type();
    return () => window.clearTimeout(timer);
  }, [code]);

  const lines = visibleCode.split("\n");
  const complete = visibleCode.length === code.length;

  return (
    <section className="relative overflow-hidden bg-[#05090d] py-12 text-white sm:py-14">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-ocean/10 blur-3xl" />
      <div className="page-shell relative">
        <p className="text-xs font-extrabold uppercase tracking-[.22em] text-cyan-300">Developer infrastructure</p>
        <h2 className="mt-3 max-w-4xl text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">Build once. Power every money movement.<span className="mt-1 block font-mono text-cyan-300">&lt;integrate. launch. scale. /&gt;</span></h2>

        <div className="mt-9 grid items-stretch gap-7 lg:grid-cols-[.38fr_.62fr]">
          <div className="grid min-h-[270px] w-full grid-cols-2 grid-rows-2 gap-3 self-stretch">
            {[[BookOpen,"API Documentation","Explore Finunique APIs, endpoints, request formats and response examples."],[Workflow,"Integration Guides","Follow implementation and onboarding guides."],[FlaskConical,"Sandbox","Test payment and verification workflows safely."]].map(([Icon,title,text], index) => <Link href="/developers" key={title} className={`group flex min-w-0 flex-col items-start rounded-xl border border-white/10 bg-white/[.045] p-4 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[.08] ${index === 0 ? "row-span-2" : ""}`}><span className={`grid shrink-0 place-items-center rounded-lg bg-cyan-300/10 text-cyan-300 transition group-hover:bg-cyan-300 group-hover:text-ink ${index === 0 ? "h-10 w-10" : "h-8 w-8"}`}><Icon className={index === 0 ? "h-5 w-5" : "h-4 w-4"}/></span><span className="mt-auto min-w-0"><strong className={`block leading-5 ${index === 0 ? "text-base" : "text-xs sm:text-sm"}`}>{title}</strong><span className={`mt-1.5 block text-white/40 ${index === 0 ? "text-xs leading-5" : "text-[10px] leading-4"}`}>{text}</span></span></Link>)}
          </div>

          <div className="overflow-hidden rounded-xl border border-white/15 bg-[#0b1720] shadow-[0_24px_60px_rgba(0,0,0,.3)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-[#101f29] px-4 py-2.5">
              <div className="flex items-center gap-3"><span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">JavaScript</span><span className="hidden text-[10px] text-white/35 sm:inline">POST /v1/payments</span></div>
              <div className="flex items-center gap-3 text-white/45"><Copy className="h-3.5 w-3.5"/><span className="grid h-5 w-5 place-items-center rounded-full bg-orange-400 text-ink"><Play className="h-2.5 w-2.5 fill-current"/></span><Expand className="h-3.5 w-3.5"/></div>
            </div>
            <div className="relative min-h-[270px] p-5 font-mono text-[11px] leading-5 sm:p-6 sm:text-[12px]">
              {lines.map((line, index) => <div key={index} className="flex"><span className="mr-5 w-5 select-none text-right text-white/25">{index + 1}</span><span className="whitespace-pre-wrap text-cyan-100">{line}{index === lines.length - 1 && !complete && <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-cyan-300 align-middle"/>}</span></div>)}
              <div className={`absolute bottom-5 right-5 rounded-lg border border-emerald-300/20 bg-[#0d2228] px-4 py-2.5 shadow-xl transition-all duration-500 ${complete ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}><div className="flex items-center gap-2 text-[11px] font-bold text-emerald-300"><Check className="h-3.5 w-3.5"/> 200 · Payment created</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
