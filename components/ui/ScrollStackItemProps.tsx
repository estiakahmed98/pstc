//component/ui/ScrollStackItemProps.tsx
import React, {
  useCallback,
  useLayoutEffect,
  useRef,
} from "react";
import type { ReactNode } from "react";
import Lenis from "lenis";
import { cn } from "@/lib/utils";
import BorderGlow, { type BorderGlowProps } from "@/components/ui/BorderGlow";

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
  useBorderGlow?: boolean;
  borderGlowProps?: Omit<BorderGlowProps, "children">;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
  useBorderGlow = false,
  borderGlowProps,
}) => (
  <div
    className={cn(
      "scroll-stack-card relative my-5 h-[220px] w-full origin-top box-border will-change-transform sm:h-[230px] xl:h-[240px] 2xl:my-4 2xl:h-[260px]",
      itemClassName,
    )}
  >
    {useBorderGlow ? (
      <BorderGlow
        borderRadius={borderGlowProps?.borderRadius ?? 24}
        backgroundColor="transparent"
        glowColor="40 80 80"
        className="h-full w-full"
        {...borderGlowProps}
      >
        <div
          className="relative h-full w-full"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {children}
        </div>
      </BorderGlow>
    ) : (
      <div
        className={cn(
          "h-full rounded-[24px] p-5 shadow-[0_0_20px_rgba(0,0,0,0.08)] sm:p-6 xl:p-7 2xl:p-8",
        )}
        style={{
          backfaceVisibility: "hidden",
        }}
      >
        {children}
      </div>
    )}
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  itemDistance = 48,
  itemScale = 0.03,
  itemStackDistance = 14,
  stackPosition = "12%",
  scaleEndPosition = "7%",
  baseScale = 0.92,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const scrollRafRef = useRef<number | null>(null);
  const lenisRafRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const cardOffsetsRef = useRef<number[]>([]);
  const endOffsetRef = useRef(0);
  const lastTransformsRef = useRef(new Map<number, any>());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback(
    (scrollTop: number, start: number, end: number) => {
      if (scrollTop < start) return 0;
      if (scrollTop > end) return 1;
      return (scrollTop - start) / (end - start);
    },
    [],
  );

  const parsePercentage = useCallback(
    (value: string | number, containerHeight: number) => {
      if (typeof value === "string" && value.includes("%")) {
        return (parseFloat(value) / 100) * containerHeight;
      }
      return parseFloat(value as string);
    },
    [],
  );

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
      };
    }

    const scroller = scrollerRef.current;
    return {
      scrollTop: scroller ? scroller.scrollTop : 0,
      containerHeight: scroller ? scroller.clientHeight : 0,
    };
  }, [useWindowScroll]);

  const measureLayout = useCallback(() => {
    const cards = cardsRef.current;

    cardOffsetsRef.current = cards.map((card) => {
      if (useWindowScroll) {
        const rect = card.getBoundingClientRect();
        return rect.top + window.scrollY;
      }

      return card.offsetTop;
    });

    const endElement = useWindowScroll
      ? (document.querySelector(".scroll-stack-end") as HTMLElement | null)
      : (scrollerRef.current?.querySelector(
          ".scroll-stack-end",
        ) as HTMLElement | null);

    if (endElement) {
      if (useWindowScroll) {
        const rect = endElement.getBoundingClientRect();
        endOffsetRef.current = rect.top + window.scrollY;
      } else {
        endOffsetRef.current = endElement.offsetTop;
      }
    }
  }, [useWindowScroll]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(
      scaleEndPosition,
      containerHeight,
    );
    const endElementTop = endOffsetRef.current;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = cardOffsetsRef.current[i] ?? 0;
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(
        scrollTop,
        triggerStart,
        triggerEnd,
      );
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = cardOffsetsRef.current[j] ?? 0;
          const jTriggerStart =
            jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }

        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY =
          scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter =
          newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : "";

        card.style.transform = transform;
        card.style.filter = filter;

        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
  ]); 

  const handleScroll = useCallback(() => {
    if (scrollRafRef.current !== null) {
      return;
    }

    scrollRafRef.current = window.requestAnimationFrame(() => {
      updateCardTransforms();
      scrollRafRef.current = null;
    });
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", measureLayout);
      window.requestAnimationFrame(() => {
        measureLayout();
        updateCardTransforms();
      });
      return;
    }

    const scroller = scrollerRef.current;
    if (!scroller) return;

    const lenis = new Lenis({
      wrapper: scroller,
      content: scroller.querySelector(".scroll-stack-inner") as HTMLElement,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      gestureOrientation: "vertical",
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075,
    });

    lenis.on("scroll", handleScroll);

    const raf = (time: number) => {
      lenis.raf(time);
      lenisRafRef.current = window.requestAnimationFrame(raf);
    };
    lenisRafRef.current = window.requestAnimationFrame(raf);

    lenisRef.current = lenis;
    return lenis;
  }, [handleScroll, measureLayout, updateCardTransforms, useWindowScroll]);

  useLayoutEffect(() => {
    if (!useWindowScroll && !scrollerRef.current) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-card")
        : (scrollerRef.current?.querySelectorAll(".scroll-stack-card") ?? []),
    ) as HTMLElement[];
    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = "transform";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      card.style.transform = "translate3d(0, 0, 0)";
      card.style.webkitTransform = "translateZ(0)";
      card.style.filter = "none";
    });

    measureLayout();
    setupLenis();

    updateCardTransforms();

    return () => {
      if (scrollRafRef.current) {
        cancelAnimationFrame(scrollRafRef.current);
      }
      if (lenisRafRef.current) {
        cancelAnimationFrame(lenisRafRef.current);
      }
      if (useWindowScroll) {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", measureLayout);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      cardOffsetsRef.current = [];
      endOffsetRef.current = 0;
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    handleScroll,
    measureLayout,
    setupLenis,
    updateCardTransforms,
  ]);

  return (
    <div
      className={cn(
        "relative w-full overflow-x-visible",
        useWindowScroll ? "overflow-visible" : "h-full overflow-y-auto",
        className,
      )}
      ref={scrollerRef}
      style={{
        ...(useWindowScroll
          ? {
              WebkitTransform: "translateZ(0)",
              transform: "translateZ(0)",
            }
          : {
              overscrollBehavior: "contain",
              WebkitOverflowScrolling: "touch",
              scrollBehavior: "smooth",
              WebkitTransform: "translateZ(0)",
              transform: "translateZ(0)",
              willChange: "scroll-position",
            }),
      }}
    >
      <div
        className={cn(
          "scroll-stack-inner min-h-screen",
          useWindowScroll
            ? "pt-[8vh] px-0 pb-[20rem] 2xl:pt-[7vh] 2xl:pb-[18rem]"
            : "pt-[12vh] px-16 pb-[28rem] 2xl:px-14 2xl:pt-[10vh] 2xl:pb-[24rem]",
        )}
      >
        {children}
        {/* Spacer so the last pin can release cleanly */}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;
