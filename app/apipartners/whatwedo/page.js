
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Building2,
  CheckCircle2,
  Code2,
  CreditCard,
  IndianRupee,
  Landmark,
  LockKeyhole,
  Network,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Smartphone,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "API Banking",
    description:
      "Connect your products with banking and financial infrastructure through secure, scalable APIs.",
    tag: "Technology",
  },
  {
    icon: Wallet,
    title: "Digital Payments",
    description:
      "Enable seamless collections, transfers, payouts and digital payment experiences for your customers.",
    tag: "Payments",
  },
  {
    icon: CreditCard,
    title: "Payment Solutions",
    description:
      "Build reliable payment experiences with payment gateways, payment links and recurring collections.",
    tag: "Collections",
  },
  {
    icon: Banknote,
    title: "Business Payouts",
    description:
      "Move money quickly and efficiently with automated payouts and account-to-account transfers.",
    tag: "Payouts",
  },
  {
    icon: Landmark,
    title: "Banking Infrastructure",
    description:
      "Leverage banking partnerships and financial infrastructure to launch powerful fintech products.",
    tag: "Banking",
  },
  {
    icon: Network,
    title: "Fintech Integration",
    description:
      "Integrate financial services into your existing platforms without rebuilding your entire infrastructure.",
    tag: "Integration",
  },
];

const industries = [
  "Fintech",
  "E-commerce",
  "EdTech",
  "Healthcare",
  "Insurance",
  "WealthTech",
  "Travel",
  "Retail",
];

const benefits = [
  {
    icon: Zap,
    title: "Faster Launch",
    text: "Launch financial features faster using ready-to-integrate infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Built for Security",
    text: "Security-focused architecture designed for sensitive financial transactions.",
  },
  {
    icon: RefreshCw,
    title: "Scalable Infrastructure",
    text: "Technology that can scale as your transaction volumes and business grow.",
  },
  {
    icon: Users,
    title: "Business Focused",
    text: "Solutions designed around real business workflows and customer experiences.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
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
      staggerChildren: 0.12,
    },
  },
};

export default function WhatWeDoPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[720px] overflow-hidden bg-slate-950">
        
        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute right-0 top-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
          <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />
        </div>

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="grid w-full items-center gap-16 lg:grid-cols-2">

            {/* Left */}
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
                Powering the future of finance
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
              >
                We build the
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  infrastructure
                </span>
                behind finance.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl text-lg leading-8 text-slate-300"
              >
                We connect businesses with powerful financial technology,
                banking infrastructure and payment solutions — making complex
                financial processes simple, secure and scalable.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-wrap gap-4"
              >
                <a
                  href="#solutions"
                  className="group inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-400"
                >
                  Explore what we do
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#how-we-work"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  How it works
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400"
              >
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-400" />
                  Secure infrastructure
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-400" />
                  API-first architecture
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-400" />
                  Built to scale
                </span>
              </motion.div>
            </motion.div>

            {/* Right animated ecosystem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative mx-auto h-[470px] w-full max-w-[520px]"
            >
              {/* Orbit circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10"
              />

              {/* Connection lines */}
              <div className="absolute left-1/2 top-1/2 h-px w-[360px] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
              <div className="absolute left-1/2 top-1/2 h-[360px] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent" />

              {/* Center */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(59,130,246,.15)",
                    "0 0 70px rgba(59,130,246,.35)",
                    "0 0 30px rgba(59,130,246,.15)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-3xl border border-blue-400/30 bg-slate-900/90 backdrop-blur-xl"
              >
                <Network size={38} className="text-blue-400" />
                <span className="mt-2 text-sm font-semibold text-white">
                  Our Platform
                </span>
              </motion.div>

              {/* Floating nodes */}
              {[
                {
                  icon: Building2,
                  title: "Banks",
                  position: "left-2 top-16",
                },
                {
                  icon: Smartphone,
                  title: "Customers",
                  position: "right-0 top-20",
                },
                {
                  icon: Code2,
                  title: "APIs",
                  position: "left-10 bottom-20",
                },
                {
                  icon: Wallet,
                  title: "Businesses",
                  position: "right-8 bottom-16",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute ${item.position} flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-xl`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                      <Icon size={20} />
                    </div>

                    <span className="text-sm font-semibold text-white">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>


      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid gap-12 lg:grid-cols-[1fr_1.2fr]"
          >
            <motion.div variants={fadeUp}>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                What we do
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Turning financial complexity into simple experiences.
              </h2>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="text-lg leading-8 text-slate-600">
                Financial technology is powerful, but connecting banking,
                payments and business workflows can be complicated. We bridge
                that gap by bringing technology, APIs and financial
                infrastructure together in one connected ecosystem.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                From enabling digital payments to automating business payouts,
                we help businesses build, launch and scale financial products
                without having to build every layer from scratch.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* =========================================================
          SOLUTIONS
      ========================================================= */}
      <section id="solutions" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our solutions
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Everything you need to build financial experiences
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Modular financial infrastructure designed to fit into your
              business and grow with it.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl transition group-hover:bg-blue-500/10" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                        <Icon size={27} />
                      </div>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {service.description}
                    </p>

                    {/* <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-blue-600">
                      Learn more
                      <ArrowUpRight
                        size={16}
                        className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div> */}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>


      {/* =========================================================
          HOW WE WORK / FLOW
      ========================================================= */}
      <section
        id="how-we-work"
        className="relative overflow-hidden bg-slate-950 py-24 text-white"
      >
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              How we work
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              From financial infrastructure to your customer
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              We simplify the journey between banks, businesses, technology
              and end customers.
            </p>
          </motion.div>

          <div className="relative mt-20">

            {/* Connecting line */}
            <div className="absolute left-[10%] right-[10%] top-16 hidden h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent lg:block" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid gap-10 lg:grid-cols-4"
            >
              {[
                {
                  number: "01",
                  icon: Landmark,
                  title: "Banking Partners",
                  text: "We connect with banking and financial institutions to access the underlying infrastructure.",
                },
                {
                  number: "02",
                  icon: Code2,
                  title: "Our APIs",
                  text: "We convert complex financial capabilities into simple, developer-friendly APIs.",
                },
                {
                  number: "03",
                  icon: Building2,
                  title: "Your Business",
                  text: "Businesses integrate our APIs into their products, platforms and workflows.",
                },
                {
                  number: "04",
                  icon: Smartphone,
                  title: "End Customers",
                  text: "Customers get faster, simpler and more seamless financial experiences.",
                },
              ].map((step) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    variants={fadeUp}
                    className="relative text-center"
                  >
                    <div className="relative z-10 mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-blue-400/20 bg-slate-900 shadow-xl shadow-blue-500/10">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10">
                        <Icon size={32} className="text-blue-400" />
                      </div>
                    </div>

                    <span className="mt-6 block text-xs font-bold tracking-[0.2em] text-blue-400">
                      STEP {step.number}
                    </span>

                    <h3 className="mt-3 text-xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {step.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFITS
      ========================================================= */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Why businesses choose us
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Financial technology without the complexity.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Instead of managing multiple financial integrations,
                businesses can access the capabilities they need through a
                single technology layer.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "API-first",
                  "Scalable",
                  "Secure",
                  "Developer-friendly",
                  "Business-ready",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid gap-4 sm:grid-cols-2"
            >
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    variants={fadeUp}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-5 font-bold text-slate-900">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {benefit.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </section>


      {/* =========================================================
          INDUSTRIES
      ========================================================= */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Built for every business
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Financial infrastructure across industries
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Whether you are building a fintech product or adding financial
              capabilities to an existing platform, our infrastructure adapts
              to your business.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-14 flex flex-wrap justify-center gap-4"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="group flex cursor-default items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 transition hover:border-blue-200 hover:bg-blue-50"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                  <IndianRupee size={17} />
                </div>

                <span className="font-semibold text-slate-700 group-hover:text-blue-700">
                  {industry}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* =========================================================
          SECURITY
      ========================================================= */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 sm:p-12 lg:p-16"
          >
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto]">

              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-400">
                  <LockKeyhole size={28} />
                </div>

                <h2 className="mt-7 text-3xl font-bold text-white sm:text-4xl">
                  Infrastructure you can build on with confidence.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                  Financial products require reliability, security and
                  transparency. Our technology is designed with these
                  principles at its core.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Secure API architecture",
                    "Transaction-focused infrastructure",
                    "Scalable technology",
                    "Reliable integrations",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <CheckCircle2 size={17} className="text-blue-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <motion.div
                animate={{
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto flex h-44 w-44 items-center justify-center rounded-[2rem] border border-blue-400/20 bg-white/[0.04]"
              >
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10">
                  <ShieldCheck size={52} className="text-blue-400" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-28">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl px-6 text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <Rocket size={30} />
          </div>

          <h2 className="mt-7 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Build the next generation of financial experiences.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Bring your idea, product or business workflow. We'll help you
            connect the financial infrastructure needed to make it happen.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Talk to our team
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>
            <a
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-600"
            >
              Explore solutions
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
