"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
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
  KeyRound,
  Landmark,
  LockKeyhole,
  Network,
  RefreshCw,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Users,
  Wallet,
  Webhook,
  Zap,
} from "lucide-react";

/* =========================================================
   API SERVICES
========================================================= */

const apiServices = [
  {
    icon: CreditCard,
    title: "Payment APIs",
    description:
      "Enable businesses to accept and manage digital payments through secure API integrations.",
    tag: "Payments",
  },
  {
    icon: Banknote,
    title: "Payout APIs",
    description:
      "Help businesses initiate account-to-account payouts and automate money movement.",
    tag: "Payouts",
  },
  {
    icon: Wallet,
    title: "Collection APIs",
    description:
      "Integrate collection capabilities into websites, applications and business platforms.",
    tag: "Collections",
  },
  {
    icon: Landmark,
    title: "Banking APIs",
    description:
      "Connect applications with banking capabilities made available through our financial partnerships.",
    tag: "Banking",
  },
  {
    icon: Network,
    title: "Virtual Account APIs",
    description:
      "Enable businesses to integrate virtual account and account-management capabilities.",
    tag: "Accounts",
  },
  {
    icon: ShieldCheck,
    title: "Verification APIs",
    description:
      "Integrate supported verification and validation services into your business workflows.",
    tag: "Verification",
  },
];

/* =========================================================
   PARTNER JOURNEY
========================================================= */

const partnerJourney = [
  {
    number: "01",
    icon: Users,
    title: "Business Onboarding",
    text: "A business approaches us to access financial capabilities through our API infrastructure.",
  },
  {
    number: "02",
    icon: FileCheck2,
    title: "Verification & Approval",
    text: "We complete the required business, compliance and technical onboarding before API access is provided.",
  },
  {
    number: "03",
    icon: KeyRound,
    title: "API Access",
    text: "Approved partners receive the credentials, documentation and environment required for integration.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Integration",
    text: "The partner connects our APIs with its website, application, platform or business workflow.",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Testing",
    text: "The integration is tested using the supported sandbox or testing environment before going live.",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Go Live",
    text: "After successful testing and approval, the partner can begin using the APIs in production.",
  },
];

/* =========================================================
   TRANSACTION FLOW
========================================================= */

const transactionSteps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Customer Action",
    text: "A customer initiates a payment, transfer or financial service through the partner's application.",
  },
  {
    number: "02",
    icon: Code2,
    title: "API Request",
    text: "The partner's platform sends a secure API request to our infrastructure.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Authentication",
    text: "Our system verifies the API credentials, access permissions and request details.",
  },
  {
    number: "04",
    icon: Server,
    title: "Request Processing",
    text: "The request is validated and processed through our API and transaction infrastructure.",
  },
  {
    number: "05",
    icon: Landmark,
    title: "Banking Partner",
    text: "The request is routed to the relevant banking or financial partner supporting the service.",
  },
  {
    number: "06",
    icon: CheckCircle2,
    title: "Transaction Response",
    text: "The banking partner processes the request and returns the transaction result.",
  },
  {
    number: "07",
    icon: Webhook,
    title: "Webhook / Callback",
    text: "Where supported, transaction updates can be delivered to the partner through webhook or callback mechanisms.",
  },
  {
    number: "08",
    icon: Smartphone,
    title: "Customer Experience",
    text: "The partner updates its application and the customer receives the final transaction status.",
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    icon: Network,
    title: "One Technology Layer",
    text: "Businesses can connect to financial capabilities through a unified API layer instead of building every connection independently.",
  },
  {
    icon: Landmark,
    title: "Banking Connectivity",
    text: "Our infrastructure works with supported banking and financial partners to enable the services made available through the platform.",
  },
  {
    icon: ShieldCheck,
    title: "Security Focused",
    text: "Authentication, validation and access controls are built into the API integration journey.",
  },
  {
    icon: Zap,
    title: "Faster Integration",
    text: "Ready-to-integrate APIs help businesses add financial capabilities without building every underlying layer themselves.",
  },
];

/* =========================================================
   FLOW ANIMATION
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
      staggerChildren: 0.12,
    },
  },
};

/* =========================================================
   MAIN PAGE
========================================================= */

export default function ApiPartnerHowItWorksPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[760px] overflow-hidden bg-slate-950">

        {/* Background glow */}
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

          <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_0.95fr]">

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

                How Our API Partnership Works
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
              >
                From banking
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  infrastructure
                </span>
                to your platform.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl text-lg leading-8 text-slate-300"
              >
                We connect with supported banks and financial partners,
                integrate their capabilities into our technology layer and
                make those capabilities available to businesses through
                secure, developer-friendly APIs.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-wrap gap-4"
              >
                <a
                  href="#api-flow"
                  className="group inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-400"
                >
                  See how it works

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#partner-journey"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  Become a partner
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400"
              >
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-400" />
                  Banking connectivity
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-400" />
                  API-first infrastructure
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-400" />
                  Secure integration
                </span>
              </motion.div>

            </motion.div>

            {/* RIGHT - ECOSYSTEM */}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative mx-auto h-[500px] w-full max-w-[540px]"
            >

              {/* Orbit */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10"
              />

              {/* Lines */}

              <div className="absolute left-1/2 top-1/2 h-px w-[400px] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

              <div className="absolute left-1/2 top-1/2 h-[400px] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent" />

              {/* Center */}

              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(59,130,246,.15)",
                    "0 0 80px rgba(59,130,246,.35)",
                    "0 0 30px rgba(59,130,246,.15)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="absolute left-1/2 top-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-3xl border border-blue-400/30 bg-slate-900/95 backdrop-blur-xl"
              >
                <Network size={40} className="text-blue-400" />

                <span className="mt-2 text-sm font-bold text-white">
                  API Layer
                </span>

                <span className="mt-1 text-[11px] text-slate-400">
                  Our Platform
                </span>
              </motion.div>

              {/* BANK */}

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-0 top-14 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                  <Building2 size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Banking Partners
                  </p>

                  <p className="text-xs text-slate-400">
                    Financial infrastructure
                  </p>
                </div>
              </motion.div>

              {/* BUSINESS */}

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-0 top-24 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                  <Globe2 size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Partner Business
                  </p>

                  <p className="text-xs text-slate-400">
                    Website / App / Platform
                  </p>
                </div>
              </motion.div>

              {/* APIs */}

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-20 left-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
                  <Code2 size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    APIs
                  </p>

                  <p className="text-xs text-slate-400">
                    Secure integration
                  </p>
                </div>
              </motion.div>

              {/* CUSTOMER */}

              <motion.div
                animate={{ y: [0, 9, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-12 right-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                  <Smartphone size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    End Customer
                  </p>

                  <p className="text-xs text-slate-400">
                    Final experience
                  </p>
                </div>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]"
          >

            <motion.div variants={fadeUp}>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                The idea behind our API model
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                We simplify the connection between banks and businesses.
              </h2>

            </motion.div>

            <motion.div variants={fadeUp}>

              <p className="text-lg leading-8 text-slate-600">
                Financial institutions provide the underlying banking and
                financial capabilities. We work with supported partners and
                connect those capabilities to our technology infrastructure.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Businesses can then integrate the available services through
                our APIs rather than building every financial connection
                independently.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                This creates a technology bridge between financial
                infrastructure and the applications that businesses build for
                their customers.
              </p>

            </motion.div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          MAIN API FLOW
      ===================================================== */}

      <section
        id="api-flow"
        className="relative overflow-hidden bg-slate-950 py-28 text-white"
      >

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />

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
              The complete API flow
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              From bank connectivity to customer transaction.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Here is how a financial capability moves through our
              infrastructure and reaches a business through APIs.
            </p>

          </motion.div>


          {/* FLOW */}

          <div className="mt-20">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-5"
            >

              {/* BANK */}

              <motion.div
                variants={fadeUp}
                className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-400">
                  <Landmark size={27} />
                </div>

                <span className="mt-6 block text-xs font-bold tracking-[0.2em] text-blue-400">
                  LAYER 01
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  Banking Partners
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  We connect with supported banks and financial partners
                  that provide the underlying financial capabilities.
                </p>

              </motion.div>


              {/* CONNECT */}

              <motion.div
                variants={fadeUp}
                className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
                  <Network size={27} />
                </div>

                <span className="mt-6 block text-xs font-bold tracking-[0.2em] text-cyan-300">
                  LAYER 02
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  Our Infrastructure
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  We integrate supported financial capabilities into our
                  technology and API infrastructure.
                </p>

              </motion.div>


              {/* API */}

              <motion.div
                variants={fadeUp}
                className="relative rounded-3xl border border-blue-400/20 bg-blue-500/[0.08] p-7 shadow-xl shadow-blue-500/10"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500 text-white">
                  <Code2 size={27} />
                </div>

                <span className="mt-6 block text-xs font-bold tracking-[0.2em] text-blue-300">
                  LAYER 03
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  Our APIs
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  We expose the supported financial capabilities through
                  structured, developer-friendly APIs.
                </p>

              </motion.div>


              {/* BUSINESS */}

              <motion.div
                variants={fadeUp}
                className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300">
                  <Building2 size={27} />
                </div>

                <span className="mt-6 block text-xs font-bold tracking-[0.2em] text-indigo-300">
                  LAYER 04
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  Partner Business
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Businesses integrate the APIs into their applications,
                  websites and internal workflows.
                </p>

              </motion.div>


              {/* CUSTOMER */}

              <motion.div
                variants={fadeUp}
                className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl md:col-span-2 lg:col-span-1"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                  <Smartphone size={27} />
                </div>

                <span className="mt-6 block text-xs font-bold tracking-[0.2em] text-emerald-300">
                  LAYER 05
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  End Customer
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Customers experience the financial service directly inside
                  the partner's application or platform.
                </p>

              </motion.div>

            </motion.div>

          </div>


          {/* FLOW ARROW */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-16 hidden max-w-5xl items-center justify-between lg:flex"
          >

            {[
              "Financial Capability",
              "Connected Infrastructure",
              "API Access",
              "Business Integration",
              "Customer Experience",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4"
              >

                <span className="text-xs font-medium text-slate-500">
                  {item}
                </span>

                {index !== 4 && (
                  <ChevronRight
                    size={16}
                    className="text-blue-400"
                  />
                )}

              </div>
            ))}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          ONE INTEGRATION
      ===================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Why the API layer matters
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                One integration. Multiple financial capabilities.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Instead of creating separate technology connections for every
                supported financial service, businesses can integrate with our
                API layer and use the capabilities made available through our
                ecosystem.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Connect through a unified API layer",
                  "Access supported banking and financial capabilities",
                  "Use standardized request and response structures",
                  "Receive transaction status updates",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <CheckCircle2 size={17} />
                    </div>

                    <span className="text-slate-700">
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
              className="relative rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-10"
            >

              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-500/10 blur-[80px]" />

              <div className="relative">

                {/* Partner */}

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Building2 size={23} />
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">
                        Your Business
                      </p>

                      <p className="text-sm text-slate-500">
                        One integration
                      </p>
                    </div>

                  </div>

                </div>


                <div className="flex justify-center py-3">
                  <ArrowDown className="text-blue-500" />
                </div>


                {/* API */}

                <div className="rounded-2xl border border-blue-200 bg-blue-600 p-5 text-white shadow-xl shadow-blue-600/20">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                      <Code2 size={23} />
                    </div>

                    <div>
                      <p className="font-bold">
                        Our API Layer
                      </p>

                      <p className="text-sm text-blue-100">
                        Unified financial access
                      </p>
                    </div>

                  </div>

                </div>


                <div className="flex justify-center py-3">
                  <ArrowDown className="text-blue-500" />
                </div>


                {/* SERVICES */}

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

                  {[
                    {
                      icon: CreditCard,
                      title: "Payments",
                    },
                    {
                      icon: Banknote,
                      title: "Payouts",
                    },
                    {
                      icon: Wallet,
                      title: "Collections",
                    },
                    {
                      icon: Landmark,
                      title: "Banking",
                    },
                    {
                      icon: Network,
                      title: "Accounts",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Verification",
                    },
                  ].map((service) => {
                    const Icon = service.icon;

                    return (
                      <div
                        key={service.title}
                        className="rounded-xl border border-slate-200 bg-white p-4 text-center"
                      >
                        <Icon
                          size={20}
                          className="mx-auto text-blue-600"
                        />

                        <p className="mt-2 text-xs font-semibold text-slate-700">
                          {service.title}
                        </p>
                      </div>
                    );
                  })}

                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/* =====================================================
          TRANSACTION FLOW
      ===================================================== */}

      <section
        className="relative overflow-hidden bg-slate-950 py-28 text-white"
      >

        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Transaction lifecycle
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              What happens when an API is used?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Every request follows a structured journey from the customer's
              action to the relevant financial partner and back to the
              business.
            </p>

          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >

            {transactionSteps.map((step) => {

              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  whileHover={{ y: -7 }}
                  className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-blue-400/30 hover:bg-white/[0.06]"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                      <Icon size={25} />
                    </div>

                    <span className="text-xs font-bold tracking-[0.2em] text-blue-400">
                      {step.number}
                    </span>

                  </div>

                  <h3 className="mt-7 text-xl font-bold">
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
      </section>


      {/* =====================================================
          PARTNER ONBOARDING
      ===================================================== */}

      <section
        id="partner-journey"
        className="bg-slate-50 py-28"
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
              Partner onboarding
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              From application to production.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We guide businesses through the required onboarding,
              integration, testing and production journey.
            </p>

          </motion.div>


          <div className="relative mt-20">

            {/* Desktop line */}

            <div className="absolute left-[8%] right-[8%] top-16 hidden h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent lg:block" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6"
            >

              {partnerJourney.map((step) => {

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
                      {step.text}
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
              API capabilities
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Financial capabilities through APIs.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Businesses can integrate the financial services supported by
              our platform into their own products and workflows.
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

                    <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-blue-600">
                      Explore API

                      <ArrowUpRight
                        size={16}
                        className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>

                  </div>

                </motion.div>
              );
            })}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          SECURITY
      ===================================================== */}

      <section className="bg-slate-50 py-28">

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
                  A secure layer between financial infrastructure and your
                  platform.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                  API integrations involve sensitive financial operations.
                  Our infrastructure is designed around controlled access,
                  request validation, authentication and transaction-focused
                  processing.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">

                  {[
                    "API authentication",
                    "Access controls",
                    "Request validation",
                    "Transaction monitoring",
                    "Secure API architecture",
                    "Reliable partner integrations",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <CheckCircle2
                        size={17}
                        className="text-blue-400"
                      />

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
                  <ShieldCheck
                    size={52}
                    className="text-blue-400"
                  />
                </div>

              </motion.div>

            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          WHY PARTNER
      ===================================================== */}

      <section className="bg-white py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Why partner with us
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Financial infrastructure without building every connection
                yourself.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                We help businesses connect their products to supported
                financial services through an API-driven technology layer.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  "API-first",
                  "Secure",
                  "Scalable",
                  "Developer-friendly",
                  "Business-ready",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600"
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


      {/* =====================================================
          SIMPLE SUMMARY FLOW
      ===================================================== */}

      <section className="bg-slate-950 py-24 text-white">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              In one view
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              The complete API partnership journey.
            </h2>

          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-14 grid gap-4 md:grid-cols-5"
          >

            {[
              {
                icon: Landmark,
                title: "Banks",
                text: "Provide supported financial capabilities",
              },
              {
                icon: Network,
                title: "Our Platform",
                text: "Connects and manages the infrastructure",
              },
              {
                icon: Code2,
                title: "APIs",
                text: "Expose capabilities to businesses",
              },
              {
                icon: Building2,
                title: "Partner",
                text: "Integrates APIs into its platform",
              },
              {
                icon: Smartphone,
                title: "Customer",
                text: "Uses the final financial experience",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center"
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-5 font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>

                  {index !== 4 && (
                    <ChevronRight
                      size={18}
                      className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-blue-400 md:block"
                    />
                  )}

                </motion.div>
              );
            })}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

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
            Connect your business to financial infrastructure.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Partner with us to integrate supported banking, payments and
            financial capabilities into your platform through APIs.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Become an API Partner

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="/api-documentation"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-600"
            >
              Explore API Documentation

              <ArrowUpRight size={18} />
            </a>

          </div>

        </motion.div>

      </section>

    </main>
  );
}