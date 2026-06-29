"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
  Users,
  BookOpen,
  Shield,
  BarChart3,
  HeartHandshake,
  GraduationCap,
  Sparkles,
  Building2,
  FileCheck2,
  Globe2,
  Landmark,
  Network,
  ScrollText,
  Mail,
  Newspaper,
  User,
  CheckCircle2,
  Download,
  FileText,
  Handshake,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ============================================================
// COLOR CONFIG (matches global CSS)
// ============================================================
const COLORS = {
  primary: "var(--pstc-primary)",
  primaryDark: "var(--pstc-primary-dark)",
  primarySoft: "var(--pstc-primary-soft)",
  primaryGlow: "var(--pstc-primary-glow)",
  secondary: "var(--pstc-secondary)",
  secondaryDark: "var(--pstc-secondary-dark)",
  secondarySoft: "var(--pstc-secondary-soft)",
  secondaryGlow: "var(--pstc-secondary-glow)",
};

// ============================================================
// HERO SLIDES DATA
// ============================================================
const heroSlides = [
  {
    title: "Care for",
    highlight: "Community.",
    description:
      "Delivering health, rights, skills, and inclusive services across Bangladesh.",
    tagline: "Care for every community",
    image: "/hero/hero%25201.webp",
    href: "/what-we-do",
  },
  {
    title: "Services That",
    highlight: "Transform.",
    description:
      "Advancing health, nutrition, youth, climate resilience, and workforce skills.",
    tagline: "Impact through services",
    image: "/hero/hero%25202.avif",
    href: "/what-we-do/thematic-areas",
  },
  {
    title: "Youth Shape",
    highlight: "Tomorrow.",
    description:
      "Empowering young people through leadership, learning, advocacy, and innovation.",
    tagline: "Youth leading tomorrow",
    image: "/hero/hero%25203.jpg",
    href: "/ucon",
  },
  {
    title: "Evidence That",
    highlight: "Inspires.",
    description:
      "Explore publications, reports, research, events, and stories of measurable impact.",
    tagline: "Stories of real impact",
    image: "/hero/hero%25204.jpeg",
    href: "/our-impact",
  },
  {
    title: "Partners for",
    highlight: "Progress.",
    description:
      "Collaborating to expand opportunities through training, innovation, and community action.",
    tagline: "Partnerships create change",
    image: "/hero/hero%25205.jpg",
    href: "/get-involved",
  },
];

// ============================================================
// WHO WE ARE DATA
// ============================================================
const whoWeAreItems = [
  {
    id: "01",
    title: "Governance",
    href: "/who-we-are/governance",
    description:
      "Transparent oversight, accountability, and institutional decision-making that guide PSTC's organizational direction.",
    image: "/images/governance.avif",
    icon: Landmark,
  },
  {
    id: "02",
    title: "Leadership",
    href: "/who-we-are/leadership",
    description:
      "Meet the people leading PSTC's mission, programs, partnerships, institutional growth, and community impact.",
    image: "/images/leadership.jpg",
    icon: Users,
  },
  {
    id: "03",
    title: "Mission, Vision & Values",
    href: "/who-we-are/mission-vision-values",
    description:
      "The principles that shape PSTC's work for dignity, rights, health, inclusion, and social transformation.",
    image: "/images/mission-vision-values.jpg",
    icon: Shield,
  },
  {
    id: "04",
    title: "Policies",
    href: "/who-we-are/policies",
    description:
      "Safeguarding, ethical standards, internal systems, and organizational policies that protect people and programs.",
    image: "/images/policies.webp",
    icon: FileCheck2,
  },
  {
    id: "05",
    title: "Organogram",
    href: "/who-we-are/organogram",
    description:
      "Understand PSTC's structure, departments, reporting lines, and operational flow across the organization.",
    image: "/images/organogram.avif",
    icon: Network,
  },
  {
    id: "06",
    title: "Where We Work",
    href: "/who-we-are/where-we-work",
    description:
      "Explore PSTC's geographical presence, program coverage, and community-level service areas.",
    image: "/images/where-we-work.jpg",
    icon: Globe2,
  },
  {
    id: "07",
    title: "About Us",
    href: "/who-we-are/about-us",
    description:
      "Learn about PSTC's journey, FPSTC roots, identity, affiliation, and national development role.",
    image: "/images/about-us.jpeg",
    icon: Building2,
  },
  {
    id: "08",
    title: "Strategic Plan",
    href: "/who-we-are/strategic-plan",
    description:
      "See PSTC's strategic direction for organizational growth, digital transformation, and measurable impact.",
    image: "/images/strategic-plan.jpg",
    icon: ScrollText,
  },
];

// ============================================================
// CORE ACTIVITIES DATA
// ============================================================
const coreActivities = [
  {
    title: "Health Service Delivery",
    icon: HeartHandshake,
    items: [
      "Clinic and community based health service delivery projects in urban and rural areas",
      "Special focus on mothers, children, adolescents and youth",
    ],
  },
  {
    title: "Children & Community Development",
    icon: Users,
    items: [
      "Children and adolescents development activities",
      "Child labor, street children and working women",
      "Water supply, sanitation and hygiene education programs",
    ],
  },
  {
    title: "Collaboration & Research",
    icon: BarChart3,
    items: [
      "GOB-NGO private sector collaboration and coordination",
      "Advocacy programs at different level",
      "Research studies, base line survey and market research",
    ],
  },
  {
    title: "BCC & Publications",
    icon: BookOpen,
    items: [
      'Publish monthly magazine "PROJANMO Kotha"',
      "Producing BCC materials",
      "Street drama, folksongs and cultural show",
    ],
  },
  {
    title: "Our Beneficiaries",
    icon: Users,
    items: [
      "Women and girls",
      "Children, youth and adolescents",
      "Pregnant mothers",
      "Men and boys",
      "Slum dwellers",
      "Brothel based sex workers",
      "Other vulnerable populations",
    ],
  },
  {
    title: "Training & Technical Assistance",
    icon: GraduationCap,
    items: [
      "Life skill training",
      "Skill development training",
      "Income generating training",
      "Training need assessment and impact evaluation",
      "Training curricula development",
      "Technical assistance for grants management and NGO sustainability",
    ],
  },
  {
    title: "Disaster Preparedness",
    icon: Shield,
    items: ["Program and training on disaster preparedness and management"],
  },
];

// ============================================================
// PUBLICATIONS DATA
// ============================================================
const publications = [
  {
    id: "annual-report-2024",
    title: "Annual Report 2024",
    description:
      "A comprehensive overview of PSTC's achievements, financial performance, and strategic milestones throughout 2024.",
    category: "Annual Report",
    coverImage: "/publications/publication Cover 1.png",
    publishedAt: "2024-12-01",
    pages: 84,
    downloadUrl: "/publications/annual-report-2024.pdf",
    featured: true,
  },
  {
    id: "training-impact-2024",
    title: "Training Impact Assessment 2024",
    description:
      "Measuring the outcomes of vocational training programs across all divisions.",
    category: "Research",
    coverImage: "/publications/proshno-korte-shikhun.jpg",
    publishedAt: "2024-09-15",
    pages: 42,
    downloadUrl: "/publications/training-impact-2024.pdf",
  },
  {
    id: "skills-gap-report",
    title: "National Skills Gap Report",
    description:
      "Analysis of workforce skill shortages and PSTC's role in bridging the gap.",
    category: "Policy Brief",
    coverImage: "/publications/pexels-photo-31822720.jpg",
    publishedAt: "2024-07-20",
    pages: 56,
    downloadUrl: "/publications/skills-gap-report.pdf",
  },
  {
    id: "gender-inclusion-2023",
    title: "Gender Inclusion in Technical Education",
    description:
      "Exploring how PSTC promotes gender equity across education and training programs.",
    category: "Report",
    coverImage: "/publications/9781107604643i.jpg",
    publishedAt: "2023-11-10",
    pages: 38,
    downloadUrl: "/publications/gender-inclusion.pdf",
  },
  {
    id: "strategic-plan-2025",
    title: "Strategic Plan 2025–2030",
    description:
      "PSTC's five-year roadmap outlining priority sectors and institutional strengthening.",
    category: "Strategic Document",
    coverImage: "/publications/71c2E7yrTnL._AC_UF1000,1000_QL80_.jpg",
    publishedAt: "2024-01-05",
    pages: 72,
    downloadUrl: "/publications/strategic-plan-2025.pdf",
  },
];

// ============================================================
// PARTNERS DATA
// ============================================================
const nationalPartners = [
  { name: "Government of Bangladesh", image: "/partners/bd govt.png" },
  { name: "Dhaka South City Corporation", image: "/partners/dscc.png" },
  { name: "Dhaka North City Corporation", image: "/partners/dncc.png" },
  { name: "Foridpur Pourosova", image: "/partners/foridpur pourosova.png" },
  { name: "Mymensingh City Corporation", image: "/partners/mcc.png" },
  { name: "Health Economics Unit", image: "/partners/health economic.png" },
  { name: "Nogor Sastho Kendro", image: "/partners/nsk.png" },
  { name: "SMC", image: "/partners/smc.png" },
];

const globalPartners = [
  { name: "Canada", image: "/partners/canada.png" },
  { name: "Plan International", image: "/partners/plan international.jpg" },
  { name: "Women Win", image: "/partners/ww.png" },
  { name: "Standard Chartered", image: "/partners/standard chartered.png" },
  { name: "Save the Children", image: "/partners/save the children.png" },
  { name: "Simavi", image: "/partners/simavi.png" },
  { name: "OXFAM", image: "/partners/oxfam.png" },
  { name: "USAID", image: "/partners/usaid.png" },
  { name: "IPPF", image: "/partners/ppf.png" },
  { name: "European Union", image: "/partners/eu.png" },
  { name: "Kingdom of the Netherlands", image: "/partners/kn.png" },
];

const allPartners = [...nationalPartners, ...globalPartners];

// ============================================================
// STATS DATA
// ============================================================
const stats = [
  { value: "48+", label: "Years of Service", icon: Clock },
  { value: "1978", label: "Founded", icon: Calendar },
  { value: "IPPF", label: "Member Association", icon: Award },
  { value: "100+", label: "Projects Delivered", icon: TrendingUp },
];

// ============================================================
// SUB-COMPONENTS
// ============================================================

// ---- Hero Button ----
function HeroButton({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-black uppercase tracking-[0.06em] transition-all duration-300 hover:-translate-y-1",
        variant === "primary"
          ? "bg-[var(--pstc-primary)] text-white shadow-[0_12px_35px_var(--pstc-primary-glow)] hover:bg-[var(--pstc-primary-dark)] hover:shadow-[0_18px_45px_var(--pstc-primary-glow)]"
          : "border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:border-[var(--pstc-secondary)] hover:bg-[var(--pstc-secondary)] hover:text-[var(--pstc-ink)]",
        className,
      )}
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </Link>
  );
}

// ---- Partner Orb ----
function PartnerOrb({
  name,
  image,
  size = "md",
}: {
  name: string;
  image: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "size-16",
    md: "size-20",
    lg: "size-24",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -4 }}
      className={cn(
        "group relative flex items-center justify-center rounded-full",
        sizeClasses[size],
      )}
      title={name}
    >
      <div className="absolute inset-0 rounded-full bg-[var(--pstc-primary)]/10 blur-xl transition-opacity group-hover:opacity-100" />
      <div className="relative flex size-full items-center justify-center overflow-hidden rounded-full border-2 border-white/80 bg-white/95 shadow-lg shadow-[var(--pstc-primary)]/10 transition-shadow group-hover:shadow-xl group-hover:shadow-[var(--pstc-primary)]/20">
        <div className="relative size-[80%] overflow-hidden rounded-full bg-white">
          <Image
            src={image}
            alt={name}
            fill
            sizes="80px"
            className="object-contain p-1"
          />
        </div>
      </div>
    </motion.div>
  );
}

// ---- Publication Card ----
function PublicationCard({ pub }: { pub: (typeof publications)[0] }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
    >
      <Link href={`/publications/${pub.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={pub.coverImage}
            alt={pub.title}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[var(--pstc-primary)] backdrop-blur-sm">
            {pub.category}
          </span>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold leading-tight text-foreground">
            {pub.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {pub.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {pub.pages} pages
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-bold text-[var(--pstc-primary)] transition group-hover:gap-2">
              Read More
              <ArrowUpRight className="size-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ---- Magazine Subscription Form ----
function MagazineSubscription() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center py-12 text-center"
      >
        <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-[var(--pstc-secondary-soft)] text-[var(--pstc-secondary-dark)]">
          <CheckCircle2 className="size-10" />
        </div>
        <h3 className="text-2xl font-black uppercase text-foreground">
          You&apos;re Subscribed!
        </h3>
        <p className="mt-3 max-w-sm text-muted-foreground">
          Thank you, {name.split(" ")[0]}. PROJANMO Kotha will arrive at{" "}
          <span className="font-bold text-[var(--pstc-primary)]">{email}</span>.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Full Name
        </label>
        <div className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 focus-within:border-[var(--pstc-primary)] focus-within:ring-2 focus-within:ring-[var(--pstc-primary)]/20">
          <User className="size-4 text-[var(--pstc-primary)]" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/50"
            required
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Email Address
        </label>
        <div className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 focus-within:border-[var(--pstc-primary)] focus-within:ring-2 focus-within:ring-[var(--pstc-primary)]/20">
          <Mail className="size-4 text-[var(--pstc-primary)]" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/50"
            required
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Organization <span className="font-normal lowercase">(optional)</span>
        </label>
        <div className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 focus-within:border-[var(--pstc-primary)] focus-within:ring-2 focus-within:ring-[var(--pstc-primary)]/20">
          <Building2 className="size-4 text-[var(--pstc-primary)]" />
          <input
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="Your organization"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/50"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-[var(--pstc-primary)] py-4 text-sm font-black uppercase tracking-[0.08em] text-white transition hover:bg-[var(--pstc-primary-dark)] disabled:opacity-70"
      >
        {loading ? "Subscribing..." : "Subscribe for Soft Copy"}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        Free digital subscription · Unsubscribe anytime
      </p>
    </form>
  );
}

// ============================================================
// MAIN HOMEPAGE COMPONENT
// ============================================================
export default function HomePageAlt() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Hero auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[activeSlide];

  // Scroll progress for stats
  const { scrollYProgress } = useScroll();
  const statsOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const statsY = useTransform(scrollYProgress, [0, 0.15], [30, 0]);

  return (
    <div className="relative overflow-x-hidden bg-background">
      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section className="relative h-screen overflow-hidden bg-black">
        {/* Background Image */}
        <motion.div
          key={currentSlide.image}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(11,87,158,0.25),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(148,202,81,0.15),transparent_40%)]" />

        {/* Content */}
        <div className="relative flex h-full items-end pb-16 sm:pb-20 lg:items-center lg:pb-0">
          <div className="container-pstc">
            <div className="max-w-4xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white backdrop-blur-sm"
              >
                <Sparkles className="size-3.5" />
                PSTC Digital Experience
              </motion.div>

              {/* Title */}
              <motion.h1
                key={activeSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-4xl lg:text-7xl xl:text-8xl"
              >
                {currentSlide.title}{" "}
                <span className="italic text-[var(--pstc-secondary)]">
                  {currentSlide.highlight}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                key={activeSlide + "-desc"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8 lg:text-lg"
              >
                {currentSlide.description}
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <HeroButton href={currentSlide.href}>
                  Explore Section
                </HeroButton>
                <HeroButton href="/contact-us" variant="secondary">
                  Contact PSTC
                </HeroButton>
              </motion.div>

              {/* Slide Indicators */}
              <div className="mt-8 flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={cn(
                      "h-1 rounded-full transition-all duration-500",
                      index === activeSlide
                        ? "w-12 bg-[var(--pstc-secondary)]"
                        : "w-6 bg-white/30 hover:bg-white/50",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/40 lg:block"
        >
          <div className="flex flex-col items-center gap-1 text-xs uppercase tracking-widest">
            <span>Scroll</span>
            <ChevronRight className="size-4 rotate-90" />
          </div>
        </motion.div>
      </section>

      {/* ============================================================
          STATS BAR
          ============================================================ */}
      <motion.div
        style={{ opacity: statsOpacity, y: statsY }}
        className="relative z-10 -mt-12 px-4 sm:px-6"
      >
        <div className="container-pstc">
          <div className="grid grid-cols-2 gap-3 rounded-2xl bg-white/95 p-6 shadow-2xl backdrop-blur-sm sm:grid-cols-4 sm:gap-4 sm:p-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-2 rounded-full bg-[var(--pstc-primary-soft)] p-2.5 text-[var(--pstc-primary)]">
                    <Icon className="size-5" />
                  </div>
                  <p className="text-2xl font-black text-foreground sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* ============================================================
          WHO WE ARE
          ============================================================ */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-pstc">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <span className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[var(--pstc-secondary)]">
                Who We Are
              </span>
              <h2 className="text-3xl font-black leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                A legacy of{" "}
                <span className="text-[var(--pstc-primary)]">care</span>,
                <br />
                rights and impact.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                PSTC is a non-government, not-for-profit voluntary organization
                working to improve the quality of life of poor and socially
                disadvantaged people. Its journey is rooted in FPSTC, formed in
                1978.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/who-we-are/about-us"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--pstc-primary)] px-6 py-3 text-sm font-black text-white transition hover:bg-[var(--pstc-primary-dark)] hover:-translate-y-1"
                >
                  Explore PSTC
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href="/who-we-are/strategic-plan"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-border px-6 py-3 text-sm font-black text-foreground transition hover:-translate-y-1 hover:border-[var(--pstc-secondary)] hover:bg-[var(--pstc-secondary)] hover:text-[var(--pstc-ink)]"
                >
                  Strategic Plan
                </Link>
              </div>
            </motion.div>

            {/* Right - Grid of cards */}
            <div className="grid grid-cols-2 gap-4">
              {whoWeAreItems.slice(0, 6).map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    whileHover={{ y: -6 }}
                    className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-xl"
                  >
                    <Link href={item.href} className="block">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="rounded-lg bg-[var(--pstc-primary-soft)] p-2.5 text-[var(--pstc-primary)]">
                          <Icon className="size-4" />
                        </div>
                        <span className="text-sm font-black text-muted-foreground/30">
                          {item.id}
                        </span>
                      </div>
                      <h3 className="text-base font-bold leading-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                        {item.description}
                      </p>
                      <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[var(--pstc-primary)] transition group-hover:gap-2">
                        Learn More
                        <ArrowUpRight className="size-3" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT WE DO
          ============================================================ */}
      <section className="bg-[var(--pstc-soft-bg)] py-20 sm:py-24 lg:py-28">
        <div className="container-pstc">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.3em] text-[var(--pstc-secondary)]">
              What We Do
            </span>
            <h2 className="text-3xl font-black text-foreground sm:text-5xl lg:text-6xl">
              Our{" "}
              <span className="text-[var(--pstc-primary)]">Service Focus</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Clinic and community based health service delivery, child and
              adolescent development, WASH, advocacy, research, training, and
              more.
            </p>
          </motion.div>

          {/* Activities Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreActivities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-xl bg-[var(--pstc-primary-soft)] p-3 text-[var(--pstc-primary)] transition-colors group-hover:bg-[var(--pstc-primary)] group-hover:text-white">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-lg font-bold text-foreground">
                      {activity.title}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {activity.items.slice(0, 3).map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--pstc-primary)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                    {activity.items.length > 3 && (
                      <li className="text-sm font-medium text-[var(--pstc-primary)]">
                        +{activity.items.length - 3} more
                      </li>
                    )}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          PUBLICATIONS
          ============================================================ */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-pstc">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
          >
            <div>
              <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.3em] text-[var(--pstc-secondary)]">
                Knowledge Hub
              </span>
              <h2 className="text-3xl font-black text-foreground sm:text-5xl">
                Publications
              </h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                Research reports, policy briefs, and strategic documents.
              </p>
            </div>
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-1 hover:border-[var(--pstc-primary)] hover:bg-[var(--pstc-primary)] hover:text-white"
            >
              View All
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {publications.slice(0, 4).map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <PublicationCard pub={pub} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PARTNERS
          ============================================================ */}
      <section className="bg-[var(--pstc-soft-bg)] py-20 sm:py-24 lg:py-28">
        <div className="container-pstc">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.3em] text-[var(--pstc-secondary)]">
              Our Partners
            </span>
            <h2 className="text-3xl font-black text-foreground sm:text-5xl lg:text-6xl">
              Together For{" "}
              <span className="text-[var(--pstc-primary)]">Greater Impact</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Bangladeshi institutions at the core, global development partners
              surrounding us — united in delivering sustainable community
              health.
            </p>
          </motion.div>

          {/* National Partners */}
          <div className="mb-8">
            <h3 className="mb-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
              National Partners
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {nationalPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                >
                  <PartnerOrb name={partner.name} image={partner.image} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Global Partners */}
          <div>
            <h3 className="mb-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Global Partners
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {globalPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                >
                  <PartnerOrb
                    name={partner.name}
                    image={partner.image}
                    size="sm"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MAGAZINE SUBSCRIPTION
          ============================================================ */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container-pstc">
          <div className="grid gap-10 overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-xl sm:p-10 lg:grid-cols-2 lg:p-12">
            {/* Left - Magazine Preview */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.3em] text-[var(--pstc-secondary)]">
                Digital Magazine
              </span>
              <h2 className="text-3xl font-black text-foreground sm:text-4xl">
                PROJANMO{" "}
                <span className="text-[var(--pstc-primary)]">Kotha</span>
              </h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Subscribe once and receive PSTC&apos;s monthly magazine as a
                soft copy in your inbox — field stories, youth voices, and
                community impact from across Bangladesh.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-bold shadow-sm">
                  <Mail className="size-3.5 text-[var(--pstc-primary)]" />
                  Email delivery
                </div>
                <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-bold shadow-sm">
                  <BookOpen className="size-3.5 text-[var(--pstc-primary)]" />
                  Monthly issues
                </div>
                <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-bold shadow-sm">
                  <Newspaper className="size-3.5 text-[var(--pstc-primary)]" />
                  Free soft copy
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="relative h-24 w-16 overflow-hidden rounded-lg border-2 border-white shadow-md">
                  <Image
                    src="/publications/book-projonmo-bodle-bodle-jay.jpg"
                    alt="PROJANMO Kotha"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold">Latest Edition</p>
                  <p className="text-xs text-muted-foreground">
                    Stories of change from clinics to communities
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right - Subscription Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-[var(--pstc-soft-bg)] p-6 sm:p-8"
            >
              <h3 className="mb-2 text-lg font-bold text-foreground">
                Get Every Issue In Your Inbox
              </h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Join readers who receive the digital edition directly — no
                print, no cost, just stories that matter.
              </p>
              <MagazineSubscription />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <section className="relative overflow-hidden bg-[var(--pstc-primary)] py-16 sm:py-20">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute right-0 top-0 size-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-64 rounded-full bg-white/5 blur-3xl" />

        <div className="container-pstc relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              Ready to Make a{" "}
              <span className="text-[var(--pstc-secondary)]">Difference</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">
              Join us in building healthier communities and empowering the next
              generation of leaders across Bangladesh.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--pstc-secondary)] px-8 py-4 text-sm font-black uppercase tracking-[0.06em] text-[var(--pstc-ink)] transition hover:bg-white hover:-translate-y-1"
              >
                Get Involved
                <ArrowUpRight className="size-4" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-sm font-black uppercase tracking-[0.06em] text-white backdrop-blur-sm transition hover:bg-white hover:text-[var(--pstc-primary)] hover:-translate-y-1"
              >
                Contact Us
                <Handshake className="size-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
