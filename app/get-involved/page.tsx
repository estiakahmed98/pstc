'use client';

import { PublicLayout } from '@/components/public/layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { jobs } from '@/lib/data/jobs';

export default function GetInvolvedPage() {
  return (
    <PublicLayout>
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10 border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Get Involved</h1>
          <p className="text-lg text-muted-foreground">
            Join us in creating social change. Explore career and volunteer opportunities.
          </p>
        </div>
      </section>

      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Job Opportunities</h2>
          <div className="space-y-4">
            {jobs.map((job) => (
              <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4">
                  <div className="flex-1">
                    <div className="flex gap-2 items-center mb-2">
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{job.description}</p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Department:</strong> {job.department} • <strong>Location:</strong> {job.location}
                    </p>
                    {job.salary && (
                      <p className="text-sm text-primary font-medium mt-2">{job.salary}</p>
                    )}
                  </div>
                  <div className="flex gap-2 mt-4 md:mt-0">
                    <Button variant="outline">View Details</Button>
                    <Button>Apply Now</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Other Ways to Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Volunteer',
                description: 'Share your skills and time with our programs and communities',
              },
              {
                title: 'Partner With Us',
                description: 'Organizations and institutions can partner with PSTC',
              },
              {
                title: 'Advocate',
                description: 'Support our advocacy campaigns for social change',
              },
            ].map((way, idx) => (
              <Card key={idx} className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">{way.title}</h3>
                <p className="text-muted-foreground mb-6">{way.description}</p>
                <Button variant="outline">Learn More</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
