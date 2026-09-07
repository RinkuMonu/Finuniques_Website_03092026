"use client";

import React from "react";
import {
  ArrowRight,
  Check,
  BookOpen,
  GraduationCap,
  Users,
  Clock3,
  Award,
  Play,
  Laptop,
  Brain,
  BarChart3,
  FileCheck2,
  Video,
  Trophy,
  Sparkles,
  ChevronDown,
  BookMarked,
  MonitorPlay,
  UserRound,
  Lightbulb,
} from "lucide-react";

export default function EducationCollection() {
  return (
    <main className="overflow-hidden bg-white text-[#073F52]">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#f4fbfe]">

        {/* Background Glow */}
        <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-[#d9f5ff] opacity-70 blur-3xl" />

        <div className="absolute right-[-120px] top-[-100px] h-[600px] w-[600px] rounded-full bg-[#dff7ff] opacity-80 blur-3xl" />

        <div className="relative mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-20">

          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">

            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}
            <div>

              {/* Badge */}
              <div className="mb-8 inline-flex items-center rounded-full border border-[#bde7f7] bg-white px-6 py-3 shadow-sm">

                <span className="text-sm font-bold tracking-[0.18em] text-[#058fd0]">
                  EDTECH
                </span>

              </div>


              {/* Heading */}
              <h1 className="max-w-[700px] text-[48px] font-bold leading-[1.02] tracking-[-0.04em] text-[#063F52] sm:text-[60px] lg:text-[72px]">

                Learn smarter.
                <br />

                <span className="text-[#0798D5]">
                  Grow faster.
                </span>

              </h1>


              {/* Description */}
              <p className="mt-8 max-w-[650px] text-[18px] leading-8 text-[#315b68] sm:text-[20px]">

                Discover expert-led courses, interactive learning and
                practical skills designed to help students learn better,
                build confidence and achieve their goals.

              </p>


              {/* Buttons */}
              <div className="mt-9 flex flex-wrap gap-4">

                <button className="group flex items-center gap-4 rounded-full bg-[#0798D5] px-8 py-4 text-[17px] font-semibold text-white shadow-[0_15px_35px_rgba(7,152,213,0.25)] transition hover:bg-[#058bc5]">

                  Explore Courses

                  <ArrowRight
                    size={20}
                    className="transition group-hover:translate-x-1"
                  />

                </button>


                <button className="flex items-center gap-3 rounded-full border border-[#b9e3f3] bg-white px-8 py-4 text-[17px] font-semibold text-[#078dcc] shadow-sm transition hover:bg-[#f0faff]">

                  <Play size={18} />

                  Start Learning

                </button>

              </div>


              {/* Mini Features */}
              <div className="mt-11 grid max-w-[700px] grid-cols-2 gap-4 sm:grid-cols-4">

                {[
                  {
                    icon: BookOpen,
                    title: "Courses",
                  },
                  {
                    icon: Video,
                    title: "Live Classes",
                  },
                  {
                    icon: Award,
                    title: "Certificates",
                  },
                  {
                    icon: Users,
                    title: "Expert Mentors",
                  },
                ].map((item, index) => {

                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-[#d7edf5] bg-white px-4 py-4 shadow-[0_8px_30px_rgba(6,63,82,0.04)]"
                    >

                      <Icon
                        size={22}
                        className="mb-3 text-[#0798D5]"
                        strokeWidth={1.8}
                      />

                      <p className="text-sm font-semibold text-[#073F52]">
                        {item.title}
                      </p>

                    </div>
                  );

                })}

              </div>

            </div>


            {/* =====================================================
                RIGHT EDUCATION DASHBOARD
            ===================================================== */}
            <div className="relative flex min-h-[570px] items-center justify-center">

              {/* Main Circle */}
              <div className="absolute h-[420px] w-[420px] rounded-full border border-[#bce8f7] bg-[#e8f8fd] sm:h-[500px] sm:w-[500px]" />

              <div className="absolute h-[330px] w-[330px] rounded-full border border-[#c7edf8] bg-white/70 sm:h-[400px] sm:w-[400px]" />


              {/* MAIN LEARNING CARD */}
              <div className="relative z-10 w-[310px] rounded-[30px] border border-[#d9edf4] bg-white p-7 shadow-[0_30px_80px_rgba(6,63,82,0.14)] sm:w-[350px]">

                {/* Header */}
                <div className="flex items-start justify-between">

                  <div>

                    <p className="text-xs font-bold tracking-[0.15em] text-[#0798D5]">
                      MY LEARNING
                    </p>

                    <p className="mt-2 text-3xl font-bold text-[#073F52]">
                      72%
                    </p>

                    <p className="mt-1 text-sm text-[#83a3ad]">
                      Course progress
                    </p>

                  </div>


                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#073F52] text-white">

                    <GraduationCap size={27} />

                  </div>

                </div>


                {/* Progress */}
                <div className="mt-6">

                  <div className="mb-2 flex justify-between text-xs">

                    <span className="font-semibold text-[#073F52]">
                      Web Development
                    </span>

                    <span className="text-[#0798D5]">
                      72%
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-[#e5f3f7]">

                    <div
                      className="h-2 w-[72%] rounded-full bg-[#0798D5]"
                    />

                  </div>

                </div>


                {/* Current Course */}
                <div className="mt-7 rounded-2xl border border-[#c9ebf7] bg-[#effaff] p-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0798D5] text-white">

                      <Laptop size={21} />

                    </div>

                    <div>

                      <p className="font-semibold text-[#073F52]">
                        Current Course
                      </p>

                      <p className="text-xs text-[#8aa8b1]">
                        Learn at your own pace
                      </p>

                    </div>

                  </div>

                </div>


                {/* Learning Stats */}
                <div className="mt-3 space-y-3">

                  {[
                    ["18", "Lessons completed"],
                    ["12h", "Learning time"],
                    ["04", "Certificates"],
                  ].map(([value, label], index) => (

                    <div
                      key={index}
                      className="flex items-center justify-between rounded-xl border border-[#e4f1f5] px-4 py-3"
                    >

                      <span className="font-bold text-[#0798D5]">
                        {value}
                      </span>

                      <span className="text-sm text-[#6e909a]">
                        {label}
                      </span>

                      <Check
                        size={18}
                        className="text-[#0798D5]"
                      />

                    </div>

                  ))}

                </div>


                {/* Footer */}
                <div className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#eaf8fc] py-3 text-sm font-semibold text-[#078dcc]">

                  <Sparkles size={18} />

                  Keep learning. Keep growing.

                </div>

              </div>


              {/* =====================================================
                  FLOATING BADGES
              ===================================================== */}

              {/* Badge 1 */}
              <div className="absolute left-0 top-[110px] z-20 rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(6,63,82,0.10)]">

                <p className="text-[11px] font-bold tracking-[0.15em] text-[#0798D5]">
                  COURSES
                </p>

                <p className="mt-1 text-xl font-bold text-[#073F52]">
                  500+
                </p>

              </div>


              {/* Badge 2 */}
              <div className="absolute right-[-10px] top-[80px] z-20 rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(6,63,82,0.10)]">

                <p className="text-[11px] font-bold tracking-[0.15em] text-[#0798D5]">
                  STUDENTS
                </p>

                <p className="mt-1 text-xl font-bold text-[#073F52]">
                  50K+
                </p>

              </div>


              {/* Badge 3 */}
              <div className="absolute bottom-[85px] left-[-15px] z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d6edf5] bg-white text-[#0798D5] shadow-[0_15px_40px_rgba(6,63,82,0.10)]">

                <Award size={28} />

              </div>


              {/* Badge 4 */}
              <div className="absolute bottom-[70px] right-[5px] z-20 rounded-2xl border border-[#d6edf5] bg-white px-5 py-4 shadow-[0_15px_40px_rgba(6,63,82,0.10)]">

                <p className="text-[11px] font-bold tracking-[0.15em] text-[#0798D5]">
                  LEARNING
                </p>

                <p className="mt-1 text-xl font-bold text-[#073F52]">
                  Anytime
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          TRUST / STATISTICS
      ========================================================= */}
      <section className="border-y border-[#e3f2f6] bg-white">

        <div className="mx-auto grid max-w-[1200px] grid-cols-2 lg:grid-cols-4">

          {[
            ["500+", "Courses Available"],
            ["50K+", "Active Learners"],
            ["1,200+", "Expert Instructors"],
            ["95%+", "Learner Satisfaction"],
          ].map(([value, label], index) => (

            <div
              key={index}
              className="border-[#e6f2f6] px-6 py-9 text-center lg:border-r last:border-r-0"
            >

              <p className="text-3xl font-bold text-[#073F52]">
                {value}
              </p>

              <p className="mt-2 text-sm text-[#7696a0]">
                {label}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          COURSE CATEGORIES
      ========================================================= */}
      <section className="bg-white py-20 lg:py-28">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="mx-auto max-w-[700px] text-center">

            <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
              EXPLORE LEARNING
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-[#073F52] sm:text-5xl">

              Everything you need to learn and grow.

            </h2>

            <p className="mt-5 text-lg leading-8 text-[#6d909b]">

              Explore courses and learning paths designed around your
              interests, career goals and academic journey.

            </p>

          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: Laptop,
                title: "Technology",
                courses: "120+ Courses",
                description:
                  "Programming, web development, AI, data science and more.",
              },
              {
                icon: Brain,
                title: "Competitive Exams",
                courses: "150+ Courses",
                description:
                  "Prepare smarter with structured exam-focused learning.",
              },
              {
                icon: BarChart3,
                title: "Business",
                courses: "80+ Courses",
                description:
                  "Build practical skills for business, finance and management.",
              },
              {
                icon: Lightbulb,
                title: "Skill Development",
                courses: "100+ Courses",
                description:
                  "Develop communication, creative and professional skills.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-[25px] border border-[#dceff5] bg-white p-7 shadow-[0_12px_35px_rgba(6,63,82,0.05)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(6,63,82,0.09)]"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9f8fd] text-[#0798D5]">

                    <Icon
                      size={27}
                      strokeWidth={1.8}
                    />

                  </div>


                  <h3 className="mt-6 text-xl font-bold text-[#073F52]">
                    {item.title}
                  </h3>


                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#0798D5]">
                    {item.courses}
                  </p>


                  <p className="mt-3 text-sm leading-7 text-[#7897a0]">
                    {item.description}
                  </p>


                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#0798D5]">

                    Explore

                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />

                  </div>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}
      <section className="bg-[#f4fbfe] py-20 lg:py-28">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Visual */}
            <div className="relative min-h-[450px]">

              <div className="absolute inset-8 rounded-[40px] bg-[#dff5fc]" />


              {/* Main Card */}
              <div className="absolute left-1/2 top-1/2 w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-[#dceff5] bg-white p-7 shadow-[0_25px_70px_rgba(6,63,82,0.10)]">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs font-bold tracking-wider text-[#0798D5]">
                      YOUR PROGRESS
                    </p>

                    <p className="mt-2 text-3xl font-bold text-[#073F52]">
                      86%
                    </p>

                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0798D5] text-white">
                    <BarChart3 size={27} />
                  </div>

                </div>


                <div className="mt-7 space-y-4">

                  {[
                    ["JavaScript", "92%"],
                    ["React", "78%"],
                    ["Projects", "84%"],
                  ].map(([title, progress], index) => (

                    <div key={index}>

                      <div className="mb-2 flex justify-between text-xs">

                        <span className="font-semibold text-[#073F52]">
                          {title}
                        </span>

                        <span className="text-[#0798D5]">
                          {progress}
                        </span>

                      </div>

                      <div className="h-2 rounded-full bg-[#e5f3f7]">

                        <div
                          className="h-2 rounded-full bg-[#0798D5]"
                          style={{
                            width: progress,
                          }}
                        />

                      </div>

                    </div>

                  ))}

                </div>

              </div>


              {/* Floating */}
              <div className="absolute left-0 top-10 rounded-2xl border border-[#d4edf5] bg-white px-5 py-4 shadow-lg">

                <BookOpen
                  className="text-[#0798D5]"
                  size={24}
                />

                <p className="mt-2 text-sm font-bold text-[#073F52]">
                  Learn by Doing
                </p>

              </div>


              <div className="absolute bottom-10 right-0 rounded-2xl border border-[#d4edf5] bg-white px-5 py-4 shadow-lg">

                <Trophy
                  className="text-[#0798D5]"
                  size={24}
                />

                <p className="mt-2 text-sm font-bold text-[#073F52]">
                  Achieve More
                </p>

              </div>

            </div>


            {/* Content */}
            <div>

              <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
                WHY LEARN WITH US
              </span>


              <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-[#073F52] sm:text-5xl">

                Education designed around the way you learn.

              </h2>


              <p className="mt-6 text-lg leading-8 text-[#6c8e98]">

                Learn from anywhere with structured courses, expert guidance,
                practical projects and tools that help you turn knowledge
                into real-world skills.

              </p>


              <div className="mt-8 space-y-5">

                {[
                  [
                    "Learn at your own pace",
                    "Access lessons whenever you want and learn according to your schedule.",
                  ],
                  [
                    "Expert instructors",
                    "Learn from experienced educators and industry professionals.",
                  ],
                  [
                    "Practical learning",
                    "Build projects and practice concepts instead of just watching videos.",
                  ],
                  [
                    "Track your progress",
                    "Monitor your learning journey and stay motivated to complete your goals.",
                  ],
                ].map(([title, description], index) => (

                  <div
                    key={index}
                    className="flex gap-4"
                  >

                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0798D5] text-white">

                      <Check size={15} />

                    </div>


                    <div>

                      <h3 className="font-bold text-[#073F52]">
                        {title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-[#7897a0]">
                        {description}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section className="bg-white py-20 lg:py-28">

        <div className="mx-auto max-w-[1100px] px-6">

          <div className="mx-auto max-w-[700px] text-center">

            <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
              HOW IT WORKS
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">

              Start learning in three simple steps.

            </h2>

          </div>


          <div className="relative mt-16 grid gap-8 md:grid-cols-3">

            {/* Connecting Line */}
            <div className="absolute left-[17%] right-[17%] top-[40px] hidden h-px bg-[#bce6f3] md:block" />


            {[
              {
                number: "01",
                icon: BookOpen,
                title: "Choose your course",
                text: "Find a course that matches your interests, goals and skill level.",
              },
              {
                number: "02",
                icon: MonitorPlay,
                title: "Learn anywhere",
                text: "Watch lessons, attend live classes and practice at your own pace.",
              },
              {
                number: "03",
                icon: Trophy,
                title: "Build & achieve",
                text: "Complete projects, earn certificates and take the next step.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="relative text-center"
                >

                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-white bg-[#0798D5] text-white shadow-lg">

                    <Icon size={28} />

                  </div>


                  <span className="mt-5 block text-xs font-bold tracking-[0.2em] text-[#0798D5]">

                    STEP {item.number}

                  </span>


                  <h3 className="mt-3 text-xl font-bold text-[#073F52]">
                    {item.title}
                  </h3>


                  <p className="mx-auto mt-3 max-w-[280px] text-sm leading-7 text-[#7897a0]">
                    {item.text}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          FEATURED COURSES
      ========================================================= */}
      <section className="bg-[#f4fbfe] py-20 lg:py-28">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div>

              <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
                FEATURED COURSES
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">

                Learn something valuable today.

              </h2>

            </div>


            <button className="flex items-center gap-2 font-semibold text-[#0798D5]">

              View All Courses

              <ArrowRight size={18} />

            </button>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                category: "DEVELOPMENT",
                title: "Full Stack Web Development",
                lessons: "42 Lessons",
                duration: "18 Hours",
                students: "12K Students",
              },
              {
                category: "DATA SCIENCE",
                title: "Data Science & Machine Learning",
                lessons: "36 Lessons",
                duration: "16 Hours",
                students: "8K Students",
              },
              {
                category: "COMPETITIVE EXAMS",
                title: "General Aptitude Masterclass",
                lessons: "58 Lessons",
                duration: "24 Hours",
                students: "15K Students",
              },
            ].map((course, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-[28px] border border-[#dceff5] bg-white shadow-[0_12px_35px_rgba(6,63,82,0.05)]"
              >

                {/* Course Image Placeholder */}
                <div className="relative flex h-[190px] items-center justify-center bg-[#e6f7fc]">

                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-[#0798D5] shadow-lg">

                    <BookOpen size={34} />

                  </div>


                  <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-[10px] font-bold tracking-wider text-[#0798D5] shadow-sm">

                    {course.category}

                  </div>

                </div>


                <div className="p-7">

                  <h3 className="text-xl font-bold leading-7 text-[#073F52]">
                    {course.title}
                  </h3>


                  <div className="mt-5 flex flex-wrap gap-3 text-xs text-[#7897a0]">

                    <span className="flex items-center gap-1.5">
                      <BookOpen size={14} />
                      {course.lessons}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Clock3 size={14} />
                      {course.duration}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Users size={14} />
                      {course.students}
                    </span>

                  </div>


                  <div className="mt-6 flex items-center justify-between border-t border-[#edf4f6] pt-5">

                    <span className="font-bold text-[#073F52]">
                      Start Learning
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf8fd] text-[#0798D5]">

                      <ArrowRight size={18} />

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          LEARNING EXPERIENCE
      ========================================================= */}
      <section className="bg-white py-20 lg:py-28">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
                LEARNING EXPERIENCE
              </span>


              <h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">

                More than videos. A complete learning experience.

              </h2>


              <p className="mt-6 text-lg leading-8 text-[#6d909b]">

                Everything you need to understand concepts, practice your
                skills and stay motivated throughout your learning journey.

              </p>


              <div className="mt-9 grid gap-5 sm:grid-cols-2">

                {[
                  {
                    icon: Video,
                    title: "Live Classes",
                  },
                  {
                    icon: FileCheck2,
                    title: "Practice Tests",
                  },
                  {
                    icon: Users,
                    title: "Expert Mentors",
                  },
                  {
                    icon: Award,
                    title: "Certificates",
                  },
                ].map((item, index) => {

                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-[#dceff5] p-5"
                    >

                      <Icon
                        size={24}
                        className="text-[#0798D5]"
                      />

                      <p className="mt-4 font-bold text-[#073F52]">
                        {item.title}
                      </p>

                    </div>
                  );

                })}

              </div>

            </div>


            {/* Dashboard */}
            <div className="relative">

              <div className="rounded-[35px] border border-[#d7edf5] bg-[#f4fbfe] p-8">

                <div className="rounded-[25px] bg-white p-6 shadow-[0_20px_50px_rgba(6,63,82,0.07)]">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xs font-bold tracking-wider text-[#0798D5]">
                        LEARNING DASHBOARD
                      </p>

                      <p className="mt-2 text-2xl font-bold text-[#073F52]">
                        Keep going!
                      </p>

                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf8fd] text-[#0798D5]">
                      <GraduationCap size={24} />
                    </div>

                  </div>


                  {/* Weekly Progress */}
                  <div className="mt-8">

                    <div className="flex items-center justify-between">

                      <span className="text-sm font-semibold text-[#073F52]">
                        Weekly progress
                      </span>

                      <span className="text-sm font-bold text-[#0798D5]">
                        8.5 / 10 hrs
                      </span>

                    </div>


                    <div className="mt-4 flex h-[120px] items-end gap-3">

                      {[35, 55, 45, 75, 60, 90, 70].map(
                        (height, index) => (

                          <div
                            key={index}
                            className="flex flex-1 items-end"
                          >

                            <div
                              className="w-full rounded-t-xl bg-[#0798D5]"
                              style={{
                                height: `${height}%`,
                              }}
                            />

                          </div>

                        )
                      )}

                    </div>


                    <div className="mt-3 flex justify-between text-[10px] text-[#91aab1]">

                      <span>MON</span>
                      <span>TUE</span>
                      <span>WED</span>
                      <span>THU</span>
                      <span>FRI</span>
                      <span>SAT</span>
                      <span>SUN</span>

                    </div>

                  </div>


                  <div className="mt-7 grid grid-cols-2 gap-3">

                    <div className="rounded-2xl bg-[#effaff] p-4">

                      <p className="text-2xl font-bold text-[#073F52]">
                        12
                      </p>

                      <p className="mt-1 text-xs text-[#7897a0]">
                        Courses enrolled
                      </p>

                    </div>


                    <div className="rounded-2xl bg-[#effaff] p-4">

                      <p className="text-2xl font-bold text-[#073F52]">
                        04
                      </p>

                      <p className="mt-1 text-xs text-[#7897a0]">
                        Certificates
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          STUDENT SUCCESS
      ========================================================= */}
      <section className="bg-[#f4fbfe] py-20 lg:py-28">

        <div className="mx-auto max-w-[1100px] px-6">

          <div className="text-center">

            <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
              STUDENT SUCCESS
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">

              Learn today. Achieve tomorrow.

            </h2>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {[
              {
                icon: GraduationCap,
                value: "50K+",
                title: "Learners",
                text: "Students learning and building their future with us.",
              },
              {
                icon: Trophy,
                value: "25K+",
                title: "Certificates",
                text: "Learners completing courses and earning credentials.",
              },
              {
                icon: Award,
                value: "95%+",
                title: "Satisfaction",
                text: "A learning experience students continue to recommend.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[25px] border border-[#dceff5] bg-white p-7 text-center"
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf8fd] text-[#0798D5]">

                    <Icon size={27} />

                  </div>


                  <p className="mt-6 text-3xl font-bold text-[#073F52]">
                    {item.value}
                  </p>


                  <h3 className="mt-2 text-lg font-bold text-[#073F52]">
                    {item.title}
                  </h3>


                  <p className="mt-3 text-sm leading-7 text-[#7897a0]">
                    {item.text}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-white py-20 lg:py-28">

        <div className="mx-auto max-w-[900px] px-6">

          <div className="text-center">

            <span className="text-sm font-bold tracking-[0.18em] text-[#0798D5]">
              FAQ
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#073F52] sm:text-5xl">

              Questions, answered.

            </h2>

          </div>


          <div className="mt-12 space-y-3">

            {[
              "How do I enroll in a course?",
              "Can I learn at my own pace?",
              "Are live classes available?",
              "Will I receive a certificate after completing a course?",
              "Can I access courses from my mobile?",
              "Do courses include practice tests and assignments?",
            ].map((question, index) => (

              <details
                key={index}
                className="group rounded-2xl border border-[#d8edf4] bg-white"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 font-semibold text-[#073F52]">

                  {question}

                  <ChevronDown
                    size={20}
                    className="text-[#0798D5] transition group-open:rotate-180"
                  />

                </summary>


                <div className="border-t border-[#edf5f7] px-6 py-5 text-sm leading-7 text-[#7897a0]">

                  Course availability, learning format and certification
                  depend on the selected course. Check the individual
                  course details for the complete information.

                </div>

              </details>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#073F52] py-20 lg:py-24">

        {/* Glow */}
        <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#0798D5] opacity-20 blur-3xl" />

        <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-[#0798D5] opacity-10 blur-3xl" />


        <div className="relative mx-auto max-w-[950px] px-6 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0798D5] text-white">

            <GraduationCap size={30} />

          </div>


          <h2 className="mt-7 text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">

            Your next skill could change your future.

          </h2>


          <p className="mx-auto mt-6 max-w-[650px] text-lg leading-8 text-[#b5d2da]">

            Explore expert-led courses, learn practical skills and take
            the next step towards your goals.

          </p>


          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <button className="flex items-center gap-3 rounded-full bg-[#0798D5] px-8 py-4 font-semibold text-white transition hover:bg-[#10a4df]">

              Explore Courses

              <ArrowRight size={19} />

            </button>


            <button className="flex items-center gap-3 rounded-full border border-[#4f7c89] px-8 py-4 font-semibold text-white transition hover:bg-white/10">

              <Play size={18} />

              Start Learning

            </button>

          </div>

        </div>

      </section>

    </main>
  );
}