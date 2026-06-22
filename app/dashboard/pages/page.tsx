'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit2, Trash2, Eye } from 'lucide-react';

export default function PagesPage() {
  const pages = [
    { id: 1, title: 'Homepage', slug: 'home', status: 'published', date: '2024-01-15' },
    { id: 2, title: 'About Us', slug: 'about', status: 'published', date: '2024-01-14' },
    { id: 3, title: 'Programs', slug: 'programs', status: 'published', date: '2024-01-10' },
    { id: 4, title: 'Contact', slug: 'contact', status: 'draft', date: '2024-01-12' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Pages Management</h1>
        <Button>Create Page</Button>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-6 py-3 text-left font-semibold">Title</th>
                <th className="px-6 py-3 text-left font-semibold">Slug</th>
                <th className="px-6 py-3 text-left font-semibold">Status</th>
                <th className="px-6 py-3 text-left font-semibold">Date</th>
                <th className="px-6 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page) => (
                <tr key={page.id} className="border-b border-border hover:bg-muted/50">
                  <td className="px-6 py-3 font-medium">{page.title}</td>
                  <td className="px-6 py-3 text-muted-foreground">{page.slug}</td>
                  <td className="px-6 py-3">
                    <Badge variant={page.status === 'published' ? 'default' : 'secondary'}>
                      {page.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-3 text-muted-foreground">{page.date}</td>
                  <td className="px-6 py-3">
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
