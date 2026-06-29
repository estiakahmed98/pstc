"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Newspaper,
} from "lucide-react";
import { motion } from "motion/react";
import { SparklesText } from "../ui/sparkles-text";

type NewsItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  href: string;
};

const NEWS_ITEMS: NewsItem[] = [
  {
    id: "community-health-initiative",
    title: "PSTC launches new community health initiative",
    description:
      "A new community-based health program has started to improve access to essential services for underserved families.",
    category: "Health",
    date: "15 June 2026",
    image: "/images/community-mobilization-program.avif",
    href: "/news/community-health-initiative",
  },
  {
    id: "women-leadership-training",
    title: "Women leadership training completed successfully",
    description:
      "Participants completed practical training focused on leadership, rights, communication, and community engagement.",
    category: "Training",
    date: "02 June 2026",
    image: "/images/youth-adolescent-development.jpg",
    href: "/news/women-leadership-training",
  },
  {
    id: "climate-action-program",
    title: "Climate action program expanded in coastal areas",
    description:
      "The program is expanding awareness and resilience activities among vulnerable coastal communities.",
    category: "Environment",
    date: "28 May 2026",
    image: "/images/initiatives.avif",
    href: "/news/climate-action-program",
  },
  {
    id: "youth-skill-development",
    title: "Youth skill development project reaches new milestone",
    description:
      "Young people are receiving skills training to improve employability and future livelihood opportunities.",
    category: "Education",
    date: "18 May 2026",
    image: "/images/skills-education-training.jpg",
    href: "/news/youth-skill-development",
  },
  {
    id: "safe-motherhood-campaign",
    title: "Safe motherhood awareness campaign begins",
    description:
      "Community sessions are helping families understand maternal health, safe delivery, and referral support.",
    category: "Health",
    date: "10 May 2026",
    image: "/images/population-health-nutrition.jpg",
    href: "/news/safe-motherhood-campaign",
  },
];

function FeaturedNewsCard({ item }: { item: NewsItem }) {
  return (
    <Link
      href={item.href}
      className="group relative block h-[360px] overflow-hidden rounded-3xl border border-border bg-card shadow-[0_18px_50px_rgba(15,23,42,0.10)] sm:h-[420px] lg:h-full"
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 44vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

      <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-primary shadow-sm">
        Featured
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6 lg:p-7">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white/80">
          <span>{item.category}</span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5" />
            {item.date}
          </span>
        </div>

        <h3 className="max-w-2xl text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
          {item.title}
        </h3>

        <p className="mt-3 line-clamp-2 max-w-xl text-sm leading-6 text-white/82 sm:text-base">
          {item.description}
        </p>

        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-black text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
          Read Story
          <ArrowRight className="size-4 transition group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

function SmallNewsCard({ item }: { item: NewsItem }) {
  return (
    <Link
      href={item.href}
      className="group grid gap-4 rounded-3xl border border-border bg-card p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)] sm:grid-cols-[150px_minmax(0,1fr)] sm:items-center"
    >
      <div className="relative h-40 overflow-hidden rounded-2xl bg-muted sm:h-28">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, 150px"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="min-w-0 px-1 py-1">
        <div className="mb-2 flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">
          <span className="text-primary">{item.category}</span>
          <span>•</span>
          <span>{item.date}</span>
        </div>

        <h3 className="line-clamp-2 text-lg font-black leading-tight text-foreground transition group-hover:text-primary">
          {item.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted-foreground">
          {item.description}
        </p>

        <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-black text-primary">
          Read more
          <ArrowUpRight className="size-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}

export default function LatestNewsSection() {
  const featured = NEWS_ITEMS[0];
  const others = NEWS_ITEMS.slice(1, 5);

  return (
    <section className="relative bg-background px-4 py-8 text-foreground sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto lg:p-15">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            <SparklesText
              sparklesCount={5}
              colors={{
                first: "var(--pstc-primary)",
                second: "var(--pstc-secondary)",
              }}
              className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              <span className="text-primary">Latest News &</span>{" "}
              <span className="text-secondary">Stories</span>
            </SparklesText>

            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Stay updated with PSTC’s latest initiatives, community stories,
              partnerships, and institutional updates.
            </p>
          </motion.div>

          <Link
            href="/news"
            className="group inline-flex h-10 w-fit items-center gap-2 rounded-full border border-primary/20 bg-card px-4 text-xs font-black text-primary shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground sm:h-11 sm:px-5 sm:text-sm"
          >
            View All News
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <FeaturedNewsCard item={featured} />

          <div className="grid gap-4">
            {others.map((item) => (
              <SmallNewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
