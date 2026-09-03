"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  Check,
  ChevronRight,
  CircleCheck,
  Code2,
  Copy,
  Database,
  FileJson,
  Globe,
  KeyRound,
  Layers3,
  Lock,
  Network,
  Play,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
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
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const endpoints = [
  {
    method: "POST",
    path: "/v1/payments",
    title: "Create Payment",
    description:
      "Create a payment request and initiate a secure transaction.",
  },
  {
    method: "GET",
    path: "/v1/payments/{id}",
    title: "Get Payment",
    description:
      "Retrieve the current status and details of a payment.",
  },
  {
    method: "POST",
    path: "/v1/payouts",
    title: "Create Payout",
    description:
      "Initiate a payout to a beneficiary or bank account.",
  },
  {
    method: "GET",
    path: "/v1/payouts/{id}",
    title: "Get Payout",
    description:
      "Retrieve payout details, status and transaction information.",
  },
  {
    method: "GET",
    path: "/v1/balance",
    title: "Get Balance",
    description:
      "Retrieve your available wallet and settlement balance.",
  },
  {
    method: "POST",
    path: "/v1/beneficiaries",
    title: "Create Beneficiary",
    description:
      "Add and manage beneficiaries for secure payouts.",
  },
];

const features = [
  {
    icon: Zap,
    title: "Fast Integration",
    text: "Integrate our APIs into your application with simple REST endpoints and predictable responses.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    text: "Authentication, encryption and secure communication help protect every API interaction.",
  },
  {
    icon: Code2,
    title: "Developer Friendly",
    text: "Clear documentation, examples and consistent API patterns make integration easier.",
  },
  {
    icon: Globe,
    title: "Built for Scale",
    text: "Infrastructure designed to support growing transaction volumes and business requirements.",
  },
];

export default function ApiDocumentationPage() {
  return (
    <main className="overflow-hidden bg-white text-[#101828]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#07111f] text-white">
        {/* Background Glow */}

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#018EDE]/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#00a8ff]/10 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">

          <div className="grid items-center gap-16 lg:grid-cols-[1fr_.9fr]">

            {/* LEFT */}

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
            >

              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-sky-300 backdrop-blur">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  API v1 is live
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-7 max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
              >
                Build powerful financial experiences with our APIs.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl"
              >
                Simple, secure and scalable APIs for payments, payouts,
                wallets and financial infrastructure. Everything you need
                to integrate Finunique into your products.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-wrap gap-4"
              >
                <a
                  href="#quick-start"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#018EDE] px-7 py-4 text-sm font-bold transition hover:bg-sky-500"
                >
                  Get started
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#endpoints"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold transition hover:bg-white/10"
                >
                  Explore APIs
                  <BookOpen size={17} />
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap gap-6 text-sm text-white/50"
              >
                <div className="flex items-center gap-2">
                  <CircleCheck className="h-4 w-4 text-green-400" />
                  REST API
                </div>

                <div className="flex items-center gap-2">
                  <CircleCheck className="h-4 w-4 text-green-400" />
                  JSON responses
                </div>

                <div className="flex items-center gap-2">
                  <CircleCheck className="h-4 w-4 text-green-400" />
                  Secure authentication
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT API TERMINAL */}

            <motion.div
              initial={{
                opacity: 0,
                x: 60,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.25,
              }}
              className="relative"
            >

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-[2rem] border border-white/10 bg-[#0c1929] p-3 shadow-2xl shadow-black/40"
              >

                {/* Terminal Header */}

                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <span className="text-xs text-white/30">
                    api.finunique.com
                  </span>

                  <Terminal
                    size={16}
                    className="text-white/30"
                  />

                </div>

                {/* Request */}

                <div className="p-6">

                  <div className="mb-5 flex items-center gap-3">
                    <span className="rounded-md bg-green-500/15 px-2.5 py-1 text-xs font-bold text-green-400">
                      POST
                    </span>

                    <span className="font-mono text-sm text-white/70">
                      /v1/payments
                    </span>
                  </div>

                  <pre className="overflow-x-auto rounded-2xl bg-[#050b13] p-5 text-sm leading-7">
                    <code>
                      <span className="text-purple-300">
                        {"{"}
                      </span>
                      {"\n"}
                      {"  "}
                      <span className="text-sky-300">
                        "amount"
                      </span>
                      <span className="text-white/50">
                        : 2500,
                      </span>
                      {"\n"}
                      {"  "}
                      <span className="text-sky-300">
                        "currency"
                      </span>
                      <span className="text-white/50">
                        : "INR",
                      </span>
                      {"\n"}
                      {"  "}
                      <span className="text-sky-300">
                        "customer_id"
                      </span>
                      <span className="text-white/50">
                        : "cus_92831",
                      </span>
                      {"\n"}
                      {"  "}
                      <span className="text-sky-300">
                        "description"
                      </span>
                      <span className="text-white/50">
                        : "Order payment"
                      </span>
                      {"\n"}
                      <span className="text-purple-300">
                        {"}"}
                      </span>
                    </code>
                  </pre>

                  <div className="my-5 flex items-center gap-3">
                    <div className="h-px flex-1 bg-white/10" />

                    <span className="text-xs font-bold uppercase tracking-wider text-white/30">
                      Response
                    </span>

                    <div className="h-px flex-1 bg-white/10" />
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-green-400/10 bg-green-400/5 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-400" />

                      <span className="text-sm text-green-300">
                        200 OK
                      </span>
                    </div>

                    <span className="text-xs text-white/30">
                      128ms
                    </span>
                  </div>

                </div>
              </motion.div>

              {/* Floating API Badge */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-white/10 bg-[#102033] px-5 py-4 shadow-xl sm:block"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#018EDE]/15 text-[#4dc2ff]">
                    <Zap size={19} />
                  </span>

                  <div>
                    <p className="text-xs text-white/40">
                      Average response
                    </p>

                    <p className="font-bold">
                      &lt; 200ms
                    </p>
                  </div>
                </div>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>


      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-100px",
            }}
            className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"
          >

            <motion.div variants={fadeUp}>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-[#018EDE]">
                Developer documentation
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                Everything you need to build with Finunique.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="text-lg leading-8 text-[#101828]/55"
            >
              <p>
                Our APIs provide a simple way to connect your applications
                with powerful financial infrastructure. Create payments,
                manage payouts, access balances and build custom financial
                workflows.
              </p>

              <p className="mt-5">
                Follow our guides, explore endpoint references and use the
                code examples to move from your first request to production
                integration quickly.
              </p>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* =========================================================
          QUICK START
      ========================================================= */}

      <section
        id="quick-start"
        className="scroll-mt-24 bg-[#f6f8fa] py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">

            <div>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-[#018EDE]">
                Quick start
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight">
                Make your first API request.
              </h2>

              <p className="mt-5 leading-7 text-[#101828]/55">
                Get started with your API credentials and make your first
                request in just a few simple steps.
              </p>

              <div className="mt-8 space-y-5">

                {[
                  ["01", "Get your API keys"],
                  ["02", "Choose an endpoint"],
                  ["03", "Send your request"],
                  ["04", "Handle the response"],
                ].map(([number, text]) => (
                  <div
                    key={number}
                    className="flex items-center gap-4"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-xs font-black shadow-sm">
                      {number}
                    </span>

                    <span className="font-bold">
                      {text}
                    </span>
                  </div>
                ))}

              </div>
            </div>

            {/* CODE */}

            <div className="overflow-hidden rounded-[2rem] bg-[#07111f] shadow-2xl">

              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">

                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <span className="text-xs text-white/30">
                  JavaScript
                </span>

                <Copy
                  size={16}
                  className="text-white/30"
                />
              </div>

              <pre className="overflow-x-auto p-6 text-sm leading-7 text-white/70 sm:p-8">
                <code>{`const response = await fetch(
  "https://api.finunique.com/v1/payments",
  {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      amount: 2500,
      currency: "INR",
      customer_id: "cus_92831"
    })
  }
);

const payment = await response.json();

console.log(payment);`}</code>
              </pre>

              <div className="border-t border-white/10 px-6 py-5">
                <div className="flex items-center gap-2 text-sm text-green-400">
                  <Check size={16} />
                  Ready to run
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          AUTHENTICATION
      ========================================================= */}

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid gap-14 lg:grid-cols-2">

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#eaf7ff] text-[#018EDE]">
                <KeyRound />
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-[.2em] text-[#018EDE]">
                Authentication
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight">
                Secure every request with API keys.
              </h2>

              <p className="mt-5 leading-8 text-[#101828]/55">
                Authenticate API requests using your secret API key. Keep
                your credentials secure and never expose secret keys in
                client-side applications.
              </p>

              <div className="mt-7 space-y-4">

                {[
                  "Use HTTPS for every API request",
                  "Keep secret keys on your server",
                  "Rotate credentials when required",
                  "Never expose private keys publicly",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CircleCheck className="h-5 w-5 text-green-500" />

                    <span className="text-sm font-semibold">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="rounded-[2rem] border border-[#101828]/10 bg-[#f8fafc] p-7 sm:p-9"
            >

              <div className="flex items-center justify-between">
                <span className="text-sm font-bold">
                  Authorization header
                </span>

                <Lock
                  size={17}
                  className="text-[#018EDE]"
                />
              </div>

              <pre className="mt-6 overflow-x-auto rounded-2xl bg-[#07111f] p-6 text-sm leading-7 text-white/70">
                <code>{`Authorization:
Bearer YOUR_API_KEY`}</code>
              </pre>

              <div className="mt-6 rounded-xl border border-green-500/20 bg-green-500/5 p-4 text-sm leading-6 text-[#101828]/60">
                <strong className="text-[#101828]">
                  Security tip:
                </strong>{" "}
                Store API keys in environment variables rather than directly
                inside your source code.
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =========================================================
          API ENDPOINTS
      ========================================================= */}

      <section
        id="endpoints"
        className="scroll-mt-24 bg-[#f6f8fa] py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-[#018EDE]">
              API reference
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Explore our API endpoints.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#101828]/55">
              Use our APIs to manage payments, payouts, balances and
              beneficiaries from your applications.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {endpoints.map((endpoint, index) => (
              <motion.article
                key={endpoint.path}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group rounded-[1.75rem] border border-[#101828]/10 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl"
              >

                <div className="flex items-center justify-between">

                  <span
                    className={`rounded-md px-2.5 py-1 text-[11px] font-black ${
                      endpoint.method === "POST"
                        ? "bg-green-50 text-green-600"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {endpoint.method}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-[#101828]/25 transition group-hover:text-[#018EDE]"
                  />

                </div>

                <code className="mt-5 block overflow-x-auto text-sm font-bold text-[#101828]/70">
                  {endpoint.path}
                </code>

                <h3 className="mt-5 text-xl font-black">
                  {endpoint.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#101828]/50">
                  {endpoint.description}
                </p>

                <div className="mt-7 flex items-center gap-2 text-sm font-bold text-[#018EDE]">
                  View endpoint
                  <ChevronRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </div>

              </motion.article>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          REQUEST / RESPONSE
      ========================================================= */}

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-[#018EDE]">
                Request
              </p>

              <h2 className="mt-4 text-3xl font-black">
                Predictable JSON requests.
              </h2>

              <p className="mt-4 leading-7 text-[#101828]/55">
                Send structured JSON payloads with the required parameters
                for each endpoint.
              </p>

              <div className="mt-7 overflow-hidden rounded-2xl bg-[#07111f]">
                <pre className="overflow-x-auto p-6 text-sm leading-7 text-white/70">
                  <code>{`{
  "amount": 2500,
  "currency": "INR",
  "customer_id": "cus_92831",
  "description": "Order payment"
}`}</code>
                </pre>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-[#018EDE]">
                Response
              </p>

              <h2 className="mt-4 text-3xl font-black">
                Consistent API responses.
              </h2>

              <p className="mt-4 leading-7 text-[#101828]/55">
                Receive structured responses with transaction identifiers,
                statuses and relevant payment information.
              </p>

              <div className="mt-7 overflow-hidden rounded-2xl bg-[#07111f]">
                <pre className="overflow-x-auto p-6 text-sm leading-7 text-white/70">
                  <code>{`{
  "id": "pay_982731",
  "status": "success",
  "amount": 2500,
  "currency": "INR",
  "created_at": "2026-09-03T10:30:00Z"
}`}</code>
                </pre>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}

      <section className="bg-[#07111f] py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[.2em] text-sky-300">
              Developer experience
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Built for developers.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/50">
              Powerful infrastructure underneath. Simple APIs on top.
            </p>

          </div>

       <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
  {features.map((item, index) => {
    const Icon = item.icon;

    return (
      <motion.div
        key={item.title}
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: index * 0.1,
        }}
        whileHover={{
          y: -7,
        }}
        className="rounded-[1.75rem] border border-white/10 bg-white/[.04] p-7 transition hover:bg-white/[.07]"
      >
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#018EDE]/15 text-sky-300">
          <Icon size={22} />
        </div>

        <h3 className="mt-7 text-xl font-black">
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-white/45">
          {item.text}
        </p>
      </motion.div>
    );
  })}
</div>

        </div>
      </section>

      {/* =========================================================
          DEVELOPER WORKFLOW
      ========================================================= */}

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.2em] text-[#018EDE]">
                Integration workflow
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                From idea to production.
              </h2>

              <p className="mt-5 leading-8 text-[#101828]/55">
                Follow a straightforward integration workflow and get your
                financial product connected with our infrastructure.
              </p>

              <Link
                href="#quick-start"
                className="mt-8 inline-flex items-center gap-2 font-bold text-[#018EDE]"
              >
                Start integrating
                <ArrowRight size={17} />
              </Link>

            </div>

            <div className="space-y-0">

              {[
                [
                  "01",
                  Rocket,
                  "Create your account",
                  "Create your developer account and access your API credentials.",
                ],
                [
                  "02",
                  KeyRound,
                  "Configure authentication",
                  "Secure your application using your API keys and environment variables.",
                ],
                [
                  "03",
                  Code2,
                  "Build your integration",
                  "Use our API reference and examples to connect your application.",
                ],
                [
                  "04",
                  Play,
                  "Test & go live",
                  "Test your integration and move to production when you're ready.",
                ],
              ].map(([number, Icon, title, text]) => (

                <motion.div
                  key={number}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="group relative flex gap-6 border-b border-[#101828]/10 py-7"
                >

                  <span className="text-sm font-black text-[#018EDE]">
                    {number}
                  </span>

                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#f1f8fc] text-[#018EDE]">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 className="text-xl font-black">
                      {title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#101828]/50">
                      {text}
                    </p>
                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          API ARCHITECTURE
      ========================================================= */}

      <section className="bg-[#f6f8fa] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[.2em] text-[#018EDE]">
              API architecture
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Designed around simple building blocks.
            </h2>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {[
              [
                Server,
                "Your Application",
                "Your website, mobile application or backend sends secure requests.",
              ],
              [
                Network,
                "Finunique API",
                "Our API processes requests and connects your application with financial infrastructure.",
              ],
              [
                Database,
                "Financial Infrastructure",
                "Payments, payouts, balances and transaction data are securely processed.",
              ],
            ].map(([Icon, title, text], index) => (

              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="relative rounded-[2rem] border border-[#101828]/10 bg-white p-8 text-center"
              >

                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#eaf7ff] text-[#018EDE]">
                  <Icon size={27} />
                </div>

                <h3 className="mt-6 text-xl font-black">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#101828]/50">
                  {text}
                </p>

                {index !== 2 && (
                  <div className="absolute -right-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-[#101828]/10 bg-white text-[#018EDE] md:grid">
                    <ArrowRight size={15} />
                  </div>
                )}

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          SECURITY
      ========================================================= */}

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="rounded-[2.5rem] bg-[#07111f] p-8 text-white sm:p-12 lg:p-16">

            <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">

              <div>

                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-sky-300">
                  <ShieldCheck size={27} />
                </div>

                <p className="mt-7 text-sm font-bold uppercase tracking-[.2em] text-sky-300">
                  Security
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                  Security built into every layer.
                </h2>

                <p className="mt-5 leading-8 text-white/50">
                  Protect your financial workflows with secure authentication,
                  encrypted communication and controlled access.
                </p>

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  [Lock, "Encrypted communication"],
                  [KeyRound, "Secure API authentication"],
                  [ShieldCheck, "Controlled access"],
                  [FileJson, "Structured responses"],
                ].map(([Icon, title]) => (

                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/[.04] p-6"
                  >
                    <Icon
                      size={22}
                      className="text-sky-300"
                    />

                    <p className="mt-5 font-bold">
                      {title}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#018EDE] py-20 text-white sm:py-24">

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">

          <p className="text-sm font-bold uppercase tracking-[.2em] text-white/60">
            Start building
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            Ready to build with Finunique?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Explore our APIs, connect your application and start building
            powerful financial experiences today.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <a
              href="#quick-start"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#07111f] transition hover:bg-white/90"
            >
              Start integrating
              <ArrowRight size={17} />
            </a>

            <a
              href="#endpoints"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-bold transition hover:bg-white/10"
            >
              View API reference
              <BookOpen size={17} />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}