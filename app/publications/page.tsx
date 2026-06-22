'use client';

import { PublicLayout } from '@/components/public/layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { publications } from '@/lib/data/publications';
import { Download } from 'lucide-react';

export default function PublicationsPage() {
  return (
    <PublicLayout>
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10 border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Publications & Resources</h1>
          <p className="text-lg text-muted-foreground">
            Access our research, guides, case studies, and training materials
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publications.map((pub) => (
              <Card key={pub.id} className="p-6 hover:shadow-lg transition-shadow flex flex-col">
                <div className="mb-4">
                  <Badge className="mb-2">{pub.type}</Badge>
                  <h3 className="text-lg font-semibold leading-tight">{pub.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{pub.description}</p>
                <div className="space-y-3 border-t border-border pt-4">
                  <div className="flex flex-wrap gap-2">
                    {pub.language.map((lang) => (
                      <Badge key={lang} variant="outline" className="text-xs">
                        {lang === 'en' ? 'English' : lang === 'bn' ? 'বাংলা' : 'العربية'}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{pub.year}</span>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" /> Download
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
