"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpenCheck,
  CalendarDays,
  FileText,
  HelpCircle,
  Lightbulb,
  Megaphone,
  MessageCircleQuestion,
  Newspaper,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import { SparklesText } from "@/components/ui/sparkles-text";

const navCards = [
  {
    title: "About uCon",
    text: "Learn what uCon is, its focus areas, partners, and platform rules.",
    href: "/ucon/about-us",
    image: "/images/ucon.jpg",
    icon: UsersRound,
  },
  {
    title: "Queries",
    text: "Ask questions, explore ideas, and find answers from FAQs.",
    href: "/ucon/queries",
    image: "/images/youth-adolescent-development.jpg",
    icon: MessageCircleQuestion,
  },
  {
    title: "Advocacy",
    text: "Explore news, events, campaigns, publications, and youth voices.",
    href: "/ucon/advocacy",
    image: "/images/community-mobilization-program.avif",
    icon: Megaphone,
  },
  {
    title: "Training",
    text: "Access CSE modules, assessment, certification, and learning content.",
    href: "/ucon/training",
    image: "/images/skills-education-training.jpg",
    icon: BookOpenCheck,
  },
];

const focusAreas = [
  {
    title: "Questions & Answers",
    text: "A safe space where young people can ask questions and get useful guidance.",
    image: "/images/ucon.jpg",
    icon: HelpCircle,
    href: "/ucon/queries/ask-questions",
  },
  {
    title: "Ideas & Innovation",
    text: "Youth can explore ideas, share solutions, and take part in community innovation.",
    image: "/images/hope.jpeg",
    icon: Lightbulb,
    href: "/ucon/queries/explore-ideas",
  },
  {
    title: "Advocacy & Campaigns",
    text: "News, events, publications, and campaigns for youth-led social change.",
    image: "/images/community-mobilization-program.avif",
    icon: Megaphone,
    href: "/ucon/advocacy",
  },
  {
    title: "CSE Learning",
    text: "Structured CSE learning modules designed for awareness, rights, and wellbeing.",
    image: "/images/skills-education-training.jpg",
    icon: BookOpenCheck,
    href: "/ucon/training/cse",
  },
  {
    title: "Assessment",
    text: "Learners can check understanding through assessment-based learning flow.",
    image: "/images/our-impact.jpg",
    icon: Target,
    href: "/ucon/training/cse/assessment",
  },
  {
    title: "Certification",
    text: "Complete learning journeys and receive recognition through certification.",
    image: "/images/about-us.jpeg",
    icon: BadgeCheck,
    href: "/ucon/training/cse/certification",
  },
];
const cseModules = [
  "Module-1",
  "Module-2",
  "Module-3",
  "Module-4",
  "Module-5",
  "Module-6",
  "Module-7",
  "Module-8",
];

const advocacyItems = [
  {
    title: "News",
    href: "/ucon/advocacy/news",
    icon: Newspaper,
  },
  {
    title: "Events",
    href: "/ucon/advocacy/events",
    icon: CalendarDays,
  },
  {
    title: "Publications",
    href: "/ucon/advocacy/publications",
    icon: FileText,
  },
];

const stats = [
  { value: "08", label: "CSE Modules" },
  { value: "03", label: "Query Areas" },
  { value: "03", label: "Advocacy Channels" },
  { value: "02", label: "Assessment & Certificate" },
];

export default function UconPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative min-h-[calc(100svh-82px)] overflow-hidden bg-black text-white lg:min-h-[calc(100svh-86px)]">
        <Image
          src="images/ucon image.png"
          alt="uCon youth platform"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-75"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_75%,rgba(9,145,203,0.35),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(148,202,81,0.28),transparent_30%)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-82px)] flex-col justify-end px-4 pb-10 sm:px-6 lg:min-h-[calc(100svh-86px)] lg:px-8 lg:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] backdrop-blur-md">
              <Sparkles className="size-3.5 text-secondary" />
              Youth Platform
            </div>

            <h1 className="font-serif text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              uCon <span className="italic text-secondary">Youth Voice.</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/82 sm:text-lg">
              A youth-focused platform for questions, ideas, advocacy, training,
              assessment, and certification.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/ucon/training/cse"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-black text-primary-foreground shadow-lg transition hover:-translate-y-1"
              >
                Start Learning
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/ucon/queries/ask-questions"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-black text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-secondary hover:text-secondary-foreground"
              >
                Ask Questions
                <ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main cards */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="p-8">
          <div className="mx-auto max-w-2xl text-center">
            <SparklesText
              sparklesCount={5}
              colors={{
                first: "var(--pstc-primary)",
                second: "var(--pstc-secondary)",
              }}
              className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl"
            >
              Explore uCon
            </SparklesText>

            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
              One connected platform for youth learning, advocacy, questions,
              knowledge sharing, and certification.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {navCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                >
                  <Link
                    href={item.href}
                    className="group block overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative h-44 overflow-hidden bg-muted">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/65 to-transparent" />
                      <div className="absolute bottom-4 left-4 grid size-11 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur-md">
                        <Icon className="size-5" />
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-xl font-black">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.text}
                      </p>

                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-black text-primary">
                        Explore
                        <ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-muted/30 px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="p-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
              Mission
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Safe learning, youth voice, and community action.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              uCon helps young people learn, ask, participate, advocate, and
              build confidence through structured content, campaigns, events,
              and certification-based learning.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-background p-4"
                >
                  <p className="text-2xl font-black text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-black uppercase tracking-[0.16em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <Link
                    href={item.href}
                    className="group block rounded-3xl border border-border bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-5" />
                      </div>
                      <ArrowUpRight className="size-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                    </div>

                    <h3 className="text-lg font-black">{item.title}</h3>
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

      {/* CSE Modules */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="p-8">
          <div className="mb-7 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">
                Training / CSE
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Complete the CSE learning pathway.
              </h2>
            </div>

            <Link
              href="/ucon/training/cse"
              className="group inline-flex h-10 w-fit items-center gap-2 rounded-full border border-primary/20 px-5 text-sm font-black text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              View CSE
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {cseModules.map((module, index) => (
              <Link
                key={module}
                href={`/ucon/training/cse/module-${index + 1}`}
                className="group rounded-3xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-2xl bg-secondary/15 text-sm font-black text-secondary">
                    {index + 1}
                  </span>
                  <BookOpenCheck className="size-5 text-primary" />
                </div>

                <h3 className="text-lg font-black">{module}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Start this learning module and continue your CSE journey.
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Link
              href="/ucon/training/cse/assessment"
              className="group rounded-3xl border border-border bg-primary p-6 text-primary-foreground shadow-lg transition hover:-translate-y-1"
            >
              <Target className="size-7" />
              <h3 className="mt-4 text-2xl font-black">Assessment</h3>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Test learning progress and prepare for certification.
              </p>
            </Link>

            <Link
              href="/ucon/training/cse/certification"
              className="group rounded-3xl border border-border bg-secondary p-6 text-secondary-foreground shadow-lg transition hover:-translate-y-1"
            >
              <BadgeCheck className="size-7" />
              <h3 className="mt-4 text-2xl font-black">Certification</h3>
              <p className="mt-2 text-sm leading-6 text-black/65">
                Complete learning and receive recognition through certification.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Advocacy */}
      <section className="bg-muted/30 px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="p-8">
          <div className="mb-7">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
              Advocacy
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              News, events and publications for youth voice.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {advocacyItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-3xl border border-border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Explore latest uCon {item.title.toLowerCase()} and youth
                    advocacy updates.
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-black text-primary">
                    Open
                    <ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-primary">
                <ShieldCheck className="size-3.5" />
                Safe Platform
              </div>

              <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
                Rules, regulations and safe participation.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                uCon supports responsible learning, respectful discussion, youth
                safety, and guided knowledge sharing.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/ucon/about-us/rules-regulations"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-black text-primary-foreground transition hover:-translate-y-1"
              >
                View Rules
                <Scale className="size-4" />
              </Link>

              <Link
                href="/ucon/about-us/partners"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-primary/20 px-6 text-sm font-black text-primary transition hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground"
              >
                Our Partners
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
