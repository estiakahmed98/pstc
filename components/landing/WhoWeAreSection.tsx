"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  FileCheck2,
  Globe2,
  Landmark,
  Network,
  ScrollText,
  ShieldCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";
import ScrollStack, {
  ScrollStackItem,
} from "@/components/ui/ScrollStackItemProps";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types & Data
// ---------------------------------------------------------------------------

type WhoCard = {
  number: string;
  title: string;
  href: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

const whoItems: WhoCard[] = [
  {
    number: "01",
    title: "Governance",
    href: "/who-we-are/governance",
    description:
      "Transparent oversight, accountability, and institutional decision-making that guide PSTC's organizational direction.",
    image: "/images/governance.avif",
    icon: Landmark,
  },
  {
    number: "02",
    title: "Leadership",
    href: "/who-we-are/leadership",
    description:
      "Meet the people leading PSTC's mission, programs, partnerships, institutional growth, and community impact.",
    image: "/images/leadership.jpg",
    icon: UsersRound,
  },
  {
    number: "03",
    title: "Mission, Vision & Values",
    href: "/who-we-are/mission-vision-values",
    description:
      "The principles that shape PSTC's work for dignity, rights, health, inclusion, and social transformation.",
    image: "/images/mission-vision-values.jpg",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Policies",
    href: "/who-we-are/policies",
    description:
      "Safeguarding, ethical standards, internal systems, and organizational policies that protect people and programs.",
    image: "/images/policies.webp",
    icon: FileCheck2,
  },
  {
    number: "05",
    title: "Organogram",
    href: "/who-we-are/organogram",
    description:
      "Understand PSTC's structure, departments, reporting lines, and operational flow across the organization.",
    image: "/images/organogram.avif",
    icon: Network,
  },
  {
    number: "06",
    title: "Where We Work",
    href: "/who-we-are/where-we-work",
    description:
      "Explore PSTC's geographical presence, program coverage, and community-level service areas.",
    image: "/images/where-we-work.jpg",
    icon: Globe2,
  },
  {
    number: "07",
    title: "About Us",
    href: "/who-we-are/about-us",
    description:
      "Learn about PSTC's journey, FPSTC roots, identity, affiliation, and national development role.",
    image: "/images/about-us.jpeg",
    icon: Building2,
  },
  {
    number: "08",
    title: "Strategic Plan",
    href: "/who-we-are/strategic-plan",
    description:
      "See PSTC's strategic direction for organizational growth, digital transformation, and measurable impact.",
    image: "/images/strategic-plan.jpg",
    icon: ScrollText,
  },
];

const stats = [
  { value: "47+", label: "Years of service" },
  { value: "1978", label: "FPSTC origin" },
  { value: "IPPF", label: "Member Association" },
];

// ---------------------------------------------------------------------------
// ScrollStack card (desktop)
// ---------------------------------------------------------------------------

function WhoStackCard({ item }: { item: WhoCard }) {
  const Icon = item.icon;

  return (
    <ScrollStackItem
      itemClassName={cn(
        "!my-0 !h-[430px] !rounded-[2.2rem] !p-0",
        "overflow-hidden border border-border bg-card",
        "shadow-[0_28px_90px_rgba(16,24,40,0.16)]",
      )}
    >
      <Link
        href={item.href}
        className="group grid h-full overflow-hidden rounded-[2.2rem] bg-card lg:grid-cols-[0.95fr_1.05fr]"
      >
        {/* Image side */}
        <div className="relative min-h-[220px] overflow-hidden bg-black">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 1024px) 100vw, 440px"
            className="object-cover opacity-95 transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

          <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-primary shadow-sm">
            {item.number}
          </div>

          <div className="absolute bottom-5 left-5 grid size-13 place-items-center rounded-2xl border border-white/20 bg-white/15 text-white backdrop-blur">
            <Icon className="size-6" />
          </div>
        </div>

        {/* Text side */}
        <div className="relative flex flex-col justify-between p-7 lg:p-8">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.26em] text-secondary">
              Who We Are
            </p>
            <h3 className="text-3xl font-black leading-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {item.description}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-5">
            <span className="text-sm font-black text-primary">Learn more</span>
            <span className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-secondary">
              <ArrowUpRight className="size-5" />
            </span>
          </div>
        </div>
      </Link>
    </ScrollStackItem>
  );
}

// ---------------------------------------------------------------------------
// Mobile card
// ---------------------------------------------------------------------------

function MobileWhoCard({ item }: { item: WhoCard }) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className="group overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm"
    >
      <div className="relative h-56 overflow-hidden bg-black">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="100vw"
          className="object-cover opacity-95 transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-black text-primary">
          {item.number}
        </div>

        <div className="absolute bottom-4 left-4 grid size-12 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur">
          <Icon className="size-5" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-black leading-tight text-foreground">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {item.description}
        </p>
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-primary">
          Learn more
          <ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export default function WhoWeAreSection() {
  return (
    <section
      className="relative bg-background text-foreground"
      /**
       * FIX: NO overflow-hidden here — that's what breaks position:sticky.
       * The section must allow the sticky child to escape clip boundaries.
       */
    >
      {/* Grid backdrop — pointer-events-none so it never clips scroll */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0
          bg-[linear-gradient(to_right,rgba(9,145,203,0.055)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(9,145,203,0.055)_1px,transparent_1px)]
          bg-[size:56px_56px]"
      />

      {/*
        FIX: Use a two-column wrapper WITHOUT overflow-hidden or overflow-clip.
        The left column uses `sticky` — its closest scrolling ancestor must be
        the <html>/<body>, not a clipped container.
      */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-12 xl:gap-16">
          {/* ── LEFT: Sticky panel ───────────────────────────────────────── */}
          {/*
            FIX: `position: sticky` requires:
              1. No overflow:hidden on any ancestor up to the scroll root.
              2. The sticky element's parent must be taller than the element
                 itself (so there's room to scroll through).
            We achieve #2 by letting the right column control section height.
          */}
          <div className="hidden lg:block lg:w-[38%] xl:w-[36%] shrink-0">
            <div
              className="sticky flex flex-col justify-center py-24"
              style={{
                top: "calc(var(--header-height, 82px) + 32px)",
                // Viewport height minus header and some breathing room
                height: "calc(100vh - var(--header-height, 82px) - 64px)",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full flex-col justify-center"
              >
                {/* Eyebrow */}
                <p className="mb-4 text-xs font-black uppercase tracking-[0.36em] text-secondary">
                  Who We Are
                </p>

                <h2 className="max-w-2xl text-4xl font-black leading-[1.02] text-foreground sm:text-5xl lg:text-[2.75rem] xl:text-5xl">
                  A legacy of care,{" "}
                  <span className="text-primary">
                    rights and community impact.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
                  PSTC is a non-government, not-for-profit voluntary
                  organization working to improve the quality of life of poor
                  and socially disadvantaged people. Its journey is rooted in
                  FPSTC, formed in 1978, and continues through national
                  registration, public-sector affiliation, and IPPF membership.
                </p>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-3 gap-3 max-w-sm">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[1.35rem] border border-border bg-card/90 p-4 shadow-sm"
                    >
                      <p className="text-2xl font-black text-primary">
                        {stat.value}
                      </p>
                      <p className="mt-1.5 text-xs font-bold leading-5 text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/who-we-are/about-us"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-black text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--pstc-primary-dark)] hover:shadow-primary/30"
                  >
                    Explore About PSTC
                    <ArrowUpRight className="size-4" />
                  </Link>

                  <Link
                    href="/who-we-are/strategic-plan"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-black text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:text-secondary"
                  >
                    Strategic Plan
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── RIGHT: Scroll stack (controls total section height) ───────── */}
          <div className="min-w-0 flex-1">
            {/* Desktop: ScrollStack with window scroll */}
            <div className="hidden lg:block">
              <ScrollStack
                useWindowScroll
                itemDistance={110}
                itemScale={0.025}
                itemStackDistance={34}
                stackPosition="22%"
                scaleEndPosition="8%"
                baseScale={0.82}
                rotationAmount={0.7}
                blurAmount={0.35}
              >
                {whoItems.map((item) => (
                  <WhoStackCard key={item.href} item={item} />
                ))}
              </ScrollStack>
            </div>

            {/* Mobile: plain stacked cards */}
            <div className="grid gap-5 py-12 lg:hidden">
              {/* Mobile heading */}
              <div className="mb-4">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.36em] text-secondary">
                  Who We Are
                </p>
                <h2 className="text-3xl font-black leading-tight text-foreground sm:text-4xl">
                  A legacy of care,{" "}
                  <span className="text-primary">
                    rights and community impact.
                  </span>
                </h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  PSTC is a non-government, not-for-profit voluntary
                  organization working to improve the quality of life of poor
                  and socially disadvantaged people.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-border bg-card p-4 shadow-sm"
                    >
                      <p className="text-xl font-black text-primary">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs font-bold text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/who-we-are/about-us"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-black text-primary-foreground shadow-md transition hover:-translate-y-0.5"
                  >
                    Explore About PSTC
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <Link
                    href="/who-we-are/strategic-plan"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-black text-foreground transition hover:-translate-y-0.5 hover:text-secondary"
                  >
                    Strategic Plan
                  </Link>
                </div>
              </div>

              {/* Cards */}
              {whoItems.map((item) => (
                <MobileWhoCard key={item.href} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
