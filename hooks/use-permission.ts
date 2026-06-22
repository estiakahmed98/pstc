'use client';

import { useCurrentUser } from './use-current-user';
import { hasPermission, hasAnyPermission, hasAllPermissions, Permission } from '@/lib/rbac/permissions';

export function usePermission() {
  const user = useCurrentUser();

  const can = (permission: Permission): boolean => {
    if (!user) return false;
    return hasPermission(user.role, permission);
  };

  const canAny = (permissions: Permission[]): boolean => {
    if (!user) return false;
    return hasAnyPermission(user.role, permissions);
  };

  const canAll = (permissions: Permission[]): boolean => {
    if (!user) return false;
    return hasAllPermissions(user.role, permissions);
  };

  return { can, canAny, canAll };
}
