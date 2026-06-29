"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Download,
  Eye,
  FileText,
  Search,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { MovingLinkButton } from "@/components/ui/moving-link-button";

type Publication = {
  id: string;
  title: string;
  description: string;
  category: string;
  coverImage: string;
  publishedAt: string;
  pages: number;
  downloadUrl: string;
};

const PUBLICATIONS: Publication[] = [
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

const categories = [
  "All",
  ...Array.from(new Set(PUBLICATIONS.map((item) => item.category))),
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="group overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
    >
      <Link href={`/publications/${publication.id}`} className="block">
        <div className="relative aspect-[680/811] overflow-hidden bg-muted">
          <img
            src={publication.coverImage}
            alt={publication.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-primary shadow-sm">
            {publication.category}
          </div>
        </div>
      </Link>

      <div className="p-5">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-bold text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="size-3.5" />
            {formatDate(publication.publishedAt)}
          </span>
          <span className="size-1 rounded-full bg-muted-foreground/30" />
          <span className="flex items-center gap-1.5">
            <Eye className="size-3.5" />
            {publication.pages} pages
          </span>
        </div>

        <h3 className="line-clamp-2 text-xl font-black leading-tight text-foreground transition group-hover:text-primary">
          {publication.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
          {publication.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <Link
            href={`/publications/${publication.id}`}
            className="inline-flex items-center gap-2 text-sm font-black text-primary transition hover:text-secondary"
          >
            View Details
            <ArrowRight className="size-4" />
          </Link>

          <a
            href={publication.downloadUrl}
            download
            className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-secondary hover:bg-secondary hover:text-secondary-foreground"
          >
            <Download className="size-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function AllPublicationsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredPublications = useMemo(() => {
    return PUBLICATIONS.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      const matchesQuery =
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const parallaxImages = PUBLICATIONS.map((item) => item.coverImage);

  return (
    <main className="bg-background text-foreground">
      <section id="publication-list" className="px-4 py-14 sm:px-6 lg:px-8">
        <div>
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="mt-18">
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Publication
              </h2>
            </div>

            <div className="relative w-full lg:max-w-sm">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search publications..."
                className="h-12 w-full rounded-full border border-border bg-card pl-11 pr-4 text-sm font-semibold outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2.5 text-sm font-black transition ${
                  activeCategory === category
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredPublications.map((publication) => (
              <PublicationCard key={publication.id} publication={publication} />
            ))}
          </div>

          {filteredPublications.length === 0 ? (
            <div className="rounded-[2rem] border border-border bg-card p-10 text-center">
              <p className="text-lg font-black">No publications found</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try another category or search keyword.
              </p>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
