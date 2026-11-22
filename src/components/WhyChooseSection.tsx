import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ResilientImage } from './ResilientImage';
import { Reveal } from './Reveal';

interface WhyChooseSectionProps {
  onNavigateContact: () => void;
}

const LAB_DISCIPLINES = [
  'Computer Science',
  'Biology',
  'Chemistry',
  'Physics',
  'Robotics',
];

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ onNavigateContact }) => {
  return (
    <section
      id="why-choose"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8FAF7] border-t border-[#202820]/8"
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#006B35]">
              Facilities &amp; Offerings
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-[#202820] leading-[1.12] [text-wrap:balance]">
              A Better Learning Experience Starts Here.
            </h2>
          </div>
        </Reveal>

        {/* 1. MOST PROMINENT FEATURE: Free Quality Education */}
        <Reveal>
          <div className="relative rounded-3xl bg-[#00552B] text-white p-7 sm:p-10 lg:p-14 overflow-hidden shadow-[0_24px_60px_-20px_rgba(0,45,22,0.28)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#006B35_0%,_transparent_62%)] opacity-85"
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 liquid-glass-emerald rounded-xl px-4 py-2">
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#8CCB20]">
                    01 · Zero Tuition Fees
                  </span>
                  <span aria-hidden="true" className="text-white/35 text-xs">
                    ·
                  </span>
                  <span className="text-xs font-semibold tracking-wider uppercase text-white">
                    Admissions Open · Limited Seats
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
                  Free Quality Education
                </h3>

                <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl">
                  Education provided free of cost, making quality learning accessible to students.
                  Admissions are now open for a limited time, with limited seats available.
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <button
                  type="button"
                  onClick={onNavigateContact}
                  className="inline-flex items-center justify-center gap-2.5 min-h-[50px] px-7 py-3.5 rounded-xl bg-[#8CCB20] hover:bg-[#9AD82E] active:scale-[0.98] text-[#003D1F] text-[15px] font-semibold tracking-tight transition-all duration-200 shadow-[0_12px_28px_-10px_rgba(0,0,0,0.35)] cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Register Now</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 2 & 3. Interactive Smart Boards + STEM-Based Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <Reveal delay={0.05} className="lg:col-span-7">
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-[#202820]/10 shadow-[0_20px_50px_-18px_rgba(0,45,22,0.12)] bg-[#003D1F]">
              <ResilientImage
                src="/assets/aistudio/nsse_smartboard_wall_clean_1795344138970_e3e3d310.jpg"
                alt="Interactive smart board mounted inside a classroom at Nawaz Sharif School of Eminence"
                className="w-full h-full object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#002814]/45 to-transparent"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-xs liquid-glass-overlay rounded-2xl px-4 py-3">
                <p className="text-xs font-semibold tracking-wider uppercase text-[#006B35]">
                  Modern Classroom Technology
                </p>
                <p className="mt-0.5 text-sm font-medium text-[#202820]">
                  Interactive Smart Boards &amp; Visual Learning
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-5 divide-y divide-[#202820]/10 border-y border-[#202820]/10">
            <Reveal delay={0.08}>
              <div className="py-7 sm:py-8">
                <span className="font-display text-sm font-semibold tabular-nums text-[#006B35]">
                  02
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#202820]">
                  Interactive Smart Boards
                </h3>
                <p className="mt-2.5 text-base text-[#202820]/75 leading-relaxed">
                  Modern interactive smart boards that make classroom learning engaging and
                  technology-driven.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="py-7 sm:py-8">
                <span className="font-display text-sm font-semibold tabular-nums text-[#006B35]">
                  03
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#202820]">
                  STEM-Based Education
                </h3>
                <p className="mt-2.5 text-base text-[#202820]/75 leading-relaxed">
                  Practical, activity-based learning focused on Science, Technology, Engineering,
                  and Mathematics.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 4. Dedicated Science & Robotics Laboratories (Editorial Typographic Treatment — No Image) */}
        <Reveal delay={0.05}>
          <div className="rounded-3xl bg-white border border-[#202820]/10 p-7 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-6">
                <span className="font-display text-sm font-semibold tabular-nums text-[#006B35]">
                  04
                </span>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#202820] leading-snug [text-wrap:balance]">
                  Dedicated Science &amp; Robotics Laboratories
                </h3>
                <p className="mt-3 text-base text-[#202820]/75 leading-relaxed">
                  Modern learning facilities for Computer Science, Biology, Chemistry, Physics, and
                  Robotics, encouraging practical exploration and innovation.
                </p>
              </div>

              <div className="lg:col-span-6 lg:border-l lg:border-[#202820]/10 lg:pl-10">
                <p className="text-xs font-semibold tracking-wider uppercase text-[#202820]/55">
                  Laboratory Disciplines
                </p>
                <div className="mt-4 divide-y divide-[#202820]/10 border-t border-b border-[#202820]/10">
                  {LAB_DISCIPLINES.map((subject, idx) => (
                    <div
                      key={subject}
                      className="py-3 flex items-center justify-between text-[15px] font-medium text-[#202820]"
                    >
                      <span>{subject}</span>
                      <span className="font-display text-xs tabular-nums text-[#006B35]">
                        0{idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 5 & 6. Playground & Sports + Green and Healthy Campus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <Reveal delay={0.05} className="lg:col-span-7">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#202820]/10 shadow-[0_20px_50px_-18px_rgba(0,45,22,0.12)] bg-white">
              <ResilientImage
                src="/assets/aistudio/open_air_campus_cropped.jpg"
                alt="Green campus lawns, trees, and brick walkway at Nawaz Sharif School of Eminence"
                className="w-full h-full object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#002814]/45 to-transparent"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-xs liquid-glass-overlay rounded-2xl px-4 py-3">
                <p className="text-xs font-semibold tracking-wider uppercase text-[#006B35]">
                  Open-Air Campus
                </p>
                <p className="mt-0.5 text-sm font-medium text-[#202820]">
                  Playgrounds &amp; Lush Green Spaces
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-5 divide-y divide-[#202820]/10 border-y border-[#202820]/10">
            <Reveal delay={0.08}>
              <div className="py-7 sm:py-8">
                <span className="font-display text-sm font-semibold tabular-nums text-[#006B35]">
                  05
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#202820]">
                  Playground &amp; Sports
                </h3>
                <p className="mt-2.5 text-base text-[#202820]/75 leading-relaxed">
                  Dedicated outdoor spaces where students can play, participate in physical
                  activities, and develop teamwork.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="py-7 sm:py-8">
                <span className="font-display text-sm font-semibold tabular-nums text-[#006B35]">
                  06
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#202820]">
                  Green and Healthy Campus
                </h3>
                <p className="mt-2.5 text-base text-[#202820]/75 leading-relaxed">
                  Greenery, open spaces, and a welcoming environment that makes learning enjoyable.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
