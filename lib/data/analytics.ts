export interface VisitorStats {
  date: string;
  visitors: number;
  sessions: number;
  pageViews: number;
}

export interface TopPage {
  path: string;
  title: string;
  views: number;
  avgDuration: number;
  bounceRate: number;
}

export interface SearchKeyword {
  keyword: string;
  searches: number;
  avgPosition: number;
}

export const visitorStats: VisitorStats[] = [
  { date: '2024-01-01', visitors: 1200, sessions: 1500, pageViews: 3400 },
  { date: '2024-01-02', visitors: 1400, sessions: 1800, pageViews: 4200 },
  { date: '2024-01-03', visitors: 1100, sessions: 1400, pageViews: 3100 },
  { date: '2024-01-04', visitors: 1600, sessions: 2000, pageViews: 4800 },
  { date: '2024-01-05', visitors: 1800, sessions: 2200, pageViews: 5100 },
  { date: '2024-01-06', visitors: 1300, sessions: 1600, pageViews: 3600 },
  { date: '2024-01-07', visitors: 1900, sessions: 2400, pageViews: 5600 },
  { date: '2024-01-08', visitors: 2100, sessions: 2600, pageViews: 6200 },
  { date: '2024-01-09', visitors: 1700, sessions: 2100, pageViews: 4900 },
  { date: '2024-01-10', visitors: 2300, sessions: 2800, pageViews: 6800 },
];

export const topPages: TopPage[] = [
  {
    path: '/',
    title: 'Homepage',
    views: 15432,
    avgDuration: 125,
    bounceRate: 35,
  },
  {
    path: '/what-we-do',
    title: 'Programs',
    views: 8234,
    avgDuration: 245,
    bounceRate: 28,
  },
  {
    path: '/publications',
    title: 'Publications',
    views: 7892,
    avgDuration: 180,
    bounceRate: 32,
  },
  {
    path: '/impact',
    title: 'Impact',
    views: 6543,
    avgDuration: 200,
    bounceRate: 25,
  },
  {
    path: '/events-media',
    title: 'Events & Media',
    views: 5234,
    avgDuration: 155,
    bounceRate: 40,
  },
];

export const searchKeywords: SearchKeyword[] = [
  { keyword: 'comprehensive sexuality education', searches: 543, avgPosition: 2 },
  { keyword: 'reproductive health Bangladesh', searches: 432, avgPosition: 3 },
  { keyword: 'youth health programs', searches: 389, avgPosition: 2 },
  { keyword: 'women empowerment', searches: 367, avgPosition: 4 },
  { keyword: 'maternal health', searches: 298, avgPosition: 5 },
  { keyword: 'PSTC', searches: 256, avgPosition: 1 },
  { keyword: 'CSE training', searches: 234, avgPosition: 3 },
  { keyword: 'health advocacy South Asia', searches: 189, avgPosition: 6 },
];

export const dashboardStats = {
  totalPages: 12,
  publishedContent: 287,
  activeUsers: 45,
  monthlyVisitors: 48230,
  totalDownloads: 3456,
  publicationsPublished: 125,
};
