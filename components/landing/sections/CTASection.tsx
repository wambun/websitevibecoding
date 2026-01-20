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
    <section className={`section ${bgClass} relative overflow-hidden`}>
      {/* Decorative shapes for non-light variants */}
      {variant !== 'light' && (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </>
      )}

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
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
