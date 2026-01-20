'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Users,
  FileText,
  Shield,
  Heart,
  Briefcase,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'PEO Services',
    description:
      'Let us handle all your payroll, benefits, and HR support needs with our comprehensive PEO solutions.',
    href: '/services/peo-services',
    iconBg: 'bg-primary/10',
  },
  {
    icon: FileText,
    title: 'ASO Services',
    description:
      'Just need the basics? Our ASO model provides flexible HR outsourcing while you maintain control.',
    href: '/services/aso-services',
    iconBg: 'bg-accent/10',
  },
  {
    icon: Briefcase,
    title: 'HR Solutions',
    description:
      'From recruiting to retirement, and everything in-between. Complete HR lifecycle management.',
    href: '/services/hr-solutions',
    iconBg: 'bg-primary/15',
  },
  {
    icon: Heart,
    title: 'Employee Benefits',
    description:
      'Comprehensive benefits packages that attract and retain top talent with healthcare and perks.',
    href: '/services/employee-benefits',
    iconBg: 'bg-accent/10',
  },
  {
    icon: Shield,
    title: 'Compliance & Risk',
    description:
      'Navigate complex labor laws and regulations with confidence. Stay compliant, reduce risk.',
    href: '/services/compliance-risk',
    iconBg: 'bg-primary/10',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export function ServicesSection() {
  return (
    <section className="section bg-cream-dark">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="badge badge-primary mb-4">Our Services</span>
          <h2 className="text-h2 text-primary mb-4">
            Comprehensive <span className="text-gradient-primary">HR Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Congruity HR is much more than just a PEO provider. We're a true extension
            of your team, delivering world-class HR services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Link
                href={service.href}
                className="group block card-premium p-8 h-full relative overflow-hidden"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-card" />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 icon-glow`}
                  >
                    <service.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div variants={itemVariants}>
            <div className="bg-primary rounded-card p-8 h-full flex flex-col justify-center text-white">
              <h3 className="text-2xl font-semibold mb-4">
                Not sure which service is right for you?
              </h3>
              <p className="text-white/80 mb-6">
                Let our experts help you find the perfect HR solution for your business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary rounded-button px-6 py-3 font-medium hover:bg-cream transition-colors group"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
