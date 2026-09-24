import Image from "next/image";
import Link from "next/link";
import aboutData from "@/data/about.json";

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
          <div className="relative min-h-[12rem] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/finunique-hero-dashboard.png"
              alt="Payment terminal, card and security controls representing Finunique payment infrastructure"
              fill
              className="object-contain"
              sizes="(min-width: 1924px) 32vw, 80vw"
            />
          </div>
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

      {/* Stats Section */}
      <section className="bg-ink py-16 sm:py-20 text-white">
        <div className="page-shell">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:divide-x divide-white/10">
            {aboutData.stats.map((stat, i) => (
              <div key={i} className="px-4 text-center md:first:pl-0 md:last:pr-0">
                <p className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Timeline Section */}
      <section className="py-20 sm:py-28 bg-[#f8fbfd]">
        <div className="page-shell max-w-4xl">
          <div className="text-center mb-16">
            <p className="eyebrow text-ocean">Our Journey</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">How we got here.</h2>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-ocean/20 before:to-transparent">
            {aboutData.storyTimeline.map((item, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-ocean text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="h-3 w-3 bg-white rounded-full"></span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-ink/5 bg-white shadow-sm transition hover:shadow-md hover:border-ocean/20">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-xl text-ink">{item.title}</h3>
                    <span className="text-sm font-bold text-ocean bg-ocean/10 px-3 py-1 rounded-full">{item.year}</span>
                  </div>
                  <p className="text-ink/65 leading-7">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="page-shell">
          <div className="text-center mb-16">
            <p className="eyebrow text-ocean">Leadership</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Meet the team.</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-ink/70">Industry veterans combining deep financial expertise with world-class engineering.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {aboutData.team.map((member, i) => (
              <div key={i} className="group text-center">
                <div className="relative mx-auto w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-[#f7fbfd] shadow-lg transition-transform duration-300 group-hover:scale-105">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-bold text-ink">{member.name}</h3>
                <p className="text-sm text-ink/60 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Culture Section */}
      <section className="py-20 sm:py-28 bg-slate-50 overflow-hidden">
        <div className="page-shell">
          <div className="mb-12 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-ocean">Life at Finunique</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Building the future of finance, together.</h2>
            </div>
            <Link href="/careers" className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-ocean hover:text-ink transition-colors">
              View open roles →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aboutData.cultureImages.map((src, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-2xl shadow-sm ${i === 0 || i === 3 ? 'md:col-span-2 md:row-span-2 h-64 md:h-[400px]' : 'h-32 md:h-[192px]'}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="Office culture" className="object-cover w-full h-full transition duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-16 bg-white border-b border-ink/5">
        <div className="page-shell">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-ink/40 mb-8">Backed by world-class investors</p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            {aboutData.investors.map((investor, i) => (
              <div key={i} className="flex items-center gap-3 rounded-full border border-ink/10 bg-[#f8fbfd] px-5 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-ocean/30 grayscale hover:grayscale-0">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={investor.logo} alt={investor.name} className="h-7 w-7 rounded-full object-cover shadow-sm bg-white" />
                <span className="font-extrabold text-ink">{investor.name}</span>
              </div>
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
