export interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  joinDate: string;
}

export const users: UserData[] = [
  { id: '1', name: 'Admin User', email: 'admin@pstc.org', role: 'Super Admin', status: 'active', joinDate: '2020-01-15' },
  { id: '2', name: 'Editor One', email: 'editor1@pstc.org', role: 'Editor', status: 'active', joinDate: '2021-03-10' },
  { id: '3', name: 'Program Manager', email: 'pm@pstc.org', role: 'Program Manager', status: 'active', joinDate: '2021-06-20' },
  { id: '4', name: 'Viewer User', email: 'viewer@pstc.org', role: 'Viewer', status: 'active', joinDate: '2022-01-05' },
  { id: '5', name: 'Editor Two', email: 'editor2@pstc.org', role: 'Editor', status: 'active', joinDate: '2022-04-12' },
];

export interface SuccessStory {
  id: string;
  title: string;
  description: string;
  personName: string;
  location: string;
  impact: string;
  image?: string;
}

export const successStories: SuccessStory[] = [
  {
    id: 'story-1',
    title: 'From Student to Healthcare Champion',
    description: 'Fatima completed her CSE training and became a peer educator, reaching 200+ classmates with health information.',
    personName: 'Fatima Ahmed',
    location: 'Dhaka, Bangladesh',
    impact: 'Reached 200+ young people with accurate health information',
  },
  {
    id: 'story-2',
    title: 'Breaking Economic Barriers',
    description: 'After participating in the women entrepreneurs program, Nasrin started her own tailoring business and now employs 5 women.',
    personName: 'Nasrin Khan',
    location: 'Khulna, Bangladesh',
    impact: 'Created employment for 5+ women in her community',
  },
  {
    id: 'story-3',
    title: 'Community Health Champion',
    description: 'Ali, a community health worker, has provided family planning services to 500+ families in his remote village.',
    personName: 'Ali Hassan',
    location: 'Rangpur, Bangladesh',
    impact: 'Served 500+ families with health services',
  },
];
