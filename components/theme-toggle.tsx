"use client";

import { useEffect, useState } from "react";
import { Palette } from "lucide-react";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "pstc-theme";
const THEMES = ["theme-pstc-blue-green", "theme-pstc-red-grey"] as const;
const DEFAULT_THEME = THEMES[0];

type PstcTheme = (typeof THEMES)[number];

function isPstcTheme(value: string | null): value is PstcTheme {
  return THEMES.includes(value as PstcTheme);
}

function readTheme(): PstcTheme {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  try {
    const storedTheme = localStorage.getItem(STORAGE_KEY);

    if (isPstcTheme(storedTheme)) {
      return storedTheme;
    }

    const currentTheme = THEMES.find((theme) =>
      document.documentElement.classList.contains(theme),
    );

    return currentTheme ?? DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

function applyTheme(theme: PstcTheme) {
  if (typeof document === "undefined") {
    return;
  }

  try {
    const root = document.documentElement;

    root.classList.remove(...THEMES);
    root.classList.add(theme);
    localStorage.setItem(STORAGE_KEY, theme);
    window.dispatchEvent(
      new CustomEvent("pstc-theme-change", { detail: theme }),
    );
  } catch {
    // Ignore storage or DOM access failures.
  }
}

export function ThemeToggle({
  className,
  containerClassName,
}: {
  className?: string;
  containerClassName?: string;
} = {}) {
  const [theme, setTheme] = useState<PstcTheme>(DEFAULT_THEME);

  useEffect(() => {
    const nextTheme = readTheme();
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }, []);

  const isBlueGreen = theme === "theme-pstc-blue-green";

  const nextTheme: PstcTheme = isBlueGreen
    ? "theme-pstc-red-grey"
    : "theme-pstc-blue-green";

  const handleToggle = () => {
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <MovingBorderButton
      type="button"
      onClick={handleToggle}
      duration={3600}
      borderRadius="999px"
      aria-label={`Switch PSTC theme to ${
        isBlueGreen ? "red-grey" : "blue-green"
      }`}
      title={`Switch to ${isBlueGreen ? "red-grey" : "blue-green"} theme`}
      containerClassName={cn("h-10 w-10 text-sm sm:h-12 sm:w-12", containerClassName)}
      borderClassName="bg-[radial-gradient(var(--pstc-primary)_36%,var(--pstc-secondary)_52%,transparent_70%)]"
      className={cn(
        "border border-transparent bg-primary p-0 text-primary-foreground shadow-sm transition",
        "hover:bg-[var(--pstc-primary-dark)] hover:text-primary-foreground",
        className,
      )}
    >
      <Palette className="size-4 shrink-0" />
    </MovingBorderButton>
  );
}
