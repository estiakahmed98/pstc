"use client";

import { useRouter } from "next/navigation";
import { useCurrentUser, useSwitchRole } from "@/hooks/use-current-user";
import { useToast } from "@/components/ui/use-toast";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserRole } from "@/lib/rbac/roles";
import { useState } from "react";
import { LogOut, Menu, ShieldCheck } from "lucide-react";

interface DashboardTopbarProps {
  onMenuClick?: () => void;
}

const PRIMARY = "#0193CD";
const SECONDARY = "#D13D34";

export function DashboardTopbar({ onMenuClick }: DashboardTopbarProps) {
  const router = useRouter();
  const { toast } = useToast();
  const user = useCurrentUser();
  const switchRole = useSwitchRole();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const roles: UserRole[] = [
    "super_admin",
    "admin",
    "editor",
    "program_manager",
    "viewer",
  ];

  const handleLogout = async () => {
    setIsLoggingOut(true);

    try {
      localStorage.clear();
      sessionStorage.clear();

      document.cookie.split(";").forEach((cookie) => {
        document.cookie = cookie
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });

      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);

      toast({
        title: "Error",
        description: "Failed to logout. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoggingOut(false);
    }
  };

  const userName = user?.name ?? "Admin User";
  const userRole = user?.role ?? "super_admin";

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 px-3 py-3 shadow-sm backdrop-blur-xl sm:px-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={onMenuClick}
            className="h-10 w-10 shrink-0 rounded-2xl border-slate-200 bg-white shadow-sm lg:hidden"
            aria-label="Open sidebar"
          >
            <Menu className="h-5 w-5" style={{ color: PRIMARY }} />
          </Button>

          <div
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white shadow-md sm:flex"
            style={{ backgroundColor: PRIMARY }}
          >
            <ShieldCheck className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="truncate text-sm font-bold text-slate-900 sm:text-base">
                {userName}
              </h2>

              <span
                className="hidden rounded-full px-2.5 py-1 text-[11px] font-bold text-white sm:inline-flex"
                style={{ backgroundColor: SECONDARY }}
              >
                Active
              </span>
            </div>

            <p className="truncate text-xs font-medium capitalize text-slate-500">
              {userRole.replace("_", " ")}
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Select
            value={userRole}
            onValueChange={(role) => switchRole(role as UserRole)}
          >
            <SelectTrigger className="h-10 w-44 rounded-2xl border-slate-200 bg-slate-50 text-sm font-semibold shadow-none focus:ring-0">
              <SelectValue placeholder="Switch Role" />
            </SelectTrigger>

            <SelectContent>
              {roles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role.replace("_", " ").charAt(0).toUpperCase() +
                    role.replace("_", " ").slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-2 py-1">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <Button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="h-10 gap-2 rounded-2xl px-4 text-sm font-bold text-white shadow-sm hover:opacity-90"
            style={{ backgroundColor: SECONDARY }}
          >
            <LogOut className="h-4 w-4" />
            {isLoggingOut ? "Logging out..." : "Logout"}
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <ThemeToggle />

          <Button
            onClick={handleLogout}
            disabled={isLoggingOut}
            size="icon"
            className="h-10 w-10 rounded-2xl text-white shadow-sm hover:opacity-90"
            style={{ backgroundColor: SECONDARY }}
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mt-3 md:hidden">
        <Select
          value={userRole}
          onValueChange={(role) => switchRole(role as UserRole)}
        >
          <SelectTrigger className="h-11 w-full rounded-2xl border-slate-200 bg-slate-50 text-sm font-semibold shadow-none focus:ring-0">
            <SelectValue placeholder="Switch Role" />
          </SelectTrigger>

          <SelectContent>
            {roles.map((role) => (
              <SelectItem key={role} value={role}>
                {role.replace("_", " ").charAt(0).toUpperCase() +
                  role.replace("_", " ").slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </header>
  );
}
