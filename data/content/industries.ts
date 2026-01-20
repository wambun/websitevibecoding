import {
  Building2,
  Stethoscope,
  UtensilsCrossed,
  Landmark,
  Factory,
  ShoppingBag,
  GraduationCap,
  HeartHandshake,
  Rocket,
  Home,
  Building,
  Cpu,
  LucideIcon,
} from 'lucide-react';

export interface IndustryFeature {
  title: string;
  description: string;
}

export interface Industry {
  slug: string;
  title: string;
  icon: LucideIcon;
  shortDescription: string;
  longDescription: string;
  heroTagline: string;
  subTypes: string[];
  features: IndustryFeature[];
  benefits: string[];
}

export const industries: Industry[] = [
  {
    slug: 'professional-services',
    title: 'Professional Services',
    icon: Building2,
    shortDescription:
      'Streamlined HR solutions for law firms, accounting practices, consulting firms, and professional service organizations.',
    longDescription:
      'Professional service firms face unique challenges when it comes to managing their workforce. From billable hour tracking to competitive benefits packages, Congruity HR provides tailored solutions that help you attract and retain top talent while focusing on what you do best—serving your clients.',
    heroTagline: 'HR solutions built for firms that bill by the hour',
    subTypes: [
      'Law Firms',
      'Accounting Practices',
      'Consulting Firms',
      'Architecture Firms',
      'Engineering Firms',
      'Marketing Agencies',
      'IT Service Providers',
      'Management Consultants',
    ],
    features: [
      {
        title: 'Talent Acquisition',
        description:
          'Attract top-tier professionals with competitive benefits packages and streamlined recruiting processes.',
      },
      {
        title: 'Time & Billing Integration',
        description:
          'Seamlessly integrate payroll with time tracking systems used by professional service firms.',
      },
      {
        title: 'Compliance Management',
        description:
          'Stay compliant with industry-specific regulations and employment laws across multiple states.',
      },
      {
        title: 'Performance Management',
        description:
          'Implement performance review systems tailored to professional development and career progression.',
      },
    ],
    benefits: [
      'Competitive benefits packages to attract top talent',
      'Reduced administrative burden so partners can focus on client work',
      'Multi-state compliance support for firms with distributed teams',
      'Scalable HR infrastructure that grows with your practice',
      'Dedicated HR advisor who understands professional services',
    ],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare & Biotech',
    icon: Stethoscope,
    shortDescription:
      'Comprehensive HR support for hospitals, clinics, biotech firms, and healthcare organizations navigating complex regulations.',
    longDescription:
      "There's an undeniable link between employee satisfaction and quality of care. Let Congruity HR handle all your workforce needs—payroll, benefits, compliance, and more. Our expert team ensures your staff is happy and supported, helping your practice run smoothly and efficiently without the administrative burden.",
    heroTagline: 'Your key to happier workers and healthier patients',
    subTypes: [
      'Primary Care Physicians',
      'Dentists',
      'Nursing Homes',
      'Rehabilitation Facilities',
      'Specialty Clinics',
      'Skilled Nursing Facilities',
      'Urgent Care Centers',
      'Mental Health Counselors',
      'Diagnostic Laboratories',
      'Bio R&D',
    ],
    features: [
      {
        title: 'Boost Efficiency',
        description:
          'We take care of payroll, benefits, and all things HR, so you can focus on what you do best: caring for patients.',
      },
      {
        title: 'Improve Compliance',
        description:
          'Navigating healthcare regulations can be tricky. We keep you up-to-date and compliant, reducing your legal worries.',
      },
      {
        title: 'Enhance Retention',
        description:
          'Keep your best people with competitive benefits packages that retain top talent and attract new hires.',
      },
      {
        title: 'Credentialing Support',
        description:
          'Streamline the credentialing process for healthcare professionals with organized documentation and tracking.',
      },
    ],
    benefits: [
      'HIPAA-compliant HR processes and systems',
      'Specialized benefits packages for healthcare workers',
      '24/7 support for facilities that never close',
      'Workers compensation expertise for high-risk environments',
      'Credential tracking and verification assistance',
    ],
  },
  {
    slug: 'hospitality',
    title: 'Hospitality & Resorts',
    icon: UtensilsCrossed,
    shortDescription:
      'Tailored HR services for hotels, restaurants, resorts, and hospitality businesses with high turnover challenges.',
    longDescription:
      "The workforce is the lifeblood of any business, but for those in the hospitality sector, your team can make the difference between getting by and getting ahead. Congruity HR can help by delivering everything you need to attract and retain great employees, keep them (and your customers) safe, and deliver pay and benefits packages that keep them happy, focused, and loyal.",
    heroTagline: 'Great HR attracts great workers. Great workers create happy guests.',
    subTypes: [
      'Hotels',
      'Restaurants',
      'Country Clubs',
      'Golf Courses',
      'Catering Facilities',
      'Resorts',
      'Casinos',
      'Theme Parks',
      'Cruise Lines',
      'Bed and Breakfasts',
    ],
    features: [
      {
        title: 'Attract Great Workers',
        description:
          'Simplified recruiting, easy onboarding, and flawless payroll streamline operations for you and your workers.',
      },
      {
        title: 'Improve Retention',
        description:
          'Become a magnet for talent with timely training, great benefits, and a platform that makes scheduling and PTO easy.',
      },
      {
        title: 'Increase Customer Delight',
        description:
          'Spend less time on HR burdens and more time creating positive guest experiences that keep them coming back.',
      },
      {
        title: 'Seasonal Workforce Management',
        description:
          'Efficiently manage seasonal hiring, onboarding, and offboarding with streamlined processes.',
      },
    ],
    benefits: [
      'Tip reporting and compliance management',
      'Seasonal hiring and workforce management solutions',
      'Multi-location payroll and benefits administration',
      'Food handler certification tracking',
      'Workers compensation for high-turnover environments',
    ],
  },
  {
    slug: 'financial-services',
    title: 'Financial Services',
    icon: Landmark,
    shortDescription:
      'Specialized HR solutions for banks, investment firms, insurance companies, and financial institutions.',
    longDescription:
      'Financial services firms operate in a highly regulated environment where compliance, security, and talent management are paramount. Congruity HR provides specialized HR solutions that address the unique needs of the financial sector, from regulatory compliance to competitive compensation structures.',
    heroTagline: 'Secure, compliant HR for the financial sector',
    subTypes: [
      'Banks',
      'Credit Unions',
      'Investment Firms',
      'Insurance Companies',
      'Wealth Management',
      'Mortgage Companies',
      'Financial Advisors',
      'Fintech Startups',
    ],
    features: [
      {
        title: 'Regulatory Compliance',
        description:
          'Stay compliant with financial industry regulations including FINRA, SEC, and state-specific requirements.',
      },
      {
        title: 'Secure Data Handling',
        description:
          'Enterprise-grade security for sensitive employee and client financial data.',
      },
      {
        title: 'Compensation Management',
        description:
          'Manage complex compensation structures including bonuses, commissions, and equity plans.',
      },
      {
        title: 'Background Screening',
        description:
          'Comprehensive background checks and ongoing monitoring for financial industry employees.',
      },
    ],
    benefits: [
      'FINRA and SEC compliance support',
      'Complex compensation and bonus administration',
      'Comprehensive background screening programs',
      'Fiduciary benefits management',
      'Series licensing and certification tracking',
    ],
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    icon: Factory,
    shortDescription:
      'Safety-focused HR support for manufacturers dealing with complex compliance and workforce challenges.',
    longDescription:
      'Manufacturing businesses face unique workforce challenges—from safety compliance to managing shift workers. Congruity HR delivers comprehensive HR solutions that help you maintain a safe workplace, manage complex scheduling, and attract skilled workers in a competitive labor market.',
    heroTagline: 'Building a safer, more productive workforce',
    subTypes: [
      'Food Processing',
      'Automotive',
      'Aerospace',
      'Electronics',
      'Textiles',
      'Chemical',
      'Pharmaceutical',
      'Metal Fabrication',
    ],
    features: [
      {
        title: 'Safety & Compliance',
        description:
          'OSHA compliance management, safety training programs, and workplace incident tracking.',
      },
      {
        title: 'Shift Management',
        description:
          'Time and attendance solutions designed for 24/7 operations and rotating shifts.',
      },
      {
        title: 'Skills Tracking',
        description:
          'Track certifications, training requirements, and skill levels across your workforce.',
      },
      {
        title: 'Workers Compensation',
        description:
          'Specialized workers comp programs for high-risk manufacturing environments.',
      },
    ],
    benefits: [
      'OSHA compliance and safety program management',
      'Shift differential and overtime calculations',
      'Union and non-union workforce support',
      'Apprenticeship and skills training program administration',
      'Workers compensation cost containment',
    ],
  },
  {
    slug: 'retail',
    title: 'Retail',
    icon: ShoppingBag,
    shortDescription:
      'Flexible HR solutions for retail businesses managing seasonal staff and multi-location operations.',
    longDescription:
      'When it comes to supporting the retail workforce, Congruity HR is a true one-stop-shop. We handle all traditional HR tasks such as payroll, benefits, and compliance, while our experts in employment law reduce risk and keep you on the right side of legal and taxation issues. Partner with us and have more time to spend on the floor with your customers.',
    heroTagline: 'Happy employees make happy (and loyal) customers',
    subTypes: [
      'Supermarkets',
      'Grocery Stores',
      'Department Stores',
      'Discount Stores',
      'Warehouse Clubs',
      'Convenience Stores',
      'Pharmacies',
      'Home Improvement',
      'Electronics',
      'Specialty Stores',
    ],
    features: [
      {
        title: 'Attract Great Workers',
        description:
          'Simplified recruiting, easy onboarding, and flawless payroll help streamline operations for you and your workers.',
      },
      {
        title: 'Improve Retention',
        description:
          'Become a magnet for talent with timely training, great benefits, and easy scheduling tools.',
      },
      {
        title: 'Increase Customer Delight',
        description:
          'Focus on customers instead of HR burdens and create positive experiences that keep them coming back.',
      },
      {
        title: 'Multi-Location Support',
        description:
          'Centralized HR management across multiple store locations with location-specific reporting.',
      },
    ],
    benefits: [
      'Seasonal hiring and workforce management',
      'Multi-location payroll and compliance',
      'Employee scheduling and shift management',
      'Point-of-sale time clock integration',
      'High-turnover workforce solutions',
    ],
  },
  {
    slug: 'education',
    title: 'Education',
    icon: GraduationCap,
    shortDescription:
      'HR services designed for schools, universities, and educational institutions with unique staffing needs.',
    longDescription:
      'Educational institutions have unique HR needs—from academic year contracts to credential verification. Congruity HR provides specialized solutions that help schools, colleges, and training organizations manage their diverse workforce while staying compliant with education-specific regulations.',
    heroTagline: 'Supporting those who shape the future',
    subTypes: [
      'K-12 Schools',
      'Charter Schools',
      'Private Schools',
      'Colleges & Universities',
      'Trade Schools',
      'Tutoring Centers',
      'Childcare Centers',
      'Online Education',
    ],
    features: [
      {
        title: 'Academic Calendar Management',
        description:
          'Payroll and benefits administration aligned with academic year schedules and contracts.',
      },
      {
        title: 'Credential Verification',
        description:
          'Track teaching certifications, background checks, and continuing education requirements.',
      },
      {
        title: 'Benefits Administration',
        description:
          'Competitive benefits packages designed to attract and retain quality educators.',
      },
      {
        title: 'Compliance Support',
        description:
          'Stay compliant with education-specific regulations and employment laws.',
      },
    ],
    benefits: [
      'Academic year contract management',
      'Teacher certification and credential tracking',
      'Summer employment administration',
      'Student worker and intern management',
      'Education-specific benefits programs',
    ],
  },
  {
    slug: 'non-profits',
    title: 'Non-Profits',
    icon: HeartHandshake,
    shortDescription:
      'Cost-effective HR solutions that help non-profits focus on their mission while staying compliant.',
    longDescription:
      'Non-profit organizations need to maximize every dollar while still providing competitive employment experiences. Congruity HR offers cost-effective HR solutions tailored to the non-profit sector, helping you attract passionate employees and volunteers while maintaining compliance with grant requirements and regulations.',
    heroTagline: 'Focus on your mission, not paperwork',
    subTypes: [
      'Charitable Organizations',
      'Religious Organizations',
      'Foundations',
      'Social Services',
      'Arts & Culture',
      'Environmental Groups',
      'Advocacy Organizations',
      'Community Services',
    ],
    features: [
      {
        title: 'Cost-Effective Solutions',
        description:
          'Affordable HR services designed for organizations that need to maximize every dollar.',
      },
      {
        title: 'Grant Compliance',
        description:
          'Track labor costs by grant and ensure compliance with funder requirements.',
      },
      {
        title: 'Volunteer Management',
        description:
          'Coordinate volunteers alongside paid staff with appropriate tracking and recognition.',
      },
      {
        title: 'Mission-Aligned Benefits',
        description:
          'Benefits packages that reflect your values and help attract mission-driven employees.',
      },
    ],
    benefits: [
      'Competitive pricing for non-profit budgets',
      'Grant labor cost tracking and reporting',
      'Volunteer and intern management tools',
      '403(b) retirement plan administration',
      'Board and governance HR support',
    ],
  },
  {
    slug: 'startups',
    title: 'Startups',
    icon: Rocket,
    shortDescription:
      'Scalable HR infrastructure that grows with your startup from founding through expansion.',
    longDescription:
      'Startups need to move fast, but HR compliance waits for no one. Congruity HR provides the HR infrastructure startups need to attract top talent, stay compliant, and scale quickly—without the overhead of building an internal HR department. We grow with you from your first hire to your Series A and beyond.',
    heroTagline: 'Scale fast without HR growing pains',
    subTypes: [
      'Tech Startups',
      'SaaS Companies',
      'E-commerce',
      'Biotech Startups',
      'Fintech',
      'Consumer Products',
      'B2B Services',
      'Hardware Startups',
    ],
    features: [
      {
        title: 'Rapid Onboarding',
        description:
          'Get new hires productive quickly with streamlined onboarding that reflects your startup culture.',
      },
      {
        title: 'Equity Administration',
        description:
          'Manage stock options, RSUs, and other equity compensation programs.',
      },
      {
        title: 'Flexible Benefits',
        description:
          'Competitive benefits that help you compete with larger companies for top talent.',
      },
      {
        title: 'Growth Support',
        description:
          'HR infrastructure that scales with you from 5 employees to 500 and beyond.',
      },
    ],
    benefits: [
      'Quick setup with minimal administrative burden',
      'Equity compensation management and 409A support',
      'Competitive benefits to attract top tech talent',
      'Multi-state compliance as you expand',
      'Scalable infrastructure that grows with you',
    ],
  },
  {
    slug: 'senior-living',
    title: 'Senior Living',
    icon: Home,
    shortDescription:
      'Specialized HR support for assisted living facilities, nursing homes, and senior care organizations.',
    longDescription:
      'Senior living facilities require compassionate, qualified staff to provide excellent care. Congruity HR helps you attract and retain caring professionals with competitive benefits, ensure compliance with healthcare regulations, and manage the unique workforce challenges of 24/7 care facilities.',
    heroTagline: 'Caring for those who care for others',
    subTypes: [
      'Assisted Living Facilities',
      'Nursing Homes',
      'Memory Care Centers',
      'Independent Living Communities',
      'Continuing Care Communities',
      'Home Health Agencies',
      'Hospice Care',
      'Adult Day Care',
    ],
    features: [
      {
        title: 'Caregiver Retention',
        description:
          'Competitive benefits and support programs designed to reduce caregiver turnover.',
      },
      {
        title: 'Compliance Management',
        description:
          'Stay compliant with CMS, state licensing, and healthcare regulations.',
      },
      {
        title: 'Credential Tracking',
        description:
          'Track certifications, licenses, and training requirements for all care staff.',
      },
      {
        title: '24/7 Operations Support',
        description:
          'Scheduling, payroll, and HR support for facilities that never close.',
      },
    ],
    benefits: [
      'Healthcare compliance expertise',
      'Caregiver-focused benefits packages',
      '24/7 shift scheduling and management',
      'CNA and nursing license tracking',
      'Workers compensation for care environments',
    ],
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    icon: Building,
    shortDescription:
      'HR solutions for real estate agencies, property management companies, and construction firms.',
    longDescription:
      'Real estate businesses—from brokerages to property management to construction—have diverse workforce needs. Congruity HR provides flexible HR solutions that work for commission-based agents, property managers, maintenance staff, and construction crews alike.',
    heroTagline: 'Building better teams, one hire at a time',
    subTypes: [
      'Real Estate Brokerages',
      'Property Management',
      'Commercial Real Estate',
      'Residential Development',
      'Construction Companies',
      'Home Builders',
      'REITs',
      'Facility Management',
    ],
    features: [
      {
        title: 'Commission Administration',
        description:
          'Complex commission structures and split calculations handled accurately and on time.',
      },
      {
        title: 'Contractor Management',
        description:
          'Manage both W-2 employees and 1099 contractors with proper classification.',
      },
      {
        title: 'License Tracking',
        description:
          'Track real estate licenses, continuing education, and E&O insurance requirements.',
      },
      {
        title: 'Multi-Property Support',
        description:
          'HR support across multiple properties and locations with centralized management.',
      },
    ],
    benefits: [
      'Commission and draw administration',
      'Agent vs. employee classification guidance',
      'License and certification tracking',
      'Multi-state compliance for national brokerages',
      'Construction workforce safety programs',
    ],
  },
  {
    slug: 'technology',
    title: 'Technology',
    icon: Cpu,
    shortDescription:
      'Modern HR solutions for tech companies competing for talent in a fast-paced industry.',
    longDescription:
      'Technology companies operate in a highly competitive talent market where benefits, culture, and employee experience matter more than ever. Congruity HR helps tech companies attract top engineers and developers with modern benefits, flexible work arrangements, and HR technology that matches your culture.',
    heroTagline: 'HR that moves at the speed of tech',
    subTypes: [
      'Software Development',
      'IT Services',
      'Cybersecurity',
      'Data Analytics',
      'Cloud Services',
      'AI & Machine Learning',
      'DevOps & Infrastructure',
      'Tech Consulting',
    ],
    features: [
      {
        title: 'Competitive Benefits',
        description:
          'Benefits packages designed to compete with tech giants for top engineering talent.',
      },
      {
        title: 'Remote Work Support',
        description:
          'HR infrastructure for distributed teams across multiple states and time zones.',
      },
      {
        title: 'Equity Administration',
        description:
          'Stock options, RSUs, and ESPP management with proper tax handling.',
      },
      {
        title: 'Global Compliance',
        description:
          'Navigate employment laws across states and countries as you scale globally.',
      },
    ],
    benefits: [
      'Premium benefits to attract tech talent',
      'Remote and hybrid workforce management',
      'Stock option and equity compensation support',
      'Contractor to employee conversion assistance',
      'International hiring compliance guidance',
    ],
  },
];

export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find((industry) => industry.slug === slug);
};
