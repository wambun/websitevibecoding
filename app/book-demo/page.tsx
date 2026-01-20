'use client';

import { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';

const benefits = [
  'Personalized walkthrough of our services',
  'Custom solutions for your business',
  'Pricing tailored to your needs',
  'No obligation consultation',
];

const companySizes = [
  '1-99',
  '100-349',
  '350-699',
  '700-2499',
  '2500-4999',
  '5000+',
];

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    companySize: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-cream">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <span className="badge badge-primary mb-4">Book a Demo</span>
              <h1 className="text-h1 text-primary mb-6">
                See Congruity HR in Action
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Schedule a personalized demo to discover how Congruity HR can transform
                your HR operations and help your business thrive.
              </p>

              {/* Benefits List */}
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Quick Info Cards */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-soft text-center">
                  <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">Flexible Scheduling</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-soft text-center">
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">30-45 Minutes</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-soft text-center">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">HR Expert Led</div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-card p-8 shadow-card">
              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-h3 text-primary mb-4">Demo Requested!</h2>
                  <p className="text-muted-foreground mb-6">
                    Thank you for your interest! Our team will contact you within
                    24 hours to schedule your personalized demo.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="btn btn-secondary"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-h4 text-primary mb-6">Request Your Demo</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="companySize"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Company Size *
                        </label>
                        <select
                          id="companySize"
                          name="companySize"
                          required
                          value={formData.companySize}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        >
                          <option value="">Select...</option>
                          {companySizes.map((size) => (
                            <option key={size} value={size}>
                              {size} employees
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        What are you most interested in?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                        placeholder="Tell us about your HR challenges..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full"
                    >
                      {isSubmitting ? 'Submitting...' : 'Request Demo'}
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to be contacted by Congruity HR.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
