"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";
import { SparklesText } from "../ui/sparkles-text";

type HeroSlide = {
  title: string;
  italic: string;
  description: string;
  short: string;
  image: string;
  href: string;
};

const slides: HeroSlide[] = [
  {
    title: "Care begins with access.",
    italic: "Dignity for all.",
    description:
      "PSTC connects communities with health, rights, skills, youth engagement, and inclusive services across Bangladesh.",
    short: "Care for every community",
    image: "/hero/hero%25201.webp",
    href: "/what-we-do",
  },
  {
    title: "Clinics to communities.",
    italic: "Impact that lasts.",
    description:
      "Explore PSTC programs in population health, nutrition, adolescent development, gender, climate resilience, and skills training.",
    short: "Impact through services",
    image: "/hero/hero%25202.avif",
    href: "/what-we-do/thematic-areas",
  },
  {
    title: "Young voices lead.",
    italic: "Tomorrow starts here.",
    description:
      "uCon, NaYoN, CSE learning, youth advocacy, and engagement platforms help young people ask, learn, lead, and participate.",
    short: "Youth leading tomorrow",
    image: "/hero/hero%25203.jpg",
    href: "/ucon",
  },
  {
    title: "Evidence of change.",
    italic: "Stories that matter.",
    description:
      "Read publications, annual reports, research, audit reports, events, and media stories documenting PSTC’s work.",
    short: "Stories of real impact",
    image: "/hero/hero%25204.jpeg",
    href: "/our-impact",
  },
  {
    title: "Partnerships create progress.",
    italic: "Together we move.",
    description:
      "Join PSTC through jobs, training, certification, policy learning, partnerships, and community-driven initiatives.",
    short: "Partnerships create change",
    image: "/hero/hero%25205.jpg",
    href: "/get-involved",
  },
];

const SLIDE_DURATION = 3000;

function HeroMovingButton({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <MovingBorderButton
      as={Link}
      href={href}
      duration={3200}
      borderRadius="999px"
      containerClassName="h-11 w-full min-w-0 text-sm sm:h-12 sm:min-w-[170px] sm:w-auto lg:h-14 lg:min-w-[190px]"
      borderClassName="bg-[radial-gradient(var(--pstc-primary)_32%,var(--pstc-secondary)_58%,transparent_72%)]"
      className={cn(
        "group h-full w-full gap-3 px-4 text-xs font-black uppercase tracking-[0.06em] transition sm:px-5 sm:text-sm lg:gap-4 lg:px-7 lg:tracking-[0.08em]",
        variant === "primary"
          ? "border-primary bg-primary text-primary-foreground hover:bg-(--pstc-primary-dark)"
          : "border-white/30 bg-white/10 text-white hover:border-secondary hover:bg-secondary hover:text-secondary-foreground",
        className,
      )}
    >
      {children}
    </MovingBorderButton>
  );
}

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideCount = slides.length;
  const activeSlide = slides[activeIndex % slideCount] ?? slides[0];

  useEffect(() => {
    if (!slideCount) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % slideCount);
    }, SLIDE_DURATION);

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeIndex, slideCount]);

  const selectSlide = (index: number) => {
    if (!slideCount) return;

    setActiveIndex(index);
  };

  if (!activeSlide) {
    return null;
  }

  return (
    <section className="relative h-screen overflow-hidden bg-black text-white">
      <Image
        key={activeSlide.image}
        src={activeSlide.image}
        alt={activeSlide.title}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-80 transition duration-700 ease-out"
      />

      <div className="absolute inset-0 bg-black/15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(9,145,203,0.22),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(215,63,50,0.18),transparent_30%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-linear-to-t from-black via-black/20 to-transparent" />

      <div className="relative mx-auto flex h-full w-full flex-col justify-end px-4 pb-6 pt-20 sm:px-6 sm:pb-8 sm:pt-24 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="max-w-4xl pb-2 sm:pb-4">
            <SparklesText
              sparklesCount={5}
              colors={{
                first: "var(--pstc-primary)",
                second: "var(--pstc-secondary)",
              }}
              className="mb-4 text-xs font-black uppercase tracking-[0.36em] text-gray-100"
            >
              PSTC Digital Experience
            </SparklesText>

            <h1 className="max-w-4xl font-serif text-[2rem] leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {activeSlide.title}{" "}
              <span className="italic text-secondary font-semibold">
                {activeSlide.italic}
              </span>
            </h1>

            {/* <p className="mt-4 max-w-2xl text-sm leading-7 text-white/78 sm:mt-6 sm:text-lg sm:leading-8">
              {activeSlide.description}
            </p> */}

            <div className="mt-6 grid gap-3 sm:mt-8 sm:flex sm:flex-wrap sm:gap-4">
              <HeroMovingButton href={activeSlide.href}>
                Explore Section
                <ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </HeroMovingButton>

              <HeroMovingButton href="/contact-us" variant="secondary">
                Contact PSTC
                <ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </HeroMovingButton>
            </div>
          </div>

          <div className="ml-auto hidden w-full max-w-155 lg:block">
            <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/20">
              <div
                key={activeIndex}
                className="h-full rounded-full"
                style={{
                  width: "0%",
                  background:
                    "linear-gradient(90deg, var(--pstc-primary), var(--pstc-secondary))",
                  animation: `heroProgress ${SLIDE_DURATION}ms linear forwards`,
                }}
              />
            </div>

            <div className="mt-4 grid grid-cols-5 gap-3">
              {slides.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={slide.image}
                    type="button"
                    onClick={() => selectSlide(index)}
                    className={cn(
                      "group relative h-20 overflow-hidden border text-left transition duration-500 sm:h-24 xl:h-28",
                      isActive
                        ? "scale-105 border-white shadow-2xl shadow-black/40"
                        : "border-white/15 opacity-70 hover:scale-105 hover:border-white hover:opacity-100",
                    )}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.short}
                      fill
                      sizes="160px"
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/58" />

                    <div className="absolute inset-x-0 bottom-0 translate-y-full p-2.5 transition duration-300 group-hover:translate-y-0 sm:p-3">
                      <p className="text-[10px] font-black uppercase leading-4 tracking-widest text-white sm:text-[11px]">
                        {slide.short}
                      </p>
                    </div>

                    <div
                      className={cn(
                        "absolute left-0 top-0 h-1 bg-white transition-all",
                        isActive ? "w-full" : "w-0 group-hover:w-full",
                      )}
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-4 hidden grid-cols-[1fr_auto] items-center gap-4 lg:grid">
              <p className="max-w-md text-sm leading-6 text-white/80">
                <span className="font-black text-white">
                  {activeSlide.short}.
                </span>{" "}
                {activeSlide.description}
              </p>

              <p className="font-mono text-xs font-bold text-white/50">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
