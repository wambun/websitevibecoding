'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

interface CTASectionProps {
  variant?: 'default' | 'light' | 'dark';
  title?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function CTASection({
  variant = 'default',
  title = 'Ready to transform your HR?',
  description = "Take the first step toward building your dream team. Start with Congruity HR today and experience world-class HR support.",
  primaryCTA = { text: 'Book a Demo', href: '/book-demo' },
  secondaryCTA = { text: 'Contact Us', href: '/contact' },
}: CTASectionProps) {
  const bgClass =
    variant === 'light'
      ? 'bg-cream-dark'
      : variant === 'dark'
      ? 'bg-primary'
      : 'bg-gradient-to-br from-primary to-teal-dark';

  const textClass = variant === 'light' ? 'text-primary' : 'text-white';
  const descClass = variant === 'light' ? 'text-muted-foreground' : 'text-white/80';

  return (
    <section className={`section ${bgClass}`}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className={`text-h2 ${textClass} mb-4`}>{title}</h2>
          <p className={`text-lg ${descClass} mb-8`}>{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryCTA.href}
              className={`btn ${
                variant === 'light'
                  ? 'btn-primary'
                  : 'bg-white text-primary hover:bg-cream'
              } text-base px-8 py-4 group`}
            >
              {primaryCTA.text}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={secondaryCTA.href}
              className={`btn ${
                variant === 'light'
                  ? 'btn-secondary'
                  : 'bg-transparent border-2 border-white/30 text-white hover:bg-white/10'
              } text-base px-8 py-4 group`}
            >
              {secondaryCTA.text}
            </Link>
          </div>

          {/* Phone number */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <a
              href="tel:8442474100"
              className={`inline-flex items-center gap-2 ${
                variant === 'light' ? 'text-muted-foreground' : 'text-white/70'
              } hover:${variant === 'light' ? 'text-primary' : 'text-white'} transition-colors`}
            >
              <Phone className="w-4 h-4" />
              Or call us at 844-247-4100
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
