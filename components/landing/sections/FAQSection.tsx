'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: 'What is a PEO and how does it work?',
    answer:
      'A Professional Employer Organization (PEO) is a company that provides comprehensive HR services to small and medium-sized businesses. When you partner with Congruity HR, we become your co-employer, handling payroll, benefits administration, compliance, and HR support while you maintain control of your day-to-day operations.',
  },
  {
    question: 'What is the difference between PEO and ASO services?',
    answer:
      'With PEO services, Congruity becomes a co-employer and takes on more HR responsibilities and liabilities. ASO (Administrative Services Organization) allows you to outsource HR tasks like payroll processing and benefits administration while maintaining full employer status and keeping your own benefits plans.',
  },
  {
    question: 'How long does it take to get started with Congruity HR?',
    answer:
      'Our onboarding process is designed to be efficient and thorough. Most clients are fully operational within 2-4 weeks, depending on the complexity of your needs and how quickly we can gather the necessary information.',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'We serve a wide range of industries including professional services, healthcare, hospitality, financial services, manufacturing, retail, education, non-profits, and more. Our team understands the unique HR challenges each industry faces.',
  },
  {
    question: 'What kind of support can I expect?',
    answer:
      "You'll have a dedicated support team available to assist you. We pride ourselves on lightning-fast response times and round-the-clock availability. Unlike larger PEOs, you won't get passed around - your dedicated team knows your business.",
  },
  {
    question: 'How does Congruity help with compliance?',
    answer:
      'Our compliance experts stay current on federal and state employment laws, helping you navigate complex regulations. We handle tax filings, maintain proper documentation, and alert you to regulatory changes that affect your business.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section bg-cream-dark">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="badge badge-primary mb-4">FAQ</span>
            <h2 className="text-h2 text-primary mb-6">
              Common Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about our HR services? We've compiled answers to the
              most frequently asked questions below.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Still have questions? Contact us
            </Link>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-soft overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-primary" />
                    ) : (
                      <Plus className="w-4 h-4 text-primary" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
