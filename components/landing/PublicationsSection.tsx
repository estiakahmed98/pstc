"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, FileText } from "lucide-react";
import { motion } from "motion/react";
import ImageReveal2, { type RevealItem } from "@/components/ui/ImageReveal2";
import { MovingLinkButton } from "@/components/ui/moving-link-button";
import { SparklesText } from "../ui/sparkles-text";

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

function tenWords(text: string) {
  const words = text.trim().split(/\s+/).slice(0, 10).join(" ");
  return words ? `${words}...` : "";
}

function LatestPublicationCard({ pub }: { pub: Publication }) {
  return (
    <div className="group relative block aspect-680/811 w-full overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
      <Image
        src={pub.coverImage}
        alt={pub.title}
        fill
        sizes="(max-width: 1024px) 100vw, 420px"
        className="object-cover object-center transition duration-700 group-hover:scale-105"
      />

      <Link
        href={`/publications/${pub.id}`}
        aria-label={`View details for ${pub.title}`}
        className="absolute inset-0 z-10"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/82 via-black/24 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-20 p-7 text-white">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-white/75">
          {pub.category}
        </p>

        <h3 className="text-3xl font-black leading-tight tracking-tight">
          {pub.title}
        </h3>

        <p className="mt-4 max-h-0 overflow-hidden text-sm leading-7 text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
          {tenWords(pub.description)}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-start gap-3">
          <MovingLinkButton
            href={`/publications/${pub.id}`}
            variant="outline"
            className="relative z-20 min-w-0 border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur-md hover:border-white/40 hover:bg-white/20"
          >
            View Details
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </MovingLinkButton>

          <MovingLinkButton
            href={pub.downloadUrl}
            className="relative z-20 min-w-0 px-5 py-3"
          >
            <Download className="size-4" />
            Download PDF
          </MovingLinkButton>
        </div>
      </div>
    </div>
  );
}

export default function PublicationsSection({
  publications = MOCK_PUBLICATIONS,
  title = "Publications",
  subtitle = "Research reports, policy briefs, and strategic documents from PSTC.",
}: PublicationsSectionProps) {
  const latest = publications[0];
  const lastFour = publications.slice(1, 5);

  const revealItems: RevealItem[] = lastFour.map((pub) => ({
    id: pub.id,
    title: pub.title,
    image: pub.coverImage,
    href: `/publications/${pub.id}`,
    category: pub.category,
  }));

  return (
    <section className="relative bg-background px-4 py-12 text-foreground sm:px-6 lg:px-8">
      <div>
        <div className="mb-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
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

            <div>
              {" "}
              <SparklesText
                sparklesCount={6}
                colors={{
                  first: "var(--pstc-primary)",
                  second: "var(--pstc-secondary)",
                }}
                className="text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              >
                {title}
              </SparklesText>
            </div>

            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
              {subtitle}
            </p>
          </motion.div>

          <MovingLinkButton
            href="/publications"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-card px-6 py-3.5 text-sm font-black text-primary shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            View all publications
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </MovingLinkButton>
        </div>

        <div className="grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-start">
          <div className="flex flex-col gap-6">
            <LatestPublicationCard pub={latest} />
          </div>

          <div className="rounded-[2rem] border border-border bg-card p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-6 lg:p-8">
            <ImageReveal2 items={revealItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
