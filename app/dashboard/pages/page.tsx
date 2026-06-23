"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  Edit2,
  Eye,
  FileText,
  Plus,
  Search,
  Trash2,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PRIMARY = "#0193CD";
const SECONDARY = "#D13D34";

type PageStatus = "published" | "draft";

type PageItem = {
  id: number;
  title: string;
  slug: string;
  status: PageStatus;
  date: string;
};

export default function PagesPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const pages: PageItem[] = [
    {
      id: 1,
      title: "Homepage",
      slug: "home",
      status: "published",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "About Us",
      slug: "about",
      status: "published",
      date: "2024-01-14",
    },
    {
      id: 3,
      title: "Programs",
      slug: "programs",
      status: "published",
      date: "2024-01-10",
    },
    {
      id: 4,
      title: "Contact",
      slug: "contact",
      status: "draft",
      date: "2024-01-12",
    },
  ];

  const filteredPages = useMemo(() => {
    return pages.filter((page) => {
      const matchSearch =
        page.title.toLowerCase().includes(search.toLowerCase()) ||
        page.slug.toLowerCase().includes(search.toLowerCase());

      const matchStatus =
        statusFilter === "all" || page.status === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [pages, search, statusFilter]);

  const publishedCount = pages.filter(
    (page) => page.status === "published",
  ).length;

  const draftCount = pages.filter((page) => page.status === "draft").length;

  return (
    <div className="min-h-screen space-y-6 bg-slate-50 p-4">
      <div
        className="rounded-3xl p-6 text-white shadow-lg md:p-8"
        style={{ backgroundColor: PRIMARY }}
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-white/80">
              PSTC Website CMS
            </p>
            <h1 className="mt-2 text-3xl font-bold">Pages Management</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/85">
              Create, manage, publish and organize all website pages from one
              professional dashboard.
            </p>
          </div>

          <Button
            className="w-fit gap-2 rounded-2xl px-5 py-3 font-bold text-white hover:opacity-90"
            style={{ backgroundColor: SECONDARY }}
          >
            <Plus className="h-4 w-4" />
            Create Page
          </Button>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <StatsCard
          title="Total Pages"
          value={pages.length}
          icon={<FileText className="h-6 w-6" />}
          color={PRIMARY}
        />

        <StatsCard
          title="Published Pages"
          value={publishedCount}
          icon={<Eye className="h-6 w-6" />}
          color={PRIMARY}
        />

        <StatsCard
          title="Draft Pages"
          value={draftCount}
          icon={<Edit2 className="h-6 w-6" />}
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
              placeholder="Search page title or slug..."
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:bg-white"
              style={
                {
                  "--tw-ring-color": `${PRIMARY}20`,
                } as React.CSSProperties
              }
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

      <Card className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
        <div className="border-b border-slate-200 bg-white p-5">
          <h2 className="text-lg font-bold text-slate-900">All Pages</h2>
          <p className="text-sm text-slate-500">
            Showing {filteredPages.length} of {pages.length} pages
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100 text-sm text-slate-600">
                <th className="px-6 py-4 text-left font-bold">Page</th>
                <th className="px-6 py-4 text-left font-bold">Slug</th>
                <th className="px-6 py-4 text-left font-bold">Status</th>
                <th className="px-6 py-4 text-left font-bold">Updated Date</th>
                <th className="px-6 py-4 text-right font-bold">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 bg-white">
              {filteredPages.map((page) => (
                <tr key={page.id} className="transition hover:bg-slate-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-2xl text-white"
                        style={{ backgroundColor: PRIMARY }}
                      >
                        <FileText className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="font-bold text-slate-900">{page.title}</p>
                        <p className="text-xs text-slate-500">
                          Page ID: #{page.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-xl bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-600">
                      /{page.slug}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <Badge
                      className="capitalize text-white hover:opacity-90"
                      style={{
                        backgroundColor:
                          page.status === "published" ? PRIMARY : SECONDARY,
                      }}
                    >
                      {page.status}
                    </Badge>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                      <CalendarDays className="h-4 w-4" />
                      {page.date}
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-9 w-9 rounded-xl border-slate-200 hover:text-white"
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
                        className="h-9 w-9 rounded-xl border-slate-200 hover:text-white"
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
                        className="h-9 w-9 rounded-xl border-slate-200 hover:text-white"
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
                    </div>
                  </td>
                </tr>
              ))}

              {filteredPages.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-16 text-center">
                    <FileText className="mx-auto h-12 w-12 text-slate-300" />
                    <h3 className="mt-4 text-lg font-bold text-slate-800">
                      No pages found
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Try changing search or status filter.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
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
