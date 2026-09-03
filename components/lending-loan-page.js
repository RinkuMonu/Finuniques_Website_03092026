"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock3, CreditCard, FileCheck2, IndianRupee, ShieldCheck } from "lucide-react";

const icons = { CreditCard, FileCheck2, ShieldCheck, IndianRupee };

export function LendingLoanPage({
  eyebrow,
  title,
  description,
  amount,
  timeline,
  rate,
  features,
  steps,
}) {
  return (
    <main className="bg-[#fbfaf7] text-[#173b47]">
      <section className="relative overflow-hidden bg-[#073B4C] text-white">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[#e4f1f1] [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)]" />
        <div className="relative mx-auto grid max-w-[1580px] items-center gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1.05fr_.75fr] lg:px-16 lg:py-32">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }}>
            <p className="text-sm font-bold uppercase tracking-[.3em] text-cyan-300">{eyebrow}</p>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl font-bold leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-7xl">{title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">{description}</p>
            <Link href="/contact" className="mt-9 inline-flex items-center justify-center gap-2 rounded-md bg-[#80e0dc] px-7 py-4 text-sm font-bold text-[#173b47] transition hover:bg-white">Speak with our team <ArrowRight className="h-4 w-4" /></Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.12 }} className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[36px] border border-cyan-300/20" />
            <div className="relative rounded-xl bg-white p-6 text-[#073B4C] shadow-[0_30px_80px_rgba(0,0,0,.24)]">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5"><div><p className="text-xs font-black uppercase tracking-[.16em] text-[#0797D0]">Loan snapshot</p><p className="mt-2 text-2xl font-black">{amount}</p></div><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#073B4C] text-cyan-300"><IndianRupee className="h-6 w-6" /></span></div>
              <div className="mt-5 grid gap-3"><div className="flex items-center justify-between rounded-xl bg-[#EEF8FC] p-4"><span className="text-sm font-bold text-slate-500">Indicative rate</span><strong>{rate}</strong></div><div className="flex items-center justify-between rounded-xl bg-[#EEF8FC] p-4"><span className="text-sm font-bold text-slate-500">Repayment</span><strong>{timeline}</strong></div></div>
              <div className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-emerald-50 py-3 text-sm font-bold text-emerald-700"><CheckCircle2 className="h-4 w-4" /> Application ready to review</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[#CFE5EE] bg-white"><div className="mx-auto grid max-w-[1580px] divide-y divide-[#CFE5EE] px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-10 lg:px-16"><div className="flex items-center gap-4 py-6 sm:justify-center"><Clock3 className="h-5 w-5 text-[#0797D0]" /><div><p className="text-2xl font-black">Fast</p><p className="text-sm font-semibold text-[#527582]">Digital application</p></div></div><div className="flex items-center gap-4 py-6 sm:justify-center"><FileCheck2 className="h-5 w-5 text-[#0797D0]" /><div><p className="text-2xl font-black">Clear</p><p className="text-sm font-semibold text-[#527582]">Document checks</p></div></div><div className="flex items-center gap-4 py-6 sm:justify-center"><ShieldCheck className="h-5 w-5 text-[#0797D0]" /><div><p className="text-2xl font-black">Secure</p><p className="text-sm font-semibold text-[#527582]">Controlled disbursal</p></div></div></div></section>

      <section className="py-24 lg:py-32"><div className="mx-auto max-w-[1580px] px-6 sm:px-10 lg:px-16"><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[.3em] text-[#0797D0]">Designed for your journey</p><h2 className="mt-5 font-serif text-4xl font-bold tracking-tight sm:text-5xl">A simpler path from application to repayment.</h2></div><div className="mt-14 grid gap-6 md:grid-cols-3">{features.map(([icon, heading, text], index) => { const Icon = icons[icon] || CreditCard; return <motion.article key={heading} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="border-t-2 border-[#078f9a] bg-white p-8 shadow-[0_16px_40px_rgba(7,59,76,.06)]"><span className="grid h-14 w-14 place-items-center bg-[#e4f1f1] text-[#078f9a]"><Icon className="h-6 w-6" /></span><h3 className="mt-9 text-xl font-bold">{heading}</h3><p className="mt-4 leading-7 text-[#527582]">{text}</p></motion.article>; })}</div></div></section>

      <section className="bg-[#073B4C] py-24 text-white lg:py-28"><div className="mx-auto max-w-[1580px] px-6 sm:px-10 lg:px-16"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-sm font-bold uppercase tracking-[.3em] text-cyan-300">How it works</p><h2 className="mt-5 font-serif text-4xl font-bold tracking-tight sm:text-5xl">Move forward with clarity.</h2></div><div className="grid gap-5 sm:grid-cols-3">{steps.map(([number, heading, text]) => <article key={number} className="border-t border-white/20 pt-6"><p className="text-4xl font-black text-cyan-300/60">{number}</p><h3 className="mt-8 text-xl font-bold">{heading}</h3><p className="mt-3 leading-7 text-white/60">{text}</p></article>)}</div></div></div></section>

      <section className="bg-[#EEF8FC] py-20"><div className="mx-auto flex max-w-[1580px] flex-col justify-between gap-8 px-6 sm:px-10 md:flex-row md:items-center lg:px-16"><div><p className="text-sm font-bold uppercase tracking-[.3em] text-[#0797D0]">Start your next step</p><h2 className="mt-4 font-serif text-4xl font-bold tracking-tight sm:text-5xl">Build a lending journey people trust.</h2></div><Link href="/signup" className="inline-flex w-fit items-center gap-2 rounded-md bg-[#078f9a] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#173b47]">Get started <ArrowRight className="h-4 w-4" /></Link></div></section>
    </main>
  );
}
