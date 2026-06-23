"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  Activity as ActivityIcon,
  BarChart3,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Download,
  Filter,
  GraduationCap,
  MapPin,
  PieChart,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";

type ProgramStatus = "completed" | "running" | "upcoming" | "cancelled";

type AnalyticsItem = {
  id: string;
  title: string;
  category: string;
  district: string;
  trainer: string;
  startDate: string;
  participants: number;
  female: number;
  male: number;
  budget: number;
  attendanceRate: number;
  completionRate: number;
  satisfactionRate: number;
  status: ProgramStatus;
};

const analyticsData: AnalyticsItem[] = [
  {
    id: "1",
    title: "Community Health Awareness",
    category: "Health",
    district: "Dhaka",
    trainer: "Dr. Rahman",
    startDate: "2026-06-01",
    participants: 120,
    female: 68,
    male: 52,
    budget: 85000,
    attendanceRate: 92,
    completionRate: 88,
    satisfactionRate: 94,
    status: "completed",
  },
  {
    id: "2",
    title: "Youth Leadership Training",
    category: "Leadership",
    district: "Sylhet",
    trainer: "Md. Karim",
    startDate: "2026-06-08",
    participants: 75,
    female: 39,
    male: 36,
    budget: 52000,
    attendanceRate: 86,
    completionRate: 81,
    satisfactionRate: 89,
    status: "running",
  },
  {
    id: "3",
    title: "Population Development Workshop",
    category: "Development",
    district: "Chattogram",
    trainer: "Nusrat Jahan",
    startDate: "2026-06-12",
    participants: 95,
    female: 50,
    male: 45,
    budget: 67000,
    attendanceRate: 90,
    completionRate: 85,
    satisfactionRate: 91,
    status: "completed",
  },
  {
    id: "4",
    title: "Digital Literacy Program",
    category: "Education",
    district: "Rajshahi",
    trainer: "Tanvir Hasan",
    startDate: "2026-06-20",
    participants: 140,
    female: 76,
    male: 64,
    budget: 94000,
    attendanceRate: 78,
    completionRate: 70,
    satisfactionRate: 84,
    status: "upcoming",
  },
  {
    id: "5",
    title: "Women Empowerment Session",
    category: "Empowerment",
    district: "Khulna",
    trainer: "Farzana Akter",
    startDate: "2026-06-25",
    participants: 110,
    female: 88,
    male: 22,
    budget: 72000,
    attendanceRate: 95,
    completionRate: 91,
    satisfactionRate: 96,
    status: "completed",
  },
];

export default function AnalyticsDashboardPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [district, setDistrict] = useState("all");

  const filteredData = useMemo(() => {
    return analyticsData.filter((item) => {
      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.trainer.toLowerCase().includes(search.toLowerCase()) ||
        item.district.toLowerCase().includes(search.toLowerCase());

      const matchStatus = status === "all" || item.status === status;
      const matchDistrict = district === "all" || item.district === district;

      return matchSearch && matchStatus && matchDistrict;
    });
  }, [search, status, district]);

  const totalPrograms = filteredData.length;
  const totalParticipants = filteredData.reduce(
    (sum, item) => sum + item.participants,
    0,
  );
  const totalFemale = filteredData.reduce((sum, item) => sum + item.female, 0);
  const totalMale = filteredData.reduce((sum, item) => sum + item.male, 0);
  const totalBudget = filteredData.reduce((sum, item) => sum + item.budget, 0);

  const avgAttendance = Math.round(
    filteredData.reduce((sum, item) => sum + item.attendanceRate, 0) /
      (filteredData.length || 1),
  );

  const avgCompletion = Math.round(
    filteredData.reduce((sum, item) => sum + item.completionRate, 0) /
      (filteredData.length || 1),
  );

  const avgSatisfaction = Math.round(
    filteredData.reduce((sum, item) => sum + item.satisfactionRate, 0) /
      (filteredData.length || 1),
  );

  const districts = [
    "all",
    ...new Set(analyticsData.map((item) => item.district)),
  ];

  const statusClass: Record<ProgramStatus, string> = {
    completed: "bg-green-100 text-green-700",
    running: "bg-sky-100 text-sky-700",
    upcoming: "bg-orange-100 text-orange-700",
    cancelled: "bg-red-100 text-red-700",
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="w-full space-y-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="relative bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 p-6 md:p-8">
            <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-full bg-red-500/25" />
            <div className="absolute bottom-0 right-32 h-20 w-20 rounded-t-full bg-orange-300/30" />

            <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-lg">
                  <BarChart3 className="h-7 w-7" />
                </div>

                <div>
                  <h1 className="text-2xl font-bold text-white md:text-3xl">
                    Analytics Dashboard
                  </h1>
                  <p className="mt-1 text-sm text-white/90">
                    Demo overview of training, participation, budget,
                    performance and program impact.
                  </p>
                </div>
              </div>

              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-sky-700 shadow-lg hover:bg-slate-100">
                <Download className="h-4 w-4" />
                Export Report
              </button>
            </div>
          </div>

          <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-4">
            <StatsCard
              title="Total Programs"
              value={totalPrograms}
              icon={<BookOpen className="h-5 w-5" />}
              color="text-sky-600"
              bg="bg-sky-50"
            />
            <StatsCard
              title="Total Participants"
              value={totalParticipants}
              icon={<Users className="h-5 w-5" />}
              color="text-green-600"
              bg="bg-green-50"
            />
            <StatsCard
              title="Total Budget"
              value={`৳${totalBudget.toLocaleString()}`}
              icon={<TrendingUp className="h-5 w-5" />}
              color="text-orange-600"
              bg="bg-orange-50"
            />
            <StatsCard
              title="Satisfaction"
              value={`${avgSatisfaction}%`}
              icon={<CheckCircle2 className="h-5 w-5" />}
              color="text-red-600"
              bg="bg-red-50"
            />
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-3">
          <ProgressCard
            title="Average Attendance"
            value={avgAttendance}
            icon={<ActivityIcon className="h-5 w-5" />}
            color="bg-sky-500"
          />
          <ProgressCard
            title="Average Completion"
            value={avgCompletion}
            icon={<GraduationCap className="h-5 w-5" />}
            color="bg-green-500"
          />
          <ProgressCard
            title="Average Satisfaction"
            value={avgSatisfaction}
            icon={<PieChart className="h-5 w-5" />}
            color="bg-orange-500"
          />
        </div>

        <div className="grid gap-5 xl:grid-cols-4">
          <InfoPanel
            title="Gender Distribution"
            items={[
              {
                label: "Female Participants",
                value: totalFemale,
                color: "bg-red-500",
              },
              {
                label: "Male Participants",
                value: totalMale,
                color: "bg-sky-500",
              },
            ]}
          />

          <InfoPanel
            title="Program Status"
            items={[
              {
                label: "Completed",
                value: filteredData.filter((i) => i.status === "completed")
                  .length,
                color: "bg-green-500",
              },
              {
                label: "Running",
                value: filteredData.filter((i) => i.status === "running")
                  .length,
                color: "bg-sky-500",
              },
              {
                label: "Upcoming",
                value: filteredData.filter((i) => i.status === "upcoming")
                  .length,
                color: "bg-orange-500",
              },
            ]}
          />

          <InfoPanel
            title="Top Districts"
            items={[
              { label: "Dhaka", value: 120, color: "bg-sky-500" },
              { label: "Rajshahi", value: 140, color: "bg-green-500" },
              { label: "Khulna", value: 110, color: "bg-orange-500" },
            ]}
          />

          <InfoPanel
            title="Impact Summary"
            items={[
              {
                label: "Awareness Increased",
                value: "94%",
                color: "bg-green-500",
              },
              { label: "Skill Improved", value: "88%", color: "bg-sky-500" },
              { label: "Follow-up Needed", value: "12%", color: "bg-red-500" },
            ]}
          />
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex items-center gap-2">
            <Filter className="h-5 w-5 text-sky-600" />
            <h2 className="text-lg font-bold text-slate-900">
              Filter Analytics Data
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_220px_220px]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search program, trainer, district or category..."
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
              />
            </div>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="running">Running</option>
              <option value="upcoming">Upcoming</option>
              <option value="cancelled">Cancelled</option>
            </select>

            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
            >
              {districts.map((item) => (
                <option key={item} value={item}>
                  {item === "all" ? "All Districts" : item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="h-2 bg-gradient-to-r from-sky-500 via-green-500 to-orange-500" />

              <div className="space-y-5 p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${statusClass[item.status]}`}
                    >
                      {item.status}
                    </span>

                    <h3 className="mt-4 text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-sky-600">
                      {item.category}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 px-4 py-3 text-right">
                    <p className="text-xs font-semibold text-slate-500">
                      Budget
                    </p>
                    <p className="text-lg font-bold text-orange-600">
                      ৳{item.budget.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <SmallInfo
                    icon={<MapPin className="h-4 w-4" />}
                    label="District"
                    value={item.district}
                  />
                  <SmallInfo
                    icon={<Users className="h-4 w-4" />}
                    label="Trainer"
                    value={item.trainer}
                  />
                  <SmallInfo
                    icon={<CalendarDays className="h-4 w-4" />}
                    label="Start Date"
                    value={item.startDate}
                  />
                  <SmallInfo
                    icon={<Users className="h-4 w-4" />}
                    label="Participants"
                    value={`${item.participants} People`}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <MiniProgress
                    label="Attendance"
                    value={item.attendanceRate}
                  />
                  <MiniProgress
                    label="Completion"
                    value={item.completionRate}
                  />
                  <MiniProgress
                    label="Satisfaction"
                    value={item.satisfactionRate}
                  />
                </div>

                <div className="grid gap-4 rounded-2xl bg-slate-50 p-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      Female Participants
                    </p>
                    <p className="mt-1 text-2xl font-bold text-red-500">
                      {item.female}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      Male Participants
                    </p>
                    <p className="mt-1 text-2xl font-bold text-sky-600">
                      {item.male}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredData.length === 0 && (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center xl:col-span-2">
              <BarChart3 className="mx-auto h-12 w-12 text-slate-300" />
              <h3 className="mt-4 text-lg font-bold text-slate-800">
                No analytics data found
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Try changing your filters or search keyword.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatsCard({
  title,
  value,
  icon,
  color,
  bg,
}: {
  title: string;
  value: string | number;
  icon: ReactNode;
  color: string;
  bg: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-500">{title}</p>
          <h2 className={`mt-2 text-3xl font-bold ${color}`}>{value}</h2>
        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${bg} ${color}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

function ProgressCard({
  title,
  value,
  icon,
  color,
}: {
  title: string;
  value: number;
  icon: ReactNode;
  color: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-500">{title}</p>
          <h3 className="mt-1 text-3xl font-bold text-slate-900">{value}%</h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-700">
          {icon}
        </div>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function InfoPanel({
  title,
  items,
}: {
  title: string;
  items: { label: string; value: string | number; color: string }[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-5 text-lg font-bold text-slate-900">{title}</h3>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <span className={`h-3 w-3 rounded-full ${item.color}`} />
              <p className="text-sm font-semibold text-slate-600">
                {item.label}
              </p>
            </div>

            <p className="font-bold text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SmallInfo({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-green-600 shadow-sm">
        {icon}
      </div>

      <div>
        <p className="text-xs font-semibold text-slate-400">{label}</p>
        <p className="font-semibold text-slate-700">{value}</p>
      </div>
    </div>
  );
}

function MiniProgress({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <p className="text-xs font-bold text-slate-500">{label}</p>
        <p className="text-xs font-bold text-slate-700">{value}%</p>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-500 via-green-500 to-orange-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
