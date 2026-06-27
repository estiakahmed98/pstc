"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Globe2,
  Menu,
  Search,
  X,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";

type MegaItem = {
  title: string;
  href: string;
};

type MegaMenu = {
  label: string;
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  items: MegaItem[];
};

const megaMenus: MegaMenu[] = [
  {
    label: "Who We Are",
    href: "/who-we-are",
    eyebrow: "About PSTC",
    title: "Who We Are",
    description:
      "Explore PSTC’s governance, leadership, values, policies, strategy, and institutional identity.",
    image: "/images/who-we-are.jpg",
    items: [
      { title: "Governance", href: "/who-we-are/governance" },
      { title: "Leadership", href: "/who-we-are/leadership" },
      {
        title: "Mission, Vision & Values",
        href: "/who-we-are/mission-vision-values",
      },
      { title: "Policies", href: "/who-we-are/policies" },
      { title: "Organogram", href: "/who-we-are/organogram" },
      { title: "Where We Work", href: "/who-we-are/where-we-work" },
      { title: "About Us", href: "/who-we-are/about-us" },
      { title: "Strategic Plan", href: "/who-we-are/strategic-plan" },
    ],
  },
  {
    label: "What We Do",
    href: "/what-we-do",
    eyebrow: "Programs",
    title: "What We Do",
    description:
      "Discover thematic areas, projects, initiatives, priorities, and youth engagement platforms.",
    image: "/images/what-we-do.jpg",
    items: [
      { title: "Our Thematic Areas", href: "/what-we-do/thematic-areas" },
      {
        title: "Population Health and Nutrition",
        href: "/what-we-do/population-health-nutrition",
      },
      {
        title: "Youth & Adolescent Development",
        href: "/what-we-do/youth-adolescent-development",
      },
      {
        title: "Gender and Governance",
        href: "/what-we-do/gender-governance",
      },
      {
        title: "Climate Change and Adaptation",
        href: "/what-we-do/climate-change-adaptation",
      },
      {
        title: "Skills Education and Training",
        href: "/what-we-do/skills-education-training",
      },
      { title: "Our Projects", href: "/what-we-do/projects" },
      { title: "Our Initiatives", href: "/what-we-do/initiatives" },
      { title: "Our Priorities", href: "/what-we-do/priorities" },
      { title: "Youth Engagement", href: "/what-we-do/youth-engagement" },
    ],
  },
  {
    label: "Our Impact",
    href: "/our-impact",
    eyebrow: "Evidence",
    title: "Our Impact",
    description:
      "Read publications, reports, research updates, events, and media stories from PSTC.",
    image: "/images/our-impact.jpg",
    items: [
      { title: "Publications", href: "/our-impact/publications" },
      { title: "Projanmo Kotha", href: "/our-impact/projanmo-kotha" },
      { title: "Reports", href: "/our-impact/reports" },
      { title: "Annual Report", href: "/our-impact/annual-report" },
      { title: "Audit Report", href: "/our-impact/audit-report" },
      { title: "Research", href: "/our-impact/research" },
      { title: "Events & Media", href: "/our-impact/events-media" },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    eyebrow: "Join Us",
    title: "Get Involved",
    description:
      "Find jobs, training, certification, and important organizational policies.",
    image: "/images/get-involved.jpg",
    items: [
      { title: "Jobs", href: "/get-involved/jobs" },
      {
        title: "Training & Certification",
        href: "/get-involved/training-certification",
      },
      {
        title: "Safeguarding Policy",
        href: "/get-involved/safeguarding-policy",
      },
      { title: "Gender Policy", href: "/get-involved/gender-policy" },
      { title: "SHaPE Policy", href: "/get-involved/shape-policy" },
      { title: "HR Policy", href: "/get-involved/hr-policy" },
    ],
  },
  {
    label: "uCon",
    href: "/ucon",
    eyebrow: "Youth Platform",
    title: "uCon",
    description:
      "A youth-focused platform for questions, ideas, advocacy, training, assessment, and certification.",
    image: "/images/ucon.jpg",
    items: [
      { title: "What is uCon?", href: "/ucon/about" },
      { title: "Focus Areas", href: "/ucon/focus-areas" },
      { title: "Our Partners", href: "/ucon/partners" },
      { title: "Rules & Regulations", href: "/ucon/rules-regulations" },
      { title: "Ask Questions", href: "/ucon/queries/ask-questions" },
      { title: "Explore Ideas", href: "/ucon/queries/explore-ideas" },
      { title: "FAQs", href: "/ucon/faqs" },
      { title: "News", href: "/ucon/advocacy/news" },
      { title: "Events", href: "/ucon/advocacy/events" },
      { title: "Publications", href: "/ucon/advocacy/publications" },
      { title: "CSE Module-1", href: "/ucon/training/cse/module-1" },
      { title: "CSE Module-2", href: "/ucon/training/cse/module-2" },
      { title: "CSE Module-3", href: "/ucon/training/cse/module-3" },
      { title: "CSE Module-4", href: "/ucon/training/cse/module-4" },
      { title: "Assessment", href: "/ucon/training/assessment" },
      { title: "Certification", href: "/ucon/training/certification" },
    ],
  },
];

const simpleLinks = [
  { label: "Give Today", href: "/give-today" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function HeaderMegaMenu() {
  const [activeMenu, setActiveMenu] = useState<MegaMenu | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className="pstc-header-glass fixed left-0 top-0 z-50 w-full"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="mx-auto flex h-[var(--header-height)] w-full max-w-[1280px] items-center justify-between gap-5 px-5 xl:px-8">
          <div className="flex min-w-0 shrink-0 items-center gap-4">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="grid size-11 place-items-center rounded-full border border-border bg-background text-foreground transition hover:border-primary hover:text-primary lg:hidden"
            >
              <Menu className="size-5" />
            </button>

            <Link href="/" className="group flex min-w-0 items-center gap-3">
              <div className="relative grid size-12 shrink-0 place-items-center overflow-hidden bg-primary text-primary-foreground shadow-md transition duration-300 group-hover:-translate-y-0.5">
                <span className="relative z-10 text-xs font-black leading-tight tracking-wider">
                  PSTC
                </span>
              </div>

              <div className="hidden min-w-0 leading-tight sm:block">
                <p className="whitespace-nowrap text-sm font-black uppercase tracking-[0.26em] text-primary">
                  PSTC
                </p>
              </div>
            </Link>
          </div>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex">
            {megaMenus.map((menu) => (
              <div
                key={menu.label}
                onMouseEnter={() => setActiveMenu(menu)}
                className="relative shrink-0"
              >
                <Link
                  href={menu.href}
                  className="pstc-nav-link flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-3 text-sm font-bold text-foreground transition hover:bg-primary/10 hover:text-primary xl:px-4"
                >
                  {menu.label}
                  <ChevronDown className="size-4 shrink-0" />
                </Link>
              </div>
            ))}

            {simpleLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onMouseEnter={() => setActiveMenu(null)}
                className="pstc-nav-link shrink-0 whitespace-nowrap rounded-full px-3 py-3 text-sm font-bold text-foreground transition hover:bg-secondary/10 hover:text-secondary xl:px-4"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label="Search"
              className="grid size-10 place-items-center rounded-full border border-border bg-background text-foreground transition hover:border-primary hover:text-primary"
            >
              <Search className="size-4" />
            </button>

            <button
              type="button"
              className="hidden items-center gap-2 whitespace-nowrap rounded-full border border-border bg-background px-3 py-2 text-xs font-bold text-foreground transition hover:border-primary hover:text-primary sm:flex"
            >
              <Globe2 className="size-4 shrink-0" />
              English
              <ChevronDown className="size-3 shrink-0" />
            </button>
          </div>
        </div>

        {activeMenu && (
          <div className="absolute left-0 top-[var(--header-height)] w-full overflow-hidden border-t border-border bg-background shadow-[0_30px_80px_rgba(15,23,42,0.10)]">
            <div className="mx-auto grid min-h-[430px] w-full max-w-[1280px] grid-cols-12 gap-7 px-5 py-9 xl:px-8 animate-pstc-menu-reveal">
              <aside className="col-span-3 rounded-[2rem] border border-border bg-card p-4">
                <p className="mb-4 px-3 text-xs font-black uppercase tracking-[0.28em] text-primary">
                  {activeMenu.label}
                </p>

                <div className="space-y-1">
                  {activeMenu.items.slice(0, 8).map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold text-foreground transition hover:bg-primary hover:text-primary-foreground"
                    >
                      <span className="whitespace-nowrap">{item.title}</span>
                      <ArrowUpRight className="size-4 shrink-0 opacity-0 transition group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              </aside>

              <section className="col-span-4 flex flex-col justify-center">
                <p className="mb-4 text-xs font-black uppercase tracking-[0.34em] text-secondary">
                  {activeMenu.eyebrow}
                </p>

                <h2 className="max-w-md text-5xl font-black tracking-tight text-foreground">
                  {activeMenu.title}
                </h2>

                <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
                  {activeMenu.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={activeMenu.href}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-black text-primary-foreground shadow-md transition hover:-translate-y-0.5 hover:bg-[var(--pstc-primary-dark)]"
                  >
                    Explore Section
                    <ArrowUpRight className="size-4" />
                  </Link>

                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-black text-foreground transition hover:-translate-y-0.5 hover:border-secondary hover:text-secondary"
                  >
                    Contact PSTC
                  </Link>
                </div>
              </section>

              <section className="col-span-2 py-4">
                <p className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-muted-foreground">
                  Quick Links
                </p>

                <div className="space-y-3">
                  {activeMenu.items.slice(8).map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="pstc-mega-link block text-sm font-bold text-foreground/80"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </section>

              <section className="col-span-3">
                <div className="group relative h-full min-h-[350px] overflow-hidden rounded-[2rem] border border-border bg-card">
                  <Image
                    src={activeMenu.image}
                    alt={activeMenu.title}
                    fill
                    sizes="360px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/35" />

                  <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
                    Featured
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-black">{activeMenu.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/85">
                      Modern, accessible and stakeholder-focused digital
                      experience.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[70] bg-background lg:hidden">
          <div className="flex h-20 items-center justify-between border-b border-border px-5">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="text-lg font-black text-primary"
            >
              PSTC
            </Link>

            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="grid size-10 place-items-center rounded-full border border-border"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="h-[calc(100vh-80px)] overflow-y-auto px-5 py-6">
            {megaMenus.map((menu) => (
              <div key={menu.label} className="border-b border-border py-5">
                <Link
                  href={menu.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-xl font-black text-foreground"
                >
                  {menu.label}
                </Link>

                <div className="mt-4 grid gap-2">
                  {menu.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-2xl bg-muted px-4 py-3 text-sm font-bold text-foreground transition hover:bg-primary hover:text-primary-foreground"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-5 grid gap-3">
              {simpleLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl bg-primary px-5 py-4 text-center text-sm font-black text-primary-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
