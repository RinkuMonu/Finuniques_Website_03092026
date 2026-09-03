"use client";

import { motion } from "framer-motion";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  Bell,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Cloud,
  Database,
  Globe,
  History,
  Info,
  Layers3,
  Lock,
  Mail,
  MessageCircle,
  RefreshCw,
  Server,
  ShieldCheck,
  TriangleAlert,
  XCircle,
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

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    icon: Globe,
    name: "Payment API",
    description: "Payment processing and transaction services",
    uptime: "99.99%",
    response: "124ms",
    status: "Operational",
  },
  {
    icon: ArrowRight,
    name: "Payout API",
    description: "Payout processing and beneficiary services",
    uptime: "99.98%",
    response: "156ms",
    status: "Operational",
  },
  {
    icon: Lock,
    name: "Authentication",
    description: "API authentication and access management",
    uptime: "99.99%",
    response: "82ms",
    status: "Operational",
  },
  {
    icon: Database,
    name: "Wallet & Balance",
    description: "Wallet, balance and settlement services",
    uptime: "99.97%",
    response: "118ms",
    status: "Operational",
  },
  {
    icon: Activity,
    name: "Webhooks",
    description: "Event notifications and webhook delivery",
    uptime: "99.95%",
    response: "143ms",
    status: "Operational",
  },
  {
    icon: Server,
    name: "Dashboard",
    description: "Merchant dashboard and management tools",
    uptime: "99.99%",
    response: "96ms",
    status: "Operational",
  },
];

/* =========================================================
   INCIDENTS
========================================================= */

const incidents = [
  {
    date: "August 28, 2026",
    title: "Elevated API response times",
    description:
      "Some API requests experienced higher-than-normal response times. The issue was identified and resolved by our engineering team.",
    status: "Resolved",
    duration: "32 minutes",
  },
  {
    date: "August 16, 2026",
    title: "Webhook delivery delays",
    description:
      "A temporary delay affected webhook event delivery for a subset of transactions. All queued events were successfully processed.",
    status: "Resolved",
    duration: "18 minutes",
  },
  {
    date: "July 31, 2026",
    title: "Scheduled infrastructure maintenance",
    description:
      "Routine infrastructure maintenance was completed successfully with no customer action required.",
    status: "Completed",
    duration: "45 minutes",
  },
];

/* =========================================================
   STATUS CHECKS
========================================================= */

const statusChecks = [
  {
    icon: Cloud,
    title: "API Infrastructure",
    text: "Core API infrastructure is operating normally.",
  },
  {
    icon: Database,
    title: "Database Services",
    text: "Database and transaction storage systems are operational.",
  },
  {
    icon: ShieldCheck,
    title: "Security Services",
    text: "Authentication and security systems are operating normally.",
  },
  {
    icon: MessageCircle,
    title: "Webhook Delivery",
    text: "Webhook processing and event delivery are operational.",
  },
];

/* =========================================================
   ANIMATION HELPERS
========================================================= */

const cardAnimation = {
  initial: {
    opacity: 0,
    y: 25,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    margin: "-80px",
  },
};

/* =========================================================
   PAGE
========================================================= */

export default function ApiStatusPage() {
  return (
    <main className="overflow-hidden bg-white text-[#101828]">

      {/* =====================================================
          HERO / OVERALL STATUS
      ===================================================== */}

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

          <div className="grid items-center gap-16 lg:grid-cols-[1fr_.85fr]">

            {/* LEFT */}

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
            >

              <motion.div variants={fadeUp}>

                <span className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-300">

                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                  All Systems Operational

                </span>

              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-7 max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
              >
                API Status
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl"
              >
                Real-time visibility into the health, performance and
                availability of Finunique services.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-wrap gap-4"
              >

                <a
                  href="#services"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#018EDE] px-7 py-4 text-sm font-bold transition hover:bg-sky-500"
                >
                  View service status

                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#incidents"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold transition hover:bg-white/10"
                >
                  Incident history

                  <History size={17} />
                </a>

              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap gap-6 text-sm text-white/50"
              >

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  API operational
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  No active incidents
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  Systems monitored 24/7
                </div>

              </motion.div>

            </motion.div>

            {/* RIGHT STATUS CARD */}

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
                className="rounded-[2rem] border border-white/10 bg-[#0c1929] p-7 shadow-2xl shadow-black/40"
              >

                {/* Card Header */}

                <div className="flex items-center justify-between border-b border-white/10 pb-5">

                  <div className="flex items-center gap-3">

                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-green-400/10 text-green-400">

                      <Activity size={21} />

                    </div>

                    <div>

                      <p className="font-bold">
                        System Status
                      </p>

                      <p className="text-xs text-white/35">
                        Updated just now
                      </p>

                    </div>

                  </div>

                  <RefreshCw
                    size={17}
                    className="text-white/30"
                  />

                </div>

                {/* Overall Status */}

                <div className="py-8 text-center">

                  <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-green-400/20 bg-green-400/10">

                    <CheckCircle2
                      size={48}
                      className="text-green-400"
                    />

                  </div>

                  <h3 className="mt-6 text-2xl font-black">
                    All Systems Operational
                  </h3>

                  <p className="mt-2 text-sm text-white/40">
                    No known issues affecting our services.
                  </p>

                </div>

                {/* Stats */}

                <div className="grid grid-cols-2 gap-3">

                  <div className="rounded-xl border border-white/10 bg-white/[.03] p-4">

                    <p className="text-xs text-white/35">
                      Overall uptime
                    </p>

                    <p className="mt-2 text-xl font-black">
                      99.99%
                    </p>

                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[.03] p-4">

                    <p className="text-xs text-white/35">
                      Avg. response
                    </p>

                    <p className="mt-2 text-xl font-black">
                      112ms
                    </p>

                  </div>

                </div>

              </motion.div>

              {/* Floating Badge */}

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
                      Current latency
                    </p>

                    <p className="font-bold">
                      112ms
                    </p>

                  </div>

                </div>

              </motion.div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          STATUS SUMMARY
      ===================================================== */}

      <section className="py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-100px",
            }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >

            {/* Operational */}

            <motion.div
              variants={fadeUp}
              className="rounded-[1.5rem] border border-[#101828]/10 bg-white p-6 shadow-sm"
            >

              <div className="flex items-center justify-between">

                <span className="text-sm font-bold">
                  Operational
                </span>

                <CheckCircle2
                  size={20}
                  className="text-green-500"
                />

              </div>

              <p className="mt-4 text-3xl font-black">
                6
              </p>

              <p className="mt-1 text-sm text-[#101828]/45">
                Services running normally
              </p>

            </motion.div>

            {/* Incidents */}

            <motion.div
              variants={fadeUp}
              className="rounded-[1.5rem] border border-[#101828]/10 bg-white p-6 shadow-sm"
            >

              <div className="flex items-center justify-between">

                <span className="text-sm font-bold">
                  Active incidents
                </span>

                <AlertCircle
                  size={20}
                  className="text-green-500"
                />

              </div>

              <p className="mt-4 text-3xl font-black">
                0
              </p>

              <p className="mt-1 text-sm text-[#101828]/45">
                No ongoing incidents
              </p>

            </motion.div>

            {/* Uptime */}

            <motion.div
              variants={fadeUp}
              className="rounded-[1.5rem] border border-[#101828]/10 bg-white p-6 shadow-sm"
            >

              <div className="flex items-center justify-between">

                <span className="text-sm font-bold">
                  30-day uptime
                </span>

                <Activity
                  size={20}
                  className="text-[#018EDE]"
                />

              </div>

              <p className="mt-4 text-3xl font-black">
                99.99%
              </p>

              <p className="mt-1 text-sm text-[#101828]/45">
                Across all services
              </p>

            </motion.div>

            {/* Response */}

            <motion.div
              variants={fadeUp}
              className="rounded-[1.5rem] border border-[#101828]/10 bg-white p-6 shadow-sm"
            >

              <div className="flex items-center justify-between">

                <span className="text-sm font-bold">
                  Avg. response
                </span>

                <Clock3
                  size={20}
                  className="text-[#018EDE]"
                />

              </div>

              <p className="mt-4 text-3xl font-black">
                112ms
              </p>

              <p className="mt-1 text-sm text-[#101828]/45">
                Current API latency
              </p>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="services"
        className="scroll-mt-24 bg-[#f6f8fa] py-24 sm:py-32"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[.2em] text-[#018EDE]">
              Service status
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Everything is running smoothly.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#101828]/55">
              Monitor the current operational status and performance of
              every Finunique service from one place.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (
                <motion.article
                  key={service.name}
                  {...cardAnimation}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group rounded-[1.75rem] border border-[#101828]/10 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl"
                >

                  <div className="flex items-start justify-between">

                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#eaf7ff] text-[#018EDE]">

                      <Icon size={22} />

                    </div>

                    <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-600">

                      <span className="h-2 w-2 rounded-full bg-green-500" />

                      {service.status}

                    </span>

                  </div>

                  <h3 className="mt-7 text-xl font-black">
                    {service.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#101828]/50">
                    {service.description}
                  </p>

                  <div className="mt-7 grid grid-cols-2 gap-3">

                    <div className="rounded-xl bg-[#f6f8fa] p-4">

                      <p className="text-xs text-[#101828]/40">
                        Uptime
                      </p>

                      <p className="mt-1 font-black">
                        {service.uptime}
                      </p>

                    </div>

                    <div className="rounded-xl bg-[#f6f8fa] p-4">

                      <p className="text-xs text-[#101828]/40">
                        Response
                      </p>

                      <p className="mt-1 font-black">
                        {service.response}
                      </p>

                    </div>

                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#018EDE]">

                    Operational

                    <ChevronRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />

                  </div>

                </motion.article>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          PERFORMANCE
      ===================================================== */}

      <section className="py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">

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

              <p className="text-sm font-bold uppercase tracking-[.2em] text-[#018EDE]">
                Performance
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                Reliable performance, monitored continuously.
              </h2>

              <p className="mt-5 leading-8 text-[#101828]/55">
                Our infrastructure is continuously monitored to identify
                performance issues and maintain reliable API availability.
              </p>

              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-green-500/15 bg-green-500/5 p-5">

                <CheckCircle2
                  size={22}
                  className="text-green-500"
                />

                <div>

                  <p className="font-bold">
                    No performance issues detected
                  </p>

                  <p className="mt-1 text-sm text-[#101828]/50">
                    All monitored services are within normal operating ranges.
                  </p>

                </div>

              </div>

            </motion.div>

            {/* Performance Card */}

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

                <div>

                  <p className="text-sm font-bold">
                    API response time
                  </p>

                  <p className="mt-1 text-xs text-[#101828]/40">
                    Last 24 hours
                  </p>

                </div>

                <Activity
                  size={20}
                  className="text-[#018EDE]"
                />

              </div>

              {/* Fake Graph */}

              <div className="mt-8 flex h-48 items-end gap-2">

                {[
                  48,
                  65,
                  55,
                  72,
                  60,
                  78,
                  68,
                  84,
                  70,
                  76,
                  64,
                  82,
                  74,
                  88,
                  70,
                  79,
                  66,
                  83,
                  72,
                  86,
                  68,
                  77,
                  63,
                  74,
                ].map((height, index) => (

                  <motion.div
                    key={index}
                    initial={{
                      height: 0,
                    }}
                    whileInView={{
                      height: `${height}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.025,
                    }}
                    className="flex-1 rounded-t-md bg-[#018EDE]/20"
                  />

                ))}

              </div>

              <div className="mt-5 flex justify-between text-xs text-[#101828]/35">

                <span>
                  24h ago
                </span>

                <span>
                  12h ago
                </span>

                <span>
                  Now
                </span>

              </div>

              <div className="mt-7 grid grid-cols-3 gap-3">

                <div>

                  <p className="text-xs text-[#101828]/40">
                    Average
                  </p>

                  <p className="mt-1 font-black">
                    112ms
                  </p>

                </div>

                <div>

                  <p className="text-xs text-[#101828]/40">
                    Fastest
                  </p>

                  <p className="mt-1 font-black">
                    78ms
                  </p>

                </div>

                <div>

                  <p className="text-xs text-[#101828]/40">
                    Peak
                  </p>

                  <p className="mt-1 font-black">
                    184ms
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SYSTEM CHECKS
      ===================================================== */}

      <section className="bg-[#f6f8fa] py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[.2em] text-[#018EDE]">
              System monitoring
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Every layer is monitored.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#101828]/50">
              We continuously monitor the infrastructure behind every
              Finunique service.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {statusChecks.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  {...cardAnimation}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="rounded-[1.75rem] border border-[#101828]/10 bg-white p-7"
                >

                  <div className="flex items-center justify-between">

                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#eaf7ff] text-[#018EDE]">

                      <Icon size={22} />

                    </div>

                    <CheckCircle2
                      size={20}
                      className="text-green-500"
                    />

                  </div>

                  <h3 className="mt-7 text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#101828]/50">
                    {item.text}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-green-600">

                    <span className="h-2 w-2 rounded-full bg-green-500" />

                    Operational

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          INCIDENT HISTORY
      ===================================================== */}

      <section
        id="incidents"
        className="scroll-mt-24 py-24 sm:py-32"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[.2em] text-[#018EDE]">
                Incident history
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                Recent incidents.
              </h2>

              <p className="mt-5 leading-8 text-[#101828]/55">
                Review previous service incidents, maintenance events and
                their resolution status.
              </p>

              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-[#f6f8fa] p-5">

                <History
                  size={21}
                  className="text-[#018EDE]"
                />

                <div>

                  <p className="font-bold">
                    Incident transparency
                  </p>

                  <p className="mt-1 text-sm text-[#101828]/45">
                    We keep a record of service disruptions and maintenance.
                  </p>

                </div>

              </div>

            </div>

            {/* Timeline */}

            <div className="space-y-0">

              {incidents.map((incident, index) => (

                <motion.div
                  key={incident.title}
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
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="relative flex gap-6 border-b border-[#101828]/10 py-7"
                >

                  <div className="relative">

                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-green-50 text-green-600">

                      <Check
                        size={20}
                      />

                    </div>

                  </div>

                  <div className="flex-1">

                    <div className="flex flex-wrap items-center justify-between gap-3">

                      <p className="text-xs font-bold uppercase tracking-wider text-[#101828]/35">
                        {incident.date}
                      </p>

                      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">
                        {incident.status}
                      </span>

                    </div>

                    <h3 className="mt-3 text-xl font-black">
                      {incident.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#101828]/50">
                      {incident.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#101828]/40">

                      <Clock3 size={14} />

                      Duration: {incident.duration}

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          STATUS LEGEND
      ===================================================== */}

      <section className="bg-[#07111f] py-24 text-white sm:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[.2em] text-sky-300">
              Status indicators
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Understand our service statuses.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/50">
              We use clear status indicators to communicate the health of
              every service.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {/* Operational */}

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[.04] p-7">

              <CheckCircle2
                size={25}
                className="text-green-400"
              />

              <h3 className="mt-6 text-xl font-black">
                Operational
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                The service is functioning normally without known issues.
              </p>

            </div>

            {/* Degraded */}

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[.04] p-7">

              <TriangleAlert
                size={25}
                className="text-yellow-400"
              />

              <h3 className="mt-6 text-xl font-black">
                Degraded Performance
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                The service is available but may be experiencing slower
                performance.
              </p>

            </div>

            {/* Partial Outage */}

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[.04] p-7">

              <AlertCircle
                size={25}
                className="text-orange-400"
              />

              <h3 className="mt-6 text-xl font-black">
                Partial Outage
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                Some functionality may be unavailable or affected.
              </p>

            </div>

            {/* Major Outage */}

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[.04] p-7">

              <XCircle
                size={25}
                className="text-red-400"
              />

              <h3 className="mt-6 text-xl font-black">
                Major Outage
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                A significant service disruption is currently affecting users.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SUBSCRIBE CTA
      ===================================================== */}

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

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">

          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white/10">

            <Bell size={27} />

          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[.2em] text-white/60">
            Stay informed
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            Never miss a service update.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Subscribe to status notifications and receive updates about
            incidents, maintenance and service availability.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#07111f] transition hover:bg-white/90"
            >

              <Mail size={17} />

              Subscribe to updates

            </button>

            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-bold transition hover:bg-white/10"
            >

              View service status

              <ArrowRight size={17} />

            </a>

          </div>

        </div>

      </section>

    </main>
  );
}