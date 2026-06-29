"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BookOpenCheck,
  CheckCircle2,
  Clock3,
  Download,
  FileText,
  HelpCircle,
  Layers3,
  LockKeyhole,
  MessageCircle,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Video,
} from "lucide-react";
import { SparklesText } from "@/components/ui/sparkles-text";

const modules = [
  {
    no: "01",
    title: "Understanding Yourself",
    time: "25 min",
    lessons: "4 lessons",
    progress: 100,
    href: "/ucon/training/cse/module-1",
  },
  {
    no: "02",
    title: "Puberty & Growing Up",
    time: "30 min",
    lessons: "5 lessons",
    progress: 72,
    href: "/ucon/training/cse/module-2",
  },
  {
    no: "03",
    title: "Healthy Relationships",
    time: "28 min",
    lessons: "4 lessons",
    progress: 35,
    href: "/ucon/training/cse/module-3",
  },
  {
    no: "04",
    title: "Gender & Equality",
    time: "32 min",
    lessons: "5 lessons",
    progress: 0,
    href: "/ucon/training/cse/module-4",
  },
  {
    no: "05",
    title: "Safety & Protection",
    time: "35 min",
    lessons: "6 lessons",
    progress: 0,
    href: "/ucon/training/cse/module-5",
  },
  {
    no: "06",
    title: "Health Services",
    time: "22 min",
    lessons: "3 lessons",
    progress: 0,
    href: "/ucon/training/cse/module-6",
  },
  {
    no: "07",
    title: "Rights & Advocacy",
    time: "26 min",
    lessons: "4 lessons",
    progress: 0,
    href: "/ucon/training/cse/module-7",
  },
  {
    no: "08",
    title: "Community Action",
    time: "30 min",
    lessons: "5 lessons",
    progress: 0,
    href: "/ucon/training/cse/module-8",
  },
];

const learnItems = [
  "Human body and adolescence",
  "Puberty and personal wellbeing",
  "Healthy relationship and respect",
  "Gender equality and inclusion",
  "Consent, safety and protection",
  "Mental health and support",
  "SRHR awareness",
  "Youth leadership and advocacy",
];

const resources = [
  {
    title: "Video Lessons",
    icon: Video,
    text: "Short youth-friendly learning videos.",
  },
  {
    title: "PDF Guides",
    icon: FileText,
    text: "Downloadable learning materials.",
  },
  {
    title: "Quiz Practice",
    icon: HelpCircle,
    text: "Practice before assessment.",
  },
  {
    title: "Discussion",
    icon: MessageCircle,
    text: "Learn through questions and ideas.",
  },
];

const faqs = [
  "Who can enroll in this CSE course?",
  "Is this training free for learners?",
  "How long does the full course take?",
  "Can I retake the assessment?",
  "Will I receive a certificate?",
];

export default function CseTrainingPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden bg-black px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-16">
        <Image
          src="/images/skills-education-training.jpg"
          alt="CSE Training"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/75 to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(9,145,203,0.35),transparent_34%),radial-gradient(circle_at_85%_15%,rgba(148,202,81,0.25),transparent_30%)]" />

        <div className="relative z-10 mx-auto grid p-8 gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] backdrop-blur-md">
              <Sparkles className="size-3.5 text-secondary" />
              uCon Learning Management
            </div>

            <h1 className="font-serif text-4xl font-black leading-[0.98] sm:text-5xl lg:text-6xl">
              CSE Training{" "}
              <span className="italic text-secondary">Pathway.</span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82 sm:text-base">
              A premium youth-friendly learning pathway with 8 CSE modules,
              practice resources, assessment and certification.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/ucon/training/cse/module-1"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-black text-primary-foreground transition hover:-translate-y-1"
              >
                Start Learning
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/ucon/training/cse/assessment"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-black text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-secondary hover:text-secondary-foreground"
              >
                Take Assessment
                <Target className="size-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[2rem] border border-white/15 bg-white/10 p-5 backdrop-blur-xl"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white/60">
                  Course Progress
                </p>
                <h2 className="mt-1 text-2xl font-black">42% Completed</h2>
              </div>
              <div className="grid size-14 place-items-center rounded-full bg-secondary text-xl font-black text-secondary-foreground">
                42
              </div>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/15">
              <div className="h-full w-[42%] rounded-full bg-linear-to-r from-primary to-secondary" />
            </div>

            <div className="mt-5 grid gap-3">
              {[
                ["08", "Modules"],
                ["34", "Lessons"],
                ["01", "Assessment"],
                ["01", "Certificate"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-4 py-3"
                >
                  <span className="text-sm font-bold text-white/80">
                    {label}
                  </span>
                  <span className="text-xl font-black text-secondary">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SparklesText
                sparklesCount={5}
                colors={{
                  first: "var(--pstc-primary)",
                  second: "var(--pstc-secondary)",
                }}
                className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl"
              >
                Course Overview
              </SparklesText>

              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                This CSE training page is designed like a compact LMS dashboard:
                learners can follow modules, download resources, complete
                assessment and receive certification.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["Duration", "8 Modules"],
                  ["Language", "Bangla"],
                  ["Level", "Beginner"],
                  ["Certificate", "Available"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-border bg-card p-4"
                  >
                    <p className="text-[11px] font-black uppercase tracking-[0.16em] text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-1 text-lg font-black text-primary">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-75 overflow-hidden rounded-[2rem] border border-border bg-muted shadow-lg sm:h-90">
              <Image
                src="/images/youth-adolescent-development.jpg"
                alt="Youth learning"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-4 text-slate-950 backdrop-blur">
                <p className="text-sm font-black">
                  Learn at your pace, complete all modules, then unlock
                  assessment and certification.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {learnItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"
              >
                <CheckCircle2 className="size-5 shrink-0 text-secondary" />
                <p className="text-sm font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto p-8">
          <div className="mb-7 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">
                Learning Modules
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Continue your CSE pathway.
              </h2>
            </div>

            <Link
              href="/ucon/training/cse/assessment"
              className="group inline-flex h-10 w-fit items-center gap-2 rounded-full border border-primary/20 px-5 text-sm font-black text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              Final Assessment
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {modules.map((module, index) => {
              const locked = index > 2;

              return (
                <motion.div
                  key={module.no}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.035 }}
                >
                  <Link
                    href={module.href}
                    className="group grid gap-4 rounded-3xl border border-border bg-background p-4 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:grid-cols-[84px_minmax(0,1fr)_auto] sm:items-center"
                  >
                    <div className="grid size-16 place-items-center rounded-2xl bg-primary/10 text-2xl font-black text-primary">
                      {module.no}
                    </div>

                    <div className="min-w-0">
                      <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-[0.14em] text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Clock3 className="size-3.5" />
                          {module.time}
                        </span>
                        <span>•</span>
                        <span>{module.lessons}</span>
                      </div>

                      <h3 className="text-xl font-black transition group-hover:text-primary">
                        {module.title}
                      </h3>

                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-linear-to-r from-primary to-secondary"
                          style={{ width: `${module.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {locked ? (
                        <span className="grid size-10 place-items-center rounded-full bg-muted text-muted-foreground">
                          <LockKeyhole className="size-4" />
                        </span>
                      ) : (
                        <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground">
                          <PlayCircle className="size-5" />
                        </span>
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
                Learning Resources
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">
                Study with helpful materials.
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {resources.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-border bg-background p-5"
                    >
                      <div className="grid size-11 place-items-center rounded-2xl bg-secondary/15 text-secondary">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-black">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[2rem] bg-primary p-6 text-primary-foreground shadow-lg">
                <Target className="size-8" />
                <h3 className="mt-4 text-2xl font-black">Assessment</h3>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  20 questions • 25 minutes • Passing score 80%.
                </p>
                <Link
                  href="/ucon/training/cse/assessment"
                  className="mt-5 inline-flex h-10 items-center gap-2 rounded-full bg-white px-5 text-sm font-black text-primary"
                >
                  Start Assessment
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="rounded-[2rem] bg-secondary p-6 text-secondary-foreground shadow-lg">
                <Award className="size-8" />
                <h3 className="mt-4 text-2xl font-black">Certification</h3>
                <p className="mt-2 text-sm leading-6 text-black/65">
                  Complete all modules and assessment to unlock certificate.
                </p>
                <Link
                  href="/ucon/training/cse/certification"
                  className="mt-5 inline-flex h-10 items-center gap-2 rounded-full bg-white px-5 text-sm font-black text-primary"
                >
                  View Certificate
                  <Trophy className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto p-8">
          <div className="rounded-[2rem] border border-border bg-background p-6 shadow-sm sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">
                  FAQ
                </p>
                <h2 className="mt-2 text-3xl font-black tracking-tight">
                  Common questions.
                </h2>
              </div>

              <div className="grid gap-3">
                {faqs.map((faq) => (
                  <details
                    key={faq}
                    className="group rounded-2xl border border-border bg-card p-4"
                  >
                    <summary className="cursor-pointer list-none text-sm font-black">
                      {faq}
                    </summary>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      This section can be connected with real uCon FAQ content
                      later. For now it uses clean placeholder content.
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto p-8 overflow-hidden rounded-[2rem] bg-primary text-primary-foreground shadow-[0_24px_70px_var(--pstc-primary-glow)] sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em]">
                <ShieldCheck className="size-3.5" />
                Youth Friendly LMS
              </div>

              <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
                Ready to begin the CSE journey?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
                Start Module 1, complete your pathway, then unlock assessment
                and certification.
              </p>
            </div>

            <Link
              href="/ucon/training/cse/module-1"
              className="group inline-flex h-11 w-fit items-center gap-2 rounded-full bg-white px-6 text-sm font-black text-primary transition hover:-translate-y-1 hover:bg-secondary hover:text-secondary-foreground"
            >
              Start Module 1
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
