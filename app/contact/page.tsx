'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '844-247-4100',
    href: 'tel:8442474100',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@congruityhr.com',
    href: 'mailto:info@congruityhr.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'HQ in North Carolina, serving clients Nationwide',
    href: null,
  },
];

const contactTypes = [
  'Potential Customer',
  'Potential Channel Partner',
  'Current Customer',
  'Client Employee',
  'Job Opportunity Seeker',
  'Other',
];

const companySizes = [
  '1-99',
  '100-349',
  '350-699',
  '700-2499',
  '2500-4999',
  '5000+',
];

const referralSources = [
  'Google Search',
  'LinkedIn',
  'Referral/Recommendation',
  'SHRM',
  'ESPN',
  'Facebook',
  'Instagram',
  'YouTube',
  'X (Twitter)',
  'NHRA',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    companySize: '',
    contactType: '',
    referralSource: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
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
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge badge-primary mb-4">Contact Us</span>
            <h1 className="text-h1 text-primary mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our HR solutions? We'd love to hear from you.
              Get in touch and let's discuss how Congruity HR can help your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-cream-dark">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-h3 text-primary mb-6">Get in Touch</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-card p-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday - Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  24/7 emergency support available for clients
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-card p-8 shadow-card">
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-h3 text-primary mb-4">Message Sent!</h2>
                    <p className="text-muted-foreground mb-6">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="btn btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
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

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email *
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
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
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
                          Company Size
                        </label>
                        <select
                          id="companySize"
                          name="companySize"
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

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="contactType"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          I am a...
                        </label>
                        <select
                          id="contactType"
                          name="contactType"
                          value={formData.contactType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        >
                          <option value="">Select...</option>
                          {contactTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="referralSource"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          How did you hear about us?
                        </label>
                        <select
                          id="referralSource"
                          name="referralSource"
                          value={formData.referralSource}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        >
                          <option value="">Select...</option>
                          {referralSources.map((source) => (
                            <option key={source} value={source}>
                              {source}
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
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                        placeholder="Tell us about your HR needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full sm:w-auto"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
