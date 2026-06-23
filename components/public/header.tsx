"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/who-we-are", label: t("nav.about") },
    { href: "/what-we-do", label: t("nav.programs") },
    { href: "/impact", label: t("nav.impact") },
    { href: "/publications", label: t("nav.publications") },
    { href: "/events-media", label: t("nav.events") },
    { href: "/get-involved", label: t("nav.jobs") },
    { href: "/give-today", label: t("nav.donate") },
    { href: "/ucon", label: t("nav.ucon") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <img src="/pstc.jpeg" alt="PSTC Logo" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 flex-wrap">
            {navLinks.slice(0, 5).map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant="ghost" size="sm" className="text-sm">
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-2 ml-auto">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button
              variant="default"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => (window.location.href = "/give-today")}
            >
              {t("nav.donate")}
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 border-t border-border pt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
