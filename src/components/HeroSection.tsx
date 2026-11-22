import React from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight } from 'lucide-react';
import { ResilientImage } from './ResilientImage';
import { Reveal } from './Reveal';

const ADMISSION_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeiW5kkC2Q87Q4SDHfeqk23oJsKS7fFzePM_QJSHI97_9dzTw/viewform?usp=dialog';

interface HeroSectionProps {
  onNavigateContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigateContact }) => {
  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F8FAF7]"
    >
      {/* Subtle architectural background tone */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-[#EDF4EC]/80 via-[#F8FAF7] to-transparent"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Editorial Column */}
          <div className="lg:col-span-6 flex flex-col justify-center py-2 sm:py-4">
            {/* Layered NSSE Emerald Liquid Glass Admission Frame */}
            <div className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-[#00552B] border border-[#003D1F]/30 px-6 py-5 sm:px-7 sm:py-6 shadow-[0_20px_44px_-18px_rgba(0,61,31,0.42),inset_0_1px_0_rgba(255,255,255,0.22)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#006B35_0%,_transparent_65%)] opacity-90"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(140,203,32,0.14),_transparent_55%)]"
              />
              <div className="relative">
                <h1 className="font-display font-semibold tracking-[-0.015em] text-white text-[clamp(2.2rem,3.9vw,3.3rem)] leading-[1.06] [text-wrap:balance]">
                  Admission Open
                </h1>
                <div className="mt-4 pt-3.5 border-t border-white/15 space-y-1.5">
                  <p className="font-sans text-sm sm:text-[15px] font-semibold tracking-[0.02em] text-[#8CCB20]">
                    Limited Seats · Limited Time
                  </p>
                  <p className="font-sans text-[13px] sm:text-sm font-medium text-white/90 leading-relaxed">
                    Zero Tuition Fee · No Hidden Charges · Free Education
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Google Form Registration CTA below the green box (Mobile & Desktop) */}
            <div className="mt-4 w-full max-w-xl">
              <a
                href={ADMISSION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 min-h-[50px] px-7 py-3.5 rounded-xl bg-[#8CCB20] hover:bg-[#9AD82E] active:scale-[0.98] text-[#003D1F] text-[15px] font-semibold tracking-tight transition-all duration-200 shadow-[0_12px_28px_-10px_rgba(0,107,53,0.3)] whitespace-nowrap"
              >
                <span>Register Now</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
              </a>
            </div>

            <p className="mt-7 font-display text-2xl sm:text-[1.65rem] font-medium text-[#202820] leading-snug max-w-xl [text-wrap:balance]">
              Give Your Child the Opportunity to Shine.
            </p>

            <p className="mt-3.5 text-base sm:text-[17px] text-[#202820]/75 leading-relaxed max-w-xl">
              Free quality education at Nawaz Sharif School of Eminence, Nankana Sahib — building a
              brighter future through equal opportunities and a learning environment where every
              child matters.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onNavigateContact}
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3 rounded-xl bg-[#006B35] hover:bg-[#00552B] active:scale-[0.98] text-white text-[15px] font-medium tracking-tight transition-all duration-200 shadow-[0_10px_24px_-10px_rgba(0,107,53,0.45)] cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
              </button>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl liquid-glass text-[#202820] hover:text-[#006B35] hover:border-[#006B35]/25 active:scale-[0.98] text-[15px] font-medium tracking-tight transition-all duration-200 whitespace-nowrap shrink-0"
              >
                <span>Explore Our School</span>
                <ArrowDownRight className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
              </a>
            </div>

            {/* Quiet Institutional Highlights Line */}
            <div className="mt-8 pt-6 border-t border-[#202820]/10 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#202820]/70">
              <span className="font-semibold text-[#006B35]">Free Education</span>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-[#202820]">Nawaz Sharif School of Eminence</span>
              <span aria-hidden="true">·</span>
              <span>Nankana Sahib</span>
            </div>
          </div>

          {/* Right Framed Cropped Campus Exterior Photography */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-[#202820]/10 shadow-[0_24px_56px_-18px_rgba(0,45,22,0.16)] bg-white">
              <div className="relative w-full aspect-[16/10] bg-[#EDF4EC]">
                <ResilientImage
                  src="/assets/aistudio/campus_hero_cropped.jpg"
                  alt="Campus building exterior of Nawaz Sharif School of Eminence, Nankana Sahib"
                  loading="eager"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="px-5 py-3.5 sm:px-6 sm:py-4 bg-white border-t border-[#202820]/8">
                <p className="text-xs font-semibold tracking-wider uppercase text-[#006B35]">
                  Free Education · Limited Seats &amp; Time
                </p>
                <p className="mt-0.5 text-sm font-medium text-[#202820] leading-snug">
                  Nawaz Sharif School of Eminence, Nankana Sahib
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
