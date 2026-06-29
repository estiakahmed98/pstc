"use client";

import { motion } from "motion/react";
import { ArrowRight, Globe2, MapPin, Sparkles, Users } from "lucide-react";
import Link from "next/link";

import PSTCReachMap from "@/components/landing/PSTCReachMap";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { SparklesText } from "@/components/ui/sparkles-text";

const impactCards = [
  {
    icon: MapPin,
    title: "Bangladesh at the core",
    text: "Urban clinics & rural outreach across the country.",
  },
  {
    icon: Globe2,
    title: "Global alliances",
    text: "USAID, EU, Plan International & 19+ partners.",
  },
  {
    icon: Users,
    title: "Lives transformed",
    text: "48 years of health, rights, and dignity.",
  },
] as const;

export default function PSTCGlobalReachSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(11,87,158,0.1),transparent_55%),radial-gradient(circle_at_20%_80%,rgba(148,202,81,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(11,87,158,0.06),transparent_38%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(11,87,158,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,87,158,0.035)_1px,transparent_1px)] bg-[size:56px_56px]"
      />

      <div className="container-pstc relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--pstc-primary)]/15 bg-[var(--pstc-primary-soft)]/60 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[var(--pstc-primary)]">
            <Sparkles className="size-3.5" />
            Global Impact Network
          </div>

          <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
            Local Roots.{" "}
            <SparklesText
              sparklesCount={8}
              colors={{
                first: "var(--pstc-primary)",
                second: "var(--pstc-secondary)",
              }}
              className="mt-1 block bg-gradient-to-r from-[var(--pstc-primary)] to-[var(--pstc-secondary)] bg-clip-text text-transparent"
            >
              Global Reach.
            </SparklesText>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Dhaka headquarters at the centre — connected through development
            corridors to partner regions worldwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, delay: 0.05 }}
          className="relative mx-auto w-full"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border/50 sm:rounded-[2rem]">
            <div className="relative aspect-[16/9] w-full min-h-[min(72vw,280px)] bg-transparent sm:min-h-[380px] lg:min-h-[480px] xl:min-h-[540px]">
              <PSTCReachMap className="absolute inset-0 px-1 py-2 sm:px-4 sm:py-4 lg:px-8 lg:py-6" />

              <div className="pointer-events-none absolute left-4 top-4 z-30 sm:left-6 sm:top-6 lg:left-8 lg:top-8">
                <div className="rounded-xl border border-border/70 bg-background/90 px-3 py-2.5 shadow-sm backdrop-blur-sm sm:px-4 sm:py-3">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]">
                    PSTC global footprint
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-foreground sm:text-sm">
                    HQ · Dhaka → partner corridors
                  </p>
                </div>
              </div>

              <div className="pointer-events-none absolute right-4 top-4 z-30 sm:right-6 sm:top-6 lg:right-8 lg:top-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--pstc-primary)]/20 bg-background/90 px-3 py-1.5 shadow-sm backdrop-blur-sm sm:px-4 sm:py-2">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--pstc-secondary)] opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-[var(--pstc-secondary)]" />
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--pstc-primary)] sm:text-[10px]">
                    Live network
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-border/50 bg-background/70 px-4 py-4 sm:px-6 sm:py-5">
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-[11px]">
                <span className="inline-flex items-center gap-1.5 text-[var(--pstc-secondary-dark)]">
                  <span className="size-2 rounded-full bg-[var(--pstc-secondary)]" />
                  Headquarters · Dhaka
                </span>
                <span className="hidden h-3 w-px bg-border sm:inline-block" />
                <span className="inline-flex items-center gap-1.5 text-[var(--pstc-primary)]">
                  <span className="size-1.5 rounded-full bg-[var(--pstc-primary)]" />
                  Partner regions
                </span>
                <span className="hidden h-3 w-px bg-border md:inline-block" />
                <span className="text-muted-foreground">
                  Animated corridors show global collaboration routes
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-10 grid max-w-5xl gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4"
        >
          {impactCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card/70 p-4 shadow-sm backdrop-blur-sm transition duration-300 hover:border-[var(--pstc-primary)]/20 hover:shadow-[0_12px_32px_rgba(11,87,158,0.08)]"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-[var(--pstc-primary)]/10 bg-[var(--pstc-primary-soft)]/60 text-[var(--pstc-primary)]">
                  <Icon className="size-4" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.1em] text-foreground sm:text-sm">
                    {card.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">
                    {card.text}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex justify-center sm:mt-12"
        >
          <MovingBorderButton
            as={Link}
            href="/our-impact"
            duration={3200}
            borderRadius="999px"
            containerClassName="h-13 w-auto min-w-[220px]"
            borderClassName="bg-[radial-gradient(var(--pstc-primary)_32%,var(--pstc-secondary)_58%,transparent_72%)]"
            className="group gap-2 rounded-full border border-[var(--pstc-primary)] bg-[var(--pstc-primary)] px-7 py-3.5 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-[var(--pstc-primary-dark)]"
          >
            Explore Our Impact
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </MovingBorderButton>
        </motion.div>
      </div>
    </section>
  );
}
