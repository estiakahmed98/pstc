"use client";

import React, { FormEvent, useContext, useMemo, useState } from "react";
import { ThemeContext } from "@/components/shared/theme-provider";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

type ProjectFilter =
  | "All"
  | "Health"
  | "Youth"
  | "Gender"
  | "Climate"
  | "Skills";

type IconName =
  | "heart"
  | "spark"
  | "users"
  | "shield"
  | "book"
  | "leaf"
  | "map"
  | "file"
  | "calendar"
  | "arrow"
  | "menu"
  | "close"
  | "sun"
  | "moon"
  | "search"
  | "mail"
  | "phone"
  | "pin"
  | "check"
  | "download"
  | "globe"
  | "briefcase"
  | "graduation"
  | "hand";

export default function PSTCLandingPage() {
  const themeContext = useContext(ThemeContext);
  const isDark = themeContext?.theme === "dark";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "bn">("en");
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const copy = {
    en: {
      announcement:
        "Advancing health, rights, resilience, and opportunity across Bangladesh",
      donate: "Give Today",
      heroLabel: "Population Services and Training Center",
      heroTitle:
        "Advancing health, rights, and resilience for communities across Bangladesh",
      heroText:
        "For nearly five decades, PSTC has worked with communities, partners, and young people to improve access to health, rights, skills, protection, and opportunity.",
      primaryCta: "Explore Our Work",
      secondaryCta: "View Publications",
      tertiaryCta: "Help Create Impact",
      newsletterTitle: "Stay connected with PSTC",
      newsletterText:
        "Get updates on publications, programs, training, events, and community impact.",
    },
    bn: {
      announcement:
        "বাংলাদেশজুড়ে স্বাস্থ্য, অধিকার, স্থিতিস্থাপকতা ও সুযোগ এগিয়ে নেওয়া",
      donate: "সহায়তা করুন",
      heroLabel: "পপুলেশন সার্ভিসেস অ্যান্ড ট্রেনিং সেন্টার",
      heroTitle:
        "বাংলাদেশের মানুষের স্বাস্থ্য, অধিকার ও স্থিতিস্থাপকতার জন্য কাজ",
      heroText:
        "প্রায় পাঁচ দশক ধরে PSTC কমিউনিটি, অংশীদার ও তরুণদের সঙ্গে স্বাস্থ্য, অধিকার, দক্ষতা, সুরক্ষা ও সুযোগ বৃদ্ধিতে কাজ করছে।",
      primaryCta: "আমাদের কাজ দেখুন",
      secondaryCta: "প্রকাশনা দেখুন",
      tertiaryCta: "Impact তৈরি করুন",
      newsletterTitle: "PSTC-এর সঙ্গে যুক্ত থাকুন",
      newsletterText:
        "প্রকাশনা, প্রোগ্রাম, ট্রেনিং, ইভেন্ট এবং কমিউনিটি impact আপডেট পান।",
    },
  };

  const currentCopy = copy[language];

  const navItems = [
    { label: "Who We Are", href: "#about" },
    { label: "What We Do", href: "#programs" },
    { label: "Impact", href: "#impact" },
    { label: "Publications", href: "#publications" },
    { label: "uCon", href: "#ucon" },
    { label: "Get Involved", href: "#get-involved" },
    { label: "Contact", href: "#contact" },
  ];

  const stats = [
    {
      value: "48+",
      label: "Years of service",
      caption: "Continuing from FPSTC since 1978",
      icon: "spark" as IconName,
    },
    {
      value: "5",
      label: "Thematic areas",
      caption: "Health, youth, gender, climate, skills",
      icon: "leaf" as IconName,
    },
    {
      value: "8+",
      label: "Major projects",
      caption: "Community-focused initiatives",
      icon: "briefcase" as IconName,
    },
    {
      value: "3",
      label: "Model clinic locations",
      caption: "Aftabnagar, Gazipur, Kushtia",
      icon: "heart" as IconName,
    },
    {
      value: "100K+",
      label: "People reached",
      caption: "Dummy figure for visual demo",
      icon: "users" as IconName,
    },
    {
      value: "25+",
      label: "Partners & networks",
      caption: "Collaboration for greater impact",
      icon: "globe" as IconName,
    },
  ];

  const values = [
    "Commitment",
    "Integrity",
    "Transparency",
    "Accountability",
    "Team Spirit",
  ];

  const thematicAreas = [
    {
      title: "Population Health and Nutrition",
      short:
        "Inclusive quality health, SRHR, nutrition, and community-based service access.",
      icon: "heart" as IconName,
      gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    },
    {
      title: "Youth and Adolescent Development",
      short:
        "Youth voice, adolescent wellbeing, life skills, advocacy, and safe learning spaces.",
      icon: "users" as IconName,
      gradient: "from-blue-500/20 via-sky-500/10 to-indigo-500/20",
    },
    {
      title: "Gender and Governance",
      short:
        "Rights-based governance, gender equity, protection, safeguarding, and inclusion.",
      icon: "shield" as IconName,
      gradient: "from-violet-500/20 via-fuchsia-500/10 to-rose-500/20",
    },
    {
      title: "Climate Change and Adaptation",
      short:
        "Preparedness, resilient communities, inclusion, and climate-sensitive development.",
      icon: "leaf" as IconName,
      gradient: "from-lime-500/20 via-green-500/10 to-emerald-500/20",
    },
    {
      title: "Skills Education and Training",
      short:
        "Practical training, certification, employment support, and institution-based learning.",
      icon: "graduation" as IconName,
      gradient: "from-amber-500/20 via-orange-500/10 to-yellow-500/20",
    },
  ];

  const projects = [
    {
      title: "Urban Health Care",
      tag: "Health",
      status: "Active",
      place: "Urban communities",
      text: "Strengthening primary health access and referral support for underserved people.",
      image: "/assets/Urban Health Care project image.jpeg",
    },
    {
      title: "FOCUS",
      tag: "Youth",
      status: "Active",
      place: "Bangladesh",
      text: "Fortifying organizational capacity to uphold the SRHR movement in Bangladesh.",
      image: "/assets/FOCUS project image.jpg",
    },
    {
      title: "PUD",
      tag: "Health",
      status: "Program",
      place: "Community based",
      text: "Supportive service pathways for persons who use drugs and vulnerable populations.",
      image: "/assets/Supportive service pathways for persons.jpg",
    },
    {
      title: "CMP",
      tag: "Gender",
      status: "Community",
      place: "Local networks",
      text: "Community mobilization for rights, protection, awareness, and access to services.",
      image: "/assets/Community mobilization for rights.jpg",
    },
    {
      title: "SUFASEC",
      tag: "Gender",
      status: "Protection",
      place: "Target communities",
      text: "A child protection initiative against sexual exploitation of children.",
      image: "/assets/A child protection initiative against.webp",
    },
    {
      title: "LEVIS",
      tag: "Skills",
      status: "Training",
      place: "Institutional",
      text: "Learning, employability, vocational readiness, and practical skills development.",
      image:
        "/assets/Learning, employability, vocational readiness, and practical skills.jpg",
    },
    {
      title: "HOPE",
      tag: "Health",
      status: "Outreach",
      place: "Community clinics",
      text: "Health Outreach and Protection Effort for inclusive health service access.",
      image:
        "/assets/Health Outreach and Protection Effort for inclusive health service access.webp",
    },
    {
      title: "SPRINT",
      tag: "Climate",
      status: "Response",
      place: "Crisis contexts",
      text: "Preparedness and response support for resilient community systems.",
      image: "/assets/Preparedness and response support.jpeg",
    },
  ];

  const locations = [
    "Dhaka",
    "Aftabnagar",
    "Gazipur",
    "Kushtia",
    "Urban Communities",
    "Climate Vulnerable Areas",
  ];

  const publications = [
    {
      title: "Annual Report 2025",
      type: "Annual Report",
      year: "2025",
      text: "A complete snapshot of PSTC programs, reach, governance, and organizational progress.",
    },
    {
      title: "Projanmo Kotha",
      type: "Newsletter",
      year: "Latest",
      text: "Stories, program updates, youth engagement highlights, and field-level learning.",
    },
    {
      title: "Research Brief: Youth Health & Rights",
      type: "Research",
      year: "2026",
      text: "Evidence summary on adolescent health, SRHR awareness, and service access.",
    },
  ];

  const news = [
    {
      date: "22 Jun 2026",
      label: "Program Update",
      title: "PSTC launches integrated community health initiative",
    },
    {
      date: "18 Jun 2026",
      label: "Youth",
      title: "Youth dialogue on SRHR, climate resilience, and inclusion",
    },
    {
      date: "12 Jun 2026",
      label: "Training",
      title: "New community paramedic training cohort opens",
    },
  ];

  const events = [
    { date: "28 Jun", title: "Safeguarding Training", location: "PSTC Bhaban" },
    {
      date: "04 Jul",
      title: "CSE Module Orientation",
      location: "Online / uCon",
    },
    {
      date: "15 Jul",
      title: "Climate Resilience Workshop",
      location: "Gazipur",
    },
  ];

  const partners = [
    "IPPF",
    "Govt. Affiliates",
    "Development Partners",
    "Community Networks",
    "Youth Networks",
    "Health Partners",
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.tag === activeFilter);
  }, [activeFilter]);

  function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  }

  function handleThemeToggle() {
    themeContext?.toggleTheme();
  }

  const Icon = ({
    name,
    className = "h-5 w-5",
  }: {
    name: IconName;
    className?: string;
  }) => {
    const common = {
      className,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.9,
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
      "aria-hidden": true,
    };

    switch (name) {
      case "heart":
        return (
          <svg {...common}>
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
          </svg>
        );
      case "spark":
        return (
          <svg {...common}>
            <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
            <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
          </svg>
        );
      case "users":
        return (
          <svg {...common}>
            <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
            <circle cx="9.5" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
            <path d="M16 3.1a4 4 0 0 1 0 7.8" />
          </svg>
        );
      case "shield":
        return (
          <svg {...common}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
            <path d="m9 12 2 2 4-5" />
          </svg>
        );
      case "book":
        return (
          <svg {...common}>
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M4 4v15.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5" />
          </svg>
        );
      case "leaf":
        return (
          <svg {...common}>
            <path d="M11 20A7 7 0 0 1 4 13c0-5 6-9 16-9 0 10-4 16-9 16Z" />
            <path d="M4 13c4 0 8 1 11 4" />
          </svg>
        );
      case "map":
        return (
          <svg {...common}>
            <path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
            <path d="M9 3v15" />
            <path d="M15 6v15" />
          </svg>
        );
      case "file":
        return (
          <svg {...common}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6" />
            <path d="M8 13h8" />
            <path d="M8 17h6" />
          </svg>
        );
      case "calendar":
        return (
          <svg {...common}>
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M3 10h18" />
          </svg>
        );
      case "arrow":
        return (
          <svg {...common}>
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        );
      case "menu":
        return (
          <svg {...common}>
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        );
      case "close":
        return (
          <svg {...common}>
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        );
      case "sun":
        return (
          <svg {...common}>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        );
      case "moon":
        return (
          <svg {...common}>
            <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.5 6.5 0 0 0 21 12.8Z" />
          </svg>
        );
      case "search":
        return (
          <svg {...common}>
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        );
      case "mail":
        return (
          <svg {...common}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        );
      case "phone":
        return (
          <svg {...common}>
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2Z" />
          </svg>
        );
      case "pin":
        return (
          <svg {...common}>
            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        );
      case "check":
        return (
          <svg {...common}>
            <path d="m20 6-11 11-5-5" />
          </svg>
        );
      case "download":
        return (
          <svg {...common}>
            <path d="M12 3v12" />
            <path d="m7 10 5 5 5-5" />
            <path d="M5 21h14" />
          </svg>
        );
      case "globe":
        return (
          <svg {...common}>
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15 15 0 0 1 0 20" />
            <path d="M12 2a15 15 0 0 0 0 20" />
          </svg>
        );
      case "briefcase":
        return (
          <svg {...common}>
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <path d="M3 12h18" />
          </svg>
        );
      case "graduation":
        return (
          <svg {...common}>
            <path d="m22 10-10-5-10 5 10 5 10-5Z" />
            <path d="M6 12v5c3 2 9 2 12 0v-5" />
          </svg>
        );
      case "hand":
        return (
          <svg {...common}>
            <path d="M8 11V5a2 2 0 0 1 4 0v5" />
            <path d="M12 10V4a2 2 0 0 1 4 0v8" />
            <path d="M16 12V7a2 2 0 0 1 4 0v7a8 8 0 0 1-8 8h-1a8 8 0 0 1-7.5-5.2L2.8 15a2.2 2.2 0 0 1 4.1-1.6L8 16" />
          </svg>
        );
      default:
        return null;
    }
  };

  const SectionHeading = ({
    eyebrow,
    title,
    text,
    align = "center",
  }: {
    eyebrow: string;
    title: string;
    text?: string;
    align?: "center" | "left";
  }) => (
    <div
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }
    >
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );

  const ImageSlot = ({
    label,
    className = "",
  }: {
    label: string;
    className?: string;
  }) => (
    <div
      className={`group relative overflow-hidden rounded-[2rem] border border-dashed border-emerald-300/80 bg-gradient-to-br from-emerald-50 via-white to-sky-50 shadow-inner dark:border-emerald-400/25 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/40 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(16,185,129,0.22),transparent_32%),radial-gradient(circle_at_75%_70%,rgba(14,165,233,0.18),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:28px_28px] opacity-50 dark:opacity-20" />
      <div className="relative flex h-full min-h-[220px] flex-col items-center justify-center p-8 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/85 text-emerald-700 shadow-lg shadow-emerald-900/5 ring-1 ring-emerald-100 dark:bg-white/10 dark:text-emerald-200 dark:ring-white/10">
          <Icon name="spark" className="h-6 w-6" />
        </div>
        <p className="text-sm font-black uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
          Image Slot
        </p>
        <p className="mt-2 max-w-xs text-sm leading-6 text-slate-600 dark:text-slate-300">
          {label}
        </p>
        <p className="mt-4 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-slate-500 ring-1 ring-slate-200 dark:bg-white/10 dark:text-slate-400 dark:ring-white/10">
          Replace this block with your real image
        </p>
      </div>
    </div>
  );

  const CtaButton = ({
    children,
    variant = "primary",
    href = "#",
  }: {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    href?: string;
  }) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold transition-all duration-300 focus:outline-none focus:ring-4";
    const variants = {
      primary:
        "bg-emerald-600 text-white shadow-xl shadow-emerald-700/20 hover:-translate-y-0.5 hover:bg-emerald-700 focus:ring-emerald-200 dark:bg-emerald-400 dark:text-slate-950 dark:hover:bg-emerald-300 dark:focus:ring-emerald-900",
      secondary:
        "border border-slate-200 bg-white text-slate-900 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700 focus:ring-slate-200 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-emerald-300/40 dark:hover:text-emerald-200",
      ghost:
        "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-emerald-700 focus:ring-slate-200 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-emerald-200",
    };

    return (
      <a href={href} className={`${base} ${variants[variant]}`}>
        {children}
        <Icon name="arrow" className="h-4 w-4" />
      </a>
    );
  };

  return (
    <main>
      <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-950 antialiased dark:bg-slate-950 dark:text-white">
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.11),transparent_34%)]" />

        <div className="relative z-10">
          <div className="bg-emerald-950 text-white dark:bg-slate-900">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 text-xs font-semibold sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-200">
                  <Icon name="spark" className="h-4 w-4" />
                </span>
                <span>{currentCopy.announcement}</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-emerald-100/90">
                <a href="#publications" className="transition hover:text-white">
                  Publications
                </a>
                <span className="h-1 w-1 rounded-full bg-emerald-300/50" />
                <a href="#contact" className="transition hover:text-white">
                  Contact
                </a>
                <span className="h-1 w-1 rounded-full bg-emerald-300/50" />
                <a href="#ucon" className="transition hover:text-white">
                  uCon
                </a>
                <button
                  type="button"
                  onClick={() => setLanguage(language === "en" ? "bn" : "en")}
                  className="rounded-full bg-white/10 px-3 py-1.5 text-white transition hover:bg-white/20"
                >
                  {language === "en" ? "বাংলা" : "EN"}
                </button>
                <button
                  type="button"
                  onClick={handleThemeToggle}
                  aria-label="Toggle theme"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                >
                  <Icon name={isDark ? "sun" : "moon"} className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <header className="sticky top-0 z-50 border-b border-white/50 bg-white/78 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/70">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <a
                href="#"
                className="flex items-center gap-3"
                aria-label="PSTC home"
              >
                <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-sky-600 text-lg font-black text-white shadow-lg shadow-emerald-900/20">
                  P
                  <span className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-amber-300" />
                </div>
                <div>
                  <p className="text-lg font-black leading-none tracking-tight">
                    PSTC
                  </p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    Bangladesh
                  </p>
                </div>
              </a>

              <nav
                className="hidden items-center gap-1 lg:flex"
                aria-label="Main navigation"
              >
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-emerald-200"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="hidden items-center gap-2 lg:flex">
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                  aria-label="Open search"
                >
                  <Icon name="search" className="h-5 w-5" />
                </button>
                <CtaButton href="#get-involved">{currentCopy.donate}</CtaButton>
              </div>

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 lg:hidden dark:border-white/10 dark:bg-white/10 dark:text-white"
                aria-label="Toggle menu"
              >
                <Icon name={mobileOpen ? "close" : "menu"} />
              </button>
            </div>

            {mobileOpen ? (
              <div className="border-t border-slate-200 bg-white px-4 py-5 shadow-2xl lg:hidden dark:border-white/10 dark:bg-slate-950">
                <nav className="grid gap-2" aria-label="Mobile navigation">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-200 dark:hover:bg-white/10"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#get-involved"
                    onClick={() => setMobileOpen(false)}
                    className="mt-2 rounded-2xl bg-emerald-600 px-4 py-3 text-center text-sm font-black text-white"
                  >
                    {currentCopy.donate}
                  </a>
                </nav>
              </div>
            ) : null}
          </header>

          <section className="relative px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-emerald-700 shadow-sm dark:border-emerald-400/20 dark:bg-white/10 dark:text-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  {currentCopy.heroLabel}
                </div>
                <h1 className="max-w-5xl text-5xl font-black leading-[0.98] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
                  Advancing{" "}
                  <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-sky-600 bg-clip-text text-transparent dark:from-emerald-300 dark:via-teal-200 dark:to-sky-300">
                    health, rights
                  </span>{" "}
                  and resilience.
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-600 dark:text-slate-300">
                  {currentCopy.heroText}
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <CtaButton href="#programs">
                    {currentCopy.primaryCta}
                  </CtaButton>
                  <CtaButton href="#publications" variant="secondary">
                    {currentCopy.secondaryCta}
                  </CtaButton>
                </div>

                <div className="mt-9 grid gap-3 sm:grid-cols-3">
                  {[
                    "IPPF affiliated",
                    "Community-led programs",
                    "Evidence-based advocacy",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-3 text-sm font-bold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200">
                        <Icon name="check" className="h-4 w-4" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-10 top-10 hidden h-28 w-28 rounded-full bg-amber-300/30 blur-2xl lg:block" />
                <div className="absolute -right-10 bottom-10 hidden h-32 w-32 rounded-full bg-emerald-500/20 blur-2xl lg:block" />
                <img src="/assets/1.png" alt="PSTC Logo" />

                <div className="absolute left-4 top-6 rounded-3xl border border-white/70 bg-white/90 p-4 shadow-2xl shadow-emerald-950/10 backdrop-blur dark:border-white/10 dark:bg-slate-900/90">
                  <p className="text-3xl font-black text-emerald-700 dark:text-emerald-300">
                    48+
                  </p>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Years
                  </p>
                </div>

                <div className="absolute bottom-6 right-4 max-w-[240px] rounded-3xl border border-white/70 bg-slate-950/90 p-5 text-white shadow-2xl shadow-slate-950/20 backdrop-blur dark:border-white/10">
                  <div className="mb-3 flex items-center gap-2 text-emerald-200">
                    <Icon name="map" className="h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em]">
                      Bangladesh
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-slate-200">
                    Health, youth, gender, climate resilience, and skills
                    training in one integrated impact story.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="impact" className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="group rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-900/10 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-emerald-400/30"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition group-hover:scale-110 dark:bg-emerald-400/10 dark:text-emerald-200">
                      <Icon name={stat.icon} />
                    </div>
                    <p className="text-3xl font-black tracking-tight text-slate-950 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm font-extrabold text-slate-700 dark:text-slate-200">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                      {stat.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative">
                <img
                  src="/assets/organization history image.jpg"
                  alt="About PSTC / organization history image"
                />
                <div className="absolute -bottom-6 left-8 right-8 rounded-3xl border border-white/70 bg-white p-6 shadow-2xl shadow-emerald-950/10 dark:border-white/10 dark:bg-slate-900">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
                    Since 1978
                  </p>
                  <p className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
                    Rooted in trust. Built for future impact.
                  </p>
                </div>
              </div>

              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Who We Are"
                  title="A trusted community partner for health, rights, and inclusion."
                  text="PSTC is a non-government, not-for-profit voluntary organization working to improve the quality of life of poor and socially disadvantaged people through inclusive services, advocacy, training, and partnerships."
                />

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      title: "Mission",
                      text: "Deliver inclusive, innovative, quality services and rights-based advocacy.",
                      icon: "spark" as IconName,
                    },
                    {
                      title: "Vision",
                      text: "A society where everyone can live with dignity, rights, and opportunity.",
                      icon: "globe" as IconName,
                    },
                    {
                      title: "Values",
                      text: "Commitment, integrity, transparency, accountability, and team spirit.",
                      icon: "shield" as IconName,
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
                    >
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-emerald-700 dark:bg-white/10 dark:text-emerald-200">
                        <Icon name={item.icon} />
                      </div>
                      <h3 className="font-black text-slate-950 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {values.map((value) => (
                    <span
                      key={value}
                      className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200"
                    >
                      {value}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <CtaButton href="#contact" variant="secondary">
                    Learn About PSTC
                  </CtaButton>
                </div>
              </div>
            </div>
          </section>

          <section id="programs" className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="What We Do"
                title="Five thematic areas. One integrated community impact model."
                text="The landing page organizes PSTC’s work into clear, scannable areas so donors, partners, communities, and young people can quickly understand where PSTC creates value."
              />

              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
                {thematicAreas.map((area) => (
                  <a
                    key={area.title}
                    href="#projects"
                    className={`group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-gradient-to-br ${area.gradient} p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/10 dark:border-white/10 dark:bg-white/[0.04]`}
                  >
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/40 blur-2xl dark:bg-white/10" />
                    <div className="relative">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-lg shadow-slate-950/5 dark:bg-slate-950/70 dark:text-emerald-200">
                        <Icon name={area.icon} />
                      </div>
                      <h3 className="text-lg font-black leading-tight text-slate-950 dark:text-white">
                        {area.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {area.short}
                      </p>
                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-emerald-700 dark:text-emerald-200">
                        Explore area{" "}
                        <Icon
                          name="arrow"
                          className="h-4 w-4 transition group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="bg-white px-4 py-20 dark:bg-white/[0.03] sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeading
                  align="left"
                  eyebrow="Featured Projects"
                  title="Program cards designed for discovery, trust, and conversion."
                  text="Inspired by global NGO sites, the project area uses filters, tags, and short outcomes so visitors can scan quickly without getting lost."
                />

                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      "All",
                      "Health",
                      "Youth",
                      "Gender",
                      "Climate",
                      "Skills",
                    ] as ProjectFilter[]
                  ).map((filter) => (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveFilter(filter)}
                      className={`rounded-full px-4 py-2 text-sm font-black transition ${
                        activeFilter === filter
                          ? "bg-emerald-600 text-white shadow-lg shadow-emerald-700/20 dark:bg-emerald-400 dark:text-slate-950"
                          : "border border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200 dark:hover:text-emerald-200"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {filteredProjects.map((project) => (
                  <article
                    key={project.title}
                    className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-2xl hover:shadow-slate-950/10 dark:border-white/10 dark:bg-slate-950/60 dark:hover:border-emerald-400/30 dark:hover:bg-white/[0.06]"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-200">
                        {project.tag}
                      </span>
                      <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-500 dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
                        {project.status}
                      </span>
                    </div>
                    <div className="mb-5">
                      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-900">
                        <Image
                          src={project.image}
                          alt={`${project.title} project image`}
                          width={800}
                          height={420}
                          className="h-44 w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
                      </div>
                    </div>
                    <h3 className="text-xl font-black text-slate-950 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {project.text}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-white/10">
                      <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                        <Icon name="pin" className="h-4 w-4" />
                        {project.place}
                      </span>
                      <a
                        href="#"
                        className="text-sm font-black text-emerald-700 hover:text-emerald-900 dark:text-emerald-300 dark:hover:text-emerald-200"
                      >
                        View
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-slate-200 bg-[#f8edd6] shadow-2xl shadow-slate-950/10 dark:border-white/10 dark:bg-[#151631]">
              <div className="grid min-h-[500px] lg:grid-cols-[0.95fr_1.05fr_1.1fr]">
                <div className="flex items-center justify-center px-8 py-12 text-center lg:px-10">
                  <h2 className="text-[clamp(3rem,5vw,5.8rem)] font-black uppercase leading-[0.9] tracking-tight text-[#0b2e68]">
                    Our
                    <br />
                    Reach
                  </h2>
                </div>

                <div className="flex flex-col justify-center gap-6 px-4 py-8 sm:px-6 lg:px-0">
                  {[
                    { value: "4.7+", label: "Million people directly reached" },
                    { value: "41+", label: "Projects" },
                    { value: "36", label: "Districts" },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="relative flex min-h-[92px] items-center overflow-hidden bg-[#f7b521] pr-12 text-[#0b2e68] shadow-[0_1px_0_rgba(11,46,104,0.06)]"
                    >
                      <div className="flex w-full items-center px-5 py-4 sm:px-6">
                        <div className="min-w-[118px] text-5xl font-black leading-none sm:text-6xl">
                          {item.value}
                        </div>
                        <div className="ml-4 max-w-[260px] text-[1.7rem] font-extrabold leading-[1.05] sm:text-[2rem]">
                          {item.label}
                        </div>
                      </div>
                      <div className="absolute right-0 top-0 h-full w-14 bg-[#0b2e68] [clip-path:polygon(0_0,100%_50%,0_100%,28%_50%)]" />
                      {index < 2 ? (
                        <div className="absolute bottom-0 left-0 right-14 h-px bg-[#0b2e68]/10" />
                      ) : null}
                    </div>
                  ))}
                  <p className="mt-1 pr-1 text-right text-sm font-semibold text-[#0b2e68]">
                    *Data from FY25 (July '24 - June '25)
                  </p>
                </div>

                <div className="relative overflow-hidden bg-[#171934] px-6 py-6 text-white sm:px-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.16),transparent_0_16%),radial-gradient(circle_at_74%_50%,rgba(255,255,255,0.06),transparent_0_48%)]" />
                  <div className="absolute inset-0 bg-[repeating-radial-gradient(circle_at_72%_18%,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_11px)] opacity-45" />

                  <div className="relative flex min-h-[440px] items-center">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-left sm:left-8">
                      <p className="text-[clamp(3rem,4.6vw,5.5rem)] font-black uppercase leading-[0.92] tracking-tight text-white">
                        Our
                        <br />
                        Presence
                      </p>
                    </div>

                    <div className="relative mx-auto translate-x-12 sm:translate-x-16 lg:translate-x-10">
                      <div className="h-[300px] w-[235px] rounded-[2.25rem] bg-[#f2ab0f] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
                        <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] bg-[#ef9f00]">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.18),transparent_24%),radial-gradient(circle_at_80%_78%,rgba(255,255,255,0.08),transparent_24%)]" />
                          <div className="absolute left-3 top-4 flex h-[228px] w-[168px] flex-wrap gap-1">
                            {Array.from({ length: 5 }).map((_, row) =>
                              Array.from({ length: 4 }).map((__, col) => {
                                const key = `${row}-${col}`;
                                const faded = row === 0 || col === 3;
                                const lighter = row === 1 || row === 2;
                                return (
                                  <span
                                    key={key}
                                    className={`h-[40px] w-[34px] rounded-md ${
                                      faded
                                        ? "bg-white/55"
                                        : lighter
                                          ? "bg-[#f7c84f]/80"
                                          : "bg-[#e99e00]/90"
                                    }`}
                                  />
                                );
                              }),
                            )}
                          </div>
                          <div className="absolute -left-3 top-6 h-9 w-9 rounded-full border border-white/20 bg-white/10" />
                          <div className="absolute -right-2 bottom-8 h-5 w-5 rounded-full bg-amber-300/80 shadow-[0_0_0_8px_rgba(255,255,255,0.08)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-20 text-slate-950 dark:from-slate-950 dark:to-slate-900 dark:text-white sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <img
                src="/assets/beneficiary-safe image placeholder.jpg"
                alt="Impact story / beneficiary-safe image placeholder"
                className="min-h-[500px] rounded-2xl border-slate-200 bg-white dark:border-white/15 dark:bg-slate-900"
              />
              <div>
                <div className="mb-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-emerald-700 dark:bg-white/10 dark:text-emerald-200">
                  Impact Story
                </div>
                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                  Community-centered change, built with trust.
                </h2>
                <p className="mt-6 text-lg leading-9 text-slate-600 dark:text-slate-300">
                  PSTC works alongside communities to make services more
                  inclusive, accessible, and sustainable—from health and
                  protection to skills, youth engagement, and climate
                  resilience.
                </p>
                <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                  <p className="text-2xl font-black text-emerald-700 dark:text-emerald-200">
                    “Design for dignity first. Then make every pathway simple,
                    safe, and useful.”
                  </p>
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    Landing page design principle
                  </p>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    "Inclusive services",
                    "Youth voice",
                    "Transparent impact",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 dark:bg-white/[0.06] dark:ring-white/10"
                    >
                      <Icon
                        name="check"
                        className="mb-3 h-5 w-5 text-emerald-600 dark:text-emerald-300"
                      />
                      <p className="text-sm font-black">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="ucon" className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-emerald-200 bg-gradient-to-br from-emerald-600 via-teal-600 to-sky-700 p-6 shadow-2xl shadow-emerald-900/20 dark:border-white/10 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div className="text-white">
                  <div className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-emerald-50">
                    Youth Platform
                  </div>
                  <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                    uCon: youth voice, learning, and advocacy.
                  </h2>
                  <p className="mt-6 text-lg leading-9 text-emerald-50/90">
                    Explore ideas, ask questions, access CSE modules, join
                    advocacy, and complete assessment-based certification
                    through a youth-friendly learning gateway.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="#"
                      className="rounded-full bg-white px-5 py-3 text-center text-sm font-black text-emerald-800 transition hover:-translate-y-0.5"
                    >
                      Explore uCon
                    </a>
                    <a
                      href="#"
                      className="rounded-full border border-white/35 px-5 py-3 text-center text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      Start Learning
                    </a>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Ask Questions",
                      icon: "mail" as IconName,
                      text: "Safe query submission and helpful youth-friendly guidance.",
                    },
                    {
                      title: "Explore Ideas",
                      icon: "spark" as IconName,
                      text: "Community ideas, youth action, and innovation prompts.",
                    },
                    {
                      title: "CSE Modules",
                      icon: "book" as IconName,
                      text: "Module 1 to 8 designed as learning cards.",
                    },
                    {
                      title: "Certification",
                      icon: "graduation" as IconName,
                      text: "Assessment and certificate preview experience.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.5rem] bg-white/14 p-5 text-white ring-1 ring-white/20 backdrop-blur"
                    >
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/18">
                        <Icon name={item.icon} />
                      </div>
                      <h3 className="font-black">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-emerald-50/85">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="publications" className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="Publications & Knowledge Hub"
                title="Turn reports, research, and newsletters into a searchable trust center."
                text="Global NGO sites use reports, financials, resources, and stories to build credibility. PSTC can make publications one of the homepage’s strongest trust signals."
              />

              <div className="mx-auto mt-10 flex max-w-3xl items-center gap-3 rounded-full border border-slate-200 bg-white p-2 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                <span className="pl-4 text-slate-400">
                  <Icon name="search" className="h-5 w-5" />
                </span>
                <input
                  aria-label="Search publications"
                  placeholder="Search reports, research, newsletters..."
                  className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                />
                <button
                  type="button"
                  className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white dark:bg-white dark:text-slate-950"
                >
                  Search
                </button>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {[
                  "Annual Report",
                  "Audit Report",
                  "Research",
                  "Projanmo Kotha",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-12 grid gap-5 md:grid-cols-3">
                {publications.map((publication) => (
                  <article
                    key={publication.title}
                    className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-200">
                      <Icon name="file" className="h-7 w-7" />
                    </div>
                    <div className="mb-4 flex items-center gap-2">
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-200">
                        {publication.type}
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500 dark:bg-white/10 dark:text-slate-300">
                        {publication.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-slate-950 dark:text-white">
                      {publication.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {publication.text}
                    </p>
                    <div className="mt-6 flex gap-3">
                      <a
                        href="#"
                        className="rounded-full border border-slate-200 px-4 py-2 text-sm font-black text-slate-700 hover:border-emerald-300 hover:text-emerald-700 dark:border-white/10 dark:text-slate-200"
                      >
                        View
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-black text-white hover:bg-emerald-700 dark:bg-emerald-400 dark:text-slate-950"
                      >
                        <Icon name="download" className="h-4 w-4" />
                        Download
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-20 dark:bg-white/[0.03] sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-slate-950/60">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-black text-slate-950 dark:text-white">
                    Latest News
                  </h2>
                  <a
                    href="#"
                    className="text-sm font-black text-emerald-700 dark:text-emerald-300"
                  >
                    View all
                  </a>
                </div>
                <div className="grid gap-4">
                  {news.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-3xl bg-white p-5 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-white/[0.05] dark:ring-white/10"
                    >
                      <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                        <span>{item.date}</span>
                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                        <span className="text-emerald-700 dark:text-emerald-300">
                          {item.label}
                        </span>
                      </div>
                      <h3 className="font-black leading-7 text-slate-950 dark:text-white">
                        {item.title}
                      </h3>
                    </article>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-slate-950/60">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-black text-slate-950 dark:text-white">
                    Upcoming Events
                  </h2>
                  <a
                    href="#"
                    className="text-sm font-black text-emerald-700 dark:text-emerald-300"
                  >
                    Calendar
                  </a>
                </div>
                <div className="grid gap-4">
                  {events.map((event) => (
                    <article
                      key={event.title}
                      className="flex gap-4 rounded-3xl bg-white p-5 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-white/[0.05] dark:ring-white/10"
                    >
                      <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-emerald-600 text-white dark:bg-emerald-400 dark:text-slate-950">
                        <Icon name="calendar" className="h-5 w-5" />
                        <span className="mt-1 text-xs font-black">
                          {event.date}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-black text-slate-950 dark:text-white">
                          {event.title}
                        </h3>
                        <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                          <Icon name="pin" className="h-4 w-4" />
                          {event.location}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow="Partners & Networks"
                title="Credibility through collaboration."
                text="A logo-cloud area builds confidence for donors, communities, affiliates, and technical partners."
              />

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                {partners.map((partner) => (
                  <div
                    key={partner}
                    className="flex h-28 items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 bg-white px-5 text-center text-sm font-black uppercase tracking-[0.12em] text-slate-500 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400 dark:hover:text-emerald-200"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="get-involved" className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div>
                  <div className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
                    Get Involved
                  </div>
                  <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                    Help create impact that lasts.
                  </h2>
                  <p className="mt-6 text-lg leading-9 text-slate-300">
                    Give today, join a training, apply for opportunities, or
                    partner with PSTC to expand inclusive community services.
                  </p>

                  <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                      Donation amount UI
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {["৳500", "৳1000", "৳5000", "Custom"].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          className="rounded-2xl border border-white/15 px-4 py-3 text-sm font-black transition hover:border-emerald-300 hover:bg-emerald-300 hover:text-slate-950"
                        >
                          {amount}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      title: "Give Today",
                      text: "Support inclusive services and community impact.",
                      icon: "hand" as IconName,
                    },
                    {
                      title: "Join Training",
                      text: "Explore certification, policy, and skills learning.",
                      icon: "graduation" as IconName,
                    },
                    {
                      title: "Work With Us",
                      text: "Careers, volunteering, consultancy, and partnership.",
                      icon: "briefcase" as IconName,
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.5rem] bg-white/[0.07] p-5 ring-1 ring-white/10"
                    >
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950">
                        <Icon name={item.icon} />
                      </div>
                      <h3 className="font-black">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-300">
                        {item.text}
                      </p>
                      <a
                        href="#"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-black text-emerald-200"
                      >
                        Start <Icon name="arrow" className="h-4 w-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-slate-200 bg-white p-6 text-center shadow-xl shadow-slate-950/5 dark:border-white/10 dark:bg-white/[0.04] lg:p-10">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200">
                <Icon name="mail" className="h-7 w-7" />
              </div>
              <h2 className="text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
                {currentCopy.newsletterTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
                {currentCopy.newsletterText}
              </p>

              <form
                onSubmit={handleNewsletterSubmit}
                className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 rounded-[1.5rem] bg-slate-100 p-2 dark:bg-slate-950 sm:flex-row"
              >
                <input
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setSubscribed(false);
                  }}
                  type="email"
                  placeholder="Enter your email address"
                  className="min-w-0 flex-1 rounded-2xl border-0 bg-white px-5 py-4 text-sm font-semibold text-slate-900 outline-none placeholder:text-slate-400 dark:bg-white/10 dark:text-white"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-emerald-600 px-6 py-4 text-sm font-black text-white transition hover:bg-emerald-700 dark:bg-emerald-400 dark:text-slate-950"
                >
                  Subscribe
                </button>
              </form>
              {subscribed ? (
                <p className="mt-4 text-sm font-bold text-emerald-700 dark:text-emerald-300">
                  Thank you. This is a frontend-only success message.
                </p>
              ) : (
                <p className="mt-4 text-xs leading-6 text-slate-500 dark:text-slate-400">
                  We respect your privacy. This demo does not send data
                  anywhere.
                </p>
              )}
            </div>
          </section>

          <footer className="bg-[#E53B51] px-4 py-14 text-white sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <img
                    src="/pstc.jpeg"
                    alt="PSTC Logo"
                    className="rounded-xl"
                  />
                </div>
                <p className="max-w-md text-sm leading-7 text-red-100">
                  Population Services and Training Center works to improve
                  quality of life through health, rights, youth engagement,
                  climate resilience, training, and inclusive community
                  development.
                </p>
                <div className="mt-6 flex gap-3">
                  {["f", "in", "x", "yt"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-black uppercase text-white transition hover:bg-white hover:text-red-700"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-red-200">
                  Quick Links
                </h3>
                <div className="grid gap-3 text-sm font-semibold text-red-100">
                  {[
                    "Who We Are",
                    "What We Do",
                    "Impact",
                    "Publications",
                    "uCon",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-red-200">
                  Policies
                </h3>
                <div className="grid gap-3 text-sm font-semibold text-red-100">
                  {[
                    "Privacy Policy",
                    "Safeguarding Policy",
                    "Gender Policy",
                    "SHaPE Policy",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-red-200">
                  Contact
                </h3>
                <div className="grid gap-4 text-sm leading-7 text-red-100">
                  <p className="flex gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-red-200" />
                    PSTC Bhaban, House #5, Main Road, Block B, Aftabnagar,
                    Badda, Dhaka-1212, Bangladesh
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-red-200" />
                    +88 02 222 6602372-5
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-red-200" />
                    pstc@pstc-bgd.org
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/20 pt-6 text-xs font-semibold text-red-200 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 PSTC. All rights reserved.</p>
              <p>
                Frontend only • No backend • Replace image slots with approved
                media
              </p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
