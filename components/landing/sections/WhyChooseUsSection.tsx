'use client';

import { motion } from 'framer-motion';
import { Target, Users, Zap, HeadphonesIcon, TrendingUp, Award } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'It all starts with your goals',
    description:
      'We take the time to learn about where you want to be, then develop a bespoke program to get you there.',
  },
  {
    icon: Users,
    title: 'Dedicated support team',
    description:
      "You'll always have a dedicated member of our team to ensure things run smoothly. No big-box runaround.",
  },
  {
    icon: TrendingUp,
    title: 'We track trends so you don\'t have to',
    description:
      'Our team keeps up to speed on HR legislation and compliance at both state and federal levels.',
  },
  {
    icon: Zap,
    title: 'Game-changing technology',
    description:
      'Our iSolved-powered platform delivers diverse functionality to managers and employees alike.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Lightning-fast response times',
    description:
      "Round-the-clock support means you never have to go it alone. We're here when you need us.",
  },
  {
    icon: Award,
    title: 'Award-winning platform',
    description:
      'Our technology backbone serves as a one-stop-shop for everything you need, from hire to retire.',
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section bg-cream relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <span className="badge badge-primary mb-4">Why Congruity</span>
            <h2 className="text-h2 text-primary mb-6">
              What Makes Us <span className="text-gradient-primary">Different</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              When it comes to selecting a PEO, ASO, or HR outsourcing provider, we know
              you have plenty of choices. That's why we consistently go above-and-beyond
              for our clients, earning your business each and every day.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 * index }}
                  className="flex gap-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 icon-glow transition-colors group-hover:bg-primary/15"
                  >
                    <feature.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl shadow-card p-8">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-cream-dark rounded-2xl">
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Years of Experience</div>
                </div>
                <div className="text-center p-6 bg-cream-dark rounded-2xl">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Satisfied Clients</div>
                </div>
              </div>

              {/* Feature cards */}
              <div className="space-y-4">
                {features.slice(4).map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-cream-dark rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
