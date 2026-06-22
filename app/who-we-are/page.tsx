'use client';

import { PublicLayout } from '@/components/public/layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { staff } from '@/lib/data/staff';

export default function AboutPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10 border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Who We Are</h1>
          <p className="text-lg text-muted-foreground">
            PSTC is a leading regional organization dedicated to population health, reproductive rights, and social development across South Asia.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To advance population health, sexual and reproductive rights, and inclusive sustainable development through evidence-based programs, research, and advocacy in South Asia.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              A South Asia where all individuals, especially young people and women, enjoy the right to comprehensive sexuality education, reproductive choice, and full participation in social and economic development.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Rights-Based', desc: 'We prioritize human rights and social justice' },
                { title: 'Evidence-Driven', desc: 'Our work is grounded in research and data' },
                { title: 'Inclusive', desc: 'We engage diverse voices and perspectives' },
                { title: 'Sustainable', desc: 'We build long-term capacity and change' },
                { title: 'Accountable', desc: 'We are transparent in our work' },
                { title: 'Collaborative', desc: 'We work in partnership with communities' },
              ].map((value, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Our History</h2>
            <div className="space-y-4">
              {[
                { year: '1999', event: 'PSTC established as a regional NGO' },
                { year: '2005', event: 'Expanded operations to 5 South Asian countries' },
                { year: '2010', event: 'Launched flagship CSE programs' },
                { year: '2015', event: 'Became a leading voice in ASRH advocacy' },
                { year: '2020', event: 'Adapted programs for digital delivery during COVID-19' },
                { year: '2024', event: 'Celebrating 25 years of impact' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-primary font-bold text-lg min-w-20">{item.year}</div>
                  <p className="text-muted-foreground pt-1">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staff.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <div className="p-6">
                  <div className="text-4xl mb-4">👤</div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.title}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-8">Governance & Policies</h2>
          <div className="space-y-4">
            {[
              { title: 'Organizational Policy Framework', desc: 'Comprehensive policies governing our operations' },
              { title: 'Safeguarding Policy', desc: 'Commitment to preventing abuse and protecting beneficiaries' },
              { title: 'Gender Equality Policy', desc: 'Our commitment to gender equality internally and externally' },
              { title: 'Code of Conduct', desc: 'Ethical standards for all staff and partners' },
            ].map((policy, idx) => (
              <Card key={idx} className="p-6 flex items-start justify-between">
                <div>
                  <h3 className="font-semibold mb-1">{policy.title}</h3>
                  <p className="text-muted-foreground text-sm">{policy.desc}</p>
                </div>
                <Badge variant="outline">Download</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
