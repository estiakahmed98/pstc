"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Download, ArrowRight, BookOpen, Calendar, Eye } from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Publication {
  id: string;
  title: string;
  description: string;
  category: string;
  coverImage: string;
  publishedAt: string;
  pages: number;
  downloadUrl: string;
  featured?: boolean;
}

interface PublicationsSectionProps {
  publications?: Publication[];
  title?: string;
  subtitle?: string;
}

// ---------------------------------------------------------------------------
// Mock data — replace with your real data / API call
// ---------------------------------------------------------------------------

const MOCK_PUBLICATIONS: Publication[] = [
  {
    id: "annual-report-2024",
    title: "Annual Report 2024",
    description:
      "A comprehensive overview of PSTC's achievements, financial performance, and strategic milestones throughout the year 2024. Includes key program outcomes and future roadmap.",
    category: "Annual Report",
    coverImage: "/publications/annual-report-2024.jpg",
    publishedAt: "2024-12-01",
    pages: 84,
    downloadUrl: "/publications/annual-report-2024.pdf",
    featured: true,
  },
  {
    id: "training-impact-2024",
    title: "Training Impact Assessment 2024",
    description:
      "Measuring the outcomes of our vocational training programs across all divisions.",
    category: "Research",
    coverImage: "/publications/training-impact.jpg",
    publishedAt: "2024-09-15",
    pages: 42,
    downloadUrl: "/publications/training-impact-2024.pdf",
  },
  {
    id: "skills-gap-report",
    title: "National Skills Gap Report",
    description:
      "Analysis of workforce skill shortages and PSTC's role in bridging the gap through targeted interventions.",
    category: "Policy Brief",
    coverImage: "/publications/skills-gap.jpg",
    publishedAt: "2024-07-20",
    pages: 56,
    downloadUrl: "/publications/skills-gap-report.pdf",
  },
  {
    id: "gender-inclusion-2023",
    title: "Gender Inclusion in Technical Education",
    description:
      "Exploring how PSTC promotes gender equity across its technical and vocational education programs.",
    category: "Report",
    coverImage: "/publications/gender-inclusion.jpg",
    publishedAt: "2023-11-10",
    pages: 38,
    downloadUrl: "/publications/gender-inclusion.pdf",
  },
  {
    id: "strategic-plan-2025",
    title: "Strategic Plan 2025–2030",
    description:
      "PSTC's five-year roadmap outlining priority sectors, expansion goals, and institutional strengthening.",
    category: "Strategic Document",
    coverImage: "/publications/strategic-plan.jpg",
    publishedAt: "2024-01-05",
    pages: 72,
    downloadUrl: "/publications/strategic-plan-2025.pdf",
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Gradient placeholder when no real cover image
function CoverPlaceholder({
  category,
  featured,
}: {
  category: string;
  featured?: boolean;
}) {
  const palettes: Record<string, string> = {
    "Annual Report": "from-[#0991cb] to-[#045c83]",
    Research: "from-[#d73f32] to-[#b93228]",
    "Policy Brief": "from-[#0677a7] to-[#6366f1]",
    Report: "from-[#0991cb] to-[#d73f32]",
    "Strategic Document": "from-[#045c83] to-[#0991cb]",
  };
  const gradient = palettes[category] ?? "from-[#0991cb] to-[#d73f32]";
  return (
    <div
      className={`w-full h-full bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-3`}
    >
      <BookOpen
        className="text-white/70"
        size={featured ? 56 : 36}
        strokeWidth={1.2}
      />
      <span
        className={`text-white/60 font-medium text-center px-4 ${
          featured ? "text-sm" : "text-xs"
        }`}
      >
        {category}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Featured card (left, large)
// ---------------------------------------------------------------------------

function FeaturedCard({ pub }: { pub: Publication }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/publications/${pub.id}`}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-[var(--pstc-primary)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Cover image area */}
      <div className="relative h-72 sm:h-80 md:h-[340px] overflow-hidden flex-shrink-0">
        {/* Actual image — swap src to pub.coverImage in production */}
        <CoverPlaceholder category={pub.category} featured />

        {/* Category badge */}
        <span className="absolute top-4 left-4 z-10 text-xs font-semibold px-3 py-1 rounded-full bg-[var(--pstc-primary)] text-white shadow-md">
          {pub.category}
        </span>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[var(--pstc-primary)]/90 backdrop-blur-sm transition-all duration-400 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-white text-sm text-center px-6 leading-relaxed line-clamp-4">
            {pub.description}
          </p>
          <a
            href={pub.downloadUrl}
            download
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[var(--pstc-primary)] text-sm font-semibold hover:bg-[var(--pstc-secondary)] hover:text-white transition-colors duration-200 shadow-lg"
          >
            <Download size={14} />
            Download PDF
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="flex items-center gap-3 text-xs text-[var(--muted-foreground)]">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {formatDate(pub.publishedAt)}
          </span>
          <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
          <span className="flex items-center gap-1">
            <Eye size={12} />
            {pub.pages} pages
          </span>
        </div>

        <h3 className="text-xl font-semibold text-[var(--foreground)] leading-snug group-hover:text-[var(--pstc-primary)] transition-colors duration-300">
          {pub.title}
        </h3>

        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed line-clamp-3 flex-1">
          {pub.description}
        </p>

        <div className="flex items-center gap-2 text-sm font-semibold text-[var(--pstc-primary)] group-hover:gap-3 transition-all duration-300">
          View Publication
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Grid card (right, small — 4 of them)
// ---------------------------------------------------------------------------

function GridCard({ pub }: { pub: Publication }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/publications/${pub.id}`}
      className="group relative flex flex-col rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)] shadow-md hover:shadow-xl transition-all duration-400 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-[var(--pstc-primary)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Cover */}
      <div className="relative h-36 overflow-hidden flex-shrink-0">
        <CoverPlaceholder category={pub.category} />

        {/* Category badge */}
        <span className="absolute top-2.5 left-2.5 z-10 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[var(--pstc-secondary)] text-white">
          {pub.category}
        </span>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-[var(--pstc-primary)]/90 backdrop-blur-sm transition-all duration-350 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-white text-[11px] text-center px-3 leading-relaxed line-clamp-3">
            {pub.description}
          </p>
          <a
            href={pub.downloadUrl}
            download
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[var(--pstc-primary)] text-xs font-semibold hover:bg-[var(--pstc-secondary)] hover:text-white transition-colors duration-200"
          >
            <Download size={11} />
            Download
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-3.5 gap-2">
        <div className="flex items-center gap-2 text-[10px] text-[var(--muted-foreground)]">
          <Calendar size={10} />
          {formatDate(pub.publishedAt)}
          <span className="ml-auto flex items-center gap-1">
            <Eye size={10} />
            {pub.pages}p
          </span>
        </div>

        <h3 className="text-sm font-semibold text-[var(--foreground)] leading-snug group-hover:text-[var(--pstc-primary)] transition-colors duration-300 line-clamp-2">
          {pub.title}
        </h3>

        <div className="mt-auto flex items-center gap-1 text-xs font-medium text-[var(--pstc-primary)] group-hover:gap-2 transition-all duration-300">
          Read more
          <ArrowRight
            size={12}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export default function PublicationsSection({
  publications = MOCK_PUBLICATIONS,
  title = "Publications",
  subtitle = "Research reports, policy briefs, and strategic documents from PSTC.",
}: PublicationsSectionProps) {
  const featured = publications.find((p) => p.featured) ?? publications[0];
  const grid = publications.filter((p) => p.id !== featured.id).slice(0, 4);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[var(--background)]">
      {/* Subtle grid backdrop */}
      <div
        className="pstc-hero-grid absolute inset-0 pointer-events-none"
        aria-hidden
      />

      {/* Radial glow — top-left primary */}
      <div
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--pstc-primary-glow) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      {/* Radial glow — bottom-right secondary */}
      <div
        className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--pstc-secondary-glow) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="container-pstc relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[var(--pstc-primary)] mb-3">
              <span className="block w-6 h-px bg-[var(--pstc-primary)]" />
              Knowledge Hub
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--foreground)] leading-tight">
              {title}
            </h2>
            <p className="mt-2 text-[var(--muted-foreground)] text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          <Link
            href="/publications"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--pstc-primary)] shrink-0 hover:text-[var(--pstc-secondary)] transition-colors duration-200"
          >
            View all publications
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Layout: Featured (left) + Grid (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
          {/* Featured — full height left column */}
          <FeaturedCard pub={featured} />

          {/* Right: 2×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
            {grid.map((pub) => (
              <GridCard key={pub.id} pub={pub} />
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--muted)]/40 px-6 py-5">
          <div>
            <p className="text-sm font-semibold text-[var(--foreground)]">
              Looking for older reports?
            </p>
            <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
              Browse the full archive of PSTC publications dating back to 2010.
            </p>
          </div>
          <Link
            href="/publications/archive"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--pstc-primary)] text-white text-sm font-semibold hover:bg-[var(--pstc-primary-dark)] transition-colors duration-200 shadow-md shrink-0"
          >
            <BookOpen size={15} />
            Browse Archive
          </Link>
        </div>
      </div>
    </section>
  );
}
