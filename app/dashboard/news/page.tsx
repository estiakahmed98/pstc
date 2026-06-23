"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  Edit2,
  Eye,
  ImageIcon,
  Newspaper,
  Plus,
  Search,
  Star,
  Trash2,
  User,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PRIMARY = "#0193CD";
const SECONDARY = "#D13D34";

type NewsStatus = "published" | "draft";

type NewsItem = {
  id: number;
  title: string;
  category: string;
  author: string;
  image: string;
  description: string;
  status: NewsStatus;
  featured: boolean;
  date: string;
};

export default function NewsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const news: NewsItem[] = [
    {
      id: 1,
      title: "PSTC Launches New Community Health Program",
      category: "Health",
      author: "Admin",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
      description:
        "PSTC has launched a new community health awareness program to support families and improve access to essential health information.",
      status: "published",
      featured: true,
      date: "2025-01-15",
    },
    {
      id: 2,
      title: "Training Workshop Successfully Completed",
      category: "Training",
      author: "Editor",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
      description:
        "A professional training workshop was completed successfully with active participation from community workers and local partners.",
      status: "published",
      featured: false,
      date: "2025-01-14",
    },
    {
      id: 3,
      title: "Youth Development Campaign Announced",
      category: "Development",
      author: "Admin",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
      description:
        "The youth development campaign will focus on leadership, awareness, skill building and social responsibility among young people.",
      status: "draft",
      featured: false,
      date: "2025-01-12",
    },
    {
      id: 4,
      title: "Population Awareness Event Held in Dhaka",
      category: "Event",
      author: "Moderator",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
      description:
        "A population awareness event was organized in Dhaka to promote public understanding of development, health and social wellbeing.",
      status: "published",
      featured: true,
      date: "2025-01-10",
    },
  ];

  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.author.toLowerCase().includes(search.toLowerCase());

      const matchStatus =
        statusFilter === "all" || item.status === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [news, search, statusFilter]);

  const publishedCount = news.filter(
    (item) => item.status === "published",
  ).length;
  const draftCount = news.filter((item) => item.status === "draft").length;
  const featuredCount = news.filter((item) => item.featured).length;

  return (
    <div className="min-h-screen space-y-6 bg-slate-50 p-4 md:p-6">
      <div
        className="rounded-3xl p-6 text-white shadow-lg md:p-8"
        style={{ backgroundColor: PRIMARY }}
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-white/80">
              PSTC Website CMS
            </p>
            <h1 className="mt-2 text-3xl font-bold">News Management</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/85">
              Manage news articles, featured stories, categories, images and
              publishing status from a professional content dashboard.
            </p>
          </div>

          <Button
            className="w-fit gap-2 rounded-2xl px-5 py-3 font-bold text-white hover:opacity-90"
            style={{ backgroundColor: SECONDARY }}
          >
            <Plus className="h-4 w-4" />
            Add News
          </Button>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-4">
        <StatsCard
          title="Total News"
          value={news.length}
          icon={<Newspaper className="h-6 w-6" />}
          color={PRIMARY}
        />

        <StatsCard
          title="Published"
          value={publishedCount}
          icon={<Eye className="h-6 w-6" />}
          color={PRIMARY}
        />

        <StatsCard
          title="Draft"
          value={draftCount}
          icon={<Edit2 className="h-6 w-6" />}
          color={SECONDARY}
        />

        <StatsCard
          title="Featured"
          value={featuredCount}
          icon={<Star className="h-6 w-6" />}
          color={SECONDARY}
        />
      </div>

      <Card className="rounded-3xl border border-slate-200 p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-[1fr_220px]">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search news title, category or author..."
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:bg-white"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-700 outline-none focus:bg-white"
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredNews.map((item) => (
          <Card
            key={item.id}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-56 overflow-hidden bg-slate-100">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute left-4 top-4 flex gap-2">
                {item.featured && (
                  <Badge
                    className="gap-1 text-white shadow-md"
                    style={{ backgroundColor: SECONDARY }}
                  >
                    <Star className="h-3 w-3" />
                    Featured
                  </Badge>
                )}

                <Badge
                  className="capitalize text-white shadow-md"
                  style={{
                    backgroundColor:
                      item.status === "published" ? PRIMARY : SECONDARY,
                  }}
                >
                  {item.status}
                </Badge>
              </div>

              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/90 text-slate-700 shadow-md">
                <ImageIcon className="h-5 w-5" />
              </div>
            </div>

            <div className="space-y-4 p-5">
              <Badge
                variant="outline"
                className="bg-white font-semibold"
                style={{
                  borderColor: PRIMARY,
                  color: PRIMARY,
                }}
              >
                {item.category}
              </Badge>

              <div>
                <h3 className="line-clamp-2 text-lg font-bold leading-7 text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" style={{ color: PRIMARY }} />
                  <span className="font-medium">{item.author}</span>
                </div>

                <div className="flex items-center gap-2">
                  <CalendarDays
                    className="h-4 w-4"
                    style={{ color: SECONDARY }}
                  />
                  <span className="font-medium">{item.date}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-10 w-10 rounded-xl border-slate-200 hover:text-white"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = PRIMARY;
                    e.currentTarget.style.borderColor = PRIMARY;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffffff";
                    e.currentTarget.style.borderColor = "#e2e8f0";
                  }}
                >
                  <Eye className="h-4 w-4" />
                </Button>

                <Button
                  size="icon"
                  variant="outline"
                  className="h-10 w-10 rounded-xl border-slate-200 hover:text-white"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = PRIMARY;
                    e.currentTarget.style.borderColor = PRIMARY;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffffff";
                    e.currentTarget.style.borderColor = "#e2e8f0";
                  }}
                >
                  <Edit2 className="h-4 w-4" />
                </Button>

                <Button
                  size="icon"
                  variant="outline"
                  className="h-10 w-10 rounded-xl border-slate-200 hover:text-white"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = SECONDARY;
                    e.currentTarget.style.borderColor = SECONDARY;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffffff";
                    e.currentTarget.style.borderColor = "#e2e8f0";
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>

                <Button
                  className="ml-auto rounded-xl text-white hover:opacity-90"
                  style={{ backgroundColor: PRIMARY }}
                >
                  Manage
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {filteredNews.length === 0 && (
          <Card className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center md:col-span-2 xl:col-span-3">
            <Newspaper className="mx-auto h-12 w-12 text-slate-300" />
            <h3 className="mt-4 text-lg font-bold text-slate-800">
              No news found
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Try changing search or status filter.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}

function StatsCard({
  title,
  value,
  icon,
  color,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <Card className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="h-1.5" style={{ backgroundColor: color }} />

      <div className="flex items-center justify-between gap-4 p-6">
        <div>
          <p className="text-sm font-semibold text-slate-500">{title}</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">{value}</h2>
        </div>

        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{ backgroundColor: `${color}15`, color }}
        >
          {icon}
        </div>
      </div>
    </Card>
  );
}
