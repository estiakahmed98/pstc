export interface ThematicArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  focus: string[];
}

export const thematicAreas: ThematicArea[] = [
  {
    id: 'health',
    title: 'Reproductive Health',
    description: 'Promoting access to quality reproductive health services and education',
    icon: '🏥',
    color: 'primary',
    focus: ['Family Planning', 'Maternal Health', 'STI Prevention', 'Health Education'],
  },
  {
    id: 'youth',
    title: 'Youth Engagement',
    description: 'Empowering young people through education and skills development',
    icon: '👥',
    color: 'secondary',
    focus: ['CSE Training', 'Skill Development', 'Leadership', 'Mentorship'],
  },
  {
    id: 'gender',
    title: 'Gender Equality',
    description: 'Advancing gender equality and women empowerment',
    icon: '⚖️',
    color: 'accent',
    focus: ['Women Empowerment', 'Gender Rights', 'Violence Prevention', 'Economic Inclusion'],
  },
  {
    id: 'advocacy',
    title: 'Policy Advocacy',
    description: 'Influencing policy and institutional reform for social change',
    icon: '📋',
    color: 'primary',
    focus: ['Policy Research', 'Stakeholder Engagement', 'Capacity Building', 'Resource Mobilization'],
  },
  {
    id: 'capacity',
    title: 'Capacity Building',
    description: 'Building institutional and individual capacity for sustainable development',
    icon: '📚',
    color: 'secondary',
    focus: ['Training Programs', 'Institutional Strengthening', 'Knowledge Transfer', 'Research'],
  },
];
