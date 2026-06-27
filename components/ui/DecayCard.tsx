"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";

interface DecayCardProps {
  width?: number;
  height?: number;
  image?: string;
  baseFrequency?: number;
  numOctaves?: number;
  seed?: number;
  maxDisplacement?: number;
  movementBound?: number;
  children?: ReactNode;
  className?: string;
}

export default function DecayCard({
  width = 220,
  height = 260,
  image = "https://picsum.photos/400/500?grayscale",
  baseFrequency = 0.015,
  numOctaves = 5,
  seed = 4,
  maxDisplacement = 180,
  movementBound = 24,
  children,
  className = "",
}: DecayCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const displacementMapRef = useRef<SVGFEDisplacementMapElement>(null);

  const cursor = useRef({ x: 0, y: 0 });
  const cachedCursor = useRef({ x: 0, y: 0 });
  const winsize = useRef({ width: 1, height: 1 });

  useEffect(() => {
    winsize.current = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    cursor.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    cachedCursor.current = { ...cursor.current };

    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

    const map = (x: number, a: number, b: number, c: number, d: number) =>
      ((x - a) * (d - c)) / (b - a) + c;

    const distance = (x1: number, x2: number, y1: number, y2: number) =>
      Math.hypot(x1 - x2, y1 - y2);

    const handleResize = () => {
      winsize.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    };

    const handleMouseMove = (event: MouseEvent) => {
      cursor.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const values = {
      x: 0,
      y: 0,
      rotate: 0,
      displacement: 0,
    };

    let rafId = 0;

    const render = () => {
      let targetX = lerp(
        values.x,
        map(cursor.current.x, 0, winsize.current.width, -80, 80),
        0.08
      );

      let targetY = lerp(
        values.y,
        map(cursor.current.y, 0, winsize.current.height, -80, 80),
        0.08
      );

      const targetRotate = lerp(
        values.rotate,
        map(cursor.current.x, 0, winsize.current.width, -5, 5),
        0.08
      );

      if (targetX > movementBound) {
        targetX = movementBound + (targetX - movementBound) * 0.2;
      }

      if (targetX < -movementBound) {
        targetX = -movementBound + (targetX + movementBound) * 0.2;
      }

      if (targetY > movementBound) {
        targetY = movementBound + (targetY - movementBound) * 0.2;
      }

      if (targetY < -movementBound) {
        targetY = -movementBound + (targetY + movementBound) * 0.2;
      }

      values.x = targetX;
      values.y = targetY;
      values.rotate = targetRotate;

      if (cardRef.current) {
        gsap.set(cardRef.current, {
          x: values.x,
          y: values.y,
          rotateZ: values.rotate,
        });
      }

      const travelled = distance(
        cachedCursor.current.x,
        cursor.current.x,
        cachedCursor.current.y,
        cursor.current.y
      );

      values.displacement = lerp(
        values.displacement,
        map(travelled, 0, 200, 0, maxDisplacement),
        0.06
      );

      if (displacementMapRef.current) {
        gsap.set(displacementMapRef.current, {
          attr: { scale: values.displacement },
        });
      }

      cachedCursor.current = { ...cursor.current };
      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [maxDisplacement, movementBound]);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-[var(--radius-3xl)] border border-[var(--border)] bg-[var(--card)] pstc-soft-shadow ${className}`}
      style={{ width, height }}
    >
      <svg
        viewBox="-60 -75 720 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <filter id={`imgFilter-${seed}`}>
          <feTurbulence
            type="turbulence"
            baseFrequency={baseFrequency}
            numOctaves={numOctaves}
            seed={seed}
            stitchTiles="stitch"
            result="turbulence"
          />

          <feDisplacementMap
            ref={displacementMapRef}
            in="SourceGraphic"
            in2="turbulence"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="B"
          />
        </filter>

        <image
          href={image}
          x="0"
          y="0"
          width="600"
          height="750"
          filter={`url(#imgFilter-${seed})`}
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        {children}
      </div>
    </div>
  );
}