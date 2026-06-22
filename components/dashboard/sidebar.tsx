'use client';

import Link from 'next/link';
import { useCurrentUser, useSwitchRole } from '@/hooks/use-current-user';
import { usePermission } from '@/hooks/use-permission';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, FileText, Newspaper, BarChart3, Settings, Users, Briefcase, BookOpen, Image, Calendar } from 'lucide-react';

export function Sidebar() {
  const user = useCurrentUser();
  const { can } = usePermission();

  const menuItems = [
    { href: '/dashboard', label: 'Overview', icon: LayoutDashboard, permission: 'view_dashboard' },
    { href: '/dashboard/pages', label: 'Pages', icon: FileText, permission: 'manage_pages' },
    { href: '/dashboard/news', label: 'News', icon: Newspaper, permission: 'manage_news' },
    { href: '/dashboard/publications', label: 'Publications', icon: BookOpen, permission: 'manage_publications' },
    { href: '/dashboard/events', label: 'Events', icon: Calendar, permission: 'manage_events' },
    { href: '/dashboard/gallery', label: 'Gallery', icon: Image, permission: 'manage_gallery' },
    { href: '/dashboard/jobs', label: 'Jobs', icon: Briefcase, permission: 'manage_jobs' },
    { href: '/dashboard/training', label: 'Training', icon: BookOpen, permission: 'manage_training' },
    { href: '/dashboard/users', label: 'Users', icon: Users, permission: 'manage_users' },
    { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart3, permission: 'view_analytics' },
    { href: '/dashboard/settings', label: 'Settings', icon: Settings, permission: 'manage_settings' },
  ];

  const visibleItems = menuItems.filter(item => can(item.permission as any));

  return (
    <div className="w-64 bg-card border-r border-border p-4 h-screen overflow-y-auto sticky top-0">
      <Link href="/dashboard" className="flex items-center gap-2 font-bold text-lg mb-8 text-primary">
        <LayoutDashboard className="h-6 w-6" />
        <span>PSTC Dashboard</span>
      </Link>

      <div className="mb-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
        <p className="text-xs text-muted-foreground">Current User</p>
        <p className="font-semibold text-sm">{user?.name}</p>
        <p className="text-xs text-muted-foreground capitalize">{user?.role.replace('_', ' ')}</p>
      </div>

      <nav className="space-y-2">
        {visibleItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href}>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <Icon className="h-4 w-4 mr-2" />
                {item.label}
              </Button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
