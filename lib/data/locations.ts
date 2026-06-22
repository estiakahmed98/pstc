export interface Location {
  id: string;
  name: string;
  country: string;
  region?: string;
  address: string;
  phone?: string;
  email?: string;
  coordinators?: string[];
}

export const locations: Location[] = [
  {
    id: 'loc-dhaka',
    name: 'PSTC Head Office - Dhaka',
    country: 'Bangladesh',
    region: 'Dhaka',
    address: '123 Development Avenue, Dhaka 1212, Bangladesh',
    phone: '+880-2-XXXX-XXXX',
    email: 'contact@pstc.org',
    coordinators: ['Ms. Nasrin Khan', 'Mr. Rajesh Kumar'],
  },
  {
    id: 'loc-chittagong',
    name: 'PSTC Regional Office - Chittagong',
    country: 'Bangladesh',
    region: 'Chittagong',
    address: '456 Coastal Road, Chittagong 4000, Bangladesh',
    phone: '+880-31-XXXX-XXXX',
    email: 'chittagong@pstc.org',
    coordinators: ['Mr. Hassan Ahmed'],
  },
  {
    id: 'loc-khulna',
    name: 'PSTC Regional Office - Khulna',
    country: 'Bangladesh',
    region: 'Khulna',
    address: '789 Southern Zone, Khulna 9000, Bangladesh',
    phone: '+880-41-XXXX-XXXX',
    email: 'khulna@pstc.org',
    coordinators: ['Ms. Fatima Hassan'],
  },
  {
    id: 'loc-sylhet',
    name: 'PSTC Field Office - Sylhet',
    country: 'Bangladesh',
    region: 'Sylhet',
    address: '321 Hill Region, Sylhet 3100, Bangladesh',
    phone: '+880-86-XXXX-XXXX',
    email: 'sylhet@pstc.org',
  },
  {
    id: 'loc-rangpur',
    name: 'PSTC Field Office - Rangpur',
    country: 'Bangladesh',
    region: 'Rangpur',
    address: '654 Northern Zone, Rangpur 5400, Bangladesh',
    phone: '+880-52-XXXX-XXXX',
    email: 'rangpur@pstc.org',
  },
  {
    id: 'loc-karachi',
    name: 'PSTC Office - Karachi',
    country: 'Pakistan',
    region: 'Sindh',
    address: '111 Development Street, Karachi, Pakistan',
    phone: '+92-21-XXXX-XXXX',
    email: 'karachi@pstc.org',
    coordinators: ['Mr. Ali Hassan'],
  },
  {
    id: 'loc-lahore',
    name: 'PSTC Office - Lahore',
    country: 'Pakistan',
    region: 'Punjab',
    address: '222 Education Lane, Lahore, Pakistan',
    phone: '+92-42-XXXX-XXXX',
    email: 'lahore@pstc.org',
  },
  {
    id: 'loc-kathmandu',
    name: 'PSTC Office - Kathmandu',
    country: 'Nepal',
    region: 'Bagmati',
    address: '333 Development Path, Kathmandu, Nepal',
    phone: '+977-1-XXXX-XXXX',
    email: 'kathmandu@pstc.org',
    coordinators: ['Dr. Prakash Sharma'],
  },
];
