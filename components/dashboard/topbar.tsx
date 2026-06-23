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

export function DashboardTopbar() {
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
      // Clear all auth data
      localStorage.clear();
      sessionStorage.clear();

      // Clear cookies
      document.cookie.split(";").forEach((cookie) => {
        document.cookie = cookie
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });

      // Show success toast
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });

      // Redirect to home page
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

  return (
    <div className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Manage all your content and settings
        </p>
      </div>

      <div className="flex items-center gap-4">
        {/* Role Switcher - for demo purposes */}
        <Select
          value={user?.role || "super_admin"}
          onValueChange={(role) => switchRole(role as UserRole)}
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Switch Role" />
          </SelectTrigger>
          <SelectContent>
            {roles.map((role) => (
              <SelectItem key={role} value={role}>
                {role.replace("_", " ").charAt(0).toUpperCase() + role.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <LanguageSwitcher />
        <ThemeToggle />

        <Button
          variant="outline"
          size="sm"
          onClick={handleLogout}
          disabled={isLoggingOut}
        >
          {isLoggingOut ? "Logging out..." : "Logout"}
        </Button>
      </div>
    </div>
  );
}
