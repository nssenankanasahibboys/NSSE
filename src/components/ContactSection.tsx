import React from 'react';
import { ArrowUpRight, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { Reveal } from './Reveal';

const ADMISSION_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeiW5kkC2Q87Q4SDHfeqk23oJsKS7fFzePM_QJSHI97_9dzTw/viewform?usp=dialog';

const CAMPUS_MAP_URL = 'https://maps.app.goo.gl/LweuMu8R46ywCJU86';

interface ContactSectionProps {
  ctaButtonRef: React.RefObject<HTMLAnchorElement | null>;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ ctaButtonRef }) => {
  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#202820]/8"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#006B35]">
              Contact &amp; Admissions
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold tracking-tight text-[#202820] leading-[1.15] [text-wrap:balance]">
              Let&apos;s Start a Conversation.
            </h2>
            <p className="mt-4 text-base sm:text-[17px] text-[#202820]/75 leading-relaxed">
              Have questions about admissions? Our team is here to help. Contact us to learn more
              about the admission process and available opportunities.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Official School Contact Information & Clickable Campus Location */}
          <Reveal delay={0.05} className="lg:col-span-6 flex">
            <div className="w-full rounded-3xl bg-[#F8FAF7] border border-[#202820]/10 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-[#202820]">
                  Nawaz Sharif School of Eminence (NSSE)
                </h3>
                <p className="mt-1 text-sm text-[#006B35] font-medium">Nankana Sahib, Pakistan</p>
              </div>

              <div className="divide-y divide-[#202820]/10 border-y border-[#202820]/10">
                {/* Campus Address & Clickable Plus Code Location */}
                <div className="py-5 flex items-start gap-4">
                  <MapPin
                    className="w-5 h-5 text-[#006B35] mt-0.5 shrink-0"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#202820]/60">
                      Campus Location
                    </p>
                    <p className="mt-1 text-[15px] font-medium text-[#202820]">
                      2-Km Mangtanwala Road, Nankana Sahib, Pakistan.
                    </p>
                    <a
                      href={CAMPUS_MAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-[#006B35] hover:text-[#00552B] underline underline-offset-4 decoration-[#006B35]/35 hover:decoration-[#00552B] transition-colors"
                    >
                      <span>CPJP+2M Nankana Sahib, Pakistan</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                {/* Official Phone Number */}
                <div className="py-5 flex items-start gap-4">
                  <Phone
                    className="w-5 h-5 text-[#006B35] mt-0.5 shrink-0"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#202820]/60">
                      Phone Number
                    </p>
                    <a
                      href="tel:+923334046555"
                      className="mt-1 inline-block text-base font-medium tabular-nums text-[#202820] hover:text-[#006B35] transition-colors"
                    >
                      0333 404 6555
                    </a>
                  </div>
                </div>

                {/* Official Email Address */}
                <div className="py-5 flex items-start gap-4">
                  <Mail
                    className="w-5 h-5 text-[#006B35] mt-0.5 shrink-0"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#202820]/60">
                      Email Address
                    </p>
                    <a
                      href="mailto:nssenankanasahibboys@gmail.com"
                      className="mt-1 inline-block text-[15px] sm:text-base font-medium text-[#202820] hover:text-[#006B35] transition-colors break-all"
                    >
                      nssenankanasahibboys@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={CAMPUS_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl bg-white border border-[#202820]/10 hover:border-[#006B35]/35 px-5 py-4 transition-colors"
              >
                <div>
                  <p className="text-sm font-semibold text-[#202820] group-hover:text-[#006B35] transition-colors">
                    Open Campus Location in Maps
                  </p>
                  <p className="mt-0.5 text-xs text-[#202820]/65">
                    CPJP+2M Nankana Sahib, Pakistan
                  </p>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-[#006B35] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </a>
            </div>
          </Reveal>

          {/* Right Column: Official Google Form Admission Link */}
          <Reveal delay={0.1} className="lg:col-span-6 flex">
            <div className="w-full rounded-3xl bg-[#00552B] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#006B35_0%,_transparent_65%)] opacity-85"
              />

              <div className="relative space-y-5">
                <div className="inline-flex items-center liquid-glass-emerald rounded-xl px-3.5 py-1.5">
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#8CCB20]">
                    Online Admission Form
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-white leading-snug [text-wrap:balance]">
                  Apply Online for Admissions at NSSE
                </h3>

                <p className="text-base text-white/80 leading-relaxed max-w-lg">
                  Submit your child&apos;s admission details directly through the official Nawaz
                  Sharif School of Eminence online admission form. Seats are limited — please
                  complete the form to begin the admission inquiry process.
                </p>
              </div>

              <div className="relative mt-10 pt-8 border-t border-white/15 space-y-4">
                <a
                  ref={ctaButtonRef}
                  href={ADMISSION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 min-h-[52px] px-7 py-3.5 rounded-xl bg-[#8CCB20] hover:bg-[#9AD82E] active:scale-[0.98] text-[#003D1F] text-[15px] font-semibold tracking-tight transition-all duration-200 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.35)] whitespace-nowrap"
                >
                  <span>Online Registration Form</span>
                  <ExternalLink className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                </a>

                <p className="text-xs text-white/70 leading-relaxed">
                  Opens the official NSSE Google Form in a new tab. For direct assistance, call{' '}
                  <a
                    href="tel:+923334046555"
                    className="text-white underline underline-offset-2 hover:text-[#8CCB20]"
                  >
                    0333 404 6555
                  </a>
                  .
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
