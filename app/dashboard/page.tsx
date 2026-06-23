"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { dashboardStats } from "@/lib/data/analytics";
import {
  Activity,
  ArrowUpRight,
  Download,
  Eye,
  FileText,
  Newspaper,
  Plus,
  Users,
} from "lucide-react";

const PRIMARY = "#0193CD";
const SECONDARY = "#D13D34";

export default function DashboardPage() {
  const activities = [
    { action: "New publication added", time: "2 hours ago", status: "success" },
    { action: "User profile updated", time: "4 hours ago", status: "info" },
    { action: "Page published", time: "1 day ago", status: "success" },
    { action: "Event created", time: "2 days ago", status: "info" },
  ];

  const quickActions = [
    "Create Page",
    "Add News",
    "New Event",
    "Upload File",
    "Add User",
    "View Report",
  ];

  const contentStatus = [
    { type: "News Articles", total: 45, published: 42, draft: 3 },
    { type: "Publications", total: 32, published: 28, draft: 4 },
    { type: "Events", total: 18, published: 15, draft: 3 },
    { type: "Job Listings", total: 8, published: 7, draft: 1 },
  ];

  return (
    <div className="min-h-screen space-y-6 bg-slate-50 p-4 ">
      <div
        className="rounded-3xl p-6 text-white shadow-lg md:p-8"
        style={{ backgroundColor: PRIMARY }}
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-white/80">
              PSTC Admin Panel
            </p>
            <h1 className="mt-2 text-3xl font-bold">Dashboard Overview</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/85">
              Welcome back. Monitor website content, users, downloads,
              publications and recent system activity from one place.
            </p>
          </div>

          <div
            className="inline-flex w-fit items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold text-white shadow-md"
            style={{ backgroundColor: SECONDARY }}
          >
            <Activity className="h-4 w-4" />
            Live Analytics
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
        <StatsCard
          title="Total Pages"
          value={dashboardStats.totalPages}
          icon={<FileText className="h-7 w-7" />}
          color={PRIMARY}
        />

        <StatsCard
          title="Published Content"
          value={dashboardStats.publishedContent}
          icon={<Newspaper className="h-7 w-7" />}
          color={SECONDARY}
        />

        <StatsCard
          title="Active Users"
          value={dashboardStats.activeUsers}
          icon={<Users className="h-7 w-7" />}
          color={PRIMARY}
        />

        <StatsCard
          title="Monthly Visitors"
          value={dashboardStats.monthlyVisitors.toLocaleString()}
          icon={<Eye className="h-7 w-7" />}
          color={SECONDARY}
        />

        <StatsCard
          title="Downloads"
          value={dashboardStats.totalDownloads.toLocaleString()}
          icon={<Download className="h-7 w-7" />}
          color={PRIMARY}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Card className="rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Recent Activity
              </h2>
              <p className="text-sm text-slate-500">
                Latest updates from dashboard modules.
              </p>
            </div>

            <div
              className="flex h-11 w-11 items-center justify-center rounded-2xl"
              style={{ backgroundColor: `${PRIMARY}15`, color: PRIMARY }}
            >
              <Activity className="h-5 w-5" />
            </div>
          </div>

          <div className="space-y-4">
            {activities.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
              >
                <div>
                  <p className="text-sm font-bold text-slate-800">
                    {item.action}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{item.time}</p>
                </div>

                <Badge
                  className="text-white hover:opacity-90"
                  style={{
                    backgroundColor:
                      item.status === "success" ? PRIMARY : SECONDARY,
                  }}
                >
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="rounded-3xl border border-slate-200 p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Quick Actions
              </h2>
              <p className="text-sm text-slate-500">
                Frequently used admin shortcuts.
              </p>
            </div>

            <div
              className="flex h-11 w-11 items-center justify-center rounded-2xl"
              style={{ backgroundColor: `${SECONDARY}15`, color: SECONDARY }}
            >
              <Plus className="h-5 w-5" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {quickActions.map((item, index) => (
              <Button
                key={item}
                variant="outline"
                className="h-14 justify-between rounded-2xl border-slate-200 bg-white px-4 font-bold text-slate-700 hover:text-white"
                style={
                  {
                    "--hover-bg": index % 2 === 0 ? PRIMARY : SECONDARY,
                  } as React.CSSProperties
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    index % 2 === 0 ? PRIMARY : SECONDARY;
                  e.currentTarget.style.borderColor =
                    index % 2 === 0 ? PRIMARY : SECONDARY;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }}
              >
                {item}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            ))}
          </div>
        </Card>
      </div>

      <Card className="rounded-3xl border border-slate-200 p-6 shadow-sm">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Content Status</h2>
            <p className="text-sm text-slate-500">
              Published and draft content summary by module.
            </p>
          </div>

          <Button
            className="w-fit rounded-xl text-white hover:opacity-90"
            style={{ backgroundColor: PRIMARY }}
          >
            View Full Report
          </Button>
        </div>

        <div className="space-y-4">
          {contentStatus.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="font-bold text-slate-900">{item.type}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {item.total} items total
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge
                  className="text-white hover:opacity-90"
                  style={{ backgroundColor: PRIMARY }}
                >
                  {item.published} Published
                </Badge>

                <Badge
                  variant="outline"
                  className="bg-white"
                  style={{
                    borderColor: SECONDARY,
                    color: SECONDARY,
                  }}
                >
                  {item.draft} Draft
                </Badge>
              </div>
            </div>
          ))}
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
    <Card className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-1.5" style={{ backgroundColor: color }} />

      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
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
      </div>
    </Card>
  );
}
