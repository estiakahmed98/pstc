"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Download, Eye } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
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

function PremiumPublicationCard({
  pub,
  large = false,
  index = 0,
}: {
  pub: Publication;
  large?: boolean;
  index?: number;
}) {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  return (
    <motion.article
      initial={{ opacity: 0, y: 60, rotate: index % 2 === 0 ? -2 : 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPosition({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        });
      }}
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-black/10 bg-black shadow-[0_26px_80px_rgba(15,23,42,0.16)] transition duration-500 hover:-translate-y-3 hover:rotate-0 hover:shadow-[0_45px_120px_rgba(9,145,203,0.24)]",
        large ? "min-h-[720px]" : "min-h-[560px]",
      )}
    >
      <Image
        src={pub.coverImage}
        alt={pub.title}
        fill
        sizes={large ? "(max-width: 1024px) 100vw, 34vw" : "28vw"}
        className="object-cover opacity-95 transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/5" />

      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(255,255,255,0.26), transparent 36%)`,
        }}
      />

      <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-white/95 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-primary backdrop-blur">
          {pub.category}
        </span>

        {pub.featured ? (
          <span className="rounded-full bg-secondary px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-white">
            Featured
          </span>
        ) : null}
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-semibold text-white/72">
          <span className="flex items-center gap-1.5">
            <Calendar className="size-3.5" />
            {formatDate(pub.publishedAt)}
          </span>
          <span className="size-1 rounded-full bg-white/40" />
          <span className="flex items-center gap-1.5">
            <Eye className="size-3.5" />
            {pub.pages} pages
          </span>
        </div>

        <h3
          className={cn(
            "font-black leading-tight tracking-tight text-white drop-shadow-sm",
            large ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl",
          )}
        >
          {pub.title}
        </h3>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href={`/publications/${pub.id}`}
            className="group/btn inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-black transition hover:bg-primary hover:text-white"
          >
            View
            <ArrowRight className="size-4 transition group-hover/btn:translate-x-1" />
          </Link>

          <a
            href={pub.downloadUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-black text-white backdrop-blur transition hover:border-white hover:bg-white hover:text-black"
          >
            <Download className="size-4" />
            PDF
          </a>
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
    <section className="relative overflow-hidden bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 " />

      <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-xs font-black uppercase tracking-[0.34em] text-secondary">
              Knowledge Hub
            </p>

            <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              {title}
            </h2>
          </motion.div>

          <Link
            href="/publications"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-black text-foreground transition hover:-translate-y-1 hover:border-primary hover:text-primary"
          >
            View all publications
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <PremiumPublicationCard pub={featured} large index={0} />

          <div className="grid gap-5 sm:grid-cols-2">
            {grid.map((pub, index) => (
              <PremiumPublicationCard
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
