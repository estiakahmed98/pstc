'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { dashboardStats } from '@/lib/data/analytics';
import { FileText, Users, Eye, Download } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Total Pages</p>
              <p className="text-2xl font-bold mt-1">{dashboardStats.totalPages}</p>
            </div>
            <FileText className="h-8 w-8 text-primary opacity-20" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Published Content</p>
              <p className="text-2xl font-bold mt-1">{dashboardStats.publishedContent}</p>
            </div>
            <FileText className="h-8 w-8 text-secondary opacity-20" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Active Users</p>
              <p className="text-2xl font-bold mt-1">{dashboardStats.activeUsers}</p>
            </div>
            <Users className="h-8 w-8 text-accent opacity-20" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Monthly Visitors</p>
              <p className="text-2xl font-bold mt-1">{dashboardStats.monthlyVisitors.toLocaleString()}</p>
            </div>
            <Eye className="h-8 w-8 text-primary opacity-20" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Downloads</p>
              <p className="text-2xl font-bold mt-1">{dashboardStats.totalDownloads.toLocaleString()}</p>
            </div>
            <Download className="h-8 w-8 text-secondary opacity-20" />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="p-6">
          <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: 'New publication added', time: '2 hours ago', status: 'success' },
              { action: 'User profile updated', time: '4 hours ago', status: 'info' },
              { action: 'Page published', time: '1 day ago', status: 'success' },
              { action: 'Event created', time: '2 days ago', status: 'info' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between pb-3 border-b border-border last:border-0">
                <div>
                  <p className="font-medium text-sm">{item.action}</p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
                <Badge variant={item.status === 'success' ? 'default' : 'secondary'}>
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6">
          <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full">Create Page</Button>
            <Button variant="outline" className="w-full">Add News</Button>
            <Button variant="outline" className="w-full">New Event</Button>
            <Button variant="outline" className="w-full">Upload File</Button>
            <Button variant="outline" className="w-full">Add User</Button>
            <Button variant="outline" className="w-full">View Report</Button>
          </div>
        </Card>
      </div>

      {/* Content Status */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4">Content Status</h2>
        <div className="space-y-4">
          {[
            { type: 'News Articles', total: 45, published: 42, draft: 3 },
            { type: 'Publications', total: 32, published: 28, draft: 4 },
            { type: 'Events', total: 18, published: 15, draft: 3 },
            { type: 'Job Listings', total: 8, published: 7, draft: 1 },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between pb-4 border-b border-border last:border-0">
              <div>
                <p className="font-medium">{item.type}</p>
                <p className="text-sm text-muted-foreground">{item.total} items total</p>
              </div>
              <div className="flex gap-3">
                <Badge variant="default">{item.published} Published</Badge>
                <Badge variant="outline">{item.draft} Draft</Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
