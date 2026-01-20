'use client';

import Link from 'next/link';
import { footerLinks } from '@/data/config/footerLinks';
import { siteConfig } from '@/data/config/site.settings';
import { Phone, Mail, MapPin, Linkedin, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container-main py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white tracking-tight">
                  Congruity
                </span>
                <span className="text-2xl font-light text-white/70 tracking-tight">
                  HR
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Your go-to resource for delivering an exceptional employee experience.
              From payroll and benefits to risk management and compliance.
            </p>
            <div className="space-y-3">
              <a
                href="tel:8442474100"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>844-247-4100</span>
              </a>
              <a
                href="mailto:info@congruityhr.com"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@congruityhr.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>HQ in North Carolina, Nationwide</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.columnName}>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {column.columnName}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.title}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">
              &copy; {currentYear} Congruity HR. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              {siteConfig.linkedin && (
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
