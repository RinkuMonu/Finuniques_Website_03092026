import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, Check, Code2, Handshake, LineChart, Megaphone, Network, ShieldCheck, Users } from "lucide-react";

export const metadata = {
  title: "Partner with Us",
  description: "Partner with Finunique to deliver payments, payouts and merchant financial infrastructure to more businesses.",
};

const partnerTypes = [
  [Network, "Referral partners", "Introduce growing businesses to Finunique and build a recurring partnership around qualified merchant relationships.", ["Simple referral process", "Partner visibility", "Dedicated relationship support"]],
  [Code2, "Technology partners", "Connect your software, commerce platform or business product with Finunique payment infrastructure.", ["API-first integration", "Technical enablement", "Joint solution planning"]],
  [Building2, "Channel partners", "Bring payment and payout capabilities to your merchant network with structured commercial support.", ["Merchant onboarding support", "Portfolio-level insights", "Scalable engagement model"]],
  [Megaphone, "Strategic alliances", "Work with us on new distribution models, industry solutions and long-term market opportunities.", ["Joint go-to-market", "Custom solution design", "Executive sponsorship"]],
];

const steps = [
  ["01", "Share your opportunity", "Tell us about your organisation, audience and the partnership model you are exploring."],
  ["02", "Design the partnership", "We align on use cases, responsibilities, commercials and the experience for referred merchants."],
  ["03", "Complete enablement", "Your business and technical teams receive the material, access and support needed to launch."],
  ["04", "Grow together", "Track opportunities, support merchants and review performance with the Finunique partner team."],
];

export default function PartnersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div className="absolute -right-20 -top-20 h-96 w-96 animate-drift rounded-full bg-ocean/25 blur-3xl" />
        <div className="page-shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div><p className="eyebrow text-sky-300">Finunique partner network</p><h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[1.03] tracking-[-.045em] sm:text-7xl">Let&apos;s help more businesses move money better.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">Partner with Finunique to bring reliable payments, payouts and merchant operations to the businesses you serve.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#partner-form" className="rounded-full bg-ocean px-7 py-3.5 text-sm font-bold transition hover:bg-sky-500">Become a partner →</a><a href="#models" className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold transition hover:bg-white/10">Explore partnership models</a></div></div>
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-7 backdrop-blur sm:p-9"><div className="flex items-center gap-4"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-sky-400 text-ink"><Handshake className="h-7 w-7" /></span><div><p className="text-sm text-white/50">Built for collaboration</p><p className="text-xl font-extrabold">One network. Shared growth.</p></div></div><div className="mt-8 grid gap-3 sm:grid-cols-2">{["Merchant-first solutions","Commercial alignment","Technical enablement","Dedicated support"].map((item)=><div key={item} className="flex items-center gap-3 rounded-xl bg-white/10 p-4 text-sm font-semibold"><Check className="h-4 w-4 text-sky-300" />{item}</div>)}</div></div>
        </div>
      </section>

      <section id="models" className="scroll-mt-28 py-20 sm:py-28">
        <div className="page-shell"><div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Ways to partner</p><h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Choose a model built around your strengths.</h2><p className="mt-5 text-lg leading-8 text-ink/55">Whether you advise merchants, build software or operate a distribution network, we can shape a partnership around the value you bring.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2">{partnerTypes.map(([Icon,title,text,points])=><article key={title} className="rounded-[2rem] border border-ink/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-ocean/30 hover:shadow-soft"><span className="grid h-13 w-13 h-14 place-items-center rounded-2xl bg-cloud text-ocean"><Icon className="h-6 w-6" /></span><h3 className="mt-7 text-2xl font-extrabold">{title}</h3><p className="mt-3 leading-7 text-ink/55">{text}</p><ul className="mt-6 grid gap-3 text-sm font-semibold">{points.map((point)=><li key={point} className="flex items-center gap-3"><BadgeCheck className="h-4 w-4 text-ocean" />{point}</li>)}</ul></article>)}</div></div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="page-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Why partner with Finunique</p><h2 className="mt-4 text-4xl font-extrabold tracking-tight">A partnership your team can build on.</h2><p className="mt-5 leading-7 text-ink/55">We combine merchant-focused products with practical support across sales, onboarding, integration and ongoing account operations.</p></div><div className="grid gap-5 sm:grid-cols-2">{[[LineChart,"Grow your offering","Add valuable payment capabilities without building the infrastructure yourself."],[Users,"Support your merchants","Give businesses a clear route from discovery through onboarding and launch."],[ShieldCheck,"Build with confidence","Work with secure systems, controlled access and transparent processes."],[Handshake,"Stay aligned","Collaborate with a partner team focused on durable, mutually valuable growth."]].map(([Icon,title,text])=><div key={title} className="rounded-3xl bg-cloud p-6"><Icon className="h-6 w-6 text-ocean"/><h3 className="mt-5 text-lg font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-ink/50">{text}</p></div>)}</div></div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="page-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow">How it works</p><h2 className="mt-4 text-4xl font-extrabold tracking-tight">From first conversation to shared growth.</h2></div><div className="divide-y divide-ink/10 border-y border-ink/10">{steps.map(([number,title,text])=><div key={number} className="grid gap-4 py-7 sm:grid-cols-[70px_1fr]"><span className="font-extrabold text-ocean">{number}</span><div><h3 className="text-xl font-extrabold">{title}</h3><p className="mt-2 leading-7 text-ink/55">{text}</p></div></div>)}</div></div>
      </section>

      <section id="partner-form" className="scroll-mt-28 bg-ink py-20 text-white sm:py-24">
        <div className="page-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow text-sky-300">Start a partnership</p><h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Tell us what we can build together.</h2><p className="mt-5 text-lg leading-8 text-white/55">Share a little about your organisation and partnership idea. Our team will review the opportunity and get in touch.</p><div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5"><p className="text-sm font-bold">Prefer email?</p><a href="mailto:partners@finunique.example" className="mt-2 inline-flex items-center gap-2 text-sky-300">partners@finunique.example <ArrowRight className="h-4 w-4" /></a></div></div><form className="rounded-[2rem] bg-white p-7 text-ink shadow-soft sm:p-10"><div className="grid gap-5 sm:grid-cols-2"><Field label="First name" name="firstName"/><Field label="Last name" name="lastName"/><Field label="Work email" name="email" type="email"/><Field label="Phone number" name="phone" type="tel"/><Field label="Organisation" name="organisation"/><Field label="Website" name="website" type="url"/></div><label className="mt-5 block text-sm font-semibold">Partnership type<select name="partnerType" className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 outline-none focus:border-ocean"><option>Referral partner</option><option>Technology partner</option><option>Channel partner</option><option>Strategic alliance</option><option>Not sure yet</option></select></label><label className="mt-5 block text-sm font-semibold">Tell us about the opportunity<textarea name="message" required className="mt-2 min-h-32 w-full rounded-xl border border-ink/15 px-4 py-3.5 outline-none focus:border-ocean" placeholder="Your audience, use case, expected reach or integration idea" /></label><label className="mt-5 flex items-start gap-3 text-xs leading-5 text-ink/55"><input required type="checkbox" className="mt-1" />I agree that Finunique may contact me about this partnership enquiry.</label><button type="submit" className="button-primary mt-7 w-full">Submit partnership enquiry →</button></form></div>
      </section>

      <section className="bg-ocean py-14 text-white"><div className="page-shell flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><p className="text-sm font-bold uppercase tracking-wider text-white/55">Looking for payment services?</p><h2 className="mt-2 text-3xl font-extrabold">Explore Finunique for your own business.</h2></div><Link href="/payments" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-ink">View products →</Link></div></section>
    </>
  );
}

function Field({ label, name, type = "text" }) {
  return <label className="block text-sm font-semibold">{label}<input required name={name} type={type} className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3.5 outline-none transition focus:border-ocean focus:ring-4 focus:ring-ocean/10" /></label>;
}
