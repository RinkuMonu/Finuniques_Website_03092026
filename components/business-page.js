import Link from "next/link";
import { AppIcon } from "@/components/app-icon";
import { ProductHero } from "@/components/product-hero";

export function BusinessPage({
  eyebrow,
  title,
  description,
  primary = "Talk to sales",
  features,
  steps,
  accent = "Payments that work as hard as your business.",
  hero = {},
}) {
  return (
    <>
      <ProductHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        primaryLabel={primary}
        {...hero}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Built for scale</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">{accent}</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map(([icon, heading, text]) => (
              <article key={heading} className="rounded-3xl border border-ink/10 bg-cloud p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ocean text-white">
                  <AppIcon name={icon} />
                </span>
                <h3 className="mt-7 text-xl font-extrabold">{heading}</h3>
                <p className="mt-3 leading-7 text-ink/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {steps && (
        <section className="py-20">
          <div className="page-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="eyebrow">How it works</p>
              <h2 className="mt-4 text-4xl font-extrabold">Go live without the friction.</h2>
            </div>
            <div className="divide-y divide-ink/10">
              {steps.map(([number, heading, text]) => (
                <div key={number} className="grid gap-3 py-7 sm:grid-cols-[70px_1fr]">
                  <span className="font-bold text-ocean">{number}</span>
                  <div>
                    <h3 className="text-xl font-extrabold">{heading}</h3>
                    <p className="mt-2 leading-7 text-ink/55">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-ocean py-16 text-white">
        <div className="page-shell flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-white/60">Build with Finunique</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Ready to power your next transaction?</h2>
          </div>
          <Link href="/contact" className="w-fit rounded-full bg-white px-6 py-3 text-sm font-bold text-ink">
            Talk to our team
          </Link>
        </div>
      </section>
    </>
  );
}
