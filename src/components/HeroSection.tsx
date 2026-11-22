import React from 'react';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { ResilientImage } from './ResilientImage';
import { Reveal } from './Reveal';

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
            {/* Framed Admissions Headline Area with NSSE Green Background */}
            <div className="self-start rounded-2xl border-[1.5px] border-[#006B35] bg-[#0F5A1E] backdrop-blur-md px-5 py-4 sm:px-6 sm:py-5 shadow-[0_10px_28px_-14px_rgba(0,107,53,0.18)]">
              <h1 className="font-display font-semibold tracking-tight text-white text-[clamp(2.1rem,3.8vw,3.3rem)] leading-[1.1] [text-wrap:balance]">
                Admissions Open
                <span className="block mt-1.5 text-[#8CCB20] text-[clamp(1.3rem,2.1vw,1.85rem)] font-medium leading-snug">
                  Limited Seats · Limited Time
                </span>
              </h1>
            </div>

            <p className="mt-6 font-display text-xl sm:text-2xl font-medium text-[#006B35] leading-snug max-w-xl [text-wrap:balance]">
              Give Your Child the Opportunity to Shine.
            </p>

            <p className="mt-4 text-base sm:text-[17px] text-[#202820]/75 leading-relaxed max-w-xl">
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
              <span className="font-semibold text-[#006B35]">100% Free Education</span>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-[#202820]">Nawaz Sharif School of Eminence</span>
              <span aria-hidden="true">·</span>
              <span>Nankana Sahib</span>
            </div>
          </div>

          {/* Right Framed Cropped Campus Exterior Photography */}
          <Reveal delay={0.08} className="lg:col-span-6">
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-[#202820]/10 shadow-[0_24px_56px_-18px_rgba(0,45,22,0.16)] bg-[#EDF4EC]">
              <ResilientImage
                src="/assets/aistudio/campus_hero_cropped.jpg"
                alt="Campus building exterior of Nawaz Sharif School of Eminence, Nankana Sahib"
                loading="eager"
                className="w-full h-full object-cover object-center"
              />

              {/* Subtle bottom gradient scrim for legible glass overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#002814]/55 via-[#002814]/15 to-transparent"
              />

              {/* Restrained Liquid Glass Institutional Overlay */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-sm liquid-glass-overlay rounded-2xl px-4 py-3">
                <p className="text-xs font-semibold tracking-wider uppercase text-[#006B35]">
                  Free Education · Limited Seats &amp; Time
                </p>
                <p className="mt-1 text-sm font-medium text-[#202820] leading-snug">
                  Nawaz Sharif School of Eminence, Nankana Sahib
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
