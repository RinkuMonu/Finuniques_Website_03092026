import Link from "next/link";
import { ArrowRight, Check, FileCheck2, Headphones, ShieldCheck, Sparkles } from "lucide-react";
import { AppIcon } from "@/components/app-icon";
import { ProductHero } from "@/components/product-hero";

const defaultStats = [
  ["01", "One connected flow", "From premium collection to settlement."],
  ["02", "Clearer renewals", "Keep every reminder and payment on track."],
  ["03", "Less manual work", "Give teams a cleaner view of every policy."],
];

export function InsurancePage({ eyebrow, title, description, accent, features, workflow, stats = defaultStats }) {
  return (
    <>
      <ProductHero eyebrow={eyebrow} title={title} description={description} primaryLabel="Talk to our team" primaryHref="/contact" />

      <section className="border-b border-ink/10 bg-white py-6">
        <div className="page-shell grid gap-4 md:grid-cols-3 md:divide-x md:divide-ink/10">
          {stats.map(([number, heading, text]) => (
            <div key={heading} className="flex gap-4 px-0 md:px-8 first:md:pl-0">
              <span className="pt-1 text-xs font-black tracking-[0.16em] text-ocean">{number}</span>
              <div><p className="font-black text-ink">{heading}</p><p className="mt-1 text-sm leading-6 text-ink/55">{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">The insurance advantage</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-ink sm:text-5xl">{accent}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/60">Build a dependable payment experience around the moments that matter: buying a policy, paying a premium, renewing on time and resolving a claim.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map(([icon, heading, text]) => (
              <article key={heading} className="group rounded-3xl border border-ink/10 bg-cloud p-7 transition hover:-translate-y-1 hover:border-ocean/30 hover:shadow-[0_18px_50px_rgba(7,59,76,.08)]">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ocean text-white transition group-hover:bg-ink"><AppIcon name={icon} /></span>
                <h3 className="mt-7 text-xl font-black text-ink">{heading}</h3>
                <p className="mt-3 leading-7 text-ink/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#e1f3f7] py-20 sm:py-24">
        <div className="page-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">From quote to cover</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-ink sm:text-5xl">Make every policy moment feel simple.</h2>
            <p className="mt-5 max-w-lg leading-7 text-ink/60">Give customers the confidence to complete a payment and give operations teams the control to see what happens next.</p>
            <Link href="/contact" className="button-primary mt-8 gap-2">Explore insurance solutions <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="relative rounded-[2rem] bg-ink p-5 text-white shadow-[0_25px_70px_rgba(7,59,76,.18)] sm:p-8">
            <div className="absolute right-8 top-8 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300 text-ink"><Sparkles className="h-5 w-5" /></div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">A better policy journey</p>
            <div className="mt-8 space-y-0">
              {workflow.map(([number, heading, text], index) => (
                <div key={number} className="relative grid grid-cols-[42px_1fr] gap-4 pb-8 last:pb-0">
                  <div className="relative z-10 grid h-9 w-9 place-items-center rounded-full border border-cyan-200/50 bg-ink text-sm font-black text-cyan-200">{number}</div>
                  <div><h3 className="font-black">{heading}</h3><p className="mt-1 text-sm leading-6 text-white/60">{text}</p></div>
                  {index < workflow.length - 1 && <span className="absolute left-[18px] top-9 h-full w-px bg-cyan-200/25" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="page-shell grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div><p className="eyebrow">Built for trust</p><h2 className="mt-4 text-4xl font-black tracking-tight text-ink">Confidence at every handoff.</h2></div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[[ShieldCheck, "Secure", "Protected payment infrastructure."], [FileCheck2, "Visible", "Reconciliation without guesswork."], [Headphones, "Helpful", "Support for your teams and customers."]].map(([Icon, heading, text]) => (
              <div key={heading} className="border-t-2 border-ocean pt-5"><Icon className="h-5 w-5 text-ocean" /><h3 className="mt-4 font-black text-ink">{heading}</h3><p className="mt-2 text-sm leading-6 text-ink/55">{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ocean py-16 text-white">
        <div className="page-shell flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <div><p className="text-sm font-black uppercase tracking-[0.2em] text-white/60">Ready when you are</p><h2 className="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">Build a more dependable insurance experience.</h2></div>
          <Link href="/contact" className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-ink transition hover:-translate-y-0.5">Talk to our team <Check className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}