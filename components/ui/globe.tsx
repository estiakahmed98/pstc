"use client";

import { useEffect, useRef } from "react";
import createGlobe, { type COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

export type GlobeRotation = {
  phi: number;
  theta: number;
};

export type GlobeMarker = {
  label: string;
  sub?: string;
  lat: number;
  lng: number;
  highlight?: boolean;
};

export const PSTC_GLOBE_MARKERS: readonly GlobeMarker[] = [
  { label: "Dhaka", sub: "PSTC HQ", lat: 23.8103, lng: 90.4125, highlight: true },
  { label: "Canada", lat: 56.1304, lng: -106.3468 },
  { label: "European Union", lat: 50.8503, lng: 4.3517 },
  { label: "USA", lat: 38.9072, lng: -77.0369 },
  { label: "United Kingdom", lat: 51.5074, lng: -0.1278 },
  { label: "Asia-Pacific", lat: 1.3521, lng: 103.8198 },
  { label: "Africa", lat: -1.2921, lng: 36.8219 },
] as const;

export const PSTC_GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.22,
  dark: 0,
  diffuse: 0.45,
  mapSamples: 18000,
  mapBrightness: 1.35,
  baseColor: [0.92, 0.96, 0.99],
  markerColor: [11 / 255, 87 / 255, 158 / 255],
  glowColor: [148 / 255, 202 / 255, 81 / 255],
  markers: PSTC_GLOBE_MARKERS.map(({ lat, lng, highlight }) => ({
    location: [lat, lng],
    size: highlight ? 0.16 : 0.05,
  })),
};

export const PSTC_GLOBE_CONFIG_RED: COBEOptions = {
  ...PSTC_GLOBE_CONFIG,
  baseColor: [0.98, 0.94, 0.94],
  markerColor: [223 / 255, 31 / 255, 45 / 255],
  glowColor: [255 / 255, 75 / 255, 87 / 255],
};

function latLngToUnitXYZ(lat: number, lng: number): [number, number, number] {
  const latRad = (lat * Math.PI) / 180;
  const lngRad = (lng * Math.PI) / 180 - Math.PI;
  const cosLat = Math.cos(latRad);

  return [-cosLat * Math.cos(lngRad), Math.sin(latRad), cosLat * Math.sin(lngRad)];
}

function rotateUnitXYZ(
  x: number,
  y: number,
  z: number,
  theta: number,
  phi: number,
): [number, number, number] {
  const cosTheta = Math.cos(theta);
  const sinTheta = Math.sin(theta);
  const cosPhi = Math.cos(phi);
  const sinPhi = Math.sin(phi);

  const rx = cosPhi * x + sinPhi * sinTheta * y - sinPhi * cosTheta * z;
  const ry = cosTheta * y + sinTheta * z;
  const rz = sinPhi * x - cosPhi * sinTheta * y + cosPhi * cosTheta * z;

  return [rx, ry, rz];
}

export function projectGlobeMarker(
  lat: number,
  lng: number,
  { phi, theta }: GlobeRotation,
  scale = 0.39,
): { x: number; y: number; visible: boolean } {
  const [x, y, z] = latLngToUnitXYZ(lat, lng);
  const [rx, ry, rz] = rotateUnitXYZ(x, y, z, theta, phi);

  return {
    x: 50 + rx * scale * 100,
    y: 50 - ry * scale * 100,
    visible: rz > 0.08,
  };
}

export function Globe({
  className,
  config = PSTC_GLOBE_CONFIG,
  onRotationChange,
}: {
  className?: string;
  config?: COBEOptions;
  onRotationChange?: (rotation: GlobeRotation) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const pointerInteracting = useRef<number | null>(null);
  const onRotationChangeRef = useRef(onRotationChange);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    onRotationChangeRef.current = onRotationChange;
  }, [onRotationChange]);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const theta = config.theta ?? 0.22;

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phiRef.current += 0.0035;
        state.phi = phiRef.current + rs.get();
        state.width = widthRef.current * 2;
        state.height = widthRef.current * 2;
        onRotationChangeRef.current?.({
          phi: state.phi,
          theta,
        });
      },
    });

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1";
    }, 0);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div className={cn("relative aspect-square w-full", className)}>
      <canvas
        className="absolute inset-0 size-full opacity-0 transition-opacity duration-700 contain-[layout_paint_size]"
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
