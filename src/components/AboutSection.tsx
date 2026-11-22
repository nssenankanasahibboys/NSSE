import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { ResilientImage } from './ResilientImage';
import { Reveal } from './Reveal';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#202820]/8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Real Classroom Photography */}
          <Reveal delay={0.04} className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#202820]/10 shadow-[0_20px_50px_-18px_rgba(0,45,22,0.12)] bg-[#F8FAF7]">
              <ResilientImage
                src="/assets/aistudio/about_classroom_cropped.jpg"
                alt="Bright modern learning classroom inside Nawaz Sharif School of Eminence, Nankana Sahib"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </Reveal>

          {/* Right Column: Official School Introduction */}
          <div className="lg:col-span-6">
            <Reveal delay={0.08}>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#006B35]">
                About Us
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold tracking-tight text-[#202820] leading-[1.15] [text-wrap:balance]">
                Welcome to Nawaz Sharif School of Eminence
              </h2>
              <p className="mt-5 text-base sm:text-[17px] text-[#202820]/75 leading-relaxed">
                At Nawaz Sharif School of Eminence, Nankana Sahib, we believe that education is the
                foundation of a brighter future. Our vision is to provide students with an
                environment that encourages learning, curiosity, personal development, and academic
                excellence.
              </p>

              <div className="mt-8 pt-6 border-t border-[#202820]/10 flex flex-wrap items-center justify-between gap-4">
                <div className="text-sm text-[#202820]/70">
                  <span className="font-semibold text-[#006B35]">Free Quality Education</span>
                  <span aria-hidden="true" className="mx-2">
                    ·
                  </span>
                  <span>Nankana Sahib, Pakistan</span>
                </div>

                <a
                  href="#why-choose"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#006B35] hover:text-[#00552B] transition-colors whitespace-nowrap"
                >
                  <span>Explore Facilities</span>
                  <ArrowDownRight className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
