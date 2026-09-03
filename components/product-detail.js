import Link from "next/link";
import { AppIcon } from "@/components/app-icon";

export function ProductDetail({ groupKey, group, product }) {
  return (
    <>
      <section className="py-20 sm:py-28">
        <div className="page-shell grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <Link href={`/${groupKey}`} className="eyebrow">← All {group.label}</Link>
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-7xl">{product.name}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/65">{product.details}</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link href="/contact" className="button-primary">Get started →</Link><Link href={`/${groupKey}`} className="button-light">Compare options</Link></div>
          </div>
          <div className="rounded-[2rem] bg-ink p-8 text-white shadow-soft sm:p-10">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-lime text-white"><AppIcon name={product.icon} className="h-8 w-8" /></span>
            <p className="mt-9 text-sm font-bold uppercase tracking-[.2em] text-lime">What you get</p>
            <ul className="mt-5 space-y-4">{product.benefits.map((benefit) => <li key={benefit} className="flex items-center gap-3 border-b border-white/10 pb-4"><span className="grid h-6 w-6 place-items-center rounded-full bg-lime text-white"><AppIcon name="Check" className="h-3.5 w-3.5" /></span>{benefit}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="bg-lime py-16"><div className="page-shell flex flex-col justify-between gap-6 md:flex-row md:items-center"><h2 className="text-3xl font-extrabold tracking-tight">Need help choosing the right option?</h2><Link href="/contact" className="button-primary shrink-0">Talk to our team →</Link></div></section>
    </>
  );
}
