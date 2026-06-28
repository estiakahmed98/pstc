"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";

type MovingLinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  containerClassName?: string;
  onClick?: () => void;
  duration?: number;
  borderRadius?: string;
};

export function MovingLinkButton({
  href,
  children,
  variant = "primary",
  className,
  containerClassName,
  onClick,
  duration = 3600,
  borderRadius = "999px",
}: MovingLinkButtonProps) {
  return (
    <MovingBorderButton
      as={Link}
      href={href}
      onClick={onClick}
      duration={duration}
      borderRadius={borderRadius}
      containerClassName={cn(
        "h-13 w-auto min-w-[168px] text-sm",
        containerClassName,
      )}
      borderClassName="bg-[radial-gradient(#0991CB_36%,#D73F32_52%,transparent_70%)]"
      className={cn(
        "gap-2 px-6 text-sm font-black transition",
        variant === "primary"
          ? "border border-primary bg-primary text-primary-foreground hover:bg-[var(--pstc-primary-dark)]"
          : "border border-border bg-background text-foreground hover:border-secondary hover:text-secondary",
        className,
      )}
    >
      {children}
    </MovingBorderButton>
  );
}

