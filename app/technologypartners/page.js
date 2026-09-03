import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Code2,
  Handshake,
  LineChart,
  Network,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Technology Partners",
  description:
    "Partner with Finunique to build connected payment, payout and financial solutions through reliable APIs and technology infrastructure.",
};

const partnerTypes = [
  [
    Code2,
    "API & Integration Partners",
    "Connect your applications, platforms and business solutions with Finunique's payment and payout infrastructure.",
    [
      "API-first integration",
      "Developer enablement",
      "Technical integration support",
    ],
  ],
  [
    Building2,
    "Platform Partners",
    "Embed payment and financial capabilities directly into your SaaS, commerce or business platform to create a seamless experience for your customers.",
    [
      "Embedded financial capabilities",
      "Platform-level integration",
      "Scalable infrastructure",
    ],
  ],
  [
    Network,
    "Fintech & Infrastructure Partners",
    "Collaborate with Finunique to connect complementary financial technology and infrastructure solutions for businesses.",
    [
      "Connected financial ecosystem",
      "Secure system integration",
      "Joint solution development",
    ],
  ],
  [
    Handshake,
    "Solution Partners",
    "Combine your technology expertise with Finunique's payment infrastructure to create complete solutions for specific industries and use cases.",
    [
      "Co-developed solutions",
      "Industry-specific capabilities",
      "Joint customer enablement",
    ],
  ],
];

const steps = [
  [
    "01",
    "Tell us about your technology",
    "Share your platform, product, technical capabilities and the business problem you want to solve with Finunique.",
  ],
  [
    "02",
    "Explore the integration",
    "Our teams align on APIs, use cases, data flows, responsibilities and the right integration architecture.",
  ],
  [
    "03",
    "Build & enable",
    "Get the technical documentation, integration support and resources required to develop and test your solution.",
  ],
  [
    "04",
    "Launch & scale",
    "Go live with your integrated solution and work with our teams to continuously improve and scale the partnership.",
  ],
];

export default function TechPartnersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div className="absolute -right-20 -top-20 h-96 w-96 animate-drift rounded-full bg-ocean/25 blur-3xl" />

        <div className="page-shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="eyebrow text-sky-300">
              Finunique technology partner network
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[1.03] tracking-[-.045em] sm:text-7xl">
              Build smarter financial experiences together.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
              Connect your technology with Finunique's payment and payout
              infrastructure to build seamless, scalable financial experiences
              for the businesses you serve.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#partner-form"
                className="rounded-full bg-ocean px-7 py-3.5 text-sm font-bold transition hover:bg-sky-500"
              >
                Become a technology partner →
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
                <Code2 className="h-7 w-7" />
              </span>

              <div>
                <p className="text-sm text-white/50">
                  Built for technology
                </p>

                <p className="text-xl font-extrabold">
                  Connect. Build. Scale.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "API-first infrastructure",
                "Developer-friendly integration",
                "Secure connectivity",
                "Technical partnership support",
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

      <section id="models" className="scroll-mt-28 py-20 sm:py-28">
        <div className="page-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Technology partnership models</p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Technology that connects. Partnerships that scale.
            </h2>

            <p className="mt-5 text-lg leading-8 text-ink/55">
              Whether you operate a SaaS platform, commerce solution, fintech
              product or business technology, we can work together to bring
              financial capabilities directly into your ecosystem.
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

      <section className="bg-white py-20 sm:py-24">
        <div className="page-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Why partner with Finunique</p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight">
              Extend your product with financial infrastructure.
            </h2>

            <p className="mt-5 leading-7 text-ink/55">
              Build powerful financial experiences without having to develop
              the entire payments and payout infrastructure yourself. Our
              technology partnership model is designed around integration,
              reliability and long-term collaboration.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              [
                Code2,
                "Build faster",
                "Use ready-to-integrate APIs and financial infrastructure to accelerate product development.",
              ],
              [
                Network,
                "Connect ecosystems",
                "Connect your platform with reliable payment and payout capabilities through a unified integration.",
              ],
              [
                ShieldCheck,
                "Integrate securely",
                "Build with controlled access, secure connectivity and processes designed for dependable financial operations.",
              ],
              [
                LineChart,
                "Scale with confidence",
                "Create technology solutions that can grow alongside your customers, transactions and business requirements.",
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

      <section className="py-20 sm:py-24">
        <div className="page-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="eyebrow">How it works</p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight">
              From integration idea to production.
            </h2>

            <p className="mt-5 leading-7 text-ink/55">
              Our teams work together from technical discovery through
              integration and launch, helping you turn your idea into a
              scalable financial solution.
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

   

      <section className="bg-ocean py-14 text-white">
        <div className="page-shell flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-white/55">
              Looking for payment infrastructure?
            </p>

            <h2 className="mt-2 text-3xl font-extrabold">
              Explore Finunique APIs and financial solutions.
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