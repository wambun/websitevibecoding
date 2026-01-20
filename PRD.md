# Congruity HR Website Redesign - Product Requirements Document (PRD)

## Executive Summary

This document outlines the complete redesign of the CongruityHR.com website, transforming it from a WordPress-based site to a modern Next.js 15 application. The redesign will adopt the premium visual design language from the HR-Pro Framer template while preserving all existing content and business functionality.

---

## 1. Sitemap Analysis (Current State)

### 1.1 Primary Navigation Structure

Based on the crawled data from congruityhr.com (85 pages):

```
/                           # Home
/about-us/                  # About Us (Coming Soon placeholder)
  /mission-vision-values/   # Mission, Vision & Values
/services/                  # Services Hub (Coming Soon placeholder)
  /peo-services/            # PEO Services
  /aso-services/            # ASO Services
  /hr-solutions/            # HR Solutions
  /employee-benefits/       # Employee Benefits
  /compliance-risk/         # Compliance & Risk Management
/industries/                # Industries Hub (Coming Soon placeholder)
  /professional-services/   # Professional Services
  /hospitality/             # Hospitality & Resorts
  /healthcare/              # Healthcare & Biotech
  /financial-services/      # Financial Services & Technology
  /manufacturing/           # Manufacturing
  /retail/                  # Retail
  /education/               # Education
  /non-profits/             # Non-Profits
  /startups/                # Startups
  /senior-living/           # Senior Living
  /real-estate/             # Real Estate
/resources/                 # Resources Hub (Coming Soon placeholder)
  /blog/                    # Blog Archive (30+ articles)
  /press-releases/          # Press Releases
  /learning/                # Learning Resources
/partners/                  # Partners
  /brokers/                 # Brokers
  /referrals/               # Referrals
  /strategic-alliances/     # Strategic Alliances
/contact-us/                # Contact Us
/book-a-demo/               # Book a Demo
/login/                     # User Login (iSolved platform)
```

### 1.2 Blog Content Inventory

Current blog articles (from crawled data):
- 9 Essential Benefits Planning Steps for HR Teams
- ASO Services for Construction Companies
- Best HR Payroll Services for Small Businesses
- Boost Engagement and Productivity: Retention Strategies
- Compliance Challenges Explained
- Data-Driven Workforce Planning: A Roadmap for 2026
- Effective Ways to Manage Labor Costs During Inflation
- Expert HR Solutions for Startups
- How Payroll Fraud Happens and How to Prevent It
- How PEOs Help Nonprofits Reduce Admin Burden
- HR and Workplace Safety: A Winning Combination
- HR Outsourcing: The Ultimate Guide for Businesses
- HR Solutions for Closing Skill Gaps
- HR Technology Trends That Boost Employee Experience
- Key Benefits of PEOs for Operational Efficiency
- Outsource Payroll Processing Benefits
- Partnering with a PEO: Reduce Labor Costs Effectively
- Payroll Challenges and Solutions
- Payroll Compliance Checklist
- Payroll Tax Compliance: How to Stay Updated
- PEO Benefits for Business Owners
- PEO Hospital Solutions
- PEO Services for Healthcare
- PEO Services for HR Management in Finance
- PEO Services for Small Businesses
- PEOs Modern Workforce Strategies
- PEOs Supercharge Business Growth
- Remote Work Policies Best Practices
- Strategic HR Outsourcing
- The ROI of HR Outsourcing
- Top 10 Payroll Mistakes and How to Avoid Them
- Top HR Challenges in Retail
- Wage and Hour Laws Compliance Guide
- Worker Classification Guide
- Workplace Harmony During Elections
- Year-End HR Best Practices

---

## 2. Visual Analysis (New Design Target)

### 2.1 Color System

Based on HR-Pro Framer template analysis:

```css
/* Primary Palette */
--color-primary-dark: #1f514c;     /* Deep teal - headers, accents */
--color-primary-medium: #35625d;   /* Medium teal - secondary elements */
--color-background-cream: #fffffb; /* Light cream - main backgrounds */
--color-background-gray: #f7f7f7;  /* Light gray - section alternates */
--color-border-light: #e9eaeb;     /* Light gray - dividers, borders */
--color-text-secondary: #777272;   /* Medium gray - body text */
--color-accent-green: rgba(174, 218, 148, 0.2); /* Soft green overlay */
```

### 2.2 Typography System

```css
/* Headlines - Parkinsans (closest: Inter or custom) */
--font-headline: 'Inter', sans-serif;
--font-headline-weight-light: 300;
--font-headline-weight-medium: 500;
--font-headline-weight-bold: 700;
--font-headline-letter-spacing: -2px;
--font-headline-line-height: 1.1em;

/* Size Scale */
--text-h1-desktop: 54px;
--text-h1-tablet: 50px;
--text-h1-mobile: 40px;
--text-h2-desktop: 40px;
--text-h3-desktop: 32px;
--text-body: 16px;
--text-body-line-height: 1.5em;
```

### 2.3 Spacing System

```css
/* Section Spacing */
--section-padding-vertical: 100px;
--section-gap-major: 160px;
--section-gap-standard: 100px;

/* Container Widths */
--container-max: 1290px;
--container-content: 1280px;
--container-padding: 15px; /* 20px on mobile */

/* Component Spacing */
--gap-tight: 6px;
--gap-minimal: 10px;
--gap-content: 24px;
--gap-section: 40px;
--gap-grid: 20px;
--gap-cards: 30px;
```

### 2.4 Component Patterns

**Cards:**
- Border radius: 16px (standard), 18px (content blocks)
- Shadow hierarchy (3-layer system):
  - Primary: `0 12px 16px 0 rgba(10,13,18,.08)`
  - Secondary: `0 4px 5px -2px rgba(10,13,18,.03)`
- Min-height: 430px for feature cards
- Padding: 50px internal

**Buttons:**
- Pill style: `border-radius: 60px`
- Padding: `2px 12px` (badge), `12px 24px` (standard)
- Primary: Light cream background, dark teal text
- Secondary: Outlined with dark teal border

**Navigation:**
- Fixed positioning at top
- Light gray background (#f7f7f7)
- 200px top padding on page content
- Logo left, links center/right

**Footer:**
- Dark teal background (#1f514c)
- 100px vertical padding
- Multi-column layout with 40px gap
- Client logo grid with 30px gaps

### 2.5 Animation & Micro-interactions

- Transform-based positioning for layered effects
- Opacity variations (0.2, 0.3, 1.0) for depth stacking
- `will-change: transform` for performance optimization
- Gradient overlays: `linear-gradient(0deg, rgba(0,0,0,.7))`
- Smooth scroll behavior
- Framer Motion for page transitions and component reveals

---

## 3. Content Mapping Strategy

### 3.1 Page-by-Page Mapping

| Old Site Page | New Design Component | Data Source |
|---------------|---------------------|-------------|
| Home | Hero + Services Grid + Industries Carousel + Testimonials + CTA | `client/old/ea_home_2*` |
| About Us | Hero + Mission/Values Cards + Team Grid + Awards | `client/old/about_us*`, `what_makes_congruity*` |
| Services Hub | Services Grid + Feature Cards | `client/old/services*` |
| PEO Services | Service Detail with Features List | `client/old/leading_hr_services*` |
| ASO Services | Service Detail with Features List | `client/old/top_administrative*` |
| HR Solutions | Service Detail with Features List | `client/old/leading_hr_services*` |
| Employee Benefits | Service Detail with Benefits List | `client/old/comprehensive_employee*` |
| Industries Hub | Industries Grid with Cards | Industry-specific pages |
| Blog Archive | Blog Grid with Categories | All blog markdown files |
| Blog Post | Article Layout with Sidebar | Individual blog files |
| Contact Us | Contact Form + Map + Info Cards | `client/old/reach_out*` |
| Book a Demo | Demo Request Form | `client/old/book_a_demo*` |

### 3.2 Content Data Structure

```typescript
// services/types.ts
interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  features: ServiceFeature[];
  benefits: string[];
  ctaText: string;
  ctaLink: string;
  heroImage: string;
  icon: string;
}

// industries/types.ts
interface Industry {
  id: string;
  title: string;
  slug: string;
  description: string;
  challenges: string[];
  solutions: string[];
  heroImage: string;
  icon: string;
}

// blog/types.ts
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // MDX
  publishedAt: Date;
  author: Author;
  category: string;
  tags: string[];
  featuredImage: string;
  readingTime: number;
}

// testimonials/types.ts
interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  quote: string;
  avatar?: string;
}
```

---

## 4. Technical Implementation Plan

### 4.1 Project Structure

```
/app
  /layout.tsx              # Root layout with Header/Footer
  /page.tsx                # Home page
  /(marketing)             # Marketing pages group
    /about/page.tsx        # About Us
    /contact/page.tsx      # Contact Us
    /book-demo/page.tsx    # Book a Demo
  /services
    /page.tsx              # Services hub
    /[slug]/page.tsx       # Individual service pages
  /industries
    /page.tsx              # Industries hub
    /[slug]/page.tsx       # Individual industry pages
  /resources
    /page.tsx              # Resources hub
    /blog
      /page.tsx            # Blog archive
      /[slug]/page.tsx     # Individual blog posts
  /partners
    /page.tsx              # Partners hub
    /brokers/page.tsx      # Brokers
    /referrals/page.tsx    # Referrals
  /login/page.tsx          # Login redirect

/components
  /landing                 # Landing page components
    /hero                  # Hero sections
      /HeroHome.tsx
      /HeroPage.tsx
    /sections              # Page sections
      /ServicesGrid.tsx
      /IndustriesCarousel.tsx
      /TestimonialsSlider.tsx
      /CTASection.tsx
      /FAQAccordion.tsx
      /StatsSection.tsx
    /cards                 # Card components
      /ServiceCard.tsx
      /IndustryCard.tsx
      /BlogCard.tsx
      /TeamCard.tsx
      /TestimonialCard.tsx
    /forms                 # Form components
      /ContactForm.tsx
      /DemoForm.tsx
      /NewsletterForm.tsx
  /shared                  # Shared/global components
    /Header.tsx            # Site header/navigation
    /Footer.tsx            # Site footer
    /Logo.tsx              # Logo component
    /Button.tsx            # Button variants
    /Badge.tsx             # Badge/pill component
    /Container.tsx         # Layout container
    /SectionHeading.tsx    # Section heading
    /Link.tsx              # Custom link component
  /ui                      # Shadcn UI components
    /accordion.tsx
    /button.tsx
    /card.tsx
    /form.tsx
    /input.tsx
    /sheet.tsx
    /etc...

/data
  /config
    /colors.js             # Color theme (update for teal)
    /site.settings.js      # Site metadata
    /headerNavLinks.ts     # Navigation links
    /footerLinks.ts        # Footer links
  /content
    /services.json         # Services data
    /industries.json       # Industries data
    /testimonials.json     # Testimonials data
    /team.json             # Team members
  /blog                    # Blog MDX files
    /[slug].mdx

/lib
  /utils.ts                # Utility functions
  /animations.ts           # Framer Motion variants

/public
  /static
    /images
      /logo/               # Logo files
      /services/           # Service images
      /industries/         # Industry images
      /team/               # Team photos
      /blog/               # Blog images
    /favicons/             # Favicon files
```

### 4.2 Implementation Phases

**Phase 2.1: Foundation Setup**
1. Update color system in `colors.js` for teal palette
2. Update typography in `globals.css` and Tailwind config
3. Configure Tailwind for new spacing system
4. Update site metadata in `metadata.js`
5. Set up headerNavLinks and footerLinks

**Phase 2.2: Core Components**
1. Build Header component with navigation
2. Build Footer component with columns
3. Build Container component for layouts
4. Build Button variants (primary, secondary, outline)
5. Build Card base component

**Phase 2.3: Landing Components**
1. HeroHome - main hero with slider/carousel
2. ServicesGrid - 3-column service cards
3. IndustriesCarousel - horizontal scrolling industry cards
4. TestimonialsSlider - testimonial carousel
5. CTASection - call-to-action sections
6. FAQAccordion - expandable FAQ

**Phase 2.4: Page Implementation**
1. Home page - assemble all landing components
2. About Us page
3. Services hub + individual service pages
4. Industries hub + individual industry pages
5. Resources hub + blog archive
6. Contact page with form
7. Book a Demo page with form

**Phase 2.5: Content Migration**
1. Extract content from crawled markdown files
2. Create JSON data files for services, industries, testimonials
3. Create MDX files for blog posts
4. Import and optimize images

**Phase 2.6: Polish & Animations**
1. Add Framer Motion page transitions
2. Add scroll-triggered animations
3. Add hover states and micro-interactions
4. Mobile responsiveness testing
5. Performance optimization

### 4.3 Key Technical Decisions

**Routing:**
- App Router with route groups for clean organization
- Dynamic routes for services, industries, blog
- Static generation for content pages

**Data Fetching:**
- Static JSON files for services/industries
- MDX for blog content (with Contentlayer)
- Server components by default

**Animations:**
- Framer Motion for page transitions
- CSS transitions for hover states
- Intersection Observer for scroll triggers

**Forms:**
- React Hook Form for validation
- Zod for schema validation
- Server Actions for form submission

**Styling:**
- Tailwind CSS for utility classes
- CSS custom properties for theming
- Shadcn UI as component base

---

## 5. Contact Information & External Links

### 5.1 Business Contact
- **Location:** HQ in North Carolina, serving clients Nationwide
- **Phone:** 844-247-4100
- **Email:** info@congruityhr.com

### 5.2 External Integrations
- **iSolved Platform:** Login portal for clients (external link)
- **Google Analytics:** G-7PWB52X4ZQ
- **reCAPTCHA:** Required for contact forms

### 5.3 Social Media (to be configured)
- LinkedIn
- Facebook
- Twitter/X
- YouTube

---

## 6. Logo & Branding

### 6.1 Assets Required
- Primary logo (from congruityhr.com)
- Logo variations (light/dark backgrounds)
- Favicon set (16x16, 32x32, apple-touch-icon)

### 6.2 Logo Placement
- Header: Left-aligned, ~180px width
- Footer: Centered or left-aligned
- Social cards: Centered

---

## 7. Success Criteria

### 7.1 Design Fidelity
- [ ] Color system matches HR-Pro template
- [ ] Typography hierarchy matches template
- [ ] Card designs match template patterns
- [ ] Section spacing matches template
- [ ] Animations feel premium and smooth

### 7.2 Content Completeness
- [ ] All existing pages have new equivalents
- [ ] All blog posts are migrated
- [ ] All services/industries documented
- [ ] Contact information accurate

### 7.3 Technical Quality
- [ ] Lighthouse score > 90 all categories
- [ ] Mobile responsive on all breakpoints
- [ ] Accessibility WCAG AA compliant
- [ ] Zero console errors
- [ ] Build completes without errors

### 7.4 Business Requirements
- [ ] Contact forms functional
- [ ] Demo booking functional
- [ ] Analytics tracking active
- [ ] SEO metadata complete

---

## Appendix A: Crawled Content Summary

### Old Site (congruityhr.com)
- Total pages crawled: 85
- Blog articles: ~35
- Service pages: 5
- Industry pages: 12
- Resource pages: 4
- Contact/Demo pages: 2

### New Design Reference (hr-pro-template.framer.website)
- Pages analyzed: 39
- Layout patterns: Home, Services, About, Blog, Team, Contact
- Component patterns: Cards, Grids, Carousels, Forms, FAQ

---

## Appendix B: File References

### Content Source Files
- `client/old/*.md` - Crawled content from current site
- `client/old/*.json` - Metadata for crawled pages
- `client/new/*.md` - Design reference content
- `client/new/*.json` - Design reference metadata

### Configuration Files
- `data/config/colors.js` - Color theme (needs update)
- `data/config/metadata.js` - Site metadata (needs update)
- `data/config/headerNavLinks.ts` - Navigation (needs update)
- `data/config/footerLinks.ts` - Footer links (needs update)
