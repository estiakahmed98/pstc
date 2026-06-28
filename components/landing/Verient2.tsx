"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Heart,
  Users,
  BookOpen,
  Shield,
  GraduationCap,
  BarChart3,
  HeartHandshake,
  Mail,
  User,
  Building2,
  CheckCircle2,
  Download,
  FileText,
} from "lucide-react";

// ─────────────────────────────────────────────
// SHARED TYPES & DATA
// ─────────────────────────────────────────────

type Slide = {
  title: string;
  italic: string;
  description: string;
  short: string;
  image: string;
  href: string;
  tag: string;
};

const slides: Slide[] = [
  { title: "Care for", italic: "Community.", description: "Delivering health, rights, skills, and inclusive services across Bangladesh.", short: "Care for every community", image: "/hero/hero%25201.webp", href: "/what-we-do", tag: "Health" },
  { title: "Services That", italic: "Transform.", description: "Advancing health, nutrition, youth, climate resilience, and workforce skills.", short: "Impact through services", image: "/hero/hero%25202.avif", href: "/what-we-do/thematic-areas", tag: "Services" },
  { title: "Youth Shape", italic: "Tomorrow.", description: "Empowering young people through leadership, learning, advocacy, and innovation.", short: "Youth leading tomorrow", image: "/hero/hero%25203.jpg", href: "/ucon", tag: "Youth" },
  { title: "Evidence That", italic: "Inspires.", description: "Explore publications, reports, research, events, and stories of measurable impact.", short: "Stories of real impact", image: "/hero/hero%25204.jpeg", href: "/our-impact", tag: "Impact" },
  { title: "Partners for", italic: "Progress.", description: "Collaborating to expand opportunities through training, innovation, and community action.", short: "Partnerships create change", image: "/hero/hero%25205.jpg", href: "/get-involved", tag: "Partnership" },
];

const SLIDE_DURATION = 4200;

const whoItems = [
  { num: "01", title: "Governance", desc: "Transparent oversight and institutional decision-making that guide PSTC.", href: "/who-we-are/governance" },
  { num: "02", title: "Leadership", desc: "Meet the people leading PSTC's mission, programs, and community impact.", href: "/who-we-are/leadership" },
  { num: "03", title: "Mission & Vision", desc: "The principles that shape PSTC's work for dignity, rights, and inclusion.", href: "/who-we-are/mission-vision-values" },
  { num: "04", title: "Policies", desc: "Safeguarding, ethical standards, and internal systems that protect people.", href: "/who-we-are/policies" },
  { num: "05", title: "Where We Work", desc: "PSTC's geographical presence and community-level service areas.", href: "/who-we-are/where-we-work" },
  { num: "06", title: "About Us", desc: "PSTC's journey, FPSTC roots, identity, affiliation, and development role.", href: "/who-we-are/about-us" },
];

const activities = [
  { icon: HeartHandshake, title: "Health Service Delivery", items: ["Clinic and community based health service delivery", "Special focus on mothers, children, adolescents and youth"] },
  { icon: Users, title: "Children & Community", items: ["Children and adolescents development activities", "Water supply, sanitation and hygiene education"] },
  { icon: BarChart3, title: "Research & Advocacy", items: ["GOB-NGO private sector collaboration", "Research studies, base line survey and market research"] },
  { icon: BookOpen, title: "BCC & Publications", items: ['Monthly magazine "PROJANMO Kotha"', "Producing BCC materials, street drama, folksongs"] },
  { icon: GraduationCap, title: "Training", items: ["Life skill and income generating training", "Training curricula development"] },
  { icon: Shield, title: "Disaster Preparedness", items: ["Program and training on disaster preparedness and management"] },
];

const publications = [
  { id: "annual-report-2024", title: "Annual Report 2024", category: "Annual Report", cover: "/publications/publication Cover 1.png", pages: 84, href: "/publications/annual-report-2024" },
  { id: "training-impact", title: "Training Impact Assessment", category: "Research", cover: "/publications/proshno-korte-shikhun.jpg", pages: 42, href: "/publications/training-impact-2024" },
  { id: "skills-gap", title: "National Skills Gap Report", category: "Policy Brief", cover: "/publications/pexels-photo-31822720.jpg", pages: 56, href: "/publications/skills-gap-report" },
  { id: "gender-inclusion", title: "Gender Inclusion in Technical Education", category: "Report", cover: "/publications/9781107604643i.jpg", pages: 38, href: "/publications/gender-inclusion" },
];

const bdPartners = ["Government of Bangladesh", "Dhaka South City Corporation", "Dhaka North City Corporation", "Mymensingh City Corporation", "SMC", "Nogor Sastho Kendro"];
const globalPartners = ["Plan International", "USAID", "OXFAM", "Save the Children", "European Union", "Kingdom of Netherlands", "Standard Chartered", "IPPF", "Women Win", "Simavi", "Canada"];

function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

// ─────────────────────────────────────────────
// SECTION 1 — HERO CAROUSEL
// ─────────────────────────────────────────────

function HeroSection() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (i: number) => {
    setActive(i);
    setAnimKey((k) => k + 1);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goTo((active + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active]);

  const slide = slides[active]!;

  return (
    <section className="relative h-screen min-h-[580px] overflow-hidden bg-black">
      {/* BG images */}
      {slides.map((s, i) => (
        <div key={s.image} className={cn("absolute inset-0 transition-opacity duration-700", i === active ? "opacity-100" : "opacity-0")}>
          <Image src={s.image} alt={s.short} fill priority={i === 0} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      {/* Left accent bar */}
      <div className="absolute left-0 top-0 z-10 hidden h-full w-1 lg:block" style={{ background: "var(--pstc-primary)" }} />

      {/* Left panel nav — desktop */}
      <nav className="absolute inset-y-0 left-0 z-10 hidden w-72 flex-col justify-center pl-8 pr-4 lg:flex xl:w-80">
        <p className="mb-6 pl-4 text-[9px] font-black uppercase tracking-[0.38em] text-white/40">Sections</p>
        <ul className="space-y-0.5">
          {slides.map((s, i) => {
            const isActive = i === active;
            return (
              <li key={s.tag}>
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  className={cn("w-full rounded-xl px-4 py-3 text-left transition-all duration-300", isActive ? "bg-white/10" : "hover:bg-white/5")}
                >
                  <div className="flex items-center gap-3">
                    <span className={cn("h-px shrink-0 rounded-full transition-all duration-500", isActive ? "w-7 bg-white" : "w-3 bg-white/30")} />
                    <span className={cn("text-xs font-black uppercase tracking-[0.2em] transition-colors duration-300", isActive ? "text-white" : "text-white/45 hover:text-white/65")}>{s.tag}</span>
                  </div>
                  {isActive && <p className="mt-1.5 pl-10 text-[11px] leading-5 text-white/60">{s.description}</p>}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="mt-8 pl-4 font-mono text-xs font-bold text-white/30">
          {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
      </nav>

      {/* Main text block */}
      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-12 pt-24 sm:px-8 lg:pl-[310px] lg:pr-24 xl:pl-[340px]">
        <span key={`tag-${animKey}`} className="mb-4 inline-block rounded-full border border-white/20 bg-white/8 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.28em] text-white/75" style={{ animation: "v2up 0.5s ease both" }}>
          PSTC — {slide.tag}
        </span>

        <h1 key={`h-${animKey}`} className="font-serif text-[clamp(2.8rem,8vw,6rem)] font-bold leading-[1.0] text-white" style={{ animation: "v2up 0.55s ease 0.06s both" }}>
          {slide.title}{" "}
          <em className="not-italic" style={{ color: "var(--pstc-secondary)" }}>{slide.italic}</em>
        </h1>

        {/* Mobile desc */}
        <p key={`d-${animKey}`} className="mt-4 max-w-md text-sm leading-7 text-white/70 lg:hidden" style={{ animation: "v2up 0.55s ease 0.1s both" }}>{slide.description}</p>

        <div key={`cta-${animKey}`} className="mt-7 flex flex-wrap gap-3 sm:gap-4" style={{ animation: "v2up 0.55s ease 0.14s both" }}>
          <Link href={slide.href} className="group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-white transition-all duration-300" style={{ background: "var(--pstc-primary)" }}>
            Explore <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link href="/contact-us" className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-white backdrop-blur-sm transition hover:bg-white/18">
            Contact PSTC
          </Link>
        </div>

        {/* Mobile dots */}
        <div className="mt-8 flex items-center gap-3 lg:hidden">
          {slides.map((_, i) => (
            <button key={i} type="button" onClick={() => goTo(i)} className={cn("rounded-full transition-all duration-300", i === active ? "h-2 w-8" : "h-2 w-2 bg-white/30")} style={i === active ? { background: "var(--pstc-secondary)" } : undefined} />
          ))}
        </div>
      </div>

      {/* Right thumbnail strip — desktop */}
      <div className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-2 lg:flex">
        {slides.map((s, i) => (
          <button key={s.image} type="button" onClick={() => goTo(i)} className={cn("relative h-16 w-14 overflow-hidden rounded-lg border-2 transition-all duration-300 xl:h-20 xl:w-16", i === active ? "border-white scale-105" : "border-white/20 opacity-50 hover:opacity-75")}>
            <Image src={s.image} alt={s.short} fill sizes="80px" className="object-cover" />
            {i === active && <div className="absolute inset-x-0 bottom-0 h-[3px]" style={{ background: "var(--pstc-secondary)" }} />}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 inset-x-0 z-20 h-[3px] bg-white/10">
        <div key={active} className="h-full" style={{ background: "var(--pstc-secondary)", animation: `v2bar ${SLIDE_DURATION}ms linear forwards` }} />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SECTION 2 — WHO WE ARE
// ─────────────────────────────────────────────

function WhoWeAreSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
      <div className="container-pstc">
        {/* Top row */}
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <span className="mb-3 inline-block text-[10px] font-black uppercase tracking-[0.36em]" style={{ color: "var(--pstc-secondary-dark)" }}>Who We Are</span>
            <h2 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              A legacy of <span style={{ color: "var(--pstc-primary)" }}>care &amp; impact.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-muted-foreground lg:text-base">
            PSTC is a non-government, not-for-profit voluntary organization working to improve the quality of life of poor and socially disadvantaged people since 1978.
          </p>
        </div>

        {/* Stats row */}
        <div className="mb-12 grid grid-cols-3 gap-4 sm:gap-6 lg:mb-16 lg:max-w-lg">
          {[{ val: "48+", label: "Years of service" }, { val: "1978", label: "FPSTC origin" }, { val: "IPPF", label: "Member" }].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-4 sm:p-5">
              <div className="mb-2 h-1 w-8 rounded-full" style={{ background: "var(--pstc-primary)" }} />
              <p className="text-xl font-black" style={{ color: "var(--pstc-primary)" }}>{s.val}</p>
              <p className="mt-1 text-[11px] font-semibold text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whoItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--pstc-primary)] hover:shadow-lg"
            >
              {/* Animated left border */}
              <div className="absolute left-0 top-0 h-full w-[3px] origin-top rounded-r-full transition-all duration-500 group-hover:scale-y-100" style={{ background: "var(--pstc-primary)", transform: "scaleY(0)" }} />

              <span className="mb-4 block font-mono text-[10px] font-bold text-muted-foreground">{item.num}</span>
              <h3 className="mb-2 text-lg font-black text-foreground transition-colors group-hover:text-[var(--pstc-primary)]">{item.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{item.desc}</p>
              <div className="mt-5 flex items-center gap-1.5 text-xs font-black uppercase tracking-widest transition-colors group-hover:text-[var(--pstc-primary)]" style={{ color: "var(--pstc-primary)" }}>
                Learn more <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link href="/who-we-are/about-us" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-black text-foreground transition-all hover:border-[var(--pstc-primary)] hover:text-[var(--pstc-primary)]">
            Explore full story <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SECTION 3 — WHAT WE DO
// ─────────────────────────────────────────────

function WhatWeDoSection() {
  return (
    <section className="relative overflow-hidden bg-card py-20 sm:py-24 lg:py-32">
      {/* Thin top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="container-pstc">
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-3 inline-block text-[10px] font-black uppercase tracking-[0.36em]" style={{ color: "var(--pstc-secondary-dark)" }}>What We Do</span>
            <h2 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Core <span style={{ color: "var(--pstc-primary)" }}>Activities</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-muted-foreground">
            From clinics to classrooms, PSTC delivers across health, training, research, communications, and disaster response.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((act, i) => {
            const Icon = act.icon;
            return (
              <div
                key={act.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Icon */}
                <div className="mb-5 flex size-11 items-center justify-center rounded-xl transition-colors duration-300 group-hover:bg-[var(--pstc-primary)]" style={{ background: "var(--pstc-primary-soft)" }}>
                  <Icon className="size-5 transition-colors duration-300 group-hover:text-white" style={{ color: "var(--pstc-primary)" }} />
                </div>

                <h3 className="mb-3 font-black text-foreground transition-colors group-hover:text-[var(--pstc-primary)]">{act.title}</h3>
                <ul className="space-y-2">
                  {act.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                      <ChevronRight className="mt-0.5 size-3.5 shrink-0" style={{ color: "var(--pstc-secondary-dark)" }} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Bottom accent line */}
                <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 rounded-full" style={{ background: "var(--pstc-secondary)" }} />
              </div>
            );
          })}
        </div>

        {/* Thematic areas chips */}
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Thematic areas:</span>
          {["Health & Nutrition", "Youth & Adolescent", "Gender & Governance", "Climate Change", "Skills & Training"].map((t) => (
            <span key={t} className="rounded-full border border-border px-4 py-1.5 text-xs font-semibold text-foreground">{t}</span>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/what-we-do" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black text-white transition-all hover:opacity-90" style={{ background: "var(--pstc-primary)" }}>
            See all programs <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SECTION 4 — PUBLICATIONS
// ─────────────────────────────────────────────

function PublicationsSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="container-pstc">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.24em] text-muted-foreground">
              <FileText className="size-3.5" /> Knowledge Hub
            </div>
            <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">Publications</h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">Research, policy briefs, and strategic documents from PSTC.</p>
          </div>
          <Link href="/publications" className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-black text-foreground transition hover:border-[var(--pstc-primary)] hover:text-[var(--pstc-primary)]">
            View all <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {publications.map((pub) => (
            <Link
              key={pub.id}
              href={pub.href}
              onMouseEnter={() => setHovered(pub.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Cover image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <Image src={pub.cover} alt={pub.title} fill sizes="300px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/50" />
                {/* Category chip */}
                <span className="absolute left-3 top-3 rounded-full bg-black/40 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white backdrop-blur-sm">
                  {pub.category}
                </span>
              </div>

              {/* Text */}
              <div className="p-4">
                <h3 className="mb-1 text-sm font-black leading-snug text-foreground transition-colors group-hover:text-[var(--pstc-primary)]">{pub.title}</h3>
                <p className="text-[11px] text-muted-foreground">{pub.pages} pages</p>
                <div className="mt-3 flex items-center gap-1 text-[11px] font-black uppercase tracking-widest" style={{ color: "var(--pstc-primary)" }}>
                  <Download className="size-3.5" /> Download PDF
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SECTION 5 — PARTNERS
// ─────────────────────────────────────────────

function PartnersSection() {
  const all = [...bdPartners, ...globalPartners];

  return (
    <section className="relative overflow-hidden bg-card py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="container-pstc">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-[10px] font-black uppercase tracking-[0.36em]" style={{ color: "var(--pstc-secondary-dark)" }}>Our Partners</span>
          <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">Together for <span style={{ color: "var(--pstc-primary)" }}>Greater Impact</span></h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground">National institutions at the core, global development partners surrounding us — united in delivering sustainable community health and social change.</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-border px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-foreground">{bdPartners.length} National Partners</span>
            <span className="rounded-full border border-border px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-foreground">{globalPartners.length} Global Partners</span>
          </div>
        </div>

        {/* Partner grid with hover animation */}
        <div className="mb-10 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {all.map((name, i) => (
            <div
              key={name}
              className="group flex flex-col items-center justify-center rounded-xl border border-border bg-background p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--pstc-primary)] hover:shadow-md"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {/* placeholder orb */}
              <div className="mb-2 flex size-10 items-center justify-center rounded-full text-[10px] font-black text-white transition-colors group-hover:opacity-90 sm:size-12" style={{ background: i < bdPartners.length ? "var(--pstc-primary)" : "var(--pstc-secondary-dark)" }}>
                {name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
              </div>
              <span className="text-[9px] font-bold leading-4 text-muted-foreground group-hover:text-foreground sm:text-[10px]">{name}</span>
            </div>
          ))}
        </div>

        {/* Scrolling marquee */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-card to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-card to-transparent" />
          <div className="flex w-max animate-[v2marquee_30s_linear_infinite] gap-3">
            {[...all, ...all].map((name, i) => (
              <span key={`${name}-${i}`} className="whitespace-nowrap rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-muted-foreground">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SECTION 6 — MAGAZINE SUBSCRIPTION
// ─────────────────────────────────────────────

function MagazineSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="container-pstc">
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid lg:grid-cols-2">
            {/* Left — magazine showcase */}
            <div className="relative overflow-hidden p-8 sm:p-10 lg:border-r lg:border-border">
              {/* Subtle dot grid */}
              <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: `radial-gradient(circle, var(--pstc-primary) 1px, transparent 1px)`, backgroundSize: "28px 28px" }} />

              <div className="relative z-10">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-muted-foreground">
                  <Sparkles className="size-3" /> Digital Magazine
                </div>
                <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">PROJANMO<br /><span style={{ color: "var(--pstc-primary)" }}>Kotha</span></h2>
                <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                  PSTC's monthly magazine — field stories, youth voices, and community impact from across Bangladesh. Free soft copy, straight to your inbox.
                </p>

                {/* Floating books visual */}
                <div className="relative mt-8 flex items-end gap-3 pb-2">
                  {[
                    { src: "/publications/book-projonmo-bodle-bodle-jay.jpg", rotate: "-6deg", z: 0, scale: "1" },
                    { src: "/publications/publication Cover 1.png", rotate: "0deg", z: 10, scale: "1.08" },
                    { src: "/publications/proshno-korte-shikhun.jpg", rotate: "6deg", z: 0, scale: "1" },
                  ].map((book, i) => (
                    <div
                      key={i}
                      className="relative h-[160px] w-[110px] overflow-hidden rounded-lg border border-white/20 shadow-lg transition-transform duration-300 hover:scale-105 sm:h-[180px] sm:w-[125px]"
                      style={{ transform: `rotate(${book.rotate}) scale(${book.scale})`, zIndex: book.z }}
                    >
                      <Image src={book.src} alt="PROJANMO Kotha issue" fill sizes="140px" className="object-cover" />
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["Monthly", "Free", "Digital", "Bengali Stories"].map((tag) => (
                    <span key={tag} className="rounded-full border border-border px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="flex flex-col justify-center p-8 sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <div className="mb-4 flex size-16 items-center justify-center rounded-full" style={{ background: "var(--pstc-secondary-soft)" }}>
                    <CheckCircle2 className="size-8" style={{ color: "var(--pstc-secondary-dark)" }} />
                  </div>
                  <h3 className="text-2xl font-black text-foreground">You're subscribed!</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    Thank you, {name.split(" ")[0]}. We'll send PROJANMO Kotha to <strong className="text-foreground">{email}</strong>.
                  </p>
                </div>
              ) : (
                <div>
                  <p className="mb-1 text-[10px] font-black uppercase tracking-[0.28em]" style={{ color: "var(--pstc-secondary-dark)" }}>Stay in the loop</p>
                  <h3 className="mb-2 text-2xl font-black text-foreground">Get every issue free</h3>
                  <p className="mb-7 text-sm leading-7 text-muted-foreground">No print, no cost — just stories that matter, monthly in your inbox.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { id: "v2-name", label: "Full Name", icon: User, type: "text", val: name, set: setName, ph: "Your full name" },
                      { id: "v2-email", label: "Email", icon: Mail, type: "email", val: email, set: setEmail, ph: "you@example.com" },
                      { id: "v2-org", label: "Organization (optional)", icon: Building2, type: "text", val: org, set: setOrg, ph: "Your organization" },
                    ].map((f) => {
                      const Icon = f.icon;
                      return (
                        <label key={f.id} htmlFor={f.id} className="block">
                          <span className="mb-1.5 block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{f.label}</span>
                          <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 transition focus-within:border-[var(--pstc-primary)]">
                            <Icon className="size-4 shrink-0" style={{ color: "var(--pstc-primary)" }} />
                            <input
                              id={f.id}
                              type={f.type}
                              value={f.val}
                              onChange={(e) => f.set(e.target.value)}
                              placeholder={f.ph}
                              className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                            />
                          </div>
                        </label>
                      );
                    })}

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-black uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90 disabled:opacity-70"
                      style={{ background: "var(--pstc-primary)" }}
                    >
                      {loading ? "Subscribing…" : <>Subscribe for free <ArrowRight className="size-4" /></>}
                    </button>
                    <p className="text-center text-[11px] text-muted-foreground">Free digital subscription · Unsubscribe anytime</p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// ROOT — FULL LANDING PAGE
// ─────────────────────────────────────────────

export default function LandingPageV2() {
  return (
    <>
      <style jsx global>{`
        @keyframes v2up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes v2bar {
          from { width: 0% }
          to   { width: 100% }
        }
        @keyframes v2marquee {
          from { transform: translateX(0) }
          to   { transform: translateX(-50%) }
        }
      `}</style>

      <HeroSection />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <PublicationsSection />
      <PartnersSection />
      <MagazineSection />
    </>
  );
}
