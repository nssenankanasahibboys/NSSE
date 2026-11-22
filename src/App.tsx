/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { AdmissionsBannerSection } from './components/AdmissionsBannerSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const contactCtaRef = useRef<HTMLAnchorElement | null>(null);

  const handleNavigateContact = useCallback(() => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    window.setTimeout(() => {
      contactCtaRef.current?.focus({ preventScroll: true });
    }, 450);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF7] text-[#202820]">
      <Navbar onNavigateContact={handleNavigateContact} />
      <main className="flex-1">
        <HeroSection onNavigateContact={handleNavigateContact} />
        <AboutSection />
        <WhyChooseSection onNavigateContact={handleNavigateContact} />
        <AdmissionsBannerSection onNavigateContact={handleNavigateContact} />
        <ContactSection ctaButtonRef={contactCtaRef} />
      </main>
      <Footer onNavigateContact={handleNavigateContact} />
    </div>
  );
}
