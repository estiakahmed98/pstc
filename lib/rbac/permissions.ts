import { UserRole } from './roles';

export type Permission =
  | 'view_dashboard'
  | 'manage_pages'
  | 'manage_news'
  | 'manage_publications'
  | 'manage_events'
  | 'manage_gallery'
  | 'manage_jobs'
  | 'manage_training'
  | 'manage_users'
  | 'view_analytics'
  | 'manage_settings'
  | 'manage_roles';

export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  super_admin: [
    'view_dashboard',
    'manage_pages',
    'manage_news',
    'manage_publications',
    'manage_events',
    'manage_gallery',
    'manage_jobs',
    'manage_training',
    'manage_users',
    'view_analytics',
    'manage_settings',
    'manage_roles',
  ],
  admin: [
    'view_dashboard',
    'manage_pages',
    'manage_news',
    'manage_publications',
    'manage_events',
    'manage_gallery',
    'manage_jobs',
    'manage_training',
    'manage_users',
    'view_analytics',
    'manage_settings',
  ],
  editor: [
    'view_dashboard',
    'manage_pages',
    'manage_news',
    'manage_publications',
    'manage_events',
    'manage_gallery',
    'view_analytics',
  ],
  program_manager: [
    'view_dashboard',
    'manage_pages',
    'manage_news',
    'manage_publications',
    'manage_events',
    'manage_jobs',
    'manage_training',
    'view_analytics',
  ],
  viewer: ['view_dashboard', 'view_analytics'],
};

export function hasPermission(role: UserRole, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}

export function hasAnyPermission(role: UserRole, permissions: Permission[]): boolean {
  return permissions.some(p => hasPermission(role, p));
}

export function hasAllPermissions(role: UserRole, permissions: Permission[]): boolean {
  return permissions.every(p => hasPermission(role, p));
}
