import React from 'react';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
}) {
  const alignClasses = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`max-w-3xl flex flex-col ${alignClasses[align]} mb-12 sm:mb-16 ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border backdrop-blur-sm transition-all duration-300">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              dark ? 'bg-gold-400' : 'bg-gold-500'
            }`}
          />
          <span
            className={
              dark
                ? 'text-gold-300 border-gold-400/20'
                : 'text-forest-900/80 border-gold-500/20'
            }
          >
            {badge}
          </span>
        </div>
      )}

      {title && (
        <h2
          className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight ${
            dark ? 'text-ivory-100' : 'text-forest-950'
          }`}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed font-light ${
            dark ? 'text-ivory-300/80' : 'text-stone-600'
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative hairline divider */}
      <div
        className={`w-16 h-0.5 mt-5 rounded-full ${
          dark
            ? 'bg-gradient-to-r from-transparent via-gold-400 to-transparent'
            : 'bg-gradient-to-r from-transparent via-gold-500 to-transparent'
        }`}
      />
    </div>
  );
}
