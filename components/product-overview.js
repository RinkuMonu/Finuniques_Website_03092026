import Link from "next/link";
import { AppIcon } from "@/components/app-icon";

export function ProductOverview({ groupKey, group }) {
  return (
    <>
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="page-shell">
          <p className="eyebrow text-lime">{group.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl">{group.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">{group.description}</p>
        </div>
      </section>
      <section className="bg-white py-20 sm:py-24">
        <div className="page-shell">
          <div className="grid gap-6 md:grid-cols-3">
            {group.products.map((product) => (
              <Link key={product.slug} href={`/${groupKey}/${product.slug}`} className="group rounded-3xl border border-ink/10 bg-cloud p-7 transition hover:-translate-y-1 hover:shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-lime text-white"><AppIcon name={product.icon} className="h-6 w-6" /></span>
                <h2 className="mt-8 text-2xl font-bold">{product.name}</h2>
                <p className="mt-3 leading-7 text-ink/60">{product.summary}</p>
                <span className="mt-8 inline-flex font-bold text-emerald-700">Explore <span className="ml-2 transition group-hover:translate-x-1">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
