import React from 'react';

/**
 * Official SHAHEEN TASTE SEMIYA Brand Logo Component (Transparent PNG)
 * 
 * Features:
 * - 100% Transparent background (no white box or container border)
 * - Authentic 1024x1024 high-resolution brand artwork
 * - Shaheen falcon bird in flight
 * - Stylized royal blue cursive "Shaheen" wordmark
 * - Crimson "TASTE SEMIYA" lettering
 * - Official red brush ring contour
 */
export default function ShaheenLogo({
  className = 'h-12 w-auto',
  fullyTransparent = false,
  alt = 'Shaheen Taste Semiya Official Logo',
  ...props
}) {
  const logoSrc = fullyTransparent
    ? '/images/shaheen_logo_transparent_all.png'
    : '/images/shaheen_logo_transparent.png';

  return (
    <div
      className="inline-flex items-center justify-center select-none"
      {...props}
    >
      <img
        src={logoSrc}
        alt={alt}
        className={`${className} object-contain filter drop-shadow-sm transition-transform duration-300 hover:scale-105`}
      />
    </div>
  );
}
