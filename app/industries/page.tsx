import { Metadata } from 'next';
import Link from 'next/link';
import { CTASection } from '@/components/landing';
import { industries } from '@/data/content/industries';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'Congruity HR provides specialized HR solutions for healthcare, hospitality, manufacturing, retail, education, and more.',
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-cream">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge badge-primary mb-4">Industries We Serve</span>
            <h1 className="text-h1 text-primary mb-6">
              Expert HR Solutions for Your Industry
            </h1>
            <p className="text-lg text-muted-foreground">
              We understand the unique challenges of your industry. Our team delivers
              tailored HR solutions that address your specific needs and help your
              business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section bg-cream-dark">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group bg-white rounded-card p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <industry.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h2 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                  {industry.title}
                </h2>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {industry.shortDescription}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="light"
        title="Don't see your industry?"
        description="We work with businesses across all sectors. Contact us to discuss your specific HR needs."
        primaryCTA={{ text: 'Book a Demo', href: '/book-demo' }}
        secondaryCTA={{ text: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
