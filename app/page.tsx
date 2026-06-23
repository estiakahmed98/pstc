"use client";

import React, {
  FormEvent,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeContext } from "@/components/shared/theme-provider";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const heroImages = [
  "/hero/hero 1.webp",
  "/hero/hero 2.avif",
  "/hero/hero 3.jpg",
  "/hero/hero 4.jpeg",
  "/hero/hero 5.jpg",
  "/hero/hero 6.png",
  "/hero/hero 7.webp",
  "/hero/hero.jpeg",
];

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
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

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
      gradient: "from-[#009FE3]/20 via-[#ea4335]/10 to-[#ffd54f]/20",
    },
    {
      title: "Youth and Adolescent Development",
      short:
        "Youth voice, adolescent wellbeing, life skills, advocacy, and safe learning spaces.",
      icon: "users" as IconName,
      gradient: "from-[#ea4335]/20 via-[#7cb342]/10 to-[#009FE3]/20",
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
      gradient: "from-[#ffd54f]/20 via-[#009FE3]/10 to-[#7cb342]/20",
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
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#009FE3]/20 bg-[#009FE3]/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#009FE3] dark:border-[#ffd54f]/20 dark:bg-white/10 dark:text-[#ffd54f]">
        <span className="h-2 w-2 rounded-full bg-[#ea4335]" />
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
      className={`group relative overflow-hidden rounded-[2rem] border border-dashed border-[#009FE3]/25 bg-gradient-to-br from-[#009FE3]/10 via-white to-[#ffd54f]/10 shadow-inner dark:border-[#ffd54f]/25 dark:from-slate-900 dark:via-slate-950 dark:to-[#009FE3]/10 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(0,159,227,0.22),transparent_32%),radial-gradient(circle_at_75%_70%,rgba(234,67,53,0.16),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:28px_28px] opacity-50 dark:opacity-20" />
      <div className="relative flex h-full min-h-[220px] flex-col items-center justify-center p-8 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/85 text-[#009FE3] shadow-lg shadow-slate-950/5 ring-1 ring-[#009FE3]/10 dark:bg-white/10 dark:text-[#ffd54f] dark:ring-white/10">
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
        "bg-[#009FE3] text-white shadow-xl shadow-[#009FE3]/25 hover:-translate-y-0.5 hover:bg-[#0085c1] focus:ring-[#009FE3]/20 dark:bg-[#00b0f0] dark:text-slate-950 dark:hover:bg-[#28bbf3] dark:focus:ring-[#00b0f0]/30",
      secondary:
        "border border-slate-200 bg-white text-slate-900 hover:-translate-y-0.5 hover:border-[#ea4335] hover:text-[#ea4335] focus:ring-slate-200 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-[#ea4335]/40 dark:hover:text-[#ffd54f]",
      ghost:
        "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-[#009FE3] focus:ring-slate-200 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-[#ffd54f]",
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
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(0,159,227,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(234,67,53,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(124,179,66,0.12),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_top_left,rgba(0,159,227,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(234,67,53,0.1),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(124,179,66,0.08),transparent_28%)]" />

        <div className="relative z-10">
          <div className="bg-[#009FE3] text-white dark:bg-slate-900">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 text-xs font-semibold sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white">
                  <Icon name="spark" className="h-4 w-4" />
                </span>
                <span>{currentCopy.announcement}</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-white/90">
                <a href="#publications" className="transition hover:text-white">
                  Publications
                </a>
                <span className="h-1 w-1 rounded-full bg-white/50" />
                <a href="#contact" className="transition hover:text-white">
                  Contact
                </a>
                <span className="h-1 w-1 rounded-full bg-white/50" />
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
              <img
                src="/pstc.jpeg"
                alt="PSTC Logo"
                className="h-12 w-28 rounded-2xl object-cover"
              />

              <nav
                className="hidden items-center gap-1 lg:flex"
                aria-label="Main navigation"
              >
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-[#ea4335]/10 hover:text-[#ea4335] dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-[#ffd54f]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="hidden items-center gap-2 lg:flex">
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-[#009FE3] hover:text-[#009FE3] dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
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
                      className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-[#009FE3]/10 hover:text-[#009FE3] dark:text-slate-200 dark:hover:bg-white/10"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#get-involved"
                    onClick={() => setMobileOpen(false)}
                    className="mt-2 rounded-2xl bg-[#ea4335] px-4 py-3 text-center text-sm font-black text-white"
                  >
                    {currentCopy.donate}
                  </a>
                </nav>
              </div>
            ) : null}
          </header>

          <section
            aria-label="Hero carousel"
            className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-slate-950 text-white"
          >
            <div className="relative h-[540px] sm:h-[620px] lg:h-[760px]">
              {heroImages.map((src, index) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    active === index
                      ? "scale-100 opacity-100"
                      : "pointer-events-none scale-[1.03] opacity-0"
                  }`}
                >
                  <img
                    src={src}
                    alt="PSTC Activities"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,12,25,0.86)_0%,rgba(4,12,25,0.5)_30%,rgba(4,12,25,0.1)_62%,rgba(4,12,25,0.45)_100%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent" />

              <div className="relative z-20 flex h-full items-end">
                <div className="w-full px-5 pb-7 pt-20 sm:px-8 sm:pb-10 lg:px-12 lg:pb-14 xl:px-16 xl:pb-16">
                  <div className="max-w-3xl">
                    <span className="inline-flex rounded-full bg-[#009FE3] px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-white shadow-lg shadow-[#009FE3]/30">
                      Population Services and Training Center
                    </span>

                    <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                      Advancing health, rights, and resilience for communities
                    </h1>

                    <p className="mt-5 max-w-xl text-base leading-8 text-white/90 sm:text-lg">
                      For nearly five decades, PSTC has worked with communities,
                      partners, and young peoples.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <CtaButton href="#programs">Explore Our Work</CtaButton>
                      <CtaButton href="#publications" variant="secondary">
                        View Publications
                      </CtaButton>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute right-4 top-4 z-20 rounded-[1.5rem] border border-white/60 bg-white/90 px-5 py-4 shadow-[0_24px_80px_rgba(2,8,23,0.22)] backdrop-blur-xl sm:right-6 sm:top-6 sm:px-6 sm:py-5 dark:border-white/10 dark:bg-slate-900/70">
                <p className="text-3xl font-black text-[#009FE3]">48+</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
                  Years Impact
                </p>
              </div>

              <div className="absolute bottom-20 right-4 z-20 rounded-[1.5rem] bg-[#009FE3] px-5 py-4 text-white shadow-[0_24px_80px_rgba(0,159,227,0.32)] sm:bottom-6 sm:right-6 sm:px-6 sm:py-5">
                <p className="text-2xl font-black sm:text-3xl">100K+</p>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                  Lives Reached
                </p>
              </div>

              <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${
                      active === i
                        ? "h-3.5 w-10 bg-white shadow-lg shadow-black/25"
                        : "h-3 w-3 bg-white/55 hover:bg-white/85"
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>

          <section
            id="impact"
            className="relative z-30 bg-[#E7E7E7] px-4 py-20 sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  <span className="mr-3 text-[#009FE3]">||</span>
                  Our Impact in Numbers
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-sm font-semibold leading-7 text-slate-700 sm:text-base">
                  PSTC works with communities, partners, and young people to
                  improve access to health, rights, skills, protection, and
                  opportunity across Bangladesh.
                </p>
              </div>

              <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
                {stats.map((stat, index) => {
                  const colors = [
                    "bg-[#E53B51]",
                    "bg-[#F4B41A]",
                    "bg-[#77B151]",
                    "bg-[#F04B36]",
                    "bg-[#009FE3]",
                    "bg-[#0B78A5]",
                  ];

                  return (
                    <div
                      key={stat.label}
                      className="group relative flex min-h-[170px] flex-col items-center justify-center text-center text-white transition duration-300 hover:-translate-y-2"
                    >
                      <div
                        className={`absolute inset-0 rotate-[-2deg] rounded-[1.2rem] ${colors[index % colors.length]} shadow-xl shadow-slate-950/10`}
                        style={{
                          clipPath:
                            "polygon(5% 8%, 96% 3%, 92% 20%, 99% 38%, 94% 57%, 98% 78%, 88% 96%, 63% 92%, 43% 99%, 20% 92%, 4% 97%, 8% 76%, 1% 58%, 7% 38%, 2% 20%)",
                        }}
                      />

                      <div className="relative z-10 px-4">
                        <div className="mb-3 flex items-start justify-center gap-2">
                          <span className="text-5xl font-black leading-none">
                            {stat.value}
                          </span>
                        </div>

                        <p className="mx-auto max-w-[130px] text-sm font-black uppercase leading-tight tracking-wide">
                          {stat.label}
                        </p>

                        <div className="mx-auto mt-4 flex h-12 w-12 items-center justify-center text-white/95">
                          <Icon name={stat.icon} className="h-10 w-10" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section
            id="about"
            className="relative overflow-hidden bg-gradient-to-br from-[#EAF8FD] via-white to-[#FFF7E3] px-4 py-24 sm:px-6 lg:px-8"
          >
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#009FE3]/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#E53B51]/10 blur-3xl" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative">
                <div className="overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-2xl shadow-slate-950/10">
                  <img
                    src="/assets/organization history.jpeg"
                    alt="About PSTC / organization history image"
                    className="h-[460px] w-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-8 left-8 right-8 rounded-3xl border border-white/80 bg-white/95 p-6 shadow-2xl backdrop-blur">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#E53B51]">
                    Since 1978
                  </p>
                  <p className="mt-2 text-2xl font-black text-[#009FE3]">
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
                      color: "#009FE3",
                      bg: "bg-[#009FE3]/10",
                    },
                    {
                      title: "Vision",
                      text: "A society where everyone can live with dignity, rights, and opportunity.",
                      icon: "globe" as IconName,
                      color: "#77B151",
                      bg: "bg-[#77B151]/10",
                    },
                    {
                      title: "Values",
                      text: "Commitment, integrity, transparency, accountability, and team spirit.",
                      icon: "shield" as IconName,
                      color: "#E53B51",
                      bg: "bg-[#E53B51]/10",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-950/5 transition hover:-translate-y-1 hover:shadow-2xl"
                    >
                      <div
                        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg}`}
                        style={{ color: item.color }}
                      >
                        <Icon name={item.icon} />
                      </div>

                      <h3 className="font-black text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {values.map((value, index) => {
                    const colors = [
                      "border-[#009FE3]/30 bg-[#009FE3]/10 text-[#009FE3]",
                      "border-[#E53B51]/30 bg-[#E53B51]/10 text-[#E53B51]",
                      "border-[#77B151]/30 bg-[#77B151]/10 text-[#77B151]",
                      "border-[#F4B41A]/40 bg-[#F4B41A]/15 text-[#B97800]",
                    ];

                    return (
                      <span
                        key={value}
                        className={`rounded-full border px-4 py-2 text-xs font-black ${colors[index % colors.length]}`}
                      >
                        {value}
                      </span>
                    );
                  })}
                </div>

                <div className="mt-8">
                  <CtaButton href="#contact" variant="secondary">
                    Learn About PSTC
                  </CtaButton>
                </div>
              </div>
            </div>
          </section>

          <section
            id="programs"
            className="bg-white px-4 py-24 sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-5 lg:grid-cols-3">
                {/* Left Feature Card */}
                <div className="flex min-h-[320px] flex-col justify-center rounded-[2rem] bg-[#F4B41A] p-8 text-slate-950 shadow-xl shadow-[#F4B41A]/20 lg:p-10">
                  <p className="text-3xl font-light">Our</p>

                  <h2 className="mt-3 text-4xl font-black leading-tight">
                    Focus Areas
                  </h2>

                  <p className="mt-6 max-w-sm text-sm font-medium leading-7 text-slate-800">
                    PSTC works across health, youth, gender, climate, skills,
                    advocacy and community development to create sustainable
                    impact.
                  </p>
                </div>

                {/* Focus Area Cards */}
                {thematicAreas.map((area) => (
                  <a
                    key={area.title}
                    href="#projects"
                    className="
            group
            min-h-[320px]
            rounded-[2rem]
            border
            border-slate-200
            bg-white
            p-8
            shadow-xl
            shadow-slate-950/5
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#009FE3]
            hover:bg-[#009FE3]
            hover:shadow-2xl
            hover:shadow-[#009FE3]/25
          "
                  >
                    <div
                      className="
              h-full
              rounded-[1.5rem]
              border
              border-dashed
              border-slate-300
              p-6
              transition-colors
              duration-300
              group-hover:border-white/40
            "
                    >
                      {/* Icon */}
                      <div
                        className="
                mb-7
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-[#009FE3]/10
                text-[#009FE3]
                transition-all
                duration-300
                group-hover:bg-white/20
                group-hover:text-white
              "
                      >
                        <Icon name={area.icon} className="h-8 w-8" />
                      </div>

                      {/* Title */}
                      <h3
                        className="
                max-w-xs
                text-2xl
                font-black
                uppercase
                leading-snug
                text-slate-950
                transition-colors
                duration-300
                group-hover:text-white
              "
                      >
                        {area.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="
                mt-6
                text-sm
                leading-7
                text-slate-600
                transition-colors
                duration-300
                group-hover:text-white/90
              "
                      >
                        {area.short}
                      </p>

                      {/* Button */}
                      <div className="mt-8">
                        <span
                          className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#009FE3]
                  px-5
                  py-3
                  text-sm
                  font-black
                  text-[#009FE3]
                  transition-all
                  duration-300
                  group-hover:border-white
                  group-hover:bg-white
                  group-hover:text-[#009FE3]
                "
                        >
                          Learn More
                          <Icon
                            name="arrow"
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          />
                        </span>
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
                          ? "bg-[#009FE3] text-white shadow-lg shadow-[#009FE3]/20 dark:bg-[#ffd54f] dark:text-slate-950"
                          : "border border-slate-200 bg-white text-slate-700 hover:border-[#009FE3] hover:text-[#009FE3] dark:border-white/10 dark:bg-white/10 dark:text-slate-200 dark:hover:text-[#ffd54f]"
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
                    className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#ea4335]/30 hover:bg-white hover:shadow-2xl hover:shadow-slate-950/10 dark:border-white/10 dark:bg-slate-950/60 dark:hover:border-[#ffd54f]/30 dark:hover:bg-white/[0.06]"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="rounded-full bg-[#009FE3]/10 px-3 py-1 text-xs font-black text-[#009FE3] dark:bg-[#ffd54f]/10 dark:text-[#ffd54f]">
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
                        className="text-sm font-black text-[#009FE3] hover:text-[#ea4335] dark:text-[#ffd54f] dark:hover:text-white"
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
                        <div className="ml-4 max-w-[360px] text-[1.7rem] font-extrabold leading-[1.05] sm:text-[2rem]">
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
                <div className="mb-4 inline-flex rounded-full bg-[#ea4335]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#ea4335] dark:bg-white/10 dark:text-[#ffd54f]">
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
                  <p className="text-2xl font-black text-[#009FE3] dark:text-[#ffd54f]">
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
                        className="mb-3 h-5 w-5 text-[#7cb342] dark:text-[#ffd54f]"
                      />
                      <p className="text-sm font-black">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="ucon" className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-[#009FE3]/25 bg-gradient-to-br from-[#009FE3] via-[#ea4335] to-[#7cb342] p-6 shadow-2xl shadow-slate-950/20 dark:border-white/10 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div className="text-white">
                  <div className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white">
                    Youth Platform
                  </div>
                  <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                    uCon: youth voice, learning, and advocacy.
                  </h2>
                  <p className="mt-6 text-lg leading-9 text-white/90">
                    Explore ideas, ask questions, access CSE modules, join
                    advocacy, and complete assessment-based certification
                    through a youth-friendly learning gateway.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="#"
                      className="rounded-full bg-white px-5 py-3 text-center text-sm font-black text-[#009FE3] transition hover:-translate-y-0.5"
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
                      <p className="mt-2 text-sm leading-6 text-white/85">
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
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffd54f]/15 text-[#ea4335] dark:bg-[#ffd54f]/10 dark:text-[#ffd54f]">
                      <Icon name="file" className="h-7 w-7" />
                    </div>
                    <div className="mb-4 flex items-center gap-2">
                      <span className="rounded-full bg-[#009FE3]/10 px-3 py-1 text-xs font-black text-[#009FE3] dark:bg-[#ffd54f]/10 dark:text-[#ffd54f]">
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
                        className="rounded-full border border-slate-200 px-4 py-2 text-sm font-black text-slate-700 hover:border-[#009FE3] hover:text-[#009FE3] dark:border-white/10 dark:text-slate-200"
                      >
                        View
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 rounded-full bg-[#ea4335] px-4 py-2 text-sm font-black text-white hover:bg-[#d93025] dark:bg-[#ffd54f] dark:text-slate-950"
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

          <section className="bg-[#F3F8F1] px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 flex items-center justify-between">
                <h2 className="text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">
                  Updates
                </h2>

                <div className="hidden gap-5 sm:flex">
                  <button
                    type="button"
                    className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-slate-500 text-slate-700 transition hover:border-[#009FE3] hover:bg-[#009FE3] hover:text-white"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-slate-500 text-slate-700 transition hover:border-[#009FE3] hover:bg-[#009FE3] hover:text-white"
                  >
                    →
                  </button>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    date: "June 10, 2026",
                    title:
                      "PSTC launches integrated community health initiative",
                    text: "Strengthening primary health access and referral support for underserved communities across Bangladesh.",
                    image: "/assets/Urban Health Care project image.jpeg",
                    color: "text-[#77B151]",
                  },
                  {
                    date: "June 10, 2026",
                    title:
                      "Youth dialogue on SRHR, climate resilience, and inclusion",
                    text: "Young people joined community dialogue sessions focused on rights, resilience, and inclusive development.",
                    image: "/assets/FOCUS project image.jpg",
                    color: "text-[#F4B41A]",
                  },
                  {
                    date: "June 10, 2026",
                    title: "New community paramedic training cohort opens",
                    text: "Training opportunities continue to build practical skills, employment readiness, and community care capacity.",
                    image:
                      "/assets/Learning, employability, vocational readiness, and practical skills.jpg",
                    color: "text-[#E53B51]",
                  },
                ].map((item) => (
                  <article
                    key={item.title}
                    className="group overflow-hidden rounded-[2rem] bg-white p-4 shadow-xl shadow-slate-950/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className="relative overflow-hidden rounded-[1.5rem]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={900}
                        height={560}
                        className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-black text-[#0B6B43] shadow-lg">
                        ↗
                      </div>
                    </div>

                    <div className="px-1 pb-4 pt-6">
                      <p className={`text-lg font-black ${item.color}`}>
                        {item.date}
                      </p>

                      <h3 className="mt-4 text-2xl font-black leading-tight text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-4 line-clamp-2 text-base leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-12 flex justify-center gap-2">
                {[0, 1, 2, 3].map((dot) => (
                  <button
                    key={dot}
                    type="button"
                    className={`h-4 w-4 rounded-full border border-[#0B6B43] ${
                      dot === 0 ? "bg-[#0B6B43]" : "bg-transparent"
                    }`}
                  />
                ))}
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
                    className="flex h-28 items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 bg-white px-5 text-center text-sm font-black uppercase tracking-[0.12em] text-slate-500 transition hover:border-[#009FE3] hover:text-[#009FE3] dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400 dark:hover:text-[#ffd54f]"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="get-involved" className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#E5A923_0%,#F1C64A_50%,#E5A923_100%)] p-6 text-[#0B2E68] shadow-2xl shadow-[#E5A923]/30 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div>
                  <div className="mb-4 inline-flex rounded-full bg-[#0B2E68]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#0B2E68]">
                    Get Involved
                  </div>

                  <h2 className="text-4xl font-black tracking-tight text-[#0B2E68] sm:text-5xl">
                    Help create impact that lasts.
                  </h2>

                  <p className="mt-6 text-lg leading-9 text-[#3D2F0A]">
                    Give today, join a training, apply for opportunities, or
                    partner with PSTC to expand inclusive community services.
                  </p>

                  <div className="mt-8 rounded-[2rem] border border-[#0B2E68]/15 bg-[#F8E4A8] p-5 shadow-lg shadow-[#0B2E68]/5">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0B2E68]/70">
                      Donation amount UI
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {["৳500", "৳1000", "৳5000", "Custom"].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          className="rounded-2xl border border-[#0B2E68]/15 bg-white/70 px-4 py-3 text-sm font-black text-[#0B2E68] transition hover:bg-[#0B2E68] hover:text-white"
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
                      className="rounded-[1.5rem] bg-[#F8E4A8] p-5 shadow-lg shadow-[#0B2E68]/5 ring-1 ring-[#0B2E68]/10 transition hover:-translate-y-1 hover:bg-white/80"
                    >
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B2E68] text-white shadow-lg shadow-[#0B2E68]/20">
                        <Icon name={item.icon} />
                      </div>

                      <h3 className="font-black text-[#0B2E68]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[#3D2F0A]">
                        {item.text}
                      </p>

                      <a
                        href="#"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#0B2E68] transition hover:gap-3"
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
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#009FE3]/10 text-[#009FE3] dark:bg-[#ffd54f]/10 dark:text-[#ffd54f]">
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
                  className="rounded-2xl bg-[#009FE3] px-6 py-4 text-sm font-black text-white transition hover:bg-[#007db3] dark:bg-[#ffd54f] dark:text-slate-950"
                >
                  Subscribe
                </button>
              </form>
              {subscribed ? (
                <p className="mt-4 text-sm font-bold text-[#ea4335] dark:text-[#ffd54f]">
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
                    src="/logo-white.png"
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
