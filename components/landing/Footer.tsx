"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";

type FooterLink = {
  label: string;
  href: string;
};

type FooterGroup = {
  title: string;
  links: FooterLink[];
};

const footerGroups: FooterGroup[] = [
  {
    title: "Who We Are",
    links: [
      { label: "About Us", href: "/who-we-are/about-us" },
      { label: "Governance", href: "/who-we-are/governance" },
      { label: "Leadership", href: "/who-we-are/leadership" },
      {
        label: "Mission, Vision & Values",
        href: "/who-we-are/mission-vision-values",
      },
      { label: "Where We Work", href: "/who-we-are/where-we-work" },
      { label: "Strategic Plan", href: "/who-we-are/strategic-plan" },
    ],
  },
  {
    title: "What We Do",
    links: [
      { label: "Our Thematic Areas", href: "/what-we-do/thematic-areas" },
      { label: "Our Projects", href: "/what-we-do/projects" },
      { label: "Our Initiatives", href: "/what-we-do/initiatives" },
      { label: "Our Priorities", href: "/what-we-do/priorities" },
      { label: "Youth Engagement", href: "/what-we-do/youth-engagement" },
    ],
  },
  {
    title: "Our Impact",
    links: [
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
    title: "Get Involved",
    links: [
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
    title: "uCon",
    links: [
      { label: "What is uCon?", href: "/ucon/about-us/what-is-ucon" },
      { label: "Focus Areas", href: "/ucon/about-us/focus-areas" },
      { label: "Ask Questions", href: "/ucon/queries/ask-questions" },
      { label: "Explore Ideas", href: "/ucon/queries/explore-ideas" },
      { label: "Advocacy", href: "/ucon/advocacy" },
      { label: "CSE Training", href: "/ucon/training/cse" },
    ],
  },
];

const policyLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Sitemap", href: "/sitemap" },
];

function FooterMovingButton({
  href,
  children,
  variant = "primary",
  className,
  containerClassName,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  containerClassName?: string;
}) {
  return (
    <MovingBorderButton
      as={Link}
      href={href}
      duration={3600}
      borderRadius="999px"
      containerClassName={cn(
        "h-12 w-auto min-w-[150px] text-sm",
        containerClassName,
      )}
      borderClassName="bg-[radial-gradient(#FFFFFF_36%,#0991CB_56%,transparent_72%)]"
      className={cn(
        "gap-2 px-6 text-sm font-black transition",
        variant === "primary"
          ? "border border-white bg-white text-secondary hover:border-primary hover:bg-primary hover:text-primary-foreground"
          : "border border-white/40 bg-transparent text-white hover:border-primary hover:bg-primary/10 hover:text-white",
        className,
      )}
    >
      {children}
    </MovingBorderButton>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="grid size-10 place-items-center rounded-full border border-white/30 bg-white/10 text-white transition hover:border-primary hover:bg-primary hover:text-white"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-12 xl:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="grid size-14 place-items-center bg-white text-secondary">
                <span className="text-sm font-black tracking-wider">PSTC</span>
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-white">
                  PSTC
                </p>
                <p className="mt-1 max-w-[280px] text-sm font-semibold leading-6 text-white/75">
                  Population Services and Training Center
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/80">
              A non-government, not-for-profit voluntary organization working to
              improve the quality of life of poor and socially disadvantaged
              people through health, rights, skills, and community-focused
              programs.
            </p>

            <div className="mt-6 grid gap-3 text-sm font-semibold text-white/85">
              <Link
                href="mailto:info@pstc-bgd.org"
                className="flex items-center gap-3 transition hover:bg-primary/10"
              >
                <Mail className="size-4 shrink-0 text-white" />
                info@pstc-bgd.org
              </Link>

              <Link
                href="tel:+8800000000000"
                className="flex items-center gap-3 transition hover:bg-primary/10"
              >
                <Phone className="size-4 shrink-0 text-white" />
                +880 0000 000000
              </Link>

              <Link
                href="/contact-us/office-location"
                className="flex items-start gap-3 transition hover:bg-primary/10"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-white" />
                PSTC Office, Dhaka, Bangladesh
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <SocialLink href="#" label="Facebook">
                <Phone className="size-4" />
              </SocialLink>
              <SocialLink href="#" label="LinkedIn">
                <Phone className="size-4" />
              </SocialLink>
              <SocialLink href="#" label="YouTube">
                <Phone className="size-4" />
              </SocialLink>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {footerGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-4 whitespace-nowrap text-xs font-black uppercase tracking-[0.22em] text-white">
                    {group.title}
                  </h3>

                  <div className="grid gap-3">
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="group flex items-start justify-between gap-2 rounded-lg px-2 py-1 text-sm font-semibold leading-5 text-white/75 transition hover:bg-primary/10 hover:text-white"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 opacity-0 transition group-hover:opacity-100" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/20 pt-6 text-sm font-semibold text-white/75 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Population Services and Training
            Center. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {policyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-1 transition hover:bg-primary/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
