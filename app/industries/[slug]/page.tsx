import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { industries, getIndustryBySlug } from '@/data/content/industries';
import { CTASection } from '@/components/landing';
import { ArrowRight, Check } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: `${industry.title} HR Solutions`,
    description: industry.shortDescription,
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const Icon = industry.icon;

  // Get other industries for the sidebar
  const otherIndustries = industries.filter((i) => i.slug !== slug).slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-cream">
        <div className="container-main">
          <div className="max-w-4xl">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Industries
            </Link>
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <span className="badge badge-primary mb-3">{industry.title}</span>
                <h1 className="text-h1 text-primary mb-4">{industry.heroTagline}</h1>
                <p className="text-lg text-muted-foreground">
                  {industry.longDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-types Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container-main">
          <h2 className="text-xl font-semibold mb-6 text-center">
            We serve the entire {industry.title.toLowerCase()} sector, including:
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {industry.subTypes.map((subType, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium"
              >
                {subType}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-cream-dark">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Features */}
              <div className="mb-12">
                <h2 className="text-h3 text-primary mb-6">
                  Transform your workforce into a competitive advantage
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {industry.features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-card p-6 shadow-soft"
                    >
                      <h3 className="font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-h3 text-primary mb-6">Key Benefits</h2>
                <div className="bg-white rounded-card p-8 shadow-soft">
                  <ul className="space-y-4">
                    {industry.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <div className="bg-primary rounded-card p-8 text-white mb-8 sticky top-32">
                <h3 className="text-xl font-semibold mb-4">
                  Ready to get started?
                </h3>
                <p className="text-white/80 mb-6">
                  Let us help you find the right HR solution for your{' '}
                  {industry.title.toLowerCase()} business.
                </p>
                <Link
                  href="/book-demo"
                  className="btn bg-white text-primary hover:bg-cream w-full justify-center mb-4"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/contact"
                  className="btn border-2 border-white/30 text-white hover:bg-white/10 w-full justify-center"
                >
                  Contact Us
                </Link>
              </div>

              {/* Other Industries */}
              <div className="bg-white rounded-card p-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-4">
                  Other Industries
                </h3>
                <ul className="space-y-3">
                  {otherIndustries.map((ind) => {
                    const IndIcon = ind.icon;
                    return (
                      <li key={ind.slug}>
                        <Link
                          href={`/industries/${ind.slug}`}
                          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                        >
                          <IndIcon className="w-4 h-4" />
                          {ind.title}
                          <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <Link
                  href="/industries"
                  className="block mt-4 pt-4 border-t border-border text-sm text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  View all industries
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={`Ready to transform HR for your ${industry.title.toLowerCase()} business?`}
        description="Take the first step toward building your dream team with Congruity HR."
      />
    </>
  );
}
