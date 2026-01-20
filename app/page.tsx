import {
  HeroHome,
  ServicesSection,
  IndustriesSection,
  TestimonialsSection,
  WhyChooseUsSection,
  FAQSection,
  CTASection,
} from '@/components/landing';

export default function Home() {
  return (
    <>
      <HeroHome />
      <ServicesSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection
        title="Ready to transform your HR?"
        description="Take the first step toward building your dream team. Start with Congruity HR today and experience world-class HR support."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
        secondaryCTA={{ text: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
