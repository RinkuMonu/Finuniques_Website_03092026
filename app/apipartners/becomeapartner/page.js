"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Building2,
  CheckCircle2,
  ChevronRight,
  Code2,
  CreditCard,
  FileCheck2,
  Globe2,
  Handshake,
  KeyRound,
  Landmark,
  LockKeyhole,
  Network,
  Rocket,
  ShieldCheck,
  Smartphone,
  Users,
  Wallet,
  Webhook,
  Zap,
  Headphones,
  Settings,
} from "lucide-react";

/* =========================================================
   API SERVICES
========================================================= */

const apiServices = [
  {
    icon: CreditCard,
    title: "Payment APIs",
    description:
      "Integrate payment acceptance capabilities into your website, application or business platform.",
  },
  {
    icon: Banknote,
    title: "Payout APIs",
    description:
      "Enable automated payouts and account-to-account money movement through API integration.",
  },
  {
    icon: Wallet,
    title: "Collection APIs",
    description:
      "Build payment collection capabilities directly into your business workflows.",
  },
  {
    icon: Landmark,
    title: "Banking APIs",
    description:
      "Access supported banking capabilities through our connected financial infrastructure.",
  },
  {
    icon: Network,
    title: "Virtual Account APIs",
    description:
      "Integrate supported virtual account capabilities into your applications and platforms.",
  },
  {
    icon: ShieldCheck,
    title: "Verification APIs",
    description:
      "Add supported verification and validation capabilities to your business processes.",
  },
];

/* =========================================================
   PARTNER TYPES
========================================================= */

const partnerTypes = [
  {
    icon: Building2,
    title: "Fintech Companies",
    description:
      "Build financial products and services using our API infrastructure.",
  },
  {
    icon: Globe2,
    title: "SaaS Platforms",
    description:
      "Add financial capabilities directly into your software and business workflows.",
  },
  {
    icon: Smartphone,
    title: "Digital Platforms",
    description:
      "Integrate payments, payouts and other financial services into your applications.",
  },
  {
    icon: Users,
    title: "Growing Businesses",
    description:
      "Extend your business platform with APIs for financial operations and services.",
  },
];

/* =========================================================
   PARTNER BENEFITS
========================================================= */

const benefits = [
  {
    icon: Network,
    title: "Access Multiple APIs",
    text: "Choose from supported payment, banking, payout, collection and verification capabilities.",
  },
  {
    icon: Zap,
    title: "Faster Integration",
    text: "Use ready-to-integrate APIs instead of building every financial connection from scratch.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Infrastructure",
    text: "Integrate through an API layer designed around authentication, validation and controlled access.",
  },
  {
    icon: Code2,
    title: "Developer Friendly",
    text: "Get documentation, credentials and integration resources to help your technical team get started.",
  },
  {
    icon: Headphones,
    title: "Integration Support",
    text: "Receive assistance throughout onboarding, integration, testing and production.",
  },
  {
    icon: Rocket,
    title: "Scale With Your Business",
    text: "Build financial capabilities into your platform and expand your product offering as you grow.",
  },
];

/* =========================================================
   PARTNER JOURNEY
========================================================= */

const partnerSteps = [
  {
    number: "01",
    icon: Handshake,
    title: "Tell Us About Your Business",
    description:
      "Submit your partnership request and tell us about your business, platform and the financial services you want to integrate.",
  },
  {
    number: "02",
    icon: FileCheck2,
    title: "Business Verification",
    description:
      "Our team reviews the required business information and completes the applicable onboarding and verification process.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Select Your APIs",
    description:
      "Based on your business requirements, choose the APIs and financial capabilities you want to integrate.",
  },
  {
    number: "04",
    icon: KeyRound,
    title: "Receive API Access",
    description:
      "Once approved, you receive the required credentials, documentation and integration resources.",
  },
  {
    number: "05",
    icon: Code2,
    title: "Integrate & Test",
    description:
      "Your technical team integrates the APIs and tests the required flows in the supported testing environment.",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Go Live",
    description:
      "After successful testing and approval, production access is provided and you can start using the APIs.",
  },
];

/* =========================================================
   WHAT PARTNER GETS
========================================================= */

const partnerIncludes = [
  "API credentials",
  "API documentation",
  "Testing / sandbox access",
  "Integration guidance",
  "Transaction status responses",
  "Webhook / callback support where applicable",
  "Production access after approval",
  "Technical assistance",
];

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* =========================================================
   MAIN PAGE
========================================================= */

export default function BecomeApiPartnerPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[760px] overflow-hidden bg-slate-950">

        {/* Glow */}

        <div className="absolute inset-0">

          <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[130px]" />

          <div className="absolute right-0 top-0 h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[150px]" />

          <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

        </div>

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-24 lg:px-8">

          <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_0.9fr]">

            {/* LEFT */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >

              <motion.div
                variants={fadeUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300"
              >

                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />

                Become an API Partner

              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
              >

                Bring financial
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  services
                </span>
                to your platform.

              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl text-lg leading-8 text-slate-300"
              >

                Partner with us to integrate supported banking, payments,
                payouts, collections and other financial capabilities into
                your website, application or business platform through APIs.

              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-wrap gap-4"
              >

                <a
                  href="#become-partner"
                  className="group inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-400"
                >

                  Become a Partner

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />

                </a>

                <a
                  href="#api-services"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                >

                  Explore API Services

                </a>

              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400"
              >

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-400" />
                  API-first integration
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-400" />
                  Banking connectivity
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-400" />
                  Technical support
                </span>

              </motion.div>

            </motion.div>


            {/* RIGHT VISUAL */}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative mx-auto w-full max-w-[520px]"
            >

              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-8">

                <div className="mb-7 flex items-center justify-between">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                      Partner Journey
                    </p>

                    <p className="mt-2 text-lg font-bold text-white">
                      From application to API access
                    </p>

                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Handshake size={25} />
                  </div>

                </div>


                <div className="space-y-3">

                  {[
                    {
                      icon: Handshake,
                      title: "Apply",
                      text: "Tell us about your business",
                    },
                    {
                      icon: FileCheck2,
                      title: "Verify",
                      text: "Complete onboarding",
                    },
                    {
                      icon: KeyRound,
                      title: "Get API Access",
                      text: "Receive credentials",
                    },
                    {
                      icon: Code2,
                      title: "Integrate",
                      text: "Connect your platform",
                    },
                    {
                      icon: Rocket,
                      title: "Go Live",
                      text: "Start using your APIs",
                    },
                  ].map((item, index) => {

                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.3 + index * 0.15,
                        }}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                      >

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                          <Icon size={21} />
                        </div>

                        <div className="min-w-0">

                          <p className="font-semibold text-white">
                            {item.title}
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            {item.text}
                          </p>

                        </div>

                        {index !== 4 && (
                          <ChevronRight
                            size={16}
                            className="ml-auto shrink-0 text-slate-600"
                          />
                        )}

                      </motion.div>
                    );
                  })}

                </div>


                <div className="mt-6 rounded-2xl border border-blue-400/10 bg-blue-500/5 p-4">

                  <div className="flex items-center gap-3">

                    <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

                    <span className="text-sm text-slate-300">
                      Ready to connect your business
                    </span>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Why become a partner?
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Add financial capabilities without building everything from
                scratch.
              </h2>

            </motion.div>


            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >

              <p className="text-lg leading-8 text-slate-600">
                As an API partner, your business can integrate the financial
                capabilities supported by our platform into your own
                applications and workflows.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our API infrastructure provides the technology layer between
                your platform and supported banking and financial partners,
                helping you add financial services to your customer
                experience.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="bg-white py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Partner advantages
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Everything you need to build with our APIs.
            </h2>

          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >

            {benefits.map((benefit) => {

              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  variants={fadeUp}
                  whileHover={{ y: -7 }}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-xl hover:shadow-blue-500/10"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {benefit.text}
                  </p>

                </motion.div>
              );
            })}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          WHO CAN PARTNER
      ===================================================== */}

      <section className="bg-slate-950 py-28 text-white">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Built for businesses
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Who can become an API partner?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              If your business needs financial capabilities inside its
              platform or workflow, our API partnership model can help you
              integrate supported services.
            </p>

          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >

            {partnerTypes.map((partner) => {

              const Icon = partner.icon;

              return (
                <motion.div
                  key={partner.title}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-blue-400/30 hover:bg-white/[0.06]"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {partner.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {partner.description}
                  </p>

                </motion.div>
              );
            })}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          WHAT PARTNER GETS
      ===================================================== */}

      <section className="bg-slate-50 py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Your partner toolkit
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Everything you need to start integrating.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Once your business is approved for partnership, our team
                provides the resources required to move from onboarding to
                integration and production.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {partnerIncludes.map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
                  >

                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>


            {/* VISUAL */}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl sm:p-10"
            >

              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-500/10 blur-[80px]" />

              <div className="relative">

                <div className="flex items-center justify-between border-b border-slate-100 pb-5">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                      Partner access
                    </p>

                    <p className="mt-2 text-xl font-bold text-slate-900">
                      Your API workspace
                    </p>

                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Code2 size={23} />
                  </div>

                </div>


                <div className="mt-7 space-y-3">

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                    <div className="flex items-center gap-4">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                        <KeyRound size={21} />
                      </div>

                      <div>
                        <p className="font-semibold text-slate-900">
                          API Credentials
                        </p>

                        <p className="text-xs text-slate-500">
                          Controlled access to your APIs
                        </p>
                      </div>

                    </div>

                  </div>


                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                    <div className="flex items-center gap-4">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                        <Code2 size={21} />
                      </div>

                      <div>
                        <p className="font-semibold text-slate-900">
                          Documentation
                        </p>

                        <p className="text-xs text-slate-500">
                          Integration guides and API references
                        </p>
                      </div>

                    </div>

                  </div>


                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                    <div className="flex items-center gap-4">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                        <Webhook size={21} />
                      </div>

                      <div>
                        <p className="font-semibold text-slate-900">
                          Webhooks
                        </p>

                        <p className="text-xs text-slate-500">
                          Receive supported transaction updates
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/* =====================================================
          HOW TO BECOME PARTNER
      ===================================================== */}

      <section
        id="become-partner"
        className="bg-white py-28"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              How to become a partner
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Six simple steps to get started.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our onboarding journey takes you from your initial partnership
              request to API access and production.
            </p>

          </motion.div>


          <div className="relative mt-20">

            {/* Timeline */}

            <div className="absolute left-[8%] right-[8%] top-16 hidden h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent lg:block" />


            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6"
            >

              {partnerSteps.map((step) => {

                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    variants={fadeUp}
                    className="relative text-center"
                  >

                    <div className="relative z-10 mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-blue-200 bg-white shadow-lg shadow-blue-500/10">

                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <Icon size={30} />
                      </div>

                    </div>

                    <span className="mt-6 block text-xs font-bold tracking-[0.2em] text-blue-600">
                      STEP {step.number}
                    </span>

                    <h3 className="mt-3 text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>

                  </motion.div>
                );
              })}

            </motion.div>

          </div>

        </div>
      </section>


      {/* =====================================================
          API SERVICES
      ===================================================== */}

      <section
        id="api-services"
        className="bg-slate-950 py-28 text-white"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Choose what you need
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              APIs built around your business needs.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Tell us which financial capabilities you need and our team can
              guide you through the applicable APIs and onboarding process.
            </p>

          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >

            {apiServices.map((service) => {

              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-blue-400/30 hover:bg-white/[0.06]"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="text-slate-600 transition group-hover:text-blue-400"
                    />

                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {service.description}
                  </p>

                </motion.div>
              );
            })}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          INTEGRATION JOURNEY
      ===================================================== */}

      <section className="bg-slate-50 py-28">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Integration journey
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Sandbox to production.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Build, test and validate your integration before moving to
              production.
            </p>

          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-16 grid gap-5 md:grid-cols-3"
          >

            {[
              {
                number: "01",
                title: "Sandbox",
                icon: Code2,
                description:
                  "Access the supported testing environment and begin building your API integration.",
              },
              {
                number: "02",
                title: "Testing & Validation",
                icon: ShieldCheck,
                description:
                  "Test your integration, transaction flows and required callbacks before production.",
              },
              {
                number: "03",
                title: "Production",
                icon: Rocket,
                description:
                  "After successful approval, move to production and start using the APIs.",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  variants={fadeUp}
                  className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8"
                >

                  <div className="absolute right-0 top-0 text-[100px] font-black leading-none text-slate-100">
                    {item.number}
                  </div>

                  <div className="relative">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={27} />
                    </div>

                    <h3 className="mt-7 text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          SUPPORT
      ===================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] bg-blue-600 p-8 text-white sm:p-12 lg:p-16"
          >

            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-[100px]" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto]">

              <div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  <Headphones size={28} />
                </div>

                <h2 className="mt-7 max-w-2xl text-3xl font-bold sm:text-4xl">
                  Support from onboarding to go-live.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                  Our team can help guide you through the partnership,
                  onboarding, integration and testing journey so your
                  technical team can move confidently toward production.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">

                  {[
                    "Partner onboarding",
                    "API documentation",
                    "Integration guidance",
                    "Testing assistance",
                    "Production onboarding",
                    "Technical support",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-white"
                    >

                      <CheckCircle2 size={17} />

                      {item}

                    </div>

                  ))}

                </div>

              </div>


              <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/20 bg-white/10">

                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white/10">

                  <Handshake size={50} />

                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="bg-slate-50 py-28">

        <div className="mx-auto max-w-4xl px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Frequently asked questions
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Questions about becoming a partner?
            </h2>

          </motion.div>


          <div className="mt-14 space-y-4">

            {[
              {
                q: "Who can become an API partner?",
                a: "Businesses, fintech platforms, SaaS companies and digital platforms that need supported financial capabilities can approach us for partnership.",
              },
              {
                q: "How do I request API access?",
                a: "Start by submitting a partnership request with information about your business and the financial services you want to integrate. Our team will guide you through the applicable onboarding process.",
              },
              {
                q: "What information is required during onboarding?",
                a: "The required information depends on the business, service and applicable onboarding or compliance requirements. Our team will provide the relevant requirements during the onboarding process.",
              },
              {
                q: "Do you provide a sandbox environment?",
                a: "Where supported for the applicable API, partners can use a testing environment to build and validate their integration before moving to production.",
              },
              {
                q: "How do I move from sandbox to production?",
                a: "After the integration has been tested and the required validation or approval is completed, production access can be provided according to the applicable process.",
              },
              {
                q: "Do you provide technical support?",
                a: "Yes. Our team can assist with onboarding, documentation, integration guidance, testing and production-related support.",
              },
            ].map((faq, index) => (

              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >

                <h3 className="text-lg font-bold text-slate-900">
                  {faq.q}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {faq.a}
                </p>

              </motion.div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-slate-950 py-28 text-white">

        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[130px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl px-6 text-center"
        >

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
            <Handshake size={31} />
          </div>

          <h2 className="mt-7 text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to become an API partner?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Tell us about your business, the services you need and how you
            want to use our APIs. Our team will help you take the next step.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
            >

              Start Your Partnership

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />

            </a>

            <a
              href="/api-documentation"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >

              View API Documentation

              <ArrowUpRight size={18} />

            </a>

          </div>

        </motion.div>

      </section>

    </main>
  );
}