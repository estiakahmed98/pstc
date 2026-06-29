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
  ClipboardCheck,
  FileQuestion,
  GraduationCap,
  Layers3,
  PlayCircle,
  ShieldCheck,
  Target,
} from "lucide-react";
import { SparklesText } from "@/components/ui/sparkles-text";

const modules = [
  {
    title: "Module-1",
    href: "/ucon/training/cse/module-1",
    text: "Introduction to CSE, rights, safety and wellbeing.",
  },
  {
    title: "Module-2",
    href: "/ucon/training/cse/module-2",
    text: "Body, growth, adolescence and personal care.",
  },
  {
    title: "Module-3",
    href: "/ucon/training/cse/module-3",
    text: "Healthy relationship, respect and communication.",
  },
  {
    title: "Module-4",
    href: "/ucon/training/cse/module-4",
    text: "Gender, equality, inclusion and decision making.",
  },
  {
    title: "Module-5",
    href: "/ucon/training/cse/module-5",
    text: "Protection, consent, safety and support pathways.",
  },
  {
    title: "Module-6",
    href: "/ucon/training/cse/module-6",
    text: "Health services, referrals and youth-friendly support.",
  },
  {
    title: "Module-7",
    href: "/ucon/training/cse/module-7",
    text: "Advocacy, leadership and community action.",
  },
  {
    title: "Module-8",
    href: "/ucon/training/cse/module-8",
    text: "Review, practice, assessment preparation and next steps.",
  },
];

const learningCards = [
  {
    title: "CSE Learning",
    text: "Structured learning modules for young people with clear guidance.",
    icon: BookOpenCheck,
    href: "/ucon/training/cse",
  },
  {
    title: "Assessment",
    text: "Check knowledge and readiness after completing learning modules.",
    icon: ClipboardCheck,
    href: "/ucon/training/cse/assessment",
  },
  {
    title: "Certification",
    text: "Receive recognition after successful learning and assessment flow.",
    icon: BadgeCheck,
    href: "/ucon/training/cse/certification",
  },
];

const steps = [
  "Choose your learning module",
  "Complete lesson content",
  "Practice with questions",
  "Submit assessment",
  "Earn certification",
];

export default function UconTrainingPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-16">
        <Image
          src="/images/skills-education-training.jpg"
          alt="uCon Training"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-black/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(9,145,203,0.35),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(148,202,81,0.25),transparent_30%)]" />

        <div className="relative z-10 mx-auto grid p-8 gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] backdrop-blur-md">
              <GraduationCap className="size-3.5 text-secondary" />
              uCon Training
            </div>

            <h1 className="font-serif text-4xl font-black leading-[0.98] sm:text-5xl lg:text-6xl">
              Learn, assess and get{" "}
              <span className="italic text-secondary">certified.</span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82 sm:text-base">
              uCon Training provides youth-friendly CSE learning modules,
              practical knowledge, assessment, and certification in one guided
              pathway.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/ucon/training/cse"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-black text-primary-foreground transition hover:-translate-y-1"
              >
                Start CSE Modules
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/ucon/training/cse/assessment"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-black text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-secondary hover:text-secondary-foreground"
              >
                Take Assessment
                <ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-[2rem] border border-white/15 bg-white/10 p-5 backdrop-blur-xl"
          >
            <div className="grid gap-3">
              {[
                ["08", "Learning Modules"],
                ["01", "Assessment Flow"],
                ["01", "Certification Path"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/15 bg-white/10 p-4"
                >
                  <p className="text-3xl font-black text-secondary">{value}</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-white/75">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto p-8">
          <div className="mx-auto max-w-2xl text-center">
            <SparklesText
              sparklesCount={5}
              colors={{
                first: "var(--pstc-primary)",
                second: "var(--pstc-secondary)",
              }}
              className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl"
            >
              Training Pathway
            </SparklesText>

            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
              A simple learning journey from module-based study to assessment
              and certification.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {learningCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                >
                  <Link
                    href={item.href}
                    className="group block rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-6" />
                      </div>
                      <ArrowUpRight className="size-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                    </div>

                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.text}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-muted/30 px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto p-8">
          <div className="mb-7 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">
                CSE Modules
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Complete all eight learning modules.
              </h2>
            </div>

            <Link
              href="/ucon/training/cse"
              className="group inline-flex h-10 w-fit items-center gap-2 rounded-full border border-primary/20 px-5 text-sm font-black text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              View all modules
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <Link
                  href={module.href}
                  className="group block rounded-3xl border border-border bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="grid size-10 place-items-center rounded-2xl bg-secondary/15 text-sm font-black text-secondary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <PlayCircle className="size-5 text-primary" />
                  </div>

                  <h3 className="text-lg font-black">{module.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {module.text}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid p-8 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
              How It Works
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              A guided flow for safe and structured learning.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Learners can move step by step through training content, review
              knowledge, complete assessment and receive certification.
            </p>
          </div>

          <div className="rounded-[2rem] border border-border bg-card p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] sm:p-6">
            <div className="grid gap-3">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4"
                >
                  <div className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-sm font-black text-primary-foreground">
                    {index + 1}
                  </div>

                  <p className="text-sm font-black sm:text-base">{step}</p>

                  <CheckCircle2 className="ml-auto size-5 shrink-0 text-secondary" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto p-8 overflow-hidden rounded-[2rem] bg-primary text-primary-foreground shadow-[0_24px_70px_var(--pstc-primary-glow)] sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em]">
                <ShieldCheck className="size-3.5" />
                Youth Friendly Learning
              </div>

              <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
                Ready to start your training journey?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
                Begin with CSE modules, complete assessment and move toward
                certification.
              </p>
            </div>

            <Link
              href="/ucon/training/cse"
              className="group inline-flex h-11 w-fit items-center gap-2 rounded-full bg-white px-6 text-sm font-black text-primary transition hover:-translate-y-1 hover:bg-secondary hover:text-secondary-foreground"
            >
              Start Training
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
