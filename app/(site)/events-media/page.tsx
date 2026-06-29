'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { events } from '@/lib/data/events';
import { newsArticles } from '@/lib/data/news';
import { CalendarDays, Users } from 'lucide-react';

export default function EventsMediaPage() {
  return (
    <>
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10 border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Events & Media</h1>
          <p className="text-lg text-muted-foreground">
            Stay updated with our latest news, events, and media coverage
          </p>
        </div>
      </section>

      {/* News */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsArticles.slice(0, 6).map((article) => (
              <Card key={article.id} className="p-6 hover:shadow-lg transition-shadow">
                <Badge className="mb-4">{article.category}</Badge>
                <h3 className="text-lg font-semibold mb-3">{article.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(article.date).toLocaleDateString()}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Upcoming Events</h2>
          <div className="space-y-4">
            {events.map((event) => (
              <Card key={event.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge className="mb-2">{event.eventType}</Badge>
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                  </div>
                  <span className="text-primary font-semibold text-sm">
                    {event.registered}/{event.capacity}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Time:</span> {event.startTime}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location:</span> {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{event.capacity} seats</span>
                  </div>
                </div>
                <Button variant="outline">Learn More</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
