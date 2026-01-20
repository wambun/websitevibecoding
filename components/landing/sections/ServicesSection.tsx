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
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: FileText,
    title: 'ASO Services',
    description:
      'Just need the basics? Our ASO model provides flexible HR outsourcing while you maintain control.',
    href: '/services/aso-services',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Briefcase,
    title: 'HR Solutions',
    description:
      'From recruiting to retirement, and everything in-between. Complete HR lifecycle management.',
    href: '/services/hr-solutions',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Heart,
    title: 'Employee Benefits',
    description:
      'Comprehensive benefits packages that attract and retain top talent with healthcare and perks.',
    href: '/services/employee-benefits',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    icon: Shield,
    title: 'Compliance & Risk',
    description:
      'Navigate complex labor laws and regulations with confidence. Stay compliant, reduce risk.',
    href: '/services/compliance-risk',
    color: 'bg-green-50 text-green-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
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
            Comprehensive HR Solutions
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
                className="group block bg-white rounded-card p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
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
