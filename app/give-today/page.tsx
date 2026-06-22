'use client';

import { useState } from 'react';
import { PublicLayout } from '@/components/public/layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';
import { toast } from 'sonner';
import { Heart } from 'lucide-react';

export default function DonatePage() {
  const { t } = useTranslation();
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [formData, setFormData] = useState({ name: '', email: '' });

  const quickAmounts = [10, 25, 50, 100, 250, 500];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount && formData.name && formData.email) {
      toast.success(`Thank you for your donation of $${amount}!`);
      setAmount('');
      setFormData({ name: '', email: '' });
    }
  };

  return (
    <PublicLayout>
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10 border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">{t('nav.donate')}</h1>
          <p className="text-lg text-muted-foreground">
            Your donation helps us reach more communities and create sustainable social change
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Make Your Donation</h2>
              <form onSubmit={handleDonate} className="space-y-6">
                {/* Frequency */}
                <div>
                  <label className="block text-sm font-medium mb-3">Donation Type</label>
                  <div className="flex gap-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        value="once"
                        checked={frequency === 'once'}
                        onChange={(e) => setFrequency(e.target.value as 'once' | 'monthly')}
                        className="mr-2"
                      />
                      <span>One-time</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        value="monthly"
                        checked={frequency === 'monthly'}
                        onChange={(e) => setFrequency(e.target.value as 'once' | 'monthly')}
                        className="mr-2"
                      />
                      <span>Monthly</span>
                    </label>
                  </div>
                </div>

                {/* Quick Amounts */}
                <div>
                  <label className="block text-sm font-medium mb-3">Amount (USD)</label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {quickAmounts.map((quickAmount) => (
                      <Button
                        key={quickAmount}
                        type="button"
                        variant={amount === String(quickAmount) ? 'default' : 'outline'}
                        onClick={() => setAmount(String(quickAmount))}
                      >
                        ${quickAmount}
                      </Button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Custom amount"
                    className="w-full px-4 py-2 border border-border rounded-md"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                {/* Personal Info */}
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-border rounded-md"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2 border border-border rounded-md"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Heart className="h-4 w-4 mr-2" /> Donate Now
                </Button>
              </form>
            </div>

            {/* Impact Info */}
            <div className="space-y-8">
              <Card className="p-8 bg-primary/5 border-primary/20">
                <h3 className="text-xl font-bold mb-6">Your Impact</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">$10</p>
                    <p className="font-semibold">Provides health education to 5 young people</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">$25</p>
                    <p className="font-semibold">Supports a community health worker for one day</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">$50</p>
                    <p className="font-semibold">Trains a peer educator in CSE</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">$100</p>
                    <p className="font-semibold">Provides maternal health services to a woman</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">$250+</p>
                    <p className="font-semibold">Funds a comprehensive community program</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-lg font-bold mb-4">Transparency Matters</h3>
                <p className="text-muted-foreground mb-4">
                  We believe in complete transparency about how your donation is used. 85% of funds go directly to programs.
                </p>
                <Button variant="outline" className="w-full">
                  Download Annual Report
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
