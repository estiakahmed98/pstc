'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function UconPage() {
  return (
    <>
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10 border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">uCon: Youth Engagement Hub</h1>
          <p className="text-lg text-muted-foreground">
            A dynamic platform for young people to learn, engage, and drive social change
          </p>
        </div>
      </section>

      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">What is uCon?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">For Young People</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>✓ Comprehensive sexuality education (CSE) training</li>
                <li>✓ Leadership development programs</li>
                <li>✓ Peer-to-peer mentoring</li>
                <li>✓ Community engagement opportunities</li>
                <li>✓ Digital learning resources</li>
              </ul>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Our Focus Areas</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>✓ Sexual and reproductive health</li>
                <li>✓ Gender equality</li>
                <li>✓ Digital literacy</li>
                <li>✓ Economic empowerment</li>
                <li>✓ Civic engagement</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">CSE Training Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              'Puberty & Adolescence',
              'Sexual Health',
              'Reproductive Rights',
              'Relationships',
              'Contraception',
              'STI Prevention',
              'Gender & Equality',
              'Decision Making',
            ].map((module, idx) => (
              <Card key={idx} className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{idx + 1}</div>
                <p className="font-semibold text-sm">{module}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join uCon?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you&apos;re looking to learn about health, develop leadership skills, or make an impact in your community, uCon is the place for you.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Register Now</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>
    </>
  );
}
