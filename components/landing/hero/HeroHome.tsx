'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const features = [
  'Full-service PEO & ASO solutions',
  'Award-winning technology platform',
  'Dedicated support team',
];

export function HeroHome() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-light/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-main py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Trusted by 500+ companies nationwide
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-display font-semibold tracking-headline text-primary mb-6 leading-tight">
              You focus on{' '}
              <span className="relative">
                your business
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C50 4 150 2 298 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-primary/30"
                  />
                </svg>
              </span>
              .
              <br />
              <span className="text-primary/70">Let us focus on your team.</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              From payroll and benefits to risk management and compliance, Congruity HR
              is your go-to resource for delivering an exceptional employee experience.
            </p>

            {/* Features list */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-foreground/80"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  {feature}
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/book-demo"
                className="btn btn-primary text-base px-8 py-4 group"
              >
                Request a Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="btn btn-secondary text-base px-8 py-4 group"
              >
                <Play className="w-4 h-4" />
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main card/image container */}
              <div className="relative bg-white rounded-3xl shadow-card p-6 lg:p-8">
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-cream-dark rounded-2xl p-6 text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Companies Served</div>
                  </div>
                  <div className="bg-cream-dark rounded-2xl p-6 text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">50K+</div>
                    <div className="text-sm text-muted-foreground">Employees Supported</div>
                  </div>
                  <div className="bg-cream-dark rounded-2xl p-6 text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">99%</div>
                    <div className="text-sm text-muted-foreground">Client Retention</div>
                  </div>
                  <div className="bg-cream-dark rounded-2xl p-6 text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Available</div>
                  </div>
                </div>

                {/* Testimonial preview */}
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      KJ
                    </div>
                    <div>
                      <p className="text-sm text-white/90 italic mb-2">
                        "We've been working with Congruity HR for many years and have always
                        been impressed by their customer service and support!"
                      </p>
                      <p className="text-xs text-white/60">Kate Jones, HR Director</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -right-4 top-8 bg-white rounded-2xl shadow-card px-4 py-3 hidden lg:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">iSolved Certified</div>
                    <div className="text-sm font-semibold text-foreground">Partner</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
