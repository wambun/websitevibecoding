export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  features: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: 'peo-services',
    title: 'PEO Services',
    slug: 'peo-services',
    shortDescription:
      'Let us handle all your payroll, benefits, and HR support needs with our comprehensive PEO solutions.',
    longDescription:
      "Congruity's PEO services combine world-class HR, benefits, and payroll support with technology and customer support that's second to none. We become a co-employer with your business, taking on HR responsibilities while you maintain control of your day-to-day operations.",
    features: [
      {
        title: 'Comprehensive Payroll Management',
        description:
          'Complete payroll processing, tax filing, direct deposit, and payroll reporting handled with precision.',
      },
      {
        title: 'Benefits Administration',
        description:
          'Access to Fortune 500-level benefits packages including health, dental, vision, and retirement plans.',
      },
      {
        title: 'HR Support & Compliance',
        description:
          'Expert guidance on employment law, regulatory compliance, and HR best practices.',
      },
      {
        title: 'Workers Compensation',
        description:
          'Competitive workers comp coverage with claims management and safety programs.',
      },
      {
        title: 'Risk Management',
        description:
          'Proactive risk mitigation strategies to protect your business and employees.',
      },
      {
        title: 'Technology Platform',
        description:
          'Award-winning iSolved platform for employee self-service, time tracking, and more.',
      },
    ],
    benefits: [
      'Reduce HR administrative burden',
      'Access better benefits at lower costs',
      'Ensure compliance with complex regulations',
      'Dedicated support team for your business',
      'Scalable solutions as you grow',
    ],
    icon: 'Users',
  },
  {
    id: 'aso-services',
    title: 'ASO Services',
    slug: 'aso-services',
    shortDescription:
      'Flexible HR outsourcing that lets you maintain employer control while offloading administrative tasks.',
    longDescription:
      'Our ASO model allows businesses to outsource HR-related tasks like payroll processing and benefit administration while maintaining full employer status. This flexibility enables you to enhance your HR functions while keeping your own benefit plans.',
    features: [
      {
        title: 'Cost-Effective Payroll Solutions',
        description:
          'Accurate and timely payroll processing with tax filing, direct deposit, and reporting.',
      },
      {
        title: 'Customizable Benefits Administration',
        description:
          'Manage your own benefit plans with our administrative support and expertise.',
      },
      {
        title: 'Compliance Support',
        description:
          'Navigate complex labor laws with guidance to minimize compliance risks.',
      },
      {
        title: 'HR Consulting',
        description:
          'Access to HR expertise for policy development, employee relations, and more.',
      },
    ],
    benefits: [
      'Maintain full control over benefit plans',
      'Reduce administrative workload',
      'Access expert HR guidance',
      'Flexible service options',
      'Cost-effective solution',
    ],
    icon: 'FileText',
  },
  {
    id: 'hr-solutions',
    title: 'HR Solutions',
    slug: 'hr-solutions',
    shortDescription:
      'From recruiting to retirement, and everything in-between. Complete HR lifecycle management.',
    longDescription:
      'At Congruity, we provide comprehensive HR solutions covering the entire employee lifecycle. Whether you need daily support or specialized expertise, our team is ready to help.',
    features: [
      {
        title: 'Recruiting and Onboarding',
        description:
          'Full array of pre-hire and onboarding solutions with our award-winning platform.',
      },
      {
        title: 'Employee Training & Development',
        description:
          'Learning management solutions, skill development workshops, and leadership training.',
      },
      {
        title: 'Performance Management',
        description:
          'Goal setting, reviews, feedback mechanisms, and performance improvement strategies.',
      },
      {
        title: 'HR Policies & Handbook Development',
        description:
          'Comprehensive policy creation and employee handbook development.',
      },
    ],
    benefits: [
      'Streamlined recruiting process',
      'Improved employee engagement',
      'Clear performance expectations',
      'Consistent HR policies',
      'Reduced turnover',
    ],
    icon: 'Briefcase',
  },
  {
    id: 'employee-benefits',
    title: 'Employee Benefits',
    slug: 'employee-benefits',
    shortDescription:
      'Comprehensive benefits packages that attract and retain top talent.',
    longDescription:
      'To keep current employees happy and attract new talent, you need comprehensive and competitive benefits. Congruity provides dedicated benefits account managers to help define your needs and deliver access to diverse programs.',
    features: [
      {
        title: 'Healthcare Insurance',
        description:
          'Comprehensive medical, dental, and vision plans from nationally-recognized providers.',
      },
      {
        title: 'Retirement Plans',
        description:
          '401(k) plans with employer matching options and retirement planning resources.',
      },
      {
        title: 'Non-Traditional Benefits',
        description:
          'Flex time, tuition reimbursement, gym memberships, student loan assistance, and more.',
      },
      {
        title: 'Open Enrollment Support',
        description:
          'Educational materials, election tools, webinars, and one-on-one coaching.',
      },
    ],
    benefits: [
      'Attract top talent',
      'Improve employee retention',
      'Competitive benefits packages',
      'Expert benefits guidance',
      'Simplified enrollment process',
    ],
    icon: 'Heart',
  },
  {
    id: 'compliance-risk',
    title: 'Compliance & Risk Management',
    slug: 'compliance-risk',
    shortDescription:
      'Navigate complex regulations with confidence and protect your business.',
    longDescription:
      'The world of HR compliance can turn on a dime. Our team stays current on everything happening at state and federal levels, ensuring your organization stays on the right side of regulations.',
    features: [
      {
        title: 'Regulatory Compliance',
        description:
          'Stay compliant with federal and state employment laws, OSHA, ACA, and more.',
      },
      {
        title: 'Risk Assessment',
        description:
          'Identify potential risks and develop strategies to mitigate them.',
      },
      {
        title: 'Safety Programs',
        description:
          'Workplace safety training and programs to reduce incidents and claims.',
      },
      {
        title: 'Policy Updates',
        description:
          'Regular updates on regulatory changes that affect your business.',
      },
    ],
    benefits: [
      'Avoid costly compliance penalties',
      'Reduce legal risks',
      'Protect your business',
      'Stay informed on regulations',
      'Peace of mind',
    ],
    icon: 'Shield',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
