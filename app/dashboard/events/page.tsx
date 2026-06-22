'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function EventsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Events Management</h1>
      <Card className="p-6"><Button>Create Event</Button></Card>
    </div>
  );
}
