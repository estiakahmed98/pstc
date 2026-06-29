"use client";

import { useMemo, useState } from "react";

import districtPaths from "@/lib/bd-districts.json";
import { getDistrictStatus, type DistrictStatus } from "@/lib/bd-district-status";
import { cn } from "@/lib/utils";

const VIEWBOX = "0 0 1655.4 2224.5";

type District = {
  slug: string;
  name: string;
  pathId: string;
  d: string;
  status: DistrictStatus;
};

export default function PSTCBangladeshMap({
  className,
}: {
  className?: string;
}) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const districts = useMemo<District[]>(
    () =>
      districtPaths.map((district) => ({
        ...district,
        status: getDistrictStatus(district.slug),
      })),
    [],
  );

  const hoveredDistrict = districts.find((d) => d.slug === hoveredSlug) ?? null;

  return (
    <div className={cn("relative h-full w-full", className)}>
      <svg
        viewBox={VIEWBOX}
        preserveAspectRatio="xMidYMid meet"
        className="block h-full w-full"
        role="img"
        aria-label="Map of Bangladesh showing PSTC branch districts"
      >
        <defs>
          <linearGradient id="pstc-branch" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0b579e" />
            <stop offset="100%" stopColor="#1178bf" />
          </linearGradient>
          <linearGradient id="pstc-branch-hover" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#08477f" />
            <stop offset="55%" stopColor="#0b579e" />
            <stop offset="100%" stopColor="#78aa3e" />
          </linearGradient>
        </defs>

        {districts.map((district) => {
          const isBranch = district.status === "branch";
          const isHovered = hoveredSlug === district.slug;
          const isMuted = hoveredSlug !== null && isBranch && !isHovered;

          return (
            <path
              key={district.slug}
              id={district.slug}
              d={district.d}
              fill={
                isBranch
                  ? isHovered
                    ? "url(#pstc-branch-hover)"
                    : "url(#pstc-branch)"
                  : "#e8f3fc"
              }
              stroke={isBranch ? "#ffffff" : "rgba(11, 87, 158, 0.12)"}
              strokeWidth={isBranch ? 1.5 : 1}
              strokeLinejoin="round"
              opacity={isMuted ? 0.72 : 1}
              tabIndex={isBranch ? 0 : -1}
              className={cn(
                "transition-[fill,opacity] duration-200 focus:outline-none",
                isBranch ? "cursor-pointer" : "pointer-events-none",
              )}
              onMouseEnter={() => isBranch && setHoveredSlug(district.slug)}
              onMouseLeave={() => isBranch && setHoveredSlug(null)}
              onFocus={() => isBranch && setHoveredSlug(district.slug)}
              onBlur={() => isBranch && setHoveredSlug(null)}
            >
              {isBranch ? <title>{district.name}</title> : null}
            </path>
          );
        })}
      </svg>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 border-t border-[var(--pstc-primary)]/10 bg-background/90 px-5 py-4 backdrop-blur-[1px] sm:px-8"
        aria-live="polite"
      >
        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="text-sm font-medium text-foreground">
            {hoveredDistrict ? (
              <>
                <span className="text-[var(--pstc-primary)]">{hoveredDistrict.name}</span>
                <span className="text-muted-foreground"> — PSTC branch district</span>
              </>
            ) : (
              "Hover a highlighted district to view its name"
            )}
          </p>
          {!hoveredDistrict ? (
            <p className="text-xs font-medium text-[var(--pstc-secondary-dark)]">
              20 districts · 72 offices · 22 clinics
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
