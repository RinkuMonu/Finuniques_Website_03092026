import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Handshake,
  LineChart,
  Network,
  ShieldCheck,
  Landmark,
  Banknote,
} from "lucide-react";

export const metadata = {
  title: "Banking Partners",
  description:
    "Partner with Finunique to create stronger banking and financial ecosystems through reliable payment, payout and banking infrastructure.",
};

const partnerTypes = [
  [
    Landmark,
    "Banking Partners",
    "Collaborate with Finunique to deliver reliable payment, payout and financial infrastructure to businesses and customers.",
    [
      "Banking infrastructure collaboration",
      "Secure financial connectivity",
      "Long-term strategic partnership",
    ],
  ],
  [
    Banknote,
    "Payment & Settlement Partners",
    "Work with Finunique to enable efficient payment processing, settlements and fund movement across business ecosystems.",
    [
      "Payment processing support",
      "Settlement capabilities",
      "Efficient fund movement",
    ],
  ],
  [
    Network,
    "Financial Network Partners",
    "Connect banking capabilities with Finunique's technology ecosystem to create accessible and scalable financial solutions.",
    [
      "Connected financial ecosystem",
      "Scalable infrastructure",
      "Seamless financial connectivity",
    ],
  ],
  [
    Handshake,
    "Strategic Banking Alliances",
    "Build long-term partnerships around innovative financial products, distribution opportunities and evolving business requirements.",
    [
      "Joint solution development",
      "Strategic collaboration",
      "Shared growth opportunities",
    ],
  ],
];

const steps = [
  [
    "01",
    "Tell us about your institution",
    "Share your organisation, banking capabilities, services and the partnership opportunity you would like to explore with Finunique.",
  ],
  [
    "02",
    "Define the opportunity",
    "Our teams work together to understand the use case, operational requirements, responsibilities and commercial structure.",
  ],
  [
    "03",
    "Complete onboarding",
    "Work with our teams to complete the required documentation, compliance processes, technical requirements and partnership enablement.",
  ],
  [
    "04",
    "Launch & grow",
    "Launch the partnership and work together to expand financial capabilities, improve customer experiences and scale the relationship.",
  ],
];

export default function BankingPartnersPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div className="absolute -right-20 -top-20 h-96 w-96 animate-drift rounded-full bg-ocean/25 blur-3xl" />

        <div className="page-shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="eyebrow text-sky-300">
              Finunique banking partner network
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[1.03] tracking-[-.045em] sm:text-7xl">
              Building stronger financial ecosystems together.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
              Partner with Finunique to connect banking capabilities with
              modern financial technology and deliver reliable payment,
              payout and financial solutions to businesses.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#partner-form"
                className="rounded-full bg-ocean px-7 py-3.5 text-sm font-bold transition hover:bg-sky-500"
              >
                Become a banking partner →
              </a>

              <a
                href="#models"
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold transition hover:bg-white/10"
              >
                Explore partnership models
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-7 backdrop-blur sm:p-9">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-sky-400 text-ink">
                <Landmark className="h-7 w-7" />
              </span>

              <div>
                <p className="text-sm text-white/50">
                  Built for collaboration
                </p>

                <p className="text-xl font-extrabold">
                  Banking. Technology. Growth.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Secure financial connectivity",
                "Reliable payment infrastructure",
                "Operational collaboration",
                "Long-term partnership support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/10 p-4 text-sm font-semibold"
                >
                  <Check className="h-4 w-4 text-sky-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP MODELS */}
      <section id="models" className="scroll-mt-28 py-20 sm:py-28">
        <div className="page-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Banking partnership models</p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Banking partnerships built for scale.
            </h2>

            <p className="mt-5 text-lg leading-8 text-ink/55">
              From payment processing and settlements to broader financial
              infrastructure, we collaborate with banking institutions to
              create dependable solutions for businesses and their customers.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {partnerTypes.map(([Icon, title, text, points]) => (
              <article
                key={title}
                className="rounded-[2rem] border border-ink/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-ocean/30 hover:shadow-soft"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-cloud text-ocean">
                  <Icon className="h-6 w-6" />
                </span>

                <h3 className="mt-7 text-2xl font-extrabold">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-ink/55">
                  {text}
                </p>

                <ul className="mt-6 grid gap-3 text-sm font-semibold">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3"
                    >
                      <BadgeCheck className="h-4 w-4 text-ocean" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="bg-white py-20 sm:py-24">
        <div className="page-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Why partner with Finunique</p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight">
              Create more value through connected banking.
            </h2>

            <p className="mt-5 leading-7 text-ink/55">
              Finunique brings together financial technology, business
              infrastructure and operational capabilities to help banking
              partners reach new opportunities and build better financial
              experiences.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              [
                Building2,
                "Expand your reach",
                "Connect with businesses and financial ecosystems that can benefit from your banking capabilities.",
              ],
              [
                Network,
                "Connect ecosystems",
                "Create seamless connections between banking infrastructure, payment networks and business platforms.",
              ],
              [
                ShieldCheck,
                "Operate securely",
                "Collaborate through controlled processes, secure connectivity and dependable financial operations.",
              ],
              [
                LineChart,
                "Grow together",
                "Develop scalable opportunities and build a long-term partnership focused on sustainable growth.",
              ],
            ].map(([Icon, title, text]) => (
              <div key={title} className="rounded-3xl bg-cloud p-6">
                <Icon className="h-6 w-6 text-ocean" />

                <h3 className="mt-5 text-lg font-extrabold">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-ink/50">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 sm:py-24">
        <div className="page-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="eyebrow">How it works</p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight">
              From partnership discussion to shared growth.
            </h2>

            <p className="mt-5 leading-7 text-ink/55">
              We work closely with our banking partners throughout discovery,
              onboarding, integration and launch to establish a strong
              foundation for long-term collaboration.
            </p>
          </div>

          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {steps.map(([number, title, text]) => (
              <div
                key={number}
                className="grid gap-4 py-7 sm:grid-cols-[70px_1fr]"
              >
                <span className="font-extrabold text-ocean">
                  {number}
                </span>

                <div>
                  <h3 className="text-xl font-extrabold">
                    {title}
                  </h3>

                  <p className="mt-2 leading-7 text-ink/55">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section
        id="partner-form"
        className="scroll-mt-28 bg-ink py-20 text-white sm:py-24"
      >
        <div className="page-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-sky-300">
              Become a banking partner
            </p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Let's build stronger financial connections.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/55">
              Tell us about your institution, banking capabilities and the
              partnership opportunity you would like to explore. Our team will
              review your enquiry and connect with you.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-bold">
                Interested in a banking partnership?
              </p>

              <a
                href="mailto:partners@finunique.example"
                className="mt-2 inline-flex items-center gap-2 text-sky-300"
              >
                partners@finunique.example
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <form className="rounded-[2rem] bg-white p-7 text-ink shadow-soft sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="First name"
                name="firstName"
              />

              <Field
                label="Last name"
                name="lastName"
              />

              <Field
                label="Work email"
                name="email"
                type="email"
              />

              <Field
                label="Phone number"
                name="phone"
                type="tel"
              />

              <Field
                label="Institution / Organisation"
                name="organisation"
              />

              <Field
                label="Website"
                name="website"
                type="url"
              />
            </div>

            <label className="mt-5 block text-sm font-semibold">
              Partnership type

              <select
                name="partnerType"
                className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 outline-none focus:border-ocean"
              >
                <option>Banking Partnership</option>
                <option>Payment & Settlement Partnership</option>
                <option>Financial Network Partnership</option>
                <option>Strategic Banking Alliance</option>
                <option>Other</option>
              </select>
            </label>

            <label className="mt-5 block text-sm font-semibold">
              Tell us about the opportunity

              <textarea
                name="message"
                required
                className="mt-2 min-h-32 w-full rounded-xl border border-ink/15 px-4 py-3.5 outline-none focus:border-ocean"
                placeholder="Tell us about your institution, banking capabilities, proposed use case or partnership opportunity"
              />
            </label>

            <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-ink/55">
              <input
                required
                type="checkbox"
                className="mt-1"
              />

              I agree that Finunique may contact me about this
              banking partnership enquiry.
            </label>

            <button
              type="submit"
              className="button-primary mt-7 w-full"
            >
              Submit banking partnership enquiry →
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ocean py-14 text-white">
        <div className="page-shell flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-white/55">
              Looking for financial infrastructure?
            </p>

            <h2 className="mt-2 text-3xl font-extrabold">
              Explore Finunique payment and financial solutions.
            </h2>
          </div>

          <Link
            href="/payments"
            className="rounded-full bg-white px-6 py-3 text-sm font-bold text-ink"
          >
            Explore solutions →
          </Link>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
}) {
  return (
    <label className="block text-sm font-semibold">
      {label}

      <input
        required
        name={name}
        type={type}
        className="mt-2 w-full rounded-xl border border-ink/15 px-4 py-3.5 outline-none transition focus:border-ocean focus:ring-4 focus:ring-ocean/10"
      />
    </label>
  );
}