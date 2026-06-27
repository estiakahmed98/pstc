"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#E53B51] px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_1.6fr_0.8fr]">
        <div className="animate-pstc-fade-up">
          <Link href="/" className="mb-5 flex items-center gap-3">
            <img
              src="/logo-white.png"
              alt="PSTC Logo"
              className="h-14 w-auto rounded-xl transition duration-300 hover:scale-105"
            />
          </Link>

          <p className="max-w-md text-sm leading-7 text-red-100">
            Population Services and Training Center is a non-government,
            not-for-profit voluntary organization working to improve the quality
            of life of poor and socially disadvantaged people.
          </p>

          <div className="mt-6 flex gap-3">
            {["f", "in", "x", "yt"].map((social) => (
              <Link
                key={social}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-black uppercase text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-red-700"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>

        <div className="animate-pstc-fade-up animation-delay-200">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {footerMenus.map((menu) => (
              <div key={menu.href} className="group">
                <Link
                  href={menu.href}
                  className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:text-red-100"
                >
                  {menu.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                </Link>

                <div className="grid gap-2 border-l border-white/20 pl-4">
                  {menu.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="relative text-sm font-semibold leading-5 text-red-100 transition duration-300 before:absolute before:-left-4 before:top-2.5 before:h-px before:w-2 before:bg-white/30 hover:translate-x-1 hover:text-white"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-pstc-fade-up animation-delay-300">
          <h3 className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-red-200">
            Contact
          </h3>

          <div className="grid gap-4 text-sm leading-7 text-red-100">
            <p className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-red-200" />
              PSTC Office, Dhaka, Bangladesh
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-red-200" />
              +880 0000 000000
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-red-200" />
              info@pstc-bgd.org
            </p>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-red-200">
              Policies
            </h3>

            <div className="grid gap-2 text-sm font-semibold text-red-100">
              {policyLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:translate-x-1 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/20 pt-6 text-xs font-semibold text-red-200 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} PSTC. All rights reserved.</p>
        <p>Designed for PSTC digital experience.</p>
      </div>
    </footer>
  );
}
