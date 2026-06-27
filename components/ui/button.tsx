import React, { useCallback, useRef } from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  gravity: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  wobble: number;
  wobbleSpeed: number;
  rotation: number;
  rotSpeed: number;
};

const DEFAULT_COLORS = [
  "#f59e0b",
  "#ec4899",
  "#8b5cf6",
  "#06b6d4",
  "#10b981",
  "#ef4444",
];

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function createParticle(cx: number, cy: number): Particle {
  const angle = randomBetween(0, Math.PI * 2);
  const speed = randomBetween(3, 10);

  return {
    x: cx,
    y: cy,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed - randomBetween(1, 4),
    gravity: randomBetween(0.16, 0.32),
    size: randomBetween(4, 10),
    color: DEFAULT_COLORS[Math.floor(Math.random() * DEFAULT_COLORS.length)],
    alpha: 1,
    decay: randomBetween(0.012, 0.024),
    wobble: randomBetween(0, Math.PI * 2),
    wobbleSpeed: randomBetween(0.05, 0.12),
    rotation: randomBetween(0, Math.PI * 2),
    rotSpeed: randomBetween(-0.15, 0.15),
  };
}

function drawParticle(ctx: CanvasRenderingContext2D, p: Particle) {
  ctx.save();
  ctx.globalAlpha = p.alpha;
  ctx.translate(p.x, p.y);
  ctx.rotate(p.rotation);
  ctx.fillStyle = p.color;
  ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
  ctx.restore();
}

function Button({
  className,
  variant = "default",
  size = "default",
  disabled = false,
  onClick,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  const { asChild, children, ...rest } = props as any;
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  const classes = cn(buttonVariants({ variant, size, className }));

  const fireConfetti = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (disabled) return;

      const canvas = canvasRef.current;
      const wrapper = wrapperRef.current;
      const target = event.currentTarget as HTMLElement;
      if (!canvas || !wrapper || !target) return;

      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      particlesRef.current = [];

      canvas.width = wrapper.offsetWidth;
      canvas.height = wrapper.offsetHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const targetRect = target.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();
      const cx = targetRect.left - wrapperRect.left + targetRect.width / 2;
      const cy = targetRect.top - wrapperRect.top + targetRect.height / 2;

      for (let i = 0; i < 90; i += 1) {
        particlesRef.current.push(createParticle(cx, cy));
      }

      target.style.transform = "scale(0.96)";
      window.setTimeout(() => {
        target.style.transform = "";
      }, 140);

      const startTime = performance.now();

      const loop = (now: number) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particlesRef.current = particlesRef.current.filter(
          (p) => p.alpha > 0.01,
        );

        for (const p of particlesRef.current) {
          p.wobble += p.wobbleSpeed;
          p.x += p.vx + Math.sin(p.wobble) * 0.7;
          p.vy += p.gravity;
          p.y += p.vy;
          p.rotation += p.rotSpeed;
          p.alpha -= p.decay;
          drawParticle(ctx, p);
        }

        if (particlesRef.current.length > 0 && now - startTime < 1600) {
          rafRef.current = requestAnimationFrame(loop);
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      };

      rafRef.current = requestAnimationFrame(loop);
    },
    [disabled],
  );

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      fireConfetti(event);
      onClick?.(event as any);
    },
    [fireConfetti, onClick],
  );

  if (asChild && React.isValidElement(children)) {
    const child = React.Children.only(children) as React.ReactElement;
    const mergedClassName = [classes, (child.props as any).className]
      .filter(Boolean)
      .join(" ");

    return (
      <span ref={wrapperRef} className="relative inline-block">
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
        />
        {React.cloneElement(child, {
          className: mergedClassName,
          onClick: handleClick,
          ...rest,
        })}
      </span>
    );
  }

  return (
    <span ref={wrapperRef} className="relative inline-block">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
      />
      <ButtonPrimitive
        data-slot="button"
        className={classes}
        disabled={disabled}
        onClick={handleClick as any}
        {...rest}
      >
        {children}
      </ButtonPrimitive>
    </span>
  );
}

export { Button, buttonVariants };
