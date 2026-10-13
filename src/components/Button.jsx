import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  type = 'button',
  target,
  rel,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group tracking-wide';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-forest-900 text-white hover:bg-forest-800 hover:shadow-luxury-hover border border-royal-700/30 focus:ring-royal-800',
    gold:
      'bg-gradient-to-r from-red-600 via-brushstroke-600 to-red-700 text-white font-semibold hover:shadow-lg hover:shadow-red-500/25 hover:brightness-105 border border-red-500/40 focus:ring-red-500',
    secondary:
      'bg-royal-50 text-royal-900 border border-royal-200 hover:bg-royal-100 hover:border-royal-400 focus:ring-royal-700',
    outline:
      'bg-transparent text-forest-950 border border-forest-900/30 hover:border-red-600 hover:text-red-600 hover:bg-red-50/50 focus:ring-red-500',
    outlineWhite:
      'bg-transparent text-white border border-white/30 hover:border-red-400 hover:text-red-300 hover:bg-white/10 focus:ring-red-400',
    whatsapp:
      'bg-[#25D366] text-white hover:bg-[#20ba5a] shadow-sm hover:shadow-md focus:ring-[#25D366] border border-white/20',
    ghost:
      'bg-transparent text-forest-950 hover:text-red-600 hover:bg-red-50/40 focus:ring-red-500',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
        className={combinedClasses}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
