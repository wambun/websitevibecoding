'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      "We've been working with Congruity HR for many years now and have always been impressed by their customer service, support, and assistance! They are very responsive to any questions we may have and run our payroll flawlessly!",
    name: 'Kate Jones',
    role: 'HR Director',
    initials: 'KJ',
  },
  {
    id: 2,
    quote:
      "We hired CONGRUITY HR in March 2020 after months of searching for a new PEO for our company. Congruity HR has been AWESOME - they have exceeded our expectations and we wish we would have moved to them sooner.",
    name: 'Reagen Wilkins',
    role: 'Operations Manager',
    initials: 'RW',
  },
  {
    id: 3,
    quote:
      "I have used Congruity for over 2 years now. I started out with only a few employees and am now up to about 30. Their customer service is excellent, and they are always willing to help find a solution. I highly recommend them!",
    name: 'Adam Wells',
    role: 'Business Owner',
    initials: 'AW',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-primary text-white overflow-hidden">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white/90 mb-4">
            Testimonials
          </span>
          <h2 className="text-h2 text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what businesses like yours
            have to say about working with Congruity HR.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12"
            >
              <Quote className="w-12 h-12 text-white/30 mb-6" />
              <blockquote className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
                  {testimonials[currentIndex].initials}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-white/60">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-white w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
