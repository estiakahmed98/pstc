export interface Job {
  id: string;
  title: string;
  department: string;
  type: 'full-time' | 'part-time' | 'contract';
  location: string;
  description: string;
  requirements: string[];
  salary?: string;
  deadline: string;
  postedDate: string;
}

export const jobs: Job[] = [
  {
    id: 'job-1',
    title: 'Program Manager - Adolescent Health',
    department: 'Health Programs',
    type: 'full-time',
    location: 'Dhaka, Bangladesh',
    description: 'Lead and manage adolescent health programs across multiple districts, coordinate with partners, and oversee project implementation.',
    requirements: [
      'Master\'s degree in Public Health or related field',
      '3+ years experience in health program management',
      'Strong knowledge of adolescent sexual and reproductive health',
      'Excellent communication and leadership skills',
    ],
    salary: '$20,000 - $25,000 annually',
    deadline: '2024-02-15',
    postedDate: '2024-01-20',
  },
  {
    id: 'job-2',
    title: 'CSE Curriculum Specialist',
    department: 'Education Programs',
    type: 'full-time',
    location: 'Dhaka, Bangladesh',
    description: 'Develop and adapt comprehensive sexuality education curriculum, provide teacher training, and monitor implementation quality.',
    requirements: [
      'Bachelor\'s degree in Education or related field',
      '2+ years curriculum development experience',
      'Experience with CSE or sex education programs',
      'Proficiency in both English and Bengali',
    ],
    salary: '$15,000 - $18,000 annually',
    deadline: '2024-02-20',
    postedDate: '2024-01-18',
  },
  {
    id: 'job-3',
    title: 'Monitoring & Evaluation Officer',
    department: 'Research & Evaluation',
    type: 'full-time',
    location: 'Chittagong, Bangladesh',
    description: 'Design and implement monitoring systems, collect data, and prepare evaluation reports for multiple programs.',
    requirements: [
      'Bachelor\'s degree in Statistics, Social Sciences, or related field',
      '2+ years experience in M&E',
      'Proficiency with data collection tools and analysis software',
      'Strong analytical and communication skills',
    ],
    salary: '$12,000 - $15,000 annually',
    deadline: '2024-02-25',
    postedDate: '2024-01-19',
  },
  {
    id: 'job-4',
    title: 'Women Empowerment Officer',
    department: 'Gender Programs',
    type: 'full-time',
    location: 'Khulna, Bangladesh',
    description: 'Implement women empowerment programs, provide training and support to women entrepreneurs and groups.',
    requirements: [
      'Bachelor\'s degree in Social Development or related field',
      '2+ years in women empowerment or gender program work',
      'Experience with microcredit or economic programs',
      'Fluency in Bengali required',
    ],
    salary: '$11,000 - $14,000 annually',
    deadline: '2024-02-18',
    postedDate: '2024-01-17',
  },
  {
    id: 'job-5',
    title: 'Senior Research Analyst',
    department: 'Research Center',
    type: 'full-time',
    location: 'Dhaka, Bangladesh',
    description: 'Lead research projects on sexual and reproductive health, publish findings, and contribute to evidence-based policy recommendations.',
    requirements: [
      'Master\'s degree required (preferably PhD in public health or related field)',
      '4+ years research experience in health or social development',
      'Strong publication record',
      'Expertise in quantitative and qualitative research methods',
    ],
    salary: '$25,000 - $30,000 annually',
    deadline: '2024-03-01',
    postedDate: '2024-01-16',
  },
  {
    id: 'job-6',
    title: 'Communications & Advocacy Officer',
    department: 'Communications',
    type: 'full-time',
    location: 'Dhaka, Bangladesh',
    description: 'Develop communication strategies, create content, manage social media, and support advocacy campaigns.',
    requirements: [
      'Bachelor\'s degree in Communications, Journalism, or related field',
      '2+ years experience in communications or media work',
      'Strong writing and content creation skills',
      'Experience with social media management',
    ],
    salary: '$12,000 - $15,000 annually',
    deadline: '2024-02-22',
    postedDate: '2024-01-15',
  },
  {
    id: 'job-7',
    title: 'Finance & Operations Manager',
    department: 'Finance & Administration',
    type: 'full-time',
    location: 'Dhaka, Bangladesh',
    description: 'Manage organizational finances, oversee operations, ensure compliance with donor requirements.',
    requirements: [
      'Bachelor\'s degree in Accounting, Finance, or Business Administration',
      '5+ years in finance and operations management',
      'Knowledge of NGO financial management',
      'Proficiency with accounting software',
    ],
    salary: '$18,000 - $22,000 annually',
    deadline: '2024-02-28',
    postedDate: '2024-01-14',
  },
  {
    id: 'job-8',
    title: 'Community Health Worker - Multiple Positions',
    department: 'Health Programs',
    type: 'part-time',
    location: 'Multiple Districts',
    description: 'Provide community-level health services, health education, and referral support.',
    requirements: [
      'Secondary education or above',
      'Willingness to work in community settings',
      'Basic computer literacy',
      'Community acceptance and trust',
    ],
    salary: '$2,000 - $3,000 monthly',
    deadline: '2024-02-10',
    postedDate: '2024-01-13',
  },
];
