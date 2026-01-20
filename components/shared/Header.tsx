'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { headerNavLinks } from '@/data/config/headerNavLinks';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      )}
    >
      <div className="container-main">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary tracking-tight">
                Congruity
              </span>
              <span className="text-2xl font-light text-primary/70 tracking-tight">
                HR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {headerNavLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all',
                    pathname === link.href || pathname.startsWith(link.href + '/')
                      ? 'text-primary bg-primary/5'
                      : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                  )}
                >
                  {link.title}
                  {link.children && (
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform',
                        activeDropdown === link.href && 'rotate-180'
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2 w-72"
                    >
                      <div className="bg-white rounded-2xl shadow-card p-2 border border-border">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'block px-4 py-3 rounded-xl transition-colors',
                              pathname === child.href
                                ? 'bg-primary/5 text-primary'
                                : 'hover:bg-cream-dark'
                            )}
                          >
                            <span className="block text-sm font-medium text-foreground">
                              {child.title}
                            </span>
                            {child.description && (
                              <span className="block text-xs text-muted-foreground mt-0.5">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:8442474100"
              className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">844-247-4100</span>
            </a>
            <Link
              href="/contact"
              className="btn btn-secondary text-sm"
            >
              Contact Us
            </Link>
            <Link
              href="/book-demo"
              className="btn btn-primary text-sm"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-cream border-t border-border overflow-hidden"
          >
            <div className="container-main py-6">
              <div className="space-y-2">
                {headerNavLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'block px-4 py-3 rounded-xl text-base font-medium transition-colors',
                        pathname === link.href
                          ? 'bg-primary/5 text-primary'
                          : 'text-foreground hover:bg-cream-dark'
                      )}
                    >
                      {link.title}
                    </Link>
                    {link.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'block px-4 py-2 rounded-lg text-sm transition-colors',
                              pathname === child.href
                                ? 'text-primary font-medium'
                                : 'text-muted-foreground hover:text-foreground'
                            )}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <a
                  href="tel:8442474100"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground/80"
                >
                  <Phone className="w-4 h-4" />
                  844-247-4100
                </a>
                <Link
                  href="/contact"
                  className="block btn btn-secondary w-full text-center"
                >
                  Contact Us
                </Link>
                <Link
                  href="/book-demo"
                  className="block btn btn-primary w-full text-center"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
