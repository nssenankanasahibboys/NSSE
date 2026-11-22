import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NsseLogo } from './NsseLogo';

interface NavbarProps {
  onNavigateContact: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Why Choose NSSE', href: '#why-choose' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onNavigateContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href === '#contact') {
      e.preventDefault();
      onNavigateContact();
    }
  };

  const handleContactButton = () => {
    setMobileMenuOpen(false);
    onNavigateContact();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <div
          className={`flex items-center justify-between gap-4 lg:gap-8 rounded-2xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? 'liquid-glass-scrolled px-4 sm:px-6 py-2.5'
              : 'liquid-glass px-4 sm:px-6 py-3'
          }`}
        >
          {/* Zone 1: Brand Title + Official Logo (single line, no descriptor/pill clutter) */}
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 min-w-0 whitespace-nowrap sm:shrink-0 rounded-lg focus-visible:outline-2 focus-visible:outline-[#006B35]"
            aria-label="Nawaz Sharif School of Eminence Home"
          >
            <NsseLogo className="w-8 h-8 sm:w-9 sm:h-9 shrink-0" />
            <span className="font-display font-semibold tracking-tight text-[#202820] text-[13px] min-[400px]:text-sm sm:text-base truncate">
              Nawaz Sharif School of Eminence
            </span>
          </a>

          {/* Zone 2: Clean Typography Nav Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="relative py-1 text-sm font-medium text-[#202820]/80 hover:text-[#006B35] transition-colors duration-200 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:bg-[#006B35] after:origin-left after:transition-transform after:duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action + Mobile Trigger */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleContactButton}
              className="hidden sm:inline-flex items-center justify-center min-h-[40px] px-5 py-2 rounded-xl bg-[#006B35] hover:bg-[#00552B] active:scale-[0.98] text-white text-sm font-medium tracking-tight transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap shrink-0"
            >
              Contact Us
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-xl text-[#202820] hover:bg-[#006B35]/8 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" strokeWidth={1.75} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Glass Navigation Drawer */}
        <div
          id="mobile-nav-drawer"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen
              ? 'max-h-[420px] opacity-100 mt-2'
              : 'max-h-0 opacity-0 mt-0 pointer-events-none'
          }`}
        >
          <nav
            aria-label="Mobile Navigation"
            className="liquid-glass-scrolled rounded-2xl p-4 flex flex-col gap-1"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="flex items-center min-h-[44px] px-4 rounded-xl text-[15px] font-medium text-[#202820] hover:bg-[#006B35]/8 hover:text-[#006B35] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-[#202820]/10 sm:hidden">
              <button
                type="button"
                onClick={handleContactButton}
                className="w-full min-h-[44px] px-5 py-2.5 rounded-xl bg-[#006B35] hover:bg-[#00552B] text-white text-[15px] font-medium transition-colors cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
