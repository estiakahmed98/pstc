"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { usePstcLogo } from "@/lib/use-pstc-logo";
import { cn } from "@/lib/utils";

type FooterNode = {
  label: string;
  href: string;
  children?: FooterNode[];
};

const footerMenus: FooterNode[] = [
  {
    label: "Who We Are",
    href: "/who-we-are",
    children: [
      { label: "Governance", href: "/who-we-are/governance" },
      { label: "Leadership", href: "/who-we-are/leadership" },
      {
        label: "Mission, Vision & Values",
        href: "/who-we-are/mission-vision-values",
      },
      { label: "Policies", href: "/who-we-are/policies" },
      { label: "Organogram", href: "/who-we-are/organogram" },
      { label: "Where We Work", href: "/who-we-are/where-we-work" },
      { label: "About Us", href: "/who-we-are/about-us" },
      { label: "Strategic Plan", href: "/who-we-are/strategic-plan" },
    ],
  },
  {
    label: "What We Do",
    href: "/what-we-do",
    children: [
      { label: "Our Thematic Areas", href: "/what-we-do/thematic-areas" },
      { label: "Our Projects", href: "/what-we-do/projects" },
      { label: "Our Initiatives", href: "/what-we-do/initiatives" },
      { label: "Our Priorities", href: "/what-we-do/priorities" },
      { label: "Youth Engagement", href: "/what-we-do/youth-engagement" },
    ],
  },
  {
    label: "Our Impact",
    href: "/our-impact",
    children: [
      { label: "Publications", href: "/our-impact/publications" },
      {
        label: "Projanmo Kotha",
        href: "/our-impact/publications/projanmo-kotha",
      },
      { label: "Annual Report", href: "/our-impact/reports/annual-report" },
      { label: "Audit Report", href: "/our-impact/reports/audit-report" },
      { label: "Research", href: "/our-impact/reports/research" },
      { label: "Events & Media", href: "/our-impact/events-media" },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Jobs", href: "/get-involved/jobs" },
      {
        label: "Training & Certification",
        href: "/get-involved/training-certification",
      },
      {
        label: "Safeguarding Policy",
        href: "/get-involved/training-certification/safeguarding-policy",
      },
      {
        label: "Gender Policy",
        href: "/get-involved/training-certification/gender-policy",
      },
      {
        label: "SHaPE Policy",
        href: "/get-involved/training-certification/shape-policy",
      },
      {
        label: "HR Policy",
        href: "/get-involved/training-certification/hr-policy",
      },
    ],
  },
  {
    label: "uCon",
    href: "/ucon",
    children: [
      { label: "What is uCon?", href: "/ucon/about-us/what-is-ucon" },
      { label: "Focus Areas", href: "/ucon/about-us/focus-areas" },
      { label: "Our Partners", href: "/ucon/about-us/partners" },
      {
        label: "Rules & Regulations",
        href: "/ucon/about-us/rules-regulations",
      },
      { label: "Ask Questions", href: "/ucon/queries/ask-questions" },
      { label: "Explore Ideas", href: "/ucon/queries/explore-ideas" },
      { label: "FAQs", href: "/ucon/queries/faqs" },
      { label: "CSE Training", href: "/ucon/training/cse" },
    ],
  },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Sitemap", href: "/sitemap" },
];

const socialLinks = [
  { label: "Facebook", short: "f" },
  { label: "LinkedIn", short: "in" },
  { label: "X", short: "x" },
  { label: "YouTube", short: "yt" },
] as const;

export default function Footer() {
  const logoSrc = usePstcLogo();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[var(--pstc-primary-deep)] text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,var(--pstc-primary-glow),transparent_34%),radial-gradient(circle_at_88%_78%,var(--pstc-secondary-glow),transparent_32%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
      />

      <div className="container-pstc relative z-10 px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1.55fr_0.85fr] lg:gap-10 xl:gap-12">
          <div>
            <Link href="/" className="group mb-6 inline-flex">
              <span className="inline-flex rounded-2xl border border-white/15 bg-white/95 p-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition duration-300 group-hover:scale-[1.02]">
                <img
                  src={logoSrc}
                  alt="PSTC Logo"
                  className="h-12 w-28 sm:h-14 sm:w-32 xl:h-16 xl:w-40"
                />
              </span>
            </Link>

            <p className="max-w-md text-sm leading-7 text-primary-foreground/80">
              Population Services and Training Center is a non-government,
              not-for-profit voluntary organization working to improve the quality
              of life of poor and socially disadvantaged people.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className={cn(
                    "flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xs font-black uppercase",
                    "text-primary-foreground transition duration-300 hover:-translate-y-0.5 hover:border-[var(--pstc-secondary)] hover:bg-[var(--pstc-secondary)] hover:text-[var(--pstc-secondary-foreground)]",
                  )}
                >
                  {social.short}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {footerMenus.map((menu) => (
                <div key={menu.href} className="group">
                  <Link
                    href={menu.href}
                    className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-primary-foreground transition hover:text-[var(--pstc-secondary)]"
                  >
                    {menu.label}
                    <ArrowUpRight className="size-3.5 opacity-0 transition group-hover:opacity-100" />
                  </Link>

                  <div className="grid gap-2 border-l border-white/15 pl-4">
                    {menu.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="relative text-sm font-semibold leading-5 text-primary-foreground/75 transition duration-300 before:absolute before:-left-4 before:top-2.5 before:h-px before:w-2 before:bg-white/25 hover:translate-x-1 hover:text-primary-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-[var(--pstc-secondary)]">
              Contact
            </h3>

            <div className="grid gap-4 text-sm leading-7 text-primary-foreground/80">
              <p className="flex gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-[var(--pstc-secondary)]" />
                PSTC Office, Dhaka, Bangladesh
              </p>
              <p className="flex items-center gap-3">
                <Phone className="size-5 text-[var(--pstc-secondary)]" />
                +880 0000 000000
              </p>
              <p className="flex items-center gap-3">
                <Mail className="size-5 text-[var(--pstc-secondary)]" />
                info@pstc-bgd.org
              </p>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[var(--pstc-secondary)]">
                Policies
              </h3>

              <div className="grid gap-2 text-sm font-semibold text-primary-foreground/75">
                {policyLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition hover:translate-x-1 hover:text-primary-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs font-semibold text-primary-foreground/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} PSTC. All rights reserved.</p>
          <p>Population Services and Training Center · Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
