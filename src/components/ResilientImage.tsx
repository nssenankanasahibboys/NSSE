import React, { useState } from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fallbackLabel?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallbackLabel = 'Nawaz Sharif School of Eminence',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F8FAF7] via-[#EDF4EC] to-[#DCEAD8] text-[#00552B] p-8 text-center ${className}`}
      >
        <p className="font-display text-lg font-semibold tracking-tight text-[#006B35]">NSSE</p>
        <p className="mt-1 text-sm font-medium text-[#00552B]">{fallbackLabel}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
