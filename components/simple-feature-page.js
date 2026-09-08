import Link from "next/link";
import Image from "next/image";
import { AppIcon } from "@/components/app-icon";

export function SimpleFeaturePage({ eyebrow, title, description, features, action = "Get started", actionHref = "/contact" }) {
  return <><section className="bg-gradient-to-br from-ink via-ocean to-ink py-20 text-white sm:py-28"><div className="page-shell"><p className="eyebrow text-sky-200">{eyebrow}</p><h1 className="mt-5 max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{description}</p><Link href={actionHref} className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5">{action} →</Link></div></section><section className="bg-white py-20"><div className="page-shell grid gap-5 md:grid-cols-3">{features.map(([icon, heading, text, image]) => <article key={heading} className="overflow-hidden rounded-3xl border border-ink/10 bg-cloud"><div className="p-7"><Image src={image} alt="" width={1200} height={675} className="mb-7 aspect-[16/9] w-full rounded-2xl object-cover" /><h2 className="text-xl font-extrabold">{heading}</h2><p className="mt-3 leading-7 text-ink/60">{text}</p></div></article>)}</div></section></>;
}
