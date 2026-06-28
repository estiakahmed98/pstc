"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface RevealItem {
  id: string;
  title: string;
  image: string;
  href: string;
  category?: string;
}

interface ImageReveal2Props {
  items: RevealItem[];
  className?: string;
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const updateMatches = () => {
      setMatches(mediaQuery.matches);
    };

    updateMatches();
    mediaQuery.addEventListener("change", updateMatches);

    return () => {
      mediaQuery.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return matches;
}

export default function ImageReveal2({ items, className }: ImageReveal2Props) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [activeItem, setActiveItem] = useState<RevealItem | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0.5);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const requestRef = useRef<number | null>(null);
  const prevCursorPosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;

    const dx = clientX - prevCursorPosition.current.x;
    const dy = clientY - prevCursorPosition.current.y;

    const easeAmount = 0.22;
    const newX = prevCursorPosition.current.x + dx * easeAmount;
    const newY = prevCursorPosition.current.y + dy * easeAmount;

    setCursorPosition({ x: newX, y: newY });
    prevCursorPosition.current = { x: newX, y: newY };
  }, []);

  useEffect(() => {
    const updateCursorPosition = (event: MouseEvent) => {
      if (requestRef.current) return;

      requestRef.current = requestAnimationFrame(() => {
        handleMouseMove(event);
        requestRef.current = null;
      });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);

      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [handleMouseMove]);

  const handleItemHover = useCallback(
    (item: RevealItem) => {
      if (activeItem?.id !== item.id) {
        setActiveItem(item);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setOpacity(1);
          setScale(1);
        }, 50);
      } else {
        setOpacity(1);
        setScale(1);
      }
    },
    [activeItem],
  );

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
    setScale(0.5);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setActiveItem(null);
    }, 250);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={cn("relative w-full", className)}
      onMouseLeave={handleMouseLeave}
    >
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          onMouseEnter={() => handleItemHover(item)}
          className="group relative block cursor-pointer overflow-hidden border-b border-border px-2 py-5 transition hover:border-primary md:py-0"
        >
          {!isDesktop ? (
            <img
              src={item.image}
              alt={item.title}
              className="mb-4 h-52 w-full rounded-2xl object-cover"
            />
          ) : null}

          <div className="relative z-10 flex items-center justify-between gap-5 md:min-h-[116px]">
            <div>
              {item.category ? (
                <p
                  className={cn(
                    "mb-2 text-xs font-black uppercase tracking-[0.22em] text-primary transition",
                    activeItem?.id === item.id &&
                      "text-white mix-blend-difference",
                  )}
                >
                  {item.category}
                </p>
              ) : null}

              <h3
                className={cn(
                  "text-2xl font-black uppercase leading-[1.02] tracking-tight text-foreground transition md:text-5xl",
                  activeItem?.id === item.id &&
                    "text-white mix-blend-difference",
                )}
              >
                {item.title}
              </h3>
            </div>

            <span
              className={cn(
                "hidden size-13 place-items-center rounded-full border border-border bg-card text-foreground transition duration-300 md:grid",
                activeItem?.id === item.id &&
                  "bg-white text-black mix-blend-difference",
              )}
            >
              <ArrowUpRight className="size-7" />
            </span>
          </div>

          <div
            className={cn(
              "absolute bottom-0 left-0 z-0 h-0 w-full bg-primary transition-all duration-300 ease-out",
              activeItem?.id === item.id && "h-full",
            )}
          />
        </Link>
      ))}

      {isDesktop && activeItem ? (
        <img
          src={activeItem.image}
          alt={activeItem.title}
          className="pointer-events-none fixed z-[60] h-[390px] w-[290px] rotate-6 rounded-2xl border border-white/20 bg-card object-cover shadow-[0_30px_90px_rgba(15,23,42,0.35)]"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: `translate(-50%, -50%) scale(${scale})`,
            opacity,
          }}
        />
      ) : null}
    </div>
  );
}
