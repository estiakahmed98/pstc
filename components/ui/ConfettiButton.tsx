/**
 * ConfettiButton — TypeScript + Tailwind CSS
 *
 * Requirements:
 *   - React 18+
 *   - Tailwind CSS v3+ (with `darkMode: 'media'` or `'class'`)
 *
 * No Tailwind? Import the companion CSS file instead:
 *   import "./ConfettiButton.css"
 *   Then replace Tailwind classNames with BEM classes (see ConfettiButton.css)
 */
import { useRef, useCallback, ButtonHTMLAttributes } from "react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Variant =
  | "primary"
  | "success"
  | "danger"
  | "purple"
  | "secondary"
  | "ghost";
type Size = "sm" | "md" | "lg";
type Spread = "burst" | "top" | "sides";
type Shape = "rect" | "circle" | "triangle";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  gravity: number;
  size: number;
  color: string;
  shape: Shape;
  rotation: number;
  rotSpeed: number;
  alpha: number;
  decay: number;
  wobble: number;
  wobbleSpeed: number;
}

export interface ConfettiButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
> {
  /** Visual style of the button */
  variant?: Variant;
  /** Size of the button */
  size?: Size;
  /** Number of confetti particles */
  particleCount?: number;
  /** Custom hex color array for particles */
  colors?: string[];
  /** Direction particles spread */
  spread?: Spread;
  /** Animation duration in ms */
  duration?: number;
  /** Fired after confetti launches */
  onConfettiClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Extra classes applied to the <button> */
  className?: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const DEFAULT_COLORS: string[] = [
  "#f97316",
  "#ec4899",
  "#8b5cf6",
  "#06b6d4",
  "#10b981",
  "#eab308",
  "#3b82f6",
  "#ef4444",
];

const SHAPES: Shape[] = ["rect", "circle", "triangle"];

// Tailwind class maps — variant → button classes
const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-orange-500 text-white hover:bg-orange-600 border-transparent",
  success: "bg-emerald-500 text-white hover:bg-emerald-600 border-transparent",
  danger: "bg-red-500 text-white hover:bg-red-600 border-transparent",
  purple: "bg-violet-500 text-white hover:bg-violet-600 border-transparent",
  secondary:
    "bg-white text-gray-900 hover:bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:hover:bg-gray-700",
  ghost:
    "bg-transparent text-gray-900 hover:bg-gray-100 border border-gray-300 dark:text-gray-100 dark:hover:bg-gray-800 dark:border-gray-600",
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function randomBetween(a: number, b: number): number {
  return a + Math.random() * (b - a);
}

function createParticle(
  cx: number,
  cy: number,
  spread: Spread,
  palette: string[],
): Particle {
  let vx: number, vy: number;

  if (spread === "top") {
    const angle = randomBetween(-Math.PI * 0.85, -Math.PI * 0.15);
    const speed = randomBetween(4, 12);
    vx = Math.cos(angle) * speed;
    vy = Math.sin(angle) * speed;
  } else if (spread === "sides") {
    const side = Math.random() < 0.5 ? -1 : 1;
    vx = side * randomBetween(4, 10);
    vy = randomBetween(-8, -2);
  } else {
    // burst (default)
    const angle = randomBetween(0, Math.PI * 2);
    const speed = randomBetween(3, 11);
    vx = Math.cos(angle) * speed;
    vy = Math.sin(angle) * speed - randomBetween(1, 5);
  }

  return {
    x: cx,
    y: cy,
    vx,
    vy,
    gravity: randomBetween(0.18, 0.4),
    size: randomBetween(5, 13),
    color: palette[Math.floor(Math.random() * palette.length)],
    shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    rotation: randomBetween(0, Math.PI * 2),
    rotSpeed: randomBetween(-0.15, 0.15),
    alpha: 1,
    decay: randomBetween(0.012, 0.024),
    wobble: randomBetween(0, Math.PI * 2),
    wobbleSpeed: randomBetween(0.05, 0.12),
  };
}

function drawParticle(ctx: CanvasRenderingContext2D, p: Particle): void {
  ctx.save();
  ctx.globalAlpha = p.alpha;
  ctx.translate(p.x, p.y);
  ctx.rotate(p.rotation);
  ctx.fillStyle = p.color;
  ctx.beginPath();

  if (p.shape === "rect") {
    ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
  } else if (p.shape === "circle") {
    ctx.arc(0, 0, p.size / 2.5, 0, Math.PI * 2);
    ctx.fill();
  } else {
    // triangle
    ctx.moveTo(0, -p.size / 2);
    ctx.lineTo(p.size / 2, p.size / 2);
    ctx.lineTo(-p.size / 2, p.size / 2);
    ctx.closePath();
    ctx.fill();
  }

  ctx.restore();
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function ConfettiButton({
  children,
  variant = "primary",
  size = "md",
  particleCount = 120,
  colors,
  spread = "burst",
  duration = 2000,
  disabled = false,
  onConfettiClick,
  className = "",
  ...rest
}: ConfettiButtonProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const btnRef = useRef<HTMLButtonElement>(null);

  const fireConfetti = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;

      const canvas = canvasRef.current;
      const wrapper = wrapperRef.current;
      const btn = btnRef.current;
      if (!canvas || !wrapper || !btn) return;

      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      particlesRef.current = [];

      canvas.width = wrapper.offsetWidth;
      canvas.height = wrapper.offsetHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const br = btn.getBoundingClientRect();
      const wr = wrapper.getBoundingClientRect();
      const cx = br.left - wr.left + br.width / 2;
      const cy = br.top - wr.top + br.height / 2;

      const palette = colors && colors.length > 0 ? colors : DEFAULT_COLORS;

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(createParticle(cx, cy, spread, palette));
      }

      // Button pop micro-interaction (inline — avoids extra keyframe CSS)
      btn.style.transform = "scale(1.1)";
      setTimeout(() => {
        if (btn) btn.style.transform = "scale(1)";
      }, 140);

      const startTime = performance.now();

      function loop(now: number): void {
        ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
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
          drawParticle(ctx!, p);
        }

        if (
          particlesRef.current.length > 0 &&
          now - startTime < duration + 500
        ) {
          rafRef.current = requestAnimationFrame(loop);
        } else {
          ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
        }
      }

      rafRef.current = requestAnimationFrame(loop);
      onConfettiClick?.(e);
    },
    [disabled, particleCount, colors, spread, duration, onConfettiClick],
  );

  const variantCls = VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.primary;
  const sizeCls = SIZE_CLASSES[size] ?? SIZE_CLASSES.md;

  return (
    <span ref={wrapperRef} className="relative inline-block">
      {/* Particle canvas — sits behind the button, clips to wrapper */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
      />

      <button
        ref={btnRef}
        disabled={disabled}
        onClick={fireConfetti}
        className={[
          // Base
          "relative z-10 inline-flex items-center gap-1.5 rounded-full border",
          "font-medium transition-[transform,opacity] duration-150 ease-in-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "focus-visible:ring-orange-500",
          // Hover scale (only when not disabled)
          "hover:scale-[1.04] active:scale-[0.96]",
          // Disabled state
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
          // Variant + size
          variantCls,
          sizeCls,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...rest}
      >
        {children}
      </button>
    </span>
  );
}
