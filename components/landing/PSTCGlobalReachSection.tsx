"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { COBEOptions } from "cobe";
import { motion } from "motion/react";
import {
  ArrowRight,
  Globe2,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import {
  Globe,
  projectGlobeMarker,
  PSTC_GLOBE_CONFIG,
  PSTC_GLOBE_CONFIG_RED,
  PSTC_GLOBE_MARKERS,
  type GlobeRotation,
} from "@/components/ui/globe";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { SparklesText } from "@/components/ui/sparkles-text";
import { cn } from "@/lib/utils";

const impactCards = [
  {
    icon: MapPin,
    title: "Bangladesh at the core",
    text: "Urban clinics & rural outreach — rooted where communities live.",
  },
  {
    icon: Globe2,
    title: "Global alliances",
    text: "USAID, EU, Plan International & 19+ partners worldwide.",
  },
  {
    icon: Users,
    title: "Lives transformed",
    text: "48 years of health, rights, and dignity for millions.",
  },
] as const;

const stats = [
  { value: "48+", label: "Years of impact" },
  { value: "19+", label: "Global partners" },
  { value: "8", label: "Regions reached" },
] as const;

function GlobeMarkerLabels({ rotation }: { rotation: GlobeRotation }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {PSTC_GLOBE_MARKERS.map((marker) => {
        const { x, y, visible } = projectGlobeMarker(
          marker.lat,
          marker.lng,
          rotation,
        );

        return (
          <div
            key={marker.label}
            className={cn(
              "absolute z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap transition-opacity duration-200",
              visible ? "opacity-100" : "opacity-0",
            )}
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
          >
            <div
              className={cn(
                "rounded-full border px-2.5 py-1 text-center shadow-sm backdrop-blur-md sm:px-3 sm:py-1.5",
                marker.highlight
                  ? "border-[var(--pstc-secondary)]/35 bg-[var(--pstc-secondary-soft)]/80 shadow-[0_8px_24px_rgba(148,202,81,0.18)]"
                  : "border-border/70 bg-card/95",
              )}
            >
              <p
                className={cn(
                  "text-[8px] font-black uppercase tracking-[0.18em] sm:text-[9px] sm:tracking-[0.22em]",
                  marker.highlight
                    ? "text-[var(--pstc-secondary-dark)]"
                    : "text-[var(--pstc-primary)]",
                )}
              >
                {marker.label}
              </p>
              {"sub" in marker && marker.sub && (
                <p className="hidden text-[8px] font-medium text-muted-foreground sm:block">
                  {marker.sub}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function useGlobeThemeConfig() {
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    const readTheme = () => {
      setIsRed(
        document.documentElement.classList.contains("theme-pstc-red-grey"),
      );
    };

    readTheme();
    const observer = new MutationObserver(readTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return useMemo(
    () => ({
      globeConfig: (isRed ? PSTC_GLOBE_CONFIG_RED : PSTC_GLOBE_CONFIG) as COBEOptions,
      isRed,
    }),
    [isRed],
  );
}

export default function PSTCGlobalReachSection() {
  const { globeConfig } = useGlobeThemeConfig();
  const [rotation, setRotation] = useState<GlobeRotation>({
    phi: 0,
    theta: globeConfig.theta ?? 0.22,
  });

  const handleRotationChange = useCallback((next: GlobeRotation) => {
    setRotation(next);
  }, []);

  useEffect(() => {
    setRotation((current) => ({
      ...current,
      theta: globeConfig.theta ?? 0.22,
    }));
  }, [globeConfig.theta]);

  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-28 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(11,87,158,0.08),transparent_42%),radial-gradient(circle_at_15%_85%,rgba(148,202,81,0.08),transparent_34%),radial-gradient(circle_at_85%_75%,rgba(11,87,158,0.06),transparent_30%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(11,87,158,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,87,158,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div className="container-pstc relative z-10">
        <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] xl:gap-10 2xl:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75 }}
            className="relative z-10 min-w-0 px-1"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--pstc-primary)]/15 bg-[var(--pstc-primary-soft)]/60 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[var(--pstc-primary)]">
              <Sparkles className="size-3.5" />
              Global Impact Network
            </div>

            <h2 className="max-w-xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
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

            <p className="mt-6 max-w-md text-base leading-8 text-muted-foreground sm:text-lg">
              From Dhaka to the world — PSTC connects Bangladeshi communities
              with international development partners for lasting health and
              social change.
            </p>

            <div className="mt-9 space-y-3">
              {impactCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 + index * 0.08 }}
                    className="group flex gap-4 rounded-2xl border border-border/70 bg-card/80 p-4 shadow-sm backdrop-blur-sm transition duration-300 hover:border-[var(--pstc-primary)]/20 hover:shadow-[0_16px_40px_rgba(11,87,158,0.08)]"
                  >
                    <div className="grid size-11 shrink-0 place-items-center rounded-xl border border-[var(--pstc-primary)]/10 bg-[var(--pstc-primary-soft)]/60 text-[var(--pstc-primary)]">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.12em] text-foreground">
                        {card.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {card.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MovingBorderButton
                as={Link}
                href="/our-impact"
                duration={3200}
                borderRadius="999px"
                containerClassName="h-13 w-auto min-w-[210px]"
                borderClassName="bg-[radial-gradient(var(--pstc-primary)_32%,var(--pstc-secondary)_58%,transparent_72%)]"
                className="group gap-2 rounded-full border border-[var(--pstc-primary)] bg-[var(--pstc-primary)] px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-[var(--pstc-primary-dark)]"
              >
                Explore Our Impact
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </MovingBorderButton>

              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--pstc-secondary)] opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-[var(--pstc-secondary)]" />
                </span>
                Drag the globe to explore
              </p>
            </div>

            <div className="mt-10 hidden gap-6 border-t border-border/70 pt-8 sm:flex">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.06 }}
                  className="flex-1"
                >
                  <p className="text-3xl font-black tracking-tight text-[var(--pstc-primary)]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, delay: 0.05 }}
            className="relative mx-auto w-full max-w-[min(100%,420px)] shrink-0 sm:max-w-[460px] lg:max-w-[500px] xl:max-w-[540px] 2xl:max-w-[580px]"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 size-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(11,87,158,0.14),rgba(148,202,81,0.08)_42%,transparent_72%)] blur-3xl"
              />

              <motion.div
                animate={{ scale: [1, 1.04, 1], opacity: [0.35, 0.55, 0.35] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute left-1/2 top-1/2 size-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--pstc-primary)]/15"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute left-1/2 top-1/2 size-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[var(--pstc-secondary)]/20"
              />

              <Globe
                config={globeConfig}
                onRotationChange={handleRotationChange}
                className="relative z-[1]"
              />

              <GlobeMarkerLabels rotation={rotation} />
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto mt-8 grid max-w-lg grid-cols-3 gap-3 sm:hidden">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border/70 bg-card/80 px-2 py-3 text-center shadow-sm"
            >
              <p className="text-xl font-black text-[var(--pstc-primary)]">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
