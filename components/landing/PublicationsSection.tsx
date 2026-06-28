"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Download,
  Eye,
  FileText,
} from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

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

const MOCK_PUBLICATIONS: Publication[] = [
  {
    id: "annual-report-2024",
    title: "Annual Report 2024",
    description:
      "A comprehensive overview of PSTC's achievements, financial performance, and strategic milestones throughout 2024.",
    category: "Annual Report",
    coverImage: "/publications/book-projonmo-bodle-bodle-jay.jpg",
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

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function PublicationMeta({
  publishedAt,
  pages,
  light = false,
}: {
  publishedAt: string;
  pages: number;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3 text-xs font-bold",
        light ? "text-white/75" : "text-muted-foreground",
      )}
    >
      <span className="flex items-center gap-1.5">
        <Calendar className="size-3.5" />
        {formatDate(publishedAt)}
      </span>

      <span
        className={cn(
          "size-1 rounded-full",
          light ? "bg-white/40" : "bg-muted-foreground/35",
        )}
      />

      <span className="flex items-center gap-1.5">
        <Eye className="size-3.5" />
        {pages} pages
      </span>
    </div>
  );
}

function FeaturedPublicationCard({ pub }: { pub: Publication }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-[2rem] border border-primary/15 bg-card shadow-[0_28px_90px_rgba(16,24,40,0.12)]"
    >
      <div className="grid min-h-[560px] lg:grid-cols-[0.88fr_1.12fr]">
        {/* Cover */}
        <div className="relative min-h-[360px] overflow-hidden bg-muted lg:min-h-full">
          <Image
            src={pub.coverImage}
            alt={pub.title}
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent lg:hidden" />

          <div className="absolute left-5 top-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-primary shadow-sm">
              {pub.category}
            </span>

            <span className="rounded-full bg-secondary px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-secondary-foreground shadow-sm">
              Featured
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="relative flex flex-col justify-between p-7 sm:p-8 lg:p-10">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
              <BookOpen className="size-4" />
              Featured Publication
            </div>

            <PublicationMeta publishedAt={pub.publishedAt} pages={pub.pages} />

            <h3 className="mt-5 text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl">
              {pub.title}
            </h3>

            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
              {pub.description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/publications/${pub.id}`}
              className="group/btn inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-black text-primary-foreground shadow-[0_16px_40px_var(--pstc-primary-glow)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--pstc-primary-dark)]"
            >
              View Details
              <ArrowRight className="size-4 transition group-hover/btn:translate-x-1" />
            </Link>

            <a
              href={pub.downloadUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-black text-foreground shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:bg-secondary hover:text-secondary-foreground"
            >
              <Download className="size-4" />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CompactPublicationCard({
  pub,
  index,
}: {
  pub: Publication;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_22px_60px_rgba(16,24,40,0.12)]"
    >
      <div className="grid gap-4 sm:grid-cols-[132px_1fr]">
        <div className="relative h-44 overflow-hidden rounded-[1.15rem] bg-muted sm:h-full">
          <Image
            src={pub.coverImage}
            alt={pub.title}
            fill
            sizes="180px"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="flex min-w-0 flex-col justify-between py-1">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-primary">
                {pub.category}
              </span>
            </div>

            <h3 className="line-clamp-2 text-xl font-black leading-tight text-foreground transition group-hover:text-primary">
              {pub.title}
            </h3>

            <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
              {pub.description}
            </p>

            <div className="mt-4">
              <PublicationMeta
                publishedAt={pub.publishedAt}
                pages={pub.pages}
              />
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <Link
              href={`/publications/${pub.id}`}
              className="inline-flex items-center gap-1.5 text-sm font-black text-primary transition hover:text-secondary"
            >
              View
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>

            <a
              href={pub.downloadUrl}
              download
              className="inline-flex items-center gap-1.5 text-sm font-black text-muted-foreground transition hover:text-secondary"
            >
              <Download className="size-4" />
              PDF
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function PublicationsSection({
  publications = MOCK_PUBLICATIONS,
  title = "Publications",
  subtitle = "Research reports, policy briefs, and strategic documents from PSTC.",
}: PublicationsSectionProps) {
  const featured =
    publications.find((item) => item.featured) ?? publications[0];
  const grid = publications
    .filter((item) => item.id !== featured.id)
    .slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-background px-4 py-24 text-foreground sm:px-6 lg:px-8 lg:py-32">
      {/* Soft background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(9,145,203,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,145,203,0.055)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-secondary">
              <FileText className="size-4" />
              Knowledge Hub
            </div>

            <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
              {subtitle}
            </p>
          </motion.div>

          <Link
            href="/publications"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-card px-6 py-3.5 text-sm font-black text-foreground shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            View all publications
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Content */}
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <FeaturedPublicationCard pub={featured} />

          <div className="grid gap-5">
            {grid.map((pub, index) => (
              <CompactPublicationCard
                key={pub.id}
                pub={pub}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
