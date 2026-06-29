"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Cake } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { Confetti, type ConfettiRef } from "@/components/ui/confetti";
import { cn } from "@/lib/utils";
import { SparklesText } from "../ui/sparkles-text";
import { BackgroundLines } from "../ui/background-lines";

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
        "group h-full w-full gap-2 px-4 text-[11px] font-black uppercase tracking-wider transition sm:px-5 sm:text-xs lg:px-4",
        variant === "primary"
          ? "border-primary bg-primary text-primary-foreground hover:bg-[var(--pstc-primary-dark)] hover:text-primary-foreground"
          : "border-white/30 bg-white/10 text-white hover:border-secondary hover:bg-secondary hover:text-secondary-foreground",
        className,
      )}
    >
      {children}
    </MovingBorderButton>
  );
}

function JourneyHangingCard({ activeIndex }: { activeIndex: number }) {
  const confettiRef = useRef<ConfettiRef>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fireBirthdayBurst = () => {
      const rect = cardRef.current?.getBoundingClientRect();
      const origin = rect
        ? {
            x: (rect.left + rect.width / 2) / window.innerWidth,
            y: (rect.top + rect.height * 0.58) / window.innerHeight,
          }
        : { x: 0.88, y: 0.26 };

      const burstOptions = {
        origin,
        spread: 74,
        startVelocity: 36,
        ticks: 150,
        scalar: 0.92,
        colors: ["#0991cb", "#d73f32", "#ffffff", "#ffd166"],
      };

      confettiRef.current?.fire({
        ...burstOptions,
        particleCount: 52,
        angle: 68,
      });

      window.setTimeout(() => {
        confettiRef.current?.fire({
          ...burstOptions,
          particleCount: 42,
          angle: 112,
        });
      }, 180);

      window.setTimeout(() => {
        confettiRef.current?.fire({
          ...burstOptions,
          particleCount: 34,
          spread: 96,
          startVelocity: 28,
        });
      }, 340);
    };

    const burstTimer = window.setTimeout(fireBirthdayBurst, 450);

    return () => {
      window.clearTimeout(burstTimer);
    };
  }, [activeIndex]);

  return (
    <motion.div
      ref={cardRef}
      drag
      dragMomentum={false}
      dragElastic={0.12}
      className="
        absolute z-30 hidden cursor-grab active:cursor-grabbing sm:block

        right-3 top-0 h-[15svh] w-[120px]
        md:right-5 md:h-[16svh] md:w-[135px]
        lg:right-8 lg:h-[17svh] lg:w-[155px]
        xl:right-12 xl:h-[18.2svh] xl:w-[170px]
        2xl:right-16 2xl:w-[190px]
      "
    >
      <Confetti
        ref={confettiRef}
        manualstart
        className="pointer-events-none fixed inset-0 z-10 size-full"
      />

      {/* Rope */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        className="absolute left-1/2 top-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary via-primary/60 to-transparent"
      />

      {/* Rope Joint */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.85 }}
        className="
          absolute left-1/2 z-10 -translate-x-1/2 rounded-full
          border border-primary/40 bg-primary shadow-xl shadow-primary/40

          top-[calc(15svh-8px)] size-4
          md:top-[calc(16svh-9px)] md:size-[18px]
          lg:top-[calc(17svh-10px)] lg:size-5
          xl:top-[calc(18.2svh-10px)]
        "
      />

      {/* Hanging Card */}
      <motion.div
        initial={{ opacity: 0, y: -40, rotate: -5 }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: [-3, 3, -2.5, 2.5, -3],
        }}
        transition={{
          opacity: { duration: 0.45, delay: 0.75 },
          y: { duration: 0.65, delay: 0.75, ease: "easeOut" },
          rotate: {
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.1,
          },
        }}
        style={{ transformOrigin: "50% -30px" }}
        className="
          group absolute left-1/2 -translate-x-1/2 [perspective:1000px]

          top-[15svh] h-[120px] w-full
          md:top-[16svh] md:h-[135px]
          lg:top-[17svh] lg:h-[155px]
          xl:top-[18.2svh] xl:h-[170px]
          2xl:h-[180px]
        "
      >
        <div className="relative h-full w-full transition duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front */}
          <div className="absolute inset-0 overflow-hidden rounded-[1rem] border border-primary/20 bg-card/95 text-center shadow-[0_14px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl [backface-visibility:hidden] md:rounded-[1.15rem] lg:rounded-[1.3rem] xl:rounded-[1.4rem]">
            <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-primary xl:h-6" />

            <div className="p-2.5 md:p-3 lg:p-3.5 xl:p-4">
              <div className="mx-auto grid size-8 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 md:size-9 lg:size-10 lg:rounded-2xl">
                <Cake className="size-4 lg:size-5" />
              </div>

              <div className="mt-2 text-lg font-black leading-none text-primary md:text-xl lg:mt-3 lg:text-2xl">
                48
              </div>

              <SparklesText className="mt-1 text-[9px] font-black uppercase leading-3 text-primary md:text-[10px] lg:text-xs xl:text-sm">
                Years <span className="text-secondary">Anniversary</span>
              </SparklesText>
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 grid place-items-center overflow-hidden rounded-[1rem] border border-primary/20 bg-card/95 p-3 shadow-[0_14px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl [backface-visibility:hidden] [transform:rotateY(180deg)] md:rounded-[1.15rem] lg:rounded-[1.3rem] lg:p-4 xl:rounded-[1.4rem] xl:p-5">
            <Image
              src="/pstc_logo.png"
              alt="PSTC Logo"
              width={120}
              height={80}
              className="h-auto w-16 object-contain md:w-20 lg:w-24 xl:w-28"
            />

            <p className="mt-2 text-center text-[8px] font-black uppercase tracking-[0.16em] text-primary md:text-[9px] lg:text-[10px]">
              Since 1978
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
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

      {/* <div className="absolute inset-0 bg-black/15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(9,145,203,0.22),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(215,63,50,0.18),transparent_30%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[58%] bg-linear-to-t from-black via-black/10 to-transparent" /> */}

      <JourneyHangingCard activeIndex={activeIndex} />

      <div className="relative mx-auto flex h-full w-full flex-col justify-end px-4 pb-5 pt-5 sm:px-6 sm:pb-6 lg:px-6 lg:pb-7 xl:px-8">
        <div className="grid items-end gap-5 lg:grid-cols-[1fr_0.78fr] lg:gap-5 xl:grid-cols-[1fr_0.82fr]">
          <div className="max-w-90 pb-0 text-left sm:max-w-2xl lg:max-w-3xl lg:pb-2">
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

            <h1 className="max-w-85 font-serif text-[2rem] leading-[1.05] text-white min-[420px]:text-[2.25rem] sm:max-w-2xl sm:text-[2.8rem] lg:text-[2.9rem] xl:text-[3.15rem]">
              {activeSlide.title}{" "}
              <span className="font-semibold italic text-secondary">
                {activeSlide.italic}
              </span>
            </h1>

            <p className="mt-3 max-w-105 text-xs leading-5 text-white/82 sm:max-w-lg sm:text-sm">
              {activeSlide.description}
            </p>

            <div className="mt-4 grid max-w-85 gap-2 sm:flex sm:max-w-none sm:flex-wrap sm:gap-3 lg:mt-3">
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

          <div className="ml-auto hidden w-full max-w-97 pb-1 lg:block xl:max-w-115">
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
