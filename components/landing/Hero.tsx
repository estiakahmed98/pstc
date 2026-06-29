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
    title: "Care for",
    italic: "Community.",
    description:
      "Delivering health, rights, skills, and inclusive services across Bangladesh.",
    short: "Care for every community",
    image: "/hero/hero%25201.webp",
    href: "/what-we-do",
  },
  {
    title: "Services That",
    italic: "Transform.",
    description:
      "Advancing health, nutrition, youth, climate resilience, and workforce skills.",
    short: "Impact through services",
    image: "/hero/hero%25202.avif",
    href: "/what-we-do/thematic-areas",
  },
  {
    title: "Youth Shape",
    italic: "Tomorrow.",
    description:
      "Empowering young people through leadership, learning, advocacy, and innovation.",
    short: "Youth leading tomorrow",
    image: "/hero/hero%25203.jpg",
    href: "/ucon",
  },
  {
    title: "Evidence That",
    italic: "Inspires.",
    description:
      "Explore publications, reports, research, events, and stories of measurable impact.",
    short: "Stories of real impact",
    image: "/hero/hero%25204.jpeg",
    href: "/our-impact",
  },
  {
    title: "Partners for",
    italic: "Progress.",
    description:
      "Collaborating to expand opportunities through training, innovation, and community action.",
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
      containerClassName="h-10 w-full min-w-0 text-xs sm:h-11 sm:min-w-[145px] sm:w-auto lg:h-10 lg:min-w-[148px]"
      borderClassName="bg-[radial-gradient(var(--pstc-primary)_32%,var(--pstc-secondary)_58%,transparent_72%)]"
      className={cn(
        "group h-full w-full gap-2 px-4 text-[11px] font-black uppercase tracking-[0.05em] transition sm:px-5 sm:text-xs lg:px-4",
        variant === "primary"
          ? "border-primary bg-primary text-primary-foreground hover:bg-[var(--pstc-primary-dark)]"
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

    return () => window.clearTimeout(timer);
  }, [activeIndex, slideCount]);

  const selectSlide = (index: number) => {
    if (!slideCount) return;
    setActiveIndex(index);
  };

  if (!activeSlide) return null;

  return (
    <section className="relative z-10 h-[calc(100svh-82px)] overflow-hidden bg-black text-white lg:h-[calc(100svh-86px)]">
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
      <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative mx-auto flex h-full w-full flex-col justify-end px-4 pb-5 pt-5 sm:px-6 sm:pb-6 lg:px-6 lg:pb-7 xl:px-8">
        <div className="grid items-end gap-5 lg:grid-cols-[1fr_0.78fr] lg:gap-5 xl:grid-cols-[1fr_0.82fr]">
          <div className="max-w-[360px] pb-0 text-left sm:max-w-2xl lg:max-w-3xl lg:pb-2">
            <SparklesText
              sparklesCount={4}
              colors={{
                first: "var(--pstc-primary)",
                second: "var(--pstc-secondary)",
              }}
              className="mb-2 text-[8px] font-black uppercase tracking-[0.2em] text-gray-100 sm:text-[10px] sm:tracking-[0.26em]"
            >
              PSTC Digital Experience
            </SparklesText>

            <h1 className="max-w-[340px] font-serif text-[2rem] leading-[1.05] text-white min-[420px]:text-[2.25rem] sm:max-w-2xl sm:text-[2.8rem] lg:text-[2.9rem] xl:text-[3.15rem]">
              {activeSlide.title}{" "}
              <span className="font-semibold italic text-secondary">
                {activeSlide.italic}
              </span>
            </h1>

            <p className="mt-2 line-clamp-2 max-w-[320px] text-xs leading-5 text-white/80 sm:max-w-lg sm:text-sm lg:hidden">
              {activeSlide.description}
            </p>

            <div className="mt-4 grid max-w-[340px] gap-2 sm:flex sm:max-w-none sm:flex-wrap sm:gap-3 lg:mt-3">
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

          <div className="ml-auto hidden w-full max-w-[390px] pb-1 lg:block xl:max-w-[460px]">
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

            <div className="mt-3 grid grid-cols-5 gap-2">
              {slides.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={slide.image}
                    type="button"
                    onClick={() => selectSlide(index)}
                    className={cn(
                      "group relative h-12 overflow-hidden border text-left transition duration-500 min-[1150px]:h-14 xl:h-16",
                      isActive
                        ? "scale-105 border-white shadow-xl shadow-black/30"
                        : "border-white/15 opacity-70 hover:scale-105 hover:border-white hover:opacity-100",
                    )}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.short}
                      fill
                      sizes="120px"
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/58" />

                    <div className="absolute inset-x-0 bottom-0 translate-y-full p-2 transition duration-300 group-hover:translate-y-0">
                      <p className="text-[8px] font-black uppercase leading-3 tracking-widest text-white">
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

            <div className="mt-2 hidden grid-cols-[1fr_auto] items-center gap-3 lg:grid">
              <p className="max-w-sm text-[10px] leading-4 text-white/78 xl:text-[11px] xl:leading-5">
                <span className="font-black text-white">
                  {activeSlide.short}.
                </span>{" "}
                {activeSlide.description}
              </p>

              <p className="font-mono text-[10px] font-bold text-white/50">
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
