export const headerNavLinks: Array<{
  href: string;
  title: string;
  children?: Array<{ href: string; title: string; description?: string }>;
}> = [
  {
    href: '/services',
    title: 'Services',
    children: [
      {
        href: '/services/peo-services',
        title: 'PEO Services',
        description: 'Full-service HR, benefits, and payroll support',
      },
      {
        href: '/services/aso-services',
        title: 'ASO Services',
        description: 'Flexible HR outsourcing with employer control',
      },
      {
        href: '/services/hr-solutions',
        title: 'HR Solutions',
        description: 'Recruiting, training, and performance management',
      },
      {
        href: '/services/employee-benefits',
        title: 'Employee Benefits',
        description: 'Comprehensive healthcare and perks packages',
      },
      {
        href: '/services/compliance-risk',
        title: 'Compliance & Risk',
        description: 'Navigate regulations with confidence',
      },
    ],
  },
  {
    href: '/industries',
    title: 'Industries',
    children: [
      {
        href: '/industries/professional-services',
        title: 'Professional Services',
      },
      {
        href: '/industries/healthcare',
        title: 'Healthcare & Biotech',
      },
      {
        href: '/industries/hospitality',
        title: 'Hospitality & Resorts',
      },
      {
        href: '/industries/financial-services',
        title: 'Financial Services',
      },
      {
        href: '/industries/manufacturing',
        title: 'Manufacturing',
      },
      {
        href: '/industries/retail',
        title: 'Retail',
      },
    ],
  },
  {
    href: '/resources',
    title: 'Resources',
    children: [
      {
        href: '/resources/blog',
        title: 'Blog',
        description: 'HR insights and industry trends',
      },
      {
        href: '/resources/learning',
        title: 'Learning Center',
        description: 'Guides, ebooks, and webinars',
      },
    ],
  },
  {
    href: '/about',
    title: 'About',
    children: [
      {
        href: '/about',
        title: 'About Us',
        description: 'Learn about Congruity HR',
      },
      {
        href: '/about/team',
        title: 'Our Team',
        description: 'Meet our expert HR professionals',
      },
      {
        href: '/about/why-congruity',
        title: 'Why Congruity',
        description: 'What makes us different',
      },
    ],
  },
  {
    href: '/contact',
    title: 'Contact',
  },
];
