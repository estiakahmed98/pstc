"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BookOpenText,
  BriefcaseBusiness,
  ChevronRight,
  CircleDollarSign,
  ContactRound,
  HandHeart,
  House,
  Image,
  LayoutDashboard,
  MapPinned,
  Settings,
  Users,
  X,
} from "lucide-react";
import { SidebarTreeItem } from "@/components/dashboard/sidebar/sidebar-tree-item";
import { useCurrentUser } from "@/hooks/use-current-user";
import { usePermission } from "@/hooks/use-permission";
import type { Permission } from "@/lib/rbac/permissions";
import { cmsNavigation } from "@/config/cms-navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const rootIcons: Record<string, LucideIcon> = {
  "/": House,
  "/who-we-are": Users,
  "/what-we-do": BriefcaseBusiness,
  "/our-impact": BarChart3,
  "/get-involved": HandHeart,
  "/contact-us": ContactRound,
  "/ucon": BookOpenText,
  "/give-today": CircleDollarSign,
};

const systemLinks = [
  {
    href: "/dashboard/gallery",
    label: "Media Library",
    icon: Image,
    permission: "manage_gallery",
  },
  {
    href: "/dashboard/users",
    label: "Users & Roles",
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
] satisfies Array<{
  href: string;
  label: string;
  icon: LucideIcon;
  permission: Permission;
}>;

type CmsSidebarProps = {
  mobileOpen?: boolean;
  onClose?: () => void;
};

export function CmsSidebar({ mobileOpen = false, onClose }: CmsSidebarProps) {
  const pathname = usePathname();
  const user = useCurrentUser();
  const { can } = usePermission();

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-50 flex h-dvh w-80 flex-col border-r border-slate-200 bg-white shadow-xl transition-transform duration-300 ease-out lg:sticky lg:top-0 lg:z-30 lg:h-screen lg:translate-x-0 lg:shadow-sm",
        mobileOpen ? "translate-x-0" : "-translate-x-full",
      )}
      aria-label="CMS navigation"
    >
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-4">
        <Link href="/dashboard" onClick={onClose} className="min-w-0">
          <img
            src="/pstc_logo.png"
            alt="PSTC Logo"
            className="h-12 w-auto rounded-lg object-contain"
          />
          <p className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            Content management system
          </p>
        </Link>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="rounded-full lg:hidden"
          aria-label="Close sidebar"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="mx-3 mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 lg:hidden">
        <p className="truncate text-sm font-bold text-slate-900">
          {user?.name ?? "Admin User"}
        </p>
        <p className="text-xs capitalize text-slate-500">
          {user?.role?.replace("_", " ") ?? "super admin"}
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 [scrollbar-color:#cbd5e1_transparent] [scrollbar-width:thin]">
        <section>
          <p className="mb-2 px-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            Workspace
          </p>
          <SidebarLink
            href="/dashboard"
            label="Dashboard Overview"
            icon={LayoutDashboard}
            pathname={pathname}
            onNavigate={onClose}
          />
        </section>

        {can("manage_pages") ? (
          <section className="mt-5">
            <p className="mb-2 px-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Website Content
            </p>
            <div className="space-y-1.5">
              {cmsNavigation.map((item) => (
                <SidebarTreeItem
                  key={`${item.publicPath}-${item.title}`}
                  item={item}
                  pathname={pathname}
                  onNavigate={onClose}
                  icon={rootIcons[item.publicPath]}
                />
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-5">
          <p className="mb-2 px-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            System Management
          </p>
          <div className="space-y-1">
            {systemLinks
              .filter((item) => can(item.permission))
              .map(({ permission: _permission, ...item }) => (
                <SidebarLink
                  key={item.href}
                  {...item}
                  pathname={pathname}
                  onNavigate={onClose}
                />
              ))}
          </div>
        </section>
      </nav>

      <div className="border-t border-slate-100 p-3">
        <Link
          href="/"
          target="_blank"
          className="flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 text-sm font-bold text-slate-600 transition hover:border-sky-200 hover:bg-sky-50 hover:text-[#0193CD]"
        >
          <MapPinned className="h-4 w-4" />
          View public website
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}

function SidebarLink({
  href,
  label,
  icon: Icon,
  pathname,
  onNavigate,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  pathname: string;
  onNavigate?: () => void;
}) {
  const isActive =
    href === "/dashboard" ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "flex h-11 items-center gap-3 rounded-xl px-3 text-sm font-semibold transition",
        isActive
          ? "bg-[#0193CD] text-white shadow-sm"
          : "text-slate-600 hover:bg-slate-50 hover:text-[#0193CD]",
      )}
    >
      <Icon className="h-4 w-4 shrink-0" />
      <span className="min-w-0 flex-1 truncate">{label}</span>
      <ChevronRight
        className={cn("h-4 w-4", isActive ? "text-white" : "text-slate-300")}
      />
    </Link>
  );
}
