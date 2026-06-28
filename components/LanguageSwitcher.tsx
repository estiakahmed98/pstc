"use client";

import { useEffect, useState } from "react";
import { Languages } from "lucide-react";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";

const LANGUAGE_KEY = "pstc-language";
const LANGUAGES = ["en", "bn"] as const;

type PstcLanguage = (typeof LANGUAGES)[number];

function isPstcLanguage(value: string | null): value is PstcLanguage {
  return LANGUAGES.includes(value as PstcLanguage);
}

function readLanguage(): PstcLanguage {
  if (typeof window === "undefined") return "en";

  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    if (isPstcLanguage(savedLanguage)) return savedLanguage;

    const htmlLanguage = document.documentElement.lang;
    if (isPstcLanguage(htmlLanguage)) return htmlLanguage;

    return "en";
  } catch {
    return "en";
  }
}

function applyLanguage(language: PstcLanguage) {
  if (typeof document === "undefined") return;

  try {
    document.documentElement.lang = language;
    localStorage.setItem(LANGUAGE_KEY, language);
  } catch {
    // Ignore storage or DOM access failures.
  }
}

export function LanguageButton({
  className,
  containerClassName,
}: {
  className?: string;
  containerClassName?: string;
} = {}) {
  const [language, setLanguage] = useState<PstcLanguage>("en");

  useEffect(() => {
    const currentLanguage = readLanguage();
    setLanguage(currentLanguage);
    applyLanguage(currentLanguage);
  }, []);

  const nextLanguage: PstcLanguage = language === "en" ? "bn" : "en";
  const label = language === "en" ? "EN" : "BN";

  const handleToggle = () => {
    setLanguage(nextLanguage);
    applyLanguage(nextLanguage);
  };

  return (
    <MovingBorderButton
      type="button"
      onClick={handleToggle}
      duration={3600}
      borderRadius="999px"
      aria-label={`Switch language to ${nextLanguage.toUpperCase()}`}
      title={`Switch to ${nextLanguage.toUpperCase()}`}
      containerClassName={cn(
        "hidden h-12 w-20 text-sm sm:block",
        containerClassName,
      )}
      borderClassName="bg-[radial-gradient(var(--pstc-primary)_36%,var(--pstc-secondary)_52%,transparent_70%)]"
      className={cn(
        "border border-transparent bg-primary px-3 text-xs font-black text-primary-foreground shadow-sm transition",
        "hover:bg-[var(--pstc-primary-dark)] hover:text-primary-foreground",
        className,
      )}
    >
      <span className="flex items-center justify-center gap-1.5 whitespace-nowrap">
        <Languages className="size-4 shrink-0" />
        {label}
      </span>
    </MovingBorderButton>
  );
}
