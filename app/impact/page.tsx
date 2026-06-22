'use client';

import { PublicLayout } from '@/components/public/layout';
import { Card } from '@/components/ui/card';
import { successStories } from '@/lib/data/users';

export default function ImpactPage() {
  return (
    <PublicLayout>
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10 border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Our Impact</h1>
          <p className="text-lg text-muted-foreground">
            Evidence of our work and the lives we've touched
          </p>
        </div>
      </section>

      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { stat: '150,000+', label: 'People Reached' },
              { stat: '8+', label: 'Countries' },
              { stat: '250+', label: 'Community Partners' },
              { stat: '500+', label: 'Programs Delivered' },
            ].map((item, idx) => (
              <Card key={idx} className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
                <p className="text-muted-foreground">{item.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story) => (
              <Card key={story.id} className="p-8">
                <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                <p className="text-muted-foreground mb-4">{story.description}</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Person:</strong> {story.personName}</p>
                  <p><strong>Location:</strong> {story.location}</p>
                  <p className="text-primary font-semibold">{story.impact}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
