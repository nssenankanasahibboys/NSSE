import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface AdmissionsBannerSectionProps {
  onNavigateContact: () => void;
}

export const AdmissionsBannerSection: React.FC<AdmissionsBannerSectionProps> = ({
  onNavigateContact,
}) => {
  return (
    <section
      id="admissions"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#00552B] text-white overflow-hidden"
    >
      {/* Subtle architectural depth strictly within the official NSSE Emerald/Forest palette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#006B35_0%,_transparent_62%)] opacity-80"
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <Reveal>
          <div className="inline-flex items-center justify-center liquid-glass-emerald rounded-xl px-4 py-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#8CCB20]">
              Free Quality Education · Limited Seats &amp; Limited Time
            </span>
          </div>

          <h2 className="mt-6 font-display text-3xl sm:text-5xl lg:text-[3.2rem] font-semibold tracking-tight text-white leading-[1.1] [text-wrap:balance]">
            Quality Education. Endless Possibilities. Zero Tuition Fees.
          </h2>

          <p className="mt-5 text-lg sm:text-xl font-medium text-white/90 max-w-2xl mx-auto leading-snug [text-wrap:balance]">
            Admissions are now open for a limited time. Limited seats available.
          </p>

          <div className="mt-9 flex justify-center">
            <button
              type="button"
              onClick={onNavigateContact}
              className="inline-flex items-center justify-center gap-2.5 min-h-[50px] px-8 py-3.5 rounded-xl bg-[#8CCB20] hover:bg-[#9AD82E] active:scale-[0.98] text-[#003D1F] text-[15px] font-semibold tracking-tight transition-all duration-200 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.35)] cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
