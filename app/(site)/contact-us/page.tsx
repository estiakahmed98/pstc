'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';
import { toast } from 'sonner';
import { Mail, MapPin, Phone } from 'lucide-react';
import { locations } from '@/lib/data/locations';

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      toast.success(t('form.thanks'));
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10 border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">{t('nav.contact')}</h1>
          <p className="text-lg text-muted-foreground">
            Get in touch with us. We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t('form.name')}</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('form.email')}</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('form.message')}</label>
                  <textarea
                    placeholder="Your message..."
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">{t('form.submit')}</Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:contact@pstc.org" className="text-primary hover:underline">
                        contact@pstc.org
                      </a>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p>+880-2-XXXX-XXXX</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Head Office</h3>
                      <p className="text-muted-foreground text-sm">
                        123 Development Avenue<br />
                        Dhaka 1212, Bangladesh
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Regional Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc) => (
              <Card key={loc.id} className="p-6">
                <h3 className="font-semibold mb-2">{loc.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{loc.address}</p>
                {loc.phone && (
                  <p className="text-sm"><strong>Phone:</strong> {loc.phone}</p>
                )}
                {loc.email && (
                  <p className="text-sm"><strong>Email:</strong> {loc.email}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
