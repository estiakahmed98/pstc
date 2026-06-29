"use client";

import { useMemo } from "react";
import { createMap } from "svg-dotted-map";

import { cn } from "@/lib/utils";

type ReachMarker = {
  lat: number;
  lng: number;
  size?: number;
  pulse?: boolean;
  label: string;
  labelShort?: string;
  sub?: string;
  highlight?: boolean;
  showLabel?: boolean;
  labelOffset?: { x: number; y: number };
};

const REACH_MARKERS: ReachMarker[] = [
  {
    lat: 23.8103,
    lng: 90.4125,
    size: 1.45,
    pulse: true,
    label: "Dhaka",
    sub: "PSTC HQ",
    highlight: true,
    showLabel: true,
    labelOffset: { x: 0, y: 0 },
  },
  {
    lat: 56.1304,
    lng: -106.3468,
    size: 0.62,
    label: "Canada",
    showLabel: true,
    labelOffset: { x: 0, y: -0.5 },
  },
  {
    lat: 38.9072,
    lng: -77.0369,
    size: 0.66,
    label: "USA",
    showLabel: true,
    labelOffset: { x: 0, y: 0 },
  },
  {
    lat: 50.8503,
    lng: 4.3517,
    size: 0.6,
    label: "European Union",
    labelShort: "EU",
    showLabel: true,
    labelOffset: { x: -6.2, y: -4.5 },
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    size: 0.58,
    label: "United Kingdom",
    labelShort: "UK",
    showLabel: true,
    labelOffset: { x: 5.8, y: -3.8 },
  },
  {
    lat: 52.3676,
    lng: 4.9041,
    size: 0.54,
    label: "Netherlands",
    labelShort: "NL",
    showLabel: true,
    labelOffset: { x: -4.5, y: 2.8 },
  },
  {
    lat: 1.3521,
    lng: 103.8198,
    size: 0.58,
    label: "Singapore",
    labelShort: "SG",
    showLabel: true,
    labelOffset: { x: 0, y: -0.5 },
  },
  {
    lat: 35.6762,
    lng: 139.6503,
    size: 0.56,
    label: "Japan",
    showLabel: true,
    labelOffset: { x: 4.2, y: -2.5 },
  },
  {
    lat: -33.8688,
    lng: 151.2093,
    size: 0.56,
    label: "Australia",
    labelShort: "AU",
    showLabel: true,
    labelOffset: { x: 0, y: 0 },
  },
  {
    lat: -1.2921,
    lng: 36.8219,
    size: 0.54,
    label: "Kenya",
    showLabel: true,
    labelOffset: { x: -3.5, y: -2.5 },
  },
  {
    lat: -26.2041,
    lng: 28.0473,
    size: 0.52,
    label: "South Africa",
    labelShort: "ZA",
    showLabel: true,
    labelOffset: { x: 4, y: -2 },
  },
  {
    lat: 25.2048,
    lng: 55.2708,
    size: 0.52,
    label: "UAE",
    showLabel: true,
    labelOffset: { x: 3.5, y: 2.5 },
  },
  {
    lat: -23.5505,
    lng: -46.6333,
    size: 0.52,
    label: "Brazil",
    labelShort: "BR",
    showLabel: true,
    labelOffset: { x: 0, y: 2.5 },
  },
];

const MAP_WIDTH = 150;
const MAP_HEIGHT = 75;
const MAP_SAMPLES = 9200;

function useStaggerHelpers(points: { x: number; y: number }[]) {
  return useMemo(() => {
    const sorted = [...points].sort((a, b) => a.y - b.y || a.x - b.x);
    const rowMap = new Map<number, number>();
    let step = 0;
    let prevY = Number.NaN;
    let prevXInRow = Number.NaN;

    for (const p of sorted) {
      if (p.y !== prevY) {
        prevY = p.y;
        prevXInRow = Number.NaN;
        if (!rowMap.has(p.y)) rowMap.set(p.y, rowMap.size);
      }
      if (!Number.isNaN(prevXInRow)) {
        const delta = p.x - prevXInRow;
        if (delta > 0) step = step === 0 ? delta : Math.min(step, delta);
      }
      prevXInRow = p.x;
    }

    return { xStep: step || 1, yToRowIndex: rowMap };
  }, [points]);
}

function offsetPoint(
  point: { x: number; y: number },
  xStep: number,
  yToRowIndex: Map<number, number>,
) {
  const rowIndex = yToRowIndex.get(point.y) ?? 0;
  const offsetX = rowIndex % 2 === 1 ? xStep / 2 : 0;
  return { x: point.x + offsetX, y: point.y };
}

function curvePath(x1: number, y1: number, x2: number, y2: number) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2 - distance * 0.18;

  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

function getLabelLayout(
  meta: ReachMarker,
  x: number,
  y: number,
  r: number,
) {
  const offset = meta.labelOffset ?? { x: 0, y: 0 };
  const labelText = (meta.labelShort ?? meta.label).toUpperCase();
  const lx = x + offset.x;
  const anchorY = y - r - 2.2 + offset.y;
  const charWidth = 1.05;
  const rectW = Math.max(labelText.length * charWidth + 1.6, meta.sub ? 8 : 4.5);
  const rectH = meta.sub ? 3.6 : 2.35;

  return {
    labelText,
    lx,
    ly: anchorY,
    rectX: lx - rectW / 2,
    rectY: anchorY - (meta.sub ? 2.55 : 1.55),
    rectW,
    rectH,
    textY: anchorY - (meta.sub ? 1.25 : 0.35),
    subY: anchorY + 0.35,
  };
}

export default function PSTCReachMap({ className }: { className?: string }) {
  const { points, addMarkers } = useMemo(
    () =>
      createMap({
        width: MAP_WIDTH,
        height: MAP_HEIGHT,
        mapSamples: MAP_SAMPLES,
      }),
    [],
  );

  const processedMarkers = useMemo(
    () =>
      addMarkers(
        REACH_MARKERS.map(({ lat, lng, size, pulse }) => ({
          lat,
          lng,
          size,
          pulse,
        })),
      ),
    [addMarkers],
  );

  const { xStep, yToRowIndex } = useStaggerHelpers(points);

  const markerPositions = useMemo(
    () =>
      processedMarkers.map((marker, index) => {
        const position = offsetPoint(marker, xStep, yToRowIndex);
        return {
          ...position,
          r: marker.size ?? 0.2,
          meta: REACH_MARKERS[index],
        };
      }),
    [processedMarkers, xStep, yToRowIndex],
  );

  const headquarters = markerPositions[0];
  const partners = markerPositions.slice(1);

  return (
    <div className={cn("relative h-full w-full", className)}>
      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full"
        role="img"
        aria-label="World map showing PSTC headquarters in Dhaka and global partner regions"
      >
        <defs>
          <linearGradient id="pstc-arc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--pstc-secondary)" stopOpacity="0.65" />
            <stop offset="100%" stopColor="var(--pstc-primary)" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {points.map((point, index) => {
          const { x, y } = offsetPoint(point, xStep, yToRowIndex);
          return (
            <circle
              key={`${point.x}-${point.y}-${index}`}
              cx={x}
              cy={y}
              r={0.26}
              className="fill-[var(--pstc-primary)]/[0.22]"
            />
          );
        })}

        {headquarters &&
          partners.map((partner, index) => (
            <path
              key={`arc-${partner.meta.label}`}
              d={curvePath(
                headquarters.x,
                headquarters.y,
                partner.x,
                partner.y,
              )}
              fill="none"
              stroke="url(#pstc-arc-gradient)"
              strokeWidth={0.16}
              strokeDasharray="0.65 0.9"
              opacity={0.75}
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-3.1"
                dur={`${2.6 + index * 0.25}s`}
                repeatCount="indefinite"
              />
            </path>
          ))}

        {markerPositions.map(({ x, y, r, meta }) => {
          const layout = meta.showLabel
            ? getLabelLayout(meta, x, y, r)
            : null;

          return (
            <g key={meta.label}>
              <circle
                cx={x}
                cy={y}
                r={r + 0.45}
                className={cn(
                  meta.highlight
                    ? "fill-[var(--pstc-secondary)]/18"
                    : "fill-[var(--pstc-primary)]/10",
                )}
              />
              <circle
                cx={x}
                cy={y}
                r={r}
                className={cn(
                  meta.highlight
                    ? "fill-[var(--pstc-secondary)]"
                    : "fill-[var(--pstc-primary)]",
                )}
              />

              {meta.pulse ? (
                <g pointerEvents="none">
                  <circle
                    cx={x}
                    cy={y}
                    r={r}
                    fill="none"
                    className="stroke-[var(--pstc-secondary)]"
                    strokeWidth={0.38}
                  >
                    <animate
                      attributeName="r"
                      values={`${r};${r * 3}`}
                      dur="1.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.95;0"
                      dur="1.6s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              ) : null}

              {layout ? (
                <g>
                  <rect
                    x={layout.rectX}
                    y={layout.rectY}
                    width={layout.rectW}
                    height={layout.rectH}
                    rx={0.55}
                    fill="var(--background)"
                    stroke="var(--border)"
                    strokeOpacity={0.55}
                    strokeWidth={0.12}
                  />
                  <text
                    x={layout.lx}
                    y={layout.textY}
                    textAnchor="middle"
                    className="fill-[var(--pstc-primary)]"
                    style={{
                      fontSize: "1.75px",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {layout.labelText}
                  </text>
                  {meta.sub ? (
                    <text
                      x={layout.lx}
                      y={layout.subY}
                      textAnchor="middle"
                      fill="var(--muted-foreground)"
                      style={{ fontSize: "1.45px", fontWeight: 500 }}
                    >
                      {meta.sub}
                    </text>
                  ) : null}
                </g>
              ) : null}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
