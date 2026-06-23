"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  Clock,
  Edit2,
  Eye,
  ImageIcon,
  MapPin,
  Plus,
  Search,
  Trash2,
  Users,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PRIMARY = "#0193CD";
const SECONDARY = "#D13D34";

type EventStatus = "upcoming" | "completed" | "draft";

type EventItem = {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
  date: string;
  time: string;
  participants: number;
  status: EventStatus;
  featured: boolean;
  description: string;
};

export default function EventsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const events: EventItem[] = [
    {
      id: 1,
      title: "Community Health Awareness Event",
      category: "Health",
      location: "Dhaka, Bangladesh",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      date: "2025-02-10",
      time: "10:00 AM",
      participants: 180,
      status: "upcoming",
      featured: true,
      description:
        "A public health awareness event focused on family wellbeing, preventive care and community education.",
    },
    {
      id: 2,
      title: "Youth Leadership Development Seminar",
      category: "Leadership",
      location: "Chattogram, Bangladesh",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
      date: "2025-01-25",
      time: "02:30 PM",
      participants: 95,
      status: "completed",
      featured: false,
      description:
        "A seminar designed to inspire young leaders with communication, teamwork and social responsibility skills.",
    },
    {
      id: 3,
      title: "Population Development Workshop",
      category: "Development",
      location: "Sylhet, Bangladesh",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      date: "2025-03-05",
      time: "09:30 AM",
      participants: 120,
      status: "upcoming",
      featured: true,
      description:
        "Workshop for community partners on population awareness, development planning and social impact strategy.",
    },
    {
      id: 4,
      title: "Field Worker Training Event",
      category: "Training",
      location: "Rajshahi, Bangladesh",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
      date: "2025-02-18",
      time: "11:00 AM",
      participants: 70,
      status: "draft",
      featured: false,
      description:
        "Training event for field workers covering communication, reporting and community engagement practices.",
    },
  ];

  const filteredEvents = useMemo(() => {
    return events.filter((item) => {
      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase());

      const matchStatus =
        statusFilter === "all" || item.status === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [events, search, statusFilter]);

  const upcomingCount = events.filter(
    (item) => item.status === "upcoming",
  ).length;
  const completedCount = events.filter(
    (item) => item.status === "completed",
  ).length;
  const draftCount = events.filter((item) => item.status === "draft").length;

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
            <h1 className="mt-2 text-3xl font-bold">Events Management</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/85">
              Manage event images, schedules, locations, participants and
              publishing status from one professional dashboard.
            </p>
          </div>

          <Button
            className="w-fit gap-2 rounded-2xl px-5 py-3 font-bold text-white hover:opacity-90"
            style={{ backgroundColor: SECONDARY }}
          >
            <Plus className="h-4 w-4" />
            Add Event
          </Button>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-4">
        <StatsCard
          title="Total Events"
          value={events.length}
          icon={<CalendarDays className="h-6 w-6" />}
          color={PRIMARY}
        />

        <StatsCard
          title="Upcoming"
          value={upcomingCount}
          icon={<Clock className="h-6 w-6" />}
          color={PRIMARY}
        />

        <StatsCard
          title="Completed"
          value={completedCount}
          icon={<Eye className="h-6 w-6" />}
          color={SECONDARY}
        />

        <StatsCard
          title="Draft"
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
              placeholder="Search event title, category or location..."
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:bg-white"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-700 outline-none focus:bg-white"
          >
            <option value="all">All Status</option>
            <option value="upcoming">Upcoming</option>
            <option value="completed">Completed</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredEvents.map((item) => (
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

              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                {item.featured && (
                  <Badge
                    className="text-white shadow-md"
                    style={{ backgroundColor: SECONDARY }}
                  >
                    Featured
                  </Badge>
                )}

                <Badge
                  className="capitalize text-white shadow-md"
                  style={{
                    backgroundColor:
                      item.status === "upcoming" ? PRIMARY : SECONDARY,
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

              <div className="grid gap-3 border-t border-slate-100 pt-4 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" style={{ color: PRIMARY }} />
                  <span className="font-medium">{item.location}</span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <CalendarDays
                      className="h-4 w-4"
                      style={{ color: SECONDARY }}
                    />
                    <span className="font-medium">{item.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" style={{ color: PRIMARY }} />
                    <span className="font-medium">{item.time}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" style={{ color: PRIMARY }} />
                    <span className="font-semibold text-slate-600">
                      Participants
                    </span>
                  </div>

                  <span className="font-bold" style={{ color: PRIMARY }}>
                    {item.participants}
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
                  className="ml-auto rounded-xl text-white hover:opacity-90"
                  style={{ backgroundColor: PRIMARY }}
                >
                  Manage
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {filteredEvents.length === 0 && (
          <Card className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center md:col-span-2 xl:col-span-3">
            <CalendarDays className="mx-auto h-12 w-12 text-slate-300" />
            <h3 className="mt-4 text-lg font-bold text-slate-800">
              No events found
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
