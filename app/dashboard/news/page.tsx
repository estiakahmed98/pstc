'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { newsArticles } from '@/lib/data/news';

export default function NewsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">News Management</h1>
        <Button>Create Article</Button>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-6 py-3 text-left font-semibold">Title</th>
                <th className="px-6 py-3 text-left font-semibold">Category</th>
                <th className="px-6 py-3 text-left font-semibold">Date</th>
                <th className="px-6 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {newsArticles.map((article) => (
                <tr key={article.id} className="border-b border-border hover:bg-muted/50">
                  <td className="px-6 py-3 font-medium">{article.title}</td>
                  <td className="px-6 py-3">
                    <Badge variant="outline">{article.category}</Badge>
                  </td>
                  <td className="px-6 py-3 text-muted-foreground">
                    {new Date(article.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-3">
                    <Button size="sm" variant="outline">Edit</Button>
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
