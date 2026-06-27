"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";

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
      containerClassName="h-14 min-w-[190px] text-sm"
      borderClassName="bg-[radial-gradient(var(--pstc-primary)_32%,var(--pstc-secondary)_58%,transparent_72%)]"
      className={cn(
        "group gap-4 px-7 text-sm font-black uppercase tracking-[0.08em] transition rounded-3xl",
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
    <section className="relative min-h-[calc(100vh-var(--header-height))] overflow-hidden bg-black text-white">
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

      <div className="relative mx-auto flex min-h-[calc(100vh-var(--header-height))] w-full flex-col justify-end px-4 pb-8 pt-24 sm:px-6 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-4xl pb-4">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.36em] text-white/70">
              PSTC Digital Experience
            </p>

            <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {activeSlide.title}{" "}
              <span className="italic text-primary font-semibold">
                {activeSlide.italic}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              {activeSlide.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <HeroMovingButton href={activeSlide.href} className="rounded-3xl">
                Explore Section
                <ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </HeroMovingButton>

              <HeroMovingButton
                href="/contact-us"
                variant="secondary"
                className="rounded-3xl"
              >
                Contact PSTC
                <ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </HeroMovingButton>
            </div>
          </div>

          <div className="ml-auto w-full max-w-155">
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
                      "group relative h-24 overflow-hidden border text-left transition duration-500 sm:h-28",
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

                    <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition duration-300 group-hover:translate-y-0">
                      <p className="text-[11px] font-black uppercase leading-4 tracking-widest text-white">
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

            <div className="mt-4 grid grid-cols-[1fr_auto] items-center gap-4">
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
