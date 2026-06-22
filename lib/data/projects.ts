export interface Project {
  id: string;
  title: string;
  description: string;
  thematicArea: string;
  status: 'ongoing' | 'completed';
  startDate: string;
  endDate?: string;
  locations: string[];
  beneficiaries: number;
  partners: string[];
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Comprehensive Sexuality Education Program',
    description: 'Implementing evidence-based CSE curriculum in 50+ schools across Bangladesh',
    thematicArea: 'youth',
    status: 'ongoing',
    startDate: '2021-01-01',
    locations: ['Dhaka', 'Chittagong', 'Sylhet'],
    beneficiaries: 15000,
    partners: ['Ministry of Education', 'World Health Organization'],
  },
  {
    id: 'proj-2',
    title: 'Women\'s Economic Empowerment Initiative',
    description: 'Supporting women entrepreneurs through skills training and microfinance',
    thematicArea: 'gender',
    status: 'ongoing',
    startDate: '2020-06-01',
    locations: ['Dhaka', 'Khulna', 'Barisal'],
    beneficiaries: 8500,
    partners: ['BRAC', 'UN Women'],
  },
  {
    id: 'proj-3',
    title: 'Rural Maternal Health Project',
    description: 'Strengthening maternal health services in remote areas',
    thematicArea: 'health',
    status: 'ongoing',
    startDate: '2022-03-01',
    locations: ['Rangpur', 'Dinajpur', 'Nilphamari'],
    beneficiaries: 25000,
    partners: ['CARE International', 'Save the Children'],
  },
  {
    id: 'proj-4',
    title: 'Youth Leadership Development Program',
    description: 'Creating a network of youth leaders committed to social change',
    thematicArea: 'youth',
    status: 'ongoing',
    startDate: '2021-09-01',
    locations: ['Dhaka', 'Chattogram', 'Khulna'],
    beneficiaries: 3000,
    partners: ['British Council', 'Youth for Change Network'],
  },
  {
    id: 'proj-5',
    title: 'Policy Research on Adolescent Sexual Health',
    description: 'Conducting research to inform national adolescent health policies',
    thematicArea: 'advocacy',
    status: 'completed',
    startDate: '2019-01-01',
    endDate: '2021-12-31',
    locations: ['Bangladesh', 'Nepal', 'Pakistan'],
    beneficiaries: 5000,
    partners: ['UNFPA', 'Academic Institutions'],
  },
  {
    id: 'proj-6',
    title: 'Community Health Worker Training',
    description: 'Training 500+ community health workers in reproductive health',
    thematicArea: 'capacity',
    status: 'ongoing',
    startDate: '2022-01-01',
    locations: ['All Districts'],
    beneficiaries: 50000,
    partners: ['Ministry of Health', 'NGO Coalition'],
  },
  {
    id: 'proj-7',
    title: 'Comprehensive Sexuality Education in Pakistan',
    description: 'Pioneering CSE introduction in Pakistani schools and communities',
    thematicArea: 'youth',
    status: 'ongoing',
    startDate: '2022-06-01',
    locations: ['Karachi', 'Lahore', 'Islamabad'],
    beneficiaries: 12000,
    partners: ['Ministry of Education Pakistan', 'UNESCO'],
  },
  {
    id: 'proj-8',
    title: 'Digital Health Literacy Campaign',
    description: 'Promoting digital skills and online health information access',
    thematicArea: 'health',
    status: 'ongoing',
    startDate: '2023-01-01',
    locations: ['South Asia'],
    beneficiaries: 100000,
    partners: ['Tech for Good', 'Digital Rights Foundation'],
  },
];
