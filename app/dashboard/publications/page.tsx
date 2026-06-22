'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { publications } from '@/lib/data/publications';

export default function PublicationsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Publications</h1>
        <Button>Upload Publication</Button>
      </div>

      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
          {publications.map((pub) => (
            <Card key={pub.id} className="p-4">
              <h3 className="font-semibold mb-2 line-clamp-2">{pub.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{pub.year}</p>
              <Button size="sm" variant="outline" className="w-full">Download</Button>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
