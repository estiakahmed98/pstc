"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BookOpen,
  Briefcase,
  Calendar,
  ChevronRight,
  FileText,
  Image,
  LayoutDashboard,
  Newspaper,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";

import { useCurrentUser } from "@/hooks/use-current-user";
import { usePermission } from "@/hooks/use-permission";
import { Button } from "@/components/ui/button";

const PRIMARY_COLOR = "#0193CD";
const SECONDARY_COLOR = "#D13D34";

export function Sidebar() {
  const pathname = usePathname();
  const user = useCurrentUser();
  const { can } = usePermission();

  const menuItems = [
    {
      href: "/dashboard",
      label: "Overview",
      icon: LayoutDashboard,
      permission: "view_dashboard",
    },
    {
      href: "/dashboard/pages",
      label: "Pages",
      icon: FileText,
      permission: "manage_pages",
    },
    {
      href: "/dashboard/news",
      label: "News",
      icon: Newspaper,
      permission: "manage_news",
    },
    {
      href: "/dashboard/publications",
      label: "Publications",
      icon: BookOpen,
      permission: "manage_publications",
    },
    {
      href: "/dashboard/events",
      label: "Events",
      icon: Calendar,
      permission: "manage_events",
    },
    {
      href: "/dashboard/gallery",
      label: "Gallery",
      icon: Image,
      permission: "manage_gallery",
    },
    {
      href: "/dashboard/jobs",
      label: "Jobs",
      icon: Briefcase,
      permission: "manage_jobs",
    },
    {
      href: "/dashboard/training",
      label: "Training",
      icon: BookOpen,
      permission: "manage_training",
    },
    {
      href: "/dashboard/users",
      label: "Users",
      icon: Users,
      permission: "manage_users",
    },
    {
      href: "/dashboard/analytics",
      label: "Analytics",
      icon: BarChart3,
      permission: "view_analytics",
    },
    {
      href: "/dashboard/settings",
      label: "Settings",
      icon: Settings,
      permission: "manage_settings",
    },
  ];

  const visibleItems = menuItems.filter((item) => can(item.permission as any));

  const getInitials = (name?: string) => {
    if (!name) return "U";

    return name
      .split(" ")
      .map((item) => item[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <aside className="sticky top-0 h-screen w-72 overflow-y-auto border-r border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-8 flex items-center gap-3 rounded-xl">
        <img src="/pstc.jpeg" alt="PSTC Logo" className="h-24 rounded-xl" />
      </div>

      <nav className="space-y-1.5">
        {visibleItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            item.href === "/dashboard"
              ? pathname === item.href
              : pathname.startsWith(item.href);

          return (
            <div key={item.href} className="relative">
              {isActive && (
                <span
                  className="absolute left-0 top-1/2 z-10 h-8 w-1 -translate-y-1/2 rounded-r-full"
                  style={{ backgroundColor: SECONDARY_COLOR }}
                />
              )}

              <Link href={item.href}>
                <Button
                  variant="ghost"
                  className={`group h-11 w-full justify-between rounded-2xl px-3 pl-4 text-sm font-semibold transition-all ${
                    isActive
                      ? "text-white shadow-md hover:text-white"
                      : "text-slate-600 hover:text-[#0193CD]"
                  }`}
                  style={{
                    backgroundColor: isActive ? PRIMARY_COLOR : "transparent",
                  }}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-xl ${
                        isActive ? "bg-white/20 text-white" : "bg-slate-50"
                      }`}
                      style={{
                        color: isActive ? "#ffffff" : PRIMARY_COLOR,
                      }}
                    >
                      <Icon className="h-4 w-4" />
                    </span>

                    {item.label}
                  </span>

                  <ChevronRight
                    className={`h-4 w-4 transition ${
                      isActive
                        ? "translate-x-0 text-white"
                        : "text-slate-300 group-hover:translate-x-1 group-hover:text-[#0193CD]"
                    }`}
                  />
                </Button>
              </Link>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
