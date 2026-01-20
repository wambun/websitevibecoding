export const footerLinks: Array<{
  columnName: string;
  links: Array<{
    href: string;
    title: string;
  }>;
}> = [
  {
    columnName: 'Services',
    links: [
      { href: '/services/peo-services', title: 'PEO Services' },
      { href: '/services/aso-services', title: 'ASO Services' },
      { href: '/services/hr-solutions', title: 'HR Solutions' },
      { href: '/services/employee-benefits', title: 'Employee Benefits' },
      { href: '/services/compliance-risk', title: 'Compliance & Risk' },
    ],
  },
  {
    columnName: 'Industries',
    links: [
      { href: '/industries/professional-services', title: 'Professional Services' },
      { href: '/industries/healthcare', title: 'Healthcare' },
      { href: '/industries/hospitality', title: 'Hospitality' },
      { href: '/industries/financial-services', title: 'Financial Services' },
      { href: '/industries/manufacturing', title: 'Manufacturing' },
      { href: '/industries/retail', title: 'Retail' },
    ],
  },
  {
    columnName: 'Company',
    links: [
      { href: '/about', title: 'About Us' },
      { href: '/about/team', title: 'Our Team' },
      { href: '/about/why-congruity', title: 'Why Congruity' },
      { href: '/resources/blog', title: 'Blog' },
      { href: '/contact', title: 'Contact' },
    ],
  },
  {
    columnName: 'Partners',
    links: [
      { href: '/partners/brokers', title: 'Brokers' },
      { href: '/partners/referrals', title: 'Referrals' },
      { href: '/partners/strategic-alliances', title: 'Strategic Alliances' },
    ],
  },
];
