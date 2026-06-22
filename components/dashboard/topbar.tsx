'use client';

import { useCurrentUser, useSwitchRole } from '@/hooks/use-current-user';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { LanguageSwitcher } from '@/components/shared/language-switcher';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { UserRole } from '@/lib/rbac/roles';

export function DashboardTopbar() {
  const user = useCurrentUser();
  const switchRole = useSwitchRole();

  const roles: UserRole[] = ['super_admin', 'admin', 'editor', 'program_manager', 'viewer'];

  return (
    <div className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Manage all your content and settings</p>
      </div>

      <div className="flex items-center gap-4">
        {/* Role Switcher - for demo purposes */}
        <Select value={user?.role || 'super_admin'} onValueChange={(role) => switchRole(role as UserRole)}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Switch Role" />
          </SelectTrigger>
          <SelectContent>
            {roles.map((role) => (
              <SelectItem key={role} value={role}>
                {role.replace('_', ' ').charAt(0).toUpperCase() + role.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <LanguageSwitcher />
        <ThemeToggle />
        <Button variant="outline" size="sm">
          Logout
        </Button>
      </div>
    </div>
  );
}
