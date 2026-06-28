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
import ScrollStack, {
  ScrollStackItem,
} from "@/components/ui/ScrollStackItemProps";
import { MovingLinkButton } from "@/components/ui/moving-link-button";
import { cn } from "@/lib/utils";
import {
  MovingBorder,
  Button as MovingBorderButton,
} from "@/components/ui/moving-border";
import { BG } from "../ui/bg";
import { SparklesText } from "../ui/sparkles-text";

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
  { value: "48+", label: "Years of service" },
  { value: "1978", label: "FPSTC origin" },
  { value: "IPPF", label: "Member Association" },
];

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "relative overflow-hidden bg-transparent p-[1px] text-xl",
        containerClassName,
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]",
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

function WhoStackCard({ item }: { item: WhoCard }) {
  const Icon = item.icon;

  return (
    <ScrollStackItem
      useBorderGlow
      itemClassName={cn(
        "!my-0 !h-[330px] !rounded-[1.5rem] !p-0 overflow-hidden bg-card xl:!h-[380px] xl:!rounded-[1.8rem] 2xl:!h-[410px]",
        "shadow-[0_28px_90px_rgba(16,24,40,0.16)]",
      )}
      borderGlowProps={{
        borderRadius: 40,
        glowColor: "11 87 158",
        backgroundColor: "transparent",
        edgeSensitivity: 24,
        glowRadius: 30,
        glowIntensity: 0.85,
        coneSpread: 22,
        colors: ["#0b579e", "#94ca51", "#ffffff"],
      }}
    >
      <Link
        href={item.href}
        className="group grid h-full overflow-hidden rounded-[1.5rem] bg-card lg:grid-cols-[0.88fr_1.12fr] xl:rounded-[1.8rem] xl:grid-cols-[0.9fr_1.1fr]"
      >
        {/* Image side */}
        <div className="relative min-h-[170px] overflow-hidden bg-black xl:min-h-[190px] 2xl:min-h-[210px]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 1024px) 100vw, 440px"
            className="object-cover opacity-95 transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

          <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-primary shadow-sm xl:left-5 xl:top-5 xl:px-3.5 xl:py-1.5 xl:text-[11px] 2xl:px-4 2xl:py-2">
            {item.number}
          </div>

          <div className="absolute bottom-4 left-4 grid size-10 place-items-center rounded-2xl border border-white/20 bg-white/15 text-white backdrop-blur xl:bottom-5 xl:left-5 xl:size-11 2xl:size-12">
            <Icon className="size-5 xl:size-5 2xl:size-6" />
          </div>
        </div>

        {/* Text side */}
        <div className="relative flex flex-col justify-between p-4 xl:p-6 2xl:p-7">
          <div>
            <p className="mb-2 text-[9px] font-black uppercase tracking-[0.18em] text-secondary xl:mb-3 xl:text-[10px] xl:tracking-[0.22em] 2xl:text-xs">
              Who We Are
            </p>
            <h3 className="text-xl font-black leading-tight text-foreground xl:text-[1.55rem] 2xl:text-2xl">
              {item.title}
            </h3>
            <p className="mt-2 text-[13px] leading-5 text-muted-foreground xl:mt-3 xl:text-sm xl:leading-6">
              {item.description}
            </p>
          </div>

          <div className="mt-3 flex items-center justify-between gap-4 border-t border-border pt-3 xl:mt-5 xl:pt-4">
            <span className="text-xs font-black text-primary xl:text-sm">
              Learn more
            </span>
            <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-secondary xl:size-10">
              <ArrowUpRight className="size-3.5 xl:size-4" />
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
      className="relative z-0 isolate bg-background pt-6 text-foreground sm:pt-8 lg:pt-0"
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
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-4 xl:gap-6 2xl:gap-8">
          <div className="hidden shrink-0 lg:block lg:w-[34%] xl:w-[30%] 2xl:w-[28%]">
            <div
              className="sticky flex flex-col justify-center py-8 xl:py-14 2xl:py-18"
              style={{
                top: "calc(var(--header-height, 82px) + 12px)",
                // Viewport height minus header and some breathing room
                height: "calc(100vh - var(--header-height, 82px) - 24px)",
              }}
            >
              <div className="flex h-full flex-col justify-center">
                {/* Eyebrow */}
                <SparklesText
                  sparklesCount={5}
                  colors={{
                    first: "var(--pstc-primary)",
                    second: "var(--pstc-secondary)",
                  }}
                  className="mb-2 text-[9px] font-black uppercase tracking-[0.24em] text-secondary xl:mb-3 xl:text-[10px] xl:tracking-[0.3em] 2xl:text-xs 2xl:tracking-[0.36em]"
                >
                  Who We Are
                </SparklesText>

                <h2 className="max-w-2xl text-[2rem] font-black leading-[1.06] text-foreground xl:text-[2.65rem] 2xl:text-4xl">
                  A legacy of care,{" "}
                  <span className="text-primary">
                    rights and community impact.
                  </span>
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground xl:mt-4 xl:text-[15px] xl:leading-7 2xl:text-base 2xl:leading-8">
                  PSTC is a non-government, not-for-profit voluntary
                  organization working to improve the quality of life of poor
                  and socially disadvantaged people. Its journey is rooted in
                  FPSTC, formed in 1978, and continues through national
                  registration, public-sector affiliation, and IPPF membership.
                </p>

                {/* Stats */}
                {/* <div className="mt-6 grid max-w-md grid-cols-3 gap-2 xl:mt-8 xl:gap-3">
                  {stats.map((stat) => (
                    <BG
                      key={stat.label}
                      containerClassName="rounded-[1.6rem]"
                      className="h-full bg-card/95 px-3 py-4 shadow-[0_14px_35px_rgba(15,23,42,0.08)] transition-all duration-300 group-hover:-translate-y-1 xl:px-4 xl:py-5"
                    >
                      <div className="mb-3 h-1.5 w-9 rounded-full bg-gradient-to-r from-primary to-secondary xl:w-10" />

                      <p className="text-xl font-black leading-none text-primary xl:text-2xl">
                        {stat.value}
                      </p>

                      <p className="mt-2 text-xs font-bold leading-5 text-muted-foreground">
                        {stat.label}
                      </p>
                    </BG>
                  ))}
                </div> */}

                {/* CTAs */}
                <div className="mt-5 flex flex-wrap items-center gap-3 xl:mt-6 xl:gap-3 2xl:gap-4">
                  <MovingLinkButton
                    href="/who-we-are/about-us"
                    containerClassName="h-10 min-w-[138px] xl:h-11 xl:min-w-[150px] 2xl:h-12 2xl:min-w-[160px]"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-2.5 text-[11px] font-black text-primary-foreground shadow-[0_14px_35px_var(--pstc-primary-glow)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--pstc-primary-dark)] hover:shadow-[0_18px_45px_var(--pstc-primary-glow)] xl:px-4 xl:py-3 xl:text-xs 2xl:px-5 2xl:text-sm"
                  >
                    Explore PSTC
                    <span className="grid size-6 place-items-center rounded-full bg-white/15 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </MovingLinkButton>

                  <MovingLinkButton
                    href="/who-we-are/strategic-plan"
                    containerClassName="h-10 min-w-[138px] xl:h-11 xl:min-w-[150px] 2xl:h-12 2xl:min-w-[160px]"
                    className="group inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-3.5 py-2.5 text-[11px] font-black text-foreground shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:bg-secondary hover:text-secondary-foreground hover:shadow-[0_18px_45px_var(--pstc-secondary-glow)] xl:px-4 xl:py-3 xl:text-xs 2xl:px-5 2xl:text-sm"
                  >
                    Strategic Plan
                    <span className="h-2 w-2 rounded-full bg-secondary transition duration-300 group-hover:bg-secondary-foreground" />
                  </MovingLinkButton>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Scroll stack (controls total section height) ───────── */}
          <div className="min-w-0 flex-1">
            {/* Desktop: ScrollStack with window scroll */}
            <div className="hidden lg:block">
              <ScrollStack
                useWindowScroll
                itemDistance={72}
                itemScale={0.018}
                itemStackDistance={20}
                stackPosition="16%"
                scaleEndPosition="9%"
                baseScale={0.9}
                rotationAmount={0}
                blurAmount={0}
              >
                {whoItems.map((item) => (
                  <WhoStackCard key={item.href} item={item} />
                ))}
              </ScrollStack>
            </div>

            {/* Mobile: plain stacked cards */}
            <div className="grid gap-5 py-10 lg:hidden">
              {/* Mobile heading */}
              <div className="mb-4">
                <SparklesText
                  sparklesCount={5}
                  colors={{
                    first: "var(--pstc-primary)",
                    second: "var(--pstc-secondary)",
                  }}
                  className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-secondary sm:text-xs sm:tracking-[0.36em]"
                >
                  Who We Are
                </SparklesText>
                <h2 className="text-[2rem] font-black leading-tight text-foreground sm:text-4xl">
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

                <div className="mt-6 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3">
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

                <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
                  <Link
                    href="/who-we-are/about-us"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-black text-primary-foreground shadow-md transition hover:-translate-y-0.5 sm:w-auto"
                  >
                    Explore
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <Link
                    href="/who-we-are/strategic-plan"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-black text-foreground transition hover:-translate-y-0.5 hover:text-secondary sm:w-auto"
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
