export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  featured?: boolean;
  imageUrl?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'PSTC Launches New CSE Curriculum in Five Districts',
    excerpt: 'Partnership with Ministry of Education brings comprehensive sexuality education to schools',
    content: 'PSTC has successfully launched its comprehensive sexuality education curriculum in schools across Dhaka, Chittagong, and three other districts. The initiative involves training 200+ educators and reaching over 5,000 students in the first phase.',
    category: 'education',
    date: '2024-01-15',
    author: 'Communications Team',
    featured: true,
  },
  {
    id: 'news-2',
    title: 'Women Entrepreneurs Celebrate Business Milestones',
    excerpt: 'Economic empowerment program graduates reach 100+ women-led enterprises',
    content: 'Over 100 women entrepreneurs have established their own businesses through PSTC\'s women economic empowerment program. These ventures are creating employment for 500+ community members.',
    category: 'impact',
    date: '2024-01-10',
    author: 'Program Team',
    featured: true,
  },
  {
    id: 'news-3',
    title: 'Regional Conference on Adolescent Health Concludes',
    excerpt: 'Regional health experts gather to discuss trends and best practices',
    content: 'PSTC hosted a three-day regional conference bringing together health professionals, researchers, and policymakers from Bangladesh, Nepal, and Pakistan to discuss adolescent health strategies.',
    category: 'events',
    date: '2024-01-05',
    author: 'Events Team',
  },
  {
    id: 'news-4',
    title: 'New Research on Youth Mental Health Released',
    excerpt: 'Study reveals critical insights on adolescent mental wellbeing',
    content: 'PSTC\'s latest research study on youth mental health provides evidence-based recommendations for schools and communities. The study surveyed 3,000 young people across urban and rural areas.',
    category: 'research',
    date: '2023-12-28',
    author: 'Research Team',
  },
  {
    id: 'news-5',
    title: 'Community Health Workers Complete Advanced Training',
    excerpt: 'Training program enhances skills of 300+ grassroots health workers',
    content: 'PSTC completed an intensive training program for community health workers focusing on maternal health, family planning, and disease prevention. Participants now serve as health ambassadors in their communities.',
    category: 'training',
    date: '2023-12-20',
    author: 'Capacity Building Team',
  },
  {
    id: 'news-6',
    title: 'Partnership Announcement: PSTC & International Health Organization',
    excerpt: 'New collaboration to expand reproductive health services in rural areas',
    content: 'PSTC has signed a partnership agreement with a leading international health organization to expand reproductive health services and training in remote areas of South Asia.',
    category: 'partnerships',
    date: '2023-12-15',
    author: 'Leadership Team',
  },
  {
    id: 'news-7',
    title: 'Digital Health Platform Goes Live',
    excerpt: 'New online resource provides access to health information for millions',
    content: 'PSTC has launched a comprehensive digital health platform providing free access to evidence-based health information, training materials, and resources in multiple languages.',
    category: 'technology',
    date: '2023-12-10',
    author: 'Digital Team',
  },
  {
    id: 'news-8',
    title: 'Youth Leadership Program Graduates Receive Awards',
    excerpt: 'Recognition for young leaders driving social change',
    content: 'PSTC\'s youth leadership program celebrated its first cohort of graduates who have gone on to champion social development initiatives in their communities and organizations.',
    category: 'recognition',
    date: '2023-12-01',
    author: 'Youth Programs Team',
  },
];
