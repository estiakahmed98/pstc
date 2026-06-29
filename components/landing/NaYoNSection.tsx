"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Sparkles,
  UserRound,
} from "lucide-react";
import { toast } from "sonner";
import { MovingLinkButton } from "@/components/ui/moving-link-button";

const fitCriteria = [
  {
    title: "The Readiness",
    text: "High adaptability, solid teamwork, and a self-starter mindset.",
  },
  {
    title: "The Eagerness",
    text: "Open-minded, willing to learn, and passionate to explore.",
  },
  {
    title: "The Commitment",
    text: "Meaningful participation, spare time, and collaborative spirit.",
  },
] as const;

const onboardingSteps = [
  { step: "01", label: "Discover", detail: "Learn about NaYoN programs and focus areas" },
  { step: "02", label: "Apply", detail: "Share your profile, age, and motivation" },
  { step: "03", label: "Connect", detail: "Join workshops, peers, and youth-led action" },
] as const;

const heroImage = "/images/youth-adolescent-development.jpg";

function NaYoNSectionBackdrop() {
  const networkNodes = [
    [200, 56],
    [325, 128],
    [325, 272],
    [200, 344],
    [75, 272],
    [75, 128],
  ] as const;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(11,87,158,0.12),transparent_38%),radial-gradient(circle_at_88%_18%,rgba(148,202,81,0.14),transparent_34%),radial-gradient(circle_at_72%_88%,rgba(11,87,158,0.1),transparent_32%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,87,158,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,87,158,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--pstc-primary)]/25 to-transparent" />

      <svg
        className="absolute -left-[18%] top-[8%] h-[min(110vw,760px)] w-[min(110vw,760px)] text-[var(--pstc-primary)] opacity-[0.16] sm:-left-[12%] lg:-left-[8%]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <defs>
          <radialGradient id="nayon-hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="118" fill="url(#nayon-hub-glow)" />
        <circle cx="200" cy="200" r="118" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
        <circle
          cx="200"
          cy="200"
          r="82"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="8 12"
          opacity="0.45"
        />
        {networkNodes.map(([x, y], index) => {
          const next = networkNodes[(index + 1) % networkNodes.length];
          return (
            <g key={`${x}-${y}`}>
              <line
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                stroke="currentColor"
                strokeWidth="1.25"
                opacity="0.5"
              />
              <line
                x1={x}
                y1={y}
                x2={next[0]}
                y2={next[1]}
                stroke="currentColor"
                strokeWidth="0.9"
                opacity="0.28"
              />
              <circle cx={x} cy={y} r="10" stroke="currentColor" strokeWidth="1.5" />
              <circle cx={x} cy={y} r="4" fill="currentColor" opacity="0.75" />
            </g>
          );
        })}
        <circle cx="200" cy="200" r="16" fill="currentColor" opacity="0.85" />
        <circle cx="200" cy="200" r="24" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <svg
        className="absolute -right-[8%] top-[10%] hidden h-[min(70vw,560px)] w-[min(70vw,560px)] text-[var(--pstc-secondary)] opacity-[0.18] md:block"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="320" cy="120" r="92" stroke="currentColor" strokeWidth="1.5" />
        <circle
          cx="320"
          cy="120"
          r="62"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="7 10"
        />
        <circle cx="320" cy="120" r="34" stroke="currentColor" strokeWidth="1" />
        <path
          d="M40 320 C120 220, 220 340, 360 240"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M80 360 C170 280, 250 360, 380 300"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeDasharray="8 12"
          opacity="0.75"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 right-0 h-40 w-full sm:h-48"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="nayon-wave-fill" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--pstc-primary)" stopOpacity="0.04" />
            <stop offset="50%" stopColor="var(--pstc-secondary)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="var(--pstc-primary)" stopOpacity="0.04" />
          </linearGradient>
        </defs>
        <path
          d="M0 96 C240 48, 480 128, 720 72 C960 16, 1200 112, 1440 64 L1440 160 L0 160 Z"
          fill="url(#nayon-wave-fill)"
        />
        <path
          d="M0 108 C280 56, 520 132, 760 84 C980 40, 1220 118, 1440 76"
          stroke="var(--pstc-primary)"
          strokeOpacity="0.14"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

export default function NaYoNSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInterestSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
      toast.error("Please enter your name and email.");
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setLoading(false);
    setName("");
    setEmail("");

    toast.success("Thank you for your interest!", {
      description: "Our NaYoN team will contact you with onboarding steps.",
    });
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      <NaYoNSectionBackdrop />

      <div className="container-pstc relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-10 max-w-3xl text-center lg:mb-14"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--pstc-primary)]/12 bg-background/80 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[var(--pstc-primary)]">
            <Sparkles className="size-3.5" />
            Youth & Adolescent Development
          </div>

          <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
            National{" "}
            <span className="bg-gradient-to-r from-[var(--pstc-primary)] to-[var(--pstc-secondary)] bg-clip-text text-transparent">
              Youth
            </span>{" "}
            Network
          </h2>

          <p className="mt-3 text-lg font-bold tracking-[0.18em] text-[var(--pstc-primary)] sm:text-xl">
            NaYoN
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Shape the future instead of watching it happen. NaYoN invites
            Bangladeshi youth aged 15–24 to learn, lead, and create lasting
            community impact with PSTC.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, delay: 0.05 }}
          className="overflow-hidden rounded-[1.75rem] bg-background shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-border/60 lg:rounded-[2rem]"
        >
          <div className="grid lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
            <div className="relative min-h-[320px] lg:min-h-[640px]">
              <Image
                src={heroImage}
                alt="Young people participating in a PSTC youth program"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:from-black/35" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10">
                <div className="mb-auto hidden pt-2 lg:block">
                  <span className="inline-flex rounded-full bg-white/95 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[var(--pstc-primary)] shadow-sm">
                    Ages 15 – 24
                  </span>
                </div>

                <p className="max-w-lg text-sm font-black uppercase tracking-[0.24em] text-white/70">
                  NaYoN is looking for you
                </p>
                <h3 className="mt-3 max-w-xl text-3xl font-black leading-[1.02] tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
                  Are you ready to be the{" "}
                  <span className="text-[var(--pstc-secondary)]">
                    change-maker?
                  </span>
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-7 text-white/82 sm:text-base">
                  Join a national network of young leaders working on health,
                  rights, climate, skills, and community development across
                  Bangladesh.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 lg:hidden">
                  <span className="rounded-full bg-white/95 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[var(--pstc-primary)]">
                    Ages 15 – 24
                  </span>
                  <MovingLinkButton
                    href="/what-we-do/youth-engagement/nayon"
                    containerClassName="h-11"
                    className="px-5 text-xs"
                  >
                    Learn More
                    <ArrowRight className="size-4" />
                  </MovingLinkButton>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-background p-6 sm:p-8 lg:p-10 xl:p-12">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--pstc-primary)]">
                  Are you the perfect fit?
                </p>
                <h4 className="mt-3 text-2xl font-black leading-tight text-foreground sm:text-3xl">
                  Three qualities we look for
                </h4>

                <div className="mt-6 space-y-0 divide-y divide-border/70">
                  {fitCriteria.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.06 }}
                      className="flex gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[var(--pstc-primary-soft)] text-xs font-black text-[var(--pstc-primary)]">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-black uppercase tracking-[0.1em] text-foreground">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-border/70 pt-8">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-muted-foreground">
                  How onboarding works
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {onboardingSteps.map((item) => (
                    <div key={item.step} className="relative">
                      <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--pstc-secondary-dark)]">
                        Step {item.step}
                      </p>
                      <p className="mt-1 text-sm font-black text-foreground">
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-[1.25rem] bg-[var(--pstc-soft-bg)] p-5 sm:p-6">
                <div className="mb-5 flex items-start gap-3">
                  <div className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-[var(--pstc-primary)] text-primary-foreground">
                    <CheckCircle2 className="size-4" />
                  </div>
                  <div>
                    <p className="text-base font-black text-foreground">
                      Start your NaYoN onboarding
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Leave your details and we&apos;ll guide you through the
                      next steps to join the network.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleInterestSubmit} className="space-y-3">
                  <label className="block">
                    <span className="mb-1.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      <UserRound className="size-3.5" />
                      Full name
                    </span>
                    <input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Your name"
                      className="w-full rounded-xl border-0 bg-background px-4 py-3 text-sm font-medium shadow-sm ring-1 ring-border/80 outline-none transition focus:ring-2 focus:ring-[var(--pstc-primary)]/25"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      <Mail className="size-3.5" />
                      Email address
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border-0 bg-background px-4 py-3 text-sm font-medium shadow-sm ring-1 ring-border/80 outline-none transition focus:ring-2 focus:ring-[var(--pstc-primary)]/25"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--pstc-primary)] px-6 py-3.5 text-sm font-black uppercase tracking-[0.08em] text-white transition hover:bg-[var(--pstc-primary-dark)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? "Submitting..." : "Express Interest"}
                    <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                  </button>
                </form>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <MovingLinkButton
                    href="/what-we-do/youth-engagement/nayon"
                    variant="outline"
                    containerClassName="h-11 w-full sm:flex-1"
                    className="w-full justify-center px-4 text-xs"
                  >
                    Explore NaYoN
                  </MovingLinkButton>
                  <Link
                    href="mailto:youth@pstc-bgd.org"
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full text-xs font-black uppercase tracking-[0.12em] text-[var(--pstc-primary)] transition hover:text-[var(--pstc-primary-dark)] sm:flex-1"
                  >
                    <Mail className="size-4" />
                    youth@pstc-bgd.org
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
