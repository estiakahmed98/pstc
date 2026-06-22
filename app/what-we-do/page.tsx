'use client';

import { PublicLayout } from '@/components/public/layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { thematicAreas } from '@/lib/data/thematic-areas';
import { projects } from '@/lib/data/projects';

export default function ProgramsPage() {
  return (
    <PublicLayout>
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10 border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">What We Do</h1>
          <p className="text-lg text-muted-foreground">
            Our comprehensive approach to social development works across multiple interconnected thematic areas.
          </p>
        </div>
      </section>

      {/* Thematic Areas */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Thematic Areas</h2>
          <div className="space-y-8">
            {thematicAreas.map((area) => (
              <Card key={area.id} className="p-8">
                <div className="flex gap-6">
                  <div className="text-5xl">{area.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
                    <p className="text-muted-foreground mb-4">{area.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.focus.map((f, idx) => (
                        <Badge key={idx} variant="secondary">{f}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <Badge className="mt-2" variant={project.status === 'ongoing' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Beneficiaries</p>
                    <p className="font-semibold">{project.beneficiaries.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Locations</p>
                    <p className="font-semibold">{project.locations.length} districts</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you want to support our work, volunteer, or partner with us, we'd love to hear from you.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Partner With Us</Button>
            <Button size="lg" variant="outline">Volunteer</Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
