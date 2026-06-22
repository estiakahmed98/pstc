export type UserRole = 'super_admin' | 'admin' | 'editor' | 'program_manager' | 'viewer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export const ROLE_LABELS: Record<UserRole, string> = {
  super_admin: 'Super Admin',
  admin: 'Admin',
  editor: 'Editor',
  program_manager: 'Program Manager',
  viewer: 'Viewer',
};

export const ROLE_DESCRIPTIONS: Record<UserRole, string> = {
  super_admin: 'Full system access and user management',
  admin: 'Can manage all content and users',
  editor: 'Can create and edit content',
  program_manager: 'Can manage programs and projects',
  viewer: 'Can only view content',
};
