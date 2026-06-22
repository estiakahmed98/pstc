export interface StaffMember {
  id: string;
  name: string;
  title: string;
  department: string;
  bio: string;
  email?: string;
  image?: string;
}

export const staff: StaffMember[] = [
  {
    id: 'staff-1',
    name: 'Dr. Fatima Khan',
    title: 'Executive Director',
    department: 'Leadership',
    bio: 'Dr. Fatima Khan brings over 20 years of experience in international development and reproductive health. She has led PSTC\'s transformation into a leading regional organization.',
    email: 'fatima@pstc.org',
  },
  {
    id: 'staff-2',
    name: 'Mr. Rajesh Kumar',
    title: 'Director, Programs',
    department: 'Programs',
    bio: 'Mr. Kumar oversees all program implementation across the region, ensuring quality and impact. He holds an MBA in Development Management.',
    email: 'rajesh@pstc.org',
  },
  {
    id: 'staff-3',
    name: 'Dr. Amina Hassan',
    title: 'Director, Research Center',
    department: 'Research',
    bio: 'Dr. Hassan is a senior researcher with a PhD in Public Health. Her research focuses on adolescent sexual and reproductive health in South Asia.',
    email: 'amina@pstc.org',
  },
  {
    id: 'staff-4',
    name: 'Ms. Nasrin Khan',
    title: 'Director, Finance & Administration',
    department: 'Finance',
    bio: 'Ms. Khan manages all financial and administrative operations with over 15 years of NGO management experience.',
    email: 'nasrin@pstc.org',
  },
  {
    id: 'staff-5',
    name: 'Mr. Hassan Ahmed',
    title: 'Regional Coordinator - East',
    department: 'Operations',
    bio: 'Mr. Ahmed coordinates all operations in the eastern region and has deep community connections.',
    email: 'hassan@pstc.org',
  },
  {
    id: 'staff-6',
    name: 'Ms. Noor Fatima',
    title: 'Gender & Safeguarding Officer',
    department: 'Safeguarding',
    bio: 'Ms. Fatima leads PSTC\'s commitment to gender equality and safeguarding with 10 years of specialized experience.',
    email: 'noor@pstc.org',
  },
  {
    id: 'staff-7',
    name: 'Mr. Tariq Ali',
    title: 'Head of Communications',
    department: 'Communications',
    bio: 'Mr. Ali manages all external communications, media relations, and advocacy campaigns for PSTC.',
    email: 'tariq@pstc.org',
  },
  {
    id: 'staff-8',
    name: 'Dr. Prakash Sharma',
    title: 'Country Director - Nepal',
    department: 'Regional',
    bio: 'Dr. Sharma leads PSTC\'s operations in Nepal and has extensive experience in South Asian development contexts.',
    email: 'prakash@pstc.org',
  },
];
