import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export const BG = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };

  return (
    <div
      className={cn(
        "group relative rounded-[1.6rem] p-[1.5px]",
        containerClassName,
      )}
    >
      {/* Outer soft glow only */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "300% 300%" : undefined,
        }}
        className={cn(
          "pointer-events-none absolute -inset-2 rounded-[1.8rem] opacity-35 blur-xl transition duration-500 group-hover:opacity-70",
          "bg-[linear-gradient(135deg,var(--pstc-primary),var(--pstc-secondary),var(--pstc-primary))]",
        )}
      />

      {/* Thin gradient border */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "300% 300%" : undefined,
        }}
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[1.6rem]",
          "bg-[linear-gradient(135deg,var(--pstc-primary),var(--pstc-secondary),var(--pstc-primary))]",
        )}
      />

      {/* Main content/card */}
      <div
        className={cn(
          "relative z-10 overflow-hidden rounded-[1.5rem] bg-card",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};
