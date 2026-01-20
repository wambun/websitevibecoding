import { Metadata } from 'next';
import Link from 'next/link';
import { CTASection } from '@/components/landing';
import { Target, Users, Zap, Award, Heart, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Congruity HR - your trusted partner for comprehensive HR solutions, PEO services, and employee benefits.',
};

const values = [
  {
    icon: Target,
    title: 'Your Goals First',
    description:
      'We take the time to learn about where you want to be, then develop a bespoke program to get you there.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description:
      "You'll always have a dedicated member of our team. No big-box runaround, just personalized service.",
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      "When it comes to personnel issues, we know time matters. That's why we pride ourselves on rapid response.",
  },
  {
    icon: Award,
    title: 'Award-Winning Tech',
    description:
      'Our iSolved-powered platform delivers everything you need, from onboarding to time tracking.',
  },
  {
    icon: Heart,
    title: 'Employee Focused',
    description:
      "Your employees are your greatest assets. We make sure they're treated that way, from hire to retire.",
  },
  {
    icon: Shield,
    title: 'Compliance Experts',
    description:
      'We track HR trends, topics, and policies at both state and federal levels so you stay compliant.',
  },
];

const stats = [
  { value: '500+', label: 'Companies Served' },
  { value: '50K+', label: 'Employees Supported' },
  { value: '20+', label: 'Years Experience' },
  { value: '99%', label: 'Client Retention' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-cream">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-primary mb-4">About Us</span>
              <h1 className="text-h1 text-primary mb-6">
                More Than Just a PEO Provider
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Congruity HR is a true extension of your team. Combining an unparalleled
                array of HR services, lightning-fast response times, and an award-winning
                technology platform, our team of industry experts are ready to support
                your entire workforce.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/book-demo" className="btn btn-primary">
                  Book a Demo
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-card p-6 text-center shadow-card"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-primary text-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 mb-6">Our Mission</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              To empower businesses with comprehensive HR solutions that allow them to
              focus on what matters most - growing their business and taking care of
              their people.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-cream-dark">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="badge badge-primary mb-4">Our Values</span>
            <h2 className="text-h2 text-primary mb-4">What Makes Us Different</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When it comes to selecting an HR partner, we know you have choices.
              Here's why businesses choose Congruity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-card p-8 shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section bg-cream">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-primary mb-4">Technology</span>
              <h2 className="text-h2 text-primary mb-6">
                Game-Changing HR Technology
              </h2>
              <p className="text-muted-foreground mb-6">
                The only thing better than having rock star caliber support is making
                that support available in the palm of your hand. Congruity's technology
                backbone - powered by the award-winning iSolved platform - delivers
                diverse functionality to managers and employees alike.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Employee self-service portal',
                  'Time and attendance tracking',
                  'Onboarding and life events',
                  'HR knowledge base',
                  'Mobile app access',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services" className="btn btn-primary">
                Explore Our Services
              </Link>
            </div>
            <div className="bg-white rounded-3xl shadow-card p-8">
              <div className="bg-cream-dark rounded-2xl p-6 mb-4 text-center">
                <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  iSolved Certified Partner
                </h3>
                <p className="text-sm text-muted-foreground">
                  Award-winning HCM platform trusted by thousands of businesses
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-cream-dark rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
                <div className="bg-cream-dark rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-xs text-muted-foreground">Cloud-Based</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to experience the Congruity difference?"
        description="Let's get a call on the calendar. We can't wait to meet you."
      />
    </>
  );
}
