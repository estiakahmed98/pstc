"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";


interface ElectricBorderProps {
  children?: ReactNode;
  color?: string;
  speed?: number;
  chaos?: number;
  borderRadius?: number;
  className?: string;
  style?: CSSProperties;
}

export default function ElectricBorder({
  children,
  color = "#0991CB",
  speed = 1,
  chaos = 0.08,
  borderRadius = 24,
  className,
  style,
}: ElectricBorderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const lastFrameTimeRef = useRef(0);

  const random = useCallback((x: number) => {
    return (Math.sin(x * 12.9898) * 43758.5453) % 1;
  }, []);

  const noise2D = useCallback(
    (x: number, y: number) => {
      const i = Math.floor(x);
      const j = Math.floor(y);
      const fx = x - i;
      const fy = y - j;

      const a = random(i + j * 57);
      const b = random(i + 1 + j * 57);
      const c = random(i + (j + 1) * 57);
      const d = random(i + 1 + (j + 1) * 57);

      const ux = fx * fx * (3 - 2 * fx);
      const uy = fy * fy * (3 - 2 * fy);

      return (
        a * (1 - ux) * (1 - uy) +
        b * ux * (1 - uy) +
        c * (1 - ux) * uy +
        d * ux * uy
      );
    },
    [random]
  );

  const octavedNoise = useCallback(
    (x: number, time: number, seed: number) => {
      let y = 0;
      let amplitude = chaos;
      let frequency = 10;

      for (let i = 0; i < 8; i++) {
        y += amplitude * noise2D(frequency * x + seed * 100, time * frequency * 0.3);
        frequency *= 1.6;
        amplitude *= 0.7;
      }

      return y;
    },
    [chaos, noise2D]
  );

  const getPoint = useCallback(
    (t: number, left: number, top: number, width: number, height: number, radius: number) => {
      const perimeter = 2 * (width + height - 4 * radius) + 2 * Math.PI * radius;
      const distance = t * perimeter;

      const straightW = width - 2 * radius;
      const straightH = height - 2 * radius;
      const arc = (Math.PI * radius) / 2;

      let d = distance;

      if (d <= straightW) return { x: left + radius + d, y: top };
      d -= straightW;

      if (d <= arc) {
        const a = -Math.PI / 2 + (d / arc) * (Math.PI / 2);
        return {
          x: left + width - radius + radius * Math.cos(a),
          y: top + radius + radius * Math.sin(a),
        };
      }
      d -= arc;

      if (d <= straightH) return { x: left + width, y: top + radius + d };
      d -= straightH;

      if (d <= arc) {
        const a = (d / arc) * (Math.PI / 2);
        return {
          x: left + width - radius + radius * Math.cos(a),
          y: top + height - radius + radius * Math.sin(a),
        };
      }
      d -= arc;

      if (d <= straightW) return { x: left + width - radius - d, y: top + height };
      d -= straightW;

      if (d <= arc) {
        const a = Math.PI / 2 + (d / arc) * (Math.PI / 2);
        return {
          x: left + radius + radius * Math.cos(a),
          y: top + height - radius + radius * Math.sin(a),
        };
      }
      d -= arc;

      if (d <= straightH) return { x: left, y: top + height - radius - d };
      d -= straightH;

      const a = Math.PI + (d / arc) * (Math.PI / 2);
      return {
        x: left + radius + radius * Math.cos(a),
        y: top + radius + radius * Math.sin(a),
      };
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const borderOffset = 50;
    const displacement = 45;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = rect.width + borderOffset * 2;
      const height = rect.height + borderOffset * 2;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      return { width, height };
    };

    let { width, height } = updateSize();

    const draw = (currentTime: number) => {
      const deltaTime = (currentTime - lastFrameTimeRef.current) / 1000;
      timeRef.current += deltaTime * speed;
      lastFrameTimeRef.current = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.4;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const left = borderOffset;
      const top = borderOffset;
      const w = width - borderOffset * 2;
      const h = height - borderOffset * 2;
      const radius = Math.min(borderRadius, Math.min(w, h) / 2);
      const samples = Math.floor((w + h) * 1.8);

      ctx.beginPath();

      for (let i = 0; i <= samples; i++) {
        const p = i / samples;
        const point = getPoint(p, left, top, w, h, radius);

        const xNoise = octavedNoise(p * 8, timeRef.current, 0);
        const yNoise = octavedNoise(p * 8, timeRef.current, 1);

        const x = point.x + xNoise * displacement;
        const y = point.y + yNoise * displacement;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.closePath();
      ctx.stroke();

      animationRef.current = requestAnimationFrame(draw);
    };

    const resizeObserver = new ResizeObserver(() => {
      const size = updateSize();
      width = size.width;
      height = size.height;
    });

    resizeObserver.observe(container);
    animationRef.current = requestAnimationFrame(draw);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      resizeObserver.disconnect();
    };
  }, [borderRadius, color, getPoint, octavedNoise, speed]);

  return (
    <div
      ref={containerRef}
      className={`electric-border ${className ?? ""}`}
      style={
        {
          "--electric-border-color": color,
          borderRadius,
          ...style,
        } as CSSProperties
      }
    >
      <div className="eb-canvas-container">
        <canvas ref={canvasRef} className="eb-canvas" />
      </div>

      <div className="eb-layers">
        <div className="eb-glow-1" />
        <div className="eb-glow-2" />
        <div className="eb-background-glow" />
      </div>

      <div className="eb-content">{children}</div>
    </div>
  );
}