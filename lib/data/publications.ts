export interface Publication {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'report' | 'research' | 'guide' | 'case-study' | 'manual';
  year: number;
  authors: string[];
  language: string[];
  downloadUrl?: string;
}

export const publications: Publication[] = [
  {
    id: 'pub-1',
    title: 'Comprehensive Sexuality Education: A Pathway to Empowerment',
    description: 'Evidence on the impact of CSE programs across South Asia',
    category: 'research',
    type: 'research',
    year: 2023,
    authors: ['Dr. Fatima Khan', 'Prof. Rajesh Kumar'],
    language: ['en', 'bn'],
  },
  {
    id: 'pub-2',
    title: 'Adolescent Sexual and Reproductive Health Policy Brief',
    description: 'Key policy recommendations for strengthening ASRH services',
    category: 'policy',
    type: 'report',
    year: 2023,
    authors: ['PSTC Team'],
    language: ['en', 'bn', 'ar'],
  },
  {
    id: 'pub-3',
    title: 'Gender-Based Violence Prevention: A Community Approach',
    description: 'Practical guide for implementing community-based GBV prevention programs',
    category: 'guidance',
    type: 'guide',
    year: 2022,
    authors: ['Ms. Noor Fatima', 'Dr. Amina Hassan'],
    language: ['en', 'ar'],
  },
  {
    id: 'pub-4',
    title: 'Impact Case Study: Rural Health Initiative Results',
    description: 'Documenting outcomes of the rural maternal health project',
    category: 'impact',
    type: 'case-study',
    year: 2023,
    authors: ['Monitoring & Evaluation Team'],
    language: ['en', 'bn'],
  },
  {
    id: 'pub-5',
    title: 'Trainer\'s Manual for CSE Implementation',
    description: 'Comprehensive resource for training educators on CSE curriculum',
    category: 'training',
    type: 'manual',
    year: 2022,
    authors: ['Education Department'],
    language: ['en', 'bn'],
  },
  {
    id: 'pub-6',
    title: 'Youth Leadership Framework',
    description: 'Strategic framework for developing youth leaders in development work',
    category: 'framework',
    type: 'guide',
    year: 2023,
    authors: ['Youth Program Team'],
    language: ['en'],
  },
  {
    id: 'pub-7',
    title: 'Women\'s Economic Empowerment: Lessons Learned',
    description: 'Key findings from three years of women empowerment initiatives',
    category: 'research',
    type: 'research',
    year: 2023,
    authors: ['Dr. Nasrin Begum', 'Prof. Hassan Ali'],
    language: ['en', 'bn'],
  },
  {
    id: 'pub-8',
    title: 'Digital Health Literacy Toolkit',
    description: 'Resources for promoting digital health information access',
    category: 'toolkit',
    type: 'guide',
    year: 2023,
    authors: ['Digital Health Team'],
    language: ['en', 'bn', 'ar'],
  },
  {
    id: 'pub-9',
    title: 'Sexual Harassment Prevention in Workplaces',
    description: 'Policy guidelines and implementation strategies',
    category: 'policy',
    type: 'report',
    year: 2022,
    authors: ['HR & Safeguarding Team'],
    language: ['en'],
  },
  {
    id: 'pub-10',
    title: 'Community Health Worker Training Manual',
    description: 'Step-by-step guide for CHW training programs',
    category: 'training',
    type: 'manual',
    year: 2023,
    authors: ['Health Department'],
    language: ['en', 'bn', 'ar'],
  },
];
