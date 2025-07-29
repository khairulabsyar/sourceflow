import { Variants } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { InputHTMLAttributes } from 'react';
import { CardVariant } from '../definitions';

export const headerNavigation = [
  {
    name: 'For jobseekers',
    href: '#jobseekers',
    children: [
      { name: 'Find Jobs', href: '#' },
      { name: 'Upload CV', href: '#' },
      { name: 'Career Advice', href: '#' },
    ],
  },
  {
    name: 'For clients',
    href: '#clients',
    children: [
      { name: 'Find Talent', href: '#' },
      { name: 'Why Choose Us', href: '#' },
      { name: 'Industries', href: '#' },
    ],
  },
  {
    name: 'Sectors',
    href: '#sectors',
    children: [
      { name: 'Software Engineering', href: '#' },
      { name: 'DevOps', href: '#' },
      { name: 'Cloud', href: '#' },
      { name: 'Security', href: '#' },
    ],
  },
  {
    name: 'Resources',
    href: '#resources',
    children: [
      { name: 'Blog', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'FAQ', href: '#' },
    ],
  },
];

export const footerNavigation = {
  explore: [
    { name: 'Home', href: '#' },
    { name: 'For jobseekers', href: '#' },
    { name: 'For clients', href: '#' },
    { name: 'Our sectors', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Contact us', href: '#' },
  ],
  sectors: [
    { name: 'Software engineering', href: '#' },
    { name: 'DevOps', href: '#' },
    { name: 'Cloud', href: '#' },
    { name: 'Infrastructure', href: '#' },
    { name: 'Testing', href: '#' },
    { name: 'Security', href: '#' },
  ],
  services: [
    { name: 'Permanent recruitment', href: '#' },
    { name: 'Contract staffing', href: '#' },
    { name: 'Executive search', href: '#' },
    { name: 'Consultancy', href: '#' },
    { name: 'Talent mapping', href: '#' },
    { name: 'Market insights', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'GDPR Compliance', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
  ],
};

export const ClientsCompanies = [
  { name: 'Microsoft', logo: '/microsoft.png' },
  { name: 'Oracle', logo: '/oracle.png' },
  { name: 'Atlassian', logo: '/atlassian.png' },
  { name: 'Cloudflare', logo: '/cloudflare.png' },
  { name: 'VMware', logo: '/vmware.png' },
];

export const ClientsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const ClientsItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const jobs = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'TechCorp',
    location: 'London, UK',
    salary: '£75,000 - £90,000',
    type: 'Python',
    description:
      'We are looking for an experienced Python developer to join our growing team. You will be responsible for building and maintaining our core platform.',
    postedDate: '29/08/2023',
  },
  {
    id: 2,
    title: 'DevOps Engineer',
    company: 'CloudScale',
    location: 'Remote',
    salary: '£80,000 - £100,000',
    type: 'DevOps',
    description:
      'Join our DevOps team to build and maintain our cloud infrastructure. Experience with Kubernetes and AWS required.',
    postedDate: '28/08/2023',
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'WebInnovate',
    location: 'Manchester, UK',
    salary: '£60,000 - £75,000',
    type: 'React',
    description:
      'Looking for a talented Frontend Developer with React experience to help us build beautiful, responsive user interfaces.',
    postedDate: '27/08/2023',
  },
  {
    id: 4,
    title: 'Data Scientist',
    company: 'DataMind',
    location: 'Edinburgh, UK',
    salary: '£70,000 - £85,000',
    type: 'Data Science',
    description:
      'Seeking a Data Scientist with expertise in machine learning and statistical analysis to extract insights from complex datasets.',
    postedDate: '26/08/2023',
  },
  {
    id: 5,
    title: 'UX/UI Designer',
    company: 'DesignHub',
    location: 'Bristol, UK',
    salary: '£55,000 - £70,000',
    type: 'Design',
    description:
      'Creative UX/UI Designer needed to craft intuitive and engaging user experiences for our digital products.',
    postedDate: '25/08/2023',
  },
  {
    id: 6,
    title: 'Backend Developer',
    company: 'APITech',
    location: 'Remote',
    salary: '£65,000 - £80,000',
    type: 'Node.js',
    description: 'Join our team to design and implement scalable backend services and APIs for our growing platform.',
    postedDate: '24/08/2023',
  },
  {
    id: 7,
    title: 'Backend Engineer',
    company: 'DataSystems',
    location: 'Edinburgh, UK',
    salary: '£70,000 - £85,000',
    type: 'Node.js',
    description: 'We need a skilled Backend Engineer to develop and maintain our server-side applications and APIs.',
    postedDate: '26/08/2023',
  },
  {
    id: 8,
    title: 'Full Stack Developer',
    company: 'DigitalAgency',
    location: 'Bristol, UK',
    salary: '£65,000 - £80,000',
    type: 'JavaScript',
    description:
      'Join our team as a Full Stack Developer working with modern JavaScript frameworks on both frontend and backend.',
    postedDate: '25/08/2023',
  },
  {
    id: 9,
    title: 'Machine Learning Engineer',
    company: 'AITech Solutions',
    location: 'Cambridge, UK',
    salary: '£85,000 - £110,000',
    type: 'AI/ML',
    description:
      'Join our AI research team to develop cutting-edge machine learning models and algorithms to solve complex business problems.',
    postedDate: '23/08/2023',
  },
];

export const stats = [
  { value: '10K+', label: 'Jobs Posted' },
  { value: '5K+', label: 'Companies' },
  { value: '98%', label: 'Success Rate' },
];

// Define styles for each variant
export const variantStyles: Record<
  CardVariant,
  {
    container: string;
    typeBadge: string;
    iconColor: string;
    textColor: string;
    secondaryTextColor: string;
  }
> = {
  featured: {
    container: 'border-2 border-blue-200 shadow-md bg-gradient-to-br from-blue-50 to-blue-100',
    typeBadge: 'bg-blue-100 text-blue-800',
    iconColor: 'text-blue-500',
    textColor: 'text-gray-900',
    secondaryTextColor: 'text-gray-700',
  },
  yellow: {
    container: 'border border-gray-200 bg-[#FCDF69]',
    typeBadge: 'bg-white/90 text-gray-900',
    iconColor: 'text-gray-800',
    textColor: 'text-gray-900',
    secondaryTextColor: 'text-gray-900',
  },
  gray: {
    container: 'border border-gray-200 bg-gray-50',
    typeBadge: 'bg-white/90 text-gray-900',
    iconColor: 'text-gray-800',
    textColor: 'text-gray-900',
    secondaryTextColor: 'text-gray-900',
  },
  peach: {
    container: 'border border-gray-200 bg-[#F99D76]',
    typeBadge: 'bg-white/90 text-gray-900',
    iconColor: 'text-gray-800',
    textColor: 'text-gray-900',
    secondaryTextColor: 'text-gray-900',
  },
  default: {
    container: 'border border-gray-200 bg-white',
    typeBadge: 'bg-gray-100 text-gray-900',
    iconColor: 'text-gray-800',
    textColor: 'text-gray-900',
    secondaryTextColor: 'text-gray-900',
  },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1], // Using cubic-bezier values instead of string
    },
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (e: React.FormEvent) => void;
  searchButtonText?: string;
  containerClassName?: string;
  isLoading?: boolean;
}
