"use client";

import React, {
  FormEvent,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Link from "next/link";
import { ThemeContext } from "@/components/shared/theme-provider";
import { useTranslation } from "@/hooks/use-translation";
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
  const { t, language, setLanguage } = useTranslation();
  const isDark = themeContext?.theme === "dark";
  const [mobileOpen, setMobileOpen] = useState(false);
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

  const navItems = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.programs"), href: "#programs" },
    { label: t("nav.impact"), href: "#impact" },
    { label: t("nav.publications"), href: "#publications" },
    { label: t("nav.ucon"), href: "#ucon" },
    { label: t("nav.jobs"), href: "#get-involved" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const stats = [
    {
      value: "48+",
      label: t("landing.stats_years_label"),
      caption: t("landing.stats_years_caption"),
      icon: "spark" as IconName,
    },
    {
      value: "5",
      label: t("landing.stats_thematic_label"),
      caption: t("landing.stats_thematic_caption"),
      icon: "leaf" as IconName,
    },
    {
      value: "8+",
      label: t("landing.stats_projects_label"),
      caption: t("landing.stats_projects_caption"),
      icon: "briefcase" as IconName,
    },
    {
      value: "3",
      label: t("landing.stats_locations_label"),
      caption: t("landing.stats_locations_caption"),
      icon: "heart" as IconName,
    },
    {
      value: "100K+",
      label: t("landing.stats_people_label"),
      caption: t("landing.stats_people_caption"),
      icon: "users" as IconName,
    },
    {
      value: "25+",
      label: t("landing.stats_partners_label"),
      caption: t("landing.stats_partners_caption"),
      icon: "globe" as IconName,
    },
  ];

  const values = t("about.values_list", { returnObjects: true }) as string[];

  const thematicAreas = [
    {
      title: t("programs.areas.health.title"),
      short: t("programs.areas.health.description"),
      icon: "heart" as IconName,
      gradient: "from-[#009FE3]/20 via-[#ea4335]/10 to-[#ffd54f]/20",
    },
    {
      title: t("programs.areas.youth.title"),
      short: t("programs.areas.youth.description"),
      icon: "users" as IconName,
      gradient: "from-[#ea4335]/20 via-[#7cb342]/10 to-[#009FE3]/20",
    },
    {
      title: t("programs.areas.gender.title"),
      short: t("programs.areas.gender.description"),
      icon: "shield" as IconName,
      gradient: "from-violet-500/20 via-fuchsia-500/10 to-rose-500/20",
    },
    {
      title: t("programs.areas.climate.title"),
      short: t("programs.areas.climate.description"),
      icon: "leaf" as IconName,
      gradient: "from-[#ffd54f]/20 via-[#009FE3]/10 to-[#7cb342]/20",
    },
    {
      title: t("programs.areas.skills.title"),
      short: t("programs.areas.skills.description"),
      icon: "graduation" as IconName,
      gradient: "from-amber-500/20 via-orange-500/10 to-yellow-500/20",
    },
  ];

  const projects = [
    {
      title: t("projects.projects.urban_health.title"),
      tag: t("projects.filters.health"),
      status: t("common.active"),
      place: t("projects.projects.urban_health.place"),
      text: t("projects.projects.urban_health.text"),
      image: "/assets/Urban Health Care project image.jpeg",
    },
    {
      title: t("projects.projects.focus.title"),
      tag: t("projects.filters.youth"),
      status: t("common.active"),
      place: t("projects.projects.focus.place"),
      text: t("projects.projects.focus.text"),
      image: "/assets/FOCUS project image.jpg",
    },
    {
      title: t("projects.projects.pud.title"),
      tag: t("projects.filters.health"),
      status: t("common.program"),
      place: t("projects.projects.pud.place"),
      text: t("projects.projects.pud.text"),
      image: "/assets/Supportive service pathways for persons.jpg",
    },
    {
      title: t("projects.projects.cmp.title"),
      tag: t("projects.filters.gender"),
      status: t("common.community"),
      place: t("projects.projects.cmp.place"),
      text: t("projects.projects.cmp.text"),
      image: "/assets/Community mobilization for rights.jpg",
    },
    {
      title: t("projects.projects.sufasec.title"),
      tag: t("projects.filters.gender"),
      status: t("common.protection"),
      place: t("projects.projects.sufasec.place"),
      text: t("projects.projects.sufasec.text"),
      image: "/assets/A child protection initiative against.webp",
    },
    {
      title: t("projects.projects.levis.title"),
      tag: t("projects.filters.skills"),
      status: t("common.training"),
      place: t("projects.projects.levis.place"),
      text: t("projects.projects.levis.text"),
      image:
        "/assets/Learning, employability, vocational readiness, and practical skills.jpg",
    },
    {
      title: t("projects.projects.hope.title"),
      tag: t("projects.filters.health"),
      status: t("common.outreach"),
      place: t("projects.projects.hope.place"),
      text: t("projects.projects.hope.text"),
      image:
        "/assets/Health Outreach and Protection Effort for inclusive health service access.webp",
    },
    {
      title: t("projects.projects.sprint.title"),
      tag: t("projects.filters.climate"),
      status: t("common.response"),
      place: t("projects.projects.sprint.place"),
      text: t("projects.projects.sprint.text"),
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
      title: t("publications.publications.annual_report.title"),
      type: t("publications.categories.0"),
      year: t("publications.publications.annual_report.year"),
      text: t("publications.publications.annual_report.text"),
    },
    {
      title: t("publications.publications.projanmo_kotha.title"),
      type: t("publications.categories.3"),
      year: t("publications.publications.projanmo_kotha.year"),
      text: t("publications.publications.projanmo_kotha.text"),
    },
    {
      title: t("publications.publications.research_brief.title"),
      type: t("publications.categories.2"),
      year: t("publications.publications.research_brief.year"),
      text: t("publications.publications.research_brief.text"),
    },
  ];

  const news = [
    {
      date: t("updates.items.health_initiative.date"),
      label: t("common.program"),
      title: t("updates.items.health_initiative.title"),
    },
    {
      date: t("updates.items.youth_dialogue.date"),
      label: t("common.active"),
      title: t("updates.items.youth_dialogue.title"),
    },
    {
      date: t("updates.items.paramedic_training.date"),
      label: t("common.training"),
      title: t("updates.items.paramedic_training.title"),
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

  const partners = t("partners.list", { returnObjects: true }) as string[];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => {
      const filterMap: Record<string, string> = {
        All: "All",
        Health: t("projects.filters.health"),
        Youth: t("projects.filters.youth"),
        Gender: t("projects.filters.gender"),
        Climate: t("projects.filters.climate"),
        Skills: t("projects.filters.skills"),
      };
      return project.tag === filterMap[activeFilter];
    });
  }, [activeFilter, t, projects]);

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
    className = "",
  }: {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    href?: string;
    className?: string;
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
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
        <Icon name="arrow" className="h-4 w-4" />
      </a>
    );
  };

  return (
    <main>
      <div className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfd_18%,#eef5f9_52%,#f9fafb_100%)] text-slate-950 antialiased dark:bg-slate-950 dark:text-white">
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(0,159,227,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(234,67,53,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(124,179,66,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_top_left,rgba(0,159,227,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(234,67,53,0.1),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(124,179,66,0.08),transparent_28%)]" />

        <div className="relative z-10">
          {/* Top Bar */}
          <div className="h-11 border-b border-white/10 bg-[#0193CD] text-white">
            <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                  <Icon name="spark" className="h-3.5 w-3.5" />
                </span>

                <span className="text-xs font-semibold whitespace-nowrap">
                  {t("landing.announcement")}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden items-center gap-4 lg:flex">
                  <a
                    href="#publications"
                    className="text-xs font-medium text-white/90 hover:text-white"
                  >
                    {t("nav.publications")}
                  </a>

                  <a
                    href="#contact"
                    className="text-xs font-medium text-white/90 hover:text-white"
                  >
                    {t("nav.contact")}
                  </a>

                  <a
                    href="#ucon"
                    className="text-xs font-medium text-white/90 hover:text-white"
                  >
                    {t("nav.ucon")}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setLanguage(language === "en" ? "bn" : "en")}
                  className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white hover:bg-white/25"
                >
                  {t("btn.language")}
                </button>

                <button
                  type="button"
                  onClick={handleThemeToggle}
                  aria-label="Toggle theme"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 hover:bg-white/25"
                >
                  <Icon
                    name={isDark ? "sun" : "moon"}
                    className="h-3.5 w-3.5"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Header */}
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
                <Link
                  href="/login"
                  className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-[#009FE3] hover:text-[#009FE3] dark:border-white/10 dark:bg-white/10 dark:text-slate-200 dark:hover:border-[#ffd54f]/40 dark:hover:text-[#ffd54f]"
                >
                  {t("nav.login")}
                </Link>
                <CtaButton href="#get-involved">{t("nav.donate")}</CtaButton>
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
                    {t("nav.donate")}
                  </a>
                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-bold text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                  >
                    {t("nav.login")}
                  </Link>
                </nav>
              </div>
            ) : null}
          </header>

          {/* Hero Section */}
          <section
            aria-label="Hero carousel"
            className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-slate-950 text-white"
          >
            <div className="relative min-h-[760px] sm:h-[620px] sm:min-h-0 lg:h-[760px]">
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
                <div className="w-full px-5 pb-24 pt-20 sm:px-8 sm:pb-10 lg:px-12 lg:pb-14 xl:px-16 xl:pb-16">
                  <div className="max-w-[22rem] sm:max-w-3xl">
                    <span className="inline-flex rounded-full bg-[#009FE3] px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-white shadow-lg shadow-[#009FE3]/30">
                      {t("landing.hero_label")}
                    </span>

                    <h1 className="mt-5 max-w-4xl text-[2.75rem] font-black leading-[0.9] tracking-tight text-white sm:text-5xl sm:leading-[0.95] md:text-6xl lg:text-7xl">
                      {t("landing.hero_title")}
                    </h1>

                    <p className="mt-5 max-w-md text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                      {t("landing.hero_text")}
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <CtaButton href="#programs" className="w-full sm:w-auto">
                        {t("landing.primary_cta")}
                      </CtaButton>
                      <CtaButton
                        href="#publications"
                        variant="secondary"
                        className="w-full sm:w-auto"
                      >
                        {t("landing.secondary_cta")}
                      </CtaButton>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3 sm:hidden">
                      <div className="rounded-[1.35rem] border border-white/50 bg-white/92 px-4 py-4 text-slate-900 shadow-[0_18px_50px_rgba(2,8,23,0.22)] backdrop-blur-xl">
                        <p className="text-3xl font-black text-[#009FE3]">
                          48+
                        </p>
                        <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-slate-500">
                          {t("landing.years_impact")}
                        </p>
                      </div>

                      <div className="rounded-[1.35rem] bg-[#009FE3] px-4 py-4 text-white shadow-[0_18px_50px_rgba(0,159,227,0.32)]">
                        <p className="text-3xl font-black">100K+</p>
                        <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/90">
                          {t("landing.lives_reached")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute right-6 top-6 z-20 hidden rounded-[1.5rem] border border-white/60 bg-white/90 px-6 py-5 shadow-[0_24px_80px_rgba(2,8,23,0.22)] backdrop-blur-xl sm:block dark:border-white/10 dark:bg-slate-900/70">
                <p className="text-3xl font-black text-[#009FE3]">48+</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
                  {t("landing.years_impact")}
                </p>
              </div>

              <div className="absolute bottom-6 right-6 z-20 hidden rounded-[1.5rem] bg-[#009FE3] px-6 py-5 text-white shadow-[0_24px_80px_rgba(0,159,227,0.32)] sm:block">
                <p className="text-2xl font-black sm:text-3xl">100K+</p>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                  {t("landing.lives_reached")}
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

          {/* Impact Section */}
          <section
            id="impact"
            className="relative z-30 bg-[linear-gradient(180deg,#f6fafc_0%,#edf5f8_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
          >
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  <span className="mr-3 text-[#009FE3]">||</span>
                  {t("landing.impact_title")}
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-sm font-semibold leading-7 text-slate-700 sm:text-base">
                  {t("landing.impact_text")}
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

          {/* About Section */}
          <section
            id="about"
            className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfd_100%)] px-4 py-20 sm:px-6 lg:px-8"
          >
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#009FE3]/8 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#E53B51]/8 blur-3xl" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative">
                <div className="overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-2xl shadow-slate-950/10">
                  <img
                    src="/assets/organization history.jpeg"
                    alt={t("about.title")}
                    className="h-[460px] w-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-8 left-8 right-8 rounded-3xl border border-white/80 bg-white/95 p-6 shadow-2xl backdrop-blur">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#E53B51]">
                    {t("about.since")}
                  </p>
                  <p className="mt-2 text-2xl font-black text-[#009FE3]">
                    {t("about.tagline")}
                  </p>
                </div>
              </div>

              <div>
                <SectionHeading
                  align="left"
                  eyebrow={t("about.subtitle")}
                  title={t("about.heading")}
                  text={t("about.description")}
                />

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      title: t("about.mission"),
                      text: t("about.mission_text"),
                      icon: "spark" as IconName,
                      color: "#009FE3",
                      bg: "bg-[#009FE3]/10",
                    },
                    {
                      title: t("about.vision"),
                      text: t("about.vision_text"),
                      icon: "globe" as IconName,
                      color: "#77B151",
                      bg: "bg-[#77B151]/10",
                    },
                    {
                      title: t("about.values"),
                      text: t("about.values_text"),
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
                  {values.map((value: string, index: number) => {
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
                    {t("about.cta")}
                  </CtaButton>
                </div>
              </div>
            </div>
          </section>

          {/* Programs Section */}
          <section
            id="programs"
            className="bg-[linear-gradient(180deg,#f9fbfc_0%,#f4f8fa_100%)] px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
          >
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-5 lg:grid-cols-3">
                <div className="flex min-h-[320px] flex-col justify-center rounded-[2rem] bg-[#F4B41A] p-8 text-slate-950 shadow-xl shadow-[#F4B41A]/20 lg:p-10">
                  <p className="text-3xl font-light">{t("programs.title")}</p>

                  <h2 className="mt-3 text-4xl font-black leading-tight">
                    {t("programs.subtitle")}
                  </h2>

                  <p className="mt-6 max-w-sm text-sm font-medium leading-7 text-slate-800">
                    {t("programs.description")}
                  </p>
                </div>

                {thematicAreas.map((area) => (
                  <a
                    key={area.title}
                    href="#projects"
                    className="group min-h-[320px] rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-950/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#009FE3] hover:bg-[#009FE3] hover:shadow-2xl hover:shadow-[#009FE3]/25"
                  >
                    <div className="h-full rounded-[1.5rem] border border-dashed border-slate-300 p-6 transition-colors duration-300 group-hover:border-white/40">
                      <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#009FE3]/10 text-[#009FE3] transition-all duration-300 group-hover:bg-white/20 group-hover:text-white">
                        <Icon name={area.icon} className="h-8 w-8" />
                      </div>

                      <h3 className="max-w-xs text-2xl font-black uppercase leading-snug text-slate-950 transition-colors duration-300 group-hover:text-white">
                        {area.title}
                      </h3>

                      <p className="mt-6 text-sm leading-7 text-slate-600 transition-colors duration-300 group-hover:text-white/90">
                        {area.short}
                      </p>

                      <div className="mt-8">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#009FE3] px-5 py-3 text-sm font-black text-[#009FE3] transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#009FE3]">
                          {t("programs.learn_more")}
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

          {/* Projects Section */}
          <section
            id="projects"
            className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfd_100%)] px-4 py-20 sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeading
                  align="left"
                  eyebrow={t("projects.subtitle")}
                  title={t("projects.heading")}
                  text={t("projects.description")}
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
                      {filter === "All"
                        ? t("projects.filters.all")
                        : t(`projects.filters.${filter.toLowerCase()}`)}
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
                        {t("btn.view")}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Reach Section */}
          <section className="bg-[linear-gradient(180deg,#f7fbfd_0%,#eef3f7_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-slate-200 bg-[linear-gradient(135deg,#fff9ea_0%,#f2f7fa_48%,#e9eff8_100%)] shadow-2xl shadow-slate-950/10 dark:border-white/10 dark:bg-[#151631]">
              <div className="grid min-h-[500px] lg:grid-cols-[0.95fr_1.05fr_1.1fr]">
                <div className="flex items-center justify-center px-8 py-12 text-center lg:px-10">
                  <h2 className="text-[clamp(3rem,5vw,5.8rem)] font-black uppercase leading-[0.9] tracking-tight text-[#0b2e68]">
                    {t("impact.title")}
                  </h2>
                </div>

                <div className="flex flex-col justify-center gap-6 px-4 py-8 sm:px-6 lg:px-0">
                  {[
                    { value: "4.7+", label: t("impact.stats.people_reached") },
                    { value: "41+", label: t("impact.stats.projects") },
                    { value: "36", label: t("impact.stats.districts") },
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
                    {t("impact.stats.data_note")}
                  </p>
                </div>

                <div className="relative overflow-hidden bg-[#171934] px-6 py-6 text-white sm:px-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.16),transparent_0_16%),radial-gradient(circle_at_74%_50%,rgba(255,255,255,0.06),transparent_0_48%)]" />
                  <div className="absolute inset-0 bg-[repeating-radial-gradient(circle_at_72%_18%,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_11px)] opacity-45" />

                  <div className="relative flex min-h-[440px] items-center">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-left sm:left-8">
                      <p className="text-[clamp(3rem,4.6vw,5.5rem)] font-black uppercase leading-[0.92] tracking-tight text-white">
                        {t("impact.subtitle")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Story Section */}
          <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-20 text-slate-950 dark:from-slate-950 dark:to-slate-900 dark:text-white sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <img
                src="/assets/beneficiary-safe image placeholder.jpg"
                alt="Impact story / beneficiary-safe image placeholder"
                className="min-h-[500px] rounded-2xl border-slate-200 bg-white dark:border-white/15 dark:bg-slate-900"
              />
              <div>
                <div className="mb-4 inline-flex rounded-full bg-[#ea4335]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#ea4335] dark:bg-white/10 dark:text-[#ffd54f]">
                  {t("impact.subtitle")}
                </div>
                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                  {t("impact.heading")}
                </h2>
                <p className="mt-6 text-lg leading-9 text-slate-600 dark:text-slate-300">
                  {t("impact.description")}
                </p>
                <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                  <p className="text-2xl font-black text-[#009FE3] dark:text-[#ffd54f]">
                    {t("impact.design_principle")}
                  </p>
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    {t("impact.design_label")}
                  </p>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {t("impact.features", { returnObjects: true }).map(
                    (item: string) => (
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
                    ),
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* uCon Section */}
          <section id="ucon" className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-[#009FE3]/25 bg-gradient-to-br from-[#009FE3] via-[#ea4335] to-[#7cb342] p-6 shadow-2xl shadow-slate-950/20 dark:border-white/10 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div className="text-white">
                  <div className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white">
                    {t("ucon.subtitle")}
                  </div>
                  <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                    {t("ucon.title")}
                  </h2>
                  <p className="mt-6 text-lg leading-9 text-white/90">
                    {t("ucon.description")}
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="#"
                      className="rounded-full bg-white px-5 py-3 text-center text-sm font-black text-[#009FE3] transition hover:-translate-y-0.5"
                    >
                      {t("ucon.cta_primary")}
                    </a>
                    <a
                      href="#"
                      className="rounded-full border border-white/35 px-5 py-3 text-center text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      {t("ucon.cta_secondary")}
                    </a>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: t("ucon.features.ask.title"),
                      icon: "mail" as IconName,
                      text: t("ucon.features.ask.text"),
                    },
                    {
                      title: t("ucon.features.explore.title"),
                      icon: "spark" as IconName,
                      text: t("ucon.features.explore.text"),
                    },
                    {
                      title: t("ucon.features.cse.title"),
                      icon: "book" as IconName,
                      text: t("ucon.features.cse.text"),
                    },
                    {
                      title: t("ucon.features.certification.title"),
                      icon: "graduation" as IconName,
                      text: t("ucon.features.certification.text"),
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

          {/* Publications Section */}
          <section id="publications" className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow={t("publications.subtitle")}
                title={t("publications.heading")}
                text={t("publications.description")}
              />

              <div className="mx-auto mt-10 flex max-w-3xl items-center gap-3 rounded-full border border-slate-200 bg-white p-2 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                <span className="pl-4 text-slate-400">
                  <Icon name="search" className="h-5 w-5" />
                </span>
                <input
                  aria-label="Search publications"
                  placeholder={t("publications.search_placeholder")}
                  className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                />
                <button
                  type="button"
                  className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white dark:bg-white dark:text-slate-950"
                >
                  {t("publications.search_button")}
                </button>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {t("publications.categories", { returnObjects: true }).map(
                  (item: string) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ),
                )}
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
                        {t("btn.view")}
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 rounded-full bg-[#ea4335] px-4 py-2 text-sm font-black text-white hover:bg-[#d93025] dark:bg-[#ffd54f] dark:text-slate-950"
                      >
                        <Icon name="download" className="h-4 w-4" />
                        {t("btn.download")}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Updates Section */}
          <section className="bg-[linear-gradient(180deg,#f8fbf9_0%,#eef4f1_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 flex items-center justify-between">
                <h2 className="text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">
                  {t("updates.title")}
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
                {news.map((item) => (
                  <article
                    key={item.title}
                    className="group overflow-hidden rounded-[2rem] bg-white p-4 shadow-xl shadow-slate-950/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className="relative overflow-hidden rounded-[1.5rem]">
                      <Image
                        src="/assets/Urban Health Care project image.jpeg"
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
                      <p className="text-lg font-black text-[#77B151]">
                        {item.date}
                      </p>

                      <h3 className="mt-4 text-2xl font-black leading-tight text-slate-950">
                        {item.title}
                      </h3>
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

          {/* Partners Section */}
          <section className="bg-[linear-gradient(180deg,#f7fbfd_0%,#ffffff_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                eyebrow={t("partners.subtitle")}
                title={t("partners.heading")}
                text={t("partners.description")}
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

          {/* Get Involved Section */}
          <section
            id="get-involved"
            className="bg-[linear-gradient(180deg,#f7fbfd_0%,#ffffff_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
          >
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#f4d36f_0%,#ffe8aa_48%,#f1f5f9_100%)] p-6 text-[#0B2E68] shadow-2xl shadow-[#d8b247]/20 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div>
                  <div className="mb-4 inline-flex rounded-full bg-[#0B2E68]/8 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#0B2E68]">
                    {t("get_involved.subtitle")}
                  </div>

                  <h2 className="text-4xl font-black tracking-tight text-[#0B2E68] sm:text-5xl">
                    {t("get_involved.heading")}
                  </h2>

                  <p className="mt-6 text-lg leading-9 text-[#3D2F0A]">
                    {t("get_involved.description")}
                  </p>

                  <div className="mt-8 rounded-[2rem] border border-[#0B2E68]/12 bg-white/55 p-5 shadow-lg shadow-[#0B2E68]/5 backdrop-blur">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0B2E68]/70">
                      {t("get_involved.donation_ui")}
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {[
                        t("get_involved.donation_amounts.five_hundred"),
                        t("get_involved.donation_amounts.thousand"),
                        t("get_involved.donation_amounts.five_thousand"),
                        t("get_involved.donation_amounts.custom"),
                      ].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          className="rounded-2xl border border-[#0B2E68]/12 bg-white/80 px-4 py-3 text-sm font-black text-[#0B2E68] transition hover:bg-[#0B2E68] hover:text-white"
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
                      title: t("get_involved.options.give_today.title"),
                      text: t("get_involved.options.give_today.text"),
                      icon: "hand" as IconName,
                    },
                    {
                      title: t("get_involved.options.join_training.title"),
                      text: t("get_involved.options.join_training.text"),
                      icon: "graduation" as IconName,
                    },
                    {
                      title: t("get_involved.options.work_with_us.title"),
                      text: t("get_involved.options.work_with_us.text"),
                      icon: "briefcase" as IconName,
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.5rem] bg-white/55 p-5 shadow-lg shadow-[#0B2E68]/5 ring-1 ring-[#0B2E68]/10 backdrop-blur transition hover:-translate-y-1 hover:bg-white/80"
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
                        {t("btn.start")}{" "}
                        <Icon name="arrow" className="h-4 w-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfd_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-slate-200 bg-white p-6 text-center shadow-xl shadow-slate-950/5 dark:border-white/10 dark:bg-white/[0.04] lg:p-10">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#009FE3]/10 text-[#009FE3] dark:bg-[#ffd54f]/10 dark:text-[#ffd54f]">
                <Icon name="mail" className="h-7 w-7" />
              </div>
              <h2 className="text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
                {t("footer.newsletter")}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
                {t("footer.subscribe")}
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
                  {t("btn.subscribe")}
                </button>
              </form>
              {subscribed ? (
                <p className="mt-4 text-sm font-bold text-[#ea4335] dark:text-[#ffd54f]">
                  {t("footer.subscribe_success")}
                </p>
              ) : (
                <p className="mt-4 text-xs leading-6 text-slate-500 dark:text-slate-400">
                  {t("footer.privacy_notice")}
                </p>
              )}
            </div>
          </section>

          {/* Footer */}
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
                  {t("about.description")}
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
                  {t("footer.quick_links")}
                </h3>
                <div className="grid gap-3 text-sm font-semibold text-red-100">
                  {t("footer.quick_links_items", { returnObjects: true }).map(
                    (item: string) => (
                      <a
                        key={item}
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    ),
                  )}
                </div>
              </div>

              <div>
                <h3 className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-red-200">
                  {t("footer.policies")}
                </h3>
                <div className="grid gap-3 text-sm font-semibold text-red-100">
                  {t("footer.policies_items", { returnObjects: true }).map(
                    (item: string) => (
                      <a
                        key={item}
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    ),
                  )}
                </div>
              </div>

              <div>
                <h3 className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-red-200">
                  {t("footer.contact")}
                </h3>
                <div className="grid gap-4 text-sm leading-7 text-red-100">
                  <p className="flex gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-red-200" />
                    {t("footer.address")}
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-red-200" />
                    {t("footer.phone")}
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-red-200" />
                    {t("footer.email")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/20 pt-6 text-xs font-semibold text-red-200 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 PSTC. {t("footer.rights")}</p>
              <p>{t("footer.frontend_notice")}</p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
