"use client";

import { useMemo, useState } from "react";
import {
  BookOpen,
  CalendarDays,
  Download,
  Edit2,
  Eye,
  FileText,
  Plus,
  Search,
  Trash2,
  User,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PRIMARY = "#0193CD";
const SECONDARY = "#D13D34";

type PublicationStatus = "published" | "draft";

type PublicationItem = {
  id: number;
  title: string;
  category: string;
  author: string;
  fileType: string;
  downloads: number;
  status: PublicationStatus;
  date: string;
  description: string;
};

export default function PublicationsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const publications: PublicationItem[] = [
    {
      id: 1,
      title: "Annual Report 2025",
      category: "Report",
      author: "PSTC Admin",
      fileType: "PDF",
      downloads: 1240,
      status: "published",
      date: "2025-01-15",
      description:
        "A complete annual report covering PSTC programs, achievements, financial summary and impact highlights.",
    },
    {
      id: 2,
      title: "Community Health Guideline",
      category: "Health",
      author: "Health Team",
      fileType: "PDF",
      downloads: 865,
      status: "published",
      date: "2025-01-12",
      description:
        "Guideline document for community health awareness, family wellbeing and public health support activities.",
    },
    {
      id: 3,
      title: "Training Manual for Field Workers",
      category: "Training",
      author: "Training Unit",
      fileType: "DOCX",
      downloads: 532,
      status: "draft",
      date: "2025-01-10",
      description:
        "Training resource for field workers, facilitators and community development program teams.",
    },
    {
      id: 4,
      title: "Population Development Research Brief",
      category: "Research",
      author: "Research Team",
      fileType: "PDF",
      downloads: 710,
      status: "published",
      date: "2025-01-08",
      description:
        "Research brief focused on population development, social awareness and program-level impact analysis.",
    },
  ];

  const filteredPublications = useMemo(() => {
    return publications.filter((item) => {
      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.author.toLowerCase().includes(search.toLowerCase()) ||
        item.fileType.toLowerCase().includes(search.toLowerCase());

      const matchStatus =
        statusFilter === "all" || item.status === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [publications, search, statusFilter]);

  const publishedCount = publications.filter(
    (item) => item.status === "published",
  ).length;

  const draftCount = publications.filter(
    (item) => item.status === "draft",
  ).length;

  const totalDownloads = publications.reduce(
    (sum, item) => sum + item.downloads,
    0,
  );

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
            <h1 className="mt-2 text-3xl font-bold">Publications Management</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/85">
              Manage reports, manuals, research briefs, downloadable documents
              and publication status from one professional dashboard.
            </p>
          </div>

          <Button
            className="w-fit gap-2 rounded-2xl px-5 py-3 font-bold text-white hover:opacity-90"
            style={{ backgroundColor: SECONDARY }}
          >
            <Plus className="h-4 w-4" />
            Add Publication
          </Button>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-4">
        <StatsCard
          title="Total Publications"
          value={publications.length}
          icon={<BookOpen className="h-6 w-6" />}
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
          title="Downloads"
          value={totalDownloads.toLocaleString()}
          icon={<Download className="h-6 w-6" />}
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
              placeholder="Search publication title, category, author or file type..."
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
        {filteredPublications.map((item) => (
          <Card
            key={item.id}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative p-5">
              <div
                className="flex h-44 items-center justify-center rounded-3xl"
                style={{ backgroundColor: `${PRIMARY}12` }}
              >
                <div className="text-center">
                  <div
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl text-white shadow-md"
                    style={{ backgroundColor: PRIMARY }}
                  >
                    <FileText className="h-10 w-10" />
                  </div>

                  <p
                    className="mt-4 inline-flex rounded-full px-4 py-1 text-sm font-bold text-white"
                    style={{ backgroundColor: SECONDARY }}
                  >
                    {item.fileType}
                  </p>
                </div>
              </div>

              <div className="absolute left-8 top-8">
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
            </div>

            <div className="space-y-4 px-5 pb-5">
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

              <div className="grid gap-3 border-t border-slate-100 pt-4 text-sm text-slate-500">
                <div className="flex items-center justify-between gap-3">
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

                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="font-semibold text-slate-600">
                    Total Downloads
                  </span>
                  <span className="font-bold" style={{ color: PRIMARY }}>
                    {item.downloads.toLocaleString()}
                  </span>
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
                  className="ml-auto gap-2 rounded-xl text-white hover:opacity-90"
                  style={{ backgroundColor: PRIMARY }}
                >
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {filteredPublications.length === 0 && (
          <Card className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center md:col-span-2 xl:col-span-3">
            <BookOpen className="mx-auto h-12 w-12 text-slate-300" />
            <h3 className="mt-4 text-lg font-bold text-slate-800">
              No publications found
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
