import React from 'react';

interface NsseLogoProps {
  variant?: 'default' | 'light';
  className?: string;
}

/**
 * Renders the official uploaded Nawaz Sharif School of Eminence logo
 * unmodified and undistorted.
 */
export const NsseLogo: React.FC<NsseLogoProps> = ({ variant = 'default', className = 'w-10 h-10' }) => {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full overflow-hidden shrink-0 ${
        variant === 'light' ? 'bg-white p-0.5 shadow-sm' : ''
      } ${className}`}
    >
      <img
        src="/assets/aistudio/nsse_logo_crest.png"
        alt="Nawaz Sharif School of Eminence official crest logo"
        className="w-full h-full object-contain"
        decoding="async"
      />
    </span>
  );
};
