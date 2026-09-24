import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "About | Finunique" };

const pillars = [
  ["Merchant first", "Products shaped around revenue, cash flow and operational clarity."],
  ["Built for trust", "Security, reliability and clear controls at every layer."],
  ["Ready to scale", "Infrastructure that grows from first payment to complex financial operations."],
];

const values = [
  ["Payments engineered for businesses", "We build payment flows that reduce friction, improve cash conversion and fit into your existing operations."],
  ["One platform, many capabilities", "Acceptance, payouts, verification and risk tools work together so teams spend less time reconciling and more time growing."],
  ["Trusted by operators", "Our product decisions are guided by merchant feedback, financial controls and the real-world complexity of transaction operations."],
];

export default function About() {
  return (
    <>
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="eyebrow text-sky-300">About Finunique</p>
            <h1 className="mt-5 text-5xl font-extrabold tracking-tight sm:text-7xl">Payments infrastructure for a simpler business experience.</h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
              Finunique makes financial operations easier for growing businesses. We bring payment acceptance, verification, payouts and operational controls into a single platform so teams can focus on customers instead of fragmented systems.
            </p>
          </div>
          {/* <div className="relative min-h-[12rem] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/finunique-hero-dashboard.png"
              alt="Payment terminal, card and security controls representing Finunique payment infrastructure"
              fill
              className="object-contain"
              sizes="(min-width: 1924px) 32vw, 80vw"
            />
          </div> */}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="page-shell grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/mission.jpg"
              alt="Payment terminal, contactless card and security shield representing reliable payment infrastructure"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </div>
          <div>
            <p className="eyebrow text-ocean">Our mission</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Make every financial interaction feel simpler.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/70">
                We believe every business deserves payment infrastructure that is reliable, transparent and built for real operating teams.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="page-shell">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map(([heading, description]) => (
              <article key={heading} className="rounded-3xl border border-ink/10 bg-white p-8 shadow-soft">
                <h2 className="text-2xl font-extrabold">{heading}</h2>
                <p className="mt-4 leading-7 text-ink/65">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[.9fr_.8fr]">
          <div>
            <p className="eyebrow text-ocean">What we value</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Financial services that help businesses move faster.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70">
              Our team combines product design, financial operations and developer-friendly APIs to remove friction across each step of the payment lifecycle.
            </p>
          </div>
          <div className="grid gap-4">
            {values.map(([heading, description]) => (
              <article key={heading} className="rounded-3xl border border-ink/10 bg-white p-8">
                <h3 className="text-xl font-bold">{heading}</h3>
                <p className="mt-4 leading-7 text-ink/65">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="page-shell rounded-[2rem] border border-ink/10 bg-ocean p-10 text-white sm:p-14">
          <div className="md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.3em] text-white/70">Let’s build together</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">See how Finunique fits your business.</h2>
            </div>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-bold text-ink transition hover:bg-slate-100 md:mt-0">
              Talk to our team →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
