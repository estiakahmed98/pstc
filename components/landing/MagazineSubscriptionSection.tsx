"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Mail,
  Newspaper,
  Sparkles,
  User,
  Building2,
} from "lucide-react";
import { toast } from "sonner";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { SparklesText } from "@/components/ui/sparkles-text";
import { cn } from "@/lib/utils";

const featuredCover = {
  title: "PROJANMO Kotha",
  issue: "Monthly Magazine",
  image: "/publications/book-projonmo-bodle-bodle-jay.jpg",
  tagline: "Stories of change from clinics to communities across Bangladesh.",
};

const recentCovers = [
  {
    title: "Field Stories",
    image: "/publications/publication Cover 1.png",
  },
  {
    title: "Youth Voices",
    image: "/publications/proshno-korte-shikhun.jpg",
  },
] as const;

const perks = [
  { icon: Mail, label: "Email delivery" },
  { icon: BookOpen, label: "Monthly issues" },
  { icon: Newspaper, label: "Free soft copy" },
] as const;

function MagazineSectionBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        className="absolute -left-16 top-8 h-64 w-64 text-[var(--pstc-primary)] opacity-[0.07] sm:h-80 sm:w-80"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle
          cx="100"
          cy="100"
          r="88"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle
          cx="100"
          cy="100"
          r="62"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 10"
        />
        <circle
          cx="100"
          cy="100"
          r="36"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      <svg
        className="absolute -right-10 bottom-10 h-72 w-72 text-[var(--pstc-secondary)] opacity-[0.08]"
        viewBox="0 0 240 240"
        fill="none"
      >
        <path
          d="M20 180 C60 120, 120 220, 180 140 S240 40, 220 20"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M40 200 C90 150, 130 210, 200 160"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="5 8"
          opacity="0.7"
        />
      </svg>

      <motion.svg
        animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] top-[12%] h-28 w-28 text-[var(--pstc-primary)] opacity-[0.1] max-lg:hidden"
        viewBox="0 0 120 120"
        fill="none"
      >
        <rect
          x="24"
          y="18"
          width="72"
          height="84"
          rx="8"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M36 36 H84 M36 48 H78 M36 60 H72 M36 72 H66"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </motion.svg>

      <motion.svg
        animate={{ y: [0, 10, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[18%] left-[6%] h-24 w-24 text-[var(--pstc-secondary-dark)] opacity-[0.09] max-lg:hidden"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path
          d="M18 34 L60 18 L102 34 V86 C102 92 96 96 60 104 C24 96 18 92 18 86 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M60 18 V104 M18 34 L102 34"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </motion.svg>
    </div>
  );
}

function MagazineCardBackdrop({ variant }: { variant: "showcase" | "form" }) {
  if (variant === "showcase") {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <svg className="absolute inset-0 h-full w-full opacity-[0.35]">
          <defs>
            <pattern
              id="magazine-grid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M32 0 V32 M0 32 H32"
                stroke="var(--pstc-primary)"
                strokeWidth="0.5"
                opacity="0.12"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#magazine-grid)" />
        </svg>

        <motion.svg
          animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-6 top-16 h-40 w-40 text-[var(--pstc-primary)] opacity-[0.12]"
          viewBox="0 0 160 160"
          fill="none"
        >
          <rect
            x="30"
            y="20"
            width="88"
            height="118"
            rx="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="42"
            y="32"
            width="64"
            height="94"
            rx="6"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.65"
          />
          <path
            d="M52 48 H96 M52 62 H90 M52 76 H84 M52 90 H78"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          />
        </motion.svg>

        <svg
          className="absolute bottom-8 left-8 h-20 w-20 text-[var(--pstc-secondary)] opacity-[0.14]"
          viewBox="0 0 80 80"
          fill="none"
        >
          <path
            d="M8 56 Q40 8, 72 56"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="18" cy="52" r="2" fill="currentColor" />
          <circle cx="62" cy="52" r="2" fill="currentColor" />
        </svg>
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern
            id="magazine-dots"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1"
              fill="var(--pstc-primary)"
              opacity="0.14"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#magazine-dots)" />
      </svg>

      <motion.svg
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 top-10 h-36 w-36 text-[var(--pstc-primary)] opacity-[0.1]"
        viewBox="0 0 140 140"
        fill="none"
      >
        <rect
          x="20"
          y="36"
          width="100"
          height="72"
          rx="12"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M20 48 L70 78 L120 48"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M70 78 V108"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </motion.svg>

      <motion.svg
        animate={{ rotate: [0, 6, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-6 h-28 w-28 text-[var(--pstc-secondary-dark)] opacity-[0.11]"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path
          d="M18 28 C42 18, 78 18, 102 28 V78 C78 88, 42 88, 18 78 Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M36 46 C48 40, 72 40, 84 46"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M36 58 C48 52, 72 52, 84 58"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.7"
        />
        <circle cx="60" cy="72" r="3" fill="currentColor" opacity="0.8" />
      </motion.svg>

      <svg
        className="absolute right-10 bottom-16 h-16 w-16 text-[var(--pstc-primary)] opacity-[0.08]"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M12 20 H52 M12 32 H44 M12 44 H36"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function FormField({
  id,
  label,
  optional,
  icon: Icon,
  type = "text",
  value,
  onChange,
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  optional?: boolean;
  icon: typeof Mail;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  autoComplete?: string;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">
        {label}
        {optional ? (
          <span className="font-semibold normal-case tracking-normal text-muted-foreground/60">
            (optional)
          </span>
        ) : null}
      </span>
      <div className="flex items-center gap-3 rounded-2xl border border-border/80 bg-white px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition focus-within:border-[var(--pstc-primary)] focus-within:ring-4 focus-within:ring-[var(--pstc-primary)]/10">
        <Icon className="size-4 shrink-0 text-[var(--pstc-primary)]/75" />
        <input
          id={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="w-full bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/55"
        />
      </div>
    </label>
  );
}

export default function MagazineSubscriptionSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
      toast.error("Please enter your name and email.");
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setLoading(false);
    setSubmitted(true);

    toast.success("You're on the list!", {
      description:
        "We'll email PROJANMO Kotha soft copies to you as new issues are released.",
    });
  };

  return (
    <section className="relative overflow-hidden bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <MagazineSectionBackdrop />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[var(--pstc-primary)]/20 to-transparent" />

      <div className="container-pstc relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-10 flex flex-col item-center text-center "
        >
          {/* <div className="mb-4 mx inline-flex items-center gap-2 rounded-full border border-[var(--pstc-primary)]/15 bg-[var(--pstc-primary-soft)]/50 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[var(--pstc-primary)]">
            <Sparkles className="size-3.5" />
            Digital Magazine
          </div> */}

          <SparklesText
            sparklesCount={8}
            colors={{
              first: "var(--pstc-primary)",
              second: "var(--pstc-secondary)",
            }}
            className="text-3xl  font-black uppercase leading-[0.95] tracking-[-0.04em] text-primary sm:text-5xl lg:text-4xl"
          >
            PROJANMO <span className="text-secondary">Kotha</span>
          </SparklesText>

          <p className="mt-4">
            Subscribe once and receive PSTC&apos;s monthly magazine as a soft
            copy in your inbox — field stories, youth voices, and community
            impact from across Bangladesh.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_28px_90px_rgba(15,23,42,0.08)] lg:rounded-[2.5rem]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,var(--pstc-primary-soft),transparent_42%),radial-gradient(circle_at_100%_100%,var(--pstc-secondary-soft),transparent_38%)] opacity-80"
          />

          <div className="relative grid lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative min-h-[360px] overflow-hidden border-b border-border/60 lg:min-h-[620px] lg:border-r lg:border-b-0">
              <MagazineCardBackdrop variant="showcase" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,87,158,0.08),transparent_45%,rgba(148,202,81,0.08))]" />

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--pstc-primary)]">
                    {featuredCover.issue}
                  </p>
                  {/* <h3 className="mt-3 max-w-md text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-foreground sm:text-4xl">
                    {featuredCover.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                    {featuredCover.tagline}
                  </p> */}
                </div>

                <div className="relative mt-8 flex items-end justify-center lg:mt-0 lg:justify-start">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative w-[min(72vw,280px)] lg:w-[min(100%,320px)]"
                    style={{ perspective: "1200px" }}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] border border-white/70 bg-white shadow-[0_30px_80px_rgba(11,87,158,0.18)] [transform:rotateY(-8deg)_rotateX(4deg)]">
                      <Image
                        src={featuredCover.image}
                        alt={featuredCover.title}
                        fill
                        sizes="(max-width: 1024px) 280px, 320px"
                        className="object-cover transition duration-700 hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/70">
                          Latest Edition
                        </p>
                        <p className="mt-1 text-xl font-black uppercase text-white">
                          {featuredCover.title}
                        </p>
                      </div>
                    </div>

                    {recentCovers.map((cover, index) => (
                      <motion.div
                        key={cover.image}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className={cn(
                          "absolute w-[34%] overflow-hidden rounded-xl border-2 border-white bg-white shadow-xl",
                          index === 0
                            ? "-right-2 bottom-8 rotate-[8deg] sm:-right-4"
                            : "right-8 -bottom-2 rotate-[-6deg] sm:right-10",
                        )}
                        style={{ zIndex: 10 + index }}
                      >
                        <div className="relative aspect-[3/4]">
                          <Image
                            src={cover.image}
                            alt={cover.title}
                            fill
                            sizes="120px"
                            className="object-cover"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 lg:mt-6">
                  {["Monthly", "Digital", "Free", "Bengali Stories"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--pstc-primary)]/12 bg-white/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[var(--pstc-primary)] backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </motion.div>
            </div>

            <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
              <MagazineCardBackdrop variant="form" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-[var(--pstc-primary)]/25 to-transparent" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative z-10 flex flex-col items-center py-8 text-center lg:py-12"
                >
                  <div className="mb-5 flex size-20 items-center justify-center rounded-full bg-[var(--pstc-secondary-soft)] text-[var(--pstc-secondary-dark)] shadow-[0_20px_50px_rgba(148,202,81,0.18)]">
                    <CheckCircle2 className="size-10" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-[-0.03em] text-foreground">
                    You&apos;re Subscribed
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                    Thank you, {name.split(" ")[0]}. PROJANMO Kotha soft copies
                    will arrive at{" "}
                    <span className="font-bold text-[var(--pstc-primary)]">
                      {email}
                    </span>{" "}
                    when new issues are published.
                  </p>
                </motion.div>
              ) : (
                <div className="relative z-10">
                  <div className="mb-8">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--pstc-secondary-dark)]">
                      Stay In The Loop
                    </p>
                    <h3 className="mt-2 text-2xl font-black uppercase leading-tight tracking-[-0.03em] text-foreground sm:text-3xl">
                      Get Every Issue In Your Inbox
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      Join readers who receive the digital edition directly — no
                      print, no cost, just stories that matter.
                    </p>
                  </div>

                  <div className="mb-8 flex flex-wrap gap-3">
                    {perks.map((perk) => {
                      const Icon = perk.icon;
                      return (
                        <div
                          key={perk.label}
                          className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/80 px-3.5 py-2 text-xs font-bold text-foreground shadow-sm"
                        >
                          <Icon className="size-3.5 text-[var(--pstc-primary)]" />
                          {perk.label}
                        </div>
                      );
                    })}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <FormField
                      id="magazine-name"
                      label="Full Name"
                      icon={User}
                      value={name}
                      onChange={setName}
                      placeholder="Your full name"
                      autoComplete="name"
                    />
                    <FormField
                      id="magazine-email"
                      label="Email Address"
                      icon={Mail}
                      type="email"
                      value={email}
                      onChange={setEmail}
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                    <FormField
                      id="magazine-org"
                      label="Organization"
                      optional
                      icon={Building2}
                      value={organization}
                      onChange={setOrganization}
                      placeholder="Your organization"
                    />

                    <div className="pt-2">
                      <MovingBorderButton
                        as="button"
                        type="submit"
                        disabled={loading}
                        duration={3200}
                        borderRadius="1.25rem"
                        containerClassName="h-14 w-full"
                        borderClassName="bg-[radial-gradient(var(--pstc-primary)_32%,var(--pstc-secondary)_58%,transparent_72%)]"
                        className={cn(
                          "group w-full gap-2 rounded-[1.15rem] border border-[var(--pstc-primary)] bg-[var(--pstc-primary)] px-6 text-sm font-black uppercase tracking-[0.1em] text-white transition",
                          "hover:bg-[var(--pstc-primary-dark)] disabled:cursor-not-allowed disabled:opacity-70",
                        )}
                      >
                        {loading ? "Subscribing..." : "Subscribe For Soft Copy"}
                        {!loading ? (
                          <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                        ) : null}
                      </MovingBorderButton>
                    </div>

                    <p className="text-center text-[11px] leading-5 text-muted-foreground">
                      Free digital subscription · Unsubscribe anytime
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
