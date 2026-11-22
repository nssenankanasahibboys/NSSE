import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { NsseLogo } from './NsseLogo';

interface FooterProps {
  onNavigateContact: () => void;
}

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Why Choose NSSE', href: '#why-choose' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
];

const CAMPUS_MAP_URL = 'https://maps.app.goo.gl/LweuMu8R46ywCJU86';

export const Footer: React.FC<FooterProps> = ({ onNavigateContact }) => {
  return (
    <footer className="bg-[#003D1F] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Left: Official Logo + Name + Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <NsseLogo variant="light" className="w-12 h-12 shrink-0" />
              <div>
                <p className="font-display text-lg font-semibold tracking-tight text-white">
                  Nawaz Sharif School of Eminence
                </p>
                <p className="text-sm text-[#8CCB20] font-medium">Nankana Sahib</p>
              </div>
            </div>
            <p className="text-sm sm:text-[15px] text-white/75 leading-relaxed max-w-sm">
              Empowering young minds through education and opportunities.
            </p>
          </div>

          {/* Middle: Navigation Links */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#8CCB20]">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href === '#contact') {
                        e.preventDefault();
                        onNavigateContact();
                      }
                    }}
                    className="inline-block py-1 text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Address, Official Contact Info & Mandatory Second Contact Us Button */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#8CCB20]">
              Campus Contact
            </p>
            <div className="space-y-2 text-sm text-white/85">
              <p className="text-white font-medium">
                2-Km Mangtanwala Road, Nankana Sahib, Pakistan.
              </p>
              <p>
                Location:{' '}
                <a
                  href={CAMPUS_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8CCB20] hover:underline underline-offset-2"
                >
                  CPJP+2M Nankana Sahib, Pakistan
                </a>
              </p>
              <p>
                Phone:{' '}
                <a href="tel:+923334046555" className="hover:text-white tabular-nums">
                  0333 404 6555
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  href="mailto:nssenankanasahibboys@gmail.com"
                  className="hover:text-white break-all"
                >
                  nssenankanasahibboys@gmail.com
                </a>
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onNavigateContact}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-2.5 rounded-xl bg-[#8CCB20] hover:bg-[#9AD82E] active:scale-[0.98] text-[#003D1F] text-sm font-semibold tracking-tight transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/65">
          <p>© 2026 Nawaz Sharif School of Eminence. All Rights Reserved.</p>
          <p>Nankana Sahib, Pakistan</p>
        </div>
      </div>
    </footer>
  );
};
